function calculateTip(amount,tip){

    let percent = (tip/100);


    let amountTip = amount * percent;
    let totalAmount = amount + amountTip;

     
    if(tip<=5){
        console.log('You have to do better then that. ' + '\n' + tip + '% percent is low');
        console.log('You left a tip amount' +amountTip + 'dollars');
        console.log('Your total amount is ' +totalAmount+ 'dollars');
    }
    else if(tip>=20){
        console.log('You are very generous ' + '\n' + tip + '% percent is very good');
        console.log('You left a tip amount' +amountTip + 'dollars');
        console.log('Your total amount is ' +totalAmount+ 'dollars');
    }else{
        console.log('You left a very good tip ' + '\n' + tip + '% percent is good');
        console.log('You left a tip amount' +amountTip + 'dollars');
        console.log('Your total amount is ' +totalAmount+ 'dollars');
    }

}
calculateTip(100,15);