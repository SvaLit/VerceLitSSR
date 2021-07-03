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
        <body>
        <lit-app url="${req.url}">Hot hydrated</lit-app>
        </body>
        </html>`), true).pipe(res);
}
