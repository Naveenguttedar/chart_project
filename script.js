console.log("Hello World");
const ctx = document.getElementById('myChart');

const labels=['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
const  data = {
  labels: labels,
  datasets: [{
    borderColor: 'rgb(255, 99, 132)',
    data: [],
    borderWidth:2,
    borderColor: '#36A2EB',
      backgroundColor: '#9BD0F5',
    
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    elements:{
      point:{pointStyle:'circle'},
  }, 
     scales: {
     x: {
        offset: true
     },
     y: {
        offset:true
     }
   },
    plugins:{
      title:{
        display:true,
        text:'User CGPA',
        font:{
          size:28,
          family:"'Roboto', sans-serif",
        }
      },
      legend:{
      display:false,
    },

    }
  },
};

const myChart = new Chart(
  ctx,
  config
);
//adding data to chart 
function addData(chart,label,data){
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
//chart logic
const randomNumber=(maxNum)=>{
    let num= 3;
  setInterval(()=>{
  num=Math.floor(Math.random()*maxNum)
console.log("num "+ num);
  },30000)
    return ()=>(num+Math.random()).toFixed(3);

}
const num=randomNumber(10);
setInterval(()=>{
    const newLabel=(Math.random()+1).toString(36).substring(4);
    const newData=num();
  console.log(newData);
    addData(myChart,newLabel,newData);

},1000);

