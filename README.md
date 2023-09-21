PHOTO GALLERY APPLICATION
Objective
The objective of this project was to create a web-based picture gallery application using JavaScript, CSS, HTML, and API calls to retrieve and display photos from Unsplash.com. The application needed to have a search feature, a responsive grid layout, and the ability to display photo details.
Approach
1. Project Setup and Structure
I began by setting up a basic project structure consisting of HTML, CSS, and JavaScript files. The HTML file contained the main structure of the page, including input fields, buttons, and a gallery container. The CSS file was used to style the application and ensure responsiveness, while the JavaScript file handled user interactions and API calls.
2. Styling and Layout
Styling was an essential aspect of this project to make the gallery visually appealing and responsive. CSS was used to create a clean and modern design. A responsive grid layout was implemented using CSS Grid and media queries to ensure that the gallery adapts to different screen sizes.
3. User Interaction
JavaScript played a crucial role in handling user interactions. When users entered a category and clicked the "Search" button, JavaScript captured the category input, made an API request to Unsplash.com, and displayed the retrieved images in the gallery.
4. API Integration
One of the significant challenges in this project was integrating the Unsplash API. To do this, I obtained an API access key and used the fetch API to send requests to the Unsplash API endpoint. I needed to handle the API response, parse the JSON data, and dynamically create HTML elements to display the images and associated information.


5. Displaying Photo Details
In addition to displaying the images, the project required displaying photo details, including the author's name, a description (if available), and a link to view the photo on Unsplash.com. This required creating additional HTML elements dynamically and populating them with data from the API response.
Challenges Faced
During the project's development, several challenges were encountered:
API Key Handling: Securing and managing the API key was critical. It required careful handling to ensure that the key remained confidential and was properly stored.
API Rate Limits: The Unsplash API has rate limits, which meant I had to be mindful of the number of API requests made during testing. Rate limiting could potentially affect the user experience if not managed correctly.
Responsive Design: Ensuring that the gallery remained responsive across various devices and screen sizes required significant CSS adjustments and testing.
Conclusion
In conclusion, creating the photo gallery application was a valuable learning experience. It allowed me to demonstrate skills in JavaScript, CSS, HTML, and API integration. The project showcased my ability to create a visually appealing and functional web application while overcoming challenges related to API integration and responsive design.
This project provided practical experience in working with real-world APIs, handling user interactions, and dynamically updating the user interface based on API responses.
