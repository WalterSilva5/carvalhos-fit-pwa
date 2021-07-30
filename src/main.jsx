import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import store from "./store/store";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles.scss";
import "animate.css";
import { registerServiceWorker } from './service-worker';

//registerServiceWorker();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
