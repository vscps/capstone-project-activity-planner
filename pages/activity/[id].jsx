import { useRouter } from "next/router";
import useSWR from "swr";
import ActivityDetail from "@/components/ActivityDetail/ActivityDetail";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/activities/${id}` : null);

  if (error) return <div>Something went wrong</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <ActivityDetail data={data.data} />
    </>
  );
}
