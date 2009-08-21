if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application": "jstyle.Application", "qx.theme": "jstyle.theme.Theme", "qx.version": "0.8.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!window.qxlibraries) qxlibraries = {};
var libinfo = {"qx": {"resourceUri": "resource", "version": "trunk"}, "jstyle": {"resourceUri": "resource", "version": "trunk"}};
for (var k in libinfo) qxlibraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Modern/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", -5, 0], "qx/decoration/Modern/window/captionbar-inactive-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -12], "qx/icon/Tango/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -204], "qx/decoration/Modern/tabview-pane-tb-combined.png": [30, 180, "png", "qx"], "qx/decoration/Modern/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -210, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -88], "qx/icon/Tango/22/mimetypes/office-document.png": [22, 22, "png", "qx"], "qx/decoration/Modern/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", -15, 0], "qx/decoration/Modern/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -60], "qx/decoration/Modern/window/minimize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -27, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png": [76, 15, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", 0, 0], "qx/decoration/Modern/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -51, 0], "qx/decoration/Modern/form/button-preselected-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -52, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/window/close-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", -6, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-l.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-right-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tree-combined.png": [32, 8, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-pressed-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -60, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/window/statusbar-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -20], "qx/decoration/Modern/toolbar/Thumbs.db": "qx", "qx/decoration/Modern/form/button-checked-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -36], "qx/decoration/Modern/groupbox-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/tree/closed-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", 0, 0], "jstyle/syntax/styles/shThemeEmacs.css": "jstyle", "qx/decoration/Modern/toolbar/toolbar-gradient.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", -20, 0], "qx/decoration/Modern/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-tr.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -60], "qx/decoration/Modern/window/captionbar-active-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -30], "qx/decoration/Modern/pane-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Modern/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -48, 0], "qx/decoration/Modern/arrows/right.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -61, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -5], "qx/decoration/Modern/pane/Thumbs.db": "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -15], "qx/decoration/Modern/pane/pane-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -18], "qx/decoration/Modern/form/button-hovered-c.png": [20, 52, "png", "qx"], "jstyle/source.htm": "jstyle", "qx/decoration/Modern/window/captionbar-inactive-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, 0], "jstyle/image/Thumbs.db": "jstyle", "qx/decoration/Modern/form/input.png": [84, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -320, 0], "qx/decoration/Modern/window/statusbar-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -84], "qx/decoration/Modern/form/button-disabled-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -48], "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/minimize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -45, 0], "jstyle/syntax/styles/Thumbs.db": "jstyle", "qx/icon/Tango/32/mimetypes/office-document.png": [32, 32, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-l.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-lr-active-combined.png": [12, 9, "png", "qx"], "qx/decoration/Modern/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -75], "jstyle/syntax/styles/magnifier.png": [16, 16, "png", "jstyle"], "qx/decoration/Modern/form/button-preselected-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -124], "qx/decoration/Modern/menu-checkradio-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/Thumbs.db": "qx", "qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png": [15, 76, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -105, 0], "qx/decoration/Modern/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -38, 0], "qx/decoration/Modern/form/button-checked-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -24], "qx/decoration/Modern/form/button-preselected-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -132], "qx/decoration/Modern/form/button-disabled-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -64], "qx/decoration/Modern/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-l.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", 0, 0], "jstyle/image/utilities-terminal.png": [22, 22, "png", "jstyle"], "qx/decoration/Modern/tabview/tab-button-left-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -4, 0], "qx/decoration/Modern/window/captionbar-inactive-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png": [10, 14, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -18], "qx/decoration/Modern/tabview/tab-button-right-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/button-pressed-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -188], "qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-left-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/inputcheckradio-combined.png": [404, 14, "png", "qx"], "jstyle/syntax/scripts/shBrushJScript.js": "jstyle", "qx/decoration/Modern/form/button-disabled-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -60], "qx/decoration/Modern/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-hovered-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -104], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-bottom-active-c.png": [20, 14, "png", "qx"], "qx/decoration/Modern/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -32, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -3], "qx/icon/Tango/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -112, 0], "qx/decoration/Modern/window/captionbar-active-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-left-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, 0], "qx/decoration/Modern/arrows/Thumbs.db": "qx", "qx/decoration/Modern/table/header-cell.png": [20, 18, "png", "qx", "qx/decoration/Modern/table-combined.png", -44, 0], "qx/decoration/Modern/tabview/Thumbs.db": "qx", "qx/decoration/Modern/pane/pane-l.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/maximize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -54, 0], "qx/decoration/Modern/form/input-focused.png": [40, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -280, 0], "qx/decoration/Modern/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -140, 0], "qx/decoration/Modern/tabview/tabview-pane-b.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -90], "qx/decoration/Modern/tabview/tabview-pane-tl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -30], "qx/icon/Tango/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", -35, 0], "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -120, 0], "qx/decoration/Modern/form/button-checked-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -8, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/static/blank.gif": [1, 1, "gif", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-up.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -156, 0], "qx/decoration/Modern/pane-lr-combined.png": [12, 238, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", 0, 0], "qx/icon/Tango/22/places/folder.png": [22, 22, "png", "qx"], "jstyle/syntax/styles/shThemeDjango.css": "jstyle", "qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/window/captionbar-active-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -45], "qx/decoration/Modern/groupbox/Thumbs.db": "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png": [12, 9, "png", "qx"], "qx/icon/Tango/22/places/folder-open.png": [22, 22, "png", "qx"], "qx/decoration/Modern/toolbar/toolbar-gradient-blue.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -30], "qx/decoration/Modern/groupbox/groupbox-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -20], "qx/decoration/Modern/pane/pane-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-hovered-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -100], "qx/decoration/Modern/window-captionbar-buttons-combined.png": [108, 9, "png", "qx"], "qx/decoration/Modern/pane/pane-r.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", -6, 0], "qx/decoration/Modern/form/button-hovered-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -116], "qx/decoration/Modern/window-captionbar-tb-active-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -12], "qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -3], "jstyle/syntax/styles/shThemeMidnight.css": "jstyle", "qx/decoration/Modern/window/statusbar-l.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", 0, 0], "jstyle/image/document-folder.png": [22, 22, "png", "jstyle"], "qx/decoration/Modern/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-disabled-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -52], "qx/decoration/Modern/scrollbar/scrollbar-down.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -142, 0], "qx/decoration/Modern/tree/Thumbs.db": "qx", "qx/decoration/Modern/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Modern/scrollbar/slider-knob-background.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -162, 0], "qx/decoration/Modern/form/button-disabled-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -56], "qx/decoration/Modern/window/statusbar-r.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", -4, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-top-active-r.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", -5, 0], "qx/decoration/Modern/arrows/forward.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -26, 0], "qx/decoration/Modern/form/button-preselected-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -136], "qx/decoration/Modern/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -126, 0], "qx/decoration/Modern/arrows-combined.png": [87, 8, "png", "qx"], "qx/decoration/Modern/arrows/left.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -41, 0], "qx/decoration/Modern/form/button-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -24, 0], "qx/decoration/Modern/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -19, 0], "qx/decoration/Modern/tabview/tab-button-top-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-right-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -25], "qx/decoration/Modern/pane/pane-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-left.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -148, 0], "qx/decoration/Modern/button-tb-combined.png": [4, 216, "png", "qx"], "jstyle/syntax/styles/shThemeFadeToGrey.css": "jstyle", "qx/decoration/Modern/pane/pane-c.png": [20, 238, "png", "qx"], "qx/decoration/Modern/colorselector/Thumbs.db": "qx", "qx/decoration/Modern/selection.png": [110, 20, "png", "qx"], "qx/decoration/Modern/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Modern/table-combined.png", -64, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/arrows/up.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -79, 0], "qx/decoration/Modern/form/button-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -212], "qx/decoration/Modern/form/button-pressed-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -168], "qx/decoration/Modern/window/maximize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -63, 0], "qx/decoration/Modern/tabview/tab-button-top-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -48, 0], "qx/decoration/Modern/form/button-checked-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-pressed-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -176], "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane.png": [185, 250, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-t.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/cursors/Thumbs.db": "qx", "jstyle/syntax/styles/wrapping.png": [16, 16, "png", "jstyle"], "qx/decoration/Modern/form/button-checked-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -40], "qx/decoration/Modern/groupbox/groupbox-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-preselected-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -160], "qx/decoration/Modern/form/button-hovered-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/form/button-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -56, 0], "qx/decoration/Modern/window/close-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -18, 0], "qx/decoration/Modern/arrows/down.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -18, 0], "qx/decoration/Modern/tabview/tab-button-left-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-disabled-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -20, 0], "qx/decoration/Modern/window/captionbar-inactive-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -18], "qx/decoration/Modern/arrows/right-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -56, 0], "qx/decoration/Modern/arrows/left-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -36, 0], "qx/decoration/Modern/form/button-pressed-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -172], "qx/decoration/Modern/tabview/tabview-pane-r.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", -30, 0], "qx/decoration/Modern/form/button-preselected-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -44, 0], "qx/decoration/Modern/shadow/Thumbs.db": "qx", "jstyle/image/go-down.png": [16, 16, "png", "jstyle"], "jstyle/Thumbs.db": "jstyle", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview-button-right-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-top-active-l.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-part.gif": [7, 1, "gif", "qx"], "qx/decoration/Modern/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -30], "qx/decoration/Modern/tabview/tab-button-right-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window/statusbar-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -4], "qx/decoration/Modern/Thumbs.db": "qx", "qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -20], "jstyle/image/test.png": [32, 32, "png", "jstyle"], "qx/decoration/Modern/tabview/tab-button-left-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", 0, 0], "qx/decoration/Modern/splitpane/Thumbs.db": "qx", "jstyle/image/errorIcon.png": [14, 14, "png", "jstyle"], "qx/decoration/Modern/form/button-preselected-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -40, 0], "qx/decoration/Modern/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -224, 0], "qx/decoration/Modern/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -14, 0], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png": [10, 12, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -132, 0], "qx/decoration/Modern/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -15], "qx/decoration/Modern/menu/Thumbs.db": "qx", "qx/decoration/Modern/tabview/tab-button-right-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/tree/open-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -16, 0], "qx/decoration/Modern/form/button-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -76], "qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/groupbox/groupbox-r.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", -4, 0], "qx/decoration/Modern/arrows/up-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -66, 0], "jstyle/syntax/styles/shCore.css": "jstyle", "qx/decoration/Modern/form/button-preselected-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -128], "qx/decoration/Modern/form/button-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -68, 0], "qx/decoration/Modern/window/statusbar-c.png": [20, 7, "png", "qx"], "qx/decoration/Modern/tree/closed.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -8, 0], "qx/decoration/Modern/form/button-disabled-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tree/open.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -24, 0], "qx/decoration/Modern/table/ascending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", 0, 0], "jstyle/image/warningIcon.png": [14, 14, "png", "jstyle"], "qx/decoration/Modern/groupbox/groupbox-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -4], "qx/decoration/Modern/menu/bar-background.png": [40, 20, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", -20, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -168, 0], "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -148], "qx/decoration/Modern/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -16, 0], "qx/decoration/Modern/form/button-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -208], "qx/decoration/Modern/form/button-hovered-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -108], "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/window/close-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -9, 0], "qx/decoration/Modern/splitpane/knob-horizontal.png": [1, 8, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, 0], "jstyle/image/go-up.png": [16, 16, "png", "jstyle"], "qx/decoration/Modern/groupbox/groupbox-c.png": [20, 51, "png", "qx"], "jstyle/syntax/styles/printer.png": [16, 16, "png", "jstyle"], "qx/decoration/Modern/form/button-preselected-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -25], "qx/decoration/Modern/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -154, 0], "qx/decoration/Modern/arrows/down-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", 0, 0], "qx/decoration/Modern/window/Thumbs.db": "qx", "qx/decoration/Modern/menu/background.png": [20, 49, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", 0, 0], "qx/decoration/Modern/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Modern/form/button-checked-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/restore-active-hovered.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -81, 0], "jstyle/syntax/scripts/clipboard.swf": "jstyle", "qx/decoration/Modern/window/captionbar-inactive-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -24], "qx/decoration/Modern/window/restore-active.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -90, 0], "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png": [6, 36, "png", "qx"], "qx/icon/Tango/32/places/folder-open.png": [32, 32, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, 0], "qx/decoration/Modern/table/boolean-true.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -22, 0], "qx/decoration/Modern/window/captionbar-active-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -12], "jstyle/syntax/styles/page_white_code.png": [16, 16, "png", "jstyle"], "qx/decoration/Modern/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -28, 0], "qx/decoration/Modern/form/button-preselected-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -152], "qx/decoration/Modern/table/boolean-false.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -8, 0], "qx/decoration/Modern/form/button-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -28, 0], "jstyle/image/edit-delete.png": [22, 22, "png", "jstyle"], "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-preselected-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -164], "qx/decoration/Modern/form/button-pressed-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-bl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -120], "qx/icon/Tango/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -196], "qx/decoration/Modern/tabview/tab-button-top-active-c.png": [20, 12, "png", "qx"], "qx/decoration/Modern/splitpane-knobs-combined.png": [8, 9, "png", "qx"], "qx/decoration/Modern/app-header.png": [110, 20, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -8], "jstyle/syntax/styles/shThemeDefault.css": "jstyle", "qx/decoration/Modern/window/restore-inactive.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -99, 0], "qx/decoration/Modern/form/button-checked-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -32], "qx/decoration/Modern/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png": [3, 9, "png", "qx"], "jstyle/image/help-about.png": [22, 22, "png", "jstyle"], "qx/decoration/Modern/form/button-checked-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -12, 0], "qx/decoration/Modern/tabview/tab-button-left-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -25], "qx/decoration/Modern/table/Thumbs.db": "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-c.png": [20, 2, "png", "qx"], "qx/decoration/Modern/form/button-pressed-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -184], "jstyle/syntax/styles/help.png": [16, 16, "png", "jstyle"], "qx/decoration/Modern/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -266, 0], "qx/decoration/Modern/form/button-checked-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -12], "qx/decoration/Modern/arrows/rewind.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -46, 0], "qx/decoration/Modern/window/captionbar-active-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -98, 0], "qx/decoration/Modern/tabview-button-right-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -92], "qx/decoration/Modern/shadow/shadow-small-c.png": [20, 136, "png", "qx"], "qx/decoration/Modern/window/statusbar-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -16], "qx/decoration/Modern/window-statusbar-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/button-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -72], "qx/decoration/Modern/tabview/tabview-pane-br.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -150], "qx/decoration/Modern/button-lr-combined.png": [72, 52, "png", "qx"], "qx/decoration/Modern/form/button-preselected-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -156], "qx/decoration/Modern/tabview/tab-button-left-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -42, 0], "qx/decoration/Modern/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/button-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -200], "qx/icon/Tango/16/apps/utilities-color-chooser.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-c.png": [20, 382, "png", "qx"], "qx/decoration/Modern/table-combined.png": [74, 18, "png", "qx"], "qx/decoration/Modern/pane/pane-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -24], "qx/decoration/Modern/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -196, 0], "qx/decoration/Modern/arrows/up-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -74, 0], "qx/decoration/Modern/scrollbar/Thumbs.db": "qx", "qx/decoration/Modern/scrollbar-combined.png": [174, 76, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window-statusbar-lr-combined.png": [8, 7, "png", "qx"], "jstyle/image/utilities-log-viewer.png": [22, 22, "png", "jstyle"], "qx/decoration/Modern/window/statusbar-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -8], "qx/decoration/Modern/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -84, 0], "qx/decoration/Modern/form/button-disabled-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -68], "qx/decoration/Modern/form/button-preselected-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -120], "qx/decoration/Modern/form/button-pressed-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -56, 0], "qx/decoration/Modern/tabview/tab-button-left-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -25], "qx/decoration/Modern/tabview/tab-button-bottom-active-r.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", -5, 0], "qx/icon/Tango/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Modern/toolbar-combined.png": [40, 130, "png", "qx"], "qx/decoration/Modern/groupbox-lr-combined.png": [8, 51, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -20], "jstyle/syntax/styles/shThemeRDark.css": "jstyle", "qx/decoration/Modern/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -238, 0], "qx/decoration/Modern/form/button-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -80], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -70, 0], "qx/decoration/Modern/form/button-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -192], "qx/decoration/Modern/toolbar/toolbar-handle-knob.gif": [1, 8, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -28], "qx/decoration/Modern/form/button-checked-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -4], "qx/decoration/Modern/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -182, 0], "qx/decoration/Modern/arrows/down-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -13, 0], "qx/decoration/Modern/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", 0, 0], "qx/icon/Tango/32/places/folder.png": [32, 32, "png", "qx"], "qx/decoration/Modern/pane/pane-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -30], "qx/decoration/Modern/splitpane/knob-vertical.png": [8, 1, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, -8], "qx/decoration/Modern/scrollbar/scrollbar-right.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -152, 0], "jstyle/image/infoIcon.png": [14, 14, "png", "jstyle"], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-top-active-lr-combined.png": [10, 12, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, 0], "jstyle/syntax/styles/page_white_copy.png": [16, 16, "png", "jstyle"], "qx/decoration/Modern/form/button-hovered-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -32, 0], "qx/decoration/Modern/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-top-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/decoration/Modern/pane/pane-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-left-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", 0, 0], "qx/icon/Tango/16/mimetypes/office-document.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -252, 0], "jstyle/image/help-contents.png": [22, 22, "png", "jstyle"], "qx/decoration/Modern/window/statusbar-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -12], "qx/decoration/Modern/window/maximize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -72, 0], "qx/decoration/Modern/tabview-pane-lr-combined.png": [60, 2, "png", "qx"], "qx/decoration/Modern/form/button-hovered-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -96], "qx/decoration/Modern/form/button-preselected-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -144], "qx/decoration/Modern/window/minimize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-left-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/captionbar-active-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", -6, 0], "qx/decoration/Modern/table/descending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", -36, 0], "qx/decoration/Modern/form/button-checked-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -44], "qx/decoration/Modern/tabview/tab-button-left-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -20], "qx/decoration/Modern/arrows/down-small-invert.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -8, 0], "qx/icon/Tango/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/decoration/Modern/menu-background-combined.png": [60, 49, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png": [10, 19, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -95, 0], "jstyle/image/edit-redo.png": [22, 22, "png", "jstyle"], "qx/decoration/Modern/form/button-checked-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-pressed-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -180], "qx/decoration/Modern/form/button-preselected-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -140], "qx/decoration/Modern/form/button-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/button-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -64, 0], "qx/decoration/Modern/form/button-hovered-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -112], "qx/decoration/Modern/form/button-disabled-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -16, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png": [19, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -76, 0], "jstyle/syntax/scripts/shCore.js": "jstyle", "qx/decoration/Modern/window/captionbar-inactive-c.png": [20, 9, "png", "qx"], "jstyle/image/media-playback-start.png": [22, 22, "png", "jstyle"], "qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, 0], "jstyle/js/jquery-1.3.2.min.js": "jstyle"};
qx.$$translations = {"C": {}, "de": {"%1 of %2 rows": "%1 von %2 Zeilen", "one of one row": "Eine von einer Zeile", "one row": "Eine Zeile", "%1 rows": "%1 Zeilen", "Reset column widths": "Spaltenbreite zurücksetzen"}, "en": {}};
qx.$$locales = {"de": {"cldr_day_abbreviated_tue": "Di.", "cldr_date_time_format_MMd": "d.MM.", "cldr_day_wide_thu": "Donnerstag", "cldr_date_time_format_MEd": "E, d.M.", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fr.", "cldr_day_wide_sun": "Sonntag", "cldr_day_wide_mon": "Montag", "cldr_pm": "nachm.", "alternateQuotationEnd": "‘", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, d. MMMM yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mär", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "Mai", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "d. MMM", "cldr_date_time_format_yM": "yyyy-M", "cldr_day_narrow_tue": "D", "cldr_date_time_format_MMMEd": "E d. MMM", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_yyMMdd": "dd.MM.yy", "cldr_month_wide_2": "Februar", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "Januar", "cldr_month_wide_6": "Juni", "cldr_month_wide_7": "Juli", "cldr_date_time_format_MMMMd": "d. MMMM", "cldr_month_wide_5": "Mai", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E d. MMMM", "cldr_month_wide_10": "Oktober", "cldr_month_wide_11": "November", "cldr_month_wide_12": "Dezember", "cldr_date_time_format_MMdd": "dd.MM.", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": ".", "alternateQuotationStart": "‚", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_date_time_format_yMMMEd": "EEE, d. MMM yyyy", "cldr_date_time_format_yMEd": "EEE, yyyy-M-d", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yyMM": "MM.yy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_date_format_long": "d. MMMM yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Okt", "cldr_month_abbreviated_12": "Dez", "cldr_date_time_format_MMMMdd": "dd. MMMM", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_wide_fri": "Freitag", "cldr_date_time_format_HHmm": "HH:mm", "cldr_day_wide_tue": "Dienstag", "cldr_date_time_format_Ed": "E d", "cldr_date_time_format_Md": "d.M.", "cldr_month_narrow_1": "J", "cldr_day_abbreviated_mon": "Mo.", "cldr_month_narrow_3": "M", "quotationEnd": "“", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_time_format_yyQ": "Q yy", "cldr_date_format_medium": "dd.MM.yyyy", "cldr_day_abbreviated_wed": "Mi.", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "„", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sa.", "cldr_day_narrow_wed": "M", "cldr_date_time_format_hhmmss": "hh:mm:ss a", "cldr_am": "vorm.", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_time_format_long": "HH:mm:ss z", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Samstag", "cldr_day_narrow_thu": "D", "cldr_month_wide_3": "März", "cldr_day_abbreviated_sun": "So.", "cldr_date_time_format_H": "H", "cldr_day_abbreviated_thu": "Do.", "cldr_date_format_short": "dd.MM.yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_day_wide_wed": "Mittwoch", "cldr_day_narrow_mon": "M", "cldr_date_time_format_hhmm": "hh:mm a", "cldr_date_time_format_yyyy": "yyyy", "cldr_month_narrow_2": "F", "cldr_date_time_format_y": "yyyy", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_d": "d"}, "en": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}, "C": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}}

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["script/jstyle-0.js"]],
  boot : "boot"
};  

(function(){var f="[Class ",e="toString",d="qx.Bootstrap",c="]",b="Class",a=".";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return f+this.classname+c;
},createNamespace:function(name,g){var j=name.split(a);
var parent=window;
var h=j[0];

for(var i=0,k=j.length-1;i<k;i++,h=j[i]){if(!parent[h]){parent=parent[h]={};
}else{parent=parent[h];
}}parent[h]=g;
return h;
},define:function(name,l){if(!l){var l={statics:{}};
}var q;
var o=null;

if(l.members){q=l.construct||new Function;
var m=l.statics;

for(var n in m){q[n]=m[n];
}o=q.prototype;
var r=l.members;

for(var n in r){o[n]=r[n];
}}else{q=l.statics||{};
}var p=this.createNamespace(name,q);
q.name=q.classname=name;
q.basename=p;
q.$$type=b;
if(!q.hasOwnProperty(e)){q.toString=this.genericToString;
}if(l.defer){l.defer(q,o);
}qx.Bootstrap.$$registry[name]=l.statics;
}};
qx.Bootstrap.define(d,{statics:{LOADSTART:new Date,createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var j="qx.allowUrlSettings",h="&",g="qx.core.Setting",f="qx.allowUrlVariants",e="qxsetting",d=":",c=".";
qx.Bootstrap.define(g,{statics:{__a:{},define:function(n,o){if(o===undefined){throw new Error('Default value of setting "'+n+'" must be defined!');
}
if(!this.__a[n]){this.__a[n]={};
}else if(this.__a[n].defaultValue!==undefined){throw new Error('Setting "'+n+'" is already defined!');
}this.__a[n].defaultValue=o;
},get:function(p){var q=this.__a[p];

if(q===undefined){throw new Error('Setting "'+p+'" is not defined.');
}
if(q.value!==undefined){return q.value;
}return q.defaultValue;
},__b:function(){if(window.qxsettings){for(var a in qxsettings){if((a.split(c)).length<2){throw new Error('Malformed settings key "'+a+'". Must be following the schema "namespace.key".');
}
if(!this.__a[a]){this.__a[a]={};
}this.__a[a].value=qxsettings[a];
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(b){}this.__c();
}},__c:function(){if(this.get(j)!=true){return;
}var m=document.location.search.slice(1).split(h);

for(var i=0;i<m.length;i++){var k=m[i].split(d);

if(k.length!=3||k[0]!=e){continue;
}var l=k[1];

if(!this.__a[l]){this.__a[l]={};
}this.__a[l].value=decodeURIComponent(k[2]);
}}},defer:function(r){r.define(j,false);
r.define(f,false);
r.__b();
}});
})();
(function(){var q="gecko",p="1.9.0.0",o=".",n="function",m="[^\\.0-9]",l="525.26",k="",j="mshtml",i="AppleWebKit/",h="unknown",c="9.6.0",g="Gecko",f="7.0",b="opera",a="webkit",e="0.0.0",d="qx.bom.client.Engine";
qx.Bootstrap.define(d,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,__d:function(){var r=h;
var v=e;
var u=navigator.userAgent;
var x=false;
var t=false;

if(window.opera){r=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(u)){v=RegExp.$1+o+RegExp.$2;

if(RegExp.$3!=k){v+=o+RegExp.$3;
}}else{t=true;
v=c;
}}else if(navigator.userAgent.indexOf(i)!=-1){r=a;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(u)){v=RegExp.$1;
var w=RegExp(m).exec(v);

if(w){v=v.slice(0,w.index);
}}else{t=true;
v=l;
}}else if(window.controllers&&navigator.product===g){r=q;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(u)){v=RegExp.$1;
}else{t=true;
v=p;
}}else if(navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(u)){r=j;
v=RegExp.$1;
if(v>=8&&document.documentMode<8){v=f;
}this.MSHTML=true;
}else{var s=window.qxFail;

if(s&&typeof s===n){var r=s();

if(r.NAME&&r.FULLVERSION){r=r.NAME;
this[r.toUpperCase()]=true;
v=r.FULLVERSION;
}}else{x=true;
t=true;
v=p;
r=q;
this.GECKO=true;
alert("Unsupported client: "+u+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=x;
this.UNKNOWN_VERSION=t;
this.NAME=r;
this.FULLVERSION=v;
this.VERSION=parseFloat(v);
}},defer:function(y){y.__d();
}});
})();
(function(){var O="on",N="off",M="|",L="default",K="object",J="&",I="qx.aspects",H="$",G="qx.allowUrlVariants",F="qx.debug",z="qx.client",E="qx.dynlocale",C="webkit",y="qxvariant",x="opera",B=":",A="qx.core.Variant",D="mshtml",w="gecko";
qx.Bootstrap.define(A,{statics:{__e:{},__f:{},compilerIsSet:function(){return true;
},define:function(g,h,j){{};

if(!this.__e[g]){this.__e[g]={};
}else{}this.__e[g].allowedValues=h;
this.__e[g].defaultValue=j;
},get:function(t){var u=this.__e[t];
{};

if(u.value!==undefined){return u.value;
}return u.defaultValue;
},__g:function(){if(window.qxvariants){for(var a in qxvariants){{};

if(!this.__e[a]){this.__e[a]={};
}this.__e[a].value=qxvariants[a];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(c){}this.__h(this.__e);
}},__h:function(){if(qx.core.Setting.get(G)!=true){return;
}var q=document.location.search.slice(1).split(J);

for(var i=0;i<q.length;i++){var r=q[i].split(B);

if(r.length!=3||r[0]!=y){continue;
}var s=r[1];

if(!this.__e[s]){this.__e[s]={};
}this.__e[s].value=decodeURIComponent(r[2]);
}},select:function(d,e){{};

for(var f in e){if(this.isSet(d,f)){return e[f];
}}
if(e[L]!==undefined){return e[L];
}{};
},isSet:function(k,m){var n=k+H+m;

if(this.__f[n]!==undefined){return this.__f[n];
}var p=false;
if(m.indexOf(M)<0){p=this.get(k)===m;
}else{var o=m.split(M);

for(var i=0,l=o.length;i<l;i++){if(this.get(k)===o[i]){p=true;
break;
}}}this.__f[n]=p;
return p;
},__i:function(v){return typeof v===K&&v!==null&&v instanceof Array;
},__j:function(v){return typeof v===K&&v!==null&&!(v instanceof Array);
},__k:function(P,Q){for(var i=0,l=P.length;i<l;i++){if(P[i]==Q){return true;
}}return false;
}},defer:function(b){b.define(z,[w,D,x,C],qx.bom.client.Engine.NAME);
b.define(F,[O,N],O);
b.define(I,[O,N],N);
b.define(E,[O,N],O);
b.__g();
}});
})();
(function(){var n='"',m="valueOf",k="toLocaleString",j="isPrototypeOf",h="",g="toString",f="qx.client",e="qx.lang.Object",d='\", "',c="hasOwnProperty",b="Use 'clone()' instead!";
qx.Bootstrap.define(e,{statics:{empty:function(K){for(var L in K){if(K.hasOwnProperty(L)){delete K[L];
}}},isEmpty:function(T){for(var U in T){return false;
}return true;
},hasMinLength:function(o,p){var length=0;

for(var q in o){if((++length)>=p){return true;
}}return false;
},getLength:function(M){var length=0;

for(var N in M){length++;
}return length;
},_shadowedKeys:[j,c,k,g,m],getKeys:qx.core.Variant.select(f,{"mshtml":function(E){{};
var F=[];

for(var G in E){F.push(G);
}for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(E.hasOwnProperty(a[i])){F.push(a[i]);
}}return F;
},"default":function(v){var w=[];

for(var x in v){w.push(x);
}return w;
}}),getKeysAsString:function(O){var P=qx.lang.Object.getKeys(O);

if(P.length==0){return h;
}return n+P.join(d)+n;
},getValues:function(z){var A=[];

for(var B in z){A.push(z[B]);
}return A;
},mergeWith:function(r,s,t){if(t===undefined){t=true;
}
for(var u in s){if(t||r[u]===undefined){r[u]=s[u];
}}return r;
},carefullyMergeWith:function(C,D){return qx.lang.Object.mergeWith(C,D,false);
},merge:function(H,I){var J=arguments.length;

for(var i=1;i<J;i++){qx.lang.Object.mergeWith(H,arguments[i]);
}return H;
},copy:function(y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return qx.lang.Object.clone(y);
},clone:function(Y){var ba={};

for(var bb in Y){ba[bb]=Y[bb];
}return ba;
},invert:function(Q){var R={};

for(var S in Q){R[Q[S].toString()]=S;
}return R;
},getKeyFromValue:function(V,W){for(var X in V){if(V.hasOwnProperty(X)&&V[X]===W){return X;
}}return null;
},contains:function(bg,bh){return this.getKeyFromValue(bg,bh)!==null;
},select:function(bc,bd){return bd[bc];
},fromArray:function(be){var bf={};

for(var i=0,l=be.length;i<l;i++){{};
bf[be[i].toString()]=true;
}return bf;
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__l:[],wrap:function(f,g,h){var n=[];
var j=[];
var m=this.__l;
var l;

for(var i=0;i<m.length;i++){l=m[i];

if((l.type==null||h==l.type||l.type==b)&&(l.name==null||f.match(l.name))){l.pos==-1?n.push(l.fcn):j.push(l.fcn);
}}
if(n.length===0&&j.length===0){return g;
}var k=function(){for(var i=0;i<n.length;i++){n[i].call(this,f,g,h,arguments);
}var e=g.apply(this,arguments);

for(var i=0;i<j.length;i++){j[i].call(this,f,g,h,arguments,e);
}return e;
};

if(h!==a){k.self=g.self;
k.base=g.base;
}g.wrapper=k;
k.original=g;
return k;
},addAdvice:function(o,p,q,name){this.__l.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var S="qx.aspects",R="on",Q=".",P="static",O="[Class ",N="]",M="toString",L="member",K="$$init_",J="destructor",G="extend",I="Class",H="off",F="qx.Class",E="qx.event.type.Data";
qx.Bootstrap.define(F,{statics:{define:function(name,bV){if(!bV){var bV={};
}if(bV.include&&!(bV.include instanceof Array)){bV.include=[bV.include];
}if(bV.implement&&!(bV.implement instanceof Array)){bV.implement=[bV.implement];
}if(!bV.hasOwnProperty(G)&&!bV.type){bV.type=P;
}{};
var bX=this.__q(name,bV.type,bV.extend,bV.statics,bV.construct,bV.destruct);
if(bV.extend){if(bV.properties){this.__s(bX,bV.properties,true);
}if(bV.members){this.__u(bX,bV.members,true,true,false);
}if(bV.events){this.__r(bX,bV.events,true);
}if(bV.include){for(var i=0,l=bV.include.length;i<l;i++){this.__x(bX,bV.include[i],false);
}}}if(bV.settings){for(var bW in bV.settings){qx.core.Setting.define(bW,bV.settings[bW]);
}}if(bV.variants){for(var bW in bV.variants){qx.core.Variant.define(bW,bV.variants[bW].allowedValues,bV.variants[bW].defaultValue);
}}if(bV.implement){for(var i=0,l=bV.implement.length;i<l;i++){this.__w(bX,bV.implement[i]);
}}{};
if(bV.defer){bV.defer.self=bX;
bV.defer(bX,bX.prototype,{add:function(name,ca){var cb={};
cb[name]=ca;
qx.Class.__s(bX,cb,true);
}});
}},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(bd,be){{};
qx.Class.__x(bd,be,false);
},patch:function(bv,bw){{};
qx.Class.__x(bv,bw,true);
},isSubClassOf:function(b,c){if(!b){return false;
}
if(b==c){return true;
}
if(b.prototype instanceof c){return true;
}return false;
},getPropertyDefinition:function(bp,name){while(bp){if(bp.$$properties&&bp.$$properties[name]){return bp.$$properties[name];
}bp=bp.superclass;
}return null;
},getProperties:function(bl){var bm=[];

while(bl){if(bl.$$properties){bm.push.apply(bm,qx.lang.Object.getKeys(bl.$$properties));
}bl=bl.superclass;
}return bm;
},getByProperty:function(D,name){while(D){if(D.$$properties&&D.$$properties[name]){return D;
}D=D.superclass;
}return null;
},hasProperty:function(bE,name){return !!this.getPropertyDefinition(bE,name);
},getEventType:function(bc,name){var bc=bc.constructor;

while(bc.superclass){if(bc.$$events&&bc.$$events[name]!==undefined){return bc.$$events[name];
}bc=bc.superclass;
}return null;
},supportsEvent:function(v,name){return !!this.getEventType(v,name);
},hasOwnMixin:function(t,u){return t.$$includes&&t.$$includes.indexOf(u)!==-1;
},getByMixin:function(bf,bg){var bh,i,l;

while(bf){if(bf.$$includes){bh=bf.$$flatIncludes;

for(i=0,l=bh.length;i<l;i++){if(bh[i]===bg){return bf;
}}}bf=bf.superclass;
}return null;
},getMixins:function(B){var C=[];

while(B){if(B.$$includes){C.push.apply(C,B.$$flatIncludes);
}B=B.superclass;
}return C;
},hasMixin:function(bn,bo){return !!this.getByMixin(bn,bo);
},hasOwnInterface:function(T,U){return T.$$implements&&T.$$implements.indexOf(U)!==-1;
},getByInterface:function(Y,ba){var bb,i,l;

while(Y){if(Y.$$implements){bb=Y.$$flatImplements;

for(i=0,l=bb.length;i<l;i++){if(bb[i]===ba){return Y;
}}}Y=Y.superclass;
}return null;
},getInterfaces:function(bi){var bj=[];

while(bi){if(bi.$$implements){bj.push.apply(bj,bi.$$flatImplements);
}bi=bi.superclass;
}return bj;
},hasInterface:function(z,A){return !!this.getByInterface(z,A);
},implementsInterface:function(V,W){var X=V.constructor;

if(this.hasInterface(X,W)){return true;
}
try{qx.Interface.assertObject(V,W);
return true;
}catch(bx){}
try{qx.Interface.assert(X,W,false);
return true;
}catch(bk){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return O+this.classname+N;
},$$registry:qx.Bootstrap.$$registry,__m:null,__n:null,__o:function(){},__p:function(){},__q:function(name,bF,bG,bH,bI,bJ){var bO;

if(!bG&&qx.core.Variant.isSet(S,H)){bO=bH||{};
}else{bO={};

if(bG){if(!bI){bI=this.__y();
}bO=this.__A(bI,name,bF);
}if(bH){var bP;

for(var i=0,a=qx.lang.Object.getKeys(bH),l=a.length;i<l;i++){bP=a[i];

if(qx.core.Variant.isSet(S,R)){var bL=bH[bP];

if(bL instanceof Function){bL=qx.core.Aspect.wrap(name+Q+bP,bL,P);
}bO[bP]=bL;
}else{bO[bP]=bH[bP];
}}}}var bN=qx.Bootstrap.createNamespace(name,bO,false);
bO.name=bO.classname=name;
bO.basename=bN;
bO.$$type=I;

if(bF){bO.$$classtype=bF;
}if(!bO.hasOwnProperty(M)){bO.toString=this.genericToString;
}
if(bG){var bQ=bG.prototype;
var bK=this.__z();
bK.prototype=bQ;
var bM=new bK;
bO.prototype=bM;
bM.name=bM.classname=name;
bM.basename=bN;
bI.base=bO.superclass=bG;
bI.self=bO.constructor=bM.constructor=bO;
if(bJ){if(qx.core.Variant.isSet(S,R)){bJ=qx.core.Aspect.wrap(name,bJ,J);
}bO.$$destructor=bJ;
}}this.$$registry[name]=bO;
return bO;
},__r:function(d,e,f){var g,g;

if(d.$$events){for(var g in e){d.$$events[g]=e[g];
}}else{d.$$events=e;
}},__s:function(cc,cd,ce){var cg;

if(ce===undefined){ce=false;
}var cf=!!cc.$$propertiesAttached;

for(var name in cd){cg=cd[name];
{};
cg.name=name;
if(!cg.refine){if(cc.$$properties===undefined){cc.$$properties={};
}cc.$$properties[name]=cg;
}if(cg.init!==undefined){cc.prototype[K+name]=cg.init;
}if(cg.event!==undefined){var event={};
event[cg.event]=E;
this.__r(cc,event,ce);
}if(cg.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(cf){qx.core.Property.attachMethods(cc,name,cg);
}}},__t:null,__u:function(h,j,k,m,n){var o=h.prototype;
var q,p;

for(var i=0,a=qx.lang.Object.getKeys(j),l=a.length;i<l;i++){q=a[i];
p=j[q];
{};
if(m!==false&&p instanceof Function&&p.$$type==null){if(n==true){p=this.__v(p,o[q]);
}else{if(o[q]){p.base=o[q];
}p.self=h;
}
if(qx.core.Variant.isSet(S,R)){p=qx.core.Aspect.wrap(h.classname+Q+q,p,L);
}}o[q]=p;
}},__v:function(ch,ci){if(ci){return function(){var s=ch.base;
ch.base=ci;
var r=ch.apply(this,arguments);
ch.base=s;
return r;
};
}else{return ch;
}},__w:function(w,x){{};
var y=qx.Interface.flatten([x]);

if(w.$$implements){w.$$implements.push(x);
w.$$flatImplements.push.apply(w.$$flatImplements,y);
}else{w.$$implements=[x];
w.$$flatImplements=y;
}},__x:function(bq,br,bs){{};

if(this.hasMixin(bq,br)){qx.log.Logger.warn('Mixin "'+br.name+'" is already included into Class "'+bq.classname+'" by class: '+this.getByMixin(bq,br).classname+'!');
return;
}var bu=qx.Mixin.flatten([br]);
var bt;

for(var i=0,l=bu.length;i<l;i++){bt=bu[i];
if(bt.$$events){this.__r(bq,bt.$$events,bs);
}if(bt.$$properties){this.__s(bq,bt.$$properties,bs);
}if(bt.$$members){this.__u(bq,bt.$$members,bs,bs,bs);
}}if(bq.$$includes){bq.$$includes.push(br);
bq.$$flatIncludes.push.apply(bq.$$flatIncludes,bu);
}else{bq.$$includes=[br];
bq.$$flatIncludes=bu;
}},__y:function(){function bY(){arguments.callee.base.apply(this,arguments);
}return bY;
},__z:function(){return function(){};
},__A:function(bR,name,bS){var bU=function(){var bD=arguments.callee.constructor;
{};
if(!bD.$$propertiesAttached){qx.core.Property.attach(bD);
}var bC=bD.$$original.apply(this,arguments);
if(bD.$$includes){var bB=bD.$$flatIncludes;

for(var i=0,l=bB.length;i<l;i++){if(bB[i].$$constructor){bB[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return bC;
};

if(qx.core.Variant.isSet("qx.aspects","on")){var bT=qx.core.Aspect.wrap(name,bU,"constructor");
bU.$$original=bR;
bU.constructor=bT;
bU=bT;
}if(bS==="singleton"){bU.getInstance=this.getInstance;
}bU.$$original=bR;
bR.wrapper=bU;
return bU;
}},defer:function(by){if(qx.core.Variant.isSet(S,R)){for(var bz in qx.Bootstrap.$$registry){var by=qx.Bootstrap.$$registry[bz];

for(var bA in by){if(by[bA] instanceof Function){by[bA]=qx.core.Aspect.wrap(bz+Q+bA,by[bA],P);
}}}}}});
})();
(function(){var e="]",d="Theme",c="[Theme ",b="qx.Theme";
qx.Class.define(b,{statics:{define:function(name,w){if(!w){var w={};
}
if(w.include&&!(w.include instanceof Array)){w.include=[w.include];
}{};
var x={$$type:d,name:name,title:w.title,toString:this.genericToString};
if(w.extend){x.supertheme=w.extend;
}if(w.resource){x.resource=w.resource;
}else if(w.extend&&w.extend.resource){x.resource=w.extend.resource;
}x.basename=qx.Bootstrap.createNamespace(name,x);
this.__C(x,w);
this.$$registry[name]=x;
if(w.include){for(var i=0,a=w.include,l=a.length;i<l;i++){this.include(x,a[i]);
}}},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return c+this.name+e;
},__B:function(n){for(var i=0,o=this.__D,l=o.length;i<l;i++){if(n[o[i]]){return o[i];
}}},__C:function(p,q){var t=this.__B(q);
if(q.extend&&!t){t=q.extend.type;
}p.type=t||"other";
if(!t){return;
}var v=function(){};
if(q.extend){v.prototype=new q.extend.$$clazz;
}var u=v.prototype;
var s=q[t];
for(var r in s){u[r]=s[r];
if(u[r].base){{};
u[r].base=q.extend;
}}p.$$clazz=v;
p[t]=new v;
},$$registry:{},__D:["colors","borders","decorations","fonts","icons","widgets","appearances","meta"],__E:null,__F:null,__G:function(){},patch:function(y,z){var B=this.__B(z);

if(B!==this.__B(y)){throw new Error("The mixins '"+y.name+"' are not compatible '"+z.name+"'!");
}var A=z[B];
var C=y[B];

for(var D in A){C[D]=A[D];
}},include:function(f,g){var j=g.type;

if(j!==f.type){throw new Error("The mixins '"+f.name+"' are not compatible '"+g.name+"'!");
}var h=g[j];
var k=f[j];

for(var m in h){if(k[m]!==undefined){throw new Error("It is not allowed to overwrite the key '"+m+"' of theme '"+f.name+"' by mixin theme '"+g.name+"'.");
}k[m]=h[m];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",G="#80B4EF",F="#ffffdd",E="#334866",D="#00204D",C="#666666",B="#99C3FE",A="#808080",z="#F4F4F4",y="#B6B6B6",x="#909090",q="#FCFCFC",r="#314a6e",o="#001533",p="#0880EF",m="#4d4d4d",n="#DFDFDF",k="#000000",l="#7B7A7E",s="#26364D",t="#AFAFAF",v="#404955",u="#AAAAAA",w="qx.theme.modern.Color";
qx.Theme.define(w,{colors:{"background-application":n,"background-pane":i,"background-light":q,"background-medium":a,"background-splitpane":t,"background-tip":F,"background-odd":h,"text-light":x,"text-gray":b,"text-label":g,"text-title":r,"text-input":k,"text-hovered":o,"text-disabled":l,"text-selected":d,"text-active":s,"text-inactive":v,"border-main":m,"border-separator":A,"border-input":E,"border-disabled":y,"border-pane":D,"border-button":C,"border-column":j,"border-focused":B,"table-pane":i,"table-focus-indicator":p,"table-row-background-focused-selected":f,"table-row-background-focused":G,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":u,"progressive-table-row-background-even":z,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var a="jstyle.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});
})();
(function(){var bO=';',bN='computed=this.',bM='=value;',bL='this.',bK='if(this.',bJ='!==undefined)',bI='delete this.',bH="set",bG="setThemed",bF='}',bu="setRuntime",bt='else if(this.',bs="init",br='return this.',bq="string",bp="boolean",bo="resetThemed",bn='!==undefined){',bm='=true;',bl="resetRuntime",bV="reset",bW="refresh",bT='old=this.',bU='else ',bR='old=computed=this.',bS=' of an instance of ',bP='if(old===computed)return value;',bQ='if(old===undefined)old=null;',bX='(value);',bY=' is not (yet) ready!");',by='===value)return value;',bx='return init;',bA='var init=this.',bz="Error in property ",bC='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',bB='.validate.call(this, value);',bE='else{',bD=" in method ",bw='=computed;',bv='(backup);',z='if(computed===inherit){',A="inherit",B='if(value===undefined)prop.error(this,2,"',C='var computed, old=this.',D='else if(computed===undefined)',E="': ",F=" of class ",G='===undefined)return;',H="')){",I='else this.',cd='value=this.',cc='","',cb='if(init==qx.core.Property.$$inherit)init=null;',ca='var inherit=prop.$$inherit;',ch='var computed, old;',cg='computed=undefined;delete this.',cf='",value);',ce='computed=value;',cj=';}',ci='){',X='if(computed===undefined||computed===inherit){',Y='!==inherit){',V='(computed, old, "',W='return value;',bc='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bd="if(reg.hasListener(this, '",ba=')a[i].',bb='.$$properties.',T="var reg=qx.event.Registration;",U='return null;',Q='");',P='var pa=this.getLayoutParent();if(pa)computed=pa.',S='!==undefined&&',R="', qx.event.type.Data, [computed, old]",M='var backup=computed;',L='}else{',O="object",N='if(computed===undefined)computed=null;',K='if(a[i].',J='throw new Error("Property ',bh=")}",bi='var prop=qx.core.Property;',bj=" with incoming value '",bk='if(computed===undefined||computed==inherit)computed=null;',be='if((computed===undefined||computed===inherit)&&',bf="reg.fireEvent(this, '",bg="qx.core.Property";
qx.Class.define(bg,{statics:{__H:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'(typeof value === "string" || value instanceof String) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__I:{"Object":true,"Array":true,"Map":true,"Function":true,"Date":true,"Node":true,"Element":true,"Document":true,"Window":true,"Event":true,"Class":true,"Mixin":true,"Interface":true,"Theme":true,"Font":true,"Decorator":true},$$inherit:A,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bq,dispose:bp,inheritable:bp,nullable:bp,themeable:bp,refine:bp,init:null,apply:bq,event:bq,check:null,transform:bq,deferredInit:bp,validate:null},$$allowedGroupKeys:{name:bq,group:O,mode:bq,themeable:bp},$$inheritable:{},refresh:function(d){var parent=d.getLayoutParent();

if(parent){var g=d.constructor;
var j=this.$$store.inherit;
var h=this.$$store.init;
var f=this.$$method.refresh;
var k;
var e;
{};

while(g){k=g.$$properties;

if(k){for(var name in this.$$inheritable){if(k[name]&&d[f[name]]){e=parent[j[name]];

if(e===undefined){e=parent[h[name]];
}{};
d[f[name]](e);
}}}g=g.superclass;
}}},attach:function(cR){var cS=cR.$$properties;

if(cS){for(var name in cS){this.attachMethods(cR,name,cS[name]);
}}cR.$$propertiesAttached=true;
},attachMethods:function(b,name,c){c.group?this.__J(b,c,name):this.__K(b,c,name);
},__J:function(cA,cB,name){var cI=qx.lang.String.firstUp(name);
var cH=cA.prototype;
var cJ=cB.themeable===true;
{};
var cK=[];
var cE=[];

if(cJ){var cC=[];
var cG=[];
}var cF="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
cK.push(cF);

if(cJ){cC.push(cF);
}
if(cB.mode=="shorthand"){var cD="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
cK.push(cD);

if(cJ){cC.push(cD);
}}
for(var i=0,a=cB.group,l=a.length;i<l;i++){{};
cK.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
cE.push("this.",this.$$method.reset[a[i]],"();");

if(cJ){{};
cC.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
cG.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+cI;
cH[this.$$method.set[name]]=new Function(cK.join(""));
this.$$method.reset[name]="reset"+cI;
cH[this.$$method.reset[name]]=new Function(cE.join(""));

if(cJ){this.$$method.setThemed[name]="setThemed"+cI;
cH[this.$$method.setThemed[name]]=new Function(cC.join(""));
this.$$method.resetThemed[name]="resetThemed"+cI;
cH[this.$$method.resetThemed[name]]=new Function(cG.join(""));
}},__K:function(cr,cs,name){var cu=qx.lang.String.firstUp(name);
var cw=cr.prototype;
{};
if(cs.dispose===undefined&&typeof cs.check==="string"){cs.dispose=this.__I[cs.check]||qx.Class.isDefined(cs.check)||qx.Interface.isDefined(cs.check);
}var cv=this.$$method;
var ct=this.$$store;
ct.runtime[name]="$$runtime_"+name;
ct.user[name]="$$user_"+name;
ct.theme[name]="$$theme_"+name;
ct.init[name]="$$init_"+name;
ct.inherit[name]="$$inherit_"+name;
ct.useinit[name]="$$useinit_"+name;
cv.get[name]="get"+cu;
cw[cv.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cr,name,"get");
};
cv.set[name]="set"+cu;
cw[cv.set[name]]=function(cx){return qx.core.Property.executeOptimizedSetter(this,cr,name,"set",arguments);
};
cv.reset[name]="reset"+cu;
cw[cv.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cr,name,"reset");
};

if(cs.inheritable||cs.apply||cs.event||cs.deferredInit){cv.init[name]="init"+cu;
cw[cv.init[name]]=function(cz){return qx.core.Property.executeOptimizedSetter(this,cr,name,"init",arguments);
};
}
if(cs.inheritable){cv.refresh[name]="refresh"+cu;
cw[cv.refresh[name]]=function(n){return qx.core.Property.executeOptimizedSetter(this,cr,name,"refresh",arguments);
};
}cv.setRuntime[name]="setRuntime"+cu;
cw[cv.setRuntime[name]]=function(m){return qx.core.Property.executeOptimizedSetter(this,cr,name,"setRuntime",arguments);
};
cv.resetRuntime[name]="resetRuntime"+cu;
cw[cv.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cr,name,"resetRuntime");
};

if(cs.themeable){cv.setThemed[name]="setThemed"+cu;
cw[cv.setThemed[name]]=function(cy){return qx.core.Property.executeOptimizedSetter(this,cr,name,"setThemed",arguments);
};
cv.resetThemed[name]="resetThemed"+cu;
cw[cv.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cr,name,"resetThemed");
};
}
if(cs.check==="Boolean"){cw["toggle"+cu]=new Function("return this."+cv.set[name]+"(!this."+cv.get[name]+"())");
cw["is"+cu]=new Function("return this."+cv.get[name]+"()");
}},__L:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(ck,cl,cm,cn,co){var cp=ck.constructor.classname;
var cq=bz+cm+F+cp+bD+this.$$method[cn][cm]+bj+co+E;
throw new Error(cq+(this.__L[cl]||"Unknown reason: "+cl));
},__M:function(cL,cM,name,cN,cO,cP){var cQ=this.$$method[cN][name];
{cM[cQ]=new Function("value",cO.join(""));
};
if(qx.core.Variant.isSet("qx.aspects","on")){cM[cQ]=qx.core.Aspect.wrap(cL.classname+"."+cQ,cM[cQ],"property");
}if(cP===undefined){return cL[cQ]();
}else{return cL[cQ](cP[0]);
}},executeOptimizedGetter:function(cT,cU,name,cV){var cX=cU.$$properties[name];
var da=cU.prototype;
var cW=[];
var cY=this.$$store;
cW.push(bK,cY.runtime[name],bJ);
cW.push(br,cY.runtime[name],bO);

if(cX.inheritable){cW.push(bt,cY.inherit[name],bJ);
cW.push(br,cY.inherit[name],bO);
cW.push(bU);
}cW.push(bK,cY.user[name],bJ);
cW.push(br,cY.user[name],bO);

if(cX.themeable){cW.push(bt,cY.theme[name],bJ);
cW.push(br,cY.theme[name],bO);
}
if(cX.deferredInit&&cX.init===undefined){cW.push(bt,cY.init[name],bJ);
cW.push(br,cY.init[name],bO);
}cW.push(bU);

if(cX.init!==undefined){if(cX.inheritable){cW.push(bA,cY.init[name],bO);

if(cX.nullable){cW.push(cb);
}else if(cX.init!==undefined){cW.push(br,cY.init[name],bO);
}else{cW.push(bc,name,bS,cU.classname,bY);
}cW.push(bx);
}else{cW.push(br,cY.init[name],bO);
}}else if(cX.inheritable||cX.nullable){cW.push(U);
}else{cW.push(J,name,bS,cU.classname,bY);
}return this.__M(cT,da,name,cV,cW);
},executeOptimizedSetter:function(o,p,name,q,r){var x=p.$$properties[name];
var w=p.prototype;
var t=[];
var s=q===bH||q===bG||q===bu||(q===bs&&x.init===undefined);
var u=q===bV||q===bo||q===bl;
var v=x.apply||x.event||x.inheritable;

if(q===bu||q===bl){var y=this.$$store.runtime[name];
}else if(q===bG||q===bo){var y=this.$$store.theme[name];
}else if(q===bs){var y=this.$$store.init[name];
}else{var y=this.$$store.user[name];
}{if(!x.nullable||x.check||x.inheritable){t.push(bi);
}if(q===bH){t.push(B,name,cc,q,cf);
}};
if(s){if(x.transform){t.push(cd,x.transform,bX);
}if(x.validate){if(typeof x.validate===bq){t.push(bL,x.validate,bX);
}else if(x.validate instanceof Function){t.push(p.classname,bb,name);
t.push(bB);
}}}if(v){if(s){t.push(bK,y,by);
}else if(u){t.push(bK,y,G);
}}if(x.inheritable){t.push(ca);
}{};

if(!v){if(q===bu){t.push(bL,this.$$store.runtime[name],bM);
}else if(q===bl){t.push(bK,this.$$store.runtime[name],bJ);
t.push(bI,this.$$store.runtime[name],bO);
}else if(q===bH){t.push(bL,this.$$store.user[name],bM);
}else if(q===bV){t.push(bK,this.$$store.user[name],bJ);
t.push(bI,this.$$store.user[name],bO);
}else if(q===bG){t.push(bL,this.$$store.theme[name],bM);
}else if(q===bo){t.push(bK,this.$$store.theme[name],bJ);
t.push(bI,this.$$store.theme[name],bO);
}else if(q===bs&&s){t.push(bL,this.$$store.init[name],bM);
}}else{if(x.inheritable){t.push(C,this.$$store.inherit[name],bO);
}else{t.push(ch);
}t.push(bK,this.$$store.runtime[name],bn);

if(q===bu){t.push(bN,this.$$store.runtime[name],bM);
}else if(q===bl){t.push(bI,this.$$store.runtime[name],bO);
t.push(bK,this.$$store.user[name],bJ);
t.push(bN,this.$$store.user[name],bO);
t.push(bt,this.$$store.theme[name],bJ);
t.push(bN,this.$$store.theme[name],bO);
t.push(bt,this.$$store.init[name],bn);
t.push(bN,this.$$store.init[name],bO);
t.push(bL,this.$$store.useinit[name],bm);
t.push(bF);
}else{t.push(bR,this.$$store.runtime[name],bO);
if(q===bH){t.push(bL,this.$$store.user[name],bM);
}else if(q===bV){t.push(bI,this.$$store.user[name],bO);
}else if(q===bG){t.push(bL,this.$$store.theme[name],bM);
}else if(q===bo){t.push(bI,this.$$store.theme[name],bO);
}else if(q===bs&&s){t.push(bL,this.$$store.init[name],bM);
}}t.push(bF);
t.push(bt,this.$$store.user[name],bn);

if(q===bH){if(!x.inheritable){t.push(bT,this.$$store.user[name],bO);
}t.push(bN,this.$$store.user[name],bM);
}else if(q===bV){if(!x.inheritable){t.push(bT,this.$$store.user[name],bO);
}t.push(bI,this.$$store.user[name],bO);
t.push(bK,this.$$store.runtime[name],bJ);
t.push(bN,this.$$store.runtime[name],bO);
t.push(bK,this.$$store.theme[name],bJ);
t.push(bN,this.$$store.theme[name],bO);
t.push(bt,this.$$store.init[name],bn);
t.push(bN,this.$$store.init[name],bO);
t.push(bL,this.$$store.useinit[name],bm);
t.push(bF);
}else{if(q===bu){t.push(bN,this.$$store.runtime[name],bM);
}else if(x.inheritable){t.push(bN,this.$$store.user[name],bO);
}else{t.push(bR,this.$$store.user[name],bO);
}if(q===bG){t.push(bL,this.$$store.theme[name],bM);
}else if(q===bo){t.push(bI,this.$$store.theme[name],bO);
}else if(q===bs&&s){t.push(bL,this.$$store.init[name],bM);
}}t.push(bF);
if(x.themeable){t.push(bt,this.$$store.theme[name],bn);

if(!x.inheritable){t.push(bT,this.$$store.theme[name],bO);
}
if(q===bu){t.push(bN,this.$$store.runtime[name],bM);
}else if(q===bH){t.push(bN,this.$$store.user[name],bM);
}else if(q===bG){t.push(bN,this.$$store.theme[name],bM);
}else if(q===bo){t.push(bI,this.$$store.theme[name],bO);
t.push(bK,this.$$store.init[name],bn);
t.push(bN,this.$$store.init[name],bO);
t.push(bL,this.$$store.useinit[name],bm);
t.push(bF);
}else if(q===bs){if(s){t.push(bL,this.$$store.init[name],bM);
}t.push(bN,this.$$store.theme[name],bO);
}else if(q===bW){t.push(bN,this.$$store.theme[name],bO);
}t.push(bF);
}t.push(bt,this.$$store.useinit[name],ci);

if(!x.inheritable){t.push(bT,this.$$store.init[name],bO);
}
if(q===bs){if(s){t.push(bN,this.$$store.init[name],bM);
}else{t.push(bN,this.$$store.init[name],bO);
}}else if(q===bH||q===bu||q===bG||q===bW){t.push(bI,this.$$store.useinit[name],bO);

if(q===bu){t.push(bN,this.$$store.runtime[name],bM);
}else if(q===bH){t.push(bN,this.$$store.user[name],bM);
}else if(q===bG){t.push(bN,this.$$store.theme[name],bM);
}else if(q===bW){t.push(bN,this.$$store.init[name],bO);
}}t.push(bF);
if(q===bH||q===bu||q===bG||q===bs){t.push(bE);

if(q===bu){t.push(bN,this.$$store.runtime[name],bM);
}else if(q===bH){t.push(bN,this.$$store.user[name],bM);
}else if(q===bG){t.push(bN,this.$$store.theme[name],bM);
}else if(q===bs){if(s){t.push(bN,this.$$store.init[name],bM);
}else{t.push(bN,this.$$store.init[name],bO);
}t.push(bL,this.$$store.useinit[name],bm);
}t.push(bF);
}}
if(x.inheritable){t.push(X);

if(q===bW){t.push(ce);
}else{t.push(P,this.$$store.inherit[name],bO);
}t.push(be);
t.push(bL,this.$$store.init[name],S);
t.push(bL,this.$$store.init[name],Y);
t.push(bN,this.$$store.init[name],bO);
t.push(bL,this.$$store.useinit[name],bm);
t.push(L);
t.push(bI,this.$$store.useinit[name],cj);
t.push(bF);
t.push(bP);
t.push(z);
t.push(cg,this.$$store.inherit[name],bO);
t.push(bF);
t.push(D);
t.push(bI,this.$$store.inherit[name],bO);
t.push(I,this.$$store.inherit[name],bw);
t.push(M);
t.push(bQ);
t.push(bk);
}else if(v){if(q!==bH&&q!==bu&&q!==bG){t.push(N);
}t.push(bP);
t.push(bQ);
}if(v){if(x.apply){t.push(bL,x.apply,V,name,Q);
}if(x.event){t.push(T,bd,x.event,H,bf,x.event,R,bh);
}if(x.inheritable&&w._getChildren){t.push(bC);
t.push(K,this.$$method.refresh[name],ba,this.$$method.refresh[name],bv);
t.push(bF);
}}if(s){t.push(W);
}return this.__M(o,w,name,q,t,r);
}},settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var z="$$hash",y="qx.core.ObjectRegistry";
qx.Bootstrap.define(y,{statics:{inShutDown:false,__N:{},__O:0,__P:[],register:function(c){var f=this.__N;

if(!f){return;
}var e=c.$$hash;

if(e==null){var d=this.__P;

if(d.length>0){e=d.pop();
}else{e=(this.__O++).toString(36);
}c.$$hash=e;
}{};
f[e]=c;
},unregister:function(q){var r=q.$$hash;

if(r==null){return;
}var s=this.__N;

if(s&&s[r]){delete s[r];
this.__P.push(r);
}try{delete q.$$hash;
}catch(g){if(q.removeAttribute){q.removeAttribute(z);
}}},toHashCode:function(h){{};
var k=h.$$hash;

if(k!=null){return k;
}var j=this.__P;

if(j.length>0){k=j.pop();
}else{k=(this.__O++).toString(36);
}return h.$$hash=k;
},clearHashCode:function(o){{};
var p=o.$$hash;

if(p!=null){this.__P.push(p);
try{delete o.$$hash;
}catch(m){if(o.removeAttribute){o.removeAttribute(z);
}}}},fromHashCode:function(n){return this.__N[n]||null;
},shutdown:function(){this.inShutDown=true;
var u=this.__N;
var w=[];

for(var v in u){w.push(v);
}w.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var t,i=0,l=w.length;

while(true){try{for(;i<l;i++){v=w[i];
t=u[v];

if(t&&t.dispose){t.dispose();
}}}catch(x){qx.log.Logger.error(this,"Could not dispose object "+t.toString()+": "+x);

if(i!==0){continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__N;
},getRegistry:function(){return this.__N;
}}});
})();
(function(){var v="qx.Mixin",u="]",t="Mixin",s="[Mixin ";
qx.Class.define(v,{statics:{define:function(name,f){if(f){if(f.include&&!(f.include instanceof Array)){f.include=[f.include];
}{};
var h=f.statics?f.statics:{};

for(var g in h){if(h[g] instanceof Function){h[g].$$mixin=h;
}}if(f.construct){h.$$constructor=f.construct;
}
if(f.include){h.$$includes=f.include;
}
if(f.properties){h.$$properties=f.properties;
}
if(f.members){h.$$members=f.members;
}
for(var g in h.$$members){if(h.$$members[g] instanceof Function){h.$$members[g].$$mixin=h;
}}
if(f.events){h.$$events=f.events;
}
if(f.destruct){h.$$destructor=f.destruct;
}}else{var h={};
}h.$$type=t;
h.name=name;
h.toString=this.genericToString;
h.basename=qx.Bootstrap.createNamespace(name,h);
this.$$registry[name]=h;
return h;
},checkCompatibility:function(j){var n=this.flatten(j);
var o=n.length;

if(o<2){return true;
}var r={};
var q={};
var p={};
var m;

for(var i=0;i<o;i++){m=n[i];

for(var k in m.events){if(p[k]){throw new Error('Conflict between mixin "'+m.name+'" and "'+p[k]+'" in member "'+k+'"!');
}p[k]=m.name;
}
for(var k in m.properties){if(r[k]){throw new Error('Conflict between mixin "'+m.name+'" and "'+r[k]+'" in property "'+k+'"!');
}r[k]=m.name;
}
for(var k in m.members){if(q[k]){throw new Error('Conflict between mixin "'+m.name+'" and "'+q[k]+'" in member "'+k+'"!');
}q[k]=m.name;
}}return true;
},isCompatible:function(a,b){var c=qx.Class.getMixins(b);
c.push(a);
return qx.Mixin.checkCompatibility(c);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(d){if(!d){return [];
}var e=d.concat();

for(var i=0,l=d.length;i<l;i++){if(d[i].$$includes){e.push.apply(e,this.flatten(d[i].$$includes));
}}return e;
},genericToString:function(){return s+this.name+u;
},$$registry:{},__Q:null,__R:function(){}}});
})();
(function(){var e="qx.data.MBinding";
qx.Mixin.define(e,{members:{bind:function(a,b,c,d){return qx.data.SingleValueBinding.bind(this,a,b,c,d);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var q="qx.client",p="on",o="qx.bom.Event",n="mousedown",m="mouseover";
qx.Bootstrap.define(o,{statics:{addNativeListener:qx.core.Variant.select(q,{"mshtml":function(a,b,c){a.attachEvent(p+b,c);
},"default":function(r,s,t){r.addEventListener(s,t,false);
}}),removeNativeListener:qx.core.Variant.select(q,{"mshtml":function(d,f,g){d.detachEvent(p+f,g);
},"default":function(i,j,k){i.removeEventListener(j,k,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(q,{"mshtml":function(e){if(e.type===m){return e.fromEvent;
}else{return e.toElement;
}},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(q,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==n&&e.button==2){return;
}e.preventDefault();

try{e.keyCode=0;
}catch(l){}},"mshtml":function(e){try{e.keyCode=0;
}catch(h){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
}}});
})();
(function(){var bT="|bubble",bS="|capture",bR="|",bQ="_",bP="unload",bO="UNKNOWN_",bN="DOM_",bM="c",bL="WIN_",bK="capture",bI="qx.event.Manager",bJ="QX_";
qx.Bootstrap.define(bI,{construct:function(a){this.__S=a;
this.__T=qx.lang.Function.bind(this.dispose,this);
qx.bom.Event.addNativeListener(a,bP,this.__T);
this.__U={};
this.__V={};
this.__W={};
this.__X={};
},statics:{__Y:0,getNextUniqueId:function(){return (this.__Y++).toString(36);
}},members:{dispose:function(){qx.bom.Event.removeNativeListener(this.__S,bP,this.__T);
qx.event.Registration.removeManager(this);
this.__U=this.__S=this.__V=this.__W=this.__T=this.__X=null;
},getWindow:function(){return this.__S;
},getHandler:function(W){var X=this.__V[W.classname];

if(X){return X;
}return this.__V[W.classname]=new W(this);
},getDispatcher:function(cv){var cw=this.__W[cv.classname];

if(cw){return cw;
}return this.__W[cv.classname]=new cv(this);
},getListeners:function(ce,cf,cg){var ch=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cj=this.__U[ch];

if(!cj){return null;
}var ck=cf+(cg?bS:bT);
var ci=cj[ck];
return ci?ci.concat():null;
},serializeListeners:function(cl){var cs=cl.$$hash||qx.core.ObjectRegistry.toHashCode(cl);
var cu=this.__U[cs];
var cq=[];

if(cu){var co,ct,cm,cp,cr;

for(var cn in cu){co=cn.indexOf(bR);
ct=cn.substring(0,co);
cm=cn.charAt(co+1)==bM;
cp=cu[cn];

for(var i=0,l=cp.length;i<l;i++){cr=cp[i];
cq.push({self:cr.context,handler:cr.handler,type:ct,capture:cm});
}}}return cq;
},toggleAttachedEvents:function(bU,bV){var cb=bU.$$hash||qx.core.ObjectRegistry.toHashCode(bU);
var cd=this.__U[cb];

if(cd){var bX,cc,bW,bY;

for(var ca in cd){bX=ca.indexOf(bR);
cc=ca.substring(0,bX);
bW=ca.charCodeAt(bX+1)===99;
bY=cd[ca];

if(bV){this.__ba(bU,cc,bW);
}else{this.__bb(bU,cc,bW);
}}}},hasListener:function(bk,bl,bm){{};
var bn=bk.$$hash||qx.core.ObjectRegistry.toHashCode(bk);
var bp=this.__U[bn];

if(!bp){return false;
}var bq=bl+(bm?bS:bT);
var bo=bp[bq];
return bo&&bo.length>0;
},importListeners:function(u,v){{};
var B=u.$$hash||qx.core.ObjectRegistry.toHashCode(u);
var C=this.__U[B]={};
var y=qx.event.Manager;

for(var w in v){var z=v[w];
var A=z.type+(z.capture?bS:bT);
var x=C[A];

if(!x){x=C[A]=[];
this.__ba(u,z.type,z.capture);
}x.push({handler:z.listener,context:z.self,unique:z.unique||(y.__Y++).toString(36)});
}},addListener:function(Y,ba,bb,self,bc){var bg;
var bh=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var bj=this.__U[bh];

if(!bj){bj=this.__U[bh]={};
}var bf=ba+(bc?bS:bT);
var be=bj[bf];

if(!be){be=bj[bf]=[];
}if(be.length===0){this.__ba(Y,ba,bc);
}var bi=(qx.event.Manager.__Y++).toString(36);
var bd={handler:bb,context:self,unique:bi};
be.push(bd);
return bf+bR+bi;
},findHandler:function(bv,bw){var bG=false,bz=false,bH=false;
var bF;

if(bv.nodeType===1){bG=true;
bF=bN+bv.tagName.toLowerCase()+bQ+bw;
}else if(bv==this.__S){bz=true;
bF=bL+bw;
}else if(bv.classname){bH=true;
bF=bJ+bv.classname+bQ+bw;
}else{bF=bO+bv+bQ+bw;
}var bB=this.__X;

if(bB[bF]){return bB[bF];
}var bE=qx.event.Registration.getHandlers();
var bA=qx.event.IEventHandler;
var bC,bD,by,bx;

for(var i=0,l=bE.length;i<l;i++){bC=bE[i];
by=bC.SUPPORTED_TYPES;

if(by&&!by[bw]){continue;
}bx=bC.TARGET_CHECK;

if(bx){if(!bG&&bx===bA.TARGET_DOMNODE){continue;
}else if(!bz&&bx===bA.TARGET_WINDOW){continue;
}else if(!bH&&bx===bA.TARGET_OBJECT){continue;
}}bD=this.getHandler(bE[i]);

if(bC.IGNORE_CAN_HANDLE||bD.canHandleEvent(bv,bw)){bB[bF]=bD;
return bD;
}}return null;
},__ba:function(br,bs,bt){var bu=this.findHandler(br,bs);

if(bu){bu.registerEvent(br,bs,bt);
return;
}{};
},removeListener:function(b,c,d,self,e){var j;
var k=b.$$hash||qx.core.ObjectRegistry.toHashCode(b);
var m=this.__U[k];

if(!m){return false;
}var f=c+(e?bS:bT);
var g=m[f];

if(!g){return false;
}var h;

for(var i=0,l=g.length;i<l;i++){h=g[i];

if(h.handler===d&&h.context===self){qx.lang.Array.removeAt(g,i);

if(g.length==0){this.__bb(b,c,e);
}return true;
}}return false;
},removeListenerById:function(D,E){var K;
var I=E.split(bR);
var N=I[0];
var F=I[1].charCodeAt(0)==99;
var M=I[2];
var L=D.$$hash||qx.core.ObjectRegistry.toHashCode(D);
var O=this.__U[L];

if(!O){return false;
}var J=N+(F?bS:bT);
var H=O[J];

if(!H){return false;
}var G;

for(var i=0,l=H.length;i<l;i++){G=H[i];

if(G.unique===M){qx.lang.Array.removeAt(H,i);

if(H.length==0){this.__bb(D,N,F);
}return true;
}}return false;
},removeAllListeners:function(n){var r=n.$$hash||qx.core.ObjectRegistry.toHashCode(n);
var t=this.__U[r];

if(!t){return false;
}var p,s,o;

for(var q in t){if(t[q].length>0){p=q.split(bR);
s=p[0];
o=p[1]===bK;
this.__bb(n,s,o);
}}delete this.__U[r];
return true;
},__bb:function(cx,cy,cz){var cA=this.findHandler(cx,cy);

if(cA){cA.unregisterEvent(cx,cy,cz);
return;
}{};
},dispatchEvent:function(P,event){var U;
var V=event.getType();

if(!event.getBubbles()&&!this.hasListener(P,V)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(P);
}var T=qx.event.Registration.getDispatchers();
var S;
var R=false;

for(var i=0,l=T.length;i<l;i++){S=this.getDispatcher(T[i]);
if(S.canDispatchEvent(P,event,V)){S.dispatchEvent(P,event,V);
R=true;
break;
}}
if(!R){qx.log.Logger.error(this,"No dispatcher can handle event of type "+V+" on "+P);
return true;
}var Q=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !Q;
}}});
})();
(function(){var o="qx.dom.Node",n="qx.client",m="";
qx.Class.define(o,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(q){return q.nodeType===
this.DOCUMENT?q:
q.ownerDocument||q.document;
},getWindow:qx.core.Variant.select(n,{"mshtml":function(c){if(c.nodeType==null){return c;
}if(c.nodeType!==this.DOCUMENT){c=c.ownerDocument;
}return c.parentWindow;
},"default":function(b){if(b.nodeType==null){return b;
}if(b.nodeType!==this.DOCUMENT){b=b.ownerDocument;
}return b.defaultView;
}}),getDocumentElement:function(l){return this.getDocument(l).documentElement;
},getBodyElement:function(k){return this.getDocument(k).body;
},isNode:function(j){return !!(j&&j.nodeType!=null);
},isElement:function(p){return !!(p&&p.nodeType===this.ELEMENT);
},isDocument:function(g){return !!(g&&g.nodeType===this.DOCUMENT);
},isText:function(h){return !!(h&&h.nodeType===this.TEXT);
},isWindow:function(d){return !!(d&&d.history&&d.location&&d.document);
},getText:function(e){if(!e||!e.nodeType){return null;
}
switch(e.nodeType){case 1:var i,a=[],f=e.childNodes,length=f.length;

for(i=0;i<length;i++){a[i]=this.getText(f[i]);
}return a.join(m);
case 2:return e.nodeValue;
break;
case 3:return e.nodeValue;
break;
}return null;
}}});
})();
(function(){var bw="mshtml",bv="[object Array]",bu="qx.client",bt="qx.lang.Array",bs="qx",br="number",bq="Use the native Array access instead: arr[arr.length - 1]",bp="Use the native Array access instead: arr[0]",bo="string",bn="Use 'clone()' instead!";
qx.Bootstrap.define(bt,{statics:{isArray:function(bx){return Object.prototype.toString.call(bx)===bv||bx instanceof Array;
},toArray:function(n,o){return this.cast(n,Array,o);
},cast:function(C,D,E){if(C.constructor===D){return C;
}
if(qx.Class.hasInterface(C,qx.data.IListData)){var C=C.toArray();
}var F=new D;
if(qx.core.Variant.isSet(bu,bw)){if(C.item){for(var i=E||0,l=C.length;i<l;i++){F.push(C[i]);
}return F;
}}if(Object.prototype.toString.call(C)===bv&&E==null){F.push.apply(F,C);
}else{F.push.apply(F,Array.prototype.slice.call(C,E||0));
}return F;
},fromArguments:function(M,N){return Array.prototype.slice.call(M,N||0);
},fromCollection:function(bl){if(qx.core.Variant.isSet(bu,bw)){if(bl.item){var bm=[];

for(var i=0,l=bl.length;i<l;i++){bm[i]=bl[i];
}return bm;
}}return Array.prototype.slice.call(bl,0);
},fromShortHand:function(S){var U=S.length;
var T=qx.lang.Array.clone(S);
switch(U){case 1:T[1]=T[2]=T[3]=T[0];
break;
case 2:T[2]=T[0];
case 3:T[3]=T[1];
}return T;
},copy:function(B){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bn);
return qx.lang.Array.clone(B);
},clone:function(e){return e.concat();
},getLast:function(R){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bq);
return R[R.length-1];
},getFirst:function(W){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bp);
return W[0];
},insertAt:function(f,g,i){f.splice(i,0,g);
return f;
},insertBefore:function(t,u,v){var i=t.indexOf(v);

if(i==-1){t.push(u);
}else{t.splice(i,0,u);
}return t;
},insertAfter:function(G,H,I){var i=G.indexOf(I);

if(i==-1||i==(G.length-1)){G.push(H);
}else{G.splice(i+1,0,H);
}return G;
},removeAt:function(p,i){return p.splice(i,1)[0];
},removeAll:function(V){V.length=0;
return this;
},append:function(k,m){{};
Array.prototype.push.apply(k,m);
return k;
},exclude:function(w,x){{};

for(var i=0,z=x.length,y;i<z;i++){y=w.indexOf(x[i]);

if(y!=-1){w.splice(y,1);
}}return w;
},remove:function(c,d){var i=c.indexOf(d);

if(i!=-1){c.splice(i,1);
return d;
}},contains:function(h,j){return h.indexOf(j)!==-1;
},equals:function(a,b){var length=a.length;

if(length!==b.length){return false;
}
for(var i=0;i<length;i++){if(a[i]!==b[i]){return false;
}}return true;
},sum:function(K){var L=0;

for(var i=0,l=K.length;i<l;i++){L+=K[i];
}return L;
},max:function(O){{};
var i,Q=O.length,P=O[0];

for(i=1;i<Q;i++){if(O[i]>P){P=O[i];
}}return P===undefined?null:P;
},min:function(q){{};
var i,s=q.length,r=q[0];

for(i=1;i<s;i++){if(q[i]<r){r=q[i];
}}return r===undefined?null:r;
},unique:function(X){var bi=[],ba={},bd={},bf={};
var be,Y=0;
var bj=bs+qx.lang.Date.now();
var bb=false,bh=false,bk=false;
for(var i=0,bg=X.length;i<bg;i++){be=X[i];
if(be===null){if(!bb){bb=true;
bi.push(be);
}}else if(be===false){if(!bh){bh=true;
bi.push(be);
}}else if(be===true){if(!bk){bk=true;
bi.push(be);
}}else if(typeof be===bo){if(!ba[be]){ba[be]=1;
bi.push(be);
}}else if(typeof be===br){if(!bd[be]){bd[be]=1;
bi.push(be);
}}else{bc=be[bj];

if(bc==null){bc=be[bj]=Y++;
}
if(!bf[bc]){bf[bc]=be;
bi.push(be);
}}}for(var bc in bf){try{delete bf[bc][bj];
}catch(J){try{bf[bc][bj]=null;
}catch(A){throw new Error("Cannot clean-up map entry doneObjects["+bc+"]["+bj+"]");
}}}return bi;
}}});
})();
(function(){var C=":",B=":constructor",A='anonymous',z="anonymous: ",y="qx.lang.Function",x="[object Function]",w=":constructor wrapper";
qx.Bootstrap.define(y,{statics:{isFunction:function(o){return Object.prototype.toString.call(o)===x;
},getCaller:function(k){return k.caller?k.caller.callee:k.callee.caller;
},getName:function(s){if(s.$$original){return s.classname+w;
}
if(s.wrapper){return s.wrapper.classname+B;
}
if(s.classname){return s.classname+B;
}
if(s.$$mixin){for(var u in s.$$mixin.$$members){if(s.$$mixin.$$members[u]==s){return s.$$mixin.name+C+u;
}}for(var u in s.$$mixin){if(s.$$mixin[u]==s){return s.$$mixin.name+C+u;
}}}
if(s.self){var v=s.self.constructor;

if(v){for(var u in v.prototype){if(v.prototype[u]==s){return v.classname+C+u;
}}for(var u in v){if(v[u]==s){return v.classname+C+u;
}}}}var t=s.toString().match(/(function\s*\w*\(.*?\))/);

if(t&&t.length>=1&&t[1]){return t[1];
}var t=s.toString().match(/(function\s*\(.*?\))/);

if(t&&t.length>=1&&t[1]){return z+t[1];
}return A;
},globalEval:function(a){if(window.execScript){return window.execScript(a);
}else{return eval.call(window,a);
}},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(i,j){{};
if(!j){return i;
}if(!(j.self||j.args||j.delay!=null||j.periodical!=null||j.attempt)){return i;
}return function(event){var E=qx.lang.Array.fromArguments(arguments);
if(j.args){E=j.args.concat(E);
}
if(j.delay||j.periodical){var D=function(){return i.apply(j.self||this,E);
};

if(j.delay){return setTimeout(D,j.delay);
}
if(j.periodical){return setInterval(D,j.periodical);
}}else if(j.attempt){var F=false;

try{F=i.apply(j.self||this,E);
}catch(p){}return F;
}else{return i.apply(j.self||this,E);
}};
},bind:function(q,self,r){return this.create(q,{self:self,args:r!==undefined?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(g,h){return this.create(g,{args:h!==undefined?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(G,self,H){if(H===undefined){return function(event){return G.call(self||this,event||window.event);
};
}else{var I=qx.lang.Array.fromArguments(arguments,2);
return function(event){var J=[event||window.event];
J.push.apply(J,I);
G.apply(self||this,J);
};
}},attempt:function(b,self,c){return this.create(b,{self:self,attempt:true,args:c!==undefined?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(d,e,self,f){return this.create(d,{delay:e,self:self,args:f!==undefined?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(l,m,self,n){return this.create(l,{periodical:m,self:self,args:n!==undefined?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var v="qx.event.Registration";
qx.Bootstrap.define(v,{statics:{__bc:{},getManager:function(c){if(c==null){{};
c=window;
}else if(c.nodeType){c=qx.dom.Node.getWindow(c);
}else if(!qx.dom.Node.isWindow(c)){c=window;
}var e=c.$$hash||qx.core.ObjectRegistry.toHashCode(c);
var d=this.__bc[e];

if(!d){d=new qx.event.Manager(c);
this.__bc[e]=d;
}return d;
},removeManager:function(E){var F=qx.core.ObjectRegistry.toHashCode(E.getWindow());
delete this.__bc[F];
},addListener:function(q,r,s,self,t){return this.getManager(q).addListener(q,r,s,self,t);
},removeListener:function(A,B,C,self,D){return this.getManager(A).removeListener(A,B,C,self,D);
},removeListenerById:function(o,p){return this.getManager(o).removeListenerById(o,p);
},removeAllListeners:function(G){return this.getManager(G).removeAllListeners(G);
},hasListener:function(l,m,n){return this.getManager(l).hasListener(l,m,n);
},serializeListeners:function(u){return this.getManager(u).serializeListeners(u);
},createEvent:function(N,O,P){{};
if(O==null){O=qx.event.type.Event;
}var Q=qx.event.Pool.getInstance().getObject(O);

if(!Q){return;
}P?Q.init.apply(Q,P):Q.init();
if(N){Q.setType(N);
}return Q;
},dispatchEvent:function(w,event){return this.getManager(w).dispatchEvent(w,event);
},fireEvent:function(H,I,J,K){var L;
var M=this.createEvent(I,J||null,K);
return this.getManager(H).dispatchEvent(H,M);
},fireNonBubblingEvent:function(f,g,h,i){{};
var j=this.getManager(f);

if(!j.hasListener(f,g,false)){return true;
}var k=this.createEvent(g,h||null,i);
return j.dispatchEvent(f,k);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bd:[],addHandler:function(x){{};
this.__bd.push(x);
this.__bd.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bd;
},__be:[],addDispatcher:function(y,z){{};
this.__be.push(y);
this.__be.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__be;
}}});
})();
(function(){var m="node",k="error",j="...(+",h="array",g=")",f="info",e="instance",d="string",c="null",b="class",H="number",G="stringify",F="]",E="unknown",D="function",C="boolean",B="debug",A="map",z="undefined",y="qx.log.Logger",t=")}",u="#",r="warn",s="document",p="{...(",q="[",n="text[",o="[...(",v="\n",w=")]",x="object";
qx.Bootstrap.define(y,{statics:{__bf:50,__bg:B,setLevel:function(a){this.__bg=a;
},getLevel:function(){return this.__bg;
},setTreshold:function(R){this.__bf=R;
},getTreshold:function(){return this.__bf;
},__bh:{},__bi:0,register:function(ba){if(ba.$$id){return;
}var bc=this.__bi++;
this.__bh[bc]=ba;
ba.$$id=bc;
var bb=this.__bj;

for(var i=0,l=bb.length;i<l;i++){ba.process(bb[i]);
}},unregister:function(bo){var bp=bo.$$id;

if(bp==null){return;
}delete this.__bh[bp];
delete bo.$$id;
},debug:function(bq,br){this.__bl(B,arguments);
},info:function(X,Y){this.__bl(f,arguments);
},warn:function(V,W){this.__bl(r,arguments);
},error:function(T,U){this.__bl(k,arguments);
},trace:function(S){this.__bl(f,[S,qx.dev.StackTrace.getStackTrace().join(v)]);
},deprecatedMethodWarning:function(I,J){var L,K;
},deprecatedClassWarning:function(O,P){var Q;
},clear:function(){this.__bj=[];
},__bj:[],__bk:{debug:0,info:1,warn:2,error:3},__bl:function(bd,be){var bj=this.__bk;

if(bj[bd]<bj[this.__bg]){return;
}var bg=be.length<2?null:be[0];
var bi=bg?1:0;
var bf=[];

for(var i=bi,l=be.length;i<l;i++){bf.push(this.__bn(be[i],true));
}var bl=new Date;
var bm={time:bl,offset:bl-qx.Bootstrap.LOADSTART,level:bd,items:bf,win:window};
if(bg){if(bg instanceof qx.core.Object){bm.object=bg.$$hash;
}else if(bg.$$type){bm.clazz=bg;
}}var bk=this.__bj;
bk.push(bm);

if(bk.length>(this.__bf+10)){bk.splice(this.__bf,bk.length);
}var bn=this.__bh;

for(var bh in bn){bn[bh].process(bm);
}},__bm:function(M){if(M===undefined){return z;
}else if(M===null){return c;
}
if(M.$$type){return b;
}var N=typeof M;

if(N===D||N==d||N===H||N===C){return N;
}else if(N===x){if(M.nodeType){return m;
}else if(M.classname){return e;
}else if(M instanceof Array){return h;
}else if(M instanceof Error){return k;
}else{return A;
}}
if(M.toString){return G;
}return E;
},__bn:function(bs,bt){var bz=this.__bm(bs);
var bv=E;

switch(bz){case c:case z:bv=bz;
break;
case d:case H:case C:bv=bs;
break;
case m:if(bs.nodeType===9){bv=s;
}else if(bs.nodeType===3){bv=n+bs.nodeValue+F;
}else if(bs.nodeType===1){bv=bs.nodeName.toLowerCase();

if(bs.id){bv+=u+bs.id;
}}else{bv=m;
}break;
case D:bv=qx.lang.Function.getName(bs)||bz;
break;
case e:bv=bs.basename+q+bs.$$hash+F;
break;
case b:case G:case k:bv=bs.toString();
break;
case h:if(bt){bv=[];

for(var i=0,l=bs.length;i<l;i++){if(bv.length>20){bv.push(j+(l-i)+g);
break;
}bv.push(this.__bn(bs[i],false));
}}else{bv=o+bs.length+w;
}break;
case A:if(bt){var bu;
var by=[];

for(var bx in bs){by.push(bx);
}by.sort();
bv=[];

for(var i=0,l=by.length;i<l;i++){if(bv.length>20){bv.push(j+(l-i)+g);
break;
}bx=by[i];
bu=this.__bn(bs[bx],false);
bu.key=bx;
bv.push(bu);
}}else{var bw=0;

for(var bx in bs){bw++;
}bv=p+bw+t;
}break;
}return {type:bz,text:bv};
}}});
})();
(function(){var o="qx.core.Object",n="]",m="[",k="__bp",j="string",h="Object";
qx.Class.define(o,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:h},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+m+this.$$hash+n;
},base:function(bc,bd){if(arguments.length===1){return bc.callee.base.call(this);
}else{return bc.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(g){return g.callee.self;
},clone:function(){var G=this.constructor;
var F=new G;
var I=qx.Class.getProperties(G);
var H=qx.core.Property.$$store.user;
var J=qx.core.Property.$$method.set;
var name;
for(var i=0,l=I.length;i<l;i++){name=I[i];

if(this.hasOwnProperty(H[name])){F[J[name]](this[H[name]]);
}}return F;
},serialize:function(){var B=this.constructor;
var D=qx.Class.getProperties(B);
var E=qx.core.Property.$$store.user;
var name,A;
var C={classname:B.classname,properties:{}};
for(var i=0,l=D.length;i<l;i++){name=D[i];

if(this.hasOwnProperty(E[name])){A=this[E[name]];

if(A instanceof qx.core.Object){C.properties[name]={$$hash:A.$$hash};
}else{C.properties[name]=A;
}}}return C;
},set:function(a,b){var d=qx.core.Property.$$method.set;

if(typeof a===j){{};
return this[d[a]](b);
}else{for(var c in a){{};
this[d[c]](a[c]);
}return this;
}},get:function(bf){var bg=qx.core.Property.$$method.get;
{};
return this[bg[bf]]();
},reset:function(bn){var bo=qx.core.Property.$$method.reset;
{};
this[bo[bn]]();
},__bo:qx.event.Registration,addListener:function(K,L,self,M){if(!this.$$disposed){return this.__bo.addListener(this,K,L,self,M);
}return null;
},addListenerOnce:function(q,r,self,s){var t=function(e){r.call(self||this,e);
this.removeListener(q,t,this,s);
};
return this.addListener(q,t,this,s);
},removeListener:function(W,X,self,Y){if(!this.$$disposed){return this.__bo.removeListener(this,W,X,self,Y);
}return false;
},removeListenerById:function(bl){if(!this.$$disposed){return this.__bo.removeListenerById(this,bl);
}return false;
},hasListener:function(bu,bv){return this.__bo.hasListener(this,bu,bv);
},dispatchEvent:function(bB){if(!this.$$disposed){return this.__bo.dispatchEvent(this,bB);
}return true;
},fireEvent:function(u,v,w){if(!this.$$disposed){return this.__bo.fireEvent(this,u,v,w);
}return true;
},fireNonBubblingEvent:function(x,y,z){if(!this.$$disposed){return this.__bo.fireNonBubblingEvent(this,x,y,z);
}return true;
},fireDataEvent:function(bw,bx,by,bz){if(!this.$$disposed){return this.__bo.fireNonBubblingEvent(this,bw,qx.event.type.Data,[bx,by||null,!!bz]);
}return true;
},__bp:null,setUserData:function(ba,bb){if(!this.__bp){this.__bp={};
}this.__bp[ba]=bb;
},getUserData:function(br){if(!this.__bp){return null;
}var bs=this.__bp[br];
return bs===undefined?null:bs;
},__bq:qx.log.Logger,debug:function(N){this.__bq.debug(this,N);
},info:function(bq){this.__bq.info(this,bq);
},warn:function(f){this.__bq.warn(this,f);
},error:function(bm){this.__bq.error(this,bm);
},trace:function(){this.__bq.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
{};
var bj=this.constructor;
var bh;

while(bj.superclass){if(bj.$$destructor){bj.$$destructor.call(this);
}if(bj.$$includes){bh=bj.$$flatIncludes;

for(var i=0,l=bh.length;i<l;i++){if(bh[i].$$destructor){bh[i].$$destructor.call(this);
}}}bj=bj.superclass;
}var bk,bi;
},_disposeFields:function(be){qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bA){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(p){qx.util.DisposeUtil.disposeArray(this,p);
},_disposeMap:function(bp){qx.util.DisposeUtil.disposeMap(this,bp);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bt){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(k);
var Q=this.constructor;
var U;
var V=qx.core.Property.$$store;
var S=V.user;
var T=V.theme;
var O=V.inherit;
var R=V.useinit;
var P=V.init;

while(Q){U=Q.$$properties;

if(U){for(var name in U){if(U[name].dispose){this[S[name]]=this[T[name]]=this[O[name]]=this[R[name]]=this[P[name]]=undefined;
}}}Q=Q.superclass;
}}});
})();
(function(){var z="",y="g",x="0",w='\\$1',v="%",u='-',t="qx.lang.String",s=' ',r='\n',q="undefined";
qx.Bootstrap.define(t,{statics:{camelCase:function(K){return K.replace(/\-([a-z])/g,function(E,F){return F.toUpperCase();
});
},hyphenate:function(h){return h.replace(/[A-Z]/g,function(k){return (u+k.charAt(0).toLowerCase());
});
},capitalize:function(g){return g.replace(/\b[a-z]/g,function(m){return m.toUpperCase();
});
},clean:function(j){return j.replace(/\s+/g,s).trim();
},trimLeft:function(A){return A.replace(/^\s+/,z);
},trimRight:function(G){return G.replace(/\s+$/,z);
},trim:function(Q){return Q.replace(/^\s+|\s+$/g,z);
},startsWith:function(H,I){return H.substring(0,I.length)===I;
},endsWith:function(a,b){return a.substring(a.length-b.length,a.length)===b;
},pad:function(L,length,M){if(typeof M===q){M=x;
}var N=z;

for(var i=L.length;i<length;i++){N+=M;
}return N+L;
},firstUp:function(p){return p.charAt(0).toUpperCase()+p.substr(1);
},firstLow:function(J){return J.charAt(0).toLowerCase()+J.substr(1);
},contains:function(n,o){return n.indexOf(o)!=-1;
},format:function(B,C){var D=B;

for(var i=0;i<C.length;i++){D=D.replace(new RegExp(v+(i+1),y),C[i]);
}return D;
},escapeRegexpChars:function(O){return O.replace(/([.*+?^${}()|[\]\/\\])/g,w);
},toArray:function(P){return P.split(/\B|\b/g);
},stripTags:function(l){return l.replace(/<\/?[^>]+>/gi,z);
},stripScripts:function(c,d){var f=z;
var e=c.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){f+=arguments[1]+r;
return z;
});

if(d===true){qx.lang.Function.globalEval(f);
}return e;
}}});
})();
(function(){var e="function",d="]",c="Interface",b="[Interface ",a="qx.Interface";
qx.Class.define(a,{statics:{define:function(name,z){if(z){if(z.extend&&!(z.extend instanceof Array)){z.extend=[z.extend];
}{};
var A=z.statics?z.statics:{};
if(z.extend){A.$$extends=z.extend;
}
if(z.properties){A.$$properties=z.properties;
}
if(z.members){A.$$members=z.members;
}
if(z.events){A.$$events=z.events;
}}else{var A={};
}A.$$type=c;
A.name=name;
A.toString=this.genericToString;
A.basename=qx.Bootstrap.createNamespace(name,A);
qx.Interface.$$registry[name]=A;
return A;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(B){if(!B){return [];
}var C=B.concat();

for(var i=0,l=B.length;i<l;i++){if(B[i].$$extends){C.push.apply(C,this.flatten(B[i].$$extends));
}}return C;
},__br:function(k,m,n,o){var r=n.$$members;

if(r){for(var q in r){if(typeof r[q]===e){if(typeof k[q]===e){if(o===true&&!qx.Class.hasInterface(m,n)){k[q]=this.__bu(n,k[q],q,r[q]);
}}else{var p=q.match(/^(get|set|reset)(.*)$/);

if(!p||!qx.Class.hasProperty(m,qx.lang.String.firstLow(p[2]))){throw new Error('Implementation of method "'+q+'" is missing in class "'+m.classname+'" required by interface "'+n.name+'"');
}}}else{if(typeof k[q]===undefined){if(typeof k[q]!==e){throw new Error('Implementation of member "'+q+'" is missing in class "'+m.classname+'" required by interface "'+n.name+'"');
}}}}}},__bs:function(s,t){if(t.$$properties){for(var u in t.$$properties){if(!qx.Class.hasProperty(s,u)){throw new Error('The property "'+u+'" is not supported by Class "'+s.classname+'"!');
}}}},__bt:function(D,E){if(E.$$events){for(var F in E.$$events){if(!qx.Class.supportsEvent(D,F)){throw new Error('The event "'+F+'" is not supported by Class "'+D.classname+'"!');
}}}},assertObject:function(v,w){var y=v.constructor;
this.__br(v,y,w,false);
this.__bs(y,w);
this.__bt(y,w);
var x=w.$$extends;

if(x){for(var i=0,l=x.length;i<l;i++){this.assertObject(v,x[i]);
}}},assert:function(f,g,h){this.__br(f.prototype,f,g,h);
this.__bs(f,g);
this.__bt(f,g);
var j=g.$$extends;

if(j){for(var i=0,l=j.length;i<l;i++){this.assert(f,j[i],h);
}}},genericToString:function(){return b+this.name+d;
},$$registry:{},__bu:function(){},__bv:null,__bw:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var p="_applyStyle",o="repeat",n="px",m="scale",l="solid",k="Color",j="double",i="px ",h="position:absolute;top:0;left:0;",g="dotted",D="__bx",C="_applyWidth",B="qx.ui.decoration.Uniform",A="repeat-y",z="String",y="",x="PositiveInteger",w="border:",v="dashed",u="__by",s="no-repeat",t=" ",q="repeat-x",r=";";
qx.Class.define(B,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(L,M,N){arguments.callee.base.call(this);
if(L!=null){this.setWidth(L);
}
if(M!=null){this.setStyle(M);
}
if(N!=null){this.setColor(N);
}},properties:{width:{check:x,init:0,apply:C},style:{nullable:true,check:[l,g,v,j],init:l,apply:p},color:{nullable:true,check:k,apply:p},backgroundImage:{check:z,nullable:true,apply:p},backgroundRepeat:{check:[o,q,A,s,m],init:o,apply:p},backgroundColor:{check:k,nullable:true,apply:p}},members:{__bx:null,__by:null,getMarkup:function(){if(this.__bx){return this.__bx;
}var E=h;
var F=this.getWidth();
{};
var H=qx.theme.manager.Color.getInstance();
E+=w+F+i+this.getStyle()+t+H.resolve(this.getColor())+r;
var G=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,E);
return this.__bx=G;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==m;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getWidth()*2;
b-=d;
c-=d;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+n;
a.style.height=c+n;
},tint:function(I,J){var K=qx.theme.manager.Color.getInstance();

if(J==null){J=this.getBackgroundColor();
}I.style.backgroundColor=K.resolve(J)||y;
},getInsets:function(){if(this.__by){return this.__by;
}var f=this.getWidth();
this.__by={top:f,right:f,bottom:f,left:f};
return this.__by;
},_applyWidth:function(){{};
this.__by=null;
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(D,u);
}});
})();
(function(){var r="_applyStyle",q="repeat",p="px",o="position:absolute;top:0;left:0",n="qx.ui.decoration.Background",m="",l="scale",k="backgroundPositionY",j="no-repeat",i="repeat-x",f="repeat-y",h="backgroundPositionX",g="Color",e="String";
qx.Class.define(n,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(s){arguments.callee.base.call(this);

if(s!=null){this.setBackgroundColor(s);
}},properties:{backgroundImage:{check:e,nullable:true,apply:r},backgroundRepeat:{check:[q,i,f,j,l],init:q,apply:r},backgroundColor:{check:g,nullable:true,apply:r},backgroundPositionX:{nullable:true,apply:r},backgroundPositionY:{nullable:true,apply:r},backgroundPosition:{group:[k,h]}},members:{__bz:null,getMarkup:function(){if(this.__bz){return this.__bz;
}var a=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),this.getBackgroundPositionX(),this.getBackgroundPositionY(),o);
return this.__bz=a;
},resize:function(t,u,v){t.style.width=u+p;
t.style.height=v+p;
},tint:function(b,c){var d=qx.theme.manager.Color.getInstance();

if(c==null){c=this.getBackgroundColor();
}b.style.backgroundColor=d.resolve(c)||m;
},__bA:{top:0,right:0,bottom:0,left:0},getInsets:function(){return this.__bA;
},_applyStyle:function(){{};
}}});
})();
(function(){var C="px",B="0px",A="-1px",z="_applyInsets",y="Number",x="no-repeat",w="scale-x",v="scale-y",u="-tr",t="-l",bc="insetTop",bb='</div>',ba="insetBottom",Y="scale",X="qx.client",W="-br",V="-t",U="-tl",T="-r",S='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',J="_applyBaseImage",K="-b",H="__bD",I="shorthand",F="String",G="insetRight",D="",E="-bl",L="__bC",M="__bE",O="-c",N="mshtml",Q="insetLeft",P="__bB",R="qx.ui.decoration.Grid";
qx.Class.define(R,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(bd,be){arguments.callee.base.call(this);
if(bd!=null){this.setBaseImage(bd);
}
if(be!=null){this.setInsets(be);
}},properties:{baseImage:{check:F,nullable:true,apply:J},insetLeft:{check:y,init:0,apply:z},insetRight:{check:y,init:0,apply:z},insetBottom:{check:y,init:0,apply:z},insetTop:{check:y,init:0,apply:z},insets:{group:[bc,G,ba,Q],mode:I}},members:{__bB:null,__bC:null,__bD:null,__bE:null,getMarkup:function(){if(this.__bB){return this.__bB;
}var p=qx.bom.element.Decoration;
var q=this.__bD;
var r=this.__bE;
var s=[];
s.push(S);
s.push(p.create(q.tl,x,{top:0,left:0}));
s.push(p.create(q.t,w,{top:0,left:r.left+C}));
s.push(p.create(q.tr,x,{top:0,right:0}));
s.push(p.create(q.bl,x,{bottom:0,left:0}));
s.push(p.create(q.b,w,{bottom:0,left:r.left+C}));
s.push(p.create(q.br,x,{bottom:0,right:0}));
s.push(p.create(q.l,v,{top:r.top+C,left:0}));
s.push(p.create(q.c,Y,{top:r.top+C,left:r.left+C}));
s.push(p.create(q.r,v,{top:r.top+C,right:0}));
s.push(bb);
return this.__bB=s.join(D);
},resize:function(a,b,c){var d=this.__bE;
var innerWidth=b-d.left-d.right;
var innerHeight=c-d.top-d.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}a.style.width=b+C;
a.style.height=c+C;
a.childNodes[1].style.width=innerWidth+C;
a.childNodes[4].style.width=innerWidth+C;
a.childNodes[7].style.width=innerWidth+C;
a.childNodes[6].style.height=innerHeight+C;
a.childNodes[7].style.height=innerHeight+C;
a.childNodes[8].style.height=innerHeight+C;

if(qx.core.Variant.isSet(X,N)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){if(b%2==1){a.childNodes[2].style.marginRight=A;
a.childNodes[5].style.marginRight=A;
a.childNodes[8].style.marginRight=A;
}else{a.childNodes[2].style.marginRight=B;
a.childNodes[5].style.marginRight=B;
a.childNodes[8].style.marginRight=B;
}
if(c%2==1){a.childNodes[3].style.marginBottom=A;
a.childNodes[4].style.marginBottom=A;
a.childNodes[5].style.marginBottom=A;
}else{a.childNodes[3].style.marginBottom=B;
a.childNodes[4].style.marginBottom=B;
a.childNodes[5].style.marginBottom=B;
}}}},tint:function(e,f){},getInsets:function(){if(this.__bC){return this.__bC;
}return this.__bC={left:this.getInsetLeft(),right:this.getInsetRight(),bottom:this.getInsetBottom(),top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__bC=null;
},_applyBaseImage:function(g,h){{};
var i=qx.util.ResourceManager;

if(g){var k=qx.util.AliasManager.getInstance();
var m=k.resolve(g);
var n=/(.*)(\.[a-z]+)$/.exec(m);
var l=n[1];
var j=n[2];
var o=this.__bD={tl:l+U+j,t:l+V+j,tr:l+u+j,bl:l+E+j,b:l+K+j,br:l+W+j,l:l+t+j,c:l+O+j,r:l+T+j};
this.__bE={top:i.getImageHeight(o.t),bottom:i.getImageHeight(o.b),left:i.getImageWidth(o.l),right:i.getImageWidth(o.r)};
}}},destruct:function(){this._disposeFields(P,L,H,M);
}});
})();
(function(){var u="_applyStyle",t="solid",s="Color",r="double",q="px ",p="dotted",o="_applyWidth",n="dashed",m="Number",l=" ",Y=";",X="shorthand",W="repeat",V="px",U="widthTop",T="scale",S="styleRight",R="styleBottom",Q="widthLeft",P="widthBottom",B="",C="styleTop",z="colorBottom",A="styleLeft",x="widthRight",y="colorLeft",v="colorRight",w="colorTop",D="border-left:",E="__bF",H="position:absolute;top:0;left:0;",G="repeat-y",J="String",I="border-bottom:",L="border-right:",K="qx.ui.decoration.Single",F="border-top:",O="__bG",N="no-repeat",M="repeat-x";
qx.Class.define(K,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{widthTop:{check:m,init:0,apply:o},widthRight:{check:m,init:0,apply:o},widthBottom:{check:m,init:0,apply:o},widthLeft:{check:m,init:0,apply:o},styleTop:{nullable:true,check:[t,p,n,r],init:t,apply:u},styleRight:{nullable:true,check:[t,p,n,r],init:t,apply:u},styleBottom:{nullable:true,check:[t,p,n,r],init:t,apply:u},styleLeft:{nullable:true,check:[t,p,n,r],init:t,apply:u},colorTop:{nullable:true,check:s,apply:u},colorRight:{nullable:true,check:s,apply:u},colorBottom:{nullable:true,check:s,apply:u},colorLeft:{nullable:true,check:s,apply:u},backgroundImage:{check:J,nullable:true,apply:u},backgroundRepeat:{check:[W,M,G,N,T],init:W,apply:u},backgroundColor:{check:s,nullable:true,apply:u},left:{group:[Q,A,y]},right:{group:[x,S,v]},top:{group:[U,C,w]},bottom:{group:[P,R,z]},width:{group:[U,x,P,Q],mode:X},style:{group:[C,S,R,A],mode:X},color:{group:[w,v,z,y],mode:X}},members:{__bF:null,__bG:null,getMarkup:function(d){if(this.__bF){return this.__bF;
}var e=qx.theme.manager.Color.getInstance();
var f=B;
var h=this.getWidthTop();

if(h>0){f+=F+h+q+this.getStyleTop()+l+e.resolve(this.getColorTop())+Y;
}var h=this.getWidthRight();

if(h>0){f+=L+h+q+this.getStyleRight()+l+e.resolve(this.getColorRight())+Y;
}var h=this.getWidthBottom();

if(h>0){f+=I+h+q+this.getStyleBottom()+l+e.resolve(this.getColorBottom())+Y;
}var h=this.getWidthLeft();

if(h>0){f+=D+h+q+this.getStyleLeft()+l+e.resolve(this.getColorLeft())+Y;
}{};
f+=H;
var g=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,f);
return this.__bF=g;
},resize:function(ba,bb,bc){var be=this.getBackgroundImage()&&this.getBackgroundRepeat()==T;

if(be||qx.bom.client.Feature.CONTENT_BOX){var bd=this.getInsets();
bb-=bd.left+bd.right;
bc-=bd.top+bd.bottom;
if(bb<0){bb=0;
}
if(bc<0){bc=0;
}}ba.style.width=bb+V;
ba.style.height=bc+V;
},tint:function(i,j){var k=qx.theme.manager.Color.getInstance();

if(j==null){j=this.getBackgroundColor();
}i.style.backgroundColor=k.resolve(j)||B;
},getInsets:function(){if(this.__bG){return this.__bG;
}this.__bG={top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
return this.__bG;
},_applyWidth:function(){{};
this.__bG=null;
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(E,O);
}});
})();
(function(){var u="_applyStyle",t='"></div>',s="Color",r="repeat",q='<div style="',p='border:',o="1px solid ",n="",m=";",l="px",L="position:absolute;top:1px;left:1px;",K="qx.ui.decoration.Beveled",J="scale",I='<div style="position:absolute;top:1px;left:0px;',H='<div style="position:absolute;top:1px;left:1px;',G="repeat-y",F='border-bottom:',E="String",D='border-right:',C='</div>',A='border-top:',B="Number",y="no-repeat",z='position:absolute;top:0px;left:1px;',w="repeat-x",x='<div style="overflow:hidden;font-size:0;line-height:0;">',v='border-left:';
qx.Class.define(K,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(Q,R,S){arguments.callee.base.call(this);
if(Q!=null){this.setOuterColor(Q);
}
if(R!=null){this.setInnerColor(R);
}
if(S!=null){this.setInnerOpacity(S);
}},properties:{innerColor:{check:s,nullable:true,apply:u},innerOpacity:{check:B,init:1,apply:u},outerColor:{check:s,nullable:true,apply:u},backgroundImage:{check:E,nullable:true,apply:u},backgroundRepeat:{check:[r,w,G,y,J],init:r,apply:u},backgroundColor:{check:s,nullable:true,apply:u}},members:{__bH:null,_applyStyle:function(){{};
},getMarkup:function(){if(this.__bH){return this.__bH;
}var M=qx.theme.manager.Color.getInstance();
var N=[];
var P=o+M.resolve(this.getOuterColor())+m;
var O=o+M.resolve(this.getInnerColor())+m;
N.push(x);
N.push(q);
N.push(p,P);
N.push(qx.bom.element.Opacity.compile(0.35));
N.push(t);
N.push(I);
N.push(v,P);
N.push(D,P);
N.push(t);
N.push(q);
N.push(z);
N.push(A,P);
N.push(F,P);
N.push(t);
N.push(qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,L));
N.push(H);
N.push(p,O);
N.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
N.push(t);
N.push(C);
return this.__bH=N.join(n);
},resize:function(a,b,c){if(b<4){b=4;
}
if(c<4){c=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=b-2;
var outerHeight=c-2;
var i=outerWidth;
var h=outerHeight;
var innerWidth=b-4;
var innerHeight=c-4;
}else{var outerWidth=b;
var outerHeight=c;
var i=b-2;
var h=c-2;
var innerWidth=i;
var innerHeight=h;
}var k=l;
var g=a.childNodes[0].style;
g.width=outerWidth+k;
g.height=outerHeight+k;
var f=a.childNodes[1].style;
f.width=outerWidth+k;
f.height=h+k;
var e=a.childNodes[2].style;
e.width=i+k;
e.height=outerHeight+k;
var d=a.childNodes[3].style;
d.width=i+k;
d.height=h+k;
var j=a.childNodes[4].style;
j.width=innerWidth+k;
j.height=innerHeight+k;
},tint:function(T,U){var V=qx.theme.manager.Color.getInstance();

if(U==null){U=this.getBackgroundColor();
}T.childNodes[3].style.backgroundColor=V.resolve(U)||n;
},getInsets:function(){return this.__bI;
},__bI:{top:2,right:2,bottom:2,left:2}}});
})();
(function(){var k="solid",j="scale",i="border-main",h="white",g="border-separator",f="repeat-x",e="background-light",d="border-disabled",c="decoration/table/header-cell.png",b="#f8f8f8",bj="#b6b6b6",bi="background-pane",bh="repeat-y",bg="border-input",bf="decoration/scrollbar/scrollbar-button-bg-horizontal.png",be="decoration/form/input.png",bd="decoration/scrollbar/scrollbar-button-bg-vertical.png",bc="decoration/tabview/tab-button-top-active.png",bb="decoration/form/button-c.png",ba="decoration/scrollbar/scrollbar-bg-vertical.png",r="decoration/shadow/shadow-small.png",s="decoration/form/button-checked.png",p="decoration/tabview/tab-button-left-inactive.png",q="decoration/groupbox/groupbox.png",n="#FAFAFA",o="decoration/pane/pane.png",l="decoration/menu/background.png",m="decoration/toolbar/toolbar-part.gif",w="decoration/tabview/tab-button-top-inactive.png",x="decoration/menu/bar-background.png",F="decoration/tabview/tab-button-bottom-active.png",D="decoration/form/button-hovered.png",N="#b8b8b8",I="decoration/form/input-focused.png",V="decoration/window/captionbar-inactive.png",S="qx/decoration/Modern",z="decoration/window/statusbar.png",Y="border-focused",X="decoration/selection.png",W="table-focus-indicator",y="#F2F2F2",B="decoration/form/button-checked-c.png",C="decoration/scrollbar/scrollbar-bg-horizontal.png",E="qx.theme.modern.Decoration",G="#f4f4f4",J="decoration/form/button.png",P="decoration/app-header.png",U="decoration/tabview/tabview-pane.png",t="decoration/form/button-focused.png",u="decoration/tabview/tab-button-bottom-inactive.png",A="decoration/form/button-disabled.png",M="decoration/tabview/tab-button-right-active.png",L="decoration/form/button-pressed.png",K="decoration/window/captionbar-active.png",R="decoration/tabview/tab-button-left-active.png",Q="background-splitpane",H="decoration/form/button-checked-focused.png",O="#C5C5C5",a="decoration/toolbar/toolbar-gradient.png",T="decoration/tabview/tab-button-right-inactive.png",v="decoration/shadow/shadow.png";
qx.Theme.define(E,{resource:S,decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:i}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:X,backgroundRepeat:j}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:q}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:g}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:v,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:r,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:C,backgroundRepeat:f}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:ba,backgroundRepeat:bh}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bf,backgroundRepeat:j,outerColor:i,innerColor:h,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bf,backgroundRepeat:j,outerColor:d,innerColor:h,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bd,backgroundRepeat:j,outerColor:i,innerColor:h,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bd,backgroundRepeat:j,outerColor:d,innerColor:h,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:J,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:D,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:L,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:H,insets:2}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bg,innerColor:h,innerOpacity:0.5,backgroundImage:be,backgroundRepeat:f,backgroundColor:e}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bg,innerColor:Y,backgroundImage:I,backgroundRepeat:f,backgroundColor:e}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:h,innerOpacity:0.5,backgroundImage:be,backgroundRepeat:f,backgroundColor:e}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:a,backgroundRepeat:j}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bj,innerColor:b,backgroundImage:bb,backgroundRepeat:j}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bj,innerColor:b,backgroundImage:B,backgroundRepeat:j}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:N,colorRight:G,styleLeft:k,styleRight:k}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:m,backgroundRepeat:bh}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:U,insets:[0,2,3,0]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:w}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:u}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:R}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:p}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:T}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bi,width:3,color:Q,style:k}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bi,width:1,color:i,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:K}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:V}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:z}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:i,style:k}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:i,style:k}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthBottom:1,colorBottom:i,style:k}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:g,styleRight:k}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:g,styleRight:k,widthBottom:1,colorBottom:h,styleBottom:k}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthBottom:1,colorBottom:i,style:k}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:W,style:k}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:i,style:k}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthRight:1,colorRight:y,style:k}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:l,backgroundRepeat:j,width:1,color:i,style:k}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:O,widthBottom:1,colorBottom:n}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:x,backgroundRepeat:j,width:1,color:g,style:k}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:P,backgroundRepeat:j}}}});
})();
(function(){var a="jstyle.theme.Decoration";
qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__bJ:function(){var n=navigator.platform;
if(n==null||n===k){n=navigator.userAgent;
}
if(n.indexOf(e)!=-1||n.indexOf(l)!=-1||n.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(n.indexOf(g)!=-1||n.indexOf(b)!=-1||n.indexOf(c)!=-1||n.indexOf(m)!=-1||n.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(n.indexOf(a)!=-1||n.indexOf(i)!=-1||n.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(o){o.__bJ();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",G=")",F="winxp",E="freebsd",D="sunos",C="SV1",B="|",A="nintendods",z="winnt4",y="wince",x="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="g",u="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(u,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__bK:{"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":F,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":z,"Win 9x 4.90":x,"Windows CE":y,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":E,"NetBSD":m,"OpenBSD":k,"SunOS":D,"Symbian System":t,"Nitro":A,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__bL:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__bK){J.push(I);
}var L=new RegExp(l+J.join(B).replace(/\./g,r)+G,v);

if(!L.test(K)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__bK[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(C)!==-1){this.SP2=true;
}}}}},defer:function(H){H.__bL();
}});
})();
(function(){var k="Lucida Grande",j="Liberation Sans",i="Arial",h="Tahoma",g="Candara",f="Segoe UI",e="Consolas",d="monospace",c="Courier New",b="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(b,{fonts:{"default":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i]},"bold":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i],bold:true},"small":{size:qx.bom.client.System.WINVISTA?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[e]:[e,a,c,d]}}});
})();
(function(){var a="jstyle.theme.Font";
qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,resource:b,icons:{}});
})();
(function(){var dp="button-frame",dn="widget",dm="atom",dl="main",dk="button",dj="middle",di="background-light",dh="image",dg="groupbox",df="cell",ca="text-selected",bY="bold",bX="menu-button",bW="decoration/arrows/down.png",bV="toolbar-button",bU="spinner",bT="input",bS="input-disabled",bR="selected",bQ="popup",dw="textfield",dx="input-focused",du="list",dv="tree-item",ds="treevirtual-contract",dt="scrollbar",dq="datechooser/nav-button",dr="text-hovered",dy="center",dz="treevirtual-expand",cN="tooltip",cM="label",cP="decoration/arrows/right.png",cO="background-application",cR="radiobutton",cQ="text-disabled",cT="combobox",cS="checkbox",cL="text-title",cK="qx/static/blank.gif",k="scrollbar/button",l="right",m="combobox/button",n="text-label",o="decoration/tree/closed.png",p="scrollbar-slider-horizontal",q="white",r="decoration/arrows/left.png",s="button-focused",t="text-light",dN="text-input",dM="icon/16/places/folder.png",dL="slidebar/button-forward",dK="right-top",dR="background-splitpane",dQ=".png",dP="decoration/tree/open.png",dO="default",dT="decoration/arrows/down-small.png",dS="datechooser",bg="slidebar/button-backward",bh="selectbox",be="treevirtual-folder",bf="shadow-popup",bk="icon/16/mimetypes/office-document.png",bl="background-medium",bi="table",bj="decoration/form/",bc="icon/16/places/folder-open.png",bd="button-checked",L="decoration/window/maximize-active-hovered.png",K="radiobutton-hovered",N="decoration/cursors/",M="slidebar",H="menu",G="table-scroller-focus-indicator",J="move-frame",I="nodrop",F="table-header-cell",E="app-header",bq="row-layer",br="text-inactive",bs="move",bt="radiobutton-checked-focused",bm="decoration/window/restore-active-hovered.png",bn="shadow-window",bo="table-column-button",bp="right.png",bu="tabview-page-button-bottom-inactive",bv="window-statusbar",W="button-hovered",V="decoration/scrollbar/scrollbar-",U="background-tip",T="scrollbar-slider-horizontal-disabled",S="table-scroller-header",R="radiobutton-disabled",Q="button-pressed",P="table-pane",bb="decoration/window/close-active.png",ba="tabview-page-button-left-active",bw="checkbox-hovered",bx="checkbox-checked",by="decoration/window/minimize-active-hovered.png",bz="menubar",bA="icon/16/actions/dialog-cancel.png",bB="tabview-page-button-top-inactive",bC="tabview-page-button-left-inactive",bD="toolbar-button-checked",bE="decoration/tree/open-selected.png",bF="radiobutton-checked",ci="decoration/window/minimize-inactive.png",ch="icon/16/apps/office-calendar.png",cg="group",cf="tabview-page-button-right-inactive",cm="decoration/window/minimize-active.png",cl="decoration/window/restore-inactive.png",ck="text-active",cj="checkbox-checked-focused",cp="splitpane",co="toolbar-separator",cG="button-preselected-focused",cH="decoration/window/close-active-hovered.png",cE="toolbar",cF="checkbox-pressed",cC="button-disabled",cD="border-separator",cA="decoration/window/maximize-inactive.png",cB="icon/22/places/folder-open.png",cI="scrollarea",cJ="scrollbar-vertical",cX="decoration/toolbar/toolbar-handle-knob.gif",cW="icon/22/mimetypes/office-document.png",da="button-preselected",cY="button-checked-focused",dc="up.png",db="decoration/tree/closed-selected.png",de="qx.theme.modern.Appearance",dd="checkbox-disabled",cV="toolbar-button-hovered",cU="progressive-table-header",dG="decoration/menu/radiobutton.gif",dH="decoration/arrows/forward.png",dI="decoration/table/descending.png",dJ="window-captionbar-active",dC="checkbox-checked-hovered",dD="scrollbar-slider-vertical",dE="alias",dF="decoration/window/restore-active.png",dA="checkbox-checked-disabled",dB="icon/32/mimetypes/office-document.png",j="radiobutton-checked-disabled",i="tabview-pane",h="decoration/arrows/rewind.png",g="checkbox-focused",f="top",e="#EEE",d="icon/16/actions/dialog-ok.png",c="radiobutton-checked-hovered",b="table-header-cell-hovered",a="window",w="text-gray",x="decoration/menu/radiobutton-invert.gif",u="slider",v="decoration/table/select-column-order.png",A="down.png",B="tabview-page-button-top-active",y="icon/32/places/folder-open.png",z="icon/22/places/folder.png",C="decoration/window/maximize-active.png",D="checkbox-checked-pressed",cq="decoration/window/close-inactive.png",cn="toolbar-part",cv="decoration/splitpane/knob-vertical.png",cr="left.png",cd="decoration/menu/checkbox-invert.gif",cb="decoration/arrows/up.png",O="radiobutton-checked-pressed",ce="table-statusbar",Y="radiobutton-pressed",X="window-captionbar-inactive",bI="copy",bJ="radiobutton-focused",bK="decoration/menu/checkbox.gif",bL="decoration/splitpane/knob-horizontal.png",bM="icon/32/places/folder.png",bN="tabview-page-button-bottom-active",bO="decoration/arrows/up-small.png",bP="decoration/table/ascending.png",bG="small",bH="tabview-page-button-right-active",cc="-disabled",cu="scrollbar-horizontal",ct="progressive-table-header-cell",cs="menu-separator",cz="pane",cy="decoration/arrows/right-invert.png",cx=".gif",cw="icon/16/actions/view-refresh.png";
qx.Theme.define(de,{appearances:{"widget":{},"root":{style:function(ew){return {backgroundColor:cO,textColor:n,font:dO};
}},"label":{style:function(gK){return {textColor:gK.disabled?cQ:undefined};
}},"move-frame":{style:function(fO){return {decorator:dl};
}},"resize-frame":J,"dragdrop-cursor":{style:function(fj){var fk=I;

if(fj.copy){fk=bI;
}else if(fj.move){fk=bs;
}else if(fj.alias){fk=dE;
}return {source:N+fk+cx,position:dK,offset:[2,16,2,6]};
}},"image":{style:function(eK){return {opacity:!eK.replacement&&eK.disabled?0.3:1};
}},"atom":{},"atom/label":cM,"atom/icon":dh,"popup":{style:function(eQ){return {decorator:dl,backgroundColor:di,shadow:bf};
}},"button-frame":{alias:dm,style:function(dV){var dX,dW;

if(dV.checked&&dV.focused&&!dV.inner){dX=cY;
dW=undefined;
}else if(dV.disabled){dX=cC;
dW=undefined;
}else if(dV.pressed){dX=Q;
dW=dr;
}else if(dV.checked){dX=bd;
dW=undefined;
}else if(dV.hovered){dX=W;
dW=dr;
}else if(dV.preselected&&dV.focused&&!dV.inner){dX=cG;
dW=dr;
}else if(dV.preselected){dX=da;
dW=dr;
}else if(dV.focused&&!dV.inner){dX=s;
dW=undefined;
}else{dX=dk;
dW=undefined;
}return {decorator:dX,textColor:dW};
}},"button-frame/image":{style:function(fU){return {opacity:!fU.replacement&&fU.disabled?0.5:1};
}},"button":{alias:dp,include:dp,style:function(gb){return {padding:[2,8],center:true};
}},"splitbutton":{},"splitbutton/button":dk,"splitbutton/arrow":{alias:dk,include:dk,style:function(fK){return {icon:bW,padding:2,marginLeft:1};
}},"checkbox":{alias:dm,style:function(eF){var eG;

if(eF.checked&&eF.focused){eG=cj;
}else if(eF.checked&&eF.disabled){eG=dA;
}else if(eF.checked&&eF.pressed){eG=D;
}else if(eF.checked&&eF.hovered){eG=dC;
}else if(eF.checked){eG=bx;
}else if(eF.disabled){eG=dd;
}else if(eF.focused){eG=g;
}else if(eF.pressed){eG=cF;
}else if(eF.hovered){eG=bw;
}else{eG=cS;
}return {icon:bj+eG+dQ,gap:6};
}},"radiobutton":{alias:dm,style:function(eN){var eO;

if(eN.checked&&eN.focused){eO=bt;
}else if(eN.checked&&eN.disabled){eO=j;
}else if(eN.checked&&eN.pressed){eO=O;
}else if(eN.checked&&eN.hovered){eO=c;
}else if(eN.checked){eO=bF;
}else if(eN.disabled){eO=R;
}else if(eN.focused){eO=bJ;
}else if(eN.pressed){eO=Y;
}else if(eN.hovered){eO=K;
}else{eO=cR;
}return {icon:bj+eO+dQ,gap:6};
}},"textfield":{style:function(fs){return {decorator:fs.focused?dx:fs.disabled?bS:bT,padding:[2,4,1],textColor:fs.disabled?cQ:dN};
}},"textarea":{include:dw,style:function(fA){return {padding:4};
}},"spinner":{style:function(ee){return {decorator:ee.focused?dx:ee.disabled?bS:bT};
}},"spinner/textfield":{include:dw,style:function(gr){return {decorator:undefined};
}},"spinner/upbutton":{alias:dp,include:dp,style:function(go){return {icon:bO,padding:go.pressed?[2,2,0,4]:[1,3,1,3]};
}},"spinner/downbutton":{alias:dp,include:dp,style:function(fc){return {icon:dT,padding:fc.pressed?[2,2,0,4]:[1,3,1,3]};
}},"datefield":cT,"datefield/button":{alias:m,include:m,style:function(ec){return {icon:ch,padding:[0,3],decorator:undefined};
}},"datefield/textfield":{style:function(eh){return {padding:[2,4,1],textColor:eh.disabled?cQ:dN};
}},"datefield/list":{alias:dS,include:dS,style:function(fL){return {decorator:undefined};
}},"groupbox":{style:function(eJ){return {legendPosition:f};
}},"groupbox/legend":{alias:dm,style:function(gm){return {padding:[1,0,1,4],textColor:cL,font:bY};
}},"groupbox/frame":{style:function(gv){return {padding:12,decorator:cg};
}},"check-groupbox":dg,"check-groupbox/legend":{alias:cS,include:cS,style:function(ed){return {padding:[1,0,1,4],textColor:cL,font:bY};
}},"radio-groupbox":dg,"radio-groupbox/legend":{alias:cR,include:cR,style:function(eo){return {padding:[1,0,1,4],textColor:cL};
}},"scrollarea":{style:function(ej){return {minWidth:64,minHeight:64};
}},"scrollarea/corner":{style:function(el){return {backgroundColor:cO};
}},"scrollarea/pane":dn,"scrollarea/scrollbar-x":dt,"scrollarea/scrollbar-y":dt,"scrollbar":{style:function(gl){return {width:gl.horizontal?undefined:16,height:gl.horizontal?16:undefined,decorator:gl.horizontal?cu:cJ,padding:1};
}},"scrollbar/slider":{alias:u,style:function(fv){return {padding:fv.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:dp,style:function(eU){var eV=eU.horizontal?p:dD;

if(eU.disabled){eV+=cc;
}return {decorator:eV,minHeight:eU.horizontal?undefined:14,minWidth:eU.horizontal?14:undefined};
}},"scrollbar/button":{alias:dp,include:dp,style:function(fB){var fC=V;

if(fB.left){fC+=cr;
}else if(fB.right){fC+=bp;
}else if(fB.up){fC+=dc;
}else{fC+=A;
}
if(fB.left||fB.right){return {padding:[0,0,0,fB.left?3:4],icon:fC,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:fC,width:14,height:15};
}}},"scrollbar/button-begin":k,"scrollbar/button-end":k,"slider":{style:function(fQ){return {decorator:fQ.focused?dx:fQ.disabled?bS:bT};
}},"slider/knob":{include:dp,style:function(fm){return {decorator:fm.disabled?T:p,height:14,width:14};
}},"list":{alias:cI,style:function(gE){return {backgroundColor:di,decorator:gE.focused?dx:gE.disabled?bS:bT};
}},"list/pane":dn,"listitem":{alias:dm,style:function(gh){return {padding:4,textColor:gh.selected?ca:undefined,decorator:gh.selected?bR:undefined};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dp,include:dp,style:function(ep){return {padding:5,center:true,icon:ep.barLeft||ep.barRight?bW:cP};
}},"slidebar/button-backward":{alias:dp,include:dp,style:function(fo){return {padding:5,center:true,icon:fo.barLeft||fo.barRight?cb:r};
}},"tabview":{style:function(eY){return {contentPadding:16};
}},"tabview/bar":{alias:M,style:function(eW){var eX={marginBottom:eW.barTop?-1:0,marginTop:eW.barBottom?-4:0,marginLeft:eW.barRight?-3:0,marginRight:eW.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(eW.barTop||eW.barBottom){eX.paddingLeft=5;
eX.paddingRight=7;
}else{eX.paddingTop=5;
eX.paddingBottom=7;
}return eX;
}},"tabview/bar/button-forward":{include:dL,alias:dL,style:function(ex){if(ex.barTop||ex.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bg,alias:bg,style:function(fu){if(fu.barTop||fu.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gJ){return {decorator:i,minHeight:100,marginBottom:gJ.barBottom?-1:0,marginTop:gJ.barTop?-1:0,marginLeft:gJ.barLeft?-1:0,marginRight:gJ.barRight?-1:0};
}},"tabview-page":dn,"tabview-page/button":{alias:dm,style:function(ey){var eE,eA=0;
var eD=0,ez=0,eB=0,eC=0;

if(ey.checked){if(ey.barTop){eE=B;
eA=[6,14];
eB=ey.firstTab?0:-5;
eC=ey.lastTab?0:-5;
}else if(ey.barBottom){eE=bN;
eA=[6,14];
eB=ey.firstTab?0:-5;
eC=ey.lastTab?0:-5;
}else if(ey.barRight){eE=bH;
eA=[6,13];
eD=ey.firstTab?0:-5;
ez=ey.lastTab?0:-5;
}else{eE=ba;
eA=[6,13];
eD=ey.firstTab?0:-5;
ez=ey.lastTab?0:-5;
}}else{if(ey.barTop){eE=bB;
eA=[4,10];
eD=4;
eB=ey.firstTab?5:1;
eC=1;
}else if(ey.barBottom){eE=bu;
eA=[4,10];
ez=4;
eB=ey.firstTab?5:1;
eC=1;
}else if(ey.barRight){eE=cf;
eA=[4,10];
eC=5;
eD=ey.firstTab?5:1;
ez=1;
eB=1;
}else{eE=bC;
eA=[4,10];
eB=5;
eD=ey.firstTab?5:1;
ez=1;
eC=1;
}}return {zIndex:ey.checked?10:5,decorator:eE,padding:eA,marginTop:eD,marginBottom:ez,marginLeft:eB,marginRight:eC,textColor:ey.checked?ck:br};
}},"toolbar":{style:function(eb){return {decorator:cE,spacing:2};
}},"toolbar/part":{style:function(gF){return {decorator:cn,spacing:2};
}},"toolbar/part/container":{style:function(gB){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(ev){return {source:cX,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:dm,style:function(gG){return {marginTop:2,marginBottom:2,padding:(gG.pressed||gG.checked||gG.hovered)&&!gG.disabled||(gG.disabled&&gG.checked)?3:5,decorator:gG.pressed||(gG.checked&&!gG.hovered)||(gG.checked&&gG.disabled)?bD:gG.hovered&&!gG.disabled?cV:undefined};
}},"toolbar-menubutton":{alias:bV,include:bV,style:function(fF){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dh,include:dh,style:function(gP){return {source:dT};
}},"toolbar-splitbutton":{style:function(gw){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:bV,include:bV,style:function(eI){return {icon:bW,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:bV,include:bV,style:function(fT){return {padding:fT.pressed||fT.checked?1:fT.hovered?1:3,icon:bW,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(gT){return {decorator:co,margin:7};
}},"tree":du,"tree-item":{style:function(fe){return {padding:[2,6],textColor:fe.selected?ca:undefined,decorator:fe.selected?bR:undefined};
}},"tree-item/icon":{include:dh,style:function(gX){return {paddingRight:5};
}},"tree-item/label":cM,"tree-item/open":{include:dh,style:function(eR){var eS;

if(eR.selected&&eR.opened){eS=bE;
}else if(eR.selected&&!eR.opened){eS=db;
}else if(eR.opened){eS=dP;
}else{eS=o;
}return {padding:[0,5,0,2],source:eS};
}},"tree-folder":{include:dv,alias:dv,style:function(fG){var fH;

if(fG.small){fH=fG.opened?bc:dM;
}else if(fG.large){fH=fG.opened?y:bM;
}else{fH=fG.opened?cB:z;
}return {icon:fH};
}},"tree-file":{include:dv,alias:dv,style:function(fP){return {icon:fP.small?bk:fP.large?dB:cW};
}},"treevirtual":bi,"treevirtual-folder":{style:function(gW){return {icon:gW.opened?bc:dM};
}},"treevirtual-file":{include:be,alias:be,style:function(fx){return {icon:bk};
}},"treevirtual-line":{style:function(gq){return {icon:cK};
}},"treevirtual-contract":{style:function(fb){return {icon:dP,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(eg){return {icon:o,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":ds,"treevirtual-only-expand":dz,"treevirtual-start-contract":ds,"treevirtual-start-expand":dz,"treevirtual-end-contract":ds,"treevirtual-end-expand":dz,"treevirtual-cross-contract":ds,"treevirtual-cross-expand":dz,"treevirtual-end":{style:function(fM){return {icon:cK};
}},"treevirtual-cross":{style:function(fW){return {icon:cK};
}},"tooltip":{include:bQ,style:function(gU){return {backgroundColor:U,padding:[1,3,2,3],offset:[1,1,20,1]};
}},"tooltip/atom":dm,"window":{style:function(gO){return {shadow:bn,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(gz){return {decorator:a};
}},"window/captionbar":{style:function(gA){return {decorator:gA.active?dJ:X,textColor:gA.active?q:w,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(em){return {margin:[5,0,3,6]};
}},"window/title":{style:function(gx){return {alignY:dj,font:bY,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:dm,style:function(gn){return {icon:gn.active?gn.hovered?by:cm:ci,margin:[4,8,2,0]};
}},"window/restore-button":{alias:dm,style:function(gc){return {icon:gc.active?gc.hovered?bm:dF:cl,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:dm,style:function(ge){return {icon:ge.active?ge.hovered?L:C:cA,margin:[4,8,2,0]};
}},"window/close-button":{alias:dm,style:function(dU){return {icon:dU.active?dU.hovered?cH:bb:cq,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(gI){return {padding:[2,6],decorator:bv,minHeight:18};
}},"window/statusbar-text":{style:function(gR){return {font:bG};
}},"iframe":{style:function(gM){return {decorator:dl};
}},"resizer":{style:function(gQ){return {decorator:cz};
}},"splitpane":{style:function(gj){return {decorator:cp};
}},"splitpane/splitter":{style:function(eL){return {width:eL.horizontal?3:undefined,height:eL.vertical?3:undefined,backgroundColor:dR};
}},"splitpane/splitter/knob":{style:function(gY){return {source:gY.horizontal?bL:cv};
}},"splitpane/slider":{style:function(eu){return {width:eu.horizontal?3:undefined,height:eu.vertical?3:undefined,backgroundColor:dR};
}},"selectbox":{alias:dp,include:dp,style:function(gs){return {padding:[2,8]};
}},"selectbox/atom":dm,"selectbox/popup":bQ,"selectbox/list":{alias:du},"selectbox/arrow":{include:dh,style:function(er){return {source:bW,paddingLeft:5};
}},"datechooser":{style:function(gy){return {padding:2,decorator:dl,backgroundColor:di};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:dp,alias:dp,style:function(gf){var gg={padding:[2,4]};

if(gf.lastYear){gg.icon=h;
gg.marginRight=1;
}else if(gf.lastMonth){gg.icon=r;
}else if(gf.nextYear){gg.icon=dH;
gg.marginLeft=1;
}else if(gf.nextMonth){gg.icon=cP;
}return gg;
}},"datechooser/last-year-button-tooltip":cN,"datechooser/last-month-button-tooltip":cN,"datechooser/next-year-button-tooltip":cN,"datechooser/next-month-button-tooltip":cN,"datechooser/last-year-button":dq,"datechooser/last-month-button":dq,"datechooser/next-month-button":dq,"datechooser/next-year-button":dq,"datechooser/month-year-label":{style:function(eq){return {font:bY,textAlign:dy};
}},"datechooser/date-pane":{style:function(fD){return {marginTop:2};
}},"datechooser/weekday":{style:function(gp){return {textColor:gp.weekend?t:undefined,textAlign:dy,paddingTop:2,backgroundColor:bl};
}},"datechooser/week":{style:function(et){return {textAlign:dy,padding:[2,4],backgroundColor:bl};
}},"datechooser/day":{style:function(fr){return {textAlign:dy,decorator:fr.selected?bR:undefined,textColor:fr.selected?ca:fr.otherMonth?t:undefined,font:fr.today?bY:undefined,padding:[2,4]};
}},"combobox":{style:function(fy){return {decorator:fy.focused?dx:fy.disabled?bS:bT};
}},"combobox/popup":bQ,"combobox/list":{alias:du},"combobox/button":{include:dp,alias:dp,style:function(ff){var fg={icon:bW,padding:2};

if(ff.selected){fg.decorator=s;
}return fg;
}},"combobox/textfield":{include:dw,style:function(ga){return {decorator:undefined};
}},"menu":{style:function(dY){var ea={decorator:H,shadow:bf,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4};

if(dY.submenu){ea.position=dK;
ea.offset=[-2,-3];
}return ea;
}},"menu-separator":{style:function(ef){return {height:0,decorator:cs,margin:[4,2]};
}},"menu-button":{alias:dm,style:function(fN){return {decorator:fN.selected?bR:undefined,textColor:fN.selected?ca:undefined,padding:[4,6]};
}},"menu-button/icon":{include:dh,style:function(fn){return {alignY:dj};
}},"menu-button/label":{include:cM,style:function(fS){return {alignY:dj,padding:1};
}},"menu-button/shortcut":{include:cM,style:function(fd){return {alignY:dj,marginLeft:14,padding:1};
}},"menu-button/arrow":{style:function(eT){return {source:eT.selected?cy:cP,alignY:dj};
}},"menu-checkbox":{alias:bX,include:bX,style:function(fR){return {icon:!fR.checked?undefined:fR.selected?cd:bK};
}},"menu-radiobutton":{alias:bX,include:bX,style:function(fq){return {icon:!fq.checked?undefined:fq.selected?x:dG};
}},"menubar":{style:function(gH){return {decorator:bz};
}},"menubar-button":{alias:dm,style:function(fY){return {decorator:fY.pressed||fY.hovered?bR:undefined,textColor:fY.pressed||fY.hovered?ca:undefined,padding:[3,8]};
}},"colorselector":dn,"colorselector/control-bar":dn,"colorselector/control-pane":dn,"colorselector/visual-pane":dg,"colorselector/preset-grid":dn,"colorselector/colorbucket":{style:function(ei){return {decorator:dl,width:16,height:16};
}},"colorselector/preset-field-set":dg,"colorselector/input-field-set":dg,"colorselector/preview-field-set":dg,"colorselector/hex-field-composite":dn,"colorselector/hex-field":dw,"colorselector/rgb-spinner-composite":dn,"colorselector/rgb-spinner-red":bU,"colorselector/rgb-spinner-green":bU,"colorselector/rgb-spinner-blue":bU,"colorselector/hsb-spinner-composite":dn,"colorselector/hsb-spinner-hue":bU,"colorselector/hsb-spinner-saturation":bU,"colorselector/hsb-spinner-brightness":bU,"colorselector/preview-content-old":{style:function(gk){return {decorator:dl,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(gu){return {decorator:dl,backgroundColor:di,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(fi){return {decorator:dl,margin:5};
}},"colorselector/brightness-field":{style:function(gV){return {decorator:dl,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dn,"colorselector/hue-saturation-handle":dn,"colorselector/brightness-pane":dn,"colorselector/brightness-handle":dn,"colorpopup":{alias:bQ,include:bQ,style:function(fh){return {padding:5,backgroundColor:cO};
}},"colorpopup/field":{style:function(gD){return {decorator:dl,margin:2,width:14,height:14,backgroundColor:di};
}},"colorpopup/selector-button":dk,"colorpopup/auto-button":dk,"colorpopup/preview-pane":dg,"colorpopup/current-preview":{style:function(gS){return {height:20,padding:4,marginLeft:4,decorator:dl,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(fX){return {height:20,padding:4,marginRight:4,decorator:dl,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dk,include:dk,style:function(gd){return {icon:d};
}},"colorpopup/colorselector-cancelbutton":{alias:dk,include:dk,style:function(fa){return {icon:bA};
}},"table":{alias:dn,style:function(fw){return {decorator:bi};
}},"table-header":{},"table/statusbar":{style:function(fz){return {decorator:ce,padding:[0,2]};
}},"table/column-button":{alias:dp,style:function(en){return {decorator:bo,padding:3,icon:v};
}},"table-column-reset-button":{include:bX,alias:bX,style:function(){return {icon:cw};
}},"table-scroller":dn,"table-scroller/scrollbar-x":dt,"table-scroller/scrollbar-y":dt,"table-scroller/header":{style:function(ek){return {decorator:S};
}},"table-scroller/pane":{style:function(gC){return {backgroundColor:P};
}},"table-scroller/focus-indicator":{style:function(fV){return {decorator:G};
}},"table-scroller/resize-line":{style:function(ft){return {backgroundColor:cD,width:2};
}},"table-header-cell":{alias:dm,style:function(eP){return {minWidth:13,minHeight:20,padding:eP.hovered?[3,4,2,4]:[3,4],decorator:eP.hovered?b:F,sortIcon:eP.sorted?(eP.sortedAscending?bP:dI):undefined};
}},"table-header-cell/label":{style:function(gi){return {minWidth:0,alignY:dj,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(gL){return {alignY:dj,alignX:l};
}},"table-header-cell/icon":{style:function(fl){return {minWidth:0,alignY:dj,paddingRight:5};
}},"table-editor-textfield":{include:dw,style:function(gN){return {decorator:undefined,padding:[2,2],backgroundColor:di};
}},"table-editor-selectbox":{include:bh,alias:bh,style:function(gt){return {padding:[0,2],backgroundColor:di};
}},"table-editor-combobox":{include:cT,alias:cT,style:function(fp){return {decorator:undefined,backgroundColor:di};
}},"progressive-table-header":{alias:dn,style:function(fI){return {decorator:cU};
}},"progressive-table-header-cell":{alias:dm,style:function(eH){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:ct};
}},"app-header":{style:function(es){return {font:bY,textColor:ca,padding:[8,12],decorator:E};
}},"virtual-list":du,"virtual-list/row-layer":bq,"row-layer":{style:function(eM){return {colorEven:q,colorOdd:e};
}},"column-layer":dn,"cell":{style:function(fJ){return {textColor:fJ.selected?ca:n,padding:[3,6],font:dO};
}},"cell-string":df,"cell-number":{include:df,style:function(fE){return {textAlign:l};
}},"cell-image":df,"cell-boolean":df,"cell-atom":df,"cell-date":df,"cell-html":df}});
})();
(function(){var a="jstyle.theme.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});
})();
(function(){var a="jstyle.theme.Theme";
qx.Theme.define(a,{meta:{color:jstyle.theme.Color,decoration:jstyle.theme.Decoration,font:jstyle.theme.Font,icon:qx.theme.icon.Tango,appearance:jstyle.theme.Appearance}});
})();
(function(){var n='"',m="qx.lang.Core",k="\\\\",j="\\\"",h="[object Error]";
qx.Bootstrap.define(m);
if(!Error.prototype.toString||Error.prototype.toString()==h){Error.prototype.toString=function(){return this.message;
};
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(a,b){if(b==null){b=0;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i<this.length;i++){if(this[i]===a){return i;
}}return -1;
};
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(q,r){if(r==null){r=this.length-1;
}else if(r<0){r=Math.max(0,this.length+r);
}
for(var i=r;i>=0;i--){if(this[i]===q){return i;
}}return -1;
};
}
if(!Array.prototype.forEach){Array.prototype.forEach=function(v,w){var l=this.length;

for(var i=0;i<l;i++){v.call(w,this[i],i,this);
}};
}
if(!Array.prototype.filter){Array.prototype.filter=function(s,t){var l=this.length;
var u=[];

for(var i=0;i<l;i++){if(s.call(t,this[i],i,this)){u.push(this[i]);
}}return u;
};
}
if(!Array.prototype.map){Array.prototype.map=function(e,f){var l=this.length;
var g=[];

for(var i=0;i<l;i++){g.push(e.call(f,this[i],i,this));
}return g;
};
}
if(!Array.prototype.some){Array.prototype.some=function(c,d){var l=this.length;

for(var i=0;i<l;i++){if(c.call(d,this[i],i,this)){return true;
}}return false;
};
}
if(!Array.prototype.every){Array.prototype.every=function(o,p){var l=this.length;

for(var i=0;i<l;i++){if(!o.call(p,this[i],i,this)){return false;
}}return true;
};
}if(!String.prototype.quote){String.prototype.quote=function(){return n+this.replace(/\\/g,k).replace(/\"/g,j)+n;
};
}})();
(function(){var u="indexOf",t="lastIndexOf",r="slice",q="concat",p="join",o="toLocaleUpperCase",n="shift",m="substr",k="filter",j="unshift",Q="match",P="quote",O="qx.lang.Generics",N="localeCompare",M="sort",L="some",K="charAt",J="split",I="substring",H="pop",B="toUpperCase",C="replace",z="push",A="charCodeAt",x="every",y="reverse",v="search",w="forEach",D="map",E="toLowerCase",G="splice",F="toLocaleLowerCase";
qx.Bootstrap.define(O,{statics:{__bM:{"Array":[p,y,M,z,H,n,j,G,q,r,u,t,w,D,k,L,x],"String":[P,I,E,B,K,A,u,t,F,o,N,Q,v,C,J,m,q,r]},__bN:function(f,g){return function(s){return f.prototype[g].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bO:function(){var a=qx.lang.Generics.__bM;

for(var e in a){var c=window[e];
var b=a[e];

for(var i=0,l=b.length;i<l;i++){var d=b[i];

if(!c[d]){c[d]=qx.lang.Generics.__bN(c,d);
}}}}},defer:function(h){h.__bO();
}});
})();
(function(){var s=":",r="qx.client",q="anonymous",p="...",o="qx.dev.StackTrace",n="",m="\n",l="/source/class/",k=".";
qx.Class.define(o,{statics:{getStackTrace:qx.core.Variant.select(r,{"gecko":function(){try{throw new Error();
}catch(a){var M=this.getStackTraceFromError(a);
qx.lang.Array.removeAt(M,0);
var K=this.getStackTraceFromCaller(arguments);
var I=K.length>M.length?K:M;

for(var i=0;i<Math.min(K.length,M.length);i++){var J=K[i];

if(J.indexOf(q)>=0){continue;
}var Q=J.split(s);

if(Q.length!=2){continue;
}var O=Q[0];
var H=Q[1];
var G=M[i];
var R=G.split(s);
var N=R[0];
var F=R[1];

if(qx.Class.getByName(N)){var L=N;
}else{L=O;
}var P=L+s;

if(H){P+=H+s;
}P+=F;
I[i]=P;
}return I;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var ba;

try{ba.bar();
}catch(bc){var bb=this.getStackTraceFromError(bc);
qx.lang.Array.removeAt(bb,0);
return bb;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(r,{"opera":function(E){return [];
},"default":function(T){var Y=[];
var X=qx.lang.Function.getCaller(T);
var U={};

while(X){var V=qx.lang.Function.getName(X);
Y.push(V);

try{X=X.caller;
}catch(S){break;
}
if(!X){break;
}var W=qx.core.ObjectRegistry.toHashCode(X);

if(U[W]){Y.push(p);
break;
}U[W]=X;
}return Y;
}}),getStackTraceFromError:qx.core.Variant.select(r,{"gecko":function(b){if(!b.stack){return [];
}var h=/@(.+):(\d+)$/gm;
var c;
var d=[];

while((c=h.exec(b.stack))!=null){var e=c[1];
var g=c[2];
var f=this.__bP(e);
d.push(f+s+g);
}return d;
},"webkit":function(j){if(j.sourceURL&&j.line){return [this.__bP(j.sourceURL)+s+j.line];
}else{return [];
}},"opera":function(t){if(t.message.indexOf("Backtrace:")<0){return [];
}var v=[];
var w=qx.lang.String.trim(t.message.split("Backtrace:")[1]);
var x=w.split(m);

for(var i=0;i<x.length;i++){var u=x[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(u&&u.length>=2){var z=u[1];
var y=this.__bP(u[2]);
v.push(y+s+z);
}}return v;
},"default":function(){return [];
}}),__bP:function(A){var D=l;
var B=A.indexOf(D);
var C=(B==-1)?A:A.substring(B+D.length).replace(/\//g,k).replace(/\.js$/,n);
return C;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(i,j){},splice:function(f,g,h){},contains:function(e){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var y="load",x="unload",w="qx.client",v="ready",u="mshtml",t="qx.event.handler.Application",s="complete",r="gecko|opera|webkit",q="left",p="_window",n="DOMContentLoaded",o="shutdown";
qx.Class.define(t,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._window=a.getWindow();
this.__bQ=false;
this.__bR=false;
this.__bS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var m=qx.event.handler.Application.$$instance;

if(m){m.__bQ=true;
m.__bT();
}}},members:{canHandleEvent:function(k,l){},registerEvent:function(b,c,d){},unregisterEvent:function(g,h,i){},__bT:function(){if(!this.__bU&&this.__bR&&this.__bQ){this.__bU=true;
qx.event.Registration.fireEvent(this._window,v);
}},_initObserver:function(){if(qx.$$domReady||document.readyState==s){this.__bR=true;
this.__bT();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(w,r)){qx.bom.Event.addNativeListener(this._window,n,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(w,u)){var j=function(){try{document.documentElement.doScroll(q);
this._onNativeLoadWrapped();
}catch(e){setTimeout(j,100);
}};
j();
}qx.bom.Event.addNativeListener(this._window,y,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,x,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,y,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,x,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:function(e){this.__bR=true;
this.__bT();
},_onNativeUnload:function(e){if(!this.__bV){this.__bV=true;

try{qx.event.Registration.fireEvent(this._window,o);
}finally{qx.core.ObjectRegistry.shutdown();
}}}},destruct:function(){this._stopObserver();
this._disposeFields(p);
},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(k){arguments.callee.base.call(this);
this.__bW={};

if(k!==undefined){this.setSize(k);
}},properties:{size:{check:a,init:null,nullable:true}},members:{__bW:null,getObject:function(g){if(this.$$disposed){return;
}
if(!g){throw new Error("Class needs to be defined!");
}var h=null;
var j=this.__bW[g.classname];

if(j){h=j.pop();
}
if(h){h.$$pooled=false;
}else{h=new g;
}return h;
},poolObject:function(c){if(!this.__bW){return;
}var d=c.classname;
var e=this.__bW[d];

if(c.$$pooled){throw new Error("Object is already pooled: "+c);
}
if(!e){this.__bW[d]=e=[];
}var f=this.getSize()||Infinity;

if(e.length>f){this.warn("Cannot pool "+c+" because the pool is already full.");
c.dispose();
return;
}c.$$pooled=true;
e.push(c);
}},destruct:function(){var o=this.__bW;
var m,n,i,l;

for(m in o){n=o[m];

for(i=0,l=n.length;i<l;i++){n[i].dispose();
}}delete this.__bW;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var g="_originalTarget",f="_relatedTarget",e="qx.event.type.Event",d="_target",c="_currentTarget";
qx.Class.define(e,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(j,k){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!j;
this._cancelable=!!k;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(m){if(m){var n=m;
}else{var n=qx.event.Pool.getInstance().getObject(this.constructor);
}n._type=this._type;
n._target=this._target;
n._currentTarget=this._currentTarget;
n._relatedTarget=this._relatedTarget;
n._originalTarget=this._originalTarget;
n._stopPropagation=this._stopPropagation;
n._bubbles=this._bubbles;
n._preventDefault=this._preventDefault;
n._cancelable=this._cancelable;
return n;
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(h){this._type=h;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(i){this._eventPhase=i;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(a){this._target=a;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(p){this._currentTarget=p;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(q){this._relatedTarget=q;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(o){this._originalTarget=o;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(b){this._bubbles=b;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(l){this._cancelable=l;
}},destruct:function(){this._disposeFields(d,c,f,g);
}});
})();
(function(){var g="__bX",f="Better use 'getData'",e="__bY",d="Better use 'getOldData'",c="qx.event.type.Data";
qx.Class.define(c,{extend:qx.event.type.Event,members:{init:function(h,i,j){arguments.callee.base.call(this,false,j);
this.__bX=h;
this.__bY=i;
return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
b.__bX=this.__bX;
b.__bY=this.__bY;
return b;
},getData:function(){return this.__bX;
},getOldData:function(){return this.__bY;
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.__bX;
},getOldValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return this.__bY;
}},destruct:function(){this._disposeFields(g,e);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(j){this._manager=j;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(f,event,g){return !event.getBubbles();
},dispatchEvent:function(b,event,c){event.setEventPhase(qx.event.type.Event.AT_TARGET);
var d=this._manager.getListeners(b,c,false);

if(d){for(var i=0,l=d.length;i<l;i++){var e=d[i].context||b;
d[i].handler.call(e,event);
}}}},defer:function(h){qx.event.Registration.addDispatcher(h);
}});
})();
(function(){var bT="",bS="get",bR="change",bQ=".",bP="last",bO="]",bN="[",bM="Number",bL="String",bK="deepBinding",ck="' (",cj="Boolean",ci=").",ch="set",cg=") to the object '",cf="item",ce="Integer",cd="reset",cc="qx.data.SingleValueBinding",cb="No event could be found for the property",bY="PositiveNumber",ca="Binding from '",bW="PositiveInteger",bX="Binding does not exist!",bU="model",bV="Date";
qx.Class.define(cc,{statics:{DEBUG_ON:false,__ca:{},bind:function(R,S,T,U,V){var bb=S.split(bQ);
var X=this.__ch(bb);
var be=[];
var bf=[];
var bc=[];
var Y=[];
var ba=R;
for(var i=0;i<bb.length;i++){if(X[i]!==bT){Y.push(bR);
}else{Y.push(this.__cc(ba,bb[i]));
}be[i]=ba;
if(i==bb.length-1){if(X[i]!==bT){var bi=X[i]===bP?ba.length-1:X[i];
var W=ba.getItem(bi);
this.__cg(W,T,U,V);
bc[i]=this.__ci(ba,Y[i],T,U,V,X[i]);
}else{if(bb[i]!=null&&ba[bS+qx.lang.String.firstUp(bb[i])]!=null){var W=ba[bS+qx.lang.String.firstUp(bb[i])]();
this.__cg(W,T,U,V);
}bc[i]=this.__ci(ba,Y[i],T,U,V);
}}else{var bg={index:i,propertyNames:bb,sources:be,listenerIds:bc,arrayIndexValues:X,targetObject:T,targetProperty:U,options:V,listeners:bf};
var bd=qx.lang.Function.bind(this.__cb,this,bg);
bf.push(bd);
bc[i]=ba.addListener(Y[i],bd);
}if(ba[bS+qx.lang.String.firstUp(bb[i])]==null){ba=null;
}else if(X[i]!==bT){ba=ba[bS+qx.lang.String.firstUp(bb[i])](X[i]);
}else{ba=ba[bS+qx.lang.String.firstUp(bb[i])]();
}
if(!ba){break;
}}var bh={type:bK,listenerIds:bc,sources:be};
this.__cj(bh,R,S,T,U);
return bh;
},__cb:function(H){for(var j=H.index+1;j<H.propertyNames.length;j++){var L=H.sources[j];
H.sources[j]=null;

if(!L){continue;
}L.removeListenerById(H.listenerIds[j]);
}var L=H.sources[H.index];
for(var j=H.index+1;j<H.propertyNames.length;j++){if(H.arrayIndexValues[j-1]!==bT){L=L[bS+qx.lang.String.firstUp(H.propertyNames[j-1])](H.arrayIndexValues[j-1]);
}else{L=L[bS+qx.lang.String.firstUp(H.propertyNames[j-1])]();
}H.sources[j]=L;
if(!L){this.__cd(H.targetObject,H.targetProperty);
break;
}if(j==H.propertyNames.length-1){if(L instanceof qx.data.Array){var M=H.arrayIndexValues[j]===bP?L.length-1:H.arrayIndexValues[j];
var J=L.getItem(M);
this.__cg(J,H.targetObject,H.targetProperty,H.options);
H.listenerIds[j]=this.__ci(L,bR,H.targetObject,H.targetProperty,H.options,H.arrayIndexValues[j]);
}else{if(H.propertyNames[j]!=null&&L[bS+qx.lang.String.firstUp(H.propertyNames[j])]!=null){var J=L[bS+qx.lang.String.firstUp(H.propertyNames[j])]();
this.__cg(J,H.targetObject,H.targetProperty,H.options);
}var K=this.__cc(L,H.propertyNames[j]);
H.listenerIds[j]=this.__ci(L,K,H.targetObject,H.targetProperty,H.options);
}}else{if(H.listeners[j]==null){var I=qx.lang.Function.bind(this.__cb,this,H);
H.listeners.push(I);
}if(L instanceof qx.data.Array){var K=bR;
}else{var K=this.__cc(L,H.propertyNames[j]);
}H.listenerIds[j]=L.addListener(K,H.listeners[j]);
}}},__cc:function(ct,cu){var cv=this.__cl(ct,cu);
if(cv==null){if(qx.Class.supportsEvent(ct.constructor,cu)){cv=cu;
}else if(qx.Class.supportsEvent(ct.constructor,bR+qx.lang.String.firstUp(cu))){cv=bR+qx.lang.String.firstUp(cu);
}else{throw new qx.core.AssertionError(cb,cu);
}}return cv;
},__cd:function(a,b){var c=this.__cf(a,b);

if(c!=null){var d=b.substring(b.lastIndexOf(bQ)+1,b.length);
c[cd+qx.lang.String.firstUp(d)]();
}},__ce:function(bF,bG,bH){var bI=this.__cf(bF,bG);

if(bI!=null){var bJ=bG.substring(bG.lastIndexOf(bQ)+1,bG.length);
bI[ch+qx.lang.String.firstUp(bJ)](bH);
}},__cf:function(B,C){var F=C.split(bQ);
var G=B;
for(var i=0;i<F.length-1;i++){try{var E=F[i];
if(E.indexOf(bO)==E.length-1){var D=E.substring(E.indexOf(bN)+1,E.length-1);
E=E.substring(0,E.indexOf(bN));
}G=G[bS+qx.lang.String.firstUp(E)]();

if(D!=null){if(D==bP){D=G.length-1;
}G=G.getItem(D);
D=null;
}}catch(bj){return null;
}}return G;
},__cg:function(x,y,z,A){if(x==null){this.__cd(y,z);
}x=this.__ck(x,y,z,A);
if(x!=undefined){this.__ce(y,z,x);
}},__ch:function(f){var g=[];
for(var i=0;i<f.length;i++){var name=f[i];
if(qx.lang.String.endsWith(name,bO)){var h=name.substring(name.indexOf(bN)+1,name.indexOf(bO));
if(name.indexOf(bO)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(h!==bP){if(h==bT||isNaN(parseInt(h))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}f[i]=name.substring(0,name.indexOf(bN));
g[i]=bT;
g[i+1]=h;
f.splice(i+1,0,cf);
i++;
}else{g[i]=bT;
}}return g;
},__ci:function(bw,bx,by,bz,bA,bB){var bC;
var bE=function(n,e){if(n!==bT){if(n===bP){n=bw.length-1;
}var q=bw.getItem(n);
if(q==undefined){qx.data.SingleValueBinding.__cd(by,bz);
}var o=e.getData().start;
var p=e.getData().end;

if(n<o||n>p){return;
}}else{var q=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bw+" by "+bx+" to "+by+" ("+bz+")");
qx.log.Logger.debug("Data before conversion: "+q);
}q=qx.data.SingleValueBinding.__ck(q,by,bz,bA);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+q);
}try{if(q!=undefined){qx.data.SingleValueBinding.__ce(by,bz,q);
}else{qx.data.SingleValueBinding.__cd(by,bz);
}if(bA&&bA.onSetOk){bA.onSetOk(bw,by,q);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bA&&bA.onSetFail){bA.onSetFail(e);
}else{this.warn("Failed so set value "+q+" on "+by+". Error message: "+e);
}}};
if(!bB){bB=bT;
}bE=qx.lang.Function.bind(bE,bw,bB);
var bD=bw.addListener(bx,bE);
return bD;
},__cj:function(bm,bn,bo,bp,bq){if(this.__ca[bn.toHashCode()]===undefined){this.__ca[bn.toHashCode()]=[];
}this.__ca[bn.toHashCode()].push([bm,bn,bo,bp,bq]);
},__ck:function(cl,cm,cn,co){if(co&&co.converter){return co.converter(cl,cm.getUserData(bU));
}else{var cr=this.__cf(cm,cn);
var cs=cn.substring(cn.lastIndexOf(bQ)+1,cn.length);
if(cr==null){return cl;
}var cq=qx.Class.getPropertyDefinition(cr.constructor,cs);
var cp=cq==null?bT:cq.check;
return this.__cm(cl,cp);
}},__cl:function(k,l){var m=qx.Class.getPropertyDefinition(k.constructor,l);

if(m==null){return null;
}return m.event;
},__cm:function(bt,bu){var bv=Object.prototype.toString.call(bt).slice(8,-1);
if((bv==bM||bv==bL)&&(bu==ce||bu==bW)){bt=parseInt(bt);
}if((bv==cj||bv==bM||bv==bV)&&bu==bL){bt=bt+bT;
}if((bv==bM||bv==bL)&&(bu==bM||bu==bY)){bt=parseFloat(bt);
}return bt;
},removeBindingFromObject:function(u,v){if(v.type==bK){for(var i=0;i<v.sources.length;i++){if(v.sources[i]){v.sources[i].removeListenerById(v.listenerIds[i]);
}}}else{u.removeListenerById(v);
}var w=this.__ca[u.toHashCode()];
if(w!=undefined){for(var i=0;i<w.length;i++){if(w[i][0]==v){qx.lang.Array.remove(w,w[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bk){{};
var bl=this.__ca[bk.toHashCode()];
for(var i=bl.length-1;i>=0;i--){this.removeBindingFromObject(bk,bl[i][0]);
}},getAllBindingsForObject:function(r){if(this.__ca[r.toHashCode()]===undefined){this.__ca[r.toHashCode()]=[];
}return this.__ca[r.toHashCode()];
},removeAllBindings:function(){for(var t in this.__ca){var s=qx.core.ObjectRegistry.fromHashCode(t);
if(s==null){delete this.__ca[t];
continue;
}this.removeAllBindingsForObject(s);
}this.__ca={};
},getAllBindings:function(){return this.__ca;
},showBindingInLog:function(N,O){var Q;
for(var i=0;i<this.__ca[N.toHashCode()].length;i++){if(this.__ca[N.toHashCode()][i][0]==O){Q=this.__ca[N.toHashCode()][i];
break;
}}
if(Q===undefined){var P=bX;
}else{var P=ca+Q[1]+ck+Q[2]+cg+Q[3]+ck+Q[4]+ci;
}qx.log.Logger.debug(P);
},showAllBindingsInLog:function(){for(var bs in this.__ca){var br=qx.core.ObjectRegistry.fromHashCode(bs);

for(var i=0;i<this.__ca[bs].length;i++){this.showBindingInLog(br,this.__ca[bs][i][0]);
}}}}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
if((i instanceof qx.core.Object)&&qx.Class.hasMixin(i.constructor,qx.data.marshal.MEventBubbling)){var k=qx.lang.Function.bind(this.__cn,this,name);
var l=i.addListener(c,k,this);
i.setUserData(d,l);
}if(j!=null&&j.getUserData&&j.getUserData(d)!=null){j.removeListenerById(j.getUserData(d));
}},__cn:function(name,e){var t=e.getData();
var p=t.value;
var n=t.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(t.name.indexOf){var s=t.name.indexOf(f)!=-1?t.name.indexOf(f):t.name.length;
var q=t.name.indexOf(h)!=-1?t.name.indexOf(h):t.name.length;

if(s<q){var m=t.name.substring(0,s);
var r=t.name.substring(s+1,t.name.length);

if(r[0]!=h){r=f+r;
}var o=name+h+m+g+r;
}else if(q<s){var m=t.name.substring(0,q);
var r=t.name.substring(q,t.name.length);
var o=name+h+m+g+r;
}else{var o=name+h+t.name+g;
}}else{var o=name+h+t.name+g;
}}else{var o=name+f+t.name;
}this.fireDataEvent(c,{value:p,name:o,old:n});
}}});
})();
(function(){var E="change",D="add",C="order",B="remove",A="qx.data.Array",z="qx.event.type.Event",y="number",x="changeLength",w="qx.event.type.Data";
qx.Class.define(A,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(Y){arguments.callee.base.call(this);
if(Y==undefined){this.__co=[];
}else if(arguments.length>1){this.__co=[];

for(var i=0;i<arguments.length;i++){this.__co.push(arguments[i]);
}}else if(typeof Y==y){this.__co=new Array(Y);
}else if(Y instanceof Array){this.__co=[];

for(var i=0;i<Y.length;i++){this.push(Y[i]);
}}else{this.__co=[];
throw new Error("Type of the parameter not supported!");
}this.__cp();
},events:{"change":w,"changeLength":z},members:{concat:function(s){var t=this.__co.concat(s);
return new qx.data.Array(t);
},join:function(U){return this.__co.join(U);
},pop:function(){var T=this.__co.pop();
this.__cp();
this._applyEventPropagation(null,T);
this.fireDataEvent(E,{start:this.length-1,end:this.length-1,type:B},null);
return T;
},push:function(X){for(var i=0;i<arguments.length;i++){this.__co.push(arguments[i]);
this.__cp();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(E,{start:this.length-1,end:this.length-1,type:D},null);
}return this.length;
},reverse:function(){this.__co.reverse();
this.fireDataEvent(E,{start:0,end:this.length-1,type:C},null);
},shift:function(){var H=this.__co.shift();
this.__cp();
this._applyEventPropagation(null,H);
this.fireDataEvent(E,{start:0,end:this.length-1,type:B,item:H},null);
return H;
},slice:function(N,O){return new qx.data.Array(this.__co.slice(N,O));
},splice:function(a,b,c){var h=this.__co.length;
var e=this.__co.splice.apply(this.__co,arguments);
if(this.__co.length!=h){this.__cp();
}var f=b>0;
var d=arguments.length>2;

if(f||d){if(this.__co.length>h){var g=D;
}else if(this.__co.length<h){var g=B;
}else{var g=C;
}this.fireDataEvent(E,{start:a,end:this.length-1,type:g,item:null},null);
}for(var i=2;i<arguments.length;i++){this._applyEventPropagation(arguments[i],null,a+i);
}for(var i=0;i<e.length;i++){this._applyEventPropagation(null,e[i]);
}return (new qx.data.Array(e));
},sort:function(m){this.__co.sort.apply(this.__co,arguments);
this.fireDataEvent(E,{start:0,end:this.length-1,type:C,item:null},null);
},unshift:function(u){for(var i=arguments.length-1;i>=0;i--){this.__co.unshift(arguments[i]);
this.__cp();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(E,{start:0,end:this.length-1,type:D,item:arguments[i]},null);
}return this.length;
},toArray:function(){return this.__co;
},getItem:function(I){return this.__co[I];
},setItem:function(J,K){var L=this.__co[J];
this.__co[J]=K;
this._applyEventPropagation(K,L,J);
if(this.length!=this.__co.length){this.__cp();
}this.fireDataEvent(E,{start:J,end:J,type:D,item:K},null);
},getLength:function(){return this.length;
},indexOf:function(V){return this.__co.indexOf(V);
},toString:function(){return this.__co.toString();
},contains:function(M){return this.__co.indexOf(M)!==-1;
},copy:function(){return this.concat();
},insertAt:function(P,Q){this.splice(P,0,Q);
},insertBefore:function(j,k){var l=this.indexOf(j);

if(l==-1){this.push(k);
}else{this.splice(l,0,k);
}},insertAfter:function(p,q){var r=this.indexOf(p);

if(r==-1||r==(this.length-1)){this.push(q);
}else{this.splice(r+1,0,q);
}},removeAt:function(W){return this.splice(W,1)[0];
},removeAll:function(){for(var i=0;i<this.__co.length;i++){this._applyEventPropagation(null,this.__co[i]);
}this.__co.length=0;
this.__cp();
},append:function(G){{};
for(var i=0;i<G.length;i++){this._applyEventPropagation(G[i],null,this.__co.length+i);
}Array.prototype.push.apply(this.__co,G);
this.__cp();
},remove:function(n){var o=this.indexOf(n);

if(o!=-1){this.splice(o,1);
return n;
}},equals:function(v){if(this.length!==v.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==v.getItem(i)){return false;
}}return true;
},sum:function(){var S=0;

for(var i=0;i<this.length;i++){S+=this.getItem(i);
}return S;
},max:function(){var R=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>R){R=this.getItem(i);
}}return R===undefined?null:R;
},min:function(){var F=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<F){F=this.getItem(i);
}}return F===undefined?null:F;
},__cp:function(){this.length=this.__co.length;
this.fireEvent(x,qx.event.type.Event);
}}});
})();
(function(){var e="",d=": ",c="qx.type.BaseError";
qx.Class.define(c,{extend:Error,construct:function(a,b){Error.call(this,b);
this.__cq=a||e;
this.__cr=b||e;
},members:{__cq:null,__cr:null,getComment:function(){return this.__cq;
},message:function(){return this.__cr;
},toString:function(){return this.__cq+d+this.__cr;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__cs=qx.dev.StackTrace.getStackTrace();
},members:{__cs:null,getStackTrace:function(){return this.__cs;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var j="qx.event.handler.Object";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(g,h){return qx.Class.supportsEvent(g.constructor,h);
},registerEvent:function(a,b,c){},unregisterEvent:function(d,e,f){}},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var e="qx.util.DisposeUtil";
qx.Class.define(e,{statics:{disposeFields:function(g,h){var name;

for(var i=0,l=h.length;i<l;i++){var name=h[i];

if(g[name]==null||!g.hasOwnProperty(name)){continue;
}g[name]=null;
}},disposeObjects:function(o,p){var name;

for(var i=0,l=p.length;i<l;i++){name=p[i];

if(o[name]==null||!o.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(o[name].dispose){o[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}o[name]=null;
}},disposeArray:function(a,b){var d=a[b];

if(!d){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{var c;

for(var i=d.length-1;i>=0;i--){c=d[i];

if(c){c.dispose();
}}}catch(q){throw new Error("The array field: "+b+" of object: "+a+" has non disposable entries: "+q);
}d.length=0;
a[b]=null;
},disposeMap:function(j,k){var m=j[k];

if(!m){return;
}if(qx.core.ObjectRegistry.inShutDown){j[k]=null;
return;
}try{for(var n in m){if(m.hasOwnProperty(n)){m[n].dispose();
}}}catch(f){throw new Error("The map field: "+k+" of object: "+j+" has non disposable entries: "+f);
}j[k]=null;
}}});
})();
(function(){var e="_dynamic",d="qx.util.ValueManager",c="abstract";
qx.Class.define(d,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(b){return this._dynamic[b];
},isDynamic:function(g){return !!this._dynamic[g];
},resolve:function(f){if(f&&this._dynamic[f]){return this._dynamic[f];
}return f;
},_setDynamic:function(a){this._dynamic=a;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._disposeFields(e);
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(k){var l={};

if(k){var m=k.colors;
var n=qx.util.ColorUtil;
var o;

for(var p in m){o=m[p];

if(typeof o===b){if(!n.isCssString(o)){throw new Error("Could not parse color: "+o);
}}else if(o instanceof Array){o=n.rgbToRgbString(o);
}else{throw new Error("Could not parse color: "+o);
}l[p]=o;
}}this._setDynamic(l);
},resolve:function(g){var j=this._dynamic;
var h=j[g];

if(h){return h;
}var i=this.getTheme();

if(i!==null&&i.colors[g]){return j[g]=i.colors[g];
}return g;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var bb=",",ba="rgb(",Y=")",X="qx.theme.manager.Color",W="qx.util.ColorUtil";
qx.Class.define(W,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42],grey:[128,128,128]},isNamedColor:function(x){return this.NAMED[x]!==undefined;
},isSystemColor:function(be){return this.SYSTEM[be]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(X);
},isThemedColor:function(R){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(R);
},stringToRgb:function(bd){if(this.supportsThemes()&&this.isThemedColor(bd)){var bd=qx.theme.manager.Color.getInstance().resolveDynamic(bd);
}
if(this.isNamedColor(bd)){return this.NAMED[bd];
}else if(this.isSystemColor(bd)){throw new Error("Could not convert system colors to RGB: "+bd);
}else if(this.isRgbString(bd)){return this.__ct();
}else if(this.isHex3String(bd)){return this.__cu();
}else if(this.isHex6String(bd)){return this.__cv();
}throw new Error("Could not parse color: "+bd);
},cssStringToRgb:function(N){if(this.isNamedColor(N)){return this.NAMED[N];
}else if(this.isSystemColor(N)){throw new Error("Could not convert system colors to RGB: "+N);
}else if(this.isRgbString(N)){return this.__ct();
}else if(this.isHex3String(N)){return this.__cu();
}else if(this.isHex6String(N)){return this.__cv();
}throw new Error("Could not parse color: "+N);
},stringToRgbString:function(O){return this.rgbToRgbString(this.stringToRgb(O));
},rgbToRgbString:function(B){return ba+B[0]+bb+B[1]+bb+B[2]+Y;
},rgbToHexString:function(V){return (qx.lang.String.pad(V[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(V[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(V[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(Q){return this.isThemedColor(Q)||this.isNamedColor(Q)||this.isHex3String(Q)||this.isHex6String(Q)||this.isRgbString(Q);
},isCssString:function(a){return this.isSystemColor(a)||this.isNamedColor(a)||this.isHex3String(a)||this.isHex6String(a)||this.isRgbString(a);
},isHex3String:function(bc){return this.REGEXP.hex3.test(bc);
},isHex6String:function(v){return this.REGEXP.hex6.test(v);
},isRgbString:function(w){return this.REGEXP.rgb.test(w);
},__ct:function(){var A=parseInt(RegExp.$1,10);
var z=parseInt(RegExp.$2,10);
var y=parseInt(RegExp.$3,10);
return [A,z,y];
},__cu:function(){var U=parseInt(RegExp.$1,16)*17;
var T=parseInt(RegExp.$2,16)*17;
var S=parseInt(RegExp.$3,16)*17;
return [U,T,S];
},__cv:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(P){if(this.isHex3String(P)){return this.__cu(P);
}throw new Error("Invalid hex3 value: "+P);
},hex6StringToRgb:function(J){if(this.isHex6String(J)){return this.__cv(J);
}throw new Error("Invalid hex6 value: "+J);
},hexStringToRgb:function(C){if(this.isHex3String(C)){return this.__cu(C);
}
if(this.isHex6String(C)){return this.__cv(C);
}throw new Error("Invalid hex value: "+C);
},rgbToHsb:function(c){var e,h,k;
var u=c[0];
var n=c[1];
var d=c[2];
var s=(u>n)?u:n;

if(d>s){s=d;
}var j=(u<n)?u:n;

if(d<j){j=d;
}k=s/255.0;

if(s!=0){h=(s-j)/s;
}else{h=0;
}
if(h==0){e=0;
}else{var m=(s-u)/(s-j);
var o=(s-n)/(s-j);
var l=(s-d)/(s-j);

if(u==s){e=l-o;
}else if(n==s){e=2.0+m-l;
}else{e=4.0+o-m;
}e=e/6.0;

if(e<0){e=e+1.0;
}}return [Math.round(e*360),Math.round(h*100),Math.round(k*100)];
},hsbToRgb:function(D){var i,f,p,q,t;
var E=D[0]/360;
var F=D[1]/100;
var G=D[2]/100;

if(E>=1.0){E%=1.0;
}
if(F>1.0){F=1.0;
}
if(G>1.0){G=1.0;
}var H=Math.floor(255*G);
var I={};

if(F==0.0){I.red=I.green=I.blue=H;
}else{E*=6.0;
i=Math.floor(E);
f=E-i;
p=Math.floor(H*(1.0-F));
q=Math.floor(H*(1.0-(F*f)));
t=Math.floor(H*(1.0-(F*(1.0-f))));

switch(i){case 0:I.red=H;
I.green=t;
I.blue=p;
break;
case 1:I.red=q;
I.green=H;
I.blue=p;
break;
case 2:I.red=p;
I.green=H;
I.blue=t;
break;
case 3:I.red=p;
I.green=q;
I.blue=H;
break;
case 4:I.red=t;
I.green=p;
I.blue=H;
break;
case 5:I.red=H;
I.green=p;
I.blue=q;
break;
}}return I;
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var m='<div style="',l='"></div>',k="mshtml",j='"/>',i="",h='" style="vertical-align:top;',g="scale",f="qx.client",e="qx.ui.decoration.Util",d='<img src="',c="overflow:hidden;";
qx.Class.define(e,{statics:{insetsModified:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var t=qx.theme.manager.Decoration.getInstance();
var v=t.resolve(a).getInsets();
var u=t.resolve(b).getInsets();

if(v.top!=u.top||v.right!=u.right||v.bottom!=u.bottom||v.left!=u.left){return true;
}return false;
},generateBackgroundMarkup:function(n,o,p,top,q){if(n){var r=qx.util.AliasManager.getInstance().resolve(n);
if(o==g){var s=qx.util.ResourceManager.toUri(r);
return d+s+h+q+j;
}else{var back=qx.bom.element.Background.compile(r,o,p,top);
return m+back+q+l;
}}else{if(q){if(qx.core.Variant.isSet(f,k)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){q+=c;
}}return m+q+l;
}else{return i;
}}}}});
})();
(function(){var n="decoration",m="object",l="_applyTheme",k="qx.theme.manager.Decoration",j="__cw",i="Theme",h="string",g="singleton";
qx.Class.define(k,{type:g,extend:qx.core.Object,properties:{theme:{check:i,nullable:true,apply:l}},members:{__cw:null,resolve:function(o){if(!o){return null;
}
if(typeof o===m){return o;
}var r=this.getTheme();

if(!r){return null;
}var r=this.getTheme();

if(!r){return null;
}var s=this.__cw;

if(!s){s=this.__cw={};
}var p=s[o];

if(p){return p;
}var q=r.decorations[o];

if(!q){return null;
}var t=q.decorator;

if(t==null){throw new Error("Missing definition of which decorator to use in entry: "+o+"!");
}return s[o]=(new t).set(q.style);
},isValidPropertyValue:function(c){if(typeof c===h){return this.isDynamic(c);
}else if(typeof c===m){var d=c.constructor;
return qx.Class.hasInterface(d,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(e){if(!e){return false;
}var f=this.getTheme();

if(!f){return false;
}return !!f.decorations[e];
},_applyTheme:function(a){var b=qx.util.AliasManager.getInstance();
a?b.add(n,a.resource):b.remove(n);
}},destruct:function(){this._disposeMap(j);
}});
})();
(function(){var t="/",s="0",r="qx/static",q="http://",p="__cx",o="https://",n="file://",m="qx.util.AliasManager",l="singleton",k=".",j="static";
qx.Class.define(m,{type:l,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cx={};
this.add(j,r);
},members:{__cx:null,_preprocess:function(a){var d=this._getDynamic();

if(d[a]===false){return a;
}else if(d[a]===undefined){if(a.charAt(0)===t||a.charAt(0)===k||a.indexOf(q)===0||a.indexOf(o)===s||a.indexOf(n)===0){d[a]=false;
return a;
}var c=a.substring(0,a.indexOf(t));
var b=this.__cx[c];

if(b!==undefined){d[a]=b+a.substring(c.length);
}}return a;
},add:function(e,f){this.__cx[e]=f;
var h=this._getDynamic();
var g={};
for(var i in h){if(i.substring(0,i.indexOf(t))===e){h[i]=f+i.substring(e.length);
g[i]=true;
}}},remove:function(w){delete this.__cx[w];
},resolve:function(u){var v=this._getDynamic();

if(u!==null){u=this._preprocess(u);
}return v[u]||u;
}},destruct:function(){this._disposeFields(p);
}});
})();
(function(){var c="/",b="qx.util.ResourceManager",a="string";
qx.Bootstrap.define(b,{statics:{__cy:qx.$$resources||{},has:function(g){return !!this.__cy[g];
},getData:function(d){return this.__cy[d]||null;
},getImageWidth:function(m){var n=this.__cy[m];
return n?n[0]:null;
},getImageHeight:function(k){var l=this.__cy[k];
return l?l[1]:null;
},getImageFormat:function(e){var f=this.__cy[e];
return f?f[2]:null;
},isClippedImage:function(o){var p=this.__cy[o];
return p&&p.length>4;
},toUri:function(h){if(h==null){return h;
}var i=this.__cy[h];

if(!i){return h;
}
if(typeof i===a){var j=i;
}else{var j=i[3];
if(!j){return h;
}}return window.qxlibraries[j].resourceUri+c+h;
}}});
})();
(function(){var E="number",D="qx.client",C="/",B="mshtml",A="0",z="",y="px",x=";",w="background-image:url(",v=");",q=")",u="background-repeat:",t="https:",p=" ",o="qx.bom.element.Background",s="url(",r="background-position:";
qx.Class.define(o,{statics:{__cz:[w,null,v,r,null,x,u,null,x],__cA:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cB:function(F,top){var G=qx.bom.client.Engine;

if(G.GECKO&&G.VERSION<1.9&&F==top&&typeof F==E){top+=0.01;
}
if(F){var H=(typeof F==E)?F+y:F;
}else{H=A;
}
if(top){var I=(typeof top==E)?top+y:top;
}else{I=A;
}return H+p+I;
},compile:function(i,j,k,top){var l=this.__cB(k,top);
var m=qx.util.ResourceManager.toUri(i);

if(qx.core.Variant.isSet(D,B)){m=this.__cC(m);
}var n=this.__cz;
n[1]=m;
n[4]=l;
n[7]=j;
return n.join(z);
},getStyles:function(a,b,c,top){if(!a){return this.__cA;
}var d=this.__cB(c,top);
var e=qx.util.ResourceManager.toUri(a);

if(qx.core.Variant.isSet(D,B)){e=this.__cC(e);
}var f={backgroundPosition:d,backgroundImage:s+e+q};

if(b!=null){f.backgroundRepeat=b;
}return f;
},set:function(J,K,L,M,top){var N=this.getStyles(K,L,M,top);

for(var O in N){J.style[O]=N[O];
}},__cC:qx.core.Variant.select(D,{"mshtml":function(g){var h=z;
if(window.location.protocol===t){if(g.match(/^\/\//)!=null){h=window.location.protocol;
}else if(g.match(/^\.\//)!=null){g=g.substring(g.indexOf(C));
h=document.URL.substring(0,document.URL.lastIndexOf(C));
}else{h=window.location.href.substring(0,window.location.href.lastIndexOf(C)+1);
}}return h+g;
},"default":function(){}})}});
})();
(function(){var a="qx.bom.client.Feature";
qx.Bootstrap.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:false,VML:false,XPATH:false,__cD:function(){this.STANDARD_MODE=document.compatMode==="CSS1Compat";
this.QUIRKS_MODE=!this.STANDARD_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("org.w3c.dom.svg","1.0");
this.CANVAS=!!window.CanvasRenderingContext2D;
this.VML=qx.bom.client.Engine.MSHTML;
this.AIR=navigator.userAgent.indexOf("adobeair")!==-1;
this.GEARS=!!(window.google&&window.google.gears);
this.XPATH=!!document.evaluate;
}},defer:function(b){b.__cD();
}});
})();
(function(){var y="px",x="div",w="img",v="qx.client",u="",t="scale-x",s="mshtml",r="no-repeat",q="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",p="scale-y",P="repeat",O=".png",N="scale",M="webkit",L='<div style="',K="repeat-y",J='<img src="',I="qx.bom.element.Decoration",H="png",G="', sizingMethod='scale')",E="', sizingMethod='crop')",F='"/>',C='" style="',D="none",A="repeat-x",B='"></div>',z="absolute";
qx.Class.define(I,{statics:{DEBUG:false,__cE:qx.core.Variant.isSet(v,s)&&qx.bom.client.Engine.VERSION<8,__cF:qx.core.Variant.select(v,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__cG:{"scale-x":w,"scale-y":w,"scale":w,"repeat":x,"no-repeat":x,"repeat-x":x,"repeat-y":x},update:function(a,b,c,d){var f=this.getTagName(c,b);

if(f!=a.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var g=this.getAttributes(b,c,d);

if(f===w){a.src=g.src;
}if(a.style.backgroundPosition!=u&&g.style.backgroundPosition===undefined){g.style.backgroundPosition=null;
}if(a.style.clip!=u&&g.style.clip===undefined){g.style.clip=null;
}var e=qx.bom.element.Style;
e.setStyles(a,g.style);
},create:function(j,k,l){var m=this.getTagName(k,j);
var o=this.getAttributes(j,k,l);
var n=qx.bom.element.Style.compile(o.style);

if(m===w){return J+o.src+C+n+F;
}else{return L+n+B;
}},getTagName:function(h,i){if(qx.core.Variant.isSet(v,s)){if(i&&this.__cE&&this.__cF[h]&&qx.lang.String.endsWith(i,O)){return x;
}}return this.__cG[h];
},getAttributes:function(Q,R,S){var W=qx.util.ResourceManager;
var bc=qx.io2.ImageLoader;
var bd=qx.bom.element.Background;

if(!S){S={};
}
if(!S.position){S.position=z;
}
if(qx.core.Variant.isSet(v,s)){S.fontSize=0;
S.lineHeight=0;
}else if(qx.core.Variant.isSet(v,M)){S.WebkitUserDrag=D;
}var bb=W.getImageWidth(Q)||bc.getWidth(Q);
var ba=W.getImageHeight(Q)||bc.getHeight(Q);
var X=W.getImageFormat(Q)||bc.getFormat(Q);
{};
if(this.__cE&&this.__cF[R]&&X===H){if(S.width==null&&bb!=null){S.width=bb+y;
}
if(S.height==null&&ba!=null){S.height=ba+y;
}
if(R==r){S.filter=q+W.toUri(Q)+E;
}else{S.filter=q+W.toUri(Q)+G;
}S.backgroundImage=S.backgroundRepeat=u;
return {style:S};
}else{if(R===N){var Y=W.toUri(Q);

if(S.width==null&&bb!=null){S.width=bb+y;
}
if(S.height==null&&ba!=null){S.height=ba+y;
}return {src:Y,style:S};
}var V=W.isClippedImage(Q);

if(R===t||R===p){if(V){if(R===t){var bf=W.getData(Q);
var bh=W.getImageHeight(bf[4]);
var Y=W.toUri(bf[4]);
S.clip={top:-bf[6],height:ba};
S.height=bh+y;
if(S.top!=null){S.top=(parseInt(S.top,10)+bf[6])+y;
}else if(S.bottom!=null){S.bottom=(parseInt(S.bottom,10)+ba-bh-bf[6])+y;
}return {src:Y,style:S};
}else{var bf=W.getData(Q);
var be=W.getImageWidth(bf[4]);
var Y=W.toUri(bf[4]);
S.clip={left:-bf[5],width:bb};
S.width=be+y;
if(S.left!=null){S.left=(parseInt(S.left,10)+bf[5])+y;
}else if(S.right!=null){S.right=(parseInt(S.right,10)+bb-be-bf[5])+y;
}return {src:Y,style:S};
}}else{{};

if(R==t){S.height=ba==null?null:ba+y;
}else if(R==p){S.width=bb==null?null:bb+y;
}var Y=W.toUri(Q);
return {src:Y,style:S};
}}else{if(V&&R!==P){var bf=W.getData(Q);
var U=bd.getStyles(bf[4],R,bf[5],bf[6]);

for(var T in U){S[T]=U[T];
}
if(bb!=null&&S.width==null&&(R==K||R===r)){S.width=bb+y;
}
if(ba!=null&&S.height==null&&(R==A||R===r)){S.height=ba+y;
}return {style:S};
}else{{};
var U=bd.getStyles(Q,R);

for(var T in U){S[T]=U[T];
}
if(bb!=null&&S.width==null){S.width=bb+y;
}
if(ba!=null&&S.height==null){S.height=ba+y;
}if(S.filter){S.filter=u;
}return {style:S};
}}}}}});
})();
(function(){var L="",K="qx.client",J="boxSizing",I="cursor",H="opacity",G="clip",F="overflowY",E="overflowX",D="appearance",C="style",bk="px",bj="-webkit-appearance",bi="user-select",bh="userSelect",bg="styleFloat",bf="-webkit-user-select",be="-moz-appearance",bd="pixelHeight",bc="MozAppearance",bb=":",S="pixelTop",T="pixelLeft",Q="text-overflow",R="-moz-user-select",O="MozUserSelect",P="qx.bom.element.Style",M="WebkitUserSelect",N="-o-text-overflow",U="pixelRight",V="pixelWidth",X="pixelBottom",W=";",ba="cssFloat",Y="WebkitAppearance";
qx.Class.define(P,{statics:{__cH:{styleNames:{"float":qx.core.Variant.select(K,{"mshtml":bg,"default":ba}),"appearance":qx.core.Variant.select(K,{"gecko":bc,"webkit":Y,"default":D}),"userSelect":qx.core.Variant.select(K,{"gecko":O,"webkit":M,"default":bh})},cssNames:{"appearance":qx.core.Variant.select(K,{"gecko":be,"webkit":bj,"default":D}),"userSelect":qx.core.Variant.select(K,{"gecko":R,"webkit":bf,"default":bi}),"textOverflow":qx.core.Variant.select(K,{"opera":N,"default":Q})},mshtmlPixel:{width:V,height:bd,left:T,right:U,top:S,bottom:X},special:{clip:1,cursor:1,opacity:1,boxSizing:1,overflowX:1,overflowY:1}},__cI:{},compile:function(p){var t=[];
var x=this.__cH;
var w=x.special;
var u=x.cssNames;
var s=this.__cI;
var v=qx.lang.String;
var name,r,q;

for(name in p){q=p[name];

if(q==null){continue;
}name=u[name]||name;
if(w[name]){switch(name){case G:t.push(qx.bom.element.Clip.compile(q));
break;
case I:t.push(qx.bom.element.Cursor.compile(q));
break;
case H:t.push(qx.bom.element.Opacity.compile(q));
break;
case J:t.push(qx.bom.element.BoxSizing.compile(q));
break;
case E:t.push(qx.bom.element.Overflow.compileX(q));
break;
case F:t.push(qx.bom.element.Overflow.compileY(q));
break;
}}else{r=s[name];

if(!r){r=s[name]=v.hyphenate(name);
}t.push(r,bb,q,W);
}}return t.join(L);
},setCss:qx.core.Variant.select(K,{"mshtml":function(b,c){b.style.cssText=c;
},"default":function(bu,bv){bu.setAttribute(C,bv);
}}),getCss:qx.core.Variant.select(K,{"mshtml":function(a){return a.style.cssText.toLowerCase();
},"default":function(y){return y.getAttribute(C);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(d,name,e,f){{};
var g=this.__cH;
name=g.styleNames[name]||name;
if(f!==false&&g.special[name]){switch(name){case G:return qx.bom.element.Clip.set(d,e);
case I:return qx.bom.element.Cursor.set(d,e);
case H:return qx.bom.element.Opacity.set(d,e);
case J:return qx.bom.element.BoxSizing.set(d,e);
case E:return qx.bom.element.Overflow.setX(d,e);
case F:return qx.bom.element.Overflow.setY(d,e);
}}d.style[name]=e!==null?e:L;
},setStyles:function(bl,bm,bn){{};

for(var name in bm){this.set(bl,name,bm[name],bn);
}},reset:function(z,name,A){var B=this.__cH;
name=B.styleNames[name]||name;
if(A!==false&&B.special[name]){switch(name){case G:return qx.bom.element.Clip.reset(z);
case I:return qx.bom.element.Cursor.reset(z);
case H:return qx.bom.element.Opacity.reset(z);
case J:return qx.bom.element.BoxSizing.reset(z);
case E:return qx.bom.element.Overflow.resetX(z);
case F:return qx.bom.element.Overflow.resetY(z);
}}z.style[name]=L;
},get:qx.core.Variant.select(K,{"mshtml":function(h,name,i,j){var o=this.__cH;
name=o.styleNames[name]||name;
if(j!==false&&o.special[name]){switch(name){case G:return qx.bom.element.Clip.get(h,i);
case I:return qx.bom.element.Cursor.get(h,i);
case H:return qx.bom.element.Opacity.get(h,i);
case J:return qx.bom.element.BoxSizing.get(h,i);
case E:return qx.bom.element.Overflow.getX(h,i);
case F:return qx.bom.element.Overflow.getY(h,i);
}}if(!h.currentStyle){return h.style[name]||L;
}switch(i){case this.LOCAL_MODE:return h.style[name]||L;
case this.CASCADED_MODE:return h.currentStyle[name]||L;
default:var n=h.currentStyle[name]||L;
if(/^-?[\.\d]+(px)?$/i.test(n)){return n;
}var m=o.mshtmlPixel[name];

if(m){var k=h.style[name];
h.style[name]=n||0;
var l=h.style[m]+bk;
h.style[name]=k;
return l;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(n)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return n;
}},"default":function(bo,name,bp,bq){var bt=this.__cH;
name=bt.styleNames[name]||name;
if(bq!==false&&bt.special[name]){switch(name){case G:return qx.bom.element.Clip.get(bo,bp);
case I:return qx.bom.element.Cursor.get(bo,bp);
case H:return qx.bom.element.Opacity.get(bo,bp);
case J:return qx.bom.element.BoxSizing.get(bo,bp);
case E:return qx.bom.element.Overflow.getX(bo,bp);
case F:return qx.bom.element.Overflow.getY(bo,bp);
}}switch(bp){case this.LOCAL_MODE:return bo.style[name]||L;
case this.CASCADED_MODE:if(bo.currentStyle){return bo.currentStyle[name]||L;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var br=qx.dom.Node.getDocument(bo);
var bs=br.defaultView.getComputedStyle(bo,null);
return bs?bs[name]:L;
}}})}});
})();
(function(){var K="auto",J="px",I=",",H="clip:auto;",G="rect(",F=");",E="",D=")",C="qx.bom.element.Clip",B="string",y="rect(auto)",A="clip:rect(",z="clip",x="rect(auto,auto,auto,auto)";
qx.Class.define(C,{statics:{compile:function(a){if(!a){return H;
}var f=a.left;
var top=a.top;
var e=a.width;
var d=a.height;
var b,c;

if(f==null){b=(e==null?K:e+J);
f=K;
}else{b=(e==null?K:f+e+J);
f=f+J;
}
if(top==null){c=(d==null?K:d+J);
top=K;
}else{c=(d==null?K:top+d+J);
top=top+J;
}return A+top+I+b+I+c+I+f+F;
},get:function(g,h){var j=qx.bom.element.Style.get(g,z,h,false);
var o,top,m,l;
var i,k;

if(typeof j===B&&j!==K&&j!==E){j=qx.lang.String.trim(j);
if(/\((.*)\)/.test(j)){var n=RegExp.$1.split(I);
top=qx.lang.String.trim(n[0]);
i=qx.lang.String.trim(n[1]);
k=qx.lang.String.trim(n[2]);
o=qx.lang.String.trim(n[3]);
if(o===K){o=null;
}
if(top===K){top=null;
}
if(i===K){i=null;
}
if(k===K){k=null;
}if(top!=null){top=parseInt(top,10);
}
if(i!=null){i=parseInt(i,10);
}
if(k!=null){k=parseInt(k,10);
}
if(o!=null){o=parseInt(o,10);
}if(i!=null&&o!=null){m=i-o;
}else if(i!=null){m=i;
}
if(k!=null&&top!=null){l=k-top;
}else if(k!=null){l=k;
}}else{throw new Error("Could not parse clip string: "+j);
}}return {left:o||null,top:top||null,width:m||null,height:l||null};
},set:function(p,q){if(!q){p.style.clip=x;
return;
}var v=q.left;
var top=q.top;
var u=q.width;
var t=q.height;
var r,s;

if(v==null){r=(u==null?K:u+J);
v=K;
}else{r=(u==null?K:v+u+J);
v=v+J;
}
if(top==null){s=(t==null?K:t+J);
top=K;
}else{s=(t==null?K:top+t+J);
top=top+J;
}p.style.clip=G+top+I+r+I+s+I+v+D;
},reset:function(w){w.style.clip=qx.bom.client.Engine.MSHTML?y:K;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__cJ:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(q){return f+(this.__cJ[q]||q)+d;
},get:function(o,p){return qx.bom.element.Style.get(o,b,p,false);
},set:function(m,n){m.style.cursor=this.__cJ[n]||n;
},reset:function(l){l.style.cursor=g;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(A){if(A>=1){return m;
}
if(A<0.00001){A=0;
}return d+(A*100)+f;
},"gecko":function(p){if(p==1){p=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+p+k;
}else{return i+p+k;
}},"default":function(o){if(o==1){return m;
}return i+o+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(F,G){var H=qx.bom.element.Style.get(F,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(G>=1){F.style.filter=H.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(G<0.00001){G=0;
}if(!F.currentStyle.hasLayout){F.style.zoom=1;
}F.style.filter=H.replace(/alpha\([^\)]*\)/gi,m)+c+G*100+e;
},"gecko":function(q,r){if(r==1){r=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){q.style.MozOpacity=r;
}else{q.style.opacity=r;
}},"default":function(J,K){if(K==1){K=m;
}J.style.opacity=K;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(s){var t=qx.bom.element.Style.get(s,j,qx.bom.element.Style.COMPUTED_MODE,false);
s.style.filter=t.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(I){if(qx.bom.client.Engine.VERSION<1.7){I.style.MozOpacity=m;
}else{I.style.opacity=m;
}},"default":function(n){n.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(B,C){var D=qx.bom.element.Style.get(B,j,C,false);

if(D){var E=D.match(/alpha\(opacity=(.*)\)/);

if(E&&E[1]){return parseFloat(E[1])/100;
}}return 1.0;
},"gecko":function(x,y){var z=qx.bom.element.Style.get(x,qx.bom.client.Engine.VERSION<1.7?g:h,y,false);

if(z==0.999999){z=1.0;
}
if(z!=null){return parseFloat(z);
}return 1.0;
},"default":function(u,v){var w=qx.bom.element.Style.get(u,h,v,false);

if(w!=null){return parseFloat(w);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__cK:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__cL:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__cM:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cN:function(B){var C=this.__cM;
return C.tags[B.tagName.toLowerCase()]||C.types[B.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(A){{};
},"default":function(r){var t=this.__cL;
var s=p;

if(t){for(var i=0,l=t.length;i<l;i++){s+=t[i]+m+r+c;
}}return s;
}}),get:qx.core.Variant.select(q,{"mshtml":function(u){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(u))){if(!this.__cN(u)){return d;
}}return k;
},"default":function(v){var x=this.__cK;
var w;

if(x){for(var i=0,l=x.length;i<l;i++){w=qx.bom.element.Style.get(v,x[i],null,false);

if(w!=null&&w!==p){return w;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(y,z){{};
},"default":function(D,E){var F=this.__cK;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(G){this.set(G,p);
}}});
})();
(function(){var g="CSS1Compat",f="qx.bom.Document";
qx.Class.define(f,{statics:{isQuirksMode:function(e){return (e||window).document.compatMode!==g;
},isStandardMode:function(a){return (a||window).document.compatMode===g;
},getWidth:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getWidth(h);
var scroll=i.compatMode===g?i.documentElement.scrollWidth:i.body.scrollWidth;
return Math.max(scroll,j);
},getHeight:function(b){var c=(b||window).document;
var d=qx.bom.Viewport.getHeight(b);
var scroll=c.compatMode===g?c.documentElement.scrollHeight:c.body.scrollHeight;
return Math.max(scroll,d);
}}});
})();
(function(){var g="qx.client",f="CSS1Compat",e="qx.bom.Viewport";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(g,{"opera":function(c){return (c||window).document.body.clientWidth;
},"webkit":function(d){return (d||window).innerWidth;
},"default":function(n){var o=(n||window).document;
return o.compatMode===f?o.documentElement.clientWidth:o.body.clientWidth;
}}),getHeight:qx.core.Variant.select(g,{"opera":function(h){return (h||window).document.body.clientHeight;
},"webkit":function(p){return (p||window).innerHeight;
},"default":function(k){var l=(k||window).document;
return l.compatMode===f?l.documentElement.clientHeight:l.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(g,{"mshtml":function(i){var j=(i||window).document;
return j.documentElement.scrollLeft||j.body.scrollLeft;
},"default":function(m){return (m||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(g,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollTop||b.body.scrollTop;
},"default":function(q){return (q||window).pageYOffset;
}})}});
})();
(function(){var bt="",bs="qx.client",br="hidden",bq="-moz-scrollbars-none",bp="overflow",bo=";",bn="overflowY",bm=":",bl="overflowX",bk="overflow:",bF="none",bE="scroll",bD="borderLeftStyle",bC="borderRightStyle",bB="div",bA="borderRightWidth",bz="overflow-y",by="borderLeftWidth",bx="-moz-scrollbars-vertical",bw="100px",bu="qx.bom.element.Overflow",bv="overflow-x";
qx.Class.define(bu,{statics:{__cO:null,getScrollbarWidth:function(){if(this.__cO!==null){return this.__cO;
}var bb=qx.bom.element.Style;
var bd=function(bR,bS){return parseInt(bb.get(bR,bS))||0;
};
var be=function(bG){return (bb.get(bG,bC)==bF?0:bd(bG,bA));
};
var bc=function(m){return (bb.get(m,bD)==bF?0:bd(m,by));
};
var bg=qx.core.Variant.select(bs,{"mshtml":function(bh){if(bb.get(bh,bn)==br||bh.clientWidth==0){return be(bh);
}return Math.max(0,bh.offsetWidth-bh.clientLeft-bh.clientWidth);
},"default":function(cd){if(cd.clientWidth==0){var ce=bb.get(cd,bp);
var cf=(ce==bE||ce==bx?16:0);
return Math.max(0,be(cd)+cf);
}return Math.max(0,(cd.offsetWidth-cd.clientWidth-bc(cd)));
}});
var bf=function(a){return bg(a)-be(a);
};
var t=document.createElement(bB);
var s=t.style;
s.height=s.width=bw;
s.overflow=bE;
document.body.appendChild(t);
var c=bf(t);
this.__cO=c?c:16;
document.body.removeChild(t);
return this.__cO;
},_compile:qx.core.Variant.select(bs,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(U,V){if(V==br){V=bq;
}return bk+V+bo;
}:
function(x,y){return x+bm+y+bo;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bT,bU){return bk+bU+bo;
}:
function(b,d){return b+bm+d+bo;
},"default":function(C,D){return C+bm+D+bo;
}}),compileX:function(W){return this._compile(bv,W);
},compileY:function(H){return this._compile(bz,H);
},getX:qx.core.Variant.select(bs,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(P,Q){var R=qx.bom.element.Style.get(P,bp,Q,false);

if(R===bq){R=br;
}return R;
}:
function(M,N){return qx.bom.element.Style.get(M,bl,N,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(S,T){return qx.bom.element.Style.get(S,bp,T,false);
}:
function(n,o){return qx.bom.element.Style.get(n,bl,o,false);
},"default":function(i,j){return qx.bom.element.Style.get(i,bl,j,false);
}}),setX:qx.core.Variant.select(bs,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(Y,ba){if(ba==br){ba=bq;
}Y.style.overflow=ba;
}:
function(bX,bY){bX.style.overflowX=bY;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(p,q){p.style.overflow=q;
}:
function(bH,bI){bH.style.overflowX=bI;
},"default":function(g,h){g.style.overflowX=h;
}}),resetX:qx.core.Variant.select(bs,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(E){E.style.overflow=bt;
}:
function(X){X.style.overflowX=bt;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(F,G){F.style.overflow=bt;
}:
function(r,u){r.style.overflowX=bt;
},"default":function(K){K.style.overflowX=bt;
}}),getY:qx.core.Variant.select(bs,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(ca,cb){var cc=qx.bom.element.Style.get(ca,bp,cb,false);

if(cc===bq){cc=br;
}return cc;
}:
function(k,l){return qx.bom.element.Style.get(k,bn,l,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(I,J){return qx.bom.element.Style.get(I,bp,J,false);
}:
function(bV,bW){return qx.bom.element.Style.get(bV,bn,bW,false);
},"default":function(A,B){return qx.bom.element.Style.get(A,bn,B,false);
}}),setY:qx.core.Variant.select(bs,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bL,bM){if(bM===br){bM=bq;
}bL.style.overflow=bM;
}:
function(bN,bO){bN.style.overflowY=bO;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bi,bj){bi.style.overflow=bj;
}:
function(v,w){v.style.overflowY=w;
},"default":function(bJ,bK){bJ.style.overflowY=bK;
}}),resetY:qx.core.Variant.select(bs,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(L){L.style.overflow=bt;
}:
function(O){O.style.overflowY=bt;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(e,f){e.style.overflow=bt;
}:
function(bP,bQ){bP.style.overflowY=bt;
},"default":function(z){z.style.overflowY=bt;
}})}});
})();
(function(){var o="qx.client",n="qx.io2.ImageLoader",m="load";
qx.Bootstrap.define(n,{statics:{__cP:{},__cQ:{width:null,height:null},__cR:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(a){var b=this.__cP[a];
return !!(b&&b.loaded);
},isFailed:function(c){var d=this.__cP[c];
return !!(d&&d.failed);
},isLoading:function(t){var u=this.__cP[t];
return !!(u&&u.loading);
},getFormat:function(s){if(s!=null&&this.__cP[s]){return this.__cP[s]||null;
}else{return null;
}},getSize:function(q){return this.__cP[q]||this.__cQ;
},getWidth:function(x){var y=this.__cP[x];
return y?y.width:null;
},getHeight:function(v){var w=this.__cP[v];
return w?w.height:null;
},load:function(A,B,C){var D=this.__cP[A];

if(!D){D=this.__cP[A]={};
}if(B&&!C){C=window;
}if(D.loaded||D.loading||D.failed){if(B){if(D.loading){D.callbacks.push(B,C);
}else{B.call(C,A,D);
}}}else{D.loading=true;
D.callbacks=[];

if(B){D.callbacks.push(B,C);
}var F=new Image();
var E=qx.lang.Function.listener(this.__cS,this,F,A);
F.onload=E;
F.onerror=E;
F.src=A;
}},__cS:function(event,f,g){var h=this.__cP[g];
if(event.type===m){h.loaded=true;
h.width=this.__cT(f);
h.height=this.__cU(f);
var j=this.__cR.exec(g);

if(j!=null){h.format=j[1];
}}else{h.failed=true;
}f.onload=f.onerror=null;
var k=h.callbacks;
delete h.loading;
delete h.callbacks;
for(var i=0,l=k.length;i<l;i+=2){k[i].call(k[i+1],g,h);
}},__cT:qx.core.Variant.select(o,{"gecko":function(z){return z.naturalWidth;
},"default":function(p){return p.width;
}}),__cU:qx.core.Variant.select(o,{"gecko":function(e){return e.naturalHeight;
},"default":function(r){return r.height;
}})}});
})();
(function(){var j="_window",i="_manager",h="qx.event.handler.Window";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._manager=a;
this._window=a.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(q,r){},registerEvent:function(u,v,w){},unregisterEvent:function(b,c,d){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var t=qx.event.handler.Window.SUPPORTED_TYPES;

for(var s in t){qx.bom.Event.addNativeListener(this._window,s,this._onNativeWrapper);
}},_stopWindowObserver:function(){var g=qx.event.handler.Window.SUPPORTED_TYPES;

for(var f in g){qx.bom.Event.removeNativeListener(this._window,f,this._onNativeWrapper);
}},_onNative:function(e){if(this.isDisposed()){return;
}var m=this._window;
var p=m.document;
var n=p.documentElement;
var l=e.target||e.srcElement;

if(l==null||l===m||l===p||l===n){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,m]);
qx.event.Registration.dispatchEvent(m,event);
var o=event.getReturnValue();

if(o!=null){e.returnValue=o;
return o;
}}}},destruct:function(){this._stopWindowObserver();
this._disposeFields(i,j);
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var l="ready",k="qx.application",j="beforeunload",i="qx.core.Init",h="shutdown";
qx.Class.define(i,{statics:{getApplication:function(){return this.__cW||null;
},__cV:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var c=qx.core.Setting.get(k);
var d=qx.Class.getByName(c);

if(d){this.__cW=new d;
var b=new Date;
this.__cW.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-b)+"ms");
var b=new Date;
this.__cW.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-b)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+c);
}},__cX:function(e){var f=this.__cW;

if(f){e.setReturnValue(f.close());
}},__cY:function(){var g=this.__cW;

if(g){g.terminate();
}}},defer:function(a){qx.event.Registration.addListener(window,l,a.__cV,a);
qx.event.Registration.addListener(window,h,a.__cY,a);
qx.event.Registration.addListener(window,j,a.__cX,a);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var h="qx.locale.MTranslation";
qx.Mixin.define(h,{members:{tr:function(m,n){var o=qx.locale.Manager;

if(o){return o.tr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(c,d,e,f){var g=qx.locale.Manager;

if(g){return g.trn.apply(g,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(i,j,k){var l=qx.locale.Manager;

if(l){return l.trc.apply(l,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(a){var b=qx.locale.Manager;

if(b){return b.marktr.apply(b,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var d="abstract",c="qx.application.AbstractGui",b="__da";
qx.Class.define(c,{type:d,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__da:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__da;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
this.__da=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(a){},terminate:function(){}},destruct:function(){this._disposeFields(b);
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var M="errors",L="",K="jsFilePath",J="#FF0000",I="treeIndexPath",H=" (",G=")",F="#FF9900",E="click",D="level",bK="1*",bJ="folder",bI="green",bH="type",bG="completed",bF="==",bE="horizontal",bD="treePath",bC=' - v',bB='click',T="Hide L3 warnings",U="data/json/tree.json",R="data/errors/",S="this._treeJSON[",P="../../data/source/",Q="Expand",N="jstyle/image/infoIcon.png",O="Expand the tree",X="evidence",Y="dblclick",bh="Hide L3",bf="app-header",bp="Loading...",bk="Alert",bx="character",bu=":\\",bb="kids",bA="reason",bz="jStyle",by="pointer",ba="jstyle/image/go-up.png",bd="changeSelection",be="/",bg="jstyle/image/go-down.png",bi="_",bl="Collapse",br="jstyle.Application",bw="jstyle/image/help-about.png",V="fileCount",W="]",bc="Collapse the tree",bo="About",bn="resource/jstyle/source.htm",bm="About jStyle",bt="jstyle/image/document-folder.png",bs="].kids[",bj="line",bq="0.2 final",C=".json",bv="\\";
qx.Class.define(br,{extend:qx.application.Standalone,members:{_name:bz,_version:bq,_rightPane:null,_rightPaneArea:null,_leftPane:null,_leftPaneTree:null,_middlePane:null,_middlePaneTable:null,_filterButton:null,_treeJSON:null,main:function(){arguments.callee.base.call(this);
{};
var cc=new qx.ui.layout.VBox();
var cb=new qx.ui.container.Composite(cc);
this.getRoot().add(cb,{edge:0});
cb.add(this.__dh(),{flex:0});
cb.add(this.__di(),{flex:0});
cb.add(this.__dg(),{flex:1});
},__db:function(){var c=this;
var b=new qx.ui.tree.Tree();
b.set({width:180,openMode:Y,hideRoot:false});
var a=new qx.ui.tree.TreeFolder(this.tr(bp));
b.setRoot(a);
a.setIcon(null);
a.setOpen(true);
window.setTimeout(function(){var bL=new qx.io.remote.Request(U);
bL.addListener(bG,function(e){var cd=qx.util.Json.parse(e.getContent());
c.__dc(a,cd,[],[],L);
c._treeJSON=cd;
b.setHideRoot(true);
b.setRootOpenClose(true);
});
bL.send();
},200);
this._leftPane=b;
this._leftPaneTree=b;
return b;
},__dc:function(d,f,g,h,j){for(var i=0;i<f.length;i++){var p=f[i];
var name=p.name;
g.push(name);
h.push(i);
var m=bv;

if(p.basePath){j=p.basePath;

if(j.indexOf(bu)===-1){m=be;
}}var n=j+m+g.join(m);
var l=new qx.ui.tooltip.ToolTip(n);

if(p[M][0]!==0){name+=H+p[M][0]+G;
}
if(p[bH]===bJ){if(p[V]===0){g.pop();
h.pop();
continue;
}var o=new qx.ui.tree.TreeFolder(name);
o.setUserData(bD,[].concat(g));
o.setUserData(I,[].concat(h));
o.setToolTip(l);

if(p[M][0]===0){o.setTextColor(bI);
}else if(p[M][1]===0){o.setTextColor(F);
}else{o.setTextColor(J);
}d.add(o);
this.__dc(o,p[bb],g,h,j);
}else{var k=new qx.ui.tree.TreeFile(name);
k.setUserData(bD,[].concat(g));
k.setUserData(I,[].concat(h));
k.setToolTip(l);

if(p[M][0]===0){k.setTextColor(bI);
}else{if(p[M][1]===0){k.setTextColor(F);
}else{k.setTextColor(J);
}k.setCursor(by);
(function(cH,cI,cJ){cJ.addListener(E,function(e){this._middlePaneTable.setUserData(K,cI);
this.__dd();
},cH);
})(this,n,k);
}d.add(k);
}g.pop();
h.pop();
}},__dd:function(){var y=this._middlePaneTable.getUserData(K);

if(!y){return;
}var B=this.__nK(y);
var z=R+B+C;
var A=new qx.io.remote.Request(z);
A.addListener(bG,function(e){var r=qx.util.Json.parse(e.getContent());

if(this._filterButton.isChecked()){var s=[];

for(var i=0;i<r.length;i++){if(r[i][0]!==3){s.push(r[i]);
}}r=s;
}var q=this._middlePaneTable.getTableModel();
q.setData(r);
this._middlePaneTable.getSelectionModel().addSelectionInterval(0,0);
},this);
A.send();
},__de:function(){var cF=new qx.ui.table.model.Simple();
cF.setColumns([D,bj,bx,bA,X]);
var cC={tableColumnModel:function(t){return new qx.ui.table.columnmodel.Resize(t);
}};
var cE=new qx.ui.table.Table(cF,cC);
var cD=cE.getTableColumnModel();
var cB=cD.getBehavior();
cB.set(0,{width:50});
cB.set(1,{width:50});
cB.set(2,{width:50});
cB.set(3,{width:bK});
cB.set(4,{width:bK});
var cG=new qx.ui.table.cellrenderer.Conditional(L,L,L,L);
cG.addNumericCondition(bF,1,null,J,null,null,D);
cG.addNumericCondition(bF,3,null,F,null,null,D);
cE.getTableColumnModel().setDataCellRenderer(0,cG);
cE.getTableColumnModel().setDataCellRenderer(1,cG);
cE.getTableColumnModel().setDataCellRenderer(2,cG);
cE.getTableColumnModel().setDataCellRenderer(3,cG);
cE.getTableColumnModel().setDataCellRenderer(4,cG);
cE.getSelectionModel().addListener(bd,function(){var cM=this;
var cL=cE.getSelectionModel().getSelectedRanges()[0].minIndex;
var cK=parseInt(cE.getTableModel().getValue(1,cL),10);
this.__dj(cK);
},this);
cE.getTableColumnModel().setColumnVisible(0,false);
cE.getTableColumnModel().setColumnVisible(2,false);
cE.getTableColumnModel().setColumnVisible(4,false);
cE.setStatusBarVisible(false);
this._middlePane=cE;
this._middlePaneTable=cE;
return cE;
},__df:function(){var content=new qx.ui.embed.Iframe(bn);
this._rightPane=content;
this._rightPaneArea=content;
return content;
},__dg:function(){var cr=new qx.ui.splitpane.Pane(bE);
var cq=this.__db();
cr.add(cq,0);
var cs=new qx.ui.splitpane.Pane(bE);
cs.setDecorator(null);
cr.add(cs,1);
cs.add(this.__de(),1);
cs.add(this.__df(),1.5);
return cr;
},__dh:function(){var ci=new qx.ui.layout.HBox();
var cg=new qx.ui.container.Composite(ci);
cg.setAppearance(bf);
var cj=new qx.ui.basic.Label(this._name+bC+this._version);
var ch=new qx.ui.basic.Label();
cg.add(cj);
cg.add(new qx.ui.core.Spacer(),{flex:1});
cg.add(ch);
return cg;
},__di:function(){var toolbar=new qx.ui.toolbar.ToolBar();
var cw=new qx.ui.toolbar.Part();
toolbar.add(cw);
var cu=new qx.ui.toolbar.Button(this.tr(Q),bg);
cu.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(O)));
cu.addListener(bB,function(){var cz=this._leftPaneTree.getRoot().getItems(true,true,false);

for(var i=0;i<cz.length;i++){var cA=cz[i];

if(cA.hasChildren()&&!cA.isOpen()){cA.setOpen(true);
}}},this);
cw.add(cu);
var ct=new qx.ui.toolbar.Button(this.tr(bl),ba);
ct.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(bc)));
ct.addListener(bB,function(){var bT=this._leftPaneTree.getRoot().getItems(true,true,true);

for(var i=0;i<bT.length;i++){var bU=bT[i];

if(bU.hasChildren()&&bU.isOpen()){bU.setOpen(false);
}}this._leftPaneTree.select(this._leftPaneTree.getRoot());
},this);
cw.add(ct);
var cx=new qx.ui.toolbar.CheckBox(this.tr(bh),bt);
cx.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(T)));
cx.addListener(E,function(){if(cx.isChecked()){this.__nH(true);
}else{this.__nH(false);
}},this);
cx.setChecked(false);
this._filterButton=cx;
cw.add(cx);
toolbar.addSpacer();
var cy=new qx.ui.toolbar.Part();
toolbar.add(cy);
var cv=new qx.ui.toolbar.Button(this.tr(bo),bw);
cv.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(bm)));
cv.addListener(E,function(){this.__dn(this._name+bC+this._version);
},this);
cy.add(cv);
return toolbar;
},__nH:function(u){var v=this._leftPaneTree.getRoot();
this.__nI(v,u);
this.__dd();
},__nI:function(ck,cl){var cm=ck.getChildren();

for(var i=0;i<cm.length;i++){var co=cm[i];
var cn=co.getUserData(I);
var cp=this.__nJ(cn);
var name=cp.name;

if(cp[M][0]===0){continue;
}
if(cl){if(cp[M][1]===0){co.setLabel(name);
}else{co.setLabel(name+H+cp[M][1]+G);
}}else{co.setLabel(name+H+cp[M][0]+G);
}
if(cp[bH]===bJ){this.__nI(co,cl);
}else{}}},__nJ:function(ce){var cf=S+ce.join(bs)+W;
return eval(cf);
},__dj:function(w){var x=this;
if(this._rightPane.isExcluded()){this._rightPane.show();
this._middlePaneTable.getTableColumnModel().setColumnVisible(3,false);
}x.__dk(w);
},__dk:function(bM){var bR=this;
var bN=this._middlePaneTable.getUserData(K);

if(bN!=this._rightPaneArea.getUserData(K)){var bQ=this._rightPaneArea.getWindow();

if(bQ){this._rightPaneArea.setUserData(K,bN);
var bP=this.__nK(bN);
var bO=P+bP;
bQ.loadJS(bO,function(){bR.__dl(bM);
});
}}else{if(bM){this.__dl(bM);
}}},__dl:function(bV){var bW=this._rightPaneArea.getWindow();

if(bW){bW.highlight(bV);
}},__dm:function(){if(!this._rightPane.isExcluded()){this._rightPane.exclude();
this._middlePaneTable.getTableColumnModel().setColumnVisible(3,true);
}},__nK:function(bS){return bS.replace(/[:|\\|\/]/g,bi);
},__dn:function(bX){var bY=new qx.ui.window.Window(this.tr(bk),N);
bY.set({padding:3,modal:true,showMaximize:false,showMinimize:false,resizable:false,contentPadding:[5,10],width:300});
bY.setLayout(new qx.ui.layout.Canvas());
var ca=new qx.ui.basic.Label();
ca.set({content:bX.toString(),rich:true});
bY.add(ca,{left:30,top:30,bottom:30});
bY.center();
bY.open();
}}});
})();
(function(){var c="qx.event.type.Native",b="_native",a="_returnValue";
qx.Class.define(c,{extend:qx.event.type.Event,members:{init:function(d,e,f,g,h){arguments.callee.base.call(this,g,h);
this._target=e||qx.bom.Event.getTarget(d);
this._relatedTarget=f||qx.bom.Event.getRelatedTarget(d);

if(d.timeStamp){this._timeStamp=d.timeStamp;
}this._native=d;
return this;
},clone:function(j){var k=arguments.callee.base.call(this,j);
k._native=this._native;
k._returnValue=this._returnValue;
return k;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},stop:function(){this.stopPropagation();
this.preventDefault();
},getNativeEvent:function(){return this._native;
},setReturnValue:function(i){this._returnValue=i;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._disposeFields(b,a);
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Classic",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(g,h){var k=null;
var n=null;
var q=null;
var r=null;
var m=null;

if(g){k=g.meta.color||null;
n=g.meta.decoration||null;
q=g.meta.font||null;
r=g.meta.icon||null;
m=g.meta.appearance||null;
}var o=qx.theme.manager.Color.getInstance();
var p=qx.theme.manager.Decoration.getInstance();
var i=qx.theme.manager.Font.getInstance();
var l=qx.theme.manager.Icon.getInstance();
var j=qx.theme.manager.Appearance.getInstance();
o.setTheme(k);
p.setTheme(n);
i.setTheme(q);
l.setTheme(r);
j.setTheme(m);
},initialize:function(){var t=qx.core.Setting;
var s,u;
s=t.get(e);

if(s){u=qx.Theme.getByName(s);

if(!u){throw new Error("The theme to use is not available: "+s);
}this.setTheme(u);
}}},settings:{"qx.theme":c}});
})();
(function(){var s="qx.theme.manager.Font",r="Theme",q="changeTheme",p="_applyTheme",o="singleton";
qx.Class.define(s,{type:o,extend:qx.util.ValueManager,properties:{theme:{check:r,nullable:true,apply:p,event:q}},members:{resolveDynamic:function(m){var n=this._dynamic;
return m instanceof qx.bom.Font?m:n[m];
},resolve:function(i){var l=this._dynamic;
var j=l[i];

if(j){return j;
}var k=this.getTheme();

if(k!==null&&k.fonts[i]){return l[i]=(new qx.bom.Font).set(k.colors[i]);
}return i;
},isDynamic:function(f){var h=this._dynamic;

if(f&&(f instanceof qx.bom.Font||h[f]!==undefined)){return true;
}var g=this.getTheme();

if(g!==null&&f&&g.fonts[f]){h[f]=(new qx.bom.Font).set(g.fonts[f]);
return true;
}return false;
},_applyTheme:function(a){var b=this._getDynamic();

for(var e in b){if(b[e].themed){b[e].dispose();
delete b[e];
}}
if(a){var c=a.fonts;
var d=qx.bom.Font;

for(var e in c){b[e]=(new d).set(c[e]);
b[e].themed=true;
}}this._setDynamic(b);
}}});
})();
(function(){var w="",v="underline",u="Boolean",t="px",s='"',r="italic",q="normal",p="bold",o="_applyItalic",n="_applyBold",I="Integer",H="_applyFamily",G="_applyLineHeight",F="Array",E="overline",D="line-through",C="qx.bom.Font",B="Number",A="_applyDecoration",z=" ",x="_applySize",y=",";
qx.Class.define(C,{extend:qx.core.Object,construct:function(S,T){arguments.callee.base.call(this);

if(S!==undefined){this.setSize(S);
}
if(T!==undefined){this.setFamily(T);
}},statics:{fromString:function(a){var e=new qx.bom.Font();
var c=a.split(/\s+/);
var name=[];
var d;

for(var i=0;i<c.length;i++){switch(d=c[i]){case p:e.setBold(true);
break;
case r:e.setItalic(true);
break;
case v:e.setDecoration(v);
break;
default:var b=parseInt(d,10);

if(b==d||qx.lang.String.contains(d,t)){e.setSize(b);
}else{name.push(d);
}break;
}}
if(name.length>0){e.setFamily(name);
}return e;
},fromConfig:function(f){var g=new qx.bom.Font;
g.set(f);
return g;
},__do:{fontFamily:w,fontSize:w,fontWeight:w,fontStyle:w,textDecoration:w,lineHeight:1.2},getDefaultStyles:function(){return this.__do;
}},properties:{size:{check:I,nullable:true,apply:x},lineHeight:{check:B,nullable:true,apply:G},family:{check:F,nullable:true,apply:H},bold:{check:u,nullable:true,apply:n},italic:{check:u,nullable:true,apply:o},decoration:{check:[v,D,E],nullable:true,apply:A}},members:{__dp:null,__dq:null,__dr:null,__ds:null,__dt:null,__du:null,_applySize:function(Q,R){this.__dp=Q===null?null:Q+t;
},_applyLineHeight:function(h,j){this.__du=h===null?null:h;
},_applyFamily:function(J,K){var L=w;

for(var i=0,l=J.length;i<l;i++){if(J[i].indexOf(z)>0){L+=s+J[i]+s;
}else{L+=J[i];
}
if(i!==l-1){L+=y;
}}this.__dq=L;
},_applyBold:function(O,P){this.__dr=O===null?null:O?p:q;
},_applyItalic:function(M,N){this.__ds=M===null?null:M?r:q;
},_applyDecoration:function(k,m){this.__dt=k===null?null:k;
},getStyles:function(){return {fontFamily:this.__dq,fontSize:this.__dp,fontWeight:this.__dr,fontStyle:this.__ds,textDecoration:this.__dt,lineHeight:this.__du};
}}});
})();
(function(){var e="icon",d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(f,g){var h=qx.util.AliasManager.getInstance();
f?h.add(e,f.resource):h.remove(e);
}}});
})();
(function(){var j="string",i="Theme",h="__dv",g="qx.theme.manager.Appearance",f=":",e="changeAppearanceTheme",d="__dw",c="changeTheme",b="/",a="singleton";
qx.Class.define(g,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__dv={};
this.__dw={};
},properties:{appearanceTheme:{check:i,nullable:true,event:e},theme:{check:i,nullable:true,event:c}},members:{__dx:{},__dv:null,__dw:null,__dy:function(A,B){var F=B.appearances;
var I=F[A];
if(!I){var J=b;
var C=[];
var H=A.split(J);
var G;

while(!I&&H.length>0){C.unshift(H.pop());
var D=H.join(J);
I=F[D];

if(I){G=I.alias||I;

if(typeof G===j){var E=G+J+C.join(J);
return this.__dy(E,B);
}}}return null;
}else if(typeof I===j){return this.__dy(I,B);
}else if(I.include&&!I.style){return this.__dy(I.include,B);
}return A;
},styleFrom:function(k,l,m){if(!m){m=this.getTheme();
}var s=this.__dw;
var n=s[k];

if(!n){n=s[k]=this.__dy(k,m);
}var x=m.appearances[n];

if(!x){this.warn("Missing appearance: "+k);
return null;
}if(!x.style){return null;
}var y=n;

if(l){var z=x.$$bits;

if(!z){z=x.$$bits={};
x.$$length=0;
}var q=0;

for(var t in l){if(z[t]==null){z[t]=1<<x.$$length++;
}q+=z[t];
}if(q>0){y+=f+q;
}}var r=this.__dv;

if(r[y]!==undefined){return r[y];
}if(!l){l=this.__dx;
}var v;
if(x.include||x.base){var p=x.style(l);
var o;

if(x.include){o=this.styleFrom(x.include,l,m);
}v={};
if(x.base){var u=this.styleFrom(n,l,x.base);

if(x.include){for(var w in u){if(!o.hasOwnProperty(w)&&!p.hasOwnProperty(w)){v[w]=u[w];
}}}else{for(var w in u){if(!p.hasOwnProperty(w)){v[w]=u[w];
}}}}if(x.include){for(var w in o){if(!p.hasOwnProperty(w)){v[w]=o[w];
}}}for(var w in p){v[w]=p[w];
}}else{v=x.style(l);
}return r[y]=v||null;
}},destruct:function(){this._disposeFields(h,d);
}});
})();
(function(){var j="qx.event.handler.UserAction",i="__dz",h="__dA";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this.__dz=g;
this.__dA=g.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(k,l){},registerEvent:function(a,b,c){},unregisterEvent:function(d,e,f){}},destruct:function(){this._disposeFields(i,h);
},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var h="__dB",g="qx.util.DeferredCallManager",f="__dC",e="singleton";
qx.Class.define(g,{extend:qx.core.Object,type:e,construct:function(){this.__dB={};
this.__dC=qx.lang.Function.bind(this.__dG,this);
this.__dD=false;
},members:{__dE:null,__dF:null,__dB:null,__dD:null,__dC:null,schedule:function(a){if(this.__dE==null){this.__dE=window.setTimeout(this.__dC,0);
}var b=a.toHashCode();
if(this.__dF&&this.__dF[b]){return;
}this.__dB[b]=a;
this.__dD=true;
},cancel:function(c){var d=c.toHashCode();
if(this.__dF&&this.__dF[d]){this.__dF[d]=null;
return;
}delete this.__dB[d];
if(qx.lang.Object.isEmpty(this.__dB)&&this.__dE!=null){window.clearTimeout(this.__dE);
this.__dE=null;
}},__dG:function(){this.__dE=null;
while(this.__dD){this.__dF=qx.lang.Object.clone(this.__dB);
this.__dB={};
this.__dD=false;

for(var j in this.__dF){var i=this.__dF[j];

if(i){this.__dF[j]=null;
i.call();
}}}this.__dF=null;
}},destruct:function(){if(this.__dE!=null){window.clearTimeout(this.__dE);
}this._disposeFields(f,h);
}});
})();
(function(){var d="qx.util.DeferredCall",c="__dJ",b="__dH",a="__dI";
qx.Class.define(d,{extend:qx.core.Object,construct:function(g,h){arguments.callee.base.call(this);
this.__dH=g;
this.__dI=h||null;
this.__dJ=qx.util.DeferredCallManager.getInstance();
},members:{__dH:null,__dI:null,__dJ:null,cancel:function(){this.__dJ.cancel(this);
},schedule:function(){this.__dJ.schedule(this);
},call:function(){this.__dI?this.__dH.apply(this.__dI):this.__dH();
}},destruct:function(e,f){this.cancel();
this._disposeFields(a,b,c);
}});
})();
(function(){var cL="element",cK="qx.client",cJ="div",cI="",cH="mshtml",cG="qx.html.Element",cF="|capture|",cE="__dP",cD="focus",cC="__dT",df="blur",de="deactivate",dd="__dV",dc="capture",da="__dX",cY="releaseCapture",cX="__eb",cW="__eg",cV="__dL",cU="__dQ",cS="tabIndex",cT="__dW",cQ="activate",cR="none",cO="__dU",cP="|bubble|",cM="__dY",cN="__ea";
qx.Class.define(cG,{extend:qx.core.Object,construct:function(Q){arguments.callee.base.call(this);
this.__dK=Q||cJ;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],_scheduleFlush:function(bo){qx.html.Element.__el.schedule();
},_mshtmlVisibilitySort:qx.core.Variant.select(cK,{"mshtml":function(a,b){var dq=a.__dL;
var dp=b.__dL;

if(dq.contains(dp)){return 1;
}
if(dp.contains(dq)){return -1;
}return 0;
},"default":null}),flush:function(){var ba;
{};
var bb=[];
var bd=this._modified;

for(var bk in bd){ba=bd[bk];
if(ba.__ee()){if(ba.__dL&&qx.dom.Hierarchy.isRendered(ba.__dL)){bb.push(ba);
}else{{};
ba.__ed();
}delete bd[bk];
}}
for(var i=0,l=bb.length;i<l;i++){ba=bb[i];
{};
ba.__ed();
}var be=this._visibility;
if(qx.core.Variant.isSet(cK,cH)){var bc=[];

for(var bk in be){bc.push(be[bk]);
}if(bc.length>1){bc.sort(this._mshtmlVisibilitySort);
be=this._visibility={};

for(var i=0;i<bc.length;i++){ba=bc[i];
be[ba.$$hash]=ba;
}}}
for(var bk in be){ba=be[bk];
{};
ba.__dL.style.display=ba.__dO?cI:cR;
delete be[bk];
}var scroll=this._scroll;

for(var bk in scroll){ba=scroll[bk];
var bn=ba.__dL;

if(bn&&bn.offsetWidth){var bh=true;
if(ba.__dR!=null){ba.__dL.scrollLeft=ba.__dR;
delete ba.__dR;
}if(ba.__dS!=null){ba.__dL.scrollTop=ba.__dS;
delete ba.__dS;
}var bf=ba.__dP;

if(bf!=null){var bi=bf.element.getDomElement();

if(bi&&bi.offsetWidth){qx.bom.element.Scroll.intoViewX(bi,bn,bf.align);
delete ba.__dP;
}else{bh=false;
}}var bg=ba.__dQ;

if(bg!=null){var bi=bg.element.getDomElement();

if(bi&&bi.offsetWidth){qx.bom.element.Scroll.intoViewY(bi,bn,bg.align);
delete ba.__dQ;
}else{bh=false;
}}if(bh){delete scroll[bk];
}}}for(var i=0;i<this._actions.length;i++){var bj=this._actions[i];
var bm=bj.element.__dL;

if(!bm){continue;
}qx.bom.Element[bj.type](bm);
}this._actions=[];
qx.event.handler.Appear.refresh();
}},members:{__dK:null,__dL:null,__dM:false,__dN:true,__dO:true,__dP:null,__dQ:null,__dR:null,__dS:null,__dT:null,__dU:null,__dV:null,__dW:null,__dX:null,__dY:null,__ea:null,__eb:null,__ec:null,_scheduleChildrenUpdate:function(){if(this.__ec){return;
}this.__ec=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cL);
},_createDomElement:function(){return qx.bom.Element.create(this.__dK);
},__ed:function(){{};
var bX=this.__eb;

if(bX){var length=bX.length;
var bY;

for(var i=0;i<length;i++){bY=bX[i];

if(bY.__dO&&bY.__dN&&!bY.__dL){bY.__ed();
}}}
if(!this.__dL){this.__dL=this._createDomElement();
this.__dL.$$hash=this.$$hash;
this._copyData(false);

if(bX&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__ec){this._syncChildren();
}}delete this.__ec;
},_insertChildren:function(){var bJ=this.__eb;
var length=bJ.length;
var bL;

if(length>2){var bK=document.createDocumentFragment();

for(var i=0;i<length;i++){bL=bJ[i];

if(bL.__dL&&bL.__dN){bK.appendChild(bL.__dL);
}}this.__dL.appendChild(bK);
}else{var bK=this.__dL;

for(var i=0;i<length;i++){bL=bJ[i];

if(bL.__dL&&bL.__dN){bK.appendChild(bL.__dL);
}}}},_syncChildren:function(){var by=qx.core.ObjectRegistry;
var bp=this.__eb;
var bw=bp.length;
var bq;
var bu;
var bs=this.__dL;
var bv=bs.childNodes;
var br=0;
var bt;
var bx;
for(var i=bv.length-1;i>=0;i--){bt=bv[i];
bu=by.fromHashCode(bt.$$hash);

if(!bu||!bu.__dN||bu.__eg!==this){bs.removeChild(bt);
{};
}}for(var i=0;i<bw;i++){bq=bp[i];
if(bq.__dN){bu=bq.__dL;
bt=bv[br];

if(!bu){continue;
}if(bu!=bt){if(bt){bs.insertBefore(bu,bt);
}else{bs.appendChild(bu);
}{};
}br++;
}}{};
},_copyData:function(bP){var bT=this.__dL;
var bS=this.__dX;

if(bS){var bQ=qx.bom.element.Attribute;

for(var bU in bS){bQ.set(bT,bU,bS[bU]);
}}var bS=this.__dW;

if(bS){var bR=qx.bom.element.Style;

if(bP){for(var bU in bS){bR.set(bT,bU,bS[bU]);
}}else{bR.setCss(bT,bR.compile(bS));
}}var bS=this.__dY;

if(bS){for(var bU in bS){this._applyProperty(bU,bS[bU]);
}}var bS=this.__ea;

if(bS){qx.event.Registration.getManager(bT).importListeners(bT,bS);
delete this.__ea;
}},_syncData:function(){var cj=this.__dL;
var ci=qx.bom.element.Attribute;
var cg=qx.bom.element.Style;
var ch=this.__dU;

if(ch){var cm=this.__dX;

if(cm){var ck;

for(var cl in ch){ck=cm[cl];

if(ck!==undefined){ci.set(cj,cl,ck);
}else{ci.reset(cj,cl);
}}}this.__dU=null;
}var ch=this.__dT;

if(ch){var cm=this.__dW;

if(cm){var ck;

for(var cl in ch){ck=cm[cl];

if(ck!==undefined){cg.set(cj,cl,ck);
}else{cg.reset(cj,cl);
}}}this.__dT=null;
}var ch=this.__dV;

if(ch){var cm=this.__dY;

if(cm){var ck;

for(var cl in ch){this._applyProperty(cl,cm[cl]);
}}this.__dV=null;
}},__ee:function(){var M=this;
while(M){if(M.__dM){return true;
}
if(!M.__dN||!M.__dO){return false;
}M=M.__eg;
}return false;
},__ef:function(g){if(g.__eg===this){throw new Error("Child is already in: "+g);
}
if(g.__dM){throw new Error("Root elements could not be inserted into other ones.");
}if(g.__eg){g.__eg.remove(g);
}g.__eg=this;
if(!this.__eb){this.__eb=[];
}if(this.__dL){this._scheduleChildrenUpdate();
}},__eh:function(c){if(c.__eg!==this){throw new Error("Has no child: "+c);
}if(this.__dL){this._scheduleChildrenUpdate();
}delete c.__eg;
},__ei:function(bD){if(bD.__eg!==this){throw new Error("Has no child: "+bD);
}if(this.__dL){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__eb||null;
},getChild:function(cs){var ct=this.__eb;
return ct&&ct[cs]||null;
},hasChildren:function(){var dn=this.__eb;
return dn&&dn[0]!==undefined;
},indexOf:function(K){var L=this.__eb;
return L?L.indexOf(K):-1;
},hasChild:function(w){var z=this.__eb;
return z&&z.indexOf(w)!==-1;
},add:function(bG){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__ef(arguments[i]);
}this.__eb.push.apply(this.__eb,arguments);
}else{this.__ef(bG);
this.__eb.push(bG);
}return this;
},addAt:function(bM,bN){this.__ef(bM);
qx.lang.Array.insertAt(this.__eb,bM,bN);
return this;
},remove:function(dv){var dw=this.__eb;

if(!dw){return;
}
if(arguments[1]){var dx;

for(var i=0,l=arguments.length;i<l;i++){dx=arguments[i];
this.__eh(dx);
qx.lang.Array.remove(dw,dx);
}}else{this.__eh(dv);
qx.lang.Array.remove(dw,dv);
}return this;
},removeAt:function(W){var X=this.__eb;

if(!X){throw new Error("Has no children!");
}var Y=X[W];

if(!Y){throw new Error("Has no child at this position!");
}this.__eh(Y);
qx.lang.Array.removeAt(this.__eb,W);
return this;
},removeAll:function(){var q=this.__eb;

if(q){for(var i=0,l=q.length;i<l;i++){this.__eh(q[i]);
}q.length=0;
}return this;
},getParent:function(){return this.__eg||null;
},insertInto:function(parent,N){parent.__ef(this);

if(N==null){parent.__eb.push(this);
}else{qx.lang.Array.insertAt(this.__eb,this,N);
}return this;
},insertBefore:function(cb){var parent=cb.__eg;
parent.__ef(this);
qx.lang.Array.insertBefore(parent.__eb,this,cb);
return this;
},insertAfter:function(cc){var parent=cc.__eg;
parent.__ef(this);
qx.lang.Array.insertAfter(parent.__eb,this,cc);
return this;
},moveTo:function(bV){var parent=this.__eg;
parent.__ei(this);
var bW=parent.__eb.indexOf(this);

if(bW===bV){throw new Error("Could not move to same index!");
}else if(bW<bV){bV--;
}qx.lang.Array.removeAt(parent.__eb,bW);
qx.lang.Array.insertAt(parent.__eb,this,bV);
return this;
},moveBefore:function(r){var parent=this.__eg;
return this.moveTo(parent.__eb.indexOf(r));
},moveAfter:function(cu){var parent=this.__eg;
return this.moveTo(parent.__eb.indexOf(cu)+1);
},free:function(){var parent=this.__eg;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__eb){return;
}parent.__eh(this);
qx.lang.Array.remove(parent.__eb,this);
return this;
},getDomElement:function(){return this.__dL||null;
},getNodeName:function(){return this.__dK;
},setNodeName:function(name){this.__dK=name;
},setRoot:function(f){this.__dM=f;
},useMarkup:function(m){if(this.__dL){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(cK,cH)){var n=document.createElement(cJ);
}else{var n=qx.html.Element.__ej;

if(!n){n=qx.html.Element.__ej=document.createElement(cJ);
}}n.innerHTML=m;
this.__dL=n.firstChild;
this.__dL.$$hash=this.$$hash;
this._copyData(true);
return this.__dL;
},useElement:function(cr){if(this.__dL){throw new Error("Could not overwrite existing element!");
}this.__dL=cr;
this.__dL.$$hash=this.$$hash;
this._copyData(true);
},isFocusable:function(){var bC=this.getAttribute(cS);

if(bC>=1){return true;
}var bB=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bC>=0&&bB[this.__dK]){return true;
}return false;
},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__dK];
},include:function(){if(this.__dN){return;
}delete this.__dN;

if(this.__eg){this.__eg._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__dN){return;
}this.__dN=false;

if(this.__eg){this.__eg._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__dN===true;
},show:function(){if(this.__dO){return;
}
if(this.__dL){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cL);
}if(this.__eg){this.__eg._scheduleChildrenUpdate();
}delete this.__dO;
},hide:function(){if(!this.__dO){return;
}
if(this.__dL){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cL);
}this.__dO=false;
},isVisible:function(){return this.__dO===true;
},scrollChildIntoViewX:function(R,S,T){var U=this.__dL;
var V=R.getDomElement();

if(T!==false&&U&&U.offsetWidth&&V&&V.offsetWidth){qx.bom.element.Scroll.intoViewX(V,U,S);
}else{this.__dP={element:R,align:S};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cL);
}delete this.__dR;
},scrollChildIntoViewY:function(A,B,C){var D=this.__dL;
var E=A.getDomElement();

if(C!==false&&D&&D.offsetWidth&&E&&E.offsetWidth){qx.bom.element.Scroll.intoViewY(E,D,B);
}else{this.__dQ={element:A,align:B};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cL);
}delete this.__dS;
},scrollToX:function(x,O){var P=this.__dL;

if(O!==true&&P&&P.offsetWidth){P.scrollLeft=x;
}else{this.__dR=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cL);
}delete this.__dP;
},getScrollX:function(){var cn=this.__dL;

if(cn){return cn.scrollLeft;
}return this.__dR||0;
},scrollToY:function(y,o){var p=this.__dL;

if(o!==true&&p&&p.offsetWidth){p.scrollTop=y;
}else{this.__dS=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cL);
}delete this.__dQ;
},getScrollY:function(){var bA=this.__dL;

if(bA){return bA.scrollTop;
}return this.__dS||0;
},getSelection:function(){var d=this.__dL;

if(d){return qx.bom.Selection.get(d);
}return null;
},getSelectionLength:function(){var bz=this.__dL;

if(bz){return qx.bom.Selection.getLength(bz);
}return null;
},setSelection:function(s,t){var u=this.__dL;

if(u){qx.bom.Selection.set(u,s,t);
}},clearSelection:function(){var ca=this.__dL;

if(ca){qx.bom.Selection.clear(ca);
}},__ek:function(h){var j=this.__dL;
var k=qx.html.Element._actions;

if(j&&k.length==0){return qx.bom.Element[h](j);
}k.push({type:h,element:this});
qx.html.Element._scheduleFlush(cL);
},focus:function(){this.__ek(cD);
},blur:function(){this.__ek(df);
},activate:function(){this.__ek(cQ);
},deactivate:function(){this.__ek(de);
},capture:function(){this.__ek(dc);
},releaseCapture:function(){this.__ek(cY);
},setStyle:function(co,cp,cq){if(!this.__dW){this.__dW={};
}
if(this.__dW[co]==cp){return;
}
if(cp==null){delete this.__dW[co];
}else{this.__dW[co]=cp;
}if(this.__dL){if(cq){qx.bom.element.Style.set(this.__dL,co,cp);
return this;
}if(!this.__dT){this.__dT={};
}this.__dT[co]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cL);
}return this;
},setStyles:function(cd,ce){for(var cf in cd){this.setStyle(cf,cd[cf],ce);
}return this;
},removeStyle:function(dF,dG){this.setStyle(dF,null,dG);
},getStyle:function(bO){return this.__dW?this.__dW[bO]:null;
},getAllStyles:function(){return this.__dW||null;
},setAttribute:function(dr,ds,dt){if(!this.__dX){this.__dX={};
}
if(this.__dX[dr]==ds){return;
}
if(ds==null){delete this.__dX[dr];
}else{this.__dX[dr]=ds;
}if(this.__dL){if(dt){qx.bom.element.Attribute.set(this.__dL,dr,ds);
return this;
}if(!this.__dU){this.__dU={};
}this.__dU[dr]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cL);
}return this;
},setAttributes:function(dk,dl){for(var dm in dk){this.setAttribute(dm,dk[dm],dl);
}return this;
},removeAttribute:function(bH,bI){this.setAttribute(bH,null,bI);
},getAttribute:function(v){return this.__dX?this.__dX[v]:null;
},_applyProperty:function(name,dj){},_setProperty:function(dg,dh,di){if(!this.__dY){this.__dY={};
}
if(this.__dY[dg]==dh){return;
}
if(dh==null){delete this.__dY[dg];
}else{this.__dY[dg]=dh;
}if(this.__dL){if(di){this._applyProperty(dg,dh);
return this;
}if(!this.__dV){this.__dV={};
}this.__dV[dg]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cL);
}return this;
},_removeProperty:function(bE,bF){this._setProperty(bE,null,bF);
},_getProperty:function(dH){var dI=this.__dY;

if(!dI){return null;
}var dJ=dI[dH];
return dJ==null?null:dJ;
},addListener:function(dz,dA,self,dB){if(this.$$disposed){return null;
}var dC;

if(this.__dL){return qx.event.Registration.addListener(this.__dL,dz,dA,self,dB);
}
if(!this.__ea){this.__ea={};
}
if(dB==null){dB=false;
}var dD=qx.event.Manager.getNextUniqueId();
var dE=dz+(dB?cF:cP)+dD;
this.__ea[dE]={type:dz,listener:dA,self:self,capture:dB,unique:dD};
return dE;
},removeListener:function(cv,cw,self,cx){if(this.$$disposed){return null;
}var cy;

if(this.__dL){qx.event.Registration.removeListener(this.__dL,cv,cw,self,cx);
}else{var cA=this.__ea;
var cz;

if(cx==null){cx=false;
}
for(var cB in cA){cz=cA[cB];
if(cz.listener===cw&&cz.self===self&&cz.capture===cx&&cz.type===cv){delete cA[cB];
break;
}}}return this;
},removeListenerById:function(du){if(this.$$disposed){return null;
}
if(this.__dL){qx.event.Registration.removeListenerById(this.__dL,du);
}else{delete this.__ea[du];
}return this;
},hasListener:function(F,G){if(this.$$disposed){return false;
}
if(this.__dL){return qx.event.Registration.hasListener(this.__dL,F,G);
}var I=this.__ea;
var H;

if(G==null){G=false;
}
for(var J in I){H=I[J];
if(H.capture===G&&H.type===F){return true;
}}return false;
}},defer:function(e){e.__el=new qx.util.DeferredCall(e.flush,e);
},destruct:function(){var dy=this.__dL;

if(dy){qx.event.Registration.getManager(dy).removeAllListeners(dy);
dy.$$hash=cI;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__eg;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(cX);
this._disposeFields(da,cT,cN,cM,cO,cC,dd,cV,cW,cE,cU);
}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__em:false,__en:{},scheduleFlush:function(c){var self=qx.ui.core.queue.Manager;
self.__en[c]=true;

if(!self.__em){self.__ep.schedule();
self.__em=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__eo){return;
}self.__eo=true;
self.__ep.cancel();
var e=self.__en;

while(e.visibility||e.widget||e.appearance||e.layout||e.element){if(e.widget){delete e.widget;
qx.ui.core.queue.Widget.flush();
}
if(e.visibility){delete e.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(e.appearance){delete e.appearance;
qx.ui.core.queue.Appearance.flush();
}if(e.widget||e.visibility||e.appearance){continue;
}
if(e.layout){delete e.layout;
qx.ui.core.queue.Layout.flush();
}if(e.widget||e.visibility||e.appearance||e.layout){continue;
}
if(e.element){delete e.element;
qx.html.Element.flush();
}}qx.ui.core.queue.Manager.__em=false;

if(e.dispose){delete e.dispose;
qx.ui.core.queue.Dispose.flush();
}self.__eo=false;
}},defer:function(d){d.__ep=new qx.util.DeferredCall(d.flush);
qx.html.Element._scheduleFlush=d.scheduleFlush;
qx.event.Registration.addListener(window,a,d.flush);
}});
})();
(function(){var T="qx.client",S="qx.dom.Hierarchy",R="previousSibling",Q="*",P="nextSibling",O="parentNode";
qx.Class.define(S,{statics:{getNodeIndex:function(k){var l=0;

while(k&&(k=k.previousSibling)){l++;
}return l;
},getElementIndex:function(C){var D=0;
var E=qx.dom.Node.ELEMENT;

while(C&&(C=C.previousSibling)){if(C.nodeType==E){D++;
}}return D;
},getNextElementSibling:function(g){while(g&&(g=g.nextSibling)&&!qx.dom.Node.isElement(g)){continue;
}return g||null;
},getPreviousElementSibling:function(t){while(t&&(t=t.previousSibling)&&!qx.dom.Node.isElement(t)){continue;
}return t||null;
},contains:qx.core.Variant.select(T,{"webkit|mshtml|opera":function(z,A){if(qx.dom.Node.isDocument(z)){var B=qx.dom.Node.getDocument(A);
return z&&B==z;
}else if(qx.dom.Node.isDocument(A)){return false;
}else{return z.contains(A);
}},"gecko":function(b,c){return !!(b.compareDocumentPosition(c)&16);
},"default":function(d,e){while(e){if(d==e){return true;
}e=e.parentNode;
}return false;
}}),isRendered:function(I){if(!I.offsetParent){return false;
}var J=I.ownerDocument||I.document;
if(J.body.contains){return J.body.contains(I);
}if(J.compareDocumentPosition){return !!(J.compareDocumentPosition(I)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(x,y){return this.contains(y,x);
},getCommonParent:qx.core.Variant.select(T,{"mshtml|opera":function(U,V){if(U===V){return U;
}
while(U&&qx.dom.Node.isElement(U)){if(U.contains(V)){return U;
}U=U.parentNode;
}return null;
},"default":function(n,o){if(n===o){return n;
}var p={};
var s=qx.core.ObjectRegistry;
var r,q;

while(n||o){if(n){r=s.toHashCode(n);

if(p[r]){return p[r];
}p[r]=n;
n=n.parentNode;
}
if(o){q=s.toHashCode(o);

if(p[q]){return p[q];
}p[q]=o;
o=o.parentNode;
}}return null;
}}),getAncestors:function(m){return this._recursivelyCollect(m,O);
},getChildElements:function(M){M=M.firstChild;

if(!M){return [];
}var N=this.getNextSiblings(M);

if(M.nodeType===1){N.unshift(M);
}return N;
},getDescendants:function(K){return qx.lang.Array.fromCollection(K.getElementsByTagName(Q));
},getFirstDescendant:function(f){f=f.firstChild;

while(f&&f.nodeType!=1){f=f.nextSibling;
}return f;
},getLastDescendant:function(H){H=H.lastChild;

while(H&&H.nodeType!=1){H=H.previousSibling;
}return H;
},getPreviousSiblings:function(G){return this._recursivelyCollect(G,R);
},getNextSiblings:function(a){return this._recursivelyCollect(a,P);
},_recursivelyCollect:function(h,i){var j=[];

while(h=h[i]){if(h.nodeType==1){j.push(h);
}}return j;
},getSiblings:function(F){return this.getPreviousSiblings(F).reverse().concat(this.getNextSiblings(F));
},isEmpty:function(L){L=L.firstChild;

while(L){if(L.nodeType===qx.dom.Node.ELEMENT||L.nodeType===qx.dom.Node.TEXT){return false;
}L=L.nextSibling;
}return true;
},cleanWhitespace:function(u){var v=u.firstChild;

while(v){var w=v.nextSibling;

if(v.nodeType==3&&!/\S/.test(v.nodeValue)){u.removeChild(v);
}v=w;
}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(K,stop,L){var parent=K.parentNode;
var Q=qx.dom.Node.getDocument(K);
var M=Q.body;
var Y,W,T;
var bb,R,bc;
var U,bd,bg;
var be,O,X,N;
var S,bf,V;
var P=L===g;
var ba=L===c;
stop=stop?stop.parentNode:Q;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){W=parent.scrollLeft;
T=W+qx.bom.Viewport.getWidth();
bb=qx.bom.Viewport.getWidth();
R=parent.clientWidth;
bc=parent.scrollWidth;
U=0;
bd=0;
bg=0;
}else{Y=qx.bom.element.Location.get(parent);
W=Y.left;
T=Y.right;
bb=parent.offsetWidth;
R=parent.clientWidth;
bc=parent.scrollWidth;
U=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
bd=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
bg=bb-R-U-bd;
}be=qx.bom.element.Location.get(K);
O=be.left;
X=be.right;
N=K.offsetWidth;
S=O-W-U;
bf=X-T+bd;
V=0;
if(P){V=S;
}else if(ba){V=bf+bg;
}else if(S<0||N>R){V=S;
}else if(bf>0){V=bf+bg;
}parent.scrollLeft+=V;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoViewY:function(o,stop,p){var parent=o.parentNode;
var v=qx.dom.Node.getDocument(o);
var q=v.body;
var D,r,z;
var F,C,x;
var t,u,s;
var H,I,E,y;
var B,w,J;
var G=p===d;
var A=p===e;
stop=stop?stop.parentNode:v;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===q||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===q){r=parent.scrollTop;
z=r+qx.bom.Viewport.getHeight();
F=qx.bom.Viewport.getHeight();
C=parent.clientHeight;
x=parent.scrollHeight;
t=0;
u=0;
s=0;
}else{D=qx.bom.element.Location.get(parent);
r=D.top;
z=D.bottom;
F=parent.offsetHeight;
C=parent.clientHeight;
x=parent.scrollHeight;
t=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
u=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
s=F-C-t-u;
}H=qx.bom.element.Location.get(o);
I=H.top;
E=H.bottom;
y=o.offsetHeight;
B=I-r-t;
w=E-z+u;
J=0;
if(G){J=B;
}else if(A){J=w+s;
}else if(B<0||y>C){J=B;
}else if(w>0){J=w+s;
}parent.scrollTop+=J;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===q){break;
}parent=parent.parentNode;
}},intoView:function(l,stop,m,n){this.intoViewX(l,stop,m);
this.intoViewY(l,stop,n);
}}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="scroll",g="border-box",f="position",e="borderBottomWidth",d="qx.client",c="borderRightWidth",b="auto",a="marginTop",B="marginLeft",A="padding",z="fixed",y="CSS1Compat",x="qx.bom.element.Location",w="paddingLeft",v="static",u="marginBottom",t="visible",s="BODY",q="paddingBottom",r="paddingTop",o="marginRight",p="margin",m="overflow",n="paddingRight",k="border",l="absolute";
qx.Class.define(x,{statics:{__eq:function(J,K){return qx.bom.element.Style.get(J,K,qx.bom.element.Style.COMPUTED_MODE,false);
},__er:function(S,T){return parseInt(qx.bom.element.Style.get(S,T,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__es:function(bo){var br=0,top=0;
if(bo.getBoundingClientRect){var bq=qx.dom.Node.getWindow(bo);
br-=qx.bom.Viewport.getScrollLeft(bq);
top-=qx.bom.Viewport.getScrollTop(bq);
}else{var bp=qx.dom.Node.getDocument(bo).body;
bo=bo.parentNode;
while(bo&&bo!=bp){br+=bo.scrollLeft;
top+=bo.scrollTop;
bo=bo.parentNode;
}}return {left:br,top:top};
},__et:qx.core.Variant.select(d,{"mshtml":function(U){var W=qx.dom.Node.getDocument(U);
var V=W.body;
var X=0;
var top=0;
X-=V.clientLeft+W.documentElement.clientLeft;
top-=V.clientTop+W.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){X+=this.__er(V,i);
top+=this.__er(V,j);
}return {left:X,top:top};
},"webkit":function(E){var G=qx.dom.Node.getDocument(E);
var F=G.body;
var H=F.offsetLeft;
var top=F.offsetTop;
H+=this.__er(F,i);
top+=this.__er(F,j);
if(G.compatMode===y){H+=this.__er(F,B);
top+=this.__er(F,a);
}return {left:H,top:top};
},"gecko":function(bk){var bl=qx.dom.Node.getDocument(bk).body;
var bn=bl.offsetLeft;
var top=bl.offsetTop;
if(qx.bom.element.BoxSizing.get(bl)!==g){bn+=this.__er(bl,i);
top+=this.__er(bl,j);
if(!bk.getBoundingClientRect){var bm;

while(bk){if(this.__eq(bk,f)===l||this.__eq(bk,f)===z){bm=true;
break;
}bk=bk.offsetParent;
}
if(!bm){bn+=this.__er(bl,i);
top+=this.__er(bl,j);
}}}return {left:bn,top:top};
},"default":function(N){var O=qx.dom.Node.getDocument(N).body;
var P=O.offsetLeft;
var top=O.offsetTop;
return {left:P,top:top};
}}),__eu:qx.core.Variant.select(d,{"mshtml|webkit":function(bv){var bx=qx.dom.Node.getDocument(bv);
if(bv.getBoundingClientRect){var by=bv.getBoundingClientRect();
var bz=by.left;
var top=by.top;
}else{var bz=bv.offsetLeft;
var top=bv.offsetTop;
bv=bv.offsetParent;
var bw=bx.body;
while(bv&&bv!=bw){bz+=bv.offsetLeft;
top+=bv.offsetTop;
bz+=this.__er(bv,i);
top+=this.__er(bv,j);
bv=bv.offsetParent;
}}return {left:bz,top:top};
},"gecko":function(Y){if(Y.getBoundingClientRect){var bc=Y.getBoundingClientRect();
var bd=Math.round(bc.left);
var top=Math.round(bc.top);
}else{var bd=0;
var top=0;
var ba=qx.dom.Node.getDocument(Y).body;
var bb=qx.bom.element.BoxSizing;

if(bb.get(Y)!==g){bd-=this.__er(Y,i);
top-=this.__er(Y,j);
}
while(Y&&Y!==ba){bd+=Y.offsetLeft;
top+=Y.offsetTop;
if(bb.get(Y)!==g){bd+=this.__er(Y,i);
top+=this.__er(Y,j);
}if(Y.parentNode&&this.__eq(Y.parentNode,m)!=t){bd+=this.__er(Y.parentNode,i);
top+=this.__er(Y.parentNode,j);
}Y=Y.offsetParent;
}}return {left:bd,top:top};
},"default":function(bJ){var bL=0;
var top=0;
var bK=qx.dom.Node.getDocument(bJ).body;
while(bJ&&bJ!==bK){bL+=bJ.offsetLeft;
top+=bJ.offsetTop;
bJ=bJ.offsetParent;
}return {left:bL,top:top};
}}),get:function(bA,bB){var bC=this.__et(bA);

if(bA.tagName==s){var bI=bC.left;
var top=bC.top;
}else{var bH=this.__eu(bA);
var scroll=this.__es(bA);
var bI=bH.left+bC.left-scroll.left;
var top=bH.top+bC.top-scroll.top;
}var bD=bI+bA.offsetWidth;
var bE=top+bA.offsetHeight;

if(bB){if(bB==A||bB==h){var bF=qx.bom.element.Overflow.getX(bA);

if(bF==h||bF==b){bD+=bA.scrollWidth-bA.offsetWidth+this.__er(bA,i)+this.__er(bA,c);
}var bG=qx.bom.element.Overflow.getY(bA);

if(bG==h||bG==b){bE+=bA.scrollHeight-bA.offsetHeight+this.__er(bA,j)+this.__er(bA,e);
}}
switch(bB){case A:bI+=this.__er(bA,w);
top+=this.__er(bA,r);
bD-=this.__er(bA,n);
bE-=this.__er(bA,q);
case h:bI-=bA.scrollLeft;
top-=bA.scrollTop;
bD-=bA.scrollLeft;
bE-=bA.scrollTop;
case k:bI+=this.__er(bA,i);
top+=this.__er(bA,j);
bD-=this.__er(bA,c);
bE-=this.__er(bA,e);
break;
case p:bI-=this.__er(bA,B);
top-=this.__er(bA,a);
bD+=this.__er(bA,o);
bE+=this.__er(bA,u);
break;
}}return {left:bI,top:top,right:bD,bottom:bE};
},getLeft:function(C,D){return this.get(C,D).left;
},getTop:function(Q,R){return this.get(Q,R).top;
},getRight:function(L,M){return this.get(L,M).right;
},getBottom:function(bM,bN){return this.get(bM,bN).bottom;
},getRelative:function(be,bf,bg,bh){var bj=this.get(be,bg);
var bi=this.get(bf,bh);
return {left:bj.left-bi.left,top:bj.top-bi.top,right:bj.right-bi.right,bottom:bj.bottom-bi.bottom};
},getPosition:function(I){return this.getRelative(I,this.getOffsetParent(I));
},getOffsetParent:function(bs){var bu=bs.offsetParent||document.body;
var bt=qx.bom.element.Style;

while(bu&&(!/^body|html$/i.test(bu.tagName)&&bt.get(bu,f)===v)){bu=bu.offsetParent;
}return bu;
}}});
})();
(function(){var x="abstract",w="qx.event.dispatch.AbstractBubbling";
qx.Class.define(w,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:x,construct:function(b){this._manager=b;
},members:{_getParent:function(a){throw new Error("Missing implementation");
},canDispatchEvent:function(u,event,v){return event.getBubbles();
},dispatchEvent:function(c,event,d){var parent=c;
var o=this._manager;
var l,s;
var h;
var n,q;
var p;
var r=[];
l=o.getListeners(c,d,true);
s=o.getListeners(c,d,false);

if(l){r.push(l);
}
if(s){r.push(s);
}var parent=this._getParent(c);
var f=[];
var e=[];
var g=[];
var m=[];
while(parent!=null){l=o.getListeners(parent,d,true);

if(l){g.push(l);
m.push(parent);
}s=o.getListeners(parent,d,false);

if(s){f.push(s);
e.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=g.length-1;i>=0;i--){p=m[i];
event.setCurrentTarget(p);
h=g[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(c);

for(var i=0,t=r.length;i<t;i++){h=r[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||c;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,t=f.length;i<t;i++){p=e[i];
event.setCurrentTarget(p);
h=f[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var m="keydown",l="keypress",k="qx.client",j="NumLock",i="keyup",h="Enter",g="0",f="9",e="-",d="PageUp",bx="+",bw="PrintScreen",bv="gecko",bu="A",bt="Z",bs="Left",br="F5",bq="Down",bp="Up",bo="F11",t="F6",u="useraction",r="F3",s="keyinput",p="Insert",q="F8",n="End",o="/",B="Delete",C="*",Q="F1",M="F4",Y="Home",T="F2",bk="F12",be="PageDown",H="F7",bn="F9",bm="F10",bl="Right",F="text",J="Escape",L="webkit",O="5",R="3",U="Meta",bb="7",bg="CapsLock",v="__ew",w="input",I="Control",X="Space",W="Tab",V="Shift",bd="Pause",bc="Unidentified",S="qx.event.handler.Keyboard",ba="__ex",a="mshtml",bf="mshtml|webkit",x="6",y="__ey",N="off",b="Apps",c="4",E="Alt",z="2",A="Scroll",D="1",P="8",bi="Win",bh="__ev",K="autoComplete",bj=",",G="Backspace";
qx.Class.define(S,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cg){arguments.callee.base.call(this);
this.__ev=cg;
this.__ew=cg.getWindow();
if(qx.core.Variant.isSet(k,bv)){this.__ex=this.__ew;
}else{this.__ex=this.__ew.document.documentElement;
}this.__ey={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bH){if(this._identifierToKeyCodeMap[bH]){return true;
}
if(bH.length!=1){return false;
}
if(bH>=g&&bH<=f){return true;
}
if(bH>=bu&&bH<=bt){return true;
}
switch(bH){case bx:case e:case C:case o:return true;
default:return false;
}}},members:{__ez:null,__ev:null,__ew:null,__ex:null,__ey:null,canHandleEvent:function(cK,cL){},registerEvent:function(cG,cH,cI){},unregisterEvent:function(cm,cn,co){},_fireInputEvent:function(bV,bW){var bX=this.__ev.getHandler(qx.event.handler.Focus);
var bY=bX.getActive();
if(!bY||bY.offsetWidth==0){bY=bX.getFocus();
}if(bY&&bY.offsetWidth!=0){var event=qx.event.Registration.createEvent(s,qx.event.type.KeyInput,[bV,bY,bW]);
this.__ev.dispatchEvent(bY,event);
}if(this.__ew){qx.event.Registration.fireEvent(this.__ew,u,qx.event.type.Data,[s]);
}},_fireSequenceEvent:function(bO,bP,bQ){var bR=this.__ev.getHandler(qx.event.handler.Focus);
var bT=bR.getActive();
if(!bT||bT.offsetWidth==0){bT=bR.getFocus();
}if(!bT||bT.offsetWidth==0){bT=this.__ev.getWindow().document.body;
}var event=qx.event.Registration.createEvent(bP,qx.event.type.KeySequence,[bO,bT,bQ]);
this.__ev.dispatchEvent(bT,event);
if(qx.core.Variant.isSet(k,bf)){if(bP==m&&event.getDefaultPrevented()){var bS=bO.keyCode;

if(!(this._isNonPrintableKeyCode(bS)||bS==8||bS==9)){this._fireSequenceEvent(bO,l,bQ);
}}}if(this.__ew){qx.event.Registration.fireEvent(this.__ew,u,qx.event.type.Data,[bP]);
}},_initKeyObserver:function(){this.__ez=qx.lang.Function.listener(this.__eB,this);
this.__eA=qx.lang.Function.listener(this.__eE,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ex,i,this.__ez);
Event.addNativeListener(this.__ex,m,this.__ez);
Event.addNativeListener(this.__ex,l,this.__eA);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ex,i,this.__ez);
Event.removeNativeListener(this.__ex,m,this.__ez);
Event.removeNativeListener(this.__ex,l,this.__eA);

for(var cy in (this.__eD||{})){var cx=this.__eD[cy];
Event.removeNativeListener(cx.target,l,cx.callback);
}delete (this.__eD);
},__eB:qx.core.Variant.select(k,{"mshtml":function(ci){ci=window.event||ci;
var cl=ci.keyCode;
var cj=0;
var ck=ci.type;
if(!(this.__ey[cl]==m&&ck==m)){this._idealKeyHandler(cl,cj,ck,ci);
}if(ck==m){if(this._isNonPrintableKeyCode(cl)||cl==8||cl==9){this._idealKeyHandler(cl,cj,l,ci);
}}this.__ey[cl]=ck;
},"gecko":function(by){var bC=this._keyCodeFix[by.keyCode]||by.keyCode;
var bA=by.charCode;
var bB=by.type;
if(qx.bom.client.Platform.WIN){var bz=bC?this._keyCodeToIdentifier(bC):this._charCodeToIdentifier(bA);

if(!(this.__ey[bz]==m&&bB==m)){this._idealKeyHandler(bC,bA,bB,by);
}this.__ey[bz]=bB;
}else{this._idealKeyHandler(bC,bA,bB,by);
}this.__eC(by.target,bB,bC);
},"webkit":function(ct){var cw=0;
var cu=0;
var cv=ct.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cv==i||cv==m){cw=this._charCode2KeyCode[ct.charCode]||ct.keyCode;
}else{if(this._charCode2KeyCode[ct.charCode]){cw=this._charCode2KeyCode[ct.charCode];
}else{cu=ct.charCode;
}}this._idealKeyHandler(cw,cu,cv,ct);
}else{cw=ct.keyCode;
if(!(this.__ey[cw]==m&&cv==m)){this._idealKeyHandler(cw,cu,cv,ct);
}if(cv==m){if(this._isNonPrintableKeyCode(cw)||cw==8||cw==9){this._idealKeyHandler(cw,cu,l,ct);
}}this.__ey[cw]=cv;
}},"opera":function(ca){this._idealKeyHandler(ca.keyCode,0,ca.type,ca);
}}),__eC:qx.core.Variant.select(k,{"gecko":function(cb,cc,cd){if(cc===m&&(cd==33||cd==34||cd==38||cd==40)&&cb.type==F&&cb.tagName.toLowerCase()===w&&cb.getAttribute(K)!==N){if(!this.__eD){this.__eD={};
}var ce=qx.core.ObjectRegistry.toHashCode(cb);

if(this.__eD[ce]){return;
}var self=this;
this.__eD[ce]={target:cb,callback:function(cf){qx.bom.Event.stopPropagation(cf);
self.__eE(cf);
}};
qx.bom.Event.addNativeListener(cb,l,this.__eD[ce].callback);
}},"default":null}),__eE:qx.core.Variant.select(k,{"mshtml":function(ch){ch=window.event||ch;

if(this._charCode2KeyCode[ch.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[ch.keyCode],0,ch.type,ch);
}else{this._idealKeyHandler(0,ch.keyCode,ch.type,ch);
}},"gecko":function(cp){var cs=this._keyCodeFix[cp.keyCode]||cp.keyCode;
var cq=cp.charCode;
var cr=cp.type;
this._idealKeyHandler(cs,cq,cr,cp);
},"webkit":function(bD){if(qx.bom.client.Engine.VERSION<525.13){var bG=0;
var bE=0;
var bF=bD.type;

if(bF==i||bF==m){bG=this._charCode2KeyCode[bD.charCode]||bD.keyCode;
}else{if(this._charCode2KeyCode[bD.charCode]){bG=this._charCode2KeyCode[bD.charCode];
}else{bE=bD.charCode;
}}this._idealKeyHandler(bG,bE,bF,bD);
}else{if(this._charCode2KeyCode[bD.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bD.keyCode],0,bD.type,bD);
}else{this._idealKeyHandler(0,bD.keyCode,bD.type,bD);
}}},"opera":function(cM){if(this._keyCodeToIdentifierMap[cM.keyCode]){this._idealKeyHandler(cM.keyCode,0,cM.type,cM);
}else{this._idealKeyHandler(0,cM.keyCode,cM.type,cM);
}}}),_idealKeyHandler:function(cB,cC,cD,cE){if(!cB&&!cC){return;
}var cF;
if(cB){cF=this._keyCodeToIdentifier(cB);
this._fireSequenceEvent(cE,cD,cF);
}else{cF=this._charCodeToIdentifier(cC);
this._fireSequenceEvent(cE,l,cF);
this._fireInputEvent(cE,cC);
}},_specialCharCodeMap:{8:G,9:W,13:h,27:J,32:X},_keyCodeToIdentifierMap:{16:V,17:I,18:E,20:bg,224:U,37:bs,38:bp,39:bl,40:bq,33:d,34:be,35:n,36:Y,45:p,46:B,112:Q,113:T,114:r,115:M,116:br,117:t,118:H,119:q,120:bn,121:bm,122:bo,123:bk,144:j,44:bw,145:A,19:bd,91:bi,93:b},_numpadToCharCode:{96:g.charCodeAt(0),97:D.charCodeAt(0),98:z.charCodeAt(0),99:R.charCodeAt(0),100:c.charCodeAt(0),101:O.charCodeAt(0),102:x.charCodeAt(0),103:bb.charCodeAt(0),104:P.charCodeAt(0),105:f.charCodeAt(0),106:C.charCodeAt(0),107:bx.charCodeAt(0),109:e.charCodeAt(0),110:bj.charCodeAt(0),111:o.charCodeAt(0)},_charCodeA:bu.charCodeAt(0),_charCodeZ:bt.charCodeAt(0),_charCode0:g.charCodeAt(0),_charCode9:f.charCodeAt(0),_isNonPrintableKeyCode:function(cJ){return this._keyCodeToIdentifierMap[cJ]?true:false;
},_isIdentifiableKeyCode:function(bI){if(bI>=this._charCodeA&&bI<=this._charCodeZ){return true;
}if(bI>=this._charCode0&&bI<=this._charCode9){return true;
}if(this._specialCharCodeMap[bI]){return true;
}if(this._numpadToCharCode[bI]){return true;
}if(this._isNonPrintableKeyCode(bI)){return true;
}return false;
},_keyCodeToIdentifier:function(cz){if(this._isIdentifiableKeyCode(cz)){var cA=this._numpadToCharCode[cz];

if(cA){return String.fromCharCode(cA);
}return (this._keyCodeToIdentifierMap[cz]||this._specialCharCodeMap[cz]||String.fromCharCode(cz));
}else{return bc;
}},_charCodeToIdentifier:function(bU){return this._specialCharCodeMap[bU]||String.fromCharCode(bU).toUpperCase();
},_identifierToKeyCode:function(bJ){return qx.event.handler.Keyboard._identifierToKeyCodeMap[bJ]||bJ.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this._disposeFields(bh,v,ba,y);
},defer:function(bK,bL,bM){qx.event.Registration.addHandler(bK);
if(!bK._identifierToKeyCodeMap){bK._identifierToKeyCodeMap={};

for(var bN in bL._keyCodeToIdentifierMap){bK._identifierToKeyCodeMap[bL._keyCodeToIdentifierMap[bN]]=parseInt(bN,10);
}
for(var bN in bL._specialCharCodeMap){bK._identifierToKeyCodeMap[bL._specialCharCodeMap[bN]]=parseInt(bN,10);
}}
if(qx.core.Variant.isSet(k,a)){bL._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(k,bv)){bL._keyCodeFix={12:bL._identifierToKeyCode(j)};
}else if(qx.core.Variant.isSet(k,L)){if(qx.bom.client.Engine.VERSION<525.13){bL._charCode2KeyCode={63289:bL._identifierToKeyCode(j),63276:bL._identifierToKeyCode(d),63277:bL._identifierToKeyCode(be),63275:bL._identifierToKeyCode(n),63273:bL._identifierToKeyCode(Y),63234:bL._identifierToKeyCode(bs),63232:bL._identifierToKeyCode(bp),63235:bL._identifierToKeyCode(bl),63233:bL._identifierToKeyCode(bq),63272:bL._identifierToKeyCode(B),63302:bL._identifierToKeyCode(p),63236:bL._identifierToKeyCode(Q),63237:bL._identifierToKeyCode(T),63238:bL._identifierToKeyCode(r),63239:bL._identifierToKeyCode(M),63240:bL._identifierToKeyCode(br),63241:bL._identifierToKeyCode(t),63242:bL._identifierToKeyCode(H),63243:bL._identifierToKeyCode(q),63244:bL._identifierToKeyCode(bn),63245:bL._identifierToKeyCode(bm),63246:bL._identifierToKeyCode(bo),63247:bL._identifierToKeyCode(bk),63248:bL._identifierToKeyCode(bw),3:bL._identifierToKeyCode(h),12:bL._identifierToKeyCode(j),13:bL._identifierToKeyCode(h)};
}else{bL._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var P="qx.client",O="mouseup",N="mousedown",M="click",L="contextmenu",K="dblclick",J="mousewheel",I="mouseover",H="mouseout",G="DOMMouseScroll",A="mousemove",F="mshtml|webkit|opera",D="__eG",z="useraction",y="__eH",C="__eM",B="qx.event.handler.Mouse",E="gecko|webkit",x="__eF";
qx.Class.define(B,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(w){arguments.callee.base.call(this);
this.__eF=w;
this.__eG=w.getWindow();
this.__eH=this.__eG.document.documentElement;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eF:null,__eG:null,__eH:null,canHandleEvent:function(i,j){},registerEvent:function(p,q,r){},unregisterEvent:function(Q,R,S){},__eN:function(a,b,c){if(!c){c=a.target||a.srcElement;
}if(c&&c.nodeType){qx.event.Registration.fireEvent(c,b||a.type,qx.event.type.Mouse,[a,c,null,true,true]);
}qx.event.Registration.fireEvent(this.__eG,z,qx.event.type.Data,[b||a.type]);
},_initButtonObserver:function(){this.__eI=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eH,N,this.__eI);
Event.addNativeListener(this.__eH,O,this.__eI);
Event.addNativeListener(this.__eH,M,this.__eI);
Event.addNativeListener(this.__eH,K,this.__eI);
Event.addNativeListener(this.__eH,L,this.__eI);
},_initMoveObserver:function(){this.__eJ=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eH,A,this.__eJ);
Event.addNativeListener(this.__eH,I,this.__eJ);
Event.addNativeListener(this.__eH,H,this.__eJ);
},_initWheelObserver:function(){this.__eK=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var o=qx.core.Variant.isSet(P,F)?J:G;
Event.addNativeListener(this.__eH,o,this.__eK);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eH,N,this.__eI);
Event.removeNativeListener(this.__eH,O,this.__eI);
Event.removeNativeListener(this.__eH,M,this.__eI);
Event.removeNativeListener(this.__eH,K,this.__eI);
Event.removeNativeListener(this.__eH,L,this.__eI);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eH,A,this.__eJ);
Event.removeNativeListener(this.__eH,I,this.__eJ);
Event.removeNativeListener(this.__eH,H,this.__eJ);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var s=qx.core.Variant.isSet(P,F)?J:G;
Event.removeNativeListener(this.__eH,s,this.__eK);
},_onMoveEvent:function(ba){this.__eN(ba);
},_onButtonEvent:function(T){var U=T.type;
var V=T.target||T.srcElement;
if(qx.core.Variant.isSet(P,E)){if(V&&V.nodeType==3){V=V.parentNode;
}}
if(this.__eO){this.__eO(T,U,V);
}
if(this.__eQ){this.__eQ(T,U,V);
}this.__eN(T,U,V);

if(this.__eP){this.__eP(T,U,V);
}
if(this.__eR){this.__eR(T,U,V);
}this.__eL=U;
},_onWheelEvent:function(d){this.__eN(d,J);
},__eO:qx.core.Variant.select(P,{"webkit":function(t,u,v){if(u==L){this.__eN(t,N,v);
this.__eN(t,O,v);
}},"default":null}),__eP:qx.core.Variant.select(P,{"opera":function(W,X,Y){if(X==O&&W.button==2){this.__eN(W,L,Y);
}},"default":null}),__eQ:qx.core.Variant.select(P,{"mshtml":function(l,m,n){if(m==O&&this.__eL==M){this.__eN(l,N,n);
}else if(m==K){this.__eN(l,M,n);
}},"default":null}),__eR:qx.core.Variant.select(P,{"mshtml":null,"default":function(e,f,g){switch(f){case N:this.__eM=g;
break;
case O:if(g!==this.__eM){var h=qx.dom.Hierarchy.getCommonParent(g,this.__eM);
this.__eN(e,M,h);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(x,D,y,C);
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var j="qx.event.handler.Capture";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(h,i){},registerEvent:function(e,f,g){},unregisterEvent:function(a,b,c){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var B="alias",A="copy",z="blur",y="mouseout",x="keydown",w="Ctrl",v="Shift",u="mousemove",t="move",s="mouseover",ba="Alt",Y="keyup",X="mouseup",W="dragend",V="on",U="mousedown",T="qxDraggable",S="drag",R="__eT",Q="drop",I="qxDroppable",J="__fl",G="qx.event.handler.DragDrop",H="__eY",E="__fh",F="droprequest",C="__eX",D="dragstart",K="__fa",L="__eS",N="__eW",M="dragchange",P="dragleave",O="dragover";
qx.Class.define(G,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){arguments.callee.base.call(this);
this.__eS=r;
this.__eT=r.getWindow().document.documentElement;
this.__eS.addListener(this.__eT,U,this._onMouseDown,this);
this.__eV();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,f){},registerEvent:function(a,b,c){},unregisterEvent:function(bj,bk,bl){},addType:function(bb){this.__eW[bb]=true;
},addAction:function(o){this.__eX[o]=true;
},supportsType:function(bs){return !!this.__eW[bs];
},supportsAction:function(bc){return !!this.__eX[bc];
},getData:function(n){if(!this.__fk||!this.__fl){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__eW[n]){throw new Error("Unsupported data type: "+n+"!");
}
if(!this.__fa[n]){this.__eU=n;
this.__fd(F,this.__fh,false);
}
if(!this.__fa[n]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__fa[n]||null;
},getCurrentAction:function(){return this.__fc;
},addData:function(be,bf){this.__fa[be]=bf;
},getCurrentType:function(){return this.__eU;
},__eV:function(){this.__eW={};
this.__eX={};
this.__eY={};
this.__fa={};
},__fb:function(){var bp=this.__eX;
var bn=this.__eY;
var bo=null;

if(this.__fk){if(bn.Shift&&bn.Ctrl&&bp.alias){bo=B;
}else if(bn.Shift&&bn.Alt&&bp.copy){bo=A;
}else if(bn.Shift&&bp.move){bo=t;
}else if(bn.Alt&&bp.alias){bo=B;
}else if(bn.Ctrl&&bp.copy){bo=A;
}else if(bp.move){bo=t;
}else if(bp.copy){bo=A;
}else if(bp.alias){bo=B;
}}
if(bo!=this.__fc){this.__fc=bo;
this.__fd(M,this.__fh,false);
}},__fd:function(g,h,i,j){var l=qx.event.Registration;
var k=l.createEvent(g,qx.event.type.Drag,[i,j]);

if(this.__fh!==this.__fl){if(h==this.__fh){k.setRelatedTarget(this.__fl);
}else{k.setRelatedTarget(this.__fh);
}}return l.dispatchEvent(h,k);
},__fe:function(bm){while(bm&&bm.nodeType==1){if(bm.getAttribute(T)==V){return bm;
}bm=bm.parentNode;
}return null;
},__ff:function(q){while(q&&q.nodeType==1){if(q.getAttribute(I)==V){return q;
}q=q.parentNode;
}return null;
},__fg:function(){this.__fh=null;
this.__eS.removeListener(this.__eT,u,this._onMouseMove,this,true);
this.__eS.removeListener(this.__eT,X,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,z,this._onWindowBlur,this);
this.__eV();
},__fi:function(){if(this.__fj){this.__eS.removeListener(this.__eT,s,this._onMouseOver,this,true);
this.__eS.removeListener(this.__eT,y,this._onMouseOut,this,true);
this.__eS.removeListener(this.__eT,x,this._onKeyDown,this,true);
this.__eS.removeListener(this.__eT,Y,this._onKeyUp,this,true);
this.__fd(W,this.__fh,false);
this.__fj=false;
}this.__fk=false;
this.__fl=null;
this.__fg();
},__fk:false,_onWindowBlur:function(e){this.__fi();
},_onKeyDown:function(e){var p=e.getKeyIdentifier();

switch(p){case ba:case w:case v:if(!this.__eY[p]){this.__eY[p]=true;
this.__fb();
}}},_onKeyUp:function(e){var bd=e.getKeyIdentifier();

switch(bd){case ba:case w:case v:if(this.__eY[bd]){this.__eY[bd]=false;
this.__fb();
}}},_onMouseDown:function(e){if(this.__fj){return;
}var bi=this.__fe(e.getTarget());

if(bi){this.__fm=e.getDocumentLeft();
this.__fn=e.getDocumentTop();
this.__fh=bi;
this.__eS.addListener(this.__eT,u,this._onMouseMove,this,true);
this.__eS.addListener(this.__eT,X,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,z,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fk){this.__fd(Q,this.__fl,false,e);
}if(this.__fj){e.stopPropagation();
}this.__fi();
},_onMouseMove:function(e){if(this.__fj){if(!this.__fd(S,this.__fh,true,e)){this.__fi();
}}else{if(Math.abs(e.getDocumentLeft()-this.__fm)>3||Math.abs(e.getDocumentTop()-this.__fn)>3){if(this.__fd(D,this.__fh,true,e)){this.__fj=true;
this.__eS.addListener(this.__eT,s,this._onMouseOver,this,true);
this.__eS.addListener(this.__eT,y,this._onMouseOut,this,true);
this.__eS.addListener(this.__eT,x,this._onKeyDown,this,true);
this.__eS.addListener(this.__eT,Y,this._onKeyUp,this,true);
var m=this.__eY;
m.Ctrl=e.isCtrlPressed();
m.Shift=e.isShiftPressed();
m.Alt=e.isAltPressed();
this.__fb();
}else{this.__fd(W,this.__fh,false);
this.__fg();
}}}},_onMouseOver:function(e){var bq=e.getTarget();
var br=this.__ff(bq);

if(br&&br!=this.__fl){this.__fk=this.__fd(O,br,true,e);
this.__fl=br;
this.__fb();
}},_onMouseOut:function(e){var bg=e.getTarget();
var bh=this.__ff(bg);

if(bh&&bh==this.__fl){this.__fd(P,this.__fl,false,e);
this.__fl=null;
this.__fk=false;
this.__fb();
}}},destruct:function(){this._disposeFields(E,J,L,R,N,C,H,K);
},defer:function(bt){qx.event.Registration.addHandler(bt);
}});
})();
(function(){var j="-",i="qx.event.handler.Element",h="_manager",g="_registeredEvents";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){arguments.callee.base.call(this);
this._manager=o;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(A,B){},registerEvent:function(a,b,c){var f=qx.core.ObjectRegistry.toHashCode(a);
var d=f+j+b;
var e=qx.lang.Function.listener(this._onNative,this,d);
qx.bom.Event.addNativeListener(a,b,e);
this._registeredEvents[d]={element:a,type:b,listener:e};
},unregisterEvent:function(p,q,r){var u=this._registeredEvents;

if(!u){return;
}var v=qx.core.ObjectRegistry.toHashCode(p);
var s=v+j+q;
var t=this._registeredEvents[s];
qx.bom.Event.removeNativeListener(p,q,t.listener);
delete this._registeredEvents[s];
},_onNative:function(w,x){var z=this._registeredEvents;

if(!z){return;
}var y=z[x];
qx.event.Registration.fireNonBubblingEvent(y.element,y.type,qx.event.type.Native,[w]);
}},destruct:function(){var k;
var l=this._registeredEvents;

for(var m in l){k=l[m];
qx.bom.Event.removeNativeListener(k.element,k.type,k.listener);
}this._disposeFields(h,g);
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var u="qx.event.handler.Appear",t="__fo",s="__fp",r="disappear",q="appear";
qx.Class.define(u,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__fo=a;
this.__fp={};
qx.event.handler.Appear.__fq[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fq:{},refresh:function(){var o=this.__fq;

for(var p in o){o[p].refresh();
}}},members:{canHandleEvent:function(h,i){},registerEvent:function(j,k,l){var m=qx.core.ObjectRegistry.toHashCode(j);
var n=this.__fp;

if(n&&!n[m]){n[m]=j;
j.$$displayed=j.offsetWidth>0;
}},unregisterEvent:function(v,w,x){var y=qx.core.ObjectRegistry.toHashCode(v);
var z=this.__fp;

if(!z){return;
}
if(z[y]){delete z[y];
v.$$displayed=null;
}},refresh:function(){var e=this.__fp;
var f;

for(var d in e){f=e[d];
var b=f.offsetWidth>0;

if((!!f.$$displayed)!==b){f.$$displayed=b;
var c=qx.event.Registration.createEvent(b?q:r);
this.__fo.dispatchEvent(f,c);
}}}},destruct:function(){this._disposeFields(t,s);
delete qx.event.handler.Appear.__fq[this.$$hash];
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var X="mshtml",W="",V="qx.client",U=">",T="<",S=" ",R="='",Q="http://www.w3.org/1999/xhtml",P="qx.bom.Element",O="div",M="' ",N="></";
qx.Class.define(P,{statics:{__fr:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,e,f){if(!f){f=window;
}
if(!name){throw new Error("The tag name is missing!");
}var h=this.__fr;
var g=W;

for(var m in e){if(h[m]){g+=m+R+e[m]+M;
}}var n;
if(g!=W){if(qx.bom.client.Engine.MSHTML){n=f.document.createElement(T+name+S+g+U);
}else{var k=f.document.createElement(O);
k.innerHTML=T+name+S+g+N+name+U;
n=k.firstChild;
}}else{if(f.document.createElementNS){n=f.document.createElementNS(Q,name);
}else{n=f.document.createElement(name);
}}
for(var m in e){if(!h[m]){qx.bom.element.Attribute.set(n,m,e[m]);
}}return n;
},empty:function(q){return q.innerHTML=W;
},addListener:function(a,b,c,self,d){return qx.event.Registration.addListener(a,b,c,self,d);
},removeListener:function(u,v,w,self,x){return qx.event.Registration.removeListener(u,v,w,self,x);
},removeListenerById:function(r,s){return qx.event.Registration.removeListenerById(r,s);
},hasListener:function(Y,ba,bb){return qx.event.Registration.hasListener(Y,ba,bb);
},focus:function(z){qx.event.Registration.getManager(z).getHandler(qx.event.handler.Focus).focus(z);
},blur:function(y){qx.event.Registration.getManager(y).getHandler(qx.event.handler.Focus).blur(y);
},activate:function(t){qx.event.Registration.getManager(t).getHandler(qx.event.handler.Focus).activate(t);
},deactivate:function(o){qx.event.Registration.getManager(o).getHandler(qx.event.handler.Focus).deactivate(o);
},capture:function(p){qx.event.Registration.getManager(p).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(p);
},releaseCapture:function(bc){qx.event.Registration.getManager(bc).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(bc);
},clone:function(A,B){var E;

if(B||(qx.core.Variant.isSet(V,X)&&!qx.xml.Document.isXmlDocument(A))){var I=qx.event.Registration.getManager(A);
var C=qx.dom.Hierarchy.getDescendants(A);
C.push(A);
}if(qx.core.Variant.isSet(V,X)){for(var i=0,l=C.length;i<l;i++){I.toggleAttachedEvents(C[i],false);
}}var E=A.cloneNode(true);
if(qx.core.Variant.isSet(V,X)){for(var i=0,l=C.length;i<l;i++){I.toggleAttachedEvents(C[i],true);
}}if(B===true){var L=qx.dom.Hierarchy.getDescendants(E);
L.push(E);
var D,G,K,F;

for(var i=0,J=C.length;i<J;i++){K=C[i];
D=I.serializeListeners(K);

if(D.length>0){G=L[i];

for(var j=0,H=D.length;j<H;j++){F=D[j];
I.addListener(G,F.type,F.handler,F.self,F.capture);
}}}}return E;
}}});
})();
(function(){var s="qx.client",r="blur",q="focus",p="mousedown",o="on",n="mouseup",m="DOMFocusOut",l="DOMFocusIn",k="selectstart",j="onmousedown",P="onfocusout",O="onfocusin",N="onmouseup",M="onselectstart",L="draggesture",K="_document",J="_root",I="qx.event.handler.Focus",H="_applyFocus",G="_window",z="deactivate",A="_applyActive",x="focusin",y="qxSelectable",v="tabIndex",w="off",t="_body",u="activate",B="focusout",C="__mouseActive",E="_manager",D="qxKeepFocus",F="qxKeepActive";
qx.Class.define(I,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bK){arguments.callee.base.call(this);
this._manager=bK;
this._window=bK.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:A,nullable:true},focus:{apply:H,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{canHandleEvent:function(b,c){},registerEvent:function(Q,R,S){},unregisterEvent:function(bh,bi,bj){},focus:function(bq){try{bq.focus();
}catch(a){}this.setFocus(bq);
this.setActive(bq);
},activate:function(bN){this.setActive(bN);
},blur:function(bM){try{bM.blur();
}catch(i){}
if(this.getActive()===bM){this.resetActive();
}
if(this.getFocus()===bM){this.resetFocus();
}},deactivate:function(bE){if(this.getActive()===bE){this.resetActive();
}},tryActivate:function(bt){var bu=this.__fP(bt);

if(bu){this.setActive(bu);
}},__fs:function(by,bz,bA,bB){var bD=qx.event.Registration;
var bC=bD.createEvent(bA,qx.event.type.Focus,[by,bz,bB]);
bD.dispatchEvent(by,bC);
},_windowFocused:true,__ft:function(){if(this._windowFocused){this._windowFocused=false;
this.__fs(this._window,null,r,false);
}},__fu:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fs(this._window,null,q,false);
}},_initObserver:qx.core.Variant.select(s,{"gecko":function(){this.__fv=qx.lang.Function.listener(this.__fK,this);
this.__fw=qx.lang.Function.listener(this.__fL,this);
this.__fx=qx.lang.Function.listener(this.__fJ,this);
this.__fy=qx.lang.Function.listener(this.__fI,this);
this.__fz=qx.lang.Function.listener(this.__fD,this);
this._document.addEventListener(p,this.__fv,true);
this._document.addEventListener(n,this.__fw,true);
this._window.addEventListener(q,this.__fx,true);
this._window.addEventListener(r,this.__fy,true);
this._window.addEventListener(L,this.__fz,true);
},"mshtml":function(){this.__fv=qx.lang.Function.listener(this.__fK,this);
this.__fw=qx.lang.Function.listener(this.__fL,this);
this.__fA=qx.lang.Function.listener(this.__fE,this);
this.__fB=qx.lang.Function.listener(this.__fF,this);
this.__fC=qx.lang.Function.listener(this.__fM,this);
this._document.attachEvent(j,this.__fv);
this._document.attachEvent(N,this.__fw);
this._document.attachEvent(O,this.__fA);
this._document.attachEvent(P,this.__fB);
this._document.attachEvent(M,this.__fC);
},"webkit":function(){this.__fv=qx.lang.Function.listener(this.__fK,this);
this.__fw=qx.lang.Function.listener(this.__fL,this);
this.__fB=qx.lang.Function.listener(this.__fF,this);
this.__fx=qx.lang.Function.listener(this.__fJ,this);
this.__fy=qx.lang.Function.listener(this.__fI,this);
this.__fC=qx.lang.Function.listener(this.__fM,this);
this._document.addEventListener(p,this.__fv,true);
this._document.addEventListener(n,this.__fw,true);
this._document.addEventListener(k,this.__fC,false);
this._window.addEventListener(m,this.__fB,true);
this._window.addEventListener(q,this.__fx,true);
this._window.addEventListener(r,this.__fy,true);
},"opera":function(){this.__fv=qx.lang.Function.listener(this.__fK,this);
this.__fw=qx.lang.Function.listener(this.__fL,this);
this.__fA=qx.lang.Function.listener(this.__fE,this);
this.__fB=qx.lang.Function.listener(this.__fF,this);
this._document.addEventListener(p,this.__fv,true);
this._document.addEventListener(n,this.__fw,true);
this._window.addEventListener(l,this.__fA,true);
this._window.addEventListener(m,this.__fB,true);
}}),_stopObserver:qx.core.Variant.select(s,{"gecko":function(){this._document.removeEventListener(p,this.__fv,true);
this._document.removeEventListener(n,this.__fw,true);
this._window.removeEventListener(q,this.__fx,true);
this._window.removeEventListener(r,this.__fy,true);
this._window.removeEventListener(L,this.__fz,true);
},"mshtml":function(){this._document.detachEvent(j,this.__fv);
this._document.detachEvent(N,this.__fw);
this._document.detachEvent(O,this.__fA);
this._document.detachEvent(P,this.__fB);
this._document.detachEvent(M,this.__fC);
},"webkit":function(){this._document.removeEventListener(p,this.__fv,true);
this._document.removeEventListener(k,this.__fC,false);
this._window.removeEventListener(l,this.__fA,true);
this._window.removeEventListener(m,this.__fB,true);
this._window.removeEventListener(q,this.__fx,true);
this._window.removeEventListener(r,this.__fy,true);
},"opera":function(){this._document.removeEventListener(p,this.__fv,true);
this._window.removeEventListener(l,this.__fA,true);
this._window.removeEventListener(m,this.__fB,true);
this._window.removeEventListener(q,this.__fx,true);
this._window.removeEventListener(r,this.__fy,true);
}}),__fD:qx.core.Variant.select(s,{"gecko":function(e){if(!this.__fQ(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null}),__fE:qx.core.Variant.select(s,{"mshtml":function(e){this.__fu();
var f=e.srcElement;
var d=this.__fO(f);

if(d){this.setFocus(d);
}this.tryActivate(f);
},"opera":function(e){var bg=e.target;

if(bg==this._document||bg==this._window){this.__fu();

if(this.__fG){this.setFocus(this.__fG);
delete this.__fG;
}
if(this.__fH){this.setActive(this.__fH);
delete this.__fH;
}}else{this.setFocus(bg);
this.tryActivate(bg);
if(!this.__fQ(bg)){bg.selectionStart=0;
bg.selectionEnd=0;
}}},"default":null}),__fF:qx.core.Variant.select(s,{"mshtml":function(e){if(!e.toElement){this.__ft();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bF=e.target;

if(bF===this.getFocus()){this.resetFocus();
}
if(bF===this.getActive()){this.resetActive();
}},"opera":function(e){var bL=e.target;

if(bL==this._document){this.__ft();
this.__fG=this.getFocus();
this.__fH=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bL===this.getFocus()){this.resetFocus();
}
if(bL===this.getActive()){this.resetActive();
}}},"default":null}),__fI:qx.core.Variant.select(s,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__ft();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__ft();
this.__fG=this.getFocus();
this.__fH=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null}),__fJ:qx.core.Variant.select(s,{"gecko":function(e){var bk=e.target;

if(bk===this._window||bk===this._document){this.__fu();
bk=this._body;
}this.setFocus(bk);
this.tryActivate(bk);
},"webkit":function(e){var bc=e.target;

if(bc===this._window||bc===this._document){this.__fu();

if(this.__fG){this.setFocus(this.__fG);
delete this.__fG;
}
if(this.__fH){this.setActive(this.__fH);
delete this.__fH;
}}else{this.setFocus(bc);
this.tryActivate(bc);
}},"default":null}),__fK:qx.core.Variant.select(s,{"gecko":function(e){var bI=e.target;
var bG=this.__fO(bI);
var bH=this.__fQ(bI);

if(!bH){qx.bom.Event.preventDefault(e);
if(bG){bG.focus();
}}else if(!bG){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var ba=e.srcElement;
var Y=this.__fO(ba);

if(Y){if(!this.__fQ(ba)){ba.unselectable=o;
document.selection.empty();
Y.focus();
}}else{qx.bom.Event.preventDefault(e);
if(!this.__fQ(ba)){ba.unselectable=o;
}}},"webkit":function(e){var h=e.target;
var g=this.__fO(h);

if(g){this.setFocus(g);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bp=e.target;
var bn=this.__fO(bp);

if(!this.__fQ(bp)){qx.bom.Event.preventDefault(e);
if(bn){var bo=this.getFocus();

if(bo&&bo.selectionEnd){bo.selectionStart=0;
bo.selectionEnd=0;
bo.blur();
}if(bn){this.setFocus(bn);
}}}else if(bn){this.setFocus(bn);
}},"default":null}),__fL:qx.core.Variant.select(s,{"mshtml":function(e){var bf=e.srcElement;

if(bf.unselectable){bf.unselectable=w;
}this.tryActivate(bf);
},"gecko":function(e){var bJ=e.target;

while(bJ&&bJ.offsetWidth===undefined){bJ=bJ.parentNode;
}
if(bJ){this.tryActivate(bJ);
}},"webkit|opera":function(e){this.tryActivate(e.target);
},"default":null}),__fM:qx.core.Variant.select(s,{"mshtml|webkit":function(e){if(!this.__fQ(e.srcElement)){qx.bom.Event.preventDefault(e);
}},"default":null}),__fN:function(V){var W=qx.bom.element.Attribute.get(V,v);

if(W>=1){return true;
}var X=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(W>=0&&X[V.tagName]){return true;
}return false;
},__fO:function(bb){while(bb&&bb.nodeType===1){if(bb.getAttribute(D)==o){return null;
}
if(this.__fN(bb)){return bb;
}bb=bb.parentNode;
}return this._body;
},__fP:function(bl){var bm=bl;

while(bl&&bl.nodeType===1){if(bl.getAttribute(F)==o){return null;
}bl=bl.parentNode;
}return bm;
},__fQ:function(bd){while(bd&&bd.nodeType===1){var be=bd.getAttribute(y);

if(be!=null){return be===o;
}bd=bd.parentNode;
}return true;
},_applyActive:function(T,U){if(U){this.__fs(U,T,z,true);
}
if(T){this.__fs(T,U,u,true);
}},_applyFocus:function(br,bs){if(bs){this.__fs(bs,br,B,true);
}
if(br){this.__fs(br,bs,x,true);
}if(bs){this.__fs(bs,br,r,false);
}
if(br){this.__fs(br,bs,q,false);
}}},destruct:function(){this._stopObserver();
this._disposeFields(E,G,K,J,t,C);
},defer:function(bv){qx.event.Registration.addHandler(bv);
var bw=bv.FOCUSABLE_ELEMENTS;

for(var bx in bw){bw[bx.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var p="qx.client",o="mshtml",n="readOnly",m="accessKey",l="qx.bom.element.Attribute",k="rowSpan",j="vAlign",i="className",h="textContent",g="'",F="htmlFor",E="longDesc",D="cellSpacing",C="frameBorder",B="='",A="",z="useMap",y="innerText",x="innerHTML",w="tabIndex",u="cssText",v="dateTime",s="maxLength",t="cellPadding",q="colSpan",r="style";
qx.Class.define(l,{statics:{__fR:{names:{"class":i,"for":F,html:x,text:qx.core.Variant.isSet(p,o)?y:h,colspan:q,rowspan:k,valign:j,datetime:v,accesskey:m,tabindex:w,maxlength:s,readonly:n,longdesc:E,cellpadding:t,cellspacing:D,frameborder:C,usemap:z},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},original:{href:1,src:1,type:1}},compile:function(J){var K=[];
var M=this.__fR.runtime;

for(var L in J){if(!M[L]){K.push(L,B,J[L],g);
}}return K.join(A);
},get:qx.core.Variant.select(p,{"mshtml":function(d,name){var f=this.__fR;
var e;
name=f.names[name]||name;
if(f.original[name]){e=d.getAttribute(name,2);
}else if(f.property[name]){e=d[name];
}else{e=d.getAttribute(name);
}if(f.bools[name]){return !!e;
}return e;
},"default":function(G,name){var I=this.__fR;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(H==null){H=G.getAttribute(name);
}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(a,name,b){var c=this.__fR;
name=c.names[name]||name;
if(c.bools[name]){b=!!b;
}if(c.property[name]){a[name]=b;
}else if(b===true){a.setAttribute(name,name);
}else if(b===false||b===null){a.removeAttribute(name);
}else if(qx.core.Variant.isSet(p,o)&&name==r){a.style.setAttribute(u,b);
}else{a.setAttribute(name,b);
}},reset:function(N,name){this.set(N,name,null);
}}});
})();
(function(){var c="qx.event.type.Dom";
qx.Class.define(c,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{getModifiers:function(){if(!this.__modifiers){var b=0;
var a=this._native;

if(a.shiftKey){b|=qx.event.type.Dom.SHIFT_MASK;
}
if(a.ctrlKey){b|=qx.event.type.Dom.CTRL_MASK;
}
if(a.altKey){b|=qx.event.type.Dom.ALT_MASK;
}
if(a.metaKey){b|=qx.event.type.Dom.META_MASK;
}return b;
}return this.__modifiers;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var f="qx.event.type.KeyInput";
qx.Class.define(f,{extend:qx.event.type.Dom,members:{init:function(c,d,e){arguments.callee.base.call(this,c,d,null,true,true);
this._charCode=e;
return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
b._charCode=this._charCode;
return b;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var i="qx.client",h="left",g="right",f="middle",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(l,m,n,o,p){arguments.callee.base.call(this,l,m,n,o,p);

if(!n){this._relatedTarget=qx.bom.Event.getRelatedTarget(l);
}return this;
},__fS:qx.core.Variant.select(i,{"mshtml":{1:h,2:g,4:f},"default":{0:h,2:g,1:f}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return h;
case b:return g;
default:return this.__fS[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===h;
},isMiddlePressed:function(){return this.getButton()===f;
},isRightPressed:function(){return this.getButton()===g;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(i,{"mshtml":function(){var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(k);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(i,{"mshtml":function(){var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(j);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
},getWheelDelta:qx.core.Variant.select(i,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
}})}});
})();
(function(){var o="qx.client",n="qx.event.type.Drag";
qx.Class.define(n,{extend:qx.event.type.Event,members:{init:function(k,l){arguments.callee.base.call(this,false,k);

if(l){this._native=l.getNativeEvent()||null;
this._originalTarget=l.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(h){var i=arguments.callee.base.call(this,h);
i._native=this._native;
return i;
},getDocumentLeft:qx.core.Variant.select(o,{"mshtml":function(){if(this._native==null){return 0;
}var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(o,{"mshtml":function(){if(this._native==null){return 0;
}var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(c){this.getManager().addType(c);
},addAction:function(j){this.getManager().addAction(j);
},supportsType:function(m){return this.getManager().supportsType(m);
},supportsAction:function(d){return this.getManager().supportsAction(d);
},addData:function(e,f){this.getManager().addData(e,f);
},getData:function(b){return this.getManager().getData(b);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var n="blur",m="losecapture",k="__fT",j="__fV",h="capture",g="click",f="__fU",e="qx.event.dispatch.MouseCapture",d="focus",c="scroll";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(q){arguments.callee.base.call(this);
this.__fT=q;
this.__fU=q.getWindow();
q.addListener(this.__fU,n,this.releaseCapture,this);
q.addListener(this.__fU,d,this.releaseCapture,this);
q.addListener(this.__fU,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fV:null,__fT:null,__fU:null,canDispatchEvent:function(a,event,b){return (this.__fV&&this.__fW[b]);
},dispatchEvent:function(r,event,s){if(s==g){event.stopPropagation();
this.releaseCapture();
return;
}var t=this.__fT.getListeners(this.__fV,s,false);

if(t){event.setCurrentTarget(this.__fV);
event.setEventPhase(qx.event.type.Event.AT_TARGET);

for(var i=0,l=t.length;i<l;i++){var u=t[i].context||event.getCurrentTarget();
t[i].handler.call(u,event);
}}},__fW:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(p){if(this.__fV===p){return;
}
if(this.__fV){this.releaseCapture();
}this.__fV=p;
qx.event.Registration.fireEvent(p,h,qx.event.type.Event,[true,false]);
},releaseCapture:function(){var v=this.__fV;

if(!v){return;
}this.__fV=null;
qx.event.Registration.fireEvent(v,m,qx.event.type.Event,[true,false]);
}},destruct:function(){this._disposeFields(j,k,f);
},defer:function(o){qx.event.Registration.addDispatcher(o);
}});
})();
(function(){var z="qx.client",y="",x="mshtml",w="'",v="SelectionLanguage",u="qx.xml.Document",t=" />",s="MSXML2.DOMDocument.3.0",r='<\?xml version="1.0" encoding="utf-8"?>\n<',q="MSXML2.XMLHTTP.3.0",m="MSXML2.XMLHTTP.6.0",p=" xmlns='",o="text/xml",k="XPath",j="MSXML2.DOMDocument.6.0",n="HTML";
qx.Bootstrap.define(u,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(a){if(a.nodeType===9){return a.documentElement.nodeName!==n;
}else if(a.ownerDocument){return this.isXmlDocument(a.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(z,{"mshtml":function(d,e){var f=new ActiveXObject(this.DOMDOC);
f.setProperty(v,k);

if(e){var g=r;
g+=e;

if(d){g+=p+d+w;
}g+=t;
f.loadXML(g);
}return f;
},"default":function(A,B){return document.implementation.createDocument(A||y,B||y,null);
}}),fromString:qx.core.Variant.select(z,{"mshtml":function(b){var c=qx.xml.Document.create();
c.loadXML(b);
return c;
},"default":function(F){var G=new DOMParser();
return G.parseFromString(F,o);
}})},defer:function(C){if(qx.core.Variant.isSet(z,x)){var D=[j,s];
var E=[m,q];

for(var i=0,l=D.length;i<l;i++){try{new ActiveXObject(D[i]);
new ActiveXObject(E[i]);
}catch(h){continue;
}C.DOMDOC=D[i];
C.XMLHTTP=E[i];
break;
}}}});
})();
(function(){var i="textarea",h="input",g="qx.client",f="character",e="qx.bom.Selection",d="#text",c="EndToEnd",b="button",a="body";
qx.Class.define(e,{statics:{getSelectionObject:qx.core.Variant.select(g,{"mshtml":function(F){return F.selection;
},"default":function(q){return qx.dom.Node.getWindow(q).getSelection();
}}),get:qx.core.Variant.select(g,{"mshtml":function(r){var s=qx.bom.Range.get(qx.dom.Node.getDocument(r));
return s.text;
},"default":function(j){if(qx.dom.Node.isElement(j)&&(j.nodeName.toLowerCase()==h||j.nodeName.toLowerCase()==i)){return j.value.substring(j.selectionStart,j.selectionEnd);
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(j)).toString();
}return null;
}}),getLength:qx.core.Variant.select(g,{"mshtml":function(R){var T=qx.bom.Selection.get(R);
var S=qx.util.StringSplit.split(T,/\r\n/);
return T.length-(S.length-1);
},"opera":function(t){var y,w,u;

if(qx.dom.Node.isElement(t)&&(t.nodeName.toLowerCase()==h||t.nodeName.toLowerCase()==i)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(U){if(qx.dom.Node.isElement(U)&&(U.nodeName.toLowerCase()==h||U.nodeName.toLowerCase()==i)){return U.selectionEnd-U.selectionStart;
}else{return qx.bom.Selection.get(U).length;
}return null;
}}),set:qx.core.Variant.select(g,{"mshtml":function(k,l,m){var n;
if(qx.dom.Node.isDocument(k)){k=k.body;
}
if(qx.dom.Node.isElement(k)||qx.dom.Node.isText(k)){switch(k.nodeName.toLowerCase()){case h:case i:case b:if(m===undefined){m=k.value.length;
}
if(l>=0&&l<=k.value.length&&m>=0&&m<=k.value.length){n=qx.bom.Range.get(k);
n.collapse(true);
n.moveStart(f,l);
n.moveEnd(f,m);
n.select();
return true;
}break;
case d:if(m===undefined){m=k.nodeValue.length;
}
if(l>=0&&l<=k.nodeValue.length&&m>=0&&m<=k.nodeValue.length){n=qx.bom.Range.get(qx.dom.Node.getBodyElement(k));
n.moveToElementText(k.parentNode);
n.collapse(true);
n.moveStart(f,l);
n.moveEnd(f,m);
n.select();
return true;
}break;
default:if(m===undefined){m=k.childNodes.length-1;
}if(k.childNodes[l]&&k.childNodes[m]){n=qx.bom.Range.get(qx.dom.Node.getBodyElement(k));
n.moveToElementText(k.childNodes[l]);
n.collapse(true);
var o=qx.bom.Range.get(qx.dom.Node.getBodyElement(k));
o.moveToElementText(k.childNodes[m]);
n.setEndPoint(c,o);
n.select();
return true;
}}}return false;
},"default":function(G,H,I){var M=G.nodeName.toLowerCase();

if(qx.dom.Node.isElement(G)&&(M==h||M==i)){if(I===undefined){I=G.value.length;
}if(H>=0&&H<=G.value.length&&I>=0&&I<=G.value.length){G.select();
G.setSelectionRange(H,I);
return true;
}}else{var K=false;
var L=qx.dom.Node.getWindow(G).getSelection();
var J=qx.bom.Range.get(G);
if(qx.dom.Node.isText(G)){if(I===undefined){I=G.length;
}
if(H>=0&&H<G.length&&I>=0&&I<=G.length){K=true;
}}else if(qx.dom.Node.isElement(G)){if(I===undefined){I=G.childNodes.length-1;
}
if(H>=0&&G.childNodes[H]&&I>=0&&G.childNodes[I]){K=true;
}}else if(qx.dom.Node.isDocument(G)){G=G.body;

if(I===undefined){I=G.childNodes.length-1;
}
if(H>=0&&G.childNodes[H]&&I>=0&&G.childNodes[I]){K=true;
}}
if(K){if(!L.isCollapsed){L.collapseToStart();
}J.setStart(G,H);
if(qx.dom.Node.isText(G)){J.setEnd(G,I);
}else{J.setEndAfter(G.childNodes[I]);
}if(L.rangeCount>0){L.removeAllRanges();
}L.addRange(J);
return true;
}}return false;
}}),setAll:function(p){return qx.bom.Selection.set(p,0);
},clear:qx.core.Variant.select(g,{"mshtml":function(N){var O=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N));
var P=qx.bom.Range.get(N);
var parent=P.parentElement();
var Q=qx.bom.Range.get(qx.dom.Node.getDocument(N));
if(parent==Q.parentElement()&&parent==N){O.empty();
}},"default":function(z){var B=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(z));
var D=z.nodeName.toLowerCase();
if(qx.dom.Node.isElement(z)&&(D==h||D==i)){z.setSelectionRange(0,0);
qx.bom.Element.blur(z);
}else if(qx.dom.Node.isDocument(z)||D==a){B.collapse(z.body?z.body:z,0);
}else{var C=qx.bom.Range.get(z);

if(!C.collapsed){var E;
var A=C.commonAncestorContainer;
if(qx.dom.Node.isElement(z)&&qx.dom.Node.isText(A)){E=A.parentNode;
}else{E=A;
}
if(E==z){B.collapse(z,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(p){if(qx.dom.Node.isElement(p)){switch(p.nodeName.toLowerCase()){case d:switch(p.type){case j:case i:case c:case l:case f:case h:case g:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}break;
case e:case b:case l:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}},"default":function(m){var n=qx.dom.Node.getDocument(m);
var o=qx.bom.Selection.getSelectionObject(n);

if(o.rangeCount>0){return o.getRangeAt(0);
}else{return n.createRange();
}}})}});
})();
(function(){var f="",e="g",d="$",c="qx.util.StringSplit",b="\\$&",a="^";
qx.Bootstrap.define(c,{statics:{split:function(g,h,k){var n=f;
if(h===undefined){return [g.toString()];
}else if(h===null||h.constructor!==RegExp){h=new RegExp(String(h).replace(/[.*+?^${}()|[\]\/\\]/g,b),e);
}else{n=h.toString().replace(/^[\S\s]+\//,f);

if(!h.global){h=new RegExp(h.source,e+n);
}}var m=new RegExp(a+h.source+d,n);
if(k===undefined||+k<0){k=false;
}else{k=Math.floor(+k);

if(!k){return [];
}}var p,o=[],l=0,i=0;

while((k?i++<=k:true)&&(p=h.exec(g))){if((p[0].length===0)&&(h.lastIndex>p.index)){h.lastIndex--;
}
if(h.lastIndex>l){if(p.length>1){p[0].replace(m,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined){p[j]=undefined;
}}});
}o=o.concat(g.substring(l,p.index),(p.index===g.length?[]:p.slice(1)));
l=h.lastIndex;
}
if(p[0].length===0){h.lastIndex++;
}}return (l===g.length)?(h.test(f)?o:o.concat(f)):(k?o:o.concat(g.substring(l)));
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__fX:{},remove:function(c){delete this.__fX[c.$$hash];
},add:function(d){var e=this.__fX;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__fX;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__fX={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__fY:{},__ga:{},remove:function(k){var l=k.$$hash;
delete this.__ga[l];
delete this.__fY[l];
},isVisible:function(o){return this.__ga[o.$$hash]||false;
},__gb:function(g){var i=this.__ga;
var h=g.$$hash;
var j;
if(g.isExcluded()){j=false;
}else{var parent=g.$$parent;

if(parent){j=this.__gb(parent);
}else{j=g.isRootWidget();
}}return i[h]=j;
},add:function(m){var n=this.__fY;

if(n[m.$$hash]){return;
}n[m.$$hash]=m;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__fY;
var f=this.__ga;
for(var d in c){if(f[d]!=null){c[d].addChildrenToQueue(c);
}}var e={};

for(var d in c){e[d]=f[d];
f[d]=null;
}for(var d in c){if(f[d]==null){this.__gb(c[d]);
}if(f[d]&&f[d]!=e[d]){c[d].checkAppearanceNeeds();
}}this.__fY={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gc:{},remove:function(j){delete this.__gc[j.$$hash];
},add:function(c){var d=this.__gc;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(e){return !!this.__gc[e.$$hash];
},flush:function(){var i=qx.ui.core.queue.Visibility;
var f=this.__gc;
var h;

for(var g in f){h=f[g];
delete f[g];
if(i.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var u="qx.ui.core.queue.Layout",t="layout";
qx.Class.define(u,{statics:{__gd:{},remove:function(A){delete this.__gd[A.$$hash];
},add:function(v){this.__gd[v.$$hash]=v;
qx.ui.core.queue.Manager.scheduleFlush(t);
},flush:function(){var g=this.__gg();
for(var i=g.length-1;i>=0;i--){var h=g[i];
if(h.hasValidLayout()){continue;
}if(h.isRootWidget()&&!h.hasUserBounds()){var k=h.getSizeHint();
h.renderLayout(0,0,k.width,k.height);
}else{var j=h.getBounds();
h.renderLayout(j.left,j.top,j.width,j.height);
}}},getNestingLevel:function(w){var x=this.__gf;
var z=0;
var parent=w;
while(true){if(x[parent.$$hash]!=null){z+=x[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
z+=1;
}var y=z;

while(w&&w!==parent){x[w.$$hash]=y--;
w=w.$$parent;
}return z;
},__ge:function(){var f=qx.ui.core.queue.Visibility;
this.__gf={};
var e=[];
var d=this.__gd;
var a,c;

for(var b in d){a=d[b];

if(f.isVisible(a)){c=this.getNestingLevel(a);
if(!e[c]){e[c]={};
}e[c][b]=a;
delete d[b];
}}return e;
},__gg:function(){var o=[];
var q=this.__ge();

for(var n=q.length-1;n>=0;n--){if(!q[n]){continue;
}
for(var m in q[n]){var l=q[n][m];
if(n==0||l.isRootWidget()||l.hasUserBounds()){o.push(l);
l.invalidateLayoutCache();
continue;
}var s=l.getSizeHint(false);

if(s){l.invalidateLayoutCache();
var p=l.getSizeHint();
var r=(!l.getBounds()||s.minWidth!==p.minWidth||s.width!==p.width||s.maxWidth!==p.maxWidth||s.minHeight!==p.minHeight||s.height!==p.height||s.maxHeight!==p.maxHeight);
}else{r=true;
}
if(r){var parent=l.getLayoutParent();

if(!q[n-1]){q[n-1]={};
}q[n-1][parent.$$hash]=parent;
}else{o.push(l);
}}}return o;
}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__gh:{},add:function(e){var f=this.__gh;

if(f[e.$$hash]){return;
}f[e.$$hash]=e;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__gh;

for(var d in c){c[d].dispose();
delete c[d];
}for(var d in c){return;
}this.__gh={};
}}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(g){return this._indexOf(g);
},add:function(n,o){this._add(n,o);
},addAt:function(c,d,e){this._addAt(c,d,e);
},addBefore:function(h,i,j){this._addBefore(h,i,j);
},addAfter:function(k,l,m){this._addAfter(k,l,m);
},remove:function(f){this._remove(f);
},removeAt:function(p){this._removeAt(p);
},removeAll:function(){return this._removeAll();
}},statics:{remap:function(b){b.getChildren=b._getChildren;
b.hasChildren=b._hasChildren;
b.indexOf=b._indexOf;
b.add=b._add;
b.addAt=b._addAt;
b.addBefore=b._addBefore;
b.addAfter=b._addAfter;
b.remove=b._remove;
b.removeAt=b._removeAt;
b.removeAll=b._removeAll;
}}});
})();
(function(){var H="Integer",G="_applyDimension",F="Boolean",E="_applyStretching",D="_applyMargin",C="shorthand",B="_applyAlign",A="allowShrinkY",z="bottom",y="__gj",bc="baseline",bb="marginBottom",ba="qx.ui.core.LayoutItem",Y="center",X="marginTop",W="$$subparent",V="allowGrowX",U="middle",T="__go",S="marginLeft",O="allowShrinkX",P="$$parent",M="top",N="right",K="marginRight",L="abstract",I="__gl",J="allowGrowY",Q="left",R="__gn";
qx.Class.define(ba,{type:L,extend:qx.core.Object,properties:{minWidth:{check:H,nullable:true,apply:G,init:null,themeable:true},width:{check:H,nullable:true,apply:G,init:null,themeable:true},maxWidth:{check:H,nullable:true,apply:G,init:null,themeable:true},minHeight:{check:H,nullable:true,apply:G,init:null,themeable:true},height:{check:H,nullable:true,apply:G,init:null,themeable:true},maxHeight:{check:H,nullable:true,apply:G,init:null,themeable:true},allowGrowX:{check:F,apply:E,init:true,themeable:true},allowShrinkX:{check:F,apply:E,init:true,themeable:true},allowGrowY:{check:F,apply:E,init:true,themeable:true},allowShrinkY:{check:F,apply:E,init:true,themeable:true},allowStretchX:{group:[V,O],mode:C,themeable:true},allowStretchY:{group:[J,A],mode:C,themeable:true},marginTop:{check:H,init:0,apply:D,themeable:true},marginRight:{check:H,init:0,apply:D,themeable:true},marginBottom:{check:H,init:0,apply:D,themeable:true},marginLeft:{check:H,init:0,apply:D,themeable:true},margin:{group:[X,K,bb,S],mode:C,themeable:true},alignX:{check:[Q,Y,N],nullable:true,apply:B,themeable:true},alignY:{check:[M,U,z,bc],nullable:true,apply:B,themeable:true}},members:{__gi:null,__gj:null,__gk:null,__gl:null,__gm:null,__gn:null,__go:null,getBounds:function(){return this.__gn||this.__gj||null;
},clearSeparators:function(){},renderSeparator:function(w,x){},renderLayout:function(p,top,q,r){var s;
var t=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var t=this._getHeightForWidth(q);
}
if(t!=null&&t!==this.__gi){this.__gi=t;
qx.ui.core.queue.Layout.add(this);
return null;
}var v=this.__gj;

if(!v){v=this.__gj={};
}var u={};

if(p!==v.left||top!==v.top){u.position=true;
v.left=p;
v.top=top;
}
if(q!==v.width||r!==v.height){u.size=true;
v.width=q;
v.height=r;
}if(this.__gk){u.local=true;
delete this.__gk;
}
if(this.__gm){u.margin=true;
delete this.__gm;
}return u;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__gk;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__gk=true;
this.__gl=null;
},getSizeHint:function(bk){var bl=this.__gl;

if(bl){return bl;
}
if(bk===false){return null;
}bl=this.__gl=this._computeSizeHint();
if(this.__gi&&this.getHeight()==null){bl.height=this.__gi;
}if(!this.getAllowShrinkX()){bl.minWidth=bl.width;
}else if(bl.minWidth>bl.width){bl.width=bl.minWidth;
}
if(!this.getAllowShrinkY()){bl.minHeight=bl.height;
}else if(bl.minHeight>bl.height){bl.height=bl.minHeight;
}if(!this.getAllowGrowX()){bl.maxWidth=bl.width;
}else if(bl.width>bl.maxWidth){bl.width=bl.maxWidth;
}
if(!this.getAllowGrowY()){bl.maxHeight=bl.height;
}else if(bl.height>bl.maxHeight){bl.height=bl.maxHeight;
}return bl;
},_computeSizeHint:function(){var n=this.getMinWidth()||0;
var k=this.getMinHeight()||0;
var o=this.getWidth()||n;
var m=this.getHeight()||k;
var j=this.getMaxWidth()||Infinity;
var l=this.getMaxHeight()||Infinity;
return {minWidth:n,width:o,maxWidth:j,minHeight:k,height:m,maxHeight:l};
},_hasHeightForWidth:function(){var a=this._getLayout();

if(a){return a.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(b){var c=this._getLayout();

if(c&&c.hasHeightForWidth()){return c.getHeightForWidth(b);
}return null;
},_applyMargin:function(){this.__gm=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__gn;
},setUserBounds:function(g,top,h,i){this.__gn={left:g,top:top,width:h,height:i};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__gn;
qx.ui.core.queue.Layout.add(this);
},__gp:{},setLayoutProperties:function(bf){if(bf==null){return;
}var bg=this.__go;

if(!bg){bg=this.__go={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(bf);
}for(var bh in bf){if(bf[bh]==null){delete bg[bh];
}else{bg[bh]=bf[bh];
}}},getLayoutProperties:function(){return this.__go||this.__gp;
},clearLayoutProperties:function(){delete this.__go;
},updateLayoutProperties:function(d){var e=this._getLayout();

if(e){var f;
e.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var bd=arguments.callee.base.call(this);
var be=this.__go;

if(be){bd.__go=qx.lang.Object.clone(be);
}return bd;
},serialize:function(){var bi=arguments.callee.base.call(this);
var bj=this.__go;

if(bj){bi.layoutProperties=qx.lang.Object.clone(bj);
}return bi;
}},destruct:function(){this._disposeFields(P,W,T,y,R,I);
}});
})();
(function(){var eR="px",eQ="qx.event.type.Mouse",eP="Boolean",eO="qx.event.type.Drag",eN="visible",eM="qx.event.type.Focus",eL="Integer",eK="on",eJ="excluded",eI="object",eo="_applyPadding",en="qx.event.type.Event",em="zIndex",ek="hidden",ej="tabIndex",ei="contextmenu",eh="absolute",eg="backgroundColor",ef="focused",ee="hovered",eY="qx.event.type.KeySequence",fa="qx.client",eW="height",eX="div",eU="qx.event.type.Data",eV="disabled",eS="move",eT="dragstart",fb="dragchange",fc="position",eB="dragend",eA="resize",eD="Decorator",eC="width",eF="$$widget",eE="mshtml",eH="none",eG="default",ez="Color",ey="top",cT="left",cU="String",cV="drag",cW="Use public 'getChildControl' instead!",cX="_applyBackgroundColor",cY="_applyFocusable",da="changeShadow",db="__gr",dc="qx.event.type.KeyInput",dd="normal",fg="Font",ff="_applyShadow",fe="_applyEnabled",fd="_applySelectable",fk="__gu",fj="_applyKeepActive",fi="__gB",fh="Number",fm="_applyVisibility",fl="repeat",dD="qxDraggable",dE="paddingLeft",dB="__gJ",dC="_applyDroppable",dH="userSelect",dI="__gt",dF="#",dG="_applyCursor",dz="changeVisibility",dA="_applyDraggable",dl="changeTextColor",dk="changeContextMenu",dn="paddingTop",dm="opacity",dh="hideFocus",dg="outline",dj="_applyAppearance",di="overflowX",df="_applyOpacity",de="url(",dN=")",dO="qx.ui.core.Widget",dP="_applyFont",dQ="cursor",dJ="qxDroppable",dK="__gv",dL="changeZIndex",dM="overflowY",dR="changeEnabled",dS="__gG",dw="changeFont",dv="off",du="_applyDecorator",dt="_applyZIndex",ds="_applyTextColor",dr="__gz",dq="qx.ui.menu.Menu",dp="__gq",dy="Use public 'hasChildControl' instead!",dx="true",dT="widget",dU="changeDecorator",dV="_applyTabIndex",dW="changeAppearance",dX="shorthand",dY="/",ea="__gx",eb="",ec="_applyContextMenu",ed="qxSelectable",es="paddingBottom",er="qx.ui.tooltip.ToolTip",eq="qxKeepActive",ep="_applyKeepFocus",ew="webkit",ev="paddingRight",eu="changeBackgroundColor",et="qxKeepFocus",ex="qx/static/blank.gif";
qx.Class.define(dO,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__gq=this._createContainerElement();
this.__gr=this.__gA();
this.__gq.add(this.__gr);
this.initFocusable();
this.initSelectable();
},events:{appear:en,disappear:en,resize:eU,move:eU,mousemove:eQ,mouseover:eQ,mouseout:eQ,mousedown:eQ,mouseup:eQ,click:eQ,dblclick:eQ,contextmenu:eQ,mousewheel:eQ,keyup:eY,keydown:eY,keypress:eY,keyinput:dc,focus:eM,blur:eM,focusin:eM,focusout:eM,activate:eM,deactivate:eM,capture:en,losecapture:en,drop:eO,dragleave:eO,dragover:eO,drag:eO,dragstart:eO,dragend:eO,dragchange:eO,droprequest:eO},properties:{paddingTop:{check:eL,init:0,apply:eo,themeable:true},paddingRight:{check:eL,init:0,apply:eo,themeable:true},paddingBottom:{check:eL,init:0,apply:eo,themeable:true},paddingLeft:{check:eL,init:0,apply:eo,themeable:true},padding:{group:[dn,ev,es,dE],mode:dX,themeable:true},zIndex:{nullable:true,init:null,apply:dt,event:dL,check:eL,themeable:true},decorator:{nullable:true,init:null,apply:du,event:dU,check:eD,themeable:true},shadow:{nullable:true,init:null,apply:ff,event:da,check:eD,themeable:true},backgroundColor:{nullable:true,check:ez,apply:cX,event:eu,themeable:true},textColor:{nullable:true,check:ez,apply:ds,event:dl,themeable:true,inheritable:true},font:{nullable:true,apply:dP,check:fg,event:dw,themeable:true,inheritable:true},opacity:{check:fh,apply:df,themeable:true,nullable:true,init:null},cursor:{check:cU,apply:dG,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:er,nullable:true},visibility:{check:[eN,ek,eJ],init:eN,apply:fm,event:dz},enabled:{init:true,check:eP,inheritable:true,apply:fe,event:dR},anonymous:{init:false,check:eP},tabIndex:{check:eL,nullable:true,apply:dV},focusable:{check:eP,init:false,apply:cY},keepFocus:{check:eP,init:false,apply:ep},keepActive:{check:eP,init:false,apply:fj},draggable:{check:eP,init:false,apply:dA},droppable:{check:eP,init:false,apply:dC},selectable:{check:eP,init:false,apply:fd},contextMenu:{check:dq,apply:ec,nullable:true,event:dk},appearance:{check:cU,init:dT,apply:dj,event:dW}},statics:{DEBUG:false,getWidgetByElement:function(O){try{while(O){var P=O.$$widget;
if(P!=null){return qx.core.ObjectRegistry.fromHashCode(P);
}O=O.parentNode;
}}catch(ho){}return null;
},contains:function(parent,Y){while(Y){if(parent==Y){return true;
}Y=Y.getLayoutParent();
}return false;
},__gs:{}},members:{__gq:null,__gr:null,__gt:null,__gu:null,__gv:null,__gw:null,__gx:null,_getLayout:function(){return this.__gx;
},_setLayout:function(g){{};

if(this.__gx){this.__gx.connectToWidget(null);
}
if(g){g.connectToWidget(this);
}this.__gx=g;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}
if(this.$$parent){this.$$parent.getContentElement().remove(this.__gq);
}this.$$parent=parent||null;

if(parent){this.$$parent.getContentElement().add(this.__gq);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},__gy:null,renderLayout:function(gs,top,gt,gu){var gF=arguments.callee.base.call(this,gs,top,gt,gu);
if(!gF){return;
}var gw=this.__gq;
var content=this.__gr;
var gC=gF.size||this.__gy;
var gG=eR;
if(gF.position){gw.setStyle(cT,gs+gG);
gw.setStyle(ey,top+gG);
}if(gF.size){gw.setStyle(eC,gt+gG);
gw.setStyle(eW,gu+gG);
}
if(gC||gF.local||gF.margin){var gv=this.getInsets();
var innerWidth=gt-gv.left-gv.right;
var innerHeight=gu-gv.top-gv.bottom;
}
if(this.__gy){content.setStyle(cT,gv.left+gG);
content.setStyle(ey,gv.top+gG);
}
if(gC){content.setStyle(eC,innerWidth+gG);
content.setStyle(eW,innerHeight+gG);
}
if(gF.size){var gE=this.__gv;

if(gE){gE.setStyles({width:gt+eR,height:gu+eR});
}}
if(gF.size||this.__gy){var gz=qx.theme.manager.Decoration.getInstance();
var gH=this.getDecorator();

if(gH){var gA=this.__gt;
var gB=gz.resolve(gH);
gB.resize(gA.getDomElement(),gt,gu);
}}
if(gF.size){var gD=this.getShadow();

if(gD){var gA=this.__gu;
var gB=gz.resolve(gD);
var gv=gB.getInsets();
var gy=gt+gv.left+gv.right;
var gx=gu+gv.top+gv.bottom;
gB.resize(gA.getDomElement(),gy,gx);
}}
if(gC||gF.local||gF.margin){if(this.__gx&&this.hasLayoutChildren()){this.__gx.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(gF.position&&this.hasListener(eS)){this.fireDataEvent(eS,this.getBounds());
}
if(gF.size&&this.hasListener(eA)){this.fireDataEvent(eA,this.getBounds());
}delete this.__gy;
},__gz:null,clearSeparators:function(){var fU=this.__gz;

if(!fU){return;
}var fV=qx.ui.core.Widget.__gs;
var content=this.__gr;
var fT,fS;

for(var i=0,l=fU.length;i<l;i++){fS=fU[i];
fT=fS.$$separator;
if(!fV[fT]){fV[fT]=[fS];
}else{fV[fT].push(fS);
}content.remove(fS);
}fU.length=0;
},renderSeparator:function(gb,gc){var gj=qx.ui.core.Widget.__gs;
var gh=qx.theme.manager.Decoration.getInstance();

if(typeof gb==eI){var gi=gb.toHashCode();
var ge=gb;
}else{var gi=gb;
var ge=gh.resolve(gb);
}var gf=gj[gb];

if(gf&&gf.length>0){var gg=gf.pop();
}else{var gg=this.__gF(ge);
}this.__gr.add(gg);
ge.resize(gg.getDomElement(),gc.width,gc.height);
var gd=gg.getDomElement().style;
gd.left=gc.left+eR;
gd.top=gc.top+eR;
if(!this.__gz){this.__gz=[gg];
}else{this.__gz.push(gg);
}gg.$$separator=gi;
},_computeSizeHint:function(){var t=this.getWidth();
var s=this.getMinWidth();
var o=this.getMaxWidth();
var r=this.getHeight();
var p=this.getMinHeight();
var q=this.getMaxHeight();
var u=this._getContentHint();
var n=this.getInsets();
var w=n.left+n.right;
var v=n.top+n.bottom;

if(t==null){t=u.width+w;
}
if(r==null){r=u.height+v;
}
if(s==null){s=w;

if(u.minWidth!=null){s+=u.minWidth;
}}
if(p==null){p=v;

if(u.minHeight!=null){p+=u.minHeight;
}}
if(o==null){if(u.maxWidth==null){o=Infinity;
}else{o=u.maxWidth+w;
}}
if(q==null){if(u.maxHeight==null){q=Infinity;
}else{q=u.maxHeight+v;
}}return {width:t,minWidth:s,maxWidth:o,height:r,minHeight:p,maxHeight:q};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__gx){this.__gx.invalidateLayoutCache();
}},_getContentHint:function(){var fJ=this.__gx;

if(fJ){if(this.hasLayoutChildren()){var fK=fJ.getSizeHint();
var fI;
return fK;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(bh){var bl=this.getInsets();
var bo=bl.left+bl.right;
var bn=bl.top+bl.bottom;
var bm=bh-bo;
var bj=this._getLayout();

if(bj&&bj.hasHeightForWidth()){var bi=bj.getHeightForWidth(bh);
}else{bi=this._getContentHeightForWidth(bm);
}var bk=bi+bn;
return bk;
},_getContentHeightForWidth:function(bG){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var hh=this.getPaddingRight();
var hi=this.getPaddingBottom();
var hn=this.getPaddingLeft();
var hm=this.getDecorator();

if(hm){var hl=qx.theme.manager.Decoration.getInstance();
var hk=hl.resolve(hm);
var hj=hk.getInsets();
{};
top+=hj.top;
hh+=hj.right;
hi+=hj.bottom;
hn+=hj.left;
}return {"top":top,"right":hh,"bottom":hi,"left":hn};
},getInnerSize:function(){var S=this.getBounds();

if(!S){return null;
}var R=this.getInsets();
return {width:S.width-R.left-R.right,height:S.height-R.top-R.bottom};
},show:function(){this.setVisibility(eN);
},hide:function(){this.setVisibility(ek);
},exclude:function(){this.setVisibility(eJ);
},isVisible:function(){return this.getVisibility()===eN;
},isHidden:function(){return this.getVisibility()!==eN;
},isExcluded:function(){return this.getVisibility()===eJ;
},_createContainerElement:function(){var fF=new qx.html.Element(eX);
{};
fF.setStyle(fc,eh);
fF.setStyle(em,0);
fF.setAttribute(eF,this.toHashCode());
{};
return fF;
},__gA:function(){var bw=this._createContentElement();
{};
bw.setStyle(fc,eh);
bw.setStyle(em,10);
return bw;
},_createContentElement:function(){var b=new qx.html.Element(eX);
b.setStyle(di,ek);
b.setStyle(dM,ek);
return b;
},getContainerElement:function(){return this.__gq;
},getContentElement:function(){return this.__gr;
},getDecoratorElement:function(){return this.__gt;
},__gB:null,getLayoutChildren:function(){var cq=this.__gB;

if(!cq){return this.__gC;
}var cr;

for(var i=0,l=cq.length;i<l;i++){var cp=cq[i];

if(cp.hasUserBounds()||cp.isExcluded()){if(cr==null){cr=cq.concat();
}qx.lang.Array.remove(cr,cp);
}}return cr||cq;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var I=this.__gx;

if(I){I.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var bx=this.__gB;

if(!bx){return false;
}var by;

for(var i=0,l=bx.length;i<l;i++){by=bx[i];

if(!by.hasUserBounds()&&!by.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__gC:[],_getChildren:function(){return this.__gB||this.__gC;
},_indexOf:function(hp){var hq=this.__gB;

if(!hq){return -1;
}return hq.indexOf(hp);
},_hasChildren:function(){var fW=this.__gB;
return fW!=null&&(!!fW[0]);
},addChildrenToQueue:function(j){var k=this.__gB;

if(!k){return;
}var m;

for(var i=0,l=k.length;i<l;i++){m=k[i];
j[m.$$hash]=m;
m.addChildrenToQueue(j);
}},_add:function(bL,bM){if(bL.getLayoutParent()==this){qx.lang.Array.remove(this.__gB,bL);
}
if(this.__gB){this.__gB.push(bL);
}else{this.__gB=[bL];
}this.__gD(bL,bM);
},_addAt:function(cs,ct,cu){if(!this.__gB){this.__gB=[];
}if(cs.getLayoutParent()==this){qx.lang.Array.remove(this.__gB,cs);
}var cv=this.__gB[ct];

if(cv===cs){return cs.setLayoutProperties(cu);
}
if(cv){qx.lang.Array.insertBefore(this.__gB,cs,cv);
}else{this.__gB.push(cs);
}this.__gD(cs,cu);
},_addBefore:function(gX,gY,ha){{};

if(gX==gY){return;
}
if(!this.__gB){this.__gB=[];
}if(gX.getLayoutParent()==this){qx.lang.Array.remove(this.__gB,gX);
}qx.lang.Array.insertBefore(this.__gB,gX,gY);
this.__gD(gX,ha);
},_addAfter:function(gS,gT,gU){{};

if(gS==gT){return;
}
if(!this.__gB){this.__gB=[];
}if(gS.getLayoutParent()==this){qx.lang.Array.remove(this.__gB,gS);
}qx.lang.Array.insertAfter(this.__gB,gS,gT);
this.__gD(gS,gU);
},_remove:function(fP){if(!this.__gB){return;
}qx.lang.Array.remove(this.__gB,fP);
this.__gE(fP);
},_removeAt:function(bI){if(!this.__gB){throw new Error("This widget has no children!");
}var bJ=this.__gB[bI];
qx.lang.Array.removeAt(this.__gB,bI);
this.__gE(bJ);
return bJ;
},_removeAll:function(){if(!this.__gB){return;
}var ht=this.__gB.concat();
this.__gB.length=0;

for(var i=ht.length-1;i>=0;i--){this.__gE(ht[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__gD:function(gV,gW){{};
var parent=gV.getLayoutParent();

if(parent&&parent!=this){parent._remove(gV);
}gV.setLayoutParent(this);
if(gW){gV.setLayoutProperties(gW);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(gV);
}},__gE:function(bH){{};
bH.setLayoutParent(null);
if(this.__gx){this.__gx.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(bH);
}},capture:function(){this.__gq.capture();
},releaseCapture:function(){this.__gq.releaseCapture();
},_applyPadding:function(fB,fC,name){this.__gy=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__gv){return;
}var gk=this.__gv=new qx.html.Element;
{};
gk.setStyles({position:eh,top:0,left:0,zIndex:7});
var gl=this.getBounds();

if(gl){this.__gv.setStyles({width:gl.width+eR,height:gl.height+eR});
}if(qx.core.Variant.isSet(fa,eE)){gk.setStyles({backgroundImage:de+qx.util.ResourceManager.toUri(ex)+dN,backgroundRepeat:fl});
}this.__gq.add(gk);
},__gF:function(bN){var bO=new qx.html.Element;
bO.setStyles({position:eh,top:0,left:0});
{};
bO.useMarkup(bN.getMarkup());
return bO;
},_applyDecorator:function(gI,gJ){var gR=qx.ui.core.Widget.__gs;
var gO=qx.theme.manager.Decoration.getInstance();
var gK=this.__gq;
var gM=this.__gt;
if(!this.__gv){this._createProtectorElement();
}var gP;

if(gJ){if(typeof gJ===eI){gP=gJ.toHashCode();
}else{gP=gJ;
gJ=gO.resolve(gJ);
}}var gQ;

if(gI){if(typeof gI===eI){gQ=gI.toHashCode();
{};
}else{gQ=gI;
gI=gO.resolve(gI);
}}if(gJ){if(!gR[gP]){gR[gP]=[];
}gK.remove(gM);
gR[gP].push(gM);
}if(gI){if(gR[gQ]&&gR[gQ].length>0){gM=gR[gQ].pop();
}else{gM=this.__gF(gI);
gM.setStyle(em,5);
}var gL=this.getBackgroundColor();
gI.tint(gM.getDomElement(),gL);
gK.add(gM);
this.__gt=gM;
}else{delete this.__gt;
this._applyBackgroundColor(this.getBackgroundColor());
}if(gI&&!gJ&&gL){this.getContainerElement().setStyle(eg,null);
}if(qx.ui.decoration.Util.insetsModified(gJ,gI)){this.__gy=true;
qx.ui.core.queue.Layout.add(this);
}else if(gI){var gN=this.getBounds();

if(gN){gO.resolve(gI).resize(gM.getDomElement(),gN.width,gN.height);
this.__gv.setStyles({width:gN.width+eR,height:gN.height+eR});
}}},_applyShadow:function(bP,bQ){var cb=qx.ui.core.Widget.__gs;
var bX=qx.theme.manager.Decoration.getInstance();
var bS=this.__gq;
var bY;

if(bQ){if(typeof bQ===eI){bY=bQ.toHashCode();
}else{bY=bQ;
bQ=bX.resolve(bQ);
}}var ca;

if(bP){if(typeof bP===eI){ca=bP.toHashCode();
}else{ca=bP;
bP=bX.resolve(bP);
}}if(bQ){if(!cb[bY]){cb[bY]=[];
}bS.remove(this.__gu);
cb[bY].push(this.__gu);
}if(bP){var bU;

if(cb[ca]&&cb[ca].length>0){bU=cb[ca].pop();
}else{bU=this.__gF(bP);
}bS.add(bU);
this.__gu=bU;
var bW=bP.getInsets();
bU.setStyles({left:(-bW.left)+eR,top:(-bW.top)+eR});
var bV=this.getBounds();

if(bV){var bT=bV.width+bW.left+bW.right;
var bR=bV.height+bW.top+bW.bottom;
bP.resize(bU.getDomElement(),bT,bR);
}}else{delete this.__gu;
}},_applyTextColor:function(gm,gn){},_applyZIndex:function(fn,fo){this.__gq.setStyle(em,fn==null?0:fn);
},_applyVisibility:function(hd,he){if(hd===eN){this.__gq.show();
}else{this.__gq.hide();
}var parent=this.$$parent;

if(parent&&(he==null||hd==null||he===eJ||hd===eJ)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(ch,ci){this.__gq.setStyle(dm,ch==1?null:ch);
},_applyCursor:function(cz,cA){if(cz==null&&!this.isSelectable()){cz=eG;
}this.__gq.setStyle(dQ,cz);
},_applyBackgroundColor:function(cB,cC){var cJ=this.getDecorator();
var cI=this.getShadow();
var cF=this.getBackgroundColor();
var cE=this.__gq;

if(cJ||cI){var cG=this.__gt;

if(cG){var cH=qx.theme.manager.Decoration.getInstance().resolve(cJ);
cH.tint(this.__gt.getDomElement(),cF);
}cE.setStyle(eg,null);
}else{var cD=qx.theme.manager.Color.getInstance().resolve(cF);
cE.setStyle(eg,cD);
}},_applyFont:function(fD,fE){},__gG:null,$$stateChanges:null,_forwardStates:null,hasState:function(bu){var bv=this.__gG;
return bv&&bv[bu];
},addState:function(bp){var bq=this.__gG;

if(!bq){bq=this.__gG={};
}
if(bq[bp]){return;
}this.__gG[bp]=true;
if(bp===ee){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bt=this.__gJ;

if(forward&&forward[bp]&&bt){var br;

for(var bs in bt){br=bt[bs];

if(br instanceof qx.ui.core.Widget){bt[bs].addState(bp);
}}}},removeState:function(cK){var cL=this.__gG;

if(!cL||!cL[cK]){return;
}delete this.__gG[cK];
if(cK===ee){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cO=this.__gJ;

if(forward&&forward[cK]&&cO){for(var cN in cO){var cM=cO[cN];

if(cM instanceof qx.ui.core.Widget){cM.removeState(cK);
}}}},replaceState:function(cj,ck){var cl=this.__gG;

if(!cl){cl=this.__gG={};
}
if(!cl[ck]){cl[ck]=true;
}
if(cl[cj]){delete cl[cj];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var co=this.__gJ;

if(forward&&forward[ck]&&co){for(var cn in co){var cm=co[cn];

if(cm instanceof qx.ui.core.Widget){cm.replaceState(cj,ck);
}}}},__gH:null,__gI:null,syncAppearance:function(){var ft=this.__gG;
var fs=this.__gH;
var fu=qx.theme.manager.Appearance.getInstance();
var fq=qx.core.Property.$$method.setThemed;
var fy=qx.core.Property.$$method.resetThemed;
if(this.__gI){delete this.__gI;
if(fs){var fp=fu.styleFrom(fs,ft);
if(fp){fs=null;
}}}if(!fs){var fr=this;
var fx=[];

do{fx.push(fr.$$subcontrol||fr.getAppearance());
}while(fr=fr.$$subparent);
fs=this.__gH=fx.reverse().join(dY).replace(/#[0-9]+/g,eb);
}var fv=fu.styleFrom(fs,ft);

if(fv){if(fp){for(var fw in fp){if(fv[fw]===undefined){this[fy[fw]]();
}}}var fw;
var fw;

for(var fw in fv){fv[fw]===undefined?this[fy[fw]]():this[fq[fw]](fv[fw]);
}}else if(fp){for(var fw in fp){this[fy[fw]]();
}}},_applyAppearance:function(G,H){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__gw){qx.ui.core.queue.Appearance.add(this);
this.__gw=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__gI=true;
qx.ui.core.queue.Appearance.add(this);
var ga=this.__gJ;

if(ga){var fX;

for(var fY in ga){fX=ga[fY];

if(fX instanceof qx.ui.core.Widget){fX.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var z=this;

while(z.getAnonymous()){z=z.getLayoutParent();

if(!z){return null;
}}return z;
},getFocusTarget:function(){var cw=this;

if(!cw.getEnabled()){return null;
}
while(cw.getAnonymous()||!cw.getFocusable()){cw=cw.getLayoutParent();

if(!cw||!cw.getEnabled()){return null;
}}return cw;
},getFocusElement:function(){return this.__gq;
},isTabable:function(){return this.getContainerElement().getDomElement()&&this.isFocusable();
},_applyFocusable:function(fL,fM){var fN=this.getFocusElement();
if(fL){var fO=this.getTabIndex();

if(fO==null){fO=1;
}fN.setAttribute(ej,fO);
if(qx.core.Variant.isSet(fa,eE)){fN.setAttribute(dh,dx);
}else{fN.setStyle(dg,eH);
}}else{if(fN.isNativelyFocusable()){fN.setAttribute(ej,-1);
}else if(fM){fN.setAttribute(ej,null);
}}},_applyKeepFocus:function(hf){var hg=this.getFocusElement();
hg.setAttribute(et,hf?eK:null);
},_applyKeepActive:function(J){var K=this.getContainerElement();
K.setAttribute(eq,J?eK:null);
},_applyTabIndex:function(X){if(X==null){X=1;
}else if(X<1||X>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&X!=null){this.getFocusElement().setAttribute(ej,X);
}},_applySelectable:function(h){this._applyCursor(this.getCursor());
this.__gq.setAttribute(ed,h?eK:dv);
if(qx.core.Variant.isSet(fa,ew)){this.__gq.setStyle(dH,h?dd:eH);
}},_applyEnabled:function(hb,hc){if(hb===false){this.addState(eV);
this.removeState(ee);
if(this.isFocusable()){this.removeState(ef);
this._applyFocusable(false,true);
}}else{this.removeState(eV);
if(this.isFocusable()){this._applyFocusable(true,false);
}}},_applyContextMenu:function(fz,fA){if(fA){fA.removeState(ei);

if(fA.getOpener()==this){fA.resetOpener();
}
if(!fz){this.removeListener(ei,this._onContextMenuOpen);
}}
if(fz){fz.setOpener(this);
fz.addState(ei);

if(!fA){this.addListener(ei,this._onContextMenuOpen);
}}},_onContextMenuOpen:function(e){var c=this.getContextMenu();
c.placeToMouse(e);
c.show();
e.preventDefault();
},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(fG,fH){qx.ui.core.DragDropCursor.getInstance();
if(fG){this.addListener(eT,this._onDragStart);
this.addListener(cV,this._onDrag);
this.addListener(eB,this._onDragEnd);
this.addListener(fb,this._onDragChange);
}else{this.removeListener(eT,this._onDragStart);
this.removeListener(cV,this._onDrag);
this.removeListener(eB,this._onDragEnd);
this.removeListener(fb,this._onDragChange);
}this.__gq.setAttribute(dD,fG?eK:null);
},_applyDroppable:function(C,D){this.__gq.setAttribute(dJ,C?eK:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(eG);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var bz=qx.ui.core.DragDropCursor.getInstance();
var bA=e.getCurrentAction();
bA?bz.setAction(bA):bz.resetAction();
},visualizeFocus:function(){this.addState(ef);
},visualizeBlur:function(){this.removeState(ef);
},scrollChildIntoView:function(bd,be,bf,bg){this.scrollChildIntoViewX(bd,be,bg);
this.scrollChildIntoViewY(bd,bf,bg);
},scrollChildIntoViewX:function(ba,bb,bc){this.__gr.scrollChildIntoViewX(ba.getContainerElement(),bb,bc);
},scrollChildIntoViewY:function(L,M,N){this.__gr.scrollChildIntoViewY(L.getContainerElement(),M,N);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.__gq.activate();
},deactivate:function(){this.__gq.deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},_hasChildControl:function(Q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,dy);
return this.hasChildControl(Q);
},hasChildControl:function(a){if(!this.__gJ){return false;
}return !!this.__gJ[a];
},__gJ:null,_getChildControl:function(T,U){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cW);
return this.getChildControl(T,U);
},getChildControl:function(bB,bC){if(!this.__gJ){if(bC){return null;
}this.__gJ={};
}var bD=this.__gJ[bB];

if(bD){return bD;
}
if(bC===true){return null;
}return this._createChildControl(bB);
},_showChildControl:function(E){var F=this.getChildControl(E);
F.show();
return F;
},_excludeChildControl:function(bE){var bF=this.getChildControl(bE,true);

if(bF){bF.exclude();
}},_isChildControlVisible:function(V){var W=this.getChildControl(V,true);

if(W){return W.isVisible();
}return false;
},_createChildControl:function(cc){if(!this.__gJ){this.__gJ={};
}else if(this.__gJ[cc]){throw new Error("Child control '"+cc+"' already created!");
}var cg=cc.indexOf(dF);

if(cg==-1){var cd=this._createChildControlImpl(cc);
}else{var cd=this._createChildControlImpl(cc.substring(0,cg));
}
if(!cd){throw new Error("Unsupported control: "+cc);
}cd.$$subcontrol=cc;
cd.$$subparent=this;
var ce=this.__gG;
var forward=this._forwardStates;

if(ce&&forward&&cd instanceof qx.ui.core.Widget){for(var cf in ce){if(forward[cf]){cd.addState(cf);
}}}return this.__gJ[cc]=cd;
},_createChildControlImpl:function(go){return null;
},_disposeChildControls:function(){var cS=this.__gJ;

if(!cS){return;
}var cQ=qx.ui.core.Widget;

for(var cR in cS){var cP=cS[cR];

if(!cQ.contains(this,cP)){cP.destroy();
}else{cP.dispose();
}}delete this.__gJ;
},_findTopControl:function(){var bK=this;

while(bK){if(!bK.$$subparent){return bK;
}bK=bK.$$subparent;
}return null;
},getContainerLocation:function(cx){var cy=this.getContainerElement().getDomElement();
return cy?qx.bom.element.Location.get(cy,cx):null;
},getContentLocation:function(hr){var hs=this.getContentElement().getDomElement();
return hs?qx.bom.element.Location.get(hs,hr):null;
},setDomLeft:function(x){var y=this.getContainerElement().getDomElement();

if(y){y.style.left=x+eR;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(d){var f=this.getContainerElement().getDomElement();

if(f){f.style.top=d+eR;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(A,top){var B=this.getContainerElement().getDomElement();

if(B){B.style.left=A+eR;
B.style.top=top+eR;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fQ=arguments.callee.base.call(this);

if(this.getChildren){var fR=this.getChildren();

for(var i=0,l=fR.length;i<l;i++){fQ.add(fR[i].clone());
}}return fQ;
},serialize:function(){var gq=arguments.callee.base.call(this);

if(this.getChildren){var gr=this.getChildren();

if(gr.length>0){gq.children=[];

for(var i=0,l=gr.length;i<l;i++){gq.children.push(gr[i].serialize());
}}}
if(this.getLayout){var gp=this.getLayout();

if(gp){gq.layout=gp.serialize();
}}return gq;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){this.__gq.setAttribute(eF,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}this._disposeArray(fi);
this._disposeArray(dr);
this._disposeFields(dS,dB);
this._disposeObjects(ea,dp,db,dI,fk,dK);
}});
})();
(function(){var z="100%",y="mshtml",x="backgroundColor",w="repeat",v="opacity",u="_applyBlockerColor",t="Number",s="zIndex",r=")",q="qx.client",l="url(",p="qx.ui.core.MBlocker",o="__gN",k="_applyBlockerOpacity",j="Color",n="qx/static/blank.gif",m="absolute";
qx.Mixin.define(p,{properties:{blockerColor:{check:j,init:null,nullable:true,apply:u,themeable:true},blockerOpacity:{check:t,init:1,apply:k,themeable:true}},members:{__gK:null,__gL:null,__gM:null,__gN:null,__gO:null,_applyBlockerColor:function(a,b){var c=[];
this.__gK&&c.push(this.__gK);
this.__gN&&c.push(this.__gN);

for(var i=0;i<c.length;i++){c[i].setStyle(x,qx.theme.manager.Color.getInstance().resolve(a));
}},_applyBlockerOpacity:function(d,e){var f=[];
this.__gK&&f.push(this.__gK);
this.__gN&&f.push(this.__gN);

for(var i=0;i<f.length;i++){f[i].setStyle(v,d);
}},__gP:function(){var A=new qx.html.Element().setStyles({position:m,width:z,height:z,opacity:this.getBlockerOpacity(),backgroundColor:qx.theme.manager.Color.getInstance().resolve(this.getBlockerColor())});
if(qx.core.Variant.isSet(q,y)){A.setStyles({backgroundImage:l+qx.util.ResourceManager.toUri(n)+r,backgroundRepeat:w});
}return A;
},_getBlocker:function(){if(!this.__gK){this.__gK=this.__gP();
this.getContentElement().add(this.__gK);
this.__gK.exclude();
}return this.__gK;
},block:function(){if(this.__gL){return;
}this.__gL=true;
this._getBlocker().include();
this.__gM=this.getAnonymous();
this.setAnonymous(true);
},isBlocked:function(){return !!this.__gL;
},unblock:function(){if(!this.__gL){return;
}this.__gL=false;
this.setAnonymous(this.__gM);
this._getBlocker().exclude();
},_getContentBlocker:function(){if(!this.__gN){this.__gN=this.__gP();
this.getContentElement().add(this.__gN);
this.__gN.exclude();
}return this.__gN;
},blockContent:function(g){var h=this._getContentBlocker();
h.setStyle(s,g);

if(this.__gO){return;
}this.__gO=true;
h.include();
},isContentBlocked:function(){return !!this.__gO;
},unblockContent:function(){if(!this.__gO){return;
}this.__gO=false;
this._getContentBlocker().exclude();
}},destruct:function(){this._disposeObjects(o);
}});
})();
(function(){var k="qx.ui.window.Window",j="changeModal",i="changeVisibility",h="changeActive",g="_applyActiveWindow",f="__gR",d="qx.ui.window.MDesktop",c="__gQ";
qx.Mixin.define(d,{properties:{activeWindow:{check:k,apply:g}},members:{__gQ:null,__gR:null,getWindowManager:function(){if(!this.__gR){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__gR;
},supportsMaximize:function(){return true;
},setWindowManager:function(p){if(this.__gR){this.__gR.setDesktop(null);
}p.setDesktop(this);
this.__gR=p;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}},_applyActiveWindow:function(n,o){this.getWindowManager().changeActiveWindow(n,o);
n.setActive(true);

if(o){o.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(a){if(qx.Class.isDefined(k)&&a instanceof qx.ui.window.Window){this._addWindow(a);
}},_addWindow:function(l){this.getWindows().push(l);
l.addListener(h,this._onChangeActive,this);
l.addListener(j,this._onChangeModal,this);
l.addListener(i,this._onChangeVisibility,this);

if(l.getActive()){this.setActiveWindow(l);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(m){if(qx.Class.isDefined(k)&&m instanceof qx.ui.window.Window){this._removeWindow(m);
}},_removeWindow:function(b){qx.lang.Array.remove(this.getWindows(),b);
b.removeListener(h,this._onChangeActive,this);
b.removeListener(j,this._onChangeModal,this);
b.removeListener(i,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__gQ){this.__gQ=[];
}return this.__gQ;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(f);
}});
})();
(function(){var r="contextmenu",q="changeGlobalCursor",p="__gS",o="abstract",n="Boolean",m="root",l="",k="_applyNativeContextMenu",j=" !important",i="_applyGlobalCursor",f="qx.client",h=";",g="qx.ui.root.Abstract",d="String",c="*";
qx.Class.define(g,{type:o,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
},properties:{appearance:{refine:true,init:m},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:d,nullable:true,themeable:true,apply:i,event:q},nativeContextMenu:{check:n,nullable:true,apply:k,init:true}},members:{__gS:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(f,{"mshtml":function(a,b){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__gS;

if(!z){this.__gS=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,c,qx.bom.element.Cursor.compile(w).replace(h,l)+j);
}}}),_applyNativeContextMenu:function(u,v){if(u){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
}},destruct:function(){this._disposeFields(p);
},defer:function(s,t){qx.ui.core.MChildrenHandling.remap(t);
}});
})();
(function(){var m="resize",l="__gU",k="position",j="__gT",i="0px",h="webkit",g="$$widget",f="qx.ui.root.Application",e="hidden",d="qx.client",a="div",c="100%",b="absolute";
qx.Class.define(f,{extend:qx.ui.root.Abstract,construct:function(u){this.__gT=qx.dom.Node.getWindow(u);
this.__gU=u;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__gT,m,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.setNativeContextMenu(false);
},members:{__gT:null,__gU:null,_createContainerElement:function(){var n=this.__gU;

if(qx.core.Variant.isSet(d,h)){if(!n.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var r=n.documentElement.style;
var o=n.body.style;
r.overflow=o.overflow=e;
r.padding=r.margin=o.padding=o.margin=i;
r.width=r.height=o.width=o.height=c;
var q=n.createElement(a);
n.body.appendChild(q);
var p=new qx.html.Root(q);
p.setStyle(k,b);
p.setAttribute(g,this.toHashCode());
return p;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var s=qx.bom.Viewport.getWidth(this.__gT);
var t=qx.bom.Viewport.getHeight(this.__gT);
return {minWidth:s,width:s,maxWidth:s,minHeight:t,height:t,maxHeight:t};
}},destruct:function(){this._disposeFields(j,l);
}});
})();
(function(){var H="blur",G="focus",F="input",E="load",D="qx.ui.core.EventHandler",C="__gV",B="activate";
qx.Class.define(D,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__gV=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__gV:null,__gW:{focusin:1,focusout:1,focus:1,blur:1},__gX:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(z,A){return z instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p,true);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(q&&j.getType()==B){o.getContainerElement().activate();
}if(this.__gW[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__gW[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__gW[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!(u.isEnabled()||this.__gX[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__gV.getListeners(u,v,k);

if(!r||r.length===0){return;
}var m=qx.event.Pool.getInstance().getObject(j.constructor);
j.clone(m);
m.setTarget(o);
m.setRelatedTarget(w||null);
m.setCurrentTarget(u);
var y=j.getOriginalTarget();

if(y){var n=qx.ui.core.Widget.getWidgetByElement(y);

while(n&&n.isAnonymous()){n=n.getLayoutParent();
}m.setOriginalTarget(n);
}else{m.setOriginalTarget(p);
}for(var i=0,l=r.length;i<l;i++){var t=r[i].context||u;
r[i].handler.call(t,m);
}if(m.getPropagationStopped()){j.stopPropagation();
}
if(m.getDefaultPrevented()){j.preventDefault();
}qx.event.Pool.getInstance().poolObject(m);
},registerEvent:function(a,b,c){var d;

if(b===G||b===H){d=a.getFocusElement();
}else if(b===E||b===F){d=a.getContentElement();
}else{d=a.getContainerElement();
}
if(d){d.addListener(b,this._dispatchEvent,this,c);
}},unregisterEvent:function(e,f,g){var h;

if(f===G||f===H){h=e.getFocusElement();
}else if(f===E||f===F){h=e.getContentElement();
}else{h=e.getContainerElement();
}
if(h){h.removeListener(f,this._dispatchEvent,this,g);
}}},destruct:function(){this._disposeFields(C);
},defer:function(I){qx.event.Registration.addHandler(I);
}});
})();
(function(){var i="replacement",h="Boolean",g="_applyScale",f="_applySource",e="-disabled.$1",d="changeSource",c="String",b="image",a="qx.ui.basic.Image";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(y){arguments.callee.base.call(this);

if(y){this.setSource(y);
}},properties:{source:{check:c,init:null,nullable:true,event:d,apply:f,themeable:true},scale:{check:h,init:false,themeable:true,apply:g},appearance:{refine:true,init:b},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__gY:null,__ha:null,_createContentElement:function(){return new qx.html.Image();
},_getContentHint:function(){return {width:this.__gY||0,height:this.__ha||0};
},_applyEnabled:function(j,k){arguments.callee.base.call(this,j,k);

if(this.getSource()){this._styleSource();
}},_applySource:function(z){this._styleSource();
},_applyScale:function(l){var m=this.getContentElement();
m.setScale(l);
},_styleSource:function(){var w=qx.util.AliasManager.getInstance().resolve(this.getSource());
var r=this.getContentElement();

if(!w){r.resetSource();
return;
}var s=qx.util.ResourceManager;
var x=qx.io2.ImageLoader;
if(s.has(w)){if(!this.getEnabled()){var v=w.replace(/\.([a-z]+)$/,e);

if(s.has(v)){w=v;
this.addState(i);
}else{this.removeState(i);
}}if(r.getSource()===w){return;
}r.setSource(w);
this.__hc(s.getImageWidth(w),s.getImageHeight(w));
}else if(x.isLoaded(w)){r.setSource(w);
var t=x.getWidth(w);
var u=x.getHeight(w);
this.__hc(t,u);
}else{var self;
if(!qx.io2.ImageLoader.isFailed(w)){qx.io2.ImageLoader.load(w,this.__hb,this);
}}},__hb:function(n,o){if(n!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(!o){this.warn("Image could not be loaded: "+n);
return;
}this._styleSource();
},__hc:function(p,q){if(p!==this.__gY||q!==this.__ha){this.__gY=p;
this.__ha=q;
qx.ui.core.queue.Layout.add(this);
}}}});
})();
(function(){var J="interval",I="Integer",H="resize",G="Boolean",F="disappear",E="bottom-left",D="offsetLeft",C="offsetRight",B="right-top",A="top-right",u="top-left",z="bottom-right",x="right-bottom",t="offsetBottom",s="qx.ui.core.MPlacement",w="left-top",v="left-bottom",y="shorthand",r="offsetTop";
qx.Mixin.define(s,{properties:{position:{check:[u,A,E,z,w,v,B,x],init:E,themeable:true},domMove:{check:G,init:false},smart:{check:G,init:true,themeable:true},offsetLeft:{check:I,init:0,themeable:true},offsetTop:{check:I,init:0,themeable:true},offsetRight:{check:I,init:0,themeable:true},offsetBottom:{check:I,init:0,themeable:true},offset:{group:[r,C,t,D],mode:y,themeable:true}},members:{__hd:null,__he:null,getLayoutLocation:function(e){var h,g,i,top;
g=e.getBounds();
i=g.left;
top=g.top;
var j=g;
e=e.getLayoutParent();

while(e&&!e.isRootWidget()){g=e.getBounds();
i+=g.left;
top+=g.top;
h=e.getInsets();
i+=h.left;
top+=h.top;
e=e.getLayoutParent();
}if(e.isRootWidget()){var f=e.getContainerLocation();

if(f){i+=f.left;
top+=f.top;
}}return {left:i,top:top,right:i+j.width,bottom:top+j.height};
},moveTo:function(d,top){if(this.getDomMove()){this.setDomPosition(d,top);
}else{this.setLayoutProperties({left:d,top:top});
}},placeToWidget:function(a,b){if(b){this.__he=qx.lang.Function.bind(this.placeToWidget,this,a,false);
qx.event.Idle.getInstance().addListener(J,this.__he);
this.addListener(F,function(){if(this.__he){qx.event.Idle.getInstance().removeListener(J,this.__he);
this.__he=null;
}},this);
}var c=a.getContainerLocation()||this.getLayoutLocation(a);
this.__hf(c);
},placeToMouse:function(event){var n=event.getDocumentLeft();
var top=event.getDocumentTop();
var m={left:n,top:top,right:n,bottom:top};
this.__hf(m);
},placeToElement:function(o,p){var location=qx.bom.element.Location.get(o);
var q={left:location.left,top:location.top,right:location.left+o.offsetWidth,bottom:location.top+o.offsetHeight};
if(p){this.__he=qx.lang.Function.bind(this.placeToElement,this,o,false);
qx.event.Idle.getInstance().addListener(J,this.__he);
this.addListener(F,function(){if(this.__he){qx.event.Idle.getInstance().removeListener(J,this.__he);
this.__he=null;
}},this);
}this.__hf(q);
},placeToPoint:function(k){var l={left:k.left,top:k.top,right:k.left,bottom:k.top};
this.__hf(l);
},__hf:function(K){var Q=this.getBounds();

if(Q==null){if(!this.__hd){this.addListener(H,this.__hf);
}this.__hd=K;
return;
}else if(this.__hd){K=this.__hd;
delete this.__hd;
this.removeListener(H,this.__hf);
}var L=this.getLayoutParent().getBounds();
var O=this.getPosition();
var P=this.getSmart();
var M={left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
var N=qx.util.PlaceUtil.compute(Q,L,K,O,P,M);
this.moveTo(N.left,N.top);
}}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){arguments.callee.base.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var f="source",e="scale",d="no-repeat",c="mshtml",b="qx.client",a="qx.html.Image";
qx.Class.define(a,{extend:qx.html.Element,members:{_applyProperty:function(name,h){arguments.callee.base.call(this,name,h);

if(name===f){var l=this.getDomElement();
var i=this.getAllStyles();
var j=this._getProperty(f);
var k=this._getProperty(e);
var m=k?e:d;
qx.bom.element.Decoration.update(l,j,m,i);
}},_createDomElement:function(){var o=this._getProperty(e);
var p=o?e:d;

if(qx.core.Variant.isSet(b,c)){var n=this._getProperty(f);
this.setNodeName(qx.bom.element.Decoration.getTagName(p,n));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(p));
}return arguments.callee.base.call(this);
},_copyData:function(r){return arguments.callee.base.call(this,true);
},setSource:function(g){this._setProperty(f,g);
return this;
},getSource:function(){return this._getProperty(f);
},resetSource:function(){this._removeProperty(f);
return this;
},setScale:function(q){this._setProperty(e,q);
return this;
},getScale:function(){return this._getProperty(e);
}}});
})();
(function(){var h="interval",g="Number",f="_applyTimeoutInterval",e="qx.event.type.Event",d="qx.event.Idle",c="singleton",b="__hg";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){arguments.callee.base.call(this);
var i=new qx.event.Timer(this.getTimeoutInterval());
i.addListener(h,this._onInterval,this);
i.start();
this.__hg=i;
},events:{"interval":e},properties:{timeoutInterval:{check:g,init:100,apply:f}},members:{__hg:null,_applyTimeoutInterval:function(a){this.__hg.setInterval(a);
},_onInterval:function(){this.fireEvent(h);
}},destruct:function(){if(this.__hg){this.__hg.stop();
}this._disposeFields(b);
}});
})();
(function(){var m="interval",l="qx.event.Timer",k="_applyInterval",j="_applyEnabled",i="Boolean",h="__hi",g="qx.event.type.Event",f="__hh",d="Integer";
qx.Class.define(l,{extend:qx.core.Object,construct:function(c){arguments.callee.base.call(this);
this.setEnabled(false);

if(c!=null){this.setInterval(c);
}this.__hh=qx.lang.Function.bind(this._oninterval,this);
},events:{"interval":g},statics:{once:function(n,o,p){var q=new qx.event.Timer(p);
q.addListener(m,function(e){q.stop();
n.call(o,e);
q.dispose();
o=null;
},o);
q.start();
return q;
}},properties:{enabled:{init:true,check:i,apply:j},interval:{check:d,init:1000,apply:k}},members:{__hi:null,_applyInterval:function(a,b){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(s,t){if(t){window.clearInterval(this.__hi);
this.__hi=null;
}else if(s){this.__hi=window.setInterval(this.__hh,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(r){this.setInterval(r);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(u){this.stop();
this.startWith(u);
},_oninterval:function(){if(this.getEnabled()){this.fireEvent(m);
}}},destruct:function(){if(this.__hi){window.clearInterval(this.__hi);
}this._disposeFields(h,f);
}});
})();
(function(){var f="bottom",e="top",d="left",c="right",b="-",a="qx.util.PlaceUtil";
qx.Class.define(a,{statics:{compute:function(g,h,i,j,k,l){var z=0;
var top=0;
var p,o;
var v=j.split(b);
var s=v[0];
var y=v[1];
var t=0,q=0,u=0,w=0;

if(l){t+=l.left||0;
q+=l.top||0;
u+=l.right||0;
w+=l.bottom||0;
}switch(s){case d:z=i.left-g.width-t;
break;
case e:top=i.top-g.height-q;
break;
case c:z=i.right+u;
break;
case f:top=i.bottom+w;
break;
}switch(y){case d:z=i.left;
break;
case e:top=i.top;
break;
case c:z=i.right-g.width;
break;
case f:top=i.bottom-g.height;
break;
}
if(k===false){return {left:z,top:top};
}else{var r=Math.min(z,h.width-z-g.width);

if(r<0){var n=z;

if(z<0){if(s==d){n=i.right+u;
}else if(y==c){n=i.left;
}}else{if(s==c){n=i.left-g.width-t;
}else if(y==d){n=i.right-g.width;
}}p=Math.min(n,h.width-n-g.width);

if(p>r){z=n;
r=p;
}}var m=Math.min(top,h.height-top-g.height);

if(m<0){var x=top;

if(top<0){if(s==e){x=i.bottom+w;
}else if(y==f){x=i.top;
}}else{if(s==f){x=i.top-g.height-q;
}else if(y==e){x=i.bottom-g.height;
}}o=Math.min(x,h.height-x-g.height);

if(o>m){top=x;
m=o;
}}return {left:z,top:top,ratingX:r,ratingY:m};
}}}});
})();
(function(){var X="__hk",W="keypress",V="__hj",U="focusout",T="activate",S="Tab",R="__hl",Q="singleton",P="__hm",O="deactivate",M="focusin",N="qx.ui.core.FocusHandler";
qx.Class.define(N,{extend:qx.core.Object,type:Q,construct:function(){arguments.callee.base.call(this);
this.__hj={};
},members:{__hj:null,__hk:null,__hl:null,__hm:null,connectTo:function(z){z.addListener(W,this.__hn,this);
z.addListener(M,this._onFocusIn,this,true);
z.addListener(U,this._onFocusOut,this,true);
z.addListener(T,this._onActivate,this,true);
z.addListener(O,this._onDeactivate,this,true);
},addRoot:function(B){this.__hj[B.$$hash]=B;
},removeRoot:function(y){delete this.__hj[y.$$hash];
},getActiveWidget:function(){return this.__hk;
},isActive:function(K){return this.__hk==K;
},getFocusedWidget:function(){return this.__hl;
},isFocused:function(bi){return this.__hl==bi;
},isFocusRoot:function(bf){return !!this.__hj[bf.$$hash];
},_onActivate:function(e){var bh=e.getTarget();
this.__hk=bh;
var bg=this.__ho(bh);

if(bg!=this.__hm){this.__hm=bg;
}},_onDeactivate:function(e){var L=e.getTarget();

if(this.__hk==L){this.__hk=null;
}},_onFocusIn:function(e){var A=e.getTarget();

if(A!=this.__hl){this.__hl=A;
A.visualizeFocus();
}},_onFocusOut:function(e){var F=e.getTarget();

if(F==this.__hl){this.__hl=null;
F.visualizeBlur();
}},__hn:function(e){if(e.getKeyIdentifier()!=S){return;
}
if(!this.__hm){return;
}e.stopPropagation();
e.preventDefault();
var a=this.__hl;

if(!e.isShiftPressed()){var b=a?this.__hs(a):this.__hq();
}else{var b=a?this.__ht(a):this.__hr();
}if(b){b.tabFocus();
}},__ho:function(bd){var be=this.__hj;

while(bd){if(be[bd.$$hash]){return bd;
}bd=bd.getLayoutParent();
}return null;
},__hp:function(n,o){if(n===o){return 0;
}var q=n.getTabIndex()||0;
var p=o.getTabIndex()||0;

if(q!=p){return q-p;
}var v=n.getContainerElement().getDomElement();
var u=o.getContainerElement().getDomElement();
var t=qx.bom.element.Location;
var s=t.get(v);
var r=t.get(u);
if(s.top!=r.top){return s.top-r.top;
}if(s.left!=r.left){return s.left-r.left;
}var w=n.getZIndex();
var x=o.getZIndex();

if(w!=x){return w-x;
}return 0;
},__hq:function(){return this.__hw(this.__hm,null);
},__hr:function(){return this.__hx(this.__hm,null);
},__hs:function(c){var d=this.__hm;

if(d==c){return this.__hq();
}
while(c&&c.getAnonymous()){c=c.getLayoutParent();
}
if(c==null){return [];
}var f=[];
this.__hu(d,c,f);
f.sort(this.__hp);
var g=f.length;
return g>0?f[0]:this.__hq();
},__ht:function(Y){var ba=this.__hm;

if(ba==Y){return this.__hr();
}
while(Y&&Y.getAnonymous()){Y=Y.getLayoutParent();
}
if(Y==null){return [];
}var bb=[];
this.__hv(ba,Y,bb);
bb.sort(this.__hp);
var bc=bb.length;
return bc>0?bb[bc-1]:this.__hr();
},__hu:function(parent,G,H){var I=parent.getLayoutChildren();
var J;

for(var i=0,l=I.length;i<l;i++){J=I[i];
if(!(J instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(J)&&J.isEnabled()){if(J.isTabable()&&this.__hp(G,J)<0){H.push(J);
}this.__hu(J,G,H);
}}},__hv:function(parent,h,j){var k=parent.getLayoutChildren();
var m;

for(var i=0,l=k.length;i<l;i++){m=k[i];
if(!(m instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(m)&&m.isEnabled()){if(m.isTabable()&&this.__hp(h,m)>0){j.push(m);
}this.__hv(m,h,j);
}}},__hw:function(parent,C){var D=parent.getLayoutChildren();
var E;

for(var i=0,l=D.length;i<l;i++){E=D[i];
if(!(E instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(E)&&E.isEnabled()){if(E.isTabable()){if(C==null||this.__hp(E,C)<0){C=E;
}}C=this.__hw(E,C);
}}return C;
},__hx:function(parent,bj){var bk=parent.getLayoutChildren();
var bl;

for(var i=0,l=bk.length;i<l;i++){bl=bk[i];
if(!(bl instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bl)&&bl.isEnabled()){if(bl.isTabable()){if(bj==null||this.__hp(bl,bj)>0){bj=bl;
}}bj=this.__hx(bl,bj);
}}return bj;
}},destruct:function(){this._disposeMap(V);
this._disposeFields(R,X,P);
}});
})();
(function(){var o="qx.client",n="head",m="text/css",l="stylesheet",k="}",j='@import "',h="{",g='";',f="qx.bom.Stylesheet",e="link",d="style";
qx.Class.define(f,{statics:{includeFile:function(Y,ba){if(!ba){ba=document;
}var bb=ba.createElement(e);
bb.type=m;
bb.rel=l;
bb.href=qx.util.ResourceManager.toUri(Y);
var bc=ba.getElementsByTagName(n)[0];
bc.appendChild(bb);
},createElement:qx.core.Variant.select(o,{"mshtml":function(N){var O=document.createStyleSheet();

if(N){O.cssText=N;
}return O;
},"default":function(C){var D=document.createElement(d);
D.type=m;

if(C){D.appendChild(document.createTextNode(C));
}document.getElementsByTagName(n)[0].appendChild(D);
return D.sheet;
}}),addRule:qx.core.Variant.select(o,{"mshtml":function(V,W,X){V.addRule(W,X);
},"default":function(E,F,G){E.insertRule(F+h+G+k,E.cssRules.length);
}}),removeRule:qx.core.Variant.select(o,{"mshtml":function(H,I){var J=H.rules;
var K=J.length;

for(var i=K-1;i>=0;--i){if(J[i].selectorText==I){H.removeRule(i);
}}},"default":function(s,t){var u=s.cssRules;
var v=u.length;

for(var i=v-1;i>=0;--i){if(u[i].selectorText==t){s.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(o,{"mshtml":function(a){var b=a.rules;
var c=b.length;

for(var i=c-1;i>=0;i--){a.removeRule(i);
}},"default":function(p){var q=p.cssRules;
var r=q.length;

for(var i=r-1;i>=0;i--){p.deleteRule(i);
}}}),addImport:qx.core.Variant.select(o,{"mshtml":function(P,Q){P.addImport(Q);
},"default":function(L,M){L.insertRule(j+M+g,L.cssRules.length);
}}),removeImport:qx.core.Variant.select(o,{"mshtml":function(R,S){var T=R.imports;
var U=T.length;

for(var i=U-1;i>=0;i--){if(T[i].href==S){R.removeImport(i);
}}},"default":function(bd,be){var bf=bd.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(o,{"mshtml":function(z){var A=z.imports;
var B=A.length;

for(var i=B-1;i>=0;i--){z.removeImport(i);
}},"default":function(w){var x=w.cssRules;
var y=x.length;

for(var i=y-1;i>=0;i--){if(x[i].type==x[i].IMPORT_RULE){w.deleteRule(i);
}}}})}});
})();
(function(){var k="abstract",j="__hy",i="qx.ui.layout.Abstract",h="__hz";
qx.Class.define(i,{type:k,extend:qx.core.Object,members:{__hy:null,_invalidChildrenCache:null,__hz:null,invalidateLayoutCache:function(){this.__hy=null;
},renderLayout:function(a,b){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__hy){return this.__hy;
}return this.__hy=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var d=this.__hz;

if(d instanceof qx.ui.core.LayoutItem){d.clearSeparators();
}},_renderSeparator:function(f,g){this.__hz.renderSeparator(f,g);
},connectToWidget:function(c){if(c&&this.__hz){throw new Error("It is not possible to manually set the connected widget.");
}this.__hz=c;
this.invalidateChildrenCache();
},_applyLayoutChange:function(){if(this.__hz){this.__hz.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__hz.getLayoutChildren();
}},destruct:function(){this._disposeFields(h,j);
}});
})();
(function(){var c="number",b="string",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var r=this._getLayoutChildren();
var h,q,o;
var t,top,f,g,k,j;
var p,n,s,m;

for(var i=0,l=r.length;i<l;i++){h=r[i];
q=h.getSizeHint();
o=h.getLayoutProperties();
p=h.getMarginTop();
n=h.getMarginRight();
s=h.getMarginBottom();
m=h.getMarginLeft();
t=o.left!=null?o.left:o.edge;

if(t&&typeof t===b){t=Math.round(parseFloat(t)*d/100);
}f=o.right!=null?o.right:o.edge;

if(f&&typeof f===b){f=Math.round(parseFloat(f)*d/100);
}top=o.top!=null?o.top:o.edge;

if(top&&typeof top===b){top=Math.round(parseFloat(top)*e/100);
}g=o.bottom!=null?o.bottom:o.edge;

if(g&&typeof g===b){g=Math.round(parseFloat(g)*e/100);
}if(t!=null&&f!=null){k=d-t-f-m-n;
if(k<q.minWidth){k=q.minWidth;
}else if(k>q.maxWidth){k=q.maxWidth;
}t+=m;
}else{k=o.width;

if(k==null){k=q.width;
}else{k=Math.round(parseFloat(k)*d/100);
if(k<q.minWidth){k=q.minWidth;
}else if(k>q.maxWidth){k=q.maxWidth;
}}
if(f!=null){t=d-k-f-n-m;
}else if(t==null){t=m;
}else{t+=m;
}}if(top!=null&&g!=null){j=e-top-g-p-s;
if(j<q.minHeight){j=q.minHeight;
}else if(j>q.maxHeight){j=q.maxHeight;
}top+=p;
}else{j=o.height;

if(j==null){j=q.height;
}else{j=Math.round(parseFloat(j)*e/100);
if(j<q.minHeight){j=q.minHeight;
}else if(j>q.maxHeight){j=q.maxHeight;
}}
if(g!=null){top=e-j-g-s-p;
}else if(top==null){top=p;
}else{top+=p;
}}h.renderLayout(t,top,k,j);
}},_computeSizeHint:function(){var J=0,I=0;
var G=0,E=0;
var C,B;
var A,y;
var u=this._getLayoutChildren();
var x,H,w;
var K,top,v,z;

for(var i=0,l=u.length;i<l;i++){x=u[i];
H=x.getLayoutProperties();
w=x.getSizeHint();
var F=x.getMarginLeft()+x.getMarginRight();
var D=x.getMarginTop()+x.getMarginBottom();
C=w.width+F;
B=w.minWidth+F;
K=H.left!=null?H.left:H.edge;

if(K&&typeof K===c){C+=K;
B+=K;
}v=H.right!=null?H.right:H.edge;

if(v&&typeof v===c){C+=v;
B+=v;
}J=Math.max(J,C);
I=Math.max(I,B);
A=w.height+D;
y=w.minHeight+D;
top=H.top!=null?H.top:H.edge;

if(top&&typeof top===c){A+=top;
y+=top;
}z=H.bottom!=null?H.bottom:H.edge;

if(z&&typeof z===c){A+=z;
y+=z;
}G=Math.max(G,A);
E=Math.max(E,y);
}return {width:J,minWidth:I,height:G,minHeight:E};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){arguments.callee.base.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){arguments.callee.base.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var S="_applyLayoutChange",R="top",Q="left",P="middle",O="Decorator",N="center",M="baseline",L="bottom",K="__hD",J="qx.ui.layout.VBox",F="__hA",I="__hB",H="_applyReversed",E="Integer",D="right",G="Boolean";
qx.Class.define(J,{extend:qx.ui.layout.Abstract,construct:function(a,b,c){arguments.callee.base.call(this);

if(a){this.setSpacing(a);
}
if(b){this.setAlignY(b);
}
if(c){this.setSeparator(c);
}},properties:{alignY:{check:[R,P,L],init:R,apply:S},alignX:{check:[Q,N,D,M],init:Q,apply:S},spacing:{check:E,init:0,apply:S},separator:{check:O,nullable:true,apply:S},reversed:{check:G,init:false,apply:H}},members:{__hA:null,__hB:null,__hC:null,__hD:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__hE:function(){var Y=this._getLayoutChildren();
var length=Y.length;
var U=false;
var T=this.__hA&&this.__hA.length!=length&&this.__hB&&this.__hA;
var W;
var V=T?this.__hA:new Array(length);
var X=T?this.__hB:new Array(length);
if(this.getReversed()){Y=Y.concat().reverse();
}for(var i=0;i<length;i++){W=Y[i].getLayoutProperties();

if(W.height!=null){V[i]=parseFloat(W.height)/100;
}
if(W.flex!=null){X[i]=W.flex;
U=true;
}}if(!T){this.__hA=V;
this.__hB=X;
}this.__hC=U;
this.__hD=Y;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(d,e){if(this._invalidChildrenCache){this.__hE();
}var n=this.__hD;
var length=n.length;
var x=qx.ui.layout.Util;
var w=this.getSpacing();
var A=this.getSeparator();

if(A){var j=x.computeVerticalSeparatorGaps(n,w,A);
}else{var j=x.computeVerticalGaps(n,w,true);
}var i,g,h,r;
var s=[];
var y=j;

for(i=0;i<length;i+=1){r=this.__hA[i];
h=r!=null?Math.floor((e-j)*r):n[i].getSizeHint().height;
s.push(h);
y+=h;
}if(this.__hC&&y!=e){var p={};
var v,z;

for(i=0;i<length;i+=1){v=this.__hB[i];

if(v>0){o=n[i].getSizeHint();
p[i]={min:o.minHeight,value:s[i],max:o.maxHeight,flex:v};
}}var k=x.computeFlexOffsets(p,e,y);

for(i in k){z=k[i].offset;
s[i]+=z;
y+=z;
}}var top=n[0].getMarginTop();
if(y<e&&this.getAlignY()!=R){top=e-y;

if(this.getAlignY()===P){top=Math.round(top/2);
}}var o,C,t,h,q,u,m;
var w=this.getSpacing();
this._clearSeparators();
if(A){var B=qx.theme.manager.Decoration.getInstance().resolve(A).getInsets();
var f=B.top+B.bottom;
}for(i=0;i<length;i+=1){g=n[i];
h=s[i];
o=g.getSizeHint();
u=g.getMarginLeft();
m=g.getMarginRight();
t=Math.max(o.minWidth,Math.min(d-u-m,o.maxWidth));
C=x.computeHorizontalAlignOffset(g.getAlignX()||this.getAlignX(),t,d,u,m);
if(i>0){if(A){top+=q+w;
this._renderSeparator(A,{top:top,left:0,height:f,width:d});
top+=f+w+g.getMarginTop();
}else{top+=x.collapseMargins(w,q,g.getMarginTop());
}}g.renderLayout(C,top,t,h);
top+=h;
q=g.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__hE();
}var bf=qx.ui.layout.Util;
var bl=this.__hD;
var bd=0,be=0;
var ba=0,bg=0;
var bj,bb,bk;
for(var i=0,l=bl.length;i<l;i+=1){bj=bl[i];
bb=bj.getSizeHint();
be+=bb.height;
bd+=this.__hB[i]>0?bb.minHeight:bb.height;
bk=bj.getMarginLeft()+bj.getMarginRight();
if((bb.width+bk)>bg){bg=bb.width+bk;
}if((bb.minWidth+bk)>ba){ba=bb.minWidth+bk;
}}var bc=this.getSpacing();
var bi=this.getSeparator();

if(bi){var bh=bf.computeVerticalSeparatorGaps(bl,bc,bi);
}else{var bh=bf.computeVerticalGaps(bl,bc,true);
}return {minHeight:bd+bh,height:be+bh,minWidth:ba,width:bg};
}},destruct:function(){this._disposeFields(F,I,K);
}});
})();
(function(){var G="middle",F="qx.ui.layout.Util",E="left",D="center",C="top",B="bottom",A="right";
qx.Class.define(F,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(H,I,J){var L,P,K,Q;
var M=I>J;
var R=Math.abs(I-J);
var S,N;
var O={};

for(P in H){L=H[P];
O[P]={potential:M?L.max-L.value:L.value-L.min,flex:M?L.flex:1/L.flex,offset:0};
}while(R!=0){Q=Infinity;
K=0;

for(P in O){L=O[P];

if(L.potential>0){K+=L.flex;
Q=Math.min(Q,L.potential/L.flex);
}}if(K==0){break;
}Q=Math.min(R,Q*K)/K;
S=0;

for(P in O){L=O[P];

if(L.potential>0){N=Math.min(R,L.potential,Math.ceil(Q*L.flex));
S+=N-Q*L.flex;

if(S>=1){S-=1;
N-=1;
}L.potential-=N;

if(M){L.offset+=N;
}else{L.offset-=N;
}R-=N;
}}}return O;
},computeHorizontalAlignOffset:function(u,v,w,x,y){if(x==null){x=0;
}
if(y==null){y=0;
}var z=0;

switch(u){case E:z=x;
break;
case A:z=w-v-y;
break;
case D:z=Math.round((w-v)/2);
if(z<x){z=x;
}else if(z<y){z=Math.max(x,w-v-y);
}break;
}return z;
},computeVerticalAlignOffset:function(e,f,g,h,j){if(h==null){h=0;
}
if(j==null){j=0;
}var k=0;

switch(e){case C:k=h;
break;
case B:k=g-f-j;
break;
case G:k=Math.round((g-f)/2);
if(k<h){k=h;
}else if(k<j){k=Math.max(h,g-f-j);
}break;
}return k;
},collapseMargins:function(a){var b=0,d=0;

for(var i=0,l=arguments.length;i<l;i++){var c=arguments[i];

if(c<0){d=Math.min(d,c);
}else if(c>0){b=Math.max(b,c);
}}return b+d;
},computeHorizontalGaps:function(T,U,V){if(U==null){U=0;
}var W=0;

if(V){W+=T[0].getMarginLeft();

for(var i=1,l=T.length;i<l;i+=1){W+=this.collapseMargins(U,T[i-1].getMarginRight(),T[i].getMarginLeft());
}W+=T[l-1].getMarginRight();
}else{for(var i=1,l=T.length;i<l;i+=1){W+=T[i].getMarginLeft()+T[i].getMarginRight();
}W+=(U*(l-1));
}return W;
},computeVerticalGaps:function(X,Y,ba){if(Y==null){Y=0;
}var bb=0;

if(ba){bb+=X[0].getMarginTop();

for(var i=1,l=X.length;i<l;i+=1){bb+=this.collapseMargins(Y,X[i-1].getMarginBottom(),X[i].getMarginTop());
}bb+=X[l-1].getMarginBottom();
}else{for(var i=1,l=X.length;i<l;i+=1){bb+=X[i].getMarginTop()+X[i].getMarginBottom();
}bb+=(Y*(l-1));
}return bb;
},computeHorizontalSeparatorGaps:function(bc,bd,be){var bh=qx.theme.manager.Decoration.getInstance().resolve(be);
var bg=bh.getInsets();
var bf=bg.left+bg.right;
var bi=0;

for(var i=0,l=bc.length;i<l;i++){var bj=bc[i];
bi+=bj.getMarginLeft()+bj.getMarginRight();
}bi+=(bd+bf+bd)*(l-1);
return bi;
},computeVerticalSeparatorGaps:function(m,n,o){var r=qx.theme.manager.Decoration.getInstance().resolve(o);
var q=r.getInsets();
var p=q.top+q.bottom;
var s=0;

for(var i=0,l=m.length;i<l;i++){var t=m[i];
s+=t.getMarginTop()+t.getMarginBottom();
}s+=(n+p+n)*(l-1);
return s;
},arrangeIdeals:function(bk,bl,bm,bn,bo,bp){if(bl<bk||bo<bn){if(bl<bk&&bo<bn){bl=bk;
bo=bn;
}else if(bl<bk){bo-=(bk-bl);
bl=bk;
if(bo<bn){bo=bn;
}}else if(bo<bn){bl-=(bn-bo);
bo=bn;
if(bl<bk){bl=bk;
}}}
if(bl>bm||bo>bp){if(bl>bm&&bo>bp){bl=bm;
bo=bp;
}else if(bl>bm){bo+=(bl-bm);
bl=bm;
if(bo>bp){bo=bp;
}}else if(bo>bp){bl+=(bo-bp);
bo=bp;
if(bl>bm){bl=bm;
}}}return {begin:bl,end:bo};
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(i){arguments.callee.base.call(this);

if(i!=null){this._setLayout(i);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(e){this.fireNonBubblingEvent(b,qx.event.type.Data,[e]);
},_afterRemoveChild:function(h){this.fireNonBubblingEvent(a,qx.event.type.Data,[h]);
}},defer:function(f,g){qx.ui.core.MChildrenHandling.remap(g);
qx.ui.core.MLayoutHandling.remap(g);
}});
})();
(function(){var B="scrollbar-y",A="scrollbar-x",z="pane",y="auto",x="corner",w="on",v="changeVisibility",u="scroll",t="_computeScrollbars",s="off",l="scrollY",r="abstract",o="update",j="scrollX",i="mousewheel",n="scrollbarY",m="scrollbarX",p="horizontal",h="scrollarea",q="qx.ui.core.AbstractScrollArea",k="vertical";
qx.Class.define(q,{extend:qx.ui.core.Widget,type:r,construct:function(){arguments.callee.base.call(this);
var a=new qx.ui.layout.Grid();
a.setColumnFlex(0,1);
a.setRowFlex(0,1);
this._setLayout(a);
this.addListener(i,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:h},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[y,w,s],init:y,apply:t},scrollbarY:{check:[y,w,s],init:y,apply:t},scrollbar:{group:[m,n]}},members:{_createChildControlImpl:function(O){var P;

switch(O){case z:P=new qx.ui.core.ScrollPane();
P.addListener(o,this._computeScrollbars,this);
P.addListener(j,this._onScrollPaneX,this);
P.addListener(l,this._onScrollPaneY,this);
this._add(P,{row:0,column:0});
break;
case A:P=new qx.ui.core.ScrollBar(p);
P.setMinWidth(0);
P.exclude();
P.addListener(u,this._onScrollBarX,this);
P.addListener(v,this._onChangeScrollbarXVisibility,this);
this._add(P,{row:1,column:0});
break;
case B:P=new qx.ui.core.ScrollBar(k);
P.setMinHeight(0);
P.exclude();
P.addListener(u,this._onScrollBarY,this);
P.addListener(v,this._onChangeScrollbarYVisibility,this);
this._add(P,{row:0,column:1});
break;
case x:P=new qx.ui.core.Widget();
P.setWidth(0);
P.setHeight(0);
P.exclude();
this._add(P,{row:1,column:1});
break;
}return P||arguments.callee.base.call(this,O);
},getPaneSize:function(){return this.getChildControl(z).getInnerSize();
},getItemTop:function(c){return this.getChildControl(z).getItemTop(c);
},getItemBottom:function(f){return this.getChildControl(z).getItemBottom(f);
},getItemLeft:function(d){return this.getChildControl(z).getItemLeft(d);
},getItemRight:function(Q){return this.getChildControl(z).getItemRight(Q);
},scrollToX:function(M){qx.ui.core.queue.Manager.flush();
this.getChildControl(A).scrollTo(M);
},scrollByX:function(N){qx.ui.core.queue.Manager.flush();
this.getChildControl(A).scrollBy(N);
},getScrollX:function(){var b=this.getChildControl(A,true);
return b?b.getPosition():0;
},scrollToY:function(S){qx.ui.core.queue.Manager.flush();
this.getChildControl(B).scrollTo(S);
},scrollByY:function(R){qx.ui.core.queue.Manager.flush();
this.getChildControl(B).scrollBy(R);
},getScrollY:function(){var g=this.getChildControl(B,true);
return g?g.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(z).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(z).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var Y=this._isChildControlVisible(A);
var ba=this._isChildControlVisible(B);
var X=(ba)?this.getChildControl(B,true):(Y?this.getChildControl(A,true):null);

if(X){X.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var V=this._isChildControlVisible(A);
var W=this._isChildControlVisible(B);

if(!V){this.scrollToX(0);
}V&&W?this._showChildControl(x):this._excludeChildControl(x);
},_onChangeScrollbarYVisibility:function(e){var T=this._isChildControlVisible(A);
var U=this._isChildControlVisible(B);

if(!U){this.scrollToY(0);
}T&&U?this._showChildControl(x):this._excludeChildControl(x);
},_computeScrollbars:function(){var I=this.getChildControl(z);
var content=I.getChild();

if(!content){this._excludeChildControl(A);
this._excludeChildControl(B);
return;
}var C=this.getInnerSize();
var H=I.getInnerSize();
var F=I.getScrollSize();
if(!H||!F){return;
}var J=this.getScrollbarX();
var K=this.getScrollbarY();

if(J===y&&K===y){var G=F.width>C.width;
var L=F.height>C.height;
if((G||L)&&!(G&&L)){if(G){L=F.height>H.height;
}else if(L){G=F.width>H.width;
}}}else{var G=J===w;
var L=K===w;
if(F.width>(G?H.width:C.width)&&J===y){G=true;
}
if(F.height>(G?H.height:C.height)&&K===y){L=true;
}}if(G){var E=this.getChildControl(A);
E.show();
E.setMaximum(Math.max(0,F.width-H.width-1));
E.setKnobFactor(H.width/F.width);
}else{this._excludeChildControl(A);
}
if(L){var D=this.getChildControl(B);
D.show();
D.setMaximum(Math.max(0,F.height-H.height-1));
D.setKnobFactor(H.height/F.height);
}else{this._excludeChildControl(B);
}}}});
})();
(function(){var d="qx.ui.core.ISingleSelection",c="qx.event.type.Data";
qx.Interface.define(d,{events:{"changeSelection":c},members:{getSelected:function(){return true;
},setSelected:function(b){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(a){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var b="qx.ui.core.IMultiSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(d){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(f){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(e){return arguments.length==1;
},getSelectables:function(){return true;
}}});
})();
(function(){var y="Boolean",x="changeSelection",w="single",v="qx.ui.core.MSelectionHandling",u="mousedown",t="losecapture",s="one",r="multi",q="_applyQuickSelection",p="mouseover",i="_applySelectionMode",o="__hF",l="_applyDragSelection",h="mouseup",g="mousemove",k="removeItem",j="keypress",m="addItem",f="additive",n="qx.event.type.Data";
qx.Mixin.define(v,{construct:function(){var b=this.SELECTION_MANAGER;
var a=this.__hF=new b(this);
this.addListener(u,a.handleMouseDown,a);
this.addListener(h,a.handleMouseUp,a);
this.addListener(p,a.handleMouseOver,a);
this.addListener(g,a.handleMouseMove,a);
this.addListener(t,a.handleLoseCapture,a);
this.addListener(j,a.handleKeyPress,a);
this.addListener(m,a.handleAddItem,a);
this.addListener(k,a.handleRemoveItem,a);
a.addListener(x,this._onSelectionChange,this);
},events:{"changeSelection":n},properties:{selectionMode:{check:[w,r,f,s],init:w,apply:i},dragSelection:{check:y,init:false,apply:l},quickSelection:{check:y,init:false,apply:q}},members:{__hF:null,selectAll:function(){this.__hF.selectAll();
},select:function(c){this.setSelected(c);
},setSelected:function(D){this.__hF.selectItem(D);
},isSelected:function(z){return this.__hF.isItemSelected(z);
},addToSelection:function(B){this.__hF.addItem(B);
},removeFromSelection:function(C){this.__hF.removeItem(C);
},selectRange:function(K,L){this.__hF.selectItemRange(K,L);
},clearSelection:function(){this.resetSelection();
},resetSelection:function(){this.__hF.clearSelection();
},replaceSelection:function(d){this.setSelection(d);
},setSelection:function(A){this.__hF.replaceSelection(A);
},getSelectedItem:function(){return this.getSelected();
},getSelected:function(){return this.__hF.getSelectedItem();
},getSelection:function(){return this.__hF.getSelection();
},getSortedSelection:function(){return this.__hF.getSortedSelection();
},isSelectionEmpty:function(){return this.__hF.isSelectionEmpty();
},getSelectionContext:function(){return this.__hF.getSelectionContext();
},_getManager:function(){return this.__hF;
},getSelectables:function(){return this.__hF.getSelectables();
},_applySelectionMode:function(I,J){this.__hF.setMode(I);
},_applyDragSelection:function(G,H){this.__hF.setDrag(G);
},_applyQuickSelection:function(E,F){this.__hF.setQuick(E);
},_onSelectionChange:function(e){this.fireDataEvent(x,e.getData());
}},destruct:function(){this._disposeObjects(o);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__hG:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__hH:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__hH[name];
s[t]();
}else{var u=this.__hG[name];
s[u](q);
}}}});
})();
(function(){var bD="one",bC="single",bB="selected",bA="additive",bz="multi",by="PageUp",bx="under",bw="Left",bv="lead",bu="Down",cg="Up",cf="Boolean",ce="PageDown",cd="anchor",cc="End",cb="Home",ca="Right",bY="right",bX="click",bW="above",bK="left",bL="Escape",bI="__ib",bJ="A",bG="Space",bH="_applyMode",bE="interval",bF="__hL",bM="__ia",bN="changeSelection",bQ="qx.event.type.Data",bP="quick",bS="key",bR="__ic",bU="__hI",bT="abstract",bO="drag",bV="qx.ui.core.selection.Abstract";
qx.Class.define(bV,{type:bT,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hI={};
},events:{"changeSelection":bQ},properties:{mode:{check:[bC,bz,bA,bD],init:bC,apply:bH},drag:{check:cf,init:false},quick:{check:cf,init:false}},members:{__hJ:0,__hK:0,__hL:null,__hM:null,__hN:null,__hO:null,__hP:null,__hQ:null,__hR:null,__hS:null,__hT:null,__hU:null,__hV:null,__hW:null,__hX:null,__hY:null,__ia:null,__hI:null,__ib:null,__ic:null,getSelectionContext:function(){return this.__hY;
},selectAll:function(){var cv=this.getMode();

if(cv==bC||cv==bD){throw new Error("Can not select all items in selection mode: "+cv);
}this._selectAllItems();
this._fireChange();
},selectItem:function(g){this._setSelectedItem(g);
var h=this.getMode();

if(h!==bC&&h!==bD){this._setLeadItem(g);
this._setAnchorItem(g);
}this._scrollItemIntoView(g);
this._fireChange();
},addItem:function(cH){var cI=this.getMode();

if(cI===bC||cI===bD){this._setSelectedItem(cH);
}else{if(!this._getAnchorItem()){this._setAnchorItem(cH);
}this._setLeadItem(cH);
this._addToSelection(cH);
}this._scrollItemIntoView(cH);
this._fireChange();
},removeItem:function(bl){this._removeFromSelection(bl);

if(this.getMode()===bD&&this.isSelectionEmpty()){var bm=this._getFirstSelectable();

if(bm){this.addItem(bm);
}if(bm==bl){return;
}}
if(this._getLeadItem()==bl){this._setLeadItem(null);
}
if(this._getAnchorItem()==bl){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(cs,ct){var cu=this.getMode();

if(cu==bC||cu==bD){throw new Error("Can not select multiple items in selection mode: "+cu);
}this._selectItemRange(cs,ct);
this._setAnchorItem(cs);
this._setLeadItem(ct);
this._scrollItemIntoView(ct);
this._fireChange();
},clearSelection:function(){if(this.getMode()==bD){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cW){var cX=this.getMode();

if(cX==bD||cX===bC){if(cW.length>1){throw new Error("Could not select more than one items in mode: "+cX+"!");
}
if(cW.length==1){this.selectItem(cW[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cW);
}},getSelectedItem:function(){var cG=this.getMode();

if(cG===bC||cG===bD){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__hI);
},getSortedSelection:function(){var cn=this.getSelectables();
var cm=qx.lang.Object.getValues(this.__hI);
cm.sort(function(a,b){return cn.indexOf(a)-cn.indexOf(b);
});
return cm;
},isItemSelected:function(cL){var cM=this._selectableToHashCode(cL);
return this.__hI[cM]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__hI);
},_setLeadItem:function(cA){var cB=this.__ia;

if(cB!==null){this._styleSelectable(cB,bv,false);
}
if(cA!==null){this._styleSelectable(cA,bv,true);
}this.__ia=cA;
},_getLeadItem:function(){return this.__ia!==null?this.__ia:null;
},_setAnchorItem:function(bj){var bk=this.__ib;

if(bk){this._styleSelectable(bk,cd,false);
}
if(bj){this._styleSelectable(bj,cd,true);
}this.__ib=bj;
},_getAnchorItem:function(){return this.__ib!==null?this.__ib:null;
},_isSelectable:function(cQ){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var cz=event.getTarget();
return this._isSelectable(cz)?cz:null;
},_selectableToHashCode:function(br){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(cw,cx,cy){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(cC){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(co){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(cD,cE){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(cN){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(cT,cU){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bp,bq){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(ch,ci){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(cj,ck){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(cj===bD){var cl=this._getFirstSelectable();

if(cl){this._setSelectedItem(cl);
this._scrollItemIntoView(cl);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var bo=this.getMode();

if(bo!==bD&&bo!==bC){return;
}var bn=this._getSelectableFromMouseEvent(event);

if(bn===null){return;
}this._setSelectedItem(bn);
this._fireChange(bP);
},handleMouseDown:function(event){var s=this._getSelectableFromMouseEvent(event);

if(s===null){return;
}var u=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var r=event.isShiftPressed();
if(this.isItemSelected(s)&&!r&&!u&&!this.getDrag()){this.__ic=s;
return;
}else{this.__ic=null;
}this._scrollItemIntoView(s);
switch(this.getMode()){case bC:case bD:this._setSelectedItem(s);
break;
case bA:this._setLeadItem(s);
this._setAnchorItem(s);
this._toggleInSelection(s);
break;
case bz:this._setLeadItem(s);
if(r){var t=this._getAnchorItem();

if(t===null){t=this._getFirstSelectable();
this._setAnchorItem(t);
}this._selectItemRange(t,s,u);
}else if(u){this._setAnchorItem(s);
this._toggleInSelection(s);
}else{this._setAnchorItem(s);
this._setSelectedItem(s);
}break;
}var v=this.getMode();

if(this.getDrag()&&v!==bC&&v!==bD&&!r&&!u){this.__hP=this._getLocation();
this.__hM=this._getScroll();
this.__hQ=event.getDocumentLeft()+this.__hM.left;
this.__hR=event.getDocumentTop()+this.__hM.top;
this.__hS=true;
this._capture();
}this._fireChange(bX);
},handleMouseUp:function(event){var O=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var L=event.isShiftPressed();

if(!O&&!L&&this.__ic){var M=this._getSelectableFromMouseEvent(event);

if(M===null||!this.isItemSelected(M)){return;
}var N=this.getMode();

if(N===bA){this._removeFromSelection(M);
}else{this._setSelectedItem(M);

if(this.getMode()===bz){this._setLeadItem(M);
this._setAnchorItem(M);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__hS){return;
}this.__hT=event.getDocumentLeft();
this.__hU=event.getDocumentTop();
var cP=this.__hT+this.__hM.left;

if(cP>this.__hQ){this.__hV=1;
}else if(cP<this.__hQ){this.__hV=-1;
}else{this.__hV=0;
}var cO=this.__hU+this.__hM.top;

if(cO>this.__hR){this.__hW=1;
}else if(cO<this.__hR){this.__hW=-1;
}else{this.__hW=0;
}var location=this.__hP;

if(this.__hT<location.left){this.__hJ=this.__hT-location.left;
}else if(this.__hT>location.right){this.__hJ=this.__hT-location.right;
}else{this.__hJ=0;
}
if(this.__hU<location.top){this.__hK=this.__hU-location.top;
}else if(this.__hU>location.bottom){this.__hK=this.__hU-location.bottom;
}else{this.__hK=0;
}if(!this.__hL){this.__hL=new qx.event.Timer(100);
this.__hL.addListener(bE,this._onInterval,this);
}this.__hL.start();
this._autoSelect();
},handleAddItem:function(e){var w=e.getData();

if(this.getMode()===bD&&this.isSelectionEmpty()){this.addItem(w);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__hS){return;
}if(this.__hX){this._fireChange(bX);
}delete this.__hS;
delete this.__hN;
delete this.__hO;
this._releaseCapture();
if(this.__hL){this.__hL.stop();
}},_onInterval:function(e){this._scrollBy(this.__hJ,this.__hK);
this.__hM=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var H=this._getDimension();
var A=Math.max(0,Math.min(this.__hT-this.__hP.left,H.width))+this.__hM.left;
var z=Math.max(0,Math.min(this.__hU-this.__hP.top,H.height))+this.__hM.top;
if(this.__hN===A&&this.__hO===z){return;
}this.__hN=A;
this.__hO=z;
var J=this._getAnchorItem();
var C=J;
var F=this.__hV;
var I,B;

while(F!==0){I=F>0?this._getRelatedSelectable(C,bY):this._getRelatedSelectable(C,bK);
if(I!==null){B=this._getSelectableLocationX(I);
if((F>0&&B.left<=A)||(F<0&&B.right>=A)){C=I;
continue;
}}break;
}var G=this.__hW;
var E,D;

while(G!==0){E=G>0?this._getRelatedSelectable(C,bx):this._getRelatedSelectable(C,bW);
if(E!==null){D=this._getSelectableLocationY(E);
if((G>0&&D.top<=z)||(G<0&&D.bottom>=z)){C=E;
continue;
}}break;
}var K=this.getMode();

if(K===bz){this._selectItemRange(J,C);
}else if(K===bA){if(this.isItemSelected(J)){this._selectItemRange(J,C,true);
}else{this._deselectItemRange(J,C);
}this._setAnchorItem(C);
}this._fireChange(bO);
},__id:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var be,bd;
var bg=event.getKeyIdentifier();
var bf=this.getMode();
var ba=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bb=event.isShiftPressed();
var bc=false;

if(bg===bJ&&ba){if(bf!==bC&&bf!==bD){this._selectAllItems();
bc=true;
}}else if(bg===bL){if(bf!==bC&&bf!==bD){this._clearSelection();
bc=true;
}}else if(bg===bG){var Y=this._getLeadItem();

if(Y&&!bb){if(ba||bf===bA){this._toggleInSelection(Y);
}else{this._setSelectedItem(Y);
}bc=true;
}}else if(this.__id[bg]){bc=true;

if(bf===bC||bf==bD){be=this._getSelectedItem();
}else{be=this._getLeadItem();
}var bi=this._getFirstSelectable();
var X=this._getLastSelectable();

if(be!==null){switch(bg){case cb:bd=bi;
break;
case cc:bd=X;
break;
case cg:bd=this._getRelatedSelectable(be,bW);
break;
case bu:bd=this._getRelatedSelectable(be,bx);
break;
case bw:bd=this._getRelatedSelectable(be,bK);
break;
case ca:bd=this._getRelatedSelectable(be,bY);
break;
case by:bd=this._getPage(be,true);
break;
case ce:bd=this._getPage(be,false);
break;
}}else{switch(bg){case cb:case bu:case ca:case ce:bd=bi;
break;
case cc:case cg:case bw:case by:bd=X;
break;
}}if(bd!==null){switch(bf){case bC:case bD:this._setSelectedItem(bd);
break;
case bA:this._setLeadItem(bd);
break;
case bz:if(bb){var bh=this._getAnchorItem();

if(bh===null){this._setAnchorItem(bh=this._getFirstSelectable());
}this._setLeadItem(bd);
this._selectItemRange(bh,bd,ba);
}else{this._setAnchorItem(bd);
this._setLeadItem(bd);

if(!ba){this._setSelectedItem(bd);
}}break;
}this._scrollItemIntoView(bd);
}}
if(bc){event.stop();
this._fireChange(bS);
}},_selectAllItems:function(){var cV=this.getSelectables();

for(var i=0,l=cV.length;i<l;i++){this._addToSelection(cV[i]);
}},_clearSelection:function(){var cR=this.__hI;

for(var cS in cR){this._removeFromSelection(cR[cS]);
}this.__hI={};
},_selectItemRange:function(Q,R,S){var V=this._getSelectableRange(Q,R);
if(!S){var U=this.__hI;
var W=this.__ie(V);

for(var T in U){if(!W[T]){this._removeFromSelection(U[T]);
}}}for(var i=0,l=V.length;i<l;i++){this._addToSelection(V[i]);
}},_deselectItemRange:function(c,d){var f=this._getSelectableRange(c,d);

for(var i=0,l=f.length;i<l;i++){this._removeFromSelection(f[i]);
}},__ie:function(cp){var cr={};
var cq;

for(var i=0,l=cp.length;i<l;i++){cq=cp[i];
cr[this._selectableToHashCode(cq)]=cq;
}return cr;
},_getSelectedItem:function(){for(var cF in this.__hI){return this.__hI[cF];
}return null;
},_setSelectedItem:function(bs){if(this._isSelectable(bs)){var bt=this.__hI;

if(!bt[bs.$$hash]||qx.lang.Object.hasMinLength(bt,2)){this._clearSelection();
this._addToSelection(bs);
}}},_addToSelection:function(cJ){var cK=this._selectableToHashCode(cJ);

if(!this.__hI[cK]&&this._isSelectable(cJ)){this.__hI[cK]=cJ;
this._styleSelectable(cJ,bB,true);
this.__hX=true;
}},_toggleInSelection:function(cY){var da=this._selectableToHashCode(cY);

if(!this.__hI[da]){this.__hI[da]=cY;
this._styleSelectable(cY,bB,true);
}else{delete this.__hI[da];
this._styleSelectable(cY,bB,false);
}this.__hX=true;
},_removeFromSelection:function(x){var y=this._selectableToHashCode(x);

if(this.__hI[y]!==null){delete this.__hI[y];
this._styleSelectable(x,bB,false);
this.__hX=true;
}},_replaceMultiSelection:function(j){var n=false;
var q,p;
var k={};

for(var i=0,l=j.length;i<l;i++){q=j[i];

if(this._isSelectable(q)){p=this._selectableToHashCode(q);
k[p]=q;
}}var m=q;
var o=this.__hI;

for(var p in o){if(k[p]){delete k[p];
}else{q=o[p];
delete o[p];
this._styleSelectable(q,bB,false);
n=true;
}}for(var p in k){q=o[p]=k[p];
this._styleSelectable(q,bB,true);
n=true;
}if(!n){return false;
}this._scrollItemIntoView(m);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__hX=true;
this._fireChange();
},_fireChange:function(P){if(this.__hX){this.__hY=P||null;
this.fireDataEvent(bN,this.getSelection());
delete this.__hX;
}}},destruct:function(){this._disposeObjects(bF);
this._disposeFields(bU,bR,bI,bM);
}});
})();
(function(){var s="vertical",r="under",q="__if",p="above",o="qx.ui.core.selection.Widget",n="left",m="right";
qx.Class.define(o,{extend:qx.ui.core.selection.Abstract,construct:function(u){arguments.callee.base.call(this);
this.__if=u;
},members:{__if:null,_isSelectable:function(H){return H.isEnabled()&&H.getLayoutParent()===this.__if;
},_selectableToHashCode:function(A){return A.$$hash;
},_styleSelectable:function(a,b,c){c?a.addState(b):a.removeState(b);
},_capture:function(){this.__if.capture();
},_releaseCapture:function(){this.__if.releaseCapture();
},_getWidget:function(){return this.__if;
},_getLocation:function(){var h=this.__if.getContentElement().getDomElement();
return h?qx.bom.element.Location.get(h):null;
},_getDimension:function(){return this.__if.getInnerSize();
},_getSelectableLocationX:function(O){var P=O.getBounds();

if(P){return {left:P.left,right:P.left+P.width};
}},_getSelectableLocationY:function(f){var g=f.getBounds();

if(g){return {top:g.top,bottom:g.top+g.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(j,k){},_scrollItemIntoView:function(z){this.__if.scrollChildIntoView(z);
},getSelectables:function(){var x=this.__if.getChildren();
var y=[];
var w;

for(var i=0,l=x.length;i<l;i++){w=x[i];

if(w.isEnabled()){y.push(w);
}}return y;
},_getSelectableRange:function(B,C){if(B===C){return [B];
}var G=this.__if.getChildren();
var D=[];
var F=false;
var E;

for(var i=0,l=G.length;i<l;i++){E=G[i];

if(E===B||E===C){if(F){D.push(E);
break;
}else{F=true;
}}
if(F&&E.isEnabled()){D.push(E);
}}return D;
},_getFirstSelectable:function(){var t=this.__if.getChildren();

for(var i=0,l=t.length;i<l;i++){if(t[i].isEnabled()){return t[i];
}}return null;
},_getLastSelectable:function(){var v=this.__if.getChildren();

for(var i=v.length-1;i>0;i--){if(v[i].isEnabled()){return v[i];
}}return null;
},_getRelatedSelectable:function(I,J){var M=this.__if.getOrientation()===s;
var L=this.__if.getChildren();
var K=L.indexOf(I);
var N;

if((M&&J===p)||(!M&&J===n)){for(var i=K-1;i>=0;i--){N=L[i];

if(N.isEnabled()){return N;
}}}else if((M&&J===r)||(!M&&J===m)){for(var i=K+1;i<L.length;i++){N=L[i];

if(N.isEnabled()){return N;
}}}return null;
},_getPage:function(d,e){if(e){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this._disposeFields(q);
}});
})();
(function(){var e="qx.ui.core.selection.ScrollArea";
qx.Class.define(e,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return (s.isEnabled()&&s.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var a=this._getWidget();
return {left:a.getScrollX(),top:a.getScrollY()};
},_scrollBy:function(b,c){var d=this._getWidget();
d.scrollByX(b);
d.scrollByY(c);
},_getPage:function(f,g){var l=this.getSelectables();
var length=l.length;
var o=l.indexOf(f);
if(o===-1){throw new Error("Invalid lead item: "+f);
}var h=this._getWidget();
var q=h.getScrollY();
var innerHeight=h.getInnerSize().height;
var top,k,p;

if(g){var n=q;
var i=o;
while(1){for(;i>=0;i--){top=h.getItemTop(l[i]);
if(top<n){p=i+1;
break;
}}if(p==null){var r=this._getFirstSelectable();
return r==f?null:r;
}if(p>=o){n-=innerHeight+q-h.getItemBottom(f);
p=null;
continue;
}return l[p];
}}else{var m=innerHeight+q;
var i=o;
while(1){for(;i<length;i++){k=h.getItemBottom(l[i]);
if(k>m){p=i-1;
break;
}}if(p==null){var j=this._getLastSelectable();
return j==f?null:j;
}if(p<=o){m+=h.getItemTop(f)-q;
p=null;
continue;
}return l[p];
}}}}});
})();
(function(){var r="right",q="above",p="left",o="under",n="qx.ui.tree.SelectionManager";
qx.Class.define(n,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(a){var b=a.getBounds();

if(b){var top=this._getWidget().getItemTop(a);
return {top:top,bottom:top+b.height};
}},_isSelectable:function(c){return c instanceof qx.ui.tree.AbstractTreeItem&&c.isEnabled();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var j=this._getWidget();
return j.getRoot().getItems(true,false,j.getHideRoot());
},_getSelectableRange:function(d,e){if(d===e){return [d];
}var f=this.getSelectables();
var g=f.indexOf(d);
var h=f.indexOf(e);

if(g<0||h<0){return [];
}
if(g<h){return f.slice(g,h+1);
}else{return f.slice(h,g+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var i=this.getSelectables();

if(i.length>0){return i[i.length-1];
}else{return null;
}},_getRelatedSelectable:function(k,l){var m=this._getWidget();

switch(l){case q:return m.getPreviousSiblingOf(k,false);
case o:return m.getNextSiblingOf(k,false);
case p:if(k.isOpenable()&&k.isOpen()){k.setOpen(false);
}break;
case r:if(k.isOpenable()&&!k.isOpen()){k.setOpen(true);
}break;
}return null;
}}});
})();
(function(){var J="dblclick",I="click",H="visible",G="Boolean",F="excluded",E="qx.event.type.Data",D="__ig",C="_applyHideRoot",B="none",A="_applyRootOpenClose",u="_applyOpenMode",z="changeRoot",x="changeOpenMode",t="pane",s="_applyRoot",w="qx.ui.tree.Tree",v="qx.ui.tree.AbstractTreeItem",y="tree";
qx.Class.define(w,{extend:qx.ui.core.AbstractScrollArea,implement:[qx.ui.core.ISingleSelection,qx.ui.core.IMultiSelection],include:[qx.ui.core.MSelectionHandling,qx.ui.core.MContentPadding],construct:function(){arguments.callee.base.call(this);
this.__ig=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(t).add(this.__ig);
this.initOpenMode();
this.initRootOpenClose();
},events:{addItem:E,removeItem:E},properties:{openMode:{check:[I,J,B],init:J,apply:u,event:x,themeable:true},root:{check:v,init:null,nullable:true,event:z,apply:s},hideRoot:{check:G,init:false,apply:C},rootOpenClose:{check:G,init:false,apply:A},appearance:{refine:true,init:y},focusable:{refine:true,init:true}},members:{__ig:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__ig;
},_applyRoot:function(a,b){var c=this.getChildrenContainer();

if(b){c.remove(b);

if(b.hasChildren()){c.remove(b.getChildrenContainer());
}}
if(a){c.add(a);

if(a.hasChildren()){c.add(a.getChildrenContainer());
}a.setVisibility(this.getHideRoot()?F:H);
a.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(K,L){var M=this.getRoot();

if(!M){return;
}M.setVisibility(K?F:H);
M.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(S,T){var U=this.getRoot();

if(!U){return;
}U.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__ig;
},getNextSiblingOf:function(d,f){if((f!==false||d.isOpen())&&d.hasChildren()){return d.getChildren()[0];
}
while(d){var parent=d.getParent();

if(!parent){return null;
}var h=parent.getChildren();
var g=h.indexOf(d);

if(g>-1&&g<h.length-1){return h[g+1];
}d=parent;
}return null;
},getPreviousSiblingOf:function(m,n){var parent=m.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==m){return null;
}}}else{if(m==this.getRoot()){return null;
}}var q=parent.getChildren();
var o=q.indexOf(m);

if(o>0){var p=q[o-1];

while((n!==false||p.isOpen())&&p.hasChildren()){var r=p.getChildren();
p=r[r.length-1];
}return p;
}else{return parent;
}},getItems:function(P,Q){return this.getRoot().getItems(P,Q,this.getHideRoot());
},scrollChildIntoViewY:function(j,k,l){if(!this.getNextSiblingOf(j,false)){this.scrollToY(1000000);
}else{arguments.callee.base.call(this,j,k,l);
}},getTreeItem:function(i){while(i){if(i==this){return null;
}
if(i instanceof qx.ui.tree.AbstractTreeItem){return i;
}i=i.getLayoutParent();
}return null;
},_applyOpenMode:function(N,O){if(O==I){this.removeListener(I,this._onOpen,this);
}else if(O==J){this.removeListener(J,this._onOpen,this);
}
if(N==I){this.addListener(I,this._onOpen,this);
}else if(N==J){this.addListener(J,this._onOpen,this);
}},_onOpen:function(e){var R=this.getTreeItem(e.getTarget());

if(!R||!R.isOpenable()){return;
}R.setOpen(!R.isOpen());
e.stopPropagation();
}},destruct:function(){this._disposeObjects(D);
}});
})();
(function(){var cO="left",cN="top",cM="_applyLayoutChange",cL="hAlign",cK="flex",cJ="vAlign",cI="Integer",cH="__ii",cG="__ih",cF="__ij",cy="minWidth",cE="width",cB="__ip",cw="minHeight",cv="qx.ui.layout.Grid",cA="__io",cz="height",cC="__ik",cu="maxHeight",cD="maxWidth",cx="__il";
qx.Class.define(cv,{extend:qx.ui.layout.Abstract,construct:function(h,k){arguments.callee.base.call(this);
this.__ih=[];
this.__ii=[];

if(h){this.setSpacingX(h);
}
if(k){this.setSpacingY(k);
}},properties:{spacingX:{check:cI,init:0,apply:cM},spacingY:{check:cI,init:0,apply:cM}},members:{__ij:null,__ih:null,__ii:null,__ik:null,__il:null,__im:null,__in:null,__io:null,__ip:null,verifyLayoutProperty:null,__iq:function(){var cp=[];
var co=[];
var cq=[];
var cm=0;
var cl=0;
var cs=this._getLayoutChildren();

for(var i=0,l=cs.length;i<l;i++){var cn=cs[i];
var cr=cn.getLayoutProperties();
var ct=cr.row;
var ck=cr.column;
cr.colSpan=cr.colSpan||1;
cr.rowSpan=cr.rowSpan||1;
if(ct==null||ck==null){throw new Error("The layout properties 'row' and 'column' must be defined!");
}
if(cp[ct]&&cp[ct][ck]){throw new Error("There is already a widget in this cell ("+ct+", "+ck+")");
}
for(var x=ck;x<ck+cr.colSpan;x++){for(var y=ct;y<ct+cr.rowSpan;y++){if(cp[y]==undefined){cp[y]=[];
}cp[y][x]=cn;
cl=Math.max(cl,x);
cm=Math.max(cm,y);
}}
if(cr.rowSpan>1){cq.push(cn);
}
if(cr.colSpan>1){co.push(cn);
}}for(var y=0;y<=cm;y++){if(cp[y]==undefined){cp[y]=[];
}}this.__ij=cp;
this.__ik=co;
this.__il=cq;
this.__im=cm;
this.__in=cl;
delete this._invalidChildrenCache;
},_setRowData:function(cg,ch,ci){var cj=this.__ih[cg];

if(!cj){this.__ih[cg]={};
this.__ih[cg][ch]=ci;
}else{cj[ch]=ci;
}},_setColumnData:function(ds,dt,du){var dv=this.__ii[ds];

if(!dv){this.__ii[ds]={};
this.__ii[ds][dt]=du;
}else{dv[dt]=du;
}},setSpacing:function(dr){this.setSpacingY(dr);
this.setSpacingX(dr);
},setColumnAlign:function(a,b,c){{};
this._setColumnData(a,cL,b);
this._setColumnData(a,cJ,c);
this._applyLayoutChange();
return this;
},getColumnAlign:function(ea){var eb=this.__ii[ea]||{};
return {vAlign:eb.vAlign||cN,hAlign:eb.hAlign||cO};
},setRowAlign:function(dy,dz,dA){{};
this._setRowData(dy,cL,dz);
this._setRowData(dy,cJ,dA);
this._applyLayoutChange();
return this;
},getRowAlign:function(cR){var cS=this.__ih[cR]||{};
return {vAlign:cS.vAlign||cN,hAlign:cS.hAlign||cO};
},getCellWidget:function(eg,eh){if(this._invalidChildrenCache){this.__iq();
}return this.__ij[eg][eh]||null;
},getCellAlign:function(cT,cU){var db=cN;
var cY=cO;
var da=this.__ih[cT];
var cW=this.__ii[cU];
var cV=this.__ij[cT][cU];

if(cV){var cX={vAlign:cV.getAlignY(),hAlign:cV.getAlignX()};
}else{cX={};
}if(cX.vAlign){db=cX.vAlign;
}else if(da&&da.vAlign){db=da.vAlign;
}else if(cW&&cW.vAlign){db=cW.vAlign;
}if(cX.hAlign){cY=cX.hAlign;
}else if(cW&&cW.hAlign){cY=cW.hAlign;
}else if(da&&da.hAlign){cY=da.hAlign;
}return {vAlign:db,hAlign:cY};
},setColumnFlex:function(dK,dL){this._setColumnData(dK,cK,dL);
this._applyLayoutChange();
return this;
},getColumnFlex:function(ec){var ed=this.__ii[ec]||{};
return ed.flex!==undefined?ed.flex:0;
},setRowFlex:function(dS,dT){this._setRowData(dS,cK,dT);
this._applyLayoutChange();
return this;
},getRowFlex:function(bP){var bQ=this.__ih[bP]||{};
var bR=bQ.flex!==undefined?bQ.flex:0;
return bR;
},setColumnMaxWidth:function(dB,dC){this._setColumnData(dB,cD,dC);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(f){var g=this.__ii[f]||{};
return g.maxWidth!==undefined?g.maxWidth:Infinity;
},setColumnWidth:function(dM,dN){this._setColumnData(dM,cE,dN);
this._applyLayoutChange();
return this;
},getColumnWidth:function(dQ){var dR=this.__ii[dQ]||{};
return dR.width!==undefined?dR.width:null;
},setColumnMinWidth:function(bA,bB){this._setColumnData(bA,cy,bB);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(d){var e=this.__ii[d]||{};
return e.minWidth||0;
},setRowMaxHeight:function(bS,bT){this._setRowData(bS,cu,bT);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bN){var bO=this.__ih[bN]||{};
return bO.maxHeight||Infinity;
},setRowHeight:function(ee,ef){this._setRowData(ee,cz,ef);
this._applyLayoutChange();
return this;
},getRowHeight:function(cP){var cQ=this.__ih[cP]||{};
return cQ.height!==undefined?cQ.height:null;
},setRowMinHeight:function(dO,dP){this._setRowData(dO,cw,dP);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(dw){var dx=this.__ih[dw]||{};
return dx.minHeight||0;
},__ir:function(dU){var dY=dU.getSizeHint();
var dX=dU.getMarginLeft()+dU.getMarginRight();
var dW=dU.getMarginTop()+dU.getMarginBottom();
var dV={height:dY.height+dW,width:dY.width+dX,minHeight:dY.minHeight+dW,minWidth:dY.minWidth+dX,maxHeight:dY.maxHeight+dW,maxWidth:dY.maxWidth+dX};
return dV;
},_fixHeightsRowSpan:function(dc){var dn=this.getSpacingY();

for(var i=0,l=this.__il.length;i<l;i++){var df=this.__il[i];
var dh=this.__ir(df);
var di=df.getLayoutProperties();
var de=di.row;
var dl=dn*(di.rowSpan-1);
var dd=dl;
var dk={};

for(var j=0;j<di.rowSpan;j++){var dq=di.row+j;
var dg=dc[dq];
var dp=this.getRowFlex(dq);

if(dp>0){dk[dq]={min:dg.minHeight,value:dg.height,max:dg.maxHeight,flex:dp};
}dl+=dg.height;
dd+=dg.minHeight;
}if(dl<dh.height){var dm=qx.ui.layout.Util.computeFlexOffsets(dk,dh.height,dl);

for(var j=0;j<di.rowSpan;j++){var dj=dm[de+j]?dm[de+j].offset:0;
dc[de+j].height+=dj;
}}if(dd<dh.minHeight){var dm=qx.ui.layout.Util.computeFlexOffsets(dk,dh.minHeight,dd);

for(var j=0;j<di.rowSpan;j++){var dj=dm[de+j]?dm[de+j].offset:0;
dc[de+j].minHeight+=dj;
}}}},_fixWidthsColSpan:function(m){var q=this.getSpacingX();

for(var i=0,l=this.__ik.length;i<l;i++){var n=this.__ik[i];
var p=this.__ir(n);
var s=n.getLayoutProperties();
var o=s.column;
var A=q*(s.colSpan-1);
var r=A;
var t={};
var v;

for(var j=0;j<s.colSpan;j++){var B=s.column+j;
var z=m[B];
var w=this.getColumnFlex(B);
if(w>0){t[B]={min:z.minWidth,value:z.width,max:z.maxWidth,flex:w};
}A+=z.width;
r+=z.minWidth;
}if(A<p.width){var u=qx.ui.layout.Util.computeFlexOffsets(t,p.width,A);

for(var j=0;j<s.colSpan;j++){v=u[o+j]?u[o+j].offset:0;
m[o+j].width+=v;
}}if(r<p.minWidth){var u=qx.ui.layout.Util.computeFlexOffsets(t,p.minWidth,r);

for(var j=0;j<s.colSpan;j++){v=u[o+j]?u[o+j].offset:0;
m[o+j].minWidth+=v;
}}}},_getRowHeights:function(){if(this.__io!=null){return this.__io;
}var bL=[];
var bE=this.__im;
var bD=this.__in;

for(var bM=0;bM<=bE;bM++){var bF=0;
var bH=0;
var bG=0;

for(var bK=0;bK<=bD;bK++){var bC=this.__ij[bM][bK];

if(!bC){continue;
}var bI=bC.getLayoutProperties().rowSpan||0;

if(bI>1){continue;
}var bJ=this.__ir(bC);

if(this.getRowFlex(bM)>0){bF=Math.max(bF,bJ.minHeight);
}else{bF=Math.max(bF,bJ.height);
}bH=Math.max(bH,bJ.height);
}var bF=Math.max(bF,this.getRowMinHeight(bM));
var bG=this.getRowMaxHeight(bM);

if(this.getRowHeight(bM)!==null){var bH=this.getRowHeight(bM);
}else{var bH=Math.max(bF,Math.min(bH,bG));
}bL[bM]={minHeight:bF,height:bH,maxHeight:bG};
}
if(this.__il.length>0){this._fixHeightsRowSpan(bL);
}this.__io=bL;
return bL;
},_getColWidths:function(){if(this.__ip!=null){return this.__ip;
}var bt=[];
var bq=this.__in;
var bs=this.__im;

for(var by=0;by<=bq;by++){var bw=0;
var bv=0;
var br=Infinity;

for(var bz=0;bz<=bs;bz++){var bp=this.__ij[bz][by];

if(!bp){continue;
}var bu=bp.getLayoutProperties().colSpan||0;

if(bu>1){continue;
}var bx=this.__ir(bp);

if(this.getColumnFlex(by)>0){bv=Math.max(bv,bx.minWidth);
}else{bv=Math.max(bv,bx.width);
}bw=Math.max(bw,bx.width);
}var bv=Math.max(bv,this.getColumnMinWidth(by));
var br=this.getColumnMaxWidth(by);

if(this.getColumnWidth(by)!==null){var bw=this.getColumnWidth(by);
}else{var bw=Math.max(bv,Math.min(bw,br));
}bt[by]={minWidth:bv,width:bw,maxWidth:br};
}
if(this.__ik.length>0){this._fixWidthsColSpan(bt);
}this.__ip=bt;
return bt;
},_getColumnFlexOffsets:function(bi){var bj=this.getSizeHint();
var bn=bi-bj.width;

if(bn==0){return {};
}var bl=this._getColWidths();
var bk={};

for(var i=0,l=bl.length;i<l;i++){var bo=bl[i];
var bm=this.getColumnFlex(i);

if((bm<=0)||(bo.width==bo.maxWidth&&bn>0)||(bo.width==bo.minWidth&&bn<0)){continue;
}bk[i]={min:bo.minWidth,value:bo.width,max:bo.maxWidth,flex:bm};
}return qx.ui.layout.Util.computeFlexOffsets(bk,bi,bj.width);
},_getRowFlexOffsets:function(dD){var dE=this.getSizeHint();
var dH=dD-dE.height;

if(dH==0){return {};
}var dI=this._getRowHeights();
var dF={};

for(var i=0,l=dI.length;i<l;i++){var dJ=dI[i];
var dG=this.getRowFlex(i);

if((dG<=0)||(dJ.height==dJ.maxHeight&&dH>0)||(dJ.height==dJ.minHeight&&dH<0)){continue;
}dF[i]={min:dJ.minHeight,value:dJ.height,max:dJ.maxHeight,flex:dG};
}return qx.ui.layout.Util.computeFlexOffsets(dF,dD,dE.height);
},renderLayout:function(C,D){if(this._invalidChildrenCache){this.__iq();
}var R=qx.ui.layout.Util;
var F=this.getSpacingX();
var L=this.getSpacingY();
var W=this._getColWidths();
var V=this._getColumnFlexOffsets(C);
var G=[];
var Y=this.__in;
var E=this.__im;
var X;

for(var ba=0;ba<=Y;ba++){X=V[ba]?V[ba].offset:0;
G[ba]=W[ba].width+X;
}var O=this._getRowHeights();
var Q=this._getRowFlexOffsets(D);
var bg=[];

for(var M=0;M<=E;M++){X=Q[M]?Q[M].offset:0;
bg[M]=O[M].height+X;
}var bh=0;

for(var ba=0;ba<=Y;ba++){var top=0;

for(var M=0;M<=E;M++){var T=this.__ij[M][ba];
if(!T){top+=bg[M]+L;
continue;
}var H=T.getLayoutProperties();
if(H.row!==M||H.column!==ba){top+=bg[M]+L;
continue;
}var bf=F*(H.colSpan-1);

for(var i=0;i<H.colSpan;i++){bf+=G[ba+i];
}var U=L*(H.rowSpan-1);

for(var i=0;i<H.rowSpan;i++){U+=bg[M+i];
}var I=T.getSizeHint();
var bd=T.getMarginTop();
var S=T.getMarginLeft();
var P=T.getMarginBottom();
var K=T.getMarginRight();
var N=Math.max(I.minWidth,Math.min(bf-S-K,I.maxWidth));
var be=Math.max(I.minHeight,Math.min(U-bd-P,I.maxHeight));
var bb=this.getCellAlign(M,ba);
var bc=bh+R.computeHorizontalAlignOffset(bb.hAlign,N,bf,S,K);
var J=top+R.computeVerticalAlignOffset(bb.vAlign,be,U,bd,P);
T.renderLayout(bc,J,N,be);
top+=bg[M]+L;
}bh+=G[ba]+F;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__ip=null;
this.__io=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__iq();
}var bY=this._getColWidths();
var cb=0,cc=0;

for(var i=0,l=bY.length;i<l;i++){var cd=bY[i];

if(this.getColumnFlex(i)>0){cb+=cd.minWidth;
}else{cb+=cd.width;
}cc+=cd.width;
}var ce=this._getRowHeights();
var bW=0,ca=0;

for(var i=0,l=ce.length;i<l;i++){var cf=ce[i];

if(this.getRowFlex(i)>0){bW+=cf.minHeight;
}else{bW+=cf.height;
}ca+=cf.height;
}var bV=this.getSpacingX()*(bY.length-1);
var bU=this.getSpacingY()*(ce.length-1);
var bX={minWidth:cb+bV,width:cc+bV,minHeight:bW+bU,height:ca+bU};
return bX;
}},destruct:function(){this._disposeFields(cF,cG,cH,cC,cx,cB,cA);
}});
})();
(function(){var l="resize",k="scrollY",j="typeof value=='number'&&value>=0&&value<=this.getScrollMaxX()",i="update",h="scrollX",g="_applyScrollX",f="_applyScrollY",e="appear",d="qx.ui.core.ScrollPane",c="qx.event.type.Event",a="typeof value=='number'&&value>=0&&value<=this.getScrollMaxY()",b="scroll";
qx.Class.define(d,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(l,this._onUpdate);
var F=this.getContentElement();
F.addListener(b,this._onScroll,this);
F.addListener(e,this._onAppear,this);
},events:{update:c},properties:{scrollX:{check:j,apply:g,event:h,init:0},scrollY:{check:a,apply:f,event:k,init:0}},members:{add:function(o){var p=this._getChildren()[0];

if(p){this._remove(p);
p.removeListener(l,this._onUpdate,this);
}
if(o){this._add(o);
o.addListener(l,this._onUpdate,this);
}},remove:function(J){if(J){this._remove(J);
J.removeListener(l,this._onUpdate,this);
}},getChild:function(){return this._getChildren()[0]||null;
},_onUpdate:function(e){this.fireEvent(i);
},_onScroll:function(e){var G=this.getContentElement();
this.setScrollX(G.getScrollX());
this.setScrollY(G.getScrollY());
},_onAppear:function(e){var D=this.getContentElement();
var A=this.getScrollX();
var B=D.getScrollX();

if(A!=B){D.scrollToX(A);
}var E=this.getScrollY();
var C=D.getScrollY();

if(E!=C){D.scrollToY(E);
}},getItemTop:function(H){var top=0;

do{top+=H.getBounds().top;
H=H.getLayoutParent();
}while(H&&H!==this);
return top;
},getItemBottom:function(K){return this.getItemTop(K)+K.getBounds().height;
},getItemLeft:function(u){var v=0;
var parent;

do{v+=u.getBounds().left;
parent=u.getLayoutParent();

if(parent){v+=parent.getInsets().left;
}u=parent;
}while(u&&u!==this);
return v;
},getItemRight:function(I){return this.getItemLeft(I)+I.getBounds().width;
},getScrollSize:function(){return this.getChild().getBounds();
},getScrollMaxX:function(){var z=this.getInnerSize();
var w=this.getScrollSize();

if(z&&w){return Math.max(0,w.width-z.width);
}return 0;
},getScrollMaxY:function(){var n=this.getInnerSize();
var m=this.getScrollSize();

if(n&&m){return Math.max(0,m.height-n.height);
}return 0;
},scrollToX:function(q){var r=this.getScrollMaxX();

if(q<0){q=0;
}else if(q>r){q=r;
}this.setScrollX(q);
},scrollToY:function(L){var M=this.getScrollMaxY();

if(L<0){L=0;
}else if(L>M){L=M;
}this.setScrollY(L);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(t){this.getContentElement().scrollToX(t);
},_applyScrollY:function(s){this.getContentElement().scrollToY(s);
}}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(g,h){var n=this._getLayoutChildren();
var m,o,k,j;
for(var i=0,l=n.length;i<l;i++){m=n[i];
o=m.getSizeHint();
k=g;

if(k<o.minWidth){k=o.minWidth;
}else if(k>o.maxWidth){k=o.maxWidth;
}j=h;

if(j<o.minHeight){j=o.minHeight;
}else if(j>o.maxHeight){j=o.maxHeight;
}m.renderLayout(0,0,k,j);
}},_computeSizeHint:function(){var d=this._getLayoutChildren();
var b,f;
var e=0,c=0;
for(var i=0,l=d.length;i<l;i++){b=d[i];
f=b.getSizeHint();
e=Math.max(e,f.width);
c=Math.max(c,f.height);
}return {width:e,height:c};
}}});
})();
(function(){var k="slider",j="horizontal",i="button-begin",h="button-end",g="vertical",f="Integer",d="execute",c="right",b="left",a="down",x="up",w="PositiveNumber",v="changeValue",u="typeof value==='number'&&value>=0&&value<=this.getMaximum()",t="_applyKnobFactor",s="_applyOrientation",r="qx.ui.core.ScrollBar",q="_applyPageStep",p="PositiveInteger",o="scroll",m="_applyPosition",n="scrollbar",l="_applyMaximum";
qx.Class.define(r,{extend:qx.ui.core.Widget,construct:function(I){arguments.callee.base.call(this);
this._createChildControl(i);
this._createChildControl(k);
this._createChildControl(h);
if(I!=null){this.setOrientation(I);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,g],init:j,apply:s},maximum:{check:p,apply:l,init:100},position:{check:u,init:0,apply:m,event:o},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:w,apply:t,nullable:true}},members:{_createChildControlImpl:function(y){var z;

switch(y){case k:z=new qx.ui.core.ScrollSlider;
z.setPageStep(100);
z.setFocusable(false);
z.addListener(v,this._onChangeSliderValue,this);
this._add(z,{flex:1});
break;
case i:z=new qx.ui.form.RepeatButton;
z.setFocusable(false);
z.addListener(d,this._onExecuteBegin,this);
this._add(z);
break;
case h:z=new qx.ui.form.RepeatButton;
z.setFocusable(false);
z.addListener(d,this._onExecuteEnd,this);
this._add(z);
break;
}return z||arguments.callee.base.call(this,y);
},_applyMaximum:function(H){this.getChildControl(k).setMaximum(H);
},_applyPosition:function(G){this.getChildControl(k).setValue(G);
},_applyKnobFactor:function(F){this.getChildControl(k).setKnobFactor(F);
},_applyPageStep:function(B){this.getChildControl(k).setPageStep(B);
},_applyOrientation:function(J,K){var L=this._getLayout();

if(L){L.dispose();
}if(J===j){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(g,j);
this.getChildControl(i).replaceState(x,b);
this.getChildControl(h).replaceState(a,c);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(j,g);
this.getChildControl(i).replaceState(b,x);
this.getChildControl(h).replaceState(c,a);
}this.getChildControl(k).setOrientation(J);
},scrollTo:function(A){this.getChildControl(k).slideTo(A);
},scrollBy:function(C){this.getChildControl(k).slideBy(C);
},scrollBySteps:function(D){var E=this.getSingleStep();
this.getChildControl(k).slideBy(D*E);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IFormElement",a="boolean";
qx.Interface.define(b,{events:{"changeValue":c,"changeName":c,"changeEnabled":c},members:{setEnabled:function(f){this.assertType(f,a);
},getEnabled:function(){},setName:function(d){this.assertString(d);
},getName:function(){},setValue:function(e){return arguments.length==1;
},getValue:function(){}}});
})();
(function(){var Y="knob",X="horizontal",W="vertical",V="Integer",U="px",T="mousemove",S="resize",R="left",Q="top",P="mouseup",bF="slider",bE="PageUp",bD="mousedown",bC="height",bB="changeValue",bA="Left",bz="Down",by="Up",bx="dblclick",bw="qx.ui.form.Slider",bg="PageDown",bh="mousewheel",be="interval",bf="_applyValue",bc="_applyKnobFactor",bd="End",ba="String",bb="width",bi="_applyOrientation",bj="Home",bo="floor",bn="_applyMinimum",bq="click",bp="Right",bs="keypress",br="ceil",bl="changeName",bv="losecapture",bu="contextmenu",bt="_applyMaximum",bk="Number",bm="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bw,{extend:qx.ui.core.Widget,implement:qx.ui.form.IFormElement,construct:function(bT){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bs,this._onKeyPress);
this.addListener(bh,this._onMouseWheel);
this.addListener(bD,this._onMouseDown);
this.addListener(P,this._onMouseUp);
this.addListener(bv,this._onMouseUp);
this.addListener(S,this._onUpdate);
this.addListener(bu,this._onStopEvent);
this.addListener(bq,this._onStopEvent);
this.addListener(bx,this._onStopEvent);
if(bT!=null){this.setOrientation(bT);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bF},focusable:{refine:true,init:true},orientation:{check:[X,W],init:X,apply:bi},name:{check:ba,nullable:true,event:bl},value:{check:bm,init:0,apply:bf,event:bB},minimum:{check:V,init:0,apply:bn},maximum:{check:V,init:100,apply:bt},singleStep:{check:V,init:1},pageStep:{check:V,init:10},knobFactor:{check:bk,apply:bc,nullable:true}},members:{__is:null,__it:null,__iu:null,__iv:null,__iw:null,__ix:null,__iy:null,__iz:null,__iA:null,_createChildControlImpl:function(p){var q;

switch(p){case Y:q=new qx.ui.core.Widget();
q.addListener(S,this._onUpdate,this);
this._add(q);
break;
}return q||arguments.callee.base.call(this,p);
},_onMouseWheel:function(e){var bI=e.getWheelDelta()>0?1:-1;
this.slideBy(bI*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var t=this.getOrientation()===X;
var s=t?bA:by;
var forward=t?bp:bz;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case s:this.slideBack();
break;
case bg:this.slidePageForward();
break;
case bE:this.slidePageBack();
break;
case bj:this.slideToBegin();
break;
case bd:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__iv){return;
}var bN=this.__iC;
var bL=this.getChildControl(Y);
var bM=bN?R:Q;
var bP=bN?e.getDocumentLeft():e.getDocumentTop();
var bQ=this.__is=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bM];
var bO=this.__it=qx.bom.element.Location.get(bL.getContainerElement().getDomElement())[bM];

if(e.getTarget()===bL){this.__iv=true;
this.__iw=bP+bQ-bO;
}else{this.__ix=true;
this.__iy=bP<=bO?-1:1;
this.__iD(e);
this._onInterval();
if(!this.__iA){this.__iA=new qx.event.Timer(100);
this.__iA.addListener(be,this._onInterval,this);
}this.__iA.start();
}this.addListener(T,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__iv){this.releaseCapture();
delete this.__iv;
delete this.__iw;
}else if(this.__ix){this.__iA.stop();
this.releaseCapture();
delete this.__ix;
delete this.__iy;
delete this.__iz;
}this.removeListener(T,this._onMouseMove);
if(e.getType()===P){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__iv){var bS=this.__iC?e.getDocumentLeft():e.getDocumentTop();
var bR=bS-this.__iw;
this.slideTo(this._positionToValue(bR));
}else if(this.__ix){this.__iD(e);
}e.stopPropagation();
},_onInterval:function(e){var bG=this.getValue()+(this.__iy*this.getPageStep());
if(bG<this.getMinimum()){bG=this.getMinimum();
}else if(bG>this.getMaximum()){bG=this.getMaximum();
}var bH=this.__iy==-1;

if((bH&&bG<=this.__iz)||(!bH&&bG>=this.__iz)){bG=this.__iz;
}this.slideTo(bG);
},_onUpdate:function(e){var v=this.getInnerSize();
var w=this.getChildControl(Y).getBounds();
var u=this.__iC?bb:bC;
this._updateKnobSize();
this.__iB=v[u]-w[u];
this.__iu=w[u];
this._updateKnobPosition();
},__iC:false,__iB:0,__iD:function(e){var B=this.__iC;
var I=B?e.getDocumentLeft():e.getDocumentTop();
var K=this.__is;
var C=this.__it;
var M=this.__iu;
var J=I-K;

if(I>=C){J-=M;
}var G=this._positionToValue(J);
var D=this.getMinimum();
var E=this.getMaximum();

if(G<D){G=D;
}else if(G>E){G=E;
}else{var H=this.getValue();
var F=this.getPageStep();
var L=this.__iy<0?bo:br;
G=H+(Math[L]((G-H)/F)*F);
}if(this.__iz==null||(this.__iy==-1&&G<=this.__iz)||(this.__iy==1&&G>=this.__iz)){this.__iz=G;
}},_positionToValue:function(f){var g=this.__iB;
if(g==null||g==0){return 0;
}var i=f/g;

if(i<0){i=0;
}else if(i>1){i=1;
}var h=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(h*i);
},_valueToPosition:function(j){var k=this.__iB;

if(k==null){return 0;
}var l=this.getMaximum()-this.getMinimum();
if(l==0){return 0;
}var j=j-this.getMinimum();
var m=j/l;

if(m<0){m=0;
}else if(m>1){m=1;
}return Math.round(k*m);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(z){var A=this.getChildControl(Y).getContainerElement();

if(this.__iC){A.setStyle(R,z+U,true);
}else{A.setStyle(Q,z+U,true);
}},_updateKnobSize:function(){var bV=this.getKnobFactor();

if(bV==null){return;
}var bU=this.getInnerSize();

if(bU==null){return;
}if(this.__iC){this.getChildControl(Y).setWidth(Math.round(bV*bU.width));
}else{this.getChildControl(Y).setHeight(Math.round(bV*bU.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(a){this.slideTo(this.getValue()+a);
},slideTo:function(r){if(r<this.getMinimum()){r=this.getMinimum();
}else if(r>this.getMaximum()){r=this.getMaximum();
}else{r=this.getMinimum()+Math.round((r-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(r);
},_applyOrientation:function(b,c){var d=this.getChildControl(Y);
this.__iC=b===X;
if(this.__iC){this.removeState(W);
d.removeState(W);
this.addState(X);
d.addState(X);
d.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(X);
d.removeState(X);
this.addState(W);
d.addState(W);
d.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(x,y){if(x!=null){this._updateKnobSize();
}else{if(this.__iC){this.getChildControl(Y).resetWidth();
}else{this.getChildControl(Y).resetHeight();
}}},_applyValue:function(N,O){this._updateKnobPosition();
},_applyMinimum:function(n,o){if(this.getValue()<n){this.setValue(n);
}this._updateKnobPosition();
},_applyMaximum:function(bJ,bK){if(this.getValue()>bJ){this.setValue(bJ);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var w="label",v="icon",u="Boolean",t="left",s="both",r="String",q="_applyRich",p="_applyIcon",o="changeGap",n="_applyShow",g="right",m="_applyCenter",j="_applyIconPosition",e="qx.ui.basic.Atom",d="top",i="changeShow",h="bottom",k="_applyLabel",c="Integer",l="_applyGap",f="atom";
qx.Class.define(e,{extend:qx.ui.core.Widget,construct:function(I,J){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(I!=null){this.setLabel(I);
}
if(J!=null){this.setIcon(J);
}},properties:{appearance:{refine:true,init:f},label:{apply:k,nullable:true,dispose:true,check:r},rich:{check:u,init:false,apply:q},icon:{check:r,apply:p,nullable:true,themeable:true},gap:{check:c,nullable:false,event:o,apply:l,themeable:true,init:4},show:{init:s,check:[s,w,v],themeable:true,inheritable:true,apply:n,event:i},iconPosition:{init:t,check:[d,g,h,t],themeable:true,apply:j},center:{init:false,check:u,themeable:true,apply:m}},members:{_createChildControlImpl:function(a){var b;

switch(a){case w:b=new qx.ui.basic.Label(this.getLabel());
b.setAnonymous(true);
b.setRich(this.getRich());
this._add(b);

if(this.getLabel()==null||this.getShow()===v){b.exclude();
}break;
case v:b=new qx.ui.basic.Image(this.getIcon());
b.setAnonymous(true);
this._addAt(b,0);

if(this.getIcon()==null||this.getShow()===w){b.exclude();
}break;
}return b||arguments.callee.base.call(this,a);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===v){this._excludeChildControl(w);
}else{this._showChildControl(w);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===w){this._excludeChildControl(v);
}else{this._showChildControl(v);
}},_applyLabel:function(D,E){var F=this.getChildControl(w,true);

if(F){F.setContent(D);
}this._handleLabel();
},_applyRich:function(N,O){var P=this.getChildControl(w,true);

if(P){P.setRich(N);
}},_applyIcon:function(K,L){var M=this.getChildControl(v,true);

if(M){M.setSource(K);
}this._handleIcon();
},_applyGap:function(B,C){this._getLayout().setGap(B);
},_applyShow:function(z,A){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(x,y){this._getLayout().setIconPosition(x);
},_applyCenter:function(G,H){this._getLayout().setCenter(G);
}}});
})();
(function(){var h="changeEnabled",g="qx.ui.core.MExecutable",f="qx.event.Command",d="qx.event.type.Event",c="changeCommand",b="_applyCommand",a="execute";
qx.Mixin.define(g,{events:{"execute":d},properties:{command:{check:f,apply:b,event:c,nullable:true}},members:{execute:function(){var i=this.getCommand();

if(i){i.execute(this);
}this.fireEvent(a);
},_applyCommand:function(j,k){if(k){k.removeListener(h,this._onChangeEnabledCommand,this);
}
if(j){j.addListener(h,this._onChangeEnabledCommand,this);

if(this.getEnabled()===false){j.setEnabled(false);
}else if(j.getEnabled()===false){this.setEnabled(false);
}}},_onChangeEnabledCommand:function(e){this.setEnabled(e.getData());
}}});
})();
(function(){var r="pressed",q="abandoned",p="hovered",o="Enter",n="Space",m="String",l="dblclick",k="qx.ui.form.Button",j="mouseup",i="mousedown",c="changeName",h="mouseover",g="mouseout",b="changeValue",a="keydown",f="button",d="keyup";
qx.Class.define(k,{extend:qx.ui.basic.Atom,include:qx.ui.core.MExecutable,implement:qx.ui.form.IFormElement,construct:function(s,t,u){arguments.callee.base.call(this,s,t);

if(u!=null){this.setCommand(u);
}this.addListener(h,this._onMouseOver);
this.addListener(g,this._onMouseOut);
this.addListener(i,this._onMouseDown);
this.addListener(j,this._onMouseUp);
this.addListener(a,this._onKeyDown);
this.addListener(d,this._onKeyUp);
this.addListener(l,this._onStopEvent);
},properties:{name:{check:m,nullable:true,event:c},value:{check:m,nullable:true,event:b},appearance:{refine:true,init:f},focusable:{refine:true,init:true}},members:{press:function(){if(this.hasState(q)){return;
}this.addState(r);
},release:function(){if(this.hasState(r)){this.removeState(r);
}},reset:function(){this.removeState(r);
this.removeState(q);
this.removeState(p);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(q)){this.removeState(q);
this.addState(r);
}this.addState(p);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(p);

if(this.hasState(r)){this.removeState(r);
this.addState(q);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(q);
this.addState(r);
},_onMouseUp:function(e){this.releaseCapture();
var v=this.hasState(r);
var w=this.hasState(q);

if(v){this.removeState(r);
}
if(w){this.removeState(q);
}else{this.addState(p);

if(v){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case o:case n:this.removeState(q);
this.addState(r);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case o:case n:if(this.hasState(r)){this.removeState(q);
this.removeState(r);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var p="pressed",o="abandoned",n="Integer",m="hovered",l="qx.event.type.Event",k="Enter",j="Space",i="press",h="qx.ui.form.RepeatButton",g="release",c="__iE",f="interval",d="execute";
qx.Class.define(h,{extend:qx.ui.form.Button,construct:function(q,r){arguments.callee.base.call(this,q,r);
this.__iE=new qx.event.Timer(this.getInterval());
this.__iE.addListener(f,this._onInterval,this);
},events:{"execute":l,"press":l,"release":l},properties:{interval:{check:n,init:100},firstInterval:{check:n,init:500},minTimer:{check:n,init:20},timerDecrease:{check:n,init:2}},members:{__iF:null,__iG:null,__iE:null,press:function(){if(this.isEnabled()){if(!this.hasState(p)){this.__iH();
}this.removeState(o);
this.addState(p);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(p)){if(!this.__iG){this.execute();
}}this.removeState(p);
this.removeState(o);
this.__iI();
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);

if(!a){this.removeState(p);
this.removeState(o);
this.__iI();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(o)){this.removeState(o);
this.addState(p);
this.__iE.start();
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(p)){this.removeState(p);
this.addState(o);
this.__iE.stop();
this.__iF=this.getInterval();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__iH();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(o)){this.addState(m);

if(this.hasState(p)&&!this.__iG){this.execute();
}}this.__iI();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case k:case j:if(this.hasState(p)){if(!this.__iG){this.execute();
}this.removeState(p);
this.removeState(o);
e.stopPropagation();
this.__iI();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case k:case j:this.removeState(o);
this.addState(p);
e.stopPropagation();
this.__iH();
}},_onInterval:function(e){this.__iE.stop();
if(this.__iF==null){this.__iF=this.getInterval();
}this.__iF=(Math.max(this.getMinTimer(),this.__iF-this.getTimerDecrease()));
this.__iE.restartWith(this.__iF);
this.__iG=true;
this.fireEvent(d);
},__iH:function(){this.fireEvent(i);
this.__iG=false;
this.__iE.setInterval(this.getFirstInterval());
this.__iE.start();
this.removeState(o);
this.addState(p);
},__iI:function(){this.fireEvent(g);
this.__iE.stop();
this.__iF=null;
this.removeState(o);
this.removeState(p);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(l,m){var w=qx.ui.layout.Util;
var o=this.getIconPosition();
var r=this._getLayoutChildren();
var length=r.length;
var F,top,E,p;
var A,v;
var y=this.getGap();
var D=this.getCenter();
if(o===k||o===f){var x=length-1;
var t=-1;
var q=-1;
}else{var x=0;
var t=length;
var q=1;
}if(o==h||o==k){if(D){var z=0;

for(var i=x;i!=t;i+=q){p=r[i].getSizeHint().height;

if(p>0){z+=p;

if(i!=x){z+=y;
}}}top=Math.round((m-z)/2);
}else{top=0;
}
for(var i=x;i!=t;i+=q){A=r[i];
v=A.getSizeHint();
E=Math.min(v.maxWidth,Math.max(l,v.minWidth));
p=v.height;
F=w.computeHorizontalAlignOffset(d,E,l);
A.renderLayout(F,top,E,p);
if(p>0){top+=p+y;
}}}else{var u=l;
var s=0;
var n=null;
var C=0;

for(var i=x;i!=t;i+=q){A=r[i];
E=A.getSizeHint().width;

if(E>0){if(!n&&A instanceof qx.ui.basic.Label){n=A;
}else{u-=E;
}s+=E;
C++;
}}
if(C>1){var B=(C-1)*y;
u-=B;
s+=B;
}
if(D&&s<l){F=Math.round((l-s)/2);
}else{F=0;
}
for(var i=x;i!=t;i+=q){A=r[i];
v=A.getSizeHint();
p=Math.min(v.maxHeight,Math.max(m,v.minHeight));

if(A===n){E=Math.max(v.minWidth,Math.min(u,v.width));
}else{E=v.width;
}top=w.computeVerticalAlignOffset(e,v.height,m);
A.renderLayout(F,top,E,p);
if(E>0){F+=E+y;
}}}},_computeSizeHint:function(){var Q=this._getLayoutChildren();
var length=Q.length;
var I,O;
if(length===1){var I=Q[0].getSizeHint();
O={width:I.width,height:I.height,minWidth:I.minWidth,minHeight:I.minHeight};
}else{var M=0,N=0;
var J=0,L=0;
var K=this.getIconPosition();
var P=this.getGap();

if(K===h||K===k){var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
N=Math.max(N,I.width);
M=Math.max(M,I.minWidth);
if(I.height>0){L+=I.height;
J+=I.minHeight;
G++;
}}
if(G>1){var H=(G-1)*P;
L+=H;
J+=H;
}}else{var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
L=Math.max(L,I.height);
J=Math.max(J,I.minHeight);
if(I.width>0){N+=I.width;
M+=I.minWidth;
G++;
}}
if(G>1){var H=(G-1)*P;
N+=H;
M+=H;
}}O={minWidth:M,width:N,minHeight:J,height:L};
}return O;
}}});
})();
(function(){var A="qx.dynlocale",z="changeLocale",y="on",x="color",w="qx.ui.basic.Label",v="_applyRich",u="A",t="_applyTextAlign",s="Boolean",r="_applyContent",l="label",q="textAlign",o="changeTextAlign",k="center",j="changeContent",n="left",m="__iJ",p="String",i="right";
qx.Class.define(w,{extend:qx.ui.core.Widget,construct:function(content){arguments.callee.base.call(this);

if(content!=null){this.setContent(content);
}
if(qx.core.Variant.isSet(A,y)){qx.locale.Manager.getInstance().addListener(z,this._onChangeLocale,this);
}},properties:{rich:{check:s,init:false,apply:v},content:{check:p,apply:r,event:j,nullable:true},textAlign:{check:[n,k,i],nullable:true,themeable:true,apply:t,event:o},appearance:{refine:true,init:l},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iJ:null,__iK:null,_getContentHint:function(){if(this.__iK){this.__iM();
delete this.__iK;
}return {width:this.__iL.width,height:this.__iL.height};
},_hasHeightForWidth:function(){return this.getRich();
},_getContentHeightForWidth:function(G){if(!this.getRich()){return null;
}var H=this.__iJ?this.__iJ.getStyles():qx.bom.Font.getDefaultStyles();
return qx.bom.Label.getHtmlSize(this.getContent(),H,G).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(g,h){this.getContentElement().setStyle(q,g);
},_applyTextColor:function(e,f){if(e){this.getContentElement().setStyle(x,qx.theme.manager.Color.getInstance().resolve(e));
}else{this.getContentElement().removeStyle(x);
}},__iL:{width:0,height:0},_applyFont:function(a,b){var c;

if(a){this.__iJ=qx.theme.manager.Font.getInstance().resolve(a);
c=this.__iJ.getStyles();
}else{this.__iJ=null;
c=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(c);
this.__iK=true;
qx.ui.core.queue.Layout.add(this);
},__iM:function(){var F=qx.bom.Label;
var D=this.getFont();
var C=D?this.__iJ.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getContent()||u;
var E=this.getRich();
this.__iL=E?F.getHtmlSize(content,C):F.getTextSize(content,C);
},_applyRich:function(B){this.getContentElement().setRich(B);
this.__iK=true;
qx.ui.core.queue.Layout.add(this);
},_onChangeLocale:qx.core.Variant.select(A,{"on":function(e){var content=this.getContent();

if(content&&content.translate){this.setContent(content.translate());
}},"off":null}),_applyContent:function(d){this.getContentElement().setContent(d);
this.__iK=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Variant.isSet(A,y)){qx.locale.Manager.getInstance().removeListener(z,this._onChangeLocale,this);
}this._disposeFields(m);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Bootstrap.define(c,{statics:{LOCALE:"",VARIANT:"",__iN:function(){var e=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__iN();
}});
})();
(function(){var f="qx.type.BaseString";
qx.Class.define(f,{extend:String,construct:function(a){{};
this.__iO=a;
},members:{__iO:null,toString:function(){return this.__iO;
},setValue:function(e){this.__iO=e;
},valueOf:function(){return this.__iO;
},toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},base:function(b,c){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(d){{};
}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__iP=c;
this.__iQ=d;
},members:{__iP:null,__iQ:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__iP,this.__iQ);
}}});
})();
(function(){var z="_",y="",x="qx.dynlocale",w="on",v="__iS",u="_applyLocale",t="changeLocale",s="C",r="__iR",q="qx.locale.Manager",o="String",p="singleton";
qx.Class.define(q,{type:p,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iR=qx.$$translations||{};
this.__iS=qx.$$locales||{};
var c=qx.bom.client.Locale;
var a=c.LOCALE;
var b=c.VARIANT;

if(b!==y){a+=z+b;
}this.setLocale(a||this.__iT);
},statics:{tr:function(N,O){var P=qx.lang.Array.fromArguments(arguments);
P.splice(0,1);
return qx.locale.Manager.getInstance().translate(N,P);
},trn:function(I,J,K,L){var M=qx.lang.Array.fromArguments(arguments);
M.splice(0,3);
if(K!=1){return qx.locale.Manager.getInstance().translate(J,M);
}else{return qx.locale.Manager.getInstance().translate(I,M);
}},trc:function(g,h,j){var k=qx.lang.Array.fromArguments(arguments);
k.splice(0,2);
return qx.locale.Manager.getInstance().translate(h,k);
},marktr:function(l){return l;
}},properties:{locale:{check:o,nullable:true,apply:u,event:t}},members:{__iT:s,__iU:null,__iV:null,__iR:null,__iS:null,getLanguage:function(){return this.__iV;
},getTerritory:function(){return this.getLocale().split(z)[1]||y;
},getAvailableLocales:function(){var n=[];

for(var m in this.__iS){if(m!=this.__iT){n.push(m);
}}return n;
},__iW:function(d){var f;
var e=d.indexOf(z);

if(e==-1){f=d;
}else{f=d.substring(0,e);
}return f;
},_applyLocale:function(Q,R){this.__iU=Q;
this.__iV=this.__iW(Q);
},addTranslation:function(S,T){var U=this.__iR;

if(U[S]){for(var V in T){U[S][V]=T[V];
}}else{U[S]=T;
}},translate:function(W,X,Y){var be;
var bc=this.__iR;

if(!bc){return W;
}
if(Y){var bb=this.__iW(Y);
}else{Y=this.__iU;
bb=this.__iV;
}
if(!be&&bc[Y]){be=bc[Y][W];
}
if(!be&&bc[bb]){be=bc[bb][W];
}
if(!be&&bc[this.__iT]){be=bc[this.__iT][W];
}
if(!be){be=W;
}
if(X.length>0){var ba=[];

for(var i=0;i<X.length;i++){var bd=X[i];

if(bd.translate){ba[i]=bd.translate();
}else{ba[i]=bd;
}}be=qx.lang.String.format(be,ba);
}
if(qx.core.Variant.isSet(x,w)){be=new qx.locale.LocalizedString(be,W,X);
}return be;
},localize:function(A,B,C){var H;
var F=this.__iS;

if(!F){return A;
}
if(C){var E=this.__iW(C);
}else{C=this.__iU;
E=this.__iV;
}
if(!H&&F[C]){H=F[C][A];
}
if(!H&&F[E]){H=F[E][A];
}
if(!H&&F[this.__iT]){H=F[this.__iT][A];
}
if(!H){H=A;
}
if(B.length>0){var D=[];

for(var i=0;i<B.length;i++){var G=B[i];

if(G.translate){D[i]=G.translate();
}else{D[i]=G;
}}H=qx.lang.String.format(H,D);
}
if(qx.core.Variant.isSet(x,w)){H=new qx.locale.LocalizedString(H,A,B);
}return H;
}},destruct:function(){this._disposeFields(r,v);
}});
})();
(function(){var r="qx.client",q="gecko",p="div",o="",n="hidden",m="auto",l="value",k="inherit",j="text",i="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",H="nowrap",G="visible",F="ellipsis",E="normal",D="label",C="-1000px",B="absolute",A="px",z="crop",y="end",w="100%",x="qx.bom.Label",u="opera",v="block",s="none",t="mshtml|opera";
qx.Class.define(x,{statics:{__iX:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__iY:function(){var M=document.createElement(p);
var N=M.style;
N.width=N.height=m;
N.left=N.top=C;
N.visibility=n;
N.position=B;
N.overflow=G;
N.whiteSpace=H;

if(qx.core.Variant.isSet(r,q)){var O=document.createElementNS(i,D);
for(var P in this.__iX){O.style[P]=k;
}M.appendChild(O);
}document.body.insertBefore(M,document.body.firstChild);
return this._textElement=M;
},__ja:function(){var f=qx.bom.Element.create(p);
var g=f.style;
g.width=g.height=m;
g.left=g.top=C;
g.visibility=n;
g.position=B;
g.overflow=G;
g.whiteSpace=E;
document.body.insertBefore(f,document.body.firstChild);
return this._htmlElement=f;
},__jb:function(I){var J={};

if(I){J.whiteSpace=E;
}else if(qx.core.Variant.isSet(r,q)){J.display=v;
}else{J.overflow=n;
J.whiteSpace=H;
J.textOverflow=F;
if(qx.core.Variant.isSet(r,u)){J.OTextOverflow=F;
}}J.userSelect=s;
return J;
},create:function(content,a,b){if(!b){b=window;
}
if(a){var c=b.document.createElement(p);
c.useHtml=true;
}else if(qx.core.Variant.isSet(r,q)){var c=b.document.createElement(p);
var d=b.document.createElementNS(i,D);
d.style.cursor=k;
d.style.overflow=n;
d.style.maxWidth=w;
for(var e in this.__iX){d.style[e]=k;
}d.setAttribute(z,y);
c.appendChild(d);
}else{var c=b.document.createElement(p);
qx.bom.element.Style.setStyles(c,this.__jb(false));
}
if(content){this.setContent(c,content);
}return c;
},setContent:function(K,L){L=L||o;

if(K.useHtml){K.innerHTML=L;
}else if(qx.core.Variant.isSet(r,q)){K.firstChild.setAttribute(l,L);
}else{qx.bom.element.Attribute.set(K,j,L);
}},getContent:function(h){if(h.useHtml){return h.innerHTML;
}else if(qx.core.Variant.isSet(r,q)){return h.firstChild.getAttribute(l)||o;
}else{return qx.bom.element.Attribute.get(h,j);
}},getHtmlSize:function(content,Q,R){var U=this._htmlElement||this.__ja();
var S=this.__iX;

if(!Q){Q={};
}
for(var T in S){U.style[T]=Q[T]||o;
}U.style.width=R!=null?R+A:m;
U.innerHTML=content;
return qx.bom.element.Dimension.getSize(U);
},getTextSize:function(V,W){var bb=this._textElement||this.__iY();
var X=this.__iX;

if(!W){W={};
}
for(var ba in X){bb.style[ba]=W[ba]||o;
}if(qx.core.Variant.isSet(r,q)){bb.firstChild.setAttribute(l,V);
}else if(qx.core.Variant.isSet(r,t)){bb.innerText=V;
}else{bb.textContent=V;
}var Y=qx.bom.element.Dimension.getSize(bb);

if(qx.core.Variant.isSet(r,q)){if(!qx.bom.client.Platform.WIN){Y.width++;
}}return Y;
}}});
})();
(function(){var p="mshtml",o="qx.client",n="Please use element.clientWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",m="qx.bom.element.Dimension",l="Please use element.scrollWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",k="paddingRight",j="paddingLeft",i="paddingTop",h="Please use element.scrollHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",g="Please use element.clientHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",f="paddingBottom";
qx.Class.define(m,{statics:{getWidth:qx.core.Variant.select(o,{"gecko":function(u){if(u.getBoundingClientRect){var v=u.getBoundingClientRect();
return Math.round(v.right)-Math.round(v.left);
}else{return u.offsetWidth;
}},"default":function(r){return r.offsetWidth;
}}),getHeight:qx.core.Variant.select(o,{"gecko":function(a){if(a.getBoundingClientRect){var b=a.getBoundingClientRect();
return Math.round(b.bottom)-Math.round(b.top);
}else{return a.offsetHeight;
}},"default":function(t){return t.offsetHeight;
}}),getSize:function(c){return {width:this.getWidth(c),height:this.getHeight(c)};
},__jc:{visible:true,hidden:true},getContentWidth:function(x){var z=qx.bom.element.Style;
var A=qx.bom.element.Overflow.getX(x);
var B=parseInt(z.get(x,j),10);
var D=parseInt(z.get(x,k),10);

if(this.__jc[A]){return x.clientWidth-B-D;
}else{if(x.clientWidth>=x.scrollWidth){return Math.max(x.clientWidth,x.scrollWidth)-B-D;
}else{var C=x.scrollWidth-B;
var y=qx.bom.client.Engine;

if(y.NAME===p&&y.VERSION==6){C-=D;
}return C;
}}},getContentHeight:function(E){var G=qx.bom.element.Style;
var I=qx.bom.element.Overflow.getY(E);
var J=parseInt(G.get(E,i),10);
var H=parseInt(G.get(E,f),10);

if(this.__jc[I]){return E.clientHeight-J-H;
}else{if(E.clientHeight>=E.scrollHeight){return Math.max(E.clientHeight,E.scrollHeight)-J-H;
}else{var K=E.scrollHeight-J;
var F=qx.bom.client.Engine;

if(F.NAME===p&&F.VERSION==6){K-=H;
}return K;
}}},getContentSize:function(d){return {width:this.getContentWidth(d),height:this.getContentHeight(d)};
},getClientWidth:function(s){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return s.clientWidth;
},getClientHeight:function(w){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return w.clientHeight;
},getScrollWidth:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
return e.scrollWidth;
},getScrollHeight:function(q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return q.scrollHeight;
}}});
})();
(function(){var c="content",b="qx.html.Label";
qx.Class.define(b,{extend:qx.html.Element,members:{__jd:null,_applyProperty:function(name,i){arguments.callee.base.call(this,name,i);

if(name==c){var j=this.getDomElement();
qx.bom.Label.setContent(j,i);
}},_createDomElement:function(){var f=this.__jd;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(d){return arguments.callee.base.call(this,true);
},setRich:function(g){var h=this.getDomElement();

if(h){throw new Error("The label mode cannot be modified after initial creation");
}g=!!g;

if(this.__jd==g){return;
}this.__jd=g;
return this;
},setContent:function(a){this._setProperty(c,a);
return this;
},getContent:function(){return this._getProperty(c);
}}});
})();
(function(){var r="_applyLayoutChange",q="left",p="center",o="top",n="Decorator",m="middle",k="__je",j="__jf",h="baseline",g="bottom",c="Boolean",f="right",e="_applyReversed",b="Integer",a="__jh",d="qx.ui.layout.HBox";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(bd,be,bf){arguments.callee.base.call(this);

if(bd){this.setSpacing(bd);
}
if(be){this.setAlignX(be);
}
if(bf){this.setSeparator(bf);
}},properties:{alignX:{check:[q,p,f],init:q,apply:r},alignY:{check:[o,m,g,h],init:o,apply:r},spacing:{check:b,init:0,apply:r},separator:{check:n,nullable:true,apply:r},reversed:{check:c,init:false,apply:e}},members:{__je:null,__jf:null,__jg:null,__jh:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ji:function(){var bl=this._getLayoutChildren();
var length=bl.length;
var bi=false;
var bg=this.__je&&this.__je.length!=length&&this.__jf&&this.__je;
var bj;
var bh=bg?this.__je:new Array(length);
var bk=bg?this.__jf:new Array(length);
if(this.getReversed()){bl=bl.concat().reverse();
}for(var i=0;i<length;i++){bj=bl[i].getLayoutProperties();

if(bj.width!=null){bh[i]=parseFloat(bj.width)/100;
}
if(bj.flex!=null){bk[i]=bj.flex;
bi=true;
}}if(!bg){this.__je=bh;
this.__jf=bk;
}this.__jg=bi;
this.__jh=bl;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(s,t){if(this._invalidChildrenCache){this.__ji();
}var z=this.__jh;
var length=z.length;
var I=qx.ui.layout.Util;
var H=this.getSpacing();
var L=this.getSeparator();

if(L){var w=I.computeHorizontalSeparatorGaps(z,H,L);
}else{var w=I.computeHorizontalGaps(z,H,true);
}var i,u,F,E;
var K=[];
var A=w;

for(i=0;i<length;i+=1){E=this.__je[i];
F=E!=null?Math.floor((s-w)*E):z[i].getSizeHint().width;
K.push(F);
A+=F;
}if(this.__jg&&A!=s){var C={};
var G,J;

for(i=0;i<length;i+=1){G=this.__jf[i];

if(G>0){B=z[i].getSizeHint();
C[i]={min:B.minWidth,value:K[i],max:B.maxWidth,flex:G};
}}var x=I.computeFlexOffsets(C,s,A);

for(i in x){J=x[i].offset;
K[i]+=J;
A+=J;
}}var P=z[0].getMarginLeft();
if(A<s&&this.getAlignX()!=q){P=s-A;

if(this.getAlignX()===p){P=Math.round(P/2);
}}var B,top,v,F,y,N,D;
var H=this.getSpacing();
this._clearSeparators();
if(L){var M=qx.theme.manager.Decoration.getInstance().resolve(L).getInsets();
var O=M.left+M.right;
}for(i=0;i<length;i+=1){u=z[i];
F=K[i];
B=u.getSizeHint();
N=u.getMarginTop();
D=u.getMarginBottom();
v=Math.max(B.minHeight,Math.min(t-N-D,B.maxHeight));
top=I.computeVerticalAlignOffset(u.getAlignY()||this.getAlignY(),v,t,N,D);
if(i>0){if(L){P+=y+H;
this._renderSeparator(L,{left:P,top:0,width:O,height:t});
P+=O+H+u.getMarginLeft();
}else{P+=I.collapseMargins(H,y,u.getMarginLeft());
}}u.renderLayout(P,top,F,v);
P+=F;
y=u.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ji();
}var V=qx.ui.layout.Util;
var bc=this.__jh;
var Q=0,W=0;
var T=0,U=0;
var ba,R,bb;
for(var i=0,l=bc.length;i<l;i+=1){ba=bc[i];
R=ba.getSizeHint();
W+=R.width;
Q+=this.__jf[i]>0?R.minWidth:R.width;
bb=ba.getMarginTop()+ba.getMarginBottom();
if((R.height+bb)>U){U=R.height+bb;
}if((R.minHeight+bb)>T){T=R.minHeight+bb;
}}var S=this.getSpacing();
var Y=this.getSeparator();

if(Y){var X=V.computeHorizontalSeparatorGaps(bc,S,Y);
}else{var X=V.computeHorizontalGaps(bc,S,true);
}return {minWidth:Q+X,width:W+X,minHeight:T,height:U};
}},destruct:function(){this._disposeFields(k,j,a);
}});
})();
(function(){var C="open",B="auto",A="icon",z="middle",y="label",x="changeOpen",w="excluded",v="String",u="visible",t="opened",X="always",W="qx.ui.tree.AbstractTreeItem",V="__jn",U="addItem",T="Boolean",S="Integer",R="_applyIndent",Q="changeOpenSymbolMode",P="_applyOpenSymbolMode",O="-label",J="-icon",K="__jj",H="resize",I="",F="removeItem",G="abstract",D="never",E="_applyIcon",L="_applyOpen",M="_applyLabel",N="__jk";
qx.Class.define(W,{extend:qx.ui.core.Widget,type:G,construct:function(){arguments.callee.base.call(this);
this.__jj=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:T,init:false,event:x,apply:L},openSymbolMode:{check:[X,D,B],init:B,event:Q,apply:P},indent:{check:S,init:19,apply:R,themeable:true},parent:{check:W,nullable:true},icon:{check:v,apply:E,nullable:true,themeable:true},label:{check:v,apply:M,init:I,dispose:true}},members:{__jj:null,__jk:null,__jl:null,__jm:null,__jn:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bb){var bc;

switch(bb){case y:bc=new qx.ui.basic.Label().set({appearance:this.getAppearance()+O,alignY:z});
break;
case A:bc=new qx.ui.basic.Image().set({appearance:this.getAppearance()+J,alignY:z});
break;
case C:bc=new qx.ui.tree.FolderOpenButton().set({alignY:z});
bc.addListener(x,this._onChangeOpen,this);
bc.addListener(H,this._updateIndent,this);
break;
}return bc||arguments.callee.base.call(this,bb);
},getTree:function(){var bR=this;

while(bR.getParent()){bR=bR.getParent();
}var bQ=bR.getLayoutParent()?bR.getLayoutParent().getLayoutParent():0;

if(bQ&&bQ instanceof qx.ui.core.ScrollPane){return bQ.getLayoutParent();
}return null;
},addWidget:function(bx,by){this._add(bx,by);
},addSpacer:function(){if(!this.__jn){this.__jn=new qx.ui.core.Spacer();
}else{this._remove(this.__jn);
}this._add(this.__jn);
},addOpenButton:function(){this._add(this.getChildControl(C));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bi=this.getChildControl(A);

if(this.__jm){this._remove(bi);
}this._add(bi);
this.__jm=true;
},addLabel:function(bD){var bE=this.getChildControl(y);

if(this.__jl){this._remove(bE);
}
if(bD){this.setLabel(bD);
}else{bE.setContent(this.getLabel());
}this._add(bE);
this.__jl=true;
},addState:function(b){arguments.callee.base.call(this,b);
var d=this._getChildren();

for(var i=0,l=d.length;i<l;i++){var c=d[i];

if(c.addState){d[i].addState(b);
}}},removeState:function(h){arguments.callee.base.call(this,h);
var k=this._getChildren();

for(var i=0,l=k.length;i<l;i++){var j=k[i];

if(j.addState){k[i].removeState(h);
}}},_applyIcon:function(bd,be){this.getChildControl(A).setSource(bd);
},_applyLabel:function(bf,bg){this.getChildControl(y).setContent(bf);
},_applyOpen:function(f,g){if(this.hasChildren()){this.getChildrenContainer().setVisibility(f?u:w);
}var open=this.getChildControl(C,true);

if(open){open.setOpen(f);
}f?this.addState(t):this.removeState(t);
},isOpenable:function(){var bh=this.getOpenSymbolMode();
return (bh===X||bh===B&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(C,true);

if(!open){return false;
}var a=this.getTree();

if(!a.getRootOpenClose()){if(a.getHideRoot()){if(a.getRoot()==this.getParent()){return false;
}}else{if(a.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bI,bJ){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bH=0;
var open=this.getChildControl(C,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bG=open.getBounds();

if(bG){bH=bG.width;
}else{return;
}}else{open.exclude();
}}this.__jn.setWidth((this.getLevel()+1)*this.getIndent()-bH);
},_applyIndent:function(bS,bT){this._updateIndent();
},getLevel:function(){var bN=this.getTree();

if(!bN){return;
}var bO=this;
var bP=-1;

while(bO){bO=bO.getParent();
bP+=1;
}if(bN.getHideRoot()){bP-=1;
}
if(!bN.getRootOpenClose()){bP-=1;
}return bP;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__jk){this.__jk=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?u:w});
}return this.__jk;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__jj;
},hasChildren:function(){return this.__jj?this.__jj.length>0:false;
},getItems:function(m,n,o){if(o!==false){var p=[];
}else{var p=[this];
}var s=this.hasChildren()&&(n!==false||this.isOpen());

if(s){var r=this.getChildren();

if(m===false){p=p.concat(r);
}else{for(var i=0,q=r.length;i<q;i++){p=p.concat(r[i].getItems(m,n,false));
}}}return p;
},recursiveAddToWidgetQueue:function(){var bK=this.getItems(true,true,false);

for(var i=0,l=bK.length;i<l;i++){qx.ui.core.queue.Widget.add(bK[i]);
}},__jo:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bj){var bk=this.getChildrenContainer();
var bn=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bo=arguments[i];
var bm=bo.getParent();

if(bm){bm.remove(bo);
}bo.setParent(this);
var bl=this.hasChildren();
bk.add(bo);

if(bo.hasChildren()){bk.add(bo.getChildrenContainer());
}this.__jj.push(bo);

if(!bl){this.__jo();
}
if(bn){bo.recursiveAddToWidgetQueue();
bn.fireNonBubblingEvent(U,qx.event.type.Data,[bo]);
}}
if(bn){qx.ui.core.queue.Widget.add(this);
}},addAt:function(br,bs){{};

if(bs==this.__jj.length){this.add(br);
return;
}var bw=br.getParent();

if(bw){bw.remove(br);
}var bu=this.getChildrenContainer();
br.setParent(this);
var bv=this.hasChildren();
var bt=this.__jj[bs];
bu.addBefore(br,bt);

if(br.hasChildren()){bu.addAfter(br.getChildrenContainer(),br);
}qx.lang.Array.insertAt(this.__jj,br,bs);

if(!bv){this.__jo();
}
if(this.getTree()){br.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bp,bq){{};
this.addAt(bp,this.__jj.indexOf(bq));
},addAfter:function(Y,ba){{};
this.addAt(Y,this.__jj.indexOf(ba)+1);
},addAtBegin:function(bF){this.addAt(bF,0);
},remove:function(bz){for(var i=0,l=arguments.length;i<l;i++){var bC=arguments[i];

if(this.__jj.indexOf(bC)==-1){this.warn("Cannot remove treeitem '"+bC+"'. It is not a child of this tree item.");
return;
}var bB=this.getChildrenContainer();

if(bC.hasChildren()){bB.remove(bC.getChildrenContainer());
}qx.lang.Array.remove(this.__jj,bC);
bC.setParent(null);
bB.remove(bC);
}var bA=this.getTree();

if(bA){bA.fireNonBubblingEvent(F,qx.event.type.Data,[bC]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bL){var bM=this.__jj[bL];

if(bM){this.remove(bM);
}},removeAll:function(){for(var i=this.__jj.length-1;i>=0;i--){this.remove(this.__jj[i]);
}}},destruct:function(){this._disposeArray(K);
this._disposeObjects(V,N);
}});
})();
(function(){var n="opened",m="click",l="mousedown",k="Boolean",j="qx.ui.tree.FolderOpenButton",i="_applyOpen",h="mouseup",g="Space",f="keypress",d="changeOpen",c="Enter";
qx.Class.define(j,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){arguments.callee.base.call(this);
this.initOpen();
this.addListener(f,this._onKeyPress);
this.addListener(m,this._onClick);
this.addListener(l,this._stopPropagation,this);
this.addListener(h,this._stopPropagation,this);
},properties:{open:{check:k,init:false,event:d,apply:i}},members:{_applyOpen:function(a,b){a?this.addState(n):this.removeState(n);
this.execute();
},_onKeyPress:function(e){switch(e.getKeyIdentifier()){case c:case g:this.toggleOpen();
e.stopPropagation();
}},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var d="qx.ui.core.Spacer";
qx.Class.define(d,{extend:qx.ui.core.LayoutItem,construct:function(b,c){arguments.callee.base.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(a){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){arguments.callee.base.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var M="Boolean",L="qx.event.type.Event",K="queued",J="String",I="sending",H="qx.io.remote.Response",G="receiving",F="aborted",E="failed",D="nocache",bv="completed",bu="POST",bt="configured",bs="timeout",br="GET",bq="Pragma",bp="no-url-params-on-post",bo="no-cache",bn="Cache-Control",bm="Content-Type",T="text/plain",U="application/xml",R="application/json",S="text/html",P="__js",Q="application/x-www-form-urlencoded",N="qx.io.remote.Exchange",O="__jp",V="__jr",W="Integer",be="X-Qooxdoo-Response-Type",bc="__jq",bg="HEAD",bf="qx.io.remote.Request",bi="_applyResponseType",bh="_applyState",Y="text/javascript",bl="changeState",bk="PUT",bj="_applyProhibitCaching",X="",ba="_applyMethod",bb="DELETE",bd="boolean";
qx.Class.define(bf,{extend:qx.core.Object,construct:function(m,n,o){arguments.callee.base.call(this);
this.__jp={};
this.__jq={};
this.__jr={};
this.__js={};

if(m!==undefined){this.setUrl(m);
}
if(n!==undefined){this.setMethod(n);
}
if(o!==undefined){this.setResponseType(o);
}this.setProhibitCaching(true);
this.__jt=++qx.io.remote.Request.__jt;
},events:{"created":L,"configured":L,"sending":L,"receiving":L,"completed":H,"aborted":H,"failed":H,"timeout":H},statics:{__jt:0},properties:{url:{check:J,init:X},method:{check:[br,bu,bk,bg,bb],apply:ba,init:br},asynchronous:{check:M,init:true},data:{check:J,nullable:true},username:{check:J,nullable:true},password:{check:J,nullable:true},state:{check:[bt,K,I,G,bv,F,bs,E],init:bt,apply:bh,event:bl},responseType:{check:[T,Y,R,U,S],init:T,apply:bi},timeout:{check:W,nullable:true},prohibitCaching:{check:function(v){return typeof v==bd||v===bp;
},init:true,apply:bj},crossDomain:{check:M,init:false},fileUpload:{check:M,init:false},transport:{check:N,nullable:true},useBasicHttpAuth:{check:M,init:false}},members:{__jp:null,__jq:null,__jr:null,__js:null,__jt:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case I:case G:this.error("Aborting already sent request!");
case K:this.abort();
break;
}},isConfigured:function(){return this.getState()===bt;
},isQueued:function(){return this.getState()===K;
},isSending:function(){return this.getState()===I;
},isReceiving:function(){return this.getState()===G;
},isCompleted:function(){return this.getState()===bv;
},isAborted:function(){return this.getState()===F;
},isTimeout:function(){return this.getState()===bs;
},isFailed:function(){return this.getState()===E;
},__ju:function(e){var p=e.clone();
p.setTarget(this);
this.dispatchEvent(p);
},_onqueued:function(e){this.setState(K);
this.__ju(e);
},_onsending:function(e){this.setState(I);
this.__ju(e);
},_onreceiving:function(e){this.setState(G);
this.__ju(e);
},_oncompleted:function(e){this.setState(bv);
this.__ju(e);
this.dispose();
},_onaborted:function(e){this.setState(F);
this.__ju(e);
this.dispose();
},_ontimeout:function(e){this.setState(bs);
this.__ju(e);
this.dispose();
},_onfailed:function(e){this.setState(E);
this.__ju(e);
this.dispose();
},_applyState:function(j,k){{};
},_applyProhibitCaching:function(a,b){if(!a){this.removeParameter(D);
this.removeRequestHeader(bq);
this.removeRequestHeader(bn);
return;
}if(a!==bp||this.getMethod()!=bu){this.setParameter(D,new Date().valueOf());
}else{this.removeParameter(D);
}this.setRequestHeader(bq,bo);
this.setRequestHeader(bn,bo);
},_applyMethod:function(t,u){if(t===bu){this.setRequestHeader(bm,Q);
}else{this.removeRequestHeader(bm);
}var w=this.getProhibitCaching();
this._applyProhibitCaching(w,w);
},_applyResponseType:function(h,i){this.setRequestHeader(be,h);
},setRequestHeader:function(bw,bx){this.__jp[bw]=bx;
},removeRequestHeader:function(l){delete this.__jp[l];
},getRequestHeader:function(s){return this.__jp[s]||null;
},getRequestHeaders:function(){return this.__jp;
},setParameter:function(d,f,g){if(g){this.__jr[d]=f;
}else{this.__jq[d]=f;
}},removeParameter:function(q,r){if(r){delete this.__jr[q];
}else{delete this.__jq[q];
}},getParameter:function(x,y){if(y){return this.__jr[x]||null;
}else{return this.__jq[x]||null;
}},getParameters:function(z){return (z?this.__jr:this.__jq);
},setFormField:function(A,B){this.__js[A]=B;
},removeFormField:function(C){delete this.__js[C];
},getFormField:function(c){return this.__js[c]||null;
},getFormFields:function(){return this.__js;
},getSequenceNumber:function(){return this.__jt;
}},destruct:function(){this.setTransport(null);
this._disposeFields(O,bc,V,P);
}});
})();
(function(){var s="Integer",r="sending",q="failed",p="timeout",o="completed",n="aborted",m="_applyEnabled",l="Boolean",k="__jw",j="interval",d="qx.io.remote.RequestQueue",h="queued",g="__jv",c="receiving",b="singleton",f="__jy";
qx.Class.define(d,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jv=[];
this.__jw=[];
this.__jx=0;
this.__jy=new qx.event.Timer(500);
this.__jy.addListener(j,this._oninterval,this);
},properties:{enabled:{init:true,check:l,apply:m},maxTotalRequests:{check:s,nullable:true},maxConcurrentRequests:{check:s,init:3},defaultTimeout:{check:s,init:5000}},members:{__jv:null,__jw:null,__jx:null,__jy:null,_debug:function(){var A;
},_check:function(){this._debug();
if(this.__jw.length==0&&this.__jv.length==0){this.__jy.stop();
}if(!this.getEnabled()){return;
}if(this.__jw.length>=this.getMaxConcurrentRequests()||this.__jv.length==0){return;
}if(this.getMaxTotalRequests()!=null&&this.__jx>=this.getMaxTotalRequests()){return;
}var F=this.__jv.shift();
var G=new qx.io.remote.Exchange(F);
this.__jx++;
this.__jw.push(G);
this._debug();
G.addListener(r,F._onsending,F);
G.addListener(c,F._onreceiving,F);
G.addListener(o,F._oncompleted,F);
G.addListener(n,F._onaborted,F);
G.addListener(p,F._ontimeout,F);
G.addListener(q,F._onfailed,F);
G.addListener(r,this._onsending,this);
G.addListener(o,this._oncompleted,this);
G.addListener(n,this._oncompleted,this);
G.addListener(p,this._oncompleted,this);
G.addListener(q,this._oncompleted,this);
G._start=(new Date).valueOf();
G.send();
if(this.__jv.length>0){this._check();
}},_remove:function(a){qx.lang.Array.remove(this.__jw,a);
a.dispose();
this._check();
},__jz:0,_onsending:function(e){{};
},_oncompleted:function(e){{};
this._remove(e.getTarget());
},_oninterval:function(e){var z=this.__jw;

if(z.length==0){this.__jy.stop();
return;
}var u=(new Date).valueOf();
var x;
var v;
var y=this.getDefaultTimeout();
var w;
var t;

for(var i=z.length-1;i>=0;i--){x=z[i];
v=x.getRequest();

if(v.isAsynchronous()){w=v.getTimeout();
if(w==0){continue;
}
if(w==null){w=y;
}t=u-x._start;

if(t>w){this.warn("Timeout: transport "+x.toHashCode());
this.warn(t+"ms > "+w+"ms");
x.timeout();
}}}},_applyEnabled:function(D,E){if(D){this._check();
}this.__jy.setEnabled(D);
},add:function(H){H.setState(h);
this.__jv.push(H);
this._check();

if(this.getEnabled()){this.__jy.start();
}},abort:function(B){var C=B.getTransport();

if(C){C.abort();
}else if(qx.lang.Array.contains(this.__jv,B)){qx.lang.Array.remove(this.__jv,B);
}}},destruct:function(){this._disposeArray(k);
this._disposeObjects(f);
this._disposeFields(g);
}});
})();
(function(){var q="sending",p="completed",o="receiving",n="aborted",m="failed",k="timeout",j="qx.io.remote.Response",h="Connection dropped",g="configured",f="qx.event.type.Event",bm="Proxy authentication required",bl="qx.io.remote.transport.Abstract",bk="MSHTML-specific HTTP status code",bj="Not available",bi="Precondition failed",bh="Server error",bg="Moved temporarily",bf="qx.io.remote.Exchange",be="Bad gateway",bd="Gone",x="See other",y="Partial content",v="Server timeout",w="qx.io.remote.transport.Script",t="HTTP version not supported",u="Unauthorized",r="Multiple choices",s="Payment required",B="Not implemented",C="Request-URL too large",K="Length required",I="_applyState",S="changeState",N="Not modified",Y="qx.io.remote.Request",W="Connection closed by server",E="Moved permanently",bc="_applyImplementation",bb="Method not allowed",ba="Forbidden",D="Use proxy",G="Ok",H="Not found",J="Not acceptable",L="Request time-out",O="Bad request",T="Conflict",X="No content",z="qx.io.remote.transport.XmlHttp",A="qx.io.remote.transport.Iframe",F="Request entity too large",R="Unknown status code",Q="Unsupported media type",P="Gateway time-out",V="created",U="Out of resources",M="undefined";
qx.Class.define(bf,{extend:qx.core.Object,construct:function(bF){arguments.callee.base.call(this);
this.setRequest(bF);
bF.setTransport(this);
},events:{"sending":f,"receiving":f,"completed":j,"aborted":j,"failed":j,"timeout":j},statics:{typesOrder:[z,A,w],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bA,bB){qx.io.remote.Exchange.typesAvailable[bB]=bA;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bM in qx.io.remote.Exchange.typesAvailable){var bL=qx.io.remote.Exchange.typesAvailable[bM];

if(bL.isSupported()){qx.io.remote.Exchange.typesSupported[bM]=bL;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bw,bx,by){if(!qx.lang.Array.contains(bw.handles.responseTypes,by)){return false;
}
for(var bz in bx){if(!bw.handles[bz]){return false;
}}return true;
},_nativeMap:{0:V,1:g,2:q,3:o,4:p},wasSuccessful:function(b,c,d){if(d){switch(b){case null:case 0:return true;
case -1:return c<4;
default:return typeof b===M;
}}else{switch(b){case -1:{};
return c<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return c!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(b>206&&b<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+b+" ("+c+")");
return false;
}}},statusCodeToString:function(bO){switch(bO){case -1:return bj;
case 200:return G;
case 304:return N;
case 206:return y;
case 204:return X;
case 300:return r;
case 301:return E;
case 302:return bg;
case 303:return x;
case 305:return D;
case 400:return O;
case 401:return u;
case 402:return s;
case 403:return ba;
case 404:return H;
case 405:return bb;
case 406:return J;
case 407:return bm;
case 408:return L;
case 409:return T;
case 410:return bd;
case 411:return K;
case 412:return bi;
case 413:return F;
case 414:return C;
case 415:return Q;
case 500:return bh;
case 501:return B;
case 502:return be;
case 503:return U;
case 504:return P;
case 505:return t;
case 12002:return v;
case 12029:return h;
case 12030:return h;
case 12031:return h;
case 12152:return W;
case 13030:return bk;
default:return R;
}}},properties:{request:{check:Y,nullable:true},implementation:{check:bl,nullable:true,apply:bc},state:{check:[g,q,o,p,n,k,m],init:g,event:S,apply:I}},members:{send:function(){var bq=this.getRequest();

if(!bq){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bo=qx.io.remote.Exchange.typesOrder;
var bn=qx.io.remote.Exchange.typesSupported;
var bs=bq.getResponseType();
var bt={};

if(bq.getAsynchronous()){bt.asynchronous=true;
}else{bt.synchronous=true;
}
if(bq.getCrossDomain()){bt.crossDomain=true;
}
if(bq.getFileUpload()){bt.fileUpload=true;
}for(var br in bq.getFormFields()){bt.programaticFormFields=true;
break;
}var bu,bp;

for(var i=0,l=bo.length;i<l;i++){bu=bn[bo[i]];

if(bu){if(!qx.io.remote.Exchange.canHandle(bu,bt,bs)){continue;
}
try{{};
bp=new bu;
this.setImplementation(bp);
bp.setUseBasicHttpAuth(bq.getUseBasicHttpAuth());
bp.send();
return true;
}catch(a){this.error("Request handler throws error");
this.error(a);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bq);
},abort:function(){var bv=this.getImplementation();

if(bv){{};
bv.abort();
}else{{};
this.setState(n);
}},timeout:function(){var bN=this.getImplementation();

if(bN){this.warn("Timeout: implementation "+bN.toHashCode());
bN.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(k);
}if(this.getRequest()){this.getRequest().setTimeout(0);
}},_onsending:function(e){this.setState(q);
},_onreceiving:function(e){this.setState(o);
},_oncompleted:function(e){this.setState(p);
},_onabort:function(e){this.setState(n);
},_onfailed:function(e){this.setState(m);
},_ontimeout:function(e){this.setState(k);
},_applyImplementation:function(bC,bD){if(bD){bD.removeListener(q,this._onsending,this);
bD.removeListener(o,this._onreceiving,this);
bD.removeListener(p,this._oncompleted,this);
bD.removeListener(n,this._onabort,this);
bD.removeListener(k,this._ontimeout,this);
bD.removeListener(m,this._onfailed,this);
}
if(bC){var bE=this.getRequest();
bC.setUrl(bE.getUrl());
bC.setMethod(bE.getMethod());
bC.setAsynchronous(bE.getAsynchronous());
bC.setUsername(bE.getUsername());
bC.setPassword(bE.getPassword());
bC.setParameters(bE.getParameters());
bC.setFormFields(bE.getFormFields());
bC.setRequestHeaders(bE.getRequestHeaders());
bC.setData(bE.getData());
bC.setResponseType(bE.getResponseType());
bC.addListener(q,this._onsending,this);
bC.addListener(o,this._onreceiving,this);
bC.addListener(p,this._oncompleted,this);
bC.addListener(n,this._onabort,this);
bC.addListener(k,this._ontimeout,this);
bC.addListener(m,this._onfailed,this);
}},_applyState:function(bG,bH){{};

switch(bG){case q:this.fireEvent(q);
break;
case o:this.fireEvent(o);
break;
case p:case n:case k:case m:var bJ=this.getImplementation();

if(!bJ){break;
}
if(this.hasListener(bG)){var bK=qx.event.Registration.createEvent(bG,qx.io.remote.Response);

if(bG==p){var bI=bJ.getResponseContent();
bK.setContent(bI);
if(bI===null){{};
bG=m;
}}bK.setStatusCode(bJ.getStatusCode());
bK.setResponseHeaders(bJ.getResponseHeaders());
this.dispatchEvent(bK);
}this.setImplementation(null);
bJ.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var e=this.getImplementation();

if(e){this.setImplementation(null);
e.dispose();
}this.setRequest(null);
}});
})();
(function(){var s="qx.event.type.Event",r="String",q="failed",p="timeout",o="created",n="aborted",m="sending",l="configured",k="receiving",j="completed",f="Object",i="Boolean",h="abstract",e="_applyState",d="changeState",g="qx.io.remote.transport.Abstract";
qx.Class.define(g,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},events:{"created":s,"configured":s,"sending":s,"receiving":s,"completed":s,"aborted":s,"failed":s,"timeout":s},properties:{url:{check:r,nullable:true},method:{check:r,nullable:true},asynchronous:{check:i,nullable:true},data:{check:r,nullable:true},username:{check:r,nullable:true},password:{check:r,nullable:true},state:{check:[o,l,m,k,j,n,p,q],init:o,event:d,apply:e},requestHeaders:{check:f,nullable:true},parameters:{check:f,nullable:true},formFields:{check:f,nullable:true},responseType:{check:r,nullable:true},useBasicHttpAuth:{check:i,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){{};
this.setState(n);
},timeout:function(){{};
this.setState(p);
},failed:function(){{};
this.setState(q);
},setRequestHeader:function(a,b){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(c){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(t,u){{};

switch(t){case o:this.fireEvent(o);
break;
case l:this.fireEvent(l);
break;
case m:this.fireEvent(m);
break;
case k:this.fireEvent(k);
break;
case j:this.fireEvent(j);
break;
case n:this.fireEvent(n);
break;
case q:this.fireEvent(q);
break;
case p:this.fireEvent(p);
break;
}return true;
}}});
})();
(function(){var k="completed",j="failed",h="=",g="aborted",f="",e="&",d="timeout",c="application/xml",b="qx.io.remote.transport.XmlHttp",a="application/json",I="text/html",H="qx.client",G="receiving",F="text/plain",E="text/javascript",D="sending",C="configured",B="?",A="created",z='Referer',t="__jA",u='Basic ',q="\n</pre>",r="string",o='Authorization',p="<pre>Could not execute json: \n",m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=':',v="parseerror",w="file:",y="webkit",x="object";
qx.Class.define(b,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
this.__jA=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__jA.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[F,E,a,c,I]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(H,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
},__jB:function(){}},members:{__jC:false,__jD:0,__jA:null,getRequest:function(){return this.__jA;
},send:function(){this.__jD=0;
var ba=this.getRequest();
var V=this.getMethod();
var bd=this.getAsynchronous();
var bc=this.getUrl();
var X=(window.location.protocol===w&&!(/^http(s){0,1}\:/.test(bc)));
this.__jC=X;
var bg=this.getParameters(false);
var be=[];

for(var W in bg){var bb=bg[W];

if(bb instanceof Array){for(var i=0;i<bb.length;i++){be.push(encodeURIComponent(W)+h+encodeURIComponent(bb[i]));
}}else{be.push(encodeURIComponent(W)+h+encodeURIComponent(bb));
}}
if(be.length>0){bc+=(bc.indexOf(B)>=0?e:B)+be.join(e);
}if(this.getData()===null){var bg=this.getParameters(true);
var be=[];

for(var W in bg){var bb=bg[W];

if(bb instanceof Array){for(var i=0;i<bb.length;i++){be.push(encodeURIComponent(W)+h+encodeURIComponent(bb[i]));
}}else{be.push(encodeURIComponent(W)+h+encodeURIComponent(bb));
}}
if(be.length>0){this.setData(be.join(e));
}}var bf=function(bs){var bx=m;
var bB=f;
var bv,bu,bt;
var by,bz,bA,bw;
var i=0;

do{bv=bs.charCodeAt(i++);
bu=bs.charCodeAt(i++);
bt=bs.charCodeAt(i++);
by=bv>>2;
bz=((bv&3)<<4)|(bu>>4);
bA=((bu&15)<<2)|(bt>>6);
bw=bt&63;

if(isNaN(bu)){bA=bw=64;
}else if(isNaN(bt)){bw=64;
}bB+=bx.charAt(by)+bx.charAt(bz)+bx.charAt(bA)+bx.charAt(bw);
}while(i<bs.length);
return bB;
};
ba.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){ba.open(V,bc,bd);
ba.setRequestHeader(o,u+bf(this.getUsername()+n+this.getPassword()));
}else{ba.open(V,bc,bd,this.getUsername(),this.getPassword());
}}else{ba.open(V,bc,bd);
}}catch(br){this.error("Failed with exception: "+br);
this.failed();
return;
}if(!qx.core.Variant.isSet(H,y)){ba.setRequestHeader(z,window.location.href);
}var Y=this.getRequestHeaders();

for(var W in Y){ba.setRequestHeader(W,Y[W]);
}try{{};
ba.send(this.getData());
}catch(bh){if(X){this.failedLocally();
}else{this.error("Failed to send data: "+bh,"send");
this.failed();
}return;
}if(!bd){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===j){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:function(e){switch(this.getState()){case k:case g:case j:case d:{};
return;
}var U=this.getReadyState();

if(U==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),U,this.__jC)){return this.failed();
}}while(this.__jD<U){this.setState(qx.io.remote.Exchange._nativeMap[++this.__jD]);
}},getReadyState:function(){var bL=null;

try{bL=this.__jA.readyState;
}catch(bj){}return bL;
},setRequestHeader:function(bO,bP){this.__jA.setRequestHeader(bO,bP);
},getResponseHeader:function(bC){var bD=null;

try{this.getRequest().getResponseHeader(bC)||null;
}catch(J){}return bD;
},getStringResponseHeaders:function(){var bN=null;

try{var bM=this.__jA.getAllResponseHeaders();

if(bM){bN=bM;
}}catch(Q){}return bN;
},getResponseHeaders:function(){var M=this.getStringResponseHeaders();
var N={};

if(M){var K=M.split(/[\r\n]+/g);

for(var i=0,l=K.length;i<l;i++){var L=K[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(L){N[L[1]]=L[2];
}}}return N;
},getStatusCode:function(){var bE=-1;

try{bE=this.getRequest().status;
}catch(bi){}return bE;
},getStatusText:function(){var bR=f;

try{bR=this.getRequest().statusText;
}catch(bQ){}return bR;
},getResponseText:function(){var bJ=null;
var bH=this.getStatusCode();
var bI=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bH,bI,this.__jC)){try{bJ=this.getRequest().responseText;
}catch(bn){}}return bJ;
},getResponseXml:function(){var bm=null;
var bk=this.getStatusCode();
var bl=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bk,bl,this.__jC)){try{bm=this.getRequest().responseXML;
}catch(P){}}if(typeof bm==x&&bm!=null){if(!bm.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,f);
bm.loadXML(s);
}if(!bm.documentElement){throw new Error("Missing Document Element!");
}
if(bm.documentElement.tagName==v){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bm;
},getFetchedLength:function(){var R=this.getResponseText();
return typeof R==r?R.length:0;
},getResponseContent:function(){if(this.getState()!==k){{};
return null;
}{};
var T=this.getResponseText();

switch(this.getResponseType()){case F:case I:{};
return T;
case a:{};

try{if(T&&T.length>0){var S=qx.util.Json.parseQx(T);
return (S===0?0:(S||null));
}else{return null;
}}catch(bq){this.error("Could not execute json: ["+T+"]",bq);
return p+T+q;
}case E:{};

try{if(T&&T.length>0){var S=window.eval(T);
return (S===0?0:(S||null));
}else{return null;
}}catch(O){this.error("Could not execute javascript: ["+T+"]",O);
return null;
}case c:T=this.getResponseXml();
{};
return (T===0?0:(T||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bF,bG){{};

switch(bF){case A:this.fireEvent(A);
break;
case C:this.fireEvent(C);
break;
case D:this.fireEvent(D);
break;
case G:this.fireEvent(G);
break;
case k:this.fireEvent(k);
break;
case j:this.fireEvent(j);
break;
case g:this.getRequest().abort();
this.fireEvent(g);
break;
case d:this.getRequest().abort();
this.fireEvent(d);
break;
}}},defer:function(bo,bp){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,b);
},destruct:function(){var bK=this.getRequest();

if(bK){bK.onreadystatechange=qx.io.remote.transport.XmlHttp.__jB;
switch(bK.readyState){case 1:case 2:case 3:bK.abort();
}}this._disposeFields(t);
}});
})();
(function(){var B=",",A="",z="string",y="null",x='"',w="qx.jsonDebugging",v='\\u00',u="new Date(Date.UTC(",t="__jG",s=")",bc='\\\\',bb='\\f',ba="Object",Y='\\"',X="))",W="}",V="__jP",U='(',T=":",S="{",I='\\r',J='\\t',G="__jF",H="(",E="]",F="[",C="__jH",D="Array",K="qx.jsonEncodeUndefined",L="__jI",N='\\b',M="qx.util.Json",P=')',O='\\n',R="Date",Q="__jQ";
qx.Class.define(M,{statics:{BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__jE:{"function":G,"boolean":t,"number":C,"string":L,"object":V,"undefined":Q},__jF:function(bd){return String(bd);
},__jG:function(be){return String(be);
},__jH:function(bq){return isFinite(bq)?String(bq):y;
},__jI:function(c){var d;

if(/["\\\x00-\x1f]/.test(c)){d=c.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__jK);
}else{d=c;
}return x+d+x;
},__jJ:{'\b':N,'\t':J,'\n':O,'\f':bb,'\r':I,'"':Y,'\\':bc},__jK:function(a,b){var bl=qx.util.Json.__jJ[b];

if(bl){return bl;
}bl=b.charCodeAt();
return v+Math.floor(bl/16).toString(16)+(bl%16).toString(16);
},__jL:function(bf){var bh=[],bk=true,bj,bg;
var bi=qx.util.Json.__jR;
bh.push(F);

if(bi){qx.util.Json.__jM+=qx.util.Json.BEAUTIFYING_INDENT;
bh.push(qx.util.Json.__jM);
}
for(var i=0,l=bf.length;i<l;i++){bg=bf[i];
bj=this.__jE[typeof bg];

if(bj){bg=this[bj](bg);

if(typeof bg==z){if(!bk){bh.push(B);

if(bi){bh.push(qx.util.Json.__jM);
}}bh.push(bg);
bk=false;
}}}
if(bi){qx.util.Json.__jM=qx.util.Json.__jM.substring(0,qx.util.Json.__jM.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bh.push(qx.util.Json.__jM);
}bh.push(E);
return bh.join(A);
},__jN:function(bo){var bp=bo.getUTCFullYear()+B+bo.getUTCMonth()+B+bo.getUTCDate()+B+bo.getUTCHours()+B+bo.getUTCMinutes()+B+bo.getUTCSeconds()+B+bo.getUTCMilliseconds();
return u+bp+X;
},__jO:function(h){var m=[],p=true,k,j;
var n=qx.util.Json.__jR;
m.push(S);

if(n){qx.util.Json.__jM+=qx.util.Json.BEAUTIFYING_INDENT;
m.push(qx.util.Json.__jM);
}
for(var o in h){j=h[o];
k=this.__jE[typeof j];

if(k){j=this[k](j);

if(typeof j==z){if(!p){m.push(B);

if(n){m.push(qx.util.Json.__jM);
}}m.push(this.__jI(o),T,j);
p=false;
}}}
if(n){qx.util.Json.__jM=qx.util.Json.__jM.substring(0,qx.util.Json.__jM.length-qx.util.Json.BEAUTIFYING_INDENT.length);
m.push(qx.util.Json.__jM);
}m.push(W);
return m.join(A);
},__jP:function(br){if(br){var bs=br.constructor.name;

if(br instanceof Array||bs==D){return this.__jL(br);
}else if(br instanceof Date||bs==R){return this.__jN(br);
}else if(br instanceof Object||bs==ba){return this.__jO(br);
}return A;
}return y;
},__jQ:function(a){if(qx.core.Setting.get(K)){return y;
}},stringify:function(e,f){this.__jR=f;
this.__jM=this.BEAUTIFYING_LINE_END;
var g=this[this.__jE[typeof e]](e);

if(typeof g!=z){g=null;
}if(qx.core.Setting.get(w)){qx.log.Logger.debug(this,"JSON request: "+g);
}return g;
},parse:function(q){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(q.replace(/"(\\.|[^"\\])*"/g,A))){throw new Error("Could not parse JSON string!");
}
try{return eval(H+q+s);
}catch(r){throw new Error("Could not evaluate JSON string: "+r.message);
}},parseQx:function(bm){if(qx.core.Setting.get(w)){qx.log.Logger.debug(this,"JSON response: "+bm);
}var bn=(bm&&bm.length>0)?eval(U+bm+P):null;
return bn;
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false}});
})();
(function(){var C="=",B="&",A="application/xml",z="application/json",y="text/html",x="qx.client",w="textarea",v="none",u="text/plain",t="text/javascript",Y="",X="completed",W="?",V="qx.io.remote.transport.Iframe",U="__jT",T="gecko",S="frame_",R="aborted",Q="_data_",P="pre",J="javascript:void(0)",K="sending",H="form",I="failed",F='<iframe name="',G="mshtml",D="form_",E='"></iframe>',L="iframe",M="__jS",O="timeout",N="qx/static/blank.gif";
qx.Class.define(V,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var a=(new Date).valueOf();
var b=S+a;
var c=D+a;
if(qx.core.Variant.isSet(x,G)){this.__jS=document.createElement(F+b+E);
}else{this.__jS=document.createElement(L);
}this.__jS.src=J;
this.__jS.id=this.__jS.name=b;
this.__jS.onload=qx.lang.Function.bind(this._onload,this);
this.__jS.style.display=v;
document.body.appendChild(this.__jS);
this.__jT=document.createElement(H);
this.__jT.target=b;
this.__jT.id=this.__jT.name=c;
this.__jT.style.display=v;
document.body.appendChild(this.__jT);
this.__jU=document.createElement(w);
this.__jU.id=this.__jU.name=Q;
this.__jT.appendChild(this.__jU);
this.__jS.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[u,t,z,A,y]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__jU:null,__jV:0,__jT:null,__jS:null,send:function(){var k=this.getMethod();
var m=this.getUrl();
var q=this.getParameters(false);
var p=[];

for(var l in q){var n=q[l];

if(n instanceof Array){for(var i=0;i<n.length;i++){p.push(encodeURIComponent(l)+C+encodeURIComponent(n[i]));
}}else{p.push(encodeURIComponent(l)+C+encodeURIComponent(n));
}}
if(p.length>0){m+=(m.indexOf(W)>=0?B:W)+p.join(B);
}if(this.getData()===null){var q=this.getParameters(true);
var p=[];

for(var l in q){var n=q[l];

if(n instanceof Array){for(var i=0;i<n.length;i++){p.push(encodeURIComponent(l)+C+encodeURIComponent(n[i]));
}}else{p.push(encodeURIComponent(l)+C+encodeURIComponent(n));
}}
if(p.length>0){this.setData(p.join(B));
}}var j=this.getFormFields();

for(var l in j){var o=document.createElement(w);
o.name=l;
o.appendChild(document.createTextNode(j[l]));
this.__jT.appendChild(o);
}this.__jT.action=m;
this.__jT.method=k;
this.__jU.appendChild(document.createTextNode(this.getData()));
this.__jT.submit();
this.setState(K);
},_onload:function(e){if(this.__jT.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
},_onreadystatechange:function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__jS.readyState]);
},_switchReadyState:function(g){switch(this.getState()){case X:case R:case I:case O:this.warn("Ignore Ready State Change");
return;
}while(this.__jV<g){this.setState(qx.io.remote.Exchange._nativeMap[++this.__jV]);
}},setRequestHeader:function(d,e){},getResponseHeader:function(f){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return Y;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__jS);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__jS);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__jS);
},getIframeTextContent:function(){var be=this.getIframeBody();

if(!be){return null;
}
if(!be.firstChild){return Y;
}if(be.firstChild.tagName&&be.firstChild.tagName.toLowerCase()==P){return be.firstChild.innerHTML;
}else{return be.innerHTML;
}},getIframeHtmlContent:function(){var h=this.getIframeBody();
return h?h.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==X){{};
return null;
}{};
var s=this.getIframeTextContent();

switch(this.getResponseType()){case u:{};
return s;
break;
case y:s=this.getIframeHtmlContent();
{};
return s;
break;
case z:s=this.getIframeHtmlContent();
{};

try{return s&&s.length>0?qx.util.Json.parseQx(s):null;
}catch(r){return this.error("Could not execute json: ("+s+")",r);
}case t:s=this.getIframeHtmlContent();
{};

try{return s&&s.length>0?window.eval(s):null;
}catch(bd){return this.error("Could not execute javascript: ("+s+")",bd);
}case A:s=this.getIframeDocument();
{};
return s;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(ba,bb,bc){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,V);
},destruct:function(){if(this.__jS){this.__jS.onload=null;
this.__jS.onreadystatechange=null;
if(qx.core.Variant.isSet(x,T)){this.__jS.src=qx.util.ResourceManager.toUri(N);
}document.body.removeChild(this.__jS);
}
if(this.__jT){document.body.removeChild(this.__jT);
}this._disposeFields(M,U);
}});
})();
(function(){var m="qx.event.handler.Iframe",l="load",k="iframe";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:function(j){qx.event.Registration.fireEvent(j,l);
}},members:{canHandleEvent:function(e,f){return e.tagName.toLowerCase()===k;
},registerEvent:function(g,h,i){},unregisterEvent:function(a,b,c){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var n="0",m="qx.client",l="qx.bom.Iframe",k="qx.event.handler.Iframe.onevent(this)",j="true",i="iframe",h="body";
qx.Class.define(l,{statics:{create:function(b,c){var b=b?qx.lang.Object.clone(b):{};
b.onload=k;
b.frameBorder=n;
b.frameSpacing=n;
b.marginWidth=n;
b.marginHeight=n;
b.hspace=n;
b.vspace=n;
b.border=n;
b.allowTransparency=j;
return qx.bom.Element.create(i,b,c);
},getWindow:qx.core.Variant.select(m,{"mshtml|gecko":function(a){try{return a.contentWindow;
}catch(x){return null;
}},"default":function(t){try{var u=this.getDocument(t);
return u?u.defaultView:null;
}catch(y){return null;
}}}),getDocument:qx.core.Variant.select(m,{"mshtml":function(f){try{var g=this.getWindow(f);
return g?g.document:null;
}catch(z){return null;
}},"default":function(o){try{return o.contentDocument;
}catch(w){return null;
}}}),getBody:function(p){var q=this.getDocument(p);
return q?q.getElementsByTagName(h)[0]:null;
},setSource:function(d,e){try{if(this.getWindow(d)){try{this.getWindow(d).location.replace(e);
}catch(r){d.src=e;
}}else{d.src=e;
}}catch(v){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(A){var B=this.getDocument(A);

try{if(B&&B.location){return B.location.href;
}}catch(s){}return null;
}}});
})();
(function(){var w="&",v="=",u="?",t="application/json",s="completed",r="text/plain",q="text/javascript",p="qx.io.remote.transport.Script",o="",n="_ScriptTransport_data",g="_responseContent",m="__jX",k="script",f="timeout",e="_ScriptTransport_",j="_ScriptTransport_id",h="aborted",l="utf-8",d="failed";
qx.Class.define(p,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var c=++qx.io.remote.transport.Script.__jW;

if(c>=2000000000){qx.io.remote.transport.Script.__jW=c=1;
}this.__jX=null;
this.__jW=c;
},statics:{__jW:0,_instanceRegistry:{},ScriptTransport_PREFIX:e,ScriptTransport_ID_PARAM:j,ScriptTransport_DATA_PARAM:n,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[r,q,t]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:function(a,content){var b=qx.io.remote.transport.Script._instanceRegistry[a];

if(b==null){{};
}else{b._responseContent=content;
b._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}}},members:{__jY:0,__jX:null,__jW:null,send:function(){var z=this.getUrl();
z+=(z.indexOf(u)>=0?w:u)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+v+this.__jW;
var C=this.getParameters();
var B=[];

for(var y in C){if(y.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var A=C[y];

if(A instanceof Array){for(var i=0;i<A.length;i++){B.push(encodeURIComponent(y)+v+encodeURIComponent(A[i]));
}}else{B.push(encodeURIComponent(y)+v+encodeURIComponent(A));
}}
if(B.length>0){z+=w+B.join(w);
}var x=this.getData();

if(x!=null){z+=w+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+v+encodeURIComponent(x);
}qx.io.remote.transport.Script._instanceRegistry[this.__jW]=this;
this.__jX=document.createElement(k);
this.__jX.charset=l;
this.__jX.src=z;
{};
document.body.appendChild(this.__jX);
},_switchReadyState:function(K){switch(this.getState()){case s:case h:case d:case f:this.warn("Ignore Ready State Change");
return;
}while(this.__jY<K){this.setState(qx.io.remote.Exchange._nativeMap[++this.__jY]);
}},setRequestHeader:function(D,E){},getResponseHeader:function(G){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return o;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==s){{};
return null;
}{};

switch(this.getResponseType()){case r:case t:case q:{};
var F=this._responseContent;
return (F===0?0:(F||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(H,I,J){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,p);
qx.io.remote.ScriptTransport=H;
},destruct:function(){if(this.__jX){delete qx.io.remote.transport.Script._instanceRegistry[this.__jW];
document.body.removeChild(this.__jX);
}this._disposeFields(m,g);
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(f){var g=arguments.callee.base.call(this,f);
g.setType(this.getType());
g.setState(this.getState());
g.setStatusCode(this.getStatusCode());
g.setContent(this.getContent());
g.setResponseHeaders(this.getResponseHeaders());
return g;
},getResponseHeader:function(d){var e=this.getResponseHeaders();

if(e){return e[d]||null;
}return null;
}}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){arguments.callee.base.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){arguments.callee.base.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var t="atom",s="Integer",r="String",q="_applyRich",p="qx.ui.tooltip.ToolTip",o="_applyIcon",n="tooltip",m="Boolean",l="_applyLabel";
qx.Class.define(p,{extend:qx.ui.popup.Popup,construct:function(u,v){arguments.callee.base.call(this);
qx.ui.tooltip.Manager.getInstance();
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(t);
if(u!=null){this.setLabel(u);
}
if(v!=null){this.setIcon(v);
}},properties:{appearance:{refine:true,init:n},showTimeout:{check:s,init:1000,themeable:true},hideTimeout:{check:s,init:4000,themeable:true},label:{check:r,nullable:true,apply:l},icon:{check:r,nullable:true,apply:o,themeable:true},rich:{check:m,init:false,apply:q}},members:{_createChildControlImpl:function(a){var b;

switch(a){case t:b=new qx.ui.basic.Atom;
this._add(b);
break;
}return b||arguments.callee.base.call(this,a);
},_applyIcon:function(i,j){var k=this.getChildControl(t);
i==null?k.resetIcon:k.setIcon(i);
},_applyLabel:function(c,d){var e=this.getChildControl(t);
c==null?e.resetLabel():e.setLabel(c);
},_applyRich:function(f,g){var h=this.getChildControl(t);
h.setRich(f);
}}});
})();
(function(){var t="mousedown",s="__ka",r="blur",q="singleton",p="qx.ui.popup.Manager";
qx.Class.define(p,{type:q,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ka={};
var n=qx.core.Init.getApplication().getRoot();
n.addListener(t,this.__kc,this,true);
qx.bom.Element.addListener(window,r,this.hideAll,this);
},members:{__ka:null,add:function(a){{};
this.__ka[a.$$hash]=a;
this.__kb();
},remove:function(l){{};
var m=this.__ka;

if(m){delete m[l.$$hash];
this.__kb();
}},hideAll:function(){var g=this.__ka;

if(g){for(var f in g){g[f].exclude();
}}},__kb:function(){var d=1e7;
var c=this.__ka;

for(var b in c){c[b].setZIndex(d++);
}},__kc:function(e){var j=e.getTarget();
var k=this.__ka;

for(var i in k){var h=k[i];

if(!h.getAutoHide()||j==h||qx.ui.core.Widget.contains(h,j)){continue;
}h.exclude();
}}},destruct:function(){var o=qx.core.Init.getApplication().getRoot();

if(o){o.removeListener(t,this.__kc,this,true);
}this._disposeMap(s);
}});
})();
(function(){var m="focusout",l="interval",k="mouseover",j="mousemove",i="mouseout",h="qx.ui.tooltip.ToolTip",g="__kd",f="__kf",d="_applyCurrent",c="qx.ui.tooltip.Manager",a="__ke",b="singleton";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,k,this.__kj,this,true);
this.__kd=new qx.event.Timer();
this.__kd.addListener(l,this.__kg,this);
this.__ke=new qx.event.Timer();
this.__ke.addListener(l,this.__kh,this);
this.__kf={left:0,top:0};
},properties:{current:{check:h,nullable:true,apply:d}},members:{__kf:null,__ke:null,__kd:null,_applyCurrent:function(w,x){if(x&&qx.ui.core.Widget.contains(x,w)){return;
}if(x){x.exclude();
this.__kd.stop();
this.__ke.stop();
}var z=qx.event.Registration;
var y=document.body;
if(w){this.__kd.startWith(w.getShowTimeout());
z.addListener(y,i,this.__kk,this,true);
z.addListener(y,m,this.__kl,this,true);
z.addListener(y,j,this.__ki,this,true);
}else{z.removeListener(y,i,this.__kk,this,true);
z.removeListener(y,m,this.__kl,this,true);
z.removeListener(y,j,this.__ki,this,true);
}},__kg:function(e){var n=this.getCurrent();

if(n){this.__ke.startWith(n.getHideTimeout());
n.placeToPoint(this.__kf);
n.show();
}this.__kd.stop();
},__kh:function(e){var A=this.getCurrent();

if(A){A.exclude();
}this.__ke.stop();
this.resetCurrent();
},__ki:function(e){var v=this.__kf;
v.left=e.getDocumentLeft();
v.top=e.getDocumentTop();
},__kj:function(e){var t=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!t){return;
}var u;
while(t!=null){var u=t.getToolTip();

if(u){break;
}t=t.getLayoutParent();
}if(u){this.setCurrent(u);
}},__kk:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!o){return;
}var p=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!p){return;
}var q=this.getCurrent();
if(q&&(p==q||qx.ui.core.Widget.contains(q,p))){return;
}if(p&&o&&qx.ui.core.Widget.contains(o,p)){return;
}if(q&&!p){this.setCurrent(null);
}else{this.resetCurrent();
}},__kl:function(e){var r=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!r){return;
}var s=this.getCurrent();
if(s&&s==r.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,k,this.__kj,this,true);
this._disposeObjects(g,a);
this._disposeFields(f);
}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){arguments.callee.base.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.table.ITableModel";
qx.Interface.define(a,{events:{"dataChanged":b,"metaDataChanged":b},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(c){},getColumnCount:function(){},getColumnId:function(q){},getColumnIndexById:function(f){},getColumnName:function(v){},isColumnEditable:function(g){},isColumnSortable:function(u){},sortByColumn:function(d,e){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(j,k){},getValue:function(h,i){},getValueById:function(o,p){},setValue:function(r,s,t){},setValueById:function(l,m,n){}}});
})();
(function(){var C="qx.event.type.Data",B="abstract",A="__kn",z="qx.ui.table.model.Abstract",y="__ko",x="__km";
qx.Class.define(z,{type:B,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":C,"metaDataChanged":C},construct:function(){arguments.callee.base.call(this);
this.__km=[];
this.__kn=[];
this.__ko={};
},members:{__km:null,__kn:null,__ko:null,__kp:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(c){return null;
},isColumnEditable:function(m){return false;
},isColumnSortable:function(r){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(a,b){},getValue:function(h,j){throw new Error("getValue is abstract");
},getValueById:function(u,v){return this.getValue(this.getColumnIndexById(u),v);
},setValue:function(e,f,g){throw new Error("setValue is abstract");
},setValueById:function(D,E,F){return this.setValue(this.getColumnIndexById(D),E,F);
},getColumnCount:function(){return this.__km.length;
},getColumnIndexById:function(n){return this.__ko[n];
},getColumnId:function(w){return this.__km[w];
},getColumnName:function(t){return this.__kn[t];
},setColumnIds:function(s){this.__km=s;
this.__ko={};

for(var i=0;i<s.length;i++){this.__ko[s[i]]=i;
}this.__kn=new Array(s.length);
if(!this.__kp){this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},setColumnNamesByIndex:function(G){if(this.__km.length!=G.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__km.length+" != "+G.length);
}this.__kn=G;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},setColumnNamesById:function(d){this.__kn=new Array(this.__km.length);

for(var i=0;i<this.__km.length;++i){this.__kn[i]=d[this.__km[i]];
}},setColumns:function(o,p){var q=this.__km.length==0||p;

if(p==null){if(this.__km.length==0){p=o;
}else{p=this.__km;
}}
if(p.length!=o.length){throw new Error("columnIdArr and columnNameArr have different length: "+p.length+" != "+o.length);
}
if(q){this.__kp=true;
this.setColumnIds(p);
this.__kp=false;
}this.setColumnNamesByIndex(o);
}},destruct:function(){this._disposeFields(x,A,y);
}});
})();
(function(){var bm="qx.ui.table.model.Simple",bl="Boolean",bk="__ks",bj="__ku",bi="__kt",bh="__kq";
qx.Class.define(bm,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__kq=[];
this.__kr=-1;
this.__kv;
this.__ks=[];
this.__kt=null;
},properties:{caseSensitiveSorting:{check:bl,init:true}},statics:{_defaultSortComparatorAscending:function(bd,be){var bf=bd[arguments.callee.columnIndex];
var bg=be[arguments.callee.columnIndex];
return (bf>bg)?1:((bf==bg)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(L,M){var N=(isNaN(L[arguments.callee.columnIndex])?L[arguments.callee.columnIndex].toLowerCase():L[arguments.callee.columnIndex]);
var O=(isNaN(M[arguments.callee.columnIndex])?M[arguments.callee.columnIndex].toLowerCase():M[arguments.callee.columnIndex]);
return (N>O)?1:((N==O)?0:-1);
},_defaultSortComparatorDescending:function(D,E){var F=D[arguments.callee.columnIndex];
var G=E[arguments.callee.columnIndex];
return (F<G)?1:((F==G)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(q,r){var s=(isNaN(q[arguments.callee.columnIndex])?q[arguments.callee.columnIndex].toLowerCase():q[arguments.callee.columnIndex]);
var t=(isNaN(r[arguments.callee.columnIndex])?r[arguments.callee.columnIndex].toLowerCase():r[arguments.callee.columnIndex]);
return (s<t)?1:((s==t)?0:-1);
}},members:{__kq:null,__kt:null,__ku:null,__ks:null,__kr:null,__kv:null,getRowData:function(bb){var bc=this.__kq[bb];

if(bc==null||bc.originalData==null){return bc;
}else{return bc.originalData;
}},getRowDataAsMap:function(bq){var bs=this.__kq[bq];
var br={};

for(var bt=0;bt<this.getColumnCount();bt++){br[this.getColumnId(bt)]=bs[bt];
}return br;
},getDataAsMapArray:function(){var bG=this.getRowCount();
var bF=[];

for(var i=0;i<bG;i++){bF.push(this.getRowDataAsMap(i));
}return bF;
},setEditable:function(bD){this.__kt=[];

for(var bE=0;bE<this.getColumnCount();bE++){this.__kt[bE]=bD;
}this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},setColumnEditable:function(v,w){if(w!=this.isColumnEditable(v)){if(this.__kt==null){this.__kt=[];
}this.__kt[v]=w;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},isColumnEditable:function(u){return this.__kt?(this.__kt[u]==true):false;
},setColumnSortable:function(B,C){if(C!=this.isColumnSortable(B)){if(this.__ku==null){this.__ku=[];
}this.__ku[B]=C;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},isColumnSortable:function(T){return (this.__ku?(this.__ku[T]!==false):true);
},sortByColumn:function(H,I){var K;
var J=this.__ks[H];

if(J){K=(I?J.ascending:J.descending);
}else{if(this.getCaseSensitiveSorting()){K=(I?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{K=(I?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}K.columnIndex=H;
this.__kq.sort(K);
this.__kr=H;
this.__kv=I;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},setSortMethods:function(k,l){this.__ks[k]=l;
},clearSorting:function(){if(this.__kr!=-1){this.__kr=-1;
this.__kv=true;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},getSortColumnIndex:function(){return this.__kr;
},isSortAscending:function(){return this.__kv;
},getRowCount:function(){return this.__kq.length;
},getValue:function(Y,ba){if(ba<0||ba>=this.__kq.length){throw new Error("this.__rowArr out of bounds: "+ba+" (0.."+this.__kq.length+")");
}return this.__kq[ba][Y];
},setValue:function(a,b,c){if(this.__kq[b][a]!=c){this.__kq[b][a]=c;
if(this.hasListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED)){var d={firstRow:b,lastRow:b,firstColumn:a,lastColumn:a};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,d);
}
if(a==this.__kr){this.clearSorting();
}}},setData:function(bn,bo){this.__kq=bn;
if(this.hasListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED)){var bp={firstRow:0,lastRow:bn.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,bp);
}
if(bo!==false){this.clearSorting();
}},getData:function(){return this.__kq;
},setDataAsMapArray:function(bu,bv,bw){this.setData(this._mapArray2RowArr(bu,bv),bw);
},addRows:function(x,y,z){if(y==null){y=this.__kq.length;
}x.splice(0,0,y,0);
Array.prototype.splice.apply(this.__kq,x);
var A={firstRow:y,lastRow:this.__kq.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,A);

if(z!==false){this.clearSorting();
}},addRowsAsMapArray:function(m,n,o,p){this.addRows(this._mapArray2RowArr(m,o),n,p);
},setRows:function(e,f,g){if(f==null)f=0;
e.splice(0,0,f,e.length);
Array.prototype.splice.apply(this.__kq,e);
var h={firstRow:f,lastRow:this.__kq.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,h);

if(g!==false){this.clearSorting();
}},setRowsAsMapArray:function(U,V,W,X){this.setRows(this._mapArray2RowArr(U,W),V,X);
},removeRows:function(P,Q,R){this.__kq.splice(P,Q);
var S={firstRow:P,lastRow:this.__kq.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:P,removeCount:Q};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,S);

if(R!==false){this.clearSorting();
}},_mapArray2RowArr:function(bx,by){var bC=bx.length;
var bz=this.getColumnCount();
var bB=new Array(bC);
var bA;

for(var i=0;i<bC;++i){bA=[];

if(by){bA.originalData=bx[i];
}
for(var j=0;j<bz;++j){bA[j]=bx[i][this.getColumnId(j)];
}bB[i]=bA;
}return bB;
}},destruct:function(){this._disposeFields(bh,bi,bk,bj);
}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(d){return true;
},updateHeaderCell:function(b,c){return true;
}}});
})();
(function(){var b="qx.ui.table.headerrenderer.Default",a="String";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:a,init:null,nullable:true}},members:{createHeaderCell:function(c){var d=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(c,d);
return d;
},updateHeaderCell:function(e,f){var g=qx.ui.table.headerrenderer.Default;
f.setLabel(e.name);
var h=f.getToolTip();

if(this.getToolTip()!=null){if(h==null){h=new qx.ui.tooltip.ToolTip(this.getToolTip());
f.setToolTip(h);
}else{h.setLabel(this.getToolTip());
}}e.sorted?f.addState(g.STATE_SORTED):f.removeState(g.STATE_SORTED);
e.sortedAscending?f.addState(g.STATE_SORTED_ASCENDING):f.removeState(g.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f='" ',e="nowrap",d="default",c="qx.client",b="}",a="width:",G=".qooxdoo-table-cell-right { text-align:right } ",F="0px 6px",E='<div class="',D="0px",C="height:",B="1px solid ",A=".qooxdoo-table-cell-bold { font-weight:bold } ",z="table-row-line",y='>',x="mshtml",q='</div>',r="ellipsis",o="content-box",p='left:',m="qx.ui.table.cellrenderer.Abstract",n='" style="',k="abstract",l="none",s="hidden",t="} ",v='px;',u=".qooxdoo-table-cell-italic { font-style:italic} ",w="absolute";
qx.Class.define(m,{type:k,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
var H=qx.ui.table.cellrenderer.Abstract;

if(!H.__kw){var J=qx.theme.manager.Color.getInstance();
H.__kw=arguments.callee.self;
var I=h+
qx.bom.element.Style.compile({position:w,top:D,overflow:s,whiteSpace:e,borderRight:B+J.resolve(z),padding:F,cursor:d,textOverflow:r,userSelect:l})+t+G+u+A;

if(!qx.core.Variant.isSet(c,x)){I+=h+qx.bom.element.BoxSizing.compile(o)+b;
}H.__kw.stylesheet=qx.bom.Stylesheet.createElement(I);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(T){return g;
},_getCellStyle:function(M){return M.style||j;
},_getCellAttributes:function(S){return j;
},_getContentHtml:function(U){return U.value||j;
},_getCellSizeStyle:function(N,O,P,Q){var R=j;

if(qx.bom.client.Feature.CONTENT_BOX){N-=P;
O-=Q;
}R+=a+N+i;
R+=C+O+i;
return R;
},createDataCellHtml:function(K,L){L.push(E,this._getCellClass(K),n,p,K.styleLeft,v,this._getCellSizeStyle(K.styleWidth,K.styleHeight,this._insetX,this._insetY),this._getCellStyle(K),f,this._getCellAttributes(K),y+this._getContentHtml(K),q);
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(j){if(this.getUseAutoAlign()){if(typeof j.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},_getCellClass:function(k){var l=arguments.callee.base.call(this,k);

if(!l){return h;
}var m=this._getStyleFlags(k);

if(m&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){l+=c;
}
if(m&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){l+=d;
}
if(m&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){l+=b;
}return l;
},_getContentHtml:function(i){return qx.bom.String.escape(this._formatValue(i));
},_formatValue:function(n){var p=n.value;

if(p==null){return h;
}
if(typeof p==a){return p;
}else if(typeof p==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
}else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);
}else{o=p;
}return o;
}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(c){return true;
},getCellEditorValue:function(b){return true;
}}});
})();
(function(){var h="",g="Function",f="number",e="qx.ui.table.celleditor.TextField",d="table-editor-textfield",c="appear";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,construct:function(){arguments.callee.base.call(this);
},properties:{validationFunction:{check:g,nullable:true,init:null}},members:{__kx:null,createCellEditor:function(a){var b=new qx.ui.form.TextField;
b.setAppearance(d);
b.originalValue=a.value;

if(a.value===null){a.value=h;
}b.setValue(h+a.value);
b.addListener(c,function(){b.selectAll();
});
return b;
},getCellEditorValue:function(i){var k=i.getValue();
var j=this.getValidationFunction();

if(!this.__kx&&j){k=j(k,i.originalValue);
this.__kx=true;
}
if(typeof i.originalValue==f){k=parseFloat(k);
}return k;
}}});
})();
(function(){var E="qx.event.type.Data",D="visibilityChanged",C="visibilityChangedPre",B="__kE",A="orderChanged",z="__kD",y="__kA",w="widthChanged",v="qx.ui.table.columnmodel.Basic",u="__kF",r="__kB",t="__kC",s="__kz";
qx.Class.define(v,{extend:qx.core.Object,events:{"widthChanged":E,"visibilityChangedPre":E,"visibilityChanged":E,"orderChanged":E},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__ky:null,__kz:null,__kA:null,__kB:null,__kC:null,__kD:null,__kE:null,__kF:null,init:function(b){this.__kC=[];
var e=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var f=this.__kD=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER();
var d=this.__kE=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER();
var c=this.__kF=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY();
this.__kB=[];
this.__kA=[];

for(var h=0;h<b;h++){this.__kC[h]={width:e,headerRenderer:f,dataRenderer:d,editorFactory:c};
this.__kB[h]=h;
this.__kA[h]=h;
}this.__kz=null;

for(var h=0;h<b;h++){var g={col:h,visible:true};
this.fireDataEvent(C,g);
this.fireDataEvent(D,g);
}},getVisibleColumns:function(){return this.__kA!=null?this.__kA:[];
},setColumnWidth:function(n,o){var q=this.__kC[n].width;

if(q!=o){this.__kC[n].width=o;
var p={col:n,newWidth:o,oldWidth:q};
this.fireDataEvent(w,p);
}},getColumnWidth:function(K){return this.__kC[K].width;
},setHeaderCellRenderer:function(L,M){var N=this.__kC[L].headerRenderer;

if(N!==this.__kD){N.dispose();
}this.__kC[L].headerRenderer=M;
},getHeaderCellRenderer:function(bj){return this.__kC[bj].headerRenderer;
},setDataCellRenderer:function(U,V){var W=this.__kC[U].headerRenderer;

if(W!==this.__kE){W.dispose();
}this.__kC[U].dataRenderer=V;
},getDataCellRenderer:function(a){return this.__kC[a].dataRenderer;
},setCellEditorFactory:function(k,l){var m=this.__kC[k].headerRenderer;

if(m!==this.__kF){m.dispose();
}this.__kC[k].editorFactory=l;
},getCellEditorFactory:function(X){return this.__kC[X].editorFactory;
},_getColToXPosMap:function(){if(this.__kz==null){this.__kz={};

for(var I=0;I<this.__kB.length;I++){var H=this.__kB[I];
this.__kz[H]={overX:I};
}
for(var G=0;G<this.__kA.length;G++){var H=this.__kA[G];
this.__kz[H].visX=G;
}}return this.__kz;
},getVisibleColumnCount:function(){return this.__kA!=null?this.__kA.length:0;
},getVisibleColumnAtX:function(J){return this.__kA[J];
},getVisibleX:function(O){return this._getColToXPosMap()[O].visX;
},getOverallColumnCount:function(){return this.__kB.length;
},getOverallColumnAtX:function(F){return this.__kB[F];
},getOverallX:function(Y){return this._getColToXPosMap()[Y].overX;
},isColumnVisible:function(j){return (this._getColToXPosMap()[j].visX!=null);
},setColumnVisible:function(ba,bb){if(bb!=this.isColumnVisible(ba)){if(bb){var bh=this._getColToXPosMap();
var be=bh[ba].overX;

if(be==null){throw new Error("Showing column failed: "+ba+". The column is not added to this TablePaneModel.");
}var bf;

for(var x=be+1;x<this.__kB.length;x++){var bg=this.__kB[x];
var bc=bh[bg].visX;

if(bc!=null){bf=bc;
break;
}}if(bf==null){bf=this.__kA.length;
}this.__kA.splice(bf,0,ba);
}else{var bd=this.getVisibleX(ba);
this.__kA.splice(bd,1);
}this.__kz=null;
if(!this.__ky){var bi={col:ba,visible:bb};
this.fireDataEvent(C,bi);
this.fireDataEvent(D,bi);
}}},moveColumn:function(P,Q){this.__ky=true;
var T=this.__kB[P];
var R=this.isColumnVisible(T);

if(R){this.setColumnVisible(T,false);
}this.__kB.splice(P,1);
this.__kB.splice(Q,0,T);
this.__kz=null;

if(R){this.setColumnVisible(T,true);
}this.__ky=false;
var S={col:T,fromOverXPos:P,toOverXPos:Q};
this.fireDataEvent(A,S);
}},destruct:function(){for(var i=0;i<this.__kC.length;i++){this.__kC[i].headerRenderer.dispose();
this.__kC[i].dataRenderer.dispose();
this.__kC[i].editorFactory.dispose();
}this._disposeFields(r,y,t,s);
this._disposeObjects(z,B,u);
}});
})();
(function(){var p="appear",n="__kI",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",c="Reset column widths",e="changeBehavior",d="user-button",b="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){arguments.callee.base.call(this);
this.__kG=false;
this.__kH=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:e}},members:{__kH:null,__kG:null,__kI:null,_applyBehavior:function(v,w){if(w!=null){w.dispose();
w=null;
}v._setNumColumns(this.getOverallColumnCount());
},init:function(t,u){arguments.callee.base.call(this,t);
if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.__kI=u;
u.addListener(p,this._onappear,this);
u.addListener(l,this._onTableWidthChanged,this);
u.addListener(k,this._onverticalscrollbarchanged,this);
this.addListener(b,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
this.__kI.addListener(m,this._addResetColumnWidthButton,this);
this.getBehavior()._setNumColumns(t);
},getTable:function(){return this.__kI;
},_addResetColumnWidthButton:function(event){var s=event.getData();
var r=s.columnButton;
var q=s.menu;
var o;
o=r.factory(g);
q.add(o);
o=r.factory(d,{text:this.tr(c)});
q.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__kG){return ;
}this.__kG=true;
{};
this.getBehavior().onAppear(this,event,event.getType()!==p);
this.__kI._updateScrollerWidths();
this.__kI._updateScrollBarVisibility();
this.__kG=false;
this.__kH=true;
},_onTableWidthChanged:function(event){if(this.__kG||!this.__kH){return ;
}this.__kG=true;
{};
this.getBehavior().onTableWidthChanged(this,event);
this.__kG=false;
},_onverticalscrollbarchanged:function(event){if(this.__kG||!this.__kH){return ;
}this.__kG=true;
{};
this.getBehavior().onVerticalScrollBarChanged(this,event);
qx.event.Timer.once(function(){if(this.__kI&&!this.__kI.isDisposed()){this.__kI._updateScrollerWidths();
this.__kI._updateScrollBarVisibility();
}},this,0);
this.__kG=false;
},_oncolumnwidthchanged:function(event){if(this.__kG||!this.__kH){return ;
}this.__kG=true;
{};
this.getBehavior().onColumnWidthChanged(this,event);
this.__kG=false;
},_onvisibilitychanged:function(event){if(this.__kG||!this.__kH){return ;
}this.__kG=true;
{};
this.getBehavior().onVisibilityChanged(this,event);
this.__kG=false;
}},destruct:function(){this._disposeFields(n);
}});
})();
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var r=new qx.ui.layout.Grid();
r.setRowFlex(0,1);
r.setColumnFlex(1,1);
r.setColumnFlex(2,1);
this.setLayout(r);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(n,o){if(n){this._showChildControl(h).setContent(n);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(l,m){if(l){this._showChildControl(f).setSource(l);
}else{this._excludeChildControl(f);
}},_applyIcon:function(j,k){if(j){this._showChildControl(i).setSource(j);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(p){var q;

switch(p){case h:q=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(q,{row:0,column:1});
break;
case f:q=new qx.ui.basic.Image(this.getSortIcon());
q.setAnonymous(true);
this._add(q,{row:0,column:2});
break;
case i:q=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(q,{row:0,column:0});
break;
}return q||arguments.callee.base.call(this,p);
}}});
})();
(function(){var f="\n",e="",d=" &nbsp;",c="<br>",b=" ",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(p){return qx.util.StringEscape.escape(p,qx.bom.String.FROM_CHARCODE);
},unescape:function(o){return qx.util.StringEscape.unescape(o,qx.bom.String.TO_CHARCODE);
},fromText:function(k){return qx.bom.String.escape(k).replace(/(  |\n)/g,function(l){var m={"  ":d,"\n":c};
return m[l]||l;
});
},toText:function(j){return qx.bom.String.unescape(j.replace(/\s+|<([^>])+>/gi,function(n){if(/\s+/.test(n)){return b;
}else if(/^<BR|^<br/gi.test(n)){return f;
}else{return e;
}}));
}},defer:function(g,h,i){g.FROM_CHARCODE=qx.lang.Object.invert(g.TO_CHARCODE);
}});
})();
(function(){var h=";",g="&",f="",e="&#",d='X',c='#',b="qx.client",a="qx.util.StringEscape";
qx.Bootstrap.define(a,{statics:{escape:qx.core.Variant.select(b,{"mshtml":function(v,w){var y,A=[];

for(var i=0,l=v.length;i<l;i++){var z=v.charAt(i);
var x=z.charCodeAt(0);

if(w[x]){y=g+w[x]+h;
}else{if(x>0x7F){y=e+x+h;
}else{y=z;
}}A[A.length]=y;
}return A.join(f);
},"default":function(m,n){var p,r=f;

for(var i=0,l=m.length;i<l;i++){var q=m.charAt(i);
var o=q.charCodeAt(0);

if(n[o]){p=g+n[o]+h;
}else{if(o>0x7F){p=e+o+h;
}else{p=q;
}}r+=p;
}return r;
}}),unescape:function(j,k){return j.replace(/&[#\w]+;/gi,function(s){var t=s;
var s=s.substring(1,s.length-1);
var u=k[s];

if(u){t=String.fromCharCode(u);
}else{if(s.charAt(0)==c){if(s.charAt(1).toUpperCase()==d){u=s.substring(2);
if(u.match(/^[0-9A-Fa-f]+$/gi)){t=String.fromCharCode(parseInt(u,16));
}}else{u=s.substring(1);
if(u.match(/^\d+$/gi)){t=String.fromCharCode(parseInt(u,10));
}}}}return t;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(c){},parse:function(b){}}});
})();
(function(){var N="",M="Number",L="-",K="0",J="String",I='(',H="g",G="Boolean",F="$",E="NaN",y='([0-9]{1,3}(?:',D='{0,1}[0-9]{3}){0,})',B="qx.util.format.NumberFormat",x='\\d+){0,1}',w="^",A=".",z="-Infinity",C="Infinity",v='([-+]){0,1}';
qx.Class.define(B,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(P){arguments.callee.base.call(this);
this.__kJ=P;
},statics:{getIntegerInstance:function(){var O=qx.util.format.NumberFormat;

if(O._integerInstance==null){O._integerInstance=new O();
O._integerInstance.setMaximumFractionDigits(0);
}return O._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:M,init:0},maximumIntegerDigits:{check:M,nullable:true},minimumFractionDigits:{check:M,init:0},maximumFractionDigits:{check:M,nullable:true},groupingUsed:{check:G,init:true},prefix:{check:J,init:N},postfix:{check:J,init:N}},members:{__kJ:null,format:function(a){switch(a){case Infinity:return C;
case -Infinity:return z;
case NaN:return E;
}var e=(a<0);

if(e){a=-a;
}
if(this.getMaximumFractionDigits()!=null){var l=Math.pow(10,this.getMaximumFractionDigits());
a=Math.round(a*l)/l;
}var k=String(Math.floor(a)).length;
var b=N+a;
var h=b.substring(0,k);

while(h.length<this.getMinimumIntegerDigits()){h=K+h;
}
if(this.getMaximumIntegerDigits()!=null&&h.length>this.getMaximumIntegerDigits()){h=h.substring(h.length-this.getMaximumIntegerDigits());
}var g=b.substring(k+1);

while(g.length<this.getMinimumFractionDigits()){g+=K;
}
if(this.getMaximumFractionDigits()!=null&&g.length>this.getMaximumFractionDigits()){g=g.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var d=h;
h=N;
var j;

for(j=d.length;j>3;j-=3){h=N+qx.locale.Number.getGroupSeparator(this.__kJ)+d.substring(j-3,j)+h;
}h=d.substring(0,j)+h;
}var f=this.getPrefix()?this.getPrefix():N;
var c=this.getPostfix()?this.getPostfix():N;
var i=f+(e?L:N)+h;

if(g.length>0){i+=N+qx.locale.Number.getDecimalSeparator(this.__kJ)+g;
}i+=c;
return i;
},parse:function(m){var r=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__kJ)+N);
var p=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__kJ)+N);
var n=new RegExp(w+qx.lang.String.escapeRegexpChars(this.getPrefix())+v+y+r+D+I+p+x+qx.lang.String.escapeRegexpChars(this.getPostfix())+F);
var q=n.exec(m);

if(q==null){throw new Error("Number string '"+m+"' does not match the number format");
}var s=(q[1]==L);
var u=q[2];
var t=q[3];
u=u.replace(new RegExp(r,H),N);
var o=(s?L:N)+u;

if(t!=null&&t.length!=0){t=t.replace(new RegExp(p),N);
o+=A+t;
}return parseFloat(o);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(g){return qx.locale.Manager.getInstance().localize(a,[],g);
},getPercentFormat:function(f){return qx.locale.Manager.getInstance().localize(c,[],f);
}}});
})();
(function(){var cP="(\\d\\d?)",cO="",cN="(",cM=")",cL="|",cK="abbreviated",cJ="wide",cI="wildcard",cH="default",cG="literal",cv="'",cu="hour",ct="(\\d\\d?\\d?)",cs="ms",cr="-",cq="quoted_literal",cp='a',co="+",cn="HHmmss",cm="long",cW="sec",cX="HH:mm:ss",cU='z',cV="day",cS="narrow",cT='Z',cQ="min",cR=" ",cY="SSS",da="h",cz="SS",cy="Z",cB="00",cA='K',cD="EEEE",cC="^",cF='y',cE="(\\d\\d(\\d\\d)?)",cx="(\\d\\d)",cw="K",bt="__kK",bu="((\\+|\\-)\\d\\d:?\\d\\d)",bv="a",bw="GMT",bx="S",by="dd",bz="qx.util.format.DateFormat",bA="__kM",bB="H",bC="YYYY",de="__kL",dd="EE",dc="mm",db='h',di='s',dh='A',dg="KK",df="ss",dk='H',dj='S',bV="__kO",bW="0",bT="MMMM",bU="d",ca="([a-zA-Z]+)",cb="HH",bX='k',bY="m",bR='Y',bS='D',bK="kk",bJ="hh",bM="MM",bL="yy",bG="yyyy-MM-dd HH:mm:ss",bF="short",bI='d',bH="unkown",bE="__kN",bD='m',cg=":00",ch="(\\d\\d\\d\\d)",ci="k",cj='M',cc="MMM",cd="s",ce="M",cf='w',ck="EEE",cl="$",bQ="?",bP='E',bO="z",bN="yyyy";
qx.Class.define(bz,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(E,F){arguments.callee.base.call(this);

if(!F){this.__kK=qx.locale.Manager.getInstance().getLocale();
}else{this.__kK=F;
}
if(E!=null){this.__kL=E.toString();
}else{this.__kL=qx.locale.Date.getDateFormat(cm,this.__kK)+cR+qx.locale.Date.getDateTimeFormat(cn,cX,this.__kK);
}},statics:{getDateTimeInstance:function(){var J=qx.util.format.DateFormat;
var I=qx.locale.Date.getDateFormat(cm)+cR+qx.locale.Date.getDateTimeFormat(cn,cX);

if(J._dateInstance==null||J.__kL!=I){J._dateTimeInstance=new J();
}return J._dateTimeInstance;
},getDateInstance:function(){var dy=qx.util.format.DateFormat;
var dx=qx.locale.Date.getDateFormat(bF)+cO;

if(dy._dateInstance==null||dy.__kL!=dx){dy._dateInstance=new dy(dx);
}return dy._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:bG,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__kK:null,__kL:null,__kM:null,__kN:null,__kO:null,__kP:function(a,b){var c=cO+a;

while(c.length<b){c=bW+c;
}return c;
},__kQ:function(bn){var bo=new Date(bn.getTime());
var bp=bo.getDate();

while(bo.getMonth()!=0){bo.setDate(-1);
bp+=bo.getDate()+1;
}return bp;
},__kR:function(bq){return new Date(bq.getTime()+(3-((bq.getDay()+6)%7))*86400000);
},__kS:function(dt){var dv=this.__kR(dt);
var dw=dv.getFullYear();
var du=this.__kR(new Date(dw,0,4));
return Math.floor(1.5+(dv.getTime()-du.getTime())/86400000/7);
},format:function(V){var Y=qx.util.format.DateFormat;
var ba=this.__kK;
var bk=V.getFullYear();
var bd=V.getMonth();
var bm=V.getDate();
var W=V.getDay();
var be=V.getHours();
var bb=V.getMinutes();
var bf=V.getSeconds();
var bg=V.getMilliseconds();
var bi=V.getTimezoneOffset()/60;
this.__kT();
var bh=cO;

for(var i=0;i<this.__kO.length;i++){var bj=this.__kO[i];

if(bj.type==cG){bh+=bj.text;
}else{var X=bj.character;
var bc=bj.size;
var bl=bQ;

switch(X){case cF:case bR:if(bc==2){bl=this.__kP(bk%100,2);
}else if(bc==4){bl=bk;
}break;
case bS:bl=this.__kP(this.__kQ(V),bc);
break;
case bI:bl=this.__kP(bm,bc);
break;
case cf:bl=this.__kP(this.__kS(V),bc);
break;
case bP:if(bc==2){bl=qx.locale.Date.getDayName(cS,W,ba);
}else if(bc==3){bl=qx.locale.Date.getDayName(cK,W,ba);
}else if(bc==4){bl=qx.locale.Date.getDayName(cJ,W,ba);
}break;
case cj:if(bc==1||bc==2){bl=this.__kP(bd+1,bc);
}else if(bc==3){bl=qx.locale.Date.getMonthName(cK,bd,ba);
}else if(bc==4){bl=qx.locale.Date.getMonthName(cJ,bd,ba);
}break;
case cp:bl=(be<12)?qx.locale.Date.getAmMarker(ba):qx.locale.Date.getPmMarker(ba);
break;
case dk:bl=this.__kP(be,bc);
break;
case bX:bl=this.__kP((be==0)?24:be,bc);
break;
case cA:bl=this.__kP(be%12,bc);
break;
case db:bl=this.__kP(((be%12)==0)?12:(be%12),bc);
break;
case bD:bl=this.__kP(bb,bc);
break;
case di:bl=this.__kP(bf,bc);
break;
case dj:bl=this.__kP(bg,bc);
break;
case cU:if(bc==1){bl=bw+((bi<0)?cr:co)+this.__kP(bi)+cg;
}else if(bc==2){bl=Y.MEDIUM_TIMEZONE_NAMES[bi];
}else if(bc==3){bl=Y.FULL_TIMEZONE_NAMES[bi];
}break;
case cT:bl=((bi<0)?cr:co)+this.__kP(bi,2)+cB;
}bh+=bl;
}}return bh;
},parse:function(dl){this.__kU();
var ds=this.__kM.regex.exec(dl);

if(ds==null){throw new Error("Date string '"+dl+"' does not match the date format: "+this.__kL);
}var dm={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var dn=1;

for(var i=0;i<this.__kM.usedRules.length;i++){var dq=this.__kM.usedRules[i];
var dp=ds[dn];

if(dq.field!=null){dm[dq.field]=parseInt(dp,10);
}else{dq.manipulator(dm,dp);
}dn+=(dq.groups==null)?1:dq.groups;
}var dr=new Date(dm.year,dm.month,dm.day,(dm.ispm)?(dm.hour+12):dm.hour,dm.min,dm.sec,dm.ms);

if(dm.month!=dr.getMonth()||dm.year!=dr.getFullYear()){throw new Error("Error parsing date '"+dl+"': the value for day or month is too large");
}return dr;
},__kT:function(){if(this.__kO!=null){return;
}this.__kO=[];
var O;
var M=0;
var Q=cO;
var K=this.__kL;
var N=cH;
var i=0;

while(i<K.length){var P=K.charAt(i);

switch(N){case cq:if(P==cv){if(i+1>=K.length){i++;
break;
}var L=K.charAt(i+1);

if(L==cv){Q+=P;
i++;
}else{i++;
N=bH;
}}else{Q+=P;
i++;
}break;
case cI:if(P==O){M++;
i++;
}else{this.__kO.push({type:cI,character:O,size:M});
O=null;
M=0;
N=cH;
}break;
default:if((P>=cp&&P<=cU)||(P>=dh&&P<=cT)){O=P;
N=cI;
}else if(P==cv){if(i+1>=K.length){Q+=P;
i++;
break;
}var L=K.charAt(i+1);

if(L==cv){Q+=P;
i++;
}i++;
N=cq;
}else{N=cH;
}
if(N!=cH){if(Q.length>0){this.__kO.push({type:cG,text:Q});
Q=cO;
}}else{Q+=P;
i++;
}break;
}}if(O!=null){this.__kO.push({type:cI,character:O,size:M});
}else if(Q.length>0){this.__kO.push({type:cG,text:Q});
}},__kU:function(){if(this.__kM!=null){return ;
}var dE=this.__kL;
this.__kV();
this.__kT();
var dK=[];
var dG=cC;

for(var dC=0;dC<this.__kO.length;dC++){var dL=this.__kO[dC];

if(dL.type==cG){dG+=qx.lang.String.escapeRegexpChars(dL.text);
}else{var dD=dL.character;
var dH=dL.size;
var dF;

for(var dM=0;dM<this.__kN.length;dM++){var dI=this.__kN[dM];

if(dD==dI.pattern.charAt(0)&&dH==dI.pattern.length){dF=dI;
break;
}}if(dF==null){var dJ=cO;

for(var i=0;i<dH;i++){dJ+=dD;
}throw new Error("Malformed date format: "+dE+". Wildcard "+dJ+" is not supported");
}else{dK.push(dF);
dG+=dF.regex;
}}}dG+=cl;
var dB;

try{dB=new RegExp(dG);
}catch(d){throw new Error("Malformed date format: "+dE);
}this.__kM={regex:dB,"usedRules":dK,pattern:dG};
},__kV:function(){var p=qx.util.format.DateFormat;

if(this.__kN!=null){return ;
}this.__kN=[];
var B=function(dP,dQ){dQ=parseInt(dQ,10);

if(dQ<p.ASSUME_YEAR_2000_THRESHOLD){dQ+=2000;
}else if(dQ<100){dQ+=1900;
}dP.year=dQ;
};
var r=function(dz,dA){dz.month=parseInt(dA,10)-1;
};
var s=function(j,k){j.ispm=(k==p.PM_MARKER);
};
var w=function(br,bs){br.hour=parseInt(bs,10)%24;
};
var q=function(C,D){C.hour=parseInt(D,10)%12;
};
var z=function(G,H){return;
};
var x=qx.locale.Date.getMonthNames(cK,this.__kK);

for(var i=0;i<x.length;i++){x[i]=qx.lang.String.escapeRegexpChars(x[i].toString());
}var y=function(dN,dO){dO=qx.lang.String.escapeRegexpChars(dO);
dN.month=x.indexOf(dO);
};
var m=qx.locale.Date.getMonthNames(cJ,this.__kK);

for(var i=0;i<m.length;i++){m[i]=qx.lang.String.escapeRegexpChars(m[i].toString());
}var l=function(g,h){h=qx.lang.String.escapeRegexpChars(h);
g.month=m.indexOf(h);
};
var o=qx.locale.Date.getDayNames(cS,this.__kK);

for(var i=0;i<o.length;i++){o[i]=qx.lang.String.escapeRegexpChars(o[i].toString());
}var u=function(T,U){U=qx.lang.String.escapeRegexpChars(U);
T.month=o.indexOf(U);
};
var A=qx.locale.Date.getDayNames(cK,this.__kK);

for(var i=0;i<A.length;i++){A[i]=qx.lang.String.escapeRegexpChars(A[i].toString());
}var t=function(R,S){S=qx.lang.String.escapeRegexpChars(S);
R.month=A.indexOf(S);
};
var v=qx.locale.Date.getDayNames(cJ,this.__kK);

for(var i=0;i<v.length;i++){v[i]=qx.lang.String.escapeRegexpChars(v[i].toString());
}var n=function(e,f){f=qx.lang.String.escapeRegexpChars(f);
e.month=v.indexOf(f);
};
this.__kN.push({pattern:bC,regex:ch,manipulator:B});
this.__kN.push({pattern:bN,regex:cE,groups:2,manipulator:B});
this.__kN.push({pattern:bL,regex:cx,manipulator:B});
this.__kN.push({pattern:ce,regex:cP,manipulator:r});
this.__kN.push({pattern:bM,regex:cP,manipulator:r});
this.__kN.push({pattern:cc,regex:cN+x.join(cL)+cM,manipulator:y});
this.__kN.push({pattern:bT,regex:cN+m.join(cL)+cM,manipulator:l});
this.__kN.push({pattern:by,regex:cP,field:cV});
this.__kN.push({pattern:bU,regex:cP,field:cV});
this.__kN.push({pattern:dd,regex:cN+o.join(cL)+cM,manipulator:u});
this.__kN.push({pattern:ck,regex:cN+A.join(cL)+cM,manipulator:t});
this.__kN.push({pattern:cD,regex:cN+v.join(cL)+cM,manipulator:n});
this.__kN.push({pattern:bv,regex:cN+p.AM_MARKER+cL+p.PM_MARKER+cM,manipulator:s});
this.__kN.push({pattern:cb,regex:cP,field:cu});
this.__kN.push({pattern:bB,regex:cP,field:cu});
this.__kN.push({pattern:bK,regex:cP,manipulator:w});
this.__kN.push({pattern:ci,regex:cP,manipulator:w});
this.__kN.push({pattern:dg,regex:cP,field:cu});
this.__kN.push({pattern:cw,regex:cP,field:cu});
this.__kN.push({pattern:bJ,regex:cP,manipulator:q});
this.__kN.push({pattern:da,regex:cP,manipulator:q});
this.__kN.push({pattern:dc,regex:cP,field:cQ});
this.__kN.push({pattern:bY,regex:cP,field:cQ});
this.__kN.push({pattern:df,regex:cP,field:cW});
this.__kN.push({pattern:cd,regex:cP,field:cW});
this.__kN.push({pattern:cY,regex:ct,field:cs});
this.__kN.push({pattern:cz,regex:ct,field:cs});
this.__kN.push({pattern:bx,regex:ct,field:cs});
this.__kN.push({pattern:cy,regex:bu,manipulator:z});
this.__kN.push({pattern:bO,regex:ca,manipulator:z});
}},destruct:function(){this._disposeFields(de,bt,bV,bA,bE);
}});
})();
(function(){var k="_",j="thu",h="sat",g="cldr_day_",f="cldr_month_",e="wed",d="fri",c="tue",b="mon",a="sun",A="short",z="HH:mm",y="HHmmsszz",x="HHmm",w="HHmmss",v="cldr_date_format_",u="HH:mm:ss zz",t="full",s="cldr_pm",r="long",p="medium",q="cldr_am",n="qx.locale.Date",o="cldr_date_time_format_",l="cldr_time_format_",m="HH:mm:ss";
qx.Class.define(n,{statics:{__kW:qx.locale.Manager.getInstance(),getAmMarker:function(R){return this.__kW.localize(q,[],R);
},getPmMarker:function(H){return this.__kW.localize(s,[],H);
},getDayNames:function(length,bc){{};
var bd=[a,b,c,e,j,d,h];
var bf=[];

for(var i=0;i<bd.length;i++){var be=g+length+k+bd[i];
bf.push(this.__kW.localize(be,[],bc));
}return bf;
},getDayName:function(length,N,O){{};
var P=[a,b,c,e,j,d,h];
var Q=g+length+k+P[N];
return this.__kW.localize(Q,[],O);
},getMonthNames:function(length,Y){{};
var ba=[];

for(var i=0;i<12;i++){var bb=f+length+k+(i+1);
ba.push(this.__kW.localize(bb,[],Y));
}return ba;
},getMonthName:function(length,B,C){{};
var D=f+length+k+(B+1);
return this.__kW.localize(D,[],C);
},getDateFormat:function(K,L){{};
var M=v+K;
return this.__kW.localize(M,[],L);
},getDateTimeFormat:function(bo,bp,bq){var bs=o+bo;
var br=this.__kW.localize(bs,[],bq);

if(br==bs){br=bp;
}return br;
},getTimeFormat:function(bk,bl){{};
var bn=l+bk;
var bm=this.__kW.localize(bn,[],bl);

if(bm!=bn){return bm;
}
switch(bk){case A:case p:return qx.locale.Date.getDateTimeFormat(x,z);
case r:return qx.locale.Date.getDateTimeFormat(w,m);
case t:return qx.locale.Date.getDateTimeFormat(y,u);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(V){var W={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var X=qx.locale.Date._getTerritory(V);
return W[X]!=null?W[X]:1;
},getWeekendStart:function(E){var G={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var F=qx.locale.Date._getTerritory(E);
return G[F]!=null?G[F]:6;
},getWeekendEnd:function(S){var T={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var U=qx.locale.Date._getTerritory(S);
return T[U]!=null?T[U]:0;
},isWeekend:function(bg,bh){var bj=qx.locale.Date.getWeekendStart(bh);
var bi=qx.locale.Date.getWeekendEnd(bh);

if(bi>bj){return ((bg>=bj)&&(bg<=bi));
}else{return ((bg>=bj)||(bg<=bi));
}},_getTerritory:function(I){if(I){var J=I.split(k)[1]||I;
}else{J=this.__kW.getTerritory()||this.__kW.getLanguage();
}return J.toUpperCase();
}}});
})();
(function(){var t="none",s="qx.client",r="color",q="qx.event.type.Data",p="readonly",o="off",n="changeValue",m="readOnly",l="text",k="_applyTextAlign",Q="Boolean",P="gecko",O="A",N="string",M="change",L="textAlign",K="center",J="disabled",I="_applyReadOnly",H="resize",A="qx.ui.form.AbstractField",B="transparent",y="spellcheck",z="on",w="false",x="right",u="abstract",v="block",C="changeName",D="webkit",F="String",E="qxKeepFocus",G="left";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:qx.ui.form.IFormElement,type:u,construct:function(a){arguments.callee.base.call(this);

if(a!=null){this.setValue(a);
}this.getContentElement().addListener(M,this._onChangeContent,this);
},events:{"input":q,"changeValue":q},properties:{name:{check:F,nullable:true,event:C},textAlign:{check:[G,K,x],nullable:true,themeable:true,apply:k},readOnly:{check:Q,apply:I,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_createInputElement:function(){return new qx.html.Input(l);
},_createContentElement:function(){var R=this._createInputElement();
if(qx.core.Variant.isSet(s,P)){R.setAttribute(y,w);
}R.setStyles({"border":t,"padding":0,"margin":0,"display":v,"background":B,"outline":t,"appearance":t,"autoComplete":o});
if(qx.core.Variant.isSet(s,D)){R.setStyle(H,t);
}return R;
},_applyEnabled:function(ba,bb){arguments.callee.base.call(this,ba,bb);
this.getContentElement().setAttribute(J,ba===false);
},__kX:{width:16,height:16},_getContentHint:function(){return {width:this.__kX.width*10,height:this.__kX.height||16};
},_applyFont:function(b,c){var d;

if(b){var f=qx.theme.manager.Font.getInstance().resolve(b);
d=f.getStyles();
}else{d=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(d);
if(b){this.__kX=qx.bom.Label.getTextSize(O,d);
}else{delete this.__kX;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(S,T){if(S){this.getContentElement().setStyle(r,qx.theme.manager.Color.getInstance().resolve(S));
}else{this.getContentElement().removeStyle(r);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAll();
},_getTextSize:function(){return this.__kX;
},setValue:function(X){if(typeof X===N||X instanceof String){var Y=this.getContentElement();

if(Y.getValue()!=X){Y.setValue(X);
this.fireNonBubblingEvent(n,qx.event.type.Data,[X]);
}return X;
}throw new Error("Invalid value type: "+X);
},getValue:function(){return this.getContentElement().getValue();
},_onChangeContent:function(e){this.fireNonBubblingEvent(n,qx.event.type.Data,[e.getData()]);
},getSelection:function(){return this.getContentElement().getSelection();
},getSelectionLength:function(){return this.getContentElement().getSelectionLength();
},setSelection:function(i,j){this.getContentElement().setSelection(i,j);
},clearSelection:function(){this.getContentElement().clearSelection();
},selectAll:function(){this.setSelection(0);
},_applyTextAlign:function(g,h){this.getContentElement().setStyle(L,g);
},_applyReadOnly:function(U,V){var W=this.getContentElement();
W.setAttribute(m,U);
W.setAttribute(E,U?z:o);

if(U){this.addState(p);
this.setFocusable(false);
}else{this.removeState(p);
this.setFocusable(true);
}}}});
})();
(function(){var j="input",i="text",h="qx.ui.form.TextField",g="",f="_applyMaxLength",d="textfield",c="Integer",b="maxLength",a="qx.event.type.Data";
qx.Class.define(h,{extend:qx.ui.form.AbstractField,properties:{maxLength:{check:c,apply:f,nullable:true},appearance:{refine:true,init:d},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},events:{"input":a},members:{_createInputElement:function(){var m=new qx.html.Input(i);
m.addListener(j,this._onHtmlInput,this);
return m;
},_onHtmlInput:function(e){this.fireDataEvent(j,e.getData());
},_applyMaxLength:function(k,l){this.getContentElement().setAttribute(b,k==null?g:k);
}}});
})();
(function(){var g="wrap",f="value",e="textarea",d="",c="input",b="qx.html.Input",a="select";
qx.Class.define(b,{extend:qx.html.Element,construct:function(h){arguments.callee.base.call(this);
this.__kY=h;
if(h===a||h===e){this.setNodeName(h);
}else{this.setNodeName(c);
}},members:{__kY:null,_createDomElement:function(){return qx.bom.Input.create(this.__kY);
},_applyProperty:function(name,i){arguments.callee.base.call(this,name,i);
var j=this.getDomElement();

if(name===f){qx.bom.Input.setValue(j,i);
}else if(name===g){qx.bom.Input.setWrap(j,i);
}},setValue:function(l){var m=this.getDomElement();

if(m){if(m.value!=l){qx.bom.Input.setValue(m,l);
}}else{this._setProperty(f,l);
}return this;
},getValue:function(){var n=this.getDomElement();

if(n){return qx.bom.Input.getValue(n);
}return this._getProperty(f)||d;
},setWrap:function(k){if(this.__kY===e){this._setProperty(g,k);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__kY===e){return this._getProperty(g);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var s="change",r="input",q="checkbox",p="radio",n="textarea",m="text",k="qx.client",j="propertychange",h="keypress",g="select-multiple",c="checked",f="value",d="select",b="qx.event.handler.Input",a="Enter";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(t,u){var v=t.tagName.toLowerCase();

if(u===r&&(v===r||v===n)){return true;
}
if(u===s&&(v===r||v===n||v===d)){return true;
}return false;
},registerEvent:qx.core.Variant.select(k,{"mshtml":function(E,F,G){if(!E.__la){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===m||H===n||I===q||I===p){qx.bom.Event.addNativeListener(E,j,this._onPropertyWrapper);
}
if(I!==q&&I!==p){qx.bom.Event.addNativeListener(E,s,this._onChangeValueWrapper);
}this.__lb(E,I);
E.__la=true;
}},"default":function(Q,R,S){if(R===r){qx.bom.Event.addNativeListener(Q,r,this._onInputWrapper);
}else if(R===s){if(Q.type===p||Q.type===q){qx.bom.Event.addNativeListener(Q,s,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(Q,s,this._onChangeValueWrapper);
}this.__lb(Q,Q.type);
}}}),unregisterEvent:qx.core.Variant.select(k,{"mshtml":function(M,N){if(M.__la){var O=M.tagName.toLowerCase();
var P=M.type;

if(P===m||O===n||P===q||P===p){qx.bom.Event.removeNativeListener(M,j,this._onPropertyWrapper);
}
if(P!==q&&P!==p){qx.bom.Event.removeNativeListener(M,s,this._onChangeValueWrapper);
}
try{delete M.__la;
}catch(J){M.__la=null;
}}},"default":function(C,D){if(D===r){qx.bom.Event.removeNativeListener(C,r,this._onInputWrapper);
}else if(D===s){if(C.type===p||C.type===q){qx.bom.Event.removeNativeListener(C,s,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(C,s,this._onChangeValueWrapper);
}}}}),__lb:qx.core.Variant.select(k,{"mshtml|opera":function(K,L){if(L===m){qx.event.Registration.addListener(K,h,function(e){if(e.getKeyIdentifier()===a){qx.event.Registration.fireEvent(K,s,qx.event.type.Data,[K.value]);
}});
}},"default":function(x,y){}}),_onInput:function(e){var V=e.target;
qx.event.Registration.fireEvent(V,r,qx.event.type.Data,[V.value]);
},_onChangeValue:function(e){var U=e.target||e.srcElement;
var T=U.value;

if(U.type===g){var T=[];

for(var i=0,o=U.options,l=o.length;i<l;i++){if(o[i].selected){T.push(o[i].value);
}}}qx.event.Registration.fireEvent(U,s,qx.event.type.Data,[T]);
},_onChangeChecked:function(e){var w=e.target;

if(w.type===p){if(w.checked){qx.event.Registration.fireEvent(w,s,qx.event.type.Data,[w.value]);
}}else{qx.event.Registration.fireEvent(w,s,qx.event.type.Data,[w.checked]);
}},_onProperty:qx.core.Variant.select(k,{"mshtml":function(e){var A=e.target||e.srcElement;
var B=e.propertyName;

if(B===f&&(A.type===m||A.tagName.toLowerCase()===n)){if(!A.__inValueSet){qx.event.Registration.fireEvent(A,r,qx.event.type.Data,[A.value]);
}}else if(B===c){if(A.type===q){qx.event.Registration.fireEvent(A,s,qx.event.type.Data,[A.checked]);
}else if(A.checked){qx.event.Registration.fireEvent(A,s,qx.event.type.Data,[A.value]);
}}},"default":function(){}})},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var F="",E="select",D="soft",C="off",B="qx.client",A="wrap",z="text",y="mshtml",x="number",w="checkbox",p="select-one",v="input",s="option",o="value",n="radio",r="qx.bom.Input",q="nowrap",t="textarea",m="auto",u="normal";
qx.Class.define(r,{statics:{__lc:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(g,h,j){{};
var h=h?qx.lang.Object.clone(h):{};
var k;

if(g===t||g===E){k=g;
}else{k=v;
h.type=g;
}return qx.bom.Element.create(k,h,j);
},setValue:function(G,H){var L=G.nodeName.toLowerCase();
var M=G.type;
var Array=qx.lang.Array;

if(typeof H===x){H+=F;
}
if((M===w||M===n)){if(Array.isArray(H)){G.checked=Array.contains(H,G.value);
}else{G.checked=G.value==H;
}}else if(L===E){var I=Array.isArray(H);
var N=G.options;
var J,K;

for(var i=0,l=N.length;i<l;i++){J=N[i];
K=J.getAttribute(o);

if(K==null){K=J.text;
}J.selected=I?Array.contains(H,K):H==K;
}
if(I&&H.length==0){G.selectedIndex=-1;
}}else if(M===z&&qx.core.Variant.isSet(B,y)){G.__ld=true;
G.value=H;
G.__ld=null;
}else{G.value=H;
}},getValue:function(Q){var W=Q.nodeName.toLowerCase();

if(W===s){return (Q.attributes.value||{}).specified?Q.value:Q.text;
}
if(W===E){var R=Q.selectedIndex;
if(R<0){return null;
}var X=[];
var ba=Q.options;
var Y=Q.type==p;
var V=qx.bom.Input;
var U;
for(var i=Y?R:0,T=Y?R+1:ba.length;i<T;i++){var S=ba[i];

if(S.selected){U=V.getValue(S);
if(Y){return U;
}X.push(U);
}}return X;
}else{return (Q.value||F).replace(/\r/g,F);
}},setWrap:qx.core.Variant.select(B,{"mshtml":function(O,P){O.wrap=P?D:C;
},"gecko":function(a,b){var d=b?D:C;
var c=b?F:m;
a.setAttribute(A,d);
a.style.overflow=c;
},"default":function(e,f){e.style.whiteSpace=f?u:q;
}})}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){arguments.callee.base.call(this);
this.setColumnWidth(e);
},members:{__le:null,renderLayout:function(f,top,g,h){this.__le=g;
},getComputedWidth:function(){return this.__le;
},setColumnWidth:function(i){var j=null;
var k=null;

if(typeof i==c){this.setWidth(i);
}else if(typeof i==d){if(i==e){j=1;
}else{var l=i.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(l){if(l[1]==b){j=parseFloat(i);
}else{k=i;
}}}}this.setLayoutProperties({flex:j,width:k});
}},settings:{"qx.tableResizeDebug":false}});
})();
(function(){var q="qx.ui.table.columnmodel.resizebehavior.Abstract",p="abstract";
qx.Class.define(q,{type:p,extend:qx.core.Object,members:{_setNumColumns:function(d){throw new Error("_setNumColumns is abstract");
},onAppear:function(n,event,o){throw new Error("onAppear is abstract");
},onTableWidthChanged:function(a,event){throw new Error("onTableWidthChanged is abstract");
},onVerticalScrollBarChanged:function(b,event){throw new Error("onVerticalScrollBarChanged is abstract");
},onColumnWidthChanged:function(c,event){throw new Error("onColumnWidthChanged is abstract");
},onVisibilityChanged:function(e,event){throw new Error("onVisibilityChanged is abstract");
},_getAvailableWidth:function(f){var m=f.getTable();
var g=m._getPaneScrollerArr();
var l=g[0].getLayoutParent().getBounds().width;
var h=g[g.length-1];

if(h.getVerticalScrollBarVisible()){var j=h.getTopRightWidget();
var i=j&&j.getBounds()?j.getBounds().width:0;
var k=h.getVerticalScrollBarWidth();
l-=Math.max(i,k);
}return l;
}}});
})();
(function(){var D="__lg",C="Function",B="Boolean",A="minWidth",z="width",y="qx.ui.table.columnmodel.resizebehavior.Default",x="__lf",w="maxWidth";
qx.Class.define(y,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){arguments.callee.base.call(this);
this.__lf=[];
this.__lg=new qx.ui.layout.HBox();
this.__lg.connectToWidget(this);
},properties:{newResizeBehaviorColumnData:{check:C,init:function(g){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:B,init:false}},members:{__lg:null,__lh:null,__lf:null,__li:false,setWidth:function(a,b){if(a>=this.__lf.length){throw new Error("Column number out of range");
}this.__lf[a].setColumnWidth(b);
},setMinWidth:function(u,v){if(u>=this.__lf.length){throw new Error("Column number out of range");
}this.__lf[u].setMinWidth(v);
},setMaxWidth:function(c,d){if(c>=this.__lf.length){throw new Error("Column number out of range");
}this.__lf[c].setMaxWidth(d);
},set:function(X,Y){for(var ba in Y){switch(ba){case z:this.setWidth(X,Y[ba]);
break;
case A:this.setMinWidth(X,Y[ba]);
break;
case w:this.setMaxWidth(X,Y[ba]);
break;
default:throw new Error("Unknown property: "+ba);
}}},onAppear:function(j,event,k){if(k===true||!this.__li||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth(j,event);
this.__li=true;
}},onTableWidthChanged:function(e,event){this._computeColumnsFlexWidth(e,event);
},onVerticalScrollBarChanged:function(f,event){this._computeColumnsFlexWidth(f,event);
},onColumnWidthChanged:function(h,event){this._extendNextColumn(h,event);
},onVisibilityChanged:function(E,event){var F=event.getData();
if(F.visible){this._computeColumnsFlexWidth(E,event);
return;
}this._extendLastColumn(E,event);
},_setNumColumns:function(V){var W=this.__lf;
if(V<=W.length){W.splice(V,W.length);
return;
}for(var i=W.length;i<V;i++){W[i]=this.getNewResizeBehaviorColumnData()();
W[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__lh;
},_computeColumnsFlexWidth:function(G,event){{};
var I=G.getVisibleColumns();
var L=I.length;
var H=this.__lf;
var i,l;
var M=[];

for(i=0;i<L;i++){M.push(H[I[i]]);
}this.__lh=M;
this.__lg.invalidateChildrenCache();
var J=this._getAvailableWidth(G);
this.__lg.renderLayout(J,100);
for(i=0,l=M.length;i<l;i++){var K=M[i].getComputedWidth();
G.setColumnWidth(I[i],K);
{};
}},_extendNextColumn:function(N,event){var U=event.getData();
var P=N.getVisibleColumns();
var R=this._getAvailableWidth(N);
var O=P.length;
if(U.newWidth>U.oldWidth){return ;
}var i;
var Q;
var T=0;

for(i=0;i<O;i++){T+=N.getColumnWidth(P[i]);
}if(T<R){for(i=0;i<P.length;i++){if(P[i]==U.col){Q=P[i+1];
break;
}}
if(Q){var S=(R-(T-N.getColumnWidth(Q)));
N.setColumnWidth(Q,S);
}}},_extendLastColumn:function(m,event){var t=event.getData();
if(t.visible){return;
}var o=m.getVisibleColumns();
if(o.length==0){return;
}var p=this._getAvailableWidth(m);
var n=o.length;
var i;
var r;
var s=0;

for(i=0;i<n;i++){s+=m.getColumnWidth(o[i]);
}if(s<p){r=o[o.length-1];
var q=(p-(s-m.getColumnWidth(r)));
m.setColumnWidth(r,q);
}}},destruct:function(){this._disposeFields(x);
this._disposeObjects(D);
}});
})();
(function(){var cu="Function",ct="Boolean",cs="column-button",cr="qx.event.type.Data",cq="statusbar",cp="qx.ui.table.pane.CellEvent",co="PageUp",cn="changeLocale",cm="changeSelection",cl="qx.dynlocale",dF="Enter",dE="on",dD="_applyTableColumnModel",dC="_applyStatusBarVisible",dB="blur",dA="qx.ui.table.Table",dz="columnVisibilityMenuCreateEnd",dy="changeVisible",dx="__lj",dw="verticalScrollBarChanged",cB="_applyMetaColumnCounts",cC="one of one row",cz="focus",cA="changeDataRowRenderer",cx="changeHeaderCellHeight",cy="Escape",cv="A",cw="changeSelectionModel",cJ="Left",cK="_tableModel",cX="Down",cT="Integer",dg="_applyHeaderCellHeight",db="visibilityChanged",ds="qx.ui.table.ITableModel",dl="orderChanged",cO="_applySelectionModel",dv="_columnVisibilityMenu",du="menu",dt="_applyAdditionalStatusBarText",cN="_applyFocusCellOnMouseMove",cQ="table",cS="_applyColumnVisibilityButtonVisible",cV="changeTableModel",cY="qx.event.type.Event",dc="End",di="Object",dn="_applyShowCellFocusIndicator",cD="resize",cE="__lk",cP="changeScrollY",df="_applyTableModel",de="menu-button",dd="_applyKeepFirstVisibleRowComplete",dk="qx.ui.table.columnmodel.Basic",dj="Home",da="_applyRowHeight",dh="F2",ci="Up",dm="tableWidthChanged",cF="columnVisibilityMenuCreateStart",cG="%1 rows",cU="qx.ui.table.selection.Model",cj="one row",ck="PageDown",cM="%1 of %2 rows",cH="changeTableColumnModel",cI="keypress",cL="changeRowHeight",cW="Number",dq="widthChanged",dp="qx.ui.table.IRowRenderer",cR="Right",dr="Space";
qx.Class.define(dA,{extend:qx.ui.core.Widget,construct:function(bG,bH){arguments.callee.base.call(this);
if(!bH){bH={};
}
if(bH.selectionManager){this.setNewSelectionManager(bH.selectionManager);
}
if(bH.selectionModel){this.setNewSelectionModel(bH.selectionModel);
}
if(bH.tableColumnModel){this.setNewTableColumnModel(bH.tableColumnModel);
}
if(bH.tablePane){this.setNewTablePane(bH.tablePane);
}
if(bH.tablePaneHeader){this.setNewTablePaneHeader(bH.tablePaneHeader);
}
if(bH.tablePaneScroller){this.setNewTablePaneScroller(bH.tablePaneScroller);
}
if(bH.tablePaneModel){this.setNewTablePaneModel(bH.tablePaneModel);
}
if(bH.columnMenu){this.setNewColumnMenu(bH.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__lj=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__lj,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__lk=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableColumnModel(this.getNewTableColumnModel()(this));
if(bG!=null){this.setTableModel(bG);
}this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(cI,this._onKeyPress);
this.addListener(cz,this._onFocusChanged);
this.addListener(dB,this._onFocusChanged);
var bI=new qx.ui.core.Widget().set({height:0});
this._add(bI);
bI.addListener(cD,this._onResize,this);
this.__ll=null;
this.__lm=null;
if(qx.core.Variant.isSet(cl,dE)){qx.locale.Manager.getInstance().addListener(cn,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":cr,"columnVisibilityMenuCreateEnd":cr,"tableWidthChanged":cY,"verticalScrollBarChanged":cr,"cellClick":cp,"cellDblclick":cp,"cellContextmenu":cp,"dataEdited":cr},statics:{__ln:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:cQ},focusable:{refine:true,init:true},selectionModel:{check:cU,apply:cO,event:cw},tableModel:{check:ds,apply:df,event:cV,nullable:true},tableColumnModel:{check:dk,apply:dD,event:cH},rowHeight:{check:cW,init:20,apply:da,event:cL},forceLineHeight:{check:ct,init:true},headerCellHeight:{check:cT,init:16,apply:dg,event:cx},statusBarVisible:{check:ct,init:true,apply:dC},additionalStatusBarText:{nullable:true,init:null,apply:dt},columnVisibilityButtonVisible:{check:ct,init:true,apply:cS},metaColumnCounts:{check:di,apply:cB},focusCellOnMouseMove:{check:ct,init:false,apply:cN},showCellFocusIndicator:{check:ct,init:true,apply:dn},keepFirstVisibleRowComplete:{check:ct,init:true,apply:dd},alwaysUpdateCells:{check:ct,init:false},dataRowRenderer:{check:dp,init:null,nullable:true,event:cA},modalCellEditorPreOpenFunction:{check:cu,init:null,nullable:true},newColumnMenu:{check:cu,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:cu,init:function(bf){return new qx.ui.table.selection.Manager(bf);
}},newSelectionModel:{check:cu,init:function(P){return new qx.ui.table.selection.Model(P);
}},newTableColumnModel:{check:cu,init:function(bg){return new qx.ui.table.columnmodel.Basic(bg);
}},newTablePane:{check:cu,init:function(b){return new qx.ui.table.pane.Pane(b);
}},newTablePaneHeader:{check:cu,init:function(A){return new qx.ui.table.pane.Header(A);
}},newTablePaneScroller:{check:cu,init:function(a){return new qx.ui.table.pane.Scroller(a);
}},newTablePaneModel:{check:cu,init:function(bY){return new qx.ui.table.pane.Model(bY);
}}},members:{__ll:null,__lm:null,__lj:null,__lk:null,__lo:null,__lp:null,__lq:null,__lr:null,_createChildControlImpl:function(eL){var eM;

switch(eL){case cq:eM=new qx.ui.basic.Label();
eM.set({allowGrowX:true});
this._add(eM);
break;
case cs:eM=this.getNewColumnMenu()();
eM.set({focusable:false});
eM.setMenu(eM.factory(du,{table:this}));
break;
}return eM||arguments.callee.base.call(this,eL);
},_applySelectionModel:function(Q,R){this.__lk.setSelectionModel(Q);

if(R!=null){R.removeListener(cm,this._onSelectionChanged,this);
}Q.addListener(cm,this._onSelectionChanged,this);
},_applyRowHeight:function(ej,ek){if(!this.getTableModel()){return;
}var el=this._getPaneScrollerArr();

for(var i=0;i<el.length;i++){el[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(bs,bt){var bu=this._getPaneScrollerArr();

for(var i=0;i<bu.length;i++){bu[i].getHeader().setHeight(bs);
}},_applyTableModel:function(bN,bO){this.getTableColumnModel().init(bN.getColumnCount(),this);

if(bO!=null){bO.removeListener(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED,this._onTableModelMetaDataChanged,this);
bO.removeListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,this._onTableModelDataChanged,this);
}bN.addListener(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED,this._onTableModelMetaDataChanged,this);
bN.addListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._initColumnMenu();
this._updateTableData(0,bN.getRowCount(),0,bN.getColumnCount());
this._onTableModelMetaDataChanged();
},_applyTableColumnModel:function(dT,dU){if(dU!=null){throw new Error("The table column model can only be set once per table.");
}dT.addListener(db,this._onColVisibilityChanged,this);
dT.addListener(dq,this._onColWidthChanged,this);
dT.addListener(dl,this._onColOrderChanged,this);
var dW=this.getTableModel();
if(dW){dT.init(dW.getColumnCount(),this);
}var dV=this._getPaneScrollerArr();

for(var i=0;i<dV.length;i++){var dX=dV[i];
var dY=dX.getTablePaneModel();
dY.setTableColumnModel(dT);
}},_applyStatusBarVisible:function(G,H){if(G){this._showChildControl(cq);
}else{this._excludeChildControl(cq);
}
if(G){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(T,U){this.__lo=T;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(bS,bT){if(bS){this._showChildControl(cs);
}else{this._excludeChildControl(cs);
}},_applyMetaColumnCounts:function(em,en){var eu=em;
var eo=this._getPaneScrollerArr();
var es={};

if(em>en){var ew=qx.event.Registration.getManager(eo[0]);

for(var ex in qx.ui.table.Table.__ln){es[ex]={};
es[ex].capture=ew.getListeners(eo[0],ex,true);
es[ex].bubble=ew.getListeners(eo[0],ex,false);
}}this._cleanUpMetaColumns(eu.length);
var et=0;

for(var i=0;i<eo.length;i++){var ey=eo[i];
var ev=ey.getTablePaneModel();
ev.setFirstColumnX(et);
ev.setMaxColumnCount(eu[i]);
et+=eu[i];
}if(eu.length>eo.length){var er=this.getTableColumnModel();

for(var i=eo.length;i<eu.length;i++){var ev=this.getNewTablePaneModel()(er);
ev.setFirstColumnX(et);
ev.setMaxColumnCount(eu[i]);
et+=eu[i];
var ey=this.getNewTablePaneScroller()(this);
ey.setTablePaneModel(ev);
ey.addListener(cP,this._onScrollY,this);
for(ex in qx.ui.table.Table.__ln){if(!es[ex]){break;
}
if(es[ex].capture&&es[ex].capture.length>0){var ep=es[ex].capture;

for(var i=0;i<ep.length;i++){var eq=ep[i].context;

if(!eq){eq=this;
}else if(eq==eo[0]){eq=ey;
}ey.addListener(ex,ep[i].handler,eq,true);
}}
if(es[ex].bubble&&es[ex].bubble.length>0){var eA=es[ex].bubble;

for(var i=0;i<eA.length;i++){var eq=eA[i].context;

if(!eq){eq=this;
}else if(eq==eo[0]){eq=ey;
}ey.addListener(ex,eA[i].handler,eq,false);
}}}var ez=(i==eu.length-1)?1:0;
this.__lj.add(ey,{flex:ez});
eo=this._getPaneScrollerArr();
}}for(var i=0;i<eo.length;i++){var ey=eo[i];
var eB=(i==(eo.length-1));
ey.getHeader().setHeight(this.getHeaderCellHeight());
ey.setTopRightWidget(eB?this.getChildControl(cs):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(cs);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(j,k){var m=this._getPaneScrollerArr();

for(var i=0;i<m.length;i++){m[i].setFocusCellOnMouseMove(j);
}},_applyShowCellFocusIndicator:function(bB,bC){var bD=this._getPaneScrollerArr();

for(var i=0;i<bD.length;i++){bD[i].setShowCellFocusIndicator(bB);
}},_applyKeepFirstVisibleRowComplete:function(ea,eb){var ec=this._getPaneScrollerArr();

for(var i=0;i<ec.length;i++){ec[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__lk;
},_getPaneScrollerArr:function(){return this.__lj.getChildren();
},getPaneScroller:function(B){return this._getPaneScrollerArr()[B];
},_cleanUpMetaColumns:function(bE){var bF=this._getPaneScrollerArr();

if(bF!=null){for(var i=bF.length-1;i>=bE;i--){bF[i].destroy();
}}},_onChangeLocale:function(S){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(n){var o=this._getPaneScrollerArr();

for(var i=0;i<o.length;i++){o[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(eh){var ei=this._getPaneScrollerArr();

for(var i=0;i<ei.length;i++){ei[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(dG){var dH=dG.getData();
this._updateTableData(dH.firstRow,dH.lastRow,dH.firstColumn,dH.lastColumn,dH.removeStart,dH.removeCount);
},_updateTableData:function(bh,bi,bj,bk,bl,bm){var bn=this._getPaneScrollerArr();
if(bm){this.getSelectionModel().removeSelectionInterval(bl,bl+bm);
}
for(var i=0;i<bn.length;i++){bn[i].onTableModelDataChanged(bh,bi,bj,bk);
}var bo=this.getTableModel().getRowCount();

if(bo!=this.__lp){this.__lp=bo;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(I){if(!this.__lq){this.__lq=true;
var J=this._getPaneScrollerArr();

for(var i=0;i<J.length;i++){J[i].setScrollY(I.getData());
}this.__lq=false;
}},_onKeyPress:function(eC){if(!this.getEnabled()){return;
}var eJ=this.__lm;
var eG=true;
var eK=eC.getKeyIdentifier();

if(this.isEditing()){if(eC.getModifiers()==0){switch(eK){case dF:this.stopEditing();
var eJ=this.__lm;
this.moveFocusedCell(0,1);

if(this.__lm!=eJ){eG=this.startEditing();
}break;
case cy:this.cancelEditing();
this.focus();
break;
default:eG=false;
break;
}}return;
}else{if(eC.isCtrlPressed()){eG=true;

switch(eK){case cv:var eH=this.getTableModel().getRowCount();

if(eH>0){this.getSelectionModel().setSelectionInterval(0,eH-1);
}break;
default:eG=false;
break;
}}else{switch(eK){case dr:this.__lk.handleSelectKeyDown(this.__lm,eC);
break;
case dh:case dF:eG=this.startEditing();
break;
case dj:this.setFocusedCell(this.__ll,0,true);
break;
case dc:var eH=this.getTableModel().getRowCount();
this.setFocusedCell(this.__ll,eH-1,true);
break;
case cJ:this.moveFocusedCell(-1,0);
break;
case cR:this.moveFocusedCell(1,0);
break;
case ci:this.moveFocusedCell(0,-1);
break;
case cX:this.moveFocusedCell(0,1);
break;
case co:case ck:var eF=this.getPaneScroller(0);
var eI=eF.getTablePane();
var eH=eI.getVisibleRowCount()-1;
var eE=this.getRowHeight();
var eD=(eK==co)?-1:1;
eF.setScrollY(eF.getScrollY()+eD*eH*eE);
this.moveFocusedCell(0,eD*eH);
break;
default:eG=false;
}}}
if(eJ!=this.__lm){this.__lk.handleMoveKeyDown(this.__lm,eC);
}
if(eG){eC.preventDefault();
eC.stopPropagation();
}},_onFocusChanged:function(y){var z=this._getPaneScrollerArr();

for(var i=0;i<z.length;i++){z[i].onFocusChanged();
}},_onColVisibilityChanged:function(bP){var bQ=this._getPaneScrollerArr();

for(var i=0;i<bQ.length;i++){bQ[i].onColVisibilityChanged();
}var bR=bP.getData();

if(this.__lr!=null&&bR.col!=null&&bR.visible!=null){this.__lr[bR.col].setVisible(bR.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dQ){var dR=this._getPaneScrollerArr();

for(var i=0;i<dR.length;i++){var dS=dQ.getData();
dR[i].setColumnWidth(dS.col,dS.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(bp){var bq=this._getPaneScrollerArr();

for(var i=0;i<bq.length;i++){bq[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(bv){var bw=this._getMetaColumnAtPageX(bv);
return (bw!=-1)?this.getPaneScroller(bw):null;
},setFocusedCell:function(bJ,bK,bL){if(!this.isEditing()&&(bJ!=this.__ll||bK!=this.__lm)){this.__ll=bJ;
this.__lm=bK;
var bM=this._getPaneScrollerArr();

for(var i=0;i<bM.length;i++){bM[i].setFocusedCell(bJ,bK);
}
if(bJ!==null&&bL){this.scrollCellVisible(bJ,bK);
}}},clearSelection:function(){this.getSelectionModel().clearSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__ll;
},getFocusedRow:function(){return this.__lm;
},highlightFocusedRow:function(O){this.getDataRowRenderer().setHighlightFocusRow(O);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var c=this._getPaneScrollerArr();

for(var i=0;i<c.length;i++){c[i].onFocusChanged();
}},moveFocusedCell:function(dI,dJ){var dN=this.__ll;
var dO=this.__lm;

if(dN===null||dO===null){return;
}
if(dI!=0){var dM=this.getTableColumnModel();
var x=dM.getVisibleX(dN);
var dL=dM.getVisibleColumnCount();
x=qx.lang.Number.limit(x+dI,0,dL-1);
dN=dM.getVisibleColumnAtX(x);
}
if(dJ!=0){var dK=this.getTableModel();
dO=qx.lang.Number.limit(dO+dJ,0,dK.getRowCount()-1);
}this.setFocusedCell(dN,dO,true);
},scrollCellVisible:function(K,L){var M=this.getTableColumnModel();
var x=M.getVisibleX(K);
var N=this._getMetaColumnAtColumnX(x);

if(N!=-1){this.getPaneScroller(N).scrollCellVisible(K,L);
}},isEditing:function(){if(this.__ll!=null){var x=this.getTableColumnModel().getVisibleX(this.__ll);
var be=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(be).isEditing();
}return false;
},startEditing:function(){if(this.__ll!=null){var x=this.getTableColumnModel().getVisibleX(this.__ll);
var ee=this._getMetaColumnAtColumnX(x);
var ed=this.getPaneScroller(ee).startEditing();
return ed;
}return false;
},stopEditing:function(){if(this.__ll!=null){var x=this.getTableColumnModel().getVisibleX(this.__ll);
var eP=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eP).stopEditing();
}},cancelEditing:function(){if(this.__ll!=null){var x=this.getTableColumnModel().getVisibleX(this.__ll);
var bd=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(bd).cancelEditing();
}},updateContent:function(){var dP=this._getPaneScrollerArr();

for(var i=0;i<dP.length;i++){dP[i].getTablePane().updateContent();
}},_getMetaColumnAtPageX:function(f){var g=this._getPaneScrollerArr();

for(var i=0;i<g.length;i++){var h=g[i].getContainerLocation();

if(f>=h.left&&f<=h.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(C){var E=this.getMetaColumnCounts();
var F=0;

for(var i=0;i<E.length;i++){var D=E[i];
F+=D;

if(D==-1||C<F){return i;
}}return -1;
},_updateStatusBar:function(){var bU=this.getTableModel();

if(this.getStatusBarVisible()&&bU){var bV=this.getSelectionModel().getSelectedCount();
var bX=bU.getRowCount();
var bW;

if(bX>0){if(bV==0){bW=this.trn(cj,cG,bX,bX);
}else{bW=this.trn(cC,cM,bX,bV,bX);
}}
if(this.__lo){if(bW){bW+=this.__lo;
}else{bW=this.__lo;
}}
if(bW){this.getChildControl(cq).setContent(bW);
}}},_updateScrollerWidths:function(){var ca=this._getPaneScrollerArr();

for(var i=0;i<ca.length;i++){var cc=(i==(ca.length-1));
var cd=ca[i].getTablePaneModel().getTotalWidth();
ca[i].setWidth(cd);
var cb=cc?1:0;
ca[i].setLayoutProperties({flex:cb});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var s=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var v=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var p=this._getPaneScrollerArr();
var r=false;
var u=false;

for(var i=0;i<p.length;i++){var w=(i==(p.length-1));
var q=p[i].getNeededScrollBars(r,!w);

if(q&s){r=true;
}
if(w&&(q&v)){u=true;
}}for(var i=0;i<p.length;i++){var w=(i==(p.length-1));
var t;
p[i].setHorizontalScrollBarVisible(r);
if(w){t=p[i].getVerticalScrollBarVisible();
}p[i].setVerticalScrollBarVisible(w&&u);
if(w&&u!=t){this.fireDataEvent(dw,u);
}}},_initColumnMenu:function(){var X=this.getTableModel();
var Y=this.getTableColumnModel();
var ba=this.getChildControl(cs);
ba.empty();
var W=ba.getMenu();
var bb={table:this,menu:W,columnButton:ba};
this.fireDataEvent(cF,bb);
this.__lr={};

for(var bc=0,l=X.getColumnCount();bc<l;bc++){var V=ba.factory(de,{text:X.getColumnName(bc),column:bc,bVisible:Y.isColumnVisible(bc)});
qx.core.Assert.assertInterface(V,qx.ui.table.IColumnMenuItem);
V.addListener(dy,this._createColumnVisibilityCheckBoxHandler(bc),this);
this.__lr[bc]=V;
}var bb={table:this,menu:W,columnButton:ba};
this.fireDataEvent(dz,bb);
},_createColumnVisibilityCheckBoxHandler:function(br){return function(d){var e=this.getTableColumnModel();
e.setColumnVisible(br,d.getData());
};
},setColumnWidth:function(eN,eO){this.getTableColumnModel().setColumnWidth(eN,eO);
},_onResize:function(){this.fireEvent(dm);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(bx,by,self,bz){if(arguments.callee.self.__ln[bx]){for(var i=0,bA=this._getPaneScrollerArr();i<bA.length;i++){bA[i].addListener.apply(bA[i],arguments);
}}else{return arguments.callee.base.call(this,bx,by,self,bz);
}},removeListener:function(ce,cf,self,cg){if(arguments.callee.self.__ln[ce]){for(var i=0,ch=this._getPaneScrollerArr();i<ch.length;i++){ch[i].removeListener.apply(ch[i],arguments);
}}else{arguments.callee.base.call(this,ce,cf,self,cg);
}},destroy:function(){this.getChildControl(cs).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(cl,dE)){qx.locale.Manager.getInstance().removeListener(cn,this._onChangeLocale,this);
}var eg=this.getSelectionModel();

if(eg){eg.dispose();
}var ef=this.getDataRowRenderer();

if(ef){ef.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(cE,dv,cK,dx);
}});
})();
(function(){var b="qx.ui.table.IRowRenderer";
qx.Interface.define(b,{members:{updateDataRowElement:function(d,e){},getRowHeightStyle:function(f){},createRowStyle:function(a){},getRowClass:function(c){}}});
})();
(function(){var p="",o="table-row-background-even",n="Boolean",m="__lu",l="__ls",k="default",j="height:",i="'",h="table-row",g="table-row-background-focused",C=';color:',B="table-row-background-odd",A="1px solid ",z="table-row-line",y="table-row-background-selected",x="background-color:",w="__lt",v=';border-bottom: 1px solid ',u="table-row-selected",t="table-row-background-focused-selected",r="px;",s="qx.ui.table.rowrenderer.Default",q=";";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__ls=p;
this.__ls={};
this.__lt={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(k));
var F=qx.theme.manager.Color.getInstance();
this.__lt.bgcolFocusedSelected=F.resolve(t);
this.__lt.bgcolFocused=F.resolve(g);
this.__lt.bgcolSelected=F.resolve(y);
this.__lt.bgcolEven=F.resolve(o);
this.__lt.bgcolOdd=F.resolve(B);
this.__lt.colSelected=F.resolve(u);
this.__lt.colNormal=F.resolve(h);
this.__lt.horLine=F.resolve(z);
},properties:{highlightFocusRow:{check:n,init:true}},members:{__lt:null,__lu:null,__ls:null,_insetY:1,_renderFont:function(E){if(E){this.__lu=E.getStyles();
this.__ls=qx.bom.element.Style.compile(this.__lu);
this.__ls=this.__ls.replace(/"/g,i);
}else{this.__ls=p;
this.__lu=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(a,b){var d=this.__lu;
var c=b.style;
qx.bom.element.Style.setStyles(b,d);

if(a.focusedRow&&this.getHighlightFocusRow()){c.backgroundColor=a.selected?this.__lt.bgcolFocusedSelected:this.__lt.bgcolFocused;
}else{if(a.selected){c.backgroundColor=this.__lt.bgcolSelected;
}else{c.backgroundColor=(a.row%2==0)?this.__lt.bgcolEven:this.__lt.bgcolOdd;
}}c.color=a.selected?this.__lt.colSelected:this.__lt.colNormal;
c.borderBottom=A+this.__lt.horLine;
},getRowHeightStyle:function(G){if(qx.bom.client.Feature.CONTENT_BOX){G-=this._insetY;
}return j+G+r;
},createRowStyle:function(e){var f=[];
f.push(q);
f.push(this.__ls);
f.push(x);

if(e.focusedRow&&this.getHighlightFocusRow()){f.push(e.selected?this.__lt.bgcolFocusedSelected:this.__lt.bgcolFocused);
}else{if(e.selected){f.push(this.__lt.bgcolSelected);
}else{f.push((e.row%2==0)?this.__lt.bgcolEven:this.__lt.bgcolOdd);
}}f.push(C);
f.push(e.selected?this.__lt.colSelected:this.__lt.colNormal);
f.push(v,this.__lt.horLine);
return f.join(p);
},getRowClass:function(D){return p;
}},destruct:function(){this._disposeFields(w,m,l);
}});
})();
(function(){var k="pressed",j="hovered",i="changeVisibility",h="qx.ui.menu.Menu",g="Enter",f="changeMenu",d="qx.ui.form.MenuButton",c="abandoned",b="_applyMenu";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(o,p,q){arguments.callee.base.call(this,o,p);
if(q!=null){this.setMenu(q);
}},properties:{menu:{check:h,nullable:true,apply:b,event:f}},members:{_applyMenu:function(s,t){if(t){t.removeListener(i,this._onMenuChange,this);
t.resetOpener();
}
if(s){s.addListener(i,this._onMenuChange,this);
s.setOpener(this);
}},open:function(l){var m=this.getMenu();

if(m){qx.ui.menu.Manager.getInstance().hideAll();
m.open();
if(l){var n=m.getChildren()[0];

if(n){m.setSelectedButton(n);
}}}},_onMenuChange:function(e){var a=this.getMenu();

if(a.isVisible()){this.addState(k);
}else{this.removeState(k);
}},_onMouseDown:function(e){var r=this.getMenu();

if(r){if(!r.isVisible()){this.open();
}else{r.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){e.stopPropagation();
},_onMouseOver:function(e){this.addState(j);
},_onMouseOut:function(e){this.removeState(j);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(c);
this.addState(k);
var u=this.getMenu();

if(u){if(!u.isVisible()){this.open();
}else{u.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){arguments.callee.base.call(this);
},members:{__lv:null,factory:function(j,k){switch(j){case a:var m=new qx.ui.menu.Menu();
this.setMenu(m);
return m;
case f:var o=new qx.ui.table.columnmenu.MenuItem(k.text);
o.setVisible(k.bVisible);
this.getMenu().add(o);
return o;
case c:var n=new qx.ui.menu.Button(k.text);
n.set({appearance:e});
return n;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+j);
}},empty:function(){var g=this.getMenu();
var h=g.getChildren();

for(var i=0,l=h.length;i<l;i++){h[0].destroy();
}}}});
})();
(function(){var bG="mouseup",bF="keypress",bE="mousedown",bD="interval",bC="keydown",bB="keyup",bA="Enter",bz="__ly",by="Up",bx="Escape",br="__lw",bw="blur",bu="qx.ui.menu.Manager",bq="Left",bp="Down",bt="Right",bs="__lx",bv="singleton",bo="Space";
qx.Class.define(bu,{type:bv,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lw=[];
var J=qx.core.Init.getApplication().getRoot();
var I=document.body;
var K=qx.event.Registration;
J.addListener(bE,this._onMouseDown,this,true);
J.addListener(bG,this._onMouseUp,this);
K.addListener(window.document.documentElement,bG,this._onMouseUp,this);
K.addListener(I,bC,this._onKeyUpDown,this,true);
K.addListener(I,bB,this._onKeyUpDown,this,true);
K.addListener(I,bF,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,bw,this.hideAll,this);
this.__lx=new qx.event.Timer;
this.__lx.addListener(bD,this._onOpenInterval,this);
this.__ly=new qx.event.Timer;
this.__ly.addListener(bD,this._onCloseInterval,this);
},members:{__lz:null,__lA:null,__lx:null,__ly:null,__lw:null,_getChild:function(bc,bd,be,bf){var bg=bc.getChildren();
var length=bg.length;
var bh;

for(var i=bd;i<length&&i>=0;i+=be){bh=bg[i];

if(bh.isEnabled()&&!bh.isAnonymous()){return bh;
}}
if(bf){i=i==length?0:length-1;

for(;i!=bd;i+=be){bh=bg[i];

if(bh.isEnabled()&&!bh.isAnonymous()){return bh;
}}}return null;
},_isInMenu:function(T){while(T){if(T instanceof qx.ui.menu.Menu){return true;
}T=T.getLayoutParent();
}return false;
},_getMenuButton:function(U){while(U){if(U instanceof qx.ui.menu.AbstractButton){return U;
}U=U.getLayoutParent();
}return null;
},add:function(O){{};
var P=this.__lw;
P.push(O);
O.setZIndex(1e6+P.length);
},remove:function(Q){{};
var R=this.__lw;

if(R){qx.lang.Array.remove(R,Q);
}},hideAll:function(){var q=this.__lw;

if(q){for(var i=q.length-1;i>=0;i--){q[i].exclude();
}}},getActiveMenu:function(){var bn=this.__lw;
return bn.length>0?bn[bn.length-1]:null;
},scheduleOpen:function(E){this.cancelClose(E);
if(E.isVisible()){if(this.__lz){this.cancelOpen(this.__lz);
}}else if(this.__lz!=E){this.__lz=E;
this.__lx.restartWith(E.getOpenInterval());
}},scheduleClose:function(N){this.cancelOpen(N);
if(!N.isVisible()){if(this.__lA){this.cancelClose(this.__lA);
}}else if(this.__lA!=N){this.__lA=N;
this.__ly.restartWith(N.getCloseInterval());
}},cancelOpen:function(S){if(this.__lz==S){this.__lx.stop();
this.__lz=null;
}},cancelClose:function(a){if(this.__lA==a){this.__ly.stop();
this.__lA=null;
}},_onOpenInterval:function(e){this.__lx.stop();
this.__lz.open();
this.__lz=null;
},_onCloseInterval:function(e){this.__ly.stop();
this.__lA.exclude();
this.__lA=null;
},_onMouseDown:function(e){var w=e.getTarget();
if(w.getMenu&&w.getMenu()&&w.getMenu().isVisible()){return;
}if(this.__lw.length>0&&!this._isInMenu(w)){this.hideAll();
}},_onMouseUp:function(e){var bj=e.getTarget();
var bi;

if(bj instanceof qx.ui.core.Widget){bi=bj;
}else{bi=qx.ui.core.Widget.getWidgetByElement(bj);
}if(!(bi instanceof qx.ui.menu.Menu)){bi=this._getMenuButton(bi);

if(bi!=null&&bi instanceof qx.ui.menu.AbstractButton&&!bi.isEnabled()){return;
}this.hideAll();
}},__lB:{"Enter":1,"Space":1},__lC:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var L=this.getActiveMenu();

if(!L){return;
}var M=e.getKeyIdentifier();

if(this.__lC[M]||(this.__lB[M]&&L.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var r=this.getActiveMenu();

if(!r){return;
}var s=e.getKeyIdentifier();
var u=this.__lC[s];
var t=this.__lB[s];

if(u){switch(s){case by:this._onKeyPressUp(r);
break;
case bp:this._onKeyPressDown(r);
break;
case bq:this._onKeyPressLeft(r);
break;
case bt:this._onKeyPressRight(r);
break;
case bx:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(t){var v=r.getSelectedButton();

if(v){switch(s){case bA:this._onKeyPressEnter(r,v,e);
break;
case bo:this._onKeyPressSpace(r,v,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(l){var m=l.getSelectedButton();
var n=l.getChildren();
var p=m?l.indexOf(m)-1:n.length-1;
var o=this._getChild(l,p,-1,true);
if(o){l.setSelectedButton(o);
}else{l.resetSelectedButton();
}},_onKeyPressDown:function(A){var B=A.getSelectedButton();
var D=B?A.indexOf(B)+1:0;
var C=this._getChild(A,D,1,true);
if(C){A.setSelectedButton(C);
}else{A.resetSelectedButton();
}},_onKeyPressLeft:function(V){var Y=V.getOpener();

if(!Y){return;
}if(Y instanceof qx.ui.menu.Button){var bb=Y.getLayoutParent();
bb.resetOpenedButton();
bb.setSelectedButton(Y);
}else if(Y instanceof qx.ui.menubar.Button){var W=Y.getToolBar().getMenuButtons();
var X=W.indexOf(Y);
if(X===-1){return;
}var ba=X==0?W[W.length-1]:W[X-1];

if(ba!=Y){ba.open(true);
}}},_onKeyPressRight:function(b){var d=b.getSelectedButton();
if(d){var c=d.getMenu();

if(c){b.setOpenedButton(d);
var k=this._getChild(c,0,1);

if(k){c.setSelectedButton(k);
}return;
}}else if(!b.getOpenedButton()){var k=this._getChild(b,0,1);

if(k){b.setSelectedButton(k);

if(k.getMenu()){b.setOpenedButton(k);
}return;
}}var h=b.getOpener();
if(h instanceof qx.ui.menu.Button&&d){while(h){h=h.getLayoutParent();

if(h instanceof qx.ui.menu.Menu){h=h.getOpener();

if(h instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!h){return;
}}if(h instanceof qx.ui.menubar.Button){var g=h.getToolBar().getMenuButtons();
var f=g.indexOf(h);
if(f===-1){return;
}var j=g[f+1];

if(!j){j=g[0];
}
if(j!=h){j.open(true);
}}},_onKeyPressEnter:function(F,G,e){if(G.hasListener(bF)){var H=e.clone();
H.setBubbles(false);
H.setTarget(G);
G.dispatchEvent(H);
}this.hideAll();
},_onKeyPressSpace:function(x,y,e){if(y.hasListener(bF)){var z=e.clone();
z.setBubbles(false);
z.setTarget(y);
y.dispatchEvent(z);
}}},destruct:function(){var bm=qx.event.Registration;
var bk=document.body;
var bl=qx.core.Init.getApplication().getRoot();
bl.removeListener(bE,this._onMouseDown,this,true);
bl.removeListener(bG,this._onMouseUp,this);
bm.removeListener(window.document.documentElement,bG,this._onMouseUp,this);
bm.removeListener(bk,bC,this._onKeyUpDown,this,true);
bm.removeListener(bk,bB,this._onKeyUpDown,this,true);
bm.removeListener(bk,bF,this._onKeyPress,this,true);
this._disposeObjects(bs,bz);
this._disposeArray(br);
}});
})();
(function(){var r="Integer",q="qx.ui.core.Widget",p="visible",o="selected",n="qx.ui.menu.Menu",m="_applyOpenInterval",l="_applyOpenedButton",k="_applyArrowColumnWidth",j="_applyIconColumnWidth",i="mouseover",c="mouseout",h="excluded",g="_applySpacingX",b="_applyCloseInterval",a="_applySelectedButton",f="menu",d="_applySpacingY";
qx.Class.define(n,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
this.getApplicationRoot().add(this);
this.addListener(i,this._onMouseOver);
this.addListener(c,this._onMouseOut);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:f},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:h},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:r,apply:g,init:0,themeable:true},spacingY:{check:r,apply:d,init:0,themeable:true},iconColumnWidth:{check:r,init:0,themeable:true,apply:j},arrowColumnWidth:{check:r,init:0,themeable:true,apply:k},selectedButton:{check:q,nullable:true,apply:a},openedButton:{check:q,nullable:true,apply:l},opener:{check:q,nullable:true},openInterval:{check:r,themeable:true,init:250,apply:m},closeInterval:{check:r,themeable:true,init:250,apply:b}},members:{__lD:null,open:function(){this.placeToWidget(this.getOpener());
this.show();
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getLayout().getColumnSizes();
},_applyIconColumnWidth:function(G,H){this._getLayout().setIconColumnWidth(G);
},_applyArrowColumnWidth:function(M,N){this._getLayout().setArrowColumnWidth(M);
},_applySpacingX:function(y,z){this._getLayout().setColumnSpacing(y);
},_applySpacingY:function(w,x){this._getLayout().setSpacing(w);
},_applyVisibility:function(A,B){arguments.callee.base.call(this,A,B);
var C=qx.ui.menu.Manager.getInstance();

if(A===p){C.add(this);
var opener=this.getOpener();
var D=opener.getLayoutParent();

if(D&&D instanceof qx.ui.menu.Menu){D.setOpenedButton(opener);
}}else if(B===p){C.remove(this);
var opener=this.getOpener();
var D=opener.getLayoutParent();

if(D&&D instanceof qx.ui.menu.Menu&&D.getOpenedButton()==opener){D.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}},_applySelectedButton:function(K,L){if(L){L.removeState(o);
}
if(K){K.addState(o);
}},_applyOpenedButton:function(I,J){if(J){J.getMenu().exclude();
}
if(I){I.getMenu().open();
}},_onMouseOver:function(e){var t=qx.ui.menu.Manager.getInstance();
t.cancelClose(this);
var u=e.getTarget();

if(u.isEnabled()&&u instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(u);
var s=u.getMenu&&u.getMenu();

if(s){t.scheduleOpen(s);
this.__lD=s;
}else{var v=this.getOpenedButton();

if(v){t.scheduleClose(v.getMenu());
}
if(this.__lD){t.cancelOpen(this.__lD);
this.__lD=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var E=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var F=this.getOpenedButton();
F?this.setSelectedButton(F):this.resetSelectedButton();
if(F){E.cancelClose(F.getMenu());
}if(this.__lD){E.cancelOpen(this.__lD);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__lE:null,_computeSizeHint:function(){var p=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__lE=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=p.length;i<l;i++){o=p[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=p[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}return {height:arguments.callee.base.call(this).height,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__lE||null;
}}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var B="icon",A="label",z="arrow",y="shortcut",x="submenu",w="String",v="qx.ui.menu.Menu",u="qx.ui.menu.AbstractButton",t="keypress",s="_applyIcon",p="mouseup",r="abstract",q="_applyLabel",o="_applyMenu";
qx.Class.define(u,{extend:qx.ui.core.Widget,type:r,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(p,this._onMouseUp);
this.addListener(t,this._onKeyPress);
},properties:{label:{check:w,apply:q,nullable:true},menu:{check:v,apply:o,nullable:true},icon:{check:w,apply:s,themeable:true,nullable:true}},members:{_createChildControlImpl:function(a){var b;

switch(a){case B:b=new qx.ui.basic.Image;
b.setAnonymous(true);
this._add(b,{column:0});
break;
case A:b=new qx.ui.basic.Label;
b.setAnonymous(true);
this._add(b,{column:1});
break;
case y:b=new qx.ui.basic.Label;
b.setAnonymous(true);
this._add(b,{column:2});
break;
case z:b=new qx.ui.basic.Image;
b.setAnonymous(true);
this._add(b,{column:3});
break;
}return b||arguments.callee.base.call(this,a);
},_forwardStates:{selected:1},getChildrenSizes:function(){var e=0,f=0,g=0,k=0;

if(this._isChildControlVisible(B)){var l=this.getChildControl(B);
e=l.getMarginLeft()+l.getSizeHint().width+l.getMarginRight();
}
if(this._isChildControlVisible(A)){var i=this.getChildControl(A);
f=i.getMarginLeft()+i.getSizeHint().width+i.getMarginRight();
}
if(this._isChildControlVisible(y)){var h=this.getChildControl(y);
g=h.getMarginLeft()+h.getSizeHint().width+h.getMarginRight();
}
if(this._isChildControlVisible(z)){var j=this.getChildControl(z);
k=j.getMarginLeft()+j.getSizeHint().width+j.getMarginRight();
}return [e,f,g,k];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_applyIcon:function(m,n){if(m){this._showChildControl(B).setSource(m);
}else{this._excludeChildControl(B);
}},_applyLabel:function(c,d){if(c){this._showChildControl(A).setContent(c);
}else{this._excludeChildControl(A);
}},_applyMenu:function(C,D){if(D){D.resetOpener();
D.removeState(x);
}
if(C){this._showChildControl(z);
C.setOpener(this);
C.addState(x);
}else{this._excludeChildControl(z);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(f,g){var r=this._getLayoutChildren();
var q;
var j;
var k=[];

for(var i=0,l=r.length;i<l;i++){q=r[i];
j=q.getLayoutProperties().column;
k[j]=q;
}var p=r[0].getLayoutParent().getLayoutParent();
var s=p.getColumnSizes();
var m=p.getSpacingX();
var t=0,top=0;
var n=qx.ui.layout.Util;

for(var i=0,l=s.length;i<l;i++){q=k[i];

if(q){var h=q.getSizeHint();
var top=n.computeVerticalAlignOffset(q.getAlignY()||c,h.height,g,0,0);
var o=n.computeHorizontalAlignOffset(q.getAlignX()||a,h.width,s[i],q.getMarginLeft(),q.getMarginRight());
q.renderLayout(t+o,top,h.width,h.height);
}t+=s[i]+m;
}},_computeSizeHint:function(){var e=this._getLayoutChildren();
var d=0;

for(var i=0,l=e.length;i<l;i++){d=Math.max(d,e[i].getSizeHint().height);
}return {width:0,height:d};
}}});
})();
(function(){var d="shortcut",c="qx.ui.menu.Button",b="changeCommand",a="menu-button";
qx.Class.define(c,{extend:qx.ui.menu.AbstractButton,include:qx.ui.core.MExecutable,construct:function(f,g,h,i){arguments.callee.base.call(this);
this.addListener(b,this._onChangeCommand,this);
if(f!=null){this.setLabel(f);
}
if(g!=null){this.setIcon(g);
}
if(h!=null){this.setCommand(h);
}
if(i!=null){this.setMenu(i);
}},properties:{appearance:{refine:true,init:a}},members:{_onChangeCommand:function(e){this.getChildControl(d).setContent(e.getData().toString());
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){e.stopPropagation();
}}},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var j="pressed",i="hovered",h="inherit",g="qx.ui.menubar.Button",f="keydown",e="menubar-button",d="keyup";
qx.Class.define(g,{extend:qx.ui.form.MenuButton,construct:function(a,b,c){arguments.callee.base.call(this,a,b,c);
this.removeListener(f,this._onKeyDown);
this.removeListener(d,this._onKeyUp);
},properties:{appearance:{refine:true,init:e},show:{refine:true,init:h},focusable:{refine:true,init:false}},members:{getToolBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},_onMenuChange:function(e){var k=this.getMenu();
var toolbar=this.getToolBar();

if(k.isVisible()){this.addState(j);
if(toolbar){toolbar.setOpenMenu(k);
}}else{this.removeState(j);
if(toolbar&&toolbar.getOpenMenu()==k){toolbar.resetOpenMenu();
}}},_onMouseOver:function(e){this.addState(i);
if(this.getMenu()){var toolbar=this.getToolBar();
var open=toolbar.getOpenMenu();

if(open&&open!=this.getMenu()){qx.ui.menu.Manager.getInstance().hideAll();
this.open();
}}}}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{_applySpacing:function(q,r){var s=this._getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSpacer:function(){var m=new qx.ui.core.Spacer;
this._add(m,{flex:1});
return m;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var o=this.getChildren();
var n=[];
var p;

for(var i=0,l=o.length;i<l;i++){p=o[i];

if(p instanceof qx.ui.menubar.Button){n.push(p);
}else if(p instanceof qx.ui.toolbar.Part){n.push.apply(n,p.getMenuButtons());
}}return n;
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var a="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},hasChildren:function(){return this.getChildrenContainer().hasChildren();
},add:function(b,c){return this.getChildrenContainer().add(b,c);
},remove:function(m){return this.getChildrenContainer().remove(m);
},removeAll:function(){return this.getChildrenContainer().removeAll();
},indexOf:function(n){return this.getChildrenContainer().indexOf(n);
},addAt:function(d,e,f){this.getChildrenContainer().addAt(d,e,f);
},addBefore:function(j,k,l){this.getChildrenContainer().addBefore(j,k,l);
},addAfter:function(g,h,i){this.getChildrenContainer().addAfter(g,h,i);
},removeAt:function(o){this.getChildrenContainer().removeAt(o);
}}});
})();
(function(){var p="container",o="handle",n="both",m="Integer",k="middle",j="qx.ui.toolbar.Part",h="icon",g="label",f="changeShow",e="_applySpacing",d="toolbar/part";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(o);
},properties:{appearance:{refine:true,init:d},show:{init:n,check:[n,g,h],inheritable:true,event:f},spacing:{nullable:true,check:m,themeable:true,apply:e}},members:{_createChildControlImpl:function(q){var r;

switch(q){case o:r=new qx.ui.basic.Image();
r.setAlignY(k);
this._add(r);
break;
case p:r=new qx.ui.toolbar.PartContainer;
this._add(r);
break;
}return r||arguments.callee.base.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(p);
},_applySpacing:function(a,b){var c=this.getChildControl(p).getLayout();
a==null?c.resetSpacing():c.setSpacing(a);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var t=this.getChildren();
var s=[];
var u;

for(var i=0,l=t.length;i<l;i++){u=t[i];

if(u instanceof qx.ui.menubar.Button){s.push(u);
}}return s;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var n="checked",m="String",l="menu-checkbox",k="_applyChecked",j="Boolean",i="changeName",h="changeChecked",g="changeValue",f="qx.ui.menu.CheckBox";
qx.Class.define(f,{extend:qx.ui.menu.AbstractButton,implement:qx.ui.form.IFormElement,construct:function(a,b){arguments.callee.base.call(this);
if(a!=null){this.setLabel(a);
}
if(b!=null){this.setMenu(b);
}},properties:{appearance:{refine:true,init:l},value:{check:m,nullable:true,event:g},name:{check:m,nullable:true,event:i},checked:{check:j,init:false,apply:k,event:h}},members:{_applyChecked:function(c,d){c?this.addState(n):this.removeState(n);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.toggleChecked();
}},_onKeyPress:function(e){this.toggleChecked();
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeChecked";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(i){arguments.callee.base.call(this,i);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__lF:false,_applyVisible:function(g,h){if(!this.bInListener){this.setChecked(g);
}}}});
})();
(function(){var d="qx.ui.table.selection.Model",c="qx.ui.table.selection.Manager";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:d}},members:{__lG:null,handleMouseDown:function(i,j){if(j.isLeftPressed()){var k=this.getSelectionModel();

if(!k.isSelectedIndex(i)){this._handleSelectEvent(i,j);
this.__lG=true;
}else{this.__lG=false;
}}else if(j.isRightPressed()&&j.getModifiers()==0){var k=this.getSelectionModel();

if(!k.isSelectedIndex(i)){k.setSelectionInterval(i,i);
}}},handleMouseUp:function(g,h){if(h.isLeftPressed()&&!this.__lG){this._handleSelectEvent(g,h);
}},handleClick:function(a,b){},handleSelectKeyDown:function(e,f){this._handleSelectEvent(e,f);
},handleMoveKeyDown:function(q,r){var t=this.getSelectionModel();

switch(r.getModifiers()){case 0:t.setSelectionInterval(q,q);
break;
case qx.event.type.Dom.SHIFT_MASK:var s=t.getAnchorSelectionIndex();

if(s==-1){t.setSelectionInterval(q,q);
}else{t.setSelectionInterval(s,q);
}break;
}},_handleSelectEvent:function(l,m){var p=this.getSelectionModel();
var n=p.getLeadSelectionIndex();
var o=p.getAnchorSelectionIndex();

if(m.isShiftPressed()){if(l!=n||p.isSelectionEmpty()){if(o==-1){o=l;
}
if(m.isCtrlOrCommandPressed()){p.addSelectionInterval(o,l);
}else{p.setSelectionInterval(o,l);
}}}else if(m.isCtrlOrCommandPressed()){if(p.isSelectedIndex(l)){p.removeSelectionInterval(l,l);
}else{p.addSelectionInterval(l,l);
}}else{if(!(o==n&&o==l&&p.getSelectedCount()==1)){p.setSelectionInterval(l,l);
}}}}});
})();
(function(){var o="..",n="changeSelection",m="__lH",l="_applySelectionMode",k="]",h="qx.event.type.Event",g="Ranges:",f="qx.ui.table.selection.Model",e=" [";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lH=[];
this.__lI=-1;
this.__lJ=-1;
this.hasBatchModeRefCount=0;
this.__lK=false;
},events:{"changeSelection":h},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:l}},members:{__lK:null,__lI:null,__lJ:null,__lH:null,_applySelectionMode:function(a){this.clearSelection();
},setBatchMode:function(b){if(b){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__lK){this.__lK=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__lI;
},getLeadSelectionIndex:function(){return this.__lJ;
},clearSelection:function(){if(!this.isSelectionEmpty()){this._clearSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__lH.length==0;
},getSelectedCount:function(){var q=0;

for(var i=0;i<this.__lH.length;i++){var p=this.__lH[i];
q+=p.maxIndex-p.minIndex+1;
}return q;
},isSelectedIndex:function(w){for(var i=0;i<this.__lH.length;i++){var x=this.__lH[i];

if(w>=x.minIndex&&w<=x.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var G=[];

for(var i=0;i<this.__lH.length;i++){G.push({minIndex:this.__lH[i].minIndex,maxIndex:this.__lH[i].maxIndex});
}return G;
},iterateSelection:function(c,d){for(var i=0;i<this.__lH.length;i++){for(var j=this.__lH[i].minIndex;j<=this.__lH[i].maxIndex;j++){c.call(d,j);
}}},setSelectionInterval:function(t,u){var v=arguments.callee.self;

switch(this.getSelectionMode()){case v.NO_SELECTION:return;
case v.SINGLE_SELECTION:t=u;
break;
case v.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=t;i<=u;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._clearSelection();
this._addSelectionInterval(t,u);
this._fireChangeSelection();
},addSelectionInterval:function(O,P){var Q=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case Q.NO_SELECTION:return;
case Q.MULTIPLE_INTERVAL_SELECTION:case Q.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(O,P);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(O,P);
break;
}},removeSelectionInterval:function(y,z){this.__lI=y;
this.__lJ=z;
var A=Math.min(y,z);
var C=Math.max(y,z);
for(var i=0;i<this.__lH.length;i++){var E=this.__lH[i];

if(E.minIndex>C){break;
}else if(E.maxIndex>=A){var F=(E.minIndex>=A)&&(E.minIndex<=C);
var D=(E.maxIndex>=A)&&(E.maxIndex<=C);

if(F&&D){this.__lH.splice(i,1);
i--;
}else if(F){E.minIndex=C+1;
}else if(D){E.maxIndex=A-1;
}else{var B={minIndex:C+1,maxIndex:E.maxIndex};
this.__lH.splice(i+1,0,B);
E.maxIndex=A-1;
break;
}}}this._fireChangeSelection();
},_clearSelection:function(){this.__lH=[];
this.__lI=-1;
this.__lJ=-1;
},_addSelectionInterval:function(H,I){this.__lI=H;
this.__lJ=I;
var J=Math.min(H,I);
var L=Math.max(H,I);
var K=0;

for(;K<this.__lH.length;K++){var M=this.__lH[K];

if(M.minIndex>J){break;
}}this.__lH.splice(K,0,{minIndex:J,maxIndex:L});
var N=this.__lH[0];

for(var i=1;i<this.__lH.length;i++){var M=this.__lH[i];

if(N.maxIndex+1>=M.minIndex){N.maxIndex=Math.max(N.maxIndex,M.maxIndex);
this.__lH.splice(i,1);
i--;
}else{N=M;
}}},_dumpRanges:function(){var r=g;

for(var i=0;i<this.__lH.length;i++){var s=this.__lH[i];
r+=e+s.minIndex+o+s.maxIndex+k;
}this.debug(r);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__lK=true;
}this.fireEvent(n);
}},destruct:function(){this._disposeFields(m);
}});
})();
(function(){var bb="",ba="Number",Y='</div>',X='" ',W='<div>',V="</div>",U="div",T="overflow: hidden;",S='style="',R="_applyMaxCacheLines",bs="__lL",br="qx.ui.table.pane.Pane",bq="__lP",bp="width: 100%;",bo="__lO",bn="_applyVisibleRowCount",bm='>',bl="line-height: ",bk="appear",bj='class="',bh="width:100%;",bi="px;",bf='<div ',bg="'>",bd="_applyFirstVisibleRow",be="<div style='",bc=";position:relative;";
qx.Class.define(br,{extend:qx.ui.core.Widget,construct:function(ch){arguments.callee.base.call(this);
this.__lL=ch;
this.__lM=0;
this.__lN=0;
this.__lO=[];
},properties:{firstVisibleRow:{check:ba,init:0,apply:bd},visibleRowCount:{check:ba,init:0,apply:bn},maxCacheLines:{check:ba,init:1000,apply:R},allowShrinkX:{refine:true,init:false}},members:{__lN:null,__lM:null,__lL:null,__lP:null,__lQ:null,__lR:null,__lO:null,__lS:0,_applyFirstVisibleRow:function(P,Q){this.updateContent(false,P-Q);
},_applyVisibleRowCount:function(bv,bw){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__lL;
},getTable:function(){return this.__lL.getTable();
},setFocusedCell:function(bz,bA,bB){if(bz!=this.__lR||bA!=this.__lQ){var bC=this.__lQ;
this.__lR=bz;
this.__lQ=bA;
if(bA!=bC&&!bB){if(bA!==null&&bC!==null){this.updateContent(false,null,bC,true);
this.updateContent(false,null,bA,true);
}else{this.updateContent();
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(bt,bu){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(a,b,c,d){this.__lT();
var f=this.getFirstVisibleRow();
var e=this.getVisibleRowCount();

if(b==-1||b>=f&&a<f+e){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(bx,by){if(this.__lS>=bx&&bx!==-1){this.__lT();
}},__lT:function(){this.__lO=[];
this.__lS=0;
},__lU:function(bE,bF,bG){if(!bF&&!bG&&this.__lO[bE]){return this.__lO[bE];
}else{return null;
}},__lV:function(K,L,M,N){var O=this.getMaxCacheLines();

if(!M&&!N&&!this.__lO[K]&&O>0){this._applyMaxCacheLines(O);
this.__lO[K]=L;
this.__lS+=1;
}},updateContent:function(ct,cu,cv,cw){if(ct){this.__lT();
}if(cu&&Math.abs(cu)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(cu);
}else if(cw&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(cv);
}else{this._updateAllRows();
}},_updateRowStyles:function(ci){var cm=this.getContentElement().getDomElement();

if(!cm||!cm.firstChild){this._updateAllRows();
return;
}var cq=this.getTable();
var ck=cq.getSelectionModel();
var cn=cq.getTableModel();
var cr=cq.getDataRowRenderer();
var cl=cm.firstChild.childNodes;
var cp={table:cq};
var cs=this.getFirstVisibleRow();
var y=0;
var cj=cl.length;

if(ci!=null){var co=ci-cs;

if(co>=0&&co<cj){cs=ci;
y=co;
cj=co+1;
}else{return;
}}
for(;y<cj;y++,cs++){cp.row=cs;
cp.selected=ck.isSelectedIndex(cs);
cp.focusedRow=(this.__lQ==cs);
cp.rowData=cn.getRowData(cs);
cr.updateDataRowElement(cp,cl[y]);
}},_getRowsHtml:function(g,h){var n=this.getTable();
var q=n.getSelectionModel();
var l=n.getTableModel();
var m=n.getTableColumnModel();
var G=this.getPaneScroller().getTablePaneModel();
var v=n.getDataRowRenderer();
l.prefetchRows(g,g+h-1);
var D=n.getRowHeight();
var F=G.getColumnCount();
var H=0;
var k=[];
for(var x=0;x<F;x++){var I=G.getColumnAtX(x);
var p=m.getColumnWidth(I);
k.push({col:I,xPos:x,editable:l.isColumnEditable(I),focusedCol:this.__lR==I,styleLeft:H,styleWidth:p});
H+=p;
}var J=[];

for(var o=g;o<g+h;o++){var r=q.isSelectedIndex(o);
var u=(this.__lQ==o);
var A=this.__lU(o,r,u);

if(A){J.push(A);
continue;
}var z=[];
var C={table:n};
C.styleHeight=D;
C.row=o;
C.selected=r;
C.focusedRow=u;
C.rowData=l.getRowData(o);
z.push(bf);
var j=v.getRowClass(C);

if(j){z.push(bj,j,X);
}var w=v.createRowStyle(C);
w+=bc+v.getRowHeightStyle(D)+bh;

if(w){z.push(S,w,X);
}z.push(bm);

for(var x=0;x<F;x++){var s=k[x];

for(var E in s){C[E]=s[E];
}var I=C.col;
C.value=l.getValue(I,o);
var t=m.getDataCellRenderer(I);
t.createDataCellHtml(C,z);
}z.push(Y);
var B=z.join(bb);
this.__lV(o,B,r,u);
J.push(B);
}return J.join(bb);
},_scrollContent:function(bH){var bI=this.getContentElement().getDomElement();

if(!(bI&&bI.firstChild)){this._updateAllRows();
return;
}var bR=bI.firstChild;
var bJ=bR.childNodes;
var bP=this.getVisibleRowCount();
var bO=this.getFirstVisibleRow();
var bM=this.getTable().getTableModel();
var bS=0;

if(bM!=null){bS=bM.getRowCount();
}if(bO+bP>bS){this._updateAllRows();
return;
}var bT=bH<0?bP+bH:0;
var bK=bH<0?0:bP-bH;

for(i=Math.abs(bH)-1;i>=0;i--){var bN=bJ[bT];

try{bR.removeChild(bN);
}catch(bD){break;
}}if(!this.__lP){this.__lP=document.createElement(U);
}var bQ=W;
bQ+=this._getRowsHtml(bO+bK,Math.abs(bH));
bQ+=Y;
this.__lP.innerHTML=bQ;
var bL=this.__lP.firstChild.childNodes;
if(bH>0){for(var i=bL.length-1;i>=0;i--){var bN=bL[0];
bR.appendChild(bN);
}}else{for(var i=bL.length-1;i>=0;i--){var bN=bL[bL.length-1];
bR.insertBefore(bN,bR.firstChild);
}}if(this.__lQ!==null){this._updateRowStyles(this.__lQ-bH);
this._updateRowStyles(this.__lQ);
}},_updateAllRows:function(){var bX=this.getContentElement().getDomElement();

if(!bX){this.addListenerOnce(bk,arguments.callee,this);
return;
}var ce=this.getTable();
var cb=ce.getTableModel();
var cd=this.getPaneScroller().getTablePaneModel();
var cc=cd.getColumnCount();
var bU=ce.getRowHeight();
var bY=this.getFirstVisibleRow();
var bV=this.getVisibleRowCount();
var cf=0;

if(cb!=null){cf=cb.getRowCount();
}
if(bY+bV>cf){bV=Math.max(0,cf-bY);
}var bW=cd.getTotalWidth();
var ca;
if(bV>0){ca=[be,bp,(ce.getForceLineHeight()?bl+bU+bi:bb),T,bg,this._getRowsHtml(bY,bV),V];
}else{ca=[];
}var cg=ca.join(bb);
bX.innerHTML=cg;
this.setWidth(bW);
this.__lM=cc;
this.__lN=bV;
}},destruct:function(){this._disposeFields(bq,bs,bo);
}});
})();
(function(){var c="hovered",b="__lW",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(d){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__lW=d;
},members:{__lW:null,__lX:null,__lY:null,getPaneScroller:function(){return this.__lW;
},getTable:function(){return this.__lW.getTable();
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(D,E){var F=this.getHeaderWidgetAtColumn(D);

if(F!=null){F.setWidth(E);
}},setMouseOverColumn:function(G){if(G!=this.__lY){if(this.__lY!=null){var H=this.getHeaderWidgetAtColumn(this.__lY);

if(H!=null){H.removeState(c);
}}
if(G!=null){this.getHeaderWidgetAtColumn(G).addState(c);
}this.__lY=G;
}},getHeaderWidgetAtColumn:function(I){var J=this.getPaneScroller().getTablePaneModel().getX(I);
return this._getChildren()[J];
},showColumnMoveFeedback:function(e,x){var i=this.getContainerLocation();

if(this.__lX==null){var f=this.getPaneScroller().getTablePaneModel().getX(e);
var h=this._getChildren()[f];
var j=this.getTable().getTableModel();
var l=this.getTable().getTableColumnModel();
var m={xPos:f,col:e,name:j.getColumnName(e)};
var k=l.getHeaderCellRenderer(e);
var g=k.createHeaderCell(m);
var n=h.getBounds();
g.setWidth(n.width);
g.setHeight(n.height);
g.setZIndex(1000000);
g.setOpacity(0.8);
g.setLayoutProperties({top:i.top});
this.getApplicationRoot().add(g);
this.__lX=g;
}this.__lX.setLayoutProperties({left:i.left+x});
this.__lX.show();
},hideColumnMoveFeedback:function(){if(this.__lX!=null){this.__lX.destroy();
this.__lX=null;
}},isShowingColumnMoveFeedback:function(){return this.__lX!=null;
},_updateContent:function(q){var v=this.getTable().getTableModel();
var z=this.getTable().getTableColumnModel();
var A=this.getPaneScroller().getTablePaneModel();
var C=this._getChildren();
var w=A.getColumnCount();
var r=0;

if(v!=null){r=v.getSortColumnIndex();
}if(q){this._cleanUpCells();
}var s={};
s.sortedAscending=false;

if(v!=null){s.sortedAscending=v.isSortAscending();
}
for(var x=0;x<w;x++){var u=A.getColumnAtX(x);
var B=z.getColumnWidth(u);
var y=z.getHeaderCellRenderer(u);
s.xPos=x;
s.col=u;
s.name=v.getColumnName(u);
s.editable=v.isColumnEditable(u);
s.sorted=(u==r);
var t=C[x];
if(t==null){t=y.createHeaderCell(s);
t.set({width:B});
this._add(t);
}else{y.updateHeaderCell(s,t);
}}},_cleanUpCells:function(){var p=this._getChildren();

for(var x=p.length-1;x>=0;x--){var o=p[x];
o.destroy();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var bf="Boolean",be="resize-line",bd="mousedown",bc="mouseup",bb="qx.ui.table.pane.CellEvent",ba="scroll",Y="focus-indicator",X="excluded",W="scrollbar-y",V="visible",cd="mousemove",cc="header",cb="editing",ca="click",bY="modelChanged",bX="scrollbar-x",bW="cellClick",bV="qx.event.type.ChangeEvent",bU="pane",bT="__md",bm="mouseout",bn="changeHorizontalScrollBarVisible",bk="__mh",bl="bottom",bi="_applyScrollTimeout",bj="changeScrollX",bg="_applyTablePaneModel",bh="Integer",bq="dblclick",br="dataEdited",bz="__mE",bx="mousewheel",bH="qx.ui.table.pane.Scroller",bC="__mb",bP="_applyShowCellFocusIndicator",bM="__mf",bt="resize",bS="__mv",bR="vertical",bQ="__me",bs="__mi",bv="changeScrollY",bw="appear",by="table-scroller",bA="cellDblclick",bD="__mc",bJ="horizontal",bO="losecapture",bo="contextmenu",bp="col-resize",bu="disappear",bG="_applyVerticalScrollBarVisible",bF="_applyHorizontalScrollBarVisible",bE="__ma",bL="cellContextmenu",bK="close",bB="__mg",bI="changeTablePaneModel",U="qx.ui.table.pane.Model",bN="changeVerticalScrollBarVisible";
qx.Class.define(bH,{extend:qx.ui.core.Widget,construct:function(c){arguments.callee.base.call(this);
this.__ma=c;
var d=new qx.ui.layout.Grid();
d.setColumnFlex(0,1);
d.setRowFlex(1,1);
this._setLayout(d);
this.__mb=this._showChildControl(bX);
this.__mc=this._showChildControl(W);
this.__md=this._showChildControl(cc);
this.__me=this._showChildControl(bU);
this.__mf=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__mf,{row:0,column:0,colSpan:2});
this.__mg=new qx.ui.table.pane.Clipper();
this.__mg.add(this.__md);
this.__mg.addListener(bO,this._onChangeCaptureHeader,this);
this.__mg.addListener(cd,this._onMousemoveHeader,this);
this.__mg.addListener(bd,this._onMousedownHeader,this);
this.__mg.addListener(bc,this._onMouseupHeader,this);
this.__mg.addListener(ca,this._onClickHeader,this);
this.__mf.add(this.__mg,{flex:1});
this.__mh=new qx.ui.table.pane.Clipper();
this.__mh.add(this.__me);
this.__mh.addListener(bx,this._onMousewheel,this);
this.__mh.addListener(cd,this._onMousemovePane,this);
this.__mh.addListener(bd,this._onMousedownPane,this);
this.__mh.addListener(bc,this._onMouseupPane,this);
this.__mh.addListener(ca,this._onClickPane,this);
this.__mh.addListener(bo,this._onContextMenu,this);
this.__mh.addListener(bq,this._onDblclickPane,this);
this.__mh.addListener(bt,this._onResizePane,this);
this._add(this.__mh,{row:1,column:0});
this.__mi=this.getChildControl(Y);
this.getChildControl(be).hide();
this.addListener(bm,this._onMouseout,this);
this.addListener(bw,this._onAppear,this);
this.addListener(bu,this._onDisappear,this);
if(!this.__mj){this.__mj=qx.lang.Function.bind(this._oninterval,this);
}this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":bV,"changeScrollX":bV,"cellClick":bb,"cellDblclick":bb,"cellContextmenu":bb},properties:{horizontalScrollBarVisible:{check:bf,init:true,apply:bF,event:bn},verticalScrollBarVisible:{check:bf,init:true,apply:bG,event:bN},tablePaneModel:{check:U,apply:bg,event:bI},liveResize:{check:bf,init:false},focusCellOnMouseMove:{check:bf,init:false},selectBeforeFocus:{check:bf,init:false},showCellFocusIndicator:{check:bf,init:true,apply:bP},scrollTimeout:{check:bh,init:100,apply:bi},appearance:{refine:true,init:by}},members:{__mk:null,__ma:null,__ml:null,__mm:null,__mj:null,__mn:null,__mo:null,__mp:null,__mq:null,__mr:null,__ms:null,__mt:null,__mu:null,__mv:null,__mw:null,__mx:null,__my:null,__mz:null,__mA:null,__mB:null,__mC:null,__mD:null,__mE:null,__mb:null,__mc:null,__md:null,__mg:null,__me:null,__mh:null,__mi:null,__mf:null,_createChildControlImpl:function(fh){var fi;

switch(fh){case cc:fi=(this.getTable().getNewTablePaneHeader())(this);
break;
case bU:fi=(this.getTable().getNewTablePane())(this);
break;
case Y:fi=new qx.ui.table.pane.FocusIndicator(this);
fi.setUserBounds(0,0,0,0);
fi.setZIndex(1000);
fi.addListener(bc,this._onMouseupFocusIndicator,this);
this.__mh.add(fi);
fi.exclude();
break;
case be:fi=new qx.ui.core.Widget();
fi.setUserBounds(0,0,0,0);
fi.setZIndex(1000);
this.__mh.add(fi);
break;
case bX:fi=new qx.ui.core.ScrollBar(bJ).set({minWidth:0,alignY:bl});
fi.addListener(ba,this._onScrollX,this);
this._add(fi,{row:2,column:0});
break;
case W:fi=new qx.ui.core.ScrollBar(bR);
fi.addListener(ba,this._onScrollY,this);
this._add(fi,{row:1,column:1});
break;
}return fi||arguments.callee.base.call(this,fh);
},_applyHorizontalScrollBarVisible:function(a,b){this.__mb.setVisibility(a?V:X);

if(!a){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(eq,er){this.__mc.setVisibility(eq?V:X);

if(!eq){this.setScrollX(0);
}},_applyTablePaneModel:function(cw,cx){if(cx!=null){cx.removeListener(bY,this._onPaneModelChanged,this);
}cw.addListener(bY,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(cr,cs){if(cr){this._updateFocusIndicator();
}else{if(this.__mi){this.__mi.hide();
}}},getScrollY:function(){return this.__mc.getPosition();
},setScrollY:function(scrollY,N){this.__mz=N;
this.__mc.scrollTo(scrollY);

if(N){this._updateContent();
}this.__mz=false;
},getScrollX:function(){return this.__mb.getPosition();
},setScrollX:function(scrollX){this.__mb.scrollTo(scrollX);
},getTable:function(){return this.__ma;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(R,S){this.__md.setColumnWidth(R,S);
this.__me.setColumnWidth(R,S);
var T=this.getTablePaneModel();
var x=T.getX(R);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__md.onColOrderChanged();
this.__me.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(dO,dP,dQ,dR){this.__me.onTableModelDataChanged(dO,dP,dQ,dR);
var dS=this.getTable().getTableModel().getRowCount();

if(dS!=this.__mk){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=dS){if(dS==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),dS-1);
}}this.__mk=dS;
}},onSelectionChanged:function(){this.__me.onSelectionChanged();
},onFocusChanged:function(){this.__me.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__md.onTableModelMetaDataChanged();
this.__me.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__md.onPaneModelChanged();
this.__me.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__md._updateContent();
this.__ma._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var dA=this.__mh.getInnerSize();

if(!dA){return ;
}var dy=this.getTablePaneModel().getTotalWidth();
var dz=this.__mb;

if(dA.width<dy){var dx=Math.max(0,dy-dA.width);
dz.setMaximum(dx);
dz.setKnobFactor(dA.width/dy);
var dB=dz.getPosition();
dz.setPosition(Math.min(dB,dx));
}else{dz.setMaximum(0);
dz.setKnobFactor(1);
dz.setPosition(0);
}},updateVerScrollBarMaximum:function(){var t=this.__mh.getInnerSize();

if(!t){return ;
}var r=this.getTable().getTableModel();
var n=0;

if(r!=null){n=r.getRowCount();
}
if(this.getTable().getKeepFirstVisibleRowComplete()){n+=1;
}var m=this.getTable().getRowHeight();
var p=n*m;
var s=this.__mc;

if(t.height<p){var o=Math.max(0,p-t.height);
s.setMaximum(o);
s.setKnobFactor(t.height/p);
var q=s.getPosition();
s.setPosition(Math.min(q,o));
}else{s.setMaximum(0);
s.setKnobFactor(1);
s.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var eW=e.getData();
this.fireDataEvent(bj,eW,e.getOldData());
this.__mg.scrollToX(eW);
this.__mh.scrollToX(eW);
},_onScrollY:function(e){this.fireDataEvent(bv,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var cT=this.getTable();

if(!cT.getEnabled()){return;
}this.__mc.scrollTo(this.__mc.getPosition()+((e.getWheelDelta()*3)*cT.getRowHeight()));
if(this.__mx&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__mx,this.__my);
}},__mF:function(D){var I=this.getTable();
var J=this.__md.getHeaderWidgetAtColumn(this.__ms);
var E=J.getSizeHint().minWidth;
var G=Math.max(E,this.__mu+D-this.__mt);

if(this.getLiveResize()){var F=I.getTableColumnModel();
F.setColumnWidth(this.__ms,G);
}else{this.__md.setColumnWidth(this.__ms,G);
var H=this.getTablePaneModel();
this._showResizeLine(H.getColumnLeft(this.__ms)+G);
}this.__mt+=G-this.__mu;
this.__mu=G;
},__mG:function(en){var eo=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__md.isShowingColumnMoveFeedback()||en>this.__mr+eo||en<this.__mr-eo){this.__mo+=en-this.__mr;
this.__md.showColumnMoveFeedback(this.__mn,this.__mo);
var ep=this.__ma.getTablePaneScrollerAtPageX(en);

if(this.__mq&&this.__mq!=ep){this.__mq.hideColumnMoveFeedback();
}
if(ep!=null){this.__mp=ep.showColumnMoveFeedback(en);
}else{this.__mp=null;
}this.__mq=ep;
this.__mr=en;
}},_onMousemoveHeader:function(e){var fe=this.getTable();

if(!fe.getEnabled()){return;
}var ff=false;
var eX=null;
var fc=e.getDocumentLeft();
var fd=e.getDocumentTop();
this.__mx=fc;
this.__my=fd;

if(this.__ms!=null){this.__mF(fc);
ff=true;
}else if(this.__mn!=null){this.__mG(fc);
}else{var eY=this._getResizeColumnForPageX(fc);

if(eY!=-1){ff=true;
}else{var fb=fe.getTableModel();
var fg=this._getColumnForPageX(fc);

if(fg!=null&&fb.isColumnSortable(fg)){eX=fg;
}}}var fa=ff?bp:null;
this.getApplicationRoot().setGlobalCursor(fa);
this.setCursor(fa);
this.__md.setMouseOverColumn(eX);
},_onMousemovePane:function(e){var cD=this.getTable();

if(!cD.getEnabled()){return;
}var cF=e.getDocumentLeft();
var cG=e.getDocumentTop();
this.__mx=cF;
this.__my=cG;
var cE=this._getRowForPagePos(cF,cG);

if(cE!=null&&this._getColumnForPageX(cF)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cF,cG);
}}this.__md.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var P=e.getDocumentLeft();
var Q=this._getResizeColumnForPageX(P);

if(Q!=-1){this._startResizeHeader(Q,P);
}else{var O=this._getColumnForPageX(P);

if(O!=null){this._startMoveHeader(O,P);
}}},_startResizeHeader:function(cy,cz){var cA=this.getTable().getTableColumnModel();
this.__ms=cy;
this.__mt=cz;
this.__mu=cA.getColumnWidth(this.__ms);
this.__mg.capture();
},_startMoveHeader:function(el,em){this.__mn=el;
this.__mr=em;
this.__mo=this.getTablePaneModel().getColumnLeft(el);
this.__mg.capture();
},_onMousedownPane:function(e){var co=this.getTable();

if(!co.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var cl=e.getDocumentLeft();
var cn=e.getDocumentTop();
var cq=this._getRowForPagePos(cl,cn);
var cp=this._getColumnForPageX(cl);

if(cq!==null){this.__mv={row:cq,col:cp};
var cm=this.getSelectBeforeFocus();

if(cm){co.getSelectionManager().handleMouseDown(cq,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cl,cn);
}
if(!cm){co.getSelectionManager().handleMouseDown(cq,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__mv&&this.__mi.getRow()==this.__mv.row&&this.__mi.getColumn()==this.__mv.col){this.__mv={};
this.fireEvent(bW,qx.ui.table.pane.CellEvent,[this,e,this.__mv.row,this.__mv.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__ms!=null){this._stopResizeHeader();
}
if(this.__mn!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var l=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
l.setColumnWidth(this.__ms,this.__mu);
}this.__ms=null;
this.__mg.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var cP=this.getTable().getTableColumnModel();
var cQ=this.getTablePaneModel();
this.__md.hideColumnMoveFeedback();

if(this.__mq){this.__mq.hideColumnMoveFeedback();
}
if(this.__mp!=null){var cS=cQ.getFirstColumnX()+cQ.getX(this.__mn);
var cO=this.__mp;

if(cO!=cS&&cO!=cS+1){var cR=cP.getVisibleColumnAtX(cS);
var cN=cP.getVisibleColumnAtX(cO);
var cM=cP.getOverallX(cR);
var cL=(cN!=null)?cP.getOverallX(cN):cP.getOverallColumnCount();

if(cL>cM){cL--;
}cP.moveColumn(cM,cL);
}}this.__mn=null;
this.__mp=null;
this.__mg.releaseCapture();
},_onMouseupPane:function(e){var cj=this.getTable();

if(!cj.getEnabled()){return;
}var ck=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(ck!=-1&&ck!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){cj.getSelectionManager().handleMouseUp(ck,e);
}},_onMouseupHeader:function(e){var ek=this.getTable();

if(!ek.getEnabled()){return;
}
if(this.__ms!=null){this._stopResizeHeader();
this.__mw=true;
}else if(this.__mn!=null){this._stopMoveHeader();
}},_onClickHeader:function(e){if(this.__mw){this.__mw=false;
return;
}var ew=this.getTable();

if(!ew.getEnabled()){return;
}var eu=ew.getTableModel();
var ev=e.getDocumentLeft();
var et=this._getResizeColumnForPageX(ev);

if(et==-1){var ey=this._getColumnForPageX(ev);

if(ey!=null&&eu.isColumnSortable(ey)){var es=eu.getSortColumnIndex();
var ex=(ey!=es)?true:!eu.isSortAscending();
eu.sortByColumn(ey,ex);
ew.getSelectionModel().clearSelection();
}}},_onClickPane:function(e){var ce=this.getTable();

if(!ce.getEnabled()){return;
}var ch=e.getDocumentLeft();
var ci=e.getDocumentTop();
var cf=this._getRowForPagePos(ch,ci);
var cg=this._getColumnForPageX(ch);

if(cf!=null&&cg!=null){ce.getSelectionManager().handleClick(cf,e);

if(this.__mi.isHidden()||(this.__mv&&cf==this.__mv.row&&cg==this.__mv.col)){this.__mv={};
this.fireEvent(bW,qx.ui.table.pane.CellEvent,[this,e,cf,cg],true);
}}},_onContextMenu:function(e){var fm=e.getDocumentLeft();
var fn=e.getDocumentTop();
var fk=this._getRowForPagePos(fm,fn);
var fl=this._getColumnForPageX(fm);

if(this.__mi.isHidden()||(this.__mv&&fk==this.__mv.row&&fl==this.__mv.col)){this.__mv={};
this.fireEvent(bL,qx.ui.table.pane.CellEvent,[this,e,fk,fl],true);
var fj=this.getTable().getContextMenu();

if(fj){if(fj.getChildren().length>0){fj.placeToMouse(e);
fj.show();
}else{fj.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var cJ=e.getDocumentLeft();
var cK=e.getDocumentTop();
this._focusCellAtPagePos(cJ,cK);
this.startEditing();
var cI=this._getRowForPagePos(cJ,cK);

if(cI!=-1&&cI!=null){this.fireEvent(bA,qx.ui.table.pane.CellEvent,[this,e,cI],true);
}},_onMouseout:function(e){var cv=this.getTable();

if(!cv.getEnabled()){return;
}if(this.__ms==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__md.setMouseOverColumn(null);
},_showResizeLine:function(x){var L=this._showChildControl(be);
var K=L.getWidth();
var M=this.__mh.getBounds();
L.setUserBounds(x-Math.round(K/2),0,K,M.height);
},_hideResizeLine:function(){this._excludeChildControl(be);
},showColumnMoveFeedback:function(dj){var dt=this.getTablePaneModel();
var ds=this.getTable().getTableColumnModel();
var dm=this.__me.getContainerLocation().left;
var dr=dt.getColumnCount();
var dn=0;
var dl=0;
var dw=dm;

for(var dk=0;dk<dr;dk++){var dp=dt.getColumnAtX(dk);
var du=ds.getColumnWidth(dp);

if(dj<dw+du/2){break;
}dw+=du;
dn=dk+1;
dl=dw-dm;
}var dq=this.__mh.getContainerLocation().left;
var dv=this.__mh.getBounds().width;
var scrollX=dq-dm;
dl=qx.lang.Number.limit(dl,scrollX+2,scrollX+dv-1);
this._showResizeLine(dl);
return dt.getFirstColumnX()+dn;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(g,h){var j=this._getRowForPagePos(g,h);

if(j!=-1&&j!=null){var i=this._getColumnForPageX(g);
this.__ma.setFocusedCell(i,j);
}},setFocusedCell:function(cB,cC){if(!this.isEditing()){this.__me.setFocusedCell(cB,cC,this.__mm);
this.__mA=cB;
this.__mB=cC;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__mA;
},getFocusedRow:function(){return this.__mB;
},scrollCellVisible:function(eI,eJ){var eT=this.getTablePaneModel();
var eK=eT.getX(eI);

if(eK!=-1){var eQ=this.__mh.getInnerSize();

if(!eQ){return;
}var eR=this.getTable().getTableColumnModel();
var eN=eT.getColumnLeft(eI);
var eU=eR.getColumnWidth(eI);
var eL=this.getTable().getRowHeight();
var eV=eJ*eL;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var eS=Math.min(eN,eN+eU-eQ.width);
var eP=eN;
this.setScrollX(Math.max(eS,Math.min(eP,scrollX)));
var eM=eV+eL-eQ.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){eM+=eL;
}var eO=eV;
this.setScrollY(Math.max(eM,Math.min(eO,scrollY)),true);
}},isEditing:function(){return this.__mC!=null;
},startEditing:function(){var z=this.getTable();
var w=z.getTableModel();
var B=this.__mA;

if(!this.isEditing()&&(B!=null)&&w.isColumnEditable(B)){var C=this.__mB;
var u=this.getTablePaneModel().getX(B);
var v=w.getValue(B,C);
this.__mD=z.getTableColumnModel().getCellEditorFactory(B);
var y={col:B,row:C,xPos:u,value:v,table:z};
this.__mC=this.__mD.createCellEditor(y);
if(this.__mC===null){return false;
}else if(this.__mC instanceof qx.ui.window.Window){this.__mC.setModal(true);
this.__mC.setShowClose(false);
this.__mC.addListener(bK,this._onCellEditorModalWindowClose,this);
var f=z.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__mC,y);
}this.__mC.open();
}else{var A=this.__mi.getInnerSize();
this.__mC.setUserBounds(0,0,A.width,A.height);
this.__mi.addListener(bd,function(e){e.stopPropagation();
});
this.__mi.add(this.__mC);
this.__mi.addState(cb);
this.__mi.setKeepActive(false);
this.__mC.focus();
this.__mC.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var dN=this.__mD.getCellEditorValue(this.__mC);
var dM=this.getTable().getTableModel().getValue(this.__mA,this.__mB);
this.getTable().getTableModel().setValue(this.__mA,this.__mB,dN);
this.__ma.focus();
this.__ma.fireDataEvent(br,{row:this.__mB,col:this.__mA,oldValue:dM,value:dN});
}},cancelEditing:function(){if(this.isEditing()&&!this.__mC.pendingDispose){if(this._cellEditorIsModalWindow){this.__mC.destroy();
this.__mC=null;
this.__mD=null;
this.__mC.pendingDispose=true;
}else{this.__mi.removeState(cb);
this.__mi.setKeepActive(true);
this.__mC.destroy();
this.__mC=null;
this.__mD=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(ed){var eg=this.getTable().getTableColumnModel();
var eh=this.getTablePaneModel();
var ef=eh.getColumnCount();
var ej=this.__md.getContainerLocation().left;

for(var x=0;x<ef;x++){var ee=eh.getColumnAtX(x);
var ei=eg.getColumnWidth(ee);
ej+=ei;

if(ed<ej){return ee;
}}return null;
},_getResizeColumnForPageX:function(dC){var dG=this.getTable().getTableColumnModel();
var dH=this.getTablePaneModel();
var dF=dH.getColumnCount();
var dJ=this.__md.getContainerLocation().left;
var dD=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<dF;x++){var dE=dH.getColumnAtX(x);
var dI=dG.getColumnWidth(dE);
dJ+=dI;

if(dC>=(dJ-dD)&&dC<=(dJ+dD)){return dE;
}}return -1;
},_getRowForPagePos:function(ez,eA){var eB=this.__me.getContentLocation();

if(ez<eB.left||ez>eB.right){return null;
}
if(eA>=eB.top&&eA<=eB.bottom){var eC=this.getTable().getRowHeight();
var scrollY=this.__mc.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eC)*eC;
}var eF=scrollY+eA-eB.top;
var eH=Math.floor(eF/eC);
var eG=this.getTable().getTableModel();
var eD=0;

if(eG!=null){eD=eG.getRowCount();
}return (eH<eD)?eH:null;
}var eE=this.__md.getContainerLocation();

if(eA>=eE.top&&eA<=eE.bottom&&ez<=eE.right){return -1;
}return null;
},setTopRightWidget:function(ct){var cu=this.__mE;

if(cu!=null){this.__mf.remove(cu);
}
if(ct!=null){this.__mf.add(ct);
}this.__mE=ct;
},getTopRightWidget:function(){return this.__mE;
},getHeader:function(){return this.__md;
},getTablePane:function(){return this.__me;
},getVerticalScrollBarWidth:function(){var cH=this.__mc;
return cH.isVisible()?(cH.getSizeHint().width||0):0;
},getNeededScrollBars:function(cU,cV){var dc=this.__mc.getSizeHint().width;
var dd=this.__mh.getInnerSize();
var cW=dd?dd.width:0;

if(this.getVerticalScrollBarVisible()){cW+=dc;
}var dg=dd?dd.height:0;

if(this.getHorizontalScrollBarVisible()){dg+=dc;
}var da=this.getTable().getTableModel();
var de=0;

if(da!=null){de=da.getRowCount();
}var dh=this.getTablePaneModel().getTotalWidth();
var df=this.getTable().getRowHeight()*de;
var cY=false;
var di=false;

if(dh>cW){cY=true;

if(df>dg-dc){di=true;
}}else if(df>dg){di=true;

if(!cV&&(dh>cW-dc)){cY=true;
}}var db=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var cX=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((cU||cY)?db:0)|((cV||!di)?0:cX);
},_applyScrollTimeout:function(dK,dL){this._startInterval(dK);
},_startInterval:function(k){this._stopInterval();
if(k){this.__ml=window.setInterval(this.__mj,k);
}},_stopInterval:function(){if(this.__ml){window.clearInterval(this.__ml);
this.__ml=null;
}},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:function(){if(this.__mm&&!this.__me._layoutPending){this.__mm=false;
this._updateContent();
}},_updateContent:function(){var dY=this.__mh.getInnerSize();

if(!dY){return;
}var ec=dY.height;
var scrollX=this.__mb.getPosition();
var scrollY=this.__mc.getPosition();
var dV=this.getTable().getRowHeight();
var dW=Math.floor(scrollY/dV);
var eb=this.__me.getFirstVisibleRow();
this.__me.setFirstVisibleRow(dW);
var dX=Math.ceil(ec/dV);
var dU=0;
var ea=this.getTable().getKeepFirstVisibleRowComplete();

if(!ea){dX++;
dU=scrollY%dV;
}this.__me.setVisibleRowCount(dX);

if(dW!=eb){this._updateFocusIndicator();
}this.__mh.scrollToX(scrollX);
if(!ea){this.__mh.scrollToY(dU);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var dT=this.getTable();

if(!dT.getEnabled()){return;
}this.__mi.moveToCell(this.__mA,this.__mB);
}},destruct:function(){this._stopInterval();
var fo=this.getTablePaneModel();

if(fo){fo.dispose();
}this._disposeFields(bS,bz,bE);
this._disposeObjects(bC,bD,bB,bk,bs,bT,bQ,bM);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this,new qx.ui.layout.Grow());
},members:{scrollToX:function(c){this.getContentElement().scrollToX(c,false);
},scrollToY:function(b){this.getContentElement().scrollToY(b,true);
}}});
})();
(function(){var h="Integer",g="Escape",f="keypress",d="Enter",c="excluded",b="__mH",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(i){arguments.callee.base.call(this);
this.__mH=i;
this.setKeepActive(true);
this.addListener(f,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:c},row:{check:h,nullable:true},column:{check:h,nullable:true}},members:{__mH:null,_onKeyPress:function(e){var j=e.getKeyIdentifier();

if(j!==g&&j!==d){e.stopPropagation();
}},moveToCell:function(k,l){if(k==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var m=this.__mH.getTablePaneModel().getX(k);

if(m==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var r=this.__mH.getTable();
var p=r.getTableColumnModel();
var q=this.__mH.getTablePaneModel();
var o=this.__mH.getTablePane().getFirstVisibleRow();
var n=r.getRowHeight();
this.setUserBounds(q.getColumnLeft(k)-2,(l-o)*n-2,p.getColumnWidth(k)+3,n+3);
this.show();
this.setRow(l);
this.setColumn(k);
}}}},destruct:function(){this._disposeFields(b);
}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);

if(e!=null){this.setRow(e);
}else{this.setRow(c._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(f!=null){this.setColumn(f);
}else{this.setColumn(c._getColumnForPageX(this.getDocumentLeft()));
}}}});
})();
(function(){var a="qx.lang.Number";
qx.Bootstrap.define(a,{statics:{isInRange:function(e,f,g){return e>=f&&e<=g;
},isBetweenRange:function(b,c,d){return b>c&&b<d;
},limit:function(h,i,j){if(j!=null&&h>j){return j;
}else if(i!=null&&h<i){return i;
}else{return h;
}}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var Q="resize",P="Boolean",O="nw-resize",N="mouseup",M="mousedown",L="w-resize",K="__mI",J="losecapture",I="se-resize",H="resize-frame",A="ne-resize",G="n-resize",D="sw-resize",y="mouseout",x="s-resize",C="mousemove",B="move",E="maximized",w="Integer",F="e-resize",z="qx.ui.core.MResizable";
qx.Mixin.define(z,{construct:function(){this.addListener(M,this.__mS,this,true);
this.addListener(N,this.__mT,this);
this.addListener(C,this.__mV,this);
this.addListener(y,this.__mW,this);
this.addListener(J,this.__mU,this);
},properties:{resizable:{check:P,init:true},resizeAllEdges:{check:P,init:true},resizeSensitivity:{check:w,init:5},useResizeFrame:{check:P,init:true}},members:{__mI:null,__mJ:null,__mK:null,__mL:null,__mM:null,__mN:function(){var a=this.__mI;

if(!a){a=this.__mI=new qx.ui.core.Widget();
a.setAppearance(H);
a.exclude();
qx.core.Init.getApplication().getRoot().add(a);
}return a;
},__mO:function(){var T=this.__mM;
var S=this.__mN();
S.setUserBounds(T.left,T.top,T.width,T.height);
S.show();
S.setZIndex(this.getZIndex()+1);
},__mP:function(e){var j=this.__mJ;
var k=this.getSizeHint();
var n=this.__mM;
var i=n.width;
var m=n.height;
var p=n.left;
var top=n.top;
var o;
if(j&1||j&2){o=e.getDocumentTop()-this.__mL;

if(j&1){m-=o;
}else{m+=o;
}
if(m<k.minHeight){m=k.minHeight;
}else if(m>k.maxHeight){m=k.maxHeight;
}
if(j&1){top+=n.height-m;
}}if(j&4||j&8){o=e.getDocumentLeft()-this.__mK;

if(j&4){i-=o;
}else{i+=o;
}
if(i<k.minWidth){i=k.minWidth;
}else if(i>k.maxWidth){i=k.maxWidth;
}
if(j&4){p+=n.width-i;
}}var l=this.getBounds();
return {viewportLeft:p,viewportTop:top,parentLeft:l.left+p-n.left,parentTop:l.top+top-n.top,width:i,height:m};
},__mQ:{1:G,2:x,4:L,8:F,5:O,6:D,9:A,10:I},__mR:function(e){if(!this.getResizable()){return;
}var g=this.getContentLocation();
var b=this.getResizeAllEdges();
var f=this.getResizeSensitivity();
var h=e.getDocumentLeft();
var d=e.getDocumentTop();
var c=0;

if(b&&Math.abs(g.top-d)<f){c+=1;
}else if(Math.abs(g.bottom-d)<f){c+=2;
}
if(b&&Math.abs(g.left-h)<f){c+=4;
}else if(Math.abs(g.right-h)<f){c+=8;
}this.__mJ=c;
},__mS:function(e){if(!this.__mJ){return;
}this.addState(Q);
this.capture();
this.__mK=e.getDocumentLeft();
this.__mL=e.getDocumentTop();
var location=this.getContainerLocation();
var q=this.getBounds();
this.__mM={top:location.top,left:location.left,width:q.width,height:q.height};
if(this.getUseResizeFrame()){this.__mO();
}e.stop();
},__mT:function(e){if(!this.__mJ){return;
}if(this.getUseResizeFrame()){this.__mN().exclude();
}var R=this.__mP(e);
this.setWidth(R.width);
this.setHeight(R.height);
if(this.getResizeAllEdges()){this.setLayoutProperties({left:R.parentLeft,top:R.parentTop});
}this.__mJ=0;
this.removeState(Q);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
},__mU:function(e){if(!this.__mJ){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(B);
if(this.getUseResizeFrame()){this.__mN().exclude();
}},__mV:function(e){if(this.hasState(Q)){var u=this.__mP(e);
if(this.getUseResizeFrame()){var s=this.__mN();
s.setUserBounds(u.viewportLeft,u.viewportTop,u.width,u.height);
}else{this.setWidth(u.width);
this.setHeight(u.height);
if(this.getResizeAllEdges()){this.setLayoutProperties({left:u.parentLeft,top:u.parentTop});
}}e.stop();
}else if(!this.hasState(E)){this.__mR(e);
var v=this.__mJ;
var t=this.getApplicationRoot();

if(v){var r=this.__mQ[v];
this.setCursor(r);
t.setGlobalCursor(r);
}else if(this.getCursor()){this.resetCursor();
t.resetGlobalCursor();
}}},__mW:function(e){if(this.getCursor()&&!this.hasState(Q)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){this._disposeObjects(K);
}});
})();
(function(){var y="move",x="Boolean",w="__mX",v="__na",u="mouseup",t="mousedown",s="losecapture",r="qx.ui.core.MMovable",q="mousemove",p="maximized",n="__mY",o="move-frame";
qx.Mixin.define(r,{properties:{movable:{check:x,init:true},useMoveFrame:{check:x,init:false}},members:{__mX:null,__mY:null,__na:null,__nb:null,__nc:null,__nd:null,__ne:null,_activateMoveHandle:function(m){if(this.__mX){throw new Error("The move handle could not be redefined!");
}this.__mX=m;
m.addListener(t,this._onMoveMouseDown,this);
m.addListener(u,this._onMoveMouseUp,this);
m.addListener(q,this._onMoveMouseMove,this);
m.addListener(s,this.__ni,this);
},__nf:function(){var z=this.__mY;

if(!z){z=this.__mY=new qx.ui.core.Widget();
z.setAppearance(o);
z.exclude();
qx.core.Init.getApplication().getRoot().add(z);
}return z;
},__ng:function(){var g=this.getBounds();
var f=this.__nf();
f.setUserBounds(g.left,g.top,g.width,g.height);
f.show();
f.setZIndex(this.getZIndex()+1);
},__nh:function(e){var i=this.__na;
var l=Math.max(i.left,Math.min(i.right,e.getDocumentLeft()));
var k=Math.max(i.top,Math.min(i.bottom,e.getDocumentTop()));
var h=this.__nb+l;
var j=this.__nc+k;
return {viewportLeft:h,viewportTop:j,parentLeft:h-this.__nd,parentTop:j-this.__ne};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(p)){return;
}var parent=this.getLayoutParent();
var c=parent.getContentLocation();
var d=parent.getBounds();
this.__na={left:c.left,top:c.top,right:c.left+d.width,bottom:c.top+d.height};
var b=this.getContainerLocation();
this.__nd=c.left;
this.__ne=c.top;
this.__nb=b.left-e.getDocumentLeft();
this.__nc=b.top-e.getDocumentTop();
this.addState(y);
this.__mX.capture();
if(this.getUseMoveFrame()){this.__ng();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(y)){return;
}var a=this.__nh(e);

if(this.getUseMoveFrame()){this.__nf().setDomPosition(a.viewportLeft,a.viewportTop);
}else{this.setDomPosition(a.parentLeft,a.parentTop);
}},_onMoveMouseUp:function(e){if(!this.hasState(y)){return;
}this.removeState(y);
this.__mX.releaseCapture();
var A=this.__nh(e);
this.setLayoutProperties({left:A.parentLeft,top:A.parentTop});
if(this.getUseMoveFrame()){this.__nf().exclude();
}},__ni:function(e){if(!this.hasState(y)){return;
}this.removeState(y);
if(this.getUseMoveFrame()){this.__nf().exclude();
}}},destruct:function(){this._disposeObjects(n,w);
this._disposeFields(v);
}});
})();
(function(){var d="qx.ui.window.IWindowManager";
qx.Interface.define(d,{members:{setDesktop:function(a){this.assertInterface(a,qx.ui.window.IDesktop);
},changeActiveWindow:function(e,f){},updateStack:function(){},bringToFront:function(b){this.assertInstance(b,qx.ui.window.Window);
},sendToBack:function(c){this.assertInstance(c,qx.ui.window.Window);
}}});
})();
(function(){var r="__nj",q="qx.ui.window.Manager";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__nj:null,setDesktop:function(a){this.__nj=a;
this.updateStack();
},changeActiveWindow:function(g,h){this.bringToFront(g);
},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__nj.unblockContent();
var c=this.__nj.getWindows();
var f=this._minZIndex-1;
var e=false;
var d,b;

for(var i=0,l=c.length;i<l;i++){d=c[i];

if(!d.isVisible()){continue;
}f+=2;
d.setZIndex(f);
if(d.getModal()){this.__nj.blockContent(f-1);
}e=e||d.isActive();
b=d;
}
if(!e&&b){b.setActive(true);
}},bringToFront:function(j){var k=this.__nj.getWindows();
var m=qx.lang.Array.remove(k,j);

if(m){k.push(j);
this.updateStack();
}},sendToBack:function(n){var o=this.__nj.getWindows();
var p=qx.lang.Array.remove(o,n);

if(p){o.unshift(n);
this.updateStack();
}}},destruct:function(){this._disposeObjects(r);
}});
})();
(function(){var t="Boolean",s="qx.event.type.Event",r="captionbar",q="maximize-button",p="_applyCaptionBarChange",o="restore-button",n="minimize-button",m="close-button",l="execute",k="pane",bb="title",ba="icon",Y="maximized",X="statusbar-text",W="statusbar",V="String",U="active",T="beforeClose",S="beforeMinimize",R="mousedown",A="changeStatus",B="changeIcon",y="excluded",z="_applyCaption",w="_applyActive",x="beforeRestore",u="normal",v="minimize",C="dblclick",D="changeModal",J="_applyShowStatusbar",I="_applyStatus",L="qx.ui.window.Window",K="changeCaption",N="_applyIcon",M="focusout",F="beforeMaximize",Q="maximize",P="restore",O="window",E="close",G="changeActive",H="minimized";
qx.Class.define(L,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(bn,bo){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(r);
this._createChildControl(k);
if(bo!=null){this.setIcon(bo);
}
if(bn!=null){this.setCaption(bn);
}this._updateCaptionBar();
this.addListener(R,this._onWindowMouseDown,this,true);
this.addListener(M,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":s,"close":s,"beforeMinimize":s,"minimize":s,"beforeMaximize":s,"maximize":s,"beforeRestore":s,"restore":s},properties:{appearance:{refine:true,init:O},visibility:{refine:true,init:y},focusable:{refine:true,init:true},active:{check:t,init:false,apply:w,event:G},modal:{check:t,init:false,event:D},caption:{apply:z,event:K,nullable:true},icon:{check:V,nullable:true,apply:N,event:B,themeable:true},status:{check:V,nullable:true,apply:I,event:A},showClose:{check:t,init:true,apply:p,themeable:true},showMaximize:{check:t,init:true,apply:p,themeable:true},showMinimize:{check:t,init:true,apply:p,themeable:true},allowClose:{check:t,init:true,apply:p},allowMaximize:{check:t,init:true,apply:p},allowMinimize:{check:t,init:true,apply:p},showStatusbar:{check:t,init:false,apply:J}},members:{__nk:null,__nl:null,getChildrenContainer:function(){return this.getChildControl(k);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(bj){var bk;

switch(bj){case W:bk=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(bk);
bk.add(this.getChildControl(X));
break;
case X:bk=new qx.ui.basic.Label();
bk.setContent(this.getStatus());
break;
case k:bk=new qx.ui.container.Composite();
this._add(bk,{flex:1});
break;
case r:var bm=new qx.ui.layout.Grid();
bm.setRowFlex(0,1);
bm.setColumnFlex(1,1);
bk=new qx.ui.container.Composite(bm);
this._add(bk);
bk.addListener(C,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(bk);
break;
case ba:bk=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(r).add(bk,{row:0,column:0});
break;
case bb:bk=new qx.ui.basic.Label(this.getCaption());
bk.setWidth(0);
bk.setAllowGrowX(true);
var bl=this.getChildControl(r);
bl.add(bk,{row:0,column:1});
break;
case n:bk=new qx.ui.form.Button();
bk.setFocusable(false);
bk.addListener(l,this._onMinimizeButtonClick,this);
this.getChildControl(r).add(bk,{row:0,column:2});
break;
case o:bk=new qx.ui.form.Button();
bk.setFocusable(false);
bk.addListener(l,this._onRestoreButtonClick,this);
this.getChildControl(r).add(bk,{row:0,column:3});
break;
case q:bk=new qx.ui.form.Button();
bk.setFocusable(false);
bk.addListener(l,this._onMaximizeButtonClick,this);
this.getChildControl(r).add(bk,{row:0,column:4});
break;
case m:bk=new qx.ui.form.Button();
bk.setFocusable(false);
bk.addListener(l,this._onCloseButtonClick,this);
this.getChildControl(r).add(bk,{row:0,column:6});
break;
}return bk||arguments.callee.base.call(this,bj);
},_updateCaptionBar:function(){var g;

if(this.getIcon()){this._showChildControl(ba);
}else{this._excludeChildControl(ba);
}
if(this.getCaption()){this._showChildControl(bb);
}else{this._excludeChildControl(bb);
}
if(this.getShowMinimize()){this._showChildControl(n);
g=this.getChildControl(n);
this.getAllowMinimize()?g.resetEnabled():g.setEnabled(false);
}else{this._excludeChildControl(n);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(o);
this._excludeChildControl(q);
}else{this._showChildControl(q);
this._excludeChildControl(o);
}g=this.getChildControl(q);
this.getAllowMaximize()?g.resetEnabled():g.setEnabled(false);
}else{this._excludeChildControl(q);
this._excludeChildControl(o);
}
if(this.getShowClose()){this._showChildControl(m);
g=this.getChildControl(m);
this.getAllowClose()?g.resetEnabled():g.setEnabled(false);
}else{this._excludeChildControl(m);
}},close:function(){if(this.fireNonBubblingEvent(T,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(E);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bd=parent.getBounds();

if(bd){var be=this.getSizeHint();
var bc=Math.round((bd.width-be.width)/2);
var top=Math.round((bd.height-be.height)/2);

if(top<0){top=0;
}this.moveTo(bc,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(!parent){return;
}
if(parent.supportsMaximize()){if(this.fireNonBubblingEvent(F,qx.event.type.Event,[false,true])){var b=this.getLayoutProperties();
this.__nl=b.left===undefined?0:b.left;
this.__nk=b.top===undefined?0:b.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(Y);
this._updateCaptionBar();
this.fireEvent(Q);
}}},minimize:function(){if(this.fireNonBubblingEvent(S,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(v);
}},restore:function(){if(!this.isMaximized()){return;
}
if(this.fireNonBubblingEvent(x,qx.event.type.Event,[false,true])){var br=this.__nl;
var top=this.__nk;
this.setLayoutProperties({edge:null,left:br,top:top});
this.removeState(Y);
this._updateCaptionBar();
this.fireEvent(P);
}},moveTo:function(a,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:a,top:top});
},isMaximized:function(){return this.hasState(Y);
},getMode:function(){if(!this.isVisible()){return H;
}else{if(this.isMaximized()){return Y;
}else{return u;
}}},_applyActive:function(bp,bq){if(bq){this.removeState(U);
}else{this.addState(U);
}},_getContentPaddingTarget:function(){return this.getChildControl(k);
},_applyShowStatusbar:function(bh,bi){if(bh){this._showChildControl(W);
}else{this._excludeChildControl(W);
}},_applyCaptionBarChange:function(bs,bt){this._updateCaptionBar();
},_applyStatus:function(h,i){var j=this.getChildControl(X,true);

if(j){j.setContent(h);
}},_applyCaption:function(d,f){this.getChildControl(bb).setContent(d);
},_applyIcon:function(bf,bg){this.getChildControl(ba).setSource(bf);
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var c=e.getRelatedTarget();

if(c!=null&&!qx.ui.core.Widget.contains(this,c)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(n).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(o).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(q).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(m).reset();
}}});
})();
(function(){var c="qx.ui.window.IDesktop";
qx.Interface.define(c,{members:{setWindowManager:function(a){this.assertInterface(a,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(b){this.assertInteger(b);
},unblockContent:function(){}}});
})();
(function(){var h="Number",g="qx.event.type.Event",f="__nm",e="_applyFirstColumnX",d="Integer",c="qx.ui.table.pane.Model",b="_applyMaxColumnCount",a="visibilityChangedPre";
qx.Class.define(c,{extend:qx.core.Object,construct:function(i){arguments.callee.base.call(this);
i.addListener(a,this._onColVisibilityChanged,this);
this.__nm=i;
},events:{"modelChanged":g},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:d,init:0,apply:e},maxColumnCount:{check:h,init:-1,apply:b}},members:{__nn:null,__nm:null,_applyFirstColumnX:function(m,n){this.__nn=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(B,C){this.__nn=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(A){this.__nm=A;
this.__nn=null;
},_onColVisibilityChanged:function(r){this.__nn=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__nn==null){var j=this.getFirstColumnX();
var l=this.getMaxColumnCount();
var k=this.__nm.getVisibleColumnCount();

if(l==-1||(j+l)>k){this.__nn=k-j;
}else{this.__nn=l;
}}return this.__nn;
},getColumnAtX:function(D){var E=this.getFirstColumnX();
return this.__nm.getVisibleColumnAtX(E+D);
},getX:function(w){var y=this.getFirstColumnX();
var z=this.getMaxColumnCount();
var x=this.__nm.getVisibleX(w)-y;

if(x>=0&&(z==-1||x<z)){return x;
}else{return -1;
}},getColumnLeft:function(s){var v=0;
var u=this.getColumnCount();

for(var x=0;x<u;x++){var t=this.getColumnAtX(x);

if(t==s){return v;
}v+=this.__nm.getColumnWidth(t);
}return -1;
},getTotalWidth:function(){var o=0;
var p=this.getColumnCount();

for(var x=0;x<p;x++){var q=this.getColumnAtX(x);
o+=this.__nm.getColumnWidth(q);
}return o;
}},destruct:function(){this._disposeFields(f);
}});
})();
(function(){var bn="",bm="!",bl="'!",bk="Expected '",bj="number",bi=",",bh="'",bg="Event (",bf="' but found ",be="The value '",co="function",cn="Expected value to be an array but found ",cm="' to implement the interface '",cl=") was fired.",ck="Expected value to be an integer >= 0 but found ",cj="' to be not equal with '",ci="' to '",ch="Expected value to be the CSS color '%1' (rgb(%2)), but found value '%3', which cannot be converted to a CSS color!",cg="Expected value to be a map but found ",cf="The function did not raise an exception!",bu="Expected value to be undefined but found ",bv="Called assertFalse with 'true'",bs="Expected value to be null but found ",bt="Expected object '",bq="string",br="Called assert with 'false'",bo="Assertion error! ",bp="Expected value to be a string but found ",bA="' but found '",bB="' must must be a key of the map '",bK="The String '",bH="Expected value not to be undefined but found ",bS=": ",bN="The raised exception does not have the expected type! ",cb=") not fired.",bX="qx.core.Assert",bD="Called assertTrue with 'false'",ce="Expected value to be typeof object but found ",cd="' (identical) but found '",cc="' must have any of the values defined in the array '",bC="Expected value to be a number but found ",bF="Expected value to be the CSS color '%1' (rgb(%2)), but found value '%3' (rgb(%4))!",bG="Expected value not to be null but found ",bJ="Expected value to be a qooxdoo widget but found ",bL="Expected value to be a qooxdoo object but found ",bO="' arguments.",bU="Expected value '%1' to be in the range '%2'..'%3'!",ca="' does not match the regular expression '",bw="' to be not identical with '",bx="' arguments but found '",bE=", ",bR="qx.core.AssertionError",bQ="Expected value to be a boolean but found ",bP="boolean",bW="Expected value to be typeof '",bV="Expected value to be typeof function but found ",bM="Expected value to be an integer but found ",bT="Called fail().",bc="Expected value to be a DOM element but found  '%1'!",bY="function Array(",by="Expected value to be a number >= 0 but found ",bz="Expected value to be instanceof '",bI="Wrong number of arguments given. Expected '",bd="object";
qx.Class.define(bX,{statics:{__no:function(B,C,D){if(!B){var E=bo+C+bS+D;
qx.log.Logger.error(E);

if(qx.Class.isDefined(bR)){var F=new qx.core.AssertionError(C,D);
qx.log.Logger.error("Stack trace: \n"+F.getStackTrace());
throw F;
}else{throw new Error(E);
}}},assert:function(cv,cw){this.__no(cv==true,cw||bn,br);
},fail:function(cR){this.__no(false,cR||bn,bT);
},assertTrue:function(dx,dy){this.__no(dx===true,dy||bn,bD);
},assertFalse:function(cA,cB){this.__no(cA===false,cB||bn,bv);
},assertEquals:function(f,g,h){this.__no(f==g,h||bn,bk+f+bA+g+bl);
},assertNotEquals:function(cx,cy,cz){this.__no(cx!=cy,cz||bn,bk+cx+cj+cy+bl);
},assertIdentical:function(w,x,y){this.__no(w===x,y||bn,bk+w+cd+x+bl);
},assertNotIdentical:function(V,W,X){this.__no(V!==W,X||bn,bk+V+bw+W+bl);
},assertNotUndefined:function(N,O){this.__no(N!==undefined,O||bn,bH+N+bm);
},assertUndefined:function(z,A){this.__no(z===undefined,A||bn,bu+z+bm);
},assertNotNull:function(l,m){this.__no(l!==null,m||bn,bG+l+bm);
},assertNull:function(cU,cV){this.__no(cU===null,cV||bn,bs+cU+bm);
},assertJsonEquals:function(dz,dA,dB){this.assertEquals(qx.util.Json.stringify(dz),qx.util.Json.stringify(dA),dB);
},assertMatch:function(dC,dD,dE){this.assertString(dC);
this.__no(dC.search(dD)>=0?true:false,dE||bn,bK+dC+ca+dD.toString()+bl);
},assertArgumentsCount:function(cG,cH,cI,cJ){var cK=cG.length;
this.__no((cK>=cH&&cK<=cI),cJ||bn,bI+cH+ci+cI+bx+arguments.length+bO);
},assertEventFired:function(G,event,H,I,J){var L=false;
var K=function(e){if(I){I.call(G,e);
}L=true;
};
var M=G.addListener(event,K,G);
H.call();
this.__no(L===true,J||bn,bg+event+cb);
G.removeListenerById(M);
},assertEventNotFired:function(cW,event,cX,cY){var db=false;
var da=function(e){db=true;
};
var dc=cW.addListener(event,da,cW);
cX.call();
this.__no(db===false,cY||bn,bg+event+cl);
cW.removeListenerById(dc);
},assertException:function(dm,dn,dp,dq){var dn=dn||Error;
var dr;
qx.log.Logger.warn("This exception is expected: "+dn.classname);

try{dm();
}catch(a){dr=a;
}
if(dr==null){this.__no(false,dq||bn,cf);
}this.__no(dr instanceof dn,dq||bn,bN+dn);

if(dp){this.assertMatch(dr.toString(),dp,dq);
}},assertInArray:function(b,c,d){this.__no(c.indexOf(b)!==-1,d||bn,be+b+cc+c.join(bE)+bh);
},assertArrayEquals:function(dg,dh,di){this.assertArray(dg,di);
this.assertArray(dh,di);
this.assertEquals(dg.length,dh.length,di);

for(var i=0;i<dg.length;i++){this.assertIdentical(dg[i],dh[i],di);
}},assertKeyInMap:function(Y,ba,bb){this.__no(ba[Y]!==undefined,bb||bn,be+Y+bB+qx.util.Json.stringify(ba)+bh);
},assertFunction:function(cE,cF){this.__no(typeof cE===co,cF||bn,bV+cE+bm);
},assertString:function(dv,dw){this.__no(typeof dv===bq||dv instanceof String,dw||bn,bp+dv+bm);
},assertBoolean:function(dF,dG){this.__no(typeof dF===bP||dF instanceof Boolean,dG||bn,bQ+dF+bm);
},assertNumber:function(ct,cu){this.__no((typeof ct===bj||ct instanceof Number)&&isFinite(ct),cu||bn,bC+ct+bm);
},assertPositiveNumber:function(ds,dt){this.__no((typeof ds===bj||ds instanceof Number)&&isFinite(ds)&&ds>=0,dt||bn,by+ds+bm);
},assertInteger:function(p,q){this.__no(((typeof p===bj||p instanceof Number)&&isFinite(p)&&p%1===0),q||bn,bM+p+bm);
},assertPositiveInteger:function(j,k){this.__no(((typeof j===bj||j instanceof Number)&&isFinite(j)&&j%1===0&&j>=0),k||bn,ck+j+bm);
},assertInRange:function(cp,cq,cr,cs){this.__no(cp>=cq&&cp<=cr,cs||bn,qx.lang.String.format(bU,[cp,cq,cr]));
},assertObject:function(cC,cD){this.__no(typeof cC===bd&&cC!==null,cD||bn,ce+cC+bm);
},assertArray:function(cP,cQ){this.__no(cP instanceof Array||cP.constructor.toString().indexOf(bY)===0||cP.$$isArray,cQ||bn,cn+cP+bm);
},assertMap:function(dd,de){var df=({}).constructor;
this.__no(dd&&dd.constructor===df,de||bn,cg+dd+bm);
},assertType:function(dj,dk,dl){this.__no(typeof (dj)===dk,dl||bn,bW+dk+bf+dj+bm);
},assertInstance:function(cL,cM,cN){var cO=cM.classname||cM+bn;
this.__no(cL instanceof cM,cN||bn,bz+cO+bf+cL+bm);
},assertInterface:function(t,u,v){this.__no(qx.Class.implementsInterface(t,u),v||bn,bt+t+cm+u+bl);
},assertCssColor:function(P,Q,R){var S=qx.util.ColorUtil;
var U=S.stringToRgb(P);

try{var T=S.stringToRgb(Q);
}catch(du){this.__no(false,R||bn,qx.lang.String.format(ch,[P,U.join(bi),Q]));
}this.__no(U[0]==T[0]&&U[1]==T[1]&&U[2]==T[2],R||bn,qx.lang.String.format(bF,[P,U.join(bi),Q,T.join(bi)]));
},assertElement:function(cS,cT){this.__no(qx.dom.Node.isElement(cS),cT||bn,qx.lang.String.format(bc,[cS]));
},assertQxObject:function(n,o){this.__no(n instanceof qx.core.Object,o||bn,bL+n+bm);
},assertQxWidget:function(r,s){this.__no(r instanceof qx.ui.core.Widget,s||bn,bJ+r+bm);
}}});
})();
(function(){var y="",x="==",w=">",v="between",u="<",t="regex",s="!between",r=">=",q="!=",p="<=",j="font-weight",o=";",m="text-align",h='g',g=":",l="qx.ui.table.cellrenderer.Conditional",k="color",n="font-style";
qx.Class.define(l,{extend:qx.ui.table.cellrenderer.Default,construct:function(c,d,e,f){arguments.callee.base.call(this);
this.numericAllowed=[x,q,w,u,r,p];
this.betweenAllowed=[v,s];
this.conditions=[];
this.__nC=c||y;
this.__nD=d||y;
this.__nE=e||y;
this.__nF=f||y;
},members:{__nC:null,__nD:null,__nE:null,__nF:null,__nG:function(a,b){if(a[1]!=null){b[m]=a[1];
}
if(a[2]!=null){b[k]=a[2];
}
if(a[3]!=null){b[n]=a[3];
}
if(a[4]!=null){b[j]=a[4];
}},addNumericCondition:function(H,I,J,K,L,M,N){var O=null;

if(qx.lang.Array.contains(this.numericAllowed,H)){if(I!=null){O=[H,J,K,L,M,I,N];
}}
if(O!=null){this.conditions.push(O);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(W,X,Y,ba,bb,bc,bd,be){if(qx.lang.Array.contains(this.betweenAllowed,W)){if(X!=null&&Y!=null){var bf=[W,ba,bb,bc,bd,X,Y,be];
}}
if(bf!=null){this.conditions.push(bf);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(P,Q,R,S,T,U){if(P!=null){var V=[t,Q,R,S,T,P,U];
}
if(V!=null){this.conditions.push(V);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(z){if(!this.conditions.length){return z.style||y;
}var E=z.table.getTableModel();
var i;
var G;
var A;
var C={"text-align":this.__nC,"color":this.__nD,"font-style":this.__nE,"font-weight":this.__nF};

for(i in this.conditions){G=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){A=z.value;
}else{A=E.getValueById(this.conditions[i][6],z.row);
}
switch(this.conditions[i][0]){case x:if(A==this.conditions[i][5]){G=true;
}break;
case q:if(A!=this.conditions[i][5]){G=true;
}break;
case w:if(A>this.conditions[i][5]){G=true;
}break;
case u:if(A<this.conditions[i][5]){G=true;
}break;
case r:if(A>=this.conditions[i][5]){G=true;
}break;
case p:if(A<=this.conditions[i][5]){G=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){A=z.value;
}else{A=E.getValueById(this.conditions[i][7],z.row);
}
switch(this.conditions[i][0]){case v:if(A>=this.conditions[i][5]&&A<=this.conditions[i][6]){G=true;
}break;
case s:if(A<this.conditions[i][5]&&A>this.conditions[i][6]){G=true;
}break;
}}else if(this.conditions[i][0]==t){if(this.conditions[i][6]==null){A=z.value;
}else{A=E.getValueById(this.conditions[i][6],z.row);
}var B=new RegExp(this.conditions[i][5],h);
G=B.test(A);
}if(G==true){this.__nG(this.conditions[i],C);
}}var F=[];

for(var D in C){if(C[D]){F.push(D,g,C[D],o);
}}return F.join(y);
}}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(j){this.getContentElement().setStyle(h,j);
},_applyOverflowY:function(k){this.getContentElement().setStyle(d,k);
}}});
})();
(function(){var n="display",m="mousedown",l="load",k="String",j="mouseup",i="losecapture",h="none",g="repeat",f="height",e="px",I="url(",H=")",G="__nq",F="qx.client",E="div",D="_applyFrameName",C="qx.event.type.Event",B="name",A="",z="width",u="zIndex",v="_applySource",s="top",t="mshtml",q="block",r="qx.ui.embed.Iframe",o="position",p="iframe",w="left",x="absolute",y="qx/static/blank.gif";
qx.Class.define(r,{extend:qx.ui.core.Widget,include:qx.ui.core.MNativeOverflow,construct:function(J){if(J!=null){this.__np=J;
}arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,m,this.block,this,true);
qx.event.Registration.addListener(document.body,j,this.release,this,true);
qx.event.Registration.addListener(document.body,i,this.release,this,true);
this.__nq=this._createBlockerElement();
this.getContainerElement().add(this.__nq);
},events:{"load":C},properties:{appearance:{refine:true,init:p},source:{check:k,apply:v,nullable:true},frameName:{check:k,init:A,apply:D}},members:{__np:null,__nq:null,renderLayout:function(K,top,L,M){arguments.callee.base.call(this,K,top,L,M);
var O=e;
var N=this.getInsets();
this.__nq.setStyle(w,N.left+O);
this.__nq.setStyle(s,N.top+O);
this.__nq.setStyle(z,(L-N.left-N.right)+O);
this.__nq.setStyle(f,(M-N.top-N.bottom)+O);
},_createContentElement:function(){var b=new qx.html.Iframe(this.__np);
b.addListener(l,this._onIframeLoad,this);
return b;
},_createBlockerElement:function(){var a=new qx.html.Element(E);
a.setStyle(u,20);
a.setStyle(o,x);
a.setStyle(n,h);
if(qx.core.Variant.isSet(F,t)){a.setStyles({backgroundImage:I+qx.util.ResourceManager.toUri(y)+H,backgroundRepeat:g});
}return a;
},_onIframeLoad:function(e){this.fireNonBubblingEvent(l);
},getWindow:function(){return this.getContentElement().getWindow();
},getDocument:function(){return this.getContentElement().getDocument();
},getBody:function(){return this.getContentElement().getBody();
},getName:function(){return this.getContentElement().getName();
},block:function(){this.__nq.setStyle(n,q);
},release:function(){this.__nq.setStyle(n,h);
},reload:function(){this.getContentElement().reload();
},_applySource:function(P,Q){this.getContentElement().setSource(P);
},_applyFrameName:function(c,d){this.getContentElement().setAttribute(B,c);
}},destruct:function(){this._disposeObjects(G);
qx.event.Registration.removeListener(document.body,m,this.block,this,true);
qx.event.Registration.removeListener(document.body,j,this.release,this,true);
qx.event.Registration.removeListener(document.body,i,this.release,this,true);
}});
})();
(function(){var m="source",l="name",k="qx.html.Iframe",j="qx.event.type.Event",i="iframe";
qx.Class.define(k,{extend:qx.html.Element,construct:function(n){arguments.callee.base.call(this,i);
this._setProperty(m,n);
},events:{"load":j},members:{_applyProperty:function(name,g){arguments.callee.base.call(this,name,g);

if(name==m){var h=this.getDomElement();
qx.bom.Iframe.setSource(h,g);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var f=this.getDomElement();

if(f){return qx.bom.Iframe.getWindow(f);
}else{return null;
}},getDocument:function(){var c=this.getDomElement();

if(c){return qx.bom.Iframe.getDocument(c);
}else{return null;
}},getBody:function(){var a=this.getDomElement();

if(a){return qx.bom.Iframe.getBody(a);
}else{return null;
}},setSource:function(b){this._setProperty(m,b);
return this;
},getSource:function(){return this._getProperty(m);
},setName:function(name){this.setAttribute(l,name);
return this;
},getName:function(){return this.getAttribute(l);
},reload:function(){var e=this.getDomElement();

if(e){var d=this.getSource();
this.setSource(null);
this.setSource(d);
}}}});
})();
(function(){var J="active",I="splitter",H="slider",G="horizontal",F="vertical",E="mousedown",D="mouseout",C="qx.client",B="height",A="row-resize",X="mousemove",W="move",V="maxHeight",U="width",T="_applyOrientation",S="splitpane",R="qx.ui.splitpane.Pane",Q="minHeight",P="knob",O="mouseup",M="minWidth",N="losecapture",K="col-resize",L="maxWidth";
qx.Class.define(R,{extend:qx.ui.core.Widget,construct:function(Y){arguments.callee.base.call(this);
if(Y){this.setOrientation(Y);
}else{this.initOrientation();
}this.addListener(E,this._onMouseDown);
this.addListener(O,this._onMouseUp);
this.addListener(X,this._onMouseMove);
this.addListener(D,this._onMouseOut);
this.addListener(N,this._onMouseUp);
},properties:{appearance:{refine:true,init:S},orientation:{init:G,check:[G,F],apply:T}},members:{__nr:null,__ns:null,__nt:null,__nu:null,__nv:null,__nw:null,__nx:null,_createChildControlImpl:function(s){var t;

switch(s){case H:t=new qx.ui.splitpane.Slider(this);
t.exclude();
this._add(t,{type:s});
break;
case I:t=new qx.ui.splitpane.Splitter(this);
this._add(t,{type:s});
t.addListener(W,this._onSplitterMove,this);
break;
}return t||arguments.callee.base.call(this,s);
},_applyOrientation:function(b,c){var d=this.getChildControl(H);
var h=this.getChildControl(I);
this.__nv=b===G;
var g=this._getLayout();

if(g){g.dispose();
}var f=b===F?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(f);
h.replaceState(c,b);
h.getChildControl(P).replaceState(c,b);
d.replaceState(c,b);
},add:function(j,k){if(k==null){this._add(j);
}else{this._add(j,{flex:k});
}},remove:function(a){this._remove(a);
},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}var u=this.getChildControl(I);

if(!u.hasState(J)){return;
}var w=u.getContainerLocation();
var v=this.getContentLocation();
this.__nr=this.__nv?e.getDocumentLeft()-w.left+v.left:e.getDocumentTop()-w.top+v.top;
var y=this.getChildControl(H);
var x=u.getBounds();
y.setUserBounds(x.left,x.top,x.width,x.height);
y.setZIndex(u.getZIndex()+1);
y.show();
this.__ns=true;
this.capture();
},_onMouseMove:function(e){this.__nt=e.getDocumentLeft();
this.__nu=e.getDocumentTop();
if(this.__ns){this.__nB();
var bk=this.getChildControl(H);
var bl=this.__nw;

if(this.__nv){bk.setDomLeft(bl);
}else{bk.setDomTop(bl);
}}else{this.__nA();
}},_onMouseOut:function(e){this.__nt=-1;
this.__nu=-1;
this.__nA();
},_onMouseUp:function(e){if(!this.__ns){return;
}this.__ny();
var i=this.getChildControl(H);
i.exclude();
delete this.__ns;
this.releaseCapture();
this.__nA();
},_onSplitterMove:function(){this.__nA();
},__ny:function(){var o=this.__nw;
var l=this.__nx;

if(o==null){return;
}var q=this._getChildren();
var p=q[2];
var m=q[3];
var n=p.getLayoutProperties().flex;
var r=m.getLayoutProperties().flex;
if((n!=0)&&(r!=0)){p.setLayoutProperties({flex:o});
m.setLayoutProperties({flex:l});
}else{if(this.__nv){p.setWidth(o);
m.setWidth(l);
}else{p.setHeight(o);
m.setHeight(l);
}}},__nz:function(){var bm=this.getChildControl(I);
var bo=bm.getBounds();
var bq=bm.getContainerLocation();
var bn=6;
if(!bq){return;
}var br=this.__nt;
var bs=bo.width;
var bp=bq.left;

if(bs<bn){bp-=Math.floor((bn-bs)/2);
bs=bn;
}
if(br<bp||br>(bp+bs)){return false;
}var br=this.__nu;
var bs=bo.height;
var bp=bq.top;

if(bs<bn){bp-=Math.floor((bn-bs)/2);
bs=bn;
}
if(br<bp||br>(bp+bs)){return false;
}return true;
},__nA:qx.core.Variant.select(C,{"opera":function(){var z=this.getChildControl(I);

if(this.__ns||this.__nz()){z.addState(J);
}else if(z.hasState(J)){z.removeState(J);
}},"default":function(){var bu=this.getChildControl(I);
var bv=this.getApplicationRoot();
if(this.__ns||this.__nz()){var bt=this.__nv?K:A;
this.setCursor(bt);
bv.setGlobalCursor(bt);
bu.addState(J);
}else if(bu.hasState(J)){this.resetCursor();
bv.resetGlobalCursor();
bu.removeState(J);
}}}),__nB:function(){if(this.__nv){var bc=M,bj=U,bd=L,bh=this.__nt;
}else{var bc=Q,bj=B,bd=V,bh=this.__nu;
}var bi=this._getChildren();
var ba=bi[2].getSizeHint();
var bf=bi[3].getSizeHint();
var bg=bi[2].getBounds()[bj]+bi[3].getBounds()[bj];
var be=bh-this.__nr;
var bb=bg-be;
if(be<ba[bc]){bb-=ba[bc]-be;
be=ba[bc];
}else if(bb<bf[bc]){be-=bf[bc]-bb;
bb=bf[bc];
}if(be>ba[bd]){bb+=be-ba[bd];
be=ba[bd];
}else if(bb>bf[bd]){be+=bb-bf[bd];
bb=bf[bd];
}this.__nw=be;
this.__nx=bb;
}}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(h){arguments.callee.base.call(this);
if(h.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(f){var g;

switch(f){case d:g=new qx.ui.basic.Image;
this._add(g);
break;
}return g||arguments.callee.base.call(this,f);
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.VLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(o,p){var F=this._getLayoutChildren();
var length=F.length;
var B,E;
var r,q,z,s;

for(var i=0;i<length;i++){B=F[i];
E=B.getLayoutProperties().type;

if(E===b){q=B;
}else if(E===c){z=B;
}else if(!r){r=B;
}else{s=B;
}}
if(r&&s){var H=r.getLayoutProperties().flex;
var u=s.getLayoutProperties().flex;

if(H==null){H=1;
}
if(u==null){u=1;
}var G=r.getSizeHint();
var x=q.getSizeHint();
var y=s.getSizeHint();
var t=G.height;
var C=x.height;
var D=y.height;

if(H>0&&u>0){var v=H+u;
var w=p-C;
var t=Math.round((w/v)*H);
var D=w-t;
var A=qx.ui.layout.Util.arrangeIdeals(G.minHeight,t,G.maxHeight,y.minHeight,D,y.maxHeight);
t=A.begin;
D=A.end;
}else if(H>0){t=p-C-D;

if(t<G.minHeight){t=G.minHeight;
}
if(t>G.maxHeight){t=G.maxHeight;
}}else if(u>0){D=p-t-C;

if(D<y.minHeight){D=y.minHeight;
}
if(D>y.maxHeight){D=y.maxHeight;
}}r.renderLayout(0,0,o,t);
q.renderLayout(0,t,o,C);
s.renderLayout(0,t+C,o,D);
}else{q.renderLayout(0,0,0,0);
if(r){r.renderLayout(0,0,o,p);
}else if(s){s.renderLayout(0,0,o,p);
}}},_computeSizeHint:function(){var n=this._getLayoutChildren();
var length=n.length;
var f,e,m;
var g=0,j=0,h=0;
var k=0,l=0,d=0;

for(var i=0;i<length;i++){f=n[i];
m=f.getLayoutProperties();
if(m.type===c){continue;
}e=f.getSizeHint();
g+=e.minHeight;
j+=e.height;
h+=e.maxHeight;

if(e.minWidth>k){k=e.minWidth;
}
if(e.width>l){l=e.width;
}
if(e.maxWidth>d){d=e.maxWidth;
}}return {minHeight:g,height:j,maxHeight:h,minWidth:k,width:l,maxWidth:d};
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.HLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(o,p){var F=this._getLayoutChildren();
var length=F.length;
var C,E;
var r,q,z,s;

for(var i=0;i<length;i++){C=F[i];
E=C.getLayoutProperties().type;

if(E===b){q=C;
}else if(E===c){z=C;
}else if(!r){r=C;
}else{s=C;
}}
if(r&&s){var H=r.getLayoutProperties().flex;
var t=s.getLayoutProperties().flex;

if(H==null){H=1;
}
if(t==null){t=1;
}var G=r.getSizeHint();
var w=q.getSizeHint();
var y=s.getSizeHint();
var D=G.width;
var B=w.width;
var A=y.width;

if(H>0&&t>0){var u=H+t;
var v=o-B;
var D=Math.round((v/u)*H);
var A=v-D;
var x=qx.ui.layout.Util.arrangeIdeals(G.minWidth,D,G.maxWidth,y.minWidth,A,y.maxWidth);
D=x.begin;
A=x.end;
}else if(H>0){D=o-B-A;

if(D<G.minWidth){D=G.minWidth;
}
if(D>G.maxWidth){D=G.maxWidth;
}}else if(t>0){A=o-D-B;

if(A<y.minWidth){A=y.minWidth;
}
if(A>y.maxWidth){A=y.maxWidth;
}}r.renderLayout(0,0,D,p);
q.renderLayout(D,0,B,p);
s.renderLayout(D+B,0,A,p);
}else{q.renderLayout(0,0,0,0);
if(r){r.renderLayout(0,0,o,p);
}else if(s){s.renderLayout(0,0,o,p);
}}},_computeSizeHint:function(){var n=this._getLayoutChildren();
var length=n.length;
var f,e,m;
var k=0,l=0,d=0;
var g=0,j=0,h=0;

for(var i=0;i<length;i++){f=n[i];
m=f.getLayoutProperties();
if(m.type===c){continue;
}e=f.getSizeHint();
k+=e.minWidth;
l+=e.width;
d+=e.maxWidth;

if(e.minHeight>g){g=e.minHeight;
}
if(e.height>j){j=e.height;
}
if(e.maxHeight>h){h=e.maxHeight;
}}return {minWidth:k,width:l,maxWidth:d,minHeight:g,height:j,maxHeight:h};
}}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){arguments.callee.base.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var u="pressed",t="abandoned",s="hovered",r="checked",q="Space",p="String",o="Enter",n="mouseup",m="mousedown",l="Boolean",d="changeName",k="mouseover",h="mouseout",c="changeValue",b="_applyChecked",g="qx.ui.form.ToggleButton",f="changeChecked",i="keydown",a="button",j="keyup";
qx.Class.define(g,{extend:qx.ui.basic.Atom,implement:qx.ui.form.IFormElement,construct:function(x,y){arguments.callee.base.call(this,x,y);
this.addListener(k,this._onMouseOver);
this.addListener(h,this._onMouseOut);
this.addListener(m,this._onMouseDown);
this.addListener(n,this._onMouseUp);
this.addListener(i,this._onKeyDown);
this.addListener(j,this._onKeyUp);
},properties:{appearance:{refine:true,init:a},checked:{check:l,init:false,apply:b,event:f},focusable:{refine:true,init:true},name:{check:p,nullable:true,event:d},value:{check:p,nullable:true,event:c}},members:{_applyChecked:function(v,w){v?this.addState(r):this.removeState(r);
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(s);

if(this.hasState(t)){this.removeState(t);
this.addState(u);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(s);

if(this.hasState(u)){if(!this.getChecked()){this.removeState(u);
}this.addState(t);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(t);
this.addState(u);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(t)){this.removeState(t);
}else if(this.hasState(u)){this.toggleChecked();
}this.removeState(u);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case o:case q:this.removeState(t);
this.addState(u);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(u)){return;
}
switch(e.getKeyIdentifier()){case o:case q:this.removeState(t);
this.toggleChecked();
this.removeState(u);
e.stopPropagation();
}}}});
})();
(function(){var e="inherit",d="toolbar-button",c="qx.ui.toolbar.CheckBox",b="keydown",a="keyup";
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(f,g){arguments.callee.base.call(this,f,g);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();


if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();

