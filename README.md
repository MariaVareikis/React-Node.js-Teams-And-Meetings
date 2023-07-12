Meeting Management System

The Meeting Management System is a web application that allows users to manage meetings for different teams. It provides features to add meetings, view meetings by team, and perform various operations related to meetings.

Features:

Add a new meeting with details such as team, start time, end time, description, and meeting room.
View all meetings for a specific team.
Validate meeting details to ensure data integrity.
Handle errors and display meaningful error messages.
RESTful API endpoints for meetings and teams.
Integration with a MySQL database for data storage.

Technologies Used:

Node.js,
Express.js,
MySQL,
React,
React Router,
React Hook Form,
Material-UI,
Axios

Client

To deploy run "npm i" and then "npm start".

Server

To deploy run "npm i" and then "npm start".

Use the application to add and manage meetings for different teams.

API Documentation

The Meeting Management System provides the following API endpoints:

GET /api/teams - Get all teams.
GET /api/meetings/:teamId - Get all meetings for a specific team.
POST /api/meetings - Add a new meeting.
