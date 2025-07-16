
const username = 'mkkamrulislampk@gmail.com';
const password = 'mZ7j klzt wqH7 hdzu 6Dip ORzS';
const encodedCredentials = btoa(`${username}:${password}`);

// Create a Promise that will resolve with the fetched data
const projectsData = (async () => {
  try {
    const response = await fetch('https://api-portfolio.kamruldevs.com/wp-json/jet-cct/portfolio', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${encodedCredentials}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    // console.log("Portfolio data fetched successfully.", data); // Corrected typo: 'projects' to 'data'
    return data; //Resolve the promise with the fetched data
  } catch (error) {
    console.error("Failed to fetch portfolio data:", error);
    // Important: Reject the promise or resolve with an empty array/error state
    // so consumers know something went wrong.
    return []; // Resolve with an empty array on error, or you could throw error again.
  }
})();

// Export the Promise.
// Any module importing this will need to `await` it.

export default projectsData;