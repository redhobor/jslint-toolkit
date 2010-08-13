
print("JSLint-Toolkit v1.1");
print("=============================================");

var System = Packages.java.lang.System;
var userDir = System.getProperty("user.dir");
var slash = System.getProperty("file.separator");
var newLine = System.getProperty("line.separator");

var outPath = "";

// Read configuration, outPath will be assigned in the funtion call.
var treeJSON = config(arguments[0]);

// make necessary directories
io.makeDir(outPath);
io.makeDir(outPath + slash + "data");
io.makeDir(outPath + slash + "data" + slash + "json");
io.makeDir(outPath + slash + "data" + slash + "errors");
io.makeDir(outPath + slash + "data" + slash + "source");


var files = [];

// treeJSON will be modified in this function call
(function lintTree(rootArray) {
    var errorTotal = [0, 0, 0], i = 0, file, errorCount, lintFileResult;
    for (; i < rootArray.length; i++) {
        file = rootArray[i];
        errorCount = [0, 0, 0];
        if (file.type === "folder" && file.kids) {
            errorCount = lintTree(file.kids);
            //delete file.path;
        } else {
            // Lint JavaScript file
            lintFileResult = lint(file.path, file.name);
            errorCount = lintFileResult[1];
            file.lines = lintFileResult[0];
        }
        file.errors = errorCount;
        errorTotal[0] += errorCount[0];
        errorTotal[1] += errorCount[1];
        errorTotal[2] += errorCount[2];

        if (file.type === 'file') {
            files.push(file);
        }
    }
    return errorTotal;
})(treeJSON);
// save treeJSON
io.saveFile(outPath + slash + "data" + slash + "json" + slash + "tree.json", JSON.stringify(treeJSON, null, 4));



files = files.sort(function(a, b) {
    if (a.errors[3]) {
        return -1;
    } else if (b.errors[3]) {
        return 1;
    } else {
        return b.errors[1] - a.errors[1];
    }
});
// save report
var i, report = [], f, warnings_all, warning_l1;
report.push("No.", "\t", "Folder", "\t", "Lines", "\t", "L1 Warnings", "\t", "Total Warnings", "\t", "Fail to Pass JSLINT", "\n");
for (i = 0; i < files.length; i++) {
    f = files[i];
    warnings_all = f.errors[3] ? "N/A" : f.errors[0];
    warning_l1 = f.errors[3] ? "N/A" : f.errors[1];
    report.push(i + 1, "\t", f.path, "\t", f.lines, "\t", warning_l1, "\t", warnings_all, "\t", f.errors[3], "\n");
}
io.saveFile(outPath + slash + "data" + slash + "json" + slash + "report.txt", report.join(''));






print("=============================================");
print("All Done!");
