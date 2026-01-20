"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const [gap, setGap] = useState(75); // Initial gap from CSS

  const MAX_NO_CLICKS = 4;
  const MIN_NO_SCALE = 0.65;
  const GIFS = [
    "/assets/images/togepi-love.gif", // 0 (start)
    "/assets/images/togepi-happy.gif", // 1 (not used in logic progression??)
    "/assets/images/togepi-sad-1.gif", // 2 
    "/assets/images/togepi-sad-2.gif", // 3
    "/assets/images/togepi-crying.gif" // 4
  ];
  // Logic from script.js:
  // noCount starts at 1.
  // gifElement.src = gifs[noClicks] if noClicks < maxNoClicks.
  // JS Array: ["happy", "sad-1", "sad-2", "crying"] (indices 0-3).
  const JS_GIFS = [
    "/assets/images/togepi-happy.gif",
    "/assets/images/togepi-sad-1.gif",
    "/assets/images/togepi-sad-2.gif",
    "/assets/images/togepi-crying.gif"
  ];

  const MESSAGES = [
    "Are you sure??",
    "Pookie please",
    "Pookie PLEASE",
    "You can't do this to me!"
  ];

  // Current State Derivation
  // Initially noCount=1. script.js: "noButton clicked" -> noClicks (1 at start)
  // Logic: 
  //   if (noClicks < 4) gif = JS_GIFS[noClicks]
  //   text = MESSAGES[noClicks % 4]
  //   noClicks++

  // So BEFORE any click (render state):
  // Image: "togepi-love.gif" (static HTML)
  // No Button Text: "No" (static HTML)

  // Implementation:
  // We can track `clicks` starting at 0.
  // Render:
  //   Image: clicks === 0 ? "love.gif" : JS_GIFS[clicks] (Wait, this needs mapping)
  //   Text: clicks === 0 ? "No" : MESSAGES[(clicks) % 4] ??

  // Let's stick closer to the imperative script logic by just tracking state values.

  const [currentGif, setCurrentGif] = useState("/assets/images/togepi-love.gif");
  const [noText, setNoText] = useState("No");

  const handleNoClick = () => {
    // Logic:
    //   if (noClicks < 4) gif = JS_GIFS[noClicks]
    //   text = MESSAGES[noClicks % 4]

    if (noCount < MAX_NO_CLICKS) {
      setCurrentGif(JS_GIFS[noCount]);
    }

    setNoText(MESSAGES[noCount % MAX_NO_CLICKS]);

    // Decrease no button size
    if (noScale > MIN_NO_SCALE) {
      setNoScale((prev) => prev - 0.1);
    }

    // Increase yes button size via font-size to affect layout flow
    const MAX_YES_SCALE = 6;
    if (yesScale < MAX_YES_SCALE) {
      setYesScale(prev => prev + 0.5);
    }

    setNoCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    router.push('/yay');
  };

  return (
    <div className="container">
      <img src={currentGif} id="togepi-gif" alt="a cute picture of togepi" />
      <h1 id="message">
        Will you be my Valentine? (˶ᵔ ᵕ ᵔ˶)
      </h1>

      <div className="btn-container" style={{ alignItems: 'center' }}>
        <button
          id="yes-btn"
          onClick={handleYesClick}
          style={{
            fontSize: `${yesScale * 1.3}rem`, // Scale font size directly
          }}
        >
          Yes
        </button>
        <button
          id="no-btn"
          onClick={handleNoClick}
          style={{
            transform: `scale(${noScale})`
          }}
        >
          {noText}
        </button>
      </div>
    </div>
  );
}
