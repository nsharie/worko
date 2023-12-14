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
        <Route exact path='integrations/coda' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/dev-to' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/angular' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/coda' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/codepen' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/github' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/codesandbox' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/webhooks' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/gitlab' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/pinterest' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/behance' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/dribbble' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/sketch' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/youtube' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/figma' element={<IntegrationsLink/>}/>
        <Route exact path='integrations/framer' element={<IntegrationsLink/>}/>
      </Routes>
    </>
  );
}

export default App;
