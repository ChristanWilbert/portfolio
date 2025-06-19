async function handleChatRequest(query) {
  const path = process.env.REACT_APP_BackendURL;
  try {
    // Send POST request to the backend API
    const response = await fetch(
      path, // Use the backend URL from environment variables
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set headers
        },
        body: JSON.stringify({ message: query }), // Include message in the body
      }
    ).catch((error) => {
      throw new Error(
        "Network error occurred while fetching backend server response."
      );
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    // Parse JSON response
    const data = await response.json();
    return data.reply; // Assuming the backend returns { responseText: "..." }
  } catch (error) {
    console.error("Error while fetching chat response:");
    return "Something went wrong. Please try again later."; // Handle errors gracefully
  }
}

export default handleChatRequest;
