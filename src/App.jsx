
import Home from "./pages/home/Home";
import { useState } from "react";
import Buy from "./pages/buy/Buy";
import Sell from "./pages/sell/Sell";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  const handlePathChange = () => {
    setPath(window.location.pathname);
  }

  window.addEventListener("popstate", handlePathChange);

  let content;
  if (path === "/") {
    content = <Home />;
  } else if(path==="/buy"){
    content = <Buy />
  }else if(path==="/sell"){
    content = <Sell />
  }


  return (
    <>
      {content}
    </>
  );
}

export default App;
