function setUpEvents(){
    
    var myMessage = document.getElementById("message");
    var colours = ["red", "blue", "green"];
    var counter = 0;
    
    function showmessage(){     
        if(counter >= colours.length){
            counter =0;
        };
        myMessage.className = "show";
        myMessage.style.background = colours[counter];
        counter++;
    }
   var myTimer = setInterval(showmessage, 3000);
    
    myMessage.onclick = function(){
        clearInterval(myTimer);
        myMessage.innerHTML = "Timer stopped";
    };
};

window.onload = function(){
  
    setUpEvents();
};