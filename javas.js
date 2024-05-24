const menu=document.getElementById("menu");
const notdropdown=document.getElementById("notdropdown");
const close=document.getElementById("close")

function showsidebar(){
    notdropdown.style.display="flex";
    close.style.display="block"
    menu.style.display="none";
}
function closesidebar(){
    notdropdown.style.display="none";
    menu.style.display="block";
    close.style.display="none";
}