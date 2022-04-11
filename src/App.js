import {Route, Routes, BrowserRouter } from "react-router-dom"
import {Pokebrowse} from "./pages/Pokebrowse"
import {Notfound} from "./pages/Notfound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />}/>
        <Route path="/" element={<Pokebrowse />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
