# Trello API

This project serves as the backend implementation for the Trello Clone application, providing essential functionalities to support the frontend interface.

## Frontend Part

Here is the frontend part of this project: **[Trello Project (Frontend)](https://github.com/Kudoo39/trello-project)**

## Table of Contents

1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Error Handling](#error-handling)
4. [Technologies Used](#technologies-used)
5. [Project Structure](#project-structure)
6. [CORS Configuration](#cors-configuration)
7. [Deployment](#deployment)


## Getting Started

### Prerequisites

- Node.js (version 18.17.1 or higher recommended)
- npm or yarn
- MongoDB

### Installation

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/Kudoo39/trello-api`
2. Navigate to the project directory: `cd trello-api`
3. Install dependencies: `npm install` or `yarn install`
4. Run the app locally: `npm run dev` or `yarn dev`

### Environment Variables

You need to set up environment variables for the application. Create a `.env` file in the root of the project directory.

## Features

### Boards
- GET /boards: Get all boards.
- POST /boards: Create a new board.
- GET /boards/:boardId: Get a board by ID.
- PUT /boards/:boardId: Update a board.
- PUT /boards/supports/moving_card: Move a card between different columns in the same board.

### Columns
- POST /columns: Create a new column.
- PUT /columns/:columnId: Update a column.
- DELETE /columns/:columnId: Delete a column.

### Cards
- POST /cards: Create a new card.
- PUT /cards/cardId: Update a card.

## Error Handling

- It uses custom error handling middleware to manage errors and provide meaningful responses.
- The `errorHandlingMiddleware` captures errors thrown throughout the application and sends a structured JSON response.

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB

## Project Structure

```
src
 ┣ config
 ┃ ┣ cors.js
 ┃ ┣ environment.js
 ┃ ┗ mongodb.js
 ┣ controllers
 ┃ ┣ boardController.js
 ┃ ┣ cardController.js
 ┃ ┗ columnController.js
 ┣ middlewares
 ┃ ┗ errorHandlingMiddleware.js
 ┣ models
 ┃ ┣ boardModel.js
 ┃ ┣ cardModel.js
 ┃ ┗ columnModel.js
 ┣ providers
 ┃ ┗ exampleProvider.js
 ┣ routes
 ┃ ┣ v1
 ┃ ┃ ┣ boardRoute.js
 ┃ ┃ ┣ cardRoute.js
 ┃ ┃ ┣ columnRoute.js
 ┃ ┃ ┗ index.js
 ┃ ┗ v2
 ┃ ┃ ┗ index.js
 ┣ services
 ┃ ┣ boardService.js
 ┃ ┣ cardService.js
 ┃ ┗ columnService.js
 ┣ sockets
 ┃ ┗ exampleSocket.js
 ┣ utils
 ┃ ┣ algorithms.js
 ┃ ┣ ApiError.js
 ┃ ┣ constants.js
 ┃ ┣ formatters.js
 ┃ ┣ sorts.js
 ┃ ┗ validators.js
 ┣ validations
 ┃ ┣ boardValidation.js
 ┃ ┣ cardValidation.js
 ┃ ┗ columnValidation.js
 ┗ server.js
 ```

## CORS Configuration
- I configured CORS (Cross-Origin Resource Sharing) to enhance the security of the backend. The API is only accessible from the frontend URL to prevent unauthorized access from other origins.

## Deployment
- I deployed the Trello API backend project on AWS Lightsail for reliable hosting. The project was deployed at [trelloapi.crabdance.com](trelloapi.crabdance.com).