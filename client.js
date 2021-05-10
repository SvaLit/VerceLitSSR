import hello from "/template.js";
import {render} from 'lit';
import {hydrate} from 'lit/experimental-hydrate.js';

hydrate(hello({who: 'World'}), document.body);
const update = (data) => render(hello(data), document.body);

window.onload = () => setTimeout(() => update(), 1000);
// window.update = text => update({who: text});
