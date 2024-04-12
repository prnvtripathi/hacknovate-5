import { useEffect, useState } from 'react';
import { Rubik_Mono_One } from "next/font/google";

const rubik = Rubik_Mono_One({
    subsets: ["latin-ext"],
    weight: ["400"],
});

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState('');

    const calculateCountdown = () => {
        const hackathonDate = new Date('2024-05-05T13:00:00').getTime();
        const now = new Date().getTime();
        const distance = hackathonDate - now;

        if (distance < 0) {
            setCountdown('Hacking starts now!!');
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Format all digits to always have two digits
            const formattedSeconds = seconds.toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            const formattedHours = hours.toString().padStart(2, '0');
            const formattedDays = days.toString().padStart(2, '0');
            setCountdown(`${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
        }
    };


    useEffect(() => {
        const intervalId = setInterval(calculateCountdown, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`flex justify-center items-center flex-col gap-4 ${rubik.className}`}>
            <div className="text-center text-sm md:text-md hover:text-white transition-all hover:scale-90">
                <div>
                    REGISTRATION CLOSES IN
                </div>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl">{countdown}</div>
        </div>
    );
};

export default CountdownTimer;
