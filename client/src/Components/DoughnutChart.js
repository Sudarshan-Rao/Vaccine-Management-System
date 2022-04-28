import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const DoughnutChart = ({ chartData }) => {

    const configData = {
        labels: ['Male', 'Female'], //jsonData.jsonData.map((gender) => gender.p_gender), //
        datasets: [
          {
            label: "Gender",
            data: chartData , //[12, 19, 3, 5, 2, 3], 
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
      
        <div style={{height:"60vh",position:"relative", marginBottom:"1%", padding:"1%"}}>
        <Doughnut
          data={configData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Patients Gender Category"
              },
              legend: {
                display: true,
                position: "bottom"
             }
            }
          }}
        />
        </div>
    );
  };