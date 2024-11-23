let home = 0;
let guest = 0;

let home1 = document.getElementById("home-el");
let guest1 = document.getElementById("guest-el");


function homeAdd1(){
home+=1; 
home1.textContent= home;  
};
function homeAdd2(){
home+=2; 
home1.textContent= home;     
};
function homeAdd3(){
home+=3;  
home1.textContent= home;    
};
function guestAdd1(){
guest+=1;
guest1.textContent = guest;    
};
function guestAdd2(){
guest+=2;
guest1.textContent = guest;       
};
function guestAdd3(){
guest+=3; 
guest1.textContent = guest;      
};



