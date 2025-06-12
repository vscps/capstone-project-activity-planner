import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import ActivityForm from "@/components/ActivityForm/ActivityForm";
import { useUpdateActivity } from "@/hooks/useActivityMutations";
import useFetchAllPages from "@/hooks/useFetchAllPages";
import useSWR from "swr";

export default function UpdatePage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, dataError } = useSWR(id ? `/api/activities/${id}` : null);

  const { updateActivity, isLoading, error } = useUpdateActivity(id);
  const [successMessage, setSuccessMessage] = useState("");
  const [isEditingState, setIsEditingState] = useState(true);
  const { data: categoriesData } = useFetchAllPages("/api/categories");

  if (dataError) return <div>Unable to load activitiy data</div>;
  if (!data) return <div>Loading...</div>;

  // Map category names from activity data to the corresponding IDs from the categoriesData collection
  const selectedCategoryIds = data.categories
    .map((catName) => {
      const category = categoriesData.find((c) => c.name === catName);
      return category ? category.id : null;
    })
    .filter((id) => id !== null);

  const handleSubmit = async (data) => {
    try {
      const updatedActivity = await updateActivity(id, data);
      console.log(JSON.stringify(updatedActivity));
      setSuccessMessage(
        `Activity "${updatedActivity.title}" updated successfully!`
      );
    } catch (err) {
      console.log("Failed to update activity.");
    }
  };
  console.log(successMessage);
  return (
    <>
      <Head>
        <title>Edit activity {`${data.title}`}</title>
      </Head>
      <main>
        <h1>Edit activity {`"${data.title}"`}</h1>

        <ActivityForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          submitButtonText="Create Activity"
          successMessage={successMessage}
          isEditingState={isEditingState}
          activityData={data}
          categoriesData={categoriesData}
          selectedCategoryIds={selectedCategoryIds}
        />
        {error && <>{`Unable to update activity`}</>}
      </main>
    </>
  );
}
