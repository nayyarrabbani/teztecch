import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OurProgramEventsPage from './pages/OurProgramEventsPage';
import OurProgramCommunity from './pages/OurProgramCommunityPage';
import OurProgramShoot from './pages/OurProgramShootPage';
import PortfoliosPage from './pages/PortfoliosPage';
import ClientPage from './pages/ClientPage';
import OurGalleryPage from './pages/OurGalleryPage';
import OurTeamPage from './pages/OurTeamPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/our-program-events" element={<OurProgramEventsPage/>}/>
      <Route path="/our-program-community" element={<OurProgramCommunity/>}/>
      <Route path="/our-program-shoot" element={<OurProgramShoot/>}/>
      <Route path="/portfolios" element={<PortfoliosPage/>}/>
      <Route path="/client" element={<ClientPage/>}/>
      <Route path="/our-gallery" element={<OurGalleryPage/>}/>
      <Route path="/our-team" element={<OurTeamPage/>}/>
    </Routes>
  );
};

export default App;
