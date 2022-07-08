var spanall = document.getElementById("spanall");
var spancomplited = document.getElementById("spancomplited");
var spantodo = document.getElementById("spantodo");
var line = document.getElementById("line");
var id = 0;
const buttons = document.getElementById("list");
const categoryOption = document.querySelector(".txtcat")
const search = document.getElementById("Search")

//event listener
buttons.addEventListener("click", check);
categoryOption.addEventListener("click", category);
search.addEventListener("input", searchope);

//popup
function openpopupall() {
    document.getElementById("backgraundpopup").style.display = "block";
}
document.getElementsByClassName("closepopupadd")[0].onclick = function() {
    document.getElementById("backgraundpopup").style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById("backgraundpopup")) {
    document.getElementById("backgraundpopup").style.display = "none";
  }
}

function add(){ 
    const section = document.createElement("section");
    const span = document.createElement("span");
    const input = document.createElement("input");
    const div = document.createElement("div");
    const task = document.getElementById("txtadd");
    document.getElementById("alert").style.color = "#000000";

    if(task.value.length === 0 || task.value.length > 30){
        document.getElementById("alert").style.color = "#FF416C";
        if(task.value.length === 0){
            document.getElementById("alert").innerText = "YOU DON'T HAVE TASK";
        }else{
            document.getElementById("alert").innerText = "MAX LENGTH IS 30";
        }
        //clear textarea
        task.value = ""; 
    }else{
        id += 1;
        section.setAttribute("id",id);
        div.setAttribute("class","cl1");
        section.setAttribute("class", task.value);
        input.setAttribute("type","checkbox");
        input.setAttribute("class","cl2");
    
        document.getElementById("list").appendChild(section);
        span.innerHTML = task.value;
    
        document.getElementById(id).appendChild(div);
        document.getElementById(id).appendChild(span);
        document.getElementById(id).appendChild(input);
        div.innerHTML = "&times;";

        //clear textarea
        task.value = "";

        //close popup
        document.getElementById("backgraundpopup").style.display = "none";
    }
}



function check(e){
    const element = e.target;
    if(element.classList[0] === "cl1"){
        const pelement = element.parentElement

        pelement.classList.toggle("animatedelete")
        pelement.addEventListener("transitionend", function(){
            pelement.remove();
        })
    }

    if(element.classList[0] === "cl2"){
        const pelement = element.parentElement
        
        pelement.classList.toggle("animatecheck")
    }
}

//search
function searchope(e){
    const SearchInput = e.target.value;
    const txtspan = buttons.childNodes
    txtspan.forEach(function(pelement){
        const inspan = document.getElementById("cl3")
        console.log(pelement)
        console.log(SearchInput)
        if(SearchInput === ""){
            console.log("xxxxxxxxxxxxxxxxxxxxxx")
            pelement.style.display = "flex";
        }else{
            if(pelement.classList.contains(SearchInput)){
                pelement.style.display = "flex";
            }else{
                pelement.style.display = "none";
            }
        }
    })
}

//category
function category(e){
    const todolist = buttons.childNodes
    todolist.forEach(function(pelement){
        switch(e.target.innerHTML){
            case"All":
                line.style.left = "0px"
                pelement.style.display = "flex";
                break;
            case"Complited":
                line.style.left = "110px"
                if(pelement.classList.contains("animatecheck")){
                    pelement.style.display = "flex";
                }else{
                    pelement.style.display = "none";
                }
                break;
            case"To Do":
                line.style.left = "230px"
                if(pelement.classList.contains("animatecheck")){
                    pelement.style.display = "none";
                }else{
                    pelement.style.display = "flex";
                }
                break;
        }
    });
}