var boxId = 1000;
var loopCount = 0;
var actionCount = 1;
var num1 = 0;

if (document.getElementsByClassName("liel").length !== null) { var num2 = document.getElementsByClassName("liel").length; } else { num2 = 0; }

function butClick() {
    var entry = document.getElementById("text").value;
    var tridiv = document.getElementById('tri');
    var inject = document.createElement('div');
    
    if (entry.length > 0) {
        var rawEntry = { eintrag: entry };
        var httreq = new XMLHttpRequest();
        httreq.open("POST", "http://127.0.0.1:1337/list", true);
        httreq.send(JSON.stringify(rawEntry));
        
        num2++;
        document.getElementById("text").value = "";
        
        inject.className = "liel";
        
        var checkbox = document.createElement('input');
        
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("onclick", "chClick()");
        checkbox.setAttribute("id", boxId + document.getElementsByClassName("liel").length + 1);
        
        inject.appendChild(checkbox);
        inject.appendChild(document.createTextNode(entry));
        tridiv.appendChild(inject);
        document.getElementById("remain").innerHTML = num2 + " of " + num2 + " remaining";
     }
}

function chClick() {
    var boxCount = document.getElementsByClassName("liel"); 
    var num1 = num2;
       
    for (i = 1; i <= boxCount.length; i++) {
        loopCount = 0;
        actionCount = 1;
        rename();
        var checked = document.getElementById(1000 + i);
       
        if (checked.checked === true) {
            boxCount[i - 1].style.textDecoration = "line-through";
            boxCount[i - 1].style.color = "grey";
            num1--;
        } else {
            boxCount[i - 1].style.textDecoration = "none";
            boxCount[i - 1].style.color = "black";
        }
        document.getElementById("remain").innerHTML = num1 + " of " + num2 + " remaining";    
    }
}

function archive() {
    var boxCount = document.getElementsByClassName("liel"); 
    
    for (i = 1; i <= boxCount.length; i++) {
        loopCount = 0;
        actionCount = 1;
        rename();
        var checked = document.getElementById(1000 + i);
       
        if (checked.checked == true) {
            boxCount[i - 1].remove();
            num2--;
            loopCount = 0;
            actionCount = 1;
            rename;
            num2 = document.getElementsByClassName("liel").length;
            document.getElementById("remain").innerHTML = num2 + " of " + num2 + " remaining";
            archive();
        } else {    
            loopCount = 0;
            actionCount = 1;
            rename();
        }
    }
}

 function rename() {
    var elementBool = document.getElementById(1001 + loopCount)    
    
    if (num2 !== 0) {
        loopCount++;
        
        if (elementBool == null) {
            rename();
        } else {
            elementBool.id = actionCount + 1000;
            actionCount++;
               
            if (document.getElementsByClassName("liel").length >= actionCount) {
                rename(); 
                document.getElementById("remain").innerHTML = num2 + " of " + num2 + " remaining";
            } 
        }
    }    
}
