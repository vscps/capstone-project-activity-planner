import useSWR from "swr";

const fetchAllPages = async (endpoint) => {
  const firstPage = await fetch(`${endpoint}?page=1&limit=10`).then((res) =>
    res.json()
  );

  if (!firstPage.data) {
    throw new Error("Invalid response format");
  }

  let allData = [...firstPage.data];

  if (firstPage.meta.totalPages > 1) {
    const remainingPages = [];
    for (let page = 2; page <= firstPage.meta.totalPages; page++) {
      remainingPages.push(
        fetch(`${endpoint}?page=${page}&limit=10`).then((res) => res.json())
      );
    }

    const remainingResults = await Promise.all(remainingPages);
    remainingResults.forEach((result) => {
      if (result.data) {
        allData = [...allData, ...result.data];
      }
    });
  }

  return allData;
};

/**
 * Custom hook to fetch all pages of data from a given endpoint.
 *
 * Note: Dont use this hook for endpoints that return large datasets, as it fetches all pages at once.
 * Use with caution to avoid performance issues.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Object} - An object containing the fetched data, loading state, error and isValidating.
 */
export default function useFetchAllPages(endpoint) {
  const { data, error, isLoading, isValidating } = useSWR(
    endpoint ? `all-pages-${endpoint}` : null,
    () => fetchAllPages(endpoint)
  );

  return { data: data || [], isLoading, error, isValidating };
}
