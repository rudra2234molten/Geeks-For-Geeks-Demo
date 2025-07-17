import React from "react";
import ReactDom, { createRoot } from 'react-dom/client'
import App from "./App";
import './index.css'

let root = document.querySelector('#root')

createRoot(root).render(
  <App/>
)