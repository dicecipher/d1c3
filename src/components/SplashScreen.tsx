import { useEffect } from "react";
import "./styles/SplashScreen.scss";

function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
  <div className="splash-screen">
    <div>
      <img src="/splashscreen.gif" alt="Loading..." className="splash-gif" />
    </div>
    <p className="codename">Dicecipher Portfolio</p>
  </div>
  );
}

export default SplashScreen;
