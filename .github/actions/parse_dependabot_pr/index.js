const functions = require("./functions")
const core = require('@actions/core');

try {
    const prTitle = core.getInput('pr_title');
    console.log(`PR title is: '${prTitle}'`);

    let result = functions.parseTitle(prTitle);
    result.updateType = functions.calculateUpdateType(result.versionFrom, result.versionTo);

    console.log(result);

    core.setOutput("dependency_name", result.dependencyName);
    core.setOutput("version_from", result.versionFrom);
    core.setOutput("version_to", result.versionTo);
    core.setOutput("folder", result.folder);
    core.setOutput("update_type", result.updateType);
} catch (error) {
    core.setFailed(error.message);
}