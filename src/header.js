import logo from "./assets/logo2.webp"
export function generateHeader(){
    const element = document.createElement("div");
    element.className = "header";
    element.appendChild(generateLogo());
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