import ActivityList from "@/components/ActivityList/ActivityList";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import { Container } from "@/components/ActivityDetail/ActivityDetail.styles";

export default function HomePage() {
  return (
    <Container>
      <ToggleSwitch initialState={false} />
      <ActivityList />
    </Container>
  );
}
