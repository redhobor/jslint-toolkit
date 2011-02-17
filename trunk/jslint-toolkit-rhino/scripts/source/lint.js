
function lint(filePath, fileShortName) {
    var errors = [];
    var errorCount = [0, 0, 0];
    var fileName = filePath.replace(/[:|\\|\/]/g, "_");
    //var fileShortName = fileName.substr(fileName.lastIndexOf("_") + 1);
    fileShortName = (function() {
        if (fileShortName.length < 20) {
            fileShortName += "                    ".substr(fileShortName.length);
        } else {
            fileShortName = fileShortName.substr(0, 15) + "...  ";
        }
        return fileShortName;
    })();

    // Here to config the good parts used to verify the JavaScript files.
    // http://www.jslint.com/lint.html
    var goodParts = {
        maxerr: 200    // Maximum number of errors
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
        //maxlen: 120     // Maximum line length
    };

    var errorsL1 = [/Missing semicolon\./,
        /'.+' is already defined\./,
        /Expected '{' and instead saw '.+'\./,
        /Extra comma\./,
        /Unnecessary semicolon\./,
        /Missing radix parameter\./,
        /'.+' was used before it was defined\./,
		/Stopping, unable to continue\. \(\d+% scanned\)\./,
		/Stopping\.\s*(\d+% scanned)\./,
		/Too many errors\. \(\d+% scanned\)\./];

    var fatalErrors = [/Stopping, unable to continue\. \(\d+% scanned\)\./,
        /Too many errors\. \(\d+% scanned\)\./];

    function inRegexArray(str, regexs) {
        for (var i = 0; i < regexs.length; i++) {
            if (regexs[i].test(str)) {
                return true;
            }
        }
        return false;
    }


    var input = io.readFile(filePath), i, e, reason, finalError, lines;
    // How many lines of this file.
    lines = input.split('\n').length;
    if (lines <= 0) {
        print(">> " + fileShortName + "nothing in this file!");
    }
    if (!JSLINT(input, goodParts)) {
        for (i = 0; i < JSLINT.errors.length; i++) {
            e = JSLINT.errors[i];
            if (e) {
                reason = e.reason;
                var level = 3
                if (inRegexArray(reason, errorsL1)) {
                    level = 1;
                }

                if (level === 1) {
                    errorCount[1]++;
                } else {
                    errorCount[2]++;
                }
                errorCount[0]++;

                errors.push([level,
                    e.line,
                    e.character,
                    e.reason,
                    (e.evidence || '').replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1")
                ]);
            }
        }
        // Identify fatal errors, which has stopped JSLINT to complete scanning the file.
        if (inRegexArray(reason, fatalErrors)) {
            errorCount[3] = reason;
        }


        io.saveFile(outPath + slash + "data" + slash + "errors" + slash + fileName + ".txt", JSON.stringify(errors, null, 4));
        io.copyFile(filePath, outPath + slash + "data" + slash + "source" + slash + fileName + ".txt");
        print(">> " + fileShortName + "fail-> " + errorCount[0] + " " + (errorCount[3] ? errorCount[3] : ""));
    } else {
        print(">> " + fileShortName + "pass");
    }
    return [lines, errorCount];
}