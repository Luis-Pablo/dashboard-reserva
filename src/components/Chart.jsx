import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import '../app.css'
const data = [
  {
    name: "Mayo",
    ocupación: 300,
    pv: 240,
    amt: 240,
  },
  {
    name: "Junio",
    ocupación: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: "Julio",
    ocupación: 200,
    pv: 980,
    amt: 220,
  },
  {
    name: "Ago",
    ocupación: 270,
    pv: 390,
    amt: 200,
  },
  {
    name: "Sept",
    ocupación: 180,
    pv: 480,
    amt: 218,
  },
  {
    name: "Oct",
    ocupación: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: "Nov",
    ocupación: 340,
    pv: 430,
    amt: 210,
  },
];

const Chart  = () => {
  const  demoUrl =
    "https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0";

    return (
      <div
        style={{
          width:" 100%",
          height: 180,
          flexShrink: 2,
          backgroundColor: "antiquewhite",
          flexGrow: 1,
          borderRadius: 10,
        }}
      >
        <ResponsiveContainer id="chart">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="ocupación"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }

export default Chart;
