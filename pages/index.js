import Image from 'next/image';
import Head from 'next/head';
import OtpInput from 'react-otp-input';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'


export default function Home() {
  const [otp, setOtp] = useState(null);
  const [joining, setJoining] = useState(false);
  const router = useRouter()

  useEffect(() => {
    localStorage.clear();
  }, [])

  const handleChange = (otp) => {
    setOtp(otp);
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
              <div className='flex flex-col h-full justify-center items-center'>

                <div className='flex h-3/6 flex-col items-center justify-center pt-12'>
                  <div className="text-white text-2xl md:text-3xl text-center font-normal">Welcome!<br /><br />Please chose an option as instructed by your admin to continue. </div>
                  {/* <div>
                    <Image src={"/assets/Jehoot-logo.svg"} alt="Hello" width={300} height={170} />
                  </div> */}
                </div>

                {/* <div className='flex h-2/6 justify-center items-center'>
                  <img className='mx-auto' src={"/assets/pog-frog.png"} alt="Hello" style={{ maxWidth: '40%', height: 'auto', width: 'auto', textAlign: 'center' }}></img>
                </div> */}

                <div className='flex h-2/6 flex-col'>

                  {/* {joining && <OtpInput
                    containerStyle={{ 'padding-bottom': '10px', 'padding-top': '10px', 'font-size': '20px' }}
                    inputStyle={{ 'height': '45px', width: '45px', 'border-radius': '15px'}}
                    value={otp}
                    onChange={handleChange}
                    shouldAutoFocus={true}
                    numInputs={6}
                    separator={<span>-</span>}
                  />} */}

                  <div className="text-white text-2xl text-center">Roleplay the conversation on the next page with your child. <br />
                    Try to mimic the expression specified in front of the dialogue. <br />
                    <br />
                    <b>Parent</b> reads the story when its <span className='text-blue-400'>blue</span> and <span className='text-green-400'>green</span> for the <b>child</b>.</div>

                  <div className="text-white text-2xl text-center">Please narrate the story in the next page to your child and answer any questions that may follow. 
                    Try to mimic the expression specified in front of the dialogue. <br />
                    <br />
                    <b>Parent</b> reads the story when its <span className='text-blue-400'>blue</span> and <span className='text-green-400'>green</span> for the <b>child</b>.</div>

                  <div className='pb-6 pt-4'>
                    <button className='clicky-button font-bold' onClick={(e) => {
                      e.preventDefault();
                      router.push('/story')
                    }}>
                      <span>Story</span></button>
                  </div>


                  <div className='pb-6'>
                    <button className='clicky-button font-bold' onClick={(e) => {
                      e.preventDefault();
                      router.push('/dialog')
                    }}><span>Dialog</span></button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
