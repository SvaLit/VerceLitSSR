import {access, rename, mkdir, readFile, writeFile, rmdir, rm} from 'fs/promises';
import glob from 'glob';

console.log('Hey from install.js !');

const modulesDir = 'modules',
    packages = ['@lit', '@lit-labs', '@types', 'lit', 'lit-element', 'lit-html'],
    getPath = path => new URL(path + '/', import.meta.url);

console.log('Target modules path:', getPath(modulesDir).pathname)

await access(getPath(modulesDir)).catch(async () => await mkdir(getPath(modulesDir)).catch(console.error));

console.log('Preparing directory...')

await Promise.all(packages.map(async pkg => await rm(getPath(modulesDir + '/' + pkg), {
    recursive: true,
    force: true
}).catch(console.error)));

console.log('Moving packages...')

await Promise.all(packages.map(async pkg => await rename(getPath('node_modules/' + pkg), getPath(modulesDir + '/' + pkg)).catch(console.error)));

console.log('Updating package configurations...')

await glob("modules/**/package.json", {}, function (er, files) {
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

console.log('Removing issues...')

const enemyString = `import { createRequire } from 'module';
const require = createRequire(import.meta.url);
`,
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
