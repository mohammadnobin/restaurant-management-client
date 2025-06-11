export const myaddedFood = (email) => {
  return fetch(`${import.meta.env.VITE_API_URL}/all_foods?email=${email}`).then(
    (res) => res.json()
  );
};
