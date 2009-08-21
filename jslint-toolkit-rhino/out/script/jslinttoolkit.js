if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application": "jslinttoolkit.Application", "qx.theme": "jslinttoolkit.theme.Theme", "qx.version": "0.8.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!window.qxlibraries) qxlibraries = {};
var libinfo = {"qx": {"resourceUri": "resource", "version": "trunk"}, "jslinttoolkit": {"resourceUri": "resource", "version": "trunk"}};
for (var k in libinfo) qxlibraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Modern/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", -5, 0], "qx/decoration/Modern/window/captionbar-inactive-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -12], "qx/icon/Tango/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -204], "qx/decoration/Modern/tabview-pane-tb-combined.png": [30, 180, "png", "qx"], "qx/decoration/Modern/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -210, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -88], "qx/icon/Tango/22/mimetypes/office-document.png": [22, 22, "png", "qx"], "qx/decoration/Modern/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", -15, 0], "qx/decoration/Modern/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -60], "jslinttoolkit/syntax/styles/magnifier.png": [16, 16, "png", "jslinttoolkit"], "qx/decoration/Modern/window/minimize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -27, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png": [76, 15, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", 0, 0], "jslinttoolkit/syntax/styles/page_white_copy.png": [16, 16, "png", "jslinttoolkit"], "qx/decoration/Modern/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -51, 0], "qx/decoration/Modern/form/button-preselected-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -52, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/window/close-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", -6, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-l.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-right-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tree-combined.png": [32, 8, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-pressed-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -60, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/window/statusbar-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-checked-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -36], "qx/decoration/Modern/groupbox-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/tree/closed-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-gradient.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", -20, 0], "qx/decoration/Modern/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-tr.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -60], "qx/decoration/Modern/window/captionbar-active-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -30], "qx/decoration/Modern/pane-tb-combined.png": [6, 36, "png", "qx"], "jslinttoolkit/syntax/styles/printer.png": [16, 16, "png", "jslinttoolkit"], "qx/decoration/Modern/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Modern/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -48, 0], "qx/decoration/Modern/arrows/right.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -61, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -15], "qx/decoration/Modern/pane/pane-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -18], "qx/decoration/Modern/form/button-hovered-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, 0], "qx/decoration/Modern/form/input.png": [84, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -320, 0], "qx/decoration/Modern/window/statusbar-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -84], "qx/decoration/Modern/form/button-disabled-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -48], "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/minimize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -45, 0], "jslinttoolkit/syntax/styles/shThemeMidnight.css": "jslinttoolkit", "qx/icon/Tango/32/mimetypes/office-document.png": [32, 32, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-l.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-lr-active-combined.png": [12, 9, "png", "qx"], "qx/decoration/Modern/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -75], "qx/decoration/Modern/form/button-preselected-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -124], "qx/decoration/Modern/menu-checkradio-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png": [15, 76, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -105, 0], "qx/decoration/Modern/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -38, 0], "qx/decoration/Modern/form/button-checked-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -24], "qx/decoration/Modern/form/button-preselected-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -132], "qx/decoration/Modern/form/button-disabled-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -64], "qx/decoration/Modern/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-l.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -4, 0], "qx/decoration/Modern/window/captionbar-inactive-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png": [10, 14, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -18], "qx/decoration/Modern/tabview/tab-button-right-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/button-pressed-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -188], "qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-left-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/inputcheckradio-combined.png": [404, 14, "png", "qx"], "qx/decoration/Modern/form/button-disabled-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -60], "qx/decoration/Modern/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-hovered-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -104], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-bottom-active-c.png": [20, 14, "png", "qx"], "jslinttoolkit/syntax/scripts/shBrushJScript.js": "jslinttoolkit", "qx/decoration/Modern/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -32, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -3], "qx/icon/Tango/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -112, 0], "qx/decoration/Modern/window/captionbar-active-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-left-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, 0], "qx/decoration/Modern/table/header-cell.png": [20, 18, "png", "qx", "qx/decoration/Modern/table-combined.png", -44, 0], "qx/decoration/Modern/pane/pane-l.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/maximize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -54, 0], "qx/decoration/Modern/form/input-focused.png": [40, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -280, 0], "qx/decoration/Modern/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -140, 0], "qx/decoration/Modern/tabview/tabview-pane-b.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -90], "qx/decoration/Modern/tabview/tabview-pane-tl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -30], "qx/icon/Tango/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", -35, 0], "jslinttoolkit/Thumbs.db": "jslinttoolkit", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -120, 0], "qx/decoration/Modern/form/button-checked-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -8, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/static/blank.gif": [1, 1, "gif", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-up.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -156, 0], "qx/decoration/Modern/pane-lr-combined.png": [12, 238, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", 0, 0], "qx/icon/Tango/22/places/folder.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/window/captionbar-active-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -45], "jslinttoolkit/image/Thumbs.db": "jslinttoolkit", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png": [12, 9, "png", "qx"], "qx/icon/Tango/22/places/folder-open.png": [22, 22, "png", "qx"], "qx/decoration/Modern/toolbar/toolbar-gradient-blue.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -30], "qx/decoration/Modern/groupbox/groupbox-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -20], "qx/decoration/Modern/pane/pane-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-hovered-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -100], "qx/decoration/Modern/window-captionbar-buttons-combined.png": [108, 9, "png", "qx"], "qx/decoration/Modern/pane/pane-r.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", -6, 0], "qx/decoration/Modern/form/button-hovered-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -116], "qx/decoration/Modern/window-captionbar-tb-active-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -12], "qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/window/statusbar-l.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-disabled-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -52], "qx/decoration/Modern/scrollbar/scrollbar-down.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -142, 0], "qx/decoration/Modern/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Modern/scrollbar/slider-knob-background.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -162, 0], "qx/decoration/Modern/form/button-disabled-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -56], "qx/decoration/Modern/window/statusbar-r.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", -4, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", 0, 0], "jslinttoolkit/syntax/styles/Thumbs.db": "jslinttoolkit", "qx/decoration/Modern/form/button-preselected-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-top-active-r.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", -5, 0], "qx/decoration/Modern/arrows/forward.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -26, 0], "qx/decoration/Modern/form/button-preselected-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -136], "qx/decoration/Modern/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -126, 0], "qx/decoration/Modern/arrows-combined.png": [87, 8, "png", "qx"], "qx/decoration/Modern/arrows/left.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -41, 0], "qx/decoration/Modern/form/button-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -24, 0], "qx/decoration/Modern/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -19, 0], "qx/decoration/Modern/tabview/tab-button-top-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-right-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -25], "qx/decoration/Modern/pane/pane-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-left.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -148, 0], "qx/decoration/Modern/button-tb-combined.png": [4, 216, "png", "qx"], "qx/decoration/Modern/pane/pane-c.png": [20, 238, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -148], "qx/decoration/Modern/selection.png": [110, 20, "png", "qx"], "qx/decoration/Modern/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Modern/table-combined.png", -64, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/arrows/up.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -79, 0], "qx/decoration/Modern/form/button-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -212], "qx/decoration/Modern/form/button-pressed-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -168], "qx/decoration/Modern/window/maximize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -63, 0], "qx/decoration/Modern/tabview/tab-button-top-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -48, 0], "qx/decoration/Modern/form/button-checked-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-pressed-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -176], "jslinttoolkit/syntax/styles/shThemeEmacs.css": "jslinttoolkit", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane.png": [185, 250, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-t.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/form/button-checked-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -40], "qx/decoration/Modern/groupbox/groupbox-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-preselected-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -160], "qx/decoration/Modern/form/button-hovered-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/form/button-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -56, 0], "qx/decoration/Modern/window/close-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -18, 0], "qx/decoration/Modern/arrows/down.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -18, 0], "qx/decoration/Modern/tabview/tab-button-left-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-disabled-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -20, 0], "qx/decoration/Modern/window/captionbar-inactive-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -18], "qx/decoration/Modern/arrows/right-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -56, 0], "jslinttoolkit/image/go-up.png": [16, 16, "png", "jslinttoolkit"], "qx/decoration/Modern/arrows/left-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -36, 0], "qx/decoration/Modern/form/button-pressed-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -172], "qx/decoration/Modern/tabview/tabview-pane-r.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", -30, 0], "qx/decoration/Modern/form/button-preselected-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -44, 0], "jslinttoolkit/image/warningIcon.png": [14, 14, "png", "jslinttoolkit"], "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview-button-right-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-top-active-l.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-part.gif": [7, 1, "gif", "qx"], "qx/decoration/Modern/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -30], "qx/decoration/Modern/tabview/tab-button-right-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window/statusbar-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -4], "qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-left-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", 0, 0], "jslinttoolkit/image/infoIcon.png": [14, 14, "png", "jslinttoolkit"], "jslinttoolkit/syntax/styles/wrapping.png": [16, 16, "png", "jslinttoolkit"], "jslinttoolkit/syntax/styles/shCore.css": "jslinttoolkit", "qx/decoration/Modern/form/button-preselected-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -40, 0], "qx/decoration/Modern/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -224, 0], "qx/decoration/Modern/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -14, 0], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png": [10, 12, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -132, 0], "qx/decoration/Modern/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -15], "jslinttoolkit/image/document-folder.png": [22, 22, "png", "jslinttoolkit"], "jslinttoolkit/image/test.png": [32, 32, "png", "jslinttoolkit"], "qx/decoration/Modern/tabview/tab-button-right-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/tree/open-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -16, 0], "jslinttoolkit/source.htm": "jslinttoolkit", "qx/decoration/Modern/form/button-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -76], "qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/groupbox/groupbox-r.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", -4, 0], "qx/decoration/Modern/arrows/up-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -66, 0], "qx/decoration/Modern/form/button-preselected-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -128], "qx/decoration/Modern/form/button-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -68, 0], "qx/decoration/Modern/window/statusbar-c.png": [20, 7, "png", "qx"], "qx/decoration/Modern/tree/closed.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -8, 0], "qx/decoration/Modern/form/button-disabled-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tree/open.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -24, 0], "qx/decoration/Modern/table/ascending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", 0, 0], "qx/decoration/Modern/groupbox/groupbox-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -4], "qx/decoration/Modern/menu/bar-background.png": [40, 20, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", -20, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -168, 0], "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -16, 0], "qx/decoration/Modern/form/button-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -208], "qx/decoration/Modern/form/button-hovered-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -108], "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/window/close-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -9, 0], "qx/decoration/Modern/splitpane/knob-horizontal.png": [1, 8, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, 0], "qx/decoration/Modern/groupbox/groupbox-c.png": [20, 51, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -25], "qx/decoration/Modern/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -154, 0], "qx/decoration/Modern/arrows/down-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", 0, 0], "qx/decoration/Modern/menu/background.png": [20, 49, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", 0, 0], "qx/decoration/Modern/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Modern/form/button-checked-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/restore-active-hovered.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -81, 0], "qx/decoration/Modern/window/captionbar-inactive-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -24], "qx/decoration/Modern/window/restore-active.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -90, 0], "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png": [6, 36, "png", "qx"], "qx/icon/Tango/32/places/folder-open.png": [32, 32, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png": [20, 15, "png", "qx"], "jslinttoolkit/syntax/styles/shThemeRDark.css": "jslinttoolkit", "jslinttoolkit/image/help-contents.png": [22, 22, "png", "jslinttoolkit"], "qx/decoration/Modern/tabview/tab-button-bottom-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, 0], "qx/decoration/Modern/table/boolean-true.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -22, 0], "qx/decoration/Modern/window/captionbar-active-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -12], "qx/decoration/Modern/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -28, 0], "qx/decoration/Modern/form/button-preselected-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -152], "jslinttoolkit/syntax/styles/shThemeDjango.css": "jslinttoolkit", "qx/decoration/Modern/table/boolean-false.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -8, 0], "qx/decoration/Modern/form/button-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -28, 0], "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-preselected-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -164], "qx/decoration/Modern/form/button-pressed-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", 0, 0], "jslinttoolkit/syntax/styles/help.png": [16, 16, "png", "jslinttoolkit"], "qx/decoration/Modern/tabview/tabview-pane-bl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -120], "qx/icon/Tango/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -196], "qx/decoration/Modern/tabview/tab-button-top-active-c.png": [20, 12, "png", "qx"], "qx/decoration/Modern/splitpane-knobs-combined.png": [8, 9, "png", "qx"], "qx/decoration/Modern/app-header.png": [110, 20, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -8], "jslinttoolkit/syntax/styles/shThemeFadeToGrey.css": "jslinttoolkit", "qx/decoration/Modern/window/restore-inactive.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -99, 0], "qx/decoration/Modern/form/button-checked-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -32], "qx/decoration/Modern/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png": [3, 9, "png", "qx"], "jslinttoolkit/image/help-about.png": [22, 22, "png", "jslinttoolkit"], "qx/decoration/Modern/form/button-checked-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -12, 0], "qx/decoration/Modern/tabview/tab-button-left-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -25], "qx/decoration/Modern/tabview-button-top-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-c.png": [20, 2, "png", "qx"], "qx/decoration/Modern/form/button-pressed-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -184], "jslinttoolkit/image/media-playback-start.png": [22, 22, "png", "jslinttoolkit"], "qx/decoration/Modern/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -266, 0], "qx/decoration/Modern/form/button-checked-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -12], "jslinttoolkit/syntax/styles/page_white_code.png": [16, 16, "png", "jslinttoolkit"], "qx/decoration/Modern/arrows/rewind.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -46, 0], "qx/decoration/Modern/window/captionbar-active-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -98, 0], "qx/decoration/Modern/tabview-button-right-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -92], "qx/decoration/Modern/shadow/shadow-small-c.png": [20, 136, "png", "qx"], "qx/decoration/Modern/window/statusbar-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -16], "qx/decoration/Modern/window-statusbar-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/button-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -72], "qx/decoration/Modern/tabview/tabview-pane-br.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -150], "qx/decoration/Modern/button-lr-combined.png": [72, 52, "png", "qx"], "qx/decoration/Modern/form/button-preselected-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -156], "qx/decoration/Modern/tabview/tab-button-left-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -42, 0], "qx/decoration/Modern/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/button-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -200], "qx/icon/Tango/16/apps/utilities-color-chooser.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-c.png": [20, 382, "png", "qx"], "qx/decoration/Modern/table-combined.png": [74, 18, "png", "qx"], "qx/decoration/Modern/pane/pane-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -24], "qx/decoration/Modern/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -196, 0], "qx/decoration/Modern/arrows/up-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -74, 0], "qx/decoration/Modern/scrollbar-combined.png": [174, 76, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -10], "jslinttoolkit/image/utilities-log-viewer.png": [22, 22, "png", "jslinttoolkit"], "jslinttoolkit/syntax/scripts/clipboard.swf": "jslinttoolkit", "qx/decoration/Modern/window-statusbar-lr-combined.png": [8, 7, "png", "qx"], "jslinttoolkit/image/utilities-terminal.png": [22, 22, "png", "jslinttoolkit"], "qx/decoration/Modern/window/statusbar-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -8], "qx/decoration/Modern/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -84, 0], "qx/decoration/Modern/form/button-disabled-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -68], "jslinttoolkit/image/errorIcon.png": [14, 14, "png", "jslinttoolkit"], "qx/decoration/Modern/form/button-preselected-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -120], "qx/decoration/Modern/form/button-pressed-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -56, 0], "qx/decoration/Modern/tabview/tab-button-left-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -25], "qx/decoration/Modern/tabview/tab-button-bottom-active-r.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", -5, 0], "qx/icon/Tango/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Modern/toolbar-combined.png": [40, 130, "png", "qx"], "qx/decoration/Modern/groupbox-lr-combined.png": [8, 51, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -20], "qx/decoration/Modern/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -238, 0], "jslinttoolkit/syntax/styles/shThemeDefault.css": "jslinttoolkit", "qx/decoration/Modern/form/button-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -80], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -70, 0], "qx/decoration/Modern/form/button-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -192], "qx/decoration/Modern/toolbar/toolbar-handle-knob.gif": [1, 8, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -28], "qx/decoration/Modern/form/button-checked-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -4], "qx/decoration/Modern/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -182, 0], "qx/decoration/Modern/arrows/down-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -13, 0], "qx/decoration/Modern/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", 0, 0], "qx/icon/Tango/32/places/folder.png": [32, 32, "png", "qx"], "qx/decoration/Modern/pane/pane-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -30], "qx/decoration/Modern/splitpane/knob-vertical.png": [8, 1, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, -8], "qx/decoration/Modern/scrollbar/scrollbar-right.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -152, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-top-active-lr-combined.png": [10, 12, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -32, 0], "qx/decoration/Modern/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "jslinttoolkit/syntax/scripts/shCore.js": "jslinttoolkit", "qx/decoration/Modern/window/captionbar-active-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-top-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/decoration/Modern/pane/pane-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-left-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", 0, 0], "qx/icon/Tango/16/mimetypes/office-document.png": [16, 16, "png", "qx"], "jslinttoolkit/image/edit-delete.png": [22, 22, "png", "jslinttoolkit"], "qx/decoration/Modern/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -252, 0], "qx/decoration/Modern/window/statusbar-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -12], "qx/decoration/Modern/window/maximize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -72, 0], "qx/decoration/Modern/tabview-pane-lr-combined.png": [60, 2, "png", "qx"], "jslinttoolkit/js/jquery-1.3.2.min.js": "jslinttoolkit", "qx/decoration/Modern/form/button-hovered-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -96], "qx/decoration/Modern/form/button-preselected-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -144], "qx/decoration/Modern/window/minimize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-left-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/captionbar-active-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", -6, 0], "qx/decoration/Modern/table/descending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", -36, 0], "qx/decoration/Modern/form/button-checked-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -44], "qx/decoration/Modern/tabview/tab-button-left-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -20], "qx/decoration/Modern/arrows/down-small-invert.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -8, 0], "qx/icon/Tango/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/decoration/Modern/menu-background-combined.png": [60, 49, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png": [10, 19, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -95, 0], "qx/decoration/Modern/form/button-checked-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-pressed-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -180], "qx/decoration/Modern/form/button-preselected-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -140], "qx/decoration/Modern/form/button-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/button-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -64, 0], "qx/decoration/Modern/form/button-hovered-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -112], "qx/decoration/Modern/form/button-disabled-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -16, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -3], "jslinttoolkit/image/edit-redo.png": [22, 22, "png", "jslinttoolkit"], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png": [19, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -76, 0], "qx/decoration/Modern/window/captionbar-inactive-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, 0], "jslinttoolkit/image/go-down.png": [16, 16, "png", "jslinttoolkit"]};
qx.$$translations = {"C": {}, "en": {}};
qx.$$locales = {"C": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}, "en": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}}

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["script/jslinttoolkit-0.js"]],
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
(function(){var n="qx.allowUrlSettings",m="&",l="qx.core.Setting",k="qx.allowUrlVariants",j="qxsetting",h=":",g=".";
qx.Bootstrap.define(l,{statics:{__a:{},define:function(p,q){if(q===undefined){throw new Error('Default value of setting "'+p+'" must be defined!');
}
if(!this.__a[p]){this.__a[p]={};
}else if(this.__a[p].defaultValue!==undefined){throw new Error('Setting "'+p+'" is already defined!');
}this.__a[p].defaultValue=q;
},get:function(e){var f=this.__a[e];

if(f===undefined){throw new Error('Setting "'+e+'" is not defined.');
}
if(f.value!==undefined){return f.value;
}return f.defaultValue;
},__b:function(){if(window.qxsettings){for(var o in qxsettings){if((o.split(g)).length<2){throw new Error('Malformed settings key "'+o+'". Must be following the schema "namespace.key".');
}
if(!this.__a[o]){this.__a[o]={};
}this.__a[o].value=qxsettings[o];
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(a){}this.__c();
}},__c:function(){if(this.get(n)!=true){return;
}var d=document.location.search.slice(1).split(m);

for(var i=0;i<d.length;i++){var b=d[i].split(h);

if(b.length!=3||b[0]!=j){continue;
}var c=b[1];

if(!this.__a[c]){this.__a[c]={};
}this.__a[c].value=decodeURIComponent(b[2]);
}}},defer:function(r){r.define(n,false);
r.define(k,false);
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
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__e:{},__f:{},compilerIsSet:function(){return true;
},define:function(C,D,E){{};

if(!this.__e[C]){this.__e[C]={};
}else{}this.__e[C].allowedValues=D;
this.__e[C].defaultValue=E;
},get:function(A){var B=this.__e[A];
{};

if(B.value!==undefined){return B.value;
}return B.defaultValue;
},__g:function(){if(window.qxvariants){for(var H in qxvariants){{};

if(!this.__e[H]){this.__e[H]={};
}this.__e[H].value=qxvariants[H];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(w){}this.__h(this.__e);
}},__h:function(){if(qx.core.Setting.get(m)!=true){return;
}var O=document.location.search.slice(1).split(p);

for(var i=0;i<O.length;i++){var P=O[i].split(f);

if(P.length!=3||P[0]!=c){continue;
}var Q=P[1];

if(!this.__e[Q]){this.__e[Q]={};
}this.__e[Q].value=decodeURIComponent(P[2]);
}},select:function(x,y){{};

for(var z in y){if(this.isSet(x,z)){return y[z];
}}
if(y[r]!==undefined){return y[r];
}{};
},isSet:function(J,K){var L=J+n+K;

if(this.__f[L]!==undefined){return this.__f[L];
}var N=false;
if(K.indexOf(s)<0){N=this.get(J)===K;
}else{var M=K.split(s);

for(var i=0,l=M.length;i<l;i++){if(this.get(J)===M[i]){N=true;
break;
}}}this.__f[L]=N;
return N;
},__i:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__j:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__k:function(F,G){for(var i=0,l=F.length;i<l;i++){if(F[i]==G){return true;
}}return false;
}},defer:function(I){I.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
I.define(k,[u,t],u);
I.define(o,[u,t],t);
I.define(j,[u,t],u);
I.__g();
}});
})();
(function(){var n='"',m="valueOf",k="toLocaleString",j="isPrototypeOf",h="",g="toString",f="qx.client",e="qx.lang.Object",d='\", "',c="hasOwnProperty",b="Use 'clone()' instead!";
qx.Bootstrap.define(e,{statics:{empty:function(Y){for(var ba in Y){if(Y.hasOwnProperty(ba)){delete Y[ba];
}}},isEmpty:function(o){for(var p in o){return false;
}return true;
},hasMinLength:function(q,r){var length=0;

for(var s in q){if((++length)>=r){return true;
}}return false;
},getLength:function(P){var length=0;

for(var Q in P){length++;
}return length;
},_shadowedKeys:[j,c,k,g,m],getKeys:qx.core.Variant.select(f,{"mshtml":function(z){{};
var A=[];

for(var B in z){A.push(B);
}for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(z.hasOwnProperty(a[i])){A.push(a[i]);
}}return A;
},"default":function(V){var W=[];

for(var X in V){W.push(X);
}return W;
}}),getKeysAsString:function(E){var F=qx.lang.Object.getKeys(E);

if(F.length==0){return h;
}return n+F.join(d)+n;
},getValues:function(w){var x=[];

for(var y in w){x.push(w[y]);
}return x;
},mergeWith:function(I,J,K){if(K===undefined){K=true;
}
for(var L in J){if(K||I[L]===undefined){I[L]=J[L];
}}return I;
},carefullyMergeWith:function(bg,bh){return qx.lang.Object.mergeWith(bg,bh,false);
},merge:function(M,N){var O=arguments.length;

for(var i=1;i<O;i++){qx.lang.Object.mergeWith(M,arguments[i]);
}return M;
},copy:function(U){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return qx.lang.Object.clone(U);
},clone:function(bb){var bc={};

for(var bd in bb){bc[bd]=bb[bd];
}return bc;
},invert:function(t){var u={};

for(var v in t){u[t[v].toString()]=v;
}return u;
},getKeyFromValue:function(R,S){for(var T in R){if(R.hasOwnProperty(T)&&R[T]===S){return T;
}}return null;
},contains:function(G,H){return this.getKeyFromValue(G,H)!==null;
},select:function(C,D){return D[C];
},fromArray:function(be){var bf={};

for(var i=0,l=be.length;i<l;i++){{};
bf[be[i].toString()]=true;
}return bf;
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__l:[],wrap:function(h,j,k){var p=[];
var l=[];
var o=this.__l;
var n;

for(var i=0;i<o.length;i++){n=o[i];

if((n.type==null||k==n.type||n.type==b)&&(n.name==null||h.match(n.name))){n.pos==-1?p.push(n.fcn):l.push(n.fcn);
}}
if(p.length===0&&l.length===0){return j;
}var m=function(){for(var i=0;i<p.length;i++){p[i].call(this,h,j,k,arguments);
}var q=j.apply(this,arguments);

for(var i=0;i<l.length;i++){l[i].call(this,h,j,k,arguments,q);
}return q;
};

if(k!==a){m.self=j.self;
m.base=j.base;
}j.wrapper=m;
m.original=j;
return m;
},addAdvice:function(e,f,g,name){this.__l.push({fcn:e,pos:f===c?-1:1,type:g,name:name});
}}});
})();
(function(){var w="qx.aspects",v="on",u=".",t="static",s="[Class ",r="]",q="toString",p="member",o="$$init_",n="destructor",j="extend",m="Class",k="off",h="qx.Class",g="qx.event.type.Data";
qx.Bootstrap.define(h,{statics:{define:function(name,bu){if(!bu){var bu={};
}if(bu.include&&!(bu.include instanceof Array)){bu.include=[bu.include];
}if(bu.implement&&!(bu.implement instanceof Array)){bu.implement=[bu.implement];
}if(!bu.hasOwnProperty(j)&&!bu.type){bu.type=t;
}{};
var bw=this.__q(name,bu.type,bu.extend,bu.statics,bu.construct,bu.destruct);
if(bu.extend){if(bu.properties){this.__s(bw,bu.properties,true);
}if(bu.members){this.__u(bw,bu.members,true,true,false);
}if(bu.events){this.__r(bw,bu.events,true);
}if(bu.include){for(var i=0,l=bu.include.length;i<l;i++){this.__x(bw,bu.include[i],false);
}}}if(bu.settings){for(var bv in bu.settings){qx.core.Setting.define(bv,bu.settings[bv]);
}}if(bu.variants){for(var bv in bu.variants){qx.core.Variant.define(bv,bu.variants[bv].allowedValues,bu.variants[bv].defaultValue);
}}if(bu.implement){for(var i=0,l=bu.implement.length;i<l;i++){this.__w(bw,bu.implement[i]);
}}{};
if(bu.defer){bu.defer.self=bw;
bu.defer(bw,bw.prototype,{add:function(name,bf){var bg={};
bg[name]=bf;
qx.Class.__s(bw,bg,true);
}});
}},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(K,L){{};
qx.Class.__x(K,L,false);
},patch:function(H,I){{};
qx.Class.__x(H,I,true);
},isSubClassOf:function(M,N){if(!M){return false;
}
if(M==N){return true;
}
if(M.prototype instanceof N){return true;
}return false;
},getPropertyDefinition:function(G,name){while(G){if(G.$$properties&&G.$$properties[name]){return G.$$properties[name];
}G=G.superclass;
}return null;
},getProperties:function(bV){var bW=[];

while(bV){if(bV.$$properties){bW.push.apply(bW,qx.lang.Object.getKeys(bV.$$properties));
}bV=bV.superclass;
}return bW;
},getByProperty:function(X,name){while(X){if(X.$$properties&&X.$$properties[name]){return X;
}X=X.superclass;
}return null;
},hasProperty:function(J,name){return !!this.getPropertyDefinition(J,name);
},getEventType:function(bc,name){var bc=bc.constructor;

while(bc.superclass){if(bc.$$events&&bc.$$events[name]!==undefined){return bc.$$events[name];
}bc=bc.superclass;
}return null;
},supportsEvent:function(bt,name){return !!this.getEventType(bt,name);
},hasOwnMixin:function(V,W){return V.$$includes&&V.$$includes.indexOf(W)!==-1;
},getByMixin:function(x,y){var z,i,l;

while(x){if(x.$$includes){z=x.$$flatIncludes;

for(i=0,l=z.length;i<l;i++){if(z[i]===y){return x;
}}}x=x.superclass;
}return null;
},getMixins:function(bE){var bF=[];

while(bE){if(bE.$$includes){bF.push.apply(bF,bE.$$flatIncludes);
}bE=bE.superclass;
}return bF;
},hasMixin:function(Y,ba){return !!this.getByMixin(Y,ba);
},hasOwnInterface:function(bd,be){return bd.$$implements&&bd.$$implements.indexOf(be)!==-1;
},getByInterface:function(cd,ce){var cf,i,l;

while(cd){if(cd.$$implements){cf=cd.$$flatImplements;

for(i=0,l=cf.length;i<l;i++){if(cf[i]===ce){return cd;
}}}cd=cd.superclass;
}return null;
},getInterfaces:function(bx){var by=[];

while(bx){if(bx.$$implements){by.push.apply(by,bx.$$flatImplements);
}bx=bx.superclass;
}return by;
},hasInterface:function(bG,bH){return !!this.getByInterface(bG,bH);
},implementsInterface:function(cg,ch){var ci=cg.constructor;

if(this.hasInterface(ci,ch)){return true;
}
try{qx.Interface.assertObject(cg,ch);
return true;
}catch(bX){}
try{qx.Interface.assert(ci,ch,false);
return true;
}catch(bb){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return s+this.classname+r;
},$$registry:qx.Bootstrap.$$registry,__m:null,__n:null,__o:function(){},__p:function(){},__q:function(name,bh,bi,bj,bk,bl){var bq;

if(!bi&&qx.core.Variant.isSet(w,k)){bq=bj||{};
}else{bq={};

if(bi){if(!bk){bk=this.__y();
}bq=this.__A(bk,name,bh);
}if(bj){var br;

for(var i=0,a=qx.lang.Object.getKeys(bj),l=a.length;i<l;i++){br=a[i];

if(qx.core.Variant.isSet(w,v)){var bn=bj[br];

if(bn instanceof Function){bn=qx.core.Aspect.wrap(name+u+br,bn,t);
}bq[br]=bn;
}else{bq[br]=bj[br];
}}}}var bp=qx.Bootstrap.createNamespace(name,bq,false);
bq.name=bq.classname=name;
bq.basename=bp;
bq.$$type=m;

if(bh){bq.$$classtype=bh;
}if(!bq.hasOwnProperty(q)){bq.toString=this.genericToString;
}
if(bi){var bs=bi.prototype;
var bm=this.__z();
bm.prototype=bs;
var bo=new bm;
bq.prototype=bo;
bo.name=bo.classname=name;
bo.basename=bp;
bk.base=bq.superclass=bi;
bk.self=bq.constructor=bo.constructor=bq;
if(bl){if(qx.core.Variant.isSet(w,v)){bl=qx.core.Aspect.wrap(name,bl,n);
}bq.$$destructor=bl;
}}this.$$registry[name]=bq;
return bq;
},__r:function(bY,ca,cb){var cc,cc;

if(bY.$$events){for(var cc in ca){bY.$$events[cc]=ca[cc];
}}else{bY.$$events=ca;
}},__s:function(bI,bJ,bK){var bM;

if(bK===undefined){bK=false;
}var bL=!!bI.$$propertiesAttached;

for(var name in bJ){bM=bJ[name];
{};
bM.name=name;
if(!bM.refine){if(bI.$$properties===undefined){bI.$$properties={};
}bI.$$properties[name]=bM;
}if(bM.init!==undefined){bI.prototype[o+name]=bM.init;
}if(bM.event!==undefined){var event={};
event[bM.event]=g;
this.__r(bI,event,bK);
}if(bM.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(bL){qx.core.Property.attachMethods(bI,name,bM);
}}},__t:null,__u:function(bN,bO,bP,bQ,bR){var bS=bN.prototype;
var bU,bT;

for(var i=0,a=qx.lang.Object.getKeys(bO),l=a.length;i<l;i++){bU=a[i];
bT=bO[bU];
{};
if(bQ!==false&&bT instanceof Function&&bT.$$type==null){if(bR==true){bT=this.__v(bT,bS[bU]);
}else{if(bS[bU]){bT.base=bS[bU];
}bT.self=bN;
}
if(qx.core.Variant.isSet(w,v)){bT=qx.core.Aspect.wrap(bN.classname+u+bU,bT,p);
}}bS[bU]=bT;
}},__v:function(e,f){if(f){return function(){var B=e.base;
e.base=f;
var A=e.apply(this,arguments);
e.base=B;
return A;
};
}else{return e;
}},__w:function(C,D){{};
var E=qx.Interface.flatten([D]);

if(C.$$implements){C.$$implements.push(D);
C.$$flatImplements.push.apply(C.$$flatImplements,E);
}else{C.$$implements=[D];
C.$$flatImplements=E;
}},__x:function(bz,bA,bB){{};

if(this.hasMixin(bz,bA)){qx.log.Logger.warn('Mixin "'+bA.name+'" is already included into Class "'+bz.classname+'" by class: '+this.getByMixin(bz,bA).classname+'!');
return;
}var bD=qx.Mixin.flatten([bA]);
var bC;

for(var i=0,l=bD.length;i<l;i++){bC=bD[i];
if(bC.$$events){this.__r(bz,bC.$$events,bB);
}if(bC.$$properties){this.__s(bz,bC.$$properties,bB);
}if(bC.$$members){this.__u(bz,bC.$$members,bB,bB,bB);
}}if(bz.$$includes){bz.$$includes.push(bA);
bz.$$flatIncludes.push.apply(bz.$$flatIncludes,bD);
}else{bz.$$includes=[bA];
bz.$$flatIncludes=bD;
}},__y:function(){function F(){arguments.callee.base.apply(this,arguments);
}return F;
},__z:function(){return function(){};
},__A:function(O,name,P){var R=function(){var U=arguments.callee.constructor;
{};
if(!U.$$propertiesAttached){qx.core.Property.attach(U);
}var T=U.$$original.apply(this,arguments);
if(U.$$includes){var S=U.$$flatIncludes;

for(var i=0,l=S.length;i<l;i++){if(S[i].$$constructor){S[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return T;
};

if(qx.core.Variant.isSet("qx.aspects","on")){var Q=qx.core.Aspect.wrap(name,R,"constructor");
R.$$original=O;
R.constructor=Q;
R=Q;
}if(P==="singleton"){R.getInstance=this.getInstance;
}R.$$original=O;
O.wrapper=R;
return R;
}},defer:function(b){if(qx.core.Variant.isSet(w,v)){for(var c in qx.Bootstrap.$$registry){var b=qx.Bootstrap.$$registry[c];

for(var d in b){if(b[d] instanceof Function){b[d]=qx.core.Aspect.wrap(c+u+d,b[d],t);
}}}}}});
})();
(function(){var p="]",o="Theme",n="[Theme ",m="qx.Theme";
qx.Class.define(m,{statics:{define:function(name,b){if(!b){var b={};
}
if(b.include&&!(b.include instanceof Array)){b.include=[b.include];
}{};
var c={$$type:o,name:name,title:b.title,toString:this.genericToString};
if(b.extend){c.supertheme=b.extend;
}if(b.resource){c.resource=b.resource;
}else if(b.extend&&b.extend.resource){c.resource=b.extend.resource;
}c.basename=qx.Bootstrap.createNamespace(name,c);
this.__C(c,b);
this.$$registry[name]=c;
if(b.include){for(var i=0,a=b.include,l=a.length;i<l;i++){this.include(c,a[i]);
}}},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return n+this.name+p;
},__B:function(q){for(var i=0,r=this.__D,l=r.length;i<l;i++){if(q[r[i]]){return r[i];
}}},__C:function(d,e){var h=this.__B(e);
if(e.extend&&!h){h=e.extend.type;
}d.type=h||"other";
if(!h){return;
}var k=function(){};
if(e.extend){k.prototype=new e.extend.$$clazz;
}var j=k.prototype;
var g=e[h];
for(var f in g){j[f]=g[f];
if(j[f].base){{};
j[f].base=e.extend;
}}d.$$clazz=k;
d[h]=new k;
},$$registry:{},__D:["colors","borders","decorations","fonts","icons","widgets","appearances","meta"],__E:null,__F:null,__G:function(){},patch:function(s,t){var v=this.__B(t);

if(v!==this.__B(s)){throw new Error("The mixins '"+s.name+"' are not compatible '"+t.name+"'!");
}var u=t[v];
var w=s[v];

for(var x in u){w[x]=u[x];
}},include:function(y,z){var B=z.type;

if(B!==y.type){throw new Error("The mixins '"+y.name+"' are not compatible '"+z.name+"'!");
}var A=z[B];
var C=y[B];

for(var D in A){if(C[D]!==undefined){throw new Error("It is not allowed to overwrite the key '"+D+"' of theme '"+y.name+"' by mixin theme '"+z.name+"'.");
}C[D]=A[D];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",G="#80B4EF",F="#ffffdd",E="#334866",D="#00204D",C="#666666",B="#99C3FE",A="#808080",z="#F4F4F4",y="#B6B6B6",x="#909090",q="#FCFCFC",r="#314a6e",o="#001533",p="#0880EF",m="#4d4d4d",n="#DFDFDF",k="#000000",l="#7B7A7E",s="#26364D",t="#AFAFAF",v="#404955",u="#AAAAAA",w="qx.theme.modern.Color";
qx.Theme.define(w,{colors:{"background-application":n,"background-pane":i,"background-light":q,"background-medium":a,"background-splitpane":t,"background-tip":F,"background-odd":h,"text-light":x,"text-gray":b,"text-label":g,"text-title":r,"text-input":k,"text-hovered":o,"text-disabled":l,"text-selected":d,"text-active":s,"text-inactive":v,"border-main":m,"border-separator":A,"border-input":E,"border-disabled":y,"border-pane":D,"border-button":C,"border-column":j,"border-focused":B,"table-pane":i,"table-focus-indicator":p,"table-row-background-focused-selected":f,"table-row-background-focused":G,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":u,"progressive-table-row-background-even":z,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var a="jslinttoolkit.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});
})();
(function(){var bu=';',bt='computed=this.',bs='=value;',br='this.',bq='if(this.',bp='!==undefined)',bo='delete this.',bn="set",bm="setThemed",bl='}',ba="setRuntime",Y='else if(this.',X="init",W='return this.',V="string",U="boolean",T="resetThemed",S='!==undefined){',R='=true;',Q="resetRuntime",bB="reset",bC="refresh",bz='old=this.',bA='else ',bx='old=computed=this.',by=' of an instance of ',bv='if(old===computed)return value;',bw='if(old===undefined)old=null;',bD='(value);',bE=' is not (yet) ready!");',be='===value)return value;',bd='return init;',bg='var init=this.',bf="Error in property ",bi='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',bh='.validate.call(this, value);',bk='else{',bj=" in method ",bc='=computed;',bb='(backup);',d='if(computed===inherit){',e="inherit",f='if(value===undefined)prop.error(this,2,"',g='var computed, old=this.',h='else if(computed===undefined)',j="': ",k=" of class ",m='===undefined)return;',n="')){",o='else this.',bI='value=this.',bH='","',bG='if(init==qx.core.Property.$$inherit)init=null;',bF='var inherit=prop.$$inherit;',bM='var computed, old;',bL='computed=undefined;delete this.',bK='",value);',bJ='computed=value;',bO=';}',bN='){',D='if(computed===undefined||computed===inherit){',E='!==inherit){',B='(computed, old, "',C='return value;',H='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',I="if(reg.hasListener(this, '",F=')a[i].',G='.$$properties.',z="var reg=qx.event.Registration;",A='return null;',w='");',v='var pa=this.getLayoutParent();if(pa)computed=pa.',y='!==undefined&&',x="', qx.event.type.Data, [computed, old]",s='var backup=computed;',r='}else{',u="object",t='if(computed===undefined)computed=null;',q='if(a[i].',p='throw new Error("Property ',M=")}",N='var prop=qx.core.Property;',O=" with incoming value '",P='if(computed===undefined||computed==inherit)computed=null;',J='if((computed===undefined||computed===inherit)&&',K="reg.fireEvent(this, '",L="qx.core.Property";
qx.Class.define(L,{statics:{__H:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'(typeof value === "string" || value instanceof String) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__I:{"Object":true,"Array":true,"Map":true,"Function":true,"Date":true,"Node":true,"Element":true,"Document":true,"Window":true,"Event":true,"Class":true,"Mixin":true,"Interface":true,"Theme":true,"Font":true,"Decorator":true},$$inherit:e,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:V,dispose:U,inheritable:U,nullable:U,themeable:U,refine:U,init:null,apply:V,event:V,check:null,transform:V,deferredInit:U,validate:null},$$allowedGroupKeys:{name:V,group:u,mode:V,themeable:U},$$inheritable:{},refresh:function(cl){var parent=cl.getLayoutParent();

if(parent){var co=cl.constructor;
var cq=this.$$store.inherit;
var cp=this.$$store.init;
var cn=this.$$method.refresh;
var cr;
var cm;
{};

while(co){cr=co.$$properties;

if(cr){for(var name in this.$$inheritable){if(cr[name]&&cl[cn[name]]){cm=parent[cq[name]];

if(cm===undefined){cm=parent[cp[name]];
}{};
cl[cn[name]](cm);
}}}co=co.superclass;
}}},attach:function(b){var c=b.$$properties;

if(c){for(var name in c){this.attachMethods(b,name,c[name]);
}}b.$$propertiesAttached=true;
},attachMethods:function(cj,name,ck){ck.group?this.__J(cj,ck,name):this.__K(cj,ck,name);
},__J:function(cs,ct,name){var cA=qx.lang.String.firstUp(name);
var cz=cs.prototype;
var cB=ct.themeable===true;
{};
var cC=[];
var cw=[];

if(cB){var cu=[];
var cy=[];
}var cx="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
cC.push(cx);

if(cB){cu.push(cx);
}
if(ct.mode=="shorthand"){var cv="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
cC.push(cv);

if(cB){cu.push(cv);
}}
for(var i=0,a=ct.group,l=a.length;i<l;i++){{};
cC.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
cw.push("this.",this.$$method.reset[a[i]],"();");

if(cB){{};
cu.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
cy.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+cA;
cz[this.$$method.set[name]]=new Function(cC.join(""));
this.$$method.reset[name]="reset"+cA;
cz[this.$$method.reset[name]]=new Function(cw.join(""));

if(cB){this.$$method.setThemed[name]="setThemed"+cA;
cz[this.$$method.setThemed[name]]=new Function(cu.join(""));
this.$$method.resetThemed[name]="resetThemed"+cA;
cz[this.$$method.resetThemed[name]]=new Function(cy.join(""));
}},__K:function(bW,bX,name){var ca=qx.lang.String.firstUp(name);
var cc=bW.prototype;
{};
if(bX.dispose===undefined&&typeof bX.check==="string"){bX.dispose=this.__I[bX.check]||qx.Class.isDefined(bX.check)||qx.Interface.isDefined(bX.check);
}var cb=this.$$method;
var bY=this.$$store;
bY.runtime[name]="$$runtime_"+name;
bY.user[name]="$$user_"+name;
bY.theme[name]="$$theme_"+name;
bY.init[name]="$$init_"+name;
bY.inherit[name]="$$inherit_"+name;
bY.useinit[name]="$$useinit_"+name;
cb.get[name]="get"+ca;
cc[cb.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bW,name,"get");
};
cb.set[name]="set"+ca;
cc[cb.set[name]]=function(cX){return qx.core.Property.executeOptimizedSetter(this,bW,name,"set",arguments);
};
cb.reset[name]="reset"+ca;
cc[cb.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bW,name,"reset");
};

if(bX.inheritable||bX.apply||bX.event||bX.deferredInit){cb.init[name]="init"+ca;
cc[cb.init[name]]=function(cW){return qx.core.Property.executeOptimizedSetter(this,bW,name,"init",arguments);
};
}
if(bX.inheritable){cb.refresh[name]="refresh"+ca;
cc[cb.refresh[name]]=function(cY){return qx.core.Property.executeOptimizedSetter(this,bW,name,"refresh",arguments);
};
}cb.setRuntime[name]="setRuntime"+ca;
cc[cb.setRuntime[name]]=function(da){return qx.core.Property.executeOptimizedSetter(this,bW,name,"setRuntime",arguments);
};
cb.resetRuntime[name]="resetRuntime"+ca;
cc[cb.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bW,name,"resetRuntime");
};

if(bX.themeable){cb.setThemed[name]="setThemed"+ca;
cc[cb.setThemed[name]]=function(cO){return qx.core.Property.executeOptimizedSetter(this,bW,name,"setThemed",arguments);
};
cb.resetThemed[name]="resetThemed"+ca;
cc[cb.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bW,name,"resetThemed");
};
}
if(bX.check==="Boolean"){cc["toggle"+ca]=new Function("return this."+cb.set[name]+"(!this."+cb.get[name]+"())");
cc["is"+ca]=new Function("return this."+cb.get[name]+"()");
}},__L:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bP,bQ,bR,bS,bT){var bU=bP.constructor.classname;
var bV=bf+bR+k+bU+bj+this.$$method[bS][bR]+O+bT+j;
throw new Error(bV+(this.__L[bQ]||"Unknown reason: "+bQ));
},__M:function(cd,ce,name,cf,cg,ch){var ci=this.$$method[cf][name];
{ce[ci]=new Function("value",cg.join(""));
};
if(qx.core.Variant.isSet("qx.aspects","on")){ce[ci]=qx.core.Aspect.wrap(cd.classname+"."+ci,ce[ci],"property");
}if(ch===undefined){return cd[ci]();
}else{return cd[ci](ch[0]);
}},executeOptimizedGetter:function(cP,cQ,name,cR){var cT=cQ.$$properties[name];
var cV=cQ.prototype;
var cS=[];
var cU=this.$$store;
cS.push(bq,cU.runtime[name],bp);
cS.push(W,cU.runtime[name],bu);

if(cT.inheritable){cS.push(Y,cU.inherit[name],bp);
cS.push(W,cU.inherit[name],bu);
cS.push(bA);
}cS.push(bq,cU.user[name],bp);
cS.push(W,cU.user[name],bu);

if(cT.themeable){cS.push(Y,cU.theme[name],bp);
cS.push(W,cU.theme[name],bu);
}
if(cT.deferredInit&&cT.init===undefined){cS.push(Y,cU.init[name],bp);
cS.push(W,cU.init[name],bu);
}cS.push(bA);

if(cT.init!==undefined){if(cT.inheritable){cS.push(bg,cU.init[name],bu);

if(cT.nullable){cS.push(bG);
}else if(cT.init!==undefined){cS.push(W,cU.init[name],bu);
}else{cS.push(H,name,by,cQ.classname,bE);
}cS.push(bd);
}else{cS.push(W,cU.init[name],bu);
}}else if(cT.inheritable||cT.nullable){cS.push(A);
}else{cS.push(p,name,by,cQ.classname,bE);
}return this.__M(cP,cV,name,cR,cS);
},executeOptimizedSetter:function(cD,cE,name,cF,cG){var cM=cE.$$properties[name];
var cL=cE.prototype;
var cI=[];
var cH=cF===bn||cF===bm||cF===ba||(cF===X&&cM.init===undefined);
var cJ=cF===bB||cF===T||cF===Q;
var cK=cM.apply||cM.event||cM.inheritable;

if(cF===ba||cF===Q){var cN=this.$$store.runtime[name];
}else if(cF===bm||cF===T){var cN=this.$$store.theme[name];
}else if(cF===X){var cN=this.$$store.init[name];
}else{var cN=this.$$store.user[name];
}{if(!cM.nullable||cM.check||cM.inheritable){cI.push(N);
}if(cF===bn){cI.push(f,name,bH,cF,bK);
}};
if(cH){if(cM.transform){cI.push(bI,cM.transform,bD);
}if(cM.validate){if(typeof cM.validate===V){cI.push(br,cM.validate,bD);
}else if(cM.validate instanceof Function){cI.push(cE.classname,G,name);
cI.push(bh);
}}}if(cK){if(cH){cI.push(bq,cN,be);
}else if(cJ){cI.push(bq,cN,m);
}}if(cM.inheritable){cI.push(bF);
}{};

if(!cK){if(cF===ba){cI.push(br,this.$$store.runtime[name],bs);
}else if(cF===Q){cI.push(bq,this.$$store.runtime[name],bp);
cI.push(bo,this.$$store.runtime[name],bu);
}else if(cF===bn){cI.push(br,this.$$store.user[name],bs);
}else if(cF===bB){cI.push(bq,this.$$store.user[name],bp);
cI.push(bo,this.$$store.user[name],bu);
}else if(cF===bm){cI.push(br,this.$$store.theme[name],bs);
}else if(cF===T){cI.push(bq,this.$$store.theme[name],bp);
cI.push(bo,this.$$store.theme[name],bu);
}else if(cF===X&&cH){cI.push(br,this.$$store.init[name],bs);
}}else{if(cM.inheritable){cI.push(g,this.$$store.inherit[name],bu);
}else{cI.push(bM);
}cI.push(bq,this.$$store.runtime[name],S);

if(cF===ba){cI.push(bt,this.$$store.runtime[name],bs);
}else if(cF===Q){cI.push(bo,this.$$store.runtime[name],bu);
cI.push(bq,this.$$store.user[name],bp);
cI.push(bt,this.$$store.user[name],bu);
cI.push(Y,this.$$store.theme[name],bp);
cI.push(bt,this.$$store.theme[name],bu);
cI.push(Y,this.$$store.init[name],S);
cI.push(bt,this.$$store.init[name],bu);
cI.push(br,this.$$store.useinit[name],R);
cI.push(bl);
}else{cI.push(bx,this.$$store.runtime[name],bu);
if(cF===bn){cI.push(br,this.$$store.user[name],bs);
}else if(cF===bB){cI.push(bo,this.$$store.user[name],bu);
}else if(cF===bm){cI.push(br,this.$$store.theme[name],bs);
}else if(cF===T){cI.push(bo,this.$$store.theme[name],bu);
}else if(cF===X&&cH){cI.push(br,this.$$store.init[name],bs);
}}cI.push(bl);
cI.push(Y,this.$$store.user[name],S);

if(cF===bn){if(!cM.inheritable){cI.push(bz,this.$$store.user[name],bu);
}cI.push(bt,this.$$store.user[name],bs);
}else if(cF===bB){if(!cM.inheritable){cI.push(bz,this.$$store.user[name],bu);
}cI.push(bo,this.$$store.user[name],bu);
cI.push(bq,this.$$store.runtime[name],bp);
cI.push(bt,this.$$store.runtime[name],bu);
cI.push(bq,this.$$store.theme[name],bp);
cI.push(bt,this.$$store.theme[name],bu);
cI.push(Y,this.$$store.init[name],S);
cI.push(bt,this.$$store.init[name],bu);
cI.push(br,this.$$store.useinit[name],R);
cI.push(bl);
}else{if(cF===ba){cI.push(bt,this.$$store.runtime[name],bs);
}else if(cM.inheritable){cI.push(bt,this.$$store.user[name],bu);
}else{cI.push(bx,this.$$store.user[name],bu);
}if(cF===bm){cI.push(br,this.$$store.theme[name],bs);
}else if(cF===T){cI.push(bo,this.$$store.theme[name],bu);
}else if(cF===X&&cH){cI.push(br,this.$$store.init[name],bs);
}}cI.push(bl);
if(cM.themeable){cI.push(Y,this.$$store.theme[name],S);

if(!cM.inheritable){cI.push(bz,this.$$store.theme[name],bu);
}
if(cF===ba){cI.push(bt,this.$$store.runtime[name],bs);
}else if(cF===bn){cI.push(bt,this.$$store.user[name],bs);
}else if(cF===bm){cI.push(bt,this.$$store.theme[name],bs);
}else if(cF===T){cI.push(bo,this.$$store.theme[name],bu);
cI.push(bq,this.$$store.init[name],S);
cI.push(bt,this.$$store.init[name],bu);
cI.push(br,this.$$store.useinit[name],R);
cI.push(bl);
}else if(cF===X){if(cH){cI.push(br,this.$$store.init[name],bs);
}cI.push(bt,this.$$store.theme[name],bu);
}else if(cF===bC){cI.push(bt,this.$$store.theme[name],bu);
}cI.push(bl);
}cI.push(Y,this.$$store.useinit[name],bN);

if(!cM.inheritable){cI.push(bz,this.$$store.init[name],bu);
}
if(cF===X){if(cH){cI.push(bt,this.$$store.init[name],bs);
}else{cI.push(bt,this.$$store.init[name],bu);
}}else if(cF===bn||cF===ba||cF===bm||cF===bC){cI.push(bo,this.$$store.useinit[name],bu);

if(cF===ba){cI.push(bt,this.$$store.runtime[name],bs);
}else if(cF===bn){cI.push(bt,this.$$store.user[name],bs);
}else if(cF===bm){cI.push(bt,this.$$store.theme[name],bs);
}else if(cF===bC){cI.push(bt,this.$$store.init[name],bu);
}}cI.push(bl);
if(cF===bn||cF===ba||cF===bm||cF===X){cI.push(bk);

if(cF===ba){cI.push(bt,this.$$store.runtime[name],bs);
}else if(cF===bn){cI.push(bt,this.$$store.user[name],bs);
}else if(cF===bm){cI.push(bt,this.$$store.theme[name],bs);
}else if(cF===X){if(cH){cI.push(bt,this.$$store.init[name],bs);
}else{cI.push(bt,this.$$store.init[name],bu);
}cI.push(br,this.$$store.useinit[name],R);
}cI.push(bl);
}}
if(cM.inheritable){cI.push(D);

if(cF===bC){cI.push(bJ);
}else{cI.push(v,this.$$store.inherit[name],bu);
}cI.push(J);
cI.push(br,this.$$store.init[name],y);
cI.push(br,this.$$store.init[name],E);
cI.push(bt,this.$$store.init[name],bu);
cI.push(br,this.$$store.useinit[name],R);
cI.push(r);
cI.push(bo,this.$$store.useinit[name],bO);
cI.push(bl);
cI.push(bv);
cI.push(d);
cI.push(bL,this.$$store.inherit[name],bu);
cI.push(bl);
cI.push(h);
cI.push(bo,this.$$store.inherit[name],bu);
cI.push(o,this.$$store.inherit[name],bc);
cI.push(s);
cI.push(bw);
cI.push(P);
}else if(cK){if(cF!==bn&&cF!==ba&&cF!==bm){cI.push(t);
}cI.push(bv);
cI.push(bw);
}if(cK){if(cM.apply){cI.push(br,cM.apply,B,name,w);
}if(cM.event){cI.push(z,I,cM.event,n,K,cM.event,x,M);
}if(cM.inheritable&&cL._getChildren){cI.push(bi);
cI.push(q,this.$$method.refresh[name],F,this.$$method.refresh[name],bb);
cI.push(bl);
}}if(cH){cI.push(C);
}return this.__M(cD,cL,name,cF,cI,cG);
}},settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var u="$$hash",t="qx.core.ObjectRegistry";
qx.Bootstrap.define(t,{statics:{inShutDown:false,__N:{},__O:0,__P:[],register:function(o){var r=this.__N;

if(!r){return;
}var q=o.$$hash;

if(q==null){var p=this.__P;

if(p.length>0){q=p.pop();
}else{q=(this.__O++).toString(36);
}o.$$hash=q;
}{};
r[q]=o;
},unregister:function(f){var g=f.$$hash;

if(g==null){return;
}var h=this.__N;

if(h&&h[g]){delete h[g];
this.__P.push(g);
}try{delete f.$$hash;
}catch(z){if(f.removeAttribute){f.removeAttribute(u);
}}},toHashCode:function(c){{};
var e=c.$$hash;

if(e!=null){return e;
}var d=this.__P;

if(d.length>0){e=d.pop();
}else{e=(this.__O++).toString(36);
}return c.$$hash=e;
},clearHashCode:function(v){{};
var w=v.$$hash;

if(w!=null){this.__P.push(w);
try{delete v.$$hash;
}catch(x){if(v.removeAttribute){v.removeAttribute(u);
}}}},fromHashCode:function(s){return this.__N[s]||null;
},shutdown:function(){this.inShutDown=true;
var k=this.__N;
var n=[];

for(var m in k){n.push(m);
}n.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var j,i=0,l=n.length;

while(true){try{for(;i<l;i++){m=n[i];
j=k[m];

if(j&&j.dispose){j.dispose();
}}}catch(y){qx.log.Logger.error(this,"Could not dispose object "+j.toString()+": "+y);

if(i!==0){continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__N;
},getRegistry:function(){return this.__N;
}}});
})();
(function(){var q="qx.Mixin",p="]",o="Mixin",n="[Mixin ";
qx.Class.define(q,{statics:{define:function(name,j){if(j){if(j.include&&!(j.include instanceof Array)){j.include=[j.include];
}{};
var m=j.statics?j.statics:{};

for(var k in m){if(m[k] instanceof Function){m[k].$$mixin=m;
}}if(j.construct){m.$$constructor=j.construct;
}
if(j.include){m.$$includes=j.include;
}
if(j.properties){m.$$properties=j.properties;
}
if(j.members){m.$$members=j.members;
}
for(var k in m.$$members){if(m.$$members[k] instanceof Function){m.$$members[k].$$mixin=m;
}}
if(j.events){m.$$events=j.events;
}
if(j.destruct){m.$$destructor=j.destruct;
}}else{var m={};
}m.$$type=o;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
this.$$registry[name]=m;
return m;
},checkCompatibility:function(a){var d=this.flatten(a);
var e=d.length;

if(e<2){return true;
}var h={};
var g={};
var f={};
var c;

for(var i=0;i<e;i++){c=d[i];

for(var b in c.events){if(f[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+f[b]+'" in member "'+b+'"!');
}f[b]=c.name;
}
for(var b in c.properties){if(h[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+h[b]+'" in property "'+b+'"!');
}h[b]=c.name;
}
for(var b in c.members){if(g[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+g[b]+'" in member "'+b+'"!');
}g[b]=c.name;
}}return true;
},isCompatible:function(r,s){var t=qx.Class.getMixins(s);
t.push(r);
return qx.Mixin.checkCompatibility(t);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(u){if(!u){return [];
}var v=u.concat();

for(var i=0,l=u.length;i<l;i++){if(u[i].$$includes){v.push.apply(v,this.flatten(u[i].$$includes));
}}return v;
},genericToString:function(){return n+this.name+p;
},$$registry:{},__Q:null,__R:function(){}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var i="qx.client",h="on",g="qx.bom.Event",f="mousedown",d="mouseover";
qx.Bootstrap.define(g,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(q,r,s){q.attachEvent(h+r,s);
},"default":function(n,o,p){n.addEventListener(o,p,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(k,l,m){k.detachEvent(h+l,m);
},"default":function(a,b,c){a.removeEventListener(b,c,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===d){return e.fromEvent;
}else{return e.toElement;
}},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();

try{e.keyCode=0;
}catch(t){}},"mshtml":function(e){try{e.keyCode=0;
}catch(j){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
}}});
})();
(function(){var n="|bubble",m="|capture",k="|",j="_",h="unload",g="UNKNOWN_",f="DOM_",e="c",d="WIN_",c="capture",a="qx.event.Manager",b="QX_";
qx.Bootstrap.define(a,{construct:function(bD){this.__S=bD;
this.__T=qx.lang.Function.bind(this.dispose,this);
qx.bom.Event.addNativeListener(bD,h,this.__T);
this.__U={};
this.__V={};
this.__W={};
this.__X={};
},statics:{__Y:0,getNextUniqueId:function(){return (this.__Y++).toString(36);
}},members:{dispose:function(){qx.bom.Event.removeNativeListener(this.__S,h,this.__T);
qx.event.Registration.removeManager(this);
this.__U=this.__S=this.__V=this.__W=this.__T=this.__X=null;
},getWindow:function(){return this.__S;
},getHandler:function(cp){var cq=this.__V[cp.classname];

if(cq){return cq;
}return this.__V[cp.classname]=new cp(this);
},getDispatcher:function(cn){var co=this.__W[cn.classname];

if(co){return co;
}return this.__W[cn.classname]=new cn(this);
},getListeners:function(bP,bQ,bR){var bS=bP.$$hash||qx.core.ObjectRegistry.toHashCode(bP);
var bU=this.__U[bS];

if(!bU){return null;
}var bV=bQ+(bR?m:n);
var bT=bU[bV];
return bT?bT.concat():null;
},serializeListeners:function(o){var v=o.$$hash||qx.core.ObjectRegistry.toHashCode(o);
var x=this.__U[v];
var t=[];

if(x){var r,w,p,s,u;

for(var q in x){r=q.indexOf(k);
w=q.substring(0,r);
p=q.charAt(r+1)==e;
s=x[q];

for(var i=0,l=s.length;i<l;i++){u=s[i];
t.push({self:u.context,handler:u.handler,type:w,capture:p});
}}}return t;
},toggleAttachedEvents:function(bj,bk){var bp=bj.$$hash||qx.core.ObjectRegistry.toHashCode(bj);
var br=this.__U[bp];

if(br){var bm,bq,bl,bn;

for(var bo in br){bm=bo.indexOf(k);
bq=bo.substring(0,bm);
bl=bo.charCodeAt(bm+1)===99;
bn=br[bo];

if(bk){this.__ba(bj,bq,bl);
}else{this.__bb(bj,bq,bl);
}}}},hasListener:function(cg,ch,ci){{};
var cj=cg.$$hash||qx.core.ObjectRegistry.toHashCode(cg);
var cl=this.__U[cj];

if(!cl){return false;
}var cm=ch+(ci?m:n);
var ck=cl[cm];
return ck&&ck.length>0;
},importListeners:function(bW,bX){{};
var ce=bW.$$hash||qx.core.ObjectRegistry.toHashCode(bW);
var cf=this.__U[ce]={};
var cb=qx.event.Manager;

for(var bY in bX){var cc=bX[bY];
var cd=cc.type+(cc.capture?m:n);
var ca=cf[cd];

if(!ca){ca=cf[cd]=[];
this.__ba(bW,cc.type,cc.capture);
}ca.push({handler:cc.listener,context:cc.self,unique:cc.unique||(cb.__Y++).toString(36)});
}},addListener:function(K,L,M,self,N){var R;
var S=K.$$hash||qx.core.ObjectRegistry.toHashCode(K);
var U=this.__U[S];

if(!U){U=this.__U[S]={};
}var Q=L+(N?m:n);
var P=U[Q];

if(!P){P=U[Q]=[];
}if(P.length===0){this.__ba(K,L,N);
}var T=(qx.event.Manager.__Y++).toString(36);
var O={handler:M,context:self,unique:T};
P.push(O);
return Q+k+T;
},findHandler:function(V,W){var bh=false,ba=false,bi=false;
var bg;

if(V.nodeType===1){bh=true;
bg=f+V.tagName.toLowerCase()+j+W;
}else if(V==this.__S){ba=true;
bg=d+W;
}else if(V.classname){bi=true;
bg=b+V.classname+j+W;
}else{bg=g+V+j+W;
}var bc=this.__X;

if(bc[bg]){return bc[bg];
}var bf=qx.event.Registration.getHandlers();
var bb=qx.event.IEventHandler;
var bd,be,Y,X;

for(var i=0,l=bf.length;i<l;i++){bd=bf[i];
Y=bd.SUPPORTED_TYPES;

if(Y&&!Y[W]){continue;
}X=bd.TARGET_CHECK;

if(X){if(!bh&&X===bb.TARGET_DOMNODE){continue;
}else if(!ba&&X===bb.TARGET_WINDOW){continue;
}else if(!bi&&X===bb.TARGET_OBJECT){continue;
}}be=this.getHandler(bf[i]);

if(bd.IGNORE_CAN_HANDLE||be.canHandleEvent(V,W)){bc[bg]=be;
return be;
}}return null;
},__ba:function(bE,bF,bG){var bH=this.findHandler(bE,bF);

if(bH){bH.registerEvent(bE,bF,bG);
return;
}{};
},removeListener:function(cr,cs,ct,self,cu){var cy;
var cz=cr.$$hash||qx.core.ObjectRegistry.toHashCode(cr);
var cA=this.__U[cz];

if(!cA){return false;
}var cv=cs+(cu?m:n);
var cw=cA[cv];

if(!cw){return false;
}var cx;

for(var i=0,l=cw.length;i<l;i++){cx=cw[i];

if(cx.handler===ct&&cx.context===self){qx.lang.Array.removeAt(cw,i);

if(cw.length==0){this.__bb(cr,cs,cu);
}return true;
}}return false;
},removeListenerById:function(y,z){var F;
var D=z.split(k);
var I=D[0];
var A=D[1].charCodeAt(0)==99;
var H=D[2];
var G=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var J=this.__U[G];

if(!J){return false;
}var E=I+(A?m:n);
var C=J[E];

if(!C){return false;
}var B;

for(var i=0,l=C.length;i<l;i++){B=C[i];

if(B.unique===H){qx.lang.Array.removeAt(C,i);

if(C.length==0){this.__bb(y,I,A);
}return true;
}}return false;
},removeAllListeners:function(bI){var bM=bI.$$hash||qx.core.ObjectRegistry.toHashCode(bI);
var bO=this.__U[bM];

if(!bO){return false;
}var bK,bN,bJ;

for(var bL in bO){if(bO[bL].length>0){bK=bL.split(k);
bN=bK[0];
bJ=bK[1]===c;
this.__bb(bI,bN,bJ);
}}delete this.__U[bM];
return true;
},__bb:function(bs,bt,bu){var bv=this.findHandler(bs,bt);

if(bv){bv.unregisterEvent(bs,bt,bu);
return;
}{};
},dispatchEvent:function(bw,event){var bB;
var bC=event.getType();

if(!event.getBubbles()&&!this.hasListener(bw,bC)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bw);
}var bA=qx.event.Registration.getDispatchers();
var bz;
var by=false;

for(var i=0,l=bA.length;i<l;i++){bz=this.getDispatcher(bA[i]);
if(bz.canDispatchEvent(bw,event,bC)){bz.dispatchEvent(bw,event,bC);
by=true;
break;
}}
if(!by){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bC+" on "+bw);
return true;
}var bx=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bx;
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
}}),getDocumentElement:function(p){return this.getDocument(p).documentElement;
},getBodyElement:function(k){return this.getDocument(k).body;
},isNode:function(g){return !!(g&&g.nodeType!=null);
},isElement:function(j){return !!(j&&j.nodeType===this.ELEMENT);
},isDocument:function(h){return !!(h&&h.nodeType===this.DOCUMENT);
},isText:function(l){return !!(l&&l.nodeType===this.TEXT);
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
(function(){var A="mshtml",z="[object Array]",y="qx.client",x="qx.lang.Array",w="qx",v="number",u="Use the native Array access instead: arr[arr.length - 1]",t="Use the native Array access instead: arr[0]",s="string",r="Use 'clone()' instead!";
qx.Bootstrap.define(x,{statics:{isArray:function(o){return Object.prototype.toString.call(o)===z||o instanceof Array;
},toArray:function(j,k){return this.cast(j,Array,k);
},cast:function(G,H,I){if(G.constructor===H){return G;
}
if(qx.Class.hasInterface(G,qx.data.IListData)){var G=G.toArray();
}var J=new H;
if(qx.core.Variant.isSet(y,A)){if(G.item){for(var i=I||0,l=G.length;i<l;i++){J.push(G[i]);
}return J;
}}if(Object.prototype.toString.call(G)===z&&I==null){J.push.apply(J,G);
}else{J.push.apply(J,Array.prototype.slice.call(G,I||0));
}return J;
},fromArguments:function(p,q){return Array.prototype.slice.call(p,q||0);
},fromCollection:function(m){if(qx.core.Variant.isSet(y,A)){if(m.item){var n=[];

for(var i=0,l=m.length;i<l;i++){n[i]=m[i];
}return n;
}}return Array.prototype.slice.call(m,0);
},fromShortHand:function(bf){var bh=bf.length;
var bg=qx.lang.Array.clone(bf);
switch(bh){case 1:bg[1]=bg[2]=bg[3]=bg[0];
break;
case 2:bg[2]=bg[0];
case 3:bg[3]=bg[1];
}return bg;
},copy:function(C){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
return qx.lang.Array.clone(C);
},clone:function(B){return B.concat();
},getLast:function(br){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return br[br.length-1];
},getFirst:function(c){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
return c[0];
},insertAt:function(bp,bq,i){bp.splice(i,0,bq);
return bp;
},insertBefore:function(d,e,f){var i=d.indexOf(f);

if(i==-1){d.push(e);
}else{d.splice(i,0,e);
}return d;
},insertAfter:function(bv,bw,bx){var i=bv.indexOf(bx);

if(i==-1||i==(bv.length-1)){bv.push(bw);
}else{bv.splice(i+1,0,bw);
}return bv;
},removeAt:function(bl,i){return bl.splice(i,1)[0];
},removeAll:function(bi){bi.length=0;
return this;
},append:function(g,h){{};
Array.prototype.push.apply(g,h);
return g;
},exclude:function(K,L){{};

for(var i=0,N=L.length,M;i<N;i++){M=K.indexOf(L[i]);

if(M!=-1){K.splice(M,1);
}}return K;
},remove:function(bd,be){var i=bd.indexOf(be);

if(i!=-1){bd.splice(i,1);
return be;
}},contains:function(a,b){return a.indexOf(b)!==-1;
},equals:function(bm,bn){var length=bm.length;

if(length!==bn.length){return false;
}
for(var i=0;i<length;i++){if(bm[i]!==bn[i]){return false;
}}return true;
},sum:function(bj){var bk=0;

for(var i=0,l=bj.length;i<l;i++){bk+=bj[i];
}return bk;
},max:function(D){{};
var i,F=D.length,E=D[0];

for(i=1;i<F;i++){if(D[i]>E){E=D[i];
}}return E===undefined?null:E;
},min:function(bs){{};
var i,bu=bs.length,bt=bs[0];

for(i=1;i<bu;i++){if(bs[i]<bt){bt=bs[i];
}}return bt===undefined?null:bt;
},unique:function(O){var Y=[],Q={},T={},V={};
var U,P=0;
var ba=w+qx.lang.Date.now();
var R=false,X=false,bb=false;
for(var i=0,W=O.length;i<W;i++){U=O[i];
if(U===null){if(!R){R=true;
Y.push(U);
}}else if(U===false){if(!X){X=true;
Y.push(U);
}}else if(U===true){if(!bb){bb=true;
Y.push(U);
}}else if(typeof U===s){if(!Q[U]){Q[U]=1;
Y.push(U);
}}else if(typeof U===v){if(!T[U]){T[U]=1;
Y.push(U);
}}else{S=U[ba];

if(S==null){S=U[ba]=P++;
}
if(!V[S]){V[S]=U;
Y.push(U);
}}}for(var S in V){try{delete V[S][ba];
}catch(bo){try{V[S][ba]=null;
}catch(bc){throw new Error("Cannot clean-up map entry doneObjects["+S+"]["+ba+"]");
}}}return Y;
}}});
})();
(function(){var i=":",h=":constructor",g='anonymous',f="anonymous: ",e="qx.lang.Function",d="[object Function]",c=":constructor wrapper";
qx.Bootstrap.define(e,{statics:{isFunction:function(o){return Object.prototype.toString.call(o)===d;
},getCaller:function(r){return r.caller?r.caller.callee:r.callee.caller;
},getName:function(v){if(v.$$original){return v.classname+c;
}
if(v.wrapper){return v.wrapper.classname+h;
}
if(v.classname){return v.classname+h;
}
if(v.$$mixin){for(var x in v.$$mixin.$$members){if(v.$$mixin.$$members[x]==v){return v.$$mixin.name+i+x;
}}for(var x in v.$$mixin){if(v.$$mixin[x]==v){return v.$$mixin.name+i+x;
}}}
if(v.self){var y=v.self.constructor;

if(y){for(var x in y.prototype){if(y.prototype[x]==v){return y.classname+i+x;
}}for(var x in y){if(y[x]==v){return y.classname+i+x;
}}}}var w=v.toString().match(/(function\s*\w*\(.*?\))/);

if(w&&w.length>=1&&w[1]){return w[1];
}var w=v.toString().match(/(function\s*\(.*?\))/);

if(w&&w.length>=1&&w[1]){return f+w[1];
}return g;
},globalEval:function(F){if(window.execScript){return window.execScript(F);
}else{return eval.call(window,F);
}},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(a,b){{};
if(!b){return a;
}if(!(b.self||b.args||b.delay!=null||b.periodical!=null||b.attempt)){return a;
}return function(event){var k=qx.lang.Array.fromArguments(arguments);
if(b.args){k=b.args.concat(k);
}
if(b.delay||b.periodical){var j=function(){return a.apply(b.self||this,k);
};

if(b.delay){return setTimeout(j,b.delay);
}
if(b.periodical){return setInterval(j,b.periodical);
}}else if(b.attempt){var l=false;

try{l=a.apply(b.self||this,k);
}catch(u){}return l;
}else{return a.apply(b.self||this,k);
}};
},bind:function(p,self,q){return this.create(p,{self:self,args:q!==undefined?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(m,n){return this.create(m,{args:n!==undefined?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(z,self,A){if(A===undefined){return function(event){return z.call(self||this,event||window.event);
};
}else{var B=qx.lang.Array.fromArguments(arguments,2);
return function(event){var G=[event||window.event];
G.push.apply(G,B);
z.apply(self||this,G);
};
}},attempt:function(s,self,t){return this.create(s,{self:self,attempt:true,args:t!==undefined?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(H,I,self,J){return this.create(H,{delay:I,self:self,args:J!==undefined?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(C,D,self,E){return this.create(C,{periodical:D,self:self,args:E!==undefined?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var M="qx.event.Registration";
qx.Bootstrap.define(M,{statics:{__bc:{},getManager:function(J){if(J==null){{};
J=window;
}else if(J.nodeType){J=qx.dom.Node.getWindow(J);
}else if(!qx.dom.Node.isWindow(J)){J=window;
}var L=J.$$hash||qx.core.ObjectRegistry.toHashCode(J);
var K=this.__bc[L];

if(!K){K=new qx.event.Manager(J);
this.__bc[L]=K;
}return K;
},removeManager:function(D){var E=qx.core.ObjectRegistry.toHashCode(D.getWindow());
delete this.__bc[E];
},addListener:function(t,u,v,self,w){return this.getManager(t).addListener(t,u,v,self,w);
},removeListener:function(c,d,e,self,f){return this.getManager(c).removeListener(c,d,e,self,f);
},removeListenerById:function(g,h){return this.getManager(g).removeListenerById(g,h);
},removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);
},hasListener:function(j,k,l){return this.getManager(j).hasListener(j,k,l);
},serializeListeners:function(O){return this.getManager(O).serializeListeners(O);
},createEvent:function(F,G,H){{};
if(G==null){G=qx.event.type.Event;
}var I=qx.event.Pool.getInstance().getObject(G);

if(!I){return;
}H?I.init.apply(I,H):I.init();
if(F){I.setType(F);
}return I;
},dispatchEvent:function(i,event){return this.getManager(i).dispatchEvent(i,event);
},fireEvent:function(x,y,z,A){var B;
var C=this.createEvent(y,z||null,A);
return this.getManager(x).dispatchEvent(x,C);
},fireNonBubblingEvent:function(m,n,o,p){{};
var q=this.getManager(m);

if(!q.hasListener(m,n,false)){return true;
}var r=this.createEvent(n,o||null,p);
return q.dispatchEvent(m,r);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bd:[],addHandler:function(N){{};
this.__bd.push(N);
this.__bd.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bd;
},__be:[],addDispatcher:function(P,Q){{};
this.__be.push(P);
this.__be.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__be;
}}});
})();
(function(){var D="node",C="error",B="...(+",A="array",z=")",y="info",x="instance",w="string",v="null",u="class",Y="number",X="stringify",W="]",V="unknown",U="function",T="boolean",S="debug",R="map",Q="undefined",P="qx.log.Logger",K=")}",L="#",I="warn",J="document",G="{...(",H="[",E="text[",F="[...(",M="\n",N=")]",O="object";
qx.Bootstrap.define(P,{statics:{__bf:50,__bg:S,setLevel:function(n){this.__bg=n;
},getLevel:function(){return this.__bg;
},setTreshold:function(be){this.__bf=be;
},getTreshold:function(){return this.__bf;
},__bh:{},__bi:0,register:function(bk){if(bk.$$id){return;
}var bm=this.__bi++;
this.__bh[bm]=bk;
bk.$$id=bm;
var bl=this.__bj;

for(var i=0,l=bl.length;i<l;i++){bk.process(bl[i]);
}},unregister:function(ba){var bb=ba.$$id;

if(bb==null){return;
}delete this.__bh[bb];
delete ba.$$id;
},debug:function(bc,bd){this.__bl(S,arguments);
},info:function(a,b){this.__bl(y,arguments);
},warn:function(bn,bo){this.__bl(I,arguments);
},error:function(o,p){this.__bl(C,arguments);
},trace:function(m){this.__bl(y,[m,qx.dev.StackTrace.getStackTrace().join(M)]);
},deprecatedMethodWarning:function(q,r){var t,s;
},deprecatedClassWarning:function(bh,bi){var bj;
},clear:function(){this.__bj=[];
},__bj:[],__bk:{debug:0,info:1,warn:2,error:3},__bl:function(bp,bq){var bv=this.__bk;

if(bv[bp]<bv[this.__bg]){return;
}var bs=bq.length<2?null:bq[0];
var bu=bs?1:0;
var br=[];

for(var i=bu,l=bq.length;i<l;i++){br.push(this.__bn(bq[i],true));
}var bx=new Date;
var by={time:bx,offset:bx-qx.Bootstrap.LOADSTART,level:bp,items:br,win:window};
if(bs){if(bs instanceof qx.core.Object){by.object=bs.$$hash;
}else if(bs.$$type){by.clazz=bs;
}}var bw=this.__bj;
bw.push(by);

if(bw.length>(this.__bf+10)){bw.splice(this.__bf,bw.length);
}var bz=this.__bh;

for(var bt in bz){bz[bt].process(by);
}},__bm:function(bf){if(bf===undefined){return Q;
}else if(bf===null){return v;
}
if(bf.$$type){return u;
}var bg=typeof bf;

if(bg===U||bg==w||bg===Y||bg===T){return bg;
}else if(bg===O){if(bf.nodeType){return D;
}else if(bf.classname){return x;
}else if(bf instanceof Array){return A;
}else if(bf instanceof Error){return C;
}else{return R;
}}
if(bf.toString){return X;
}return V;
},__bn:function(c,d){var k=this.__bm(c);
var f=V;

switch(k){case v:case Q:f=k;
break;
case w:case Y:case T:f=c;
break;
case D:if(c.nodeType===9){f=J;
}else if(c.nodeType===3){f=E+c.nodeValue+W;
}else if(c.nodeType===1){f=c.nodeName.toLowerCase();

if(c.id){f+=L+c.id;
}}else{f=D;
}break;
case U:f=qx.lang.Function.getName(c)||k;
break;
case x:f=c.basename+H+c.$$hash+W;
break;
case u:case X:case C:f=c.toString();
break;
case A:if(d){f=[];

for(var i=0,l=c.length;i<l;i++){if(f.length>20){f.push(B+(l-i)+z);
break;
}f.push(this.__bn(c[i],false));
}}else{f=F+c.length+N;
}break;
case R:if(d){var e;
var j=[];

for(var h in c){j.push(h);
}j.sort();
f=[];

for(var i=0,l=j.length;i<l;i++){if(f.length>20){f.push(B+(l-i)+z);
break;
}h=j[i];
e=this.__bn(c[h],false);
e.key=h;
f.push(e);
}}else{var g=0;

for(var h in c){g++;
}f=G+g+K;
}break;
}return {type:k,text:f};
}}});
})();
(function(){var bB="qx.core.Object",bA="]",bz="[",by="__bp",bx="string",bw="Object";
qx.Class.define(bB,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bw},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bz+this.$$hash+bA;
},base:function(L,M){if(arguments.length===1){return L.callee.base.call(this);
}else{return L.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(S){return S.callee.self;
},clone:function(){var bh=this.constructor;
var bg=new bh;
var bj=qx.Class.getProperties(bh);
var bi=qx.core.Property.$$store.user;
var bk=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bj.length;i<l;i++){name=bj[i];

if(this.hasOwnProperty(bi[name])){bg[bk[name]](this[bi[name]]);
}}return bg;
},serialize:function(){var k=this.constructor;
var n=qx.Class.getProperties(k);
var o=qx.core.Property.$$store.user;
var name,j;
var m={classname:k.classname,properties:{}};
for(var i=0,l=n.length;i<l;i++){name=n[i];

if(this.hasOwnProperty(o[name])){j=this[o[name]];

if(j instanceof qx.core.Object){m.properties[name]={$$hash:j.$$hash};
}else{m.properties[name]=j;
}}}return m;
},set:function(E,F){var H=qx.core.Property.$$method.set;

if(typeof E===bx){{};
return this[H[E]](F);
}else{for(var G in E){{};
this[H[G]](E[G]);
}return this;
}},get:function(bu){var bv=qx.core.Property.$$method.get;
{};
return this[bv[bu]]();
},reset:function(a){var b=qx.core.Property.$$method.reset;
{};
this[b[a]]();
},__bo:qx.event.Registration,addListener:function(t,u,self,v){if(!this.$$disposed){return this.__bo.addListener(this,t,u,self,v);
}return null;
},addListenerOnce:function(ba,bb,self,bc){var bd=function(e){bb.call(self||this,e);
this.removeListener(ba,bd,this,bc);
};
return this.addListener(ba,bd,this,bc);
},removeListener:function(B,C,self,D){if(!this.$$disposed){return this.__bo.removeListener(this,B,C,self,D);
}return false;
},removeListenerById:function(w){if(!this.$$disposed){return this.__bo.removeListenerById(this,w);
}return false;
},hasListener:function(I,J){return this.__bo.hasListener(this,I,J);
},dispatchEvent:function(bt){if(!this.$$disposed){return this.__bo.dispatchEvent(this,bt);
}return true;
},fireEvent:function(c,d,f){if(!this.$$disposed){return this.__bo.fireEvent(this,c,d,f);
}return true;
},fireNonBubblingEvent:function(T,U,V){if(!this.$$disposed){return this.__bo.fireNonBubblingEvent(this,T,U,V);
}return true;
},fireDataEvent:function(x,y,z,A){if(!this.$$disposed){return this.__bo.fireNonBubblingEvent(this,x,qx.event.type.Data,[y,z||null,!!A]);
}return true;
},__bp:null,setUserData:function(r,s){if(!this.__bp){this.__bp={};
}this.__bp[r]=s;
},getUserData:function(X){if(!this.__bp){return null;
}var Y=this.__bp[X];
return Y===undefined?null:Y;
},__bq:qx.log.Logger,debug:function(p){this.__bq.debug(this,p);
},info:function(be){this.__bq.info(this,be);
},warn:function(q){this.__bq.warn(this,q);
},error:function(W){this.__bq.error(this,W);
},trace:function(){this.__bq.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
{};
var Q=this.constructor;
var O;

while(Q.superclass){if(Q.$$destructor){Q.$$destructor.call(this);
}if(Q.$$includes){O=Q.$$flatIncludes;

for(var i=0,l=O.length;i<l;i++){if(O[i].$$destructor){O[i].$$destructor.call(this);
}}}Q=Q.superclass;
}var R,P;
},_disposeFields:function(h){qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(g){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(N){qx.util.DisposeUtil.disposeArray(this,N);
},_disposeMap:function(bf){qx.util.DisposeUtil.disposeMap(this,bf);
}},settings:{"qx.disposerDebugLevel":0},defer:function(K){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(by);
var bn=this.constructor;
var br;
var bs=qx.core.Property.$$store;
var bp=bs.user;
var bq=bs.theme;
var bl=bs.inherit;
var bo=bs.useinit;
var bm=bs.init;

while(bn){br=bn.$$properties;

if(br){for(var name in br){if(br[name].dispose){this[bp[name]]=this[bq[name]]=this[bl[name]]=this[bo[name]]=this[bm[name]]=undefined;
}}}bn=bn.superclass;
}}});
})();
(function(){var n="",m="g",l="0",k='\\$1',j="%",h='-',g="qx.lang.String",f=' ',e='\n',d="undefined";
qx.Bootstrap.define(g,{statics:{camelCase:function(J){return J.replace(/\-([a-z])/g,function(r,s){return s.toUpperCase();
});
},hyphenate:function(q){return q.replace(/[A-Z]/g,function(b){return (h+b.charAt(0).toLowerCase());
});
},capitalize:function(z){return z.replace(/\b[a-z]/g,function(p){return p.toUpperCase();
});
},clean:function(N){return N.replace(/\s+/g,f).trim();
},trimLeft:function(P){return P.replace(/^\s+/,n);
},trimRight:function(a){return a.replace(/\s+$/,n);
},trim:function(o){return o.replace(/^\s+|\s+$/g,n);
},startsWith:function(H,I){return H.substring(0,I.length)===I;
},endsWith:function(E,F){return E.substring(E.length-F.length,E.length)===F;
},pad:function(B,length,C){if(typeof C===d){C=l;
}var D=n;

for(var i=B.length;i<length;i++){D+=C;
}return D+B;
},firstUp:function(O){return O.charAt(0).toUpperCase()+O.substr(1);
},firstLow:function(c){return c.charAt(0).toLowerCase()+c.substr(1);
},contains:function(t,u){return t.indexOf(u)!=-1;
},format:function(K,L){var M=K;

for(var i=0;i<L.length;i++){M=M.replace(new RegExp(j+(i+1),m),L[i]);
}return M;
},escapeRegexpChars:function(Q){return Q.replace(/([.*+?^${}()|[\]\/\\])/g,k);
},toArray:function(A){return A.split(/\B|\b/g);
},stripTags:function(G){return G.replace(/<\/?[^>]+>/gi,n);
},stripScripts:function(v,w){var y=n;
var x=v.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){y+=arguments[1]+e;
return n;
});

if(w===true){qx.lang.Function.globalEval(y);
}return x;
}}});
})();
(function(){var e="function",d="]",c="Interface",b="[Interface ",a="qx.Interface";
qx.Class.define(a,{statics:{define:function(name,x){if(x){if(x.extend&&!(x.extend instanceof Array)){x.extend=[x.extend];
}{};
var y=x.statics?x.statics:{};
if(x.extend){y.$$extends=x.extend;
}
if(x.properties){y.$$properties=x.properties;
}
if(x.members){y.$$members=x.members;
}
if(x.events){y.$$events=x.events;
}}else{var y={};
}y.$$type=c;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
qx.Interface.$$registry[name]=y;
return y;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(n){if(!n){return [];
}var o=n.concat();

for(var i=0,l=n.length;i<l;i++){if(n[i].$$extends){o.push.apply(o,this.flatten(n[i].$$extends));
}}return o;
},__br:function(z,A,B,C){var F=B.$$members;

if(F){for(var E in F){if(typeof F[E]===e){if(typeof z[E]===e){if(C===true&&!qx.Class.hasInterface(A,B)){z[E]=this.__bu(B,z[E],E,F[E]);
}}else{var D=E.match(/^(get|set|reset)(.*)$/);

if(!D||!qx.Class.hasProperty(A,qx.lang.String.firstLow(D[2]))){throw new Error('Implementation of method "'+E+'" is missing in class "'+A.classname+'" required by interface "'+B.name+'"');
}}}else{if(typeof z[E]===undefined){if(typeof z[E]!==e){throw new Error('Implementation of member "'+E+'" is missing in class "'+A.classname+'" required by interface "'+B.name+'"');
}}}}}},__bs:function(f,g){if(g.$$properties){for(var h in g.$$properties){if(!qx.Class.hasProperty(f,h)){throw new Error('The property "'+h+'" is not supported by Class "'+f.classname+'"!');
}}}},__bt:function(j,k){if(k.$$events){for(var m in k.$$events){if(!qx.Class.supportsEvent(j,m)){throw new Error('The event "'+m+'" is not supported by Class "'+j.classname+'"!');
}}}},assertObject:function(t,u){var w=t.constructor;
this.__br(t,w,u,false);
this.__bs(w,u);
this.__bt(w,u);
var v=u.$$extends;

if(v){for(var i=0,l=v.length;i<l;i++){this.assertObject(t,v[i]);
}}},assert:function(p,q,r){this.__br(p.prototype,p,q,r);
this.__bs(p,q);
this.__bt(p,q);
var s=q.$$extends;

if(s){for(var i=0,l=s.length;i<l;i++){this.assert(p,s[i],r);
}}},genericToString:function(){return b+this.name+d;
},$$registry:{},__bu:function(){},__bv:null,__bw:function(){}}});
})();
(function(){var d="qx.ui.decoration.IDecorator";
qx.Interface.define(d,{members:{getMarkup:function(){},resize:function(a,b,c){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var q="_applyStyle",p="repeat",o="px",n="scale",m="solid",l="Color",k="double",j="px ",i="position:absolute;top:0;left:0;",h="dotted",E="__bx",D="_applyWidth",C="qx.ui.decoration.Uniform",B="repeat-y",A="String",z="",y="PositiveInteger",x="border:",w="dashed",v="__by",t="no-repeat",u=" ",r="repeat-x",s=";";
qx.Class.define(C,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{width:{check:y,init:0,apply:D},style:{nullable:true,check:[m,h,w,k],init:m,apply:q},color:{nullable:true,check:l,apply:q},backgroundImage:{check:A,nullable:true,apply:q},backgroundRepeat:{check:[p,r,B,t,n],init:p,apply:q},backgroundColor:{check:l,nullable:true,apply:q}},members:{__bx:null,__by:null,getMarkup:function(){if(this.__bx){return this.__bx;
}var d=i;
var e=this.getWidth();
{};
var g=qx.theme.manager.Color.getInstance();
d+=x+e+j+this.getStyle()+u+g.resolve(this.getColor())+s;
var f=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,d);
return this.__bx=f;
},resize:function(J,K,L){var N=this.getBackgroundImage()&&this.getBackgroundRepeat()==n;

if(N||qx.bom.client.Feature.CONTENT_BOX){var M=this.getWidth()*2;
K-=M;
L-=M;
if(K<0){K=0;
}
if(L<0){L=0;
}}J.style.width=K+o;
J.style.height=L+o;
},tint:function(G,H){var I=qx.theme.manager.Color.getInstance();

if(H==null){H=this.getBackgroundColor();
}G.style.backgroundColor=I.resolve(H)||z;
},getInsets:function(){if(this.__by){return this.__by;
}var F=this.getWidth();
this.__by={top:F,right:F,bottom:F,left:F};
return this.__by;
},_applyWidth:function(){{};
this.__by=null;
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(E,v);
}});
})();
(function(){var n="_applyStyle",m="repeat",l="px",k="position:absolute;top:0;left:0",j="qx.ui.decoration.Background",i="",h="scale",g="backgroundPositionY",f="no-repeat",e="repeat-x",b="repeat-y",d="backgroundPositionX",c="Color",a="String";
qx.Class.define(j,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(v){arguments.callee.base.call(this);

if(v!=null){this.setBackgroundColor(v);
}},properties:{backgroundImage:{check:a,nullable:true,apply:n},backgroundRepeat:{check:[m,e,b,f,h],init:m,apply:n},backgroundColor:{check:c,nullable:true,apply:n},backgroundPositionX:{nullable:true,apply:n},backgroundPositionY:{nullable:true,apply:n},backgroundPosition:{group:[g,d]}},members:{__bz:null,getMarkup:function(){if(this.__bz){return this.__bz;
}var u=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),this.getBackgroundPositionX(),this.getBackgroundPositionY(),k);
return this.__bz=u;
},resize:function(o,p,q){o.style.width=p+l;
o.style.height=q+l;
},tint:function(r,s){var t=qx.theme.manager.Color.getInstance();

if(s==null){s=this.getBackgroundColor();
}r.style.backgroundColor=t.resolve(s)||i;
},__bA:{top:0,right:0,bottom:0,left:0},getInsets:function(){return this.__bA;
},_applyStyle:function(){{};
}}});
})();
(function(){var A="px",z="0px",y="-1px",x="_applyInsets",w="Number",v="no-repeat",u="scale-x",t="scale-y",s="-tr",r="-l",ba="insetTop",Y='</div>',X="insetBottom",W="scale",V="qx.client",U="-br",T="-t",S="-tl",R="-r",Q='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',H="_applyBaseImage",I="-b",F="__bD",G="shorthand",D="String",E="insetRight",B="",C="-bl",J="__bC",K="__bE",M="-c",L="mshtml",O="insetLeft",N="__bB",P="qx.ui.decoration.Grid";
qx.Class.define(P,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(a,b){arguments.callee.base.call(this);
if(a!=null){this.setBaseImage(a);
}
if(b!=null){this.setInsets(b);
}},properties:{baseImage:{check:D,nullable:true,apply:H},insetLeft:{check:w,init:0,apply:x},insetRight:{check:w,init:0,apply:x},insetBottom:{check:w,init:0,apply:x},insetTop:{check:w,init:0,apply:x},insets:{group:[ba,E,X,O],mode:G}},members:{__bB:null,__bC:null,__bD:null,__bE:null,getMarkup:function(){if(this.__bB){return this.__bB;
}var bb=qx.bom.element.Decoration;
var bc=this.__bD;
var bd=this.__bE;
var be=[];
be.push(Q);
be.push(bb.create(bc.tl,v,{top:0,left:0}));
be.push(bb.create(bc.t,u,{top:0,left:bd.left+A}));
be.push(bb.create(bc.tr,v,{top:0,right:0}));
be.push(bb.create(bc.bl,v,{bottom:0,left:0}));
be.push(bb.create(bc.b,u,{bottom:0,left:bd.left+A}));
be.push(bb.create(bc.br,v,{bottom:0,right:0}));
be.push(bb.create(bc.l,t,{top:bd.top+A,left:0}));
be.push(bb.create(bc.c,W,{top:bd.top+A,left:bd.left+A}));
be.push(bb.create(bc.r,t,{top:bd.top+A,right:0}));
be.push(Y);
return this.__bB=be.join(B);
},resize:function(n,o,p){var q=this.__bE;
var innerWidth=o-q.left-q.right;
var innerHeight=p-q.top-q.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}n.style.width=o+A;
n.style.height=p+A;
n.childNodes[1].style.width=innerWidth+A;
n.childNodes[4].style.width=innerWidth+A;
n.childNodes[7].style.width=innerWidth+A;
n.childNodes[6].style.height=innerHeight+A;
n.childNodes[7].style.height=innerHeight+A;
n.childNodes[8].style.height=innerHeight+A;

if(qx.core.Variant.isSet(V,L)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){if(o%2==1){n.childNodes[2].style.marginRight=y;
n.childNodes[5].style.marginRight=y;
n.childNodes[8].style.marginRight=y;
}else{n.childNodes[2].style.marginRight=z;
n.childNodes[5].style.marginRight=z;
n.childNodes[8].style.marginRight=z;
}
if(p%2==1){n.childNodes[3].style.marginBottom=y;
n.childNodes[4].style.marginBottom=y;
n.childNodes[5].style.marginBottom=y;
}else{n.childNodes[3].style.marginBottom=z;
n.childNodes[4].style.marginBottom=z;
n.childNodes[5].style.marginBottom=z;
}}}},tint:function(c,d){},getInsets:function(){if(this.__bC){return this.__bC;
}return this.__bC={left:this.getInsetLeft(),right:this.getInsetRight(),bottom:this.getInsetBottom(),top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__bC=null;
},_applyBaseImage:function(e,f){{};
var g=qx.util.ResourceManager;

if(e){var i=qx.util.AliasManager.getInstance();
var k=i.resolve(e);
var l=/(.*)(\.[a-z]+)$/.exec(k);
var j=l[1];
var h=l[2];
var m=this.__bD={tl:j+S+h,t:j+T+h,tr:j+s+h,bl:j+C+h,b:j+I+h,br:j+U+h,l:j+r+h,c:j+M+h,r:j+R+h};
this.__bE={top:g.getImageHeight(m.t),bottom:g.getImageHeight(m.b),left:g.getImageWidth(m.l),right:g.getImageWidth(m.r)};
}}},destruct:function(){this._disposeFields(N,J,F,K);
}});
})();
(function(){var z="_applyStyle",y="solid",x="Color",w="double",v="px ",u="dotted",t="_applyWidth",s="dashed",r="Number",q=" ",be=";",bd="shorthand",bc="repeat",bb="px",ba="widthTop",Y="scale",X="styleRight",W="styleBottom",V="widthLeft",U="widthBottom",G="",H="styleTop",E="colorBottom",F="styleLeft",C="widthRight",D="colorLeft",A="colorRight",B="colorTop",I="border-left:",J="__bF",M="position:absolute;top:0;left:0;",L="repeat-y",O="String",N="border-bottom:",Q="border-right:",P="qx.ui.decoration.Single",K="border-top:",T="__bG",S="no-repeat",R="repeat-x";
qx.Class.define(P,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(n,o,p){arguments.callee.base.call(this);
if(n!=null){this.setWidth(n);
}
if(o!=null){this.setStyle(o);
}
if(p!=null){this.setColor(p);
}},properties:{widthTop:{check:r,init:0,apply:t},widthRight:{check:r,init:0,apply:t},widthBottom:{check:r,init:0,apply:t},widthLeft:{check:r,init:0,apply:t},styleTop:{nullable:true,check:[y,u,s,w],init:y,apply:z},styleRight:{nullable:true,check:[y,u,s,w],init:y,apply:z},styleBottom:{nullable:true,check:[y,u,s,w],init:y,apply:z},styleLeft:{nullable:true,check:[y,u,s,w],init:y,apply:z},colorTop:{nullable:true,check:x,apply:z},colorRight:{nullable:true,check:x,apply:z},colorBottom:{nullable:true,check:x,apply:z},colorLeft:{nullable:true,check:x,apply:z},backgroundImage:{check:O,nullable:true,apply:z},backgroundRepeat:{check:[bc,R,L,S,Y],init:bc,apply:z},backgroundColor:{check:x,nullable:true,apply:z},left:{group:[V,F,D]},right:{group:[C,X,A]},top:{group:[ba,H,B]},bottom:{group:[U,W,E]},width:{group:[ba,C,U,V],mode:bd},style:{group:[H,X,W,F],mode:bd},color:{group:[B,A,E,D],mode:bd}},members:{__bF:null,__bG:null,getMarkup:function(d){if(this.__bF){return this.__bF;
}var e=qx.theme.manager.Color.getInstance();
var f=G;
var h=this.getWidthTop();

if(h>0){f+=K+h+v+this.getStyleTop()+q+e.resolve(this.getColorTop())+be;
}var h=this.getWidthRight();

if(h>0){f+=Q+h+v+this.getStyleRight()+q+e.resolve(this.getColorRight())+be;
}var h=this.getWidthBottom();

if(h>0){f+=N+h+v+this.getStyleBottom()+q+e.resolve(this.getColorBottom())+be;
}var h=this.getWidthLeft();

if(h>0){f+=I+h+v+this.getStyleLeft()+q+e.resolve(this.getColorLeft())+be;
}{};
f+=M;
var g=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,f);
return this.__bF=g;
},resize:function(i,j,k){var m=this.getBackgroundImage()&&this.getBackgroundRepeat()==Y;

if(m||qx.bom.client.Feature.CONTENT_BOX){var l=this.getInsets();
j-=l.left+l.right;
k-=l.top+l.bottom;
if(j<0){j=0;
}
if(k<0){k=0;
}}i.style.width=j+bb;
i.style.height=k+bb;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||G;
},getInsets:function(){if(this.__bG){return this.__bG;
}this.__bG={top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
return this.__bG;
},_applyWidth:function(){{};
this.__bG=null;
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(J,T);
}});
})();
(function(){var B="_applyStyle",A='"></div>',z="Color",y="repeat",x='<div style="',w='border:',v="1px solid ",u="",t=";",s="px",S="position:absolute;top:1px;left:1px;",R="qx.ui.decoration.Beveled",Q="scale",P='<div style="position:absolute;top:1px;left:0px;',O='<div style="position:absolute;top:1px;left:1px;',N="repeat-y",M='border-bottom:',L="String",K='border-right:',J='</div>',H='border-top:',I="Number",F="no-repeat",G='position:absolute;top:0px;left:1px;',D="repeat-x",E='<div style="overflow:hidden;font-size:0;line-height:0;">',C='border-left:';
qx.Class.define(R,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(p,q,r){arguments.callee.base.call(this);
if(p!=null){this.setOuterColor(p);
}
if(q!=null){this.setInnerColor(q);
}
if(r!=null){this.setInnerOpacity(r);
}},properties:{innerColor:{check:z,nullable:true,apply:B},innerOpacity:{check:I,init:1,apply:B},outerColor:{check:z,nullable:true,apply:B},backgroundImage:{check:L,nullable:true,apply:B},backgroundRepeat:{check:[y,D,N,F,Q],init:y,apply:B},backgroundColor:{check:z,nullable:true,apply:B}},members:{__bH:null,_applyStyle:function(){{};
},getMarkup:function(){if(this.__bH){return this.__bH;
}var a=qx.theme.manager.Color.getInstance();
var b=[];
var d=v+a.resolve(this.getOuterColor())+t;
var c=v+a.resolve(this.getInnerColor())+t;
b.push(E);
b.push(x);
b.push(w,d);
b.push(qx.bom.element.Opacity.compile(0.35));
b.push(A);
b.push(P);
b.push(C,d);
b.push(K,d);
b.push(A);
b.push(x);
b.push(G);
b.push(H,d);
b.push(M,d);
b.push(A);
b.push(qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,S));
b.push(O);
b.push(w,c);
b.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
b.push(A);
b.push(J);
return this.__bH=b.join(u);
},resize:function(e,f,g){if(f<4){f=4;
}
if(g<4){g=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=f-2;
var outerHeight=g-2;
var m=outerWidth;
var l=outerHeight;
var innerWidth=f-4;
var innerHeight=g-4;
}else{var outerWidth=f;
var outerHeight=g;
var m=f-2;
var l=g-2;
var innerWidth=m;
var innerHeight=l;
}var o=s;
var k=e.childNodes[0].style;
k.width=outerWidth+o;
k.height=outerHeight+o;
var j=e.childNodes[1].style;
j.width=outerWidth+o;
j.height=l+o;
var i=e.childNodes[2].style;
i.width=m+o;
i.height=outerHeight+o;
var h=e.childNodes[3].style;
h.width=m+o;
h.height=l+o;
var n=e.childNodes[4].style;
n.width=innerWidth+o;
n.height=innerHeight+o;
},tint:function(T,U){var V=qx.theme.manager.Color.getInstance();

if(U==null){U=this.getBackgroundColor();
}T.childNodes[3].style.backgroundColor=V.resolve(U)||u;
},getInsets:function(){return this.__bI;
},__bI:{top:2,right:2,bottom:2,left:2}}});
})();
(function(){var k="solid",j="scale",i="border-main",h="white",g="border-separator",f="repeat-x",e="background-light",d="border-disabled",c="decoration/table/header-cell.png",b="#f8f8f8",bj="#b6b6b6",bi="background-pane",bh="repeat-y",bg="border-input",bf="decoration/scrollbar/scrollbar-button-bg-horizontal.png",be="decoration/form/input.png",bd="decoration/scrollbar/scrollbar-button-bg-vertical.png",bc="decoration/tabview/tab-button-top-active.png",bb="decoration/form/button-c.png",ba="decoration/scrollbar/scrollbar-bg-vertical.png",r="decoration/shadow/shadow-small.png",s="decoration/form/button-checked.png",p="decoration/tabview/tab-button-left-inactive.png",q="decoration/groupbox/groupbox.png",n="#FAFAFA",o="decoration/pane/pane.png",l="decoration/menu/background.png",m="decoration/toolbar/toolbar-part.gif",w="decoration/tabview/tab-button-top-inactive.png",x="decoration/menu/bar-background.png",F="decoration/tabview/tab-button-bottom-active.png",D="decoration/form/button-hovered.png",N="#b8b8b8",I="decoration/form/input-focused.png",V="decoration/window/captionbar-inactive.png",S="qx/decoration/Modern",z="decoration/window/statusbar.png",Y="border-focused",X="decoration/selection.png",W="table-focus-indicator",y="#F2F2F2",B="decoration/form/button-checked-c.png",C="decoration/scrollbar/scrollbar-bg-horizontal.png",E="qx.theme.modern.Decoration",G="#f4f4f4",J="decoration/form/button.png",P="decoration/app-header.png",U="decoration/tabview/tabview-pane.png",t="decoration/form/button-focused.png",u="decoration/tabview/tab-button-bottom-inactive.png",A="decoration/form/button-disabled.png",M="decoration/tabview/tab-button-right-active.png",L="decoration/form/button-pressed.png",K="decoration/window/captionbar-active.png",R="decoration/tabview/tab-button-left-active.png",Q="background-splitpane",H="decoration/form/button-checked-focused.png",O="#C5C5C5",a="decoration/toolbar/toolbar-gradient.png",T="decoration/tabview/tab-button-right-inactive.png",v="decoration/shadow/shadow.png";
qx.Theme.define(E,{resource:S,decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:i}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:X,backgroundRepeat:j}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:q}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:g}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:v,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:r,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:C,backgroundRepeat:f}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:ba,backgroundRepeat:bh}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bf,backgroundRepeat:j,outerColor:i,innerColor:h,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bf,backgroundRepeat:j,outerColor:d,innerColor:h,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bd,backgroundRepeat:j,outerColor:i,innerColor:h,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bd,backgroundRepeat:j,outerColor:d,innerColor:h,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:J,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:D,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:L,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:H,insets:2}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bg,innerColor:h,innerOpacity:0.5,backgroundImage:be,backgroundRepeat:f,backgroundColor:e}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bg,innerColor:Y,backgroundImage:I,backgroundRepeat:f,backgroundColor:e}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:h,innerOpacity:0.5,backgroundImage:be,backgroundRepeat:f,backgroundColor:e}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:a,backgroundRepeat:j}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bj,innerColor:b,backgroundImage:bb,backgroundRepeat:j}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bj,innerColor:b,backgroundImage:B,backgroundRepeat:j}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:N,colorRight:G,styleLeft:k,styleRight:k}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:m,backgroundRepeat:bh}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:U,insets:[0,2,3,0]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:w}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:u}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:R}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:p}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:T}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bi,width:3,color:Q,style:k}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bi,width:1,color:i,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:K}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:V}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:z}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:i,style:k}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:i,style:k}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthBottom:1,colorBottom:i,style:k}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:g,styleRight:k}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:g,styleRight:k,widthBottom:1,colorBottom:h,styleBottom:k}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthBottom:1,colorBottom:i,style:k}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:W,style:k}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:i,style:k}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthRight:1,colorRight:y,style:k}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:l,backgroundRepeat:j,width:1,color:i,style:k}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:O,widthBottom:1,colorBottom:n}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:x,backgroundRepeat:j,width:1,color:g,style:k}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:P,backgroundRepeat:j}}}});
})();
(function(){var a="jslinttoolkit.theme.Decoration";
qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__bJ:function(){var o=navigator.platform;
if(o==null||o===k){o=navigator.userAgent;
}
if(o.indexOf(e)!=-1||o.indexOf(l)!=-1||o.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(g)!=-1||o.indexOf(b)!=-1||o.indexOf(c)!=-1||o.indexOf(m)!=-1||o.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(a)!=-1||o.indexOf(i)!=-1||o.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(n){n.__bJ();
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
(function(){var a="jslinttoolkit.theme.Font";
qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,resource:b,icons:{}});
})();
(function(){var fX="button-frame",fW="widget",fV="atom",fU="main",fT="button",fS="middle",fR="background-light",fQ="image",fP="groupbox",fO="cell",eJ="text-selected",eI="bold",eH="menu-button",eG="decoration/arrows/down.png",eF="toolbar-button",eE="spinner",eD="input",eC="input-disabled",eB="selected",eA="popup",gf="textfield",gg="input-focused",gd="list",ge="tree-item",gb="treevirtual-contract",gc="scrollbar",fY="datechooser/nav-button",ga="text-hovered",gh="center",gi="treevirtual-expand",fx="tooltip",fw="label",fz="decoration/arrows/right.png",fy="background-application",fB="radiobutton",fA="text-disabled",fD="combobox",fC="checkbox",fv="text-title",fu="qx/static/blank.gif",cS="scrollbar/button",cT="right",cU="combobox/button",cV="text-label",cW="decoration/tree/closed.png",cX="scrollbar-slider-horizontal",cY="white",da="decoration/arrows/left.png",db="button-focused",dc="text-light",gw="text-input",gv="icon/16/places/folder.png",gu="slidebar/button-forward",gt="right-top",gA="background-splitpane",gz=".png",gy="decoration/tree/open.png",gx="default",gC="decoration/arrows/down-small.png",gB="datechooser",dP="slidebar/button-backward",dQ="selectbox",dN="treevirtual-folder",dO="shadow-popup",dT="icon/16/mimetypes/office-document.png",dU="background-medium",dR="table",dS="decoration/form/",dL="icon/16/places/folder-open.png",dM="button-checked",dv="decoration/window/maximize-active-hovered.png",du="radiobutton-hovered",dx="decoration/cursors/",dw="slidebar",dr="menu",dq="table-scroller-focus-indicator",dt="move-frame",ds="nodrop",dp="table-header-cell",dn="app-header",ea="row-layer",eb="text-inactive",ec="move",ed="radiobutton-checked-focused",dV="decoration/window/restore-active-hovered.png",dW="shadow-window",dX="table-column-button",dY="right.png",ee="tabview-page-button-bottom-inactive",ef="window-statusbar",dG="button-hovered",dF="decoration/scrollbar/scrollbar-",dE="background-tip",dD="scrollbar-slider-horizontal-disabled",dC="table-scroller-header",dB="radiobutton-disabled",dA="button-pressed",dz="table-pane",dK="decoration/window/close-active.png",dJ="tabview-page-button-left-active",eg="checkbox-hovered",eh="checkbox-checked",ei="decoration/window/minimize-active-hovered.png",ej="menubar",ek="icon/16/actions/dialog-cancel.png",el="tabview-page-button-top-inactive",em="tabview-page-button-left-inactive",en="toolbar-button-checked",eo="decoration/tree/open-selected.png",ep="radiobutton-checked",eR="decoration/window/minimize-inactive.png",eQ="icon/16/apps/office-calendar.png",eP="group",eO="tabview-page-button-right-inactive",eV="decoration/window/minimize-active.png",eU="decoration/window/restore-inactive.png",eT="text-active",eS="checkbox-checked-focused",eY="splitpane",eX="toolbar-separator",fq="button-preselected-focused",fr="decoration/window/close-active-hovered.png",fo="toolbar",fp="checkbox-pressed",fm="button-disabled",fn="border-separator",fk="decoration/window/maximize-inactive.png",fl="icon/22/places/folder-open.png",fs="scrollarea",ft="scrollbar-vertical",fH="decoration/toolbar/toolbar-handle-knob.gif",fG="icon/22/mimetypes/office-document.png",fJ="button-preselected",fI="button-checked-focused",fL="up.png",fK="decoration/tree/closed-selected.png",fN="qx.theme.modern.Appearance",fM="checkbox-disabled",fF="toolbar-button-hovered",fE="progressive-table-header",gp="decoration/menu/radiobutton.gif",gq="decoration/arrows/forward.png",gr="decoration/table/descending.png",gs="window-captionbar-active",gl="checkbox-checked-hovered",gm="scrollbar-slider-vertical",gn="alias",go="decoration/window/restore-active.png",gj="checkbox-checked-disabled",gk="icon/32/mimetypes/office-document.png",cR="radiobutton-checked-disabled",cQ="tabview-pane",cP="decoration/arrows/rewind.png",cO="checkbox-focused",cN="top",cM="#EEE",cL="icon/16/actions/dialog-ok.png",cK="radiobutton-checked-hovered",cJ="table-header-cell-hovered",cI="window",df="text-gray",dg="decoration/menu/radiobutton-invert.gif",dd="slider",de="decoration/table/select-column-order.png",dj="down.png",dk="tabview-page-button-top-active",dh="icon/32/places/folder-open.png",di="icon/22/places/folder.png",dl="decoration/window/maximize-active.png",dm="checkbox-checked-pressed",fa="decoration/window/close-inactive.png",eW="toolbar-part",ff="decoration/splitpane/knob-vertical.png",fb="left.png",eM="decoration/menu/checkbox-invert.gif",eK="decoration/arrows/up.png",dy="radiobutton-checked-pressed",eN="table-statusbar",dI="radiobutton-pressed",dH="window-captionbar-inactive",es="copy",et="radiobutton-focused",eu="decoration/menu/checkbox.gif",ev="decoration/splitpane/knob-horizontal.png",ew="icon/32/places/folder.png",ex="tabview-page-button-bottom-active",ey="decoration/arrows/up-small.png",ez="decoration/table/ascending.png",eq="small",er="tabview-page-button-right-active",eL="-disabled",fe="scrollbar-horizontal",fd="progressive-table-header-cell",fc="menu-separator",fj="pane",fi="decoration/arrows/right-invert.png",fh=".gif",fg="icon/16/actions/view-refresh.png";
qx.Theme.define(fN,{appearances:{"widget":{},"root":{style:function(gL){return {backgroundColor:fy,textColor:cV,font:gx};
}},"label":{style:function(y){return {textColor:y.disabled?fA:undefined};
}},"move-frame":{style:function(bC){return {decorator:fU};
}},"resize-frame":dt,"dragdrop-cursor":{style:function(A){var B=ds;

if(A.copy){B=es;
}else if(A.move){B=ec;
}else if(A.alias){B=gn;
}return {source:dx+B+fh,position:gt,offset:[2,16,2,6]};
}},"image":{style:function(cb){return {opacity:!cb.replacement&&cb.disabled?0.3:1};
}},"atom":{},"atom/label":fw,"atom/icon":fQ,"popup":{style:function(t){return {decorator:fU,backgroundColor:fR,shadow:dO};
}},"button-frame":{alias:fV,style:function(ci){var ck,cj;

if(ci.checked&&ci.focused&&!ci.inner){ck=fI;
cj=undefined;
}else if(ci.disabled){ck=fm;
cj=undefined;
}else if(ci.pressed){ck=dA;
cj=ga;
}else if(ci.checked){ck=dM;
cj=undefined;
}else if(ci.hovered){ck=dG;
cj=ga;
}else if(ci.preselected&&ci.focused&&!ci.inner){ck=fq;
cj=ga;
}else if(ci.preselected){ck=fJ;
cj=ga;
}else if(ci.focused&&!ci.inner){ck=db;
cj=undefined;
}else{ck=fT;
cj=undefined;
}return {decorator:ck,textColor:cj};
}},"button-frame/image":{style:function(bx){return {opacity:!bx.replacement&&bx.disabled?0.5:1};
}},"button":{alias:fX,include:fX,style:function(ch){return {padding:[2,8],center:true};
}},"splitbutton":{},"splitbutton/button":fT,"splitbutton/arrow":{alias:fT,include:fT,style:function(bs){return {icon:eG,padding:2,marginLeft:1};
}},"checkbox":{alias:fV,style:function(gM){var gN;

if(gM.checked&&gM.focused){gN=eS;
}else if(gM.checked&&gM.disabled){gN=gj;
}else if(gM.checked&&gM.pressed){gN=dm;
}else if(gM.checked&&gM.hovered){gN=gl;
}else if(gM.checked){gN=eh;
}else if(gM.disabled){gN=fM;
}else if(gM.focused){gN=cO;
}else if(gM.pressed){gN=fp;
}else if(gM.hovered){gN=eg;
}else{gN=fC;
}return {icon:dS+gN+gz,gap:6};
}},"radiobutton":{alias:fV,style:function(bV){var bW;

if(bV.checked&&bV.focused){bW=ed;
}else if(bV.checked&&bV.disabled){bW=cR;
}else if(bV.checked&&bV.pressed){bW=dy;
}else if(bV.checked&&bV.hovered){bW=cK;
}else if(bV.checked){bW=ep;
}else if(bV.disabled){bW=dB;
}else if(bV.focused){bW=et;
}else if(bV.pressed){bW=dI;
}else if(bV.hovered){bW=du;
}else{bW=fB;
}return {icon:dS+bW+gz,gap:6};
}},"textfield":{style:function(gE){return {decorator:gE.focused?gg:gE.disabled?eC:eD,padding:[2,4,1],textColor:gE.disabled?fA:gw};
}},"textarea":{include:gf,style:function(bE){return {padding:4};
}},"spinner":{style:function(gD){return {decorator:gD.focused?gg:gD.disabled?eC:eD};
}},"spinner/textfield":{include:gf,style:function(L){return {decorator:undefined};
}},"spinner/upbutton":{alias:fX,include:fX,style:function(gW){return {icon:ey,padding:gW.pressed?[2,2,0,4]:[1,3,1,3]};
}},"spinner/downbutton":{alias:fX,include:fX,style:function(bc){return {icon:gC,padding:bc.pressed?[2,2,0,4]:[1,3,1,3]};
}},"datefield":fD,"datefield/button":{alias:cU,include:cU,style:function(i){return {icon:eQ,padding:[0,3],decorator:undefined};
}},"datefield/textfield":{style:function(gT){return {padding:[2,4,1],textColor:gT.disabled?fA:gw};
}},"datefield/list":{alias:gB,include:gB,style:function(O){return {decorator:undefined};
}},"groupbox":{style:function(cE){return {legendPosition:cN};
}},"groupbox/legend":{alias:fV,style:function(cg){return {padding:[1,0,1,4],textColor:fv,font:eI};
}},"groupbox/frame":{style:function(x){return {padding:12,decorator:eP};
}},"check-groupbox":fP,"check-groupbox/legend":{alias:fC,include:fC,style:function(k){return {padding:[1,0,1,4],textColor:fv,font:eI};
}},"radio-groupbox":fP,"radio-groupbox/legend":{alias:fB,include:fB,style:function(bd){return {padding:[1,0,1,4],textColor:fv};
}},"scrollarea":{style:function(bv){return {minWidth:64,minHeight:64};
}},"scrollarea/corner":{style:function(bk){return {backgroundColor:fy};
}},"scrollarea/pane":fW,"scrollarea/scrollbar-x":gc,"scrollarea/scrollbar-y":gc,"scrollbar":{style:function(e){return {width:e.horizontal?undefined:16,height:e.horizontal?16:undefined,decorator:e.horizontal?fe:ft,padding:1};
}},"scrollbar/slider":{alias:dd,style:function(cx){return {padding:cx.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:fX,style:function(bM){var bN=bM.horizontal?cX:gm;

if(bM.disabled){bN+=eL;
}return {decorator:bN,minHeight:bM.horizontal?undefined:14,minWidth:bM.horizontal?14:undefined};
}},"scrollbar/button":{alias:fX,include:fX,style:function(cv){var cw=dF;

if(cv.left){cw+=fb;
}else if(cv.right){cw+=dY;
}else if(cv.up){cw+=fL;
}else{cw+=dj;
}
if(cv.left||cv.right){return {padding:[0,0,0,cv.left?3:4],icon:cw,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:cw,width:14,height:15};
}}},"scrollbar/button-begin":cS,"scrollbar/button-end":cS,"slider":{style:function(n){return {decorator:n.focused?gg:n.disabled?eC:eD};
}},"slider/knob":{include:fX,style:function(bu){return {decorator:bu.disabled?dD:cX,height:14,width:14};
}},"list":{alias:fs,style:function(bA){return {backgroundColor:fR,decorator:bA.focused?gg:bA.disabled?eC:eD};
}},"list/pane":fW,"listitem":{alias:fV,style:function(cG){return {padding:4,textColor:cG.selected?eJ:undefined,decorator:cG.selected?eB:undefined};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fX,include:fX,style:function(cn){return {padding:5,center:true,icon:cn.barLeft||cn.barRight?eG:fz};
}},"slidebar/button-backward":{alias:fX,include:fX,style:function(S){return {padding:5,center:true,icon:S.barLeft||S.barRight?eK:da};
}},"tabview":{style:function(W){return {contentPadding:16};
}},"tabview/bar":{alias:dw,style:function(c){var d={marginBottom:c.barTop?-1:0,marginTop:c.barBottom?-4:0,marginLeft:c.barRight?-3:0,marginRight:c.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(c.barTop||c.barBottom){d.paddingLeft=5;
d.paddingRight=7;
}else{d.paddingTop=5;
d.paddingBottom=7;
}return d;
}},"tabview/bar/button-forward":{include:gu,alias:gu,style:function(bq){if(bq.barTop||bq.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:dP,alias:dP,style:function(M){if(M.barTop||M.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(cr){return {decorator:cQ,minHeight:100,marginBottom:cr.barBottom?-1:0,marginTop:cr.barTop?-1:0,marginLeft:cr.barLeft?-1:0,marginRight:cr.barRight?-1:0};
}},"tabview-page":fW,"tabview-page/button":{alias:fV,style:function(bO){var bU,bQ=0;
var bT=0,bP=0,bR=0,bS=0;

if(bO.checked){if(bO.barTop){bU=dk;
bQ=[6,14];
bR=bO.firstTab?0:-5;
bS=bO.lastTab?0:-5;
}else if(bO.barBottom){bU=ex;
bQ=[6,14];
bR=bO.firstTab?0:-5;
bS=bO.lastTab?0:-5;
}else if(bO.barRight){bU=er;
bQ=[6,13];
bT=bO.firstTab?0:-5;
bP=bO.lastTab?0:-5;
}else{bU=dJ;
bQ=[6,13];
bT=bO.firstTab?0:-5;
bP=bO.lastTab?0:-5;
}}else{if(bO.barTop){bU=el;
bQ=[4,10];
bT=4;
bR=bO.firstTab?5:1;
bS=1;
}else if(bO.barBottom){bU=ee;
bQ=[4,10];
bP=4;
bR=bO.firstTab?5:1;
bS=1;
}else if(bO.barRight){bU=eO;
bQ=[4,10];
bS=5;
bT=bO.firstTab?5:1;
bP=1;
bR=1;
}else{bU=em;
bQ=[4,10];
bR=5;
bT=bO.firstTab?5:1;
bP=1;
bS=1;
}}return {zIndex:bO.checked?10:5,decorator:bU,padding:bQ,marginTop:bT,marginBottom:bP,marginLeft:bR,marginRight:bS,textColor:bO.checked?eT:eb};
}},"toolbar":{style:function(co){return {decorator:fo,spacing:2};
}},"toolbar/part":{style:function(bo){return {decorator:eW,spacing:2};
}},"toolbar/part/container":{style:function(gJ){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(cH){return {source:fH,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:fV,style:function(b){return {marginTop:2,marginBottom:2,padding:(b.pressed||b.checked||b.hovered)&&!b.disabled||(b.disabled&&b.checked)?3:5,decorator:b.pressed||(b.checked&&!b.hovered)||(b.checked&&b.disabled)?en:b.hovered&&!b.disabled?fF:undefined};
}},"toolbar-menubutton":{alias:eF,include:eF,style:function(X){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:fQ,include:fQ,style:function(a){return {source:gC};
}},"toolbar-splitbutton":{style:function(gF){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eF,include:eF,style:function(R){return {icon:eG,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eF,include:eF,style:function(F){return {padding:F.pressed||F.checked?1:F.hovered?1:3,icon:eG,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(E){return {decorator:eX,margin:7};
}},"tree":gd,"tree-item":{style:function(o){return {padding:[2,6],textColor:o.selected?eJ:undefined,decorator:o.selected?eB:undefined};
}},"tree-item/icon":{include:fQ,style:function(gK){return {paddingRight:5};
}},"tree-item/label":fw,"tree-item/open":{include:fQ,style:function(G){var H;

if(G.selected&&G.opened){H=eo;
}else if(G.selected&&!G.opened){H=fK;
}else if(G.opened){H=gy;
}else{H=cW;
}return {padding:[0,5,0,2],source:H};
}},"tree-folder":{include:ge,alias:ge,style:function(bH){var bI;

if(bH.small){bI=bH.opened?dL:gv;
}else if(bH.large){bI=bH.opened?dh:ew;
}else{bI=bH.opened?fl:di;
}return {icon:bI};
}},"tree-file":{include:ge,alias:ge,style:function(bY){return {icon:bY.small?dT:bY.large?gk:fG};
}},"treevirtual":dR,"treevirtual-folder":{style:function(cF){return {icon:cF.opened?dL:gv};
}},"treevirtual-file":{include:dN,alias:dN,style:function(I){return {icon:dT};
}},"treevirtual-line":{style:function(bl){return {icon:fu};
}},"treevirtual-contract":{style:function(cz){return {icon:gy,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(g){return {icon:cW,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gb,"treevirtual-only-expand":gi,"treevirtual-start-contract":gb,"treevirtual-start-expand":gi,"treevirtual-end-contract":gb,"treevirtual-end-expand":gi,"treevirtual-cross-contract":gb,"treevirtual-cross-expand":gi,"treevirtual-end":{style:function(gY){return {icon:fu};
}},"treevirtual-cross":{style:function(gS){return {icon:fu};
}},"tooltip":{include:eA,style:function(gV){return {backgroundColor:dE,padding:[1,3,2,3],offset:[1,1,20,1]};
}},"tooltip/atom":fV,"window":{style:function(ct){return {shadow:dW,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(r){return {decorator:cI};
}},"window/captionbar":{style:function(bz){return {decorator:bz.active?gs:dH,textColor:bz.active?cY:df,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(P){return {margin:[5,0,3,6]};
}},"window/title":{style:function(bX){return {alignY:fS,font:eI,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:fV,style:function(gP){return {icon:gP.active?gP.hovered?ei:eV:eR,margin:[4,8,2,0]};
}},"window/restore-button":{alias:fV,style:function(cd){return {icon:cd.active?cd.hovered?dV:go:eU,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:fV,style:function(bh){return {icon:bh.active?bh.hovered?dv:dl:fk,margin:[4,8,2,0]};
}},"window/close-button":{alias:fV,style:function(T){return {icon:T.active?T.hovered?fr:dK:fa,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(gG){return {padding:[2,6],decorator:ef,minHeight:18};
}},"window/statusbar-text":{style:function(gU){return {font:eq};
}},"iframe":{style:function(m){return {decorator:fU};
}},"resizer":{style:function(bD){return {decorator:fj};
}},"splitpane":{style:function(bj){return {decorator:eY};
}},"splitpane/splitter":{style:function(bg){return {width:bg.horizontal?3:undefined,height:bg.vertical?3:undefined,backgroundColor:gA};
}},"splitpane/splitter/knob":{style:function(bb){return {source:bb.horizontal?ev:ff};
}},"splitpane/slider":{style:function(l){return {width:l.horizontal?3:undefined,height:l.vertical?3:undefined,backgroundColor:gA};
}},"selectbox":{alias:fX,include:fX,style:function(gO){return {padding:[2,8]};
}},"selectbox/atom":fV,"selectbox/popup":eA,"selectbox/list":{alias:gd},"selectbox/arrow":{include:fQ,style:function(cD){return {source:eG,paddingLeft:5};
}},"datechooser":{style:function(Q){return {padding:2,decorator:fU,backgroundColor:fR};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:fX,alias:fX,style:function(gQ){var gR={padding:[2,4]};

if(gQ.lastYear){gR.icon=cP;
gR.marginRight=1;
}else if(gQ.lastMonth){gR.icon=da;
}else if(gQ.nextYear){gR.icon=gq;
gR.marginLeft=1;
}else if(gQ.nextMonth){gR.icon=fz;
}return gR;
}},"datechooser/last-year-button-tooltip":fx,"datechooser/last-month-button-tooltip":fx,"datechooser/next-year-button-tooltip":fx,"datechooser/next-month-button-tooltip":fx,"datechooser/last-year-button":fY,"datechooser/last-month-button":fY,"datechooser/next-month-button":fY,"datechooser/next-year-button":fY,"datechooser/month-year-label":{style:function(cc){return {font:eI,textAlign:gh};
}},"datechooser/date-pane":{style:function(cA){return {marginTop:2};
}},"datechooser/weekday":{style:function(gH){return {textColor:gH.weekend?dc:undefined,textAlign:gh,paddingTop:2,backgroundColor:dU};
}},"datechooser/week":{style:function(w){return {textAlign:gh,padding:[2,4],backgroundColor:dU};
}},"datechooser/day":{style:function(bB){return {textAlign:gh,decorator:bB.selected?eB:undefined,textColor:bB.selected?eJ:bB.otherMonth?dc:undefined,font:bB.today?eI:undefined,padding:[2,4]};
}},"combobox":{style:function(cm){return {decorator:cm.focused?gg:cm.disabled?eC:eD};
}},"combobox/popup":eA,"combobox/list":{alias:gd},"combobox/button":{include:fX,alias:fX,style:function(u){var v={icon:eG,padding:2};

if(u.selected){v.decorator=db;
}return v;
}},"combobox/textfield":{include:gf,style:function(br){return {decorator:undefined};
}},"menu":{style:function(p){var q={decorator:dr,shadow:dO,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4};

if(p.submenu){q.position=gt;
q.offset=[-2,-3];
}return q;
}},"menu-separator":{style:function(cu){return {height:0,decorator:fc,margin:[4,2]};
}},"menu-button":{alias:fV,style:function(cC){return {decorator:cC.selected?eB:undefined,textColor:cC.selected?eJ:undefined,padding:[4,6]};
}},"menu-button/icon":{include:fQ,style:function(cq){return {alignY:fS};
}},"menu-button/label":{include:fw,style:function(j){return {alignY:fS,padding:1};
}},"menu-button/shortcut":{include:fw,style:function(ba){return {alignY:fS,marginLeft:14,padding:1};
}},"menu-button/arrow":{style:function(bJ){return {source:bJ.selected?fi:fz,alignY:fS};
}},"menu-checkbox":{alias:eH,include:eH,style:function(bw){return {icon:!bw.checked?undefined:bw.selected?eM:eu};
}},"menu-radiobutton":{alias:eH,include:eH,style:function(cl){return {icon:!cl.checked?undefined:cl.selected?dg:gp};
}},"menubar":{style:function(gI){return {decorator:ej};
}},"menubar-button":{alias:fV,style:function(s){return {decorator:s.pressed||s.hovered?eB:undefined,textColor:s.pressed||s.hovered?eJ:undefined,padding:[3,8]};
}},"colorselector":fW,"colorselector/control-bar":fW,"colorselector/control-pane":fW,"colorselector/visual-pane":fP,"colorselector/preset-grid":fW,"colorselector/colorbucket":{style:function(bm){return {decorator:fU,width:16,height:16};
}},"colorselector/preset-field-set":fP,"colorselector/input-field-set":fP,"colorselector/preview-field-set":fP,"colorselector/hex-field-composite":fW,"colorselector/hex-field":gf,"colorselector/rgb-spinner-composite":fW,"colorselector/rgb-spinner-red":eE,"colorselector/rgb-spinner-green":eE,"colorselector/rgb-spinner-blue":eE,"colorselector/hsb-spinner-composite":fW,"colorselector/hsb-spinner-hue":eE,"colorselector/hsb-spinner-saturation":eE,"colorselector/hsb-spinner-brightness":eE,"colorselector/preview-content-old":{style:function(ce){return {decorator:fU,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(J){return {decorator:fU,backgroundColor:fR,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(be){return {decorator:fU,margin:5};
}},"colorselector/brightness-field":{style:function(cp){return {decorator:fU,margin:[5,7]};
}},"colorselector/hue-saturation-pane":fW,"colorselector/hue-saturation-handle":fW,"colorselector/brightness-pane":fW,"colorselector/brightness-handle":fW,"colorpopup":{alias:eA,include:eA,style:function(cB){return {padding:5,backgroundColor:fy};
}},"colorpopup/field":{style:function(bn){return {decorator:fU,margin:2,width:14,height:14,backgroundColor:fR};
}},"colorpopup/selector-button":fT,"colorpopup/auto-button":fT,"colorpopup/preview-pane":fP,"colorpopup/current-preview":{style:function(C){return {height:20,padding:4,marginLeft:4,decorator:fU,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(bF){return {height:20,padding:4,marginRight:4,decorator:fU,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:fT,include:fT,style:function(cy){return {icon:cL};
}},"colorpopup/colorselector-cancelbutton":{alias:fT,include:fT,style:function(by){return {icon:ek};
}},"table":{alias:fW,style:function(N){return {decorator:dR};
}},"table-header":{},"table/statusbar":{style:function(cf){return {decorator:eN,padding:[0,2]};
}},"table/column-button":{alias:fX,style:function(z){return {decorator:dX,padding:3,icon:de};
}},"table-column-reset-button":{include:eH,alias:eH,style:function(){return {icon:fg};
}},"table-scroller":fW,"table-scroller/scrollbar-x":gc,"table-scroller/scrollbar-y":gc,"table-scroller/header":{style:function(bG){return {decorator:dC};
}},"table-scroller/pane":{style:function(bp){return {backgroundColor:dz};
}},"table-scroller/focus-indicator":{style:function(f){return {decorator:dq};
}},"table-scroller/resize-line":{style:function(bi){return {backgroundColor:fn,width:2};
}},"table-header-cell":{alias:fV,style:function(D){return {minWidth:13,minHeight:20,padding:D.hovered?[3,4,2,4]:[3,4],decorator:D.hovered?cJ:dp,sortIcon:D.sorted?(D.sortedAscending?ez:gr):undefined};
}},"table-header-cell/label":{style:function(h){return {minWidth:0,alignY:fS,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(K){return {alignY:fS,alignX:cT};
}},"table-header-cell/icon":{style:function(gX){return {minWidth:0,alignY:fS,paddingRight:5};
}},"table-editor-textfield":{include:gf,style:function(bf){return {decorator:undefined,padding:[2,2],backgroundColor:fR};
}},"table-editor-selectbox":{include:dQ,alias:dQ,style:function(V){return {padding:[0,2],backgroundColor:fR};
}},"table-editor-combobox":{include:fD,alias:fD,style:function(cs){return {decorator:undefined,backgroundColor:fR};
}},"progressive-table-header":{alias:fW,style:function(bt){return {decorator:fE};
}},"progressive-table-header-cell":{alias:fV,style:function(Y){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:fd};
}},"app-header":{style:function(bL){return {font:eI,textColor:eJ,padding:[8,12],decorator:dn};
}},"virtual-list":gd,"virtual-list/row-layer":ea,"row-layer":{style:function(U){return {colorEven:cY,colorOdd:cM};
}},"column-layer":fW,"cell":{style:function(bK){return {textColor:bK.selected?eJ:cV,padding:[3,6],font:gx};
}},"cell-string":fO,"cell-number":{include:fO,style:function(ca){return {textAlign:cT};
}},"cell-image":fO,"cell-boolean":fO,"cell-atom":fO,"cell-date":fO,"cell-html":fO}});
})();
(function(){var a="jslinttoolkit.theme.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});
})();
(function(){var a="jslinttoolkit.theme.Theme";
qx.Theme.define(a,{meta:{color:jslinttoolkit.theme.Color,decoration:jslinttoolkit.theme.Decoration,font:jslinttoolkit.theme.Font,icon:qx.theme.icon.Tango,appearance:jslinttoolkit.theme.Appearance}});
})();
(function(){var e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d);
if(!Error.prototype.toString||Error.prototype.toString()==a){Error.prototype.toString=function(){return this.message;
};
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(o,p){if(p==null){p=0;
}else if(p<0){p=Math.max(0,this.length+p);
}
for(var i=p;i<this.length;i++){if(this[i]===o){return i;
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
if(!Array.prototype.forEach){Array.prototype.forEach=function(f,g){var l=this.length;

for(var i=0;i<l;i++){f.call(g,this[i],i,this);
}};
}
if(!Array.prototype.filter){Array.prototype.filter=function(u,v){var l=this.length;
var w=[];

for(var i=0;i<l;i++){if(u.call(v,this[i],i,this)){w.push(this[i]);
}}return w;
};
}
if(!Array.prototype.map){Array.prototype.map=function(h,j){var l=this.length;
var k=[];

for(var i=0;i<l;i++){k.push(h.call(j,this[i],i,this));
}return k;
};
}
if(!Array.prototype.some){Array.prototype.some=function(s,t){var l=this.length;

for(var i=0;i<l;i++){if(s.call(t,this[i],i,this)){return true;
}}return false;
};
}
if(!Array.prototype.every){Array.prototype.every=function(m,n){var l=this.length;

for(var i=0;i<l;i++){if(!m.call(n,this[i],i,this)){return false;
}}return true;
};
}if(!String.prototype.quote){String.prototype.quote=function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
};
}})();
(function(){var u="indexOf",t="lastIndexOf",r="slice",q="concat",p="join",o="toLocaleUpperCase",n="shift",m="substr",k="filter",j="unshift",Q="match",P="quote",O="qx.lang.Generics",N="localeCompare",M="sort",L="some",K="charAt",J="split",I="substring",H="pop",B="toUpperCase",C="replace",z="push",A="charCodeAt",x="every",y="reverse",v="search",w="forEach",D="map",E="toLowerCase",G="splice",F="toLocaleLowerCase";
qx.Bootstrap.define(O,{statics:{__bM:{"Array":[p,y,M,z,H,n,j,G,q,r,u,t,w,D,k,L,x],"String":[P,I,E,B,K,A,u,t,F,o,N,Q,v,C,J,m,q,r]},__bN:function(a,b){return function(s){return a.prototype[b].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bO:function(){var d=qx.lang.Generics.__bM;

for(var h in d){var f=window[h];
var e=d[h];

for(var i=0,l=e.length;i<l;i++){var g=e[i];

if(!f[g]){f[g]=qx.lang.Generics.__bN(f,g);
}}}}},defer:function(c){c.__bO();
}});
})();
(function(){var I=":",H="qx.client",G="anonymous",F="...",E="qx.dev.StackTrace",D="",C="\n",B="/source/class/",A=".";
qx.Class.define(E,{statics:{getStackTrace:qx.core.Variant.select(H,{"gecko":function(){try{throw new Error();
}catch(q){var h=this.getStackTraceFromError(q);
qx.lang.Array.removeAt(h,0);
var f=this.getStackTraceFromCaller(arguments);
var d=f.length>h.length?f:h;

for(var i=0;i<Math.min(f.length,h.length);i++){var e=f[i];

if(e.indexOf(G)>=0){continue;
}var m=e.split(I);

if(m.length!=2){continue;
}var k=m[0];
var c=m[1];
var b=h[i];
var n=b.split(I);
var j=n[0];
var a=n[1];

if(qx.Class.getByName(j)){var g=j;
}else{g=k;
}var l=g+I;

if(c){l+=c+I;
}l+=a;
d[i]=l;
}return d;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var N;

try{N.bar();
}catch(z){var O=this.getStackTraceFromError(z);
qx.lang.Array.removeAt(O,0);
return O;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(H,{"opera":function(r){return [];
},"default":function(P){var U=[];
var T=qx.lang.Function.getCaller(P);
var Q={};

while(T){var R=qx.lang.Function.getName(T);
U.push(R);

try{T=T.caller;
}catch(p){break;
}
if(!T){break;
}var S=qx.core.ObjectRegistry.toHashCode(T);

if(Q[S]){U.push(F);
break;
}Q[S]=T;
}return U;
}}),getStackTraceFromError:qx.core.Variant.select(H,{"gecko":function(V){if(!V.stack){return [];
}var bc=/@(.+):(\d+)$/gm;
var W;
var X=[];

while((W=bc.exec(V.stack))!=null){var Y=W[1];
var bb=W[2];
var ba=this.__bP(Y);
X.push(ba+I+bb);
}return X;
},"webkit":function(o){if(o.sourceURL&&o.line){return [this.__bP(o.sourceURL)+I+o.line];
}else{return [];
}},"opera":function(s){if(s.message.indexOf("Backtrace:")<0){return [];
}var u=[];
var v=qx.lang.String.trim(s.message.split("Backtrace:")[1]);
var w=v.split(C);

for(var i=0;i<w.length;i++){var t=w[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(t&&t.length>=2){var y=t[1];
var x=this.__bP(t[2]);
u.push(x+I+y);
}}return u;
},"default":function(){return [];
}}),__bP:function(J){var M=B;
var K=J.indexOf(M);
var L=(K==-1)?J:J.substring(K+M.length).replace(/\//g,A).replace(/\.js$/,D);
return L;
}}});
})();
(function(){var i="qx.event.type.Data",h="qx.event.type.Event",g="qx.data.IListData";
qx.Interface.define(g,{events:{"change":i,"changeLength":h},members:{getItem:function(c){},setItem:function(a,b){},splice:function(d,e,f){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}}});
})();
(function(){var t="load",s="unload",r="qx.client",q="ready",p="mshtml",o="qx.event.handler.Application",n="complete",m="gecko|opera|webkit",l="left",k="_window",i="DOMContentLoaded",j="shutdown";
qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._window=a.getWindow();
this.__bQ=false;
this.__bR=false;
this.__bS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var h=qx.event.handler.Application.$$instance;

if(h){h.__bQ=true;
h.__bT();
}}},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(v,w,x){},__bT:function(){if(!this.__bU&&this.__bR&&this.__bQ){this.__bU=true;
qx.event.Registration.fireEvent(this._window,q);
}},_initObserver:function(){if(qx.$$domReady||document.readyState==n){this.__bR=true;
this.__bT();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(r,m)){qx.bom.Event.addNativeListener(this._window,i,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(r,p)){var u=function(){try{document.documentElement.doScroll(l);
this._onNativeLoadWrapped();
}catch(g){setTimeout(u,100);
}};
u();
}qx.bom.Event.addNativeListener(this._window,t,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,s,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,t,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,s,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:function(e){this.__bR=true;
this.__bT();
},_onNativeUnload:function(e){if(!this.__bV){this.__bV=true;

try{qx.event.Registration.fireEvent(this._window,j);
}finally{qx.core.ObjectRegistry.shutdown();
}}}},destruct:function(){this._stopObserver();
this._disposeFields(k);
},defer:function(y){qx.event.Registration.addHandler(y);
}});
})();
(function(){var e="qx.util.ObjectPool",d="Integer";
qx.Class.define(e,{extend:qx.core.Object,construct:function(f){arguments.callee.base.call(this);
this.__bW={};

if(f!==undefined){this.setSize(f);
}},properties:{size:{check:d,init:null,nullable:true}},members:{__bW:null,getObject:function(m){if(this.$$disposed){return;
}
if(!m){throw new Error("Class needs to be defined!");
}var n=null;
var o=this.__bW[m.classname];

if(o){n=o.pop();
}
if(n){n.$$pooled=false;
}else{n=new m;
}return n;
},poolObject:function(g){if(!this.__bW){return;
}var h=g.classname;
var j=this.__bW[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__bW[h]=j=[];
}var k=this.getSize()||Infinity;

if(j.length>k){this.warn("Cannot pool "+g+" because the pool is already full.");
g.dispose();
return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var c=this.__bW;
var a,b,i,l;

for(a in c){b=c[a];

for(i=0,l=b.length;i<l;i++){b[i].dispose();
}}delete this.__bW;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var k="_originalTarget",j="_relatedTarget",i="qx.event.type.Event",h="_target",g="_currentTarget";
qx.Class.define(i,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(e,f){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!e;
this._cancelable=!!f;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(l){if(l){var m=l;
}else{var m=qx.event.Pool.getInstance().getObject(this.constructor);
}m._type=this._type;
m._target=this._target;
m._currentTarget=this._currentTarget;
m._relatedTarget=this._relatedTarget;
m._originalTarget=this._originalTarget;
m._stopPropagation=this._stopPropagation;
m._bubbles=this._bubbles;
m._preventDefault=this._preventDefault;
m._cancelable=this._cancelable;
return m;
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(n){this._type=n;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(o){this._eventPhase=o;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(a){this._target=a;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(d){this._currentTarget=d;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(q){this._relatedTarget=q;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(c){this._originalTarget=c;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(p){this._bubbles=p;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(b){this._cancelable=b;
}},destruct:function(){this._disposeFields(h,g,j,k);
}});
})();
(function(){var j="__bX",i="Better use 'getData'",h="__bY",g="Better use 'getOldData'",f="qx.event.type.Data";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(a,b,c){arguments.callee.base.call(this,false,c);
this.__bX=a;
this.__bY=b;
return this;
},clone:function(d){var e=arguments.callee.base.call(this,d);
e.__bX=this.__bX;
e.__bY=this.__bY;
return e;
},getData:function(){return this.__bX;
},getOldData:function(){return this.__bY;
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.__bX;
},getOldValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.__bY;
}},destruct:function(){this._disposeFields(j,h);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(g){this._manager=g;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(h,event,j){return !event.getBubbles();
},dispatchEvent:function(c,event,d){event.setEventPhase(qx.event.type.Event.AT_TARGET);
var e=this._manager.getListeners(c,d,false);

if(e){for(var i=0,l=e.length;i<l;i++){var f=e[i].context||c;
e[i].handler.call(f,event);
}}}},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var v="",u="get",t="change",s=".",r="last",q="]",p="[",o="Number",n="String",m="deepBinding",L="' (",K="Boolean",J=").",I="set",H=") to the object '",G="item",F="Integer",E="reset",D="qx.data.SingleValueBinding",C="No event could be found for the property",A="PositiveNumber",B="Binding from '",y="PositiveInteger",z="Binding does not exist!",w="model",x="Date";
qx.Class.define(D,{statics:{DEBUG_ON:false,__ca:{},bind:function(bY,ca,cb,cc,cd){var ci=ca.split(s);
var cf=this.__ch(ci);
var cl=[];
var cm=[];
var cj=[];
var cg=[];
var ch=bY;
for(var i=0;i<ci.length;i++){if(cf[i]!==v){cg.push(t);
}else{cg.push(this.__cc(ch,ci[i]));
}cl[i]=ch;
if(i==ci.length-1){if(cf[i]!==v){var cp=cf[i]===r?ch.length-1:cf[i];
var ce=ch.getItem(cp);
this.__cg(ce,cb,cc,cd);
cj[i]=this.__ci(ch,cg[i],cb,cc,cd,cf[i]);
}else{if(ci[i]!=null&&ch[u+qx.lang.String.firstUp(ci[i])]!=null){var ce=ch[u+qx.lang.String.firstUp(ci[i])]();
this.__cg(ce,cb,cc,cd);
}cj[i]=this.__ci(ch,cg[i],cb,cc,cd);
}}else{var cn={index:i,propertyNames:ci,sources:cl,listenerIds:cj,arrayIndexValues:cf,targetObject:cb,targetProperty:cc,options:cd,listeners:cm};
var ck=qx.lang.Function.bind(this.__cb,this,cn);
cm.push(ck);
cj[i]=ch.addListener(cg[i],ck);
}if(ch[u+qx.lang.String.firstUp(ci[i])]==null){ch=null;
}else if(cf[i]!==v){ch=ch[u+qx.lang.String.firstUp(ci[i])](cf[i]);
}else{ch=ch[u+qx.lang.String.firstUp(ci[i])]();
}
if(!ch){break;
}}var co={type:m,listenerIds:cj,sources:cl};
this.__cj(co,bY,ca,cb,cc);
return co;
},__cb:function(bK){for(var j=bK.index+1;j<bK.propertyNames.length;j++){var bO=bK.sources[j];
bK.sources[j]=null;

if(!bO){continue;
}bO.removeListenerById(bK.listenerIds[j]);
}var bO=bK.sources[bK.index];
for(var j=bK.index+1;j<bK.propertyNames.length;j++){if(bK.arrayIndexValues[j-1]!==v){bO=bO[u+qx.lang.String.firstUp(bK.propertyNames[j-1])](bK.arrayIndexValues[j-1]);
}else{bO=bO[u+qx.lang.String.firstUp(bK.propertyNames[j-1])]();
}bK.sources[j]=bO;
if(!bO){this.__cd(bK.targetObject,bK.targetProperty);
break;
}if(j==bK.propertyNames.length-1){if(bO instanceof qx.data.Array){var bP=bK.arrayIndexValues[j]===r?bO.length-1:bK.arrayIndexValues[j];
var bM=bO.getItem(bP);
this.__cg(bM,bK.targetObject,bK.targetProperty,bK.options);
bK.listenerIds[j]=this.__ci(bO,t,bK.targetObject,bK.targetProperty,bK.options,bK.arrayIndexValues[j]);
}else{if(bK.propertyNames[j]!=null&&bO[u+qx.lang.String.firstUp(bK.propertyNames[j])]!=null){var bM=bO[u+qx.lang.String.firstUp(bK.propertyNames[j])]();
this.__cg(bM,bK.targetObject,bK.targetProperty,bK.options);
}var bN=this.__cc(bO,bK.propertyNames[j]);
bK.listenerIds[j]=this.__ci(bO,bN,bK.targetObject,bK.targetProperty,bK.options);
}}else{if(bK.listeners[j]==null){var bL=qx.lang.Function.bind(this.__cb,this,bK);
bK.listeners.push(bL);
}if(bO instanceof qx.data.Array){var bN=t;
}else{var bN=this.__cc(bO,bK.propertyNames[j]);
}bK.listenerIds[j]=bO.addListener(bN,bK.listeners[j]);
}}},__cc:function(bF,bG){var bH=this.__cl(bF,bG);
if(bH==null){if(qx.Class.supportsEvent(bF.constructor,bG)){bH=bG;
}else if(qx.Class.supportsEvent(bF.constructor,t+qx.lang.String.firstUp(bG))){bH=t+qx.lang.String.firstUp(bG);
}else{throw new qx.core.AssertionError(C,bG);
}}return bH;
},__cd:function(ba,bb){var bc=this.__cf(ba,bb);

if(bc!=null){var bd=bb.substring(bb.lastIndexOf(s)+1,bb.length);
bc[E+qx.lang.String.firstUp(bd)]();
}},__ce:function(bT,bU,bV){var bW=this.__cf(bT,bU);

if(bW!=null){var bX=bU.substring(bU.lastIndexOf(s)+1,bU.length);
bW[I+qx.lang.String.firstUp(bX)](bV);
}},__cf:function(T,U){var X=U.split(s);
var Y=T;
for(var i=0;i<X.length-1;i++){try{var W=X[i];
if(W.indexOf(q)==W.length-1){var V=W.substring(W.indexOf(p)+1,W.length-1);
W=W.substring(0,W.indexOf(p));
}Y=Y[u+qx.lang.String.firstUp(W)]();

if(V!=null){if(V==r){V=Y.length-1;
}Y=Y.getItem(V);
V=null;
}}catch(cq){return null;
}}return Y;
},__cg:function(g,h,k,l){if(g==null){this.__cd(h,k);
}g=this.__ck(g,h,k,l);
if(g!=undefined){this.__ce(h,k,g);
}},__ch:function(ct){var cu=[];
for(var i=0;i<ct.length;i++){var name=ct[i];
if(qx.lang.String.endsWith(name,q)){var cv=name.substring(name.indexOf(p)+1,name.indexOf(q));
if(name.indexOf(q)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cv!==r){if(cv==v||isNaN(parseInt(cv))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}ct[i]=name.substring(0,name.indexOf(p));
cu[i]=v;
cu[i+1]=cv;
ct.splice(i+1,0,G);
i++;
}else{cu[i]=v;
}}return cu;
},__ci:function(bh,bi,bj,bk,bl,bm){var bn;
var bp=function(M,e){if(M!==v){if(M===r){M=bh.length-1;
}var P=bh.getItem(M);
if(P==undefined){qx.data.SingleValueBinding.__cd(bj,bk);
}var N=e.getData().start;
var O=e.getData().end;

if(M<N||M>O){return;
}}else{var P=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bh+" by "+bi+" to "+bj+" ("+bk+")");
qx.log.Logger.debug("Data before conversion: "+P);
}P=qx.data.SingleValueBinding.__ck(P,bj,bk,bl);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+P);
}try{if(P!=undefined){qx.data.SingleValueBinding.__ce(bj,bk,P);
}else{qx.data.SingleValueBinding.__cd(bj,bk);
}if(bl&&bl.onSetOk){bl.onSetOk(bh,bj,P);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bl&&bl.onSetFail){bl.onSetFail(e);
}else{this.warn("Failed so set value "+P+" on "+bj+". Error message: "+e);
}}};
if(!bm){bm=v;
}bp=qx.lang.Function.bind(bp,bh,bm);
var bo=bh.addListener(bi,bp);
return bo;
},__cj:function(bq,br,bs,bt,bu){if(this.__ca[br.toHashCode()]===undefined){this.__ca[br.toHashCode()]=[];
}this.__ca[br.toHashCode()].push([bq,br,bs,bt,bu]);
},__ck:function(bx,by,bz,bA){if(bA&&bA.converter){return bA.converter(bx,by.getUserData(w));
}else{var bD=this.__cf(by,bz);
var bE=bz.substring(bz.lastIndexOf(s)+1,bz.length);
if(bD==null){return bx;
}var bC=qx.Class.getPropertyDefinition(bD.constructor,bE);
var bB=bC==null?v:bC.check;
return this.__cm(bx,bB);
}},__cl:function(be,bf){var bg=qx.Class.getPropertyDefinition(be.constructor,bf);

if(bg==null){return null;
}return bg.event;
},__cm:function(Q,R){var S=Object.prototype.toString.call(Q).slice(8,-1);
if((S==o||S==n)&&(R==F||R==y)){Q=parseInt(Q);
}if((S==K||S==o||S==x)&&R==n){Q=Q+v;
}if((S==o||S==n)&&(R==o||R==A)){Q=parseFloat(Q);
}return Q;
},removeBindingFromObject:function(bQ,bR){if(bR.type==m){for(var i=0;i<bR.sources.length;i++){if(bR.sources[i]){bR.sources[i].removeListenerById(bR.listenerIds[i]);
}}}else{bQ.removeListenerById(bR);
}var bS=this.__ca[bQ.toHashCode()];
if(bS!=undefined){for(var i=0;i<bS.length;i++){if(bS[i][0]==bR){qx.lang.Array.remove(bS,bS[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bv){{};
var bw=this.__ca[bv.toHashCode()];
for(var i=bw.length-1;i>=0;i--){this.removeBindingFromObject(bv,bw[i][0]);
}},getAllBindingsForObject:function(f){if(this.__ca[f.toHashCode()]===undefined){this.__ca[f.toHashCode()]=[];
}return this.__ca[f.toHashCode()];
},removeAllBindings:function(){for(var bJ in this.__ca){var bI=qx.core.ObjectRegistry.fromHashCode(bJ);
if(bI==null){delete this.__ca[bJ];
continue;
}this.removeAllBindingsForObject(bI);
}this.__ca={};
},getAllBindings:function(){return this.__ca;
},showBindingInLog:function(a,b){var d;
for(var i=0;i<this.__ca[a.toHashCode()].length;i++){if(this.__ca[a.toHashCode()][i][0]==b){d=this.__ca[a.toHashCode()][i];
break;
}}
if(d===undefined){var c=z;
}else{var c=B+d[1]+L+d[2]+H+d[3]+L+d[4]+J;
}qx.log.Logger.debug(c);
},showAllBindingsInLog:function(){for(var cs in this.__ca){var cr=qx.core.ObjectRegistry.fromHashCode(cs);

for(var i=0;i<this.__ca[cs].length;i++){this.showBindingInLog(cr,this.__ca[cs][i][0]);
}}}}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(q,r,name){this.fireDataEvent(c,{value:q,name:name,old:r});
if((q instanceof qx.core.Object)&&qx.Class.hasMixin(q.constructor,qx.data.marshal.MEventBubbling)){var s=qx.lang.Function.bind(this.__cn,this,name);
var t=q.addListener(c,s,this);
q.setUserData(d,t);
}if(r!=null&&r.getUserData&&r.getUserData(d)!=null){r.removeListenerById(r.getUserData(d));
}},__cn:function(name,e){var p=e.getData();
var l=p.value;
var j=p.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(p.name.indexOf){var o=p.name.indexOf(f)!=-1?p.name.indexOf(f):p.name.length;
var m=p.name.indexOf(h)!=-1?p.name.indexOf(h):p.name.length;

if(o<m){var i=p.name.substring(0,o);
var n=p.name.substring(o+1,p.name.length);

if(n[0]!=h){n=f+n;
}var k=name+h+i+g+n;
}else if(m<o){var i=p.name.substring(0,m);
var n=p.name.substring(m,p.name.length);
var k=name+h+i+g+n;
}else{var k=name+h+p.name+g;
}}else{var k=name+h+p.name+g;
}}else{var k=name+f+p.name;
}this.fireDataEvent(c,{value:l,name:k,old:j});
}}});
})();
(function(){var H="change",G="add",F="order",E="remove",D="qx.data.Array",C="qx.event.type.Event",B="number",A="changeLength",z="qx.event.type.Data";
qx.Class.define(D,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(a){arguments.callee.base.call(this);
if(a==undefined){this.__co=[];
}else if(arguments.length>1){this.__co=[];

for(var i=0;i<arguments.length;i++){this.__co.push(arguments[i]);
}}else if(typeof a==B){this.__co=new Array(a);
}else if(a instanceof Array){this.__co=[];

for(var i=0;i<a.length;i++){this.push(a[i]);
}}else{this.__co=[];
throw new Error("Type of the parameter not supported!");
}this.__cp();
},events:{"change":z,"changeLength":C},members:{concat:function(N){var O=this.__co.concat(N);
return new qx.data.Array(O);
},join:function(L){return this.__co.join(L);
},pop:function(){var J=this.__co.pop();
this.__cp();
this._applyEventPropagation(null,J);
this.fireDataEvent(H,{start:this.length-1,end:this.length-1,type:E},null);
return J;
},push:function(K){for(var i=0;i<arguments.length;i++){this.__co.push(arguments[i]);
this.__cp();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(H,{start:this.length-1,end:this.length-1,type:G},null);
}return this.length;
},reverse:function(){this.__co.reverse();
this.fireDataEvent(H,{start:0,end:this.length-1,type:F},null);
},shift:function(){var Y=this.__co.shift();
this.__cp();
this._applyEventPropagation(null,Y);
this.fireDataEvent(H,{start:0,end:this.length-1,type:E,item:Y},null);
return Y;
},slice:function(V,W){return new qx.data.Array(this.__co.slice(V,W));
},splice:function(k,l,m){var r=this.__co.length;
var o=this.__co.splice.apply(this.__co,arguments);
if(this.__co.length!=r){this.__cp();
}var p=l>0;
var n=arguments.length>2;

if(p||n){if(this.__co.length>r){var q=G;
}else if(this.__co.length<r){var q=E;
}else{var q=F;
}this.fireDataEvent(H,{start:k,end:this.length-1,type:q,item:null},null);
}for(var i=2;i<arguments.length;i++){this._applyEventPropagation(arguments[i],null,k+i);
}for(var i=0;i<o.length;i++){this._applyEventPropagation(null,o[i]);
}return (new qx.data.Array(o));
},sort:function(u){this.__co.sort.apply(this.__co,arguments);
this.fireDataEvent(H,{start:0,end:this.length-1,type:F,item:null},null);
},unshift:function(y){for(var i=arguments.length-1;i>=0;i--){this.__co.unshift(arguments[i]);
this.__cp();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(H,{start:0,end:this.length-1,type:G,item:arguments[i]},null);
}return this.length;
},toArray:function(){return this.__co;
},getItem:function(X){return this.__co[X];
},setItem:function(v,w){var x=this.__co[v];
this.__co[v]=w;
this._applyEventPropagation(w,x,v);
if(this.length!=this.__co.length){this.__cp();
}this.fireDataEvent(H,{start:v,end:v,type:G,item:w},null);
},getLength:function(){return this.length;
},indexOf:function(R){return this.__co.indexOf(R);
},toString:function(){return this.__co.toString();
},contains:function(h){return this.__co.indexOf(h)!==-1;
},copy:function(){return this.concat();
},insertAt:function(c,d){this.splice(c,0,d);
},insertBefore:function(e,f){var g=this.indexOf(e);

if(g==-1){this.push(f);
}else{this.splice(g,0,f);
}},insertAfter:function(S,T){var U=this.indexOf(S);

if(U==-1||U==(this.length-1)){this.push(T);
}else{this.splice(U+1,0,T);
}},removeAt:function(M){return this.splice(M,1)[0];
},removeAll:function(){for(var i=0;i<this.__co.length;i++){this._applyEventPropagation(null,this.__co[i]);
}this.__co.length=0;
this.__cp();
},append:function(I){{};
for(var i=0;i<I.length;i++){this._applyEventPropagation(I[i],null,this.__co.length+i);
}Array.prototype.push.apply(this.__co,I);
this.__cp();
},remove:function(s){var t=this.indexOf(s);

if(t!=-1){this.splice(t,1);
return s;
}},equals:function(j){if(this.length!==j.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==j.getItem(i)){return false;
}}return true;
},sum:function(){var Q=0;

for(var i=0;i<this.length;i++){Q+=this.getItem(i);
}return Q;
},max:function(){var b=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>b){b=this.getItem(i);
}}return b===undefined?null:b;
},min:function(){var P=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<P){P=this.getItem(i);
}}return P===undefined?null:P;
},__cp:function(){this.length=this.__co.length;
this.fireEvent(A,qx.event.type.Event);
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
(function(){var i="qx.event.handler.Object";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(d,e){return qx.Class.supportsEvent(d.constructor,e);
},registerEvent:function(a,b,c){},unregisterEvent:function(f,g,h){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var p="qx.util.DisposeUtil";
qx.Class.define(p,{statics:{disposeFields:function(m,n){var name;

for(var i=0,l=n.length;i<l;i++){var name=n[i];

if(m[name]==null||!m.hasOwnProperty(name)){continue;
}m[name]=null;
}},disposeObjects:function(e,f){var name;

for(var i=0,l=f.length;i<l;i++){name=f[i];

if(e[name]==null||!e.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(e[name].dispose){e[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}e[name]=null;
}},disposeArray:function(a,b){var d=a[b];

if(!d){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{var c;

for(var i=d.length-1;i>=0;i--){c=d[i];

if(c){c.dispose();
}}}catch(o){throw new Error("The array field: "+b+" of object: "+a+" has non disposable entries: "+o);
}d.length=0;
a[b]=null;
},disposeMap:function(g,h){var j=g[h];

if(!j){return;
}if(qx.core.ObjectRegistry.inShutDown){g[h]=null;
return;
}try{for(var k in j){if(j.hasOwnProperty(k)){j[k].dispose();
}}}catch(q){throw new Error("The map field: "+h+" of object: "+g+" has non disposable entries: "+q);
}g[h]=null;
}}});
})();
(function(){var c="_dynamic",b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(e){return this._dynamic[e];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(g){if(g&&this._dynamic[g]){return this._dynamic[g];
}return g;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._disposeFields(c);
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(j){var k={};

if(j){var l=j.colors;
var m=qx.util.ColorUtil;
var n;

for(var o in l){n=l[o];

if(typeof n===b){if(!m.isCssString(n)){throw new Error("Could not parse color: "+n);
}}else if(n instanceof Array){n=m.rgbToRgbString(n);
}else{throw new Error("Could not parse color: "+n);
}k[o]=n;
}}this._setDynamic(k);
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.colors[p]){return s[p]=r.colors[p];
}return p;
},isDynamic:function(g){var i=this._dynamic;

if(g&&(i[g]!==undefined)){return true;
}var h=this.getTheme();

if(h!==null&&g&&(h.colors[g]!==undefined)){i[g]=h.colors[g];
return true;
}return false;
}}});
})();
(function(){var bb=",",ba="rgb(",Y=")",X="qx.theme.manager.Color",W="qx.util.ColorUtil";
qx.Class.define(W,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42],grey:[128,128,128]},isNamedColor:function(bc){return this.NAMED[bc]!==undefined;
},isSystemColor:function(a){return this.SYSTEM[a]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(X);
},isThemedColor:function(N){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(N);
},stringToRgb:function(v){if(this.supportsThemes()&&this.isThemedColor(v)){var v=qx.theme.manager.Color.getInstance().resolveDynamic(v);
}
if(this.isNamedColor(v)){return this.NAMED[v];
}else if(this.isSystemColor(v)){throw new Error("Could not convert system colors to RGB: "+v);
}else if(this.isRgbString(v)){return this.__ct();
}else if(this.isHex3String(v)){return this.__cu();
}else if(this.isHex6String(v)){return this.__cv();
}throw new Error("Could not parse color: "+v);
},cssStringToRgb:function(K){if(this.isNamedColor(K)){return this.NAMED[K];
}else if(this.isSystemColor(K)){throw new Error("Could not convert system colors to RGB: "+K);
}else if(this.isRgbString(K)){return this.__ct();
}else if(this.isHex3String(K)){return this.__cu();
}else if(this.isHex6String(K)){return this.__cv();
}throw new Error("Could not parse color: "+K);
},stringToRgbString:function(bd){return this.rgbToRgbString(this.stringToRgb(bd));
},rgbToRgbString:function(l){return ba+l[0]+bb+l[1]+bb+l[2]+Y;
},rgbToHexString:function(m){return (qx.lang.String.pad(m[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(m[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(m[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(M){return this.isThemedColor(M)||this.isNamedColor(M)||this.isHex3String(M)||this.isHex6String(M)||this.isRgbString(M);
},isCssString:function(P){return this.isSystemColor(P)||this.isNamedColor(P)||this.isHex3String(P)||this.isHex6String(P)||this.isRgbString(P);
},isHex3String:function(u){return this.REGEXP.hex3.test(u);
},isHex6String:function(I){return this.REGEXP.hex6.test(I);
},isRgbString:function(J){return this.REGEXP.rgb.test(J);
},__ct:function(){var e=parseInt(RegExp.$1,10);
var d=parseInt(RegExp.$2,10);
var c=parseInt(RegExp.$3,10);
return [e,d,c];
},__cu:function(){var s=parseInt(RegExp.$1,16)*17;
var o=parseInt(RegExp.$2,16)*17;
var n=parseInt(RegExp.$3,16)*17;
return [s,o,n];
},__cv:function(){var k=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var j=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var h=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [k,j,h];
},hex3StringToRgb:function(be){if(this.isHex3String(be)){return this.__cu(be);
}throw new Error("Invalid hex3 value: "+be);
},hex6StringToRgb:function(L){if(this.isHex6String(L)){return this.__cv(L);
}throw new Error("Invalid hex6 value: "+L);
},hexStringToRgb:function(O){if(this.isHex3String(O)){return this.__cu(O);
}
if(this.isHex6String(O)){return this.__cv(O);
}throw new Error("Invalid hex value: "+O);
},rgbToHsb:function(w){var y,z,B;
var H=w[0];
var E=w[1];
var x=w[2];
var G=(H>E)?H:E;

if(x>G){G=x;
}var A=(H<E)?H:E;

if(x<A){A=x;
}B=G/255.0;

if(G!=0){z=(G-A)/G;
}else{z=0;
}
if(z==0){y=0;
}else{var D=(G-H)/(G-A);
var F=(G-E)/(G-A);
var C=(G-x)/(G-A);

if(H==G){y=C-F;
}else if(E==G){y=2.0+D-C;
}else{y=4.0+F-D;
}y=y/6.0;

if(y<0){y=y+1.0;
}}return [Math.round(y*360),Math.round(z*100),Math.round(B*100)];
},hsbToRgb:function(Q){var i,f,p,q,t;
var R=Q[0]/360;
var S=Q[1]/100;
var T=Q[2]/100;

if(R>=1.0){R%=1.0;
}
if(S>1.0){S=1.0;
}
if(T>1.0){T=1.0;
}var U=Math.floor(255*T);
var V={};

if(S==0.0){V.red=V.green=V.blue=U;
}else{R*=6.0;
i=Math.floor(R);
f=R-i;
p=Math.floor(U*(1.0-S));
q=Math.floor(U*(1.0-(S*f)));
t=Math.floor(U*(1.0-(S*(1.0-f))));

switch(i){case 0:V.red=U;
V.green=t;
V.blue=p;
break;
case 1:V.red=q;
V.green=U;
V.blue=p;
break;
case 2:V.red=p;
V.green=U;
V.blue=t;
break;
case 3:V.red=p;
V.green=q;
V.blue=U;
break;
case 4:V.red=t;
V.green=p;
V.blue=U;
break;
case 5:V.red=U;
V.green=p;
V.blue=q;
break;
}}return V;
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
}var n=qx.theme.manager.Decoration.getInstance();
var p=n.resolve(a).getInsets();
var o=n.resolve(b).getInsets();

if(p.top!=o.top||p.right!=o.right||p.bottom!=o.bottom||p.left!=o.left){return true;
}return false;
},generateBackgroundMarkup:function(q,r,s,top,t){if(q){var u=qx.util.AliasManager.getInstance().resolve(q);
if(r==g){var v=qx.util.ResourceManager.toUri(u);
return d+v+h+t+j;
}else{var back=qx.bom.element.Background.compile(u,r,s,top);
return m+back+t+l;
}}else{if(t){if(qx.core.Variant.isSet(f,k)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){t+=c;
}}return m+t+l;
}else{return i;
}}}}});
})();
(function(){var l="decoration",k="object",j="_applyTheme",i="qx.theme.manager.Decoration",h="__cw",g="Theme",f="string",e="singleton";
qx.Class.define(i,{type:e,extend:qx.core.Object,properties:{theme:{check:g,nullable:true,apply:j}},members:{__cw:null,resolve:function(m){if(!m){return null;
}
if(typeof m===k){return m;
}var p=this.getTheme();

if(!p){return null;
}var p=this.getTheme();

if(!p){return null;
}var q=this.__cw;

if(!q){q=this.__cw={};
}var n=q[m];

if(n){return n;
}var o=p.decorations[m];

if(!o){return null;
}var r=o.decorator;

if(r==null){throw new Error("Missing definition of which decorator to use in entry: "+m+"!");
}return q[m]=(new r).set(o.style);
},isValidPropertyValue:function(a){if(typeof a===f){return this.isDynamic(a);
}else if(typeof a===k){var b=a.constructor;
return qx.Class.hasInterface(b,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(c){if(!c){return false;
}var d=this.getTheme();

if(!d){return false;
}return !!d.decorations[c];
},_applyTheme:function(s){var t=qx.util.AliasManager.getInstance();
s?t.add(l,s.resource):t.remove(l);
}},destruct:function(){this._disposeMap(h);
}});
})();
(function(){var o="/",n="0",m="qx/static",l="http://",k="__cx",j="https://",i="file://",h="qx.util.AliasManager",g="singleton",f=".",e="static";
qx.Class.define(h,{type:g,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cx={};
this.add(e,m);
},members:{__cx:null,_preprocess:function(a){var d=this._getDynamic();

if(d[a]===false){return a;
}else if(d[a]===undefined){if(a.charAt(0)===o||a.charAt(0)===f||a.indexOf(l)===0||a.indexOf(j)===n||a.indexOf(i)===0){d[a]=false;
return a;
}var c=a.substring(0,a.indexOf(o));
var b=this.__cx[c];

if(b!==undefined){d[a]=b+a.substring(c.length);
}}return a;
},add:function(s,t){this.__cx[s]=t;
var v=this._getDynamic();
var u={};
for(var w in v){if(w.substring(0,w.indexOf(o))===s){v[w]=t+w.substring(s.length);
u[w]=true;
}}},remove:function(p){delete this.__cx[p];
},resolve:function(q){var r=this._getDynamic();

if(q!==null){q=this._preprocess(q);
}return r[q]||q;
}},destruct:function(){this._disposeFields(k);
}});
})();
(function(){var d="/",c="qx.util.ResourceManager",b="string";
qx.Bootstrap.define(c,{statics:{__cy:qx.$$resources||{},has:function(a){return !!this.__cy[a];
},getData:function(k){return this.__cy[k]||null;
},getImageWidth:function(l){var m=this.__cy[l];
return m?m[0]:null;
},getImageHeight:function(g){var h=this.__cy[g];
return h?h[1]:null;
},getImageFormat:function(i){var j=this.__cy[i];
return j?j[2]:null;
},isClippedImage:function(e){var f=this.__cy[e];
return f&&f.length>4;
},toUri:function(n){if(n==null){return n;
}var o=this.__cy[n];

if(!o){return n;
}
if(typeof o===b){var p=o;
}else{var p=o[3];
if(!p){return n;
}}return window.qxlibraries[p].resourceUri+d+n;
}}});
})();
(function(){var u="number",t="qx.client",s="/",r="mshtml",q="0",p="",o="px",n=";",m="background-image:url(",l=");",g=")",k="background-repeat:",j="https:",f=" ",e="qx.bom.element.Background",i="url(",h="background-position:";
qx.Class.define(e,{statics:{__cz:[m,null,l,h,null,n,k,null,n],__cA:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cB:function(a,top){var b=qx.bom.client.Engine;

if(b.GECKO&&b.VERSION<1.9&&a==top&&typeof a==u){top+=0.01;
}
if(a){var c=(typeof a==u)?a+o:a;
}else{c=q;
}
if(top){var d=(typeof top==u)?top+o:top;
}else{d=q;
}return c+f+d;
},compile:function(x,y,z,top){var A=this.__cB(z,top);
var B=qx.util.ResourceManager.toUri(x);

if(qx.core.Variant.isSet(t,r)){B=this.__cC(B);
}var C=this.__cz;
C[1]=B;
C[4]=A;
C[7]=y;
return C.join(p);
},getStyles:function(J,K,L,top){if(!J){return this.__cA;
}var M=this.__cB(L,top);
var N=qx.util.ResourceManager.toUri(J);

if(qx.core.Variant.isSet(t,r)){N=this.__cC(N);
}var O={backgroundPosition:M,backgroundImage:i+N+g};

if(K!=null){O.backgroundRepeat=K;
}return O;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
}},__cC:qx.core.Variant.select(t,{"mshtml":function(v){var w=p;
if(window.location.protocol===j){if(v.match(/^\/\//)!=null){w=window.location.protocol;
}else if(v.match(/^\.\//)!=null){v=v.substring(v.indexOf(s));
w=document.URL.substring(0,document.URL.lastIndexOf(s));
}else{w=window.location.href.substring(0,window.location.href.lastIndexOf(s)+1);
}}return w+v;
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
(function(){var j="px",i="div",h="img",g="qx.client",f="",e="scale-x",d="mshtml",c="no-repeat",b="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",a="scale-y",A="repeat",z=".png",y="scale",x="webkit",w='<div style="',v="repeat-y",u='<img src="',t="qx.bom.element.Decoration",s="png",r="', sizingMethod='scale')",p="', sizingMethod='crop')",q='"/>',n='" style="',o="none",l="repeat-x",m='"></div>',k="absolute";
qx.Class.define(t,{statics:{DEBUG:false,__cE:qx.core.Variant.isSet(g,d)&&qx.bom.client.Engine.VERSION<8,__cF:qx.core.Variant.select(g,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__cG:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(ba,bb,bc,bd){var bf=this.getTagName(bc,bb);

if(bf!=ba.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bh=this.getAttributes(bb,bc,bd);

if(bf===h){ba.src=bh.src;
}if(ba.style.backgroundPosition!=f&&bh.style.backgroundPosition===undefined){bh.style.backgroundPosition=null;
}if(ba.style.clip!=f&&bh.style.clip===undefined){bh.style.clip=null;
}var be=qx.bom.element.Style;
be.setStyles(ba,bh.style);
},create:function(R,S,T){var U=this.getTagName(S,R);
var W=this.getAttributes(R,S,T);
var V=qx.bom.element.Style.compile(W.style);

if(U===h){return u+W.src+n+V+q;
}else{return w+V+m;
}},getTagName:function(X,Y){if(qx.core.Variant.isSet(g,d)){if(Y&&this.__cE&&this.__cF[X]&&qx.lang.String.endsWith(Y,z)){return i;
}}return this.__cG[X];
},getAttributes:function(B,C,D){var H=qx.util.ResourceManager;
var M=qx.io2.ImageLoader;
var N=qx.bom.element.Background;

if(!D){D={};
}
if(!D.position){D.position=k;
}
if(qx.core.Variant.isSet(g,d)){D.fontSize=0;
D.lineHeight=0;
}else if(qx.core.Variant.isSet(g,x)){D.WebkitUserDrag=o;
}var L=H.getImageWidth(B)||M.getWidth(B);
var K=H.getImageHeight(B)||M.getHeight(B);
var I=H.getImageFormat(B)||M.getFormat(B);
{};
if(this.__cE&&this.__cF[C]&&I===s){if(D.width==null&&L!=null){D.width=L+j;
}
if(D.height==null&&K!=null){D.height=K+j;
}
if(C==c){D.filter=b+H.toUri(B)+p;
}else{D.filter=b+H.toUri(B)+r;
}D.backgroundImage=D.backgroundRepeat=f;
return {style:D};
}else{if(C===y){var J=H.toUri(B);

if(D.width==null&&L!=null){D.width=L+j;
}
if(D.height==null&&K!=null){D.height=K+j;
}return {src:J,style:D};
}var G=H.isClippedImage(B);

if(C===e||C===a){if(G){if(C===e){var P=H.getData(B);
var Q=H.getImageHeight(P[4]);
var J=H.toUri(P[4]);
D.clip={top:-P[6],height:K};
D.height=Q+j;
if(D.top!=null){D.top=(parseInt(D.top,10)+P[6])+j;
}else if(D.bottom!=null){D.bottom=(parseInt(D.bottom,10)+K-Q-P[6])+j;
}return {src:J,style:D};
}else{var P=H.getData(B);
var O=H.getImageWidth(P[4]);
var J=H.toUri(P[4]);
D.clip={left:-P[5],width:L};
D.width=O+j;
if(D.left!=null){D.left=(parseInt(D.left,10)+P[5])+j;
}else if(D.right!=null){D.right=(parseInt(D.right,10)+L-O-P[5])+j;
}return {src:J,style:D};
}}else{{};

if(C==e){D.height=K==null?null:K+j;
}else if(C==a){D.width=L==null?null:L+j;
}var J=H.toUri(B);
return {src:J,style:D};
}}else{if(G&&C!==A){var P=H.getData(B);
var F=N.getStyles(P[4],C,P[5],P[6]);

for(var E in F){D[E]=F[E];
}
if(L!=null&&D.width==null&&(C==v||C===c)){D.width=L+j;
}
if(K!=null&&D.height==null&&(C==l||C===c)){D.height=K+j;
}return {style:D};
}else{{};
var F=N.getStyles(B,C);

for(var E in F){D[E]=F[E];
}
if(L!=null&&D.width==null){D.width=L+j;
}
if(K!=null&&D.height==null){D.height=K+j;
}if(D.filter){D.filter=f;
}return {style:D};
}}}}}});
})();
(function(){var K="",J="qx.client",I="boxSizing",H="cursor",G="opacity",F="clip",E="overflowY",D="overflowX",C="appearance",B="style",bj="px",bi="-webkit-appearance",bh="user-select",bg="userSelect",bf="styleFloat",be="-webkit-user-select",bd="-moz-appearance",bc="pixelHeight",bb="MozAppearance",ba=":",R="pixelTop",S="pixelLeft",P="text-overflow",Q="-moz-user-select",N="MozUserSelect",O="qx.bom.element.Style",L="WebkitUserSelect",M="-o-text-overflow",T="pixelRight",U="pixelWidth",W="pixelBottom",V=";",Y="cssFloat",X="WebkitAppearance";
qx.Class.define(O,{statics:{__cH:{styleNames:{"float":qx.core.Variant.select(J,{"mshtml":bf,"default":Y}),"appearance":qx.core.Variant.select(J,{"gecko":bb,"webkit":X,"default":C}),"userSelect":qx.core.Variant.select(J,{"gecko":N,"webkit":L,"default":bg})},cssNames:{"appearance":qx.core.Variant.select(J,{"gecko":bd,"webkit":bi,"default":C}),"userSelect":qx.core.Variant.select(J,{"gecko":Q,"webkit":be,"default":bh}),"textOverflow":qx.core.Variant.select(J,{"opera":M,"default":P})},mshtmlPixel:{width:U,height:bc,left:S,right:T,top:R,bottom:W},special:{clip:1,cursor:1,opacity:1,boxSizing:1,overflowX:1,overflowY:1}},__cI:{},compile:function(s){var w=[];
var A=this.__cH;
var z=A.special;
var x=A.cssNames;
var v=this.__cI;
var y=qx.lang.String;
var name,u,t;

for(name in s){t=s[name];

if(t==null){continue;
}name=x[name]||name;
if(z[name]){switch(name){case F:w.push(qx.bom.element.Clip.compile(t));
break;
case H:w.push(qx.bom.element.Cursor.compile(t));
break;
case G:w.push(qx.bom.element.Opacity.compile(t));
break;
case I:w.push(qx.bom.element.BoxSizing.compile(t));
break;
case D:w.push(qx.bom.element.Overflow.compileX(t));
break;
case E:w.push(qx.bom.element.Overflow.compileY(t));
break;
}}else{u=v[name];

if(!u){u=v[name]=y.hyphenate(name);
}w.push(u,ba,t,V);
}}return w.join(K);
},setCss:qx.core.Variant.select(J,{"mshtml":function(q,r){q.style.cssText=r;
},"default":function(bo,bp){bo.setAttribute(B,bp);
}}),getCss:qx.core.Variant.select(J,{"mshtml":function(g){return g.style.cssText.toLowerCase();
},"default":function(p){return p.getAttribute(B);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bk,name,bl,bm){{};
var bn=this.__cH;
name=bn.styleNames[name]||name;
if(bm!==false&&bn.special[name]){switch(name){case F:return qx.bom.element.Clip.set(bk,bl);
case H:return qx.bom.element.Cursor.set(bk,bl);
case G:return qx.bom.element.Opacity.set(bk,bl);
case I:return qx.bom.element.BoxSizing.set(bk,bl);
case D:return qx.bom.element.Overflow.setX(bk,bl);
case E:return qx.bom.element.Overflow.setY(bk,bl);
}}bk.style[name]=bl!==null?bl:K;
},setStyles:function(a,b,c){{};

for(var name in b){this.set(a,name,b[name],c);
}},reset:function(d,name,e){var f=this.__cH;
name=f.styleNames[name]||name;
if(e!==false&&f.special[name]){switch(name){case F:return qx.bom.element.Clip.reset(d);
case H:return qx.bom.element.Cursor.reset(d);
case G:return qx.bom.element.Opacity.reset(d);
case I:return qx.bom.element.BoxSizing.reset(d);
case D:return qx.bom.element.Overflow.resetX(d);
case E:return qx.bom.element.Overflow.resetY(d);
}}d.style[name]=K;
},get:qx.core.Variant.select(J,{"mshtml":function(h,name,i,j){var o=this.__cH;
name=o.styleNames[name]||name;
if(j!==false&&o.special[name]){switch(name){case F:return qx.bom.element.Clip.get(h,i);
case H:return qx.bom.element.Cursor.get(h,i);
case G:return qx.bom.element.Opacity.get(h,i);
case I:return qx.bom.element.BoxSizing.get(h,i);
case D:return qx.bom.element.Overflow.getX(h,i);
case E:return qx.bom.element.Overflow.getY(h,i);
}}if(!h.currentStyle){return h.style[name]||K;
}switch(i){case this.LOCAL_MODE:return h.style[name]||K;
case this.CASCADED_MODE:return h.currentStyle[name]||K;
default:var n=h.currentStyle[name]||K;
if(/^-?[\.\d]+(px)?$/i.test(n)){return n;
}var m=o.mshtmlPixel[name];

if(m){var k=h.style[name];
h.style[name]=n||0;
var l=h.style[m]+bj;
h.style[name]=k;
return l;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(n)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return n;
}},"default":function(bq,name,br,bs){var bv=this.__cH;
name=bv.styleNames[name]||name;
if(bs!==false&&bv.special[name]){switch(name){case F:return qx.bom.element.Clip.get(bq,br);
case H:return qx.bom.element.Cursor.get(bq,br);
case G:return qx.bom.element.Opacity.get(bq,br);
case I:return qx.bom.element.BoxSizing.get(bq,br);
case D:return qx.bom.element.Overflow.getX(bq,br);
case E:return qx.bom.element.Overflow.getY(bq,br);
}}switch(br){case this.LOCAL_MODE:return bq.style[name]||K;
case this.CASCADED_MODE:if(bq.currentStyle){return bq.currentStyle[name]||K;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bt=qx.dom.Node.getDocument(bq);
var bu=bt.defaultView.getComputedStyle(bq,null);
return bu?bu[name]:K;
}}})}});
})();
(function(){var K="auto",J="px",I=",",H="clip:auto;",G="rect(",F=");",E="",D=")",C="qx.bom.element.Clip",B="string",y="rect(auto)",A="clip:rect(",z="clip",x="rect(auto,auto,auto,auto)";
qx.Class.define(C,{statics:{compile:function(h){if(!h){return H;
}var m=h.left;
var top=h.top;
var l=h.width;
var k=h.height;
var i,j;

if(m==null){i=(l==null?K:l+J);
m=K;
}else{i=(l==null?K:m+l+J);
m=m+J;
}
if(top==null){j=(k==null?K:k+J);
top=K;
}else{j=(k==null?K:top+k+J);
top=top+J;
}return A+top+I+i+I+j+I+m+F;
},get:function(n,o){var q=qx.bom.element.Style.get(n,z,o,false);
var v,top,t,s;
var p,r;

if(typeof q===B&&q!==K&&q!==E){q=qx.lang.String.trim(q);
if(/\((.*)\)/.test(q)){var u=RegExp.$1.split(I);
top=qx.lang.String.trim(u[0]);
p=qx.lang.String.trim(u[1]);
r=qx.lang.String.trim(u[2]);
v=qx.lang.String.trim(u[3]);
if(v===K){v=null;
}
if(top===K){top=null;
}
if(p===K){p=null;
}
if(r===K){r=null;
}if(top!=null){top=parseInt(top,10);
}
if(p!=null){p=parseInt(p,10);
}
if(r!=null){r=parseInt(r,10);
}
if(v!=null){v=parseInt(v,10);
}if(p!=null&&v!=null){t=p-v;
}else if(p!=null){t=p;
}
if(r!=null&&top!=null){s=r-top;
}else if(r!=null){s=r;
}}else{throw new Error("Could not parse clip string: "+q);
}}return {left:v||null,top:top||null,width:t||null,height:s||null};
},set:function(a,b){if(!b){a.style.clip=x;
return;
}var g=b.left;
var top=b.top;
var f=b.width;
var e=b.height;
var c,d;

if(g==null){c=(f==null?K:f+J);
g=K;
}else{c=(f==null?K:g+f+J);
g=g+J;
}
if(top==null){d=(e==null?K:e+J);
top=K;
}else{d=(e==null?K:top+e+J);
top=top+J;
}a.style.clip=G+top+I+c+I+d+I+g+D;
},reset:function(w){w.style.clip=qx.bom.client.Engine.MSHTML?y:K;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__cJ:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(q){return f+(this.__cJ[q]||q)+d;
},get:function(l,m){return qx.bom.element.Style.get(l,b,m,false);
},set:function(n,o){n.style.cursor=this.__cJ[o]||o;
},reset:function(p){p.style.cursor=g;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(C){if(C>=1){return m;
}
if(C<0.00001){C=0;
}return d+(C*100)+f;
},"gecko":function(n){if(n==1){n=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+n+k;
}else{return i+n+k;
}},"default":function(x){if(x==1){return m;
}return i+x+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(t,u){var v=qx.bom.element.Style.get(t,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(u>=1){t.style.filter=v.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(u<0.00001){u=0;
}if(!t.currentStyle.hasLayout){t.style.zoom=1;
}t.style.filter=v.replace(/alpha\([^\)]*\)/gi,m)+c+u*100+e;
},"gecko":function(o,p){if(p==1){p=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){o.style.MozOpacity=p;
}else{o.style.opacity=p;
}},"default":function(D,E){if(E==1){E=m;
}D.style.opacity=E;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(q){var r=qx.bom.element.Style.get(q,j,qx.bom.element.Style.COMPUTED_MODE,false);
q.style.filter=r.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(w){if(qx.bom.client.Engine.VERSION<1.7){w.style.MozOpacity=m;
}else{w.style.opacity=m;
}},"default":function(s){s.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(y,z){var A=qx.bom.element.Style.get(y,j,z,false);

if(A){var B=A.match(/alpha\(opacity=(.*)\)/);

if(B&&B[1]){return parseFloat(B[1])/100;
}}return 1.0;
},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,qx.bom.client.Engine.VERSION<1.7?g:h,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(I,J){var K=qx.bom.element.Style.get(I,h,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__cK:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__cL:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__cM:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cN:function(r){var s=this.__cM;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(A){{};
},"default":function(x){var z=this.__cL;
var y=p;

if(z){for(var i=0,l=z.length;i<l;i++){y+=z[i]+m+x+c;
}}return y;
}}),get:qx.core.Variant.select(q,{"mshtml":function(D){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(D))){if(!this.__cN(D)){return d;
}}return k;
},"default":function(t){var v=this.__cK;
var u;

if(v){for(var i=0,l=v.length;i<l;i++){u=qx.bom.element.Style.get(t,v[i],null,false);

if(u!=null&&u!==p){return u;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(B,C){{};
},"default":function(E,F){var G=this.__cK;

if(G){for(var i=0,l=G.length;i<l;i++){E.style[G[i]]=F;
}}}}),reset:function(w){this.set(w,p);
}}});
})();
(function(){var j="CSS1Compat",i="qx.bom.Document";
qx.Class.define(i,{statics:{isQuirksMode:function(d){return (d||window).document.compatMode!==j;
},isStandardMode:function(e){return (e||window).document.compatMode===j;
},getWidth:function(f){var g=(f||window).document;
var h=qx.bom.Viewport.getWidth(f);
var scroll=g.compatMode===j?g.documentElement.scrollWidth:g.body.scrollWidth;
return Math.max(scroll,h);
},getHeight:function(a){var b=(a||window).document;
var c=qx.bom.Viewport.getHeight(a);
var scroll=b.compatMode===j?b.documentElement.scrollHeight:b.body.scrollHeight;
return Math.max(scroll,c);
}}});
})();
(function(){var i="qx.client",h="CSS1Compat",g="qx.bom.Viewport";
qx.Class.define(g,{statics:{getWidth:qx.core.Variant.select(i,{"opera":function(q){return (q||window).document.body.clientWidth;
},"webkit":function(a){return (a||window).innerWidth;
},"default":function(c){var d=(c||window).document;
return d.compatMode===h?d.documentElement.clientWidth:d.body.clientWidth;
}}),getHeight:qx.core.Variant.select(i,{"opera":function(b){return (b||window).document.body.clientHeight;
},"webkit":function(p){return (p||window).innerHeight;
},"default":function(j){var k=(j||window).document;
return k.compatMode===h?k.documentElement.clientHeight:k.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(i,{"mshtml":function(n){var o=(n||window).document;
return o.documentElement.scrollLeft||o.body.scrollLeft;
},"default":function(l){return (l||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(i,{"mshtml":function(e){var f=(e||window).document;
return f.documentElement.scrollTop||f.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}})}});
})();
(function(){var bC="",bB="qx.client",bA="hidden",bz="-moz-scrollbars-none",by="overflow",bx=";",bw="overflowY",bv=":",bu="overflowX",bt="overflow:",bO="none",bN="scroll",bM="borderLeftStyle",bL="borderRightStyle",bK="div",bJ="borderRightWidth",bI="overflow-y",bH="borderLeftWidth",bG="-moz-scrollbars-vertical",bF="100px",bD="qx.bom.element.Overflow",bE="overflow-x";
qx.Class.define(bD,{statics:{__cO:null,getScrollbarWidth:function(){if(this.__cO!==null){return this.__cO;
}var k=qx.bom.element.Style;
var m=function(ce,cf){return parseInt(k.get(ce,cf))||0;
};
var n=function(bo){return (k.get(bo,bL)==bO?0:m(bo,bJ));
};
var l=function(bs){return (k.get(bs,bM)==bO?0:m(bs,bH));
};
var p=qx.core.Variant.select(bB,{"mshtml":function(Y){if(k.get(Y,bw)==bA||Y.clientWidth==0){return n(Y);
}return Math.max(0,Y.offsetWidth-Y.clientLeft-Y.clientWidth);
},"default":function(B){if(B.clientWidth==0){var C=k.get(B,by);
var D=(C==bN||C==bG?16:0);
return Math.max(0,n(B)+D);
}return Math.max(0,(B.offsetWidth-B.clientWidth-l(B)));
}});
var o=function(br){return p(br)-n(br);
};
var t=document.createElement(bK);
var s=t.style;
s.height=s.width=bF;
s.overflow=bN;
document.body.appendChild(t);
var c=o(t);
this.__cO=c?c:16;
document.body.removeChild(t);
return this.__cO;
},_compile:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(e,f){if(f==bA){f=bz;
}return bt+f+bx;
}:
function(bX,bY){return bX+bv+bY+bx;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(u,v){return bt+v+bx;
}:
function(bp,bq){return bp+bv+bq+bx;
},"default":function(b,d){return b+bv+d+bx;
}}),compileX:function(ba){return this._compile(bE,ba);
},compileY:function(bR){return this._compile(bI,bR);
},getX:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bh,bi){var bj=qx.bom.element.Style.get(bh,by,bi,false);

if(bj===bz){bj=bA;
}return bj;
}:
function(ca,cb){return qx.bom.element.Style.get(ca,bu,cb,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(i,j){return qx.bom.element.Style.get(i,by,j,false);
}:
function(bk,bl){return qx.bom.element.Style.get(bk,bu,bl,false);
},"default":function(U,V){return qx.bom.element.Style.get(U,bu,V,false);
}}),setX:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bT,bU){if(bU==bA){bU=bz;
}bT.style.overflow=bU;
}:
function(z,A){z.style.overflowX=A;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(N,O){N.style.overflow=O;
}:
function(Q,R){Q.style.overflowX=R;
},"default":function(bd,be){bd.style.overflowX=be;
}}),resetX:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(q){q.style.overflow=bC;
}:
function(a){a.style.overflowX=bC;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(G,H){G.style.overflow=bC;
}:
function(bf,bg){bf.style.overflowX=bC;
},"default":function(r){r.style.overflowX=bC;
}}),getY:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(I,J){var K=qx.bom.element.Style.get(I,by,J,false);

if(K===bz){K=bA;
}return K;
}:
function(bb,bc){return qx.bom.element.Style.get(bb,bw,bc,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(E,F){return qx.bom.element.Style.get(E,by,F,false);
}:
function(w,x){return qx.bom.element.Style.get(w,bw,x,false);
},"default":function(S,T){return qx.bom.element.Style.get(S,bw,T,false);
}}),setY:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(L,M){if(M===bA){M=bz;
}L.style.overflow=M;
}:
function(bV,bW){bV.style.overflowY=bW;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(W,X){W.style.overflow=X;
}:
function(bm,bn){bm.style.overflowY=bn;
},"default":function(g,h){g.style.overflowY=h;
}}),resetY:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(P){P.style.overflow=bC;
}:
function(y){y.style.overflowY=bC;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bP,bQ){bP.style.overflow=bC;
}:
function(cc,cd){cc.style.overflowY=bC;
},"default":function(bS){bS.style.overflowY=bC;
}})}});
})();
(function(){var r="qx.client",q="qx.io2.ImageLoader",p="load";
qx.Bootstrap.define(q,{statics:{__cP:{},__cQ:{width:null,height:null},__cR:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(a){var b=this.__cP[a];
return !!(b&&b.loaded);
},isFailed:function(s){var t=this.__cP[s];
return !!(t&&t.failed);
},isLoading:function(D){var E=this.__cP[D];
return !!(E&&E.loading);
},getFormat:function(w){if(w!=null&&this.__cP[w]){return this.__cP[w]||null;
}else{return null;
}},getSize:function(c){return this.__cP[c]||this.__cQ;
},getWidth:function(k){var m=this.__cP[k];
return m?m.width:null;
},getHeight:function(n){var o=this.__cP[n];
return o?o.height:null;
},load:function(x,y,z){var A=this.__cP[x];

if(!A){A=this.__cP[x]={};
}if(y&&!z){z=window;
}if(A.loaded||A.loading||A.failed){if(y){if(A.loading){A.callbacks.push(y,z);
}else{y.call(z,x,A);
}}}else{A.loading=true;
A.callbacks=[];

if(y){A.callbacks.push(y,z);
}var C=new Image();
var B=qx.lang.Function.listener(this.__cS,this,C,x);
C.onload=B;
C.onerror=B;
C.src=x;
}},__cS:function(event,e,f){var g=this.__cP[f];
if(event.type===p){g.loaded=true;
g.width=this.__cT(e);
g.height=this.__cU(e);
var h=this.__cR.exec(f);

if(h!=null){g.format=h[1];
}}else{g.failed=true;
}e.onload=e.onerror=null;
var j=g.callbacks;
delete g.loading;
delete g.callbacks;
for(var i=0,l=j.length;i<l;i+=2){j[i].call(j[i+1],f,g);
}},__cT:qx.core.Variant.select(r,{"gecko":function(u){return u.naturalWidth;
},"default":function(d){return d.width;
}}),__cU:qx.core.Variant.select(r,{"gecko":function(F){return F.naturalHeight;
},"default":function(v){return v.height;
}})}});
})();
(function(){var o="_window",n="_manager",m="qx.event.handler.Window";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){arguments.callee.base.call(this);
this._manager=d;
this._window=d.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(k,l){},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var r=qx.event.handler.Window.SUPPORTED_TYPES;

for(var q in r){qx.bom.Event.addNativeListener(this._window,q,this._onNativeWrapper);
}},_stopWindowObserver:function(){var g=qx.event.handler.Window.SUPPORTED_TYPES;

for(var f in g){qx.bom.Event.removeNativeListener(this._window,f,this._onNativeWrapper);
}},_onNative:function(e){if(this.isDisposed()){return;
}var t=this._window;
var w=t.document;
var u=w.documentElement;
var s=e.target||e.srcElement;

if(s==null||s===t||s===w||s===u){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,t]);
qx.event.Registration.dispatchEvent(t,event);
var v=event.getReturnValue();

if(v!=null){e.returnValue=v;
return v;
}}}},destruct:function(){this._stopWindowObserver();
this._disposeFields(n,o);
},defer:function(p){qx.event.Registration.addHandler(p);
}});
})();
(function(){var k="ready",j="qx.application",i="beforeunload",h="qx.core.Init",g="shutdown";
qx.Class.define(h,{statics:{getApplication:function(){return this.__cW||null;
},__cV:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var d=qx.core.Setting.get(j);
var f=qx.Class.getByName(d);

if(f){this.__cW=new f;
var c=new Date;
this.__cW.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-c)+"ms");
var c=new Date;
this.__cW.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-c)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+d);
}},__cX:function(e){var a=this.__cW;

if(a){e.setReturnValue(a.close());
}},__cY:function(){var l=this.__cW;

if(l){l.terminate();
}}},defer:function(b){qx.event.Registration.addListener(window,k,b.__cV,b);
qx.event.Registration.addListener(window,g,b.__cY,b);
qx.event.Registration.addListener(window,i,b.__cX,b);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(g,h,i){var j=qx.locale.Manager;

if(j){return j.trc.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(e){var f=qx.locale.Manager;

if(f){return f.marktr.apply(f,arguments);
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
(function(){var bb="errors",ba="",Y="jsFilePath",X="#FF0000",W="treeIndexPath",V=" (",U=")",T="#FF9900",S="click",R="level",bX="1*",bW="folder",bV="green",bU="Only Critical Errors",bT="type",bS="completed",bR="==",bQ="horizontal",bP="treePath",bO=' - v',bi='click',bj="data/json/tree.json",bg="data/errors/",bh="this._treeJSON[",be="../../data/source/",bf="Expand",bc="Expand the tree",bd="evidence",bm="dblclick",bn="Loading...",bv="jslinttoolkit/image/go-up.png",bt="character",bD="jslinttoolkit/image/document-folder.png",by=":\\",bK="kids",bI="reason",bp="pointer",bN="changeSelection",bM="jslinttoolkit/image/go-down.png",bL="/",bo="_",br="Collapse",bs="fileCount",bu="]",bw="jslinttoolkit/image/help-about.png",bz="About JSLint-Toolkit",bF="Collapse the tree",bJ="About",bk="app-header",bl="Alert",bq="].kids[",bC="line",bB="resource/jslinttoolkit/source.htm",bA=".json",bH="\\",bG="jslinttoolkit.Application",bx="1.0",bE="JSLint-Toolkit",Q="jslinttoolkit/image/infoIcon.png";
qx.Class.define(bG,{extend:qx.application.Standalone,members:{_name:bE,_version:bx,_rightPane:null,_rightPaneArea:null,_leftPane:null,_leftPaneTree:null,_middlePane:null,_middlePaneTable:null,_filterButton:null,_treeJSON:null,main:function(){arguments.callee.base.call(this);
{};
var n=new qx.ui.layout.VBox();
var m=new qx.ui.container.Composite(n);
this.getRoot().add(m,{edge:0});
m.add(this.__hN(),{flex:0});
m.add(this.__hO(),{flex:0});
m.add(this.__hM(),{flex:1});
},__hH:function(){var F=this;
var E=new qx.ui.tree.Tree();
E.set({width:180,openMode:bm,hideRoot:false});
var D=new qx.ui.tree.TreeFolder(this.tr(bn));
E.setRoot(D);
D.setIcon(null);
D.setOpen(true);
window.setTimeout(function(){var l=new qx.io.remote.Request(bj);
l.addListener(bS,function(e){var v=qx.util.Json.parse(e.getContent());
F.__hI(D,v,[],[],ba);
F._treeJSON=v;
E.setHideRoot(true);
E.setRootOpenClose(true);
});
l.send();
},200);
this._leftPane=E;
this._leftPaneTree=E;
return E;
},__hI:function(cz,cA,cB,cC,cD){for(var i=0;i<cA.length;i++){var cJ=cA[i];
var name=cJ.name;
cB.push(name);
cC.push(i);
var cG=bH;

if(cJ.basePath){cD=cJ.basePath;

if(cD.indexOf(by)===-1){cG=bL;
}}var cH=cB.join(cG);

if(cD){cH=cD+cG+cH;
}var cF=new qx.ui.tooltip.ToolTip(cH);

if(cJ[bb][0]!==0){name+=V+cJ[bb][0]+U;
}
if(cJ[bT]===bW){if(cJ[bs]===0){cB.pop();
cC.pop();
continue;
}var cI=new qx.ui.tree.TreeFolder(name);
cI.setUserData(bP,[].concat(cB));
cI.setUserData(W,[].concat(cC));
cI.setToolTip(cF);

if(cJ[bb][0]===0){cI.setTextColor(bV);
}else if(cJ[bb][1]===0){cI.setTextColor(T);
}else{cI.setTextColor(X);
}cz.add(cI);
this.__hI(cI,cJ[bK],cB,cC,cD);
}else{var cE=new qx.ui.tree.TreeFile(name);
cE.setUserData(bP,[].concat(cB));
cE.setUserData(W,[].concat(cC));
cE.setToolTip(cF);

if(cJ[bb][0]===0){cE.setTextColor(bV);
}else{if(cJ[bb][1]===0){cE.setTextColor(T);
}else{cE.setTextColor(X);
}cE.setCursor(bp);
(function(cf,cg,ch){ch.addListener(S,function(e){this._middlePaneTable.setUserData(Y,cg);
this.__hJ();
},cf);
})(this,cH,cE);
}cz.add(cE);
}cB.pop();
cC.pop();
}},__hJ:function(){var bY=this._middlePaneTable.getUserData(Y);

if(!bY){return;
}var cc=this.__hW(bY);
var ca=bg+cc+bA;
var cb=new qx.io.remote.Request(ca);
cb.addListener(bS,function(e){var K=qx.util.Json.parse(e.getContent());

if(this._filterButton.isChecked()){var L=[];

for(var i=0;i<K.length;i++){if(K[i][0]!==3){L.push(K[i]);
}}K=L;
}var J=this._middlePaneTable.getTableModel();
J.setData(K);
this._middlePaneTable.getSelectionModel().addSelectionInterval(0,0);
},this);
cb.send();
},__hK:function(){var j=new qx.ui.table.model.Simple();
j.setColumns([R,bC,bt,bI,bd]);
var f={tableColumnModel:function(G){return new qx.ui.table.columnmodel.Resize(G);
}};
var h=new qx.ui.table.Table(j,f);
var g=h.getTableColumnModel();
var d=g.getBehavior();
d.set(0,{width:50});
d.set(1,{width:50});
d.set(2,{width:50});
d.set(3,{width:bX});
d.set(4,{width:bX});
var k=new qx.ui.table.cellrenderer.Conditional(ba,ba,ba,ba);
k.addNumericCondition(bR,1,null,X,null,null,R);
k.addNumericCondition(bR,3,null,T,null,null,R);
h.getTableColumnModel().setDataCellRenderer(0,k);
h.getTableColumnModel().setDataCellRenderer(1,k);
h.getTableColumnModel().setDataCellRenderer(2,k);
h.getTableColumnModel().setDataCellRenderer(3,k);
h.getTableColumnModel().setDataCellRenderer(4,k);
h.getSelectionModel().addListener(bN,function(){var cs=this;
var cr=h.getSelectionModel().getSelectedRanges()[0].minIndex;
var cq=parseInt(h.getTableModel().getValue(1,cr),10);
this.__hS(cq);
},this);
h.getTableColumnModel().setColumnVisible(0,false);
h.getTableColumnModel().setColumnVisible(2,false);
h.getTableColumnModel().setColumnVisible(4,false);
h.setStatusBarVisible(false);
this._middlePane=h;
this._middlePaneTable=h;
return h;
},__hL:function(){var content=new qx.ui.embed.Iframe(bB);
this._rightPane=content;
this._rightPaneArea=content;
return content;
},__hM:function(){var b=new qx.ui.splitpane.Pane(bQ);
var a=this.__hH();
b.add(a,0);
var c=new qx.ui.splitpane.Pane(bQ);
c.setDecorator(null);
b.add(c,1);
c.add(this.__hK(),1);
c.add(this.__hL(),1.5);
return b;
},__hN:function(){var O=new qx.ui.layout.HBox();
var M=new qx.ui.container.Composite(O);
M.setAppearance(bk);
var P=new qx.ui.basic.Label(this._name+bO+this._version);
var N=new qx.ui.basic.Label();
M.add(P);
M.add(new qx.ui.core.Spacer(),{flex:1});
M.add(N);
return M;
},__hO:function(){var toolbar=new qx.ui.toolbar.ToolBar();
var s=new qx.ui.toolbar.Part();
toolbar.add(s);
var p=new qx.ui.toolbar.Button(this.tr(bf),bM);
p.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(bc)));
p.addListener(bi,function(){var H=this._leftPaneTree.getRoot().getItems(true,true,false);

for(var i=0;i<H.length;i++){var I=H[i];

if(I.hasChildren()&&!I.isOpen()){I.setOpen(true);
}}},this);
s.add(p);
var o=new qx.ui.toolbar.Button(this.tr(br),bv);
o.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(bF)));
o.addListener(bi,function(){var ci=this._leftPaneTree.getRoot().getItems(true,true,true);

for(var i=0;i<ci.length;i++){var cj=ci[i];

if(cj.hasChildren()&&cj.isOpen()){cj.setOpen(false);
}}this._leftPaneTree.select(this._leftPaneTree.getRoot());
},this);
s.add(o);
var t=new qx.ui.toolbar.Part();
toolbar.add(t);
var q=new qx.ui.toolbar.CheckBox(this.tr(bU),bD);
q.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(bU)));
q.addListener(S,function(){if(q.isChecked()){this.__hP(true);
}else{this.__hP(false);
}},this);
q.setChecked(false);
this._filterButton=q;
t.add(q);
toolbar.addSpacer();
var u=new qx.ui.toolbar.Part();
toolbar.add(u);
var r=new qx.ui.toolbar.Button(this.tr(bJ),bw);
r.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(bz)));
r.addListener(S,function(){this.__hX(this._name+bO+this._version);
},this);
u.add(r);
return toolbar;
},__hP:function(co){var cp=this._leftPaneTree.getRoot();
this.__hQ(cp,co);
this.__hJ();
},__hQ:function(ct,cu){var cv=ct.getChildren();

for(var i=0;i<cv.length;i++){var cx=cv[i];
var cw=cx.getUserData(W);
var cy=this.__hR(cw);
var name=cy.name;

if(cy[bb][0]===0){continue;
}
if(cu){if(cy[bb][1]===0){cx.setLabel(name);
}else{cx.setLabel(name+V+cy[bb][1]+U);
}}else{cx.setLabel(name+V+cy[bb][0]+U);
}
if(cy[bT]===bW){this.__hQ(cx,cu);
}else{}}},__hR:function(ck){var cl=bh+ck.join(bq)+bu;
return eval(cl);
},__hS:function(cd){var ce=this;
if(this._rightPane.isExcluded()){this._rightPane.show();
this._middlePaneTable.getTableColumnModel().setColumnVisible(3,false);
}ce.__hT(cd);
},__hT:function(x){var C=this;
var y=this._middlePaneTable.getUserData(Y);

if(y!=this._rightPaneArea.getUserData(Y)){var B=this._rightPaneArea.getWindow();

if(B){this._rightPaneArea.setUserData(Y,y);
var A=this.__hW(y);
var z=be+A;
B.loadJS(z,function(){C.__hU(x);
});
}}else{if(x){this.__hU(x);
}}},__hU:function(cm){var cn=this._rightPaneArea.getWindow();

if(cn){cn.highlight(cm);
}},__hV:function(){if(!this._rightPane.isExcluded()){this._rightPane.exclude();
this._middlePaneTable.getTableColumnModel().setColumnVisible(3,true);
}},__hW:function(w){return w.replace(/[:|\\|\/]/g,bo);
},__hX:function(cK){var cL=new qx.ui.window.Window(this.tr(bl),Q);
cL.set({padding:3,modal:true,showMaximize:false,showMinimize:false,resizable:false,contentPadding:[5,10],width:300});
cL.setLayout(new qx.ui.layout.Canvas());
var cM=new qx.ui.basic.Label();
cM.set({content:cK.toString(),rich:true});
cL.add(cM,{left:30,top:30,bottom:30});
cL.center();
cL.open();
}}});
})();
(function(){var c="qx.event.type.Native",b="_native",a="_returnValue";
qx.Class.define(c,{extend:qx.event.type.Event,members:{init:function(g,h,i,j,k){arguments.callee.base.call(this,j,k);
this._target=h||qx.bom.Event.getTarget(g);
this._relatedTarget=i||qx.bom.Event.getRelatedTarget(g);

if(g.timeStamp){this._timeStamp=g.timeStamp;
}this._native=g;
return this;
},clone:function(d){var e=arguments.callee.base.call(this,d);
e._native=this._native;
e._returnValue=this._returnValue;
return e;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},stop:function(){this.stopPropagation();
this.preventDefault();
},getNativeEvent:function(){return this._native;
},setReturnValue:function(f){this._returnValue=f;
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
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(k){var l=this._dynamic;
return k instanceof qx.bom.Font?k:l[k];
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.fonts[p]){return s[p]=(new qx.bom.Font).set(r.colors[p]);
}return p;
},isDynamic:function(m){var o=this._dynamic;

if(m&&(m instanceof qx.bom.Font||o[m]!==undefined)){return true;
}var n=this.getTheme();

if(n!==null&&m&&n.fonts[m]){o[m]=(new qx.bom.Font).set(n.fonts[m]);
return true;
}return false;
},_applyTheme:function(f){var g=this._getDynamic();

for(var j in g){if(g[j].themed){g[j].dispose();
delete g[j];
}}
if(f){var h=f.fonts;
var i=qx.bom.Font;

for(var j in h){g[j]=(new i).set(h[j]);
g[j].themed=true;
}}this._setDynamic(g);
}}});
})();
(function(){var n="",m="underline",k="Boolean",j="px",h='"',g="italic",f="normal",e="bold",d="_applyItalic",c="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="overline",u="line-through",t="qx.bom.Font",s="Number",r="_applyDecoration",q=" ",o="_applySize",p=",";
qx.Class.define(t,{extend:qx.core.Object,construct:function(Q,R){arguments.callee.base.call(this);

if(Q!==undefined){this.setSize(Q);
}
if(R!==undefined){this.setFamily(R);
}},statics:{fromString:function(L){var P=new qx.bom.Font();
var N=L.split(/\s+/);
var name=[];
var O;

for(var i=0;i<N.length;i++){switch(O=N[i]){case e:P.setBold(true);
break;
case g:P.setItalic(true);
break;
case m:P.setDecoration(m);
break;
default:var M=parseInt(O,10);

if(M==O||qx.lang.String.contains(O,j)){P.setSize(M);
}else{name.push(O);
}break;
}}
if(name.length>0){P.setFamily(name);
}return P;
},fromConfig:function(A){var B=new qx.bom.Font;
B.set(A);
return B;
},__db:{fontFamily:n,fontSize:n,fontWeight:n,fontStyle:n,textDecoration:n,lineHeight:1.2},getDefaultStyles:function(){return this.__db;
}},properties:{size:{check:z,nullable:true,apply:o},lineHeight:{check:s,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:k,nullable:true,apply:c},italic:{check:k,nullable:true,apply:d},decoration:{check:[m,u,v],nullable:true,apply:r}},members:{__dc:null,__dd:null,__de:null,__df:null,__dg:null,__dh:null,_applySize:function(C,D){this.__dc=C===null?null:C+j;
},_applyLineHeight:function(a,b){this.__dh=a===null?null:a;
},_applyFamily:function(I,J){var K=n;

for(var i=0,l=I.length;i<l;i++){if(I[i].indexOf(q)>0){K+=h+I[i]+h;
}else{K+=I[i];
}
if(i!==l-1){K+=p;
}}this.__dd=K;
},_applyBold:function(G,H){this.__de=G===null?null:G?e:f;
},_applyItalic:function(S,T){this.__df=S===null?null:S?g:f;
},_applyDecoration:function(E,F){this.__dg=E===null?null:E;
},getStyles:function(){return {fontFamily:this.__dd,fontSize:this.__dc,fontWeight:this.__de,fontStyle:this.__df,textDecoration:this.__dg,lineHeight:this.__dh};
}}});
})();
(function(){var e="icon",d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(f,g){var h=qx.util.AliasManager.getInstance();
f?h.add(e,f.resource):h.remove(e);
}}});
})();
(function(){var j="string",i="Theme",h="__dj",g="__di",f="qx.theme.manager.Appearance",e=":",d="changeAppearanceTheme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__di={};
this.__dj={};
},properties:{appearanceTheme:{check:i,nullable:true,event:d},theme:{check:i,nullable:true,event:c}},members:{__dk:{},__di:null,__dj:null,__dl:function(A,B){var F=B.appearances;
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
return this.__dl(E,B);
}}}return null;
}else if(typeof I===j){return this.__dl(I,B);
}else if(I.include&&!I.style){return this.__dl(I.include,B);
}return A;
},styleFrom:function(k,l,m){if(!m){m=this.getTheme();
}var s=this.__dj;
var n=s[k];

if(!n){n=s[k]=this.__dl(k,m);
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
}if(q>0){y+=e+q;
}}var r=this.__di;

if(r[y]!==undefined){return r[y];
}if(!l){l=this.__dk;
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
}},destruct:function(){this._disposeFields(g,h);
}});
})();
(function(){var j="qx.event.handler.UserAction",i="__dm",h="__dn";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this.__dm=g;
this.__dn=g.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,e){},registerEvent:function(k,l,m){},unregisterEvent:function(a,b,c){}},destruct:function(){this._disposeFields(i,h);
},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var h="__dp",g="qx.util.DeferredCallManager",f="singleton",e="__do";
qx.Class.define(g,{extend:qx.core.Object,type:f,construct:function(){this.__do={};
this.__dp=qx.lang.Function.bind(this.__dt,this);
this.__dq=false;
},members:{__dr:null,__ds:null,__do:null,__dq:null,__dp:null,schedule:function(i){if(this.__dr==null){this.__dr=window.setTimeout(this.__dp,0);
}var j=i.toHashCode();
if(this.__ds&&this.__ds[j]){return;
}this.__do[j]=i;
this.__dq=true;
},cancel:function(a){var b=a.toHashCode();
if(this.__ds&&this.__ds[b]){this.__ds[b]=null;
return;
}delete this.__do[b];
if(qx.lang.Object.isEmpty(this.__do)&&this.__dr!=null){window.clearTimeout(this.__dr);
this.__dr=null;
}},__dt:function(){this.__dr=null;
while(this.__dq){this.__ds=qx.lang.Object.clone(this.__do);
this.__do={};
this.__dq=false;

for(var d in this.__ds){var c=this.__ds[d];

if(c){this.__ds[d]=null;
c.call();
}}}this.__ds=null;
}},destruct:function(){if(this.__dr!=null){window.clearTimeout(this.__dr);
}this._disposeFields(h,e);
}});
})();
(function(){var h="qx.util.DeferredCall",g="__dw",f="__du",e="__dv";
qx.Class.define(h,{extend:qx.core.Object,construct:function(c,d){arguments.callee.base.call(this);
this.__du=c;
this.__dv=d||null;
this.__dw=qx.util.DeferredCallManager.getInstance();
},members:{__du:null,__dv:null,__dw:null,cancel:function(){this.__dw.cancel(this);
},schedule:function(){this.__dw.schedule(this);
},call:function(){this.__dv?this.__du.apply(this.__dv):this.__du();
}},destruct:function(a,b){this.cancel();
this._disposeFields(e,f,g);
}});
})();
(function(){var q="element",p="qx.client",o="div",n="",m="mshtml",k="qx.html.Element",j="__dI",h="|capture|",g="__dM",f="__dK",K="focus",J="blur",I="deactivate",H="__dD",G="capture",F="releaseCapture",E="__dJ",D="__dH",C="__dL",B="tabIndex",z="__dS",A="__dN",v="__dy",w="activate",t="__dC",u="none",r="__dG",s="|bubble|";
qx.Class.define(k,{extend:qx.core.Object,construct:function(cN){arguments.callee.base.call(this);
this.__dx=cN||o;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],_scheduleFlush:function(dH){qx.html.Element.__dX.schedule();
},_mshtmlVisibilitySort:qx.core.Variant.select(p,{"mshtml":function(a,b){var dy=a.__dy;
var dx=b.__dy;

if(dy.contains(dx)){return 1;
}
if(dx.contains(dy)){return -1;
}return 0;
},"default":null}),flush:function(){var X;
{};
var Y=[];
var bb=this._modified;

for(var bi in bb){X=bb[bi];
if(X.__dQ()){if(X.__dy&&qx.dom.Hierarchy.isRendered(X.__dy)){Y.push(X);
}else{{};
X.__dP();
}delete bb[bi];
}}
for(var i=0,l=Y.length;i<l;i++){X=Y[i];
{};
X.__dP();
}var bc=this._visibility;
if(qx.core.Variant.isSet(p,m)){var ba=[];

for(var bi in bc){ba.push(bc[bi]);
}if(ba.length>1){ba.sort(this._mshtmlVisibilitySort);
bc=this._visibility={};

for(var i=0;i<ba.length;i++){X=ba[i];
bc[X.$$hash]=X;
}}}
for(var bi in bc){X=bc[bi];
{};
X.__dy.style.display=X.__dB?n:u;
delete bc[bi];
}var scroll=this._scroll;

for(var bi in scroll){X=scroll[bi];
var bk=X.__dy;

if(bk&&bk.offsetWidth){var bf=true;
if(X.__dE!=null){X.__dy.scrollLeft=X.__dE;
delete X.__dE;
}if(X.__dF!=null){X.__dy.scrollTop=X.__dF;
delete X.__dF;
}var bd=X.__dC;

if(bd!=null){var bg=bd.element.getDomElement();

if(bg&&bg.offsetWidth){qx.bom.element.Scroll.intoViewX(bg,bk,bd.align);
delete X.__dC;
}else{bf=false;
}}var be=X.__dD;

if(be!=null){var bg=be.element.getDomElement();

if(bg&&bg.offsetWidth){qx.bom.element.Scroll.intoViewY(bg,bk,be.align);
delete X.__dD;
}else{bf=false;
}}if(bf){delete scroll[bi];
}}}for(var i=0;i<this._actions.length;i++){var bh=this._actions[i];
var bj=bh.element.__dy;

if(!bj){continue;
}qx.bom.Element[bh.type](bj);
}this._actions=[];
qx.event.handler.Appear.refresh();
}},members:{__dx:null,__dy:null,__dz:false,__dA:true,__dB:true,__dC:null,__dD:null,__dE:null,__dF:null,__dG:null,__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dM:null,__dN:null,__dO:null,_scheduleChildrenUpdate:function(){if(this.__dO){return;
}this.__dO=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(q);
},_createDomElement:function(){return qx.bom.Element.create(this.__dx);
},__dP:function(){{};
var dk=this.__dN;

if(dk){var length=dk.length;
var dl;

for(var i=0;i<length;i++){dl=dk[i];

if(dl.__dB&&dl.__dA&&!dl.__dy){dl.__dP();
}}}
if(!this.__dy){this.__dy=this._createDomElement();
this.__dy.$$hash=this.$$hash;
this._copyData(false);

if(dk&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__dO){this._syncChildren();
}}delete this.__dO;
},_insertChildren:function(){var c=this.__dN;
var length=c.length;
var e;

if(length>2){var d=document.createDocumentFragment();

for(var i=0;i<length;i++){e=c[i];

if(e.__dy&&e.__dA){d.appendChild(e.__dy);
}}this.__dy.appendChild(d);
}else{var d=this.__dy;

for(var i=0;i<length;i++){e=c[i];

if(e.__dy&&e.__dA){d.appendChild(e.__dy);
}}}},_syncChildren:function(){var U=qx.core.ObjectRegistry;
var L=this.__dN;
var S=L.length;
var M;
var Q;
var O=this.__dy;
var R=O.childNodes;
var N=0;
var P;
var T;
for(var i=R.length-1;i>=0;i--){P=R[i];
Q=U.fromHashCode(P.$$hash);

if(!Q||!Q.__dA||Q.__dS!==this){O.removeChild(P);
{};
}}for(var i=0;i<S;i++){M=L[i];
if(M.__dA){Q=M.__dy;
P=R[N];

if(!Q){continue;
}if(Q!=P){if(P){O.insertBefore(Q,P);
}else{O.appendChild(Q);
}{};
}N++;
}}{};
},_copyData:function(dz){var dD=this.__dy;
var dC=this.__dK;

if(dC){var dA=qx.bom.element.Attribute;

for(var dE in dC){dA.set(dD,dE,dC[dE]);
}}var dC=this.__dJ;

if(dC){var dB=qx.bom.element.Style;

if(dz){for(var dE in dC){dB.set(dD,dE,dC[dE]);
}}else{dB.setCss(dD,dB.compile(dC));
}}var dC=this.__dL;

if(dC){for(var dE in dC){this._applyProperty(dE,dC[dE]);
}}var dC=this.__dM;

if(dC){qx.event.Registration.getManager(dD).importListeners(dD,dC);
delete this.__dM;
}},_syncData:function(){var cw=this.__dy;
var cv=qx.bom.element.Attribute;
var ct=qx.bom.element.Style;
var cu=this.__dH;

if(cu){var cz=this.__dK;

if(cz){var cx;

for(var cy in cu){cx=cz[cy];

if(cx!==undefined){cv.set(cw,cy,cx);
}else{cv.reset(cw,cy);
}}}this.__dH=null;
}var cu=this.__dG;

if(cu){var cz=this.__dJ;

if(cz){var cx;

for(var cy in cu){cx=cz[cy];

if(cx!==undefined){ct.set(cw,cy,cx);
}else{ct.reset(cw,cy);
}}}this.__dG=null;
}var cu=this.__dI;

if(cu){var cz=this.__dL;

if(cz){var cx;

for(var cy in cu){this._applyProperty(cy,cz[cy]);
}}this.__dI=null;
}},__dQ:function(){var V=this;
while(V){if(V.__dz){return true;
}
if(!V.__dA||!V.__dB){return false;
}V=V.__dS;
}return false;
},__dR:function(dj){if(dj.__dS===this){throw new Error("Child is already in: "+dj);
}
if(dj.__dz){throw new Error("Root elements could not be inserted into other ones.");
}if(dj.__dS){dj.__dS.remove(dj);
}dj.__dS=this;
if(!this.__dN){this.__dN=[];
}if(this.__dy){this._scheduleChildrenUpdate();
}},__dT:function(cF){if(cF.__dS!==this){throw new Error("Has no child: "+cF);
}if(this.__dy){this._scheduleChildrenUpdate();
}delete cF.__dS;
},__dU:function(cp){if(cp.__dS!==this){throw new Error("Has no child: "+cp);
}if(this.__dy){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dN||null;
},getChild:function(cS){var cT=this.__dN;
return cT&&cT[cS]||null;
},hasChildren:function(){var by=this.__dN;
return by&&by[0]!==undefined;
},indexOf:function(ds){var dt=this.__dN;
return dt?dt.indexOf(ds):-1;
},hasChild:function(cl){var cm=this.__dN;
return cm&&cm.indexOf(cl)!==-1;
},add:function(bm){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dR(arguments[i]);
}this.__dN.push.apply(this.__dN,arguments);
}else{this.__dR(bm);
this.__dN.push(bm);
}return this;
},addAt:function(ca,cb){this.__dR(ca);
qx.lang.Array.insertAt(this.__dN,ca,cb);
return this;
},remove:function(cc){var cd=this.__dN;

if(!cd){return;
}
if(arguments[1]){var ce;

for(var i=0,l=arguments.length;i<l;i++){ce=arguments[i];
this.__dT(ce);
qx.lang.Array.remove(cd,ce);
}}else{this.__dT(cc);
qx.lang.Array.remove(cd,cc);
}return this;
},removeAt:function(dm){var dn=this.__dN;

if(!dn){throw new Error("Has no children!");
}var dp=dn[dm];

if(!dp){throw new Error("Has no child at this position!");
}this.__dT(dp);
qx.lang.Array.removeAt(this.__dN,dm);
return this;
},removeAll:function(){var dI=this.__dN;

if(dI){for(var i=0,l=dI.length;i<l;i++){this.__dT(dI[i]);
}dI.length=0;
}return this;
},getParent:function(){return this.__dS||null;
},insertInto:function(parent,cs){parent.__dR(this);

if(cs==null){parent.__dN.push(this);
}else{qx.lang.Array.insertAt(this.__dN,this,cs);
}return this;
},insertBefore:function(cn){var parent=cn.__dS;
parent.__dR(this);
qx.lang.Array.insertBefore(parent.__dN,this,cn);
return this;
},insertAfter:function(cO){var parent=cO.__dS;
parent.__dR(this);
qx.lang.Array.insertAfter(parent.__dN,this,cO);
return this;
},moveTo:function(bM){var parent=this.__dS;
parent.__dU(this);
var bN=parent.__dN.indexOf(this);

if(bN===bM){throw new Error("Could not move to same index!");
}else if(bN<bM){bM--;
}qx.lang.Array.removeAt(parent.__dN,bN);
qx.lang.Array.insertAt(parent.__dN,this,bM);
return this;
},moveBefore:function(W){var parent=this.__dS;
return this.moveTo(parent.__dN.indexOf(W));
},moveAfter:function(ck){var parent=this.__dS;
return this.moveTo(parent.__dN.indexOf(ck)+1);
},free:function(){var parent=this.__dS;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dN){return;
}parent.__dT(this);
qx.lang.Array.remove(parent.__dN,this);
return this;
},getDomElement:function(){return this.__dy||null;
},getNodeName:function(){return this.__dx;
},setNodeName:function(name){this.__dx=name;
},setRoot:function(dJ){this.__dz=dJ;
},useMarkup:function(cq){if(this.__dy){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(p,m)){var cr=document.createElement(o);
}else{var cr=qx.html.Element.__dV;

if(!cr){cr=qx.html.Element.__dV=document.createElement(o);
}}cr.innerHTML=cq;
this.__dy=cr.firstChild;
this.__dy.$$hash=this.$$hash;
this._copyData(true);
return this.__dy;
},useElement:function(bU){if(this.__dy){throw new Error("Could not overwrite existing element!");
}this.__dy=bU;
this.__dy.$$hash=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cV=this.getAttribute(B);

if(cV>=1){return true;
}var cU=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cV>=0&&cU[this.__dx]){return true;
}return false;
},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__dx];
},include:function(){if(this.__dA){return;
}delete this.__dA;

if(this.__dS){this.__dS._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__dA){return;
}this.__dA=false;

if(this.__dS){this.__dS._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__dA===true;
},show:function(){if(this.__dB){return;
}
if(this.__dy){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(q);
}if(this.__dS){this.__dS._scheduleChildrenUpdate();
}delete this.__dB;
},hide:function(){if(!this.__dB){return;
}
if(this.__dy){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(q);
}this.__dB=false;
},isVisible:function(){return this.__dB===true;
},scrollChildIntoViewX:function(cf,cg,ch){var ci=this.__dy;
var cj=cf.getDomElement();

if(ch!==false&&ci&&ci.offsetWidth&&cj&&cj.offsetWidth){qx.bom.element.Scroll.intoViewX(cj,ci,cg);
}else{this.__dC={element:cf,align:cg};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(q);
}delete this.__dE;
},scrollChildIntoViewY:function(de,df,dg){var dh=this.__dy;
var di=de.getDomElement();

if(dg!==false&&dh&&dh.offsetWidth&&di&&di.offsetWidth){qx.bom.element.Scroll.intoViewY(di,dh,df);
}else{this.__dD={element:de,align:df};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(q);
}delete this.__dF;
},scrollToX:function(x,bn){var bo=this.__dy;

if(bn!==true&&bo&&bo.offsetWidth){bo.scrollLeft=x;
}else{this.__dE=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(q);
}delete this.__dC;
},getScrollX:function(){var bx=this.__dy;

if(bx){return bx.scrollLeft;
}return this.__dE||0;
},scrollToY:function(y,dq){var dr=this.__dy;

if(dq!==true&&dr&&dr.offsetWidth){dr.scrollTop=y;
}else{this.__dF=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(q);
}delete this.__dD;
},getScrollY:function(){var dF=this.__dy;

if(dF){return dF.scrollTop;
}return this.__dF||0;
},getSelection:function(){var bF=this.__dy;

if(bF){return qx.bom.Selection.get(bF);
}return null;
},getSelectionLength:function(){var co=this.__dy;

if(co){return qx.bom.Selection.getLength(co);
}return null;
},setSelection:function(cK,cL){var cM=this.__dy;

if(cM){qx.bom.Selection.set(cM,cK,cL);
}},clearSelection:function(){var bG=this.__dy;

if(bG){qx.bom.Selection.clear(bG);
}},__dW:function(bJ){var bK=this.__dy;
var bL=qx.html.Element._actions;

if(bK&&bL.length==0){return qx.bom.Element[bJ](bK);
}bL.push({type:bJ,element:this});
qx.html.Element._scheduleFlush(q);
},focus:function(){this.__dW(K);
},blur:function(){this.__dW(J);
},activate:function(){this.__dW(w);
},deactivate:function(){this.__dW(I);
},capture:function(){this.__dW(G);
},releaseCapture:function(){this.__dW(F);
},setStyle:function(cH,cI,cJ){if(!this.__dJ){this.__dJ={};
}
if(this.__dJ[cH]==cI){return;
}
if(cI==null){delete this.__dJ[cH];
}else{this.__dJ[cH]=cI;
}if(this.__dy){if(cJ){qx.bom.element.Style.set(this.__dy,cH,cI);
return this;
}if(!this.__dG){this.__dG={};
}this.__dG[cH]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(q);
}return this;
},setStyles:function(cP,cQ){for(var cR in cP){this.setStyle(cR,cP[cR],cQ);
}return this;
},removeStyle:function(bH,bI){this.setStyle(bH,null,bI);
},getStyle:function(cG){return this.__dJ?this.__dJ[cG]:null;
},getAllStyles:function(){return this.__dJ||null;
},setAttribute:function(cY,da,dc){if(!this.__dK){this.__dK={};
}
if(this.__dK[cY]==da){return;
}
if(da==null){delete this.__dK[cY];
}else{this.__dK[cY]=da;
}if(this.__dy){if(dc){qx.bom.element.Attribute.set(this.__dy,cY,da);
return this;
}if(!this.__dH){this.__dH={};
}this.__dH[cY]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(q);
}return this;
},setAttributes:function(bW,bX){for(var bY in bW){this.setAttribute(bY,bW[bY],bX);
}return this;
},removeAttribute:function(cW,cX){this.setAttribute(cW,null,cX);
},getAttribute:function(dd){return this.__dK?this.__dK[dd]:null;
},_applyProperty:function(name,bp){},_setProperty:function(bQ,bR,bS){if(!this.__dL){this.__dL={};
}
if(this.__dL[bQ]==bR){return;
}
if(bR==null){delete this.__dL[bQ];
}else{this.__dL[bQ]=bR;
}if(this.__dy){if(bS){this._applyProperty(bQ,bR);
return this;
}if(!this.__dI){this.__dI={};
}this.__dI[bQ]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(q);
}return this;
},_removeProperty:function(bO,bP){this._setProperty(bO,null,bP);
},_getProperty:function(du){var dv=this.__dL;

if(!dv){return null;
}var dw=dv[du];
return dw==null?null:dw;
},addListener:function(bz,bA,self,bB){if(this.$$disposed){return null;
}var bC;

if(this.__dy){return qx.event.Registration.addListener(this.__dy,bz,bA,self,bB);
}
if(!this.__dM){this.__dM={};
}
if(bB==null){bB=false;
}var bD=qx.event.Manager.getNextUniqueId();
var bE=bz+(bB?h:s)+bD;
this.__dM[bE]={type:bz,listener:bA,self:self,capture:bB,unique:bD};
return bE;
},removeListener:function(bq,br,self,bs){if(this.$$disposed){return null;
}var bt;

if(this.__dy){qx.event.Registration.removeListener(this.__dy,bq,br,self,bs);
}else{var bv=this.__dM;
var bu;

if(bs==null){bs=false;
}
for(var bw in bv){bu=bv[bw];
if(bu.listener===br&&bu.self===self&&bu.capture===bs&&bu.type===bq){delete bv[bw];
break;
}}}return this;
},removeListenerById:function(bV){if(this.$$disposed){return null;
}
if(this.__dy){qx.event.Registration.removeListenerById(this.__dy,bV);
}else{delete this.__dM[bV];
}return this;
},hasListener:function(cA,cB){if(this.$$disposed){return false;
}
if(this.__dy){return qx.event.Registration.hasListener(this.__dy,cA,cB);
}var cD=this.__dM;
var cC;

if(cB==null){cB=false;
}
for(var cE in cD){cC=cD[cE];
if(cC.capture===cB&&cC.type===cA){return true;
}}return false;
}},defer:function(dG){dG.__dX=new qx.util.DeferredCall(dG.flush,dG);
},destruct:function(){var bT=this.__dy;

if(bT){qx.event.Registration.getManager(bT).removeAllListeners(bT);
bT.$$hash=n;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dS;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(A);
this._disposeFields(f,E,g,C,D,r,j,v,z,t,H);
}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__dY:false,__ea:{},scheduleFlush:function(d){var self=qx.ui.core.queue.Manager;
self.__ea[d]=true;

if(!self.__dY){self.__ec.schedule();
self.__dY=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__eb){return;
}self.__eb=true;
self.__ec.cancel();
var e=self.__ea;

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
}}qx.ui.core.queue.Manager.__dY=false;

if(e.dispose){delete e.dispose;
qx.ui.core.queue.Dispose.flush();
}self.__eb=false;
}},defer:function(c){c.__ec=new qx.util.DeferredCall(c.flush);
qx.html.Element._scheduleFlush=c.scheduleFlush;
qx.event.Registration.addListener(window,a,c.flush);
}});
})();
(function(){var f="qx.client",e="qx.dom.Hierarchy",d="previousSibling",c="*",b="nextSibling",a="parentNode";
qx.Class.define(e,{statics:{getNodeIndex:function(i){var j=0;

while(i&&(i=i.previousSibling)){j++;
}return j;
},getElementIndex:function(n){var o=0;
var p=qx.dom.Node.ELEMENT;

while(n&&(n=n.previousSibling)){if(n.nodeType==p){o++;
}}return o;
},getNextElementSibling:function(t){while(t&&(t=t.nextSibling)&&!qx.dom.Node.isElement(t)){continue;
}return t||null;
},getPreviousElementSibling:function(T){while(T&&(T=T.previousSibling)&&!qx.dom.Node.isElement(T)){continue;
}return T||null;
},contains:qx.core.Variant.select(f,{"webkit|mshtml|opera":function(A,B){if(qx.dom.Node.isDocument(A)){var C=qx.dom.Node.getDocument(B);
return A&&C==A;
}else if(qx.dom.Node.isDocument(B)){return false;
}else{return A.contains(B);
}},"gecko":function(G,H){return !!(G.compareDocumentPosition(H)&16);
},"default":function(g,h){while(h){if(g==h){return true;
}h=h.parentNode;
}return false;
}}),isRendered:function(y){if(!y.offsetParent){return false;
}var z=y.ownerDocument||y.document;
if(z.body.contains){return z.body.contains(y);
}if(z.compareDocumentPosition){return !!(z.compareDocumentPosition(y)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(l,m){return this.contains(m,l);
},getCommonParent:qx.core.Variant.select(f,{"mshtml|opera":function(U,V){if(U===V){return U;
}
while(U&&qx.dom.Node.isElement(U)){if(U.contains(V)){return U;
}U=U.parentNode;
}return null;
},"default":function(J,K){if(J===K){return J;
}var L={};
var O=qx.core.ObjectRegistry;
var N,M;

while(J||K){if(J){N=O.toHashCode(J);

if(L[N]){return L[N];
}L[N]=J;
J=J.parentNode;
}
if(K){M=O.toHashCode(K);

if(L[M]){return L[M];
}L[M]=K;
K=K.parentNode;
}}return null;
}}),getAncestors:function(u){return this._recursivelyCollect(u,a);
},getChildElements:function(q){q=q.firstChild;

if(!q){return [];
}var r=this.getNextSiblings(q);

if(q.nodeType===1){r.unshift(q);
}return r;
},getDescendants:function(Q){return qx.lang.Array.fromCollection(Q.getElementsByTagName(c));
},getFirstDescendant:function(R){R=R.firstChild;

while(R&&R.nodeType!=1){R=R.nextSibling;
}return R;
},getLastDescendant:function(s){s=s.lastChild;

while(s&&s.nodeType!=1){s=s.previousSibling;
}return s;
},getPreviousSiblings:function(k){return this._recursivelyCollect(k,d);
},getNextSiblings:function(P){return this._recursivelyCollect(P,b);
},_recursivelyCollect:function(D,E){var F=[];

while(D=D[E]){if(D.nodeType==1){F.push(D);
}}return F;
},getSiblings:function(S){return this.getPreviousSiblings(S).reverse().concat(this.getNextSiblings(S));
},isEmpty:function(I){I=I.firstChild;

while(I){if(I.nodeType===qx.dom.Node.ELEMENT||I.nodeType===qx.dom.Node.TEXT){return false;
}I=I.nextSibling;
}return true;
},cleanWhitespace:function(v){var w=v.firstChild;

while(w){var x=w.nextSibling;

if(w.nodeType==3&&!/\S/.test(w.nodeValue)){v.removeChild(w);
}w=x;
}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(o,stop,p){var parent=o.parentNode;
var u=qx.dom.Node.getDocument(o);
var q=u.body;
var C,A,x;
var E,v,F;
var y,G,J;
var H,s,B,r;
var w,I,z;
var t=p===g;
var D=p===c;
stop=stop?stop.parentNode:u;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===q||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===q){A=parent.scrollLeft;
x=A+qx.bom.Viewport.getWidth();
E=qx.bom.Viewport.getWidth();
v=parent.clientWidth;
F=parent.scrollWidth;
y=0;
G=0;
J=0;
}else{C=qx.bom.element.Location.get(parent);
A=C.left;
x=C.right;
E=parent.offsetWidth;
v=parent.clientWidth;
F=parent.scrollWidth;
y=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
G=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
J=E-v-y-G;
}H=qx.bom.element.Location.get(o);
s=H.left;
B=H.right;
r=o.offsetWidth;
w=s-A-y;
I=B-x+G;
z=0;
if(t){z=w;
}else if(D){z=I+J;
}else if(w<0||r>v){z=w;
}else if(I>0){z=I+J;
}parent.scrollLeft+=z;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===q){break;
}parent=parent.parentNode;
}},intoViewY:function(K,stop,L){var parent=K.parentNode;
var R=qx.dom.Node.getDocument(K);
var M=R.body;
var ba,N,V;
var bc,Y,T;
var P,Q,O;
var be,bf,bb,U;
var X,S,bg;
var bd=L===d;
var W=L===e;
stop=stop?stop.parentNode:R;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){N=parent.scrollTop;
V=N+qx.bom.Viewport.getHeight();
bc=qx.bom.Viewport.getHeight();
Y=parent.clientHeight;
T=parent.scrollHeight;
P=0;
Q=0;
O=0;
}else{ba=qx.bom.element.Location.get(parent);
N=ba.top;
V=ba.bottom;
bc=parent.offsetHeight;
Y=parent.clientHeight;
T=parent.scrollHeight;
P=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
Q=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
O=bc-Y-P-Q;
}be=qx.bom.element.Location.get(K);
bf=be.top;
bb=be.bottom;
U=K.offsetHeight;
X=bf-N-P;
S=bb-V+Q;
bg=0;
if(bd){bg=X;
}else if(W){bg=S+O;
}else if(X<0||U>Y){bg=X;
}else if(S>0){bg=S+O;
}parent.scrollTop+=bg;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoView:function(l,stop,m,n){this.intoViewX(l,stop,m);
this.intoViewY(l,stop,n);
}}});
})();
(function(){var T="borderTopWidth",S="borderLeftWidth",R="scroll",Q="border-box",P="position",O="borderBottomWidth",N="qx.client",M="borderRightWidth",L="auto",K="marginTop",bm="marginLeft",bl="padding",bk="fixed",bj="CSS1Compat",bi="qx.bom.element.Location",bh="paddingLeft",bg="static",bf="marginBottom",be="visible",bd="BODY",bb="paddingBottom",bc="paddingTop",Y="marginRight",ba="margin",W="overflow",X="paddingRight",U="border",V="absolute";
qx.Class.define(bi,{statics:{__ed:function(bo,bp){return qx.bom.element.Style.get(bo,bp,qx.bom.element.Style.COMPUTED_MODE,false);
},__ee:function(bq,br){return parseInt(qx.bom.element.Style.get(bq,br,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ef:function(bs){var bv=0,top=0;
if(bs.getBoundingClientRect){var bu=qx.dom.Node.getWindow(bs);
bv-=qx.bom.Viewport.getScrollLeft(bu);
top-=qx.bom.Viewport.getScrollTop(bu);
}else{var bt=qx.dom.Node.getDocument(bs).body;
bs=bs.parentNode;
while(bs&&bs!=bt){bv+=bs.scrollLeft;
top+=bs.scrollTop;
bs=bs.parentNode;
}}return {left:bv,top:top};
},__eg:qx.core.Variant.select(N,{"mshtml":function(a){var c=qx.dom.Node.getDocument(a);
var b=c.body;
var d=0;
var top=0;
d-=b.clientLeft+c.documentElement.clientLeft;
top-=b.clientTop+c.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){d+=this.__ee(b,S);
top+=this.__ee(b,T);
}return {left:d,top:top};
},"webkit":function(G){var I=qx.dom.Node.getDocument(G);
var H=I.body;
var J=H.offsetLeft;
var top=H.offsetTop;
J+=this.__ee(H,S);
top+=this.__ee(H,T);
if(I.compatMode===bj){J+=this.__ee(H,bm);
top+=this.__ee(H,K);
}return {left:J,top:top};
},"gecko":function(bH){var bI=qx.dom.Node.getDocument(bH).body;
var bK=bI.offsetLeft;
var top=bI.offsetTop;
if(qx.bom.element.BoxSizing.get(bI)!==Q){bK+=this.__ee(bI,S);
top+=this.__ee(bI,T);
if(!bH.getBoundingClientRect){var bJ;

while(bH){if(this.__ed(bH,P)===V||this.__ed(bH,P)===bk){bJ=true;
break;
}bH=bH.offsetParent;
}
if(!bJ){bK+=this.__ee(bI,S);
top+=this.__ee(bI,T);
}}}return {left:bK,top:top};
},"default":function(bC){var bD=qx.dom.Node.getDocument(bC).body;
var bE=bD.offsetLeft;
var top=bD.offsetTop;
return {left:bE,top:top};
}}),__eh:qx.core.Variant.select(N,{"mshtml|webkit":function(q){var s=qx.dom.Node.getDocument(q);
if(q.getBoundingClientRect){var t=q.getBoundingClientRect();
var u=t.left;
var top=t.top;
}else{var u=q.offsetLeft;
var top=q.offsetTop;
q=q.offsetParent;
var r=s.body;
while(q&&q!=r){u+=q.offsetLeft;
top+=q.offsetTop;
u+=this.__ee(q,S);
top+=this.__ee(q,T);
q=q.offsetParent;
}}return {left:u,top:top};
},"gecko":function(e){if(e.getBoundingClientRect){var h=e.getBoundingClientRect();
var i=Math.round(h.left);
var top=Math.round(h.top);
}else{var i=0;
var top=0;
var f=qx.dom.Node.getDocument(e).body;
var g=qx.bom.element.BoxSizing;

if(g.get(e)!==Q){i-=this.__ee(e,S);
top-=this.__ee(e,T);
}
while(e&&e!==f){i+=e.offsetLeft;
top+=e.offsetTop;
if(g.get(e)!==Q){i+=this.__ee(e,S);
top+=this.__ee(e,T);
}if(e.parentNode&&this.__ed(e.parentNode,W)!=be){i+=this.__ee(e.parentNode,S);
top+=this.__ee(e.parentNode,T);
}e=e.offsetParent;
}}return {left:i,top:top};
},"default":function(bL){var bN=0;
var top=0;
var bM=qx.dom.Node.getDocument(bL).body;
while(bL&&bL!==bM){bN+=bL.offsetLeft;
top+=bL.offsetTop;
bL=bL.offsetParent;
}return {left:bN,top:top};
}}),get:function(v,w){var x=this.__eg(v);

if(v.tagName==bd){var D=x.left;
var top=x.top;
}else{var C=this.__eh(v);
var scroll=this.__ef(v);
var D=C.left+x.left-scroll.left;
var top=C.top+x.top-scroll.top;
}var y=D+v.offsetWidth;
var z=top+v.offsetHeight;

if(w){if(w==bl||w==R){var A=qx.bom.element.Overflow.getX(v);

if(A==R||A==L){y+=v.scrollWidth-v.offsetWidth+this.__ee(v,S)+this.__ee(v,M);
}var B=qx.bom.element.Overflow.getY(v);

if(B==R||B==L){z+=v.scrollHeight-v.offsetHeight+this.__ee(v,T)+this.__ee(v,O);
}}
switch(w){case bl:D+=this.__ee(v,bh);
top+=this.__ee(v,bc);
y-=this.__ee(v,X);
z-=this.__ee(v,bb);
case R:D-=v.scrollLeft;
top-=v.scrollTop;
y-=v.scrollLeft;
z-=v.scrollTop;
case U:D+=this.__ee(v,S);
top+=this.__ee(v,T);
y-=this.__ee(v,M);
z-=this.__ee(v,O);
break;
case ba:D-=this.__ee(v,bm);
top-=this.__ee(v,K);
y+=this.__ee(v,Y);
z+=this.__ee(v,bf);
break;
}}return {left:D,top:top,right:y,bottom:z};
},getLeft:function(bF,bG){return this.get(bF,bG).left;
},getTop:function(j,k){return this.get(j,k).top;
},getRight:function(E,F){return this.get(E,F).right;
},getBottom:function(o,p){return this.get(o,p).bottom;
},getRelative:function(bw,bx,by,bz){var bB=this.get(bw,by);
var bA=this.get(bx,bz);
return {left:bB.left-bA.left,top:bB.top-bA.top,right:bB.right-bA.right,bottom:bB.bottom-bA.bottom};
},getPosition:function(bn){return this.getRelative(bn,this.getOffsetParent(bn));
},getOffsetParent:function(l){var n=l.offsetParent||document.body;
var m=qx.bom.element.Style;

while(n&&(!/^body|html$/i.test(n.tagName)&&m.get(n,P)===bg)){n=n.offsetParent;
}return n;
}}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(x){this._manager=x;
},members:{_getParent:function(c){throw new Error("Missing implementation");
},canDispatchEvent:function(v,event,w){return event.getBubbles();
},dispatchEvent:function(d,event,e){var parent=d;
var p=this._manager;
var m,t;
var k;
var o,r;
var q;
var s=[];
m=p.getListeners(d,e,true);
t=p.getListeners(d,e,false);

if(m){s.push(m);
}
if(t){s.push(t);
}var parent=this._getParent(d);
var g=[];
var f=[];
var h=[];
var n=[];
while(parent!=null){m=p.getListeners(parent,e,true);

if(m){h.push(m);
n.push(parent);
}t=p.getListeners(parent,e,false);

if(t){g.push(t);
f.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=h.length-1;i>=0;i--){q=n[i];
event.setCurrentTarget(q);
k=h[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||q;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(d);

for(var i=0,u=s.length;i<u;i++){k=s[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||d;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,u=g.length;i<u;i++){q=f[i];
event.setCurrentTarget(q);
k=g[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||q;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var bz="keydown",by="keypress",bx="qx.client",bw="NumLock",bv="keyup",bu="Enter",bt="0",bs="9",br="-",bq="PageUp",cK="+",cJ="PrintScreen",cI="gecko",cH="A",cG="Z",cF="Left",cE="F5",cD="Down",cC="Up",cB="F11",bG="F6",bH="useraction",bE="F3",bF="keyinput",bC="Insert",bD="F8",bA="End",bB="/",bO="Delete",bP="*",ce="F1",ca="F4",cm="Home",ch="F2",cx="F12",cr="PageDown",bU="F7",cA="F9",cz="F10",cy="Right",bS="text",bW="Escape",bY="webkit",cc="__el",cf="5",ci="3",co="Meta",ct="7",bI="__ej",bJ="CapsLock",bV="input",cl="Control",ck="Space",cj="Tab",cq="Shift",cp="Pause",cg="Unidentified",cn="qx.event.handler.Keyboard",bn="__ek",cs="mshtml",bK="mshtml|webkit",bL="6",cb="off",bo="Apps",bp="4",bR="Alt",bM="2",bN="Scroll",bQ="1",cd="8",cv="Win",cu="__ei",bX="autoComplete",cw=",",bT="Backspace";
qx.Class.define(cn,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){arguments.callee.base.call(this);
this.__ei=p;
this.__ej=p.getWindow();
if(qx.core.Variant.isSet(bx,cI)){this.__ek=this.__ej;
}else{this.__ek=this.__ej.document.documentElement;
}this.__el={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cL){if(this._identifierToKeyCodeMap[cL]){return true;
}
if(cL.length!=1){return false;
}
if(cL>=bt&&cL<=bs){return true;
}
if(cL>=cH&&cL<=cG){return true;
}
switch(cL){case cK:case br:case bP:case bB:return true;
default:return false;
}}},members:{__em:null,__ei:null,__ej:null,__ek:null,__el:null,canHandleEvent:function(I,J){},registerEvent:function(S,T,U){},unregisterEvent:function(q,r,s){},_fireInputEvent:function(e,f){var g=this.__ei.getHandler(qx.event.handler.Focus);
var h=g.getActive();
if(!h||h.offsetWidth==0){h=g.getFocus();
}if(h&&h.offsetWidth!=0){var event=qx.event.Registration.createEvent(bF,qx.event.type.KeyInput,[e,h,f]);
this.__ei.dispatchEvent(h,event);
}if(this.__ej){qx.event.Registration.fireEvent(this.__ej,bH,qx.event.type.Data,[bF]);
}},_fireSequenceEvent:function(bh,bi,bj){var bk=this.__ei.getHandler(qx.event.handler.Focus);
var bm=bk.getActive();
if(!bm||bm.offsetWidth==0){bm=bk.getFocus();
}if(!bm||bm.offsetWidth==0){bm=this.__ei.getWindow().document.body;
}var event=qx.event.Registration.createEvent(bi,qx.event.type.KeySequence,[bh,bm,bj]);
this.__ei.dispatchEvent(bm,event);
if(qx.core.Variant.isSet(bx,bK)){if(bi==bz&&event.getDefaultPrevented()){var bl=bh.keyCode;

if(!(this._isNonPrintableKeyCode(bl)||bl==8||bl==9)){this._fireSequenceEvent(bh,by,bj);
}}}if(this.__ej){qx.event.Registration.fireEvent(this.__ej,bH,qx.event.type.Data,[bi]);
}},_initKeyObserver:function(){this.__em=qx.lang.Function.listener(this.__eo,this);
this.__en=qx.lang.Function.listener(this.__er,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ek,bv,this.__em);
Event.addNativeListener(this.__ek,bz,this.__em);
Event.addNativeListener(this.__ek,by,this.__en);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ek,bv,this.__em);
Event.removeNativeListener(this.__ek,bz,this.__em);
Event.removeNativeListener(this.__ek,by,this.__en);

for(var bg in (this.__eq||{})){var bf=this.__eq[bg];
Event.removeNativeListener(bf.target,by,bf.callback);
}delete (this.__eq);
},__eo:qx.core.Variant.select(bx,{"mshtml":function(K){K=window.event||K;
var N=K.keyCode;
var L=0;
var M=K.type;
if(!(this.__el[N]==bz&&M==bz)){this._idealKeyHandler(N,L,M,K);
}if(M==bz){if(this._isNonPrintableKeyCode(N)||N==8||N==9){this._idealKeyHandler(N,L,by,K);
}}this.__el[N]=M;
},"gecko":function(D){var H=this._keyCodeFix[D.keyCode]||D.keyCode;
var F=D.charCode;
var G=D.type;
if(qx.bom.client.Platform.WIN){var E=H?this._keyCodeToIdentifier(H):this._charCodeToIdentifier(F);

if(!(this.__el[E]==bz&&G==bz)){this._idealKeyHandler(H,F,G,D);
}this.__el[E]=G;
}else{this._idealKeyHandler(H,F,G,D);
}this.__ep(D.target,G,H);
},"webkit":function(l){var o=0;
var m=0;
var n=l.type;
if(qx.bom.client.Engine.VERSION<525.13){if(n==bv||n==bz){o=this._charCode2KeyCode[l.charCode]||l.keyCode;
}else{if(this._charCode2KeyCode[l.charCode]){o=this._charCode2KeyCode[l.charCode];
}else{m=l.charCode;
}}this._idealKeyHandler(o,m,n,l);
}else{o=l.keyCode;
if(!(this.__el[o]==bz&&n==bz)){this._idealKeyHandler(o,m,n,l);
}if(n==bz){if(this._isNonPrintableKeyCode(o)||o==8||o==9){this._idealKeyHandler(o,m,by,l);
}}this.__el[o]=n;
}},"opera":function(C){this._idealKeyHandler(C.keyCode,0,C.type,C);
}}),__ep:qx.core.Variant.select(bx,{"gecko":function(t,u,v){if(u===bz&&(v==33||v==34||v==38||v==40)&&t.type==bS&&t.tagName.toLowerCase()===bV&&t.getAttribute(bX)!==cb){if(!this.__eq){this.__eq={};
}var w=qx.core.ObjectRegistry.toHashCode(t);

if(this.__eq[w]){return;
}var self=this;
this.__eq[w]={target:t,callback:function(cM){qx.bom.Event.stopPropagation(cM);
self.__er(cM);
}};
qx.bom.Event.addNativeListener(t,by,this.__eq[w].callback);
}},"default":null}),__er:qx.core.Variant.select(bx,{"mshtml":function(a){a=window.event||a;

if(this._charCode2KeyCode[a.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[a.keyCode],0,a.type,a);
}else{this._idealKeyHandler(0,a.keyCode,a.type,a);
}},"gecko":function(bb){var be=this._keyCodeFix[bb.keyCode]||bb.keyCode;
var bc=bb.charCode;
var bd=bb.type;
this._idealKeyHandler(be,bc,bd,bb);
},"webkit":function(y){if(qx.bom.client.Engine.VERSION<525.13){var B=0;
var z=0;
var A=y.type;

if(A==bv||A==bz){B=this._charCode2KeyCode[y.charCode]||y.keyCode;
}else{if(this._charCode2KeyCode[y.charCode]){B=this._charCode2KeyCode[y.charCode];
}else{z=y.charCode;
}}this._idealKeyHandler(B,z,A,y);
}else{if(this._charCode2KeyCode[y.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[y.keyCode],0,y.type,y);
}else{this._idealKeyHandler(0,y.keyCode,y.type,y);
}}},"opera":function(k){if(this._keyCodeToIdentifierMap[k.keyCode]){this._idealKeyHandler(k.keyCode,0,k.type,k);
}else{this._idealKeyHandler(0,k.keyCode,k.type,k);
}}}),_idealKeyHandler:function(V,W,X,Y){if(!V&&!W){return;
}var ba;
if(V){ba=this._keyCodeToIdentifier(V);
this._fireSequenceEvent(Y,X,ba);
}else{ba=this._charCodeToIdentifier(W);
this._fireSequenceEvent(Y,by,ba);
this._fireInputEvent(Y,W);
}},_specialCharCodeMap:{8:bT,9:cj,13:bu,27:bW,32:ck},_keyCodeToIdentifierMap:{16:cq,17:cl,18:bR,20:bJ,224:co,37:cF,38:cC,39:cy,40:cD,33:bq,34:cr,35:bA,36:cm,45:bC,46:bO,112:ce,113:ch,114:bE,115:ca,116:cE,117:bG,118:bU,119:bD,120:cA,121:cz,122:cB,123:cx,144:bw,44:cJ,145:bN,19:cp,91:cv,93:bo},_numpadToCharCode:{96:bt.charCodeAt(0),97:bQ.charCodeAt(0),98:bM.charCodeAt(0),99:ci.charCodeAt(0),100:bp.charCodeAt(0),101:cf.charCodeAt(0),102:bL.charCodeAt(0),103:ct.charCodeAt(0),104:cd.charCodeAt(0),105:bs.charCodeAt(0),106:bP.charCodeAt(0),107:cK.charCodeAt(0),109:br.charCodeAt(0),110:cw.charCodeAt(0),111:bB.charCodeAt(0)},_charCodeA:cH.charCodeAt(0),_charCodeZ:cG.charCodeAt(0),_charCode0:bt.charCodeAt(0),_charCode9:bs.charCodeAt(0),_isNonPrintableKeyCode:function(c){return this._keyCodeToIdentifierMap[c]?true:false;
},_isIdentifiableKeyCode:function(x){if(x>=this._charCodeA&&x<=this._charCodeZ){return true;
}if(x>=this._charCode0&&x<=this._charCode9){return true;
}if(this._specialCharCodeMap[x]){return true;
}if(this._numpadToCharCode[x]){return true;
}if(this._isNonPrintableKeyCode(x)){return true;
}return false;
},_keyCodeToIdentifier:function(i){if(this._isIdentifiableKeyCode(i)){var j=this._numpadToCharCode[i];

if(j){return String.fromCharCode(j);
}return (this._keyCodeToIdentifierMap[i]||this._specialCharCodeMap[i]||String.fromCharCode(i));
}else{return cg;
}},_charCodeToIdentifier:function(b){return this._specialCharCodeMap[b]||String.fromCharCode(b).toUpperCase();
},_identifierToKeyCode:function(d){return qx.event.handler.Keyboard._identifierToKeyCodeMap[d]||d.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this._disposeFields(cu,bI,bn,cc);
},defer:function(O,P,Q){qx.event.Registration.addHandler(O);
if(!O._identifierToKeyCodeMap){O._identifierToKeyCodeMap={};

for(var R in P._keyCodeToIdentifierMap){O._identifierToKeyCodeMap[P._keyCodeToIdentifierMap[R]]=parseInt(R,10);
}
for(var R in P._specialCharCodeMap){O._identifierToKeyCodeMap[P._specialCharCodeMap[R]]=parseInt(R,10);
}}
if(qx.core.Variant.isSet(bx,cs)){P._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bx,cI)){P._keyCodeFix={12:P._identifierToKeyCode(bw)};
}else if(qx.core.Variant.isSet(bx,bY)){if(qx.bom.client.Engine.VERSION<525.13){P._charCode2KeyCode={63289:P._identifierToKeyCode(bw),63276:P._identifierToKeyCode(bq),63277:P._identifierToKeyCode(cr),63275:P._identifierToKeyCode(bA),63273:P._identifierToKeyCode(cm),63234:P._identifierToKeyCode(cF),63232:P._identifierToKeyCode(cC),63235:P._identifierToKeyCode(cy),63233:P._identifierToKeyCode(cD),63272:P._identifierToKeyCode(bO),63302:P._identifierToKeyCode(bC),63236:P._identifierToKeyCode(ce),63237:P._identifierToKeyCode(ch),63238:P._identifierToKeyCode(bE),63239:P._identifierToKeyCode(ca),63240:P._identifierToKeyCode(cE),63241:P._identifierToKeyCode(bG),63242:P._identifierToKeyCode(bU),63243:P._identifierToKeyCode(bD),63244:P._identifierToKeyCode(cA),63245:P._identifierToKeyCode(cz),63246:P._identifierToKeyCode(cB),63247:P._identifierToKeyCode(cx),63248:P._identifierToKeyCode(cJ),3:P._identifierToKeyCode(bu),12:P._identifierToKeyCode(bw),13:P._identifierToKeyCode(bu)};
}else{P._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var F="qx.client",E="mouseup",D="mousedown",C="click",B="contextmenu",A="dblclick",z="mousewheel",y="mouseover",x="mouseout",w="DOMMouseScroll",q="mousemove",v="mshtml|webkit|opera",t="useraction",p="__ez",o="__es",s="__et",r="qx.event.handler.Mouse",u="gecko|webkit",n="__eu";
qx.Class.define(r,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(m){arguments.callee.base.call(this);
this.__es=m;
this.__et=m.getWindow();
this.__eu=this.__et.document.documentElement;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ev:null,__ew:null,__ex:null,__ey:null,__ez:null,__es:null,__et:null,__eu:null,canHandleEvent:function(e,f){},registerEvent:function(I,J,K){},unregisterEvent:function(W,X,Y){},__eA:function(j,k,l){if(!l){l=j.target||j.srcElement;
}if(l&&l.nodeType){qx.event.Registration.fireEvent(l,k||j.type,qx.event.type.Mouse,[j,l,null,true,true]);
}qx.event.Registration.fireEvent(this.__et,t,qx.event.type.Data,[k||j.type]);
},_initButtonObserver:function(){this.__ev=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eu,D,this.__ev);
Event.addNativeListener(this.__eu,E,this.__ev);
Event.addNativeListener(this.__eu,C,this.__ev);
Event.addNativeListener(this.__eu,A,this.__ev);
Event.addNativeListener(this.__eu,B,this.__ev);
},_initMoveObserver:function(){this.__ew=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eu,q,this.__ew);
Event.addNativeListener(this.__eu,y,this.__ew);
Event.addNativeListener(this.__eu,x,this.__ew);
},_initWheelObserver:function(){this.__ex=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var a=qx.core.Variant.isSet(F,v)?z:w;
Event.addNativeListener(this.__eu,a,this.__ex);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eu,D,this.__ev);
Event.removeNativeListener(this.__eu,E,this.__ev);
Event.removeNativeListener(this.__eu,C,this.__ev);
Event.removeNativeListener(this.__eu,A,this.__ev);
Event.removeNativeListener(this.__eu,B,this.__ev);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eu,q,this.__ew);
Event.removeNativeListener(this.__eu,y,this.__ew);
Event.removeNativeListener(this.__eu,x,this.__ew);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var G=qx.core.Variant.isSet(F,v)?z:w;
Event.removeNativeListener(this.__eu,G,this.__ex);
},_onMoveEvent:function(ba){this.__eA(ba);
},_onButtonEvent:function(T){var U=T.type;
var V=T.target||T.srcElement;
if(qx.core.Variant.isSet(F,u)){if(V&&V.nodeType==3){V=V.parentNode;
}}
if(this.__eB){this.__eB(T,U,V);
}
if(this.__eD){this.__eD(T,U,V);
}this.__eA(T,U,V);

if(this.__eC){this.__eC(T,U,V);
}
if(this.__eE){this.__eE(T,U,V);
}this.__ey=U;
},_onWheelEvent:function(H){this.__eA(H,z);
},__eB:qx.core.Variant.select(F,{"webkit":function(g,h,i){if(h==B){this.__eA(g,D,i);
this.__eA(g,E,i);
}},"default":null}),__eC:qx.core.Variant.select(F,{"opera":function(b,c,d){if(c==E&&b.button==2){this.__eA(b,B,d);
}},"default":null}),__eD:qx.core.Variant.select(F,{"mshtml":function(Q,R,S){if(R==E&&this.__ey==C){this.__eA(Q,D,S);
}else if(R==A){this.__eA(Q,C,S);
}},"default":null}),__eE:qx.core.Variant.select(F,{"mshtml":null,"default":function(M,N,O){switch(N){case D:this.__ez=O;
break;
case E:if(O!==this.__ez){var P=qx.dom.Hierarchy.getCommonParent(O,this.__ez);
this.__eA(M,C,P);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(o,s,n,p);
},defer:function(L){qx.event.Registration.addHandler(L);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(h,i,j){},unregisterEvent:function(d,e,f){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var L="alias",K="copy",J="blur",I="mouseout",H="keydown",G="Ctrl",F="Shift",E="mousemove",D="move",C="mouseover",bk="Alt",bj="keyup",bi="mouseup",bh="dragend",bg="on",bf="mousedown",be="qxDraggable",bd="drag",bc="__eT",bb="drop",S="qxDroppable",T="__eF",Q="qx.event.handler.DragDrop",R="droprequest",O="__eX",P="dragstart",M="__eJ",N="__eL",U="dragchange",V="__eG",X="dragleave",W="__eM",ba="dragover",Y="__eK";
qx.Class.define(Q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){arguments.callee.base.call(this);
this.__eF=i;
this.__eG=i.getWindow().document.documentElement;
this.__eF.addListener(this.__eG,bf,this._onMouseDown,this);
this.__eI();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(br,bs){},registerEvent:function(bl,bm,bn){},unregisterEvent:function(o,p,q){},addType:function(bq){this.__eJ[bq]=true;
},addAction:function(r){this.__eK[r]=true;
},supportsType:function(j){return !!this.__eJ[j];
},supportsAction:function(bt){return !!this.__eK[bt];
},getData:function(d){if(!this.__eW||!this.__eX){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__eJ[d]){throw new Error("Unsupported data type: "+d+"!");
}
if(!this.__eM[d]){this.__eH=d;
this.__eP(R,this.__eT,false);
}
if(!this.__eM[d]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__eM[d]||null;
},getCurrentAction:function(){return this.__eO;
},addData:function(b,c){this.__eM[b]=c;
},getCurrentType:function(){return this.__eH;
},__eI:function(){this.__eJ={};
this.__eK={};
this.__eL={};
this.__eM={};
},__eN:function(){var h=this.__eK;
var f=this.__eL;
var g=null;

if(this.__eW){if(f.Shift&&f.Ctrl&&h.alias){g=L;
}else if(f.Shift&&f.Alt&&h.copy){g=K;
}else if(f.Shift&&h.move){g=D;
}else if(f.Alt&&h.alias){g=L;
}else if(f.Ctrl&&h.copy){g=K;
}else if(h.move){g=D;
}else if(h.copy){g=K;
}else if(h.alias){g=L;
}}
if(g!=this.__eO){this.__eO=g;
this.__eP(U,this.__eT,false);
}},__eP:function(t,u,v,w){var y=qx.event.Registration;
var x=y.createEvent(t,qx.event.type.Drag,[v,w]);

if(this.__eT!==this.__eX){if(u==this.__eT){x.setRelatedTarget(this.__eX);
}else{x.setRelatedTarget(this.__eT);
}}return y.dispatchEvent(u,x);
},__eQ:function(k){while(k&&k.nodeType==1){if(k.getAttribute(be)==bg){return k;
}k=k.parentNode;
}return null;
},__eR:function(a){while(a&&a.nodeType==1){if(a.getAttribute(S)==bg){return a;
}a=a.parentNode;
}return null;
},__eS:function(){this.__eT=null;
this.__eF.removeListener(this.__eG,E,this._onMouseMove,this,true);
this.__eF.removeListener(this.__eG,bi,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,J,this._onWindowBlur,this);
this.__eI();
},__eU:function(){if(this.__eV){this.__eF.removeListener(this.__eG,C,this._onMouseOver,this,true);
this.__eF.removeListener(this.__eG,I,this._onMouseOut,this,true);
this.__eF.removeListener(this.__eG,H,this._onKeyDown,this,true);
this.__eF.removeListener(this.__eG,bj,this._onKeyUp,this,true);
this.__eP(bh,this.__eT,false);
this.__eV=false;
}this.__eW=false;
this.__eX=null;
this.__eS();
},__eW:false,_onWindowBlur:function(e){this.__eU();
},_onKeyDown:function(e){var B=e.getKeyIdentifier();

switch(B){case bk:case G:case F:if(!this.__eL[B]){this.__eL[B]=true;
this.__eN();
}}},_onKeyUp:function(e){var z=e.getKeyIdentifier();

switch(z){case bk:case G:case F:if(this.__eL[z]){this.__eL[z]=false;
this.__eN();
}}},_onMouseDown:function(e){if(this.__eV){return;
}var n=this.__eQ(e.getTarget());

if(n){this.__eY=e.getDocumentLeft();
this.__fa=e.getDocumentTop();
this.__eT=n;
this.__eF.addListener(this.__eG,E,this._onMouseMove,this,true);
this.__eF.addListener(this.__eG,bi,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,J,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__eW){this.__eP(bb,this.__eX,false,e);
}if(this.__eV){e.stopPropagation();
}this.__eU();
},_onMouseMove:function(e){if(this.__eV){if(!this.__eP(bd,this.__eT,true,e)){this.__eU();
}}else{if(Math.abs(e.getDocumentLeft()-this.__eY)>3||Math.abs(e.getDocumentTop()-this.__fa)>3){if(this.__eP(P,this.__eT,true,e)){this.__eV=true;
this.__eF.addListener(this.__eG,C,this._onMouseOver,this,true);
this.__eF.addListener(this.__eG,I,this._onMouseOut,this,true);
this.__eF.addListener(this.__eG,H,this._onKeyDown,this,true);
this.__eF.addListener(this.__eG,bj,this._onKeyUp,this,true);
var s=this.__eL;
s.Ctrl=e.isCtrlPressed();
s.Shift=e.isShiftPressed();
s.Alt=e.isAltPressed();
this.__eN();
}else{this.__eP(bh,this.__eT,false);
this.__eS();
}}}},_onMouseOver:function(e){var l=e.getTarget();
var m=this.__eR(l);

if(m&&m!=this.__eX){this.__eW=this.__eP(ba,m,true,e);
this.__eX=m;
this.__eN();
}},_onMouseOut:function(e){var bo=e.getTarget();
var bp=this.__eR(bo);

if(bp&&bp==this.__eX){this.__eP(X,this.__eX,false,e);
this.__eX=null;
this.__eW=false;
this.__eN();
}}},destruct:function(){this._disposeFields(bc,O,T,V,M,Y,N,W);
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var x="-",w="qx.event.handler.Element",v="_manager",u="_registeredEvents";
qx.Class.define(w,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){arguments.callee.base.call(this);
this._manager=n;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(o,p,q){var t=qx.core.ObjectRegistry.toHashCode(o);
var r=t+x+p;
var s=qx.lang.Function.listener(this._onNative,this,r);
qx.bom.Event.addNativeListener(o,p,s);
this._registeredEvents[r]={element:o,type:p,listener:s};
},unregisterEvent:function(g,h,i){var l=this._registeredEvents;

if(!l){return;
}var m=qx.core.ObjectRegistry.toHashCode(g);
var j=m+x+h;
var k=this._registeredEvents[j];
qx.bom.Event.removeNativeListener(g,h,k.listener);
delete this._registeredEvents[j];
},_onNative:function(c,d){var f=this._registeredEvents;

if(!f){return;
}var e=f[d];
qx.event.Registration.fireNonBubblingEvent(e.element,e.type,qx.event.type.Native,[c]);
}},destruct:function(){var y;
var z=this._registeredEvents;

for(var A in z){y=z[A];
qx.bom.Event.removeNativeListener(y.element,y.type,y.listener);
}this._disposeFields(v,u);
},defer:function(B){qx.event.Registration.addHandler(B);
}});
})();
(function(){var p="__fb",o="qx.event.handler.Appear",n="__fc",m="disappear",l="appear";
qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){arguments.callee.base.call(this);
this.__fb=f;
this.__fc={};
qx.event.handler.Appear.__fd[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fd:{},refresh:function(){var q=this.__fd;

for(var r in q){q[r].refresh();
}}},members:{canHandleEvent:function(x,y){},registerEvent:function(a,b,c){var d=qx.core.ObjectRegistry.toHashCode(a);
var e=this.__fc;

if(e&&!e[d]){e[d]=a;
a.$$displayed=a.offsetWidth>0;
}},unregisterEvent:function(s,t,u){var v=qx.core.ObjectRegistry.toHashCode(s);
var w=this.__fc;

if(!w){return;
}
if(w[v]){delete w[v];
s.$$displayed=null;
}},refresh:function(){var j=this.__fc;
var k;

for(var i in j){k=j[i];
var g=k.offsetWidth>0;

if((!!k.$$displayed)!==g){k.$$displayed=g;
var h=qx.event.Registration.createEvent(g?l:m);
this.__fb.dispatchEvent(k,h);
}}}},destruct:function(){this._disposeFields(p,n);
delete qx.event.handler.Appear.__fd[this.$$hash];
},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var N="mshtml",M="",L="qx.client",K=">",J="<",I=" ",H="='",G="http://www.w3.org/1999/xhtml",F="qx.bom.Element",E="div",C="' ",D="></";
qx.Class.define(F,{statics:{__fe:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,q,r){if(!r){r=window;
}
if(!name){throw new Error("The tag name is missing!");
}var t=this.__fe;
var s=M;

for(var v in q){if(t[v]){s+=v+H+q[v]+C;
}}var w;
if(s!=M){if(qx.bom.client.Engine.MSHTML){w=r.document.createElement(J+name+I+s+K);
}else{var u=r.document.createElement(E);
u.innerHTML=J+name+I+s+D+name+K;
w=u.firstChild;
}}else{if(r.document.createElementNS){w=r.document.createElementNS(G,name);
}else{w=r.document.createElement(name);
}}
for(var v in q){if(!t[v]){qx.bom.element.Attribute.set(w,v,q[v]);
}}return w;
},empty:function(P){return P.innerHTML=M;
},addListener:function(e,f,g,self,h){return qx.event.Registration.addListener(e,f,g,self,h);
},removeListener:function(a,b,c,self,d){return qx.event.Registration.removeListener(a,b,c,self,d);
},removeListenerById:function(n,o){return qx.event.Registration.removeListenerById(n,o);
},hasListener:function(x,y,z){return qx.event.Registration.hasListener(x,y,z);
},focus:function(k){qx.event.Registration.getManager(k).getHandler(qx.event.handler.Focus).focus(k);
},blur:function(p){qx.event.Registration.getManager(p).getHandler(qx.event.handler.Focus).blur(p);
},activate:function(A){qx.event.Registration.getManager(A).getHandler(qx.event.handler.Focus).activate(A);
},deactivate:function(B){qx.event.Registration.getManager(B).getHandler(qx.event.handler.Focus).deactivate(B);
},capture:function(m){qx.event.Registration.getManager(m).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(m);
},releaseCapture:function(O){qx.event.Registration.getManager(O).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(O);
},clone:function(Q,R){var U;

if(R||(qx.core.Variant.isSet(L,N)&&!qx.xml.Document.isXmlDocument(Q))){var Y=qx.event.Registration.getManager(Q);
var S=qx.dom.Hierarchy.getDescendants(Q);
S.push(Q);
}if(qx.core.Variant.isSet(L,N)){for(var i=0,l=S.length;i<l;i++){Y.toggleAttachedEvents(S[i],false);
}}var U=Q.cloneNode(true);
if(qx.core.Variant.isSet(L,N)){for(var i=0,l=S.length;i<l;i++){Y.toggleAttachedEvents(S[i],true);
}}if(R===true){var bc=qx.dom.Hierarchy.getDescendants(U);
bc.push(U);
var T,W,bb,V;

for(var i=0,ba=S.length;i<ba;i++){bb=S[i];
T=Y.serializeListeners(bb);

if(T.length>0){W=bc[i];

for(var j=0,X=T.length;j<X;j++){V=T[j];
Y.addListener(W,V.type,V.handler,V.self,V.capture);
}}}}return U;
}}});
})();
(function(){var S="qx.client",R="blur",Q="focus",P="mousedown",O="on",N="mouseup",M="DOMFocusOut",L="DOMFocusIn",K="selectstart",J="onmousedown",bq="onfocusout",bp="onfocusin",bo="onmouseup",bn="onselectstart",bm="draggesture",bl="_document",bk="_root",bj="qx.event.handler.Focus",bi="_applyFocus",bh="_window",ba="deactivate",bb="_applyActive",X="focusin",Y="qxSelectable",V="tabIndex",W="off",T="_body",U="activate",bc="focusout",bd="__mouseActive",bf="_manager",be="qxKeepFocus",bg="qxKeepActive";
qx.Class.define(bj,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this._manager=g;
this._window=g.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bb,nullable:true},focus:{apply:bi,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{canHandleEvent:function(l,m){},registerEvent:function(bB,bC,bD){},unregisterEvent:function(v,w,x){},focus:function(B){try{B.focus();
}catch(bE){}this.setFocus(B);
this.setActive(B);
},activate:function(bH){this.setActive(bH);
},blur:function(n){try{n.blur();
}catch(bG){}
if(this.getActive()===n){this.resetActive();
}
if(this.getFocus()===n){this.resetFocus();
}},deactivate:function(a){if(this.getActive()===a){this.resetActive();
}},tryActivate:function(o){var p=this.__fC(o);

if(p){this.setActive(p);
}},__ff:function(bt,bu,bv,bw){var by=qx.event.Registration;
var bx=by.createEvent(bv,qx.event.type.Focus,[bt,bu,bw]);
by.dispatchEvent(bt,bx);
},_windowFocused:true,__fg:function(){if(this._windowFocused){this._windowFocused=false;
this.__ff(this._window,null,R,false);
}},__fh:function(){if(!this._windowFocused){this._windowFocused=true;
this.__ff(this._window,null,Q,false);
}},_initObserver:qx.core.Variant.select(S,{"gecko":function(){this.__fi=qx.lang.Function.listener(this.__fx,this);
this.__fj=qx.lang.Function.listener(this.__fy,this);
this.__fk=qx.lang.Function.listener(this.__fw,this);
this.__fl=qx.lang.Function.listener(this.__fv,this);
this.__fm=qx.lang.Function.listener(this.__fq,this);
this._document.addEventListener(P,this.__fi,true);
this._document.addEventListener(N,this.__fj,true);
this._window.addEventListener(Q,this.__fk,true);
this._window.addEventListener(R,this.__fl,true);
this._window.addEventListener(bm,this.__fm,true);
},"mshtml":function(){this.__fi=qx.lang.Function.listener(this.__fx,this);
this.__fj=qx.lang.Function.listener(this.__fy,this);
this.__fn=qx.lang.Function.listener(this.__fr,this);
this.__fo=qx.lang.Function.listener(this.__fs,this);
this.__fp=qx.lang.Function.listener(this.__fz,this);
this._document.attachEvent(J,this.__fi);
this._document.attachEvent(bo,this.__fj);
this._document.attachEvent(bp,this.__fn);
this._document.attachEvent(bq,this.__fo);
this._document.attachEvent(bn,this.__fp);
},"webkit":function(){this.__fi=qx.lang.Function.listener(this.__fx,this);
this.__fj=qx.lang.Function.listener(this.__fy,this);
this.__fo=qx.lang.Function.listener(this.__fs,this);
this.__fk=qx.lang.Function.listener(this.__fw,this);
this.__fl=qx.lang.Function.listener(this.__fv,this);
this.__fp=qx.lang.Function.listener(this.__fz,this);
this._document.addEventListener(P,this.__fi,true);
this._document.addEventListener(N,this.__fj,true);
this._document.addEventListener(K,this.__fp,false);
this._window.addEventListener(M,this.__fo,true);
this._window.addEventListener(Q,this.__fk,true);
this._window.addEventListener(R,this.__fl,true);
},"opera":function(){this.__fi=qx.lang.Function.listener(this.__fx,this);
this.__fj=qx.lang.Function.listener(this.__fy,this);
this.__fn=qx.lang.Function.listener(this.__fr,this);
this.__fo=qx.lang.Function.listener(this.__fs,this);
this._document.addEventListener(P,this.__fi,true);
this._document.addEventListener(N,this.__fj,true);
this._window.addEventListener(L,this.__fn,true);
this._window.addEventListener(M,this.__fo,true);
}}),_stopObserver:qx.core.Variant.select(S,{"gecko":function(){this._document.removeEventListener(P,this.__fi,true);
this._document.removeEventListener(N,this.__fj,true);
this._window.removeEventListener(Q,this.__fk,true);
this._window.removeEventListener(R,this.__fl,true);
this._window.removeEventListener(bm,this.__fm,true);
},"mshtml":function(){this._document.detachEvent(J,this.__fi);
this._document.detachEvent(bo,this.__fj);
this._document.detachEvent(bp,this.__fn);
this._document.detachEvent(bq,this.__fo);
this._document.detachEvent(bn,this.__fp);
},"webkit":function(){this._document.removeEventListener(P,this.__fi,true);
this._document.removeEventListener(K,this.__fp,false);
this._window.removeEventListener(L,this.__fn,true);
this._window.removeEventListener(M,this.__fo,true);
this._window.removeEventListener(Q,this.__fk,true);
this._window.removeEventListener(R,this.__fl,true);
},"opera":function(){this._document.removeEventListener(P,this.__fi,true);
this._window.removeEventListener(L,this.__fn,true);
this._window.removeEventListener(M,this.__fo,true);
this._window.removeEventListener(Q,this.__fk,true);
this._window.removeEventListener(R,this.__fl,true);
}}),__fq:qx.core.Variant.select(S,{"gecko":function(e){if(!this.__fD(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null}),__fr:qx.core.Variant.select(S,{"mshtml":function(e){this.__fh();
var j=e.srcElement;
var i=this.__fB(j);

if(i){this.setFocus(i);
}this.tryActivate(j);
},"opera":function(e){var y=e.target;

if(y==this._document||y==this._window){this.__fh();

if(this.__ft){this.setFocus(this.__ft);
delete this.__ft;
}
if(this.__fu){this.setActive(this.__fu);
delete this.__fu;
}}else{this.setFocus(y);
this.tryActivate(y);
if(!this.__fD(y)){y.selectionStart=0;
y.selectionEnd=0;
}}},"default":null}),__fs:qx.core.Variant.select(S,{"mshtml":function(e){if(!e.toElement){this.__fg();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bL=e.target;

if(bL===this.getFocus()){this.resetFocus();
}
if(bL===this.getActive()){this.resetActive();
}},"opera":function(e){var b=e.target;

if(b==this._document){this.__fg();
this.__ft=this.getFocus();
this.__fu=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(b===this.getFocus()){this.resetFocus();
}
if(b===this.getActive()){this.resetActive();
}}},"default":null}),__fv:qx.core.Variant.select(S,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__fg();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__fg();
this.__ft=this.getFocus();
this.__fu=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null}),__fw:qx.core.Variant.select(S,{"gecko":function(e){var bF=e.target;

if(bF===this._window||bF===this._document){this.__fh();
bF=this._body;
}this.setFocus(bF);
this.tryActivate(bF);
},"webkit":function(e){var h=e.target;

if(h===this._window||h===this._document){this.__fh();

if(this.__ft){this.setFocus(this.__ft);
delete this.__ft;
}
if(this.__fu){this.setActive(this.__fu);
delete this.__fu;
}}else{this.setFocus(h);
this.tryActivate(h);
}},"default":null}),__fx:qx.core.Variant.select(S,{"gecko":function(e){var u=e.target;
var s=this.__fB(u);
var t=this.__fD(u);

if(!t){qx.bom.Event.preventDefault(e);
if(s){s.focus();
}}else if(!s){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var A=e.srcElement;
var z=this.__fB(A);

if(z){if(!this.__fD(A)){A.unselectable=O;
document.selection.empty();
z.focus();
}}else{qx.bom.Event.preventDefault(e);
if(!this.__fD(A)){A.unselectable=O;
}}},"webkit":function(e){var bN=e.target;
var bM=this.__fB(bN);

if(bM){this.setFocus(bM);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var I=e.target;
var G=this.__fB(I);

if(!this.__fD(I)){qx.bom.Event.preventDefault(e);
if(G){var H=this.getFocus();

if(H&&H.selectionEnd){H.selectionStart=0;
H.selectionEnd=0;
H.blur();
}if(G){this.setFocus(G);
}}}else if(G){this.setFocus(G);
}},"default":null}),__fy:qx.core.Variant.select(S,{"mshtml":function(e){var F=e.srcElement;

if(F.unselectable){F.unselectable=W;
}this.tryActivate(F);
},"gecko":function(e){var k=e.target;

while(k&&k.offsetWidth===undefined){k=k.parentNode;
}
if(k){this.tryActivate(k);
}},"webkit|opera":function(e){this.tryActivate(e.target);
},"default":null}),__fz:qx.core.Variant.select(S,{"mshtml|webkit":function(e){if(!this.__fD(e.srcElement)){qx.bom.Event.preventDefault(e);
}},"default":null}),__fA:function(c){var d=qx.bom.element.Attribute.get(c,V);

if(d>=1){return true;
}var f=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(d>=0&&f[c.tagName]){return true;
}return false;
},__fB:function(bI){while(bI&&bI.nodeType===1){if(bI.getAttribute(be)==O){return null;
}
if(this.__fA(bI)){return bI;
}bI=bI.parentNode;
}return this._body;
},__fC:function(br){var bs=br;

while(br&&br.nodeType===1){if(br.getAttribute(bg)==O){return null;
}br=br.parentNode;
}return bs;
},__fD:function(bJ){while(bJ&&bJ.nodeType===1){var bK=bJ.getAttribute(Y);

if(bK!=null){return bK===O;
}bJ=bJ.parentNode;
}return true;
},_applyActive:function(bz,bA){if(bA){this.__ff(bA,bz,ba,true);
}
if(bz){this.__ff(bz,bA,U,true);
}},_applyFocus:function(q,r){if(r){this.__ff(r,q,bc,true);
}
if(q){this.__ff(q,r,X,true);
}if(r){this.__ff(r,q,R,false);
}
if(q){this.__ff(q,r,Q,false);
}}},destruct:function(){this._stopObserver();
this._disposeFields(bf,bh,bl,bk,T,bd);
},defer:function(C){qx.event.Registration.addHandler(C);
var D=C.FOCUSABLE_ELEMENTS;

for(var E in D){D[E.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var x="qx.client",w="mshtml",v="readOnly",u="accessKey",t="qx.bom.element.Attribute",s="rowSpan",r="vAlign",q="className",p="textContent",o="'",N="htmlFor",M="longDesc",L="cellSpacing",K="frameBorder",J="='",I="",H="useMap",G="innerText",F="innerHTML",E="tabIndex",C="cssText",D="dateTime",A="maxLength",B="cellPadding",y="colSpan",z="style";
qx.Class.define(t,{statics:{__fE:{names:{"class":q,"for":N,html:F,text:qx.core.Variant.isSet(x,w)?G:p,colspan:y,rowspan:s,valign:r,datetime:D,accesskey:u,tabindex:E,maxlength:A,readonly:v,longdesc:M,cellpadding:B,cellspacing:L,frameborder:K,usemap:H},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},original:{href:1,src:1,type:1}},compile:function(e){var f=[];
var h=this.__fE.runtime;

for(var g in e){if(!h[g]){f.push(g,J,e[g],o);
}}return f.join(I);
},get:qx.core.Variant.select(x,{"mshtml":function(l,name){var n=this.__fE;
var m;
name=n.names[name]||name;
if(n.original[name]){m=l.getAttribute(name,2);
}else if(n.property[name]){m=l[name];
}else{m=l.getAttribute(name);
}if(n.bools[name]){return !!m;
}return m;
},"default":function(a,name){var c=this.__fE;
var b;
name=c.names[name]||name;
if(c.property[name]){b=a[name];

if(b==null){b=a.getAttribute(name);
}}else{b=a.getAttribute(name);
}if(c.bools[name]){return !!b;
}return b;
}}),set:function(i,name,j){var k=this.__fE;
name=k.names[name]||name;
if(k.bools[name]){j=!!j;
}if(k.property[name]){i[name]=j;
}else if(j===true){i.setAttribute(name,name);
}else if(j===false||j===null){i.removeAttribute(name);
}else if(qx.core.Variant.isSet(x,w)&&name==z){i.style.setAttribute(C,j);
}else{i.setAttribute(name,j);
}},reset:function(d,name){this.set(d,name,null);
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
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var k="qx.client",j="left",i="right",h="middle",g="dblclick",f="click",e="none",d="contextmenu",c="qx.event.type.Mouse";
qx.Class.define(c,{extend:qx.event.type.Dom,members:{init:function(l,m,n,o,p){arguments.callee.base.call(this,l,m,n,o,p);

if(!n){this._relatedTarget=qx.bom.Event.getRelatedTarget(l);
}return this;
},__fF:qx.core.Variant.select(k,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case f:case g:return j;
case d:return i;
default:return this.__fF[this._native.button]||e;
}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(k,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(k,{"mshtml":function(){var b=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(b);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
},getWheelDelta:qx.core.Variant.select(k,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
}})}});
})();
(function(){var c="qx.client",b="qx.event.type.Drag";
qx.Class.define(b,{extend:qx.event.type.Event,members:{init:function(k,l){arguments.callee.base.call(this,false,k);

if(l){this._native=l.getNativeEvent()||null;
this._originalTarget=l.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(h){var i=arguments.callee.base.call(this,h);
i._native=this._native;
return i;
},getDocumentLeft:qx.core.Variant.select(c,{"mshtml":function(){if(this._native==null){return 0;
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(c,{"mshtml":function(){if(this._native==null){return 0;
}var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(j);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(a){this.getManager().addType(a);
},addAction:function(d){this.getManager().addAction(d);
},supportsType:function(g){return this.getManager().supportsType(g);
},supportsAction:function(m){return this.getManager().supportsAction(m);
},addData:function(e,f){this.getManager().addData(e,f);
},getData:function(n){return this.getManager().getData(n);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var o="blur",n="losecapture",m="capture",k="__fI",j="click",h="__fH",g="qx.event.dispatch.MouseCapture",f="focus",e="scroll",d="__fG";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(u){arguments.callee.base.call(this);
this.__fG=u;
this.__fH=u.getWindow();
u.addListener(this.__fH,o,this.releaseCapture,this);
u.addListener(this.__fH,f,this.releaseCapture,this);
u.addListener(this.__fH,e,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fI:null,__fG:null,__fH:null,canDispatchEvent:function(b,event,c){return (this.__fI&&this.__fJ[c]);
},dispatchEvent:function(q,event,r){if(r==j){event.stopPropagation();
this.releaseCapture();
return;
}var s=this.__fG.getListeners(this.__fI,r,false);

if(s){event.setCurrentTarget(this.__fI);
event.setEventPhase(qx.event.type.Event.AT_TARGET);

for(var i=0,l=s.length;i<l;i++){var t=s[i].context||event.getCurrentTarget();
s[i].handler.call(t,event);
}}},__fJ:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(a){if(this.__fI===a){return;
}
if(this.__fI){this.releaseCapture();
}this.__fI=a;
qx.event.Registration.fireEvent(a,m,qx.event.type.Event,[true,false]);
},releaseCapture:function(){var v=this.__fI;

if(!v){return;
}this.__fI=null;
qx.event.Registration.fireEvent(v,n,qx.event.type.Event,[true,false]);
}},destruct:function(){this._disposeFields(k,d,h);
},defer:function(p){qx.event.Registration.addDispatcher(p);
}});
})();
(function(){var A="qx.client",z="",y="mshtml",x="'",w="SelectionLanguage",v="qx.xml.Document",u=" />",t="MSXML2.DOMDocument.3.0",s='<\?xml version="1.0" encoding="utf-8"?>\n<',r="MSXML2.XMLHTTP.3.0",n="MSXML2.XMLHTTP.6.0",q=" xmlns='",p="text/xml",m="XPath",k="MSXML2.DOMDocument.6.0",o="HTML";
qx.Bootstrap.define(v,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(F){if(F.nodeType===9){return F.documentElement.nodeName!==o;
}else if(F.ownerDocument){return this.isXmlDocument(F.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(A,{"mshtml":function(c,d){var e=new ActiveXObject(this.DOMDOC);
e.setProperty(w,m);

if(d){var f=s;
f+=d;

if(c){f+=q+c+x;
}f+=u;
e.loadXML(f);
}return e;
},"default":function(B,C){return document.implementation.createDocument(B||z,C||z,null);
}}),fromString:qx.core.Variant.select(A,{"mshtml":function(a){var b=qx.xml.Document.create();
b.loadXML(a);
return b;
},"default":function(D){var E=new DOMParser();
return E.parseFromString(D,p);
}})},defer:function(g){if(qx.core.Variant.isSet(A,y)){var h=[k,t];
var j=[n,r];

for(var i=0,l=h.length;i<l;i++){try{new ActiveXObject(h[i]);
new ActiveXObject(j[i]);
}catch(G){continue;
}g.DOMDOC=h[i];
g.XMLHTTP=j[i];
break;
}}}});
})();
(function(){var j="textarea",i="input",h="qx.client",g="character",f="qx.bom.Selection",e="#text",d="EndToEnd",c="button",b="body";
qx.Class.define(f,{statics:{getSelectionObject:qx.core.Variant.select(h,{"mshtml":function(B){return B.selection;
},"default":function(a){return qx.dom.Node.getWindow(a).getSelection();
}}),get:qx.core.Variant.select(h,{"mshtml":function(q){var r=qx.bom.Range.get(qx.dom.Node.getDocument(q));
return r.text;
},"default":function(o){if(qx.dom.Node.isElement(o)&&(o.nodeName.toLowerCase()==i||o.nodeName.toLowerCase()==j)){return o.value.substring(o.selectionStart,o.selectionEnd);
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(o)).toString();
}return null;
}}),getLength:qx.core.Variant.select(h,{"mshtml":function(s){var u=qx.bom.Selection.get(s);
var t=qx.util.StringSplit.split(u,/\r\n/);
return u.length-(t.length-1);
},"opera":function(v){var A,y,w;

if(qx.dom.Node.isElement(v)&&(v.nodeName.toLowerCase()==i||v.nodeName.toLowerCase()==j)){var z=v.selectionStart;
var x=v.selectionEnd;
A=v.value.substring(z,x);
y=x-z;
}else{A=qx.bom.Selection.get(v);
y=A.length;
}w=qx.util.StringSplit.split(A,/\r\n/);
return y-(w.length-1);
},"default":function(C){if(qx.dom.Node.isElement(C)&&(C.nodeName.toLowerCase()==i||C.nodeName.toLowerCase()==j)){return C.selectionEnd-C.selectionStart;
}else{return qx.bom.Selection.get(C).length;
}return null;
}}),set:qx.core.Variant.select(h,{"mshtml":function(K,L,M){var N;
if(qx.dom.Node.isDocument(K)){K=K.body;
}
if(qx.dom.Node.isElement(K)||qx.dom.Node.isText(K)){switch(K.nodeName.toLowerCase()){case i:case j:case c:if(M===undefined){M=K.value.length;
}
if(L>=0&&L<=K.value.length&&M>=0&&M<=K.value.length){N=qx.bom.Range.get(K);
N.collapse(true);
N.moveStart(g,L);
N.moveEnd(g,M);
N.select();
return true;
}break;
case e:if(M===undefined){M=K.nodeValue.length;
}
if(L>=0&&L<=K.nodeValue.length&&M>=0&&M<=K.nodeValue.length){N=qx.bom.Range.get(qx.dom.Node.getBodyElement(K));
N.moveToElementText(K.parentNode);
N.collapse(true);
N.moveStart(g,L);
N.moveEnd(g,M);
N.select();
return true;
}break;
default:if(M===undefined){M=K.childNodes.length-1;
}if(K.childNodes[L]&&K.childNodes[M]){N=qx.bom.Range.get(qx.dom.Node.getBodyElement(K));
N.moveToElementText(K.childNodes[L]);
N.collapse(true);
var O=qx.bom.Range.get(qx.dom.Node.getBodyElement(K));
O.moveToElementText(K.childNodes[M]);
N.setEndPoint(d,O);
N.select();
return true;
}}}return false;
},"default":function(D,E,F){var J=D.nodeName.toLowerCase();

if(qx.dom.Node.isElement(D)&&(J==i||J==j)){if(F===undefined){F=D.value.length;
}if(E>=0&&E<=D.value.length&&F>=0&&F<=D.value.length){D.select();
D.setSelectionRange(E,F);
return true;
}}else{var H=false;
var I=qx.dom.Node.getWindow(D).getSelection();
var G=qx.bom.Range.get(D);
if(qx.dom.Node.isText(D)){if(F===undefined){F=D.length;
}
if(E>=0&&E<D.length&&F>=0&&F<=D.length){H=true;
}}else if(qx.dom.Node.isElement(D)){if(F===undefined){F=D.childNodes.length-1;
}
if(E>=0&&D.childNodes[E]&&F>=0&&D.childNodes[F]){H=true;
}}else if(qx.dom.Node.isDocument(D)){D=D.body;

if(F===undefined){F=D.childNodes.length-1;
}
if(E>=0&&D.childNodes[E]&&F>=0&&D.childNodes[F]){H=true;
}}
if(H){if(!I.isCollapsed){I.collapseToStart();
}G.setStart(D,E);
if(qx.dom.Node.isText(D)){G.setEnd(D,F);
}else{G.setEndAfter(D.childNodes[F]);
}if(I.rangeCount>0){I.removeAllRanges();
}I.addRange(G);
return true;
}}return false;
}}),setAll:function(p){return qx.bom.Selection.set(p,0);
},clear:qx.core.Variant.select(h,{"mshtml":function(k){var l=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(k));
var m=qx.bom.Range.get(k);
var parent=m.parentElement();
var n=qx.bom.Range.get(qx.dom.Node.getDocument(k));
if(parent==n.parentElement()&&parent==k){l.empty();
}},"default":function(P){var R=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(P));
var T=P.nodeName.toLowerCase();
if(qx.dom.Node.isElement(P)&&(T==i||T==j)){P.setSelectionRange(0,0);
qx.bom.Element.blur(P);
}else if(qx.dom.Node.isDocument(P)||T==b){R.collapse(P.body?P.body:P,0);
}else{var S=qx.bom.Range.get(P);

if(!S.collapsed){var U;
var Q=S.commonAncestorContainer;
if(qx.dom.Node.isElement(P)&&qx.dom.Node.isText(Q)){U=Q.parentNode;
}else{U=Q;
}
if(U==P){R.collapse(P,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case j:case i:case c:case l:case f:case h:case g:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case e:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
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
qx.Class.define(b,{statics:{__fK:{},remove:function(e){delete this.__fK[e.$$hash];
},add:function(c){var d=this.__fK;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__fK;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__fK={};
}}});
})();
(function(){var g="qx.ui.core.queue.Visibility",f="visibility";
qx.Class.define(g,{statics:{__fL:{},__fM:{},remove:function(a){var b=a.$$hash;
delete this.__fM[b];
delete this.__fL[b];
},isVisible:function(c){return this.__fM[c.$$hash]||false;
},__fN:function(l){var n=this.__fM;
var m=l.$$hash;
var o;
if(l.isExcluded()){o=false;
}else{var parent=l.$$parent;

if(parent){o=this.__fN(parent);
}else{o=l.isRootWidget();
}}return n[m]=o;
},add:function(d){var e=this.__fL;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(f);
},flush:function(){var h=this.__fL;
var k=this.__fM;
for(var i in h){if(k[i]!=null){h[i].addChildrenToQueue(h);
}}var j={};

for(var i in h){j[i]=k[i];
k[i]=null;
}for(var i in h){if(k[i]==null){this.__fN(h[i]);
}if(k[i]&&k[i]!=j[i]){h[i].checkAppearanceNeeds();
}}this.__fL={};
}}});
})();
(function(){var f="appearance",e="qx.ui.core.queue.Appearance";
qx.Class.define(e,{statics:{__fO:{},remove:function(b){delete this.__fO[b.$$hash];
},add:function(c){var d=this.__fO;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(f);
},has:function(a){return !!this.__fO[a.$$hash];
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__fO;
var i;

for(var h in g){i=g[h];
delete g[h];
if(j.isVisible(i)){i.syncAppearance();
}else{i.$$stateChanges=true;
}}}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__fP:{},remove:function(z){delete this.__fP[z.$$hash];
},add:function(A){this.__fP[A.$$hash]=A;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var v=this.__fS();
for(var i=v.length-1;i>=0;i--){var w=v[i];
if(w.hasValidLayout()){continue;
}if(w.isRootWidget()&&!w.hasUserBounds()){var y=w.getSizeHint();
w.renderLayout(0,0,y.width,y.height);
}else{var x=w.getBounds();
w.renderLayout(x.left,x.top,x.width,x.height);
}}},getNestingLevel:function(j){var k=this.__fR;
var m=0;
var parent=j;
while(true){if(k[parent.$$hash]!=null){m+=k[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
m+=1;
}var l=m;

while(j&&j!==parent){k[j.$$hash]=l--;
j=j.$$parent;
}return m;
},__fQ:function(){var h=qx.ui.core.queue.Visibility;
this.__fR={};
var g=[];
var f=this.__fP;
var c,e;

for(var d in f){c=f[d];

if(h.isVisible(c)){e=this.getNestingLevel(c);
if(!g[e]){g[e]={};
}g[e][d]=c;
delete f[d];
}}return g;
},__fS:function(){var q=[];
var s=this.__fQ();

for(var p=s.length-1;p>=0;p--){if(!s[p]){continue;
}
for(var o in s[p]){var n=s[p][o];
if(p==0||n.isRootWidget()||n.hasUserBounds()){q.push(n);
n.invalidateLayoutCache();
continue;
}var u=n.getSizeHint(false);

if(u){n.invalidateLayoutCache();
var r=n.getSizeHint();
var t=(!n.getBounds()||u.minWidth!==r.minWidth||u.width!==r.width||u.maxWidth!==r.maxWidth||u.minHeight!==r.minHeight||u.height!==r.height||u.maxHeight!==r.maxHeight);
}else{t=true;
}
if(t){var parent=n.getLayoutParent();

if(!s[p-1]){s[p-1]={};
}s[p-1][parent.$$hash]=parent;
}else{q.push(n);
}}}return q;
}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__fT:{},add:function(e){var f=this.__fT;

if(f[e.$$hash]){return;
}f[e.$$hash]=e;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__fT;

for(var d in c){c[d].dispose();
delete c[d];
}for(var d in c){return;
}this.__fT={};
}}});
})();
(function(){var f="qx.ui.core.MChildrenHandling";
qx.Mixin.define(f,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(o){return this._indexOf(o);
},add:function(a,b){this._add(a,b);
},addAt:function(j,k,l){this._addAt(j,k,l);
},addBefore:function(c,d,e){this._addBefore(c,d,e);
},addAfter:function(g,h,i){this._addAfter(g,h,i);
},remove:function(n){this._remove(n);
},removeAt:function(m){this._removeAt(m);
},removeAll:function(){return this._removeAll();
}},statics:{remap:function(p){p.getChildren=p._getChildren;
p.hasChildren=p._hasChildren;
p.indexOf=p._indexOf;
p.add=p._add;
p.addAt=p._addAt;
p.addBefore=p._addBefore;
p.addAfter=p._addAfter;
p.remove=p._remove;
p.removeAt=p._removeAt;
p.removeAll=p._removeAll;
}}});
})();
(function(){var r="Integer",q="_applyDimension",p="Boolean",o="_applyStretching",n="_applyMargin",m="shorthand",l="_applyAlign",k="allowShrinkY",j="__fX",i="__fV",L="bottom",K="__gb",J="baseline",I="marginBottom",H="qx.ui.core.LayoutItem",G="center",F="marginTop",E="$$subparent",D="allowGrowX",C="middle",y="marginLeft",z="allowShrinkX",w="__ga",x="$$parent",u="top",v="right",s="marginRight",t="abstract",A="allowGrowY",B="left";
qx.Class.define(H,{type:t,extend:qx.core.Object,properties:{minWidth:{check:r,nullable:true,apply:q,init:null,themeable:true},width:{check:r,nullable:true,apply:q,init:null,themeable:true},maxWidth:{check:r,nullable:true,apply:q,init:null,themeable:true},minHeight:{check:r,nullable:true,apply:q,init:null,themeable:true},height:{check:r,nullable:true,apply:q,init:null,themeable:true},maxHeight:{check:r,nullable:true,apply:q,init:null,themeable:true},allowGrowX:{check:p,apply:o,init:true,themeable:true},allowShrinkX:{check:p,apply:o,init:true,themeable:true},allowGrowY:{check:p,apply:o,init:true,themeable:true},allowShrinkY:{check:p,apply:o,init:true,themeable:true},allowStretchX:{group:[D,z],mode:m,themeable:true},allowStretchY:{group:[A,k],mode:m,themeable:true},marginTop:{check:r,init:0,apply:n,themeable:true},marginRight:{check:r,init:0,apply:n,themeable:true},marginBottom:{check:r,init:0,apply:n,themeable:true},marginLeft:{check:r,init:0,apply:n,themeable:true},margin:{group:[F,s,I,y],mode:m,themeable:true},alignX:{check:[B,G,v],nullable:true,apply:l,themeable:true},alignY:{check:[u,C,L,J],nullable:true,apply:l,themeable:true}},members:{__fU:null,__fV:null,__fW:null,__fX:null,__fY:null,__ga:null,__gb:null,getBounds:function(){return this.__ga||this.__fV||null;
},clearSeparators:function(){},renderSeparator:function(g,h){},renderLayout:function(Y,top,ba,bb){var bc;
var bd=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bd=this._getHeightForWidth(ba);
}
if(bd!=null&&bd!==this.__fU){this.__fU=bd;
qx.ui.core.queue.Layout.add(this);
return null;
}var bf=this.__fV;

if(!bf){bf=this.__fV={};
}var be={};

if(Y!==bf.left||top!==bf.top){be.position=true;
bf.left=Y;
bf.top=top;
}
if(ba!==bf.width||bb!==bf.height){be.size=true;
bf.width=ba;
bf.height=bb;
}if(this.__fW){be.local=true;
delete this.__fW;
}
if(this.__fY){be.margin=true;
delete this.__fY;
}return be;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__fW;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__fW=true;
this.__fX=null;
},getSizeHint:function(M){var N=this.__fX;

if(N){return N;
}
if(M===false){return null;
}N=this.__fX=this._computeSizeHint();
if(this.__fU&&this.getHeight()==null){N.height=this.__fU;
}if(!this.getAllowShrinkX()){N.minWidth=N.width;
}else if(N.minWidth>N.width){N.width=N.minWidth;
}
if(!this.getAllowShrinkY()){N.minHeight=N.height;
}else if(N.minHeight>N.height){N.height=N.minHeight;
}if(!this.getAllowGrowX()){N.maxWidth=N.width;
}else if(N.width>N.maxWidth){N.width=N.maxWidth;
}
if(!this.getAllowGrowY()){N.maxHeight=N.height;
}else if(N.height>N.maxHeight){N.height=N.maxHeight;
}return N;
},_computeSizeHint:function(){var e=this.getMinWidth()||0;
var b=this.getMinHeight()||0;
var f=this.getWidth()||e;
var d=this.getHeight()||b;
var a=this.getMaxWidth()||Infinity;
var c=this.getMaxHeight()||Infinity;
return {minWidth:e,width:f,maxWidth:a,minHeight:b,height:d,maxHeight:c};
},_hasHeightForWidth:function(){var Q=this._getLayout();

if(Q){return Q.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(O){var P=this._getLayout();

if(P&&P.hasHeightForWidth()){return P.getHeightForWidth(O);
}return null;
},_applyMargin:function(){this.__fY=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__ga;
},setUserBounds:function(bg,top,bh,bi){this.__ga={left:bg,top:top,width:bh,height:bi};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__ga;
qx.ui.core.queue.Layout.add(this);
},__gc:{},setLayoutProperties:function(bj){if(bj==null){return;
}var bk=this.__gb;

if(!bk){bk=this.__gb={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(bj);
}for(var bl in bj){if(bj[bl]==null){delete bk[bl];
}else{bk[bl]=bj[bl];
}}},getLayoutProperties:function(){return this.__gb||this.__gc;
},clearLayoutProperties:function(){delete this.__gb;
},updateLayoutProperties:function(T){var U=this._getLayout();

if(U){var V;
U.invalidateChildrenCache();
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
},clone:function(){var R=arguments.callee.base.call(this);
var S=this.__gb;

if(S){R.__gb=qx.lang.Object.clone(S);
}return R;
},serialize:function(){var W=arguments.callee.base.call(this);
var X=this.__gb;

if(X){W.layoutProperties=qx.lang.Object.clone(X);
}return W;
}},destruct:function(){this._disposeFields(x,E,K,i,w,j);
}});
})();
(function(){var dC="px",dB="qx.event.type.Mouse",dA="Boolean",dz="qx.event.type.Drag",dy="visible",dx="qx.event.type.Focus",dw="Integer",dv="on",du="excluded",dt="object",cX="_applyPadding",cW="qx.event.type.Event",cV="zIndex",cU="hidden",cT="tabIndex",cS="contextmenu",cR="absolute",cQ="backgroundColor",cP="focused",cO="hovered",dJ="qx.event.type.KeySequence",dK="qx.client",dH="height",dI="div",dF="qx.event.type.Data",dG="disabled",dD="move",dE="dragstart",dL="dragchange",dM="position",dl="dragend",dk="resize",dn="Decorator",dm="width",dq="$$widget",dp="mshtml",ds="none",dr="default",dj="Color",di="top",bF="left",bG="String",bH="drag",bI="Use public 'getChildControl' instead!",bJ="_applyBackgroundColor",bK="_applyFocusable",bL="changeShadow",bM="__gk",bN="qx.event.type.KeyInput",bO="normal",dQ="Font",dP="__ge",dO="_applyShadow",dN="_applyEnabled",dU="_applySelectable",dT="_applyKeepActive",dS="Number",dR="_applyVisibility",dW="repeat",dV="qxDraggable",co="paddingLeft",cp="_applyDroppable",cm="__gd",cn="userSelect",cs="__gt",ct="#",cq="__gm",cr="_applyCursor",ck="changeVisibility",cl="_applyDraggable",bW="changeTextColor",bV="changeContextMenu",bY="paddingTop",bX="opacity",bS="hideFocus",bR="outline",bU="__gw",bT="_applyAppearance",bQ="overflowX",bP="_applyOpacity",cy="url(",cz=")",cA="qx.ui.core.Widget",cB="_applyFont",cu="cursor",cv="qxDroppable",cw="__gg",cx="changeZIndex",cC="overflowY",cD="changeEnabled",ch="changeFont",cg="off",cf="_applyDecorator",ce="_applyZIndex",cd="_applyTextColor",cc="qx.ui.menu.Menu",cb="Use public 'hasChildControl' instead!",ca="__go",cj="true",ci="widget",cE="changeDecorator",cF="_applyTabIndex",cG="changeAppearance",cH="__gi",cI="shorthand",cJ="/",cK="",cL="__gh",cM="_applyContextMenu",cN="qxSelectable",dc="paddingBottom",db="qx.ui.tooltip.ToolTip",da="qxKeepActive",cY="_applyKeepFocus",dg="webkit",df="paddingRight",de="changeBackgroundColor",dd="qxKeepFocus",dh="qx/static/blank.gif";
qx.Class.define(cA,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__gd=this._createContainerElement();
this.__ge=this.__gn();
this.__gd.add(this.__ge);
this.initFocusable();
this.initSelectable();
},events:{appear:cW,disappear:cW,resize:dF,move:dF,mousemove:dB,mouseover:dB,mouseout:dB,mousedown:dB,mouseup:dB,click:dB,dblclick:dB,contextmenu:dB,mousewheel:dB,keyup:dJ,keydown:dJ,keypress:dJ,keyinput:bN,focus:dx,blur:dx,focusin:dx,focusout:dx,activate:dx,deactivate:dx,capture:cW,losecapture:cW,drop:dz,dragleave:dz,dragover:dz,drag:dz,dragstart:dz,dragend:dz,dragchange:dz,droprequest:dz},properties:{paddingTop:{check:dw,init:0,apply:cX,themeable:true},paddingRight:{check:dw,init:0,apply:cX,themeable:true},paddingBottom:{check:dw,init:0,apply:cX,themeable:true},paddingLeft:{check:dw,init:0,apply:cX,themeable:true},padding:{group:[bY,df,dc,co],mode:cI,themeable:true},zIndex:{nullable:true,init:null,apply:ce,event:cx,check:dw,themeable:true},decorator:{nullable:true,init:null,apply:cf,event:cE,check:dn,themeable:true},shadow:{nullable:true,init:null,apply:dO,event:bL,check:dn,themeable:true},backgroundColor:{nullable:true,check:dj,apply:bJ,event:de,themeable:true},textColor:{nullable:true,check:dj,apply:cd,event:bW,themeable:true,inheritable:true},font:{nullable:true,apply:cB,check:dQ,event:ch,themeable:true,inheritable:true},opacity:{check:dS,apply:bP,themeable:true,nullable:true,init:null},cursor:{check:bG,apply:cr,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:db,nullable:true},visibility:{check:[dy,cU,du],init:dy,apply:dR,event:ck},enabled:{init:true,check:dA,inheritable:true,apply:dN,event:cD},anonymous:{init:false,check:dA},tabIndex:{check:dw,nullable:true,apply:cF},focusable:{check:dA,init:false,apply:bK},keepFocus:{check:dA,init:false,apply:cY},keepActive:{check:dA,init:false,apply:dT},draggable:{check:dA,init:false,apply:cl},droppable:{check:dA,init:false,apply:cp},selectable:{check:dA,init:false,apply:dU},contextMenu:{check:cc,apply:cM,nullable:true,event:bV},appearance:{check:bG,init:ci,apply:bT,event:cG}},statics:{DEBUG:false,getWidgetByElement:function(eN){try{while(eN){var eO=eN.$$widget;
if(eO!=null){return qx.core.ObjectRegistry.fromHashCode(eO);
}eN=eN.parentNode;
}}catch(gw){}return null;
},contains:function(parent,fP){while(fP){if(parent==fP){return true;
}fP=fP.getLayoutParent();
}return false;
},__gf:{}},members:{__gd:null,__ge:null,__gg:null,__gh:null,__gi:null,__gj:null,__gk:null,_getLayout:function(){return this.__gk;
},_setLayout:function(ey){{};

if(this.__gk){this.__gk.connectToWidget(null);
}
if(ey){ey.connectToWidget(this);
}this.__gk=ey;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}
if(this.$$parent){this.$$parent.getContentElement().remove(this.__gd);
}this.$$parent=parent||null;

if(parent){this.$$parent.getContentElement().add(this.__gd);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},__gl:null,renderLayout:function(gP,top,gQ,gR){var hd=arguments.callee.base.call(this,gP,top,gQ,gR);
if(!hd){return;
}var gT=this.__gd;
var content=this.__ge;
var ha=hd.size||this.__gl;
var he=dC;
if(hd.position){gT.setStyle(bF,gP+he);
gT.setStyle(di,top+he);
}if(hd.size){gT.setStyle(dm,gQ+he);
gT.setStyle(dH,gR+he);
}
if(ha||hd.local||hd.margin){var gS=this.getInsets();
var innerWidth=gQ-gS.left-gS.right;
var innerHeight=gR-gS.top-gS.bottom;
}
if(this.__gl){content.setStyle(bF,gS.left+he);
content.setStyle(di,gS.top+he);
}
if(ha){content.setStyle(dm,innerWidth+he);
content.setStyle(dH,innerHeight+he);
}
if(hd.size){var hc=this.__gi;

if(hc){hc.setStyles({width:gQ+dC,height:gR+dC});
}}
if(hd.size||this.__gl){var gW=qx.theme.manager.Decoration.getInstance();
var hf=this.getDecorator();

if(hf){var gX=this.__gg;
var gY=gW.resolve(hf);
gY.resize(gX.getDomElement(),gQ,gR);
}}
if(hd.size){var hb=this.getShadow();

if(hb){var gX=this.__gh;
var gY=gW.resolve(hb);
var gS=gY.getInsets();
var gV=gQ+gS.left+gS.right;
var gU=gR+gS.top+gS.bottom;
gY.resize(gX.getDomElement(),gV,gU);
}}
if(ha||hd.local||hd.margin){if(this.__gk&&this.hasLayoutChildren()){this.__gk.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(hd.position&&this.hasListener(dD)){this.fireDataEvent(dD,this.getBounds());
}
if(hd.size&&this.hasListener(dk)){this.fireDataEvent(dk,this.getBounds());
}delete this.__gl;
},__gm:null,clearSeparators:function(){var fx=this.__gm;

if(!fx){return;
}var fy=qx.ui.core.Widget.__gf;
var content=this.__ge;
var fw,fv;

for(var i=0,l=fx.length;i<l;i++){fv=fx[i];
fw=fv.$$separator;
if(!fy[fw]){fy[fw]=[fv];
}else{fy[fw].push(fv);
}content.remove(fv);
}fx.length=0;
},renderSeparator:function(gg,gh){var go=qx.ui.core.Widget.__gf;
var gm=qx.theme.manager.Decoration.getInstance();

if(typeof gg==dt){var gn=gg.toHashCode();
var gj=gg;
}else{var gn=gg;
var gj=gm.resolve(gg);
}var gk=go[gg];

if(gk&&gk.length>0){var gl=gk.pop();
}else{var gl=this.__gs(gj);
}this.__ge.add(gl);
gj.resize(gl.getDomElement(),gh.width,gh.height);
var gi=gl.getDomElement().style;
gi.left=gh.left+dC;
gi.top=gh.top+dC;
if(!this.__gm){this.__gm=[gl];
}else{this.__gm.push(gl);
}gl.$$separator=gn;
},_computeSizeHint:function(){var fH=this.getWidth();
var fG=this.getMinWidth();
var fC=this.getMaxWidth();
var fF=this.getHeight();
var fD=this.getMinHeight();
var fE=this.getMaxHeight();
var fI=this._getContentHint();
var fB=this.getInsets();
var fK=fB.left+fB.right;
var fJ=fB.top+fB.bottom;

if(fH==null){fH=fI.width+fK;
}
if(fF==null){fF=fI.height+fJ;
}
if(fG==null){fG=fK;

if(fI.minWidth!=null){fG+=fI.minWidth;
}}
if(fD==null){fD=fJ;

if(fI.minHeight!=null){fD+=fI.minHeight;
}}
if(fC==null){if(fI.maxWidth==null){fC=Infinity;
}else{fC=fI.maxWidth+fK;
}}
if(fE==null){if(fI.maxHeight==null){fE=Infinity;
}else{fE=fI.maxHeight+fJ;
}}return {width:fH,minWidth:fG,maxWidth:fC,height:fF,minHeight:fD,maxHeight:fE};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__gk){this.__gk.invalidateLayoutCache();
}},_getContentHint:function(){var en=this.__gk;

if(en){if(this.hasLayoutChildren()){var eo=en.getSizeHint();
var em;
return eo;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(fj){var fn=this.getInsets();
var fq=fn.left+fn.right;
var fp=fn.top+fn.bottom;
var fo=fj-fq;
var fl=this._getLayout();

if(fl&&fl.hasHeightForWidth()){var fk=fl.getHeightForWidth(fj);
}else{fk=this._getContentHeightForWidth(fo);
}var fm=fk+fp;
return fm;
},_getContentHeightForWidth:function(fc){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var bt=this.getPaddingRight();
var bu=this.getPaddingBottom();
var bz=this.getPaddingLeft();
var by=this.getDecorator();

if(by){var bx=qx.theme.manager.Decoration.getInstance();
var bw=bx.resolve(by);
var bv=bw.getInsets();
{};
top+=bv.top;
bt+=bv.right;
bu+=bv.bottom;
bz+=bv.left;
}return {"top":top,"right":bt,"bottom":bu,"left":bz};
},getInnerSize:function(){var ee=this.getBounds();

if(!ee){return null;
}var ed=this.getInsets();
return {width:ee.width-ed.left-ed.right,height:ee.height-ed.top-ed.bottom};
},show:function(){this.setVisibility(dy);
},hide:function(){this.setVisibility(cU);
},exclude:function(){this.setVisibility(du);
},isVisible:function(){return this.getVisibility()===dy;
},isHidden:function(){return this.getVisibility()!==dy;
},isExcluded:function(){return this.getVisibility()===du;
},_createContainerElement:function(){var eY=new qx.html.Element(dI);
{};
eY.setStyle(dM,cR);
eY.setStyle(cV,0);
eY.setAttribute(dq,this.toHashCode());
{};
return eY;
},__gn:function(){var gx=this._createContentElement();
{};
gx.setStyle(dM,cR);
gx.setStyle(cV,10);
return gx;
},_createContentElement:function(){var eq=new qx.html.Element(dI);
eq.setStyle(bQ,cU);
eq.setStyle(cC,cU);
return eq;
},getContainerElement:function(){return this.__gd;
},getContentElement:function(){return this.__ge;
},getDecoratorElement:function(){return this.__gg;
},__go:null,getLayoutChildren:function(){var W=this.__go;

if(!W){return this.__gp;
}var X;

for(var i=0,l=W.length;i<l;i++){var V=W[i];

if(V.hasUserBounds()||V.isExcluded()){if(X==null){X=W.concat();
}qx.lang.Array.remove(X,V);
}}return X||W;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var eK=this.__gk;

if(eK){eK.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var fd=this.__go;

if(!fd){return false;
}var fe;

for(var i=0,l=fd.length;i<l;i++){fe=fd[i];

if(!fe.hasUserBounds()&&!fe.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__gp:[],_getChildren:function(){return this.__go||this.__gp;
},_indexOf:function(fU){var fV=this.__go;

if(!fV){return -1;
}return fV.indexOf(fU);
},_hasChildren:function(){var eS=this.__go;
return eS!=null&&(!!eS[0]);
},addChildrenToQueue:function(hr){var hs=this.__go;

if(!hs){return;
}var ht;

for(var i=0,l=hs.length;i<l;i++){ht=hs[i];
hr[ht.$$hash]=ht;
ht.addChildrenToQueue(hr);
}},_add:function(fQ,fR){if(fQ.getLayoutParent()==this){qx.lang.Array.remove(this.__go,fQ);
}
if(this.__go){this.__go.push(fQ);
}else{this.__go=[fQ];
}this.__gq(fQ,fR);
},_addAt:function(M,N,O){if(!this.__go){this.__go=[];
}if(M.getLayoutParent()==this){qx.lang.Array.remove(this.__go,M);
}var P=this.__go[N];

if(P===M){return M.setLayoutProperties(O);
}
if(P){qx.lang.Array.insertBefore(this.__go,M,P);
}else{this.__go.push(M);
}this.__gq(M,O);
},_addBefore:function(dX,dY,ea){{};

if(dX==dY){return;
}
if(!this.__go){this.__go=[];
}if(dX.getLayoutParent()==this){qx.lang.Array.remove(this.__go,dX);
}qx.lang.Array.insertBefore(this.__go,dX,dY);
this.__gq(dX,ea);
},_addAfter:function(gr,gs,gt){{};

if(gr==gs){return;
}
if(!this.__go){this.__go=[];
}if(gr.getLayoutParent()==this){qx.lang.Array.remove(this.__go,gr);
}qx.lang.Array.insertAfter(this.__go,gr,gs);
this.__gq(gr,gt);
},_remove:function(hq){if(!this.__go){return;
}qx.lang.Array.remove(this.__go,hq);
this.__gr(hq);
},_removeAt:function(fa){if(!this.__go){throw new Error("This widget has no children!");
}var fb=this.__go[fa];
qx.lang.Array.removeAt(this.__go,fa);
this.__gr(fb);
return fb;
},_removeAll:function(){if(!this.__go){return;
}var ek=this.__go.concat();
this.__go.length=0;

for(var i=ek.length-1;i>=0;i--){this.__gr(ek[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__gq:function(gE,gF){{};
var parent=gE.getLayoutParent();

if(parent&&parent!=this){parent._remove(gE);
}gE.setLayoutParent(this);
if(gF){gE.setLayoutProperties(gF);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(gE);
}},__gr:function(ex){{};
ex.setLayoutParent(null);
if(this.__gk){this.__gk.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(ex);
}},capture:function(){this.__gd.capture();
},releaseCapture:function(){this.__gd.releaseCapture();
},_applyPadding:function(G,H,name){this.__gl=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__gi){return;
}var hg=this.__gi=new qx.html.Element;
{};
hg.setStyles({position:cR,top:0,left:0,zIndex:7});
var hh=this.getBounds();

if(hh){this.__gi.setStyles({width:hh.width+dC,height:hh.height+dC});
}if(qx.core.Variant.isSet(dK,dp)){hg.setStyles({backgroundImage:cy+qx.util.ResourceManager.toUri(dh)+cz,backgroundRepeat:dW});
}this.__gd.add(hg);
},__gs:function(gc){var gd=new qx.html.Element;
gd.setStyles({position:cR,top:0,left:0});
{};
gd.useMarkup(gc.getMarkup());
return gd;
},_applyDecorator:function(v,w){var E=qx.ui.core.Widget.__gf;
var B=qx.theme.manager.Decoration.getInstance();
var x=this.__gd;
var z=this.__gg;
if(!this.__gi){this._createProtectorElement();
}var C;

if(w){if(typeof w===dt){C=w.toHashCode();
}else{C=w;
w=B.resolve(w);
}}var D;

if(v){if(typeof v===dt){D=v.toHashCode();
{};
}else{D=v;
v=B.resolve(v);
}}if(w){if(!E[C]){E[C]=[];
}x.remove(z);
E[C].push(z);
}if(v){if(E[D]&&E[D].length>0){z=E[D].pop();
}else{z=this.__gs(v);
z.setStyle(cV,5);
}var y=this.getBackgroundColor();
v.tint(z.getDomElement(),y);
x.add(z);
this.__gg=z;
}else{delete this.__gg;
this._applyBackgroundColor(this.getBackgroundColor());
}if(v&&!w&&y){this.getContainerElement().setStyle(cQ,null);
}if(qx.ui.decoration.Util.insetsModified(w,v)){this.__gl=true;
qx.ui.core.queue.Layout.add(this);
}else if(v){var A=this.getBounds();

if(A){B.resolve(v).resize(z.getDomElement(),A.width,A.height);
this.__gi.setStyles({width:A.width+dC,height:A.height+dC});
}}},_applyShadow:function(bh,bi){var bs=qx.ui.core.Widget.__gf;
var bp=qx.theme.manager.Decoration.getInstance();
var bk=this.__gd;
var bq;

if(bi){if(typeof bi===dt){bq=bi.toHashCode();
}else{bq=bi;
bi=bp.resolve(bi);
}}var br;

if(bh){if(typeof bh===dt){br=bh.toHashCode();
}else{br=bh;
bh=bp.resolve(bh);
}}if(bi){if(!bs[bq]){bs[bq]=[];
}bk.remove(this.__gh);
bs[bq].push(this.__gh);
}if(bh){var bm;

if(bs[br]&&bs[br].length>0){bm=bs[br].pop();
}else{bm=this.__gs(bh);
}bk.add(bm);
this.__gh=bm;
var bo=bh.getInsets();
bm.setStyles({left:(-bo.left)+dC,top:(-bo.top)+dC});
var bn=this.getBounds();

if(bn){var bl=bn.width+bo.left+bo.right;
var bj=bn.height+bo.top+bo.bottom;
bh.resize(bm.getDomElement(),bl,bj);
}}else{delete this.__gh;
}},_applyTextColor:function(gy,gz){},_applyZIndex:function(q,r){this.__gd.setStyle(cV,q==null?0:q);
},_applyVisibility:function(bc,bd){if(bc===dy){this.__gd.show();
}else{this.__gd.hide();
}var parent=this.$$parent;

if(parent&&(bd==null||bc==null||bd===du||bc===du)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(et,eu){this.__gd.setStyle(bX,et==1?null:et);
},_applyCursor:function(er,es){if(er==null&&!this.isSelectable()){er=dr;
}this.__gd.setStyle(cu,er);
},_applyBackgroundColor:function(eB,eC){var eJ=this.getDecorator();
var eI=this.getShadow();
var eF=this.getBackgroundColor();
var eE=this.__gd;

if(eJ||eI){var eG=this.__gg;

if(eG){var eH=qx.theme.manager.Decoration.getInstance().resolve(eJ);
eH.tint(this.__gg.getDomElement(),eF);
}eE.setStyle(cQ,null);
}else{var eD=qx.theme.manager.Color.getInstance().resolve(eF);
eE.setStyle(cQ,eD);
}},_applyFont:function(fr,fs){},__gt:null,$$stateChanges:null,_forwardStates:null,hasState:function(hm){var hn=this.__gt;
return hn&&hn[hm];
},addState:function(ef){var eg=this.__gt;

if(!eg){eg=this.__gt={};
}
if(eg[ef]){return;
}this.__gt[ef]=true;
if(ef===cO){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var ej=this.__gw;

if(forward&&forward[ef]&&ej){var eh;

for(var ei in ej){eh=ej[ei];

if(eh instanceof qx.ui.core.Widget){ej[ei].addState(ef);
}}}},removeState:function(eT){var eU=this.__gt;

if(!eU||!eU[eT]){return;
}delete this.__gt[eT];
if(eT===cO){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var eX=this.__gw;

if(forward&&forward[eT]&&eX){for(var eW in eX){var eV=eX[eW];

if(eV instanceof qx.ui.core.Widget){eV.removeState(eT);
}}}},replaceState:function(gJ,gK){var gL=this.__gt;

if(!gL){gL=this.__gt={};
}
if(!gL[gK]){gL[gK]=true;
}
if(gL[gJ]){delete gL[gJ];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gO=this.__gw;

if(forward&&forward[gK]&&gO){for(var gN in gO){var gM=gO[gN];

if(gM instanceof qx.ui.core.Widget){gM.replaceState(gJ,gK);
}}}},__gu:null,__gv:null,syncAppearance:function(){var f=this.__gt;
var d=this.__gu;
var g=qx.theme.manager.Appearance.getInstance();
var b=qx.core.Property.$$method.setThemed;
var m=qx.core.Property.$$method.resetThemed;
if(this.__gv){delete this.__gv;
if(d){var a=g.styleFrom(d,f);
if(a){d=null;
}}}if(!d){var c=this;
var k=[];

do{k.push(c.$$subcontrol||c.getAppearance());
}while(c=c.$$subparent);
d=this.__gu=k.reverse().join(cJ).replace(/#[0-9]+/g,cK);
}var h=g.styleFrom(d,f);

if(h){if(a){for(var j in a){if(h[j]===undefined){this[m[j]]();
}}}var j;
var j;

for(var j in h){h[j]===undefined?this[m[j]]():this[b[j]](h[j]);
}}else if(a){for(var j in a){this[m[j]]();
}}},_applyAppearance:function(Q,R){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__gj){qx.ui.core.queue.Appearance.add(this);
this.__gj=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__gv=true;
qx.ui.core.queue.Appearance.add(this);
var gb=this.__gw;

if(gb){var fY;

for(var ga in gb){fY=gb[ga];

if(fY instanceof qx.ui.core.Widget){fY.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var gG=this;

while(gG.getAnonymous()){gG=gG.getLayoutParent();

if(!gG){return null;
}}return gG;
},getFocusTarget:function(){var fS=this;

if(!fS.getEnabled()){return null;
}
while(fS.getAnonymous()||!fS.getFocusable()){fS=fS.getLayoutParent();

if(!fS||!fS.getEnabled()){return null;
}}return fS;
},getFocusElement:function(){return this.__gd;
},isTabable:function(){return this.getContainerElement().getDomElement()&&this.isFocusable();
},_applyFocusable:function(fL,fM){var fN=this.getFocusElement();
if(fL){var fO=this.getTabIndex();

if(fO==null){fO=1;
}fN.setAttribute(cT,fO);
if(qx.core.Variant.isSet(dK,dp)){fN.setAttribute(bS,cj);
}else{fN.setStyle(bR,ds);
}}else{if(fN.isNativelyFocusable()){fN.setAttribute(cT,-1);
}else if(fM){fN.setAttribute(cT,null);
}}},_applyKeepFocus:function(gA){var gB=this.getFocusElement();
gB.setAttribute(dd,gA?dv:null);
},_applyKeepActive:function(gu){var gv=this.getContainerElement();
gv.setAttribute(da,gu?dv:null);
},_applyTabIndex:function(n){if(n==null){n=1;
}else if(n<1||n>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&n!=null){this.getFocusElement().setAttribute(cT,n);
}},_applySelectable:function(gp){this._applyCursor(this.getCursor());
this.__gd.setAttribute(cN,gp?dv:cg);
if(qx.core.Variant.isSet(dK,dg)){this.__gd.setStyle(cn,gp?bO:ds);
}},_applyEnabled:function(ez,eA){if(ez===false){this.addState(dG);
this.removeState(cO);
if(this.isFocusable()){this.removeState(cP);
this._applyFocusable(false,true);
}}else{this.removeState(dG);
if(this.isFocusable()){this._applyFocusable(true,false);
}}},_applyContextMenu:function(o,p){if(p){p.removeState(cS);

if(p.getOpener()==this){p.resetOpener();
}
if(!o){this.removeListener(cS,this._onContextMenuOpen);
}}
if(o){o.setOpener(this);
o.addState(cS);

if(!p){this.addListener(cS,this._onContextMenuOpen);
}}},_onContextMenuOpen:function(e){var fT=this.getContextMenu();
fT.placeToMouse(e);
fT.show();
e.preventDefault();
},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(fW,fX){qx.ui.core.DragDropCursor.getInstance();
if(fW){this.addListener(dE,this._onDragStart);
this.addListener(bH,this._onDrag);
this.addListener(dl,this._onDragEnd);
this.addListener(dL,this._onDragChange);
}else{this.removeListener(dE,this._onDragStart);
this.removeListener(bH,this._onDrag);
this.removeListener(dl,this._onDragEnd);
this.removeListener(dL,this._onDragChange);
}this.__gd.setAttribute(dV,fW?dv:null);
},_applyDroppable:function(hk,hl){this.__gd.setAttribute(cv,hk?dv:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(dr);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var ge=qx.ui.core.DragDropCursor.getInstance();
var gf=e.getCurrentAction();
gf?ge.setAction(gf):ge.resetAction();
},visualizeFocus:function(){this.addState(cP);
},visualizeBlur:function(){this.removeState(cP);
},scrollChildIntoView:function(I,J,K,L){this.scrollChildIntoViewX(I,J,L);
this.scrollChildIntoViewY(I,K,L);
},scrollChildIntoViewX:function(s,t,u){this.__ge.scrollChildIntoViewX(s.getContainerElement(),t,u);
},scrollChildIntoViewY:function(Y,ba,bb){this.__ge.scrollChildIntoViewY(Y.getContainerElement(),ba,bb);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.__gd.activate();
},deactivate:function(){this.__gd.deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},_hasChildControl:function(F){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cb);
return this.hasChildControl(F);
},hasChildControl:function(be){if(!this.__gw){return false;
}return !!this.__gw[be];
},__gw:null,_getChildControl:function(eL,eM){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bI);
return this.getChildControl(eL,eM);
},getChildControl:function(eP,eQ){if(!this.__gw){if(eQ){return null;
}this.__gw={};
}var eR=this.__gw[eP];

if(eR){return eR;
}
if(eQ===true){return null;
}return this._createChildControl(eP);
},_showChildControl:function(bf){var bg=this.getChildControl(bf);
bg.show();
return bg;
},_excludeChildControl:function(eb){var ec=this.getChildControl(eb,true);

if(ec){ec.exclude();
}},_isChildControlVisible:function(gC){var gD=this.getChildControl(gC,true);

if(gD){return gD.isVisible();
}return false;
},_createChildControl:function(bA){if(!this.__gw){this.__gw={};
}else if(this.__gw[bA]){throw new Error("Child control '"+bA+"' already created!");
}var bE=bA.indexOf(ct);

if(bE==-1){var bB=this._createChildControlImpl(bA);
}else{var bB=this._createChildControlImpl(bA.substring(0,bE));
}
if(!bB){throw new Error("Unsupported control: "+bA);
}bB.$$subcontrol=bA;
bB.$$subparent=this;
var bC=this.__gt;
var forward=this._forwardStates;

if(bC&&forward&&bB instanceof qx.ui.core.Widget){for(var bD in bC){if(forward[bD]){bB.addState(bD);
}}}return this.__gw[bA]=bB;
},_createChildControlImpl:function(ep){return null;
},_disposeChildControls:function(){var fi=this.__gw;

if(!fi){return;
}var fg=qx.ui.core.Widget;

for(var fh in fi){var ff=fi[fh];

if(!fg.contains(this,ff)){ff.destroy();
}else{ff.dispose();
}}delete this.__gw;
},_findTopControl:function(){var gq=this;

while(gq){if(!gq.$$subparent){return gq;
}gq=gq.$$subparent;
}return null;
},getContainerLocation:function(ft){var fu=this.getContainerElement().getDomElement();
return fu?qx.bom.element.Location.get(fu,ft):null;
},getContentLocation:function(gH){var gI=this.getContentElement().getDomElement();
return gI?qx.bom.element.Location.get(gI,gH):null;
},setDomLeft:function(ho){var hp=this.getContainerElement().getDomElement();

if(hp){hp.style.left=ho+dC;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hi){var hj=this.getContainerElement().getDomElement();

if(hj){hj.style.top=hi+dC;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(ev,top){var ew=this.getContainerElement().getDomElement();

if(ew){ew.style.left=ev+dC;
ew.style.top=top+dC;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fz=arguments.callee.base.call(this);

if(this.getChildren){var fA=this.getChildren();

for(var i=0,l=fA.length;i<l;i++){fz.add(fA[i].clone());
}}return fz;
},serialize:function(){var T=arguments.callee.base.call(this);

if(this.getChildren){var U=this.getChildren();

if(U.length>0){T.children=[];

for(var i=0,l=U.length;i<l;i++){T.children.push(U[i].serialize());
}}}
if(this.getLayout){var S=this.getLayout();

if(S){T.layout=S.serialize();
}}return T;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){this.__gd.setAttribute(dq,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}this._disposeArray(ca);
this._disposeArray(cq);
this._disposeFields(cs,bU);
this._disposeObjects(bM,cm,dP,cw,cL,cH);
}});
})();
(function(){var w="100%",v="mshtml",u="backgroundColor",t="repeat",s="opacity",r="_applyBlockerColor",q="Number",p="zIndex",o=")",n="__gA",h="qx.client",m="url(",l="qx.ui.core.MBlocker",g="_applyBlockerOpacity",f="Color",k="qx/static/blank.gif",j="absolute";
qx.Mixin.define(l,{properties:{blockerColor:{check:f,init:null,nullable:true,apply:r,themeable:true},blockerOpacity:{check:q,init:1,apply:g,themeable:true}},members:{__gx:null,__gy:null,__gz:null,__gA:null,__gB:null,_applyBlockerColor:function(x,y){var z=[];
this.__gx&&z.push(this.__gx);
this.__gA&&z.push(this.__gA);

for(var i=0;i<z.length;i++){z[i].setStyle(u,qx.theme.manager.Color.getInstance().resolve(x));
}},_applyBlockerOpacity:function(a,b){var c=[];
this.__gx&&c.push(this.__gx);
this.__gA&&c.push(this.__gA);

for(var i=0;i<c.length;i++){c[i].setStyle(s,a);
}},__gC:function(){var A=new qx.html.Element().setStyles({position:j,width:w,height:w,opacity:this.getBlockerOpacity(),backgroundColor:qx.theme.manager.Color.getInstance().resolve(this.getBlockerColor())});
if(qx.core.Variant.isSet(h,v)){A.setStyles({backgroundImage:m+qx.util.ResourceManager.toUri(k)+o,backgroundRepeat:t});
}return A;
},_getBlocker:function(){if(!this.__gx){this.__gx=this.__gC();
this.getContentElement().add(this.__gx);
this.__gx.exclude();
}return this.__gx;
},block:function(){if(this.__gy){return;
}this.__gy=true;
this._getBlocker().include();
this.__gz=this.getAnonymous();
this.setAnonymous(true);
},isBlocked:function(){return !!this.__gy;
},unblock:function(){if(!this.__gy){return;
}this.__gy=false;
this.setAnonymous(this.__gz);
this._getBlocker().exclude();
},_getContentBlocker:function(){if(!this.__gA){this.__gA=this.__gC();
this.getContentElement().add(this.__gA);
this.__gA.exclude();
}return this.__gA;
},blockContent:function(d){var e=this._getContentBlocker();
e.setStyle(p,d);

if(this.__gB){return;
}this.__gB=true;
e.include();
},isContentBlocked:function(){return !!this.__gB;
},unblockContent:function(){if(!this.__gB){return;
}this.__gB=false;
this._getContentBlocker().exclude();
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var m="qx.ui.window.Window",l="changeModal",k="changeVisibility",j="changeActive",i="_applyActiveWindow",h="__gE",g="qx.ui.window.MDesktop",f="__gD";
qx.Mixin.define(g,{properties:{activeWindow:{check:m,apply:i}},members:{__gD:null,__gE:null,getWindowManager:function(){if(!this.__gE){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__gE;
},supportsMaximize:function(){return true;
},setWindowManager:function(b){if(this.__gE){this.__gE.setDesktop(null);
}b.setDesktop(this);
this.__gE=b;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}},_applyActiveWindow:function(n,o){this.getWindowManager().changeActiveWindow(n,o);
n.setActive(true);

if(o){o.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(p){if(qx.Class.isDefined(m)&&p instanceof qx.ui.window.Window){this._addWindow(p);
}},_addWindow:function(d){this.getWindows().push(d);
d.addListener(j,this._onChangeActive,this);
d.addListener(l,this._onChangeModal,this);
d.addListener(k,this._onChangeVisibility,this);

if(d.getActive()){this.setActiveWindow(d);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(c){if(qx.Class.isDefined(m)&&c instanceof qx.ui.window.Window){this._removeWindow(c);
}},_removeWindow:function(a){qx.lang.Array.remove(this.getWindows(),a);
a.removeListener(j,this._onChangeActive,this);
a.removeListener(l,this._onChangeModal,this);
a.removeListener(k,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__gD){this.__gD=[];
}return this.__gD;
}},destruct:function(){this._disposeArray(f);
this._disposeObjects(h);
}});
})();
(function(){var t="contextmenu",s="changeGlobalCursor",r="abstract",q="Boolean",p="root",o="__gF",n="",m="_applyNativeContextMenu",l=" !important",k="_applyGlobalCursor",h="qx.client",j=";",i="qx.ui.root.Abstract",g="String",f="*";
qx.Class.define(i,{type:r,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
},properties:{appearance:{refine:true,init:p},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:g,nullable:true,themeable:true,apply:k,event:s},nativeContextMenu:{check:q,nullable:true,apply:m,init:true}},members:{__gF:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(h,{"mshtml":function(c,d){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__gF;

if(!z){this.__gF=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,f,qx.bom.element.Cursor.compile(w).replace(j,n)+l);
}}}),_applyNativeContextMenu:function(u,v){if(u){this.removeListener(t,this._onNativeContextMenu,this,true);
}else{this.addListener(t,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
}},destruct:function(){this._disposeFields(o);
},defer:function(a,b){qx.ui.core.MChildrenHandling.remap(b);
}});
})();
(function(){var t="resize",s="__gG",r="position",q="0px",p="webkit",o="__gH",n="$$widget",m="qx.ui.root.Application",l="hidden",k="qx.client",h="div",j="100%",i="absolute";
qx.Class.define(m,{extend:qx.ui.root.Abstract,construct:function(u){this.__gG=qx.dom.Node.getWindow(u);
this.__gH=u;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__gG,t,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.setNativeContextMenu(false);
},members:{__gG:null,__gH:null,_createContainerElement:function(){var c=this.__gH;

if(qx.core.Variant.isSet(k,p)){if(!c.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var g=c.documentElement.style;
var d=c.body.style;
g.overflow=d.overflow=l;
g.padding=g.margin=d.padding=d.margin=q;
g.width=g.height=d.width=d.height=j;
var f=c.createElement(h);
c.body.appendChild(f);
var e=new qx.html.Root(f);
e.setStyle(r,i);
e.setAttribute(n,this.toHashCode());
return e;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var a=qx.bom.Viewport.getWidth(this.__gG);
var b=qx.bom.Viewport.getHeight(this.__gG);
return {minWidth:a,width:a,maxWidth:a,minHeight:b,height:b,maxHeight:b};
}},destruct:function(){this._disposeFields(s,o);
}});
})();
(function(){var g="blur",f="focus",e="input",d="load",c="qx.ui.core.EventHandler",b="__gI",a="activate";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__gI=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__gI:null,__gJ:{focusin:1,focusout:1,focus:1,blur:1},__gK:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(h,j){return h instanceof qx.ui.core.Widget;
},_dispatchEvent:function(k){var q=k.getTarget();
var p=qx.ui.core.Widget.getWidgetByElement(q,true);
var r=false;

while(p&&p.isAnonymous()){var r=true;
p=p.getLayoutParent();
}if(r&&k.getType()==a){p.getContainerElement().activate();
}if(this.__gJ[k.getType()]){p=p&&p.getFocusTarget();
if(!p){return;
}}if(k.getRelatedTarget){var y=k.getRelatedTarget();
var x=qx.ui.core.Widget.getWidgetByElement(y);

while(x&&x.isAnonymous()){x=x.getLayoutParent();
}
if(x){if(this.__gJ[k.getType()]){x=x.getFocusTarget();
}if(x===p){return;
}}}var t=k.getCurrentTarget();
var v=qx.ui.core.Widget.getWidgetByElement(t);

if(!v||v.isAnonymous()){return;
}if(this.__gJ[k.getType()]){v=v.getFocusTarget();
}var w=k.getType();

if(!(v.isEnabled()||this.__gK[w])){return;
}var m=k.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var s=this.__gI.getListeners(v,w,m);

if(!s||s.length===0){return;
}var n=qx.event.Pool.getInstance().getObject(k.constructor);
k.clone(n);
n.setTarget(p);
n.setRelatedTarget(x||null);
n.setCurrentTarget(v);
var z=k.getOriginalTarget();

if(z){var o=qx.ui.core.Widget.getWidgetByElement(z);

while(o&&o.isAnonymous()){o=o.getLayoutParent();
}n.setOriginalTarget(o);
}else{n.setOriginalTarget(q);
}for(var i=0,l=s.length;i<l;i++){var u=s[i].context||v;
s[i].handler.call(u,n);
}if(n.getPropagationStopped()){k.stopPropagation();
}
if(n.getDefaultPrevented()){k.preventDefault();
}qx.event.Pool.getInstance().poolObject(n);
},registerEvent:function(A,B,C){var D;

if(B===f||B===g){D=A.getFocusElement();
}else if(B===d||B===e){D=A.getContentElement();
}else{D=A.getContainerElement();
}
if(D){D.addListener(B,this._dispatchEvent,this,C);
}},unregisterEvent:function(F,G,H){var I;

if(G===f||G===g){I=F.getFocusElement();
}else if(G===d||G===e){I=F.getContentElement();
}else{I=F.getContainerElement();
}
if(I){I.removeListener(G,this._dispatchEvent,this,H);
}}},destruct:function(){this._disposeFields(b);
},defer:function(E){qx.event.Registration.addHandler(E);
}});
})();
(function(){var i="replacement",h="Boolean",g="_applyScale",f="_applySource",e="-disabled.$1",d="changeSource",c="String",b="image",a="qx.ui.basic.Image";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(p){arguments.callee.base.call(this);

if(p){this.setSource(p);
}},properties:{source:{check:c,init:null,nullable:true,event:d,apply:f,themeable:true},scale:{check:h,init:false,themeable:true,apply:g},appearance:{refine:true,init:b},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__gL:null,__gM:null,_createContentElement:function(){return new qx.html.Image();
},_getContentHint:function(){return {width:this.__gL||0,height:this.__gM||0};
},_applyEnabled:function(l,m){arguments.callee.base.call(this,l,m);

if(this.getSource()){this._styleSource();
}},_applySource:function(z){this._styleSource();
},_applyScale:function(n){var o=this.getContentElement();
o.setScale(n);
},_styleSource:function(){var v=qx.util.AliasManager.getInstance().resolve(this.getSource());
var q=this.getContentElement();

if(!v){q.resetSource();
return;
}var r=qx.util.ResourceManager;
var w=qx.io2.ImageLoader;
if(r.has(v)){if(!this.getEnabled()){var u=v.replace(/\.([a-z]+)$/,e);

if(r.has(u)){v=u;
this.addState(i);
}else{this.removeState(i);
}}if(q.getSource()===v){return;
}q.setSource(v);
this.__gO(r.getImageWidth(v),r.getImageHeight(v));
}else if(w.isLoaded(v)){q.setSource(v);
var s=w.getWidth(v);
var t=w.getHeight(v);
this.__gO(s,t);
}else{var self;
if(!qx.io2.ImageLoader.isFailed(v)){qx.io2.ImageLoader.load(v,this.__gN,this);
}}},__gN:function(x,y){if(x!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(!y){this.warn("Image could not be loaded: "+x);
return;
}this._styleSource();
},__gO:function(j,k){if(j!==this.__gL||k!==this.__gM){this.__gL=j;
this.__gM=k;
qx.ui.core.queue.Layout.add(this);
}}}});
})();
(function(){var L="interval",K="Integer",J="resize",I="Boolean",H="disappear",G="bottom-left",F="offsetLeft",E="offsetRight",D="right-top",C="top-right",w="top-left",B="bottom-right",z="right-bottom",v="offsetBottom",u="qx.ui.core.MPlacement",y="left-top",x="left-bottom",A="shorthand",t="offsetTop";
qx.Mixin.define(u,{properties:{position:{check:[w,C,G,B,y,x,D,z],init:G,themeable:true},domMove:{check:I,init:false},smart:{check:I,init:true,themeable:true},offsetLeft:{check:K,init:0,themeable:true},offsetTop:{check:K,init:0,themeable:true},offsetRight:{check:K,init:0,themeable:true},offsetBottom:{check:K,init:0,themeable:true},offset:{group:[t,E,v,F],mode:A,themeable:true}},members:{__gP:null,__gQ:null,getLayoutLocation:function(a){var d,c,e,top;
c=a.getBounds();
e=c.left;
top=c.top;
var f=c;
a=a.getLayoutParent();

while(a&&!a.isRootWidget()){c=a.getBounds();
e+=c.left;
top+=c.top;
d=a.getInsets();
e+=d.left;
top+=d.top;
a=a.getLayoutParent();
}if(a.isRootWidget()){var b=a.getContainerLocation();

if(b){e+=b.left;
top+=b.top;
}}return {left:e,top:top,right:e+f.width,bottom:top+f.height};
},moveTo:function(M,top){if(this.getDomMove()){this.setDomPosition(M,top);
}else{this.setLayoutProperties({left:M,top:top});
}},placeToWidget:function(g,h){if(h){this.__gQ=qx.lang.Function.bind(this.placeToWidget,this,g,false);
qx.event.Idle.getInstance().addListener(L,this.__gQ);
this.addListener(H,function(){if(this.__gQ){qx.event.Idle.getInstance().removeListener(L,this.__gQ);
this.__gQ=null;
}},this);
}var i=g.getContainerLocation()||this.getLayoutLocation(g);
this.__gR(i);
},placeToMouse:function(event){var Q=event.getDocumentLeft();
var top=event.getDocumentTop();
var P={left:Q,top:top,right:Q,bottom:top};
this.__gR(P);
},placeToElement:function(q,r){var location=qx.bom.element.Location.get(q);
var s={left:location.left,top:location.top,right:location.left+q.offsetWidth,bottom:location.top+q.offsetHeight};
if(r){this.__gQ=qx.lang.Function.bind(this.placeToElement,this,q,false);
qx.event.Idle.getInstance().addListener(L,this.__gQ);
this.addListener(H,function(){if(this.__gQ){qx.event.Idle.getInstance().removeListener(L,this.__gQ);
this.__gQ=null;
}},this);
}this.__gR(s);
},placeToPoint:function(N){var O={left:N.left,top:N.top,right:N.left,bottom:N.top};
this.__gR(O);
},__gR:function(j){var p=this.getBounds();

if(p==null){if(!this.__gP){this.addListener(J,this.__gR);
}this.__gP=j;
return;
}else if(this.__gP){j=this.__gP;
delete this.__gP;
this.removeListener(J,this.__gR);
}var k=this.getLayoutParent().getBounds();
var n=this.getPosition();
var o=this.getSmart();
var l={left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
var m=qx.util.PlaceUtil.compute(p,k,j,n,o,l);
this.moveTo(m.left,m.top);
}}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){arguments.callee.base.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var j=this.getApplicationRoot();
j.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(h,i){if(i){this.removeState(i);
}
if(h){this.addState(h);
}}}});
})();
(function(){var q="source",p="scale",o="no-repeat",n="mshtml",m="qx.client",l="qx.html.Image";
qx.Class.define(l,{extend:qx.html.Element,members:{_applyProperty:function(name,f){arguments.callee.base.call(this,name,f);

if(name===q){var j=this.getDomElement();
var g=this.getAllStyles();
var h=this._getProperty(q);
var i=this._getProperty(p);
var k=i?p:o;
qx.bom.element.Decoration.update(j,h,k,g);
}},_createDomElement:function(){var c=this._getProperty(p);
var d=c?p:o;

if(qx.core.Variant.isSet(m,n)){var b=this._getProperty(q);
this.setNodeName(qx.bom.element.Decoration.getTagName(d,b));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(d));
}return arguments.callee.base.call(this);
},_copyData:function(a){return arguments.callee.base.call(this,true);
},setSource:function(e){this._setProperty(q,e);
return this;
},getSource:function(){return this._getProperty(q);
},resetSource:function(){this._removeProperty(q);
return this;
},setScale:function(r){this._setProperty(p,r);
return this;
},getScale:function(){return this._getProperty(p);
}}});
})();
(function(){var h="interval",g="__gS",f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){arguments.callee.base.call(this);
var a=new qx.event.Timer(this.getTimeoutInterval());
a.addListener(h,this._onInterval,this);
a.start();
this.__gS=a;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__gS:null,_applyTimeoutInterval:function(i){this.__gS.setInterval(i);
},_onInterval:function(){this.fireEvent(h);
}},destruct:function(){if(this.__gS){this.__gS.stop();
}this._disposeFields(g);
}});
})();
(function(){var q="interval",p="qx.event.Timer",o="_applyInterval",n="_applyEnabled",m="Boolean",l="__gT",k="__gU",j="qx.event.type.Event",i="Integer";
qx.Class.define(p,{extend:qx.core.Object,construct:function(h){arguments.callee.base.call(this);
this.setEnabled(false);

if(h!=null){this.setInterval(h);
}this.__gT=qx.lang.Function.bind(this._oninterval,this);
},events:{"interval":j},statics:{once:function(r,s,t){var u=new qx.event.Timer(t);
u.addListener(q,function(e){u.stop();
r.call(s,e);
u.dispose();
s=null;
},s);
u.start();
return u;
}},properties:{enabled:{init:true,check:m,apply:n},interval:{check:i,init:1000,apply:o}},members:{__gU:null,_applyInterval:function(f,g){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(a,b){if(b){window.clearInterval(this.__gU);
this.__gU=null;
}else if(a){this.__gU=window.setInterval(this.__gT,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(d){this.setInterval(d);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(c){this.stop();
this.startWith(c);
},_oninterval:function(){if(this.getEnabled()){this.fireEvent(q);
}}},destruct:function(){if(this.__gU){window.clearInterval(this.__gU);
}this._disposeFields(k,l);
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
(function(){var bl="keypress",bk="focusout",bj="activate",bi="__gV",bh="Tab",bg="singleton",bf="__gW",be="deactivate",bd="__gX",bc="__gY",ba="focusin",bb="qx.ui.core.FocusHandler";
qx.Class.define(bb,{extend:qx.core.Object,type:bg,construct:function(){arguments.callee.base.call(this);
this.__gV={};
},members:{__gV:null,__gW:null,__gX:null,__gY:null,connectTo:function(z){z.addListener(bl,this.__ha,this);
z.addListener(ba,this._onFocusIn,this,true);
z.addListener(bk,this._onFocusOut,this,true);
z.addListener(bj,this._onActivate,this,true);
z.addListener(be,this._onDeactivate,this,true);
},addRoot:function(Y){this.__gV[Y.$$hash]=Y;
},removeRoot:function(t){delete this.__gV[t.$$hash];
},getActiveWidget:function(){return this.__gW;
},isActive:function(g){return this.__gW==g;
},getFocusedWidget:function(){return this.__gX;
},isFocused:function(R){return this.__gX==R;
},isFocusRoot:function(W){return !!this.__gV[W.$$hash];
},_onActivate:function(e){var Q=e.getTarget();
this.__gW=Q;
var P=this.__hb(Q);

if(P!=this.__gY){this.__gY=P;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__gW==u){this.__gW=null;
}},_onFocusIn:function(e){var X=e.getTarget();

if(X!=this.__gX){this.__gX=X;
X.visualizeFocus();
}},_onFocusOut:function(e){var a=e.getTarget();

if(a==this.__gX){this.__gX=null;
a.visualizeBlur();
}},__ha:function(e){if(e.getKeyIdentifier()!=bh){return;
}
if(!this.__gY){return;
}e.stopPropagation();
e.preventDefault();
var d=this.__gX;

if(!e.isShiftPressed()){var f=d?this.__hf(d):this.__hd();
}else{var f=d?this.__hg(d):this.__he();
}if(f){f.tabFocus();
}},__hb:function(b){var c=this.__gV;

while(b){if(c[b.$$hash]){return b;
}b=b.getLayoutParent();
}return null;
},__hc:function(A,B){if(A===B){return 0;
}var D=A.getTabIndex()||0;
var C=B.getTabIndex()||0;

if(D!=C){return D-C;
}var I=A.getContainerElement().getDomElement();
var H=B.getContainerElement().getDomElement();
var G=qx.bom.element.Location;
var F=G.get(I);
var E=G.get(H);
if(F.top!=E.top){return F.top-E.top;
}if(F.left!=E.left){return F.left-E.left;
}var J=A.getZIndex();
var K=B.getZIndex();

if(J!=K){return J-K;
}return 0;
},__hd:function(){return this.__hj(this.__gY,null);
},__he:function(){return this.__hk(this.__gY,null);
},__hf:function(L){var M=this.__gY;

if(M==L){return this.__hd();
}
while(L&&L.getAnonymous()){L=L.getLayoutParent();
}
if(L==null){return [];
}var N=[];
this.__hh(M,L,N);
N.sort(this.__hc);
var O=N.length;
return O>0?N[0]:this.__hd();
},__hg:function(p){var q=this.__gY;

if(q==p){return this.__he();
}
while(p&&p.getAnonymous()){p=p.getLayoutParent();
}
if(p==null){return [];
}var r=[];
this.__hi(q,p,r);
r.sort(this.__hc);
var s=r.length;
return s>0?r[s-1]:this.__he();
},__hh:function(parent,S,T){var U=parent.getLayoutChildren();
var V;

for(var i=0,l=U.length;i<l;i++){V=U[i];
if(!(V instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(V)&&V.isEnabled()){if(V.isTabable()&&this.__hc(S,V)<0){T.push(V);
}this.__hh(V,S,T);
}}},__hi:function(parent,v,w){var x=parent.getLayoutChildren();
var y;

for(var i=0,l=x.length;i<l;i++){y=x[i];
if(!(y instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(y)&&y.isEnabled()){if(y.isTabable()&&this.__hc(v,y)>0){w.push(y);
}this.__hi(y,v,w);
}}},__hj:function(parent,m){var n=parent.getLayoutChildren();
var o;

for(var i=0,l=n.length;i<l;i++){o=n[i];
if(!(o instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(o)&&o.isEnabled()){if(o.isTabable()){if(m==null||this.__hc(o,m)<0){m=o;
}}m=this.__hj(o,m);
}}return m;
},__hk:function(parent,h){var j=parent.getLayoutChildren();
var k;

for(var i=0,l=j.length;i<l;i++){k=j[i];
if(!(k instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(k)&&k.isEnabled()){if(k.isTabable()){if(h==null||this.__hc(k,h)>0){h=k;
}}h=this.__hk(k,h);
}}return h;
}},destruct:function(){this._disposeMap(bi);
this._disposeFields(bd,bf,bc);
}});
})();
(function(){var y="qx.client",x="head",w="text/css",v="stylesheet",u="}",t='@import "',s="{",r='";',q="qx.bom.Stylesheet",p="link",o="style";
qx.Class.define(q,{statics:{includeFile:function(L,M){if(!M){M=document;
}var N=M.createElement(p);
N.type=w;
N.rel=v;
N.href=qx.util.ResourceManager.toUri(L);
var O=M.getElementsByTagName(x)[0];
O.appendChild(N);
},createElement:qx.core.Variant.select(y,{"mshtml":function(bf){var bg=document.createStyleSheet();

if(bf){bg.cssText=bf;
}return bg;
},"default":function(a){var b=document.createElement(o);
b.type=w;

if(a){b.appendChild(document.createTextNode(a));
}document.getElementsByTagName(x)[0].appendChild(b);
return b.sheet;
}}),addRule:qx.core.Variant.select(y,{"mshtml":function(I,J,K){I.addRule(J,K);
},"default":function(V,W,X){V.insertRule(W+s+X+u,V.cssRules.length);
}}),removeRule:qx.core.Variant.select(y,{"mshtml":function(E,F){var G=E.rules;
var H=G.length;

for(var i=H-1;i>=0;--i){if(G[i].selectorText==F){E.removeRule(i);
}}},"default":function(k,l){var m=k.cssRules;
var n=m.length;

for(var i=n-1;i>=0;--i){if(m[i].selectorText==l){k.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(y,{"mshtml":function(g){var h=g.rules;
var j=h.length;

for(var i=j-1;i>=0;i--){g.removeRule(i);
}},"default":function(S){var T=S.cssRules;
var U=T.length;

for(var i=U-1;i>=0;i--){S.deleteRule(i);
}}}),addImport:qx.core.Variant.select(y,{"mshtml":function(bd,be){bd.addImport(be);
},"default":function(z,A){z.insertRule(t+A+r,z.cssRules.length);
}}),removeImport:qx.core.Variant.select(y,{"mshtml":function(c,d){var e=c.imports;
var f=e.length;

for(var i=f-1;i>=0;i--){if(e[i].href==d){c.removeImport(i);
}}},"default":function(Y,ba){var bb=Y.cssRules;
var bc=bb.length;

for(var i=bc-1;i>=0;i--){if(bb[i].href==ba){Y.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(y,{"mshtml":function(B){var C=B.imports;
var D=C.length;

for(var i=D-1;i>=0;i--){B.removeImport(i);
}},"default":function(P){var Q=P.cssRules;
var R=Q.length;

for(var i=R-1;i>=0;i--){if(Q[i].type==Q[i].IMPORT_RULE){P.deleteRule(i);
}}}})}});
})();
(function(){var j="abstract",i="qx.ui.layout.Abstract",h="__hl",g="__hm";
qx.Class.define(i,{type:j,extend:qx.core.Object,members:{__hl:null,_invalidChildrenCache:null,__hm:null,invalidateLayoutCache:function(){this.__hl=null;
},renderLayout:function(a,b){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__hl){return this.__hl;
}return this.__hl=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(c){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var k=this.__hm;

if(k instanceof qx.ui.core.LayoutItem){k.clearSeparators();
}},_renderSeparator:function(e,f){this.__hm.renderSeparator(e,f);
},connectToWidget:function(d){if(d&&this.__hm){throw new Error("It is not possible to manually set the connected widget.");
}this.__hm=d;
this.invalidateChildrenCache();
},_applyLayoutChange:function(){if(this.__hm){this.__hm.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__hm.getLayoutChildren();
}},destruct:function(){this._disposeFields(g,h);
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
(function(){var bl="_applyLayoutChange",bk="top",bj="left",bi="middle",bh="Decorator",bg="__hY",bf="center",be="baseline",bd="bottom",bc="__ic",X="qx.ui.layout.VBox",bb="__ia",ba="_applyReversed",W="Integer",V="right",Y="Boolean";
qx.Class.define(X,{extend:qx.ui.layout.Abstract,construct:function(a,b,c){arguments.callee.base.call(this);

if(a){this.setSpacing(a);
}
if(b){this.setAlignY(b);
}
if(c){this.setSeparator(c);
}},properties:{alignY:{check:[bk,bi,bd],init:bk,apply:bl},alignX:{check:[bj,bf,V,be],init:bj,apply:bl},spacing:{check:W,init:0,apply:bl},separator:{check:bh,nullable:true,apply:bl},reversed:{check:Y,init:false,apply:ba}},members:{__hY:null,__ia:null,__ib:null,__ic:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__id:function(){var U=this._getLayoutChildren();
var length=U.length;
var Q=false;
var P=this.__hY&&this.__hY.length!=length&&this.__ia&&this.__hY;
var S;
var R=P?this.__hY:new Array(length);
var T=P?this.__ia:new Array(length);
if(this.getReversed()){U=U.concat().reverse();
}for(var i=0;i<length;i++){S=U[i].getLayoutProperties();

if(S.height!=null){R[i]=parseFloat(S.height)/100;
}
if(S.flex!=null){T[i]=S.flex;
Q=true;
}}if(!P){this.__hY=R;
this.__ia=T;
}this.__ib=Q;
this.__ic=U;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(d,e){if(this._invalidChildrenCache){this.__id();
}var n=this.__ic;
var length=n.length;
var x=qx.ui.layout.Util;
var w=this.getSpacing();
var A=this.getSeparator();

if(A){var j=x.computeVerticalSeparatorGaps(n,w,A);
}else{var j=x.computeVerticalGaps(n,w,true);
}var i,g,h,r;
var s=[];
var y=j;

for(i=0;i<length;i+=1){r=this.__hY[i];
h=r!=null?Math.floor((e-j)*r):n[i].getSizeHint().height;
s.push(h);
y+=h;
}if(this.__ib&&y!=e){var p={};
var v,z;

for(i=0;i<length;i+=1){v=this.__ia[i];

if(v>0){o=n[i].getSizeHint();
p[i]={min:o.minHeight,value:s[i],max:o.maxHeight,flex:v};
}}var k=x.computeFlexOffsets(p,e,y);

for(i in k){z=k[i].offset;
s[i]+=z;
y+=z;
}}var top=n[0].getMarginTop();
if(y<e&&this.getAlignY()!=bk){top=e-y;

if(this.getAlignY()===bi){top=Math.round(top/2);
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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__id();
}var I=qx.ui.layout.Util;
var O=this.__ic;
var G=0,H=0;
var D=0,J=0;
var M,E,N;
for(var i=0,l=O.length;i<l;i+=1){M=O[i];
E=M.getSizeHint();
H+=E.height;
G+=this.__ia[i]>0?E.minHeight:E.height;
N=M.getMarginLeft()+M.getMarginRight();
if((E.width+N)>J){J=E.width+N;
}if((E.minWidth+N)>D){D=E.minWidth+N;
}}var F=this.getSpacing();
var L=this.getSeparator();

if(L){var K=I.computeVerticalSeparatorGaps(O,F,L);
}else{var K=I.computeVerticalGaps(O,F,true);
}return {minHeight:G+K,height:H+K,minWidth:D,width:J};
}},destruct:function(){this._disposeFields(bg,bb,bc);
}});
})();
(function(){var g="middle",f="qx.ui.layout.Util",e="left",d="center",c="top",b="bottom",a="right";
qx.Class.define(f,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(v,w,x){var z,D,y,E;
var A=w>x;
var F=Math.abs(w-x);
var G,B;
var C={};

for(D in v){z=v[D];
C[D]={potential:A?z.max-z.value:z.value-z.min,flex:A?z.flex:1/z.flex,offset:0};
}while(F!=0){E=Infinity;
y=0;

for(D in C){z=C[D];

if(z.potential>0){y+=z.flex;
E=Math.min(E,z.potential/z.flex);
}}if(y==0){break;
}E=Math.min(F,E*y)/y;
G=0;

for(D in C){z=C[D];

if(z.potential>0){B=Math.min(F,z.potential,Math.ceil(E*z.flex));
G+=B-E*z.flex;

if(G>=1){G-=1;
B-=1;
}z.potential-=B;

if(A){z.offset+=B;
}else{z.offset-=B;
}F-=B;
}}}return C;
},computeHorizontalAlignOffset:function(bk,bl,bm,bn,bo){if(bn==null){bn=0;
}
if(bo==null){bo=0;
}var bp=0;

switch(bk){case e:bp=bn;
break;
case a:bp=bm-bl-bo;
break;
case d:bp=Math.round((bm-bl)/2);
if(bp<bn){bp=bn;
}else if(bp<bo){bp=Math.max(bn,bm-bl-bo);
}break;
}return bp;
},computeVerticalAlignOffset:function(R,S,T,U,V){if(U==null){U=0;
}
if(V==null){V=0;
}var W=0;

switch(R){case c:W=U;
break;
case b:W=T-S-V;
break;
case g:W=Math.round((T-S)/2);
if(W<U){W=U;
}else if(W<V){W=Math.max(U,T-S-V);
}break;
}return W;
},collapseMargins:function(h){var j=0,m=0;

for(var i=0,l=arguments.length;i<l;i++){var k=arguments[i];

if(k<0){m=Math.min(m,k);
}else if(k>0){j=Math.max(j,k);
}}return j+m;
},computeHorizontalGaps:function(X,Y,ba){if(Y==null){Y=0;
}var bb=0;

if(ba){bb+=X[0].getMarginLeft();

for(var i=1,l=X.length;i<l;i+=1){bb+=this.collapseMargins(Y,X[i-1].getMarginRight(),X[i].getMarginLeft());
}bb+=X[l-1].getMarginRight();
}else{for(var i=1,l=X.length;i<l;i+=1){bb+=X[i].getMarginLeft()+X[i].getMarginRight();
}bb+=(Y*(l-1));
}return bb;
},computeVerticalGaps:function(N,O,P){if(O==null){O=0;
}var Q=0;

if(P){Q+=N[0].getMarginTop();

for(var i=1,l=N.length;i<l;i+=1){Q+=this.collapseMargins(O,N[i-1].getMarginBottom(),N[i].getMarginTop());
}Q+=N[l-1].getMarginBottom();
}else{for(var i=1,l=N.length;i<l;i+=1){Q+=N[i].getMarginTop()+N[i].getMarginBottom();
}Q+=(O*(l-1));
}return Q;
},computeHorizontalSeparatorGaps:function(bc,bd,be){var bh=qx.theme.manager.Decoration.getInstance().resolve(be);
var bg=bh.getInsets();
var bf=bg.left+bg.right;
var bi=0;

for(var i=0,l=bc.length;i<l;i++){var bj=bc[i];
bi+=bj.getMarginLeft()+bj.getMarginRight();
}bi+=(bd+bf+bd)*(l-1);
return bi;
},computeVerticalSeparatorGaps:function(n,o,p){var s=qx.theme.manager.Decoration.getInstance().resolve(p);
var r=s.getInsets();
var q=r.top+r.bottom;
var t=0;

for(var i=0,l=n.length;i<l;i++){var u=n[i];
t+=u.getMarginTop()+u.getMarginBottom();
}t+=(o+q+o)*(l-1);
return t;
},arrangeIdeals:function(H,I,J,K,L,M){if(I<H||L<K){if(I<H&&L<K){I=H;
L=K;
}else if(I<H){L-=(H-I);
I=H;
if(L<K){L=K;
}}else if(L<K){I-=(K-L);
L=K;
if(I<H){I=H;
}}}
if(I>J||L>M){if(I>J&&L>M){I=J;
L=M;
}else if(I>J){L+=(I-J);
I=J;
if(L>M){L=M;
}}else if(L>M){I+=(L-M);
L=M;
if(I>J){I=J;
}}}return {begin:I,end:L};
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var f="qx.event.type.Data",e="qx.ui.container.Composite",d="addChildWidget",c="removeChildWidget";
qx.Class.define(e,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(h){arguments.callee.base.call(this);

if(h!=null){this._setLayout(h);
}},events:{addChildWidget:f,removeChildWidget:f},members:{_afterAddChild:function(g){this.fireNonBubblingEvent(d,qx.event.type.Data,[g]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(c,qx.event.type.Data,[i]);
}},defer:function(a,b){qx.ui.core.MChildrenHandling.remap(b);
qx.ui.core.MLayoutHandling.remap(b);
}});
})();
(function(){var T="scrollbar-y",S="scrollbar-x",R="pane",Q="auto",P="corner",O="on",N="changeVisibility",M="scroll",L="_computeScrollbars",K="off",D="scrollY",J="abstract",G="update",B="scrollX",A="mousewheel",F="scrollbarY",E="scrollbarX",H="horizontal",z="scrollarea",I="qx.ui.core.AbstractScrollArea",C="vertical";
qx.Class.define(I,{extend:qx.ui.core.Widget,type:J,construct:function(){arguments.callee.base.call(this);
var u=new qx.ui.layout.Grid();
u.setColumnFlex(0,1);
u.setRowFlex(0,1);
this._setLayout(u);
this.addListener(A,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:z},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[Q,O,K],init:Q,apply:L},scrollbarY:{check:[Q,O,K],init:Q,apply:L},scrollbar:{group:[E,F]}},members:{_createChildControlImpl:function(b){var c;

switch(b){case R:c=new qx.ui.core.ScrollPane();
c.addListener(G,this._computeScrollbars,this);
c.addListener(B,this._onScrollPaneX,this);
c.addListener(D,this._onScrollPaneY,this);
this._add(c,{row:0,column:0});
break;
case S:c=new qx.ui.core.ScrollBar(H);
c.setMinWidth(0);
c.exclude();
c.addListener(M,this._onScrollBarX,this);
c.addListener(N,this._onChangeScrollbarXVisibility,this);
this._add(c,{row:1,column:0});
break;
case T:c=new qx.ui.core.ScrollBar(C);
c.setMinHeight(0);
c.exclude();
c.addListener(M,this._onScrollBarY,this);
c.addListener(N,this._onChangeScrollbarYVisibility,this);
this._add(c,{row:0,column:1});
break;
case P:c=new qx.ui.core.Widget();
c.setWidth(0);
c.setHeight(0);
c.exclude();
this._add(c,{row:1,column:1});
break;
}return c||arguments.callee.base.call(this,b);
},getPaneSize:function(){return this.getChildControl(R).getInnerSize();
},getItemTop:function(U){return this.getChildControl(R).getItemTop(U);
},getItemBottom:function(y){return this.getChildControl(R).getItemBottom(y);
},getItemLeft:function(w){return this.getChildControl(R).getItemLeft(w);
},getItemRight:function(x){return this.getChildControl(R).getItemRight(x);
},scrollToX:function(v){qx.ui.core.queue.Manager.flush();
this.getChildControl(S).scrollTo(v);
},scrollByX:function(X){qx.ui.core.queue.Manager.flush();
this.getChildControl(S).scrollBy(X);
},getScrollX:function(){var a=this.getChildControl(S,true);
return a?a.getPosition():0;
},scrollToY:function(h){qx.ui.core.queue.Manager.flush();
this.getChildControl(T).scrollTo(h);
},scrollByY:function(j){qx.ui.core.queue.Manager.flush();
this.getChildControl(T).scrollBy(j);
},getScrollY:function(){var i=this.getChildControl(T,true);
return i?i.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(R).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(R).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var f=this._isChildControlVisible(S);
var g=this._isChildControlVisible(T);
var d=(g)?this.getChildControl(T,true):(f?this.getChildControl(S,true):null);

if(d){d.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var V=this._isChildControlVisible(S);
var W=this._isChildControlVisible(T);

if(!V){this.scrollToX(0);
}V&&W?this._showChildControl(P):this._excludeChildControl(P);
},_onChangeScrollbarYVisibility:function(e){var Y=this._isChildControlVisible(S);
var ba=this._isChildControlVisible(T);

if(!ba){this.scrollToY(0);
}Y&&ba?this._showChildControl(P):this._excludeChildControl(P);
},_computeScrollbars:function(){var q=this.getChildControl(R);
var content=q.getChild();

if(!content){this._excludeChildControl(S);
this._excludeChildControl(T);
return;
}var k=this.getInnerSize();
var p=q.getInnerSize();
var n=q.getScrollSize();
if(!p||!n){return;
}var r=this.getScrollbarX();
var s=this.getScrollbarY();

if(r===Q&&s===Q){var o=n.width>k.width;
var t=n.height>k.height;
if((o||t)&&!(o&&t)){if(o){t=n.height>p.height;
}else if(t){o=n.width>p.width;
}}}else{var o=r===O;
var t=s===O;
if(n.width>(o?p.width:k.width)&&r===Q){o=true;
}
if(n.height>(o?p.height:k.height)&&s===Q){t=true;
}}if(o){var m=this.getChildControl(S);
m.show();
m.setMaximum(Math.max(0,n.width-p.width-1));
m.setKnobFactor(p.width/n.width);
}else{this._excludeChildControl(S);
}
if(t){var l=this.getChildControl(T);
l.show();
l.setMaximum(Math.max(0,n.height-p.height-1));
l.setKnobFactor(p.height/n.height);
}else{this._excludeChildControl(T);
}}}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelected:function(){return true;
},setSelected:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var e="qx.ui.core.IMultiSelection",d="qx.event.type.Data";
qx.Interface.define(e,{events:{"changeSelection":d},members:{getSelection:function(){return true;
},setSelection:function(b){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(a){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},selectAll:function(){return true;
},addToSelection:function(f){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
},getSelectables:function(){return true;
}}});
})();
(function(){var A="Boolean",z="changeSelection",y="single",x="__ie",w="qx.ui.core.MSelectionHandling",v="mousedown",u="losecapture",t="one",s="multi",r="_applyQuickSelection",k="mouseover",q="_applySelectionMode",n="_applyDragSelection",j="mouseup",i="mousemove",m="removeItem",l="keypress",o="addItem",h="additive",p="qx.event.type.Data";
qx.Mixin.define(w,{construct:function(){var I=this.SELECTION_MANAGER;
var H=this.__ie=new I(this);
this.addListener(v,H.handleMouseDown,H);
this.addListener(j,H.handleMouseUp,H);
this.addListener(k,H.handleMouseOver,H);
this.addListener(i,H.handleMouseMove,H);
this.addListener(u,H.handleLoseCapture,H);
this.addListener(l,H.handleKeyPress,H);
this.addListener(o,H.handleAddItem,H);
this.addListener(m,H.handleRemoveItem,H);
H.addListener(z,this._onSelectionChange,this);
},events:{"changeSelection":p},properties:{selectionMode:{check:[y,s,h,t],init:y,apply:q},dragSelection:{check:A,init:false,apply:n},quickSelection:{check:A,init:false,apply:r}},members:{__ie:null,selectAll:function(){this.__ie.selectAll();
},select:function(J){this.setSelected(J);
},setSelected:function(B){this.__ie.selectItem(B);
},isSelected:function(E){return this.__ie.isItemSelected(E);
},addToSelection:function(G){this.__ie.addItem(G);
},removeFromSelection:function(c){this.__ie.removeItem(c);
},selectRange:function(C,D){this.__ie.selectItemRange(C,D);
},clearSelection:function(){this.resetSelection();
},resetSelection:function(){this.__ie.clearSelection();
},replaceSelection:function(g){this.setSelection(g);
},setSelection:function(F){this.__ie.replaceSelection(F);
},getSelectedItem:function(){return this.getSelected();
},getSelected:function(){return this.__ie.getSelectedItem();
},getSelection:function(){return this.__ie.getSelection();
},getSortedSelection:function(){return this.__ie.getSortedSelection();
},isSelectionEmpty:function(){return this.__ie.isSelectionEmpty();
},getSelectionContext:function(){return this.__ie.getSelectionContext();
},_getManager:function(){return this.__ie;
},getSelectables:function(){return this.__ie.getSelectables();
},_applySelectionMode:function(a,b){this.__ie.setMode(a);
},_applyDragSelection:function(K,L){this.__ie.setDrag(K);
},_applyQuickSelection:function(d,f){this.__ie.setQuick(d);
},_onSelectionChange:function(e){this.fireDataEvent(z,e.getData());
}},destruct:function(){this._disposeObjects(x);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__if:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__ig:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__ig[name];
s[t]();
}else{var u=this.__if[name];
s[u](q);
}}}});
})();
(function(){var J="one",I="single",H="selected",G="additive",F="multi",E="PageUp",D="under",C="Left",B="lead",A="Down",bm="Up",bl="Boolean",bk="PageDown",bj="anchor",bi="End",bh="Home",bg="Right",bf="right",be="click",bd="above",Q="left",R="__ih",O="Escape",P="A",M="Space",N="__iy",K="_applyMode",L="interval",S="changeSelection",T="qx.event.type.Data",W="quick",V="__iA",Y="key",X="__iz",bb="abstract",ba="__ik",U="drag",bc="qx.ui.core.selection.Abstract";
qx.Class.define(bc,{type:bb,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ih={};
},events:{"changeSelection":T},properties:{mode:{check:[I,F,G,J],init:I,apply:K},drag:{check:bl,init:false},quick:{check:bl,init:false}},members:{__ii:0,__ij:0,__ik:null,__il:null,__im:null,__in:null,__io:null,__ip:null,__iq:null,__ir:null,__is:null,__it:null,__iu:null,__iv:null,__iw:null,__ix:null,__iy:null,__ih:null,__iz:null,__iA:null,getSelectionContext:function(){return this.__ix;
},selectAll:function(){var bY=this.getMode();

if(bY==I||bY==J){throw new Error("Can not select all items in selection mode: "+bY);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cq){this._setSelectedItem(cq);
var cr=this.getMode();

if(cr!==I&&cr!==J){this._setLeadItem(cq);
this._setAnchorItem(cq);
}this._scrollItemIntoView(cq);
this._fireChange();
},addItem:function(bv){var bw=this.getMode();

if(bw===I||bw===J){this._setSelectedItem(bv);
}else{if(!this._getAnchorItem()){this._setAnchorItem(bv);
}this._setLeadItem(bv);
this._addToSelection(bv);
}this._scrollItemIntoView(bv);
this._fireChange();
},removeItem:function(cg){this._removeFromSelection(cg);

if(this.getMode()===J&&this.isSelectionEmpty()){var ch=this._getFirstSelectable();

if(ch){this.addItem(ch);
}if(ch==cg){return;
}}
if(this._getLeadItem()==cg){this._setLeadItem(null);
}
if(this._getAnchorItem()==cg){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(bS,bT){var bU=this.getMode();

if(bU==I||bU==J){throw new Error("Can not select multiple items in selection mode: "+bU);
}this._selectItemRange(bS,bT);
this._setAnchorItem(bS);
this._setLeadItem(bT);
this._scrollItemIntoView(bT);
this._fireChange();
},clearSelection:function(){if(this.getMode()==J){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bH){var bI=this.getMode();

if(bI==J||bI===I){if(bH.length>1){throw new Error("Could not select more than one items in mode: "+bI+"!");
}
if(bH.length==1){this.selectItem(bH[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bH);
}},getSelectedItem:function(){var bM=this.getMode();

if(bM===I||bM===J){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__ih);
},getSortedSelection:function(){var d=this.getSelectables();
var c=qx.lang.Object.getValues(this.__ih);
c.sort(function(a,b){return d.indexOf(a)-d.indexOf(b);
});
return c;
},isItemSelected:function(ce){var cf=this._selectableToHashCode(ce);
return this.__ih[cf]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__ih);
},_setLeadItem:function(f){var g=this.__iy;

if(g!==null){this._styleSelectable(g,B,false);
}
if(f!==null){this._styleSelectable(f,B,true);
}this.__iy=f;
},_getLeadItem:function(){return this.__iy!==null?this.__iy:null;
},_setAnchorItem:function(cL){var cM=this.__iz;

if(cM){this._styleSelectable(cM,bj,false);
}
if(cL){this._styleSelectable(cL,bj,true);
}this.__iz=cL;
},_getAnchorItem:function(){return this.__iz!==null?this.__iz:null;
},_isSelectable:function(h){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bF=event.getTarget();
return this._isSelectable(bF)?bF:null;
},_selectableToHashCode:function(bL){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bC,bD,bE){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bn){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bR){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bx,by){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bo){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(y,z){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(cN,cO){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(ck,cl){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(cQ,cR){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(cQ===J){var cS=this._getFirstSelectable();

if(cS){this._setSelectedItem(cS);
this._scrollItemIntoView(cS);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var cp=this.getMode();

if(cp!==J&&cp!==I){return;
}var co=this._getSelectableFromMouseEvent(event);

if(co===null){return;
}this._setSelectedItem(co);
this._fireChange(W);
},handleMouseDown:function(event){var bq=this._getSelectableFromMouseEvent(event);

if(bq===null){return;
}var bs=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bp=event.isShiftPressed();
if(this.isItemSelected(bq)&&!bp&&!bs&&!this.getDrag()){this.__iA=bq;
return;
}else{this.__iA=null;
}this._scrollItemIntoView(bq);
switch(this.getMode()){case I:case J:this._setSelectedItem(bq);
break;
case G:this._setLeadItem(bq);
this._setAnchorItem(bq);
this._toggleInSelection(bq);
break;
case F:this._setLeadItem(bq);
if(bp){var br=this._getAnchorItem();

if(br===null){br=this._getFirstSelectable();
this._setAnchorItem(br);
}this._selectItemRange(br,bq,bs);
}else if(bs){this._setAnchorItem(bq);
this._toggleInSelection(bq);
}else{this._setAnchorItem(bq);
this._setSelectedItem(bq);
}break;
}var bt=this.getMode();

if(this.getDrag()&&bt!==I&&bt!==J&&!bp&&!bs){this.__io=this._getLocation();
this.__il=this._getScroll();
this.__ip=event.getDocumentLeft()+this.__il.left;
this.__iq=event.getDocumentTop()+this.__il.top;
this.__ir=true;
this._capture();
}this._fireChange(be);
},handleMouseUp:function(event){var bQ=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bN=event.isShiftPressed();

if(!bQ&&!bN&&this.__iA){var bO=this._getSelectableFromMouseEvent(event);

if(bO===null||!this.isItemSelected(bO)){return;
}var bP=this.getMode();

if(bP===G){this._removeFromSelection(bO);
}else{this._setSelectedItem(bO);

if(this.getMode()===F){this._setLeadItem(bO);
this._setAnchorItem(bO);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__ir){return;
}this.__is=event.getDocumentLeft();
this.__it=event.getDocumentTop();
var bK=this.__is+this.__il.left;

if(bK>this.__ip){this.__iu=1;
}else if(bK<this.__ip){this.__iu=-1;
}else{this.__iu=0;
}var bJ=this.__it+this.__il.top;

if(bJ>this.__iq){this.__iv=1;
}else if(bJ<this.__iq){this.__iv=-1;
}else{this.__iv=0;
}var location=this.__io;

if(this.__is<location.left){this.__ii=this.__is-location.left;
}else if(this.__is>location.right){this.__ii=this.__is-location.right;
}else{this.__ii=0;
}
if(this.__it<location.top){this.__ij=this.__it-location.top;
}else if(this.__it>location.bottom){this.__ij=this.__it-location.bottom;
}else{this.__ij=0;
}if(!this.__ik){this.__ik=new qx.event.Timer(100);
this.__ik.addListener(L,this._onInterval,this);
}this.__ik.start();
this._autoSelect();
},handleAddItem:function(e){var cP=e.getData();

if(this.getMode()===J&&this.isSelectionEmpty()){this.addItem(cP);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__ir){return;
}if(this.__iw){this._fireChange(be);
}delete this.__ir;
delete this.__im;
delete this.__in;
this._releaseCapture();
if(this.__ik){this.__ik.stop();
}},_onInterval:function(e){this._scrollBy(this.__ii,this.__ij);
this.__il=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var s=this._getDimension();
var k=Math.max(0,Math.min(this.__is-this.__io.left,s.width))+this.__il.left;
var j=Math.max(0,Math.min(this.__it-this.__io.top,s.height))+this.__il.top;
if(this.__im===k&&this.__in===j){return;
}this.__im=k;
this.__in=j;
var u=this._getAnchorItem();
var n=u;
var q=this.__iu;
var t,m;

while(q!==0){t=q>0?this._getRelatedSelectable(n,bf):this._getRelatedSelectable(n,Q);
if(t!==null){m=this._getSelectableLocationX(t);
if((q>0&&m.left<=k)||(q<0&&m.right>=k)){n=t;
continue;
}}break;
}var r=this.__iv;
var p,o;

while(r!==0){p=r>0?this._getRelatedSelectable(n,D):this._getRelatedSelectable(n,bd);
if(p!==null){o=this._getSelectableLocationY(p);
if((r>0&&o.top<=j)||(r<0&&o.bottom>=j)){n=p;
continue;
}}break;
}var v=this.getMode();

if(v===F){this._selectItemRange(u,n);
}else if(v===G){if(this.isItemSelected(u)){this._selectItemRange(u,n,true);
}else{this._deselectItemRange(u,n);
}this._setAnchorItem(n);
}this._fireChange(U);
},__iB:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var cF,cE;
var cH=event.getKeyIdentifier();
var cG=this.getMode();
var cB=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cC=event.isShiftPressed();
var cD=false;

if(cH===P&&cB){if(cG!==I&&cG!==J){this._selectAllItems();
cD=true;
}}else if(cH===O){if(cG!==I&&cG!==J){this._clearSelection();
cD=true;
}}else if(cH===M){var cA=this._getLeadItem();

if(cA&&!cC){if(cB||cG===G){this._toggleInSelection(cA);
}else{this._setSelectedItem(cA);
}cD=true;
}}else if(this.__iB[cH]){cD=true;

if(cG===I||cG==J){cF=this._getSelectedItem();
}else{cF=this._getLeadItem();
}var cJ=this._getFirstSelectable();
var cz=this._getLastSelectable();

if(cF!==null){switch(cH){case bh:cE=cJ;
break;
case bi:cE=cz;
break;
case bm:cE=this._getRelatedSelectable(cF,bd);
break;
case A:cE=this._getRelatedSelectable(cF,D);
break;
case C:cE=this._getRelatedSelectable(cF,Q);
break;
case bg:cE=this._getRelatedSelectable(cF,bf);
break;
case E:cE=this._getPage(cF,true);
break;
case bk:cE=this._getPage(cF,false);
break;
}}else{switch(cH){case bh:case A:case bg:case bk:cE=cJ;
break;
case bi:case bm:case C:case E:cE=cz;
break;
}}if(cE!==null){switch(cG){case I:case J:this._setSelectedItem(cE);
break;
case G:this._setLeadItem(cE);
break;
case F:if(cC){var cI=this._getAnchorItem();

if(cI===null){this._setAnchorItem(cI=this._getFirstSelectable());
}this._setLeadItem(cE);
this._selectItemRange(cI,cE,cB);
}else{this._setAnchorItem(cE);
this._setLeadItem(cE);

if(!cB){this._setSelectedItem(cE);
}}break;
}this._scrollItemIntoView(cE);
}}
if(cD){event.stop();
this._fireChange(Y);
}},_selectAllItems:function(){var cK=this.getSelectables();

for(var i=0,l=cK.length;i<l;i++){this._addToSelection(cK[i]);
}},_clearSelection:function(){var ca=this.__ih;

for(var cb in ca){this._removeFromSelection(ca[cb]);
}this.__ih={};
},_selectItemRange:function(cT,cU,cV){var cY=this._getSelectableRange(cT,cU);
if(!cV){var cX=this.__ih;
var da=this.__iC(cY);

for(var cW in cX){if(!da[cW]){this._removeFromSelection(cX[cW]);
}}}for(var i=0,l=cY.length;i<l;i++){this._addToSelection(cY[i]);
}},_deselectItemRange:function(bz,bA){var bB=this._getSelectableRange(bz,bA);

for(var i=0,l=bB.length;i<l;i++){this._removeFromSelection(bB[i]);
}},__iC:function(bV){var bX={};
var bW;

for(var i=0,l=bV.length;i<l;i++){bW=bV[i];
bX[this._selectableToHashCode(bW)]=bW;
}return bX;
},_getSelectedItem:function(){for(var bu in this.__ih){return this.__ih[bu];
}return null;
},_setSelectedItem:function(cc){if(this._isSelectable(cc)){var cd=this.__ih;

if(!cd[cc.$$hash]||qx.lang.Object.hasMinLength(cd,2)){this._clearSelection();
this._addToSelection(cc);
}}},_addToSelection:function(w){var x=this._selectableToHashCode(w);

if(!this.__ih[x]&&this._isSelectable(w)){this.__ih[x]=w;
this._styleSelectable(w,H,true);
this.__iw=true;
}},_toggleInSelection:function(cm){var cn=this._selectableToHashCode(cm);

if(!this.__ih[cn]){this.__ih[cn]=cm;
this._styleSelectable(cm,H,true);
}else{delete this.__ih[cn];
this._styleSelectable(cm,H,false);
}this.__iw=true;
},_removeFromSelection:function(ci){var cj=this._selectableToHashCode(ci);

if(this.__ih[cj]!==null){delete this.__ih[cj];
this._styleSelectable(ci,H,false);
this.__iw=true;
}},_replaceMultiSelection:function(cs){var cv=false;
var cy,cx;
var ct={};

for(var i=0,l=cs.length;i<l;i++){cy=cs[i];

if(this._isSelectable(cy)){cx=this._selectableToHashCode(cy);
ct[cx]=cy;
}}var cu=cy;
var cw=this.__ih;

for(var cx in cw){if(ct[cx]){delete ct[cx];
}else{cy=cw[cx];
delete cw[cx];
this._styleSelectable(cy,H,false);
cv=true;
}}for(var cx in ct){cy=cw[cx]=ct[cx];
this._styleSelectable(cy,H,true);
cv=true;
}if(!cv){return false;
}this._scrollItemIntoView(cu);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__iw=true;
this._fireChange();
},_fireChange:function(bG){if(this.__iw){this.__ix=bG||null;
this.fireDataEvent(S,this.getSelection());
delete this.__iw;
}}},destruct:function(){this._disposeObjects(ba);
this._disposeFields(R,V,X,N);
}});
})();
(function(){var g="vertical",f="under",e="above",d="qx.ui.core.selection.Widget",c="__iD",b="left",a="right";
qx.Class.define(d,{extend:qx.ui.core.selection.Abstract,construct:function(E){arguments.callee.base.call(this);
this.__iD=E;
},members:{__iD:null,_isSelectable:function(D){return D.isEnabled()&&D.getLayoutParent()===this.__iD;
},_selectableToHashCode:function(h){return h.$$hash;
},_styleSelectable:function(F,G,H){H?F.addState(G):F.removeState(G);
},_capture:function(){this.__iD.capture();
},_releaseCapture:function(){this.__iD.releaseCapture();
},_getWidget:function(){return this.__iD;
},_getLocation:function(){var C=this.__iD.getContentElement().getDomElement();
return C?qx.bom.element.Location.get(C):null;
},_getDimension:function(){return this.__iD.getInnerSize();
},_getSelectableLocationX:function(A){var B=A.getBounds();

if(B){return {left:B.left,right:B.left+B.width};
}},_getSelectableLocationY:function(y){var z=y.getBounds();

if(z){return {top:z.top,bottom:z.top+z.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(w,x){},_scrollItemIntoView:function(q){this.__iD.scrollChildIntoView(q);
},getSelectables:function(){var u=this.__iD.getChildren();
var v=[];
var t;

for(var i=0,l=u.length;i<l;i++){t=u[i];

if(t.isEnabled()){v.push(t);
}}return v;
},_getSelectableRange:function(I,J){if(I===J){return [I];
}var N=this.__iD.getChildren();
var K=[];
var M=false;
var L;

for(var i=0,l=N.length;i<l;i++){L=N[i];

if(L===I||L===J){if(M){K.push(L);
break;
}else{M=true;
}}
if(M&&L.isEnabled()){K.push(L);
}}return K;
},_getFirstSelectable:function(){var P=this.__iD.getChildren();

for(var i=0,l=P.length;i<l;i++){if(P[i].isEnabled()){return P[i];
}}return null;
},_getLastSelectable:function(){var O=this.__iD.getChildren();

for(var i=O.length-1;i>0;i--){if(O[i].isEnabled()){return O[i];
}}return null;
},_getRelatedSelectable:function(j,k){var o=this.__iD.getOrientation()===g;
var n=this.__iD.getChildren();
var m=n.indexOf(j);
var p;

if((o&&k===e)||(!o&&k===b)){for(var i=m-1;i>=0;i--){p=n[i];

if(p.isEnabled()){return p;
}}}else if((o&&k===f)||(!o&&k===a)){for(var i=m+1;i<n.length;i++){p=n[i];

if(p.isEnabled()){return p;
}}}return null;
},_getPage:function(r,s){if(s){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this._disposeFields(c);
}});
})();
(function(){var p="qx.ui.core.selection.ScrollArea";
qx.Class.define(p,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(n){return (n.isEnabled()&&n.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var o=this._getWidget();
return {left:o.getScrollX(),top:o.getScrollY()};
},_scrollBy:function(q,r){var s=this._getWidget();
s.scrollByX(q);
s.scrollByY(r);
},_getPage:function(a,b){var f=this.getSelectables();
var length=f.length;
var j=f.indexOf(a);
if(j===-1){throw new Error("Invalid lead item: "+a);
}var c=this._getWidget();
var l=c.getScrollY();
var innerHeight=c.getInnerSize().height;
var top,e,k;

if(b){var h=l;
var i=j;
while(1){for(;i>=0;i--){top=c.getItemTop(f[i]);
if(top<h){k=i+1;
break;
}}if(k==null){var m=this._getFirstSelectable();
return m==a?null:m;
}if(k>=j){h-=innerHeight+l-c.getItemBottom(a);
k=null;
continue;
}return f[k];
}}else{var g=innerHeight+l;
var i=j;
while(1){for(;i<length;i++){e=c.getItemBottom(f[i]);
if(e>g){k=i-1;
break;
}}if(k==null){var d=this._getLastSelectable();
return d==a?null:d;
}if(k<=j){g+=c.getItemTop(a)-l;
k=null;
continue;
}return f[k];
}}}}});
})();
(function(){var o="right",n="above",m="left",l="under",k="qx.ui.tree.SelectionManager";
qx.Class.define(k,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(i){var j=i.getBounds();

if(j){var top=this._getWidget().getItemTop(i);
return {top:top,bottom:top+j.height};
}},_isSelectable:function(f){return f instanceof qx.ui.tree.AbstractTreeItem&&f.isEnabled();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var h=this._getWidget();
return h.getRoot().getItems(true,false,h.getHideRoot());
},_getSelectableRange:function(a,b){if(a===b){return [a];
}var c=this.getSelectables();
var d=c.indexOf(a);
var e=c.indexOf(b);

if(d<0||e<0){return [];
}
if(d<e){return c.slice(d,e+1);
}else{return c.slice(e,d+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var g=this.getSelectables();

if(g.length>0){return g[g.length-1];
}else{return null;
}},_getRelatedSelectable:function(p,q){var r=this._getWidget();

switch(q){case n:return r.getPreviousSiblingOf(p,false);
case l:return r.getNextSiblingOf(p,false);
case m:if(p.isOpenable()&&p.isOpen()){p.setOpen(false);
}break;
case o:if(p.isOpenable()&&!p.isOpen()){p.setOpen(true);
}break;
}return null;
}}});
})();
(function(){var s="dblclick",r="click",q="visible",p="Boolean",o="excluded",n="qx.event.type.Data",m="_applyHideRoot",l="none",k="_applyRootOpenClose",j="__iE",c="_applyOpenMode",i="changeRoot",g="changeOpenMode",b="pane",a="_applyRoot",f="qx.ui.tree.Tree",d="qx.ui.tree.AbstractTreeItem",h="tree";
qx.Class.define(f,{extend:qx.ui.core.AbstractScrollArea,implement:[qx.ui.core.ISingleSelection,qx.ui.core.IMultiSelection],include:[qx.ui.core.MSelectionHandling,qx.ui.core.MContentPadding],construct:function(){arguments.callee.base.call(this);
this.__iE=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(b).add(this.__iE);
this.initOpenMode();
this.initRootOpenClose();
},events:{addItem:n,removeItem:n},properties:{openMode:{check:[r,s,l],init:s,apply:c,event:g,themeable:true},root:{check:d,init:null,nullable:true,event:i,apply:a},hideRoot:{check:p,init:false,apply:m},rootOpenClose:{check:p,init:false,apply:k},appearance:{refine:true,init:h},focusable:{refine:true,init:true}},members:{__iE:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__iE;
},_applyRoot:function(M,N){var O=this.getChildrenContainer();

if(N){O.remove(N);

if(N.hasChildren()){O.remove(N.getChildrenContainer());
}}
if(M){O.add(M);

if(M.hasChildren()){O.add(M.getChildrenContainer());
}M.setVisibility(this.getHideRoot()?o:q);
M.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(t,u){var v=this.getRoot();

if(!v){return;
}v.setVisibility(t?o:q);
v.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(y,z){var A=this.getRoot();

if(!A){return;
}A.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__iE;
},getNextSiblingOf:function(B,C){if((C!==false||B.isOpen())&&B.hasChildren()){return B.getChildren()[0];
}
while(B){var parent=B.getParent();

if(!parent){return null;
}var E=parent.getChildren();
var D=E.indexOf(B);

if(D>-1&&D<E.length-1){return E[D+1];
}B=parent;
}return null;
},getPreviousSiblingOf:function(G,H){var parent=G.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==G){return null;
}}}else{if(G==this.getRoot()){return null;
}}var K=parent.getChildren();
var I=K.indexOf(G);

if(I>0){var J=K[I-1];

while((H!==false||J.isOpen())&&J.hasChildren()){var L=J.getChildren();
J=L[L.length-1];
}return J;
}else{return parent;
}},getItems:function(P,Q){return this.getRoot().getItems(P,Q,this.getHideRoot());
},scrollChildIntoViewY:function(S,T,U){if(!this.getNextSiblingOf(S,false)){this.scrollToY(1000000);
}else{arguments.callee.base.call(this,S,T,U);
}},getTreeItem:function(R){while(R){if(R==this){return null;
}
if(R instanceof qx.ui.tree.AbstractTreeItem){return R;
}R=R.getLayoutParent();
}return null;
},_applyOpenMode:function(w,x){if(x==r){this.removeListener(r,this._onOpen,this);
}else if(x==s){this.removeListener(s,this._onOpen,this);
}
if(w==r){this.addListener(r,this._onOpen,this);
}else if(w==s){this.addListener(s,this._onOpen,this);
}},_onOpen:function(e){var F=this.getTreeItem(e.getTarget());

if(!F||!F.isOpenable()){return;
}F.setOpen(!F.isOpen());
e.stopPropagation();
}},destruct:function(){this._disposeObjects(j);
}});
})();
(function(){var ed="left",ec="top",eb="_applyLayoutChange",ea="hAlign",dY="flex",dX="vAlign",dW="Integer",dV="__iN",dU="__iH",dT="__iJ",dM="minWidth",dS="width",dP="__iG",dK="minHeight",dJ="__iF",dO="__iM",dN="qx.ui.layout.Grid",dQ="height",dI="maxHeight",dR="maxWidth",dL="__iI";
qx.Class.define(dN,{extend:qx.ui.layout.Abstract,construct:function(bm,bn){arguments.callee.base.call(this);
this.__iF=[];
this.__iG=[];

if(bm){this.setSpacingX(bm);
}
if(bn){this.setSpacingY(bn);
}},properties:{spacingX:{check:dW,init:0,apply:eb},spacingY:{check:dW,init:0,apply:eb}},members:{__iH:null,__iF:null,__iG:null,__iI:null,__iJ:null,__iK:null,__iL:null,__iM:null,__iN:null,verifyLayoutProperty:null,__iO:function(){var o=[];
var n=[];
var p=[];
var k=0;
var h=0;
var r=this._getLayoutChildren();

for(var i=0,l=r.length;i<l;i++){var m=r[i];
var q=m.getLayoutProperties();
var s=q.row;
var g=q.column;
q.colSpan=q.colSpan||1;
q.rowSpan=q.rowSpan||1;
if(s==null||g==null){throw new Error("The layout properties 'row' and 'column' must be defined!");
}
if(o[s]&&o[s][g]){throw new Error("There is already a widget in this cell ("+s+", "+g+")");
}
for(var x=g;x<g+q.colSpan;x++){for(var y=s;y<s+q.rowSpan;y++){if(o[y]==undefined){o[y]=[];
}o[y][x]=m;
h=Math.max(h,x);
k=Math.max(k,y);
}}
if(q.rowSpan>1){p.push(m);
}
if(q.colSpan>1){n.push(m);
}}for(var y=0;y<=k;y++){if(o[y]==undefined){o[y]=[];
}}this.__iH=o;
this.__iI=n;
this.__iJ=p;
this.__iK=k;
this.__iL=h;
delete this._invalidChildrenCache;
},_setRowData:function(cP,cQ,cR){var cS=this.__iF[cP];

if(!cS){this.__iF[cP]={};
this.__iF[cP][cQ]=cR;
}else{cS[cQ]=cR;
}},_setColumnData:function(dq,dr,ds){var dt=this.__iG[dq];

if(!dt){this.__iG[dq]={};
this.__iG[dq][dr]=ds;
}else{dt[dr]=ds;
}},setSpacing:function(a){this.setSpacingY(a);
this.setSpacingX(a);
},setColumnAlign:function(cp,cq,cr){{};
this._setColumnData(cp,ea,cq);
this._setColumnData(cp,dX,cr);
this._applyLayoutChange();
return this;
},getColumnAlign:function(da){var db=this.__iG[da]||{};
return {vAlign:db.vAlign||ec,hAlign:db.hAlign||ed};
},setRowAlign:function(cb,cc,cd){{};
this._setRowData(cb,ea,cc);
this._setRowData(cb,dX,cd);
this._applyLayoutChange();
return this;
},getRowAlign:function(cN){var cO=this.__iF[cN]||{};
return {vAlign:cO.vAlign||ec,hAlign:cO.hAlign||ed};
},getCellWidget:function(ce,cf){if(this._invalidChildrenCache){this.__iO();
}return this.__iH[ce][cf]||null;
},getCellAlign:function(bq,br){var bx=ec;
var bv=ed;
var bw=this.__iF[bq];
var bt=this.__iG[br];
var bs=this.__iH[bq][br];

if(bs){var bu={vAlign:bs.getAlignY(),hAlign:bs.getAlignX()};
}else{bu={};
}if(bu.vAlign){bx=bu.vAlign;
}else if(bw&&bw.vAlign){bx=bw.vAlign;
}else if(bt&&bt.vAlign){bx=bt.vAlign;
}if(bu.hAlign){bv=bu.hAlign;
}else if(bt&&bt.hAlign){bv=bt.hAlign;
}else if(bw&&bw.hAlign){bv=bw.hAlign;
}return {vAlign:bx,hAlign:bv};
},setColumnFlex:function(eg,eh){this._setColumnData(eg,dY,eh);
this._applyLayoutChange();
return this;
},getColumnFlex:function(ee){var ef=this.__iG[ee]||{};
return ef.flex!==undefined?ef.flex:0;
},setRowFlex:function(cX,cY){this._setRowData(cX,dY,cY);
this._applyLayoutChange();
return this;
},getRowFlex:function(b){var c=this.__iF[b]||{};
var d=c.flex!==undefined?c.flex:0;
return d;
},setColumnMaxWidth:function(bJ,bK){this._setColumnData(bJ,dR,bK);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(cV){var cW=this.__iG[cV]||{};
return cW.maxWidth!==undefined?cW.maxWidth:Infinity;
},setColumnWidth:function(bk,bl){this._setColumnData(bk,dS,bl);
this._applyLayoutChange();
return this;
},getColumnWidth:function(e){var f=this.__iG[e]||{};
return f.width!==undefined?f.width:null;
},setColumnMinWidth:function(bL,bM){this._setColumnData(bL,dM,bM);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bo){var bp=this.__iG[bo]||{};
return bp.minWidth||0;
},setRowMaxHeight:function(bi,bj){this._setRowData(bi,dI,bj);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(cn){var co=this.__iF[cn]||{};
return co.maxHeight||Infinity;
},setRowHeight:function(cT,cU){this._setRowData(cT,dQ,cU);
this._applyLayoutChange();
return this;
},getRowHeight:function(dc){var dd=this.__iF[dc]||{};
return dd.height!==undefined?dd.height:null;
},setRowMinHeight:function(cl,cm){this._setRowData(cl,dK,cm);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bN){var bO=this.__iF[bN]||{};
return bO.minHeight||0;
},__iP:function(cg){var ck=cg.getSizeHint();
var cj=cg.getMarginLeft()+cg.getMarginRight();
var ci=cg.getMarginTop()+cg.getMarginBottom();
var ch={height:ck.height+ci,width:ck.width+cj,minHeight:ck.minHeight+ci,minWidth:ck.minWidth+cj,maxHeight:ck.maxHeight+ci,maxWidth:ck.maxWidth+cj};
return ch;
},_fixHeightsRowSpan:function(cs){var cD=this.getSpacingY();

for(var i=0,l=this.__iJ.length;i<l;i++){var cv=this.__iJ[i];
var cx=this.__iP(cv);
var cy=cv.getLayoutProperties();
var cu=cy.row;
var cB=cD*(cy.rowSpan-1);
var ct=cB;
var cA={};

for(var j=0;j<cy.rowSpan;j++){var cF=cy.row+j;
var cw=cs[cF];
var cE=this.getRowFlex(cF);

if(cE>0){cA[cF]={min:cw.minHeight,value:cw.height,max:cw.maxHeight,flex:cE};
}cB+=cw.height;
ct+=cw.minHeight;
}if(cB<cx.height){var cC=qx.ui.layout.Util.computeFlexOffsets(cA,cx.height,cB);

for(var j=0;j<cy.rowSpan;j++){var cz=cC[cu+j]?cC[cu+j].offset:0;
cs[cu+j].height+=cz;
}}if(ct<cx.minHeight){var cC=qx.ui.layout.Util.computeFlexOffsets(cA,cx.minHeight,ct);

for(var j=0;j<cy.rowSpan;j++){var cz=cC[cu+j]?cC[cu+j].offset:0;
cs[cu+j].minHeight+=cz;
}}}},_fixWidthsColSpan:function(du){var dy=this.getSpacingX();

for(var i=0,l=this.__iI.length;i<l;i++){var dv=this.__iI[i];
var dx=this.__iP(dv);
var dA=dv.getLayoutProperties();
var dw=dA.column;
var dG=dy*(dA.colSpan-1);
var dz=dG;
var dB={};
var dD;

for(var j=0;j<dA.colSpan;j++){var dH=dA.column+j;
var dF=du[dH];
var dE=this.getColumnFlex(dH);
if(dE>0){dB[dH]={min:dF.minWidth,value:dF.width,max:dF.maxWidth,flex:dE};
}dG+=dF.width;
dz+=dF.minWidth;
}if(dG<dx.width){var dC=qx.ui.layout.Util.computeFlexOffsets(dB,dx.width,dG);

for(var j=0;j<dA.colSpan;j++){dD=dC[dw+j]?dC[dw+j].offset:0;
du[dw+j].width+=dD;
}}if(dz<dx.minWidth){var dC=qx.ui.layout.Util.computeFlexOffsets(dB,dx.minWidth,dz);

for(var j=0;j<dA.colSpan;j++){dD=dC[dw+j]?dC[dw+j].offset:0;
du[dw+j].minWidth+=dD;
}}}},_getRowHeights:function(){if(this.__iM!=null){return this.__iM;
}var bH=[];
var bA=this.__iK;
var bz=this.__iL;

for(var bI=0;bI<=bA;bI++){var bB=0;
var bD=0;
var bC=0;

for(var bG=0;bG<=bz;bG++){var by=this.__iH[bI][bG];

if(!by){continue;
}var bE=by.getLayoutProperties().rowSpan||0;

if(bE>1){continue;
}var bF=this.__iP(by);

if(this.getRowFlex(bI)>0){bB=Math.max(bB,bF.minHeight);
}else{bB=Math.max(bB,bF.height);
}bD=Math.max(bD,bF.height);
}var bB=Math.max(bB,this.getRowMinHeight(bI));
var bC=this.getRowMaxHeight(bI);

if(this.getRowHeight(bI)!==null){var bD=this.getRowHeight(bI);
}else{var bD=Math.max(bB,Math.min(bD,bC));
}bH[bI]={minHeight:bB,height:bD,maxHeight:bC};
}
if(this.__iJ.length>0){this._fixHeightsRowSpan(bH);
}this.__iM=bH;
return bH;
},_getColWidths:function(){if(this.__iN!=null){return this.__iN;
}var di=[];
var df=this.__iL;
var dh=this.__iK;

for(var dn=0;dn<=df;dn++){var dl=0;
var dk=0;
var dg=Infinity;

for(var dp=0;dp<=dh;dp++){var de=this.__iH[dp][dn];

if(!de){continue;
}var dj=de.getLayoutProperties().colSpan||0;

if(dj>1){continue;
}var dm=this.__iP(de);

if(this.getColumnFlex(dn)>0){dk=Math.max(dk,dm.minWidth);
}else{dk=Math.max(dk,dm.width);
}dl=Math.max(dl,dm.width);
}var dk=Math.max(dk,this.getColumnMinWidth(dn));
var dg=this.getColumnMaxWidth(dn);

if(this.getColumnWidth(dn)!==null){var dl=this.getColumnWidth(dn);
}else{var dl=Math.max(dk,Math.min(dl,dg));
}di[dn]={minWidth:dk,width:dl,maxWidth:dg};
}
if(this.__iI.length>0){this._fixWidthsColSpan(di);
}this.__iN=di;
return di;
},_getColumnFlexOffsets:function(t){var u=this.getSizeHint();
var A=t-u.width;

if(A==0){return {};
}var w=this._getColWidths();
var v={};

for(var i=0,l=w.length;i<l;i++){var B=w[i];
var z=this.getColumnFlex(i);

if((z<=0)||(B.width==B.maxWidth&&A>0)||(B.width==B.minWidth&&A<0)){continue;
}v[i]={min:B.minWidth,value:B.width,max:B.maxWidth,flex:z};
}return qx.ui.layout.Util.computeFlexOffsets(v,t,u.width);
},_getRowFlexOffsets:function(cG){var cH=this.getSizeHint();
var cK=cG-cH.height;

if(cK==0){return {};
}var cL=this._getRowHeights();
var cI={};

for(var i=0,l=cL.length;i<l;i++){var cM=cL[i];
var cJ=this.getRowFlex(i);

if((cJ<=0)||(cM.height==cM.maxHeight&&cK>0)||(cM.height==cM.minHeight&&cK<0)){continue;
}cI[i]={min:cM.minHeight,value:cM.height,max:cM.maxHeight,flex:cJ};
}return qx.ui.layout.Util.computeFlexOffsets(cI,cG,cH.height);
},renderLayout:function(C,D){if(this._invalidChildrenCache){this.__iO();
}var R=qx.ui.layout.Util;
var F=this.getSpacingX();
var L=this.getSpacingY();
var W=this._getColWidths();
var V=this._getColumnFlexOffsets(C);
var G=[];
var Y=this.__iL;
var E=this.__iK;
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

for(var M=0;M<=E;M++){var T=this.__iH[M][ba];
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
this.__iN=null;
this.__iM=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__iO();
}var bT=this._getColWidths();
var bV=0,bW=0;

for(var i=0,l=bT.length;i<l;i++){var bX=bT[i];

if(this.getColumnFlex(i)>0){bV+=bX.minWidth;
}else{bV+=bX.width;
}bW+=bX.width;
}var bY=this._getRowHeights();
var bR=0,bU=0;

for(var i=0,l=bY.length;i<l;i++){var ca=bY[i];

if(this.getRowFlex(i)>0){bR+=ca.minHeight;
}else{bR+=ca.height;
}bU+=ca.height;
}var bQ=this.getSpacingX()*(bT.length-1);
var bP=this.getSpacingY()*(bY.length-1);
var bS={minWidth:bV+bQ,width:bW+bQ,minHeight:bR+bP,height:bU+bP};
return bS;
}},destruct:function(){this._disposeFields(dU,dJ,dP,dL,dT,dV,dO);
}});
})();
(function(){var M="resize",L="scrollY",K="typeof value=='number'&&value>=0&&value<=this.getScrollMaxX()",J="update",I="scrollX",H="_applyScrollX",G="_applyScrollY",F="appear",E="qx.ui.core.ScrollPane",D="qx.event.type.Event",B="typeof value=='number'&&value>=0&&value<=this.getScrollMaxY()",C="scroll";
qx.Class.define(E,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(M,this._onUpdate);
var h=this.getContentElement();
h.addListener(C,this._onScroll,this);
h.addListener(F,this._onAppear,this);
},events:{update:D},properties:{scrollX:{check:K,apply:H,event:I,init:0},scrollY:{check:B,apply:G,event:L,init:0}},members:{add:function(k){var l=this._getChildren()[0];

if(l){this._remove(l);
l.removeListener(M,this._onUpdate,this);
}
if(k){this._add(k);
k.addListener(M,this._onUpdate,this);
}},remove:function(n){if(n){this._remove(n);
n.removeListener(M,this._onUpdate,this);
}},getChild:function(){return this._getChildren()[0]||null;
},_onUpdate:function(e){this.fireEvent(J);
},_onScroll:function(e){var t=this.getContentElement();
this.setScrollX(t.getScrollX());
this.setScrollY(t.getScrollY());
},_onAppear:function(e){var z=this.getContentElement();
var u=this.getScrollX();
var v=z.getScrollX();

if(u!=v){z.scrollToX(u);
}var A=this.getScrollY();
var w=z.getScrollY();

if(A!=w){z.scrollToY(A);
}},getItemTop:function(g){var top=0;

do{top+=g.getBounds().top;
g=g.getLayoutParent();
}while(g&&g!==this);
return top;
},getItemBottom:function(q){return this.getItemTop(q)+q.getBounds().height;
},getItemLeft:function(i){var j=0;
var parent;

do{j+=i.getBounds().left;
parent=i.getLayoutParent();

if(parent){j+=parent.getInsets().left;
}i=parent;
}while(i&&i!==this);
return j;
},getItemRight:function(m){return this.getItemLeft(m)+m.getBounds().width;
},getScrollSize:function(){return this.getChild().getBounds();
},getScrollMaxX:function(){var f=this.getInnerSize();
var e=this.getScrollSize();

if(f&&e){return Math.max(0,e.width-f.width);
}return 0;
},getScrollMaxY:function(){var s=this.getInnerSize();
var r=this.getScrollSize();

if(s&&r){return Math.max(0,r.height-s.height);
}return 0;
},scrollToX:function(b){var c=this.getScrollMaxX();

if(b<0){b=0;
}else if(b>c){b=c;
}this.setScrollX(b);
},scrollToY:function(o){var p=this.getScrollMaxY();

if(o<0){o=0;
}else if(o>p){o=p;
}this.setScrollY(o);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(a){this.getContentElement().scrollToX(a);
},_applyScrollY:function(d){this.getContentElement().scrollToY(d);
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
qx.Class.define(r,{extend:qx.ui.core.Widget,construct:function(L){arguments.callee.base.call(this);
this._createChildControl(i);
this._createChildControl(k);
this._createChildControl(h);
if(L!=null){this.setOrientation(L);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,g],init:j,apply:s},maximum:{check:p,apply:l,init:100},position:{check:u,init:0,apply:m,event:o},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:w,apply:t,nullable:true}},members:{_createChildControlImpl:function(G){var H;

switch(G){case k:H=new qx.ui.core.ScrollSlider;
H.setPageStep(100);
H.setFocusable(false);
H.addListener(v,this._onChangeSliderValue,this);
this._add(H,{flex:1});
break;
case i:H=new qx.ui.form.RepeatButton;
H.setFocusable(false);
H.addListener(d,this._onExecuteBegin,this);
this._add(H);
break;
case h:H=new qx.ui.form.RepeatButton;
H.setFocusable(false);
H.addListener(d,this._onExecuteEnd,this);
this._add(H);
break;
}return H||arguments.callee.base.call(this,G);
},_applyMaximum:function(y){this.getChildControl(k).setMaximum(y);
},_applyPosition:function(E){this.getChildControl(k).setValue(E);
},_applyKnobFactor:function(D){this.getChildControl(k).setKnobFactor(D);
},_applyPageStep:function(B){this.getChildControl(k).setPageStep(B);
},_applyOrientation:function(I,J){var K=this._getLayout();

if(K){K.dispose();
}if(I===j){this._setLayout(new qx.ui.layout.HBox());
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
}this.getChildControl(k).setOrientation(I);
},scrollTo:function(C){this.getChildControl(k).slideTo(C);
},scrollBy:function(F){this.getChildControl(k).slideBy(F);
},scrollBySteps:function(z){var A=this.getSingleStep();
this.getChildControl(k).slideBy(z*A);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IFormElement",a="boolean";
qx.Interface.define(b,{events:{"changeValue":c,"changeName":c,"changeEnabled":c},members:{setEnabled:function(e){this.assertType(e,a);
},getEnabled:function(){},setName:function(f){this.assertString(f);
},getName:function(){},setValue:function(d){return arguments.length==1;
},getValue:function(){}}});
})();
(function(){var q="knob",p="horizontal",o="vertical",n="Integer",m="px",l="mousemove",k="resize",j="left",i="top",h="mouseup",W="slider",V="PageUp",U="mousedown",T="height",S="changeValue",R="Left",Q="Down",P="Up",O="dblclick",N="qx.ui.form.Slider",x="PageDown",y="mousewheel",v="interval",w="_applyValue",t="_applyKnobFactor",u="End",r="String",s="width",z="_applyOrientation",A="Home",F="floor",E="_applyMinimum",H="click",G="Right",J="keypress",I="ceil",C="changeName",M="losecapture",L="contextmenu",K="_applyMaximum",B="Number",D="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(N,{extend:qx.ui.core.Widget,implement:qx.ui.form.IFormElement,construct:function(bC){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(J,this._onKeyPress);
this.addListener(y,this._onMouseWheel);
this.addListener(U,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(M,this._onMouseUp);
this.addListener(k,this._onUpdate);
this.addListener(L,this._onStopEvent);
this.addListener(H,this._onStopEvent);
this.addListener(O,this._onStopEvent);
if(bC!=null){this.setOrientation(bC);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:W},focusable:{refine:true,init:true},orientation:{check:[p,o],init:p,apply:z},name:{check:r,nullable:true,event:C},value:{check:D,init:0,apply:w,event:S},minimum:{check:n,init:0,apply:E},maximum:{check:n,init:100,apply:K},singleStep:{check:n,init:1},pageStep:{check:n,init:10},knobFactor:{check:B,apply:t,nullable:true}},members:{__iQ:null,__iR:null,__iS:null,__iT:null,__iU:null,__iV:null,__iW:null,__iX:null,__iY:null,_createChildControlImpl:function(X){var Y;

switch(X){case q:Y=new qx.ui.core.Widget();
Y.addListener(k,this._onUpdate,this);
this._add(Y);
break;
}return Y||arguments.callee.base.call(this,X);
},_onMouseWheel:function(e){var bm=e.getWheelDelta()>0?1:-1;
this.slideBy(bm*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bx=this.getOrientation()===p;
var bw=bx?R:P;
var forward=bx?G:Q;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bw:this.slideBack();
break;
case x:this.slidePageForward();
break;
case V:this.slidePageBack();
break;
case A:this.slideToBegin();
break;
case u:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__iT){return;
}var bq=this.__jb;
var bo=this.getChildControl(q);
var bp=bq?j:i;
var bs=bq?e.getDocumentLeft():e.getDocumentTop();
var bt=this.__iQ=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bp];
var br=this.__iR=qx.bom.element.Location.get(bo.getContainerElement().getDomElement())[bp];

if(e.getTarget()===bo){this.__iT=true;
this.__iU=bs+bt-br;
}else{this.__iV=true;
this.__iW=bs<=br?-1:1;
this.__jc(e);
this._onInterval();
if(!this.__iY){this.__iY=new qx.event.Timer(100);
this.__iY.addListener(v,this._onInterval,this);
}this.__iY.start();
}this.addListener(l,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__iT){this.releaseCapture();
delete this.__iT;
delete this.__iU;
}else if(this.__iV){this.__iY.stop();
this.releaseCapture();
delete this.__iV;
delete this.__iW;
delete this.__iX;
}this.removeListener(l,this._onMouseMove);
if(e.getType()===h){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__iT){var bH=this.__jb?e.getDocumentLeft():e.getDocumentTop();
var bG=bH-this.__iU;
this.slideTo(this._positionToValue(bG));
}else if(this.__iV){this.__jc(e);
}e.stopPropagation();
},_onInterval:function(e){var by=this.getValue()+(this.__iW*this.getPageStep());
if(by<this.getMinimum()){by=this.getMinimum();
}else if(by>this.getMaximum()){by=this.getMaximum();
}var bz=this.__iW==-1;

if((bz&&by<=this.__iX)||(!bz&&by>=this.__iX)){by=this.__iX;
}this.slideTo(by);
},_onUpdate:function(e){var bJ=this.getInnerSize();
var bK=this.getChildControl(q).getBounds();
var bI=this.__jb?s:T;
this._updateKnobSize();
this.__ja=bJ[bI]-bK[bI];
this.__iS=bK[bI];
this._updateKnobPosition();
},__jb:false,__ja:0,__jc:function(e){var ba=this.__jb;
var bh=ba?e.getDocumentLeft():e.getDocumentTop();
var bj=this.__iQ;
var bb=this.__iR;
var bl=this.__iS;
var bi=bh-bj;

if(bh>=bb){bi-=bl;
}var bf=this._positionToValue(bi);
var bc=this.getMinimum();
var bd=this.getMaximum();

if(bf<bc){bf=bc;
}else if(bf>bd){bf=bd;
}else{var bg=this.getValue();
var be=this.getPageStep();
var bk=this.__iW<0?F:I;
bf=bg+(Math[bk]((bf-bg)/be)*be);
}if(this.__iX==null||(this.__iW==-1&&bf<=this.__iX)||(this.__iW==1&&bf>=this.__iX)){this.__iX=bf;
}},_positionToValue:function(bO){var bP=this.__ja;
if(bP==null||bP==0){return 0;
}var bR=bO/bP;

if(bR<0){bR=0;
}else if(bR>1){bR=1;
}var bQ=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bQ*bR);
},_valueToPosition:function(a){var b=this.__ja;

if(b==null){return 0;
}var c=this.getMaximum()-this.getMinimum();
if(c==0){return 0;
}var a=a-this.getMinimum();
var d=a/c;

if(d<0){d=0;
}else if(d>1){d=1;
}return Math.round(b*d);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(f){var g=this.getChildControl(q).getContainerElement();

if(this.__jb){g.setStyle(j,f+m,true);
}else{g.setStyle(i,f+m,true);
}},_updateKnobSize:function(){var bT=this.getKnobFactor();

if(bT==null){return;
}var bS=this.getInnerSize();

if(bS==null){return;
}if(this.__jb){this.getChildControl(q).setWidth(Math.round(bT*bS.width));
}else{this.getChildControl(q).setHeight(Math.round(bT*bS.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bN){this.slideTo(this.getValue()+bN);
},slideTo:function(bn){if(bn<this.getMinimum()){bn=this.getMinimum();
}else if(bn>this.getMaximum()){bn=this.getMaximum();
}else{bn=this.getMinimum()+Math.round((bn-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bn);
},_applyOrientation:function(bD,bE){var bF=this.getChildControl(q);
this.__jb=bD===p;
if(this.__jb){this.removeState(o);
bF.removeState(o);
this.addState(p);
bF.addState(p);
bF.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(p);
bF.removeState(p);
this.addState(o);
bF.addState(o);
bF.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bL,bM){if(bL!=null){this._updateKnobSize();
}else{if(this.__jb){this.getChildControl(q).resetWidth();
}else{this.getChildControl(q).resetHeight();
}}},_applyValue:function(bU,bV){this._updateKnobPosition();
},_applyMinimum:function(bu,bv){if(this.getValue()<bu){this.setValue(bu);
}this._updateKnobPosition();
},_applyMaximum:function(bA,bB){if(this.getValue()>bA){this.setValue(bA);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var u="label",t="icon",s="Boolean",r="left",q="both",p="String",o="_applyRich",n="_applyIcon",m="changeGap",l="_applyShow",e="right",k="_applyCenter",h="_applyIconPosition",c="qx.ui.basic.Atom",b="top",g="changeShow",f="bottom",i="_applyLabel",a="Integer",j="_applyGap",d="atom";
qx.Class.define(c,{extend:qx.ui.core.Widget,construct:function(F,G){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(F!=null){this.setLabel(F);
}
if(G!=null){this.setIcon(G);
}},properties:{appearance:{refine:true,init:d},label:{apply:i,nullable:true,dispose:true,check:p},rich:{check:s,init:false,apply:o},icon:{check:p,apply:n,nullable:true,themeable:true},gap:{check:a,nullable:false,event:m,apply:j,themeable:true,init:4},show:{init:q,check:[q,u,t],themeable:true,inheritable:true,apply:l,event:g},iconPosition:{init:r,check:[b,e,f,r],themeable:true,apply:h},center:{init:false,check:s,themeable:true,apply:k}},members:{_createChildControlImpl:function(y){var z;

switch(y){case u:z=new qx.ui.basic.Label(this.getLabel());
z.setAnonymous(true);
z.setRich(this.getRich());
this._add(z);

if(this.getLabel()==null||this.getShow()===t){z.exclude();
}break;
case t:z=new qx.ui.basic.Image(this.getIcon());
z.setAnonymous(true);
this._addAt(z,0);

if(this.getIcon()==null||this.getShow()===u){z.exclude();
}break;
}return z||arguments.callee.base.call(this,y);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===t){this._excludeChildControl(u);
}else{this._showChildControl(u);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===u){this._excludeChildControl(t);
}else{this._showChildControl(t);
}},_applyLabel:function(A,B){var C=this.getChildControl(u,true);

if(C){C.setContent(A);
}this._handleLabel();
},_applyRich:function(H,I){var J=this.getChildControl(u,true);

if(J){J.setRich(H);
}},_applyIcon:function(v,w){var x=this.getChildControl(t,true);

if(x){x.setSource(v);
}this._handleIcon();
},_applyGap:function(O,P){this._getLayout().setGap(O);
},_applyShow:function(D,E){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(K,L){this._getLayout().setIconPosition(K);
},_applyCenter:function(M,N){this._getLayout().setCenter(M);
}}});
})();
(function(){var h="changeEnabled",g="qx.ui.core.MExecutable",f="qx.event.Command",d="qx.event.type.Event",c="changeCommand",b="_applyCommand",a="execute";
qx.Mixin.define(g,{events:{"execute":d},properties:{command:{check:f,apply:b,event:c,nullable:true}},members:{execute:function(){var k=this.getCommand();

if(k){k.execute(this);
}this.fireEvent(a);
},_applyCommand:function(i,j){if(j){j.removeListener(h,this._onChangeEnabledCommand,this);
}
if(i){i.addListener(h,this._onChangeEnabledCommand,this);

if(this.getEnabled()===false){i.setEnabled(false);
}else if(i.getEnabled()===false){this.setEnabled(false);
}}},_onChangeEnabledCommand:function(e){this.setEnabled(e.getData());
}}});
})();
(function(){var w="pressed",v="abandoned",u="hovered",t="Enter",s="Space",r="String",q="dblclick",p="qx.ui.form.Button",o="mouseup",n="mousedown",i="changeName",m="mouseover",l="mouseout",h="changeValue",g="keydown",k="button",j="keyup";
qx.Class.define(p,{extend:qx.ui.basic.Atom,include:qx.ui.core.MExecutable,implement:qx.ui.form.IFormElement,construct:function(a,b,c){arguments.callee.base.call(this,a,b);

if(c!=null){this.setCommand(c);
}this.addListener(m,this._onMouseOver);
this.addListener(l,this._onMouseOut);
this.addListener(n,this._onMouseDown);
this.addListener(o,this._onMouseUp);
this.addListener(g,this._onKeyDown);
this.addListener(j,this._onKeyUp);
this.addListener(q,this._onStopEvent);
},properties:{name:{check:r,nullable:true,event:i},value:{check:r,nullable:true,event:h},appearance:{refine:true,init:k},focusable:{refine:true,init:true}},members:{press:function(){if(this.hasState(v)){return;
}this.addState(w);
},release:function(){if(this.hasState(w)){this.removeState(w);
}},reset:function(){this.removeState(w);
this.removeState(v);
this.removeState(u);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(v)){this.removeState(v);
this.addState(w);
}this.addState(u);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(u);

if(this.hasState(w)){this.removeState(w);
this.addState(v);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(v);
this.addState(w);
},_onMouseUp:function(e){this.releaseCapture();
var d=this.hasState(w);
var f=this.hasState(v);

if(d){this.removeState(w);
}
if(f){this.removeState(v);
}else{this.addState(u);

if(d){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case t:case s:this.removeState(v);
this.addState(w);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case t:case s:if(this.hasState(w)){this.removeState(v);
this.removeState(w);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__jd",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){arguments.callee.base.call(this,o,p);
this.__jd=new qx.event.Timer(this.getInterval());
this.__jd.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__je:null,__jf:null,__jd:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__jg();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__jf){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__jh();
},_applyEnabled:function(r,s){arguments.callee.base.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__jh();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__jd.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__jd.stop();
this.__je=this.getInterval();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__jg();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__jf){this.execute();
}}this.__jh();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__jf){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__jh();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__jg();
}},_onInterval:function(e){this.__jd.stop();
if(this.__je==null){this.__je=this.getInterval();
}this.__je=(Math.max(this.getMinTimer(),this.__je-this.getTimerDecrease()));
this.__jd.restartWith(this.__je);
this.__jf=true;
this.fireEvent(b);
},__jg:function(){this.fireEvent(g);
this.__jf=false;
this.__jd.setInterval(this.getFirstInterval());
this.__jd.start();
this.removeState(m);
this.addState(n);
},__jh:function(){this.fireEvent(d);
this.__jd.stop();
this.__je=null;
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(w,x){var H=qx.ui.layout.Util;
var z=this.getIconPosition();
var C=this._getLayoutChildren();
var length=C.length;
var Q,top,P,A;
var L,G;
var J=this.getGap();
var O=this.getCenter();
if(z===k||z===f){var I=length-1;
var E=-1;
var B=-1;
}else{var I=0;
var E=length;
var B=1;
}if(z==h||z==k){if(O){var K=0;

for(var i=I;i!=E;i+=B){A=C[i].getSizeHint().height;

if(A>0){K+=A;

if(i!=I){K+=J;
}}}top=Math.round((x-K)/2);
}else{top=0;
}
for(var i=I;i!=E;i+=B){L=C[i];
G=L.getSizeHint();
P=Math.min(G.maxWidth,Math.max(w,G.minWidth));
A=G.height;
Q=H.computeHorizontalAlignOffset(d,P,w);
L.renderLayout(Q,top,P,A);
if(A>0){top+=A+J;
}}}else{var F=w;
var D=0;
var y=null;
var N=0;

for(var i=I;i!=E;i+=B){L=C[i];
P=L.getSizeHint().width;

if(P>0){if(!y&&L instanceof qx.ui.basic.Label){y=L;
}else{F-=P;
}D+=P;
N++;
}}
if(N>1){var M=(N-1)*J;
F-=M;
D+=M;
}
if(O&&D<w){Q=Math.round((w-D)/2);
}else{Q=0;
}
for(var i=I;i!=E;i+=B){L=C[i];
G=L.getSizeHint();
A=Math.min(G.maxHeight,Math.max(x,G.minHeight));

if(L===y){P=Math.max(G.minWidth,Math.min(F,G.width));
}else{P=G.width;
}top=H.computeVerticalAlignOffset(e,G.height,x);
L.renderLayout(Q,top,P,A);
if(P>0){Q+=P+J;
}}}},_computeSizeHint:function(){var v=this._getLayoutChildren();
var length=v.length;
var n,t;
if(length===1){var n=v[0].getSizeHint();
t={width:n.width,height:n.height,minWidth:n.minWidth,minHeight:n.minHeight};
}else{var r=0,s=0;
var o=0,q=0;
var p=this.getIconPosition();
var u=this.getGap();

if(p===h||p===k){var l=0;

for(var i=0;i<length;i++){n=v[i].getSizeHint();
s=Math.max(s,n.width);
r=Math.max(r,n.minWidth);
if(n.height>0){q+=n.height;
o+=n.minHeight;
l++;
}}
if(l>1){var m=(l-1)*u;
q+=m;
o+=m;
}}else{var l=0;

for(var i=0;i<length;i++){n=v[i].getSizeHint();
q=Math.max(q,n.height);
o=Math.max(o,n.minHeight);
if(n.width>0){s+=n.width;
r+=n.minWidth;
l++;
}}
if(l>1){var m=(l-1)*u;
s+=m;
r+=m;
}}t={minWidth:r,width:s,minHeight:o,height:q};
}return t;
}}});
})();
(function(){var D="qx.dynlocale",C="changeLocale",B="on",A="color",z="qx.ui.basic.Label",y="_applyRich",x="A",w="_applyTextAlign",v="Boolean",u="_applyContent",o="label",t="textAlign",r="changeTextAlign",n="center",m="__hn",q="changeContent",p="left",s="String",l="right";
qx.Class.define(z,{extend:qx.ui.core.Widget,construct:function(content){arguments.callee.base.call(this);

if(content!=null){this.setContent(content);
}
if(qx.core.Variant.isSet(D,B)){qx.locale.Manager.getInstance().addListener(C,this._onChangeLocale,this);
}},properties:{rich:{check:v,init:false,apply:y},content:{check:s,apply:u,event:q,nullable:true},textAlign:{check:[p,n,l],nullable:true,themeable:true,apply:w,event:r},appearance:{refine:true,init:o},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__hn:null,__ho:null,_getContentHint:function(){if(this.__ho){this.__hq();
delete this.__ho;
}return {width:this.__hp.width,height:this.__hp.height};
},_hasHeightForWidth:function(){return this.getRich();
},_getContentHeightForWidth:function(j){if(!this.getRich()){return null;
}var k=this.__hn?this.__hn.getStyles():qx.bom.Font.getDefaultStyles();
return qx.bom.Label.getHtmlSize(this.getContent(),k,j).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(e,f){this.getContentElement().setStyle(t,e);
},_applyTextColor:function(g,h){if(g){this.getContentElement().setStyle(A,qx.theme.manager.Color.getInstance().resolve(g));
}else{this.getContentElement().removeStyle(A);
}},__hp:{width:0,height:0},_applyFont:function(F,G){var H;

if(F){this.__hn=qx.theme.manager.Font.getInstance().resolve(F);
H=this.__hn.getStyles();
}else{this.__hn=null;
H=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(H);
this.__ho=true;
qx.ui.core.queue.Layout.add(this);
},__hq:function(){var d=qx.bom.Label;
var b=this.getFont();
var a=b?this.__hn.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getContent()||x;
var c=this.getRich();
this.__hp=c?d.getHtmlSize(content,a):d.getTextSize(content,a);
},_applyRich:function(i){this.getContentElement().setRich(i);
this.__ho=true;
qx.ui.core.queue.Layout.add(this);
},_onChangeLocale:qx.core.Variant.select(D,{"on":function(e){var content=this.getContent();

if(content&&content.translate){this.setContent(content.translate());
}},"off":null}),_applyContent:function(E){this.getContentElement().setContent(E);
this.__ho=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Variant.isSet(D,B)){qx.locale.Manager.getInstance().removeListener(C,this._onChangeLocale,this);
}this._disposeFields(m);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Bootstrap.define(c,{statics:{LOCALE:"",VARIANT:"",__hr:function(){var e=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__hr();
}});
})();
(function(){var e="qx.type.BaseString";
qx.Class.define(e,{extend:String,construct:function(b){{};
this.__hs=b;
},members:{__hs:null,toString:function(){return this.__hs;
},setValue:function(a){this.__hs=a;
},valueOf:function(){return this.__hs;
},toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},base:function(c,d){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(f){{};
}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__ht=c;
this.__hu=d;
},members:{__ht:null,__hu:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__ht,this.__hu);
}}});
})();
(function(){var p="_",o="",n="qx.dynlocale",m="on",l="_applyLocale",k="__hw",j="changeLocale",h="C",g="qx.locale.Manager",f="__hv",d="String",e="singleton";
qx.Class.define(g,{type:e,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hv=qx.$$translations||{};
this.__hw=qx.$$locales||{};
var bb=qx.bom.client.Locale;
var Y=bb.LOCALE;
var ba=bb.VARIANT;

if(ba!==o){Y+=p+ba;
}this.setLocale(Y||this.__hx);
},statics:{tr:function(a,b){var c=qx.lang.Array.fromArguments(arguments);
c.splice(0,1);
return qx.locale.Manager.getInstance().translate(a,c);
},trn:function(T,U,V,W){var X=qx.lang.Array.fromArguments(arguments);
X.splice(0,3);
if(V!=1){return qx.locale.Manager.getInstance().translate(U,X);
}else{return qx.locale.Manager.getInstance().translate(T,X);
}},trc:function(y,z,A){var B=qx.lang.Array.fromArguments(arguments);
B.splice(0,2);
return qx.locale.Manager.getInstance().translate(z,B);
},marktr:function(S){return S;
}},properties:{locale:{check:d,nullable:true,apply:l,event:j}},members:{__hx:h,__hy:null,__hz:null,__hv:null,__hw:null,getLanguage:function(){return this.__hz;
},getTerritory:function(){return this.getLocale().split(p)[1]||o;
},getAvailableLocales:function(){var D=[];

for(var C in this.__hw){if(C!=this.__hx){D.push(C);
}}return D;
},__hA:function(bc){var be;
var bd=bc.indexOf(p);

if(bd==-1){be=bc;
}else{be=bc.substring(0,bd);
}return be;
},_applyLocale:function(E,F){this.__hy=E;
this.__hz=this.__hA(E);
},addTranslation:function(O,P){var Q=this.__hv;

if(Q[O]){for(var R in P){Q[O][R]=P[R];
}}else{Q[O]=P;
}},translate:function(q,r,s){var x;
var v=this.__hv;

if(!v){return q;
}
if(s){var u=this.__hA(s);
}else{s=this.__hy;
u=this.__hz;
}
if(!x&&v[s]){x=v[s][q];
}
if(!x&&v[u]){x=v[u][q];
}
if(!x&&v[this.__hx]){x=v[this.__hx][q];
}
if(!x){x=q;
}
if(r.length>0){var t=[];

for(var i=0;i<r.length;i++){var w=r[i];

if(w.translate){t[i]=w.translate();
}else{t[i]=w;
}}x=qx.lang.String.format(x,t);
}
if(qx.core.Variant.isSet(n,m)){x=new qx.locale.LocalizedString(x,q,r);
}return x;
},localize:function(G,H,I){var N;
var L=this.__hw;

if(!L){return G;
}
if(I){var K=this.__hA(I);
}else{I=this.__hy;
K=this.__hz;
}
if(!N&&L[I]){N=L[I][G];
}
if(!N&&L[K]){N=L[K][G];
}
if(!N&&L[this.__hx]){N=L[this.__hx][G];
}
if(!N){N=G;
}
if(H.length>0){var J=[];

for(var i=0;i<H.length;i++){var M=H[i];

if(M.translate){J[i]=M.translate();
}else{J[i]=M;
}}N=qx.lang.String.format(N,J);
}
if(qx.core.Variant.isSet(n,m)){N=new qx.locale.LocalizedString(N,G,H);
}return N;
}},destruct:function(){this._disposeFields(f,k);
}});
})();
(function(){var j="qx.client",i="gecko",h="div",g="",f="hidden",e="auto",d="value",c="inherit",b="text",a="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",z="nowrap",y="visible",x="ellipsis",w="normal",v="label",u="-1000px",t="absolute",s="px",r="crop",q="end",o="100%",p="qx.bom.Label",m="opera",n="block",k="none",l="mshtml|opera";
qx.Class.define(p,{statics:{__hB:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__hC:function(){var A=document.createElement(h);
var B=A.style;
B.width=B.height=e;
B.left=B.top=u;
B.visibility=f;
B.position=t;
B.overflow=y;
B.whiteSpace=z;

if(qx.core.Variant.isSet(j,i)){var C=document.createElementNS(a,v);
for(var D in this.__hB){C.style[D]=c;
}A.appendChild(C);
}document.body.insertBefore(A,document.body.firstChild);
return this._textElement=A;
},__hD:function(){var S=qx.bom.Element.create(h);
var T=S.style;
T.width=T.height=e;
T.left=T.top=u;
T.visibility=f;
T.position=t;
T.overflow=y;
T.whiteSpace=w;
document.body.insertBefore(S,document.body.firstChild);
return this._htmlElement=S;
},__hE:function(Q){var R={};

if(Q){R.whiteSpace=w;
}else if(qx.core.Variant.isSet(j,i)){R.display=n;
}else{R.overflow=f;
R.whiteSpace=z;
R.textOverflow=x;
if(qx.core.Variant.isSet(j,m)){R.OTextOverflow=x;
}}R.userSelect=k;
return R;
},create:function(content,W,X){if(!X){X=window;
}
if(W){var Y=X.document.createElement(h);
Y.useHtml=true;
}else if(qx.core.Variant.isSet(j,i)){var Y=X.document.createElement(h);
var ba=X.document.createElementNS(a,v);
ba.style.cursor=c;
ba.style.overflow=f;
ba.style.maxWidth=o;
for(var bb in this.__hB){ba.style[bb]=c;
}ba.setAttribute(r,q);
Y.appendChild(ba);
}else{var Y=X.document.createElement(h);
qx.bom.element.Style.setStyles(Y,this.__hE(false));
}
if(content){this.setContent(Y,content);
}return Y;
},setContent:function(U,V){V=V||g;

if(U.useHtml){U.innerHTML=V;
}else if(qx.core.Variant.isSet(j,i)){U.firstChild.setAttribute(d,V);
}else{qx.bom.element.Attribute.set(U,b,V);
}},getContent:function(E){if(E.useHtml){return E.innerHTML;
}else if(qx.core.Variant.isSet(j,i)){return E.firstChild.getAttribute(d)||g;
}else{return qx.bom.element.Attribute.get(E,b);
}},getHtmlSize:function(content,L,M){var P=this._htmlElement||this.__hD();
var N=this.__hB;

if(!L){L={};
}
for(var O in N){P.style[O]=L[O]||g;
}P.style.width=M!=null?M+s:e;
P.innerHTML=content;
return qx.bom.element.Dimension.getSize(P);
},getTextSize:function(F,G){var K=this._textElement||this.__hC();
var H=this.__hB;

if(!G){G={};
}
for(var J in H){K.style[J]=G[J]||g;
}if(qx.core.Variant.isSet(j,i)){K.firstChild.setAttribute(d,F);
}else if(qx.core.Variant.isSet(j,l)){K.innerText=F;
}else{K.textContent=F;
}var I=qx.bom.element.Dimension.getSize(K);

if(qx.core.Variant.isSet(j,i)){if(!qx.bom.client.Platform.WIN){I.width++;
}}return I;
}}});
})();
(function(){var A="mshtml",z="qx.client",y="Please use element.clientWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",x="qx.bom.element.Dimension",w="Please use element.scrollWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",v="paddingRight",u="paddingLeft",t="paddingTop",s="Please use element.scrollHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",r="Please use element.clientHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",q="paddingBottom";
qx.Class.define(x,{statics:{getWidth:qx.core.Variant.select(z,{"gecko":function(b){if(b.getBoundingClientRect){var c=b.getBoundingClientRect();
return Math.round(c.right)-Math.round(c.left);
}else{return b.offsetWidth;
}},"default":function(a){return a.offsetWidth;
}}),getHeight:qx.core.Variant.select(z,{"gecko":function(m){if(m.getBoundingClientRect){var n=m.getBoundingClientRect();
return Math.round(n.bottom)-Math.round(n.top);
}else{return m.offsetHeight;
}},"default":function(o){return o.offsetHeight;
}}),getSize:function(B){return {width:this.getWidth(B),height:this.getHeight(B)};
},__hF:{visible:true,hidden:true},getContentWidth:function(C){var E=qx.bom.element.Style;
var F=qx.bom.element.Overflow.getX(C);
var G=parseInt(E.get(C,u),10);
var I=parseInt(E.get(C,v),10);

if(this.__hF[F]){return C.clientWidth-G-I;
}else{if(C.clientWidth>=C.scrollWidth){return Math.max(C.clientWidth,C.scrollWidth)-G-I;
}else{var H=C.scrollWidth-G;
var D=qx.bom.client.Engine;

if(D.NAME===A&&D.VERSION==6){H-=I;
}return H;
}}},getContentHeight:function(e){var g=qx.bom.element.Style;
var i=qx.bom.element.Overflow.getY(e);
var j=parseInt(g.get(e,t),10);
var h=parseInt(g.get(e,q),10);

if(this.__hF[i]){return e.clientHeight-j-h;
}else{if(e.clientHeight>=e.scrollHeight){return Math.max(e.clientHeight,e.scrollHeight)-j-h;
}else{var k=e.scrollHeight-j;
var f=qx.bom.client.Engine;

if(f.NAME===A&&f.VERSION==6){k-=h;
}return k;
}}},getContentSize:function(K){return {width:this.getContentWidth(K),height:this.getContentHeight(K)};
},getClientWidth:function(l){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return l.clientWidth;
},getClientHeight:function(p){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
return p.clientHeight;
},getScrollWidth:function(d){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return d.scrollWidth;
},getScrollHeight:function(J){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return J.scrollHeight;
}}});
})();
(function(){var j="content",i="qx.html.Label";
qx.Class.define(i,{extend:qx.html.Element,members:{__hG:null,_applyProperty:function(name,b){arguments.callee.base.call(this,name,b);

if(name==j){var c=this.getDomElement();
qx.bom.Label.setContent(c,b);
}},_createDomElement:function(){var g=this.__hG;
var f=qx.bom.Label.create(this._content,g);
return f;
},_copyData:function(a){return arguments.callee.base.call(this,true);
},setRich:function(d){var e=this.getDomElement();

if(e){throw new Error("The label mode cannot be modified after initial creation");
}d=!!d;

if(this.__hG==d){return;
}this.__hG=d;
return this;
},setContent:function(h){this._setProperty(j,h);
return this;
},getContent:function(){return this._getProperty(j);
}}});
})();
(function(){var r="_applyLayoutChange",q="left",p="center",o="top",n="__jj",m="Decorator",k="middle",j="baseline",h="bottom",g="__jl",c="Boolean",f="right",e="_applyReversed",b="Integer",a="__ji",d="qx.ui.layout.HBox";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(W,X,Y){arguments.callee.base.call(this);

if(W){this.setSpacing(W);
}
if(X){this.setAlignX(X);
}
if(Y){this.setSeparator(Y);
}},properties:{alignX:{check:[q,p,f],init:q,apply:r},alignY:{check:[o,k,h,j],init:o,apply:r},spacing:{check:b,init:0,apply:r},separator:{check:m,nullable:true,apply:r},reversed:{check:c,init:false,apply:e}},members:{__ji:null,__jj:null,__jk:null,__jl:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jm:function(){var V=this._getLayoutChildren();
var length=V.length;
var S=false;
var Q=this.__ji&&this.__ji.length!=length&&this.__jj&&this.__ji;
var T;
var R=Q?this.__ji:new Array(length);
var U=Q?this.__jj:new Array(length);
if(this.getReversed()){V=V.concat().reverse();
}for(var i=0;i<length;i++){T=V[i].getLayoutProperties();

if(T.width!=null){R[i]=parseFloat(T.width)/100;
}
if(T.flex!=null){U[i]=T.flex;
S=true;
}}if(!Q){this.__ji=R;
this.__jj=U;
}this.__jk=S;
this.__jl=V;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(s,t){if(this._invalidChildrenCache){this.__jm();
}var z=this.__jl;
var length=z.length;
var I=qx.ui.layout.Util;
var H=this.getSpacing();
var L=this.getSeparator();

if(L){var w=I.computeHorizontalSeparatorGaps(z,H,L);
}else{var w=I.computeHorizontalGaps(z,H,true);
}var i,u,F,E;
var K=[];
var A=w;

for(i=0;i<length;i+=1){E=this.__ji[i];
F=E!=null?Math.floor((s-w)*E):z[i].getSizeHint().width;
K.push(F);
A+=F;
}if(this.__jk&&A!=s){var C={};
var G,J;

for(i=0;i<length;i+=1){G=this.__jj[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jm();
}var bf=qx.ui.layout.Util;
var bl=this.__jl;
var ba=0,bg=0;
var bd=0,be=0;
var bj,bb,bk;
for(var i=0,l=bl.length;i<l;i+=1){bj=bl[i];
bb=bj.getSizeHint();
bg+=bb.width;
ba+=this.__jj[i]>0?bb.minWidth:bb.width;
bk=bj.getMarginTop()+bj.getMarginBottom();
if((bb.height+bk)>be){be=bb.height+bk;
}if((bb.minHeight+bk)>bd){bd=bb.minHeight+bk;
}}var bc=this.getSpacing();
var bi=this.getSeparator();

if(bi){var bh=bf.computeHorizontalSeparatorGaps(bl,bc,bi);
}else{var bh=bf.computeHorizontalGaps(bl,bc,true);
}return {minWidth:ba+bh,width:bg+bh,minHeight:bd,height:be};
}},destruct:function(){this._disposeFields(a,n,g);
}});
})();
(function(){var bb="open",ba="auto",Y="icon",X="middle",W="label",V="changeOpen",U="excluded",T="String",S="visible",R="opened",bw="always",bv="qx.ui.tree.AbstractTreeItem",bu="__jn",bt="addItem",bs="Boolean",br="Integer",bq="_applyIndent",bp="changeOpenSymbolMode",bo="_applyOpenSymbolMode",bn="-label",bi="-icon",bj="resize",bg="__jo",bh="",be="removeItem",bf="abstract",bc="never",bd="_applyIcon",bk="_applyOpen",bl="__jr",bm="_applyLabel";
qx.Class.define(bv,{extend:qx.ui.core.Widget,type:bf,construct:function(){arguments.callee.base.call(this);
this.__jn=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:bs,init:false,event:V,apply:bk},openSymbolMode:{check:[bw,bc,ba],init:ba,event:bp,apply:bo},indent:{check:br,init:19,apply:bq,themeable:true},parent:{check:bv,nullable:true},icon:{check:T,apply:bd,nullable:true,themeable:true},label:{check:T,apply:bm,init:bh,dispose:true}},members:{__jn:null,__jo:null,__jp:null,__jq:null,__jr:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(P){var Q;

switch(P){case W:Q=new qx.ui.basic.Label().set({appearance:this.getAppearance()+bn,alignY:X});
break;
case Y:Q=new qx.ui.basic.Image().set({appearance:this.getAppearance()+bi,alignY:X});
break;
case bb:Q=new qx.ui.tree.FolderOpenButton().set({alignY:X});
Q.addListener(V,this._onChangeOpen,this);
Q.addListener(bj,this._updateIndent,this);
break;
}return Q||arguments.callee.base.call(this,P);
},getTree:function(){var b=this;

while(b.getParent()){b=b.getParent();
}var a=b.getLayoutParent()?b.getLayoutParent().getLayoutParent():0;

if(a&&a instanceof qx.ui.core.ScrollPane){return a.getLayoutParent();
}return null;
},addWidget:function(u,v){this._add(u,v);
},addSpacer:function(){if(!this.__jr){this.__jr=new qx.ui.core.Spacer();
}else{this._remove(this.__jr);
}this._add(this.__jr);
},addOpenButton:function(){this._add(this.getChildControl(bb));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bA=this.getChildControl(Y);

if(this.__jq){this._remove(bA);
}this._add(bA);
this.__jq=true;
},addLabel:function(K){var L=this.getChildControl(W);

if(this.__jp){this._remove(L);
}
if(K){this.setLabel(K);
}else{L.setContent(this.getLabel());
}this._add(L);
this.__jp=true;
},addState:function(c){arguments.callee.base.call(this,c);
var f=this._getChildren();

for(var i=0,l=f.length;i<l;i++){var d=f[i];

if(d.addState){f[i].addState(c);
}}},removeState:function(m){arguments.callee.base.call(this,m);
var o=this._getChildren();

for(var i=0,l=o.length;i<l;i++){var n=o[i];

if(n.addState){o[i].removeState(m);
}}},_applyIcon:function(r,s){this.getChildControl(Y).setSource(r);
},_applyLabel:function(I,J){this.getChildControl(W).setContent(I);
},_applyOpen:function(bL,bM){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bL?S:U);
}var open=this.getChildControl(bb,true);

if(open){open.setOpen(bL);
}bL?this.addState(R):this.removeState(R);
},isOpenable:function(){var t=this.getOpenSymbolMode();
return (t===bw||t===ba&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bb,true);

if(!open){return false;
}var k=this.getTree();

if(!k.getRootOpenClose()){if(k.getHideRoot()){if(k.getRoot()==this.getParent()){return false;
}}else{if(k.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(g,h){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var q=0;
var open=this.getChildControl(bb,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var p=open.getBounds();

if(p){q=p.width;
}else{return;
}}else{open.exclude();
}}this.__jr.setWidth((this.getLevel()+1)*this.getIndent()-q);
},_applyIndent:function(bx,by){this._updateIndent();
},getLevel:function(){var M=this.getTree();

if(!M){return;
}var N=this;
var O=-1;

while(N){N=N.getParent();
O+=1;
}if(M.getHideRoot()){O-=1;
}
if(!M.getRootOpenClose()){O-=1;
}return O;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__jo){this.__jo=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?S:U});
}return this.__jo;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__jn;
},hasChildren:function(){return this.__jn?this.__jn.length>0:false;
},getItems:function(bN,bO,bP){if(bP!==false){var bQ=[];
}else{var bQ=[this];
}var bT=this.hasChildren()&&(bO!==false||this.isOpen());

if(bT){var bS=this.getChildren();

if(bN===false){bQ=bQ.concat(bS);
}else{for(var i=0,bR=bS.length;i<bR;i++){bQ=bQ.concat(bS[i].getItems(bN,bO,false));
}}}return bQ;
},recursiveAddToWidgetQueue:function(){var j=this.getItems(true,true,false);

for(var i=0,l=j.length;i<l;i++){qx.ui.core.queue.Widget.add(j[i]);
}},__js:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(A){var B=this.getChildrenContainer();
var E=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var F=arguments[i];
var D=F.getParent();

if(D){D.remove(F);
}F.setParent(this);
var C=this.hasChildren();
B.add(F);

if(F.hasChildren()){B.add(F.getChildrenContainer());
}this.__jn.push(F);

if(!C){this.__js();
}
if(E){F.recursiveAddToWidgetQueue();
E.fireNonBubblingEvent(bt,qx.event.type.Data,[F]);
}}
if(E){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bF,bG){{};

if(bG==this.__jn.length){this.add(bF);
return;
}var bK=bF.getParent();

if(bK){bK.remove(bF);
}var bI=this.getChildrenContainer();
bF.setParent(this);
var bJ=this.hasChildren();
var bH=this.__jn[bG];
bI.addBefore(bF,bH);

if(bF.hasChildren()){bI.addAfter(bF.getChildrenContainer(),bF);
}qx.lang.Array.insertAt(this.__jn,bF,bG);

if(!bJ){this.__js();
}
if(this.getTree()){bF.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bB,bC){{};
this.addAt(bB,this.__jn.indexOf(bC));
},addAfter:function(bD,bE){{};
this.addAt(bD,this.__jn.indexOf(bE)+1);
},addAtBegin:function(bz){this.addAt(bz,0);
},remove:function(w){for(var i=0,l=arguments.length;i<l;i++){var z=arguments[i];

if(this.__jn.indexOf(z)==-1){this.warn("Cannot remove treeitem '"+z+"'. It is not a child of this tree item.");
return;
}var y=this.getChildrenContainer();

if(z.hasChildren()){y.remove(z.getChildrenContainer());
}qx.lang.Array.remove(this.__jn,z);
z.setParent(null);
y.remove(z);
}var x=this.getTree();

if(x){x.fireNonBubblingEvent(be,qx.event.type.Data,[z]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(G){var H=this.__jn[G];

if(H){this.remove(H);
}},removeAll:function(){for(var i=this.__jn.length-1;i>=0;i--){this.remove(this.__jn[i]);
}}},destruct:function(){this._disposeArray(bu);
this._disposeObjects(bl,bg);
}});
})();
(function(){var l="opened",k="click",j="mousedown",i="Boolean",h="qx.ui.tree.FolderOpenButton",g="_applyOpen",f="mouseup",d="Space",c="keypress",b="changeOpen",a="Enter";
qx.Class.define(h,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){arguments.callee.base.call(this);
this.initOpen();
this.addListener(c,this._onKeyPress);
this.addListener(k,this._onClick);
this.addListener(j,this._stopPropagation,this);
this.addListener(f,this._stopPropagation,this);
},properties:{open:{check:i,init:false,event:b,apply:g}},members:{_applyOpen:function(m,n){m?this.addState(l):this.removeState(l);
this.execute();
},_onKeyPress:function(e){switch(e.getKeyIdentifier()){case a:case d:this.toggleOpen();
e.stopPropagation();
}},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(c,d){arguments.callee.base.call(this);
this.setWidth(c!=null?c:0);
this.setHeight(d!=null?d:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(b){},destroy:function(){if(this.$$disposed){return;
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
(function(){var s="Boolean",r="qx.event.type.Event",q="queued",p="String",o="sending",n="qx.io.remote.Response",m="receiving",l="aborted",k="failed",j="nocache",bc="completed",bb="POST",ba="configured",Y="timeout",X="GET",W="Pragma",V="no-url-params-on-post",U="no-cache",T="Cache-Control",S="Content-Type",A="text/plain",B="application/xml",y="application/json",z="text/html",w="application/x-www-form-urlencoded",x="qx.io.remote.Exchange",t="Integer",u="X-Qooxdoo-Response-Type",C="__jv",D="__ju",K="__jw",I="HEAD",M="qx.io.remote.Request",L="_applyResponseType",O="_applyState",N="text/javascript",F="changeState",R="PUT",Q="_applyProhibitCaching",P="",E="_applyMethod",G="DELETE",H="boolean",J="__jt";
qx.Class.define(M,{extend:qx.core.Object,construct:function(bs,bt,bu){arguments.callee.base.call(this);
this.__jt={};
this.__ju={};
this.__jv={};
this.__jw={};

if(bs!==undefined){this.setUrl(bs);
}
if(bt!==undefined){this.setMethod(bt);
}
if(bu!==undefined){this.setResponseType(bu);
}this.setProhibitCaching(true);
this.__jx=++qx.io.remote.Request.__jx;
},events:{"created":r,"configured":r,"sending":r,"receiving":r,"completed":n,"aborted":n,"failed":n,"timeout":n},statics:{__jx:0},properties:{url:{check:p,init:P},method:{check:[X,bb,R,I,G],apply:E,init:X},asynchronous:{check:s,init:true},data:{check:p,nullable:true},username:{check:p,nullable:true},password:{check:p,nullable:true},state:{check:[ba,q,o,m,bc,l,Y,k],init:ba,apply:O,event:F},responseType:{check:[A,N,y,B,z],init:A,apply:L},timeout:{check:t,nullable:true},prohibitCaching:{check:function(v){return typeof v==H||v===V;
},init:true,apply:Q},crossDomain:{check:s,init:false},fileUpload:{check:s,init:false},transport:{check:x,nullable:true},useBasicHttpAuth:{check:s,init:false}},members:{__jt:null,__ju:null,__jv:null,__jw:null,__jx:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case o:case m:this.error("Aborting already sent request!");
case q:this.abort();
break;
}},isConfigured:function(){return this.getState()===ba;
},isQueued:function(){return this.getState()===q;
},isSending:function(){return this.getState()===o;
},isReceiving:function(){return this.getState()===m;
},isCompleted:function(){return this.getState()===bc;
},isAborted:function(){return this.getState()===l;
},isTimeout:function(){return this.getState()===Y;
},isFailed:function(){return this.getState()===k;
},__jy:function(e){var d=e.clone();
d.setTarget(this);
this.dispatchEvent(d);
},_onqueued:function(e){this.setState(q);
this.__jy(e);
},_onsending:function(e){this.setState(o);
this.__jy(e);
},_onreceiving:function(e){this.setState(m);
this.__jy(e);
},_oncompleted:function(e){this.setState(bc);
this.__jy(e);
this.dispose();
},_onaborted:function(e){this.setState(l);
this.__jy(e);
this.dispose();
},_ontimeout:function(e){this.setState(Y);
this.__jy(e);
this.dispose();
},_onfailed:function(e){this.setState(k);
this.__jy(e);
this.dispose();
},_applyState:function(f,g){{};
},_applyProhibitCaching:function(bg,bh){if(!bg){this.removeParameter(j);
this.removeRequestHeader(W);
this.removeRequestHeader(T);
return;
}if(bg!==V||this.getMethod()!=bb){this.setParameter(j,new Date().valueOf());
}else{this.removeParameter(j);
}this.setRequestHeader(W,U);
this.setRequestHeader(T,U);
},_applyMethod:function(bd,be){if(bd===bb){this.setRequestHeader(S,w);
}else{this.removeRequestHeader(S);
}var bf=this.getProhibitCaching();
this._applyProhibitCaching(bf,bf);
},_applyResponseType:function(bq,br){this.setRequestHeader(u,bq);
},setRequestHeader:function(a,b){this.__jt[a]=b;
},removeRequestHeader:function(c){delete this.__jt[c];
},getRequestHeader:function(bl){return this.__jt[bl]||null;
},getRequestHeaders:function(){return this.__jt;
},setParameter:function(bv,bw,bx){if(bx){this.__jv[bv]=bw;
}else{this.__ju[bv]=bw;
}},removeParameter:function(bm,bn){if(bn){delete this.__jv[bm];
}else{delete this.__ju[bm];
}},getParameter:function(bj,bk){if(bk){return this.__jv[bj]||null;
}else{return this.__ju[bj]||null;
}},getParameters:function(h){return (h?this.__jv:this.__ju);
},setFormField:function(bo,bp){this.__jw[bo]=bp;
},removeFormField:function(bi){delete this.__jw[bi];
},getFormField:function(i){return this.__jw[i]||null;
},getFormFields:function(){return this.__jw;
},getSequenceNumber:function(){return this.__jx;
}},destruct:function(){this.setTransport(null);
this._disposeFields(J,D,C,K);
}});
})();
(function(){var z="Integer",y="sending",x="failed",w="timeout",v="completed",u="aborted",t="_applyEnabled",s="Boolean",r="__jz",q="interval",m="__jC",p="__jA",o="qx.io.remote.RequestQueue",l="queued",k="receiving",n="singleton";
qx.Class.define(o,{type:n,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jz=[];
this.__jA=[];
this.__jB=0;
this.__jC=new qx.event.Timer(500);
this.__jC.addListener(q,this._oninterval,this);
},properties:{enabled:{init:true,check:s,apply:t},maxTotalRequests:{check:z,nullable:true},maxConcurrentRequests:{check:z,init:3},defaultTimeout:{check:z,init:5000}},members:{__jz:null,__jA:null,__jB:null,__jC:null,_debug:function(){var g;
},_check:function(){this._debug();
if(this.__jA.length==0&&this.__jz.length==0){this.__jC.stop();
}if(!this.getEnabled()){return;
}if(this.__jA.length>=this.getMaxConcurrentRequests()||this.__jz.length==0){return;
}if(this.getMaxTotalRequests()!=null&&this.__jB>=this.getMaxTotalRequests()){return;
}var h=this.__jz.shift();
var j=new qx.io.remote.Exchange(h);
this.__jB++;
this.__jA.push(j);
this._debug();
j.addListener(y,h._onsending,h);
j.addListener(k,h._onreceiving,h);
j.addListener(v,h._oncompleted,h);
j.addListener(u,h._onaborted,h);
j.addListener(w,h._ontimeout,h);
j.addListener(x,h._onfailed,h);
j.addListener(y,this._onsending,this);
j.addListener(v,this._oncompleted,this);
j.addListener(u,this._oncompleted,this);
j.addListener(w,this._oncompleted,this);
j.addListener(x,this._oncompleted,this);
j._start=(new Date).valueOf();
j.send();
if(this.__jz.length>0){this._check();
}},_remove:function(a){qx.lang.Array.remove(this.__jA,a);
a.dispose();
this._check();
},__jD:0,_onsending:function(e){{};
},_oncompleted:function(e){{};
this._remove(e.getTarget());
},_oninterval:function(e){var H=this.__jA;

if(H.length==0){this.__jC.stop();
return;
}var C=(new Date).valueOf();
var F;
var D;
var G=this.getDefaultTimeout();
var E;
var B;

for(var i=H.length-1;i>=0;i--){F=H[i];
D=F.getRequest();

if(D.isAsynchronous()){E=D.getTimeout();
if(E==0){continue;
}
if(E==null){E=G;
}B=C-F._start;

if(B>E){this.warn("Timeout: transport "+F.toHashCode());
this.warn(B+"ms > "+E+"ms");
F.timeout();
}}}},_applyEnabled:function(d,f){if(d){this._check();
}this.__jC.setEnabled(d);
},add:function(A){A.setState(l);
this.__jz.push(A);
this._check();

if(this.getEnabled()){this.__jC.start();
}},abort:function(b){var c=b.getTransport();

if(c){c.abort();
}else if(qx.lang.Array.contains(this.__jz,b)){qx.lang.Array.remove(this.__jz,b);
}}},destruct:function(){this._disposeArray(p);
this._disposeObjects(m);
this._disposeFields(r);
}});
})();
(function(){var G="sending",F="completed",E="receiving",D="aborted",C="failed",B="timeout",A="qx.io.remote.Response",z="Connection dropped",y="configured",x="qx.event.type.Event",bC="Proxy authentication required",bB="qx.io.remote.transport.Abstract",bA="MSHTML-specific HTTP status code",bz="Not available",by="Precondition failed",bx="Server error",bw="Moved temporarily",bv="qx.io.remote.Exchange",bu="Bad gateway",bt="Gone",N="See other",O="Partial content",L="Server timeout",M="qx.io.remote.transport.Script",J="HTTP version not supported",K="Unauthorized",H="Multiple choices",I="Payment required",R="Not implemented",S="Request-URL too large",bb="Length required",Y="_applyState",bj="changeState",be="Not modified",bp="qx.io.remote.Request",bn="Connection closed by server",U="Moved permanently",bs="_applyImplementation",br="Method not allowed",bq="Forbidden",T="Use proxy",W="Ok",X="Not found",ba="Not acceptable",bc="Request time-out",bf="Bad request",bk="Conflict",bo="No content",P="qx.io.remote.transport.XmlHttp",Q="qx.io.remote.transport.Iframe",V="Request entity too large",bi="Unknown status code",bh="Unsupported media type",bg="Gateway time-out",bm="created",bl="Out of resources",bd="undefined";
qx.Class.define(bv,{extend:qx.core.Object,construct:function(m){arguments.callee.base.call(this);
this.setRequest(m);
m.setTransport(this);
},events:{"sending":x,"receiving":x,"completed":A,"aborted":A,"failed":A,"timeout":A},statics:{typesOrder:[P,Q,M],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(v,w){qx.io.remote.Exchange.typesAvailable[w]=v;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var f in qx.io.remote.Exchange.typesAvailable){var e=qx.io.remote.Exchange.typesAvailable[f];

if(e.isSupported()){qx.io.remote.Exchange.typesSupported[f]=e;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(a,b,c){if(!qx.lang.Array.contains(a.handles.responseTypes,c)){return false;
}
for(var d in b){if(!a.handles[d]){return false;
}}return true;
},_nativeMap:{0:bm,1:y,2:G,3:E,4:F},wasSuccessful:function(bL,bM,bN){if(bN){switch(bL){case null:case 0:return true;
case -1:return bM<4;
default:return typeof bL===bd;
}}else{switch(bL){case -1:{};
return bM<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bM!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bL>206&&bL<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bL+" ("+bM+")");
return false;
}}},statusCodeToString:function(bO){switch(bO){case -1:return bz;
case 200:return W;
case 304:return be;
case 206:return O;
case 204:return bo;
case 300:return H;
case 301:return U;
case 302:return bw;
case 303:return N;
case 305:return T;
case 400:return bf;
case 401:return K;
case 402:return I;
case 403:return bq;
case 404:return X;
case 405:return br;
case 406:return ba;
case 407:return bC;
case 408:return bc;
case 409:return bk;
case 410:return bt;
case 411:return bb;
case 412:return by;
case 413:return V;
case 414:return S;
case 415:return bh;
case 500:return bx;
case 501:return R;
case 502:return bu;
case 503:return bl;
case 504:return bg;
case 505:return J;
case 12002:return L;
case 12029:return z;
case 12030:return z;
case 12031:return z;
case 12152:return bn;
case 13030:return bA;
default:return bi;
}}},properties:{request:{check:bp,nullable:true},implementation:{check:bB,nullable:true,apply:bs},state:{check:[y,G,E,F,D,B,C],init:y,event:bj,apply:Y}},members:{send:function(){var bG=this.getRequest();

if(!bG){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bE=qx.io.remote.Exchange.typesOrder;
var bD=qx.io.remote.Exchange.typesSupported;
var bI=bG.getResponseType();
var bJ={};

if(bG.getAsynchronous()){bJ.asynchronous=true;
}else{bJ.synchronous=true;
}
if(bG.getCrossDomain()){bJ.crossDomain=true;
}
if(bG.getFileUpload()){bJ.fileUpload=true;
}for(var bH in bG.getFormFields()){bJ.programaticFormFields=true;
break;
}var bK,bF;

for(var i=0,l=bE.length;i<l;i++){bK=bD[bE[i]];

if(bK){if(!qx.io.remote.Exchange.canHandle(bK,bJ,bI)){continue;
}
try{{};
bF=new bK;
this.setImplementation(bF);
bF.setUseBasicHttpAuth(bG.getUseBasicHttpAuth());
bF.send();
return true;
}catch(o){this.error("Request handler throws error");
this.error(o);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bG);
},abort:function(){var g=this.getImplementation();

if(g){{};
g.abort();
}else{{};
this.setState(D);
}},timeout:function(){var n=this.getImplementation();

if(n){this.warn("Timeout: implementation "+n.toHashCode());
n.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(B);
}if(this.getRequest()){this.getRequest().setTimeout(0);
}},_onsending:function(e){this.setState(G);
},_onreceiving:function(e){this.setState(E);
},_oncompleted:function(e){this.setState(F);
},_onabort:function(e){this.setState(D);
},_onfailed:function(e){this.setState(C);
},_ontimeout:function(e){this.setState(B);
},_applyImplementation:function(h,j){if(j){j.removeListener(G,this._onsending,this);
j.removeListener(E,this._onreceiving,this);
j.removeListener(F,this._oncompleted,this);
j.removeListener(D,this._onabort,this);
j.removeListener(B,this._ontimeout,this);
j.removeListener(C,this._onfailed,this);
}
if(h){var k=this.getRequest();
h.setUrl(k.getUrl());
h.setMethod(k.getMethod());
h.setAsynchronous(k.getAsynchronous());
h.setUsername(k.getUsername());
h.setPassword(k.getPassword());
h.setParameters(k.getParameters());
h.setFormFields(k.getFormFields());
h.setRequestHeaders(k.getRequestHeaders());
h.setData(k.getData());
h.setResponseType(k.getResponseType());
h.addListener(G,this._onsending,this);
h.addListener(E,this._onreceiving,this);
h.addListener(F,this._oncompleted,this);
h.addListener(D,this._onabort,this);
h.addListener(B,this._ontimeout,this);
h.addListener(C,this._onfailed,this);
}},_applyState:function(p,q){{};

switch(p){case G:this.fireEvent(G);
break;
case E:this.fireEvent(E);
break;
case F:case D:case B:case C:var s=this.getImplementation();

if(!s){break;
}
if(this.hasListener(p)){var t=qx.event.Registration.createEvent(p,qx.io.remote.Response);

if(p==F){var r=s.getResponseContent();
t.setContent(r);
if(r===null){{};
p=C;
}}t.setStatusCode(s.getStatusCode());
t.setResponseHeaders(s.getResponseHeaders());
this.dispatchEvent(t);
}this.setImplementation(null);
s.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var u=this.getImplementation();

if(u){this.setImplementation(null);
u.dispose();
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
(function(){var be="completed",bd="failed",bc="=",bb="aborted",ba="",Y="&",X="timeout",W="application/xml",V="qx.io.remote.transport.XmlHttp",U="application/json",bA="text/html",bz="qx.client",by="receiving",bx="text/plain",bw="text/javascript",bv="sending",bu="configured",bt="?",bs="created",br='Referer',bl="__jE",bm='Basic ',bj="\n</pre>",bk="string",bh='Authorization',bi="<pre>Could not execute json: \n",bf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bg=':',bn="parseerror",bo="file:",bq="webkit",bp="object";
qx.Class.define(V,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
this.__jE=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__jE.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[bx,bw,U,W,bA]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(bz,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
},__jF:function(){}},members:{__jG:false,__jH:0,__jE:null,getRequest:function(){return this.__jE;
},send:function(){this.__jH=0;
var j=this.getRequest();
var e=this.getMethod();
var n=this.getAsynchronous();
var m=this.getUrl();
var g=(window.location.protocol===bo&&!(/^http(s){0,1}\:/.test(m)));
this.__jG=g;
var q=this.getParameters(false);
var o=[];

for(var f in q){var k=q[f];

if(k instanceof Array){for(var i=0;i<k.length;i++){o.push(encodeURIComponent(f)+bc+encodeURIComponent(k[i]));
}}else{o.push(encodeURIComponent(f)+bc+encodeURIComponent(k));
}}
if(o.length>0){m+=(m.indexOf(bt)>=0?Y:bt)+o.join(Y);
}if(this.getData()===null){var q=this.getParameters(true);
var o=[];

for(var f in q){var k=q[f];

if(k instanceof Array){for(var i=0;i<k.length;i++){o.push(encodeURIComponent(f)+bc+encodeURIComponent(k[i]));
}}else{o.push(encodeURIComponent(f)+bc+encodeURIComponent(k));
}}
if(o.length>0){this.setData(o.join(Y));
}}var p=function(bB){var bG=bf;
var bK=ba;
var bE,bD,bC;
var bH,bI,bJ,bF;
var i=0;

do{bE=bB.charCodeAt(i++);
bD=bB.charCodeAt(i++);
bC=bB.charCodeAt(i++);
bH=bE>>2;
bI=((bE&3)<<4)|(bD>>4);
bJ=((bD&15)<<2)|(bC>>6);
bF=bC&63;

if(isNaN(bD)){bJ=bF=64;
}else if(isNaN(bC)){bF=64;
}bK+=bG.charAt(bH)+bG.charAt(bI)+bG.charAt(bJ)+bG.charAt(bF);
}while(i<bB.length);
return bK;
};
j.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){j.open(e,m,n);
j.setRequestHeader(bh,bm+p(this.getUsername()+bg+this.getPassword()));
}else{j.open(e,m,n,this.getUsername(),this.getPassword());
}}else{j.open(e,m,n);
}}catch(D){this.error("Failed with exception: "+D);
this.failed();
return;
}if(!qx.core.Variant.isSet(bz,bq)){j.setRequestHeader(br,window.location.href);
}var h=this.getRequestHeaders();

for(var f in h){j.setRequestHeader(f,h[f]);
}try{{};
j.send(this.getData());
}catch(N){if(g){this.failedLocally();
}else{this.error("Failed to send data: "+N,"send");
this.failed();
}return;
}if(!n){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===bd){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:function(e){switch(this.getState()){case be:case bb:case bd:case X:{};
return;
}var bM=this.getReadyState();

if(bM==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bM,this.__jG)){return this.failed();
}}while(this.__jH<bM){this.setState(qx.io.remote.Exchange._nativeMap[++this.__jH]);
}},getReadyState:function(){var H=null;

try{H=this.__jE.readyState;
}catch(bR){}return H;
},setRequestHeader:function(R,S){this.__jE.setRequestHeader(R,S);
},getResponseHeader:function(B){var C=null;

try{this.getRequest().getResponseHeader(B)||null;
}catch(I){}return C;
},getStringResponseHeaders:function(){var b=null;

try{var a=this.__jE.getAllResponseHeaders();

if(a){b=a;
}}catch(bL){}return b;
},getResponseHeaders:function(){var bP=this.getStringResponseHeaders();
var bQ={};

if(bP){var bN=bP.split(/[\r\n]+/g);

for(var i=0,l=bN.length;i<l;i++){var bO=bN[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bO){bQ[bO[1]]=bO[2];
}}}return bQ;
},getStatusCode:function(){var w=-1;

try{w=this.getRequest().status;
}catch(E){}return w;
},getStatusText:function(){var T=ba;

try{T=this.getRequest().statusText;
}catch(J){}return T;
},getResponseText:function(){var A=null;
var y=this.getStatusCode();
var z=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(y,z,this.__jG)){try{A=this.getRequest().responseText;
}catch(O){}}return A;
},getResponseXml:function(){var u=null;
var r=this.getStatusCode();
var t=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(r,t,this.__jG)){try{u=this.getRequest().responseXML;
}catch(P){}}if(typeof u==bp&&u!=null){if(!u.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,ba);
u.loadXML(s);
}if(!u.documentElement){throw new Error("Missing Document Element!");
}
if(u.documentElement.tagName==bn){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return u;
},getFetchedLength:function(){var x=this.getResponseText();
return typeof x==bk?x.length:0;
},getResponseContent:function(){if(this.getState()!==be){{};
return null;
}{};
var G=this.getResponseText();

switch(this.getResponseType()){case bx:case bA:{};
return G;
case U:{};

try{if(G&&G.length>0){var F=qx.util.Json.parseQx(G);
return (F===0?0:(F||null));
}else{return null;
}}catch(K){this.error("Could not execute json: ["+G+"]",K);
return bi+G+bj;
}case bw:{};

try{if(G&&G.length>0){var F=window.eval(G);
return (F===0?0:(F||null));
}else{return null;
}}catch(Q){this.error("Could not execute javascript: ["+G+"]",Q);
return null;
}case W:G=this.getResponseXml();
{};
return (G===0?0:(G||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(c,d){{};

switch(c){case bs:this.fireEvent(bs);
break;
case bu:this.fireEvent(bu);
break;
case bv:this.fireEvent(bv);
break;
case by:this.fireEvent(by);
break;
case be:this.fireEvent(be);
break;
case bd:this.fireEvent(bd);
break;
case bb:this.getRequest().abort();
this.fireEvent(bb);
break;
case X:this.getRequest().abort();
this.fireEvent(X);
break;
}}},defer:function(L,M){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,V);
},destruct:function(){var v=this.getRequest();

if(v){v.onreadystatechange=qx.io.remote.transport.XmlHttp.__jF;
switch(v.readyState){case 1:case 2:case 3:v.abort();
}}this._disposeFields(bl);
}});
})();
(function(){var C=",",B="",A="string",z="null",y='"',x="qx.jsonDebugging",w='\\u00',v="__jT",u=")",t='\\\\',bd='\\f',bc="__jK",bb="new Date(Date.UTC(",ba='\\"',Y="))",X="__jL",W="}",V='(',U=":",T="{",J='\\r',K="Object",H="__jU",I='\\t',F="(",G="]",D="[",E="__jJ",L="qx.jsonEncodeUndefined",M='\\b',O="__jM",N="qx.util.Json",Q=')',P='\\n',S="Date",R="Array";
qx.Class.define(N,{statics:{BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__jI:{"function":E,"boolean":bc,"number":X,"string":O,"object":v,"undefined":H},__jJ:function(k){return String(k);
},__jK:function(a){return String(a);
},__jL:function(f){return isFinite(f)?String(f):z;
},__jM:function(be){var bf;

if(/["\\\x00-\x1f]/.test(be)){bf=be.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__jO);
}else{bf=be;
}return y+bf+y;
},__jN:{'\b':M,'\t':I,'\n':P,'\f':bd,'\r':J,'"':ba,'\\':t},__jO:function(a,b){var bq=qx.util.Json.__jN[b];

if(bq){return bq;
}bq=b.charCodeAt();
return w+Math.floor(bq/16).toString(16)+(bq%16).toString(16);
},__jP:function(bj){var bl=[],bo=true,bn,bk;
var bm=qx.util.Json.__jV;
bl.push(D);

if(bm){qx.util.Json.__jQ+=qx.util.Json.BEAUTIFYING_INDENT;
bl.push(qx.util.Json.__jQ);
}
for(var i=0,l=bj.length;i<l;i++){bk=bj[i];
bn=this.__jI[typeof bk];

if(bn){bk=this[bn](bk);

if(typeof bk==A){if(!bo){bl.push(C);

if(bm){bl.push(qx.util.Json.__jQ);
}}bl.push(bk);
bo=false;
}}}
if(bm){qx.util.Json.__jQ=qx.util.Json.__jQ.substring(0,qx.util.Json.__jQ.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bl.push(qx.util.Json.__jQ);
}bl.push(G);
return bl.join(B);
},__jR:function(bg){var bh=bg.getUTCFullYear()+C+bg.getUTCMonth()+C+bg.getUTCDate()+C+bg.getUTCHours()+C+bg.getUTCMinutes()+C+bg.getUTCSeconds()+C+bg.getUTCMilliseconds();
return bb+bh+Y;
},__jS:function(m){var p=[],s=true,o,n;
var q=qx.util.Json.__jV;
p.push(T);

if(q){qx.util.Json.__jQ+=qx.util.Json.BEAUTIFYING_INDENT;
p.push(qx.util.Json.__jQ);
}
for(var r in m){n=m[r];
o=this.__jI[typeof n];

if(o){n=this[o](n);

if(typeof n==A){if(!s){p.push(C);

if(q){p.push(qx.util.Json.__jQ);
}}p.push(this.__jM(r),U,n);
s=false;
}}}
if(q){qx.util.Json.__jQ=qx.util.Json.__jQ.substring(0,qx.util.Json.__jQ.length-qx.util.Json.BEAUTIFYING_INDENT.length);
p.push(qx.util.Json.__jQ);
}p.push(W);
return p.join(B);
},__jT:function(d){if(d){var e=d.constructor.name;

if(d instanceof Array||e==R){return this.__jP(d);
}else if(d instanceof Date||e==S){return this.__jR(d);
}else if(d instanceof Object||e==K){return this.__jS(d);
}return B;
}return z;
},__jU:function(c){if(qx.core.Setting.get(L)){return z;
}},stringify:function(g,h){this.__jV=h;
this.__jQ=this.BEAUTIFYING_LINE_END;
var j=this[this.__jI[typeof g]](g);

if(typeof j!=A){j=null;
}if(qx.core.Setting.get(x)){qx.log.Logger.debug(this,"JSON request: "+j);
}return j;
},parse:function(bp){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bp.replace(/"(\\.|[^"\\])*"/g,B))){throw new Error("Could not parse JSON string!");
}
try{return eval(F+bp+u);
}catch(bi){throw new Error("Could not evaluate JSON string: "+bi.message);
}},parseQx:function(br){if(qx.core.Setting.get(x)){qx.log.Logger.debug(this,"JSON response: "+br);
}var bs=(br&&br.length>0)?eval(V+br+Q):null;
return bs;
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false}});
})();
(function(){var l="=",k="&",j="application/xml",h="application/json",g="text/html",f="qx.client",e="textarea",d="none",c="text/plain",b="text/javascript",H="",G="completed",F="?",E="qx.io.remote.transport.Iframe",D="gecko",C="frame_",B="aborted",A="_data_",z="pre",y="__jX",s="javascript:void(0)",t="sending",q="form",r="failed",o='<iframe name="',p="mshtml",m="form_",n='"></iframe>',u="iframe",v="timeout",x="__jW",w="qx/static/blank.gif";
qx.Class.define(E,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var J=(new Date).valueOf();
var K=C+J;
var L=m+J;
if(qx.core.Variant.isSet(f,p)){this.__jW=document.createElement(o+K+n);
}else{this.__jW=document.createElement(u);
}this.__jW.src=s;
this.__jW.id=this.__jW.name=K;
this.__jW.onload=qx.lang.Function.bind(this._onload,this);
this.__jW.style.display=d;
document.body.appendChild(this.__jW);
this.__jX=document.createElement(q);
this.__jX.target=K;
this.__jX.id=this.__jX.name=L;
this.__jX.style.display=d;
document.body.appendChild(this.__jX);
this.__jY=document.createElement(e);
this.__jY.id=this.__jY.name=A;
this.__jX.appendChild(this.__jY);
this.__jW.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[c,b,h,j,g]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__jY:null,__ka:0,__jX:null,__jW:null,send:function(){var P=this.getMethod();
var R=this.getUrl();
var V=this.getParameters(false);
var U=[];

for(var Q in V){var S=V[Q];

if(S instanceof Array){for(var i=0;i<S.length;i++){U.push(encodeURIComponent(Q)+l+encodeURIComponent(S[i]));
}}else{U.push(encodeURIComponent(Q)+l+encodeURIComponent(S));
}}
if(U.length>0){R+=(R.indexOf(F)>=0?k:F)+U.join(k);
}if(this.getData()===null){var V=this.getParameters(true);
var U=[];

for(var Q in V){var S=V[Q];

if(S instanceof Array){for(var i=0;i<S.length;i++){U.push(encodeURIComponent(Q)+l+encodeURIComponent(S[i]));
}}else{U.push(encodeURIComponent(Q)+l+encodeURIComponent(S));
}}
if(U.length>0){this.setData(U.join(k));
}}var O=this.getFormFields();

for(var Q in O){var T=document.createElement(e);
T.name=Q;
T.appendChild(document.createTextNode(O[Q]));
this.__jX.appendChild(T);
}this.__jX.action=R;
this.__jX.method=P;
this.__jY.appendChild(document.createTextNode(this.getData()));
this.__jX.submit();
this.setState(t);
},_onload:function(e){if(this.__jX.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
},_onreadystatechange:function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__jW.readyState]);
},_switchReadyState:function(M){switch(this.getState()){case G:case B:case r:case v:this.warn("Ignore Ready State Change");
return;
}while(this.__ka<M){this.setState(qx.io.remote.Exchange._nativeMap[++this.__ka]);
}},setRequestHeader:function(W,X){},getResponseHeader:function(be){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return H;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__jW);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__jW);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__jW);
},getIframeTextContent:function(){var N=this.getIframeBody();

if(!N){return null;
}
if(!N.firstChild){return H;
}if(N.firstChild.tagName&&N.firstChild.tagName.toLowerCase()==z){return N.firstChild.innerHTML;
}else{return N.innerHTML;
}},getIframeHtmlContent:function(){var a=this.getIframeBody();
return a?a.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==G){{};
return null;
}{};
var I=this.getIframeTextContent();

switch(this.getResponseType()){case c:{};
return I;
break;
case g:I=this.getIframeHtmlContent();
{};
return I;
break;
case h:I=this.getIframeHtmlContent();
{};

try{return I&&I.length>0?qx.util.Json.parseQx(I):null;
}catch(Y){return this.error("Could not execute json: ("+I+")",Y);
}case b:I=this.getIframeHtmlContent();
{};

try{return I&&I.length>0?window.eval(I):null;
}catch(ba){return this.error("Could not execute javascript: ("+I+")",ba);
}case j:I=this.getIframeDocument();
{};
return I;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(bb,bc,bd){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,E);
},destruct:function(){if(this.__jW){this.__jW.onload=null;
this.__jW.onreadystatechange=null;
if(qx.core.Variant.isSet(f,D)){this.__jW.src=qx.util.ResourceManager.toUri(w);
}document.body.removeChild(this.__jW);
}
if(this.__jX){document.body.removeChild(this.__jX);
}this._disposeFields(x,y);
}});
})();
(function(){var i="qx.event.handler.Iframe",h="load",g="iframe";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:function(a){qx.event.Registration.fireEvent(a,h);
}},members:{canHandleEvent:function(b,c){return b.tagName.toLowerCase()===g;
},registerEvent:function(d,e,f){},unregisterEvent:function(k,l,m){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var n="0",m="qx.client",l="qx.bom.Iframe",k="qx.event.handler.Iframe.onevent(this)",j="true",i="iframe",h="body";
qx.Class.define(l,{statics:{create:function(w,x){var w=w?qx.lang.Object.clone(w):{};
w.onload=k;
w.frameBorder=n;
w.frameSpacing=n;
w.marginWidth=n;
w.marginHeight=n;
w.hspace=n;
w.vspace=n;
w.border=n;
w.allowTransparency=j;
return qx.bom.Element.create(i,w,x);
},getWindow:qx.core.Variant.select(m,{"mshtml|gecko":function(s){try{return s.contentWindow;
}catch(t){return null;
}},"default":function(a){try{var b=this.getDocument(a);
return b?b.defaultView:null;
}catch(o){return null;
}}}),getDocument:qx.core.Variant.select(m,{"mshtml":function(z){try{var A=this.getWindow(z);
return A?A.document:null;
}catch(r){return null;
}},"default":function(B){try{return B.contentDocument;
}catch(u){return null;
}}}),getBody:function(p){var q=this.getDocument(p);
return q?q.getElementsByTagName(h)[0]:null;
},setSource:function(d,e){try{if(this.getWindow(d)){try{this.getWindow(d).location.replace(e);
}catch(v){d.src=e;
}}else{d.src=e;
}}catch(c){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(f){var g=this.getDocument(f);

try{if(g&&g.location){return g.location.href;
}}catch(y){}return null;
}}});
})();
(function(){var t="&",s="=",r="?",q="application/json",p="completed",o="text/plain",n="text/javascript",m="qx.io.remote.transport.Script",l="__kc",k="",d="_ScriptTransport_data",j="_responseContent",g="script",c="timeout",b="_ScriptTransport_",f="_ScriptTransport_id",e="aborted",h="utf-8",a="failed";
qx.Class.define(m,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var u=++qx.io.remote.transport.Script.__kb;

if(u>=2000000000){qx.io.remote.transport.Script.__kb=u=1;
}this.__kc=null;
this.__kb=u;
},statics:{__kb:0,_instanceRegistry:{},ScriptTransport_PREFIX:b,ScriptTransport_ID_PARAM:f,ScriptTransport_DATA_PARAM:d,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[o,n,q]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:function(z,content){var A=qx.io.remote.transport.Script._instanceRegistry[z];

if(A==null){{};
}else{A._responseContent=content;
A._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}}},members:{__kd:0,__kc:null,__kb:null,send:function(){var H=this.getUrl();
H+=(H.indexOf(r)>=0?t:r)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+s+this.__kb;
var K=this.getParameters();
var J=[];

for(var G in K){if(G.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var I=K[G];

if(I instanceof Array){for(var i=0;i<I.length;i++){J.push(encodeURIComponent(G)+s+encodeURIComponent(I[i]));
}}else{J.push(encodeURIComponent(G)+s+encodeURIComponent(I));
}}
if(J.length>0){H+=t+J.join(t);
}var F=this.getData();

if(F!=null){H+=t+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+s+encodeURIComponent(F);
}qx.io.remote.transport.Script._instanceRegistry[this.__kb]=this;
this.__kc=document.createElement(g);
this.__kc.charset=h;
this.__kc.src=H;
{};
document.body.appendChild(this.__kc);
},_switchReadyState:function(B){switch(this.getState()){case p:case e:case a:case c:this.warn("Ignore Ready State Change");
return;
}while(this.__kd<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__kd]);
}},setRequestHeader:function(w,x){},getResponseHeader:function(v){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==p){{};
return null;
}{};

switch(this.getResponseType()){case o:case q:case n:{};
var y=this._responseContent;
return (y===0?0:(y||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(C,D,E){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,m);
qx.io.remote.ScriptTransport=C;
},destruct:function(){if(this.__kc){delete qx.io.remote.transport.Script._instanceRegistry[this.__kb];
document.body.removeChild(this.__kc);
}this._disposeFields(l,j);
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
(function(){var i="atom",h="Integer",g="String",f="_applyRich",e="qx.ui.tooltip.ToolTip",d="_applyIcon",c="tooltip",b="Boolean",a="_applyLabel";
qx.Class.define(e,{extend:qx.ui.popup.Popup,construct:function(r,s){arguments.callee.base.call(this);
qx.ui.tooltip.Manager.getInstance();
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(i);
if(r!=null){this.setLabel(r);
}
if(s!=null){this.setIcon(s);
}},properties:{appearance:{refine:true,init:c},showTimeout:{check:h,init:1000,themeable:true},hideTimeout:{check:h,init:4000,themeable:true},label:{check:g,nullable:true,apply:a},icon:{check:g,nullable:true,apply:d,themeable:true},rich:{check:b,init:false,apply:f}},members:{_createChildControlImpl:function(p){var q;

switch(p){case i:q=new qx.ui.basic.Atom;
this._add(q);
break;
}return q||arguments.callee.base.call(this,p);
},_applyIcon:function(j,k){var l=this.getChildControl(i);
j==null?l.resetIcon:l.setIcon(j);
},_applyLabel:function(t,u){var v=this.getChildControl(i);
t==null?v.resetLabel():v.setLabel(t);
},_applyRich:function(m,n){var o=this.getChildControl(i);
o.setRich(m);
}}});
})();
(function(){var l="mousedown",k="__ke",j="blur",i="singleton",h="qx.ui.popup.Manager";
qx.Class.define(h,{type:i,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ke={};
var n=qx.core.Init.getApplication().getRoot();
n.addListener(l,this.__kg,this,true);
qx.bom.Element.addListener(window,j,this.hideAll,this);
},members:{__ke:null,add:function(o){{};
this.__ke[o.$$hash]=o;
this.__kf();
},remove:function(p){{};
var q=this.__ke;

if(q){delete q[p.$$hash];
this.__kf();
}},hideAll:function(){var b=this.__ke;

if(b){for(var a in b){b[a].exclude();
}}},__kf:function(){var t=1e7;
var s=this.__ke;

for(var r in s){s[r].setZIndex(t++);
}},__kg:function(e){var f=e.getTarget();
var g=this.__ke;

for(var d in g){var c=g[d];

if(!c.getAutoHide()||f==c||qx.ui.core.Widget.contains(c,f)){continue;
}c.exclude();
}}},destruct:function(){var m=qx.core.Init.getApplication().getRoot();

if(m){m.removeListener(l,this.__kg,this,true);
}this._disposeMap(k);
}});
})();
(function(){var m="focusout",l="interval",k="mouseover",j="mousemove",i="mouseout",h="__ki",g="__kh",f="qx.ui.tooltip.ToolTip",d="__kj",c="_applyCurrent",a="qx.ui.tooltip.Manager",b="singleton";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,k,this.__kn,this,true);
this.__kh=new qx.event.Timer();
this.__kh.addListener(l,this.__kk,this);
this.__ki=new qx.event.Timer();
this.__ki.addListener(l,this.__kl,this);
this.__kj={left:0,top:0};
},properties:{current:{check:f,nullable:true,apply:c}},members:{__kj:null,__ki:null,__kh:null,_applyCurrent:function(r,s){if(s&&qx.ui.core.Widget.contains(s,r)){return;
}if(s){s.exclude();
this.__kh.stop();
this.__ki.stop();
}var u=qx.event.Registration;
var t=document.body;
if(r){this.__kh.startWith(r.getShowTimeout());
u.addListener(t,i,this.__ko,this,true);
u.addListener(t,m,this.__kp,this,true);
u.addListener(t,j,this.__km,this,true);
}else{u.removeListener(t,i,this.__ko,this,true);
u.removeListener(t,m,this.__kp,this,true);
u.removeListener(t,j,this.__km,this,true);
}},__kk:function(e){var y=this.getCurrent();

if(y){this.__ki.startWith(y.getHideTimeout());
y.placeToPoint(this.__kj);
y.show();
}this.__kh.stop();
},__kl:function(e){var q=this.getCurrent();

if(q){q.exclude();
}this.__ki.stop();
this.resetCurrent();
},__km:function(e){var x=this.__kj;
x.left=e.getDocumentLeft();
x.top=e.getDocumentTop();
},__kn:function(e){var v=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!v){return;
}var w;
while(v!=null){var w=v.getToolTip();

if(w){break;
}v=v.getLayoutParent();
}if(w){this.setCurrent(w);
}},__ko:function(e){var n=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!n){return;
}var o=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!o){return;
}var p=this.getCurrent();
if(p&&(o==p||qx.ui.core.Widget.contains(p,o))){return;
}if(o&&n&&qx.ui.core.Widget.contains(n,o)){return;
}if(p&&!o){this.setCurrent(null);
}else{this.resetCurrent();
}},__kp:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!z){return;
}var A=this.getCurrent();
if(A&&A==z.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,k,this.__kn,this,true);
this._disposeObjects(g,h);
this._disposeFields(d);
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
(function(){var j="qx.event.type.Data",i="qx.ui.table.ITableModel";
qx.Interface.define(i,{events:{"dataChanged":j,"metaDataChanged":j},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(a){},getColumnCount:function(){},getColumnId:function(c){},getColumnIndexById:function(h){},getColumnName:function(r){},isColumnEditable:function(d){},isColumnSortable:function(b){},sortByColumn:function(s,t){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(m,n){},getValue:function(k,l){},getValueById:function(u,v){},setValue:function(o,p,q){},setValueById:function(e,f,g){}}});
})();
(function(){var z="qx.event.type.Data",y="__kr",x="abstract",w="__ks",v="qx.ui.table.model.Abstract",u="__kq";
qx.Class.define(v,{type:x,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":z,"metaDataChanged":z},construct:function(){arguments.callee.base.call(this);
this.__kq=[];
this.__kr=[];
this.__ks={};
},members:{__kq:null,__kr:null,__ks:null,__kt:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(q){return null;
},isColumnEditable:function(k){return false;
},isColumnSortable:function(s){return false;
},sortByColumn:function(h,j){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(f,g){},getValue:function(a,b){throw new Error("getValue is abstract");
},getValueById:function(l,m){return this.getValue(this.getColumnIndexById(l),m);
},setValue:function(A,B,C){throw new Error("setValue is abstract");
},setValueById:function(D,E,F){return this.setValue(this.getColumnIndexById(D),E,F);
},getColumnCount:function(){return this.__kq.length;
},getColumnIndexById:function(n){return this.__ks[n];
},getColumnId:function(r){return this.__kq[r];
},getColumnName:function(G){return this.__kr[G];
},setColumnIds:function(t){this.__kq=t;
this.__ks={};

for(var i=0;i<t.length;i++){this.__ks[t[i]]=i;
}this.__kr=new Array(t.length);
if(!this.__kt){this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},setColumnNamesByIndex:function(p){if(this.__kq.length!=p.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__kq.length+" != "+p.length);
}this.__kr=p;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},setColumnNamesById:function(o){this.__kr=new Array(this.__kq.length);

for(var i=0;i<this.__kq.length;++i){this.__kr[i]=o[this.__kq[i]];
}},setColumns:function(c,d){var e=this.__kq.length==0||d;

if(d==null){if(this.__kq.length==0){d=c;
}else{d=this.__kq;
}}
if(d.length!=c.length){throw new Error("columnIdArr and columnNameArr have different length: "+d.length+" != "+c.length);
}
if(e){this.__kt=true;
this.setColumnIds(d);
this.__kt=false;
}this.setColumnNamesByIndex(c);
}},destruct:function(){this._disposeFields(u,y,w);
}});
})();
(function(){var X="qx.ui.table.model.Simple",W="Boolean",V="__ky",U="__kw",T="__kx",S="__ku";
qx.Class.define(X,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__ku=[];
this.__kv=-1;
this.__kz;
this.__kw=[];
this.__kx=null;
},properties:{caseSensitiveSorting:{check:W,init:true}},statics:{_defaultSortComparatorAscending:function(bl,bm){var bn=bl[arguments.callee.columnIndex];
var bo=bm[arguments.callee.columnIndex];
return (bn>bo)?1:((bn==bo)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(o,p){var q=(isNaN(o[arguments.callee.columnIndex])?o[arguments.callee.columnIndex].toLowerCase():o[arguments.callee.columnIndex]);
var r=(isNaN(p[arguments.callee.columnIndex])?p[arguments.callee.columnIndex].toLowerCase():p[arguments.callee.columnIndex]);
return (q>r)?1:((q==r)?0:-1);
},_defaultSortComparatorDescending:function(y,z){var A=y[arguments.callee.columnIndex];
var B=z[arguments.callee.columnIndex];
return (A<B)?1:((A==B)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(E,F){var G=(isNaN(E[arguments.callee.columnIndex])?E[arguments.callee.columnIndex].toLowerCase():E[arguments.callee.columnIndex]);
var H=(isNaN(F[arguments.callee.columnIndex])?F[arguments.callee.columnIndex].toLowerCase():F[arguments.callee.columnIndex]);
return (G<H)?1:((G==H)?0:-1);
}},members:{__ku:null,__kx:null,__ky:null,__kw:null,__kv:null,__kz:null,getRowData:function(bd){var be=this.__ku[bd];

if(be==null||be.originalData==null){return be;
}else{return be.originalData;
}},getRowDataAsMap:function(bD){var bF=this.__ku[bD];
var bE={};

for(var bG=0;bG<this.getColumnCount();bG++){bE[this.getColumnId(bG)]=bF[bG];
}return bE;
},getDataAsMapArray:function(){var t=this.getRowCount();
var s=[];

for(var i=0;i<t;i++){s.push(this.getRowDataAsMap(i));
}return s;
},setEditable:function(bb){this.__kx=[];

for(var bc=0;bc<this.getColumnCount();bc++){this.__kx[bc]=bb;
}this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},setColumnEditable:function(bt,bu){if(bu!=this.isColumnEditable(bt)){if(this.__kx==null){this.__kx=[];
}this.__kx[bt]=bu;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},isColumnEditable:function(u){return this.__kx?(this.__kx[u]==true):false;
},setColumnSortable:function(C,D){if(D!=this.isColumnSortable(C)){if(this.__ky==null){this.__ky=[];
}this.__ky[C]=D;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},isColumnSortable:function(e){return (this.__ky?(this.__ky[e]!==false):true);
},sortByColumn:function(bf,bg){var bi;
var bh=this.__kw[bf];

if(bh){bi=(bg?bh.ascending:bh.descending);
}else{if(this.getCaseSensitiveSorting()){bi=(bg?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{bi=(bg?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}bi.columnIndex=bf;
this.__ku.sort(bi);
this.__kv=bf;
this.__kz=bg;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},setSortMethods:function(Y,ba){this.__kw[Y]=ba;
},clearSorting:function(){if(this.__kv!=-1){this.__kv=-1;
this.__kz=true;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},getSortColumnIndex:function(){return this.__kv;
},isSortAscending:function(){return this.__kz;
},getRowCount:function(){return this.__ku.length;
},getValue:function(bj,bk){if(bk<0||bk>=this.__ku.length){throw new Error("this.__rowArr out of bounds: "+bk+" (0.."+this.__ku.length+")");
}return this.__ku[bk][bj];
},setValue:function(bz,bA,bB){if(this.__ku[bA][bz]!=bB){this.__ku[bA][bz]=bB;
if(this.hasListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED)){var bC={firstRow:bA,lastRow:bA,firstColumn:bz,lastColumn:bz};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,bC);
}
if(bz==this.__kv){this.clearSorting();
}}},setData:function(l,m){this.__ku=l;
if(this.hasListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED)){var n={firstRow:0,lastRow:l.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,n);
}
if(m!==false){this.clearSorting();
}},getData:function(){return this.__ku;
},setDataAsMapArray:function(v,w,x){this.setData(this._mapArray2RowArr(v,w),x);
},addRows:function(a,b,c){if(b==null){b=this.__ku.length;
}a.splice(0,0,b,0);
Array.prototype.splice.apply(this.__ku,a);
var d={firstRow:b,lastRow:this.__ku.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,d);

if(c!==false){this.clearSorting();
}},addRowsAsMapArray:function(bv,bw,bx,by){this.addRows(this._mapArray2RowArr(bv,bx),bw,by);
},setRows:function(bp,bq,br){if(bq==null)bq=0;
bp.splice(0,0,bq,bp.length);
Array.prototype.splice.apply(this.__ku,bp);
var bs={firstRow:bq,lastRow:this.__ku.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,bs);

if(br!==false){this.clearSorting();
}},setRowsAsMapArray:function(f,g,h,k){this.setRows(this._mapArray2RowArr(f,h),g,k);
},removeRows:function(O,P,Q){this.__ku.splice(O,P);
var R={firstRow:O,lastRow:this.__ku.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:O,removeCount:P};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,R);

if(Q!==false){this.clearSorting();
}},_mapArray2RowArr:function(I,J){var N=I.length;
var K=this.getColumnCount();
var M=new Array(N);
var L;

for(var i=0;i<N;++i){L=[];

if(J){L.originalData=I[i];
}
for(var j=0;j<K;++j){L[j]=I[i][this.getColumnId(j)];
}M[i]=L;
}return M;
}},destruct:function(){this._disposeFields(S,T,U,V);
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
(function(){var s="",r="px;",q=".qooxdoo-table-cell {",p="qooxdoo-table-cell",o='" ',n="nowrap",m="default",l="qx.client",k="}",j="width:",P=".qooxdoo-table-cell-right { text-align:right } ",O="0px 6px",N='<div class="',M="0px",L="height:",K="1px solid ",J=".qooxdoo-table-cell-bold { font-weight:bold } ",I="table-row-line",H='>',G="mshtml",z='</div>',A="ellipsis",x="content-box",y='left:',v="qx.ui.table.cellrenderer.Abstract",w='" style="',t="abstract",u="none",B="hidden",C="} ",E='px;',D=".qooxdoo-table-cell-italic { font-style:italic} ",F="absolute";
qx.Class.define(v,{type:t,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
var S=qx.ui.table.cellrenderer.Abstract;

if(!S.__kA){var U=qx.theme.manager.Color.getInstance();
S.__kA=arguments.callee.self;
var T=q+
qx.bom.element.Style.compile({position:F,top:M,overflow:B,whiteSpace:n,borderRight:K+U.resolve(I),padding:O,cursor:m,textOverflow:A,userSelect:u})+C+P+D+J;

if(!qx.core.Variant.isSet(l,G)){T+=q+qx.bom.element.BoxSizing.compile(x)+k;
}S.__kA.stylesheet=qx.bom.Stylesheet.createElement(T);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(R){return p;
},_getCellStyle:function(a){return a.style||s;
},_getCellAttributes:function(Q){return s;
},_getContentHtml:function(b){return b.value||s;
},_getCellSizeStyle:function(c,d,e,f){var g=s;

if(qx.bom.client.Feature.CONTENT_BOX){c-=e;
d-=f;
}g+=j+c+r;
g+=L+d+r;
return g;
},createDataCellHtml:function(h,i){i.push(N,this._getCellClass(h),w,y,h.styleLeft,E,this._getCellSizeStyle(h.styleWidth,h.styleHeight,this._insetX,this._insetY),this._getCellStyle(h),o,this._getCellAttributes(h),H+this._getContentHtml(h),z);
}}});
})();
(function(){var p="",o="number",n="Boolean",m="qx.ui.table.cellrenderer.Default",l=" qooxdoo-table-cell-bold",k=" qooxdoo-table-cell-right",j=" qooxdoo-table-cell-italic",i="string";
qx.Class.define(m,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4},properties:{useAutoAlign:{check:n,init:true}},members:{_getStyleFlags:function(a){if(this.getUseAutoAlign()){if(typeof a.value==o){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},_getCellClass:function(e){var f=arguments.callee.base.call(this,e);

if(!f){return p;
}var g=this._getStyleFlags(e);

if(g&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){f+=k;
}
if(g&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){f+=l;
}
if(g&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){f+=j;
}return f;
},_getContentHtml:function(h){return qx.bom.String.escape(this._formatValue(h));
},_formatValue:function(b){var d=b.value;

if(d==null){return p;
}
if(typeof d==i){return d;
}else if(typeof d==o){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var c=qx.ui.table.cellrenderer.Default._numberFormat.format(d);
}else if(d instanceof Date){c=qx.util.format.DateFormat.getDateInstance().format(d);
}else{c=d;
}return c;
}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var k="",j="Function",i="number",h="qx.ui.table.celleditor.TextField",g="table-editor-textfield",f="appear";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,construct:function(){arguments.callee.base.call(this);
},properties:{validationFunction:{check:j,nullable:true,init:null}},members:{__kB:null,createCellEditor:function(a){var b=new qx.ui.form.TextField;
b.setAppearance(g);
b.originalValue=a.value;

if(a.value===null){a.value=k;
}b.setValue(k+a.value);
b.addListener(f,function(){b.selectAll();
});
return b;
},getCellEditorValue:function(c){var e=c.getValue();
var d=this.getValidationFunction();

if(!this.__kB&&d){e=d(e,c.originalValue);
this.__kB=true;
}
if(typeof c.originalValue==i){e=parseFloat(e);
}return e;
}}});
})();
(function(){var G="qx.event.type.Data",F="visibilityChanged",E="visibilityChangedPre",D="__kI",C="__kG",B="__kE",A="orderChanged",z="__kD",y="__kJ",w="widthChanged",t="qx.ui.table.columnmodel.Basic",v="__kF",u="__kH";
qx.Class.define(t,{extend:qx.core.Object,events:{"widthChanged":G,"visibilityChangedPre":G,"visibilityChanged":G,"orderChanged":G},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__kC:null,__kD:null,__kE:null,__kF:null,__kG:null,__kH:null,__kI:null,__kJ:null,init:function(K){this.__kG=[];
var N=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var O=this.__kH=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER();
var M=this.__kI=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER();
var L=this.__kJ=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY();
this.__kF=[];
this.__kE=[];

for(var Q=0;Q<K;Q++){this.__kG[Q]={width:N,headerRenderer:O,dataRenderer:M,editorFactory:L};
this.__kF[Q]=Q;
this.__kE[Q]=Q;
}this.__kD=null;

for(var Q=0;Q<K;Q++){var P={col:Q,visible:true};
this.fireDataEvent(E,P);
this.fireDataEvent(F,P);
}},getVisibleColumns:function(){return this.__kE!=null?this.__kE:[];
},setColumnWidth:function(p,q){var s=this.__kG[p].width;

if(s!=q){this.__kG[p].width=q;
var r={col:p,newWidth:q,oldWidth:s};
this.fireDataEvent(w,r);
}},getColumnWidth:function(S){return this.__kG[S].width;
},setHeaderCellRenderer:function(f,g){var h=this.__kG[f].headerRenderer;

if(h!==this.__kH){h.dispose();
}this.__kG[f].headerRenderer=g;
},getHeaderCellRenderer:function(H){return this.__kG[H].headerRenderer;
},setDataCellRenderer:function(T,U){var V=this.__kG[T].headerRenderer;

if(V!==this.__kI){V.dispose();
}this.__kG[T].dataRenderer=U;
},getDataCellRenderer:function(R){return this.__kG[R].dataRenderer;
},setCellEditorFactory:function(X,Y){var ba=this.__kG[X].headerRenderer;

if(ba!==this.__kJ){ba.dispose();
}this.__kG[X].editorFactory=Y;
},getCellEditorFactory:function(b){return this.__kG[b].editorFactory;
},_getColToXPosMap:function(){if(this.__kD==null){this.__kD={};

for(var e=0;e<this.__kF.length;e++){var d=this.__kF[e];
this.__kD[d]={overX:e};
}
for(var c=0;c<this.__kE.length;c++){var d=this.__kE[c];
this.__kD[d].visX=c;
}}return this.__kD;
},getVisibleColumnCount:function(){return this.__kE!=null?this.__kE.length:0;
},getVisibleColumnAtX:function(J){return this.__kE[J];
},getVisibleX:function(W){return this._getColToXPosMap()[W].visX;
},getOverallColumnCount:function(){return this.__kF.length;
},getOverallColumnAtX:function(o){return this.__kF[o];
},getOverallX:function(a){return this._getColToXPosMap()[a].overX;
},isColumnVisible:function(I){return (this._getColToXPosMap()[I].visX!=null);
},setColumnVisible:function(bb,bc){if(bc!=this.isColumnVisible(bb)){if(bc){var bi=this._getColToXPosMap();
var bf=bi[bb].overX;

if(bf==null){throw new Error("Showing column failed: "+bb+". The column is not added to this TablePaneModel.");
}var bg;

for(var x=bf+1;x<this.__kF.length;x++){var bh=this.__kF[x];
var bd=bi[bh].visX;

if(bd!=null){bg=bd;
break;
}}if(bg==null){bg=this.__kE.length;
}this.__kE.splice(bg,0,bb);
}else{var be=this.getVisibleX(bb);
this.__kE.splice(be,1);
}this.__kD=null;
if(!this.__kC){var bj={col:bb,visible:bc};
this.fireDataEvent(E,bj);
this.fireDataEvent(F,bj);
}}},moveColumn:function(j,k){this.__kC=true;
var n=this.__kF[j];
var l=this.isColumnVisible(n);

if(l){this.setColumnVisible(n,false);
}this.__kF.splice(j,1);
this.__kF.splice(k,0,n);
this.__kD=null;

if(l){this.setColumnVisible(n,true);
}this.__kC=false;
var m={col:n,fromOverXPos:j,toOverXPos:k};
this.fireDataEvent(A,m);
}},destruct:function(){for(var i=0;i<this.__kG.length;i++){this.__kG[i].headerRenderer.dispose();
this.__kG[i].dataRenderer.dispose();
this.__kG[i].editorFactory.dispose();
}this._disposeFields(v,B,C,z);
this._disposeObjects(u,D,y);
}});
})();
(function(){var w="appear",v="columnVisibilityMenuCreateEnd",u="tableWidthChanged",t="verticalScrollBarChanged",s="qx.ui.table.columnmodel.resizebehavior.Abstract",r="qx.ui.table.columnmodel.Resize",q="_applyBehavior",p="separator",n="visibilityChanged",m="Reset column widths",j="changeBehavior",l="user-button",k="__kM",i="widthChanged",h="execute";
qx.Class.define(r,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){arguments.callee.base.call(this);
this.__kK=false;
this.__kL=false;
},properties:{behavior:{check:s,init:null,nullable:true,apply:q,event:j}},members:{__kL:null,__kK:null,__kM:null,_applyBehavior:function(a,b){if(b!=null){b.dispose();
b=null;
}a._setNumColumns(this.getOverallColumnCount());
},init:function(c,d){arguments.callee.base.call(this,c);
if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.__kM=d;
d.addListener(w,this._onappear,this);
d.addListener(u,this._onTableWidthChanged,this);
d.addListener(t,this._onverticalscrollbarchanged,this);
this.addListener(i,this._oncolumnwidthchanged,this);
this.addListener(n,this._onvisibilitychanged,this);
this.__kM.addListener(v,this._addResetColumnWidthButton,this);
this.getBehavior()._setNumColumns(c);
},getTable:function(){return this.__kM;
},_addResetColumnWidthButton:function(event){var g=event.getData();
var f=g.columnButton;
var e=g.menu;
var o;
o=f.factory(p);
e.add(o);
o=f.factory(l,{text:this.tr(m)});
e.add(o);
o.addListener(h,this._onappear,this);
},_onappear:function(event){if(this.__kK){return ;
}this.__kK=true;
{};
this.getBehavior().onAppear(this,event,event.getType()!==w);
this.__kM._updateScrollerWidths();
this.__kM._updateScrollBarVisibility();
this.__kK=false;
this.__kL=true;
},_onTableWidthChanged:function(event){if(this.__kK||!this.__kL){return ;
}this.__kK=true;
{};
this.getBehavior().onTableWidthChanged(this,event);
this.__kK=false;
},_onverticalscrollbarchanged:function(event){if(this.__kK||!this.__kL){return ;
}this.__kK=true;
{};
this.getBehavior().onVerticalScrollBarChanged(this,event);
qx.event.Timer.once(function(){if(this.__kM&&!this.__kM.isDisposed()){this.__kM._updateScrollerWidths();
this.__kM._updateScrollBarVisibility();
}},this,0);
this.__kK=false;
},_oncolumnwidthchanged:function(event){if(this.__kK||!this.__kL){return ;
}this.__kK=true;
{};
this.getBehavior().onColumnWidthChanged(this,event);
this.__kK=false;
},_onvisibilitychanged:function(event){if(this.__kK||!this.__kL){return ;
}this.__kK=true;
{};
this.getBehavior().onVisibilityChanged(this,event);
this.__kK=false;
}},destruct:function(){this._disposeFields(k);
}});
})();
(function(){var p="icon",o="label",n="String",m="sort-icon",l="_applySortIcon",k="_applyIcon",j="table-header-cell",i="qx.ui.table.headerrenderer.HeaderCell",h="_applyLabel";
qx.Class.define(i,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var c=new qx.ui.layout.Grid();
c.setRowFlex(0,1);
c.setColumnFlex(1,1);
c.setColumnFlex(2,1);
this.setLayout(c);
},properties:{appearance:{refine:true,init:j},label:{check:n,init:null,nullable:true,apply:h},sortIcon:{check:n,init:null,nullable:true,apply:l,themeable:true},icon:{check:n,init:null,nullable:true,apply:k}},members:{_applyLabel:function(q,r){if(q){this._showChildControl(o).setContent(q);
}else{this._excludeChildControl(o);
}},_applySortIcon:function(a,b){if(a){this._showChildControl(m).setSource(a);
}else{this._excludeChildControl(m);
}},_applyIcon:function(d,e){if(d){this._showChildControl(p).setSource(d);
}else{this._excludeChildControl(p);
}},_createChildControlImpl:function(f){var g;

switch(f){case o:g=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(g,{row:0,column:1});
break;
case m:g=new qx.ui.basic.Image(this.getSortIcon());
g.setAnonymous(true);
this._add(g,{row:0,column:2});
break;
case p:g=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(g,{row:0,column:0});
break;
}return g||arguments.callee.base.call(this,f);
}}});
})();
(function(){var h="\n",g="",f=" &nbsp;",e="<br>",d=" ",c="qx.bom.String";
qx.Class.define(c,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(a){return qx.util.StringEscape.escape(a,qx.bom.String.FROM_CHARCODE);
},unescape:function(j){return qx.util.StringEscape.unescape(j,qx.bom.String.TO_CHARCODE);
},fromText:function(i){return qx.bom.String.escape(i).replace(/(  |\n)/g,function(l){var m={"  ":f,"\n":e};
return m[l]||l;
});
},toText:function(k){return qx.bom.String.unescape(k.replace(/\s+|<([^>])+>/gi,function(b){if(/\s+/.test(b)){return d;
}else if(/^<BR|^<br/gi.test(b)){return h;
}else{return g;
}}));
}},defer:function(n,o,p){n.FROM_CHARCODE=qx.lang.Object.invert(n.TO_CHARCODE);
}});
})();
(function(){var k=";",j="&",h="",g="&#",f='X',e='#',d="qx.client",c="qx.util.StringEscape";
qx.Bootstrap.define(c,{statics:{escape:qx.core.Variant.select(d,{"mshtml":function(v,w){var y,A=[];

for(var i=0,l=v.length;i<l;i++){var z=v.charAt(i);
var x=z.charCodeAt(0);

if(w[x]){y=j+w[x]+k;
}else{if(x>0x7F){y=g+x+k;
}else{y=z;
}}A[A.length]=y;
}return A.join(h);
},"default":function(p,q){var s,u=h;

for(var i=0,l=p.length;i<l;i++){var t=p.charAt(i);
var r=t.charCodeAt(0);

if(q[r]){s=j+q[r]+k;
}else{if(r>0x7F){s=g+r+k;
}else{s=t;
}}u+=s;
}return u;
}}),unescape:function(a,b){return a.replace(/&[#\w]+;/gi,function(m){var n=m;
var m=m.substring(1,m.length-1);
var o=b[m];

if(o){n=String.fromCharCode(o);
}else{if(m.charAt(0)==e){if(m.charAt(1).toUpperCase()==f){o=m.substring(2);
if(o.match(/^[0-9A-Fa-f]+$/gi)){n=String.fromCharCode(parseInt(o,16));
}}else{o=m.substring(1);
if(o.match(/^\d+$/gi)){n=String.fromCharCode(parseInt(o,10));
}}}}return n;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(c){},parse:function(b){}}});
})();
(function(){var P="",O="Number",N="-",M="0",L="String",K='(',J="g",I="Boolean",H="$",G="NaN",A='([0-9]{1,3}(?:',F='{0,1}[0-9]{3}){0,})',D="qx.util.format.NumberFormat",z='\\d+){0,1}',y="^",C=".",B="-Infinity",E="Infinity",x='([-+]){0,1}';
qx.Class.define(D,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(a){arguments.callee.base.call(this);
this.__kN=a;
},statics:{getIntegerInstance:function(){var n=qx.util.format.NumberFormat;

if(n._integerInstance==null){n._integerInstance=new n();
n._integerInstance.setMaximumFractionDigits(0);
}return n._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:O,init:0},maximumIntegerDigits:{check:O,nullable:true},minimumFractionDigits:{check:O,init:0},maximumFractionDigits:{check:O,nullable:true},groupingUsed:{check:I,init:true},prefix:{check:L,init:P},postfix:{check:L,init:P}},members:{__kN:null,format:function(b){switch(b){case Infinity:return E;
case -Infinity:return B;
case NaN:return G;
}var f=(b<0);

if(f){b=-b;
}
if(this.getMaximumFractionDigits()!=null){var m=Math.pow(10,this.getMaximumFractionDigits());
b=Math.round(b*m)/m;
}var l=String(Math.floor(b)).length;
var c=P+b;
var i=c.substring(0,l);

while(i.length<this.getMinimumIntegerDigits()){i=M+i;
}
if(this.getMaximumIntegerDigits()!=null&&i.length>this.getMaximumIntegerDigits()){i=i.substring(i.length-this.getMaximumIntegerDigits());
}var h=c.substring(l+1);

while(h.length<this.getMinimumFractionDigits()){h+=M;
}
if(this.getMaximumFractionDigits()!=null&&h.length>this.getMaximumFractionDigits()){h=h.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var e=i;
i=P;
var k;

for(k=e.length;k>3;k-=3){i=P+qx.locale.Number.getGroupSeparator(this.__kN)+e.substring(k-3,k)+i;
}i=e.substring(0,k)+i;
}var g=this.getPrefix()?this.getPrefix():P;
var d=this.getPostfix()?this.getPostfix():P;
var j=g+(f?N:P)+i;

if(h.length>0){j+=P+qx.locale.Number.getDecimalSeparator(this.__kN)+h;
}j+=d;
return j;
},parse:function(o){var t=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__kN)+P);
var r=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__kN)+P);
var p=new RegExp(y+qx.lang.String.escapeRegexpChars(this.getPrefix())+x+A+t+F+K+r+z+qx.lang.String.escapeRegexpChars(this.getPostfix())+H);
var s=p.exec(o);

if(s==null){throw new Error("Number string '"+o+"' does not match the number format");
}var u=(s[1]==N);
var w=s[2];
var v=s[3];
w=w.replace(new RegExp(t,J),P);
var q=(u?N:P)+w;

if(v!=null&&v.length!=0){v=v.replace(new RegExp(r),P);
q+=C+v;
}return parseFloat(q);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(f){return qx.locale.Manager.getInstance().localize(d,[],f);
},getGroupSeparator:function(e){return qx.locale.Manager.getInstance().localize(a,[],e);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var bx="(\\d\\d?)",bw="",bv="(",bu=")",bt="|",bs="abbreviated",br="wide",bq="wildcard",bp="default",bo="literal",bd="'",bc="hour",bb="(\\d\\d?\\d?)",ba="ms",Y="-",X="quoted_literal",W='a',V="+",U="HHmmss",T="long",bE="sec",bF="HH:mm:ss",bC='z',bD="day",bA="narrow",bB='Z',by="min",bz=" ",bG="SSS",bH="h",bh="SS",bg="Z",bj="00",bi='K',bl="EEEE",bk="^",bn="__kP",bm='y',bf="__kS",be="(\\d\\d(\\d\\d)?)",a="(\\d\\d)",b="K",c="((\\+|\\-)\\d\\d:?\\d\\d)",d="a",e="GMT",f="S",g="dd",h="__kR",j="qx.util.format.DateFormat",k="H",bL="YYYY",bK="EE",bJ="mm",bI='h',bP='s',bO='A',bN="KK",bM="ss",bR='H',bQ='S',D="__kO",E="0",B="MMMM",C="d",H="([a-zA-Z]+)",I="HH",F='k',G="m",z='Y',A='D',s="kk",r="hh",u="MM",t="yy",o="yyyy-MM-dd HH:mm:ss",n="short",q='d',p="unkown",m='m',l=":00",N="(\\d\\d\\d\\d)",O="k",P='M',Q="MMM",J="s",K="M",L='w',M="EEE",R="$",S="?",y='E',x="z",w="yyyy",v="__kQ";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(du,dv){arguments.callee.base.call(this);

if(!dv){this.__kO=qx.locale.Manager.getInstance().getLocale();
}else{this.__kO=dv;
}
if(du!=null){this.__kP=du.toString();
}else{this.__kP=qx.locale.Date.getDateFormat(T,this.__kO)+bz+qx.locale.Date.getDateTimeFormat(U,bF,this.__kO);
}},statics:{getDateTimeInstance:function(){var cu=qx.util.format.DateFormat;
var ct=qx.locale.Date.getDateFormat(T)+bz+qx.locale.Date.getDateTimeFormat(U,bF);

if(cu._dateInstance==null||cu.__kP!=ct){cu._dateTimeInstance=new cu();
}return cu._dateTimeInstance;
},getDateInstance:function(){var cl=qx.util.format.DateFormat;
var ck=qx.locale.Date.getDateFormat(n)+bw;

if(cl._dateInstance==null||cl.__kP!=ck){cl._dateInstance=new cl(ck);
}return cl._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:o,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__kO:null,__kP:null,__kQ:null,__kR:null,__kS:null,__kT:function(cO,cP){var cQ=bw+cO;

while(cQ.length<cP){cQ=E+cQ;
}return cQ;
},__kU:function(dn){var dp=new Date(dn.getTime());
var dq=dp.getDate();

while(dp.getMonth()!=0){dp.setDate(-1);
dq+=dp.getDate()+1;
}return dq;
},__kV:function(dt){return new Date(dt.getTime()+(3-((dt.getDay()+6)%7))*86400000);
},__kW:function(cT){var cV=this.__kV(cT);
var cW=cV.getFullYear();
var cU=this.__kV(new Date(cW,0,4));
return Math.floor(1.5+(cV.getTime()-cU.getTime())/86400000/7);
},format:function(cv){var cy=qx.util.format.DateFormat;
var cz=this.__kO;
var cJ=cv.getFullYear();
var cC=cv.getMonth();
var cL=cv.getDate();
var cw=cv.getDay();
var cD=cv.getHours();
var cA=cv.getMinutes();
var cE=cv.getSeconds();
var cF=cv.getMilliseconds();
var cH=cv.getTimezoneOffset()/60;
this.__kX();
var cG=bw;

for(var i=0;i<this.__kS.length;i++){var cI=this.__kS[i];

if(cI.type==bo){cG+=cI.text;
}else{var cx=cI.character;
var cB=cI.size;
var cK=S;

switch(cx){case bm:case z:if(cB==2){cK=this.__kT(cJ%100,2);
}else if(cB==4){cK=cJ;
}break;
case A:cK=this.__kT(this.__kU(cv),cB);
break;
case q:cK=this.__kT(cL,cB);
break;
case L:cK=this.__kT(this.__kW(cv),cB);
break;
case y:if(cB==2){cK=qx.locale.Date.getDayName(bA,cw,cz);
}else if(cB==3){cK=qx.locale.Date.getDayName(bs,cw,cz);
}else if(cB==4){cK=qx.locale.Date.getDayName(br,cw,cz);
}break;
case P:if(cB==1||cB==2){cK=this.__kT(cC+1,cB);
}else if(cB==3){cK=qx.locale.Date.getMonthName(bs,cC,cz);
}else if(cB==4){cK=qx.locale.Date.getMonthName(br,cC,cz);
}break;
case W:cK=(cD<12)?qx.locale.Date.getAmMarker(cz):qx.locale.Date.getPmMarker(cz);
break;
case bR:cK=this.__kT(cD,cB);
break;
case F:cK=this.__kT((cD==0)?24:cD,cB);
break;
case bi:cK=this.__kT(cD%12,cB);
break;
case bI:cK=this.__kT(((cD%12)==0)?12:(cD%12),cB);
break;
case m:cK=this.__kT(cA,cB);
break;
case bP:cK=this.__kT(cE,cB);
break;
case bQ:cK=this.__kT(cF,cB);
break;
case bC:if(cB==1){cK=e+((cH<0)?Y:V)+this.__kT(cH)+l;
}else if(cB==2){cK=cy.MEDIUM_TIMEZONE_NAMES[cH];
}else if(cB==3){cK=cy.FULL_TIMEZONE_NAMES[cH];
}break;
case bB:cK=((cH<0)?Y:V)+this.__kT(cH,2)+bj;
}cG+=cK;
}}return cG;
},parse:function(dw){this.__kY();
var dC=this.__kQ.regex.exec(dw);

if(dC==null){throw new Error("Date string '"+dw+"' does not match the date format: "+this.__kP);
}var dx={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var dy=1;

for(var i=0;i<this.__kQ.usedRules.length;i++){var dA=this.__kQ.usedRules[i];
var dz=dC[dy];

if(dA.field!=null){dx[dA.field]=parseInt(dz,10);
}else{dA.manipulator(dx,dz);
}dy+=(dA.groups==null)?1:dA.groups;
}var dB=new Date(dx.year,dx.month,dx.day,(dx.ispm)?(dx.hour+12):dx.hour,dx.min,dx.sec,dx.ms);

if(dx.month!=dB.getMonth()||dx.year!=dB.getFullYear()){throw new Error("Error parsing date '"+dw+"': the value for day or month is too large");
}return dB;
},__kX:function(){if(this.__kS!=null){return;
}this.__kS=[];
var di;
var dg=0;
var dk=bw;
var de=this.__kP;
var dh=bp;
var i=0;

while(i<de.length){var dj=de.charAt(i);

switch(dh){case X:if(dj==bd){if(i+1>=de.length){i++;
break;
}var df=de.charAt(i+1);

if(df==bd){dk+=dj;
i++;
}else{i++;
dh=p;
}}else{dk+=dj;
i++;
}break;
case bq:if(dj==di){dg++;
i++;
}else{this.__kS.push({type:bq,character:di,size:dg});
di=null;
dg=0;
dh=bp;
}break;
default:if((dj>=W&&dj<=bC)||(dj>=bO&&dj<=bB)){di=dj;
dh=bq;
}else if(dj==bd){if(i+1>=de.length){dk+=dj;
i++;
break;
}var df=de.charAt(i+1);

if(df==bd){dk+=dj;
i++;
}i++;
dh=X;
}else{dh=bp;
}
if(dh!=bp){if(dk.length>0){this.__kS.push({type:bo,text:dk});
dk=bw;
}}else{dk+=dj;
i++;
}break;
}}if(di!=null){this.__kS.push({type:bq,character:di,size:dg});
}else if(dk.length>0){this.__kS.push({type:bo,text:dk});
}},__kY:function(){if(this.__kQ!=null){return ;
}var dI=this.__kP;
this.__la();
this.__kX();
var dO=[];
var dK=bk;

for(var dG=0;dG<this.__kS.length;dG++){var dP=this.__kS[dG];

if(dP.type==bo){dK+=qx.lang.String.escapeRegexpChars(dP.text);
}else{var dH=dP.character;
var dL=dP.size;
var dJ;

for(var dQ=0;dQ<this.__kR.length;dQ++){var dM=this.__kR[dQ];

if(dH==dM.pattern.charAt(0)&&dL==dM.pattern.length){dJ=dM;
break;
}}if(dJ==null){var dN=bw;

for(var i=0;i<dL;i++){dN+=dH;
}throw new Error("Malformed date format: "+dI+". Wildcard "+dN+" is not supported");
}else{dO.push(dJ);
dK+=dJ.regex;
}}}dK+=R;
var dF;

try{dF=new RegExp(dK);
}catch(co){throw new Error("Malformed date format: "+dI);
}this.__kQ={regex:dF,"usedRules":dO,pattern:dK};
},__la:function(){var bW=qx.util.format.DateFormat;

if(this.__kR!=null){return ;
}this.__kR=[];
var cj=function(dl,dm){dm=parseInt(dm,10);

if(dm<bW.ASSUME_YEAR_2000_THRESHOLD){dm+=2000;
}else if(dm<100){dm+=1900;
}dl.year=dm;
};
var bY=function(cM,cN){cM.month=parseInt(cN,10)-1;
};
var ca=function(cR,cS){cR.ispm=(cS==bW.PM_MARKER);
};
var ce=function(cX,cY){cX.hour=parseInt(cY,10)%24;
};
var bX=function(da,db){da.hour=parseInt(db,10)%12;
};
var ch=function(cm,cn){return;
};
var cf=qx.locale.Date.getMonthNames(bs,this.__kO);

for(var i=0;i<cf.length;i++){cf[i]=qx.lang.String.escapeRegexpChars(cf[i].toString());
}var cg=function(cp,cq){cq=qx.lang.String.escapeRegexpChars(cq);
cp.month=cf.indexOf(cq);
};
var bT=qx.locale.Date.getMonthNames(br,this.__kO);

for(var i=0;i<bT.length;i++){bT[i]=qx.lang.String.escapeRegexpChars(bT[i].toString());
}var bS=function(cr,cs){cs=qx.lang.String.escapeRegexpChars(cs);
cr.month=bT.indexOf(cs);
};
var bV=qx.locale.Date.getDayNames(bA,this.__kO);

for(var i=0;i<bV.length;i++){bV[i]=qx.lang.String.escapeRegexpChars(bV[i].toString());
}var cc=function(dD,dE){dE=qx.lang.String.escapeRegexpChars(dE);
dD.month=bV.indexOf(dE);
};
var ci=qx.locale.Date.getDayNames(bs,this.__kO);

for(var i=0;i<ci.length;i++){ci[i]=qx.lang.String.escapeRegexpChars(ci[i].toString());
}var cb=function(dc,dd){dd=qx.lang.String.escapeRegexpChars(dd);
dc.month=ci.indexOf(dd);
};
var cd=qx.locale.Date.getDayNames(br,this.__kO);

for(var i=0;i<cd.length;i++){cd[i]=qx.lang.String.escapeRegexpChars(cd[i].toString());
}var bU=function(dr,ds){ds=qx.lang.String.escapeRegexpChars(ds);
dr.month=cd.indexOf(ds);
};
this.__kR.push({pattern:bL,regex:N,manipulator:cj});
this.__kR.push({pattern:w,regex:be,groups:2,manipulator:cj});
this.__kR.push({pattern:t,regex:a,manipulator:cj});
this.__kR.push({pattern:K,regex:bx,manipulator:bY});
this.__kR.push({pattern:u,regex:bx,manipulator:bY});
this.__kR.push({pattern:Q,regex:bv+cf.join(bt)+bu,manipulator:cg});
this.__kR.push({pattern:B,regex:bv+bT.join(bt)+bu,manipulator:bS});
this.__kR.push({pattern:g,regex:bx,field:bD});
this.__kR.push({pattern:C,regex:bx,field:bD});
this.__kR.push({pattern:bK,regex:bv+bV.join(bt)+bu,manipulator:cc});
this.__kR.push({pattern:M,regex:bv+ci.join(bt)+bu,manipulator:cb});
this.__kR.push({pattern:bl,regex:bv+cd.join(bt)+bu,manipulator:bU});
this.__kR.push({pattern:d,regex:bv+bW.AM_MARKER+bt+bW.PM_MARKER+bu,manipulator:ca});
this.__kR.push({pattern:I,regex:bx,field:bc});
this.__kR.push({pattern:k,regex:bx,field:bc});
this.__kR.push({pattern:s,regex:bx,manipulator:ce});
this.__kR.push({pattern:O,regex:bx,manipulator:ce});
this.__kR.push({pattern:bN,regex:bx,field:bc});
this.__kR.push({pattern:b,regex:bx,field:bc});
this.__kR.push({pattern:r,regex:bx,manipulator:bX});
this.__kR.push({pattern:bH,regex:bx,manipulator:bX});
this.__kR.push({pattern:bJ,regex:bx,field:by});
this.__kR.push({pattern:G,regex:bx,field:by});
this.__kR.push({pattern:bM,regex:bx,field:bE});
this.__kR.push({pattern:J,regex:bx,field:bE});
this.__kR.push({pattern:bG,regex:bb,field:ba});
this.__kR.push({pattern:bh,regex:bb,field:ba});
this.__kR.push({pattern:f,regex:bb,field:ba});
this.__kR.push({pattern:bg,regex:c,manipulator:ch});
this.__kR.push({pattern:x,regex:H,manipulator:ch});
}},destruct:function(){this._disposeFields(bn,D,bf,v,h);
}});
})();
(function(){var J="_",I="thu",H="sat",G="cldr_day_",F="cldr_month_",E="wed",D="fri",C="tue",B="mon",A="sun",ba="short",Y="HH:mm",X="HHmmsszz",W="HHmm",V="HHmmss",U="cldr_date_format_",T="HH:mm:ss zz",S="full",R="cldr_pm",Q="long",O="medium",P="cldr_am",M="qx.locale.Date",N="cldr_date_time_format_",K="cldr_time_format_",L="HH:mm:ss";
qx.Class.define(M,{statics:{__lb:qx.locale.Manager.getInstance(),getAmMarker:function(n){return this.__lb.localize(P,[],n);
},getPmMarker:function(e){return this.__lb.localize(R,[],e);
},getDayNames:function(length,r){{};
var s=[A,B,C,E,I,D,H];
var u=[];

for(var i=0;i<s.length;i++){var t=G+length+J+s[i];
u.push(this.__lb.localize(t,[],r));
}return u;
},getDayName:function(length,a,b){{};
var c=[A,B,C,E,I,D,H];
var d=G+length+J+c[a];
return this.__lb.localize(d,[],b);
},getMonthNames:function(length,v){{};
var w=[];

for(var i=0;i<12;i++){var x=F+length+J+(i+1);
w.push(this.__lb.localize(x,[],v));
}return w;
},getMonthName:function(length,bi,bj){{};
var bk=F+length+J+(bi+1);
return this.__lb.localize(bk,[],bj);
},getDateFormat:function(o,p){{};
var q=U+o;
return this.__lb.localize(q,[],p);
},getDateTimeFormat:function(bo,bp,bq){var bs=N+bo;
var br=this.__lb.localize(bs,[],bq);

if(br==bs){br=bp;
}return br;
},getTimeFormat:function(be,bf){{};
var bh=K+be;
var bg=this.__lb.localize(bh,[],bf);

if(bg!=bh){return bg;
}
switch(be){case ba:case O:return qx.locale.Date.getDateTimeFormat(W,Y);
case Q:return qx.locale.Date.getDateTimeFormat(V,L);
case S:return qx.locale.Date.getDateTimeFormat(X,T);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bb){var bc={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bd=qx.locale.Date._getTerritory(bb);
return bc[bd]!=null?bc[bd]:1;
},getWeekendStart:function(k){var m={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var l=qx.locale.Date._getTerritory(k);
return m[l]!=null?m[l]:6;
},getWeekendEnd:function(bl){var bm={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var bn=qx.locale.Date._getTerritory(bl);
return bm[bn]!=null?bm[bn]:0;
},isWeekend:function(f,g){var j=qx.locale.Date.getWeekendStart(g);
var h=qx.locale.Date.getWeekendEnd(g);

if(h>j){return ((f>=j)&&(f<=h));
}else{return ((f>=j)||(f<=h));
}},_getTerritory:function(y){if(y){var z=y.split(J)[1]||y;
}else{z=this.__lb.getTerritory()||this.__lb.getLanguage();
}return z.toUpperCase();
}}});
})();
(function(){var D="none",C="qx.client",B="color",A="qx.event.type.Data",z="readonly",y="off",x="changeValue",w="readOnly",v="text",u="_applyTextAlign",bb="Boolean",ba="gecko",Y="A",X="string",W="change",V="textAlign",U="center",T="disabled",S="_applyReadOnly",R="resize",K="qx.ui.form.AbstractField",L="transparent",I="spellcheck",J="on",G="false",H="right",E="abstract",F="block",M="changeName",N="webkit",P="String",O="qxKeepFocus",Q="left";
qx.Class.define(K,{extend:qx.ui.core.Widget,implement:qx.ui.form.IFormElement,type:E,construct:function(r){arguments.callee.base.call(this);

if(r!=null){this.setValue(r);
}this.getContentElement().addListener(W,this._onChangeContent,this);
},events:{"input":A,"changeValue":A},properties:{name:{check:P,nullable:true,event:M},textAlign:{check:[Q,U,H],nullable:true,themeable:true,apply:u},readOnly:{check:bb,apply:S,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_createInputElement:function(){return new qx.html.Input(v);
},_createContentElement:function(){var q=this._createInputElement();
if(qx.core.Variant.isSet(C,ba)){q.setAttribute(I,G);
}q.setStyles({"border":D,"padding":0,"margin":0,"display":F,"background":L,"outline":D,"appearance":D,"autoComplete":y});
if(qx.core.Variant.isSet(C,N)){q.setStyle(R,D);
}return q;
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);
this.getContentElement().setAttribute(T,a===false);
},__lc:{width:16,height:16},_getContentHint:function(){return {width:this.__lc.width*10,height:this.__lc.height||16};
},_applyFont:function(m,n){var o;

if(m){var p=qx.theme.manager.Font.getInstance().resolve(m);
o=p.getStyles();
}else{o=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(o);
if(m){this.__lc=qx.bom.Label.getTextSize(Y,o);
}else{delete this.__lc;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(c,d){if(c){this.getContentElement().setStyle(B,qx.theme.manager.Color.getInstance().resolve(c));
}else{this.getContentElement().removeStyle(B);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAll();
},_getTextSize:function(){return this.__lc;
},setValue:function(k){if(typeof k===X||k instanceof String){var l=this.getContentElement();

if(l.getValue()!=k){l.setValue(k);
this.fireNonBubblingEvent(x,qx.event.type.Data,[k]);
}return k;
}throw new Error("Invalid value type: "+k);
},getValue:function(){return this.getContentElement().getValue();
},_onChangeContent:function(e){this.fireNonBubblingEvent(x,qx.event.type.Data,[e.getData()]);
},getSelection:function(){return this.getContentElement().getSelection();
},getSelectionLength:function(){return this.getContentElement().getSelectionLength();
},setSelection:function(f,g){this.getContentElement().setSelection(f,g);
},clearSelection:function(){this.getContentElement().clearSelection();
},selectAll:function(){this.setSelection(0);
},_applyTextAlign:function(s,t){this.getContentElement().setStyle(V,s);
},_applyReadOnly:function(h,i){var j=this.getContentElement();
j.setAttribute(w,h);
j.setAttribute(O,h?J:y);

if(h){this.addState(z);
this.setFocusable(false);
}else{this.removeState(z);
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
qx.Class.define(b,{extend:qx.html.Element,construct:function(l){arguments.callee.base.call(this);
this.__ld=l;
if(l===a||l===e){this.setNodeName(l);
}else{this.setNodeName(c);
}},members:{__ld:null,_createDomElement:function(){return qx.bom.Input.create(this.__ld);
},_applyProperty:function(name,m){arguments.callee.base.call(this,name,m);
var n=this.getDomElement();

if(name===f){qx.bom.Input.setValue(n,m);
}else if(name===g){qx.bom.Input.setWrap(n,m);
}},setValue:function(i){var j=this.getDomElement();

if(j){if(j.value!=i){qx.bom.Input.setValue(j,i);
}}else{this._setProperty(f,i);
}return this;
},getValue:function(){var h=this.getDomElement();

if(h){return qx.bom.Input.getValue(h);
}return this._getProperty(f)||d;
},setWrap:function(k){if(this.__ld===e){this._setProperty(g,k);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__ld===e){return this._getProperty(g);
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
},registerEvent:qx.core.Variant.select(k,{"mshtml":function(N,O,P){if(!N.__le){var Q=N.tagName.toLowerCase();
var R=N.type;

if(R===m||Q===n||R===q||R===p){qx.bom.Event.addNativeListener(N,j,this._onPropertyWrapper);
}
if(R!==q&&R!==p){qx.bom.Event.addNativeListener(N,s,this._onChangeValueWrapper);
}this.__lf(N,R);
N.__le=true;
}},"default":function(J,K,L){if(K===r){qx.bom.Event.addNativeListener(J,r,this._onInputWrapper);
}else if(K===s){if(J.type===p||J.type===q){qx.bom.Event.addNativeListener(J,s,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(J,s,this._onChangeValueWrapper);
}this.__lf(J,J.type);
}}}),unregisterEvent:qx.core.Variant.select(k,{"mshtml":function(B,C){if(B.__le){var D=B.tagName.toLowerCase();
var E=B.type;

if(E===m||D===n||E===q||E===p){qx.bom.Event.removeNativeListener(B,j,this._onPropertyWrapper);
}
if(E!==q&&E!==p){qx.bom.Event.removeNativeListener(B,s,this._onChangeValueWrapper);
}
try{delete B.__le;
}catch(H){B.__le=null;
}}},"default":function(S,T){if(T===r){qx.bom.Event.removeNativeListener(S,r,this._onInputWrapper);
}else if(T===s){if(S.type===p||S.type===q){qx.bom.Event.removeNativeListener(S,s,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(S,s,this._onChangeValueWrapper);
}}}}),__lf:qx.core.Variant.select(k,{"mshtml|opera":function(x,y){if(y===m){qx.event.Registration.addListener(x,h,function(e){if(e.getKeyIdentifier()===a){qx.event.Registration.fireEvent(x,s,qx.event.type.Data,[x.value]);
}});
}},"default":function(z,A){}}),_onInput:function(e){var w=e.target;
qx.event.Registration.fireEvent(w,r,qx.event.type.Data,[w.value]);
},_onChangeValue:function(e){var V=e.target||e.srcElement;
var U=V.value;

if(V.type===g){var U=[];

for(var i=0,o=V.options,l=o.length;i<l;i++){if(o[i].selected){U.push(o[i].value);
}}}qx.event.Registration.fireEvent(V,s,qx.event.type.Data,[U]);
},_onChangeChecked:function(e){var I=e.target;

if(I.type===p){if(I.checked){qx.event.Registration.fireEvent(I,s,qx.event.type.Data,[I.value]);
}}else{qx.event.Registration.fireEvent(I,s,qx.event.type.Data,[I.checked]);
}},_onProperty:qx.core.Variant.select(k,{"mshtml":function(e){var F=e.target||e.srcElement;
var G=e.propertyName;

if(G===f&&(F.type===m||F.tagName.toLowerCase()===n)){if(!F.__inValueSet){qx.event.Registration.fireEvent(F,r,qx.event.type.Data,[F.value]);
}}else if(G===c){if(F.type===q){qx.event.Registration.fireEvent(F,s,qx.event.type.Data,[F.checked]);
}else if(F.checked){qx.event.Registration.fireEvent(F,s,qx.event.type.Data,[F.value]);
}}},"default":function(){}})},defer:function(M){qx.event.Registration.addHandler(M);
}});
})();
(function(){var V="",U="select",T="soft",S="off",R="qx.client",Q="wrap",P="text",O="mshtml",N="number",M="checkbox",F="select-one",L="input",I="option",E="value",D="radio",H="qx.bom.Input",G="nowrap",J="textarea",C="auto",K="normal";
qx.Class.define(H,{statics:{__lg:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(m,n,o){{};
var n=n?qx.lang.Object.clone(n):{};
var p;

if(m===J||m===U){p=m;
}else{p=L;
n.type=m;
}return qx.bom.Element.create(p,n,o);
},setValue:function(u,v){var z=u.nodeName.toLowerCase();
var A=u.type;
var Array=qx.lang.Array;

if(typeof v===N){v+=V;
}
if((A===M||A===D)){if(Array.isArray(v)){u.checked=Array.contains(v,u.value);
}else{u.checked=u.value==v;
}}else if(z===U){var w=Array.isArray(v);
var B=u.options;
var x,y;

for(var i=0,l=B.length;i<l;i++){x=B[i];
y=x.getAttribute(E);

if(y==null){y=x.text;
}x.selected=w?Array.contains(v,y):v==y;
}
if(w&&v.length==0){u.selectedIndex=-1;
}}else if(A===P&&qx.core.Variant.isSet(R,O)){u.__lh=true;
u.value=v;
u.__lh=null;
}else{u.value=v;
}},getValue:function(a){var g=a.nodeName.toLowerCase();

if(g===I){return (a.attributes.value||{}).specified?a.value:a.text;
}
if(g===U){var b=a.selectedIndex;
if(b<0){return null;
}var h=[];
var k=a.options;
var j=a.type==F;
var f=qx.bom.Input;
var e;
for(var i=j?b:0,d=j?b+1:k.length;i<d;i++){var c=k[i];

if(c.selected){e=f.getValue(c);
if(j){return e;
}h.push(e);
}}return h;
}else{return (a.value||V).replace(/\r/g,V);
}},setWrap:qx.core.Variant.select(R,{"mshtml":function(W,X){W.wrap=X?T:S;
},"gecko":function(q,r){var t=r?T:S;
var s=r?V:C;
q.setAttribute(Q,t);
q.style.overflow=s;
},"default":function(Y,ba){Y.style.whiteSpace=ba?K:G;
}})}});
})();
(function(){var l="auto",k="string",j="number",i="*",h="qx.ui.core.ColumnData";
qx.Class.define(h,{extend:qx.ui.core.LayoutItem,construct:function(){arguments.callee.base.call(this);
this.setColumnWidth(l);
},members:{__li:null,renderLayout:function(a,top,b,c){this.__li=b;
},getComputedWidth:function(){return this.__li;
},setColumnWidth:function(d){var e=null;
var f=null;

if(typeof d==j){this.setWidth(d);
}else if(typeof d==k){if(d==l){e=1;
}else{var g=d.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(g){if(g[1]==i){e=parseFloat(d);
}else{f=d;
}}}}this.setLayoutProperties({flex:e,width:f});
}},settings:{"qx.tableResizeDebug":false}});
})();
(function(){var d="qx.ui.table.columnmodel.resizebehavior.Abstract",c="abstract";
qx.Class.define(d,{type:c,extend:qx.core.Object,members:{_setNumColumns:function(a){throw new Error("_setNumColumns is abstract");
},onAppear:function(h,event,i){throw new Error("onAppear is abstract");
},onTableWidthChanged:function(g,event){throw new Error("onTableWidthChanged is abstract");
},onVerticalScrollBarChanged:function(b,event){throw new Error("onVerticalScrollBarChanged is abstract");
},onColumnWidthChanged:function(e,event){throw new Error("onColumnWidthChanged is abstract");
},onVisibilityChanged:function(f,event){throw new Error("onVisibilityChanged is abstract");
},_getAvailableWidth:function(j){var q=j.getTable();
var k=q._getPaneScrollerArr();
var p=k[0].getLayoutParent().getBounds().width;
var l=k[k.length-1];

if(l.getVerticalScrollBarVisible()){var n=l.getTopRightWidget();
var m=n&&n.getBounds()?n.getBounds().width:0;
var o=l.getVerticalScrollBarWidth();
p-=Math.max(m,o);
}return p;
}}});
})();
(function(){var D="Function",C="Boolean",B="minWidth",A="width",z="__lj",y="qx.ui.table.columnmodel.resizebehavior.Default",x="__lk",w="maxWidth";
qx.Class.define(y,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){arguments.callee.base.call(this);
this.__lj=[];
this.__lk=new qx.ui.layout.HBox();
this.__lk.connectToWidget(this);
},properties:{newResizeBehaviorColumnData:{check:D,init:function(H){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:C,init:false}},members:{__lk:null,__ll:null,__lj:null,__lm:false,setWidth:function(c,d){if(c>=this.__lj.length){throw new Error("Column number out of range");
}this.__lj[c].setColumnWidth(d);
},setMinWidth:function(g,h){if(g>=this.__lj.length){throw new Error("Column number out of range");
}this.__lj[g].setMinWidth(h);
},setMaxWidth:function(a,b){if(a>=this.__lj.length){throw new Error("Column number out of range");
}this.__lj[a].setMaxWidth(b);
},set:function(E,F){for(var G in F){switch(G){case A:this.setWidth(E,F[G]);
break;
case B:this.setMinWidth(E,F[G]);
break;
case w:this.setMaxWidth(E,F[G]);
break;
default:throw new Error("Unknown property: "+G);
}}},onAppear:function(e,event,f){if(f===true||!this.__lm||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth(e,event);
this.__lm=true;
}},onTableWidthChanged:function(j,event){this._computeColumnsFlexWidth(j,event);
},onVerticalScrollBarChanged:function(k,event){this._computeColumnsFlexWidth(k,event);
},onColumnWidthChanged:function(m,event){this._extendNextColumn(m,event);
},onVisibilityChanged:function(n,event){var o=event.getData();
if(o.visible){this._computeColumnsFlexWidth(n,event);
return;
}this._extendLastColumn(n,event);
},_setNumColumns:function(I){var J=this.__lj;
if(I<=J.length){J.splice(I,J.length);
return;
}for(var i=J.length;i<I;i++){J[i]=this.getNewResizeBehaviorColumnData()();
J[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__ll;
},_computeColumnsFlexWidth:function(p,event){{};
var r=p.getVisibleColumns();
var u=r.length;
var q=this.__lj;
var i,l;
var v=[];

for(i=0;i<u;i++){v.push(q[r[i]]);
}this.__ll=v;
this.__lk.invalidateChildrenCache();
var s=this._getAvailableWidth(p);
this.__lk.renderLayout(s,100);
for(i=0,l=v.length;i<l;i++){var t=v[i].getComputedWidth();
p.setColumnWidth(r[i],t);
{};
}},_extendNextColumn:function(K,event){var R=event.getData();
var M=K.getVisibleColumns();
var O=this._getAvailableWidth(K);
var L=M.length;
if(R.newWidth>R.oldWidth){return ;
}var i;
var N;
var Q=0;

for(i=0;i<L;i++){Q+=K.getColumnWidth(M[i]);
}if(Q<O){for(i=0;i<M.length;i++){if(M[i]==R.col){N=M[i+1];
break;
}}
if(N){var P=(O-(Q-K.getColumnWidth(N)));
K.setColumnWidth(N,P);
}}},_extendLastColumn:function(S,event){var ba=event.getData();
if(ba.visible){return;
}var U=S.getVisibleColumns();
if(U.length==0){return;
}var V=this._getAvailableWidth(S);
var T=U.length;
var i;
var X;
var Y=0;

for(i=0;i<T;i++){Y+=S.getColumnWidth(U[i]);
}if(Y<V){X=U[U.length-1];
var W=(V-(Y-S.getColumnWidth(X)));
S.setColumnWidth(X,W);
}}},destruct:function(){this._disposeFields(z);
this._disposeObjects(x);
}});
})();
(function(){var dt="Function",ds="Boolean",dr="column-button",dq="qx.event.type.Data",dp="statusbar",dn="qx.ui.table.pane.CellEvent",dm="PageUp",dl="changeLocale",dk="changeSelection",dj="qx.dynlocale",eD="Enter",eC="on",eB="_applyTableColumnModel",eA="_applyStatusBarVisible",ez="blur",ey="qx.ui.table.Table",ex="columnVisibilityMenuCreateEnd",ew="changeVisible",ev="verticalScrollBarChanged",eu="_applyMetaColumnCounts",dA="one of one row",dB="focus",dy="changeDataRowRenderer",dz="changeHeaderCellHeight",dw="Escape",dx="A",du="changeSelectionModel",dv="Left",dI="_tableModel",dJ="Down",dW="Integer",dS="__lo",ef="_applyHeaderCellHeight",ea="__ln",eq="visibilityChanged",ek="qx.ui.table.ITableModel",dN="orderChanged",et="_applySelectionModel",es="_columnVisibilityMenu",er="menu",dM="_applyAdditionalStatusBarText",dP="_applyFocusCellOnMouseMove",dR="table",dU="_applyColumnVisibilityButtonVisible",dX="changeTableModel",eb="qx.event.type.Event",eh="End",em="Object",dC="_applyShowCellFocusIndicator",dD="resize",dO="changeScrollY",ee="_applyTableModel",ed="menu-button",ec="_applyKeepFirstVisibleRowComplete",ej="qx.ui.table.columnmodel.Basic",ei="Home",dY="_applyRowHeight",eg="F2",dg="Up",el="tableWidthChanged",dE="columnVisibilityMenuCreateStart",dF="%1 rows",dT="qx.ui.table.selection.Model",dh="one row",di="PageDown",dL="%1 of %2 rows",dG="changeTableColumnModel",dH="keypress",dK="changeRowHeight",dV="Number",eo="widthChanged",en="qx.ui.table.IRowRenderer",dQ="Right",ep="Space";
qx.Class.define(ey,{extend:qx.ui.core.Widget,construct:function(d,e){arguments.callee.base.call(this);
if(!e){e={};
}
if(e.selectionManager){this.setNewSelectionManager(e.selectionManager);
}
if(e.selectionModel){this.setNewSelectionModel(e.selectionModel);
}
if(e.tableColumnModel){this.setNewTableColumnModel(e.tableColumnModel);
}
if(e.tablePane){this.setNewTablePane(e.tablePane);
}
if(e.tablePaneHeader){this.setNewTablePaneHeader(e.tablePaneHeader);
}
if(e.tablePaneScroller){this.setNewTablePaneScroller(e.tablePaneScroller);
}
if(e.tablePaneModel){this.setNewTablePaneModel(e.tablePaneModel);
}
if(e.columnMenu){this.setNewColumnMenu(e.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__ln=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__ln,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__lo=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableColumnModel(this.getNewTableColumnModel()(this));
if(d!=null){this.setTableModel(d);
}this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(dH,this._onKeyPress);
this.addListener(dB,this._onFocusChanged);
this.addListener(ez,this._onFocusChanged);
var f=new qx.ui.core.Widget().set({height:0});
this._add(f);
f.addListener(dD,this._onResize,this);
this.__lp=null;
this.__lq=null;
if(qx.core.Variant.isSet(dj,eC)){qx.locale.Manager.getInstance().addListener(dl,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":dq,"columnVisibilityMenuCreateEnd":dq,"tableWidthChanged":eb,"verticalScrollBarChanged":dq,"cellClick":dn,"cellDblclick":dn,"cellContextmenu":dn,"dataEdited":dq},statics:{__lr:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:dR},focusable:{refine:true,init:true},selectionModel:{check:dT,apply:et,event:du},tableModel:{check:ek,apply:ee,event:dX,nullable:true},tableColumnModel:{check:ej,apply:eB,event:dG},rowHeight:{check:dV,init:20,apply:dY,event:dK},forceLineHeight:{check:ds,init:true},headerCellHeight:{check:dW,init:16,apply:ef,event:dz},statusBarVisible:{check:ds,init:true,apply:eA},additionalStatusBarText:{nullable:true,init:null,apply:dM},columnVisibilityButtonVisible:{check:ds,init:true,apply:dU},metaColumnCounts:{check:em,apply:eu},focusCellOnMouseMove:{check:ds,init:false,apply:dP},showCellFocusIndicator:{check:ds,init:true,apply:dC},keepFirstVisibleRowComplete:{check:ds,init:true,apply:ec},alwaysUpdateCells:{check:ds,init:false},dataRowRenderer:{check:en,init:null,nullable:true,event:dy},modalCellEditorPreOpenFunction:{check:dt,init:null,nullable:true},newColumnMenu:{check:dt,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:dt,init:function(bA){return new qx.ui.table.selection.Manager(bA);
}},newSelectionModel:{check:dt,init:function(J){return new qx.ui.table.selection.Model(J);
}},newTableColumnModel:{check:dt,init:function(bJ){return new qx.ui.table.columnmodel.Basic(bJ);
}},newTablePane:{check:dt,init:function(cq){return new qx.ui.table.pane.Pane(cq);
}},newTablePaneHeader:{check:dt,init:function(cD){return new qx.ui.table.pane.Header(cD);
}},newTablePaneScroller:{check:dt,init:function(E){return new qx.ui.table.pane.Scroller(E);
}},newTablePaneModel:{check:dt,init:function(Q){return new qx.ui.table.pane.Model(Q);
}}},members:{__lp:null,__lq:null,__ln:null,__lo:null,__ls:null,__lt:null,__lu:null,__lv:null,_createChildControlImpl:function(bt){var bu;

switch(bt){case dp:bu=new qx.ui.basic.Label();
bu.set({allowGrowX:true});
this._add(bu);
break;
case dr:bu=this.getNewColumnMenu()();
bu.set({focusable:false});
bu.setMenu(bu.factory(er,{table:this}));
break;
}return bu||arguments.callee.base.call(this,bt);
},_applySelectionModel:function(cE,cF){this.__lo.setSelectionModel(cE);

if(cF!=null){cF.removeListener(dk,this._onSelectionChanged,this);
}cE.addListener(dk,this._onSelectionChanged,this);
},_applyRowHeight:function(B,C){if(!this.getTableModel()){return;
}var D=this._getPaneScrollerArr();

for(var i=0;i<D.length;i++){D[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(eN,eO){var eP=this._getPaneScrollerArr();

for(var i=0;i<eP.length;i++){eP[i].getHeader().setHeight(eN);
}},_applyTableModel:function(cw,cx){this.getTableColumnModel().init(cw.getColumnCount(),this);

if(cx!=null){cx.removeListener(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED,this._onTableModelMetaDataChanged,this);
cx.removeListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,this._onTableModelDataChanged,this);
}cw.addListener(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED,this._onTableModelMetaDataChanged,this);
cw.addListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._initColumnMenu();
this._updateTableData(0,cw.getRowCount(),0,cw.getColumnCount());
this._onTableModelMetaDataChanged();
},_applyTableColumnModel:function(ck,cl){if(cl!=null){throw new Error("The table column model can only be set once per table.");
}ck.addListener(eq,this._onColVisibilityChanged,this);
ck.addListener(eo,this._onColWidthChanged,this);
ck.addListener(dN,this._onColOrderChanged,this);
var cn=this.getTableModel();
if(cn){ck.init(cn.getColumnCount(),this);
}var cm=this._getPaneScrollerArr();

for(var i=0;i<cm.length;i++){var co=cm[i];
var cp=co.getTablePaneModel();
cp.setTableColumnModel(ck);
}},_applyStatusBarVisible:function(u,v){if(u){this._showChildControl(dp);
}else{this._excludeChildControl(dp);
}
if(u){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(bK,bL){this.__ls=bK;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(w,y){if(w){this._showChildControl(dr);
}else{this._excludeChildControl(dr);
}},_applyMetaColumnCounts:function(Y,ba){var bh=Y;
var bb=this._getPaneScrollerArr();
var bf={};

if(Y>ba){var bj=qx.event.Registration.getManager(bb[0]);

for(var bk in qx.ui.table.Table.__lr){bf[bk]={};
bf[bk].capture=bj.getListeners(bb[0],bk,true);
bf[bk].bubble=bj.getListeners(bb[0],bk,false);
}}this._cleanUpMetaColumns(bh.length);
var bg=0;

for(var i=0;i<bb.length;i++){var bl=bb[i];
var bi=bl.getTablePaneModel();
bi.setFirstColumnX(bg);
bi.setMaxColumnCount(bh[i]);
bg+=bh[i];
}if(bh.length>bb.length){var be=this.getTableColumnModel();

for(var i=bb.length;i<bh.length;i++){var bi=this.getNewTablePaneModel()(be);
bi.setFirstColumnX(bg);
bi.setMaxColumnCount(bh[i]);
bg+=bh[i];
var bl=this.getNewTablePaneScroller()(this);
bl.setTablePaneModel(bi);
bl.addListener(dO,this._onScrollY,this);
for(bk in qx.ui.table.Table.__lr){if(!bf[bk]){break;
}
if(bf[bk].capture&&bf[bk].capture.length>0){var bc=bf[bk].capture;

for(var i=0;i<bc.length;i++){var bd=bc[i].context;

if(!bd){bd=this;
}else if(bd==bb[0]){bd=bl;
}bl.addListener(bk,bc[i].handler,bd,true);
}}
if(bf[bk].bubble&&bf[bk].bubble.length>0){var bn=bf[bk].bubble;

for(var i=0;i<bn.length;i++){var bd=bn[i].context;

if(!bd){bd=this;
}else if(bd==bb[0]){bd=bl;
}bl.addListener(bk,bn[i].handler,bd,false);
}}}var bm=(i==bh.length-1)?1:0;
this.__ln.add(bl,{flex:bm});
bb=this._getPaneScrollerArr();
}}for(var i=0;i<bb.length;i++){var bl=bb[i];
var bo=(i==(bb.length-1));
bl.getHeader().setHeight(this.getHeaderCellHeight());
bl.setTopRightWidget(bo?this.getChildControl(dr):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(dr);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(N,O){var P=this._getPaneScrollerArr();

for(var i=0;i<P.length;i++){P[i].setFocusCellOnMouseMove(N);
}},_applyShowCellFocusIndicator:function(K,L){var M=this._getPaneScrollerArr();

for(var i=0;i<M.length;i++){M[i].setShowCellFocusIndicator(K);
}},_applyKeepFirstVisibleRowComplete:function(bM,bN){var bO=this._getPaneScrollerArr();

for(var i=0;i<bO.length;i++){bO[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__lo;
},_getPaneScrollerArr:function(){return this.__ln.getChildren();
},getPaneScroller:function(a){return this._getPaneScrollerArr()[a];
},_cleanUpMetaColumns:function(bv){var bw=this._getPaneScrollerArr();

if(bw!=null){for(var i=bw.length-1;i>=bv;i--){bw[i].destroy();
}}},_onChangeLocale:function(eJ){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(eK){var eL=this._getPaneScrollerArr();

for(var i=0;i<eL.length;i++){eL[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(m){var n=this._getPaneScrollerArr();

for(var i=0;i<n.length;i++){n[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(cy){var cz=cy.getData();
this._updateTableData(cz.firstRow,cz.lastRow,cz.firstColumn,cz.lastColumn,cz.removeStart,cz.removeCount);
},_updateTableData:function(bQ,bR,bS,bT,bU,bV){var bW=this._getPaneScrollerArr();
if(bV){this.getSelectionModel().removeSelectionInterval(bU,bU+bV);
}
for(var i=0;i<bW.length;i++){bW[i].onTableModelDataChanged(bQ,bR,bS,bT);
}var bX=this.getTableModel().getRowCount();

if(bX!=this.__lt){this.__lt=bX;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(o){if(!this.__lu){this.__lu=true;
var p=this._getPaneScrollerArr();

for(var i=0;i<p.length;i++){p[i].setScrollY(o.getData());
}this.__lu=false;
}},_onKeyPress:function(cG){if(!this.getEnabled()){return;
}var cN=this.__lq;
var cK=true;
var cO=cG.getKeyIdentifier();

if(this.isEditing()){if(cG.getModifiers()==0){switch(cO){case eD:this.stopEditing();
var cN=this.__lq;
this.moveFocusedCell(0,1);

if(this.__lq!=cN){cK=this.startEditing();
}break;
case dw:this.cancelEditing();
this.focus();
break;
default:cK=false;
break;
}}return;
}else{if(cG.isCtrlPressed()){cK=true;

switch(cO){case dx:var cL=this.getTableModel().getRowCount();

if(cL>0){this.getSelectionModel().setSelectionInterval(0,cL-1);
}break;
default:cK=false;
break;
}}else{switch(cO){case ep:this.__lo.handleSelectKeyDown(this.__lq,cG);
break;
case eg:case eD:cK=this.startEditing();
break;
case ei:this.setFocusedCell(this.__lp,0,true);
break;
case eh:var cL=this.getTableModel().getRowCount();
this.setFocusedCell(this.__lp,cL-1,true);
break;
case dv:this.moveFocusedCell(-1,0);
break;
case dQ:this.moveFocusedCell(1,0);
break;
case dg:this.moveFocusedCell(0,-1);
break;
case dJ:this.moveFocusedCell(0,1);
break;
case dm:case di:var cJ=this.getPaneScroller(0);
var cM=cJ.getTablePane();
var cL=cM.getVisibleRowCount()-1;
var cI=this.getRowHeight();
var cH=(cO==dm)?-1:1;
cJ.setScrollY(cJ.getScrollY()+cH*cL*cI);
this.moveFocusedCell(0,cH*cL);
break;
default:cK=false;
}}}
if(cN!=this.__lq){this.__lo.handleMoveKeyDown(this.__lq,cG);
}
if(cK){cG.preventDefault();
cG.stopPropagation();
}},_onFocusChanged:function(cu){var cv=this._getPaneScrollerArr();

for(var i=0;i<cv.length;i++){cv[i].onFocusChanged();
}},_onColVisibilityChanged:function(cA){var cB=this._getPaneScrollerArr();

for(var i=0;i<cB.length;i++){cB[i].onColVisibilityChanged();
}var cC=cA.getData();

if(this.__lv!=null&&cC.col!=null&&cC.visible!=null){this.__lv[cC.col].setVisible(cC.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(bx){var by=this._getPaneScrollerArr();

for(var i=0;i<by.length;i++){var bz=bx.getData();
by[i].setColumnWidth(bz.col,bz.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(z){var A=this._getPaneScrollerArr();

for(var i=0;i<A.length;i++){A[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(cP){var cQ=this._getMetaColumnAtPageX(cP);
return (cQ!=-1)?this.getPaneScroller(cQ):null;
},setFocusedCell:function(S,T,U){if(!this.isEditing()&&(S!=this.__lp||T!=this.__lq)){this.__lp=S;
this.__lq=T;
var V=this._getPaneScrollerArr();

for(var i=0;i<V.length;i++){V[i].setFocusedCell(S,T);
}
if(S!==null&&U){this.scrollCellVisible(S,T);
}}},clearSelection:function(){this.getSelectionModel().clearSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__lp;
},getFocusedRow:function(){return this.__lq;
},highlightFocusedRow:function(eM){this.getDataRowRenderer().setHighlightFocusRow(eM);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var bP=this._getPaneScrollerArr();

for(var i=0;i<bP.length;i++){bP[i].onFocusChanged();
}},moveFocusedCell:function(cR,cS){var cW=this.__lp;
var cX=this.__lq;

if(cW===null||cX===null){return;
}
if(cR!=0){var cV=this.getTableColumnModel();
var x=cV.getVisibleX(cW);
var cU=cV.getVisibleColumnCount();
x=qx.lang.Number.limit(x+cR,0,cU-1);
cW=cV.getVisibleColumnAtX(x);
}
if(cS!=0){var cT=this.getTableModel();
cX=qx.lang.Number.limit(cX+cS,0,cT.getRowCount()-1);
}this.setFocusedCell(cW,cX,true);
},scrollCellVisible:function(bp,bq){var br=this.getTableColumnModel();
var x=br.getVisibleX(bp);
var bs=this._getMetaColumnAtColumnX(x);

if(bs!=-1){this.getPaneScroller(bs).scrollCellVisible(bp,bq);
}},isEditing:function(){if(this.__lp!=null){var x=this.getTableColumnModel().getVisibleX(this.__lp);
var eI=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(eI).isEditing();
}return false;
},startEditing:function(){if(this.__lp!=null){var x=this.getTableColumnModel().getVisibleX(this.__lp);
var ct=this._getMetaColumnAtColumnX(x);
var cs=this.getPaneScroller(ct).startEditing();
return cs;
}return false;
},stopEditing:function(){if(this.__lp!=null){var x=this.getTableColumnModel().getVisibleX(this.__lp);
var R=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(R).stopEditing();
}},cancelEditing:function(){if(this.__lp!=null){var x=this.getTableColumnModel().getVisibleX(this.__lp);
var cr=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(cr).cancelEditing();
}},updateContent:function(){var W=this._getPaneScrollerArr();

for(var i=0;i<W.length;i++){W[i].getTablePane().updateContent();
}},_getMetaColumnAtPageX:function(ch){var ci=this._getPaneScrollerArr();

for(var i=0;i<ci.length;i++){var cj=ci[i].getContainerLocation();

if(ch>=cj.left&&ch<=cj.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(F){var H=this.getMetaColumnCounts();
var I=0;

for(var i=0;i<H.length;i++){var G=H[i];
I+=G;

if(G==-1||F<I){return i;
}}return -1;
},_updateStatusBar:function(){var g=this.getTableModel();

if(this.getStatusBarVisible()&&g){var h=this.getSelectionModel().getSelectedCount();
var k=g.getRowCount();
var j;

if(k>0){if(h==0){j=this.trn(dh,dF,k,k);
}else{j=this.trn(dA,dL,k,h,k);
}}
if(this.__ls){if(j){j+=this.__ls;
}else{j=this.__ls;
}}
if(j){this.getChildControl(dp).setContent(j);
}}},_updateScrollerWidths:function(){var cd=this._getPaneScrollerArr();

for(var i=0;i<cd.length;i++){var cf=(i==(cd.length-1));
var cg=cd[i].getTablePaneModel().getTotalWidth();
cd[i].setWidth(cg);
var ce=cf?1:0;
cd[i].setLayoutProperties({flex:ce});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var bE=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var bH=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var bB=this._getPaneScrollerArr();
var bD=false;
var bG=false;

for(var i=0;i<bB.length;i++){var bI=(i==(bB.length-1));
var bC=bB[i].getNeededScrollBars(bD,!bI);

if(bC&bE){bD=true;
}
if(bI&&(bC&bH)){bG=true;
}}for(var i=0;i<bB.length;i++){var bI=(i==(bB.length-1));
var bF;
bB[i].setHorizontalScrollBarVisible(bD);
if(bI){bF=bB[i].getVerticalScrollBarVisible();
}bB[i].setVerticalScrollBarVisible(bI&&bG);
if(bI&&bG!=bF){this.fireDataEvent(ev,bG);
}}},_initColumnMenu:function(){var db=this.getTableModel();
var dc=this.getTableColumnModel();
var dd=this.getChildControl(dr);
dd.empty();
var da=dd.getMenu();
var de={table:this,menu:da,columnButton:dd};
this.fireDataEvent(dE,de);
this.__lv={};

for(var df=0,l=db.getColumnCount();df<l;df++){var cY=dd.factory(ed,{text:db.getColumnName(df),column:df,bVisible:dc.isColumnVisible(df)});
qx.core.Assert.assertInterface(cY,qx.ui.table.IColumnMenuItem);
cY.addListener(ew,this._createColumnVisibilityCheckBoxHandler(df),this);
this.__lv[df]=cY;
}var de={table:this,menu:da,columnButton:dd};
this.fireDataEvent(ex,de);
},_createColumnVisibilityCheckBoxHandler:function(X){return function(s){var t=this.getTableColumnModel();
t.setColumnVisible(X,s.getData());
};
},setColumnWidth:function(b,c){this.getTableColumnModel().setColumnWidth(b,c);
},_onResize:function(){this.fireEvent(el);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(bY,ca,self,cb){if(arguments.callee.self.__lr[bY]){for(var i=0,cc=this._getPaneScrollerArr();i<cc.length;i++){cc[i].addListener.apply(cc[i],arguments);
}}else{return arguments.callee.base.call(this,bY,ca,self,cb);
}},removeListener:function(eE,eF,self,eG){if(arguments.callee.self.__lr[eE]){for(var i=0,eH=this._getPaneScrollerArr();i<eH.length;i++){eH[i].removeListener.apply(eH[i],arguments);
}}else{arguments.callee.base.call(this,eE,eF,self,eG);
}},destroy:function(){this.getChildControl(dr).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(dj,eC)){qx.locale.Manager.getInstance().removeListener(dl,this._onChangeLocale,this);
}var r=this.getSelectionModel();

if(r){r.dispose();
}var q=this.getDataRowRenderer();

if(q){q.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(dS,es,dI,ea);
}});
})();
(function(){var f="qx.ui.table.IRowRenderer";
qx.Interface.define(f,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(e){},createRowStyle:function(a){},getRowClass:function(d){}}});
})();
(function(){var q="",p="table-row-background-even",o="Boolean",n="default",m="__lw",l="height:",k="__ly",j="table-row",i="table-row-background-focused",h=';color:',D="table-row-background-odd",C="1px solid ",B="table-row-line",A="table-row-background-selected",z="background-color:",y=';border-bottom: 1px solid ',x="table-row-selected",w="table-row-background-focused-selected",v="'",u="px;",s="__lx",t="qx.ui.table.rowrenderer.Default",r=";";
qx.Class.define(t,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__lw=q;
this.__lw={};
this.__lx={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(n));
var f=qx.theme.manager.Color.getInstance();
this.__lx.bgcolFocusedSelected=f.resolve(w);
this.__lx.bgcolFocused=f.resolve(i);
this.__lx.bgcolSelected=f.resolve(A);
this.__lx.bgcolEven=f.resolve(p);
this.__lx.bgcolOdd=f.resolve(D);
this.__lx.colSelected=f.resolve(x);
this.__lx.colNormal=f.resolve(j);
this.__lx.horLine=f.resolve(B);
},properties:{highlightFocusRow:{check:o,init:true}},members:{__lx:null,__ly:null,__lw:null,_insetY:1,_renderFont:function(a){if(a){this.__ly=a.getStyles();
this.__lw=qx.bom.element.Style.compile(this.__ly);
this.__lw=this.__lw.replace(/"/g,v);
}else{this.__lw=q;
this.__ly=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(b,c){var e=this.__ly;
var d=c.style;
qx.bom.element.Style.setStyles(c,e);

if(b.focusedRow&&this.getHighlightFocusRow()){d.backgroundColor=b.selected?this.__lx.bgcolFocusedSelected:this.__lx.bgcolFocused;
}else{if(b.selected){d.backgroundColor=this.__lx.bgcolSelected;
}else{d.backgroundColor=(b.row%2==0)?this.__lx.bgcolEven:this.__lx.bgcolOdd;
}}d.color=b.selected?this.__lx.colSelected:this.__lx.colNormal;
d.borderBottom=C+this.__lx.horLine;
},getRowHeightStyle:function(g){if(qx.bom.client.Feature.CONTENT_BOX){g-=this._insetY;
}return l+g+u;
},createRowStyle:function(F){var G=[];
G.push(r);
G.push(this.__lw);
G.push(z);

if(F.focusedRow&&this.getHighlightFocusRow()){G.push(F.selected?this.__lx.bgcolFocusedSelected:this.__lx.bgcolFocused);
}else{if(F.selected){G.push(this.__lx.bgcolSelected);
}else{G.push((F.row%2==0)?this.__lx.bgcolEven:this.__lx.bgcolOdd);
}}G.push(h);
G.push(F.selected?this.__lx.colSelected:this.__lx.colNormal);
G.push(y,this.__lx.horLine);
return G.join(q);
},getRowClass:function(E){return q;
}},destruct:function(){this._disposeFields(s,k,m);
}});
})();
(function(){var n="pressed",m="hovered",l="changeVisibility",k="qx.ui.menu.Menu",j="Enter",i="changeMenu",h="qx.ui.form.MenuButton",g="abandoned",f="_applyMenu";
qx.Class.define(h,{extend:qx.ui.form.Button,construct:function(o,p,q){arguments.callee.base.call(this,o,p);
if(q!=null){this.setMenu(q);
}},properties:{menu:{check:k,nullable:true,apply:f,event:i}},members:{_applyMenu:function(s,t){if(t){t.removeListener(l,this._onMenuChange,this);
t.resetOpener();
}
if(s){s.addListener(l,this._onMenuChange,this);
s.setOpener(this);
}},open:function(b){var c=this.getMenu();

if(c){qx.ui.menu.Manager.getInstance().hideAll();
c.open();
if(b){var d=c.getChildren()[0];

if(d){c.setSelectedButton(d);
}}}},_onMenuChange:function(e){var a=this.getMenu();

if(a.isVisible()){this.addState(n);
}else{this.removeState(n);
}},_onMouseDown:function(e){var u=this.getMenu();

if(u){if(!u.isVisible()){this.open();
}else{u.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){e.stopPropagation();
},_onMouseOver:function(e){this.addState(m);
},_onMouseOut:function(e){this.removeState(m);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case j:this.removeState(g);
this.addState(n);
var r=this.getMenu();

if(r){if(!r.isVisible()){this.open();
}else{r.exclude();
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
},members:{__lz:null,factory:function(j,k){switch(j){case a:var m=new qx.ui.menu.Menu();
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
(function(){var B="mouseup",A="keypress",z="mousedown",y="interval",x="keydown",w="keyup",v="Enter",u="__lA",t="__lC",s="Up",m="Escape",r="__lB",p="blur",l="qx.ui.menu.Manager",k="Left",o="Down",n="Right",q="singleton",j="Space";
qx.Class.define(l,{type:q,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lA=[];
var br=qx.core.Init.getApplication().getRoot();
var bq=document.body;
var bs=qx.event.Registration;
br.addListener(z,this._onMouseDown,this,true);
br.addListener(B,this._onMouseUp,this);
bs.addListener(window.document.documentElement,B,this._onMouseUp,this);
bs.addListener(bq,x,this._onKeyUpDown,this,true);
bs.addListener(bq,w,this._onKeyUpDown,this,true);
bs.addListener(bq,A,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,p,this.hideAll,this);
this.__lB=new qx.event.Timer;
this.__lB.addListener(y,this._onOpenInterval,this);
this.__lC=new qx.event.Timer;
this.__lC.addListener(y,this._onCloseInterval,this);
},members:{__lD:null,__lE:null,__lB:null,__lC:null,__lA:null,_getChild:function(V,W,X,Y){var ba=V.getChildren();
var length=ba.length;
var bb;

for(var i=W;i<length&&i>=0;i+=X){bb=ba[i];

if(bb.isEnabled()&&!bb.isAnonymous()){return bb;
}}
if(Y){i=i==length?0:length-1;

for(;i!=W;i+=X){bb=ba[i];

if(bb.isEnabled()&&!bb.isAnonymous()){return bb;
}}}return null;
},_isInMenu:function(bG){while(bG){if(bG instanceof qx.ui.menu.Menu){return true;
}bG=bG.getLayoutParent();
}return false;
},_getMenuButton:function(S){while(S){if(S instanceof qx.ui.menu.AbstractButton){return S;
}S=S.getLayoutParent();
}return null;
},add:function(bz){{};
var bA=this.__lA;
bA.push(bz);
bz.setZIndex(1e6+bA.length);
},remove:function(T){{};
var U=this.__lA;

if(U){qx.lang.Array.remove(U,T);
}},hideAll:function(){var bF=this.__lA;

if(bF){for(var i=bF.length-1;i>=0;i--){bF[i].exclude();
}}},getActiveMenu:function(){var bp=this.__lA;
return bp.length>0?bp[bp.length-1]:null;
},scheduleOpen:function(a){this.cancelClose(a);
if(a.isVisible()){if(this.__lD){this.cancelOpen(this.__lD);
}}else if(this.__lD!=a){this.__lD=a;
this.__lB.restartWith(a.getOpenInterval());
}},scheduleClose:function(d){this.cancelOpen(d);
if(!d.isVisible()){if(this.__lE){this.cancelClose(this.__lE);
}}else if(this.__lE!=d){this.__lE=d;
this.__lC.restartWith(d.getCloseInterval());
}},cancelOpen:function(bB){if(this.__lD==bB){this.__lB.stop();
this.__lD=null;
}},cancelClose:function(bo){if(this.__lE==bo){this.__lC.stop();
this.__lE=null;
}},_onOpenInterval:function(e){this.__lB.stop();
this.__lD.open();
this.__lD=null;
},_onCloseInterval:function(e){this.__lC.stop();
this.__lE.exclude();
this.__lE=null;
},_onMouseDown:function(e){var bc=e.getTarget();
if(bc.getMenu&&bc.getMenu()&&bc.getMenu().isVisible()){return;
}if(this.__lA.length>0&&!this._isInMenu(bc)){this.hideAll();
}},_onMouseUp:function(e){var R=e.getTarget();
var Q;

if(R instanceof qx.ui.core.Widget){Q=R;
}else{Q=qx.ui.core.Widget.getWidgetByElement(R);
}if(!(Q instanceof qx.ui.menu.Menu)){Q=this._getMenuButton(Q);

if(Q!=null&&Q instanceof qx.ui.menu.AbstractButton&&!Q.isEnabled()){return;
}this.hideAll();
}},__lF:{"Enter":1,"Space":1},__lG:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var b=this.getActiveMenu();

if(!b){return;
}var c=e.getKeyIdentifier();

if(this.__lG[c]||(this.__lF[c]&&b.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var G=this.getActiveMenu();

if(!G){return;
}var H=e.getKeyIdentifier();
var J=this.__lG[H];
var I=this.__lF[H];

if(J){switch(H){case s:this._onKeyPressUp(G);
break;
case o:this._onKeyPressDown(G);
break;
case k:this._onKeyPressLeft(G);
break;
case n:this._onKeyPressRight(G);
break;
case m:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(I){var K=G.getSelectedButton();

if(K){switch(H){case v:this._onKeyPressEnter(G,K,e);
break;
case j:this._onKeyPressSpace(G,K,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(L){var M=L.getSelectedButton();
var N=L.getChildren();
var P=M?L.indexOf(M)-1:N.length-1;
var O=this._getChild(L,P,-1,true);
if(O){L.setSelectedButton(O);
}else{L.resetSelectedButton();
}},_onKeyPressDown:function(C){var D=C.getSelectedButton();
var F=D?C.indexOf(D)+1:0;
var E=this._getChild(C,F,1,true);
if(E){C.setSelectedButton(E);
}else{C.resetSelectedButton();
}},_onKeyPressLeft:function(bt){var bw=bt.getOpener();

if(!bw){return;
}if(bw instanceof qx.ui.menu.Button){var by=bw.getLayoutParent();
by.resetOpenedButton();
by.setSelectedButton(bw);
}else if(bw instanceof qx.ui.menubar.Button){var bu=bw.getToolBar().getMenuButtons();
var bv=bu.indexOf(bw);
if(bv===-1){return;
}var bx=bv==0?bu[bu.length-1]:bu[bv-1];

if(bx!=bw){bx.open(true);
}}},_onKeyPressRight:function(bd){var bf=bd.getSelectedButton();
if(bf){var be=bf.getMenu();

if(be){bd.setOpenedButton(bf);
var bk=this._getChild(be,0,1);

if(bk){be.setSelectedButton(bk);
}return;
}}else if(!bd.getOpenedButton()){var bk=this._getChild(bd,0,1);

if(bk){bd.setSelectedButton(bk);

if(bk.getMenu()){bd.setOpenedButton(bk);
}return;
}}var bi=bd.getOpener();
if(bi instanceof qx.ui.menu.Button&&bf){while(bi){bi=bi.getLayoutParent();

if(bi instanceof qx.ui.menu.Menu){bi=bi.getOpener();

if(bi instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bi){return;
}}if(bi instanceof qx.ui.menubar.Button){var bh=bi.getToolBar().getMenuButtons();
var bg=bh.indexOf(bi);
if(bg===-1){return;
}var bj=bh[bg+1];

if(!bj){bj=bh[0];
}
if(bj!=bi){bj.open(true);
}}},_onKeyPressEnter:function(bC,bD,e){if(bD.hasListener(A)){var bE=e.clone();
bE.setBubbles(false);
bE.setTarget(bD);
bD.dispatchEvent(bE);
}this.hideAll();
},_onKeyPressSpace:function(f,g,e){if(g.hasListener(A)){var h=e.clone();
h.setBubbles(false);
h.setTarget(g);
g.dispatchEvent(h);
}}},destruct:function(){var bn=qx.event.Registration;
var bl=document.body;
var bm=qx.core.Init.getApplication().getRoot();
bm.removeListener(z,this._onMouseDown,this,true);
bm.removeListener(B,this._onMouseUp,this);
bn.removeListener(window.document.documentElement,B,this._onMouseUp,this);
bn.removeListener(bl,x,this._onKeyUpDown,this,true);
bn.removeListener(bl,w,this._onKeyUpDown,this,true);
bn.removeListener(bl,A,this._onKeyPress,this,true);
this._disposeObjects(r,t);
this._disposeArray(u);
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
},properties:{appearance:{refine:true,init:f},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:h},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:r,apply:g,init:0,themeable:true},spacingY:{check:r,apply:d,init:0,themeable:true},iconColumnWidth:{check:r,init:0,themeable:true,apply:j},arrowColumnWidth:{check:r,init:0,themeable:true,apply:k},selectedButton:{check:q,nullable:true,apply:a},openedButton:{check:q,nullable:true,apply:l},opener:{check:q,nullable:true},openInterval:{check:r,themeable:true,init:250,apply:m},closeInterval:{check:r,themeable:true,init:250,apply:b}},members:{__lH:null,open:function(){this.placeToWidget(this.getOpener());
this.show();
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getLayout().getColumnSizes();
},_applyIconColumnWidth:function(I,J){this._getLayout().setIconColumnWidth(I);
},_applyArrowColumnWidth:function(A,B){this._getLayout().setArrowColumnWidth(A);
},_applySpacingX:function(s,t){this._getLayout().setColumnSpacing(s);
},_applySpacingY:function(C,D){this._getLayout().setSpacing(C);
},_applyVisibility:function(u,v){arguments.callee.base.call(this,u,v);
var w=qx.ui.menu.Manager.getInstance();

if(u===p){w.add(this);
var opener=this.getOpener();
var x=opener.getLayoutParent();

if(x&&x instanceof qx.ui.menu.Menu){x.setOpenedButton(opener);
}}else if(v===p){w.remove(this);
var opener=this.getOpener();
var x=opener.getLayoutParent();

if(x&&x instanceof qx.ui.menu.Menu&&x.getOpenedButton()==opener){x.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}},_applySelectedButton:function(K,L){if(L){L.removeState(o);
}
if(K){K.addState(o);
}},_applyOpenedButton:function(M,N){if(N){N.getMenu().exclude();
}
if(M){M.getMenu().open();
}},_onMouseOver:function(e){var F=qx.ui.menu.Manager.getInstance();
F.cancelClose(this);
var G=e.getTarget();

if(G.isEnabled()&&G instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(G);
var E=G.getMenu&&G.getMenu();

if(E){F.scheduleOpen(E);
this.__lH=E;
}else{var H=this.getOpenedButton();

if(H){F.scheduleClose(H.getMenu());
}
if(this.__lH){F.cancelOpen(this.__lH);
this.__lH=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var y=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var z=this.getOpenedButton();
z?this.setSelectedButton(z):this.resetSelectedButton();
if(z){y.cancelClose(z.getMenu());
}if(this.__lH){y.cancelOpen(this.__lH);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__lI:null,_computeSizeHint:function(){var p=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__lI=[0,0,0,0];
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
},getColumnSizes:function(){return this.__lI||null;
}}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var p="icon",o="label",n="arrow",m="shortcut",l="submenu",k="String",j="qx.ui.menu.Menu",i="qx.ui.menu.AbstractButton",h="keypress",g="_applyIcon",d="mouseup",f="abstract",e="_applyLabel",c="_applyMenu";
qx.Class.define(i,{extend:qx.ui.core.Widget,type:f,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(d,this._onMouseUp);
this.addListener(h,this._onKeyPress);
},properties:{label:{check:k,apply:e,nullable:true},menu:{check:j,apply:c,nullable:true},icon:{check:k,apply:g,themeable:true,nullable:true}},members:{_createChildControlImpl:function(a){var b;

switch(a){case p:b=new qx.ui.basic.Image;
b.setAnonymous(true);
this._add(b,{column:0});
break;
case o:b=new qx.ui.basic.Label;
b.setAnonymous(true);
this._add(b,{column:1});
break;
case m:b=new qx.ui.basic.Label;
b.setAnonymous(true);
this._add(b,{column:2});
break;
case n:b=new qx.ui.basic.Image;
b.setAnonymous(true);
this._add(b,{column:3});
break;
}return b||arguments.callee.base.call(this,a);
},_forwardStates:{selected:1},getChildrenSizes:function(){var s=0,t=0,u=0,y=0;

if(this._isChildControlVisible(p)){var z=this.getChildControl(p);
s=z.getMarginLeft()+z.getSizeHint().width+z.getMarginRight();
}
if(this._isChildControlVisible(o)){var w=this.getChildControl(o);
t=w.getMarginLeft()+w.getSizeHint().width+w.getMarginRight();
}
if(this._isChildControlVisible(m)){var v=this.getChildControl(m);
u=v.getMarginLeft()+v.getSizeHint().width+v.getMarginRight();
}
if(this._isChildControlVisible(n)){var x=this.getChildControl(n);
y=x.getMarginLeft()+x.getSizeHint().width+x.getMarginRight();
}return [s,t,u,y];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_applyIcon:function(q,r){if(q){this._showChildControl(p).setSource(q);
}else{this._excludeChildControl(p);
}},_applyLabel:function(C,D){if(C){this._showChildControl(o).setContent(C);
}else{this._excludeChildControl(o);
}},_applyMenu:function(A,B){if(B){B.resetOpener();
B.removeState(l);
}
if(A){this._showChildControl(n);
A.setOpener(this);
A.addState(l);
}else{this._excludeChildControl(n);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var p=this._getLayoutChildren();
var o;
var g;
var h=[];

for(var i=0,l=p.length;i<l;i++){o=p[i];
g=o.getLayoutProperties().column;
h[g]=o;
}var n=p[0].getLayoutParent().getLayoutParent();
var q=n.getColumnSizes();
var j=n.getSpacingX();
var r=0,top=0;
var k=qx.ui.layout.Util;

for(var i=0,l=q.length;i<l;i++){o=h[i];

if(o){var f=o.getSizeHint();
var top=k.computeVerticalAlignOffset(o.getAlignY()||c,f.height,e,0,0);
var m=k.computeHorizontalAlignOffset(o.getAlignX()||a,f.width,q[i],o.getMarginLeft(),o.getMarginRight());
o.renderLayout(r+m,top,f.width,f.height);
}r+=q[i]+j;
}},_computeSizeHint:function(){var t=this._getLayoutChildren();
var s=0;

for(var i=0,l=t.length;i<l;i++){s=Math.max(s,t[i].getSizeHint().height);
}return {width:0,height:s};
}}});
})();
(function(){var i="shortcut",h="qx.ui.menu.Button",g="changeCommand",f="menu-button";
qx.Class.define(h,{extend:qx.ui.menu.AbstractButton,include:qx.ui.core.MExecutable,construct:function(a,b,c,d){arguments.callee.base.call(this);
this.addListener(g,this._onChangeCommand,this);
if(a!=null){this.setLabel(a);
}
if(b!=null){this.setIcon(b);
}
if(c!=null){this.setCommand(c);
}
if(d!=null){this.setMenu(d);
}},properties:{appearance:{refine:true,init:f}},members:{_onChangeCommand:function(e){this.getChildControl(i).setContent(e.getData().toString());
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){e.stopPropagation();
}}},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var k="pressed",j="hovered",i="inherit",h="qx.ui.menubar.Button",g="keydown",f="menubar-button",e="keyup";
qx.Class.define(h,{extend:qx.ui.form.MenuButton,construct:function(a,b,c){arguments.callee.base.call(this,a,b,c);
this.removeListener(g,this._onKeyDown);
this.removeListener(e,this._onKeyUp);
},properties:{appearance:{refine:true,init:f},show:{refine:true,init:i},focusable:{refine:true,init:false}},members:{getToolBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},_onMenuChange:function(e){var d=this.getMenu();
var toolbar=this.getToolBar();

if(d.isVisible()){this.addState(k);
if(toolbar){toolbar.setOpenMenu(d);
}}else{this.removeState(k);
if(toolbar&&toolbar.getOpenMenu()==d){toolbar.resetOpenMenu();
}}},_onMouseOver:function(e){this.addState(j);
if(this.getMenu()){var toolbar=this.getToolBar();
var open=toolbar.getOpenMenu();

if(open&&open!=this.getMenu()){qx.ui.menu.Manager.getInstance().hideAll();
this.open();
}}}}});
})();
(function(){var p="both",o="qx.ui.menu.Menu",n="_applySpacing",m="icon",k="label",j="changeShow",h="Integer",g="qx.ui.toolbar.ToolBar",f="toolbar",e="changeOpenMenu";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:f},openMenu:{check:o,event:e,nullable:true},show:{init:p,check:[p,k,m],inheritable:true,event:j},spacing:{nullable:true,check:h,themeable:true,apply:n}},members:{_applySpacing:function(b,c){var d=this._getLayout();
b==null?d.resetSpacing():d.setSpacing(b);
},addSpacer:function(){var a=new qx.ui.core.Spacer;
this._add(a,{flex:1});
return a;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var r=this.getChildren();
var q=[];
var s;

for(var i=0,l=r.length;i<l;i++){s=r[i];

if(s instanceof qx.ui.menubar.Button){q.push(s);
}else if(s instanceof qx.ui.toolbar.Part){q.push.apply(q,s.getMenuButtons());
}}return q;
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var a="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},hasChildren:function(){return this.getChildrenContainer().hasChildren();
},add:function(n,o){return this.getChildrenContainer().add(n,o);
},remove:function(b){return this.getChildrenContainer().remove(b);
},removeAll:function(){return this.getChildrenContainer().removeAll();
},indexOf:function(f){return this.getChildrenContainer().indexOf(f);
},addAt:function(c,d,e){this.getChildrenContainer().addAt(c,d,e);
},addBefore:function(g,h,i){this.getChildrenContainer().addBefore(g,h,i);
},addAfter:function(k,l,m){this.getChildrenContainer().addAfter(k,l,m);
},removeAt:function(j){this.getChildrenContainer().removeAt(j);
}}});
})();
(function(){var o="container",n="handle",m="both",k="Integer",j="middle",h="qx.ui.toolbar.Part",g="icon",f="label",e="changeShow",d="_applySpacing",c="toolbar/part";
qx.Class.define(h,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(n);
},properties:{appearance:{refine:true,init:c},show:{init:m,check:[m,f,g],inheritable:true,event:e},spacing:{nullable:true,check:k,themeable:true,apply:d}},members:{_createChildControlImpl:function(a){var b;

switch(a){case n:b=new qx.ui.basic.Image();
b.setAlignY(j);
this._add(b);
break;
case o:b=new qx.ui.toolbar.PartContainer;
this._add(b);
break;
}return b||arguments.callee.base.call(this,a);
},getChildrenContainer:function(){return this.getChildControl(o);
},_applySpacing:function(p,q){var r=this.getChildControl(o).getLayout();
p==null?r.resetSpacing():r.setSpacing(p);
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
(function(){var j="checked",i="String",h="menu-checkbox",g="_applyChecked",f="Boolean",d="changeName",c="changeChecked",b="changeValue",a="qx.ui.menu.CheckBox";
qx.Class.define(a,{extend:qx.ui.menu.AbstractButton,implement:qx.ui.form.IFormElement,construct:function(k,l){arguments.callee.base.call(this);
if(k!=null){this.setLabel(k);
}
if(l!=null){this.setMenu(l);
}},properties:{appearance:{refine:true,init:h},value:{check:i,nullable:true,event:b},name:{check:i,nullable:true,event:d},checked:{check:f,init:false,apply:g,event:c}},members:{_applyChecked:function(m,n){m?this.addState(j):this.removeState(j);
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
},members:{__lJ:false,_applyVisible:function(g,h){if(!this.bInListener){this.setChecked(g);
}}}});
})();
(function(){var d="qx.ui.table.selection.Model",c="qx.ui.table.selection.Manager";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:d}},members:{__lK:null,handleMouseDown:function(e,f){if(f.isLeftPressed()){var g=this.getSelectionModel();

if(!g.isSelectedIndex(e)){this._handleSelectEvent(e,f);
this.__lK=true;
}else{this.__lK=false;
}}else if(f.isRightPressed()&&f.getModifiers()==0){var g=this.getSelectionModel();

if(!g.isSelectedIndex(e)){g.setSelectionInterval(e,e);
}}},handleMouseUp:function(a,b){if(b.isLeftPressed()&&!this.__lK){this._handleSelectEvent(a,b);
}},handleClick:function(h,i){},handleSelectKeyDown:function(j,k){this._handleSelectEvent(j,k);
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
(function(){var x="__lL",w="..",v="changeSelection",u="_applySelectionMode",t="]",s="qx.event.type.Event",r="Ranges:",q="qx.ui.table.selection.Model",p=" [";
qx.Class.define(q,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lL=[];
this.__lM=-1;
this.__lN=-1;
this.hasBatchModeRefCount=0;
this.__lO=false;
},events:{"changeSelection":s},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:u}},members:{__lO:null,__lM:null,__lN:null,__lL:null,_applySelectionMode:function(o){this.clearSelection();
},setBatchMode:function(n){if(n){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__lO){this.__lO=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__lM;
},getLeadSelectionIndex:function(){return this.__lN;
},clearSelection:function(){if(!this.isSelectionEmpty()){this._clearSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__lL.length==0;
},getSelectedCount:function(){var B=0;

for(var i=0;i<this.__lL.length;i++){var A=this.__lL[i];
B+=A.maxIndex-A.minIndex+1;
}return B;
},isSelectedIndex:function(b){for(var i=0;i<this.__lL.length;i++){var c=this.__lL[i];

if(b>=c.minIndex&&b<=c.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var a=[];

for(var i=0;i<this.__lL.length;i++){a.push({minIndex:this.__lL[i].minIndex,maxIndex:this.__lL[i].maxIndex});
}return a;
},iterateSelection:function(y,z){for(var i=0;i<this.__lL.length;i++){for(var j=this.__lL[i].minIndex;j<=this.__lL[i].maxIndex;j++){y.call(z,j);
}}},setSelectionInterval:function(O,P){var Q=arguments.callee.self;

switch(this.getSelectionMode()){case Q.NO_SELECTION:return;
case Q.SINGLE_SELECTION:O=P;
break;
case Q.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=O;i<=P;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._clearSelection();
this._addSelectionInterval(O,P);
this._fireChangeSelection();
},addSelectionInterval:function(L,M){var N=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case N.NO_SELECTION:return;
case N.MULTIPLE_INTERVAL_SELECTION:case N.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(L,M);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(L,M);
break;
}},removeSelectionInterval:function(d,e){this.__lM=d;
this.__lN=e;
var f=Math.min(d,e);
var h=Math.max(d,e);
for(var i=0;i<this.__lL.length;i++){var l=this.__lL[i];

if(l.minIndex>h){break;
}else if(l.maxIndex>=f){var m=(l.minIndex>=f)&&(l.minIndex<=h);
var k=(l.maxIndex>=f)&&(l.maxIndex<=h);

if(m&&k){this.__lL.splice(i,1);
i--;
}else if(m){l.minIndex=h+1;
}else if(k){l.maxIndex=f-1;
}else{var g={minIndex:h+1,maxIndex:l.maxIndex};
this.__lL.splice(i+1,0,g);
l.maxIndex=f-1;
break;
}}}this._fireChangeSelection();
},_clearSelection:function(){this.__lL=[];
this.__lM=-1;
this.__lN=-1;
},_addSelectionInterval:function(C,D){this.__lM=C;
this.__lN=D;
var E=Math.min(C,D);
var G=Math.max(C,D);
var F=0;

for(;F<this.__lL.length;F++){var H=this.__lL[F];

if(H.minIndex>E){break;
}}this.__lL.splice(F,0,{minIndex:E,maxIndex:G});
var I=this.__lL[0];

for(var i=1;i<this.__lL.length;i++){var H=this.__lL[i];

if(I.maxIndex+1>=H.minIndex){I.maxIndex=Math.max(I.maxIndex,H.maxIndex);
this.__lL.splice(i,1);
i--;
}else{I=H;
}}},_dumpRanges:function(){var J=r;

for(var i=0;i<this.__lL.length;i++){var K=this.__lL[i];
J+=p+K.minIndex+w+K.maxIndex+t;
}this.debug(J);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__lO=true;
}this.fireEvent(v);
}},destruct:function(){this._disposeFields(x);
}});
})();
(function(){var r="",q="Number",p='</div>',o='" ',n='<div>',m="</div>",l="div",k="overflow: hidden;",j='style="',h="_applyMaxCacheLines",K="qx.ui.table.pane.Pane",J="__lP",I="width: 100%;",H="__lT",G="_applyVisibleRowCount",F='>',E="line-height: ",D="appear",C='class="',B="width:100%;",z="px;",A='<div ',v="'>",w="__lS",t="_applyFirstVisibleRow",u="<div style='",s=";position:relative;";
qx.Class.define(K,{extend:qx.ui.core.Widget,construct:function(a){arguments.callee.base.call(this);
this.__lP=a;
this.__lQ=0;
this.__lR=0;
this.__lS=[];
},properties:{firstVisibleRow:{check:q,init:0,apply:t},visibleRowCount:{check:q,init:0,apply:G},maxCacheLines:{check:q,init:1000,apply:h},allowShrinkX:{refine:true,init:false}},members:{__lR:null,__lQ:null,__lP:null,__lT:null,__lU:null,__lV:null,__lS:null,__lW:0,_applyFirstVisibleRow:function(cm,cn){this.updateContent(false,cm-cn);
},_applyVisibleRowCount:function(f,g){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__lP;
},getTable:function(){return this.__lP.getTable();
},setFocusedCell:function(b,c,d){if(b!=this.__lV||c!=this.__lU){var e=this.__lU;
this.__lV=b;
this.__lU=c;
if(c!=e&&!d){if(c!==null&&e!==null){this.updateContent(false,null,e,true);
this.updateContent(false,null,c,true);
}else{this.updateContent();
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(bM,bN){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(bO,bP,bQ,bR){this.__lX();
var bT=this.getFirstVisibleRow();
var bS=this.getVisibleRowCount();

if(bP==-1||bP>=bT&&bO<bT+bS){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(by,bz){if(this.__lW>=by&&by!==-1){this.__lX();
}},__lX:function(){this.__lS=[];
this.__lW=0;
},__lY:function(cj,ck,cl){if(!ck&&!cl&&this.__lS[cj]){return this.__lS[cj];
}else{return null;
}},__ma:function(co,cp,cq,cr){var cs=this.getMaxCacheLines();

if(!cq&&!cr&&!this.__lS[co]&&cs>0){this._applyMaxCacheLines(cs);
this.__lS[co]=cp;
this.__lW+=1;
}},updateContent:function(ct,cu,cv,cw){if(ct){this.__lX();
}if(cu&&Math.abs(cu)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(cu);
}else if(cw&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(cv);
}else{this._updateAllRows();
}},_updateRowStyles:function(bn){var br=this.getContentElement().getDomElement();

if(!br||!br.firstChild){this._updateAllRows();
return;
}var bv=this.getTable();
var bp=bv.getSelectionModel();
var bs=bv.getTableModel();
var bw=bv.getDataRowRenderer();
var bq=br.firstChild.childNodes;
var bu={table:bv};
var bx=this.getFirstVisibleRow();
var y=0;
var bo=bq.length;

if(bn!=null){var bt=bn-bx;

if(bt>=0&&bt<bo){bx=bn;
y=bt;
bo=bt+1;
}else{return;
}}
for(;y<bo;y++,bx++){bu.row=bx;
bu.selected=bp.isSelectedIndex(bx);
bu.focusedRow=(this.__lU==bx);
bu.rowData=bs.getRowData(bx);
bw.updateDataRowElement(bu,bq[y]);
}},_getRowsHtml:function(L,M){var R=this.getTable();
var U=R.getSelectionModel();
var P=R.getTableModel();
var Q=R.getTableColumnModel();
var bj=this.getPaneScroller().getTablePaneModel();
var ba=R.getDataRowRenderer();
P.prefetchRows(L,L+M-1);
var bg=R.getRowHeight();
var bi=bj.getColumnCount();
var bk=0;
var O=[];
for(var x=0;x<bi;x++){var bl=bj.getColumnAtX(x);
var T=Q.getColumnWidth(bl);
O.push({col:bl,xPos:x,editable:P.isColumnEditable(bl),focusedCol:this.__lV==bl,styleLeft:bk,styleWidth:T});
bk+=T;
}var bm=[];

for(var S=L;S<L+M;S++){var V=U.isSelectedIndex(S);
var Y=(this.__lU==S);
var bd=this.__lY(S,V,Y);

if(bd){bm.push(bd);
continue;
}var bc=[];
var bf={table:R};
bf.styleHeight=bg;
bf.row=S;
bf.selected=V;
bf.focusedRow=Y;
bf.rowData=P.getRowData(S);
bc.push(A);
var N=ba.getRowClass(bf);

if(N){bc.push(C,N,o);
}var bb=ba.createRowStyle(bf);
bb+=s+ba.getRowHeightStyle(bg)+B;

if(bb){bc.push(j,bb,o);
}bc.push(F);

for(var x=0;x<bi;x++){var W=O[x];

for(var bh in W){bf[bh]=W[bh];
}var bl=bf.col;
bf.value=P.getValue(bl,S);
var X=Q.getDataCellRenderer(bl);
X.createDataCellHtml(bf,bc);
}bc.push(p);
var be=bc.join(r);
this.__ma(S,be,V,Y);
bm.push(be);
}return bm.join(r);
},_scrollContent:function(bV){var bW=this.getContentElement().getDomElement();

if(!(bW&&bW.firstChild)){this._updateAllRows();
return;
}var cg=bW.firstChild;
var bX=cg.childNodes;
var ce=this.getVisibleRowCount();
var cd=this.getFirstVisibleRow();
var cb=this.getTable().getTableModel();
var ch=0;

if(cb!=null){ch=cb.getRowCount();
}if(cd+ce>ch){this._updateAllRows();
return;
}var ci=bV<0?ce+bV:0;
var bY=bV<0?0:ce-bV;

for(i=Math.abs(bV)-1;i>=0;i--){var cc=bX[ci];

try{cg.removeChild(cc);
}catch(bU){break;
}}if(!this.__lT){this.__lT=document.createElement(l);
}var cf=n;
cf+=this._getRowsHtml(cd+bY,Math.abs(bV));
cf+=p;
this.__lT.innerHTML=cf;
var ca=this.__lT.firstChild.childNodes;
if(bV>0){for(var i=ca.length-1;i>=0;i--){var cc=ca[0];
cg.appendChild(cc);
}}else{for(var i=ca.length-1;i>=0;i--){var cc=ca[ca.length-1];
cg.insertBefore(cc,cg.firstChild);
}}if(this.__lU!==null){this._updateRowStyles(this.__lU-bV);
this._updateRowStyles(this.__lU);
}},_updateAllRows:function(){var bD=this.getContentElement().getDomElement();

if(!bD){this.addListenerOnce(D,arguments.callee,this);
return;
}var bJ=this.getTable();
var bG=bJ.getTableModel();
var bI=this.getPaneScroller().getTablePaneModel();
var bH=bI.getColumnCount();
var bA=bJ.getRowHeight();
var bE=this.getFirstVisibleRow();
var bB=this.getVisibleRowCount();
var bK=0;

if(bG!=null){bK=bG.getRowCount();
}
if(bE+bB>bK){bB=Math.max(0,bK-bE);
}var bC=bI.getTotalWidth();
var bF;
if(bB>0){bF=[u,I,(bJ.getForceLineHeight()?E+bA+z:r),k,v,this._getRowsHtml(bE,bB),m];
}else{bF=[];
}var bL=bF.join(r);
bD.innerHTML=bL;
this.setWidth(bC);
this.__lQ=bH;
this.__lR=bB;
}},destruct:function(){this._disposeFields(H,J,w);
}});
})();
(function(){var c="hovered",b="__mb",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(k){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__mb=k;
},members:{__mb:null,__mc:null,__md:null,getPaneScroller:function(){return this.__mb;
},getTable:function(){return this.__mb.getTable();
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(h,i){var j=this.getHeaderWidgetAtColumn(h);

if(j!=null){j.setWidth(i);
}},setMouseOverColumn:function(f){if(f!=this.__md){if(this.__md!=null){var g=this.getHeaderWidgetAtColumn(this.__md);

if(g!=null){g.removeState(c);
}}
if(f!=null){this.getHeaderWidgetAtColumn(f).addState(c);
}this.__md=f;
}},getHeaderWidgetAtColumn:function(I){var J=this.getPaneScroller().getTablePaneModel().getX(I);
return this._getChildren()[J];
},showColumnMoveFeedback:function(l,x){var p=this.getContainerLocation();

if(this.__mc==null){var m=this.getPaneScroller().getTablePaneModel().getX(l);
var o=this._getChildren()[m];
var q=this.getTable().getTableModel();
var s=this.getTable().getTableColumnModel();
var t={xPos:m,col:l,name:q.getColumnName(l)};
var r=s.getHeaderCellRenderer(l);
var n=r.createHeaderCell(t);
var u=o.getBounds();
n.setWidth(u.width);
n.setHeight(u.height);
n.setZIndex(1000000);
n.setOpacity(0.8);
n.setLayoutProperties({top:p.top});
this.getApplicationRoot().add(n);
this.__mc=n;
}this.__mc.setLayoutProperties({left:p.left+x});
this.__mc.show();
},hideColumnMoveFeedback:function(){if(this.__mc!=null){this.__mc.destroy();
this.__mc=null;
}},isShowingColumnMoveFeedback:function(){return this.__mc!=null;
},_updateContent:function(v){var B=this.getTable().getTableModel();
var E=this.getTable().getTableColumnModel();
var F=this.getPaneScroller().getTablePaneModel();
var H=this._getChildren();
var C=F.getColumnCount();
var w=0;

if(B!=null){w=B.getSortColumnIndex();
}if(v){this._cleanUpCells();
}var y={};
y.sortedAscending=false;

if(B!=null){y.sortedAscending=B.isSortAscending();
}
for(var x=0;x<C;x++){var A=F.getColumnAtX(x);
var G=E.getColumnWidth(A);
var D=E.getHeaderCellRenderer(A);
y.xPos=x;
y.col=A;
y.name=B.getColumnName(A);
y.editable=B.isColumnEditable(A);
y.sorted=(A==w);
var z=H[x];
if(z==null){z=D.createHeaderCell(y);
z.set({width:G});
this._add(z);
}else{D.updateHeaderCell(y,z);
}}},_cleanUpCells:function(){var e=this._getChildren();

for(var x=e.length-1;x>=0;x--){var d=e[x];
d.destroy();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var dY="Boolean",dX="resize-line",dW="mousedown",dV="mouseup",dU="qx.ui.table.pane.CellEvent",dT="scroll",dS="focus-indicator",dR="excluded",dQ="scrollbar-y",dP="visible",eW="mousemove",eV="header",eU="editing",eT="click",eS="modelChanged",eR="scrollbar-x",eQ="cellClick",eP="qx.event.type.ChangeEvent",eO="pane",eN="mouseout",eg="changeHorizontalScrollBarVisible",eh="__mh",ee="bottom",ef="_applyScrollTimeout",ec="changeScrollX",ed="_applyTablePaneModel",ea="Integer",eb="dblclick",ek="dataEdited",el="__mI",et="mousewheel",er="qx.ui.table.pane.Scroller",eB="_applyShowCellFocusIndicator",ew="__mf",eJ="__ml",eG="resize",en="vertical",eM="__me",eL="__mi",eK="changeScrollY",em="__mk",ep="appear",eq="table-scroller",es="__mj",eu="cellDblclick",ex="__mm",eD="__mz",eI="horizontal",ei="losecapture",ej="contextmenu",eo="col-resize",eA="disappear",ez="_applyVerticalScrollBarVisible",ey="_applyHorizontalScrollBarVisible",eF="cellContextmenu",eE="close",ev="__mg",eC="changeTablePaneModel",dO="qx.ui.table.pane.Model",eH="changeVerticalScrollBarVisible";
qx.Class.define(er,{extend:qx.ui.core.Widget,construct:function(bO){arguments.callee.base.call(this);
this.__me=bO;
var bP=new qx.ui.layout.Grid();
bP.setColumnFlex(0,1);
bP.setRowFlex(1,1);
this._setLayout(bP);
this.__mf=this._showChildControl(eR);
this.__mg=this._showChildControl(dQ);
this.__mh=this._showChildControl(eV);
this.__mi=this._showChildControl(eO);
this.__mj=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__mj,{row:0,column:0,colSpan:2});
this.__mk=new qx.ui.table.pane.Clipper();
this.__mk.add(this.__mh);
this.__mk.addListener(ei,this._onChangeCaptureHeader,this);
this.__mk.addListener(eW,this._onMousemoveHeader,this);
this.__mk.addListener(dW,this._onMousedownHeader,this);
this.__mk.addListener(dV,this._onMouseupHeader,this);
this.__mk.addListener(eT,this._onClickHeader,this);
this.__mj.add(this.__mk,{flex:1});
this.__ml=new qx.ui.table.pane.Clipper();
this.__ml.add(this.__mi);
this.__ml.addListener(et,this._onMousewheel,this);
this.__ml.addListener(eW,this._onMousemovePane,this);
this.__ml.addListener(dW,this._onMousedownPane,this);
this.__ml.addListener(dV,this._onMouseupPane,this);
this.__ml.addListener(eT,this._onClickPane,this);
this.__ml.addListener(ej,this._onContextMenu,this);
this.__ml.addListener(eb,this._onDblclickPane,this);
this.__ml.addListener(eG,this._onResizePane,this);
this._add(this.__ml,{row:1,column:0});
this.__mm=this.getChildControl(dS);
this.getChildControl(dX).hide();
this.addListener(eN,this._onMouseout,this);
this.addListener(ep,this._onAppear,this);
this.addListener(eA,this._onDisappear,this);
if(!this.__mn){this.__mn=qx.lang.Function.bind(this._oninterval,this);
}this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":eP,"changeScrollX":eP,"cellClick":dU,"cellDblclick":dU,"cellContextmenu":dU},properties:{horizontalScrollBarVisible:{check:dY,init:true,apply:ey,event:eg},verticalScrollBarVisible:{check:dY,init:true,apply:ez,event:eH},tablePaneModel:{check:dO,apply:ed,event:eC},liveResize:{check:dY,init:false},focusCellOnMouseMove:{check:dY,init:false},selectBeforeFocus:{check:dY,init:false},showCellFocusIndicator:{check:dY,init:true,apply:eB},scrollTimeout:{check:ea,init:100,apply:ef},appearance:{refine:true,init:eq}},members:{__mo:null,__me:null,__mp:null,__mq:null,__mn:null,__mr:null,__ms:null,__mt:null,__mu:null,__mv:null,__mw:null,__mx:null,__my:null,__mz:null,__mA:null,__mB:null,__mC:null,__mD:null,__mE:null,__mF:null,__mG:null,__mH:null,__mI:null,__mf:null,__mg:null,__mh:null,__mk:null,__mi:null,__ml:null,__mm:null,__mj:null,_createChildControlImpl:function(bB){var bC;

switch(bB){case eV:bC=(this.getTable().getNewTablePaneHeader())(this);
break;
case eO:bC=(this.getTable().getNewTablePane())(this);
break;
case dS:bC=new qx.ui.table.pane.FocusIndicator(this);
bC.setUserBounds(0,0,0,0);
bC.setZIndex(1000);
bC.addListener(dV,this._onMouseupFocusIndicator,this);
this.__ml.add(bC);
bC.exclude();
break;
case dX:bC=new qx.ui.core.Widget();
bC.setUserBounds(0,0,0,0);
bC.setZIndex(1000);
this.__ml.add(bC);
break;
case eR:bC=new qx.ui.core.ScrollBar(eI).set({minWidth:0,alignY:ee});
bC.addListener(dT,this._onScrollX,this);
this._add(bC,{row:2,column:0});
break;
case dQ:bC=new qx.ui.core.ScrollBar(en);
bC.addListener(dT,this._onScrollY,this);
this._add(bC,{row:1,column:1});
break;
}return bC||arguments.callee.base.call(this,bB);
},_applyHorizontalScrollBarVisible:function(ch,ci){this.__mf.setVisibility(ch?dP:dR);

if(!ch){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(dj,dk){this.__mg.setVisibility(dj?dP:dR);

if(!dj){this.setScrollX(0);
}},_applyTablePaneModel:function(bz,bA){if(bA!=null){bA.removeListener(eS,this._onPaneModelChanged,this);
}bz.addListener(eS,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bD,bE){if(bD){this._updateFocusIndicator();
}else{if(this.__mm){this.__mm.hide();
}}},getScrollY:function(){return this.__mg.getPosition();
},setScrollY:function(scrollY,P){this.__mD=P;
this.__mg.scrollTo(scrollY);

if(P){this._updateContent();
}this.__mD=false;
},getScrollX:function(){return this.__mf.getPosition();
},setScrollX:function(scrollX){this.__mf.scrollTo(scrollX);
},getTable:function(){return this.__me;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(eY,fa){this.__mh.setColumnWidth(eY,fa);
this.__mi.setColumnWidth(eY,fa);
var fb=this.getTablePaneModel();
var x=fb.getX(eY);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__mh.onColOrderChanged();
this.__mi.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(dB,dC,dD,dE){this.__mi.onTableModelDataChanged(dB,dC,dD,dE);
var dF=this.getTable().getTableModel().getRowCount();

if(dF!=this.__mo){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=dF){if(dF==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),dF-1);
}}this.__mo=dF;
}},onSelectionChanged:function(){this.__mi.onSelectionChanged();
},onFocusChanged:function(){this.__mi.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__mh.onTableModelMetaDataChanged();
this.__mi.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__mh.onPaneModelChanged();
this.__mi.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__mh._updateContent();
this.__me._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var cm=this.__ml.getInnerSize();

if(!cm){return ;
}var ck=this.getTablePaneModel().getTotalWidth();
var cl=this.__mf;

if(cm.width<ck){var cj=Math.max(0,ck-cm.width);
cl.setMaximum(cj);
cl.setKnobFactor(cm.width/ck);
var cn=cl.getPosition();
cl.setPosition(Math.min(cn,cj));
}else{cl.setMaximum(0);
cl.setKnobFactor(1);
cl.setPosition(0);
}},updateVerScrollBarMaximum:function(){var m=this.__ml.getInnerSize();

if(!m){return ;
}var k=this.getTable().getTableModel();
var g=0;

if(k!=null){g=k.getRowCount();
}
if(this.getTable().getKeepFirstVisibleRowComplete()){g+=1;
}var d=this.getTable().getRowHeight();
var i=g*d;
var l=this.__mg;

if(m.height<i){var h=Math.max(0,i-m.height);
l.setMaximum(h);
l.setKnobFactor(m.height/i);
var j=l.getPosition();
l.setPosition(Math.min(j,h));
}else{l.setMaximum(0);
l.setKnobFactor(1);
l.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var dM=e.getData();
this.fireDataEvent(ec,dM,e.getOldData());
this.__mk.scrollToX(dM);
this.__ml.scrollToX(dM);
},_onScrollY:function(e){this.fireDataEvent(eK,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var eX=this.getTable();

if(!eX.getEnabled()){return;
}this.__mg.scrollTo(this.__mg.getPosition()+((e.getWheelDelta()*3)*eX.getRowHeight()));
if(this.__mB&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__mB,this.__mC);
}},__mJ:function(fh){var fm=this.getTable();
var fn=this.__mh.getHeaderWidgetAtColumn(this.__mw);
var fi=fn.getSizeHint().minWidth;
var fk=Math.max(fi,this.__my+fh-this.__mx);

if(this.getLiveResize()){var fj=fm.getTableColumnModel();
fj.setColumnWidth(this.__mw,fk);
}else{this.__mh.setColumnWidth(this.__mw,fk);
var fl=this.getTablePaneModel();
this._showResizeLine(fl.getColumnLeft(this.__mw)+fk);
}this.__mx+=fk-this.__my;
this.__my=fk;
},__mK:function(a){var b=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__mh.isShowingColumnMoveFeedback()||a>this.__mv+b||a<this.__mv-b){this.__ms+=a-this.__mv;
this.__mh.showColumnMoveFeedback(this.__mr,this.__ms);
var c=this.__me.getTablePaneScrollerAtPageX(a);

if(this.__mu&&this.__mu!=c){this.__mu.hideColumnMoveFeedback();
}
if(c!=null){this.__mt=c.showColumnMoveFeedback(a);
}else{this.__mt=null;
}this.__mu=c;
this.__mv=a;
}},_onMousemoveHeader:function(e){var bg=this.getTable();

if(!bg.getEnabled()){return;
}var bh=false;
var ba=null;
var be=e.getDocumentLeft();
var bf=e.getDocumentTop();
this.__mB=be;
this.__mC=bf;

if(this.__mw!=null){this.__mJ(be);
bh=true;
}else if(this.__mr!=null){this.__mK(be);
}else{var bb=this._getResizeColumnForPageX(be);

if(bb!=-1){bh=true;
}else{var bd=bg.getTableModel();
var bi=this._getColumnForPageX(be);

if(bi!=null&&bd.isColumnSortable(bi)){ba=bi;
}}}var bc=bh?eo:null;
this.getApplicationRoot().setGlobalCursor(bc);
this.setCursor(bc);
this.__mh.setMouseOverColumn(ba);
},_onMousemovePane:function(e){var bs=this.getTable();

if(!bs.getEnabled()){return;
}var bu=e.getDocumentLeft();
var bv=e.getDocumentTop();
this.__mB=bu;
this.__mC=bv;
var bt=this._getRowForPagePos(bu,bv);

if(bt!=null&&this._getColumnForPageX(bu)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(bu,bv);
}}this.__mh.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var dI=e.getDocumentLeft();
var dJ=this._getResizeColumnForPageX(dI);

if(dJ!=-1){this._startResizeHeader(dJ,dI);
}else{var dH=this._getColumnForPageX(dI);

if(dH!=null){this._startMoveHeader(dH,dI);
}}},_startResizeHeader:function(cN,cO){var cP=this.getTable().getTableColumnModel();
this.__mw=cN;
this.__mx=cO;
this.__my=cP.getColumnWidth(this.__mw);
this.__mk.capture();
},_startMoveHeader:function(bj,bk){this.__mr=bj;
this.__mv=bk;
this.__ms=this.getTablePaneModel().getColumnLeft(bj);
this.__mk.capture();
},_onMousedownPane:function(e){var T=this.getTable();

if(!T.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var Q=e.getDocumentLeft();
var S=e.getDocumentTop();
var V=this._getRowForPagePos(Q,S);
var U=this._getColumnForPageX(Q);

if(V!==null){this.__mz={row:V,col:U};
var R=this.getSelectBeforeFocus();

if(R){T.getSelectionManager().handleMouseDown(V,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(Q,S);
}
if(!R){T.getSelectionManager().handleMouseDown(V,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__mz&&this.__mm.getRow()==this.__mz.row&&this.__mm.getColumn()==this.__mz.col){this.__mz={};
this.fireEvent(eQ,qx.ui.table.pane.CellEvent,[this,e,this.__mz.row,this.__mz.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__mw!=null){this._stopResizeHeader();
}
if(this.__mr!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var Y=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
Y.setColumnWidth(this.__mw,this.__my);
}this.__mw=null;
this.__mk.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var da=this.getTable().getTableColumnModel();
var db=this.getTablePaneModel();
this.__mh.hideColumnMoveFeedback();

if(this.__mu){this.__mu.hideColumnMoveFeedback();
}
if(this.__mt!=null){var dd=db.getFirstColumnX()+db.getX(this.__mr);
var cY=this.__mt;

if(cY!=dd&&cY!=dd+1){var dc=da.getVisibleColumnAtX(dd);
var cX=da.getVisibleColumnAtX(cY);
var cW=da.getOverallX(dc);
var cV=(cX!=null)?da.getOverallX(cX):da.getOverallColumnCount();

if(cV>cW){cV--;
}da.moveColumn(cW,cV);
}}this.__mr=null;
this.__mt=null;
this.__mk.releaseCapture();
},_onMouseupPane:function(e){var W=this.getTable();

if(!W.getEnabled()){return;
}var X=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(X!=-1&&X!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){W.getSelectionManager().handleMouseUp(X,e);
}},_onMouseupHeader:function(e){var dG=this.getTable();

if(!dG.getEnabled()){return;
}
if(this.__mw!=null){this._stopResizeHeader();
this.__mA=true;
}else if(this.__mr!=null){this._stopMoveHeader();
}},_onClickHeader:function(e){if(this.__mA){this.__mA=false;
return;
}var dy=this.getTable();

if(!dy.getEnabled()){return;
}var dw=dy.getTableModel();
var dx=e.getDocumentLeft();
var dv=this._getResizeColumnForPageX(dx);

if(dv==-1){var dA=this._getColumnForPageX(dx);

if(dA!=null&&dw.isColumnSortable(dA)){var du=dw.getSortColumnIndex();
var dz=(dA!=du)?true:!dw.isSortAscending();
dw.sortByColumn(dA,dz);
dy.getSelectionModel().clearSelection();
}}},_onClickPane:function(e){var bl=this.getTable();

if(!bl.getEnabled()){return;
}var bo=e.getDocumentLeft();
var bp=e.getDocumentTop();
var bm=this._getRowForPagePos(bo,bp);
var bn=this._getColumnForPageX(bo);

if(bm!=null&&bn!=null){bl.getSelectionManager().handleClick(bm,e);

if(this.__mm.isHidden()||(this.__mz&&bm==this.__mz.row&&bn==this.__mz.col)){this.__mz={};
this.fireEvent(eQ,qx.ui.table.pane.CellEvent,[this,e,bm,bn],true);
}}},_onContextMenu:function(e){var dh=e.getDocumentLeft();
var di=e.getDocumentTop();
var df=this._getRowForPagePos(dh,di);
var dg=this._getColumnForPageX(dh);

if(this.__mm.isHidden()||(this.__mz&&df==this.__mz.row&&dg==this.__mz.col)){this.__mz={};
this.fireEvent(eF,qx.ui.table.pane.CellEvent,[this,e,df,dg],true);
var de=this.getTable().getContextMenu();

if(de){if(de.getChildren().length>0){de.placeToMouse(e);
de.show();
}else{de.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var cx=e.getDocumentLeft();
var cy=e.getDocumentTop();
this._focusCellAtPagePos(cx,cy);
this.startEditing();
var cw=this._getRowForPagePos(cx,cy);

if(cw!=-1&&cw!=null){this.fireEvent(eu,qx.ui.table.pane.CellEvent,[this,e,cw],true);
}},_onMouseout:function(e){var dN=this.getTable();

if(!dN.getEnabled()){return;
}if(this.__mw==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__mh.setMouseOverColumn(null);
},_showResizeLine:function(x){var bx=this._showChildControl(dX);
var bw=bx.getWidth();
var by=this.__ml.getBounds();
bx.setUserBounds(x-Math.round(bw/2),0,bw,by.height);
},_hideResizeLine:function(){this._excludeChildControl(dX);
},showColumnMoveFeedback:function(n){var w=this.getTablePaneModel();
var v=this.getTable().getTableColumnModel();
var q=this.__mi.getContainerLocation().left;
var u=w.getColumnCount();
var r=0;
var p=0;
var A=q;

for(var o=0;o<u;o++){var s=w.getColumnAtX(o);
var y=v.getColumnWidth(s);

if(n<A+y/2){break;
}A+=y;
r=o+1;
p=A-q;
}var t=this.__ml.getContainerLocation().left;
var z=this.__ml.getBounds().width;
var scrollX=t-q;
p=qx.lang.Number.limit(p,scrollX+2,scrollX+z-1);
this._showResizeLine(p);
return w.getFirstColumnX()+r;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(fc,fd){var ff=this._getRowForPagePos(fc,fd);

if(ff!=-1&&ff!=null){var fe=this._getColumnForPageX(fc);
this.__me.setFocusedCell(fe,ff);
}},setFocusedCell:function(cT,cU){if(!this.isEditing()){this.__mi.setFocusedCell(cT,cU,this.__mq);
this.__mE=cT;
this.__mF=cU;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__mE;
},getFocusedRow:function(){return this.__mF;
},scrollCellVisible:function(B,C){var M=this.getTablePaneModel();
var D=M.getX(B);

if(D!=-1){var J=this.__ml.getInnerSize();

if(!J){return;
}var K=this.getTable().getTableColumnModel();
var G=M.getColumnLeft(B);
var N=K.getColumnWidth(B);
var E=this.getTable().getRowHeight();
var O=C*E;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var L=Math.min(G,G+N-J.width);
var I=G;
this.setScrollX(Math.max(L,Math.min(I,scrollX)));
var F=O+E-J.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){F+=E;
}var H=O;
this.setScrollY(Math.max(F,Math.min(H,scrollY)),true);
}},isEditing:function(){return this.__mG!=null;
},startEditing:function(){var bU=this.getTable();
var bS=bU.getTableModel();
var bW=this.__mE;

if(!this.isEditing()&&(bW!=null)&&bS.isColumnEditable(bW)){var bX=this.__mF;
var bQ=this.getTablePaneModel().getX(bW);
var bR=bS.getValue(bW,bX);
this.__mH=bU.getTableColumnModel().getCellEditorFactory(bW);
var bT={col:bW,row:bX,xPos:bQ,value:bR,table:bU};
this.__mG=this.__mH.createCellEditor(bT);
if(this.__mG===null){return false;
}else if(this.__mG instanceof qx.ui.window.Window){this.__mG.setModal(true);
this.__mG.setShowClose(false);
this.__mG.addListener(eE,this._onCellEditorModalWindowClose,this);
var f=bU.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__mG,bT);
}this.__mG.open();
}else{var bV=this.__mm.getInnerSize();
this.__mG.setUserBounds(0,0,bV.width,bV.height);
this.__mm.addListener(dW,function(e){e.stopPropagation();
});
this.__mm.add(this.__mG);
this.__mm.addState(eU);
this.__mm.setKeepActive(false);
this.__mG.focus();
this.__mG.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var dL=this.__mH.getCellEditorValue(this.__mG);
var dK=this.getTable().getTableModel().getValue(this.__mE,this.__mF);
this.getTable().getTableModel().setValue(this.__mE,this.__mF,dL);
this.__me.focus();
this.__me.fireDataEvent(ek,{row:this.__mF,col:this.__mE,oldValue:dK,value:dL});
}},cancelEditing:function(){if(this.isEditing()&&!this.__mG.pendingDispose){if(this._cellEditorIsModalWindow){this.__mG.destroy();
this.__mG=null;
this.__mH=null;
this.__mG.pendingDispose=true;
}else{this.__mm.removeState(eU);
this.__mm.setKeepActive(true);
this.__mG.destroy();
this.__mG=null;
this.__mH=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(ca){var cd=this.getTable().getTableColumnModel();
var ce=this.getTablePaneModel();
var cc=ce.getColumnCount();
var cg=this.__mh.getContainerLocation().left;

for(var x=0;x<cc;x++){var cb=ce.getColumnAtX(x);
var cf=cd.getColumnWidth(cb);
cg+=cf;

if(ca<cg){return cb;
}}return null;
},_getResizeColumnForPageX:function(co){var cs=this.getTable().getTableColumnModel();
var ct=this.getTablePaneModel();
var cr=ct.getColumnCount();
var cv=this.__mh.getContainerLocation().left;
var cp=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<cr;x++){var cq=ct.getColumnAtX(x);
var cu=cs.getColumnWidth(cq);
cv+=cu;

if(co>=(cv-cp)&&co<=(cv+cp)){return cq;
}}return -1;
},_getRowForPagePos:function(bF,bG){var bH=this.__mi.getContentLocation();

if(bF<bH.left||bF>bH.right){return null;
}
if(bG>=bH.top&&bG<=bH.bottom){var bI=this.getTable().getRowHeight();
var scrollY=this.__mg.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/bI)*bI;
}var bL=scrollY+bG-bH.top;
var bN=Math.floor(bL/bI);
var bM=this.getTable().getTableModel();
var bJ=0;

if(bM!=null){bJ=bM.getRowCount();
}return (bN<bJ)?bN:null;
}var bK=this.__mh.getContainerLocation();

if(bG>=bK.top&&bG<=bK.bottom&&bF<=bK.right){return -1;
}return null;
},setTopRightWidget:function(cQ){var cR=this.__mI;

if(cR!=null){this.__mj.remove(cR);
}
if(cQ!=null){this.__mj.add(cQ);
}this.__mI=cQ;
},getTopRightWidget:function(){return this.__mI;
},getHeader:function(){return this.__mh;
},getTablePane:function(){return this.__mi;
},getVerticalScrollBarWidth:function(){var cS=this.__mg;
return cS.isVisible()?(cS.getSizeHint().width||0):0;
},getNeededScrollBars:function(cz,cA){var cG=this.__mg.getSizeHint().width;
var cH=this.__ml.getInnerSize();
var cB=cH?cH.width:0;

if(this.getVerticalScrollBarVisible()){cB+=cG;
}var cK=cH?cH.height:0;

if(this.getHorizontalScrollBarVisible()){cK+=cG;
}var cE=this.getTable().getTableModel();
var cI=0;

if(cE!=null){cI=cE.getRowCount();
}var cL=this.getTablePaneModel().getTotalWidth();
var cJ=this.getTable().getRowHeight()*cI;
var cD=false;
var cM=false;

if(cL>cB){cD=true;

if(cJ>cK-cG){cM=true;
}}else if(cJ>cK){cM=true;

if(!cA&&(cL>cB-cG)){cD=true;
}}var cF=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var cC=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((cz||cD)?cF:0)|((cA||!cM)?0:cC);
},_applyScrollTimeout:function(bq,br){this._startInterval(bq);
},_startInterval:function(bY){this._stopInterval();
if(bY){this.__mp=window.setInterval(this.__mn,bY);
}},_stopInterval:function(){if(this.__mp){window.clearInterval(this.__mp);
this.__mp=null;
}},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:function(){if(this.__mq&&!this.__mi._layoutPending){this.__mq=false;
this._updateContent();
}},_updateContent:function(){var dq=this.__ml.getInnerSize();

if(!dq){return;
}var dt=dq.height;
var scrollX=this.__mf.getPosition();
var scrollY=this.__mg.getPosition();
var dm=this.getTable().getRowHeight();
var dn=Math.floor(scrollY/dm);
var ds=this.__mi.getFirstVisibleRow();
this.__mi.setFirstVisibleRow(dn);
var dp=Math.ceil(dt/dm);
var dl=0;
var dr=this.getTable().getKeepFirstVisibleRowComplete();

if(!dr){dp++;
dl=scrollY%dm;
}this.__mi.setVisibleRowCount(dp);

if(dn!=ds){this._updateFocusIndicator();
}this.__ml.scrollToX(scrollX);
if(!dr){this.__ml.scrollToY(dl);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var fo=this.getTable();

if(!fo.getEnabled()){return;
}this.__mm.moveToCell(this.__mE,this.__mF);
}},destruct:function(){this._stopInterval();
var fg=this.getTablePaneModel();

if(fg){fg.dispose();
}this._disposeFields(eD,el,eM);
this._disposeObjects(ew,ev,em,eJ,ex,eh,eL,es);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this,new qx.ui.layout.Grow());
},members:{scrollToX:function(c){this.getContentElement().scrollToX(c,false);
},scrollToY:function(b){this.getContentElement().scrollToY(b,true);
}}});
})();
(function(){var j="Integer",i="Escape",h="keypress",g="Enter",f="excluded",d="__mL",c="qx.ui.table.pane.FocusIndicator";
qx.Class.define(c,{extend:qx.ui.container.Composite,construct:function(a){arguments.callee.base.call(this);
this.__mL=a;
this.setKeepActive(true);
this.addListener(h,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:f},row:{check:j,nullable:true},column:{check:j,nullable:true}},members:{__mL:null,_onKeyPress:function(e){var b=e.getKeyIdentifier();

if(b!==i&&b!==g){e.stopPropagation();
}},moveToCell:function(k,l){if(k==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var m=this.__mL.getTablePaneModel().getX(k);

if(m==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var r=this.__mL.getTable();
var p=r.getTableColumnModel();
var q=this.__mL.getTablePaneModel();
var o=this.__mL.getTablePane().getFirstVisibleRow();
var n=r.getRowHeight();
this.setUserBounds(q.getColumnLeft(k)-2,(l-o)*n-2,p.getColumnWidth(k)+3,n+3);
this.show();
this.setRow(l);
this.setColumn(k);
}}}},destruct:function(){this._disposeFields(d);
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
qx.Bootstrap.define(a,{statics:{isInRange:function(b,c,d){return b>=c&&b<=d;
},isBetweenRange:function(e,f,g){return e>f&&e<g;
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
(function(){var J="resize",I="Boolean",H="nw-resize",G="mouseup",F="mousedown",E="w-resize",D="losecapture",C="se-resize",B="resize-frame",A="ne-resize",t="n-resize",z="sw-resize",w="mouseout",r="s-resize",q="mousemove",v="move",u="maximized",x="Integer",p="e-resize",y="qx.ui.core.MResizable",s="__mM";
qx.Mixin.define(y,{construct:function(){this.addListener(F,this.__mW,this,true);
this.addListener(G,this.__mX,this);
this.addListener(q,this.__na,this);
this.addListener(w,this.__nb,this);
this.addListener(D,this.__mY,this);
},properties:{resizable:{check:I,init:true},resizeAllEdges:{check:I,init:true},resizeSensitivity:{check:x,init:5},useResizeFrame:{check:I,init:true}},members:{__mM:null,__mN:null,__mO:null,__mP:null,__mQ:null,__mR:function(){var T=this.__mM;

if(!T){T=this.__mM=new qx.ui.core.Widget();
T.setAppearance(B);
T.exclude();
qx.core.Init.getApplication().getRoot().add(T);
}return T;
},__mS:function(){var i=this.__mQ;
var h=this.__mR();
h.setUserBounds(i.left,i.top,i.width,i.height);
h.show();
h.setZIndex(this.getZIndex()+1);
},__mT:function(e){var M=this.__mN;
var N=this.getSizeHint();
var Q=this.__mQ;
var L=Q.width;
var P=Q.height;
var S=Q.left;
var top=Q.top;
var R;
if(M&1||M&2){R=e.getDocumentTop()-this.__mP;

if(M&1){P-=R;
}else{P+=R;
}
if(P<N.minHeight){P=N.minHeight;
}else if(P>N.maxHeight){P=N.maxHeight;
}
if(M&1){top+=Q.height-P;
}}if(M&4||M&8){R=e.getDocumentLeft()-this.__mO;

if(M&4){L-=R;
}else{L+=R;
}
if(L<N.minWidth){L=N.minWidth;
}else if(L>N.maxWidth){L=N.maxWidth;
}
if(M&4){S+=Q.width-L;
}}var O=this.getBounds();
return {viewportLeft:S,viewportTop:top,parentLeft:O.left+S-Q.left,parentTop:O.top+top-Q.top,width:L,height:P};
},__mU:{1:t,2:r,4:E,8:p,5:H,6:z,9:A,10:C},__mV:function(e){if(!this.getResizable()){return;
}var n=this.getContentLocation();
var j=this.getResizeAllEdges();
var m=this.getResizeSensitivity();
var o=e.getDocumentLeft();
var l=e.getDocumentTop();
var k=0;

if(j&&Math.abs(n.top-l)<m){k+=1;
}else if(Math.abs(n.bottom-l)<m){k+=2;
}
if(j&&Math.abs(n.left-o)<m){k+=4;
}else if(Math.abs(n.right-o)<m){k+=8;
}this.__mN=k;
},__mW:function(e){if(!this.__mN){return;
}this.addState(J);
this.capture();
this.__mO=e.getDocumentLeft();
this.__mP=e.getDocumentTop();
var location=this.getContainerLocation();
var K=this.getBounds();
this.__mQ={top:location.top,left:location.left,width:K.width,height:K.height};
if(this.getUseResizeFrame()){this.__mS();
}e.stop();
},__mX:function(e){if(!this.__mN){return;
}if(this.getUseResizeFrame()){this.__mR().exclude();
}var a=this.__mT(e);
this.setWidth(a.width);
this.setHeight(a.height);
if(this.getResizeAllEdges()){this.setLayoutProperties({left:a.parentLeft,top:a.parentTop});
}this.__mN=0;
this.removeState(J);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
},__mY:function(e){if(!this.__mN){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(v);
if(this.getUseResizeFrame()){this.__mR().exclude();
}},__na:function(e){if(this.hasState(J)){var f=this.__mT(e);
if(this.getUseResizeFrame()){var c=this.__mR();
c.setUserBounds(f.viewportLeft,f.viewportTop,f.width,f.height);
}else{this.setWidth(f.width);
this.setHeight(f.height);
if(this.getResizeAllEdges()){this.setLayoutProperties({left:f.parentLeft,top:f.parentTop});
}}e.stop();
}else if(!this.hasState(u)){this.__mV(e);
var g=this.__mN;
var d=this.getApplicationRoot();

if(g){var b=this.__mU[g];
this.setCursor(b);
d.setGlobalCursor(b);
}else if(this.getCursor()){this.resetCursor();
d.resetGlobalCursor();
}}},__nb:function(e){if(this.getCursor()&&!this.hasState(J)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){this._disposeObjects(s);
}});
})();
(function(){var A="move",z="Boolean",y="mouseup",x="mousedown",w="losecapture",v="qx.ui.core.MMovable",u="__nd",t="mousemove",s="maximized",r="__nc",p="__ne",q="move-frame";
qx.Mixin.define(v,{properties:{movable:{check:z,init:true},useMoveFrame:{check:z,init:false}},members:{__nc:null,__nd:null,__ne:null,__nf:null,__ng:null,__nh:null,__ni:null,_activateMoveHandle:function(o){if(this.__nc){throw new Error("The move handle could not be redefined!");
}this.__nc=o;
o.addListener(x,this._onMoveMouseDown,this);
o.addListener(y,this._onMoveMouseUp,this);
o.addListener(t,this._onMoveMouseMove,this);
o.addListener(w,this.__nm,this);
},__nj:function(){var k=this.__nd;

if(!k){k=this.__nd=new qx.ui.core.Widget();
k.setAppearance(q);
k.exclude();
qx.core.Init.getApplication().getRoot().add(k);
}return k;
},__nk:function(){var b=this.getBounds();
var a=this.__nj();
a.setUserBounds(b.left,b.top,b.width,b.height);
a.show();
a.setZIndex(this.getZIndex()+1);
},__nl:function(e){var g=this.__ne;
var j=Math.max(g.left,Math.min(g.right,e.getDocumentLeft()));
var i=Math.max(g.top,Math.min(g.bottom,e.getDocumentTop()));
var f=this.__nf+j;
var h=this.__ng+i;
return {viewportLeft:f,viewportTop:h,parentLeft:f-this.__nh,parentTop:h-this.__ni};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(s)){return;
}var parent=this.getLayoutParent();
var m=parent.getContentLocation();
var n=parent.getBounds();
this.__ne={left:m.left,top:m.top,right:m.left+n.width,bottom:m.top+n.height};
var l=this.getContainerLocation();
this.__nh=m.left;
this.__ni=m.top;
this.__nf=l.left-e.getDocumentLeft();
this.__ng=l.top-e.getDocumentTop();
this.addState(A);
this.__nc.capture();
if(this.getUseMoveFrame()){this.__nk();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(A)){return;
}var c=this.__nl(e);

if(this.getUseMoveFrame()){this.__nj().setDomPosition(c.viewportLeft,c.viewportTop);
}else{this.setDomPosition(c.parentLeft,c.parentTop);
}},_onMoveMouseUp:function(e){if(!this.hasState(A)){return;
}this.removeState(A);
this.__nc.releaseCapture();
var d=this.__nl(e);
this.setLayoutProperties({left:d.parentLeft,top:d.parentTop});
if(this.getUseMoveFrame()){this.__nj().exclude();
}},__nm:function(e){if(!this.hasState(A)){return;
}this.removeState(A);
if(this.getUseMoveFrame()){this.__nj().exclude();
}}},destruct:function(){this._disposeObjects(u,r);
this._disposeFields(p);
}});
})();
(function(){var c="qx.ui.window.IWindowManager";
qx.Interface.define(c,{members:{setDesktop:function(f){this.assertInterface(f,qx.ui.window.IDesktop);
},changeActiveWindow:function(a,b){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);
},sendToBack:function(d){this.assertInstance(d,qx.ui.window.Window);
}}});
})();
(function(){var b="__nn",a="qx.ui.window.Manager";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__nn:null,setDesktop:function(p){this.__nn=p;
this.updateStack();
},changeActiveWindow:function(q,r){this.bringToFront(q);
},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__nn.unblockContent();
var k=this.__nn.getWindows();
var o=this._minZIndex-1;
var n=false;
var m,j;

for(var i=0,l=k.length;i<l;i++){m=k[i];

if(!m.isVisible()){continue;
}o+=2;
m.setZIndex(o);
if(m.getModal()){this.__nn.blockContent(o-1);
}n=n||m.isActive();
j=m;
}
if(!n&&j){j.setActive(true);
}},bringToFront:function(c){var d=this.__nn.getWindows();
var e=qx.lang.Array.remove(d,c);

if(e){d.push(c);
this.updateStack();
}},sendToBack:function(f){var g=this.__nn.getWindows();
var h=qx.lang.Array.remove(g,f);

if(h){g.unshift(f);
this.updateStack();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var x="Boolean",w="qx.event.type.Event",v="captionbar",u="maximize-button",t="_applyCaptionBarChange",s="restore-button",r="minimize-button",q="close-button",p="execute",o="pane",bf="title",be="icon",bd="maximized",bc="statusbar-text",bb="statusbar",ba="String",Y="active",X="beforeClose",W="beforeMinimize",V="mousedown",E="changeStatus",F="changeIcon",C="excluded",D="_applyCaption",A="_applyActive",B="beforeRestore",y="normal",z="minimize",G="dblclick",H="changeModal",N="_applyShowStatusbar",M="_applyStatus",P="qx.ui.window.Window",O="changeCaption",R="_applyIcon",Q="focusout",J="beforeMaximize",U="maximize",T="restore",S="window",I="close",K="changeActive",L="minimized";
qx.Class.define(P,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(h,i){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(v);
this._createChildControl(o);
if(i!=null){this.setIcon(i);
}
if(h!=null){this.setCaption(h);
}this._updateCaptionBar();
this.addListener(V,this._onWindowMouseDown,this,true);
this.addListener(Q,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":w,"close":w,"beforeMinimize":w,"minimize":w,"beforeMaximize":w,"maximize":w,"beforeRestore":w,"restore":w},properties:{appearance:{refine:true,init:S},visibility:{refine:true,init:C},focusable:{refine:true,init:true},active:{check:x,init:false,apply:A,event:K},modal:{check:x,init:false,event:H},caption:{apply:D,event:O,nullable:true},icon:{check:ba,nullable:true,apply:R,event:F,themeable:true},status:{check:ba,nullable:true,apply:M,event:E},showClose:{check:x,init:true,apply:t,themeable:true},showMaximize:{check:x,init:true,apply:t,themeable:true},showMinimize:{check:x,init:true,apply:t,themeable:true},allowClose:{check:x,init:true,apply:t},allowMaximize:{check:x,init:true,apply:t},allowMinimize:{check:x,init:true,apply:t},showStatusbar:{check:x,init:false,apply:N}},members:{__no:null,__np:null,getChildrenContainer:function(){return this.getChildControl(o);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(bk){var bl;

switch(bk){case bb:bl=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(bl);
bl.add(this.getChildControl(bc));
break;
case bc:bl=new qx.ui.basic.Label();
bl.setContent(this.getStatus());
break;
case o:bl=new qx.ui.container.Composite();
this._add(bl,{flex:1});
break;
case v:var bn=new qx.ui.layout.Grid();
bn.setRowFlex(0,1);
bn.setColumnFlex(1,1);
bl=new qx.ui.container.Composite(bn);
this._add(bl);
bl.addListener(G,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(bl);
break;
case be:bl=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(v).add(bl,{row:0,column:0});
break;
case bf:bl=new qx.ui.basic.Label(this.getCaption());
bl.setWidth(0);
bl.setAllowGrowX(true);
var bm=this.getChildControl(v);
bm.add(bl,{row:0,column:1});
break;
case r:bl=new qx.ui.form.Button();
bl.setFocusable(false);
bl.addListener(p,this._onMinimizeButtonClick,this);
this.getChildControl(v).add(bl,{row:0,column:2});
break;
case s:bl=new qx.ui.form.Button();
bl.setFocusable(false);
bl.addListener(p,this._onRestoreButtonClick,this);
this.getChildControl(v).add(bl,{row:0,column:3});
break;
case u:bl=new qx.ui.form.Button();
bl.setFocusable(false);
bl.addListener(p,this._onMaximizeButtonClick,this);
this.getChildControl(v).add(bl,{row:0,column:4});
break;
case q:bl=new qx.ui.form.Button();
bl.setFocusable(false);
bl.addListener(p,this._onCloseButtonClick,this);
this.getChildControl(v).add(bl,{row:0,column:6});
break;
}return bl||arguments.callee.base.call(this,bk);
},_updateCaptionBar:function(){var f;

if(this.getIcon()){this._showChildControl(be);
}else{this._excludeChildControl(be);
}
if(this.getCaption()){this._showChildControl(bf);
}else{this._excludeChildControl(bf);
}
if(this.getShowMinimize()){this._showChildControl(r);
f=this.getChildControl(r);
this.getAllowMinimize()?f.resetEnabled():f.setEnabled(false);
}else{this._excludeChildControl(r);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(s);
this._excludeChildControl(u);
}else{this._showChildControl(u);
this._excludeChildControl(s);
}f=this.getChildControl(u);
this.getAllowMaximize()?f.resetEnabled():f.setEnabled(false);
}else{this._excludeChildControl(u);
this._excludeChildControl(s);
}
if(this.getShowClose()){this._showChildControl(q);
f=this.getChildControl(q);
this.getAllowClose()?f.resetEnabled():f.setEnabled(false);
}else{this._excludeChildControl(q);
}},close:function(){if(this.fireNonBubblingEvent(X,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(I);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bp=parent.getBounds();

if(bp){var bq=this.getSizeHint();
var bo=Math.round((bp.width-bq.width)/2);
var top=Math.round((bp.height-bq.height)/2);

if(top<0){top=0;
}this.moveTo(bo,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(!parent){return;
}
if(parent.supportsMaximize()){if(this.fireNonBubblingEvent(J,qx.event.type.Event,[false,true])){var g=this.getLayoutProperties();
this.__np=g.left===undefined?0:g.left;
this.__no=g.top===undefined?0:g.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(bd);
this._updateCaptionBar();
this.fireEvent(U);
}}},minimize:function(){if(this.fireNonBubblingEvent(W,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(z);
}},restore:function(){if(!this.isMaximized()){return;
}
if(this.fireNonBubblingEvent(B,qx.event.type.Event,[false,true])){var a=this.__np;
var top=this.__no;
this.setLayoutProperties({edge:null,left:a,top:top});
this.removeState(bd);
this._updateCaptionBar();
this.fireEvent(T);
}},moveTo:function(d,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:d,top:top});
},isMaximized:function(){return this.hasState(bd);
},getMode:function(){if(!this.isVisible()){return L;
}else{if(this.isMaximized()){return bd;
}else{return y;
}}},_applyActive:function(b,c){if(c){this.removeState(Y);
}else{this.addState(Y);
}},_getContentPaddingTarget:function(){return this.getChildControl(o);
},_applyShowStatusbar:function(bs,bt){if(bs){this._showChildControl(bb);
}else{this._excludeChildControl(bb);
}},_applyCaptionBarChange:function(bg,bh){this._updateCaptionBar();
},_applyStatus:function(j,k){var l=this.getChildControl(bc,true);

if(l){l.setContent(j);
}},_applyCaption:function(bi,bj){this.getChildControl(bf).setContent(bi);
},_applyIcon:function(m,n){this.getChildControl(be).setSource(m);
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var br=e.getRelatedTarget();

if(br!=null&&!qx.ui.core.Widget.contains(this,br)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(r).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(s).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(u).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(q).reset();
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){}}});
})();
(function(){var v="Number",u="__nq",t="qx.event.type.Event",s="_applyFirstColumnX",r="Integer",q="qx.ui.table.pane.Model",p="_applyMaxColumnCount",o="visibilityChangedPre";
qx.Class.define(q,{extend:qx.core.Object,construct:function(c){arguments.callee.base.call(this);
c.addListener(o,this._onColVisibilityChanged,this);
this.__nq=c;
},events:{"modelChanged":t},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:r,init:0,apply:s},maxColumnCount:{check:v,init:-1,apply:p}},members:{__nr:null,__nq:null,_applyFirstColumnX:function(a,b){this.__nr=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(w,y){this.__nr=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){this.__nq=n;
this.__nr=null;
},_onColVisibilityChanged:function(j){this.__nr=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__nr==null){var k=this.getFirstColumnX();
var m=this.getMaxColumnCount();
var l=this.__nq.getVisibleColumnCount();

if(m==-1||(k+m)>l){this.__nr=l-k;
}else{this.__nr=m;
}}return this.__nr;
},getColumnAtX:function(d){var e=this.getFirstColumnX();
return this.__nq.getVisibleColumnAtX(e+d);
},getX:function(C){var D=this.getFirstColumnX();
var E=this.getMaxColumnCount();
var x=this.__nq.getVisibleX(C)-D;

if(x>=0&&(E==-1||x<E)){return x;
}else{return -1;
}},getColumnLeft:function(f){var i=0;
var h=this.getColumnCount();

for(var x=0;x<h;x++){var g=this.getColumnAtX(x);

if(g==f){return i;
}i+=this.__nq.getColumnWidth(g);
}return -1;
},getTotalWidth:function(){var z=0;
var A=this.getColumnCount();

for(var x=0;x<A;x++){var B=this.getColumnAtX(x);
z+=this.__nq.getColumnWidth(B);
}return z;
}},destruct:function(){this._disposeFields(u);
}});
})();
(function(){var z="",y="!",x="'!",w="Expected '",v="number",u=",",t="'",s="Event (",r="' but found ",q="The value '",bA="function",bz="Expected value to be an array but found ",by="' to implement the interface '",bx=") was fired.",bw="Expected value to be an integer >= 0 but found ",bv="' to be not equal with '",bu="' to '",bt="Expected value to be the CSS color '%1' (rgb(%2)), but found value '%3', which cannot be converted to a CSS color!",bs="Expected value to be a map but found ",br="The function did not raise an exception!",G="Expected value to be undefined but found ",H="Called assertFalse with 'true'",E="Expected value to be null but found ",F="Expected object '",C="string",D="Called assert with 'false'",A="Assertion error! ",B="Expected value to be a string but found ",M="' but found '",N="' must must be a key of the map '",W="The String '",T="Expected value not to be undefined but found ",bf=": ",ba="The raised exception does not have the expected type! ",bn=") not fired.",bk="qx.core.Assert",P="Called assertTrue with 'false'",bq="Expected value to be typeof object but found ",bp="' (identical) but found '",bo="' must have any of the values defined in the array '",O="Expected value to be a number but found ",R="Expected value to be the CSS color '%1' (rgb(%2)), but found value '%3' (rgb(%4))!",S="Expected value not to be null but found ",V="Expected value to be a qooxdoo widget but found ",X="Expected value to be a qooxdoo object but found ",bb="' arguments.",bh="Expected value '%1' to be in the range '%2'..'%3'!",bm="' does not match the regular expression '",I="' to be not identical with '",J="' arguments but found '",Q=", ",be="qx.core.AssertionError",bd="Expected value to be a boolean but found ",bc="boolean",bj="Expected value to be typeof '",bi="Expected value to be typeof function but found ",Y="Expected value to be an integer but found ",bg="Called fail().",o="Expected value to be a DOM element but found  '%1'!",bl="function Array(",K="Expected value to be a number >= 0 but found ",L="Expected value to be instanceof '",U="Wrong number of arguments given. Expected '",p="object";
qx.Class.define(bk,{statics:{__ns:function(cU,cV,cW){if(!cU){var cX=A+cV+bf+cW;
qx.log.Logger.error(cX);

if(qx.Class.isDefined(be)){var cY=new qx.core.AssertionError(cV,cW);
qx.log.Logger.error("Stack trace: \n"+cY.getStackTrace());
throw cY;
}else{throw new Error(cX);
}}},assert:function(di,dj){this.__ns(di==true,dj||z,D);
},fail:function(dy){this.__ns(false,dy||z,bg);
},assertTrue:function(dD,dE){this.__ns(dD===true,dE||z,P);
},assertFalse:function(bY,ca){this.__ns(bY===false,ca||z,H);
},assertEquals:function(bK,bL,bM){this.__ns(bK==bL,bM||z,w+bK+M+bL+x);
},assertNotEquals:function(dk,dl,dm){this.__ns(dk!=dl,dm||z,w+dk+bv+dl+x);
},assertIdentical:function(da,db,dc){this.__ns(da===db,dc||z,w+da+bp+db+x);
},assertNotIdentical:function(cy,cz,cA){this.__ns(cy!==cz,cA||z,w+cy+I+cz+x);
},assertNotUndefined:function(cF,cG){this.__ns(cF!==undefined,cG||z,T+cF+y);
},assertUndefined:function(bF,bG){this.__ns(bF===undefined,bG||z,G+bF+y);
},assertNotNull:function(cr,cs){this.__ns(cr!==null,cs||z,S+cr+y);
},assertNull:function(h,j){this.__ns(h===null,j||z,E+h+y);
},assertJsonEquals:function(cM,cN,cO){this.assertEquals(qx.util.Json.stringify(cM),qx.util.Json.stringify(cN),cO);
},assertMatch:function(cb,cc,cd){this.assertString(cb);
this.__ns(cb.search(cc)>=0?true:false,cd||z,W+cb+bm+cc.toString()+x);
},assertArgumentsCount:function(cg,ch,ci,cj){var ck=cg.length;
this.__ns((ck>=ch&&ck<=ci),cj||z,U+ch+bu+ci+J+arguments.length+bb);
},assertEventFired:function(bR,event,bS,bT,bU){var bW=false;
var bV=function(e){if(bT){bT.call(bR,e);
}bW=true;
};
var bX=bR.addListener(event,bV,bR);
bS.call();
this.__ns(bW===true,bU||z,s+event+bn);
bR.removeListenerById(bX);
},assertEventNotFired:function(a,event,b,c){var f=false;
var d=function(e){f=true;
};
var g=a.addListener(event,d,a);
b.call();
this.__ns(f===false,c||z,s+event+bx);
a.removeListenerById(g);
},assertException:function(cH,cI,cJ,cK){var cI=cI||Error;
var cL;
qx.log.Logger.warn("This exception is expected: "+cI.classname);

try{cH();
}catch(bB){cL=bB;
}
if(cL==null){this.__ns(false,cK||z,br);
}this.__ns(cL instanceof cI,cK||z,ba+cI);

if(cJ){this.assertMatch(cL.toString(),cJ,cK);
}},assertInArray:function(dn,dp,dq){this.__ns(dp.indexOf(dn)!==-1,dq||z,q+dn+bo+dp.join(Q)+t);
},assertArrayEquals:function(dd,de,df){this.assertArray(dd,df);
this.assertArray(de,df);
this.assertEquals(dd.length,de.length,df);

for(var i=0;i<dd.length;i++){this.assertIdentical(dd[i],de[i],df);
}},assertKeyInMap:function(cv,cw,cx){this.__ns(cw[cv]!==undefined,cx||z,q+cv+N+qx.util.Json.stringify(cw)+t);
},assertFunction:function(ce,cf){this.__ns(typeof ce===bA,cf||z,bi+ce+y);
},assertString:function(ct,cu){this.__ns(typeof ct===C||ct instanceof String,cu||z,B+ct+y);
},assertBoolean:function(cS,cT){this.__ns(typeof cS===bc||cS instanceof Boolean,cT||z,bd+cS+y);
},assertNumber:function(dw,dx){this.__ns((typeof dw===v||dw instanceof Number)&&isFinite(dw),dx||z,O+dw+y);
},assertPositiveNumber:function(dg,dh){this.__ns((typeof dg===v||dg instanceof Number)&&isFinite(dg)&&dg>=0,dh||z,K+dg+y);
},assertInteger:function(dB,dC){this.__ns(((typeof dB===v||dB instanceof Number)&&isFinite(dB)&&dB%1===0),dC||z,Y+dB+y);
},assertPositiveInteger:function(dF,dG){this.__ns(((typeof dF===v||dF instanceof Number)&&isFinite(dF)&&dF%1===0&&dF>=0),dG||z,bw+dF+y);
},assertInRange:function(cB,cC,cD,cE){this.__ns(cB>=cC&&cB<=cD,cE||z,qx.lang.String.format(bh,[cB,cC,cD]));
},assertObject:function(k,l){this.__ns(typeof k===p&&k!==null,l||z,bq+k+y);
},assertArray:function(m,n){this.__ns(m instanceof Array||m.constructor.toString().indexOf(bl)===0||m.$$isArray,n||z,bz+m+y);
},assertMap:function(dt,du){var dv=({}).constructor;
this.__ns(dt&&dt.constructor===dv,du||z,bs+dt+y);
},assertType:function(cP,cQ,cR){this.__ns(typeof (cP)===cQ,cR||z,bj+cQ+r+cP+y);
},assertInstance:function(bN,bO,bP){var bQ=bO.classname||bO+z;
this.__ns(bN instanceof bO,bP||z,L+bQ+r+bN+y);
},assertInterface:function(bC,bD,bE){this.__ns(qx.Class.implementsInterface(bC,bD),bE||z,F+bC+by+bD+x);
},assertCssColor:function(cl,cm,cn){var co=qx.util.ColorUtil;
var cq=co.stringToRgb(cl);

try{var cp=co.stringToRgb(cm);
}catch(bH){this.__ns(false,cn||z,qx.lang.String.format(bt,[cl,cq.join(u),cm]));
}this.__ns(cq[0]==cp[0]&&cq[1]==cp[1]&&cq[2]==cp[2],cn||z,qx.lang.String.format(R,[cl,cq.join(u),cm,cp.join(u)]));
},assertElement:function(dz,dA){this.__ns(qx.dom.Node.isElement(dz),dA||z,qx.lang.String.format(o,[dz]));
},assertQxObject:function(bI,bJ){this.__ns(bI instanceof qx.core.Object,bJ||z,X+bI+y);
},assertQxWidget:function(dr,ds){this.__ns(dr instanceof qx.ui.core.Widget,ds||z,V+dr+y);
}}});
})();
(function(){var L="",K="==",J=">",I="between",H="<",G="regex",F="!between",E=">=",D="!=",C="<=",w="font-weight",B=";",z="text-align",v='g',u=":",y="qx.ui.table.cellrenderer.Conditional",x="color",A="font-style";
qx.Class.define(y,{extend:qx.ui.table.cellrenderer.Default,construct:function(a,b,c,d){arguments.callee.base.call(this);
this.numericAllowed=[K,D,J,H,E,C];
this.betweenAllowed=[I,F];
this.conditions=[];
this.__nt=a||L;
this.__nu=b||L;
this.__nv=c||L;
this.__nw=d||L;
},members:{__nt:null,__nu:null,__nv:null,__nw:null,__nx:function(be,bf){if(be[1]!=null){bf[z]=be[1];
}
if(be[2]!=null){bf[x]=be[2];
}
if(be[3]!=null){bf[A]=be[3];
}
if(be[4]!=null){bf[w]=be[4];
}},addNumericCondition:function(e,f,g,h,j,k,l){var m=null;

if(qx.lang.Array.contains(this.numericAllowed,e)){if(f!=null){m=[e,g,h,j,k,f,l];
}}
if(m!=null){this.conditions.push(m);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(U,V,W,X,Y,ba,bb,bc){if(qx.lang.Array.contains(this.betweenAllowed,U)){if(V!=null&&W!=null){var bd=[U,X,Y,ba,bb,V,W,bc];
}}
if(bd!=null){this.conditions.push(bd);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(n,o,p,q,r,s){if(n!=null){var t=[G,o,p,q,r,n,s];
}
if(t!=null){this.conditions.push(t);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(M){if(!this.conditions.length){return M.style||L;
}var R=M.table.getTableModel();
var i;
var T;
var N;
var P={"text-align":this.__nt,"color":this.__nu,"font-style":this.__nv,"font-weight":this.__nw};

for(i in this.conditions){T=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){N=M.value;
}else{N=R.getValueById(this.conditions[i][6],M.row);
}
switch(this.conditions[i][0]){case K:if(N==this.conditions[i][5]){T=true;
}break;
case D:if(N!=this.conditions[i][5]){T=true;
}break;
case J:if(N>this.conditions[i][5]){T=true;
}break;
case H:if(N<this.conditions[i][5]){T=true;
}break;
case E:if(N>=this.conditions[i][5]){T=true;
}break;
case C:if(N<=this.conditions[i][5]){T=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){N=M.value;
}else{N=R.getValueById(this.conditions[i][7],M.row);
}
switch(this.conditions[i][0]){case I:if(N>=this.conditions[i][5]&&N<=this.conditions[i][6]){T=true;
}break;
case F:if(N<this.conditions[i][5]&&N>this.conditions[i][6]){T=true;
}break;
}}else if(this.conditions[i][0]==G){if(this.conditions[i][6]==null){N=M.value;
}else{N=R.getValueById(this.conditions[i][6],M.row);
}var O=new RegExp(this.conditions[i][5],v);
T=O.test(N);
}if(T==true){this.__nx(this.conditions[i],P);
}}var S=[];

for(var Q in P){if(P[Q]){S.push(Q,u,P[Q],B);
}}return S.join(L);
}}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(k){this.getContentElement().setStyle(h,k);
},_applyOverflowY:function(j){this.getContentElement().setStyle(d,j);
}}});
})();
(function(){var j="display",i="mousedown",h="load",g="String",f="mouseup",e="losecapture",d="none",c="repeat",b="height",a="px",E="url(",D=")",C="qx.client",B="div",A="_applyFrameName",z="__nz",y="qx.event.type.Event",x="name",w="",v="width",q="zIndex",r="_applySource",o="top",p="mshtml",m="block",n="qx.ui.embed.Iframe",k="position",l="iframe",s="left",t="absolute",u="qx/static/blank.gif";
qx.Class.define(n,{extend:qx.ui.core.Widget,include:qx.ui.core.MNativeOverflow,construct:function(J){if(J!=null){this.__ny=J;
}arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,i,this.block,this,true);
qx.event.Registration.addListener(document.body,f,this.release,this,true);
qx.event.Registration.addListener(document.body,e,this.release,this,true);
this.__nz=this._createBlockerElement();
this.getContainerElement().add(this.__nz);
},events:{"load":y},properties:{appearance:{refine:true,init:l},source:{check:g,apply:r,nullable:true},frameName:{check:g,init:w,apply:A}},members:{__ny:null,__nz:null,renderLayout:function(K,top,L,M){arguments.callee.base.call(this,K,top,L,M);
var O=a;
var N=this.getInsets();
this.__nz.setStyle(s,N.left+O);
this.__nz.setStyle(o,N.top+O);
this.__nz.setStyle(v,(L-N.left-N.right)+O);
this.__nz.setStyle(b,(M-N.top-N.bottom)+O);
},_createContentElement:function(){var F=new qx.html.Iframe(this.__ny);
F.addListener(h,this._onIframeLoad,this);
return F;
},_createBlockerElement:function(){var G=new qx.html.Element(B);
G.setStyle(q,20);
G.setStyle(k,t);
G.setStyle(j,d);
if(qx.core.Variant.isSet(C,p)){G.setStyles({backgroundImage:E+qx.util.ResourceManager.toUri(u)+D,backgroundRepeat:c});
}return G;
},_onIframeLoad:function(e){this.fireNonBubblingEvent(h);
},getWindow:function(){return this.getContentElement().getWindow();
},getDocument:function(){return this.getContentElement().getDocument();
},getBody:function(){return this.getContentElement().getBody();
},getName:function(){return this.getContentElement().getName();
},block:function(){this.__nz.setStyle(j,m);
},release:function(){this.__nz.setStyle(j,d);
},reload:function(){this.getContentElement().reload();
},_applySource:function(H,I){this.getContentElement().setSource(H);
},_applyFrameName:function(P,Q){this.getContentElement().setAttribute(x,P);
}},destruct:function(){this._disposeObjects(z);
qx.event.Registration.removeListener(document.body,i,this.block,this,true);
qx.event.Registration.removeListener(document.body,f,this.release,this,true);
qx.event.Registration.removeListener(document.body,e,this.release,this,true);
}});
})();
(function(){var f="source",e="name",d="qx.html.Iframe",c="qx.event.type.Event",b="iframe";
qx.Class.define(d,{extend:qx.html.Element,construct:function(j){arguments.callee.base.call(this,b);
this._setProperty(f,j);
},events:{"load":c},members:{_applyProperty:function(name,h){arguments.callee.base.call(this,name,h);

if(name==f){var i=this.getDomElement();
qx.bom.Iframe.setSource(i,h);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var a=this.getDomElement();

if(a){return qx.bom.Iframe.getWindow(a);
}else{return null;
}},getDocument:function(){var g=this.getDomElement();

if(g){return qx.bom.Iframe.getDocument(g);
}else{return null;
}},getBody:function(){var k=this.getDomElement();

if(k){return qx.bom.Iframe.getBody(k);
}else{return null;
}},setSource:function(n){this._setProperty(f,n);
return this;
},getSource:function(){return this._getProperty(f);
},setName:function(name){this.setAttribute(e,name);
return this;
},getName:function(){return this.getAttribute(e);
},reload:function(){var m=this.getDomElement();

if(m){var l=this.getSource();
this.setSource(null);
this.setSource(l);
}}}});
})();
(function(){var l="active",k="splitter",j="slider",i="horizontal",h="vertical",g="mousedown",f="mouseout",d="qx.client",c="height",b="row-resize",z="mousemove",y="move",x="maxHeight",w="width",v="_applyOrientation",u="splitpane",t="qx.ui.splitpane.Pane",s="minHeight",r="knob",q="mouseup",o="minWidth",p="losecapture",m="col-resize",n="maxWidth";
qx.Class.define(t,{extend:qx.ui.core.Widget,construct:function(a){arguments.callee.base.call(this);
if(a){this.setOrientation(a);
}else{this.initOrientation();
}this.addListener(g,this._onMouseDown);
this.addListener(q,this._onMouseUp);
this.addListener(z,this._onMouseMove);
this.addListener(f,this._onMouseOut);
this.addListener(p,this._onMouseUp);
},properties:{appearance:{refine:true,init:u},orientation:{init:i,check:[i,h],apply:v}},members:{__nA:null,__nB:null,__nC:null,__nD:null,__nE:null,__nF:null,__nG:null,_createChildControlImpl:function(B){var C;

switch(B){case j:C=new qx.ui.splitpane.Slider(this);
C.exclude();
this._add(C,{type:B});
break;
case k:C=new qx.ui.splitpane.Splitter(this);
this._add(C,{type:B});
C.addListener(y,this._onSplitterMove,this);
break;
}return C||arguments.callee.base.call(this,B);
},_applyOrientation:function(bq,br){var bs=this.getChildControl(j);
var bv=this.getChildControl(k);
this.__nE=bq===i;
var bu=this._getLayout();

if(bu){bu.dispose();
}var bt=bq===h?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(bt);
bv.replaceState(br,bq);
bv.getChildControl(r).replaceState(br,bq);
bs.replaceState(br,bq);
},add:function(ba,bb){if(bb==null){this._add(ba);
}else{this._add(ba,{flex:bb});
}},remove:function(Q){this._remove(Q);
},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}var U=this.getChildControl(k);

if(!U.hasState(l)){return;
}var W=U.getContainerLocation();
var V=this.getContentLocation();
this.__nA=this.__nE?e.getDocumentLeft()-W.left+V.left:e.getDocumentTop()-W.top+V.top;
var Y=this.getChildControl(j);
var X=U.getBounds();
Y.setUserBounds(X.left,X.top,X.width,X.height);
Y.setZIndex(U.getZIndex()+1);
Y.show();
this.__nB=true;
this.capture();
},_onMouseMove:function(e){this.__nC=e.getDocumentLeft();
this.__nD=e.getDocumentTop();
if(this.__nB){this.__nK();
var R=this.getChildControl(j);
var S=this.__nF;

if(this.__nE){R.setDomLeft(S);
}else{R.setDomTop(S);
}}else{this.__nJ();
}},_onMouseOut:function(e){this.__nC=-1;
this.__nD=-1;
this.__nJ();
},_onMouseUp:function(e){if(!this.__nB){return;
}this.__nH();
var A=this.getChildControl(j);
A.exclude();
delete this.__nB;
this.releaseCapture();
this.__nJ();
},_onSplitterMove:function(){this.__nJ();
},__nH:function(){var bm=this.__nF;
var bj=this.__nG;

if(bm==null){return;
}var bo=this._getChildren();
var bn=bo[2];
var bk=bo[3];
var bl=bn.getLayoutProperties().flex;
var bp=bk.getLayoutProperties().flex;
if((bl!=0)&&(bp!=0)){bn.setLayoutProperties({flex:bm});
bk.setLayoutProperties({flex:bj});
}else{if(this.__nE){bn.setWidth(bm);
bk.setWidth(bj);
}else{bn.setHeight(bm);
bk.setHeight(bj);
}}},__nI:function(){var bc=this.getChildControl(k);
var be=bc.getBounds();
var bg=bc.getContainerLocation();
var bd=6;
if(!bg){return;
}var bh=this.__nC;
var bi=be.width;
var bf=bg.left;

if(bi<bd){bf-=Math.floor((bd-bi)/2);
bi=bd;
}
if(bh<bf||bh>(bf+bi)){return false;
}var bh=this.__nD;
var bi=be.height;
var bf=bg.top;

if(bi<bd){bf-=Math.floor((bd-bi)/2);
bi=bd;
}
if(bh<bf||bh>(bf+bi)){return false;
}return true;
},__nJ:qx.core.Variant.select(d,{"opera":function(){var T=this.getChildControl(k);

if(this.__nB||this.__nI()){T.addState(l);
}else if(T.hasState(l)){T.removeState(l);
}},"default":function(){var E=this.getChildControl(k);
var F=this.getApplicationRoot();
if(this.__nB||this.__nI()){var D=this.__nE?m:b;
this.setCursor(D);
F.setGlobalCursor(D);
E.addState(l);
}else if(E.hasState(l)){this.resetCursor();
F.resetGlobalCursor();
E.removeState(l);
}}}),__nK:function(){if(this.__nE){var I=o,P=w,J=n,N=this.__nC;
}else{var I=s,P=c,J=x,N=this.__nD;
}var O=this._getChildren();
var G=O[2].getSizeHint();
var L=O[3].getSizeHint();
var M=O[2].getBounds()[P]+O[3].getBounds()[P];
var K=N-this.__nA;
var H=M-K;
if(K<G[I]){H-=G[I]-K;
K=G[I];
}else if(H<L[I]){K-=L[I]-H;
H=L[I];
}if(K>G[J]){H+=K-G[J];
K=G[J];
}else if(H>L[J]){K+=H-L[J];
H=L[J];
}this.__nF=K;
this.__nG=H;
}}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){arguments.callee.base.call(this);
if(f.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g){var h;

switch(g){case d:h=new qx.ui.basic.Image;
this._add(h);
break;
}return h||arguments.callee.base.call(this,g);
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.VLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var r,u;
var g,f,p,h;

for(var i=0;i<length;i++){r=v[i];
u=r.getLayoutProperties().type;

if(u===b){f=r;
}else if(u===c){p=r;
}else if(!g){g=r;
}else{h=r;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var k=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(k==null){k=1;
}var w=g.getSizeHint();
var n=f.getSizeHint();
var o=h.getSizeHint();
var j=w.height;
var s=n.height;
var t=o.height;

if(x>0&&k>0){var l=x+k;
var m=e-s;
var j=Math.round((m/l)*x);
var t=m-j;
var q=qx.ui.layout.Util.arrangeIdeals(w.minHeight,j,w.maxHeight,o.minHeight,t,o.maxHeight);
j=q.begin;
t=q.end;
}else if(x>0){j=e-s-t;

if(j<w.minHeight){j=w.minHeight;
}
if(j>w.maxHeight){j=w.maxHeight;
}}else if(k>0){t=e-j-s;

if(t<o.minHeight){t=o.minHeight;
}
if(t>o.maxHeight){t=o.maxHeight;
}}g.renderLayout(0,0,d,j);
f.renderLayout(0,j,d,s);
h.renderLayout(0,j+s,d,t);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var B=0,D=0,C=0;
var E=0,F=0,y=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
B+=z.minHeight;
D+=z.height;
C+=z.maxHeight;

if(z.minWidth>E){E=z.minWidth;
}
if(z.width>F){F=z.width;
}
if(z.maxWidth>y){y=z.maxWidth;
}}return {minHeight:B,height:D,maxHeight:C,minWidth:E,width:F,maxWidth:y};
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.HLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var s,u;
var g,f,p,h;

for(var i=0;i<length;i++){s=v[i];
u=s.getLayoutProperties().type;

if(u===b){f=s;
}else if(u===c){p=s;
}else if(!g){g=s;
}else{h=s;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var j=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(j==null){j=1;
}var w=g.getSizeHint();
var m=f.getSizeHint();
var o=h.getSizeHint();
var t=w.width;
var r=m.width;
var q=o.width;

if(x>0&&j>0){var k=x+j;
var l=d-r;
var t=Math.round((l/k)*x);
var q=l-t;
var n=qx.ui.layout.Util.arrangeIdeals(w.minWidth,t,w.maxWidth,o.minWidth,q,o.maxWidth);
t=n.begin;
q=n.end;
}else if(x>0){t=d-r-q;

if(t<w.minWidth){t=w.minWidth;
}
if(t>w.maxWidth){t=w.maxWidth;
}}else if(j>0){q=d-t-r;

if(q<o.minWidth){q=o.minWidth;
}
if(q>o.maxWidth){q=o.maxWidth;
}}g.renderLayout(0,0,t,e);
f.renderLayout(t,0,r,e);
h.renderLayout(t+r,0,q,e);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var E=0,F=0,y=0;
var B=0,D=0,C=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
E+=z.minWidth;
F+=z.width;
y+=z.maxWidth;

if(z.minHeight>B){B=z.minHeight;
}
if(z.height>D){D=z.height;
}
if(z.maxHeight>C){C=z.maxHeight;
}}return {minWidth:E,width:F,maxWidth:y,minHeight:B,height:D,maxHeight:C};
}}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){arguments.callee.base.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var y="pressed",x="abandoned",w="hovered",v="checked",u="Space",t="String",s="Enter",r="mouseup",q="mousedown",p="Boolean",i="changeName",o="mouseover",l="mouseout",h="changeValue",g="_applyChecked",k="qx.ui.form.ToggleButton",j="changeChecked",m="keydown",f="button",n="keyup";
qx.Class.define(k,{extend:qx.ui.basic.Atom,implement:qx.ui.form.IFormElement,construct:function(c,d){arguments.callee.base.call(this,c,d);
this.addListener(o,this._onMouseOver);
this.addListener(l,this._onMouseOut);
this.addListener(q,this._onMouseDown);
this.addListener(r,this._onMouseUp);
this.addListener(m,this._onKeyDown);
this.addListener(n,this._onKeyUp);
},properties:{appearance:{refine:true,init:f},checked:{check:p,init:false,apply:g,event:j},focusable:{refine:true,init:true},name:{check:t,nullable:true,event:i},value:{check:t,nullable:true,event:h}},members:{_applyChecked:function(a,b){a?this.addState(v):this.removeState(v);
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(w);

if(this.hasState(x)){this.removeState(x);
this.addState(y);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(w);

if(this.hasState(y)){if(!this.getChecked()){this.removeState(y);
}this.addState(x);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(x);
this.addState(y);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(x)){this.removeState(x);
}else if(this.hasState(y)){this.toggleChecked();
}this.removeState(y);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case s:case u:this.removeState(x);
this.addState(y);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(y)){return;
}
switch(e.getKeyIdentifier()){case s:case u:this.removeState(x);
this.toggleChecked();
this.removeState(y);
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

