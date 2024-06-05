import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const AdminChart = () => {
  const data = [
    {
      name: 'Ant',
      uv: 40,
      pv: 24,
      amt: 24,
    },
    {
      name: 'Bee',
      uv: 30,
      pv: 13,
      amt: 22,
    },
    {
      name: 'Yam',
      uv: 20,
      pv: 98,
      amt: 22,
    },
    {
      name: 'Oil',
      uv: 27,
      pv: 39,
      amt: 20,
    },
    {
      name: 'Egg',
      uv: 18,
      pv: 48,
      amt: 21,
    },
    {
      name: ' Fish',
      uv: 23,
      pv: 38,
      amt: 25,
    },
    {
      name: 'Goat',
      uv: 34,
      pv: 43,
      amt: 21,
    },
  ];
  return (
    <>
      <LineChart
        width={310}
        height={240}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="orange" activeDot={{ r: 8 }} />
        {/* <Line type="monotone" dataKey="uv" stroke="red" />
        <Line type="monotone" dataKey="amt" stroke="blue" /> */}
      </LineChart>

    </>

  )
}

export default AdminChart