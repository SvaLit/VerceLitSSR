import '#lit/experimental-hydrate-support.js';
import {
    hasNativeDeclarativeShadowRoots,
    hydrateShadowRoots
} from '@webcomponents/template-shadowroot/template-shadowroot.js';

function supportsDeclarativeShadowDOM() {
    return HTMLTemplateElement.prototype.hasOwnProperty("shadowRoot");
}

if (!supportsDeclarativeShadowDOM()) {
    hydrateShadowRoots(document.body);
}

import('/components/app.js');
