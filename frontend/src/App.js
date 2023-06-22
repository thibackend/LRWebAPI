import react from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import Routersr from "./Component/route";
function App() {
  return (
    <BrowserRouter>
      <Routersr />
    </BrowserRouter>
  );
}

export default App;
