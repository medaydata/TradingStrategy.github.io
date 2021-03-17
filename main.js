
  // function to add new element to stock table
  var stockTab=[];
  
  function Add_stock(){
  
   var  sharesval=document.getElementById('fname').value;
   var  priceBuyVval=document.getElementById('lpriceBuy').value;
   var  priceActuVal=document.getElementById('lpriceActu').value;
   var  sharesvl=document.getElementById('nshares').value;
   var  devisval=document.getElementById('Devis').value;
    
    stockTab.push({stock:sharesval, BuyPrice:priceBuyVval, ActualPrice:priceActuVal,shares:sharesvl,devis:devisval});
     return stockTab;

  }
  function remove_last_stock(){
  
  
  // function to add new element to delete last element from the stock table   
     stockTab.pop();
      return stockTab;
 
   }