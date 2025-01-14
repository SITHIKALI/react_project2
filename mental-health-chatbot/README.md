# Mental Health Chatbot

This project is a mental health chatbot built using the MERN stack (MongoDB, Express, React, Node.js). The chatbot aims to provide users with a supportive environment to discuss their mental health and receive helpful resources.

## Project Structure

```
mental-health-chatbot
├── backend
│   ├── controllers
│   │   └── chatController.js
│   ├── models
│   │   └── chatModel.js
│   ├── routes
│   │   └── chatRoutes.js
│   ├── app.js
│   └── package.json
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── ChatComponent.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mental-health-chatbot.git
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd mental-health-chatbot/backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd mental-health-chatbot/backend
   node app.js
   ```

2. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

### Usage

- Open your browser and navigate to `http://localhost:3000` to access the chatbot interface.
- Users can send messages and receive responses from the chatbot.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.