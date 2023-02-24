import { useEffect, useState } from "react";
import "./TicTacToe.css";

export default function TicTackToe() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [cells, setCells] = useState([]);
  const arr = Array(9);

  useEffect(() => {
    setCells(document.querySelectorAll(".game-table__cell"));
  }, []);

  useEffect(() => {
    if (!isGameOver) {
      cells.forEach((el) => {
        el.classList.remove("game-table__cell_type_win");
        el.classList.remove("game-table__cell_type_k");
        el.classList.remove("game-table__cell_type_n");
        el.classList.remove("game-table__cell_active");
      });
    }
    // eslint-disable-next-line
  }, [isGameOver]);

  const checkCells = (index1, index2, index3) => {
    if (
      (arr[index1] === "k" && arr[index2] === "k" && arr[index3] === "k") ||
      (arr[index1] === "n" && arr[index2] === "n" && arr[index3] === "n")
    )
      return true;
  };

  const changeColor = (indexArr) => {
    indexArr.forEach((index) => {
      cells[index].classList.add("game-table__cell_type_win");
    });
  };

  const checkWin = () => {
    for (let i = 0; i < 3; i++) {
      if (checkCells(i, i + 3, i + 6)) {
        setIsGameOver(true);
        changeColor([i, i + 3, i + 6]);
      }
    }
    for (let i = 0; i <= 6; i += 3) {
      if (checkCells(i, i + 1, i + 2)) {
        setIsGameOver(true);
        changeColor([i, i + 1, i + 2]);
      }
    }
    if (checkCells(0, 4, 8)) {
      setIsGameOver(true);
      changeColor([0, 4, 8]);
    }
    if (checkCells(2, 4, 6)) {
      setIsGameOver(true);
      changeColor([2, 4, 6]);
    }
  };

  const bot = () => {
    let emptyCellsId = [];
    for (let i = 0; i < 9; i++) {
      if (!arr[i]) {
        emptyCellsId.push(i);
      }
    }
    if (emptyCellsId.length !== 0) {
      const randIndex = Math.floor(Math.random() * emptyCellsId.length);
      const randEmptyCellId = emptyCellsId[randIndex];
      arr[randEmptyCellId] = "n";
      cells[randEmptyCellId].classList.add(
        "game-table__cell_active",
        "game-table__cell_type_n"
      );
    } else {
      setIsGameOver(true);
    }
  };

  const handleClick = ({ target }) => {
    if (!target.classList.contains("game-table__cell_active") && !isGameOver) {
      target.classList.add(
        "game-table__cell_active",
        "game-table__cell_type_k"
      );
      arr[target.id] = "k";

      checkWin();
      if (isGameOver) return;

      bot();
      checkWin();
    }
  };

  return (
    <>
      <div className="game-table" onClick={handleClick}>
        {[...Array(9)].map((x, i) => (
          <div className="game-table__cell" id={i} key={i} />
        ))}
      </div>
      {isGameOver && (
        <button
          className="button button_type_resetGame"
          onClick={() => {
            setIsGameOver(false);
          }}
        >
          Начать заново
        </button>
      )}
    </>
  );
}
