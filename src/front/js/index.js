//import react into the bundle
import React from "react";
import { createRoot } from "react-dom/client";

//include your index.scss file into the bundle
import "../styles/index.css";
//Importancion de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import your own components
import Layout from "./layout";

//render your react application
const container = document.querySelector("#app");
const root = createRoot(container);
root.render(<Layout />);
