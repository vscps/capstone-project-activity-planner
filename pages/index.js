import data from "../public/assets/sampleActivities.json";
{
  type: "json";
}
import ActivityList from "@/components/ActivityList";
export default function HomePage() {
  console.log(data);
  console.log(typeof data);
  return (
    <div>
      <ActivityList data={data}></ActivityList>
    </div>
  );
}
