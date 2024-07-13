
import Home from "./pages/home/Home";
import { useState } from "react";
import Recycle from "./pages/recycle/Recycle";


function App() {
  const [path, setPath] = useState(window.location.pathname);

  const handlePathChange = () => {
    setPath(window.location.pathname);
  }

  window.addEventListener("popstate", handlePathChange);

  let content;
  if (path === "/") {
    content = <Home />;
  } else if(path==="/recycle"){
    content = <Recycle />
  }


  return (
    <>
      {content}
    </>
  );
}

export default App;
