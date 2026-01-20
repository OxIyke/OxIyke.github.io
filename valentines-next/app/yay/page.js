import Envelope from '../components/Envelope';

export default function Yay() {
    return (
        <div className="container">
            {/* Gif */}
            <img src="/assets/images/togepi-and-pikachu.gif" id="togepi-gif" alt="a cute picture of togepi" />
            {/* Question */}
            <h1 id="message">
                Thanks for being my Valentine! ⸜(｡˃ ᵕ ˂ )⸝♡
            </h1>

            <div>
                <Envelope />
            </div>
        </div>
    );
}
