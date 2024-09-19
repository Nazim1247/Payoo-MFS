
// step 1 add an event handler to the add mony button inside the form
document.getElementById('btn-add-mony').addEventListener('click', function(event){
    event.preventDefault();
    // step 2 get mony to be added to the account
    const addMonyInput = document.getElementById('input-add-mony').value;
    console.log(addMonyInput);
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(typeof pinNumberInput);
    // step 3 verify pin number
    if(pinNumberInput === '1234'){
        console.log('adding mony to your account');
        // step 4 get the current balance
    const balance = document.getElementById('account-balance').innerText;
    console.log(typeof balance);
    // step 5 addMonyInput with balance
    const addMonyNumber = parseFloat(addMonyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMonyNumber + balanceNumber;
    console.log(newBalance);
    // step 6 update the balance in the ui/dom
    document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add mony! please try again')
    }
    
})