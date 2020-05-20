 new Vue({
   el: '#databinding',
   data: {
     name:'',
     currencyfrom : [
       {name : "USD", desc:"US Dollar"},
       {name:"EUR", desc:"Euro"},
       {name:"PLN", desc:"Poland"},
       ],
     departmoney: "EUR",
     arrivalmoney:"PLN",
     amount :""
   },
   computed :{
     finalamount:function() {
       var to = this.arrivalmoney;
       var from = this.departmoney;
       var final;
       switch(from) {
         case "PLN":
           if (to == "USD") {
             final = this.amount / 4.12;
           }
           if (to == "EUR") {
             final = this.amount / 4.55;
           }
           break;
         case "USD":
           if (to == "PLN") {
             final = this.amount * 4.12;
           }
           if (to == "EUR") {
             final = this.amount / 1.09;
           }
           break;
         case "EUR":
           if (to == "PLN") {
             final = this.amount * 4.55;
           }
           if (to == "USD") {
             final = this.amount * 1.09;
           }
           break;
       }
       return final;
     }
   }
 });