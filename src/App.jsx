import "./App.css";
import Integrations from "././pages/Integrations";
import {Route, Routes} from "react-router-dom";
import IntegrationsLink from "./pages/IntegrationsLink";

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Integrations/>}/>
        <Route exact path='integrations/telegram' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/slack' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/medium' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/patreon' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/notion' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/stackoverflow' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/teams' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/discord' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/outlook' element={<IntegrationsLink/>}/>
      </Routes>
    </>
  );
}

export default App;
