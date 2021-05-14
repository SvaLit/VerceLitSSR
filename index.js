import {render} from "./@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import {html} from "./import.js";
import "./app.js";

export default async (req, res) => {
    res.status(200);
    res.write('<body>')
    const result = render(html`
        <lit-app name="World"></lit-app>`);
    for await (const value of result) res.write(value)
    return res.end(`</body><script type="importmap">
{
  "imports": {
    "lit": "https://cdn.skypack.dev/lit/",
    "lit/experimental-hydrate.js": "https://cdn.skypack.dev/lit/experimental-hydrate.js",
    "lit/experimental-hydrate-support.js": "https://cdn.skypack.dev/lit/experimental-hydrate-support.js",
    "@webcomponents/template-shadowroot/template-shadowroot.js": "https://cdn.skypack.dev/@webcomponents/template-shadowroot/template-shadowroot.js"
  }
}
</script>
<script src="https://ga.jspm.io/npm:es-module-shims@0.10.1/dist/es-module-shims.js"></script>
<script type="module" src="/client.js"></script>`);
}
