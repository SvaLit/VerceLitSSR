import {LitElement, html} from "lit";
import {until} from 'lit/directives/until.js';
import {serverUntil} from "@lit-labs/ssr-client/directives/server-until.js";
import 'isomorphic-fetch';

export function isServer() {
    return (typeof process !== 'undefined') && (process.release.name === 'node');
}

export async function fetchIP() {
    return await fetch('https://api.ipify.org?format=json'/*, {mode: "no-cors"}*/).then(r => r.json()).then(r => r.ip);
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
        this.url = location.pathname;
        this.ip = fetchIP();
        super.firstUpdated(_changedProperties);
    }

    render() {
        return html`<p>Path: ${this.url} ${this.hydrated ? '(Hydrated)' : ''}</p>
        <p>Worker IP:
            <span>${isServer() ? serverUntil(this.getIP(), 'Updating...') : until(this.getIP(), 'Updating...')}</span>
        </p>`;
    }
}

customElements.define('lit-app', AppDemo);
