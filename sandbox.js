// scoti referinta la input
let input=document.querySelector("#add");
// scoti referinta la button
let btn=document.querySelector("#btn");
// scoti referinta la lista elemente
let list=document.querySelector("#list");
// li
let el=document.getElementsByTagName("li");



// Functie care adauga elementele on button click

btn.addEventListener("click", function(){
    let txt= input.value;
    if(txt===""){
        alert("Nu ai introdus nici un text!")
    }else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.insertBefore(li, list.childNodes[0])
        input.value= "";
    }
}
)

// Functia care va sterge elemente cu line-through
list.addEventListener("click",e=>{
    if(e.target.tagName == "LI"){
        e.target.classList.add("checked");
    }
})

