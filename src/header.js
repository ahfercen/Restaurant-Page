import logo from "./assets/logo2.webp"

export function generateHeader(){
    const element = document.createElement("div");
    element.className = "header";
    element.appendChild(generateLogo());
    element.appendChild(generateTabs());
    return element;
}

function generateLogo(){
    const element = document.createElement("div");
    element.className = 'logo';
    const logoImage = document.createElement("img");
    logoImage.src = logo;
    element.appendChild(logoImage);
    return element;
}
function generateTabs(){
    const element = document.createElement("div");
    element.className = 'tabs';
    let btns = new Array(3);


    return element;
}