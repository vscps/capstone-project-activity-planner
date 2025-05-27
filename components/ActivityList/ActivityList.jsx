import { useEffect, useRef } from "react";
import useSWRInfinite from "swr/infinite";
import Activity from "@/components/Activity/Activity";
import {
  Container,
  ErrorMessage,
  LoadingMessage,
  EndMessage,
} from "./ActivityList.styles";

const PAGE_LIMIT = 5;

// This component is based on this blog post: https://www.dhiwise.com/post/mastering-data-fetching-with-nextjs-swr-a-comprehensive-guide#optimizing-performance-and-ux
export default function ActivityList() {
  const loadMoreRef = useRef(null);

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.meta.hasNextPage) return null;
    if (pageIndex === 0 || !previousPageData) {
      return `/api/activities?page=1&limit=${PAGE_LIMIT}`;
    }
    const nextPage = previousPageData.meta.page + 1;
    return `/api/activities?page=${nextPage}&limit=${PAGE_LIMIT}`;
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite(getKey, {
    revalidateFirstPage: false,
  });

  const activities = data ? data.flatMap((page) => page.data) : [];

  const isLoading = !data && !error;
  const hasMore = data && data[data.length - 1].meta.hasNextPage;

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

  if (error) {
    return <ErrorMessage>Something get wrong</ErrorMessage>;
  }

  if (isLoading) {
    // Todo: Create loading spinner component or skeleton
    return <LoadingMessage>Loading activities...</LoadingMessage>;
  }

  return (
    <Container>
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
        <EndMessage>No activities found</EndMessage>
      )}
    </Container>
  );
}
