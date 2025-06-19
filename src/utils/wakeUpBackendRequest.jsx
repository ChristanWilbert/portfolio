async function wakeUpBackendRequest() {
  const path1 = process.env.REACT_APP_BackendURL;
  const path2 = process.env.REACT_APP_BackendURL2;
  try {
    await fetch(path2).catch((error) => {
      console.error(
        "Network error occurred while fetching backend server response:"
      );
    });
    await fetch(path1).catch((error) => {
      console.error(
        "Network error occurred while fetching backend server response:"
      );
    });
  } catch (error) {
    console.error("Error while fetching chat Server:");
    return "Something went wrong. Please try again later."; // Handle errors gracefully
  }
}

export default wakeUpBackendRequest;
