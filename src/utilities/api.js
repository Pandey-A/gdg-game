
// try 1

// New api
// const url =
//   "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LOwAyldXGa2Rle8qWWi7/scores";

// // Submit data to the Api
// export const postScore = async () => {
//   const data = {
//     user: localStorage.getItem("username"),
//     teamScore: localStorage.getItem("teamScore"),
//   };

//   const response = await fetch(url, {
//     method: "POST",
//     cache: "no-cache",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   return response.json();
// };

// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LOwAyldXGa2Rle8qWWi7/scores';

// // Submit data to the Api
// export const postScore = async () => {
//   // Retrieve the teamName and teamScore from localStorage
//   const teamName = localStorage.getItem('teamName');
//   const teamScore = localStorage.getItem('teamScore');

//   // Check if the values exist in localStorage
//   if (!teamName || !teamScore) {
//     return 'Error: Missing team name or score in localStorage.';
//   }

//   const data = {
//     user: teamName, // Using teamName as the user
//     score: parseInt(teamScore), // Convert teamScore to integer
//   };

//   const response = await fetch(url, {
//     method: 'POST',
//     cache: 'no-cache',
//     headers: {
//       'Content-Type': 'application/json',
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
