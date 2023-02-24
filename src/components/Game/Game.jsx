import PageTitle from "../PageTitle/PageTitle";
import TicTackToe from "../TicTacToe/TicTacToe";
import "./Game.css";

export default function Game() {
  return (
    <>
      <div className="title-wrapper">
        <PageTitle>Крестики нолики</PageTitle>
      </div>
      <section>
        <div className="game-wrapper">
          <TicTackToe />
        </div>
      </section>
    </>
  );
}
