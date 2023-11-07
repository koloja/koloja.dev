function handleAPIRequest(url) {
  if (url === '/api/hello') {
    return fetch('/api/hello.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Simulate an API response by displaying the JSON data
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  } else {
    return Promise.reject('Endpoint not found');
  }
}

// Event listener for URL changes (routing)
window.addEventListener('popstate', () => {
  const currentPath = window.location.pathname;
  handleAPIRequest(currentPath);
});

// Initial routing to handle the URL when the page loads
const initialPath = window.location.pathname;
handleAPIRequest(initialPath);
