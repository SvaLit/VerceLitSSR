import {access, rename, mkdir, readFile, writeFile, rm} from 'fs/promises';
import glob from 'glob';

console.log('Hey from install.js !');

const modulesDir = 'modules',
    packages = ['@lit', '@lit-labs', '@types', 'lit', 'lit-element', 'lit-html'],
    stages = {
        prepareDir: true,
        removeOldPackages: true,
        movingNewPackages: true,
        removePackageTypes: false,
        removeIssues: true
    },
    getPath = path => new URL(path + '/', import.meta.url);

console.log('Target modules path:', getPath(modulesDir).pathname)

if (stages.prepareDir) {

    console.log('Preparing directory...')

    await access(getPath(modulesDir)).catch(async () => await mkdir(getPath(modulesDir)).catch(console.error));

}

if (stages.removeOldPackages) {

    console.log('Removing old packages...')

    await Promise.all(packages.map(async pkg => await rm(getPath(modulesDir + '/' + pkg), {
        recursive: true,
        force: true
    }).catch(console.error)));

}

if (stages.movingNewPackages) {

    console.log('Moving packages...')

    await Promise.all(packages.map(async pkg => await rename(getPath('node_modules/' + pkg), getPath(modulesDir + '/' + pkg)).catch(console.error)));

}

if (stages.removePackageTypes) {

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

}

if (stages.removeIssues) {

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

}

console.log('Install complete ! 🎉');
