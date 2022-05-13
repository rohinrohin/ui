import React, { useState, useEffect, useRef, useCallback } from "react";
import TopCard from "../../components/TopCard";
import GameBoard from "../../components/gameBoard/GameBoard";
import Config from "../../config";
import Head from "next/head";
import ReactCanvasConfetti from "react-canvas-confetti";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

function getAnimationSettings(originXA, originXB) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
}

export default function Game() {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const [gameData, setGameData] = useState({});
  const [playersData, setPlayersData] = useState([]);
  const getData = () => {
    return fetch(
      Config["BACKEND_URL"] + "/board?game_id=" + localStorage.getItem("gameId")
    ).then((response) => response.json().then((data) => setGameData(data)));
  };

  const [isSelector, setIsSelector] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (gameData["current_selector"] == localStorage.getItem("username")) {
        setIsSelector(true);
      } else {
        setIsSelector(false);
      }
    }
  }, [gameData]);

  useEffect(() => {
    let arr = [];
    if (gameData["players"]) {
      for (const [key, value] of Object.entries(gameData["players"])) {
        let temp_obj = {};
        temp_obj["username"] = key;
        temp_obj["last_round_points"] = value["last_round_points"];
        temp_obj["total_points"] = value["total_points"];
        arr.push(temp_obj);
      }
      arr.sort((a, b) => a["total_points"] - b["total_points"]);
    }
    setPlayersData(arr);
  }, [gameData]);

  useEffect(() => {
    setInterval(() => {
      getData();
    }, 1000);
  }, []);

  useEffect(() => {
    if (gameData["status"] == "COMPLETED") {
      startAnimation();
    }
  }, [gameData["status"]]);

  function getChosenQuestion(category, points) {
    if (isSelector) {
      // Send Category and points to teh backend
      console.log(category, points);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: { category: category, points: points },
          game_id: gameData["_id"]["$oid"],
          username: localStorage.getItem("username"),
        }),
      };
      fetch(Config["BACKEND_URL"] + "/question/choose", requestOptions).then(
        (response) => {
          if (response.status != 200) {
            alert("Error! Please contact the Admin.");
          }
        }
      );
    } else {
      console.log("Not");
    }
  }

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (gameData["admin"] == localStorage.getItem("username")) {
      setIsAdmin(true);
    }
  }, [gameData]);

  const handleEndGame = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        game_id: gameData["_id"]["$oid"],
        username: localStorage.getItem("username"),
      }),
    };
    fetch(Config["BACKEND_URL"] + "/end", requestOptions).then((response) => {
      if (response.status != 200) {
        alert("Error! Please contact the Admin.");
      }
    });
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className={`relative w-screen h-screen flex flex-col content-center ${gameData['status'] == 'COMPLETED' ? 'justify-center' : ''} items-center overflow-hidden`}
        style={{
          minHeight: "100vh",
          minHeight: "-webkit-fill-available",
          backgroundImage: "url(/assets/jehoot-bg.svg)",
        }}
      >
        {isAdmin && gameData["status"] != "COMPLETED" ? (
          <div>
            <button
              style={{
                position: "absolute",
                top: "25px",
                right: "25px",
                color: "#4D2583",
                border: "thin solid #9E8DD1",
                borderRadius: "5px",
                padding: "5px 20px",
                background: "#D9381E",
              }}
              onClick={handleEndGame}
            >
              End Game
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-col items-center mt-4">
          <div className="text-5xl text-white">Top players</div>
          <div className="flex">
            {playersData.map((item, index) => {
              return (
                index < 3 && (
                  <TopCard
                    username={item["username"]}
                    lastPoints={item["last_round_points"]}
                    totalPoints={item["total_points"]}
                  />
                )
              );
            })}
            {playersData.length > 3 && (
              <div className="h-32 m-4 p-4 flex items-center justify-center text-white text-2xl font-bold">
                +{playersData.length - 3 - 1}
              </div>
            )}
          </div>
        </div>
        {gameData["status"] != "COMPLETED" ? (
          <div className="text-2xl text-amber-200">
            {isSelector && gameData["current_selector"] != null ? (
              <>Please choose a question.</>
            ) : (
              <>
                {gameData["current_selector"] != null ? (
                  <>
                    {gameData["current_selector"]} is choosing the category.
                    Please wait!
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        ) : (
          <></>
        )}

        {/* <div className="w-auto h-auto"> */}

        {gameData["status"] != "COMPLETED" ? (
          <GameBoard
            entireData={gameData}
            getChosenQuestion={getChosenQuestion}
          />
        ) : (
          <></>
        )}

        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />

        {/* <Modal open={gameData['current_selector'] != null} username={} data={gameData}/> */}
      </div>
    </>
  );
}
