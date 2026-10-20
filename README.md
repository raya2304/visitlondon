# Visit London – Tourism Website

## About the Project

Visit London is a responsive tourism website developed using React.js, JavaScript, and Tailwind CSS. The website helps users explore London's popular tourist attractions, discover travel packages, browse image galleries, and access ticket booking information.

The project provides an interactive travel experience by combining dynamic UI components, API integration, and location-based functionality. It was developed to improve frontend development skills and understand how external APIs can be integrated into a React application.

## Features

- **Home Page:** An attractive landing page introducing London as a travel destination.
- **Popular Attractions:** Explore famous landmarks, historical places, and tourist destinations in London.
- **Tour Packages:** Browse travel packages and discover different sightseeing options.
- **Gallery:** View images showcasing London's landmarks, architecture, and culture.
- **Ticket Information:** Explore ticket-related information for tourist attractions.
- **Weather Updates:** Display weather information using a Weather API.
- **Geolocation:** Use the browser's Geolocation API to access the user's location, subject to permission.
- **Responsive Design:** Optimized layouts for desktop, tablet, and mobile screens.
- **Reusable Components:** React components help maintain clean, organized, and reusable code.

## API Integration

### 1. Weather API

The website integrates a Weather API to retrieve weather information and provide users with useful details when planning their visit.

**Purpose:**
- Retrieve weather information from an external service.
- Display weather data dynamically in the user interface.
- Help users understand weather conditions before exploring destinations.
- Practice fetching and displaying API data in React.

**Implementation concepts:**
- Fetching data from an API endpoint.
- Handling asynchronous requests using JavaScript.
- Managing API response data using React state.
- Displaying results dynamically.
- Handling loading states and API errors.

### 2. Geolocation API

The browser's Geolocation API allows the website to request the user's current geographic coordinates with their permission.

**Purpose:**
- Access latitude and longitude.
- Understand browser-based location permissions.
- Enable location-aware functionality.
- Learn how location data can be used with mapping or weather services.

**Implementation concepts:**
- Using `navigator.geolocation.getCurrentPosition()`.
- Retrieving latitude and longitude.
- Handling permission denial and location errors.
- Managing location data in React.

**Privacy note:** The browser requires user permission before providing location information to the website.

## Technologies Used

- **React.js:** Building interactive user interfaces with reusable components.
- **JavaScript (ES6+):** Implementing application logic and dynamic functionality.
- **Tailwind CSS:** Creating responsive layouts and styling UI components.
- **HTML5:** Structuring website content.
- **JSON:** Organizing and managing structured data.
- **Weather API:** Retrieving weather information from an external service.
- **Geolocation API:** Accessing browser-provided geographic coordinates with permission.
- **Git and GitHub:** Version control and project hosting.

## React Concepts Practiced

- Functional components
- Props and component reusability
- `useState` for managing component state
- `useEffect` for handling side effects and API requests
- Rendering lists using `map()`
- Event handling
- Conditional rendering
- Working with JSON data
- Fetching API data asynchronously
- Creating responsive page layouts

## Project Structure

```text
london/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

*Note: Adjust the folder structure above to match your actual project files.*

## Installation and Setup

### Prerequisites
- Node.js and npm
- A code editor such as Visual Studio Code
- A web browser

### Steps to Run the Project

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd london
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the local URL displayed in the terminal to view the website.

## API Configuration

If your Weather API requires an API key, configure it using an environment variable rather than publishing the key in your source code.

For example, in a Create React App project, create a `.env` file:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

Restart the development server after updating environment variables. Do not commit the `.env` file containing private credentials to GitHub. Add it to `.gitignore`.

The exact configuration depends on the weather service and API endpoint used in the project.

## Learning Outcomes

Through this project, I gained practical experience in:

- Developing a multi-page React.js application.
- Designing responsive interfaces using Tailwind CSS.
- Integrating external APIs into a frontend project.
- Working with asynchronous JavaScript and JSON responses.
- Managing application state and side effects.
- Using browser geolocation functionality.
- Organizing reusable components and page layouts.
- Managing source code with Git and GitHub.

## Future Enhancements

- Add interactive maps for London's attractions.
- Integrate live ticket booking services.
- Add search and filtering for tourist destinations.
- Include user reviews and ratings.
- Add travel itiner
