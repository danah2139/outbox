import {Bar} from 'react-chartjs-2';
const BarChart =({text,data})=>{
    return(<Bar
        data={data}
        options={{
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
      />)

}
export default BarChart;