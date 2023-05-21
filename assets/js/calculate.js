function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseInt(inputValueString);
    inputField.value= '';
    return inputValue;

    
}


document.getElementById('calculate-btn').addEventListener('click',function(){
    // const perPlayerfield = document.getElementById('perPlayer-field');
    // const perPlayerAmountString = perPlayerfield.value;
    // const perPlayerAmount = parseInt(perPlayerAmountString);
    // console.log(perPlayerAmount);

    const perPlayerAmount = getInputValue('perPlayer-field');

    const calculateValue = perPlayerAmount * 5;
    

    const expensesField = document.getElementById('expenses-field');
    expensesField.innerText=calculateValue;
    

    

})

document.getElementById('total-btn').addEventListener('click',function(){
    const expensesField = document.getElementById('expenses-field');
    const expensesValueString = expensesField.innerText;
    const expensesValue = parseInt(expensesValueString);

    const coachAmount = getInputValue('coach-input');
    const managementAmount = getInputValue('management-input');

    const totalValue = expensesValue + coachAmount + managementAmount;
    

    const totolField = document.getElementById('total-field');
    totolField.innerText = totalValue;
})