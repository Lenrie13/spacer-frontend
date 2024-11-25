## Spacer Frontend
Spacer Frontend is the client-side application of Spacer, a platform designed to bring together individuals and groups with shared passions to collaborate, celebrate, and create in unique and accessible spaces. The frontend is built using React and Redux Toolkit for state management, ensuring a seamless user experience with responsive, intuitive, and visually appealing interfaces.

# Setup and Installation
Node.js (v16 or higher)
npm 
A running instance of the Spacer Backend API

# Steps to Get Started
1. Clone the repository:
git clone https://github.com/yourusername/spacer-frontend.git
cd spacer-project

2. Install dependencies:
npm install

3. Run the development server:
npm run dev

## Features and Workflow
*User Flow*
Explore Spaces: Users can browse and filter spaces for their needs.
View Details: Detailed information about spaces, including images, availability, and pricing.
Authenticate: Login via local or social authentication.
Book Spaces: Select a duration, calculate pricing, and confirm booking.
Simulate Payments: Process payment and receive booking confirmation with an invoice.

*Admin Flow*
Manage Spaces: Add, edit, and view detailed information about spaces, including images, availability, and pricing.
User Management: Add users, assign roles, and view user lists filtered by roles.
Monitor Bookings: Track bookings, update space statuses, and resolve booking conflicts.
Dashboard Analytics: Access an overview of platform activity, including bookings, users, and revenue trends.
Payment Oversight: Manage and validate simulated billing and invoicing processes for bookings.
Agreement Management: Set up and review agreement templates required for bookings.

# Technologies Used
Technologies Used
React: The frontend library used to build the user interface, enabling a dynamic and responsive app.
Redux Toolkit: State management for handling complex state logic in a consistent and maintainable way.
TypeScript: Adds static type checking to JavaScript, helping catch errors early and improving code quality.
Tailwind CSS: A utility-first CSS framework for fast and customizable styling of the app.
Lucide-React: A collection of SVG icons for easy and customizable icon usage throughout the app.
Fetch API: Used for making HTTP requests to the backend API to retrieve and manipulate space and booking data.
Backend: A Flask-based API service that handles database interactions and serves data to the frontend (for space management, user authentication, etc.).

# Contribution
If you'd like to contribute to Spacer Frontend, please follow these steps:
Fork the repository.
Clone your forked repository to your local machine.
Create a new branch (git checkout -b feature-name).
Make your changes and commit them (git commit -am 'Add feature').
Push to your branch (git push origin feature-name).
Open a pull request to the main repository.


