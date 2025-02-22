import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Character } from "./pages/Character";
import { Episodes } from "./pages/Episodes";
import { NotFound } from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Character />} />
            <Route path="/episodios" element={<Episodes />} />
            <Route path="/localizacao" element={<Location />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
