// @ts-check
const git = require('git-describe');
const path = require('path');
const fs = require('fs-extra');

function getAppVersionAndWriteFile() {
  const info = git.gitDescribeSync({ longSemver: true });

  // const file = path.resolve(__dirname, 'app-version.ts');
  const file = path.resolve(process.cwd(), 'app-version.ts');

  fs.writeFileSync(file, `export const VERSION = ${JSON.stringify(info)};`, {
    encoding: 'utf-8',
  });

  console.log(`Wrote version info ${info.raw} to ${file}`);
  // console.log(`Wrote version info ${info.raw} to ${path.relative(path.resolve(__dirname, '..'), file)}`);
}

const genTSfile = function genTSAppVersion() {
  try {
    getAppVersionAndWriteFile();
  } catch (error) {
    console.error(`Could not generate app-version file.`);
    console.error(error);
  }
};

exports.genTSfile = genTSfile;
