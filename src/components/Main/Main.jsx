import "./Main.css";
import Answers from "../Answers/Answers";
import { Route, Routes } from "react-router-dom";
import Game from "../Game/Game";
export default function Main() {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<Answers />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </main>
  );
}
