function EstimatedTransactionFee(amountToSend){
   const minimumFee = 10;
   const maximuFee = 70;
   const percentageFee = amountToSend * 1.5%;

   if(percentageFee < minimumFee){
    transactionFee = minimumFee;
   }else if (percentageFee > maximumFee){
    transactionFee = maximuFee;
   }else{
    transactionFee = percentageFee;
   }
   const totalDebited = amountToSend + transactionFee;

   console.log(`Sending ${amountToSend}:`)
   console.log(`Transaction Fee: ${transactionFee}`);
  
}
let amount = prompt("Unatuma  ngapi?:");





   