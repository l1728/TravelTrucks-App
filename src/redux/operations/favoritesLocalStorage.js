

export const loadFavoritesFromLocalStorage = () => {
  try {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
    return savedFavorites ? savedFavorites : [];
  } catch (error) {
    console.error('Could not load favorites from localStorage:', error);
    return [];
  }
};

export const saveFavoritesToLocalStorage = (favorites) => {
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Could not save favorites to localStorage:', error);
  }
};
