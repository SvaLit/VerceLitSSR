import {access, rename, mkdir, readFile, writeFile} from 'fs/promises';
import glob from 'glob';

console.log('Hey from install.js !');

// 1. Install Lit packages from NPM

// 2. Move to another directory (from node_modules)

const modulesDir = 'modules2',
    packages = ['@lit', '@lit-labs', '@types', 'lit', 'lit-element', 'lit-html'],
    getPath = path => new URL(path + '/', import.meta.url);

try {
    await access(getPath(modulesDir))
} catch (e) {
    await mkdir(getPath(modulesDir))
}
try {
    await Promise.all(packages.map(async pkg => await rename(getPath('node_modules/' + pkg), getPath(modulesDir + '/' + pkg))));
} catch (e) {
    console.error(e);
}

// 3. Remove all "type": "module" from packages
await glob("modules2/**/package.json", {}, function (er, files) {
    // console.debug(files);
    files.forEach(async file => {
        try {
            const path = new URL(file, import.meta.url),
                content = await readFile(path, 'utf8'),
                json = JSON.parse(content);
            delete json.type;
            return await writeFile(path, JSON.stringify(json, null, 2));
        } catch (e) {
            return console.error(e);
        }
    })
})

// 4. Remove oversetting "require" method in sources

const enemyString = `const require = createRequire(import.meta.url);`,
    enemyFiles = [
        '@lit-labs/ssr/lib/element-renderer.js',
        '@lit-labs/ssr/lib/render-lit-html.js',
        '@lit-labs/ssr/lib/util/parse5-utils.js'
    ];

enemyFiles.forEach(async file => {
    try {
        const path = new URL(modulesDir + '/' + file, import.meta.url),
            content = await readFile(path, 'utf8'),
            result = content.replace(enemyString, '');
        return await writeFile(path, result);
    } catch (e) {
        return console.error(e);
    }
})

console.log('Install complete ! 🎉');
