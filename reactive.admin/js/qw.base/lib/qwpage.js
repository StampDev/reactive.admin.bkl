/// <reference path="qwtypes.tsx" />
/// <reference path="qwview.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react-bootstrap', './qwview'], function (require, exports, rb, qv) {
    "use strict";
    var b = rb;
    var QwPage = (function (_super) {
        __extends(QwPage, _super);
        function QwPage() {
            _super.apply(this, arguments);
        }
        return QwPage;
    }(qv.QwView));
    exports.QwPage = QwPage;
    var QwAppMenus = (function (_super) {
        __extends(QwAppMenus, _super);
        function QwAppMenus() {
            _super.apply(this, arguments);
        }
        return QwAppMenus;
    }(qv.QwView));
    exports.QwAppMenus = QwAppMenus;
    var QwExplorer = (function (_super) {
        __extends(QwExplorer, _super);
        function QwExplorer() {
            _super.apply(this, arguments);
        }
        QwExplorer.prototype.render = function () {
            var ui;
            var html;
            return html;
        };
        return QwExplorer;
    }(qv.QwView));
    exports.QwExplorer = QwExplorer;
});
//# sourceMappingURL=C:/Developper/reactive.admin.bkl/reactive.admin/js/qw.base/lib/qwpage.js.map