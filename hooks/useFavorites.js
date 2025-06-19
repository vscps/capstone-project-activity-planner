import useLocalStorageState from "use-local-storage-state";

export default function useFavorites() {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

  function isFavorite(id) {
    return favorites.includes(id);
  }

  function toggleFavorite(id) {
    setFavorites(
      isFavorite(id)
        ? favorites.filter((favId) => favId !== id)
        : [...favorites, id]
    );
  }

  return [favorites, isFavorite, toggleFavorite];
}
