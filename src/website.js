import {generateTabOne} from "./tab_one";
import {generateHeader} from "./header";

export function website(){
    const content = document.getElementById("content");
    content.appendChild(generateHeader());
    content.appendChild(generateTabOne());
}
export function changeTab(e){
    console.log(e.srcElement.dataset.value);
    return e;
}



