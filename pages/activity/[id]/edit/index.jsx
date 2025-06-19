import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR, { mutate } from "swr";

import { useUpdateActivity } from "@/hooks/useActivityMutations";
import useFetchAllPages from "@/hooks/useFetchAllPages";
import useActivityPreviewMode from "@/hooks/useActivityPreviewMode";

import ActivityForm from "@/components/ActivityForm/ActivityForm";
import ActivityPreview from "@/components/ActivityPreview/ActivityPreview";
import Button from "@/components/Button/Button";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { Container } from "@/components/ActivityList/ActivityList.styles";
import {
  PaddingContainer,
  SubmitButtonRow,
} from "@/components/ActivityForm/ActivityForm.styles";

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
  const [isPreviewMode, setIsPreviewMode] = useState(false);

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
      setSuccessMessage(`Activity "${formData.title}" updated successfully!`);
      removeItem();
    } catch (updateError) {
      console.error("Failed to update activity.", updateError);
    }
  };

  const titleMessage = isEditingState ? `Edit "${data.title}"` : successMessage;
  return (
    <>
      <Head>
        <title>{titleMessage}</title>
        <meta name="description" content="Edit your activity" />
      </Head>
      <PaddingContainer>
        <h1>{titleMessage}</h1>
        {isEditingState & !isPreviewMode ? (
          <>
            <ActivityForm
              key={isPreviewMode ? "preview" : JSON.stringify(activityData)}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              submitButtonText="Update"
              successMessage={successMessage}
              isEditingState={true}
              isPreviewMode={isPreviewMode}
              setIsPreviewMode={setIsPreviewMode}
              activityData={activityData}
              categoriesData={categoriesData}
              selectedCategoryIds={selectedCategoryIds}
            />
            {error && <p>Unable to update activity</p>}
          </>
        ) : (
          ""
        )}

        {!isEditingState & !isPreviewMode ? (
          <>
            <SubmitButtonRow>
              {" "}
              <Button
                text={"Continue editing"}
                onClick={() => setIsEditingState(true)}
                purpose="edit"
              />
              <Button
                text={"Back to activity"}
                onClick={() => setIsEditingState(true)}
                purpose="back"
                as={"a"}
                href={`../${data._id}`}
              />
            </SubmitButtonRow>
          </>
        ) : (
          ""
        )}
        {isPreviewMode && (
          <>
            <ActivityPreview
              data={activityData}
              categoriesData={categoriesData}
              selectedCategoryIds={selectedCategoryIds}
              isEditingState={true}
            />
            <Button
              text={"Continue editing"}
              onClick={() => setIsPreviewMode(false)}
              purpose="submit"
            />
            {console.log(isEditingState)}
          </>
        )}
      </PaddingContainer>
    </>
  );
}
