import "./App.css";
import Integrations from "././pages/Integrations";
import {Route, Routes} from "react-router-dom";
import IntegrationsLink from "./pages/IntegrationsLink";

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Integrations/>}/>
        <Route exact path='integrations/:intParam' element={<IntegrationsLink/>}/>
      </Routes>
    </>
  );
}

export default App;
