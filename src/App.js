import './App.css';
import Nav from './components/Nav'
import UtilityBar from './components/UtilityBar';
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleDarkMode, toggleLightMode } from './features/modeSlice';

function App() {
  const theme = useSelector((state) => state)
  const dispatch = useDispatch()

  const style = {
    backgroundColor: theme.color1,
    color: theme.color2,
    height: '100vh'
  }

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode')
    darkMode === 'true' && dispatch(toggleDarkMode())
  },[])

  useEffect(() => {
    localStorage.setItem('darkMode', theme.darkMode)
  },[theme])
  
  return (
    <div style={style} className="App">
      <Nav />
      <UtilityBar />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
