
// img.addEventListener('click', function(){
    //     modelimg.style.display = "block";
    // })

    
// ! 1-get the model 
    
var model = document.getElementById('the_model');
var img = document.getElementById('the_img');
    
 // ! 2- get the content of the model
    
 var modelimg = document.getElementById('img');
 var modelcaption=document.getElementById("caption");

 img.onclick = function(){
    model.style.display = "block";
    modelimg.src = this.src;
    modelcaption.innerHTML=this.alt
}

//  ! 3+4 - get the close btn 
 var close = document.getElementsByClassName('close')[0];
close.onclick = function(){
    model.style.display="none";
}
 
// ! 5- when click on esc hide the model 

document.onkeydown=function(e){
    if(e.keyCode == "27"){
        model.style.display="none";   
    }
}

