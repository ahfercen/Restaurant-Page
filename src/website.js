import {generateHome} from "./home";
import {generateHeader} from "./header";

export function website(){
    const content = document.getElementById("content");
    content.appendChild(generateHeader());
    content.appendChild(tabLoader(1));
}
export function changeTab(e){
    tabLoader(e.srcElement.dataset.value);
}
function tabLoader(index){
    switch (index) {
        case 0:
            return generateHome();
        case 1:
            return generateHome();
        case 2:
            return generateHome();
        default:
            return generateHome();
    }
}



