import React, { useState, useEffect, useRef } from 'react';
import {
  ResponsiveLine
} from '@nivo/line'
import { ResponsiveBar } from "@nivo/bar";

const dataset = [
  {
    "x": "2016-06-24",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-07-01",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-07-08",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-07-15",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-07-22",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-07-29",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-08-05",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-08-12",
    "y": 0,
    "y1": 9
  },
  {
    "x": "2016-08-19",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-08-26",
    "y": 52,
    "y1": 0
  },
  {
    "x": "2016-09-02",
    "y": 54,
    "y1": 0
  },
  {
    "x": "2016-09-09",
    "y": 20,
    "y1": 0
  },
  {
    "x": "2016-09-16",
    "y": 7,
    "y1": 0
  },
  {
    "x": "2016-09-23",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-09-30",
    "y": 35,
    "y1": 10
  },
  {
    "x": "2016-10-07",
    "y": 36,
    "y1": 10
  },
  {
    "x": "2016-10-14",
    "y": 4,
    "y1": 20
  },
  {
    "x": "2016-10-21",
    "y": 11,
    "y1": 0
  },
  {
    "x": "2016-10-28",
    "y": 2,
    "y1": 30
  },
  {
    "x": "2016-11-04",
    "y": 0,
    "y1": 4
  },
  {
    "x": "2016-11-11",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-11-18",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-11-25",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-12-02",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2016-12-09",
    "y": 0,
    "y1": 11
  },
  {
    "x": "2016-12-16",
    "y": 0,
    "y1": 18
  },
  {
    "x": "2016-12-23",
    "y": 30,
    "y1": 2
  },
  {
    "x": "2016-12-30",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-01-06",
    "y": 2,
    "y1": 0
  },
  {
    "x": "2017-01-13",
    "y": 0,
    "y1": 31
  },
  {
    "x": "2017-01-20",
    "y": 0,
    "y1": 26
  },
  {
    "x": "2017-01-27",
    "y": 0,
    "y1": 2
  },
  {
    "x": "2017-02-03",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-02-10",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-02-17",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-02-24",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-03-03",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-03-10",
    "y": 5,
    "y1": 18
  },
  {
    "x": "2017-03-17",
    "y": 25,
    "y1": 9
  },
  {
    "x": "2017-03-24",
    "y": 0,
    "y1": 3
  },
  {
    "x": "2017-03-31",
    "y": 0,
    "y1": 33
  },
  {
    "x": "2017-04-07",
    "y": 0,
    "y1": 28
  },
  {
    "x": "2017-04-14",
    "y": 0,
    "y1": 70
  },
  {
    "x": "2017-04-21",
    "y": 0,
    "y1": 19
  },
  {
    "x": "2017-04-28",
    "y": 0,
    "y1": 30
  },
  {
    "x": "2017-05-05",
    "y": 0,
    "y1": 56
  },
  {
    "x": "2017-05-12",
    "y": 0,
    "y1": 115
  },
  {
    "x": "2017-05-19",
    "y": 0,
    "y1": 138
  },
  {
    "x": "2017-05-26",
    "y": 0,
    "y1": 54
  },
  {
    "x": "2017-06-02",
    "y": 0,
    "y1": 43
  },
  {
    "x": "2017-06-09",
    "y": 0,
    "y1": 34
  },
  {
    "x": "2017-06-16",
    "y": 0,
    "y1": 6
  },
  {
    "x": "2017-06-23",
    "y": 0,
    "y1": 38
  },
  {
    "x": "2017-06-30",
    "y": 0,
    "y1": 30
  },
  {
    "x": "2017-07-07",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-07-14",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-07-21",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-07-28",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-08-04",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-08-11",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-08-18",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-08-25",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-09-01",
    "y": 0,
    "y1": 3
  },
  {
    "x": "2017-09-08",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-09-15",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-09-22",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-09-29",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-10-06",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-10-13",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-10-20",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-10-27",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-11-03",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-11-10",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-11-17",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-11-24",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-12-01",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-12-08",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-12-15",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-12-22",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2017-12-29",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2018-01-05",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2018-01-12",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2018-01-19",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2018-01-26",
    "y": 0,
    "y1": 0
  },
  {
    "x": "2018-02-02",
    "y": 0,
    "y1": 0
  }]

//const intial = dataset.slice()

function App() {

  const [data, setData] = useState([
    {
      x: '2016-06-17',
      "y": 0,
      "y1": 6
    }
  ]);
  const [running, setRunning] = useState(true);
  //const [animationParams, setAntimationParams] = useState({ stiffness: 87, damping: 26 })
  const [updateSpeed] = useState(1000);


  useInterval(() => {
    if (running) {
      if (dataset.length > 0) {
        setData([...data, dataset.shift()]);
      }
      else {
        setRunning(false)
      }
    }
  }, updateSpeed);

  return (
    <div style={{ height: 600, position: 'relative' }}>
      <div style={{height: 600, position: 'relative' }}>
        {/* <ResponsiveLine
        data={dataset2}
        margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
        curve="monotoneX"
        enableGridX={false}
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          precision: 'day'
        }}
        xFormat="time:%Y-%m-%d"
      /> */}
      <ResponsiveBar
          margin={{ top: 60, right: 80, bottom: 60, left: 20 }}
          data={data.map(v => {
            var key = v.x;
            var obj = {};
            obj[key] = v.y;
            console.log({...obj, "id":v.x})
            return {...obj, "id":v.x};
          })}
      
          xScale={{
            type: 'time',
            format: '%Y-%m-%d',
            precision: 'day',
          }}
          xFormat="time:%Y-%m-%d"
          //axisBottom={{ format: d => d.toString() }}
          keys={data.map( v => v.x)}
          enableGridX={false}
          enableGridY={false}
          axisRight={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: 0 }}
          axisLeft ={null}
          // axisBottom ={null}
          axisBottom={ null }
        />

        
      </div>

      <div style={{ height: 600, width:"100%", position: 'absolute', top: 0 }}>

        
        <ResponsiveLine
          margin={{ top: 60, right: 80, bottom: 60, left: 40 }}
          data={[{ id: "first", data: data }]}
          xScale={{
            type: 'time',
            format: '%Y-%m-%d',
            precision: 'day',
          }}
          xFormat="time:%Y-%m-%d"
          colors={{ scheme: 'category10' }}
          axisBottom={{
            format: '%b %d',
          }}
          curve={'monotoneX'}
          animate={true}
          enablePointLabel={false}
          pointSize={0}
          // pointBorderWidth={1}
          // pointBorderColor={{
          //   from: 'color',
          //   modifiers: [['darker', 0.3]],
          // }}
          useMesh={true}
          enableSlices={false}
          motionStiffness={200}
          motionDamping={40}
        />
      </div>
    </div>


  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default App;