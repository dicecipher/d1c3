import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import SplashScreen from './components/SplashScreen';
import { ThemeProvider } from './components/ThemeContext.tsx';
import { useState } from 'react';
import ParallaxStars from './components/ParallaxStars.tsx'; // 🆕 import

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <ThemeProvider>
          <ParallaxStars />
          <Header />
          <div className="main-container">
            <Profile />
            <NavBar />
          </div>
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
