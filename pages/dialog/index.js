import Image from "next/image";
import Head from "next/head";
import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dialog() {
  const [type, setType] = useState(null);
  const router = useRouter();
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    const now = Date.now();
    setStartTime(now);
  }, []);

  const handleChange = (otp) => {
    setOtp(otp);
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
        className="relative w-screen h-screen flex content-center "
        style={{ minHeight: "100vh", minHeight: "-webkit-fill-available" }}
      >
        {/* <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url(/assets/jehoot-bg.svg)"
          }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-40 bg-black"></span>
        </div> */}
        <div className="container relative mx-auto h-full">
          <div className="items-center flex flex-wrap h-full">
            <div className="flex h-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="flex flex-col h-full justify-start items-start">
                <div>
                  <p className="justify-start items-start text-left text-lg">
                    <span className="text-3xl">
                      The Cowardly Lion and the Hungry Tiger - By L. Frank Baum{" "}
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "black" }}>
                      In the splendid palace of the Emerald City, which is in
                      the center of the fairy Land of Oz, is a great Throne
                      Room. <br /> <br />
                      This is where Princess Ozma, the Ruler, sits in a throne
                      of glistening emeralds for an hour each day and listens to
                      all the troubles of her people, which they are sure to
                      tell her about.
                      <br />
                      Around Ozma's throne, on such occasions, are grouped all
                      the important personages of Oz, such as the Scarecrow,
                      Tiktok the Clockwork Man, the Tin Woodman, the Wizard of
                      Oz, and other famous fairy people. Little Dorothy usually
                      has a seat at Ozma's feet, and crouched on either side the
                      throne are two enormous beasts known as the Hungry Tiger
                      and the Cowardly Lion. These two beasts are Ozma's chief
                      guardians. There has never been any disturbance in the
                      great Throne Room, or anything for the guardians to do but
                      look fierce and solemn and keep quiet until the Royal
                      Audience is over and the people go away to their homes.
                      <br />
                      Of course no one would dare be naughty while the huge Lion
                      and Tiger crouched beside the throne; but the fact is, the
                      people of Oz are very seldom naughty. So Ozma's big guards
                      are more ornamental than useful. No one realizes that
                      better than the beasts themselves. One day, after everyone
                      had left the Throne Room except the Cowardly Lion and the
                      Hungry Tiger.
                    </span>
                    <br />
                    <br />
                    <span className="parent">
                      Lion: [yawns] "I'm getting tired of this job. No one is
                      afraid of us and no one pays any attention to us."
                    </span>
                    <span className="child">
                      Tiger: [purring softly] “That is true”. "We might as well
                      be in the thick jungles where we were born, as trying to
                      protect Ozma when she needs no protection. And I'm
                      dreadfully hungry all the time."
                    </span>
                    <span className="parent">
                      Lion: [swaying tail slowly] "You have enough to eat, I'm
                      sure"
                    </span>
                    <span className="child">
                      Tiger: "Enough, perhaps; but not the kind of food I long
                      for. What I'm hungry for is fat babies. I have a great
                      desire to eat a few fat babies. Then, perhaps, the people
                      of Oz would fear me and I'd become more important."
                    </span>
                    <span className="parent">
                      Lion: [agreeing] “True. It would stir up quite a scene if
                      you ate but one fat baby. As for myself, my claws are
                      sharp as needles and strong as crowbars. My teeth are
                      powerful enough to tear a person to pieces in a few
                      seconds. I could spring upon a man and make chop suey of
                      him. There would be wild excitement in the Emerald City.
                      People would fall upon their knees and beg me for mercy.
                      That, in my opinion, would render me very important."
                    </span>
                    <span className="child">
                      Tiger: [sleepily] "After you had torn the person to
                      pieces, what would you do next?"
                    </span>
                    <span className="parent">
                      Lion: "Then I would roar so loudly it would shake the
                      earth and stalk away to the jungle to hide myself, before
                      anyone could attack me or kill me for what I had done."
                    </span>
                    <span className="child">
                      Tiger: “I see. You are really cowardly"
                    </span>
                    <span className="parent">
                      Lion: "To be sure. That is why I am named the Cowardly
                      Lion. That is why I have always been so tame and peaceful.
                      But I'm awfully tired of being tame. And it would be fun
                      to raise a row and show people what a terrible beast I
                      really am." The Tiger remained silent for several minutes,
                      thinking deeply as he slowly washed his face with his left
                      paw.{" "}
                    </span>
                    <span className="child">
                      Tiger: "I'm getting old, and it would please me to eat at
                      least one fat baby before I die. Suppose we surprise these
                      people of Oz and prove our power. What do you say? We will
                      walk out of here just as usual and the first baby we meet
                      I'll eat in a jiffy . And the first man or woman you meet,
                      you will tear to pieces. Then we will both run out of the
                      city gates and gallop across the country and hide in the
                      jungle before anyone can stop us."
                    </span>
                    <span className="parent">
                      Lion: [showing two rows of large sharp teeth] "All right.
                      I'm game,"
                    </span>
                    <span className="child">
                      Tiger: "Seen any of them old Hydrophobies the last day or
                      two?"
                    </span>
                    <span className="parent">
                      Lion: [stood up to prove he was the larger of the two]
                      “come on…” Out of the palace they walked, and met no one.
                      They passed through the beautiful grounds, past fountains
                      and beds of lovely flowers, and met no one. Then they
                      unlatched a gate and entered a street of the city, and met
                      no one
                    </span>
                    <span className="child">
                      Tiger: [walking side by side with lion] "I wonder how a
                      fat baby will taste," said the Tiger, as they stalked
                      majestically along,”
                    </span>
                    <span className="parent">
                      Lion: "I imagine it will taste like nutmegs"
                    </span>
                    <span className="child">
                      Tiger: “No, I've an idea it will taste like gumdrops."
                    </span>
                    <span className="parent">
                      Lion : [thoughtful voice] “I wonder how many pieces I
                      ought to tear a person into,"
                    </span>
                    <span className="child">
                      Tiger: "Sixty would be about right,"
                    </span>
                    <span className="parent">
                      Lion: [asks] "Would that hurt any more than to tear one
                      into about a dozen pieces?"
                    </span>
                    <span className="child">
                      Tiger: [growling] "Who cares whether it hurts or not?"
                      They both meet no one and enter the street. Suddenly they
                      heard a child crying.
                    </span>
                    <span className="child">
                      Tiger: “Aha!, There is my meat” Tiger rushed around a
                      corner, Lion followed him. They see a nice-faced baby
                      sitting in the middle of the street and crying as if in
                      great distress.
                    </span>
                    <span className="child">
                      Tiger: [crouching before the baby] "What's the matter?".
                    </span>
                    <span className="parent">
                      Baby: [wailed] "I--I--I-lost my m-m-mamma!" wailed the
                      baby.
                    </span>
                    <span className="child">
                      Tiger: [softly stroking the child's head with its paw]
                      "Why, you poor little thing?” Don't cry, my dear, for
                      mamma can't be far away. I'll help you find her."{" "}
                    </span>
                    <span className="parent">Lion: "Go on,"</span>
                    <span className="child">Tiger: "Go on where?"</span>
                    <span className="parent">
                      Lion: "Go on and eat your fat baby."
                    </span>
                    <span className="child">
                      Tiger: [asks reproachfully] "Why, you dreadful creature!
                      Would you want me to eat a poor little lost baby?" And the
                      tiger gathered the little one into its strong, hairy arms
                      and tried to comfort it by rocking it gently back and
                      forth. The Lion growled low in his throat and seemed very
                      much disappointed. But at that moment a scream reached
                      their ears and a woman came bounding out of a house and
                      into the street. Seeing her baby in the embrace of the
                      monster Tiger the woman screamed again and rushed forward
                      to rescue it. In her haste she caught her foot in her
                      skirt and tumbled head over heels and heels over head. She
                      stopped with such a bump that she saw many stars in the
                      heavens, although it was broad daylight. And there she
                      lay, in a helpless manner, all tangled up and unable to
                      stir. With one bound and a roar like thunder the huge Lion
                      was beside her. With his strong jaws he grasped her dress
                      and raised her into an upright position.{" "}
                    </span>
                    <span className="parent">
                      Lion: "Poor thing! Are you hurt?" Gasping for breath the
                      woman struggled to free herself and tried to walk, but she
                      limped badly and tumbled down again.
                    </span>
                    <span className="child">Lady: [pleadingly] “My baby!”</span>
                    <span className="parent">
                      Lion: "The baby is all right; don't worry. Keep quiet,
                      now, and I'll carry you back to your house, and the Hungry
                      Tiger will carry your baby."
                    </span>
                    <span className="child">
                      Tiger: [asks in astonishment] "Aren't you going to tear
                      her into sixty pieces?"
                    </span>
                    <span className="parent">
                      Lion: [indignantly] "No, nor into six pieces, I'm not such
                      a brute as to destroy a poor woman who has hurt herself
                      trying to save her lost baby. If you are so cruel and
                      bloodthirsty, you may leave me and go away, for I do not
                      care to associate with you."
                    </span>
                    <span className="child">
                      Tiger: "That's all right. I'm not cruel--not in the
                      least--I'm only hungry. But I thought you were cruel."{" "}
                    </span>
                    <span className="parent">
                      Lion: [with dignity] "Thank heaven I'm respectable,". Lion
                      then raised the woman and with much gentleness carried her
                      into her house, where he laid her upon a sofa. The Tiger
                      followed with the baby, which he safely deposited beside
                      its mother. The little one liked the Hungry Tiger and,
                      grasping the enormous beast by both ears, the baby kissed
                      the beast's nose to show he was grateful and happy.{" "}
                    </span>
                    <span className="child">
                      Lady: "Thank you very much, I've often heard what good
                      beasts you are, in spite of your power to do mischief to
                      mankind. Now I know that the stories are true. I do not
                      think either of you have ever had an evil thought." The
                      Hungry Tiger and the Cowardly Lion hung their heads and
                      did not look into each other's eyes, for both were shamed
                      and humbled. They crept away and stalked back through the
                      streets until they again entered the palace grounds, where
                      they retreated to the pretty, comfortable rooms they
                      occupied at the back of the palace. There they silently
                      crouched in their usual corners to think over their
                      adventure.
                    </span>
                    <span className="child">
                      Tiger: [sleepily] "I don't believe fat babies taste like
                      gumdrops. I'm quite sure they have the flavor of raspberry
                      tarts. My, how hungry I am for fat babies!"{" "}
                    </span>
                    <span className="parent">
                      Lion: [grunted] "You're a humbug,"
                    </span>
                    <span className="child">
                      Tiger: "Am I? Tell me, then, into how many pieces you
                      usually tear your victims, my bold Lion?"
                    </span>
                    <span className="parent">
                      Lion: [impatiently thumped the floor with his tail] "To
                      tear anyone into pieces would soil my claws and blunt my
                      teeth. "I'm glad I didn't miss myself up this afternoon by
                      hurting that poor mother."
                    </span>
                    <span className="child">
                      Tiger: [yawned wide] "You're a coward"
                    </span>
                    <span className="parent">
                      Lion: "Well, it's better to be a coward than to do wrong."
                    </span>
                    <span className="child">
                      Tiger: "And that reminds me that I nearly lost my own
                      reputation. For, had I eaten that fat baby I would not now
                      be the Hungry Tiger. It's better to go hungry, it seems to
                      me, than to be cruel to a little child." And then they
                      dropped their heads on their paws and went to sleep.{" "}
                    </span>
                  </p>
                </div>
                <div className="pb-6">
                  <button
                    className="clicky-button font-bold"
                    onClick={(e) => {
                      if (type) {
                        const afterReadTime = Date.now();
                        localStorage.setItem('timeToRead', afterReadTime-startTime)
                        router.push("/Q&A");
                      } else {
                        setType("story");
                      }
                      e.preventDefault();
                    }}
                  >
                    <span>NEXT</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
