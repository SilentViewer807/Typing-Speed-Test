import React, { useRef, useState, useEffect } from "react";
import "./Text.css";

// Text Variables
const textArrays = {
  Easy: [
    `Two travellers were on the road together, when a bear suddenly appeared on the scene. Before he observed them, one ran to a tree at the side of the road, and climbed up into the branches and hid there. The other was not so nimble as his companion, and, as he could not escape, he threw himself on the ground and pretended to be dead. The bear came up and sniffed all round him, but he kept perfectly still and held his breath, for they say that a bear will not touch a dead body. The bear took him for a corpse, and went away. When the coast was clear, the traveller in the tree came down, and asked the other what it was the bear had whispered to him when he put his mouth to his ear. The other replied, “He told me to never again travel with a friend who deserts you at the first sign of danger.”`,
    `A bat, a bramble, and a seagull became partners and were determined to go on a trading adventure together. The bat borrowed a sum of money for his venture, the bramble laid in a stock of clothes of various kinds, and the seagull took a large amount of lead, and so they set out. By and by a great storm came on, and their boat with all the cargo went to the bottom, but the three travellers managed to reach land. Ever since then, the seagull flies to and fro over the sea, and every now and then dives below the surface, looking for the lead he's lost, while the bat is so afraid of meeting his creditors that he hides away by day and only comes out at night to feed, and the bramble catches hold of the clothes of everyone who passes by, hoping some day to recognise and recover the lost garments.`,
    `A crow was sitting on the branch of a tree with a piece of cheese in her beak when a fox observed her and set his wits to work to discover some way of getting the cheese. Coming and standing under the tree he looked up and said, “What a magnificent bird up there! She is the most beautiful one I have ever seen, and her colors are truly lovely. If only her voice is as sweet as her looks are fair, she ought without doubt to be queen of the birds.” The crow was hugely flattered by this, and just to show the fox that she could sing she gave a loud caw. Down came the cheese, of course, and the fox, snatching it up, said, “You have a voice, madam, I see what you want is wits.”`,
    `A certain man had seven sons who were always arguing with one another, and, try as he might, he could not get them to live together in harmony. So he was determined to convince them of their folly by the following means. Bidding them fetch a bundle of sticks, he invited each in turn to break it across his knee. All tried and all failed, and then he undid the bundle, and handed them the sticks one by one, when they had no difficulty at all in breaking them. He said, “United, you are stronger than your enemies, but if you argue and separate, your weakness will put you at the mercy of those who attack you.”`,
    `The birds were at war with the beasts, and many battles were fought with varying success on both sides. The bat did not commit to either side, but when things went well for the birds, he was found fighting in their ranks, when, on the other hand, the beasts got the upper hand, he was to be found fighting among the beasts. No one paid any attention to him while the war lasted, but when it was over, and peace was restored, neither the birds nor the beasts would have anything to do with the traitor, and so he remains to this day an outcast from them both.`
  ],
  Medium: [
    `A farmer's daughter had been out to milk the cows, and was returning to the dairy carrying her pail of milk upon her head. As she walked along, she fell a-musing after this fashion: “The milk in this pail will provide me with cream, which I will make into butter and take to market to sell. With the money I will buy a number of eggs, and these, when hatched, will produce chickens, and by and by I shall have quite a large poultry-yard. Then I shall sell some of my fowls, and with the money which they will bring in I will buy myself a new gown, which I shall wear when I go to the fair; and all the young fellows will admire it, and come and make love to me, but I shall toss my head and have nothing to say to them.” Forgetting all about the pail, and suiting the action to the word, she tossed her head. Down went the pail, all the milk was spilled, and all her fine castles in the air vanished in a moment!`,
    `A Lion asleep in his lair was waked up by a Mouse running over his face. Losing his temper he seized it with his paw and was about to kill it. The Mouse, terrified, piteously entreated him to spare its life. “Please let me go,” it cried, “and one day I will repay you for your kindness.” The idea of so insignificant a creature ever being able to do anything for him amused the Lion so much that he laughed aloud, and good-humouredly let it go. But the Mouse's chance came, after all. One day the Lion got entangled in a net which had been spread for game by some hunters, and the Mouse heard and recognised his roars of anger and ran to the spot. Without more ado it set to work to gnaw the ropes with its teeth, and succeeded before long in setting the Lion free. “There!” said the Mouse, “you laughed at me when I promised I would repay you: but now you see, even a Mouse can help a Lion.”`,
    `Time was when the Frogs were discontented because they had no one to rule over them: so they sent a deputation to Jupiter to ask him to give them a King. Jupiter, despising the folly of their request, cast a log into the pool where they lived, and said that it should be their King. The Frogs were terrified at first by the splash, and scuttled away into the deepest parts of the pool; but by and by, when they saw that the log remained motionless, one by one they ventured to the surface again, and before long, growing bolder, they began to feel such contempt for it that they even took to sitting upon it. Thinking that a King of that sort was an insult to their dignity, they sent to Jupiter a second time, and begged him to take away the sluggish King he had given them, and to give them another and a better one. Jupiter, annoyed at being pestered in this way, sent a Stork to rule over them, who no sooner arrived among them than he began to catch and eat the Frogs as fast as he could.`,
    `A very unskilful Cobbler, finding himself unable to make a living at his trade, gave up mending boots and took to doctoring instead. He gave out that he had the secret of a universal antidote against all poisons, and acquired no small reputation, thanks to his talent for puffing himself. One day, however, he fell very ill; and the King of the country bethought him that he would test the value of his remedy. Calling, therefore, for a cup, he poured out a dose of the antidote, and, under pretence of mixing poison with it, added a little water, and commanded him to drink it. Terrified by the fear of being poisoned, the Cobbler confessed that he knew nothing about medicine, and that his antidote was worthless. Then the King summoned his subjects and addressed them as follows: “What folly could be greater than yours? Here is this Cobbler to whom no one will send his boots to be mended, and yet you have not hesitated to entrust him with your lives!”`,
    `There was war between the Mice and the Weasels, in which the Mice always got the worst of it, numbers of them being killed and eaten by the Weasels. So they called a council of war, in which an old Mouse got up and said, “It's no wonder we are always beaten, for we have no generals to plan our battles and direct our movements in the field.” Acting on his advice, they chose the biggest Mice to be their leaders, and these, in order to be distinguished from the rank and file, provided themselves with helmets bearing large plumes of straw. They then led out the Mice to battle, confident of victory: but they were defeated as usual, and were soon scampering as fast as they could to their holes. All made their way to safety without difficulty except the leaders, who were so hampered by the badges of their rank that they could not get into their holes, and fell easy victims to their pursuers.`
  ],
  Hard: [
    `Roses ruddy and roses white, What are the joys that my heart discloses? Sitting alone in the fading light. Memories come to me here to-night, with the wonderful scent of the big red roses. Memories come as the daylight fades Down on the hearth where the firelight dozes; flicker and flutter the lights and shades, and I see the face of a queen of maids, whose memory comes with the scent of roses. Visions arise of a scene of mirth, and a ball-room belle that superbly poses— a queenly woman of queenly worth, and I am the happiest man on earth. With a single flower from a bunch of roses. Only her memory lives to-night— God in His wisdom her young life closes; over her grave may the turf be light, cover her coffin with roses white— she was always fond of the big white roses. Such are the visions that fade away— man proposes and God disposes; look in the glass and I see to-day. Only an old man, worn and grey, bending his head to a bunch of roses.`,
    `Take of English earth as much As either hand may rightly clutch. In the taking of it breathe prayer for all who lie beneath. Not the great nor well-bespoke, but the mere uncounted folk of whose life and death is none report or lamentation. Lay that earth upon thy heart, and thy sickness shall depart! It shall sweeten and make whole fevered breath and festered soul. It shall mightily restrain over-busied hand and brain, it shall ease thy mortal strife 'Gainst the immortal woe of life, till thyself, restored, shall prove by what grace the heavens do move. Take of English flowers these spring's full-faced primroses, summer's wild wide-hearted rose, autumn's wall-flower of the close, and, thy darkness to illume, winter's bee-thronged ivy-bloom. Seek and serve them where they bide from Candlemas to Christmas-tide, for these simples, used aright, can restore a failing sight. These shall cleanse and purify webbed and inward-turning eye; these shall show thee treasure hid thy familiar fields amid; at thy threshold, on thy hearth, or about thy daily path; and reveal (which is thy need) every man a King indeed!`,
    `Chiming a dream by the way with ocean's rapture and roar, I met a maiden to-day walking alone on the shore: walking in maiden wise, modest and kind and fair, the freshness of spring in her eyes and the fulness of spring in her hair. Cloud-shadow and scudding sun-burst were swift on the floor of the sea, and a mad wind was romping its worst, but what was their magic to me? Or the charm of the midsummer skies? I only saw she was there, a dream of the sea in her eyes and the kiss of the sea in her hair. I watched her vanish in space; she came where I walked no more; but something had passed of her grace to the spell of the wave and the shore; and now, as the glad stars rise, she comes to me, rosy and rare, the delight of the wind in her eyes and the hand of the wind in her hair.`,
    `Let us cease our idle chatter, let the tears bedew our cheek, for a man from Tallangatta has been missing for a week. Where the roaring flooded Murray covered all the lower land, there he started in a hurry, with a bottle in his hand. And his fate is hid for ever, but the public seem to think that he slumbered by the river, 'Neath the influence of drink. And they scarcely seem to wonder that the river, wide and deep, never woke him with its thunder, never stirred him in his sleep. As the crashing logs came sweeping, and their tumult filled the air, then M'Ginnis murmured, sleeping, 'Tis a wake in ould Kildare.' So the river rose and found him sleeping softly by the stream, and the cruel waters drowned him ere he wakened from his dream. And the blossom-tufted wattle, blooming brightly on the lea, saw M'Ginnis and the bottle going drifting out to sea.`,
    `I think that I shall never know why I am thus, and I am so. Around me, other girls inspire in men the rush and roar of fire. The sweet transparency of glass, the tenderness of April grass, the durability of granite; but me—I don't know how to plan it. The lads I've met in Cupid's deadlock were—shall we say?—born out of wedlock. They broke my heart, they stilled my song, and said they had to run along, explaining, so to sop my tears, first came their parents or careers. But ever does experience deny me wisdom, calm, and sense! Though she's a fool who seeks to capture the twenty-first fine, careless rapture, I must go on, till ends my rope, who from my birth was cursed with hope. A heart in half is chaste, archaic; but mine resembles a mosaic— the thing's become ridiculous! Why am I so? Why am I thus?`
  ]
};

