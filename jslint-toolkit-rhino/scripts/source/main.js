
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


// treeJSON will be modified in this function call
(function lintTree(rootArray) {
    var errorTotal = [0, 0, 0], i = 0, file, errorCount;
    for (; i < rootArray.length; i++) {
        file = rootArray[i];
        errorCount = [0, 0, 0];
        if (file.type === "folder" && file.kids) {
            errorCount = lintTree(file.kids);
            //delete file.path;
        } else {
            // Lint JavaScript file
            errorCount = lint(file.path, file.name);
            //delete file.path;
        }
        file.errors = errorCount;
        errorTotal[0] += errorCount[0];
        errorTotal[1] += errorCount[1];
        errorTotal[2] += errorCount[2];
    }
    return errorTotal;
})(treeJSON);


// save treeJSON
io.saveFile(outPath + slash + "data" + slash + "json" + slash + "tree.json", JSON.stringify(treeJSON, null, 4));

print("=============================================");
print("All Done!");
