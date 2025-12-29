import { useState, useEffect } from "react";
import Board from "../components/Board";
import Status from "../components/Status";
import { checkWinner, isDraw } from "../utils/gameUtils";
import { getBestMove } from "../utils/minimax";

export default function VsCPU() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const winner = checkWinner(board);

  function handlePlayerMove(index) {
    if (!isPlayerTurn || board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);
  }

  useEffect(() => {
    if (!isPlayerTurn && !winner && !isDraw(board)) {
      const cpuMove = getBestMove(board);

      if (cpuMove !== null) {
        const newBoard = [...board];
        newBoard[cpuMove] = "O";

        setTimeout(() => {
          setBoard(newBoard);
          setIsPlayerTurn(true);
        }, 400);
      }
    }
  }, [isPlayerTurn, board, winner]);

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
  }

  return (
    <div className="game">
      <h1>VS CPU</h1>
      <Status winner={winner} isXTurn={isPlayerTurn} />
      <Board board={board} onMove={handlePlayerMove} />
      <button onClick={resetGame}>Restart</button>
    </div>
  );
}
