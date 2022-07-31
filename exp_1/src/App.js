import logo from './logo.svg';
import './App.css';
import Spline from '@splinetool/react-spline';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='text'>
          Spline 3D
        </p>
      <div className='splineScene'>
        <Spline scene="https://prod.spline.design/yXpKjPQRitUATKHq/scene.splinecode" />
      </div>
        
      </header>
    </div>
  );
}

export default App;


