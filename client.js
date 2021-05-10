import hello from "/template.js";
import {render} from 'lit';
import {hydrate} from 'lit/experimental-hydrate.js';

hydrate(hello({who: 'World'}), document.body);
const update = (text) => render(hello({who: text}), document.body);

setTimeout(() => update('Hydrate'), 1000);
