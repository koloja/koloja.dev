// js/main.js
const apiRoutes = {
  '/api/hello': () => {
    return {
      message: 'Hello from the /api/hello endpoint',
    };
  },
  // Add more routes and handlers as needed
};

function handleAPIRequest(url) {
  const handler = apiRoutes[url];
  if (handler) {
    const response = handler();
    return Promise.resolve(response);
  } else {
    return Promise.reject('Endpoint not found');
  }
}

// Event listener for URL changes (routing)
window.addEventListener('popstate', () => {
  const currentPath = window.location.pathname;
  handleAPIRequest(currentPath)
    .then((response) => {
      // Simulate an API response by displaying the JSON data
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Initial routing to handle the URL when the page loads
const initialPath = window.location.pathname;
handleAPIRequest(initialPath)
  .then((response) => {
    // Simulate an API response by displaying the JSON data
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
