import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

import ActivityDetail from "@/components/ActivityDetail/ActivityDetail";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/activities/${id}` : null);

  if (error) return <div>Something went wrong</div>;
  if (!data) return <LoadingSpinner variant="page" />;

  return (
    <>
      <Head>
        <title>Activity: {data.title}</title>
        <meta name="description" content="Your activity details" />
      </Head>
      <ActivityDetail data={data} />
    </>
  );
}
