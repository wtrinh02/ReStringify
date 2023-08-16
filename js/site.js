//Get the String from the page
function getString(){

    document.getElementById("alert").classList.add("invisible")

    let userString = document.getElementById("userString").value;

    let revString =  reverseString(userString);

    displayString(revString)
}

//Reverse the String
function reverseString(userString){

    let revString = [];
    for(let i = userString.length-1; i >= 0; i--){
        revString += userString[i];
    }

    return revString
}

//Display the reversed string to the user
function displayString(reversedString){

    document.getElementById("msg").innerHTML = `Your String Reversed is: ${reversedString}`;
    document.getElementById("alert").classList.remove("invisible");

}