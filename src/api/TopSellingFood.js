export const toSellingFoods = () => {
  return fetch(`${import.meta.env.VITE_API_URL}/top_foods`).then((res) =>
    res.json()
  );
};
