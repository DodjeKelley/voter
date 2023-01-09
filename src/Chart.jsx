import { Button } from "react-bootstrap";
// import "./styles.css";
import React, { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function Chart() {
  const [countOne, voteOne] = useState(1);
  const [countTwo, voteTwo] = useState(1);
  const [countThree, voteThree] = useState(1);
  const [countFour, voteFour] = useState(1);

  const data = [
    { name: "Group A", value: countOne },
    { name: "Group B", value: countTwo },
    { name: "Group A", value: countThree },
    { name: "Group B", value: countFour },
  ];

  function one() {
    voteOne((countOne) => countOne + 1);
    console.log("One fired");
  }
  function two() {
    voteTwo((countTwo) => countTwo + 1);
    console.log("Two fired");
  }
  function three() {
    voteThree((countOne) => countOne + 1);
    console.log("Three fired");
  }
  function four() {
    voteFour((countTwo) => countTwo + 1);
    console.log("Four fired");
  }

  const COLORS = ["#0088FE", "#cc0000", "#FFBB28", "#42bf34"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <React.Fragment>
      <div
        style={{ width: "100%", height: 400 }}
        className="align-content-center"
      >
        <ResponsiveContainer className="align-content-center">
          <PieChart width={600} height={600} className="align-content-center">
            <Pie
              className="align-content-center"
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={130}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Button type="button" variant="primary" onClick={one}>
          Raiders
        </Button>
        <Button type="button" className="btn-danger mx-4 btn-md" onClick={two}>
          Rams
        </Button>
        <Button type="button" variant="warning" onClick={three}>
          Eagles
        </Button>
        <Button
          type="button"
          className="btn-success mx-4 btn-md"
          onClick={four}
        >
          Cowboys
        </Button>
      </div>
    </React.Fragment>
  );
}
