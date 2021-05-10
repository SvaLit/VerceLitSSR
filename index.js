import {render} from "./@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import hello from "./template";

export default async (req, res) => {
    res.status(200);
    res.write('<body>')
    const result = render(hello({who: 'World'}));
    for await (const value of result) res.write(value)
    return res.end(`</body>
<script async src="https://ga.jspm.io/npm:es-module-shims@0.10.1/dist/es-module-shims.js"></script>
<script async type="importmap">
{
  "imports": {
    "lit": "https://cdn.skypack.dev/lit/",
    "lit/experimental-hydrate.js": "https://cdn.skypack.dev/lit/experimental-hydrate.js"
  }
}
</script><script async type="module" src="/client.js"></script>`);
}