const words = [
  "and","second","would","first","on","the","is","at","which","to","of","for","in","that","was","his","with","as","are","be","this","have","from","or","had","by","not","but","what","all","were","when","we","there","can","an","your","which","their","said","if","do","will","each","about","how","up","out","them","then","she","many","some","her","so","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","been","call","who","its","now","find","long","down","day","did","get","come","made","may","part","attach","eager","high-pitched","imaginary","thick","creator","found", "infamous","continue","bag","proud","type","wound","medium","whistle","rob","complain","five","offer","windy","dinosaurs","brash","broken","cushion","cherries","faint","abnormal","competition","immense","insane","error","company","curious","crayon","repair","border","strange","peel","advertisement","release","recess","children","cent","jewel","ajar","hungry","furtive","workable","desert","reaction","terrify","wide","birth","cake","rule","plane","observant","wheel","seal","donkey","mature","shocking","yoke","wandering","develop","language","spoon","free","sleepy","upset","well","hopeful","hateful","low","mass","elastic","frightened","satisfying","flaky","provide","trap","snail","last","kind","fowl","pencil", "army","bit","undesirable","honorable","ahead","record","high","own","naughty","quack","lip","vase","extra-large","yawn","year","leather","lunch","land","milk","sneaky","brown","keen","collect","pour","surround","hot","basket","quirky","excite","massive","clip","teeny-tiny","transport","elfin","loose","carriage","better","humdrum","cheerful","condemned","living","godly","deadpan","month","promise","sour", "dull","soup","twist","toothsome","crook","pick","true","wool","poke","holiday", "robin","scare","plan","ethereal","melt","bounce","nosy","certain","impartial","examine","yard","fast","spectacular","scandalous","fit","precede","near","pretty","fresh","songs","festive","sly","tidy","exercise","skinny","succeed","gullible","premium","threatening","tent","tired","command","sisters","stone","parallel","smart","disappear","castle","amusing","wreck","ice","secret","next","zip","part","magical","industry","helpless","polite","nonchalant","cruel","wealthy","standing","annoying","lace","beam","structure"
];

