import "../../styles.scss";

type WinScreenType = {
  restart: () => void;
  attemptCounter: number;
};

export const WinScreen = ({ restart, attemptCounter }: WinScreenType) => {
  return (
    <div className="win-screen">
      <h1>You Won!</h1>
      <h2>{attemptCounter} click</h2>
      <button className="win-screen__button" onClick={() => restart()}>
        Play Again
      </button>
    </div>
  );
};
