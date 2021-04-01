var tableData2=tableData1;
var dataP1 =[];
 var dataP2 =[];
       for(let i = 0 ; i< tableData2.length;i++){
           var entry1={};
           var entry2={};
           
           entry1={
             label: tableData2[i].stock, y: Number(tableData2[i].BuyPrice)*Number(tableData2[i].shares)/1000
           }
           dataP1.push(entry1);
           entry2={
             label: tableData2[i].stock, y: Number(tableData2[i].ActualPrice)*Number(tableData2[i].shares)/1000
           }
           dataP2.push(entry2);
       }
    window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {            
        title:{
        text: "Difference between Actuel and initial investment for each stock"              
      },

     
      data: [  //array of dataSeries     
      { //dataSeries - first quarter
 /*** Change type "column" to "bar", "area", "line" or "pie"***/        
       type: "column",
       name: "initialInvestment",
       showInLegend: true,
       dataPoints: dataP1
     },

     { //dataSeries - second quarter

      type: "column",
      name: "ActualInvestment", 
      showInLegend: true,               
      dataPoints:dataP2
    }
    ],
 /** Set axisY properties here*/
    axisY:{
      prefix: "$",
      suffix: "K"
    }    
  });

chart.render();
}