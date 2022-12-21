import {generateHome} from "./home";
import {generateMenu} from "./menu";
import {generateContact} from "./contact"
import {generateHeader} from "./header";

export function website(){
    const content = document.getElementById("content");
    content.appendChild(generateHeader());
    content.appendChild(generateHome());
    content.appendChild(generateMenu());
    content.appendChild(generateContact());
    tabLoader(2);
}
export function changeTab(e){
    tabLoader(e.srcElement.dataset.value);
}
function tabLoader(index){
    const content = document.getElementById("content");
    const pages = new Array(3);
    pages[0] = content.getElementsByClassName("home");
    pages[1] = content.getElementsByClassName("menu");
    pages[2] = content.getElementsByClassName("contact");

   for (let i=0;i<pages.length;i++){
    pages[i][0].style.visibility = "hidden";
    pages[i][0].style.opacity = "0%";
   }
   pages[index][0].style.visibility = "visible"
   pages[index][0].style.opacity = "100%";
}



