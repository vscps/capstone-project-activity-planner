import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

import ActivityForm from "@/components/ActivityForm/ActivityForm";
import { useCreateActivity } from "@/hooks/useActivityMutations";
import useFetchAllPages from "@/hooks/useFetchAllPages";
import useActivityPreviewMode from "@/hooks/useActivityPreviewMode";
import { Container } from "@/components/ActivityList/ActivityList.styles";

export default function CreatePage() {
  const router = useRouter();
  const { createActivity, isLoading, error } = useCreateActivity();
  const [successMessage, setSuccessMessage] = useState("");

  const { data: categoriesData } = useFetchAllPages("/api/categories");

  const { activityData, selectedCategoryIds, removeItem } =
    useActivityPreviewMode({ baseData: null, categoriesData });

  const handleSubmit = async (formData) => {
    try {
      const newActivity = await createActivity(formData);
      setSuccessMessage(`Activity "${formData.title}" created successfully!`);
      removeItem();
      setTimeout(() => {
        router.push(`/activity/${newActivity._id}`);
      }, 2500);
    } catch (err) {
      console.log("Failed to create activity.");
    }
  };

  return (
    <>
      <Head>
        <title>Create a new activity</title>
      </Head>
      <Container>
        <h1>Create a new activity</h1>
        {error && <>Something went wrong</>}
        <ActivityForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          submitButtonText="Create Activity"
          successMessage={successMessage}
          isEditingState={false}
          isPreviewMode={false}
          setPreviewMode={() => {}}
          activityData={activityData}
          categoriesData={categoriesData}
          selectedCategoryIds={selectedCategoryIds}
        />
      </Container>
    </>
  );
}
