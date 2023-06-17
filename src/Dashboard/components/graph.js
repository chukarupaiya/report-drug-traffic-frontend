import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';
import "../../App.css";
import { useEffect } from 'react';
import Card from "./Card";
import Donuts from "./Donuts";
import axios from "axios";



function ApexCharts({ data }) {

  const [userName, setuserName] = useState(localStorage.getItem("username"));
  const [total_item, update_total_item] = useState([]);
  const [value, setValue] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  let month = { "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5, "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11 };


  useEffect(() => {
    const values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if(data)
    {
      data.forEach(element => {
        values[month[element.date.split(" ")[0]]]++;
      });
      setValue(values);
    }

  }, [data]);

  console.log(value);

  const [state, setstate] = useState({
    options: {
      chart: {
        height: 350,
        type: 'area',
        foreColor: '#ffffff',
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'month',
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      tooltip: {
        fillSeriesColor: true,
        x: {
          show: false
        }
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },

      title: {
        text: "Complaints Overview",
        align: 'left',
        margin: 20,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#ffffff'
        },
      },

    },
  });

  return (
    <>
      <ReactApexChart type="area" options={state.options} series={[{
        name: 'series1',
        data: value,
      },]} height="100%" width="100%" className="graph">

      </ReactApexChart>
    </>
  );

}

export default ApexCharts;



