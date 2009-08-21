
function config(file) {

	var fileContent = io.readFile(file).replace(/\/\/.*\n/g, "");
	
	var configObj = JSON.parse(fileContent);
	
	outPath = configObj.outPath;
	var includes = configObj.includes;
	var excludes = configObj.excludes;
	var excludeNames = configObj.excludeNames;
//    var includes = [];
//    var excludes = [];
//    var excludeNames = [];
//    var includeStart = false;
//    var excludeStart = false;
//    var excludeNameStart = false;
//    var i = 0;
//    var configLines = readFile(file).split(newLine);
//	print(configLines.length);
//
//    for (i = 0; i < configLines.length; i++) {
//        var line = configLines[i].trim();
//        if (line) {
//            if (line === '[include]') {
//                includeStart = true;
//                excludeStart = false;
//                excludeNameStart = false;
//            }
//            else if (line === '[exclude]') {
//                includeStart = false;
//                excludeStart = true;
//                excludeNameStart = false;
//            }
//            else if (line === '[excludeName]') {
//                includeStart = false;
//                excludeStart = false;
//                excludeNameStart = true;
//            }
//            else {
//                var path = "";
//                if (includeStart) {
//                    path = io.resolvePath(line);
//                    includes.push(path);
//                    //print("includes-" + path);
//                }
//                else if (excludeStart) {
//                    path = io.resolvePath(line);
//                    excludes.push(path);
//                    //print("excludes-" + path);
//                }
//                else if (excludeNameStart) {
//                    excludeNames.push(line);
//                    //print("excludeNames-" + line);
//                }
//            }
//        }
//    }

    function notInExclude(includePath) {
        for (var i = 0; i < excludeNames.length; i++) {
            if (includePath.endsWith(excludeNames[i])) {
                return false;
            }
        }
        if (excludes.contains(includePath)) {
            return false;
        }
        return true;
    }


    function tree(path, excludes, excludeNames) {
        var pathFile = new File(path);
        var pathFileName = pathFile.getName() + "";
        var json = {
            "name": pathFileName,
            "path": path,
            "type": "file"
        };

        if (pathFile.isDirectory()) {
            json.kids = [];
            json.type = "folder";
            var kidPaths = pathFile.list();
            for (var i = 0; i < kidPaths.length; i++) {
                var kidPath = path + slash + kidPaths[i];
                if (notInExclude(kidPath)) {
                    var kidObj = tree(kidPath, excludes, excludeNames);
                    if (kidObj) {
                        json.kids.push(kidObj);
                    }
                }
            }
        }
        else {
            if (!/\.js$/.test(pathFileName)) {
                return null;
            }
        }

        return json;
    }

    // create tree
    var treeJSON = [];
    for (i = 0; i < includes.length; i++) {
        var include = includes[i];
        if (notInExclude(include)) {
            var nodeObj = tree(includes[i], excludes, excludeNames);
            var basePath = include;
            var lastSlashIndex = basePath.lastIndexOf(slash);
            if (lastSlashIndex >= 0) {
                basePath = basePath.substr(0, lastSlashIndex);
            }
            nodeObj["basePath"] = basePath;
            if (nodeObj) {
                treeJSON.push(nodeObj);
            }
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