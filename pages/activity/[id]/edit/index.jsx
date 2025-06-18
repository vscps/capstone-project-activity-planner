import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR, { mutate } from "swr";

import { useUpdateActivity } from "@/hooks/useActivityMutations";
import useFetchAllPages from "@/hooks/useFetchAllPages";
import useActivityPreviewMode from "@/hooks/useActivityPreviewMode";

import ActivityForm from "@/components/ActivityForm/ActivityForm";
import Button from "@/components/Button/Button";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { Container } from "@/components/ActivityList/ActivityList.styles";

export default function UpdatePage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data,
    error: dataError,
    isValidating: isValidatingActivity,
  } = useSWR(id ? `/api/activities/${id}` : null);

  const { updateActivity, isLoading, error } = useUpdateActivity(id);

  const [successMessage, setSuccessMessage] = useState("");
  const [isEditingState, setIsEditingState] = useState(true);
  const [isPreviewMode, setPreviewMode] = useState(false);

  const {
    data: categoriesData,
    error: categoriesError,
    isValidating: isValidatingCategories,
  } = useFetchAllPages("/api/categories");

  const { activityData, selectedCategoryIds, removeItem, setPreviewData } =
    useActivityPreviewMode({ baseData: data, categoriesData });

  const isInitialLoading =
    (!data && isValidatingActivity) ||
    (!categoriesData && isValidatingCategories);

  if (dataError || categoriesError) {
    return <div>Unable to load data</div>;
  }

  if (isInitialLoading || (isLoading && isEditingState)) {
    return <LoadingSpinner variant="page" />;
  }

  if (!data || !categoriesData) {
    return <div>Data not found</div>;
  }

  const handleSubmit = async (formData) => {
    try {
      const updatedActivity = await updateActivity(id, formData);
      mutate(`/api/activities/${id}`);
      setIsEditingState(false);
      setSuccessMessage(
        `Activity "${updatedActivity.title}" updated successfully!`
      );
      removeItem();
    } catch (updateError) {
      console.error("Failed to update activity.", updateError);
    }
  };

  const titleMessage = isEditingState
    ? `Edit activity "${data.title}"`
    : successMessage;

  return (
    <>
      <Head>
        <title>{titleMessage}</title>
      </Head>
      <Container>
        <h1>{titleMessage}</h1>
        {isEditingState ? (
          <>
            <ActivityForm
              onSubmit={handleSubmit}
              isLoading={isLoading}
              submitButtonText="Update Activity"
              successMessage={successMessage}
              isEditingState={true}
              isPreviewMode={isPreviewMode}
              setPreviewMode={setPreviewMode}
              activityData={activityData}
              categoriesData={categoriesData}
              selectedCategoryIds={selectedCategoryIds}
            />
            {error && <p>Unable to update activity</p>}
          </>
        ) : (
          <>
            <Button
              text={"Continue editing"}
              onClick={() => setIsEditingState(true)}
              purpose="submit"
            />
            <p>
              or go back to the{" "}
              <Link href={`../${data._id}`}>
                {data.title} activity details page.
              </Link>
            </p>
          </>
        )}
        {isPreviewMode && <p>Preview mode is enabled.</p>}
      </Container>
    </>
  );
}
