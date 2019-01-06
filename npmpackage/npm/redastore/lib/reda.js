"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProviderCom = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.higrCom = higrCom;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContextTheme = (0, _react.createContext)({});

var ProviderCom = exports.ProviderCom = function (_Component) {
    _inherits(ProviderCom, _Component);

    function ProviderCom() {
        _classCallCheck(this, ProviderCom);

        return _possibleConstructorReturn(this, (ProviderCom.__proto__ || Object.getPrototypeOf(ProviderCom)).apply(this, arguments));
    }

    _createClass(ProviderCom, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                ContextTheme.Provider,
                { value: this.props.data },
                this.props.children
            );
        }
    }]);

    return ProviderCom;
}(_react.Component);

//用高阶组件处理contex传值问题


function higrCom(Com) {
    return function (_Component2) {
        _inherits(_class, _Component2);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "render",
            value: function render() {
                return _react2.default.createElement(
                    ContextTheme.Consumer,
                    null,
                    function (value) {
                        return _react2.default.createElement(Com, value);
                    }
                );
            }
        }]);

        return _class;
    }(_react.Component);
}