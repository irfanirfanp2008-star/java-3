var form = document.getElementById("form");
var display = document.getElementById("display")
var displayS = document.getElementById("displayS")
var displayp = document.getElementById("displayp")
var button = document.getElementById("submitl")

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();
        let amount = document.getElementById("amount").value;

        if(amount>0){
             localStorage.setItem("Expense Amount", amount);
             display.innerHTML = "Expense Amount:"+amount;
            displayS.innerHTML = "Expense Added Successfully";
        }else{
            displayS.innerHTML = "please enter a valid amount";            
        }
    });
      button.addEventListener("click", function(event){

        let lastexpense = document.getElementById("amount").value;
            localStorage.getItem("Expense Amount")
             displayp.innerHTML = "Last Expense:"+lastexpense;
});

    button.addEventListener("reset", function(event){

        let clear = document.getElementById("lastexpense").value;
            localStorage.getItem("lastexpense")
             displayp.innerHTML = "";
});
}




