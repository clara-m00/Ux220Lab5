class ClaraElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Clara was here";
    }
}

customElements.define("x-clara", ClaraElement);