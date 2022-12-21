export function generateContact() {
    const element = document.createElement("div");
    element.className = "contact";
    generateFlex(element);
    return element;
}
function generateFlex(contact) {
    const content = document.createElement("div");
    content.className = "contact-content";
    generateInfo(content);

    contact.appendChild(content);
}
function generateInfo(content) {
    const element = document.createElement("div");
    element.className = "contact-info";

    const titleDiv = document.createElement("div");
    titleDiv.className = "contact-title";
    titleDiv.textContent = "Gorbino's Nutrious Human Foods";

    const textDiv = document.createElement("div");
    textDiv.className = "contact-text";
    textDiv.textContent = "Started in 1768 as a family business, Our chain of restaurants has been serving the human community for centuries."

    const staffDiv = document.createElement("div");
    staffDiv.className = "contact-staff";
    const btn = document.createElement("button");
    btn.textContent = "Meet Our Staff!";
    staffDiv.appendChild(btn);

    content.appendChild(titleDiv);
    content.appendChild(textDiv);
    content.appendChild(staffDiv);
}


