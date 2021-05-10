import {html} from "./import.js";

export default ({who = 'Default'} = {}) => html`Hello ${html`<b>${who}</b>`}`;
