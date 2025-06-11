import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import ActivityForm from "@/components/ActivityForm/ActivityForm";
import { useCreateActivity } from "@/hooks/useActivityMutations";
import useFetchAllPages from "@/hooks/useFetchAllPages";
import useSWR from "swr";

export default function UpdatePage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, dataError } = useSWR(id ? `/api/activities/${id}` : null);

  const { createActivity, isLoading, error } = useCreateActivity();
  const [successMessage, setSuccessMessage] = useState("");
  const [isEditingState, setIsEditingState] = useState(true);
  const { data: categoriesData } = useFetchAllPages("/api/categories");

  if (dataError) return <div>Unable to load activitiy data</div>;
  if (!data) return <div>Loading...</div>;

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
      console.log("Failed to update activity.");
    }
  };

  return (
    <>
      <Head>
        <title>Update activity {`${data.title}`}</title>
      </Head>
      <main>
        <h1>Update activity {`"${data.title}"`}</h1>
        {error && <>{`Something went wrong`}</>}
        <ActivityForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          submitButtonText="Create Activity"
          successMessage={successMessage}
          isEditingState={isEditingState}
          activityData={data}
          categories={categoriesData}
        />
      </main>
    </>
  );
}
