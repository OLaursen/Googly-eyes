import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme/theme';
import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import { createRandomID } from "./utility.js";
import * as books from "./books/books.model.js";
import * as users from "./users/users.model.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <App />
    </ThemeProvider>
  </React.StrictMode>
);
