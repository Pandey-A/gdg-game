// // New api
// const url =
//   "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LOwAyldXGa2Rle8qWWi7/scores";

// const username = localStorage.getItem("username");
// const teamScore = localStorage.getItem("teamScore");

// // Submit data to the Api
// export const postScore = async (username, teamScore) => {
//   const data = {
//     user: username,
//     teamScore,
//   };

//   const response = await fetch(url, {
//     method: "POST",
//     cache: "no-cache",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   const result = await response.json();

//   if (response.status === 200) {
//     return true;
//   }

//   return result.message;
// };

// // Get results from the Api
// export const getScores = async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data.result;
// };

// try 1

// New api
const url =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LOwAyldXGa2Rle8qWWi7/scores";

// Submit data to the Api
export const postScore = async () => {
  const data = {
    user: localStorage.getItem("username"),
    teamScore: localStorage.getItem("teamScore"),
  };

  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};