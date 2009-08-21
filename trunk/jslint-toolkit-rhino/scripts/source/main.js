
print("JSLint-Toolkit v1.0");
print("=============================================");

var System = Packages.java.lang.System;
var userDir = System.getProperty("user.dir");
var slash = System.getProperty("file.separator");
var newLine = System.getProperty("line.separator");

var outPath = "";
// Read configuration
var treeJSON = config(arguments[0]);

// make necessary directories
io.makeDir(outPath);
io.makeDir(outPath + slash + "data");
io.makeDir(outPath + slash + "data" + slash + "json");
io.makeDir(outPath + slash + "data" + slash + "errors");
io.makeDir(outPath + slash + "data" + slash + "source");




//var totalErrorCount = 0;
//var currentLintCount = 0;
//var totalFileCount = 0;
//for (var i = 0; i < treeJSON.length; i++) {
//    var file = treeJSON[i];
//    if (file.fileCount) {
//        totalFileCount += file.fileCount;
//    } else {
//        totalFileCount++;
//    }
//}
//print("Find " + totalFileCount + " JavaScript files.");

// treeJSON will be modified in this function call
(function lintTree(rootArray) {
    var errors = [0, 0, 0];
    for (var i = 0; i < rootArray.length; i++) {
        var file = rootArray[i];
        var errorCount = [0, 0, 0];
        if (file.type === "folder" && file.kids) {
            errorCount = lintTree(file.kids);
            delete file.path;
        }
        else {
            // Lint JavaScript file
            errorCount = lint(file.path);
            delete file.path;
        }
        file.errors = errorCount;
        errors[0] += errorCount[0];
        errors[1] += errorCount[1];
        errors[2] += errorCount[2];
    }
    return errors;
})(treeJSON);


// save treeJSON
io.saveFile(outPath + slash + "data" + slash + "json" + slash + "tree.json", JSON.stringify(treeJSON));

print("=============================================");
print("Done!");
