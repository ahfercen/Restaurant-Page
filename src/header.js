export function generateHeader(){
    const element = document.createElement("div");
    element.className = "header";
    element.appendChild(generateLogo());
    return element;
}
function generateLogo(){
    const element = document.createElement("div");
    element.className = 'logo';
    
    return element;
}