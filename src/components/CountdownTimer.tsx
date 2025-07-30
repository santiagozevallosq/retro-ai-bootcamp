import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: any[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval as keyof typeof timeLeft]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="text-center">
        <div className="font-terminal text-accent text-sm mb-2">
            TIEMPO RESTANTE:
        </div>
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {Object.keys(timeLeft).length > 0 ? (
                [
                    { label: "DÍAS", value: timeLeft.days },
                    { label: "HRS", value: timeLeft.hours },
                    { label: "MIN", value: timeLeft.minutes },
                    { label: "SEG", value: timeLeft.seconds }
                ].map((item, index) => (
                    <div key={index} className="retro-window p-3 text-center">
                        <div className="font-sans text-xl text-primary neon-glow">
                            {item.value.toString().padStart(2, '0')}
                        </div>
                        <div className="font-terminal text-xs text-accent mt-1">
                            {item.label}
                        </div>
                    </div>
                ))
            ) : (
                <span className="font-pixel text-xl text-destructive">¡El tiempo ha terminado!</span>
            )}
        </div>
    </div>
  );
};

export default CountdownTimer;
