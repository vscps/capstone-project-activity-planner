import CreateActivityForm from "@/components/CreateActivityForm/CreateActivityForm";
import Head from "next/head";

export default function CreatePage() {
  return (
    <>
      <Head>
        <title>create</title>
      </Head>
      <main>
        <h1>Create a new activity</h1>
        <CreateActivityForm />
      </main>
    </>
  );
}
