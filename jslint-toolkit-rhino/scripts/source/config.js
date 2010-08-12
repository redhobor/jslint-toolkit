
function config(file) {

    // Read config.json file content, ignore the lines started with //.
    var fileContent = io.readFile(file).replace(/\/\/.*\n/g, "");

    var configObj = JSON.parse(fileContent);

    // outPath is defined in the main.js.
    outPath = configObj.outPath;
    var includes = configObj.includes,
        excludes = configObj.excludes,
        excludeNames = configObj.excludeNames;

    // path is not include in excludeNames and excludes.
    function inExclude(path, fileName) {
        for (var i = 0; i < excludeNames.length; i++) {
            if (new RegExp(excludeNames[i]).test(fileName)) {
                return true;
            }
        }
        if (excludes.contains(path)) {
            return true;
        }
        return false;
    }

    // Generate the whole tree base on input path.
    // For example:
    //    {
    //        "name": "source",
    //        "path": "scripts\\source",
    //        "type": "folder",
    //        "kids": [
    //            {
    //                "name": "config.js",
    //                "path": "scripts\\source\\config.js",
    //                "type": "file"
    //            },
    //            {
    //                "name": "lint.js",
    //                "path": "scripts\\source\\lint.js",
    //                "type": "file"
    //            },
    //            {
    //                "name": "main.js",
    //                "path": "scripts\\source\\main.js",
    //                "type": "file"
    //            },
    //            {
    //                "name": "util.js",
    //                "path": "scripts\\source\\util.js",
    //                "type": "file"
    //            }
    //        ]
    //    }
    function tree(path) {
        var pathObject = new File(path);
        var fileName = pathObject.getName() + "";
        // This path is in the exclude path list.
        if (inExclude(path, fileName)) {
            return null;
        }

        var json = {
            "name": fileName,
            "path": path,
            "type": "file"
        };

        // path is a file or a directory.
        if (pathObject.isDirectory()) {
            json.kids = [];
            json.type = "folder";
            var kidPaths = pathObject.list(), kidPath, kidJson;
            for (var i = 0; i < kidPaths.length; i++) {
                kidPath = path + slash + kidPaths[i];
                kidJson = tree(kidPath);
                if (kidJson) {
                    json.kids.push(kidJson);
                }
            }
        } else {
            if (!/\.js$/.test(fileName)) {
                return null;
            }
        }

        return json;
    }

    // create tree
    var treeJSON = [], i = 0, includePath, includeJson, basePath, lastSlashIndex;
    for (; i < includes.length; i++) {
        includePath = includes[i];

        includeJson = tree(includePath);
        if (includeJson) {
            basePath = includePath;
            lastSlashIndex = basePath.lastIndexOf(slash);
            if (lastSlashIndex >= 0) {
                basePath = basePath.substr(0, lastSlashIndex);
            }

            includeJson.basePath = includeJson.name === basePath ? "" : basePath;
            treeJSON.push(includeJson);
        }
    }


    // Calculate file count
    (function ResolveFileCount(rootArray) {
        var count = 0;
        for (var i = 0; i < rootArray.length; i++) {
            var file = rootArray[i];

            var fileCount = 0;
            if (file.type === "folder") {
                if (file.kids) {
                    file.fileCount = fileCount = ResolveFileCount(file.kids);
                } else {
                    file.fileCount = fileCount = 0;
                }
            }
            else {
                fileCount = 1;
            }
            count += fileCount;
        }
        return count;
    })(treeJSON);


    return treeJSON;
}