import heroImage1 from "./assets/hero1.jpeg";

export function generateHome(){
    const element = document.createElement("div");
    element.className = "home";    
    element.appendChild(generateHero());


    return element;
}
function generateHero(){
    const element = document.createElement("div");
    element.className = "hero";
    generateGrid(element);
    return element;
}
function generateGrid(element){
    const data = makeHomeData();
    for (let i =0; i<data.length;i++){
        const gridItem = document.createElement("div");
        gridItem.className = "hero-item";
        gridItem.appendChild(generateHeroItem(data[i]));
        element.appendChild(gridItem);
    }
}
function makeHomeData(){
    const a = new Array(4);
    a[0] = [ heroImage1 , "Pasta Pizza Mamma Mia"];
    return a;    
}
function generateHeroItem(data){
    console.log(data);
    return document.createElement("div");
}

