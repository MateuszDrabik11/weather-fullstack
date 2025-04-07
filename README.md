# Fullstack Web Application (React.js + Spring Boot)

This is a fullstack web application built with **React.js** for the frontend and **Java (Spring Boot)** for the backend.

To run the entire application, use **Docker Compose**. It will automatically build both the frontend and backend services, and configure them to work together seamlessly.
Don't use this configuration in production.

## Environment Variables

This application requires an **Api key** for a https://www.weatherapi.com service.

You can add your own key by creating an environmental variable in compose.yaml file in backend service under environment section.

```
services:
  backend:
    environment:
      - API=Your_Api_Key
```



## Getting Started

Run the following command in your terminal:

```bash
docker-compose up --build
```
This command will:
- Build the React frontend
- Build the Spring Boot backend
- Set up networking and ports
    - Frontend : http://localhost (Port 80)
    - Backend : http://localhost:8080
- Launch both containers together

Once the setup is complete, open your browser and navigate to http://localhost to access the frontend. The backend API will be accessible at http://localhost:8080
