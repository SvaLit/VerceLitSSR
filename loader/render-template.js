import {html} from "lit";
import {render} from '@lit-labs/ssr/lib/render-lit-html.js';

export const renderTemplate = (someData) => {
    return render((someData) => html`Hello 🌚`);
};
