import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { Pokemons } from "./Pages/Pokemons";

export function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
          path="/pokemons" 
          element={<Pokemons/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
