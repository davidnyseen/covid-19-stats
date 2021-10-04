//@import "~react-vis/dist/styles/legends";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <XYPlot
  width={700}
  height={700}>
  <HorizontalGridLines />
  <LineSeries
    data={[
      {x: 1, y: 10},
      {x: 2, y: 5},
      {x: 3, y: 15}
    ]}/>
  <XAxis />
  <YAxis />
</XYPlot>
    </div>
  );
}

export default App;
 