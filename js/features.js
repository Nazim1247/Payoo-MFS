// show the cash out form
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    console.log('show cash out button clicked');

    // show cash out button clicked
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide the add mony form
    document.getElementById('add-mony-form').classList.add('hidden');
});


// show the add mony form
document.getElementById('btn-show-add-mony').addEventListener('click', function(){
    console.log('show add mony')

    // show add mony 
    document.getElementById('add-mony-form').classList.remove('hidden');
    // hide cash out
    document.getElementById('cash-out-form').classList.add('hidden');
})