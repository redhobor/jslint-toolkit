
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
};

String.prototype.endsWith = function(ends) {
    return this.toLowerCase().indexOf(ends.toLowerCase()) + ends.length === this.length;
};

Array.prototype.indexOf = function(item, from) {
    var len = this.length;
    for (var i = (from < 0) ? Math.max(0, len + from) : from || 0; i < len; i++) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
};

Array.prototype.contains = function(item, from) {
    return this.indexOf(item, from) !== -1;
};


var File = Packages.java.io.File;

var io = {

    exists: function(path) {
        var file = new File(path);
        return file.exists() && file.canRead();
    },

    readFile: function(path) {
        if (!io.exists(path)) {
            return '';
        }
        return readFile(path);
    },

    saveFile: function(path, content) {
        var writer = new Packages.java.io.PrintWriter(
			new Packages.java.io.BufferedWriter(
				new Packages.java.io.FileWriter(path)));
        writer.write(content);
        writer.flush();
        writer.close();
    },

    copyFile: function(inFilePath, outFilePath) {
        var inFile = new File(inFilePath);
        var outFile = new File(outFilePath);

        var bis = new Packages.java.io.BufferedInputStream(new Packages.java.io.FileInputStream(inFile), 4096);
        var bos = new Packages.java.io.BufferedOutputStream(new Packages.java.io.FileOutputStream(outFile), 4096);
        var theChar;
        while ((theChar = bis.read()) != -1) {
            bos.write(theChar);
        }
        bos.close();
        bis.close();
    },

    resolvePath: function(path) {
        //        if (path.indexOf(':') < 0) {
        //            path = userDir + path;
        //        }
        if (io.exists(path)) {
            return path;
        }
        return '';
    },

    makeDir: function(path) {
        (new File(path)).mkdir();
    },

    includeDir: function(path) {
        if (!path) {
            return;
        }

        for (var lib = IO.ls(SYS.pwd + path), i = 0; i < lib.length; i++) {
            if (/\.js$/i.test(lib[i])) {
                load(lib[i]);
            }
        }
    },

    ls: function(path, excludes) {
        var dir = new File(path);
        if (dir.isFile()) {
            if (excludes.contains(path)) {
                return [];
            }
            else {
                return [path];
            }
        }

        var files = [];
        var innerPaths = dir.list();
        for (var i = 0; i < innerPaths.length; i++) {
            var innerPath = path + slash + innerPaths[i];
            if (!excludes.contains(innerPath)) {
                var innerDir = new File(innerPath);
                if (innerDir.isDirectory()) {
                    files = files.concat(io.ls(innerPath, excludes));
                }
                else {
                    files.push(innerPath);
                }
            }
        }
        return files;
    }

};


