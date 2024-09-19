document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('open this text');

    const cashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin-number').value;
    console.log(cashOut, pinNumber);

    if(pinNumber === '1234'){
        console.log('cash outed');
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)

        const balanceNumber = parseFloat(balance);
        const cashOutNumber = parseFloat(cashOut);
        console.log(balanceNumber, cashOutNumber);

        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed Cash Out. please try again');
    }
})