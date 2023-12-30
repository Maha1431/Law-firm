import LawFrim from './Components/LawFirm/LawFirm';
import Box from "./Components/FBox/fbox";
import './App.css';
import Choose from './Components/Choose/choose';
import GridofCards from "./Components/Area/Area";
import ClientBox from './Components/happyClients/Clients';
import Team from './Components/team/team'

function App() {
  return (
    <div className="App">
      <LawFrim />
      <Box />
      <Choose />
      <GridofCards />
      <ClientBox />
      <Team />
    </div>
  );
}

export default App;
