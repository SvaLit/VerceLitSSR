import {LitElement, html} from "lit";
import {serverUntil} from "@lit-labs/ssr-client/directives/server-until.js";

export function isServer() {
    return (typeof process !== 'undefined') && (process.release.name === 'node');
}

export async function fetchIP() {
    return await fetch('https://api.ipify.org?format=json').then(r => r.json()).then(r => r.ip);
}

export class AppDemo extends LitElement {
    constructor() {
        super();
        this.url = '';
        this.ip = isServer() ? fetchIP() : '';
        this.hydrated = false;
    }

    static get properties() {
        return {
            url: {type: String},
            hydrated: {type: Boolean}
        }
    }

    async getIP() {
        return await this.ip;
    }

    firstUpdated(_changedProperties) {
        this.hydrated = true;
        this.url = location.href.replace(location.origin, '');
        this.ip = fetchIP();
        super.firstUpdated(_changedProperties);
    }

    render() {
        return html`<p>Path: ${this.url} (${this.hydrated ? html`<span style="color: greenyellow">Hydrated</span>` :
                html`<slot></slot>`})</p><p><span style="color: gray">Worker IP:</span> ${serverUntil(this.getIP(), 'Updating...')}</p>`;
    }
}

customElements.define('lit-app', AppDemo);
