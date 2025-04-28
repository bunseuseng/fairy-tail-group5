// Fetch all favorites
export async function fetchFavorites() {
  try {
    const response = await fetch("https://your-api.com/favorites");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw error;
  }
}

// Unfavorite an item
export async function unfavoriteItem(itemId) {
  try {
    await fetch(`https://your-api.com/favorites/${itemId}`, {
      method: "DELETE",
    });
    console.log("Item unfavorited!");
  } catch (error) {
    console.error("Error unfavoriting item:", error);
    throw error;
  }
}
