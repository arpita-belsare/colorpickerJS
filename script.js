const colors=["green","red","blue","orange","skyblue","pink","yellow","purple"," rgb(39, 31, 59);",];
const btn=document.querySelector("#bot");
const color=document.querySelector('.color');

btn.addEventListener("click", function(){
    const random=getrandomNumber();
    // console.log(random);
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
});
function getrandomNumber(){
    return Math.floor(Math.random() * colors.length)
}


