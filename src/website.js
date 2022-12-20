import {generateTabOne} from "./tab_one";
import {generateHeader} from "./header";

export function website(){
    const content = document.getElementById("content");
    content.appendChild(generateHeader());
    content.appendChild(tabLoader(1));
}
export function changeTab(e){
    console.log(e.srcElement.dataset.value);
    return e;
}

function tabLoader(index){
    switch (index) {
        case 0:
            return generateTabOne();
        case 1:
            return generateTabOne();
        default:
            return generateTabOne();
    }
}



