
function lint(filePath, fileShortName) {
    var errors = [];
    var errorCount = [0, 0, 0];
    var fileName = filePath.replace(/[:|\\|\/]/g, "_");
    //var fileShortName = fileName.substr(fileName.lastIndexOf("_") + 1);
    fileShortName = (function() {
        if (fileShortName.length < 25) {
            fileShortName += "                         ".substr(fileShortName.length);
        } else {
            fileShortName = fileShortName.substr(0, 20) + "...  ";
        }
        return fileShortName;
    })();

    // Here to config the good parts used to verify the JavaScript files.
    // http://www.jslint.com/lint.html
    var goodParts = {
        //rhino: true,
        //undef: true,    // true if variables must be declared before used.
        //bitwise: true,
        //eqeqeq: true,
        //immed: true,
        //newcap: true,
        //nomen: true,
        //onevar: true,
        //plusplus: true,
        //regexp: true,
        //white: true,
        //indent: 4,     // Strict white space indentation
        maxerr: 100    // Maximum number of errors
        //maxlen: 120     // Maximum line length
        //        bitwise: true,
        //        eqeqeq: true,
        //        immed: true,
        //        newcap: true,
        //        nomen: true,
        //        onevar: true,
        //        plusplus: true,
        //        regexp: true,
        //        undef: true,
        //        white: true

    };

    var errorsL1 = [/Missing semicolon\./,
        /'.+' is already defined\./,
        /Expected '{' and instead saw '.+'\./,
        /Extra comma\./,
        /Unnecessary semicolon\./,
        /Missing radix parameter\./,
        /'.+' was used before it was defined\./];


    var input = io.readFile(filePath), i, e;
    if (!input) {
        print(">> " + fileShortName + "no such file!");
    }
    if (!JSLINT(input, goodParts)) {
        for (i = 0; i < JSLINT.errors.length; i += 1) {
            e = JSLINT.errors[i];
            if (e) {
                var reason = e.reason;
                var level = (function() {
                    var level = 3;
                    for (var i = 0; i < errorsL1.length; i++) {
                        if (errorsL1[i].test(reason)) {
                            level = 1;
                            break;
                        }
                    }
                    return level;
                })();

                errors.push([level,
                    e.line,
                    e.character,
                    e.reason,
                    (e.evidence || '').replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1")
                ]);

                if (level === 1) {
                    errorCount[1]++;
                } else {
                    errorCount[2]++;
                }
                errorCount[0]++;
            }
        }
        io.saveFile(outPath + slash + "data" + slash + "errors" + slash + fileName + ".json", JSON.stringify(errors, null, 4));
        io.copyFile(filePath, outPath + slash + "data" + slash + "source" + slash + fileName);
        print(">> " + fileShortName + "fail -> " + errorCount.join("  "));
    } else {
        print(">> " + fileShortName + "pass");
    }
    return errorCount;
}