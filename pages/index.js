import data from "../public/assets/sampleActivities.json";
{
  type: "json";
}
import ActivityList from "@/docs/components/ActivityList";
export default function HomePage() {
  console.log(data);
  console.log(typeof data);
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ActivityList data={data}></ActivityList>
    </div>
  );
}
