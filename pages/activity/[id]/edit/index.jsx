import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR, { mutate } from "swr";

import { useUpdateActivity } from "@/hooks/useActivityMutations";
import useFetchAllPages from "@/hooks/useFetchAllPages";

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
  const {
    data: categoriesData,
    error: categoriesError,
    isValidating: isValidatingCategories,
  } = useFetchAllPages("/api/categories");

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

  // Map category names from activity data to the corresponding IDs from the categoriesData collection
  const selectedCategoryIds = data.categories
    .map((catName) => {
      const category = categoriesData.find(
        (catData) => catData.name === catName
      );
      return category ? category.id : null;
    })
    .filter((id) => id !== null);

  const handleSubmit = async (data) => {
    try {
      const updatedActivity = await updateActivity(id, data);

      mutate(`/api/activities/${id}`);
      setIsEditingState(false);

      setSuccessMessage(
        `Activity "${updatedActivity.title}" updated successfully!`
      );
    } catch (err) {
      console.log("Failed to update activity.");
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
              activityData={data}
              categoriesData={categoriesData}
              selectedCategoryIds={selectedCategoryIds}
            />
            {error && <>{`Unable to update activity`}</>}
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
      </Container>
    </>
  );
}
