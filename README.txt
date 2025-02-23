Project Overview

It's a registration form and user data display web application inspired by the design of "Salamah" wepsite. It features a multi-step registration form with real-time validation and a dynamic user list fetched from an external API. The app is built with vanilla JavaScript and styled with responsive CSS to ensure a seamless user experience across devices.



Setup Instructions

1- Clone the repository:
git clone <repository-url>
cd <repository-folder>
2- Open index.html in your preferred browser.



Features Implemented

- Multi-step registration form with input validation
- Dynamic user list fetched from an external API
- Responsive design for mobile and desktop views
- Local storage for form data
- Error handling and feedback messages for better UX



Technologies Used

- HTML5 for structure and layout
- CSS3 for styling and responsive design
- JavaScript (ES6 modules) for dynamic behavior and interactivity
- Fetch API for retrieving user data from external sources



Folder Structure

├── index.html           // Main HTML file
├── main.js              // Entry point for JavaScript
├── styles.css           // Main CSS file for styling
│
├── components
│   ├── Form.js          // Registration form component
│   └── userList.js      // User list component
│
├── images               // Contains logo and background images
│
├── services
│   └── api.js           // API integration and fetching user data
│
└── utils
    └── validation.js    // Form validation logic



How to Contribute

1- Fork the repository.
2- Create a new branch for your feature or bug fix:
	git checkout -b feature-name
3- Commit your changes with a meaningful message:
	git commit -m "Add new feature"
4- Push to your fork and submit a pull request.	
