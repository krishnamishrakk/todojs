document.querySelector(".button2").onclick = function () {
    document.querySelector(".p1").style.display = "none";
    document.querySelector(".container2").style.display = "block"
}

document.querySelector("#button1").onclick = function () {
    document.querySelector(".container2").style.display="none"
    document.querySelector(".taskadd").style.display="block"
    let x = document.querySelector("#input").value;
    if (x == 0) {
        alert("Please add a task")
    } else {
        
     document.querySelector(".taskadd").innerHTML+=
     `<div class="newbox"><div class="newbox1">
      <span class="newin">${document.querySelector("#input").value}</span>
     <button class= "delete"><span class="material-icons outlined">
     delete
     </span></button>
     
     
     </div></div>
     `;
     var d= document.querySelectorAll(".delete");
for(var i=0;i<d.length;i++){
    d[i].onclick=function(){
        this.parentNode.remove();
        
    }
}
  var com= document.querySelectorAll(".newbox");
  for(var i=0;i<com.length;i++){
      com[i].onclick=function(){
          this.classList.toggle("completed");
      }
  }
  document.querySelector("#in").value= "";

    }
}
// let d= document.querySelectorAll(".delete");
// for(let i=0;i<d.length;i++){
//     d[i].onclick=function(){
//         this.parentNode.remove();
//     }
// }
