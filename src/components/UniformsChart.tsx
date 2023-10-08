import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type DataProps = {
  name: string;
  Entrada: number;
  Saída: number;
};

type UniformsChartProps = {
  data: DataProps[];
};

const data = [
    { name: '14/09', Entrada: 15, Saída: 13 },
    { name: '15/09', Entrada: 13, Saída: 11 },
    { name: '18/09', Entrada: 12, Saída: 10 },
    { name: '19/09', Entrada: 8, Saída: 7 },
    { name: '20/09', Entrada: 10, Saída: 8 },
    { name: '21/09', Entrada: 13, Saída: 11 },
    { name: '22/09', Entrada: 12, Saída: 10 },
    { name: '25/09', Entrada: 8, Saída: 7 },
    { name: '26/09', Entrada: 15, Saída: 13 },
    { name: '27/09', Entrada: 13, Saída: 11 },
    { name: '28/09', Entrada: 12, Saída: 10 },
    { name: '29/09', Entrada: 8, Saída: 7 },
    { name: '02/10', Entrada: 10, Saída: 8 },
    { name: '03/10', Entrada: 13, Saída: 11 },
    { name: '04/10', Entrada: 12, Saída: 10 },
    { name: '05/10', Entrada: 8, Saída: 7 },
    { name: '06/10', Entrada: 10, Saída: 8 },
  ];

  const UniformsChart = ({data}:UniformsChartProps) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Entrada" fill="#8884d8" />
          <Bar dataKey="Saída" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default UniformsChart;