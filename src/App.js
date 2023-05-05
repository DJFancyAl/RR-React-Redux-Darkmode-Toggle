import './App.css';
import Nav from './components/Nav'
import UtilityBar from './components/UtilityBar';
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state)

  const style = {
    backgroundColor: theme.color1,
    color: theme.color2,
    height: '100vh'
  }
  
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
