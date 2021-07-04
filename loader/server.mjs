import {fileURLToPath} from 'url';
import {readFileSync} from "fs";
import {resolve, dirname} from "path";
import {render} from "@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import {readableFrom} from '@lit-labs/ssr/lib/readable.js';
import {html} from "lit";
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import "../components/app.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const head = readFileSync(resolve(__dirname, 'head.html'));

export default async (req, res) => {
    return readableFrom(render(html`
        <!DOCTYPE html>
        <html lang="ru">${unsafeHTML(head.toString())}
        <body><script src="https://unpkg.com/es-module-shims@0.12.1/dist/es-module-shims.min.js" async noshim></script>
        <lit-app url="${req.url}"><span style="color: coral">Not hydrated</span></lit-app>
        </body>
        </html>`), true).pipe(res);
}
