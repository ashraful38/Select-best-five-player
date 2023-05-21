function getPlayerListInputField(fieldId){
    const playerTextField = document.getElementById(fieldId);
    return playerTextField.innerText;
}

function disableBtn(btnId){
    const btn = document.getElementById(btnId);
    btn.setAttribute('disabled',true);
}


function addNewLi(playerNameText){
    const playerListContainer = document.getElementById('player-list-container');
    const li = document.createElement('li');
    
    li.innerText = playerNameText;
    const select5 = document.getElementsByTagName('li');


    if(select5.length > 4){
        alert('five player has Selected');
    }
    else{
        playerListContainer.appendChild(li);    
    }

}




document.getElementById('messi-btn').addEventListener('click',function(){
    // const messiTextField = document.getElementById('messi-text');
    // const mesiText = messiTextField.innerText;
    const mesiText= getPlayerListInputField('messi-text');
    disableBtn('messi-btn');
    addNewLi(mesiText);
    
})

document.getElementById('neymar-btn').addEventListener('click',function(){
    const neymarText = getPlayerListInputField('neymar-text');
    disableBtn('neymar-btn');
    addNewLi(neymarText);
    
})


document.getElementById('mbappe-btn').addEventListener('click',function(){
    const mbappeText = getPlayerListInputField('mbappe-text');
    disableBtn('mbappe-btn');
    addNewLi(mbappeText);
    
})

document.getElementById('vitor-btn').addEventListener('click',function(){
    const vitorText = getPlayerListInputField('vitor-text');
    disableBtn('vitor-btn');
    addNewLi(vitorText);
    
})

document.getElementById('ramos-btn').addEventListener('click',function(){
    const ramosText = getPlayerListInputField('ramos-text');
    disableBtn('ramos-btn');
    addNewLi(ramosText);
    
})


document.getElementById('sanches-btn').addEventListener('click',function(){
    const sanchesText = getPlayerListInputField('sanches-text');
    disableBtn('sanches-btn');
    addNewLi(sanchesText);
    
})






