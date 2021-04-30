import {render} from "./@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import {html} from "./lit";

export default async (req, res) => {
    res.status(200);
    const who = html`<b>World</b>`;
    const hello = html`Hello ${who}`;
    const result = render(hello);
    for await (const value of result) res.write(value)
    return res.end();
}
