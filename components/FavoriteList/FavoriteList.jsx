import useFavorites from "@/hooks/useFavorites";
import useFetchAllPages from "@/hooks/useFetchAllPages";
import Activity from "@/components/Activity/Activity";
import {
  Container,
  ErrorMessage,
  LoadingMessage,
  EndMessage,
} from "./FavoriteList.styles";

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
    // Todo: Create loading spinner component or skeleton
    return <LoadingMessage>Loading activities...</LoadingMessage>;
  }

  return (
    <Container>
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
    </Container>
  );
}
