# Microfrontend Platform

## Introduction
This repo comprise of two MFEs - `home` and `about`, and one `shell` application. The `sell` app has the Navbar and the client-side routing logic to pull and display MFEs in the app-root.
The app app is powered by a reverse proxy node server.

## Setup
- run `npm i` on the root dir followed by `npm start`. This will start the reverse proxy server `http://localhost:3000`
- Navigate to `app/shell` and run `npm i` and `npm start`. this will start the shell app on port 8080
- Navigate to `app/home` and run `npm i` and `npm start`. this will start the Home app on port 8081
- Navigate to `app/about` and run `npm i` and `npm start`. this will start the About app on port 8082

## Flow
- Go to `http;//localhost:3000` and the app is rendered with a navbar. This time the resources for shell app will be rendered.
- Select `Home` from the navbar. Only the resource needed for the Home app will be loaded and same will follow for the `About` app.
