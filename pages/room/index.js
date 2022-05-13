import Image from 'next/image';
import Head from 'next/head';
import OtpInput from 'react-otp-input';
import { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { useQuery } from 'react-query'
import { API_URL } from '../../constants';
const axios = require('axios').default;
import { useRouter } from 'next/router'
import { route } from 'next/dist/server/router';



export default function Room() {

  const router = useRouter();
  const [admin, setAdmin] = useState(false);
  const [joinedGame, setJoinedGame] = useState(false);
  const [username, setUsername] = useState('')
  const [gamePin, setGamePin] = useState("waiting...");
  const [gameId, setGameId] = useState(null);
  const [gameBoard, setGameBoard] = useState(null);

  useEffect(() => {
    setAdmin(JSON.parse(localStorage.getItem('admin')))

    let gp = localStorage.getItem('gamePin');
    if (!admin && !gp) {
      setGamePin('waiting...')
    } else {
      setGamePin(gp);
    }

    setGameId(localStorage.getItem('gameId'))
    setJoinedGame(JSON.parse(localStorage.getItem('joinedGame')))
  }, [])


  const createGameAPI = async () => {
    return await axios.request({
      url: `${API_URL}/api/game/create`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: { 'admin': username }
    })
      .then((response) => response.data)
  }

  const startGameAPI = async () => {
    return await axios.request({
      url: `${API_URL}/api/game/start`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: {
        'username': username,
        'game_id': gameId
      }
    })
      .then((response) => response.data)
  }

  const fetchGameBoardAPI = async (gameIdParam) => {
    return await axios.request({
      url: `${API_URL}/api/game/board?game_id=${gameIdParam}`,
      method: 'GET',
    })
      .then((response) => response.data);
  }

  const joinGameAPI = async () => {
    return await axios.request({
      url: `${API_URL}/api/game/join`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: {
        'username': username,
        'game_pin': gamePin
      }
    })
      .then((response) => response.data)
  }

  let interval = null;
  let polling = false;
  useEffect(() => {
    if (gameId !== null && !polling) {
      interval = setInterval(async () => {
        try {
          let data = await fetchGameBoardAPI(gameId);
          setGameBoard(data);
          setGamePin(data.game_pin);

          if (!admin) {
            if (data.current_selector !== null) {
              router.push('/game');
              clearInterval(interval);
            }
          }
        } catch (error) {
          console.log("Unexpected Error in fetching gameboard, please contact your admin. ")
        }
      }, 1000);
    }
  }, gameId, []);


  // const { data: gameBoardResponse, refetch: refetchGameBoard, isLoading: gameBoardLoading } = useQuery(
  //   ['fetchGameBoard', gameId],
  //   async () => {
  //     const { data } = await axios({
  //       url: `${API_URL}/api/game/board/${gameId}`,
  //       method: 'GET',
  //     });
  //     return data;
  //   }, {
  //   refetchOnWindowFocus: false,
  //   enabled: false
  // });


  const handleCreateGame = async () => {
    if (!username) {
      return alert("Please enter a username to continue")
    }
    try {
      let data = await createGameAPI();
      setGameId(data.game_id);
      setJoinedGame(true);
      localStorage.setItem('username', username);
      localStorage.setItem('joinedGame', true)
      localStorage.setItem('gameId', data.game_id)
    } catch (error) {
      // if (error.response()) {
      //   alert("Either pin incorrect or username already in use.")
      // }
      // console.log(error);
    }
  }

  const handleJoinGame = async () => {
    if (!username) {
      return alert("Please enter a username to continue")
    }
    try {
      let data = await joinGameAPI();
      setGameId(data.game_id);
      setJoinedGame(true);
      localStorage.setItem('username', username);
      localStorage.setItem('joinedGame', true)
      localStorage.setItem('gameId', data.game_id)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      <div className="relative w-screen h-screen flex content-center items-center justify-center overflow-hidden" style={{ minHeight: '100vh', minHeight: '-webkit-fill-available' }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url(/assets/jehoot-bg.svg)"
          }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-40 bg-black"></span>
        </div>
        <div className="container relative mx-auto h-full">
          <div className="items-center flex flex-wrap h-full">
            <div className="flex h-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className='flex flex-row h-full justify-center items-center'>
                <div className='flex flex-col'>

                  <div className='text-5xl font-bold text-white'>
                    {!joinedGame ? 'Enter your name' : admin ? "Waiting for players to join..." : "Waiting for host to start game .."}
                  </div>

                  <div className='p-4 text-left'>
                    {gameBoard?.players && Object.keys(gameBoard.players).map((username) => {
                      return (
                        <div key={username} className='mt-2'>
                          <Avatar name={username} round="10px" size="35px" />
                          <span className='text-slate-50 text-2xl ml-2 align-middle'>{username}</span>
                        </div>
                      )
                    })}
                  </div>
                  {/* <div className='mt-2'>
                          <Avatar name="yy" round="10px" size="35px" />
                          <span className='text-slate-50 text-2xl ml-2 align-middle'>yy</span>
                        </div>
                        <div className='mt-2'>
                          <Avatar name="kaushal" round="10px" size="35px" />
                          <span className='text-slate-50 text-2xl ml-2 align-middle'>kaushal</span>
                        </div> */}

                  {joinedGame && admin && <div className='text-slate-50 text-2xl text-center font-normal opacity-30 mb-2'>GamePin - {gamePin}</div>}

                  {
                    !joinedGame &&
                    <>
                      <input className='text-2xl p-2 mx-4 rounded-md' placeholder='Enter your name' value={username} onChange={(e) => { setUsername(e.target.value); }}></input><div className='pb-6 mt-4'>
                        <button className='clicky-button font-bold' onClick={async (e) => {
                          if (admin) {
                            handleCreateGame();
                          } else {
                            handleJoinGame();
                          }
                        }}>
                          <span>{admin ? "Create" : "Join"}</span></button>
                      </div>
                    </>
                  }

                  {
                    joinedGame && admin && <div className='p-2 mx-4 rounded-md'>
                      <button className='clicky-button font-bold' onClick={async (e) => {
                        await startGameAPI();
                        clearInterval(interval);
                        router.push("/game");
                      }}>
                        <span>Start</span>
                      </button>
                    </div>
                  }


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
