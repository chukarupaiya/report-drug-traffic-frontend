import ReactApexChart from 'react-apexcharts';
import { useEffect, useState } from 'react';
import "../../App.css";
import { AiFillFile } from 'react-icons/ai';



function Donuts ({data}){


    const [dislike,setDislike]=useState(0);
    const [like,setLike]=useState(0);


    useEffect(()=>{
      var temp_like=0;


      if(data){
        data.forEach(element => {
          
          if(element.likes=="1"){
            temp_like++;
          }
        });
      

       
        setLike(temp_like);
        setDislike(data.length-like);
      }

    },[data]);

    console.log(data)

    

    const [state, setstate] = useState({
        options: {
          chart: {
            width: "100%",
            height: "100%",
            type: 'donut',
            foreColor: '#ffffff',
          },
          labels: ["Seen" , "Unseen"],
          plotOptions: {
            pie: {
              startAngle: 0,
              endAngle: 360
            }
          },
          title: {
            text: "Projects",
            align: 'left',
            margin: 40,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
            fontSize:  '1.3vw',
            fontWeight:  'bold',
            color:  '#ffffff',
            padding:'1%'
            },
        },
          stroke: {
            show: false,
            width:0
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            type: 'gradient',
          },
          legend: {
            formatter: function(val, opts) {
              return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom',
              }
            }
          }]
        }
    });

      return (
        <>
            <ReactApexChart options={state.options} series={[like,dislike]} type="donut" width={"100%"} />
    
        </>
      );

}

export default Donuts;