const Text = ({ difficulty, onStatsUpdate, adjustedTime }) => {
  // Variables
  const [displayText, setDisplayText] = useState("");
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [charStates, setCharStates] = useState([]);
  const [previousText, setPreviousText] = useState("");

  const containerRef = useRef(null);
  const textContentRef = useRef(null);
  const hiddenInputRef = useRef(null);

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [lastCorrect, setLastCorrect] = useState(true);

  // Get Text
  const selectNewText = (currentDifficulty, previousTextValue = "") => {
    if (currentDifficulty === "Jumbled") {
      // Jumbled
      const jumbledWords = [];
      for (let i = 0; i < 240; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        jumbledWords.push(words[randomIndex]);
      }
      return jumbledWords.join(" ");
    } else {
      // Easy, Medium, Hard
      const stories = textArrays[currentDifficulty];

      // Not The Same Story
      const availableStories = stories.filter(story => story !== previousTextValue);

      const storyPool = availableStories.length > 0 ? availableStories : stories;

      const randomIndex = Math.floor(Math.random() * storyPool.length);
      return storyPool[randomIndex];
    }
  };

  // Text
  useEffect(() => {
    const newText = selectNewText(difficulty, previousText);
    setDisplayText(newText);
    setPreviousText(newText);
  }, [difficulty]);

  // Container And States
  useEffect(() => {
    // Line Width Based On Container
    if (!displayText) return;

    const ctx = document.createElement("canvas").getContext("2d");
    ctx.font = "20px Arial";

    const maxWidth = containerRef.current.offsetWidth * 0.68;
    const words = displayText.split(" ");

    const newLines = [];
    let current = "";

    for (let w of words) {
      const test = current.length ? current + " " + w : w;
      const width = ctx.measureText(test).width;

      if (width > maxWidth) {
        newLines.push(current);
        current = w;
      } else {
        current = test;
      }
    }

    if (current) newLines.push(current);
    setLines(newLines);

    // Character States
    const totalChars = newLines.reduce((sum, line) => sum + line.length, 0);
    setCharStates(new Array(totalChars).fill(null));

    setCurrentLine(0);
    setCurrentChar(0);
    setLastCorrect(true);
    
    // Scroll To Top
    if (textContentRef.current) {
      textContentRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [displayText]);

  // Shared Input Handler
  const processInputCharacter = (key) => {
    if (lines.length === 0) return;

    const currentLineText = lines[currentLine];
    const lineFinished = currentChar >= currentLineText.length;
    const isLastLine = currentLine === lines.length - 1;

    // Space At End Of Line Check
    if (lineFinished) {
      if (key === " ") {
        setCorrectCount(c => c + 1);
        setLastCorrect(true);
      } else {
        if (lastCorrect === true) {
          setIncorrectCount(i => i + 1);
          setLastCorrect(false);
        } else {
          return;
        }
      }
    }

    // Character Evaluation
    if (key.length === 1) {
      if (lineFinished) {
        if (currentLine < lines.length - 1) {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);

          if (textContentRef.current) {
            const lineHeight = 54;
            textContentRef.current.scrollTo({
              top: (currentLine + 1) * lineHeight,
              behavior: "smooth"
            });
          }
        } else {
          const newText = selectNewText(difficulty, displayText);
          setDisplayText(newText);
          setPreviousText(newText);
        }
        return;
      }

      const expectedChar = currentLineText[currentChar];
      const isCorrect = key === expectedChar;

      if (isCorrect) {
        setCorrectCount(c => c + 1);
        setLastCorrect(true);
      } else {
        if (lastCorrect === true) {
          setIncorrectCount(i => i + 1);
          setLastCorrect(false);
        } else {
          return;
        }
      }

      if (currentChar >= currentLineText.length - 1 && isLastLine) {
        const newText = selectNewText(difficulty, displayText);
        setDisplayText(newText);
        setPreviousText(newText);
        return;
      }

      let absolutePos = 0;
      for (let i = 0; i < currentLine; i++) absolutePos += lines[i].length;
      absolutePos += currentChar;

      const newCharStates = [...charStates];
      newCharStates[absolutePos] = isCorrect ? "correct" : "incorrect";
      setCharStates(newCharStates);

      setCurrentChar(prev => prev + 1);
    }
  };

  // Keyboard Input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lines.length === 0) return;

      const currentLineText = lines[currentLine];
      const lineFinished = currentChar >= currentLineText.length;
      const isLastLine = currentLine === lines.length - 1;

      // Space
      if (lineFinished) {
        if (e.key === " ") {
          setCorrectCount(c => c + 1);
          setLastCorrect(true);
        } else {
          if (lastCorrect === true) {
            setIncorrectCount(i => i + 1);
            setLastCorrect(false);
          } else {
            return;
          }
        }
      }

      // Character
      if (e.key.length === 1) {
        // Next Line
        if (lineFinished) {
          if (currentLine < lines.length - 1) {
            setCurrentLine(prev => prev + 1);
            setCurrentChar(0);

            // Scroll Down
            if (textContentRef.current) {
              const lineHeight = 54;
              textContentRef.current.scrollTo({
                top: (currentLine + 1) * lineHeight,
                behavior: "smooth"
              });
            }
          } else {
            // Last Line - Refresh Text
            const newText = selectNewText(difficulty, displayText);
            setDisplayText(newText);
            setPreviousText(newText);
          }
          e.preventDefault();
          return;
        }

        // Normal Character
        const expectedChar = currentLineText[currentChar];
        const typedChar = e.key;

        // Correct/Incorrect 
        const isCorrect = typedChar === expectedChar;
        if (isCorrect) {
          setCorrectCount(c => c + 1);
          setLastCorrect(true);
        }
        else {
          if (lastCorrect === true) {
            setIncorrectCount(i => i + 1);
            setLastCorrect(false);
          } else {
            return;
          }
        }

        // Last Line?
        if (currentChar >= currentLineText.length - 1 && isLastLine) {
          const newText = selectNewText(difficulty, displayText);
          setDisplayText(newText);
          setPreviousText(newText);
          e.preventDefault();
          return;
        }

        // Calculate Text Position
        let absolutePos = 0;
        for (let i = 0; i < currentLine; i++) absolutePos += lines[i].length;
        absolutePos += currentChar;

        // States
        const newCharStates = [...charStates];
        newCharStates[absolutePos] = isCorrect ? "correct" : "incorrect";
        setCharStates(newCharStates);

        // Move cursor
        setCurrentChar(prev => prev + 1);
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lines, currentLine, currentChar, charStates, difficulty, displayText, correctCount, incorrectCount, lastCorrect]);

  // Stats
  useEffect(() => {
    const totalTyped = correctCount + incorrectCount;
    const accuracy = totalTyped > 0 ? (correctCount / totalTyped) * 100 : 100;

    const rawCPM = totalTyped;
    const rawWPM = rawCPM / 5;

    const timeFactor = adjustedTime / 60;

    const cpm = timeFactor > 0 ? rawCPM / timeFactor : 0;
    const wpm = timeFactor > 0 ? rawWPM / timeFactor : 0;

    onStatsUpdate({
      wpm: Math.floor(wpm),
      cpm: Math.floor(cpm),
      accuracy: Math.floor(accuracy)
    });
  }, [correctCount, incorrectCount, adjustedTime]);

  // Render Characters With States
  const renderLine = (line, lineIndex) => {
    let absoluteStart = 0;
    for (let i = 0; i < lineIndex; i++) {
      absoluteStart += lines[i].length;
    }

    const isCurrentLine = lineIndex === currentLine;
    const isLineFinished = isCurrentLine && currentChar === line.length;

    return (
      <>
        {/* States And Cursor */}
        {line.split('').map((char, charIndex) => {
          const absolutePos = absoluteStart + charIndex;
          const state = charStates[absolutePos];
          const isCurrentPos = isCurrentLine && charIndex === currentChar;
          return (
            <span
              key={charIndex}
              className="char-wrapper"
              aria-hidden="true"
            >
              {isCurrentPos && <span className="cursor"></span>}
              <span className={`char ${state ? state : ''}`}>
                {char}
              </span>
            </span>
          );
          
        })}

        {/* End Of Line Cursor */}
        {isLineFinished && (
          <span
            className="end-cursor-container"
            aria-hidden="true"
          >
            <span className="end-cursor-wrapper">
              <span
                className="cursor"
                aria-hidden="true"
              ></span>
            </span>
          </span>
        )}
      </>
    );
  };

  useEffect(() => {
    // Focus Input
    const focusInput = () => {
      if (hiddenInputRef.current) {
        hiddenInputRef.current.focus({ preventScroll: true });
      }
    };

    // Attempt Focus For iOS Safari
    focusInput();
    setTimeout(focusInput, 50);
    setTimeout(focusInput, 150);
    setTimeout(focusInput, 300);

    // Refocus On Tap
    const handlePointerDown = () => focusInput();
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [displayText]);

  // Mobile & Native Input Listener
  useEffect(() => {
    const handleInput = (e) => {
      const value = e.target.value;
      if (value.length > 0) {
        const char = value[value.length - 1];

        processInputCharacter(char);
        
        e.target.value = "";
      }
    };

    const inputEl = hiddenInputRef.current;
    if (inputEl) inputEl.addEventListener("input", handleInput);

    return () => {
      if (inputEl) inputEl.removeEventListener("input", handleInput);
    };
  }, [lines, currentLine, currentChar, charStates, difficulty, displayText, correctCount, incorrectCount, lastCorrect]);

  // Elements
  return (
    <>
      <label htmlFor="typing-test-input" className="sr-only" style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: '0'
      }}>
        Type the text displayed below
      </label>
      <input
        id="typing-test-input"
        ref={hiddenInputRef}
        type="text"
        inputMode="text"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        style={{
          position: "absolute",
          opacity: 0,
          zIndex: -1,
          left: 0,
          top: 0,
        }}
      />

      <h2
        id="typing-passage-heading"
        className="sr-only"
      >
        Typing Test Passage
      </h2>
      <div
        className="text-container"
        ref={containerRef}
        role="region"
        aria-labelledby="typing-passage-heading"
      >
        <p className="sr-only">
          {displayText}
        </p>
        <div
          className="text-content"
          ref={textContentRef}
          aria-hidden="true"
        >
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              <p className="text-line">
                {renderLine(line, index)}
              </p>
              {index < lines.length - 1 && <div className="menu-divider" aria-hidden="true"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Text;
