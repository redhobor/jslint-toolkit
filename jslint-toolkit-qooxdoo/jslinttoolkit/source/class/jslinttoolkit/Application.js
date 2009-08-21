/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/* ************************************************************************

#asset(jslinttoolkit/*)

************************************************************************ */

/**
 * This is the main application class of your custom application "jslinttoolkit"
 */
qx.Class.define("jslinttoolkit.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

    members: {

        _name: "JSLint-Toolkit",
        _version: "1.0",

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
        main: function() {
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

            container.add(this.__createHeader(), { flex: 0 });
            container.add(this.__createToolbar(), { flex: 0 });
            container.add(this.__createContent(), { flex: 1 });
        },

        __createContentLeft: function() {
            var that = this;
            // Create the tree widget
            var tree = new qx.ui.tree.Tree();
            tree.set({
                width: 180,
                openMode: "dblclick",
                hideRoot: false
            });

            // Creat a folder and set it the root folder
            var root = new qx.ui.tree.TreeFolder(this.tr("Loading..."));
            tree.setRoot(root);

            root.setIcon(null);
            root.setOpen(true);
            //            root.addListener("dblclick", function(e) {
            //                //e.preventDefault();
            //                e.stopPropagation();
            //            });


            //            // Create some folders:
            //            var te1_1 = new qx.ui.tree.TreeFolder("Files");
            //            var te1_2 = new qx.ui.tree.TreeFolder("Workspace");
            //            var te1_3 = new qx.ui.tree.TreeFolder("Network");
            //            var te1_4 = new qx.ui.tree.TreeFolder("Trash");

            //            // Create some content (leaves) and add it to the "Files" folder:
            //            var te1_2_1 = new qx.ui.tree.TreeFile("Windows (C:)");
            //            var te1_2_2 = new qx.ui.tree.TreeFile("Documents (D:)");
            //            te1_2.add(te1_2_1, te1_2_2);

            //            // Add the content to the root folder
            //            root.add(te1_1, te1_2, te1_3, te1_4);
            //            root.setOpen(true);

            // create the controller
            //var controller = new qx.data.controller.Tree(null, tree, "kids", "name");

            window.setTimeout(function() {
                //console.time("AJAX load tree");
                var req = new qx.io.remote.Request("data/json/tree.json");
                req.addListener("completed", function(e) {
                    //console.timeEnd("AJAX load tree");
                    //console.time("Parse content to json");
                    var json = qx.util.Json.parse(e.getContent());
                    //console.timeEnd("Parse content to json");
                    //console.time("Create tree");
                    that.__createTree(root, json, [], [], "");
                    that._treeJSON = json;
                    //console.timeEnd("Create tree");
                    //root.setLabel("Resources");
                    //tree.select(root);
                    tree.setHideRoot(true);
                    tree.setRootOpenClose(true);
                });
                req.send();
            }, 200);

            //            // create the data store
            //            var url = "json/tree.json";
            //            var store = new qx.data.store.Json(url);

            //            // connect the store and the controller
            //            store.bind("model", controller, "model");

            //            // show the data in the list when loaded
            //            store.addListener("loaded", function(ev) {
            //                tree.getRoot().setOpen(true);
            //                tree.select(tree.getRoot());
            //            }, this);




            this._leftPane = tree;
            this._leftPaneTree = tree;

            return tree;
        },

        __createTree: function(root, kids, treePath, treeIndexPath, basePath) {
            //            var boldFont = new qx.bom.Font("12px", "Consolas");
            //            boldFont.setBold(true);
            for (var i = 0; i < kids.length; i++) {
                var kid = kids[i];
                var name = kid.name;
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
				if(basePath) {
					path = basePath + slash + path;
				}

                var tip = new qx.ui.tooltip.ToolTip(path);
                if (kid["errors"][0] !== 0) {
                    name += " (" + kid["errors"][0] + ")";
                }

                if (kid["type"] === "folder") {
                    if (kid["fileCount"] === 0) {
                        treePath.pop();
                        treeIndexPath.pop();
                        continue;
                    }
                    var folder = new qx.ui.tree.TreeFolder(name);
                    folder.setUserData("treePath", [].concat(treePath));
                    folder.setUserData("treeIndexPath", [].concat(treeIndexPath));

                    folder.setToolTip(tip);
                    if (kid["errors"][0] === 0) {
                        //folder.setOpacity(0.9);
                        folder.setTextColor("green");
                    }
                    else if (kid["errors"][1] === 0) {
                        folder.setTextColor("#FF9900");
                    }
                    else {
                        folder.setTextColor("#FF0000");
                    }
                    root.add(folder);
                    //console.debug(kid["path"]);

                    this.__createTree(folder, kid["kids"], treePath, treeIndexPath, basePath);
                }
                else {
                    var file = new qx.ui.tree.TreeFile(name);
                    file.setUserData("treePath", [].concat(treePath));
                    file.setUserData("treeIndexPath", [].concat(treeIndexPath));

                    file.setToolTip(tip);
                    if (kid["errors"][0] === 0) {
                        //file.setOpacity(0.5);
                        file.setTextColor("green");
                    }
                    else {
                        if (kid["errors"][1] === 0) {
                            file.setTextColor("#FF9900");
                        }
                        else {
                            file.setTextColor("#FF0000");
                        }
                        file.setCursor("pointer");

                        // Show JSLint error table
                        (function(that, path, file) {
                            file.addListener("click", function(e) {
                                //alert(file.getUserData("treeIndexPath"));
                                this._middlePaneTable.setUserData("jsFilePath", path);
                                this.__loadMiddleTable();
                            }, that);
                        })(this, path, file);
                    }

                    root.add(file);
                    //console.debug(kid["path"]);
                }
                treePath.pop();
                treeIndexPath.pop();
            }
        },

        __loadMiddleTable: function() {
            var path = this._middlePaneTable.getUserData("jsFilePath");
            if (!path) {
                return;
            }
            var fileName = this.__getResolveFileName(path);
            //console.log(fileName);
            var filePath = "data/errors/" + fileName + ".json";
            //console.log(filePath);
            var req = new qx.io.remote.Request(filePath);
            req.addListener("completed", function(e) {
                var json = qx.util.Json.parse(e.getContent());

                if (this._filterButton.isChecked()) {
                    var json2 = [];
                    for (var i = 0; i < json.length; i++) {
                        if (json[i][0] !== 3) {
                            json2.push(json[i]);
                        }
                    }
                    json = json2;
                }

                var tableModel = this._middlePaneTable.getTableModel();
                tableModel.setData(json);

                // Select the first line
                this._middlePaneTable.getSelectionModel().addSelectionInterval(0, 0);
            }, this);
            req.send();
        },

        __createContentMiddle: function() {
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
                tableColumnModel: function(obj) {
                    return new qx.ui.table.columnmodel.Resize(obj);
                }
            };


            var table = new qx.ui.table.Table(model, custom);

            var tcm = table.getTableColumnModel();
            // Obtain the behavior object to manipulate
            var resizeBehavior = tcm.getBehavior();
            // This uses the set() method to set all attriutes at once; uses flex
            resizeBehavior.set(0, { width: 50 });
            resizeBehavior.set(1, { width: 50 });
            resizeBehavior.set(2, { width: 50 });
            resizeBehavior.set(3, { width: "1*" });
            resizeBehavior.set(4, { width: "1*" });

            var newRenderer = new qx.ui.table.cellrenderer.Conditional("", "", "", "");
            newRenderer.addNumericCondition("==", 1, null, "#FF0000", null, null, "level");
            newRenderer.addNumericCondition("==", 3, null, "#FF9900", null, null, "level");
            table.getTableColumnModel().setDataCellRenderer(0, newRenderer);
            table.getTableColumnModel().setDataCellRenderer(1, newRenderer);
            table.getTableColumnModel().setDataCellRenderer(2, newRenderer);
            table.getTableColumnModel().setDataCellRenderer(3, newRenderer);
            table.getTableColumnModel().setDataCellRenderer(4, newRenderer);


            table.getSelectionModel().addListener("changeSelection", function() {
                var that = this;
                var selectRowIndex = table.getSelectionModel().getSelectedRanges()[0].minIndex;
                var selectIndex = parseInt(table.getTableModel().getValue(1, selectRowIndex), 10);
                //                window.setTimeout(function() {
                //                    that.__highlightSourceLine(selectIndex);
                //                }, 100);
                //console.log(table.getSelectionModel().getSelectedRanges()[0].minIndex);
                this.__showRightPane(selectIndex);
            }, this);

            table.getTableColumnModel().setColumnVisible(0, false);
            table.getTableColumnModel().setColumnVisible(2, false);
            table.getTableColumnModel().setColumnVisible(4, false);
            table.setStatusBarVisible(false);

            //            table.set({
            //                width: 600,
            //                height: 400
            //            });

            //table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);

            //            var tcm = table.getTableColumnModel();

            //            // Display a checkbox in column 3
            //            tcm.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Boolean());

            //            // use a different header renderer
            //            tcm.setHeaderCellRenderer(2, new qx.ui.table.headerrenderer.Icon("icon/16/apps/office-calendar.png", "A date"));

            //table.exclude();

            this._middlePane = table;
            this._middlePaneTable = table;
            return table;

        },

        __createContentRight: function() {
            var content = new qx.ui.embed.Iframe("resource/jslinttoolkit/source.htm");

            //content.setValue("This is the content. \r\nAnother line.");
            //content.exclude();
            this._rightPane = content;
            this._rightPaneArea = content;
            return content;
        },

        __createContent: function() {
            var split = new qx.ui.splitpane.Pane("horizontal");


            var leftTree = this.__createContentLeft();
            split.add(leftTree, 0);


            var infosplit = new qx.ui.splitpane.Pane("horizontal");
            infosplit.setDecorator(null);
            split.add(infosplit, 1);

            infosplit.add(this.__createContentMiddle(), 1);
            infosplit.add(this.__createContentRight(), 1.5);

            return split;
        },

        __createHeader: function() {
            var layout = new qx.ui.layout.HBox();
            var container = new qx.ui.container.Composite(layout);
            container.setAppearance("app-header");

            var title = new qx.ui.basic.Label(this._name + ' - v' + this._version);
            var version = new qx.ui.basic.Label();

            container.add(title);
            container.add(new qx.ui.core.Spacer(), { flex: 1 });
            container.add(version);

            return container;
        },

        __createToolbar: function() {

            var toolbar = new qx.ui.toolbar.ToolBar();

            var part1 = new qx.ui.toolbar.Part();
            toolbar.add(part1);

            // Expand or collapse the tree
            var expandButton = new qx.ui.toolbar.Button(this.tr("Expand"), "jslinttoolkit/image/go-down.png");
            expandButton.setToolTip(new qx.ui.tooltip.ToolTip(this.tr("Expand the tree")));
            expandButton.addListener('click', function() {
                var items = this._leftPaneTree.getRoot().getItems(true, true, false);
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.hasChildren() && !item.isOpen()) {
                        item.setOpen(true);
                    }
                }
            }, this);
            part1.add(expandButton);

            var collapseButton = new qx.ui.toolbar.Button(this.tr("Collapse"), "jslinttoolkit/image/go-up.png");
            collapseButton.setToolTip(new qx.ui.tooltip.ToolTip(this.tr("Collapse the tree")));
            collapseButton.addListener('click', function() {
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


            //            // Show or exclude source code pane
            //            var filterButton = new qx.ui.toolbar.RadioButton(this.tr("Level Filter"), "jslinttoolkit/image/utilities-log-viewer.png");
            //            filterButton.setToolTip(new qx.ui.tooltip.ToolTip(this.tr("Message Level Filter")));
            //            filterButton.addListener("click", function() {

            //            }, this);
            //            this._filterButton = filterButton;
            //            part1.add(filterButton);


            //  
            //            var themeMenu = new qx.ui.menu.Menu();

            //            var t1 = new qx.ui.menu.RadioButton("Modern Theme");
            //            var t2 = new qx.ui.menu.RadioButton("Classic Theme");

            //            t1.setValue("qx.theme.Modern");
            //            t1.setChecked(true);
            //            t2.setValue("qx.theme.Classic");

            //            var group = new qx.ui.form.RadioGroup(t1, t2);
            //            //group.addListener("changeValue", this.__onChangeTheme, this);

            //            themeMenu.add(t1);
            //            themeMenu.add(t2);

            //            var themeButton = new qx.ui.toolbar.MenuButton(this.tr("Theme"), "jslinttoolkit/image/utilities-log-viewer.png", themeMenu);
            //            var themeTooltip = new qx.ui.tooltip.ToolTip("Choose theme");
            //            themeButton.setToolTip(themeTooltip);
            //            part1.add(themeButton);
            // Show or exclude source code pane

            var part2 = new qx.ui.toolbar.Part();
            toolbar.add(part2);

            var filterButton = new qx.ui.toolbar.CheckBox(this.tr("Only Critical Errors"), "jslinttoolkit/image/document-folder.png");
            filterButton.setToolTip(new qx.ui.tooltip.ToolTip(this.tr("Only Critical Errors")));
            filterButton.addListener("click", function() {
                if (filterButton.isChecked()) {
                    //alert("ok");
                    this.__hideL3(true);
                }
                else {
                    this.__hideL3(false);
                }
            }, this);
            filterButton.setChecked(false);
            this._filterButton = filterButton;
            part2.add(filterButton);


            toolbar.addSpacer();


            var part3 = new qx.ui.toolbar.Part();
            toolbar.add(part3);
            // about JSLint-Toolkit
            var aboutButton = new qx.ui.toolbar.Button(this.tr("About"), "jslinttoolkit/image/help-about.png");
            aboutButton.setToolTip(new qx.ui.tooltip.ToolTip(this.tr("About JSLint-Toolkit")));
            aboutButton.addListener("click", function() {
                this.__alert(this._name + ' - v' + this._version);
            }, this);
            part3.add(aboutButton);

            return toolbar;
        },


        __hideL3: function(hidden) {
            var treeRoot = this._leftPaneTree.getRoot();
            this.__modifyTree(treeRoot, hidden);

            this.__loadMiddleTable();
        },

        __modifyTree: function(root, hideL3) {
            var kids = root.getChildren();
            for (var i = 0; i < kids.length; i++) {
                var kidNode = kids[i];
                var treeIndexPath = kidNode.getUserData("treeIndexPath");
                var kid = this.__getJSONFromTreeIndexPath(treeIndexPath);
                var name = kid.name;
                if (kid["errors"][0] === 0) {
                    continue;
                }

                if (hideL3) {
                    if (kid["errors"][1] === 0) {
                        kidNode.setLabel(name);
                    } else {
                        kidNode.setLabel(name + " (" + kid["errors"][1] + ")");
                    }
                } else {
                    kidNode.setLabel(name + " (" + kid["errors"][0] + ")");
                }

                if (kid["type"] === "folder") {
                    //                    if (hideL3) {
                    //                        if (kid["errors"][1] === 0) {
                    //                            kidNode.setTextColor("green");
                    //                        }
                    //                    } else {
                    //                        if (kid["errors"][1] === 0) {
                    //                            kidNode.setTextColor("#FF9900");
                    //                        }
                    //                    }

                    this.__modifyTree(kidNode, hideL3);
                }
                else {
                    //                    if (hideL3) {
                    //                        if (kid["errors"][1] === 0) {
                    //                            kidNode.setTextColor("green");
                    //                        }
                    //                    } else {
                    //                        if (kid["errors"][1] === 0) {
                    //                            kidNode.setTextColor("#FF9900");
                    //                        }
                    //                    }
                    // file.setCursor("pointer");

                }
            }
        },

        __getJSONFromTreeIndexPath: function(treeIndexPath) {
            var evalStr = "this._treeJSON[" + treeIndexPath.join("].kids[") + "]";
            return eval(evalStr);
        },

        __showRightPane: function(lineNumber) {

            var that = this;
            //            if (!this._sourceCodeButton.isChecked()) {
            //                this._sourceCodeButton.setChecked(true);
            //            }
            if (this._rightPane.isExcluded()) {
                this._rightPane.show();
                this._middlePaneTable.getTableColumnModel().setColumnVisible(3, false);
            }

            that.__loadRightPaneArea(lineNumber);

        },

        __loadRightPaneArea: function(lineNumber) {
            var that = this;
            var path = this._middlePaneTable.getUserData("jsFilePath");
            if (path != this._rightPaneArea.getUserData("jsFilePath")) {
                var wnd = this._rightPaneArea.getWindow();
                if (wnd) {
                    this._rightPaneArea.setUserData("jsFilePath", path);
                    var fileName = this.__getResolveFileName(path);
                    var filePath = "../../data/source/" + fileName;
                    wnd.loadJS(filePath, function() {
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

        __highlightSourceLine: function(lineNumber) {
            var wnd = this._rightPaneArea.getWindow();
            if (wnd) {
                wnd.highlight(lineNumber);
            }
        },

        __hideRightPane: function() {
            //            if (this._sourceCodeButton.isChecked()) {
            //                this._sourceCodeButton.setChecked(false);
            //            }
            if (!this._rightPane.isExcluded()) {
                this._rightPane.exclude();
                this._middlePaneTable.getTableColumnModel().setColumnVisible(3, true);
            }
        },


        __getResolveFileName: function(path) {
            return path.replace(/[:|\\|\/]/g, "_");
        },


        __alert: function(msg) {
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




    }
});
