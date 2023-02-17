document.getElementById('btn-1').addEventListener('click', function () {
    let deposite = document.getElementById("deposite");
    let depositeAmount = document.getElementById("deposite-balance");
    let newDeposite = deposite.value;

    let showDeposite = depositeAmount.innerText;

    let total = parseFloat(newDeposite) + parseFloat(showDeposite);
    if (deposite.value < 1 || deposite.value === '') {
        alert('select correct amount');
        deposite.value = '';
        return;
    }
    else {
        depositeAmount.innerText = total;
    }
    // 
    let totalBalance = document.getElementById("total-balance");
    let balanceValue = totalBalance.innerText;
    let balance = parseFloat(balanceValue) + parseFloat(newDeposite);

    totalBalance.innerText = balance;
    deposite.value = '';
})

// 

document.getElementById('btn-2').addEventListener('click', function () {
    let withdraw = document.getElementById("withdraw");
    let withdrawValue = withdraw.value;

    let withdrawAmount = document.getElementById("withdraw-balance");
    let withdrawValue1 = withdrawAmount.innerText;

    let total = parseFloat(withdrawValue) + parseFloat(withdrawValue1);




    // 
    let totalAmount = document.getElementById("total-balance");

    let balanceValue = totalAmount.innerText;

    let balance = parseFloat(balanceValue) - parseFloat(withdrawValue);

    if (withdraw.value < 1) {
        alert("Are you fool Beb");
    }

    else if (total > balanceValue) {
        alert("you are Out of Money bro");
    }
    else {
        withdrawAmount.innerText = total;
        totalAmount.innerText = balance;
    }


    withdraw.value = "";
})