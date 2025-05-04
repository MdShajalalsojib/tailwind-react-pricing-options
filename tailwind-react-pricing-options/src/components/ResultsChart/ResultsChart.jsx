import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
      "id": 1,
      "name": "Sakib",
      "physics": 85,
      "chemistry": 78,
      "math": 92
    },
    {
      "id": 2,
      "name": "Limon",
      "physics": 74,
      "chemistry": 69,
      "math": 80
    },
    {
      "id": 3,
      "name": "Labiya",
      "physics": 91,
      "chemistry": 88,
      "math": 95
    },
    {
      "id": 4,
      "name": "Masud",
      "physics": 67,
      "chemistry": 72,
      "math": 70
    },
    {
      "id": 5,
      "name": "Monil",
      "physics": 88,
      "chemistry": 84,
      "math": 90
    },
    {
      "id": 6,
      "name": "Lokman",
      "physics": 73,
      "chemistry": 65,
      "math": 77
    },
    {
      "id": 7,
      "name": "Saima",
      "physics": 95,
      "chemistry": 89,
      "math": 94
    },
    {
      "id": 8,
      "name": "sojib",
      "physics": 72,
      "chemistry": 82,
      "math": 85
    },
    {
      "id": 9,
      "name": "Sakil",
      "physics": 81,
      "chemistry": 75,
      "math": 83
    },
    {
      "id": 10,
      "name": "sojib",
      "physics": 77,
      "chemistry": 70,
      "math": 79
    }
  ]
  

const ResultsChart = () => {
    return (
        <div>
           <LineChart width ={900} height={500} data={resultData}>

                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                
                    <Line dataKey="math" stroke ='green'> </Line>
              
               <Line dataKey={'chemistry'} stroke = 'red'></Line> 
               <Line dataKey={'physics'} stroke="#8884d8"></Line>
            
            </LineChart> 
        </div>
    );
};

export default ResultsChart;