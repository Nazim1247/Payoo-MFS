document.getElementById('btn-add-mony').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('open this text');

    // get mony and the pin number
    const addMony = document.getElementById('input-add-mony').value;
    const pinNumber = document.getElementById('input-pin-number').value;
    // console.log(addMony, pinNumber);

    if(pinNumber === '1234'){
        // get mony to the account
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const addMonyNumber = parseFloat(addMony);
        // new balance
        const newBalance = balanceNumber + addMonyNumber;
        // console.log(newBalance);

        // update the DOM with updated balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add mony. please try again')
    }
})