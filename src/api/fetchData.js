import axios from "axios";

/**
 * Fetches data from a given URL and updates the state with the fetched data.
 *
 * @param {string} url - The URL from which to fetch data.
 * @param {function} setData - The state updater function to set the fetched data.
 *
 * This function performs an HTTP GET request to the specified URL using the Axios library.
 * If the request is successful, the response data is passed to the `setData` function to update
 * the state in the component. If an error occurs during the request, it is logged to the console.
 */
export const fetchData = async (url, setData) => {
  try {
    // Perform an HTTP GET request to the specified URL
    const response = await axios.get(url);

    // Update the state with the fetched data
    setData(response.data);
  } catch (error) {
    // Log any errors that occur during the request
    console.error("Error fetching data: ", error);
  }
};
