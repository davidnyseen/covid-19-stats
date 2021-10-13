//@import "~react-vis/dist/styles/legends";
import {LabelSeries, XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalBarSeries} from 'react-vis';

import logo from './logo.svg';
import './App.css';

function App() {
  // const data=[
  //   {x: 1, y: 1},
  //   {x: 2, y: 5},
  //   {x: 3, y: 10}
  // ];
  var a = [1, 2, 3, 4];
  console.log(a);
  a = a.map((obj) => {
    return obj+1;
  });
  console.log(a);

  console.log(a);
  a = a.filter((obj) => {
    return obj > 2;
  });
  console.log(a);

  console.log(a);
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  console.log(a.reduce(reducer));

  let counter = 0;
  const data = [{"Country":"Israel","CountryCode":"IL","Province":"","City":"",
  "CityCode":"","Lat":"31.05","Lon":"34.85",Cases:1,"Status":"confirmed",Date:"2020-02-21T00:00:00Z"},
  {"Country":"Israel","CountryCode":"IL","Province":"","City":"","CityCode":"","Lat":"31.05","Lon":"34.85",
  Cases:11,"Status":"confirmed",Date:"2020-02-22T00:00:00Z"}];
  var result = data.map((obj) => {
    return {x: counter++,y: obj["Cases"], label : obj["Cases"]}
  });
  console.log(result);

  return (
    <div className="App">
     
      <XYPlot
  width={700}
  height={700}>
        <XAxis />
           <YAxis />
  <VerticalBarSeries data={data} />
  <LabelSeries
    // data={data.map((obj) => {      
    //   return { ...obj, label: obj.y.toString() };
    // })}
    data={result}
    labelAnchorX="middle"
    labelAnchorY="text-after-edge"
    />

</XYPlot>
    </div>
  );
}

export default App;
 