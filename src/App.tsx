import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
function App() {
  return (
    <>
     <Header />
      <div className="main-container">
        <Profile />
        <NavBar />
      </div>
    </>
  )
}

export default App
