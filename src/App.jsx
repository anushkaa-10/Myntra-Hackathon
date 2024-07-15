
import React, { useState } from "react";
import Home from "./pages/home/Home";
import Buy from "./pages/buy/Buy";
import Sell from "./pages/sell/Sell";
import Quiz from "./components/Quizzes";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  const handlePathChange = () => {
    setPath(window.location.pathname);
  };

  window.addEventListener("popstate", handlePathChange);

  let content;

  switch (path) {
    case "/":
      content = <Home />;
      break;
    case "/buy":
      content = <Buy />;
      break;
    case "/sell":
      content = <Sell />;
      break;
    case "/quizzes": // Add path for quizzes
      content = <Quiz />;
      break;
    default:
      content = <Home />; // Default to Home page for unknown paths
      break;
  }

  return <>{content}</>;
}

export default App;

