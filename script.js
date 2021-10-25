let arr = [1,1,0,0,1];
let res;
var start = 100;

function calcEdu() {

    
    var select = document.getElementById('education');
    var text = select.options[select.selectedIndex].text;
    var value = select.options[select.selectedIndex].value;

    if(text == "Undergraduate degree"){
        arr[0] = value; //  1.5 
    }
    
    if(text == "College degree"){
        arr[0] = value; //  1.2 
    }
    
    if(text == "High school degree"){
        arr[0] = value; //  1.05
    }

    if(value == 0.9){
        arr[0] = value; //  0.9
    }
    
    
    
    
     console.log("education = " + arr[0]); 


}

function calcNet(){

    
    var select = document.getElementById('familyNet');
    var text = select.options[select.selectedIndex].text;
    var value = select.options[select.selectedIndex].value;

    if(text == "More than 10,000$"){
        arr[1] = value; //  2 
    }
    
    if(text == "Between 5,000$ and 10,000$"){
        arr[1] = value; //  1.5 
    }
    
    if(text == "Less than 5,000$"){
        arr[1] = value; //  1.2
    }

     console.log("net worth = " + arr[1]);
    
    
    
}


function calcCaste(){

    var select = document.getElementById('caste');
    var text = select.options[select.selectedIndex].text;
    var value = select.options[select.selectedIndex].value;

    

     if(text == "Brahmin"){
        arr[2] = parseFloat(value); //  100 
    }
    
    if(text == "Kshatriya"){
        arr[2] = parseFloat(value); //  50 
    }
    
    if(text == "Vaishya"){
        arr[2] = parseFloat(value); //  20
    }

    if(text == "Shudra"){
        arr[2] = parseFloat(value); //  10
    }

    if(text == "Varna"){
        arr[2] = parseFloat(value); //  -50
    }

     console.log("caste = " + arr[2]);

}


var total = 0;

function test(item){
       if(item.checked){
           total+= parseInt(item.value);
        }
        else{
           total-= parseInt(item.value);
        }
        
        arr[3] = total;


          console.log( "skills = " + arr[3]);
}


function calcul(){  // Function to calculate age
        if( document.getElementById("1").checked == true ){     // document.getElementById() returns a reference to an element by its ID
            var p=document.getElementById("1").value;
            arr[4] = p; // 1.5
        }
        if(document.getElementById("2").checked == true){
            var p=document.getElementById("2").value;
            arr[4] = p; // 1.2
        }
        if(document.getElementById("3").checked == true){
            var p=document.getElementById("3").value;
            arr[4] = p; // 0.95
        }

        console.log("age = " + arr[4]);

    // var t;

    // t = (start * arr[0] * arr[1] + arr[2] + arr[3]) * arr[4];

    // console.log(t);
}

var tRep = [];

function reputCalc(rep){
    

        if(rep.checked){
            
            tRep.push(parseFloat(rep.value));
         }
         else{
            var i = 0;
            while (i < tRep.length) {
                if (tRep[i] == rep.value) {
                tRep.splice(i, 1);
                } else {
`                ++i;
`                }
            }
         }
    
//    arr[5] = tRep
//     console.log("reputation = " + arr[5]);
}


function processOrder() {

    if(arr[0] == 1 && arr[1] == 1 && arr[2] == 0 && arr[3] == 0 && arr[4] == 1){
        document.getElementById("demo").innerHTML = start + '$';
    }
    else{

    
    var t;

    t = (start * arr[0] * arr[1] + arr[2] + arr[3]) * arr[4];

        

    for(var i =0;i<tRep.length;i++){
        console.log(tRep[i]);
        if(tRep[i] > 0){
            
            t*= tRep[i];
        }
        else{
            
            t+= tRep[i];
        }
    }
    var number = Math.floor(t);
   

    console.log("total = " + number);

    // DOM manipulation HTML

    document.getElementById("demo").innerHTML = number + '$';
    }   
}

document.getElementById("h1").innerHTML = "<h1>Dowry Calculator</h1>";

// DOM manipulation CSS

document.getElementById("cr").style.fontFamily = "Arial";
document.getElementById("cr").style.textAlign = "center"

// document.getElementById("container").style.background = "#fff"