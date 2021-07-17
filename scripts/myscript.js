function validate() {
    var origin = document.getElementById("origin");
    var destination = document.getElementById("destination");
    if(origin.value == destination.value){
        alert("Origin and Destination cannot be the same!");
    }
}

function way() {
    var travelway = document.getElementById("traveltype");
    if (travelway.options[travelway.selectedIndex].value == "oneway") {
        document.getElementById("returndate").disabled = true;
    }
    else {
        document.getElementById("returndate").disabled = false;
    }

}