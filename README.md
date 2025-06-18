# Simple-REST-API


A simple REST API built with Node.js and Express that manages user data in memory.

## Technologies Used

- Node.js
- Express.js
- UUID for generating unique IDs

## Installation

1. Make sure you have Node.js installed on your system
2. Clone this repository
3. Install dependencies: npm install express uuid
4. initialize project: npm init -y
```bash

## Example of testing API
Run this in your terminal: curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"John Doe\",\"email\":\"john@example.com\"}" http://localhost:3000/users
Run this for requesting: curl http://localhost:3000/users/842fe18c-4853-4b68-87d6-8cc6a8cd75cd
npm install
