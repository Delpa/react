(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./components/containers/SearchItem/index');

},{"./components/containers/SearchItem/index":3}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Seeker = require('../../misc/Seeker');

var _Seeker2 = _interopRequireDefault(_Seeker);

var _List = require('../../misc/List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchItem = function (_Component) {
    _inherits(SearchItem, _Component);

    function SearchItem(props) {
        _classCallCheck(this, SearchItem);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchItem).call(this, props));

        _this.state = {
            search_value: "",
            data: _this.props.data,
            new_data: []

        };
        _this.changeValue = _this.changeValue.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        _this.search = _this.search.bind(_this);
        return _this;
    }

    _createClass(SearchItem, [{
        key: 'search',
        value: function search(text) {
            console.log(text);
            var new_data = _lodash2.default.filter(_lodash2.default.map(this.state.data, function (value) {
                return value.nombre;
            }), function (value) {
                return _lodash2.default.includes(value, text);
            });console.log(new_data);
            return new_data;
        }
    }, {
        key: 'onChange',
        value: function onChange(e) {
            this.setState({ search_value: e.target.value, new_data: this.search(e.target.value) });
        }
    }, {
        key: 'changeValue',
        value: function changeValue() {
            this.setState({ search_value: "", new_data: [] });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state;
            var search_value = _state.search_value;
            var new_data = _state.new_data;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    search_value
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.changeValue },
                    'reset'
                ),
                _react2.default.createElement(_Seeker2.default, { value: search_value, onChange: this.onChange }),
                _react2.default.createElement(_List2.default, { data: new_data })
            );
        }
    }]);

    return SearchItem;
}(_react.Component);

exports.default = SearchItem;

},{"../../misc/List":4,"../../misc/Seeker":5,"lodash":"lodash","react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SearchItem = require('./SearchItem');

var _SearchItem2 = _interopRequireDefault(_SearchItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{ nombre: 'Gianluca Candiotti' }, { nombre: 'Carlos Olórtiga' }, { nombre: 'Junior Claudio' }, { nombre: 'leila lazo' }];

exports.default = function (lib) {
    lib();
}(function () {
    _reactDom2.default.render(_react2.default.createElement(_SearchItem2.default, { data: data }), document.getElementById('mount-point'));
});

//export default ReactDOM.render(<SearchItem/>,document.getElementById('mount-point'));

},{"./SearchItem":2,"react":"react","react-dom":"react-dom"}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
    _inherits(List, _Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var data = this.props.data;

            var item = function item(data, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i },
                    data
                );
            };
            return _react2.default.createElement(
                'lu',
                null,
                data.map(item)
            );
        }
    }]);

    return List;
}(_react.Component);

exports.default = List;

},{"react":"react"}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Seeker = function (_Component) {
    _inherits(Seeker, _Component);

    function Seeker() {
        _classCallCheck(this, Seeker);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Seeker).apply(this, arguments));
    }

    _createClass(Seeker, [{
        key: "render",
        value: function render() {
            var _props = this.props;
            var value = _props.value;
            var onChange = _props.onChange;

            return _react2.default.createElement("input", { type: "text", value: value, onChange: onChange });
        }
    }]);

    return Seeker;
}(_react.Component);

