import { FavoriteIcon, RemoveFavoriteIcon } from "./Favorite.styles";

import useFavorites from "../../hooks/useFavorites";

export default function Favorite({ id }) {
  const [_, isFavorite, toggleFavorite] = useFavorites();
  return (
    <>
      {isFavorite(id) ? (
        <RemoveFavoriteIcon onClick={() => toggleFavorite(id)} />
      ) : (
        <FavoriteIcon onClick={() => toggleFavorite(id)} />
      )}
    </>
  );
}
