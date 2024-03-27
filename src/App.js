import logo from './logo.svg';
import InfoPanel from './components/InfoPanel';
import Header from './components/Header';
import ParamPanel from './components/ParamPanel';
import GraphicPanel from './components/GraphicPanel';
import BMIIndicatorPanel from './components/BMIIndicatorPanel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <InfoPanel />
      <ParamPanel />
      <GraphicPanel />
      <BMIIndicatorPanel />
      <Footer />
    </div>
  );
}

export default App;
