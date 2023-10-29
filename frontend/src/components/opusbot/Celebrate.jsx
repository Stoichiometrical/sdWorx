import React, { useState } from 'react';
import Confetti from 'react-confetti';

const Celebration = ({ onConfettiComplete }) => {
    const [isRunning, setIsRunning] = useState(true);

    return (
        <div>
            {isRunning && (
                <Confetti
                    numberOfPieces={100}
                    onConfettiComplete={() => {
                        setIsRunning(false);
                        onConfettiComplete();
                    }}
                />
            )}
        </div>
    );
};

export default Celebration;
