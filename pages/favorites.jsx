import FavoriteList from "@/components/FavoriteList/FavoriteList";
import { Container } from "@/components/ActivityDetail/ActivityDetail.styles";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";

export default function HomePage() {
  return (
    <Container>
      <ToggleSwitch initialState={true} />
      <FavoriteList />
    </Container>
  );
}
