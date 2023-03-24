//function with name and balance fot withdraw and deposit

function transction(Name,balance)
{  let account={Name:Name,balance:balance};
  Name=account.Name;
  balance=account.balance;
  const deposit=1000;//parseFloat(prompt("Enter your deposited amount:"));
  balance=balance+deposit;
  const withdraw=0;//parseFloat(prompt("Enter withdrawal amount:"));
  if(withdraw>balance)
  {
    console.log("Insufficient balace.");
  }
  else
  {
    balance=(balance-withdraw);
  }
  console.log("Hii!",Name,"\nyour deposited amount:",deposit,"rupees\n your withdrawal amount:",withdraw,"rupees.\nNow your new account balance is:",balance,"rupees");
  return balance;
}
transction("anm",10000);
