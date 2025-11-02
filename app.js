let btn = document.querySelector('.add');

let ip = document.querySelector('input');

let h2 = document.querySelector('h2');

let ul = document.querySelector('ul');

let clear = document.querySelector('.clear');

let txt = document.querySelector(".toggle");

let taskContainer = document.querySelector(".tasks");

btn.addEventListener('click',function(){

    
    if(ip.value !== ""){
    
    h2.innerText = "Your Tasks";
    ip.value = ip.value.replace(/[^a-zA-Z\s]/g,"");

    let li = document.createElement('li');
    li.innerText = ip.value;
    ul.appendChild(li);
    
    let del = document.createElement("button");
    li.appendChild(del);
    del.classList.add("delete");
    del.innerText = "Remove";
    del.addEventListener('click',function(){
    li.remove();
    console.log(`Task Removed Successfully!`);
    if(ul.children.length == 0){
     h2.innerText = "";
     taskContainer.style.display = "none";
     clear.style.opacity = '0';
    }
    })

    taskContainer.style.display = "inline";
    
    console.log("New Task is added!");
    ip.value = "";

    clear.style.opacity = '1';
    } 
    else{
        alert("Please, Enter Task!");
        console.log("Task is not added.")
    }
    
});

ip.addEventListener('keypress', function(e){
    if(e.key === "Enter") btn.click();
});

clear.addEventListener('click',function(){
        ul.remove();
        h2.innerText ="";
        clear.style.opacity = '0';
        taskContainer.style.display = "none";
        
});

const toggle = document.querySelector(".toggle");
const label = document.querySelector(".toggle p");
const circle = document.querySelector(".circle");

toggle.addEventListener("click", function() {
  document.body.classList.toggle("after");
  ip.classList.toggle("change1");
  ip.classList.toggle("place");
  btn.classList.toggle("change2");
  clear.classList.toggle("change2");

  const allDelBtns = document.querySelectorAll(".delete");
  allDelBtns.forEach(d => d.classList.toggle("change3"));

  circle.classList.toggle("active");
  toggle.classList.toggle("activ");
  label.classList.toggle("p");

  if (circle.classList.contains("active")) {
    label.textContent = "Light"; 
  } else {
    label.textContent = "Dark";
  }
});



