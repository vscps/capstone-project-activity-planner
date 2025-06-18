import useFavorites from "@/hooks/useFavorites";
import useFetchAllPages from "@/hooks/useFetchAllPages";
import Activity from "@/components/Activity/Activity";
import ButtonRow from "../ButtonRow/ButtonRow";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {
  Container,
  Listing,
  ErrorMessage,
  EndMessage,
} from "./FavoriteList.styles";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function FavoriteList() {
  const {
    data: activities,
    error,
    isLoading,
  } = useFetchAllPages("api/activities");

  const [favorites] = useFavorites();

  if (error) {
    return <ErrorMessage>Something went wrong</ErrorMessage>;
  }

  if (isLoading) {
    return <LoadingSpinner variant="page" />;
  }

  return (
    <Container>
      <ButtonRow>
        <ToggleSwitch initialState={true}></ToggleSwitch>
      </ButtonRow>
      <Listing>
        {favorites.length > 0 ? (
          <>
            {activities.map((activity) =>
              favorites.includes(activity._id) ? (
                <Activity data={activity} key={activity._id || activity.id} />
              ) : (
                ""
              )
            )}
          </>
        ) : (
          <EndMessage>
            You have not marked any activities as favorites yet.
          </EndMessage>
        )}
      </Listing>
    </Container>
  );
}
