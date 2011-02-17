/* ************************************************************************

Copyright:

License:

Authors:

************************************************************************ */

/* ************************************************************************

#asset(jslint_toolkit/*)
#asset(qx/icon/${qx.icontheme}/16/apps/utilities-color-chooser.png)

************************************************************************ */

/**
* This is the main application class of your custom application "jslinttoolkit"
*/
qx.Class.define("jslint_toolkit.Application",
{
    extend: qx.application.Standalone,



    /*
    *****************************************************************************
    MEMBERS
    *****************************************************************************
    */

    members: {

        _name: "JSLint-Toolkit",
        _version: "1.2",

        _rightPane: null,
        _rightPaneArea: null,
        _leftPane: null,
        _leftPaneTree: null,
        _middlePane: null,
        _middlePaneTable: null,
        _filterButton: null,

        _treeJSON: null,

        /**
        * This method contains the initial application code and gets called 
        * during startup of the application
        */
        main: function () {
            // Call super class
            this.base(arguments);

            // Enable logging in debug variant
            if (qx.core.Variant.isSet("qx.debug", "on")) {
                // support native logging capabilities, e.g. Firebug for Firefox
                qx.log.appender.Native;
                // support additional cross-browser console. Press F7 to toggle visibility
                qx.log.appender.Console;
            }

            /*
            -------------------------------------------------------------------------
            Below is your actual application code...
            -------------------------------------------------------------------------
            */

            var layout = new qx.ui.layout.VBox();
            var container = new qx.ui.container.Composite(layout);
            this.getRoot().add(container, { edge: 0 });

            //container.add(this.__createHeader(), { flex: 0 });
            container.add(this.__createToolbar(), { flex: 0 });
            container.add(this.__createContent(), { flex: 1 });
        },


        __createToolbar: function () {
            var toolbar = new qx.ui.toolbar.ToolBar();

            var part1 = new qx.ui.toolbar.Part();
            toolbar.add(part1);

            var expandButton = new qx.ui.toolbar.Button(this.tr("Expand"), "jslint_toolkit/image/go-down.png");
            expandButton.setToolTip(new qx.ui.tooltip.ToolTip(this.tr("Expand the tree")));
            expandButton.addListener('click', function () {
                var items = this._leftPaneTree.getRoot().getItems(true, true, false);
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.hasChildren() && !item.isOpen()) {
                        item.setOpen(true);
                    }
                }
            }, this);
            part1.add(expandButton);

            var collapseButton = new qx.ui.toolbar.Button(this.tr("Collapse"), "jslint_toolkit/image/go-up.png");
            collapseButton.setToolTip(new qx.ui.tooltip.ToolTip(this.tr("Collapse the tree")));
            collapseButton.addListener('click', function () {
                var items = this._leftPaneTree.getRoot().getItems(true, true, true);
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.hasChildren() && item.isOpen()) {
                        item.setOpen(false);
                    }
                }
                this._leftPaneTree.select(this._leftPaneTree.getRoot());
            }, this);
            part1.add(collapseButton);


            var layoutButton = new qx.ui.toolbar.Button(this.tr("Horizontal"), "jslint_toolkit/image/utilities-dictionary.png");
            layoutButton.setToolTip(new qx.ui.tooltip.ToolTip(this.tr("Change layout between horizontal and vertical")));
            layoutButton.addListener('click', function () {
                var columnModel = this._middlePaneTable.getTableColumnModel();

                if (this._mainSplitPane.getOrientation() === 'horizontal') {
                    this._mainSplitPane.setOrientation('vertical');
                    layoutButton.setLabel('Horizontal');

                    columnModel.setColumnVisible(4, true);
                } else {
                    this._mainSplitPane.setOrientation('horizontal');
                    layoutButton.setLabel('Vertical');

                    columnModel.setColumnVisible(4, false);
                }
            }, this);
            part1.add(layoutButton);



            var part2 = new qx.ui.toolbar.Part();
            toolbar.add(part2);

            var filterButton = new qx.ui.toolbar.CheckBox(this.tr("Only L1 Warnings"), "jslint_toolkit/image/utilities-color-chooser.png");
            filterButton.setToolTip(new qx.ui.tooltip.ToolTip(this.tr("Only L1 Warnings")));
            filterButton.addListener("click", function () {
                this.__updateFilterButton();
            }, this);
            filterButton.setValue(true);
            this._filterButton = filterButton;
            part2.add(filterButton);


            toolbar.addSpacer();


            var part3 = new qx.ui.toolbar.Part();
            toolbar.add(part3);
            // about JSLint-Toolkit
            var aboutAtom = new qx.ui.basic.Atom();
            //            var atomFont = new qx.bom.Font(12);
            //            atomFont.setBold(true);
            //aboutAtom.setFont(atomFont);
            aboutAtom.set({
                paddingLeft: 5,
                paddingRight: 5,
                rich: true,
                label: '<a href="http://code.google.com/p/jslint-toolkit/" target="_blank">' + this._name + ' ' + this._version + '</a>'
            });



            part3.add(aboutAtom);

            return toolbar;
        },


        __createContent: function () {
            var split = new qx.ui.splitpane.Pane("horizontal");

            var leftTree = this.__createContentLeft();
            split.add(leftTree, 0);

            var infosplit = new qx.ui.splitpane.Pane("vertical");
            infosplit.setDecorator(null);
            split.add(infosplit, 1);

            infosplit.add(this.__createContentMiddle(), 1);
            infosplit.add(this.__createContentRight(), 1.5);

            this._mainSplitPane = infosplit;

            return split;
        },



        __createContentLeft: function () {
            var that = this;
            // Create the tree widget
            var tree = new qx.ui.tree.Tree();
            tree.set({
                width: 200,
                openMode: "dblclick",
                hideRoot: false
            });

            // Creat a folder and set it the root folder
            var root = new qx.ui.tree.TreeFolder(this.tr("Loading..."));
            tree.setRoot(root);

            root.setIcon(null);
            root.setOpen(true);


            window.setTimeout(function () {
                //console.time("AJAX load tree");
                var req = new qx.io.remote.Request("data/json/tree.json");
                req.addListener("completed", function (e) {
                    //console.timeEnd("AJAX load tree");
                    //console.time("Parse content to json");
                    var json = qx.util.Json.parse(e.getContent());
                    //console.timeEnd("Parse content to json");
                    //console.time("Create tree");
                    that.__createTree(root, json);
                    that._treeJSON = json;
                    //console.timeEnd("Create tree");
                    //root.setLabel("Resources");
                    //tree.select(root);
                    tree.setHideRoot(true);
                    tree.setRootOpenClose(true);
                });
                req.send();
            }, 200);


            this._leftPane = tree;
            this._leftPaneTree = tree;

            return tree;
        },


        __createTree: function (root, kids) {
            for (var i = 0; i < kids.length; i++) {
                var kid = kids[i], name = kid.name, displayName, path = kid.path, errors = kid.errors;
                /*
                treePath.push(name);
                treeIndexPath.push(i);
                var slash = "\\"
                if (kid.basePath) {
                basePath = kid.basePath;
                if (basePath.indexOf(":\\") === -1) {
                slash = "/";
                }
                }
                var path = treePath.join(slash);
                if (basePath) {
                path = basePath + slash + path;
                }
                */

                var tip = new qx.ui.tooltip.ToolTip(path);
                displayName = this.__getTreeNodeLabel(name, errors, this._filterButton.isValue());

                if (kid["type"] === "folder") {
                    if (kid["fileCount"] === 0) {
                        //treePath.pop();
                        //treeIndexPath.pop();
                        continue;
                    }
                    var folder = new qx.ui.tree.TreeFolder(displayName);
                    // Create a new array, so the treePath changes will not reflect this variable.
                    //folder.setUserData("treePath", [].concat(treePath));
                    //folder.setUserData("treeIndexPath", [].concat(treeIndexPath));
                    folder.setUserData("name", name);
                    folder.setUserData("errors", errors);

                    folder.setToolTip(tip);
                    if (errors[0] === 0) {
                        //folder.setOpacity(0.9);
                        folder.setTextColor("green");
                    }
                    else if (errors[1] === 0) {
                        folder.setTextColor("#FF9900");
                    }
                    else {
                        folder.setTextColor("#FF0000");
                    }
                    root.add(folder);
                    //console.debug(kid["path"]);

                    this.__createTree(folder, kid["kids"]);
                }
                else {
                    var file = new qx.ui.tree.TreeFile(displayName);
                    // Create a new array, so the treePath changes will not reflect this variable.
                    //file.setUserData("treePath", [].concat(treePath));
                    //file.setUserData("treeIndexPath", [].concat(treeIndexPath));
                    file.setUserData("name", name);
                    file.setUserData("errors", errors);

                    file.setToolTip(tip);
                    if (errors[0] === 0) {
                        //file.setOpacity(0.5);
                        file.setTextColor("green");
                    }
                    else {
                        if (errors[1] === 0) {
                            file.setTextColor("#FF9900");
                        }
                        else {
                            file.setTextColor("#FF0000");
                        }
                        file.setCursor("pointer");

                        // Show JSLint error table
                        (function (that, path, file) {
                            file.addListener("click", function (e) {
                                //alert(file.getUserData("treeIndexPath"));
                                this._middlePaneTable.setUserData("jsFilePath", path);
                                this.__loadMiddleTable();
                            }, that);
                        })(this, path, file);
                    }

                    root.add(file);
                }
                //treePath.pop();
                //treeIndexPath.pop();
            }
        },

        __loadMiddleTable: function () {
            var path = this._middlePaneTable.getUserData("jsFilePath");
            if (!path) {
                return;
            }
            var fileName = this.__getResolveFileName(path);
            //console.log(fileName);
            var filePath = "data/errors/" + fileName + ".json";
            //console.log(filePath);
            var req = new qx.io.remote.Request(filePath);
            req.addListener("completed", function (e) {
                var json = qx.util.Json.parse(e.getContent());

                if (this._filterButton.isValue()) {
                    var json2 = [];
                    for (var i = 0; i < json.length; i++) {
                        if (json[i][0] !== 3) {
                            json2.push(json[i]);
                        }
                    }
                    json = json2;
                }

                var tableModel = this._middlePaneTable.getTableModel();
                var tableSelectionModel = this._middlePaneTable.getSelectionModel();
                tableModel.setData(json);

                // First clear all selected items, then select the first item.
                tableSelectionModel.resetSelection();
                if (tableModel.getRowCount()) {
                    tableSelectionModel.addSelectionInterval(0, 0);
                }
            }, this);
            req.send();
        },

        __createContentMiddle: function () {
            var model = new qx.ui.table.model.Simple();
            model.setColumns(["level", "line", "character", "reason", "evidence"]);
            //            model.setData([
            //                ["1", "Zhangsan", "man", 17],
            //                ["2", "Lisi", "man", 23],
            //                ["3", "Wanger", "man", 25],
            //                ["4", "Mazi", "man", 20],
            //                ["5", "Chunhua", "woman", 18]
            //            ]);

            var custom = {
                tableColumnModel: function (obj) {
                    return new qx.ui.table.columnmodel.Resize(obj);
                }
            };


            var table = new qx.ui.table.Table(model, custom);

            var columnModel = table.getTableColumnModel();
            // Obtain the behavior object to manipulate
            var resizeBehavior = columnModel.getBehavior();
            // This uses the set() method to set all attriutes at once; uses flex
            resizeBehavior.set(0, { width: 50 });
            resizeBehavior.set(1, { width: 50 });
            resizeBehavior.set(2, { width: 50 });
            resizeBehavior.set(3, { width: "1*" });
            resizeBehavior.set(4, { width: "2*" });

            var newRenderer = new qx.ui.table.cellrenderer.Conditional("", "", "", "");
            newRenderer.addNumericCondition("==", 1, null, "#FF0000", null, null, "level");
            newRenderer.addNumericCondition("==", 3, null, "#FF9900", null, null, "level");
            columnModel.setDataCellRenderer(0, newRenderer);
            columnModel.setDataCellRenderer(1, newRenderer);
            columnModel.setDataCellRenderer(2, newRenderer);
            columnModel.setDataCellRenderer(3, newRenderer);
            columnModel.setDataCellRenderer(4, newRenderer);

            var tableSelectionModel = table.getSelectionModel();
            tableSelectionModel.setSelectionMode(qx.ui.table.selection.Model.SINGLE_SELECTION);
            tableSelectionModel.addListener("changeSelection", function () {
                var that = this;
                if (!tableSelectionModel.isSelectionEmpty()) {
                    var selectRowIndex = table.getSelectionModel().getSelectedRanges()[0].minIndex;
                    var selectIndex = parseInt(table.getTableModel().getValue(1, selectRowIndex), 10);
                    this.__showRightPane(selectIndex);
                }
            }, this);

            columnModel.setColumnVisible(0, false);
            columnModel.setColumnVisible(2, false);
            table.setStatusBarVisible(true);


            this._middlePane = table;
            this._middlePaneTable = table;
            return table;

        },

        __createContentRight: function () {
            var content = new qx.ui.embed.Iframe(qx.util.ResourceManager.getInstance().toUri("jslint_toolkit/source.htm"));

            this._rightPane = content;
            this._rightPaneArea = content;
            return content;
        },


        __updateFilterButton: function () {
            var treeRoot = this._leftPaneTree.getRoot();
            this.__updateTree(treeRoot, this._filterButton.isValue());
            this.__loadMiddleTable();
        },

        __updateTree: function (root, onlyL1) {
            var kids = root.getChildren();
            for (var i = 0; i < kids.length; i++) {
                var kidNode = kids[i];
                var name = kidNode.getUserData("name");
                var errors = kidNode.getUserData("errors");
                if (errors[0] === 0) {
                    continue;
                }
                kidNode.setLabel(this.__getTreeNodeLabel(name, errors, onlyL1));

                if (kidNode.classname === "qx.ui.tree.TreeFolder") {
                    this.__updateTree(kidNode, onlyL1);
                }
            }
        },

        __getTreeNodeLabel: function (name, errors, onlyL1) {
            var rt = name;
            if (errors[0] !== 0) {
                if (onlyL1) {
                    if (errors[1]) {
                        rt += " (" + errors[1] + ")";
                    }
                } else {
                    rt += " (" + errors[0] + ")";
                }
            }
            return rt;
        },

        /*
        __getJSONFromTreeIndexPath: function (treeIndexPath) {
        var evalStr = "this._treeJSON[" + treeIndexPath.join("].kids[") + "]";
        return eval(evalStr);
        },
        */

        __showRightPane: function (lineNumber) {
            var that = this;
            if (this._rightPane.isExcluded()) {
                this._rightPane.show();
                this._middlePaneTable.getTableColumnModel().setColumnVisible(3, false);
            }

            that.__loadRightPaneArea(lineNumber);

        },

        __loadRightPaneArea: function (lineNumber) {
            var that = this;
            var path = this._middlePaneTable.getUserData("jsFilePath");
            if (path != this._rightPaneArea.getUserData("jsFilePath")) {
                var wnd = this._rightPaneArea.getWindow();
                if (wnd) {
                    this._rightPaneArea.setUserData("jsFilePath", path);
                    var fileName = this.__getResolveFileName(path);
                    var filePath = "../../data/source/" + fileName;
                    wnd.loadJS(filePath, function () {
                        that.__highlightSourceLine(lineNumber);
                    });
                }
            }
            else {
                if (lineNumber) {
                    this.__highlightSourceLine(lineNumber);
                }
            }
        },

        __highlightSourceLine: function (lineNumber) {
            var wnd = this._rightPaneArea.getWindow();
            if (wnd) {
                wnd.highlight(lineNumber);
            }
        },

        __hideRightPane: function () {
            //            if (this._sourceCodeButton.isChecked()) {
            //                this._sourceCodeButton.setChecked(false);
            //            }
            if (!this._rightPane.isExcluded()) {
                this._rightPane.exclude();
                this._middlePaneTable.getTableColumnModel().setColumnVisible(3, true);
            }
        },


        __getResolveFileName: function (path) {
            return path.replace(/[:|\\|\/]/g, "_");
        }

        /*
        __alert: function (msg) {
        var win = new qx.ui.window.Window(this.tr("Alert"), "jslinttoolkit/image/infoIcon.png");

        win.set({
        padding: 3,
        modal: true,
        showMaximize: false,
        showMinimize: false,
        resizable: false,
        contentPadding: [5, 10],
        width: 300
        });


        win.setLayout(new qx.ui.layout.Canvas());

        var label = new qx.ui.basic.Label();
        label.set({
        content: msg.toString(),
        rich: true
        });
        win.add(label, { left: 30, top: 30, bottom: 30 });

        win.center();
        win.open();
        }
        */




    }
});
