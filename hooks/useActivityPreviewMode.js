// hooks/useActivityPreviewMode.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";

/**
 * This hook handles the preview mode, local storage hydration, category ID mapping, and cleanup for both the edit and create pages.
 */
export default function useActivityPreviewMode({ baseData, categoriesData }) {
  const router = useRouter();

  const [previewData, setPreviewData, { removeItem }] = useLocalStorageState(
    "previewActivityData",
    { defaultValue: null }
  );

  useEffect(() => {
    const clearOnRouteChange = () => removeItem();
    router.events.on("routeChangeStart", clearOnRouteChange);
    return () => {
      router.events.off("routeChangeStart", clearOnRouteChange);
    };
  }, [router, removeItem]);

  const activityData =
    previewData && (previewData._id || !baseData) ? previewData : baseData;

  const selectedCategoryIds = (activityData?.categories || [])
    .map((value) => {
      const isName = typeof value === "string" && isNaN(value);
      if (isName) {
        const category = categoriesData?.find((c) => c.name === value);
        return category?.id ?? null;
      }
      return value;
    })
    .filter((id) => id !== null);

  return {
    activityData,
    selectedCategoryIds,
    setPreviewData,
    removeItem,
  };
}
