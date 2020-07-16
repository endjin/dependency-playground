import "functions.js"
const core = require('@actions/core');

try {
    const prTitle = core.getInput('pr_title');
    console.log(`PR title is: '${prTitle}'`);

    let result = parseTitle(prTitle);
    result.updateType = calculateUpdateType(result.versionFrom, result.versionTo);

    console.log(result);

    core.setOutput("dependency_name", dependencyName);
    core.setOutput("version_from", versionFrom);
    core.setOutput("version_to", versionTo);
    core.setOutput("folder", folder);
    core.setOutput("update_type", updateType);
} catch (error) {
    core.setFailed(error.message);
}