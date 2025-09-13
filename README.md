# Visitor Registration System - Frontend

React-based frontend application for visitor registration, built with Vite and deployed using GitHub Pages.

## Description

This is the frontend component of a cloud-based visitor registration system. The application provides a user-friendly web interface where visitors can fill in their name through a form. The form data is then sent via POST request to the backend Azure Functions API, which handles data processing and storage in a PostgreSQL database. This is built with React and Vite.

## Getting Started

### Dependencies

* Node.js (version 18.x or higher)
* npm (comes with Node.js)

### Architecture

User Interface (React)
    --> Form Submission
Frontend Validation
    --> POST /api/RegisterVisitor (proxied by Vite)
Backend API (Azure Functions)
    --> Success/Error Response
User Feedback Display

### Installing

* Clone the repository to your local machine
* Navigate to the frontend project directory
* Install all project dependencies including React, Vite, and other packages:
```
npm install
```

### Executing program

Local Development

* Start the development server:
```
npm run dev
```
* The application will be available at http://localhost:5173 (or another port shown in terminal)

## Help

Common issues and solutions:

Development Server Issues:
```
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```
API Connection Issues:

* Ensure the Azure Functions backend is running and accessible at the proxy target
* Check that /api/RegisterVisitor endpoint is available on the backend
* Verify CORS settings in backend allow your domain
* If proxy fails, check the target URL in vite.config.js

## Authors

* Alexander Luukkonen - alexanderluukkonens@hotmail.com

## License

This project is licensed under the MIT-license License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* React documentation
* Vite build tool guides
* GitHub Pages deployment guides for Vite https://levelup.gitconnected.com/deploy-your-vite-app-to-github-pages-a-lazy-devs-guide-37b0b472fa35
* Older projects
