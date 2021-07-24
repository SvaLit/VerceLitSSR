import Realm from "realm";
import {LitElement, html} from "lit";
import {until} from '#isomorphic-until';

export function isServer() {
    return (typeof process !== 'undefined') && (process.release.name === 'node');
}

export class AppDemo extends LitElement {
    constructor() {
        super();
        this.url = '';
        this.hydrated = false;
        this.mongo = this.connectRealmMongoDB();
        this.cache = null;
    }

    async connectRealmMongoDB() {
        const app = new Realm.App({id: "test-jenyl"});
        const credentials = Realm.Credentials.anonymous();
        try {
            const user = await app.logIn(credentials);
            return app.currentUser.mongoClient("mongodb-atlas");
        } catch (err) {
            console.error("Failed to log in", err);
        }
    }

    static get properties() {
        return {
            url: {type: String},
            hydrated: {type: Boolean}
        }
    }

    async testRealm() {
        if (this.cache) return this.cache;
        const mongo = await this.mongo;
        if (!mongo) return 'Error';
        const test = mongo.db("test").collection("test");
        return this.cache = (await test.findOne(isServer() ? {server: true} : {client: true})).content;
    }

    firstUpdated(_changedProperties) {
        this.hydrated = true;
        this.url = location.href.replace(location.origin, '');
        super.firstUpdated(_changedProperties);
    }

    render() {
        return html`<p>Path: ${this.url} (${this.hydrated ? html`<span style="color: greenyellow">Hydrated</span>` :
                html`
                    <slot></slot>`})</p><p><span style="color: gray">Content from DB:</span>
            ${until(this.testRealm(), 'Loading...')}</p>`;
    }
}

customElements.define('lit-app', AppDemo);
