const path = require('path');
const tar = require('tar');
const packlist = require('npm-packlist');
const { FileSystem } = require('@bfunjs/utils');
const { File } = FileSystem;

const rootDir = process.cwd();

exports.cleanDir = async function (dirname) {
    const dist = path.resolve(rootDir, dirname);
    await new File(dist).delete();
    await new File(dist).createIfNotExists();
}

exports.copyDir = async function (from, to) {
    const a = path.join(rootDir, from);
    const b = path.join(rootDir, to);
    await new File(a).copyTo(b);
}

exports.packDir = async function (from, to, clean = false) {
    const cwd = path.join(rootDir, from);
    const file = path.join(rootDir, to);

    const files = await packlist({ path: cwd });
    await tar.create({ prefix: 'package/', cwd, file, gzip: true }, files);

    if (clean) await new File(cwd).delete();

    console.log(cwd, '-->', file);
}

exports.exec = async function (list) {
    for (let i = 0, l = list.length; i < l; i++) {
        const { func, args } = list[i];
        await func.apply(this, args);
    }
}