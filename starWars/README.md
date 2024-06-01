# Star Wars Explorer

Star Wars Explorer is a web application that allows users to explore information about planets from the Star Wars universe. The backend is built with Express and MongoDB, while the frontend is implemented using React.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Backend Setup](#backend-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Starting the Server](#starting-the-server)
3. [Frontend Setup](#frontend-setup)
    - [Installation](#installation-1)
    - [Running the Application](#running-the-application)
4. [Fetching and Saving Planets](#fetching-and-saving-planets)
5. [API Endpoints](#api-endpoints)
6. [Client-Side Components](#client-side-components)
    - [Planets Page](#planets-page)
    - [Home Page](#home-page)

## Project Overview
Star Wars Explorer is a project that allows users to explore planets from the Star Wars universe through a web interface. The backend uses Node.js, Express, and MongoDB to serve data, while the frontend uses React for a dynamic user experience.

## Backend Setup

### Prerequisites
- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/star-wars-explorer.git
    cd star-wars-explorer
    ```

2. Install backend dependencies:
    ```sh
    npm install
    ```

### Environment Variables
Create a `.env` file in the root directory with the following content:
```env
PORT=4444
MONGODB_URI=your-mongodb-uri-here


