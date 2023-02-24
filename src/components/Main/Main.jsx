import "./Main.css";
import Answers from "../Answers/Answers";
import { Route, Routes } from "react-router-dom";
import Game from "../Game/Game";
export default function Main() {
  return (
    <main className="content">
      <Routes>
        <Route path="/lestatest/" element={<Answers />} />
        <Route path="/lestatest/game" element={<Game />} />
      </Routes>
    </main>
  );
}
