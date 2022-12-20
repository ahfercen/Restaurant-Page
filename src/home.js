import heroImage from "./assets/hero.jpeg";

export function generateHome(){
    const element = document.createElement("div");
    element.className = "home";    
    element.appendChild(generateHero());


    return element;
}
function generateHero(){
    const element = document.createElement("div");
    element.className = "hero";
    const imgDiv = document.createElement("div");
    imgDiv.className = "hero-img";
    const heroImg  = document.createElement("img");
    heroImg.src = heroImage;
    imgDiv.appendChild(heroImg);
    element.appendChild(imgDiv);
    const infoDiv = document.createElement("div");
    infoDiv.className="hero-info";
    infoDiv.appendChild(generateHeroText());
    element.appendChild(infoDiv);
    return element;
}

function generateHeroText(){
    const text = "This is a delicious sandwich, finely aged for 34 years."
    const element = document.createElement("p");
    element.className = "hero-text";
    element.innerHTML = text;
    return element;
}