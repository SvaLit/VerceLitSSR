import {renderModule} from '@lit-labs/ssr/lib/render-module.js';

export default async (req, res) => {
    // res.write(head + `<body>`);
    for await (const chunk of (await renderModule(
        './render-template.js',  // Module to load in VM context
        import.meta.url,         // Referrer URL for module
        'renderTemplate',        // Function to call
        [{some: "data"}]         // Arguments to function
    ))) res.write(chunk);
    return res.end(`</body>`);
}


/*import {fileURLToPath} from 'url';
import {readFileSync} from "fs";
import {resolve, dirname} from "path";
import {render} from "@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import {html} from "lit";
import "../components/app.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const head = readFileSync(resolve(__dirname, 'head.html'));

export default async (req, res) => {
    res.write(head + `<body>`);
    for await (const chunk of render(html`
        <lit-app url="${req.url}"><span style="color: coral">Not hydrated</span></lit-app>`)) res.write(chunk);
    return res.end(`</body>`);
}*/
