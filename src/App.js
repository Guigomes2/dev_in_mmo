import { Routes, Route, Link } from "react-router-dom";
import Games from './pages/Games';
import GameDetails from './pages/GameDetails';
import GameNews from './pages/GameNews';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";


function App() {
  const rootElement = document.getElementById("root");

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Games />} />
      <Route path="details/:id" element={<GameDetails />}/>
      <Route path="news" element={<GameNews />}/>
    </Routes>
    </BrowserRouter>
    
    </>
    );
}
export default App;
