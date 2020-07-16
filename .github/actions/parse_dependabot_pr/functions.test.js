const functions = require("./functions")

test('parses a dependabot PR title correctly', () => {
    expect(
        functions.parseTitle("Bump Foo.Bar from 0.5.0 to 1.0.0 in /Solutions"))
        .toStrictEqual({ dependencyName: "Foo.Bar", versionFrom: "0.5.0", versionTo: "1.0.0", folder: "/Solutions" });
});

test('calculate major update', () => {
    expect(
        functions.calculateUpdateType("0.5.2", "1.0.0"))
        .toBe("major");
});

test('calculate minor update', () => {
    expect(
        functions.calculateUpdateType("0.5.2", "0.7.1"))
        .toBe("minor");
});

test('calculate patch update', () => {
    expect(
        functions.calculateUpdateType("0.5.2", "0.5.10"))
        .toBe("patch");
});