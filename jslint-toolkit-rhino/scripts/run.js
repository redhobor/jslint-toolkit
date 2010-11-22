
var System = Packages.java.lang.System;
var slash = System.getProperty("file.separator");

load(['scripts', 'lib', 'fulljslint.js'].join(slash));
load(['scripts', 'lib', 'json2.js'].join(slash));
load(['scripts', 'source', 'util.js'].join(slash));
load(['scripts', 'source', 'lint.js'].join(slash));
load(['scripts', 'source', 'config.js'].join(slash));
load(['scripts', 'source', 'main.js'].join(slash));