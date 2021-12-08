const actions = function(){
    const $tipButton = $('.tipVal');
    const $customTip = $('#customTip');
    const $numofCustomers = $('.numofCust');
    const $numInvalidMsg = $('#invalidMsg');
    const $resetBtn = $('.resetBtn');
    const $allInputs = $(':input');

    //Tip Display
    const $amountPerPerson =$('#tipAmtPerson');
    const $totamtPersn = $('#totamountperPerson');



    // Tip indicators 
    $tipButton.on('click', event => {
        $('.tipBtn').children().removeClass('activeTip')
        $(event.currentTarget).addClass('activeTip');
        $customTip.val("");
    });
    $customTip.on('click',()=>{
        $('.tipBtn').children().removeClass('activeTip')
    });
    $numofCustomers.on('keyup',()=>{
        if($numofCustomers.val() === "0" || $numofCustomers.val().length <= 0 ){
            $numofCustomers.addClass('error');
            $numInvalidMsg.css('display','block')
        }else{
            $numofCustomers.removeClass('error');
            $numInvalidMsg.css('display','none')
        }
    });
    $resetBtn.on('click', ()=>{
        $allInputs.val("");
        $numofCustomers.val("1");
        $('.tipBtn').children().removeClass('activeTip');
        $amountPerPerson.html("$0.00");
        $totamtPersn.html("$0.00")
    });

}

$(document).ready(actions)


function tipCalc(btnId){
    let target = document.getElementById(btnId);
    let tipPercent = parseFloat(target.innerHTML.replace("$",""));
    let billInput = document.getElementById('custBill');
    let billValue = parseFloat(billInput.value);
    let tipEachdisplay = document.getElementById('tipAmtPerson');
    let totalEachdisplay = document.getElementById('totamountperPerson');
    let customInput = document.getElementById('customTip');
    let customVal = parseFloat(customInput.value);
    let numPplInput = document.getElementById('numofCust');
    let numPplVal = parseInt(numPplInput.value);
    let tipforEach = (billValue/numPplVal * (tipPercent/100)).toFixed(2);
    let totalEach = (billValue/numPplVal)+parseFloat(tipforEach);
        
    if(btnId === "customTip"){
        tipforEach = (billValue/numPplVal *(customVal/100)).toFixed(2);
       totalEach = ((billValue/numPplVal)+parseFloat(tipforEach)).toFixed(2);
    }

    if(tipforEach > 0 && totalEach > 0 ){
        tipEachdisplay.innerHTML = "$" + tipforEach;
        totalEachdisplay.innerHTML = "$"+ totalEach
    }else{
        tipEachdisplay.innerHTML = "$0.00";
        totalEachdisplay.innerHTML = "$0.00";

    }
}