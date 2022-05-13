import Image from 'next/image';
import Head from 'next/head';
import OtpInput from 'react-otp-input';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'


export default function Story() {
  const [type, setType] = useState(null);
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
      <div className="relative w-screen h-screen flex content-center " style={{ minHeight: '100vh', minHeight: '-webkit-fill-available' }}>
        {/* <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url(/assets/jehoot-bg.svg)"
          }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-40 bg-black"></span>
        </div> */}
        <div className="container relative mx-auto h-full">
          <div className="items-center flex flex-wrap h-full">
            <div className="flex h-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className='flex flex-col h-full justify-start items-start'>
              <div>
        <p className='justify-start items-start text-left text-lg'>
          <span className='text-3xl'>The Cowardly Lion and the Hungry Tiger  - By L. Frank Baum </span><br/><br/>
          <span className="text-black" style={{'whiteSpace': 'pre-wrap'}}>
          In the splendid palace of the Emerald City, which is in the center of the fairy Land of Oz, is a great Throne Room. This is where Princess Ozma, the Ruler, sits in a throne of glistening emeralds for an hour each day and listens to all the troubles of her people, which they are sure to tell her about. Around Ozma's throne, on such occasions, are grouped all the important personages 1 of Oz, such as the Scarecrow, Tiktok the Clockwork Man, the Tin Woodman, the Wizard of Oz, and other famous fairy people. Little Dorothy usually has a seat at Ozma's feet, and crouched on either side the throne are two enormous beasts known as the Hungry Tiger and the Cowardly Lion.<br/>
These two beasts are Ozma's chief guardians, but as everyone loves the beautiful girl Princess there has never been any disturbance in the great Throne Room, or anything for the guardians to do but look fierce and solemn2 and keep quiet until the Royal Audience is over and the people go away to their homes.<br/>
Of course no one would dare be naughty while the huge Lion and Tiger crouched beside the throne; but the fact is, the people of Oz are very seldom naughty. So Ozma's big guards are more ornamental3 than useful. No one realizes that better than the beasts themselves.<br/>
One day, after everyone had left the Throne Room except the Cowardly Lion and the Hungry Tiger, the Lion yawned and said to his friend: "I'm getting tired of this job. No one is afraid of us and no one pays any attention to us."<br/>
"That is true," replied the big Tiger, purring softly. "We might as well be in the thick jungles where we were born, as trying to protect Ozma when she needs no protection. And I'm dreadfully hungry all the time."<br/>
"You have enough to eat, I'm sure," said the Lion, swaying his tail slowly back and forth.<br/>
"Enough, perhaps; but not the kind of food I long for," answered the Tiger. "What I'm hungry for is fat babies. I have a great desire to eat a few fat babies. Then, perhaps, the people of Oz would fear me and I'd become more important."<br/>
"True," agreed the Lion. "It would stir up quite a scene if you ate but one fat baby. As for myself, my claws are sharp as needles and strong as crowbars. My teeth are powerful enough to tear a person to pieces in a few seconds. I could spring upon a man and make chop suey of him. There would be wild excitement in the Emerald City. People would fall upon their knees and beg me for mercy. That, in my opinion, would render me very important."<br/>
"After you had torn the person to pieces, what would you do next?" asked the Tiger sleepily.<br/>
"Then I would roar so loudly it would shake the earth and stalk away to the jungle to hide myself, before anyone could attack me or kill me for what I had done."<br/>
"I see," nodded the Tiger. "You are really cowardly."<br/>
"To be sure. That is why I am named the Cowardly Lion. That is why I have always been so tame and peaceable. But I'm awfully tired of being tame," added the Lion, with a sigh, "and it would be fun to raise a row and show people what a terrible beast I really am."<br/>
The Tiger remained silent for several minutes, thinking deeply as he slowly washed his face with his left paw. Then he said:"I'm getting old, and it would please me to eat at least one fat baby before I die. Suppose we surprise these people of Oz and prove our power. What do you say? We will walk out of here just as usual and the first baby we meet I'll eat in a jiffy4. And the first man or woman you meet, you will tear to pieces. Then we will both run out of the city gates and gallop across the country and hide in the jungle before anyone can stop us."<br/>
"All right. I'm game," said the Lion, yawning again so that he showed two rows of large sharp teeth.<br/>
The Tiger got up and stretched his great, sleek body. "Seen any of them old Hydrophobies the last day or two?"<br/>
"Come on," he said. The Lion stood up and proved he was the larger of the two, for he was almost as big as a small horse.<br/>
Out of the palace they walked, and met no one. They passed through the beautiful grounds, past fountains and beds of lovely flowers, and met no one. Then they unlatched a gate and entered a street of the city, and met no one. "I wonder how a fat baby will taste," said the Tiger, as they stalked majestically5 along, side by side.<br/>
"I imagine it will taste like nutmegs," said the Lion.<br/>
"No," said the Tiger, "I've an idea it will taste like gumdrops."<br/>
They turned a corner, but met no one, for the people of the Emerald City usually take their naps at this hour of the afternoon.<br/>
"I wonder how many pieces I ought to tear a person into," said the Lion, in a thoughtful voice.<br/>
"Sixty would be about right," suggested the Tiger.<br/>
"Would that hurt any more than to tear one into about a dozen pieces?" asked the Lion, with a little shudder.<br/>
"Who cares whether it hurts or not?" growled the Tiger.<br/>
The Lion did not reply. They entered a side street, but met no one.Suddenly they heard a child crying.<br/>
"Aha!" exclaimed the Tiger. "There is my meat."<br/>
He rushed around a corner, the Lion following, and came upon a nice fat baby sitting in the middle of the street and crying as if in great distress.<br/>
"What's the matter?" asked the Tiger, crouching before the baby. "I--I--I-lost my m-m-mamma!" wailed the baby.<br/>
"Why, you poor little thing," said the great beast, softly stroking the child's head with its paw. "Don't cry, my dear, for mamma can't be far away. I'll help you find her."<br/>
"Go on," said the Lion, who stood by.<br/>
"Go on where?" asked the Tiger, looking up. "Go on and eat your fat baby."<br/>
"Why, you dreadful creature!" said the Tiger reproachfully7. "Would you want me to eat a poor little lost baby?" <br/>
And the beast gathered the little one into its strong, hairy arms and tried to comfort it by rocking it gently back and forth.<br/>
The Lion growled low in his throat and seemed very much disappointed. But at that moment a scream reached their ears and a woman came bounding out of a house and into the street. Seeing her baby in the embrace of the monster Tiger the woman screamed again and rushed forward to rescue it. In her haste she caught her foot in her skirt and tumbled head over heels and heels over head. She stopped with such a bump that she saw many stars in the heavens, although it was broad daylight. And there she lay, in a helpless manner, all tangled up and unable to stir. With one bound and a roar like thunder the huge Lion was beside her. With his strong jaws he grasped her dress and raised her into an upright position.<br/>
"Poor thing! Are you hurt?" he gently asked.<br/>
Gasping for breath the woman struggled to free herself and tried to walk, but she limped badly and tumbled down again.<br/>
"My baby!" she said pleadingly.<br/>
"The baby is all right; don't worry," replied the Lion; and then he added: "Keep quiet, now, and I'll carry you back to your house, and the Hungry Tiger will carry your baby."<br/>
The Tiger, who had approached the place with the child in its arms, asked in astonishment:<br/>
"Aren't you going to tear her into sixty pieces?"<br/>
"No, nor into six pieces," answered the Lion indignantly8. "I'm not such a brute as to destroy a poor woman who has hurt herself trying to save her lost baby. If you are so cruel and bloodthirsty, you may leave me and go away, for I do not care to associate with you."<br/>
"That's all right," answered the Tiger. "I'm not cruel--not in the least--I'm only hungry. But I thought you were cruel."<br/>
"Thank heaven I'm respectable," said the Lion, with dignity. He then raised the woman and with much gentleness carried her into her house, where he laid her upon a sofa.<br/>
The Tiger followed with the baby, which he safely deposited beside its mother. The little one liked the Hungry Tiger and, grasping the enormous beast by both ears, the baby kissed the beast's nose to show he was grateful and happy.<br/>
"Thank you very much," said the woman. "I've often heard what good beasts you are, in spite of your power to do mischief to mankind. Now I know that the stories are true. I do not think either of you have ever had an evil thought."<br/>
The Hungry Tiger and the Cowardly Lion hung their heads and did not look into each other's eyes, for both were shamed and humbled. They crept away and stalked back through the streets until they again entered the palace grounds, where they retreated to the pretty, comfortable rooms they occupied at the back of the palace. There they silently crouched in their usual corners to think over their adventure.<br/>
After a while the Tiger said sleepily:<br/>
"I don't believe fat babies taste like gumdrops. I'm quite sure they have the flavor of raspberry tarts. My, how hungry I am for fat babies!"<br/>
The Lion grunted. "You're a humbug," said he.<br/>
"Am I?" retorted the Tiger, with a sneer. "Tell me, then, into how many pieces you usually tear your victims, my bold Lion?"<br/>
The Lion impatiently thumped the floor with his tail. "To tear anyone into pieces would soil my claws and blunt my teeth," he said. "I'm glad I didn't muss myself up this afternoon by hurting that poor mother."<br/>
The Tiger looked at him steadily and then yawned a wide, wide yawn. "You're a coward," he remarked.<br/>
"Well," said the Lion, "it's better to be a coward than to do wrong."<br/>
"To be sure," answered the other. "And that reminds me that I nearly lost my own reputation. For, had I eaten that fat baby I would not now be the Hungry Tiger. It's better to go hungry, seems to me, than to be cruel to a little child."<br/>
And then they dropped their heads on their paws and went to sleep.<br/>
          </span>

        </p>
      </div >
      <div className='pb-6'>
                    <button className='clicky-button font-bold' onClick={(e) => {
                      if (type) {
                        router.push('/Q&A')
                      }
                      else {
                        setType('story');
                      }
                      e.preventDefault();
                    }}>
                      <span>NEXT</span></button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
