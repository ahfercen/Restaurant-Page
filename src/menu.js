import menuImage1 from "./assets/menu10.jpeg";
import menuImage2 from "./assets/menu11.jpeg";
import menuImage3 from "./assets/menu12.jpeg";
import menuImage4 from "./assets/menu13.jpeg";
import menuImage5 from "./assets/menu5.jpeg";
import menuImage6 from "./assets/menu6.jpeg";
import menuImage7 from "./assets/menu7.jpeg";
import menuImage8 from "./assets/menu8.jpeg";
import menuImage9 from "./assets/menu9.jpeg";

export function generateMenu() {
    const element = document.createElement("div");
    element.className = "menu";

    generateGrid(element);

    return element;
}

function generateGrid(menu) {
    const data = makeMenuData();
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu-div";
    for (let i = 0; i < data.length; i++) {
        const gridItem = document.createElement("div");
        gridItem.className = "menu-item";
        gridItem.appendChild(generateMenuItem(data[i]));
        gridItem.dataset.index = i;
        menuDiv.appendChild(gridItem);
    }
    menu.appendChild(menuDiv);
}
function makeMenuData() {
    const arr = new Array(9);
    arr[0] = [menuImage1, "🥚 Spring Egg Salad 🥚"];
    arr[1] = [menuImage2, "🍣 Dorito Rolls 🍣"];
    arr[2] = [menuImage3, "🥘 Mystery Meat Stew 🥘"];
    arr[3] = [menuImage4, "🍪 A Single Cookie 🍪"];
    arr[4] = [menuImage5, "🏔️ Ranch Mountain 🏔️"];
    arr[5] = [menuImage6, "🐮 Rare Steak 🐮"];
    arr[6] = [menuImage7, "🍊 Orange Herring 🍊"];
    arr[7] = [menuImage8, "📸 Aesthetic Cake 📸"];
    arr[8] = [menuImage9, "🤔 Uncooked Pizza? 🤔"];
    return (arr);
}
function generateMenuItem(data) {
    const element = document.createElement("div");
    element.className = "item-content";
    const imgDiv = document.createElement("div");
    imgDiv.className = "item-img";
    const img = document.createElement("img");
    img.src = data[0];
    imgDiv.appendChild(img);

    const nameDiv = document.createElement("div");
    nameDiv.className = "item-info";
    const name = document.createElement("p");
    name.textContent = data[1];
    nameDiv.appendChild(name);

    element.appendChild(imgDiv);
    element.appendChild(nameDiv);
    return element;
}
