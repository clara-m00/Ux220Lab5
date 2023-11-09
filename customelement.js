class ClaraElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "Hey! Clara was here! I made this with custom elements!";
    }
}

customElements.define("x-clara", ClaraElement);

class CenterElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-fullyear", YearElement);

class PurpleElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="color:purple">${this.innerHTML}</div>`;
    }
}

customElements.define("x-purpletext", PurpleElement);

class BackgroundcolorElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="background-color:green">${this.innerHTML}</div>`;
    }
}

customElements.define("x-backgroundcolor", BackgroundcolorElement);