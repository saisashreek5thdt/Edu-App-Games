import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { WordType, NumbersGame } from "./games";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/words/" element={<WordType />} />
        <Route path="/game/numbers/" element={<NumbersGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