exports.default = Seeker;

},{"react":"react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9TZWFyY2hJdGVtL1NlYXJjaEl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9jb250YWluZXJzL1NlYXJjaEl0ZW0vaW5kZXguanMiLCJzcmMvanMvY29tcG9uZW50cy9taXNjL0xpc3QuanMiLCJzcmMvanMvY29tcG9uZW50cy9taXNjL1NlZWtlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRXFCLFVBQVU7Y0FBVixVQUFVOztBQUMzQixhQURpQixVQUFVLENBQ2YsS0FBSyxFQUFDOzhCQURELFVBQVU7OzJFQUFWLFVBQVUsYUFFakIsS0FBSzs7QUFDWCxjQUFLLEtBQUssR0FBQztBQUNQLHdCQUFZLEVBQUUsRUFBRTtBQUNoQixnQkFBSSxFQUFFLE1BQUssS0FBSyxDQUFDLElBQUk7QUFDckIsb0JBQVEsRUFBRSxFQUFFOztTQUVmLENBQUM7QUFDRixjQUFLLFdBQVcsR0FBRSxNQUFLLFdBQVcsQ0FBQyxJQUFJLE9BQU0sQ0FBQztBQUM5QyxjQUFLLFFBQVEsR0FBRSxNQUFLLFFBQVEsQ0FBQyxJQUFJLE9BQU0sQ0FBQztBQUN4QyxjQUFLLE1BQU0sR0FBRSxNQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU0sQ0FBQzs7S0FDdkM7O2lCQVpnQixVQUFVOzsrQkFhcEIsSUFBSSxFQUFDO0FBQ1IsbUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEIsZ0JBQU0sUUFBUSxHQUFHLGlCQUFFLE1BQU0sQ0FBQyxpQkFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBQSxLQUFLO3VCQUFJLEtBQUssQ0FBQyxNQUFNO2FBQUEsQ0FBQyxFQUFFLFVBQUEsS0FBSzt1QkFBSSxpQkFBRSxRQUFRLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQzthQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hJLG1CQUFPLFFBQVEsQ0FBQztTQUNuQjs7O2lDQUNRLENBQUMsRUFBQztBQUNQLGdCQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ3ZGOzs7c0NBQ2E7QUFDVixnQkFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFlBQVksRUFBRSxFQUFFLEVBQUcsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFFLENBQUM7U0FDckQ7OztpQ0FDUTt5QkFJRCxJQUFJLENBQUMsS0FBSztnQkFGVixZQUFZLFVBQVosWUFBWTtnQkFDWixRQUFRLFVBQVIsUUFBUTs7QUFFWixtQkFDSTs7O2dCQUNJOzs7b0JBQUssWUFBWTtpQkFBTTtnQkFDdkI7O3NCQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxBQUFDOztpQkFBZTtnQkFDakQsa0RBQVEsS0FBSyxFQUFFLFlBQVksQUFBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxBQUFDLEdBQUU7Z0JBQ3ZELGdEQUFNLElBQUksRUFBRSxRQUFRLEFBQUMsR0FBRTthQUVyQixDQUNSO1NBQ0w7OztXQXRDZ0IsVUFBVTtTQUxoQixTQUFTOztrQkFLSCxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0QzQixJQUFJLElBQUksR0FBRyxDQUNQLEVBQUMsTUFBTSxFQUFFLG9CQUFvQixFQUFDLEVBQzlCLEVBQUMsTUFBTSxFQUFFLGlCQUFpQixFQUFDLEVBQzNCLEVBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFDLEVBQzFCLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBQyxDQUN6QixDQUFDOztrQkFDVSxVQUFVLEdBQUcsRUFBQztBQUMxQixPQUFHLEVBQUUsQ0FBQztDQUNULENBQUMsWUFBVTtBQUNSLHVCQUFTLE1BQU0sQ0FBQyxzREFBWSxJQUFJLEVBQUcsSUFBSSxBQUFDLEdBQUUsRUFBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Q0FDdEYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1ptQixJQUFJO2NBQUosSUFBSTs7YUFBSixJQUFJOzhCQUFKLElBQUk7O3NFQUFKLElBQUk7OztpQkFBSixJQUFJOztpQ0FFWjtnQkFFRCxJQUFJLEdBQ0osSUFBSSxDQUFDLEtBQUssQ0FEVixJQUFJOztBQUVSLGdCQUFJLElBQUksR0FBRyxTQUFQLElBQUksQ0FBWSxJQUFJLEVBQUUsQ0FBQyxFQUFDO0FBQ3hCLHVCQUFROztzQkFBSSxHQUFHLEVBQUUsQ0FBQyxBQUFDO29CQUFFLElBQUk7aUJBQU0sQ0FBRTthQUNwQyxDQUFDO0FBQ0YsbUJBQU87OztnQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUFNLENBQzlCO1NBQ0w7OztXQVhnQixJQUFJO1NBRlYsU0FBUzs7a0JBRUgsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBSixNQUFNO2NBQU4sTUFBTTs7YUFBTixNQUFNOzhCQUFOLE1BQU07O3NFQUFOLE1BQU07OztpQkFBTixNQUFNOztpQ0FDZDt5QkFJRCxJQUFJLENBQUMsS0FBSztnQkFGVixLQUFLLFVBQUwsS0FBSztnQkFDTCxRQUFRLFVBQVIsUUFBUTs7QUFFWixtQkFDSSx5Q0FBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxLQUFLLEFBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxBQUFDLEdBQUUsQ0FDeEQ7U0FDTDs7O1dBVGdCLE1BQU07U0FGWixTQUFTOztrQkFFSCxNQUFNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbnRhaW5lcnMvU2VhcmNoSXRlbS9pbmRleCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKaGNIQXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2VzExOSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBTZWVrZXIgZnJvbSAnLi4vLi4vbWlzYy9TZWVrZXInO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vLi4vbWlzYy9MaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoSXRlbSBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBzZWFyY2hfdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG4gICAgICAgICAgICBuZXdfZGF0YTogW10sXG4gICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZT0gdGhpcy5jaGFuZ2VWYWx1ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VhcmNoPSB0aGlzLnNlYXJjaC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBzZWFyY2godGV4dCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICAgICAgICBjb25zdCBuZXdfZGF0YSA9IF8uZmlsdGVyKF8ubWFwKHRoaXMuc3RhdGUuZGF0YSwgdmFsdWUgPT4gdmFsdWUubm9tYnJlKSwgdmFsdWUgPT4gXy5pbmNsdWRlcyh2YWx1ZSx0ZXh0KSk7Y29uc29sZS5sb2cobmV3X2RhdGEpO1xuICAgICAgICByZXR1cm4gbmV3X2RhdGE7XG4gICAgfVxuICAgIG9uQ2hhbmdlKGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hfdmFsdWU6IGUudGFyZ2V0LnZhbHVlLG5ld19kYXRhOiB0aGlzLnNlYXJjaChlLnRhcmdldC52YWx1ZSl9KTtcbiAgICB9XG4gICAgY2hhbmdlVmFsdWUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaF92YWx1ZTogXCJcIiAsIG5ld19kYXRhOiBbXX0gKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBzZWFyY2hfdmFsdWUsXG4gICAgICAgICAgICBuZXdfZGF0YVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+e3NlYXJjaF92YWx1ZX08L2gyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jaGFuZ2VWYWx1ZX0+cmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8U2Vla2VyIHZhbHVlPXtzZWFyY2hfdmFsdWV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPExpc3QgZGF0YT17bmV3X2RhdGF9Lz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBTZWFyY2hJdGVtIGZyb20gJy4vU2VhcmNoSXRlbSc7XG5cbiAgICB2YXIgZGF0YSA9IFtcbiAgICAgICAge25vbWJyZTogJ0dpYW5sdWNhIENhbmRpb3R0aSd9LFxuICAgICAgICB7bm9tYnJlOiAnQ2FybG9zIE9sw7NydGlnYSd9LFxuICAgICAgICB7bm9tYnJlOiAnSnVuaW9yIENsYXVkaW8nfSxcbiAgICAgICAge25vbWJyZTogJ2xlaWxhIGxhem8nfVxuICAgIF07XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGxpYil7XG4gICAgbGliKCk7XG59KGZ1bmN0aW9uKCl7XG4gICAgUmVhY3RET00ucmVuZGVyKDxTZWFyY2hJdGVtIGRhdGEgPXtkYXRhfS8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3VudC1wb2ludCcpKTtcbn0pKTtcblxuXG5cbi8vZXhwb3J0IGRlZmF1bHQgUmVhY3RET00ucmVuZGVyKDxTZWFyY2hJdGVtLz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50LXBvaW50JykpO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgaXRlbSA9IGZ1bmN0aW9uKGRhdGEsIGkpe1xuICAgICAgICAgICAgcmV0dXJuICg8bGkga2V5PXtpfT57ZGF0YX08L2xpPik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybig8bHU+e2RhdGEubWFwKGl0ZW0pfTwvbHU+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlZWtlciBleHRlbmRzIENvbXBvbmVudHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb25DaGFuZ2VcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfS8+XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ==
