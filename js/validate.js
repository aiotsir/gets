const form = document.getElementById('form');
const f_name= document.getElementById("Fname");
const l_name= document.getElementById("Lname");
const ad1= document.getElementById("Ad1");
const ad2= document.getElementById("Ad2");
const ci= document.getElementById("City");
const code= document.getElementById("PCode");
const st= document.getElementById("State");
const country= document.getElementById("Country");



function checkInputs()
{
    console.log("works");
    if (f_name.value.trim() =="" && l_name.value.trim()=="")
    {
        alert("sorry, you cannot leave it blank");
        return false;
    }
   
    else if (ad1.value.trim() =="" )
    {
        alert("Address cannot be left blank");
        return false;
    }
    else if (ci.value.trim() =="" )
    {
        alert("City cannot be left blank");
        return false;
    }
    else if (code.value.trim() =="" || isNaN( code.value ) || code.value.length != 5 )
    {
        alert("Post Code should be a 5 digit number");
        return false;
    }
    else if (st.value.trim() =="" )
    {
        alert("sorry, you cannot leave State blank");
        return false;
    }
    else if (country.value.trim() =="" )
    {
        alert("sorry, you cannot leave Country blank");
        return false;
    }
    else
    {
        true;
    }    
}

var StatebyCountry= {
    China: ["Haikou", "Hefei", "Changsha", "Changchun", "Wuhan"],
    India: ["Goa", "Karnataka", "Kerala", "Punjab", "Rajasthan"],
    Israel: ["Beersheba", "Haifa", "Holon", "Jerusalem", "Tel Aviv"],
    Srilanka: ["Ampara", "Badulla", "Colombo", "Galle", "Jaffna"],
    USA: ["Boston", "California", "Ohio", "New York", "Texas"]
    }

    function makeSubmenu(value) {
        if(value.length==0) document.getElementById("State").innerHTML = "<option></option>";
        else {
            var stateOptions = "";
            for(stateId in StatebyCountry[value]) {
                stateOptions+="<option>"+StatebyCountry[value][stateId]+"</option>";
                }
            document.getElementById("State").innerHTML = stateOptions;
}
}
function displaySelected() { var ctry = document.getElementById("Country").value;
var s = document.getElementById("State").value;
alert(ctry+"\n"+s);
}
function resetSelection() {
document.getElementById("Country").selectedIndex = 0;
document.getElementById("State").selectedIndex = 0;
}