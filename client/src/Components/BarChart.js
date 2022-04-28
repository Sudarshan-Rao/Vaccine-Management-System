import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

export const BarChart = ({ barChartData }) => {

    const configData = {
        labels: ['Pfizer', 'Moderna', 'JJ'], //jsonData.jsonData.map((gender) => gender.p_gender), //
        datasets: [
          {
            label: "Vaccines",
            data: barChartData , //[12, 19, 3, 5, 2, 3], 
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
      
        <div style={{height:"60vh",position:"relative", marginBottom:"1%", padding:"1%"}}>
        <Bar
          data={configData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Gender"
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