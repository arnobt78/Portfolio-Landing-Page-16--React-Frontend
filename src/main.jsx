import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';

/** Entry point: mount the React app into #root (see index.html). */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);
