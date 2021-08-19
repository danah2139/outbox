import {Bar} from 'react-chartjs-2';
const BarChart =({text,labels,dataNumbers,dataSetsLabel})=>{
  const data = {
    labels: labels,
    datasets: [
      {
        label: dataSetsLabel,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: dataNumbers,
      },
    ],
  };  
  
  return(<div><Bar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          title:{                                                                                                                                                           
            display:true,
            text:text,
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      /></div>)

}
export default BarChart;