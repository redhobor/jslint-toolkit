
function lint(filePath) {
    var errors = [];
    var errorCount = [0, 0, 0];
    var fileName = filePath.replace(/[:|\\|\/]/g, "_");
    var fileShortName = fileName.substr(fileName.lastIndexOf("_") + 1);
    fileShortName = (function() {
        if (fileShortName.length < 25) {
            fileShortName += "                         ".substr(fileShortName.length);
        }
        return fileShortName;
    })();

    var goodParts = {
        rhino: true,
        passfail: false,
        bitwise: true,
        eqeqeq: true,
        immed: true,
        newcap: true,
        nomen: true,
        onevar: true,
        plusplus: true,
        regexp: true,
        undef: true,
        white: true,
        indent: 4
    };

    var defaultParts = {
        rhino: true,
        passfail: false,
        evil: true,
        forin: true
    };

    var errorsL1 = [/Missing semicolon\./,
        /'.+' is already defined\./,
        /Expected '{' and instead saw '.+'\./,
        /Extra comma\./,
        /Bad for in variable '.+'\./,
        /Unnecessary semicolon\./,
        /Bad line breaking before '.+'\./,
        /Missing radix parameter\./,
        /'.+' was used before it was defined\./];


    var input = io.readFile(filePath);
    if (!input) {
        print(">>> " + fileShortName + "no such file!");
    }
    if (!JSLINT(input, defaultParts)) {

        for (var i = 0; i < JSLINT.errors.length; i += 1) {
            var e = JSLINT.errors[i];
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
                    e.line + 1,
                    e.character + 1,
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
        io.saveFile(outPath + slash + "data" + slash + "errors" + slash + fileName + ".json", JSON.stringify(errors));
        io.copyFile(filePath, outPath + slash + "data" + slash + "source" + slash + fileName);
        print(">>> " + fileShortName + "errors: " + errorCount.join("  "));
    } else {
        print(">>> " + fileShortName + "ok");
    }
    return errorCount;
}