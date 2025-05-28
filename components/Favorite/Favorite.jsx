import { FavoriteIcon, RemoveFavoriteIcon } from "./Favorite.styles";

import useFavorites from "./useFavorites";

export default function Favorite(id) {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  return (
    <>
      {!isFavorite ? (
        <FavoriteIcon onClick={() => toggleFavorite(id)} />
      ) : (
        <RemoveFavoriteIcon onClick={() => toggleFavorite(id)} />
      )}
    </>
  );
}
