import Image from "next/image";
import Head from "next/head";
import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Test, QuestionGroup, Question, Option } from "react-multiple-choice";

export default function QandA() {
  const [startTime, setStartTime] = useState(0);

  const [q1Ans, setQ1Ans] = useState(null);
  const [q2Ans, setQ2Ans] = useState(null);
  const [q3Ans, setQ3Ans] = useState(null);
  const [q4Ans, setQ4Ans] = useState(null);
  const [q5Ans, setQ5Ans] = useState(null);
  const [q6Ans, setQ6Ans] = useState(null);

  const [q1AnsTime, setQ1AnsTime] = useState(null);
  const [q2AnsTime, setQ2AnsTime] = useState(null);
  const [q3AnsTime, setQ3AnsTime] = useState(null);
  const [q4AnsTime, setQ4AnsTime] = useState(null);
  const [q5AnsTime, setQ5AnsTime] = useState(null);
  const [q6AnsTime, setQ6AnsTime] = useState(null);

  useEffect(() => {
    const now = Date.now();
    setStartTime(now);
  }, []);

  const handleSelectedOptions = (selectedOptions) => {
    console.log(selectedOptions);
    if (selectedOptions[0]) {
      setQ1Ans(selectedOptions[0]);
      const now1 = Date.now();
      setQ1AnsTime(now1 - startTime);
    }
    if (selectedOptions[1]) {
      setQ2Ans(selectedOptions[1]);
      const now2 = Date.now();
      setQ2AnsTime(now2 - startTime);
    }
    if (selectedOptions[2]) {
      setQ3Ans(selectedOptions[2]);
      const now3 = Date.now();
      setQ3AnsTime(now3 - startTime);
    }
    if (selectedOptions[3]) {
      setQ4Ans(selectedOptions[3]);
      const now4 = Date.now();
      setQ4AnsTime(now4 - startTime);
    }
    if (selectedOptions[4]) {
      setQ5Ans(selectedOptions[4]);
      const now5 = Date.now();
      setQ5AnsTime(now5 - startTime);
    }
    if (selectedOptions[5]) {
      setQ6Ans(selectedOptions[5]);
      const now6 = Date.now();
      setQ6AnsTime(now6 - startTime);
    }
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
        className="text-red relative w-screen h-screen flex content-center items-center justify-center"
        style={{ minHeight: "100vh", minHeight: "-webkit-fill-available" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url(/assets/jehoot-bg.svg)",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-40 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto h-full">
          <Test
            onOptionSelect={(selectedOptions) =>
              handleSelectedOptions(selectedOptions)
            }
          >
            <QuestionGroup questionNumber={0}>
              <Question>
                Why are the Lion and the Tiger bored at the beginning of the
                story?
              </Question>
              <Option value="0">The people of Oz rarely misbehave. </Option>
              <Option value="1">
                Nobody acts bad around the Lion and the Tiger.
              </Option>
              <Option value="2">Nobody wants to hurt Ozma.</Option>
              <Option value="3">
                They are bored for ALL of these reasons.
              </Option>
            </QuestionGroup>

            <QuestionGroup questionNumber={1}>
              <Question>
                Which one of these is NOT a reason why the Lion and the Tiger
                make their plan?
              </Question>
              <Option value="0">They want attention. </Option>
              <Option value="1">They want to feel more important.</Option>
              <Option value="2">They are bored.</Option>
              <Option value="3">They need to be fed more food.</Option>
            </QuestionGroup>

            <QuestionGroup questionNumber={2}>
              <Question>
                Which is NOT part of the Lion and Tiger's plan?
              </Question>
              <Option value="0">
                The Lion will tear up the first person he sees.
              </Option>
              <Option value="1">The Tiger will eat a baby.</Option>
              <Option value="2">The Lion will become the king of Oz.</Option>
              <Option value="3">
                They will hide in the jungle after it is done.
              </Option>
            </QuestionGroup>

            <QuestionGroup questionNumber={3}>
              <Question>
                According to the text, which of the following is true?
              </Question>
              <Option value="0">The Lion is bigger than the Tiger. </Option>
              <Option value="1">The Lion is hungrier than the Tiger.</Option>
              <Option value="2">The Tiger is braver than the Lion. </Option>
              <Option value="3">The Lion is smaller than the Tiger.</Option>
            </QuestionGroup>

            <QuestionGroup questionNumber={4}>
              <Question>
                How motivated the Lion and the Tiger were to follow through on
                their plan?
              </Question>
              <Option value="0">
                The Lion and the Tiger were very serious about wanting to hurt
                people.
              </Option>
              <Option value="1">
                The Lion was just trying to sound brave but the Tiger almost ate
                someone.
              </Option>
              <Option value="2">
                The Lion and the Tiger never had any real intentions of hurting
                anyone.
              </Option>
              <Option value="3">
                The Lion might have eaten that woman had the Tiger not talked
                him out of it.
              </Option>
            </QuestionGroup>

            <QuestionGroup questionNumber={5}>
              <Question>
                Which best describes the narrator's tone in this sentence from
                the last paragraph? "Tell me, then, into how many pieces you
                usually tear your victims, my bold Lion?"
              </Question>
              <Option value="0">Sincere</Option>
              <Option value="1">Sarcastic</Option>
              <Option value="2">Spiteful</Option>
              <Option value="3">Sweet</Option>
            </QuestionGroup>
          </Test>
        </div>
      </div>
    </>
  );
}
