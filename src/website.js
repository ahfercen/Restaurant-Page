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
}
export function changeTab(e){
    const content = document.getElementById("content");
    //console.log(content.getElementsByClassName("home"));
    //content.innerHTML = '';
    //content.appendChild(generateHeader());
    //content.appendChild(tabLoader(e.srcElement.dataset.value));
}
function tabLoader(index){
    console.log(index);
    switch (index) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        default:
            break;
    }
}



