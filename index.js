'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var ReactDOM = require('react-dom');

var _react2 = _interopRequireDefault(_react);

var _jsImageZoom = require('js-image-zoom');

var _jsImageZoom2 = _interopRequireDefault(_jsImageZoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactImageZoom = function (_Component) {
    _inherits(ReactImageZoom, _Component);

    function ReactImageZoom() {
        _classCallCheck(this, ReactImageZoom);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactImageZoom).apply(this, arguments));
    }

    _createClass(ReactImageZoom, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.imageZoom = new _jsImageZoom2.default(this.refs.container, this.props);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.imageZoom.kill();
            this.imageZoom = void 0;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react.createElement('div', { id: 'container' });
        }
    }]);

    return ReactImageZoom;
}(_react.Component);

ReactImageZoom.propTypes = {
    img: _react.PropTypes.string.isRequired,
    height: _react.PropTypes.number.isRequired,
    width: _react.PropTypes.number.isRequired
};

exports.default = ReactImageZoom;
module.exports = exports['default'];
