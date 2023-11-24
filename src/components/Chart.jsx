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
import './chart.css'
const data = [
  {
    name: "Enero",
    uv: 300,
    pv: 240,
    amt: 240,
  },
  {
    name: "Febrero",
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: "Marzo",
    uv: 200,
    pv: 980,
    amt: 220,
  },
  {
    name: "Abril",
    uv: 270,
    pv: 390,
    amt: 200,
  },
  {
    name: "Mayo",
    uv: 180,
    pv: 480,
    amt: 218,
  },
  {
    name: "Junio",
    uv: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: "Julio",
    uv: 340,
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
          width: 400,
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
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }

export default Chart;
