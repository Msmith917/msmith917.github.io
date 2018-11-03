function addition(){
  var bal = localStorage.getItem("balance");
  var add = prompt('Enter how much you would like to add: ');
  var newBal = parseFloat(bal, 10) + parseFloat(add, 10);
  localStorage.setItem("balance", newBal);

}

function subtraction(){
  var bal = localStorage.getItem("balance");
  var add = prompt('Enter how much you would like to subtract: ');
  var newBal = parseFloat(bal, 10) - parseFloat(add, 10);
  localStorage.setItem("balance", newBal);
}

function getBalance() {
  var bal = localStorage.getItem("balance");
  document.write(parseFloat(bal, 10));
}
