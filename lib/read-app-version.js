/**
 * @todo try import instead of file read with node --experimental-modules 
 */

const fs = require('fs')

let appVersionPath = process.argv[2]


function throwErr(err) {
  // console.error('Error! You probably did not provided a valid path.')
  console.log('Unknown')
  return 'Unknown'
}

if(typeof appVersionPath === 'undefined') {
  throwErr()
}
let appVersionFullPath = appVersionPath + '/app-version.ts'


// console.log('Trying to get app-version.ts @path: ' + appVersionPath)


function parseFileContent(rawData) {
  let versionJSONToParse = rawData.replace('export const VERSION =', '').replace(';', '')
  let version = JSON.parse(versionJSONToParse).raw
  console.log(version)
  return version
}

fs.readFile(appVersionFullPath, 'utf8', function (err,data) {
  if (err) {
    throwErr(err)
  } else {
    parseFileContent(data)
  }
});