import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages";
import { WordType } from "./games"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/words/" element={<WordType />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
