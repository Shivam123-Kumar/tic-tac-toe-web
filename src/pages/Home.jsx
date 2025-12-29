import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <h2>Select Game Mode</h2>

      <button onClick={() => navigate("/pass-play")}>
        Pass & Play (2 Players)
      </button>

      <button onClick={() => navigate("/vs-cpu")}>
        VS CPU (AI)
      </button>
    </div>
  );
}
