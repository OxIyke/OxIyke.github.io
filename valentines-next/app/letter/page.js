"use client";

export default function LetterPage() {
  return (
    <div className="letter-page">
      <div className="letter-content">
        <h1 className="title">A Letter to the girl i love the most</h1>
        <p className="date"><strong>on January 9th at 8:25 pm.</strong></p>
        <p>a conversation turned into truth.</p>
        <p>we stopped pretending.</p>
        <p>and we chose each other.</p>

        <div className="space"></div>

        <p className="name"><strong>Oyin,</strong></p>
        <p>trying to fit everything i feel about you onto one page is like trying to stuff the entire sky into my pocket, practically impossible. but here's my attempt.</p>
        <p>i love you in a way that never switches off. it's always constant. always running in the background of my mind. you give me that heart squeeze, that quiet smile, and i can't stop it. my mind just settles on thoughts of you every chance it gets.</p>
        <p>there's this effect you have. you make my boring moments feel soft. you make the hard moments feel survivable. for me, just knowing you're out there, existing, makes my world tilt toward the better. you're literally my sunshinee.</p>
        <p>i love your weird. i love the unexpected mix of you. i love your confidence. i love how you'd say something so thoughtful. it leaves me staring at the ceiling, and you don't just make me laugh. you make me feel seen and warm in a way that, when i think about it, i get butterflies.</p>
        <p>with you, i don't have to perform. i can just be. anxious. tired. silly. quiet. and you don't just tolerate it. you seem to actually like me that way. that's a gift i don't know how to repay, except by liking all of you back. the sleepy you. the excitement you. the passionately ranting you. the quietly observant you. every version.</p>
        <p>this. you and me. it feels like finding a room i didn't know was in the house. a room that's warm, safe, and just mine. ours. it feels like the beginning of a story i actually want to read.</p>
        <p>you're my favorite thought. i love you soooo much, and im exceedingly happy to have you in my life.</p>

        <div className="space"></div>

        <p className="signature"><strong>Iyke</strong></p>

        <a href="https://kosmi.to/@iyke" className="date-link" target="_blank" rel="noopener noreferrer">
          Let's go on a date?
        </a>
      </div>

      <style jsx>{`
        .letter-page {
          min-height: 100vh;
          display: flex;
          align-items: flex-start; /* Start from top */
          justify-content: center;
          background: linear-gradient(to bottom, #fef8f0, #fceee0);
          padding: 60px 20px;
        }

        .letter-content {
          max-width: 700px;
          background-color: #fffcf5;
          padding: 70px 60px 60px;
          border-radius: 2px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          font-family: 'Steph', cursive;
          font-size: 1.25rem;
          font-weight: bold;
          line-height: 2.2;
          color: #3d3d3d;
          letter-spacing: 0.3px;
        }

        .letter-content p {
          margin: 0 0 28px 0;
          text-align: left;
        }

        .title {
          font-family: 'Steph', cursive;
          font-size: 2rem;
          font-weight: 800; /* Extra bold */
          text-align: center;
          margin-bottom: 40px;
          color: #2d2d2d;
          line-height: 1.3;
          text-transform: uppercase; /* Optional, but "boldly written" often implies caps or strong presence. Let's keep it normal case but big and bold as user wrote sentence case. */
          text-transform: none; 
          letter-spacing: 0.5px;
        }

        .date {
          font-size: 1.15rem;
          margin-bottom: 8px !important;
          color: #5a5a5a;
        }

        .name {
          font-size: 1.4rem;
          margin-bottom: 22px !important;
          color: #2d2d2d;
        }

        .signature {
          text-align: right;
          font-size: 1.5rem;
          margin-top: 35px !important;
          margin-bottom: 40px !important;
          color: #2d2d2d;
        }

        .space {
          height: 20px;
        }

        .letter-content strong {
          font-weight: bold;
          color: #2d2d2d;
        }

        .date-link {
          display: inline-block;
          margin-top: 20px;
          padding: 14px 30px;
          background: linear-gradient(135deg, #ff8a80, #ff7068);
          color: white;
          text-decoration: none;
          border-radius: 30px;
          font-size: 1.05rem;
          font-weight: bold;
          text-transform: lowercase;
          letter-spacing: 0.8px;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(255, 112, 104, 0.25);
          font-family: 'Steph', cursive;
        }

        .date-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 112, 104, 0.35);
        }

        @media (max-width: 768px) {
          .letter-content {
            padding: 50px 35px 45px;
            font-size: 1.1rem;
            line-height: 2;
          }

          .name {
            font-size: 1.3rem;
          }

          .signature {
            font-size: 1.35rem;
          }
        }

        @media (max-width: 480px) {
          .letter-page {
            padding: 40px 15px;
          }

          .letter-content {
            padding: 40px 25px 35px;
            font-size: 1.05rem;
            line-height: 1.9;
          }
        }
      `}</style>
    </div>
  );
}
