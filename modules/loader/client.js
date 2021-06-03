import 'lit/experimental-hydrate-support.js';
import {
    hasNativeDeclarativeShadowRoots,
    hydrateShadowRoots
} from '@webcomponents/template-shadowroot/template-shadowroot.js';

if (!hasNativeDeclarativeShadowRoots) {
    hydrateShadowRoots(document.body);
}

import('/components/app.js');
