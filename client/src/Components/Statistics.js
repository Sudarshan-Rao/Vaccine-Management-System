import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title  } from 'chart.js';
import { DoughnutChart } from "./DoughnutChart";
import { BarChart } from "./BarChart";
import { Container } from 'react-bootstrap';
  

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Statistics = () => {
  const [chart, setChart] = useState([]);
  const [barChart, setBarChart] = useState([]);
  const [patientCount, setPatientCount] = useState();
  const [vaccineCount, setVaccineCount] = useState();

    useEffect(() => {
      const getPatients = async () => {
        try {
          const response = await fetch("http://localhost:8080/patient");
          const jsonData = await response.json();
          const countData = jsonData.map(
            function (index){
              return index.count;
            });
          setChart(countData);
          const countDataTotal = countData.reduce((a, b) => parseInt(a) + parseInt(b), 0)
          setPatientCount(countDataTotal);
        } catch (err) {
          console.error(err.message);
        }
      };
        getPatients();
        const getVaccines = async () => {
          try {
            const response = await fetch("http://localhost:8080/vaccine");
            const jsonData = await response.json();
            const countVaccine = jsonData.map(
              function (index){
                return index.count;
              });
              setBarChart(countVaccine);
              const countVaccineTotal = countVaccine.reduce((a, b) => parseInt(a) + parseInt(b), 0)
              setVaccineCount(countVaccineTotal);
          } catch (err) {
            console.error(err.message);
          }
        };
        getVaccines();
      }, []);

  return (
    <Container>
      <div>
        <h3> Total number of Patients: { patientCount } </h3>
        <DoughnutChart chartData={ chart } />
      </div>
      <div>
      <h3> Total number of Patients Vaccinated: { vaccineCount } </h3>
        <BarChart barChartData={ barChart } />
      </div>
    </Container>
  )
}

export default Statistics