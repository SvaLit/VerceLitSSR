import {readFileSync} from "fs";
import {resolve} from "path";
import {render} from "../@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import {html} from "../../components/imports.js";
import "../../components/app.js";

const head = readFileSync(resolve(__dirname, 'head.html'));

export default async (req, res) => {
    res.write(head + `<body>`);
    for await (const chunk of render(html`
        <lit-app url="${req.url}"></lit-app>`)) res.write(chunk);
    return res.end(`</body>`);
}
