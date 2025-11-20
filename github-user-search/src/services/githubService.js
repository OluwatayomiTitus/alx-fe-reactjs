import axios from "axios";

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  try {
    // Build query string
    let query = "";
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`,
      {
        headers: {
          Authorization: `token ${apiKey}`,
        },
      }
    );

    return response.data.items; // returns array of users
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
