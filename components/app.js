import {LitElement, html} from "#lit";

export class AppDemo extends LitElement {
    constructor() {
        super();
        this.url = '';
        this.hydrated = false;
    }

    static get properties() {
        return {
            url: {type: String},
            hydrated: {type: Boolean}
        }
    }

    firstUpdated() {
        setTimeout(() => {
            this.hydrated = true;
            this.url = location.pathname;
        }, 1000);
    }

    render() {
        return html`<p>Path: ${this.url} ${this.hydrated ? '(Hydrated)' : ''}</p>`;
    }
}

customElements.define('lit-app', AppDemo);
