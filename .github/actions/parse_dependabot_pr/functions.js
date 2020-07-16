const semver = require('semver')
const semverParse = require('semver/functions/parse')

function parseTitle(prTitle) {
    let re = /Bump (.*) from (.*) to (.*) in (.*)/;

    let matches = prTitle.match(re);

    return {
        dependencyName: matches[1],
        versionFrom: matches[2],
        versionTo: matches[3],
        folder: matches[4]
    };
}

function calculateUpdateType(versionFrom, versionTo) {
    let semverFrom = semver.parse(versionFrom);
    let semverTo = semver.parse(versionTo);

    let updateType = "patch";

    if (semverTo.major > semverFrom.major) {
        updateType = "major";
    } else if (semverTo.minor > semverFrom.minor) {
        updateType = "minor";
    }

    return updateType;
}

exports.parseTitle = parseTitle;
exports.calculateUpdateType = calculateUpdateType;