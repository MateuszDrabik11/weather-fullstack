# Fullstack Web Application (React.js + Spring Boot)

This is a fullstack web application built with **React.js** for the frontend and **Java (Spring Boot)** for the backend.

To run the entire application, use **Docker Compose**. It will automatically build both the frontend and backend services, and configure them to work together seamlessly.
Don't use this configuration in production.

## Environment Variables

This application requires an **Api key** for a https://www.weatherapi.com service.

You can do this by creating an environmental variable in compose.yaml file in backend service under environment section.

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
- Launch both containers together
