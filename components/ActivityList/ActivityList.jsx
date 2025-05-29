import { useEffect, useRef, useState } from "react";
import useSWRInfinite from "swr/infinite";
import Activity from "@/components/Activity/Activity";
import ActivityFilter from "@/components/ActivityFilter/ActivityFilter";
import {
  Container,
  ErrorMessage,
  LoadingMessage,
  EndMessage,
} from "./ActivityList.styles";

const PAGE_LIMIT = 5;

// This component is based on this blog post: https://www.dhiwise.com/post/mastering-data-fetching-with-nextjs-swr-a-comprehensive-guide#optimizing-performance-and-ux
export default function ActivityList() {
  const [activeFilters, setActiveFilters] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    categories: [],
    country: [],
  });
  const loadMoreRef = useRef(null);

  const createFilterParams = (filters) => {
    const params = [];

    Object.entries(filters).forEach(([key, values]) => {
      if (values && values.length > 0) {
        params.push(`${key}=${encodeURIComponent(values.join(","))}`);
      }
    });

    return params.length > 0 ? `&${params.join("&")}` : "";
  };

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.meta.hasNextPage) return null;

    const filterParams = createFilterParams(activeFilters);

    if (pageIndex === 0 || !previousPageData) {
      return `/api/activities?page=1&limit=${PAGE_LIMIT}${filterParams}`;
    }

    const nextPage = previousPageData.meta.page + 1;
    return `/api/activities?page=${nextPage}&limit=${PAGE_LIMIT}${filterParams}`;
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite(getKey, {
    revalidateFirstPage: false,
  });

  const activities = data ? data.flatMap((page) => page.data) : [];

  const isLoading = !data && !error;
  const hasMore = data && data[data.length - 1]?.meta?.hasNextPage;

  useEffect(() => {
    setSize(1);
  }, [activeFilters, setSize]);

  useEffect(() => {
    if (data && data.length > 0) {
      const categories = new Set();
      const countries = new Set();

      data.forEach((page) => {
        page.data.forEach((activity) => {
          if (activity.categories && Array.isArray(activity.categories)) {
            activity.categories.forEach((category) => {
              categories.add(category);
            });
          }

          if (activity.country) {
            countries.add(activity.country);
          }
        });
      });

      setFilterOptions({
        categories: Array.from(categories).sort(),
        country: Array.from(countries).sort(),
      });
    }
  }, [data]);

  useEffect(() => {
    if (!hasMore || isValidating) return;

    const currentElement = loadMoreRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSize(size + 1);
        }
      },
      { rootMargin: "100px", threshold: 0.5 /*delay: 2000 */ }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasMore, isValidating, setSize, size]);

  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);
  };

  if (error) {
    return <ErrorMessage>Something went wrong</ErrorMessage>;
  }

  if (isLoading) {
    // Todo: Create loading spinner component or skeleton
    return <LoadingMessage>Loading activities...</LoadingMessage>;
  }

  return (
    <Container>
      <ActivityFilter
        filterOptions={filterOptions}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        isOpen={isFilterOpen}
        onToggle={setIsFilterOpen}
      />

      {activities.length > 0 ? (
        <>
          {activities.map((activity) => (
            <Activity data={activity} key={activity._id || activity.id} />
          ))}

          {hasMore ? (
            <div ref={loadMoreRef}>
              {isValidating && (
                <LoadingMessage>Loading more activities...</LoadingMessage>
              )}
            </div>
          ) : (
            <EndMessage>No more activities available</EndMessage>
          )}
        </>
      ) : (
        <EndMessage>No activities found matching your filters</EndMessage>
      )}
    </Container>
  );
}
