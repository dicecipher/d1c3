import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import SplashScreen from "./components/SplashScreen";
import { useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
     {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
      <div>
        <Header />
        <div className="main-container">
          <Profile />
          <NavBar />
        </div>
      </div>
      )}
     
    </>
  )
}

export default App
