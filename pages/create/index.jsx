import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import ActivityForm from "@/components/ActivityForm/ActivityForm";
import { useCreateActivity } from "@/hooks/useActivityMutations";
import useFetchAllPages from "@/hooks/useFetchAllPages";

export default function CreatePage() {
  const router = useRouter();
  const { createActivity, isLoading, error } = useCreateActivity();
  const [successMessage, setSuccessMessage] = useState("");

  const { data: categoriesData } = useFetchAllPages("/api/categories");

  const handleSubmit = async (data) => {
    try {
      const newActivity = await createActivity(data);

      setSuccessMessage(
        `Activity "${newActivity.title}" created successfully!`
      );

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
        <title>create</title>
      </Head>
      <main>
        <h1>Create a new activity</h1>
        {error && <>{`Something went wrong`}</>}
        <ActivityForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          submitButtonText="Create Activity"
          successMessage={successMessage}
          categoriesData={categoriesData}
        />
      </main>
    </>
  );
}
