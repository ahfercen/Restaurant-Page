import heroImage1 from "./assets/hero1.jpeg";
import heroImage2 from "./assets/hero6.jpg";
import heroImage3 from "./assets/logo7.jpg";
import heroImage4 from "./assets/hero4.jpg";

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
    a[0] = [ heroImage1 , "🔥 Hot Sandwiches In Your Area 🔥"];
    a[1] = [ heroImage2 , "🥵 Shrek Powder 🥵"];
    a[2] = [ heroImage3 , "😍 Spoonfuls Of Fun 😍"];
    a[3] = [ heroImage4 , "🤤 Chocolate Free Brownie 🤤"];
    return a;    
}
function generateHeroItem(data){
    const element = document.createElement("div");
    element.className = "hero-content";
    const imageDiv = document.createElement("div");
    imageDiv.className = "hero-img";
    const image = document.createElement("img");
    image.src=data[0];
    imageDiv.appendChild(image);
    const textDiv = document.createElement("div");
    textDiv.className = "hero-text";
    const text = document.createElement("p");
    text.textContent =  data[1];
    textDiv.appendChild(text);

    element.appendChild(imageDiv);
    element.appendChild(textDiv);
    return element;
}

