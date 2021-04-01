
// Array of Data Storage
var stockTab=[];

// function to add new element to array of data storage

  function Add_stock(){
  
      var  sharesval=document.getElementById('fname').value;
      var  priceBuyVval=document.getElementById('lpriceBuy').value;
      var  priceActuVal=document.getElementById('lpriceActu').value;
      var  sharesvl=document.getElementById('nshares').value;
      var  devisval=document.getElementById('Devis').value;
    stockTab.push({stock:sharesval, BuyPrice:priceBuyVval, ActualPrice:priceActuVal,shares:sharesvl,devis:devisval});
    localStorage.setItem("key_tab", JSON.stringify(stockTab));
    return stockTab;
    
  }

    
  // function to add new element to delete last element from the stock table   


  function remove_last_stock(){

      stockTab.pop();
      key_tab.pop();
      return stockTab,key_tab;
      
   }



