// Get references to HTML elements
const categoryInput = document.getElementById('categoryInput'); // Input field for category
const searchButton = document.getElementById('searchButton'); // Search button
const gallery = document.querySelector('.gallery'); // Container for displaying images

// Add an event listener to the search button
searchButton.addEventListener('click', () => {
    // Get the category entered by the user from the input field
    const category = categoryInput.value;
    
    // Check if the category is empty, and if so, do nothing
    if (category.trim() === '') return;

    // Replace 'bBtTbKuv-RagFri9fCcS2p4pzeSt4KBMAwp50lwLNMg' with your actual Unsplash API key
    const apiKey = 'bBtTbKuv-RagFri9fCcS2p4pzeSt4KBMAwp50lwLNMg';

    // Make a fetch request to the Unsplash API to search for photos based on the category
    fetch(`https://api.unsplash.com/search/photos?query=${category}&client_id=${apiKey}`)
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Call the displayImages function to display the retrieved images
            displayImages(data.results);
        })
        .catch(error => console.error(error)); // Handle errors
});

// Function to display images in the gallery
function displayImages(images) {
    // Clear the existing content in the gallery container
    gallery.innerHTML = '';

    // Loop through the retrieved images and create a card for each
    images.forEach(image => {
        // Create a new div element for the picture card
        const pictureCard = document.createElement('div');
        pictureCard.classList.add('picture-card'); // Add a CSS class for styling

        // Create an img element and set its source to the image URL
        const img = document.createElement('img');
        img.src = image.urls.regular;

        // Create a div element for additional information
        const info = document.createElement('div');
        info.classList.add('info'); // Add a CSS class for styling
        info.innerHTML = `
            <p>By: <a href="${image.user.links.html}" target="_blank">${image.user.username}</a></p>
            <p>Description: ${image.alt_description || 'No description available'}</p>
            <p><a href="${image.links.html}" target="_blank">View on Unsplash</a></p>
        `;

        // Append the image and information elements to the picture card
        pictureCard.appendChild(img);
        pictureCard.appendChild(info);

        // Append the picture card to the gallery container
        gallery.appendChild(pictureCard);
    });
}

