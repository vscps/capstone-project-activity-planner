import { useRouter } from "next/router";
import useSWR from "swr";
import { Fragment } from "react";
import ActivityDetail from "@/components/ActivityDetail/ActivityDetail";

export default function Page() {
  const { data, error } = useSWR("/api/activities");
  const router = useRouter();
  const test = router.query;
  const { id } = router.query;

  console.log("The current ID is " + id);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const currentActivity = data.data.find((activity) => activity.id === id);
  return (
    <Fragment>
      <ActivityDetail data={currentActivity}></ActivityDetail>
    </Fragment>
  );
}
