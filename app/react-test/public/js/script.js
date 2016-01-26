(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./components/containers/SelectCinemaSeats/index');

},{"./components/containers/SelectCinemaSeats/index":4}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('../../misc/List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectCinemaSeats = function (_Component) {
	_inherits(SelectCinemaSeats, _Component);

	function SelectCinemaSeats(props) {
		_classCallCheck(this, SelectCinemaSeats);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectCinemaSeats).call(this, props));

		_this.state = {
			fechaSelecionada: 0,
			horarioSelecionada: 0,
			butacasSelecionada: [],
			precioTotal: 0
		};
		_this.selecionarFecha = _this.selecionarFecha.bind(_this);
		_this.selecionarHorario = _this.selecionarHorario.bind(_this);
		_this.selecionarButacas = _this.selecionarButacas.bind(_this);
		return _this;
	}

	_createClass(SelectCinemaSeats, [{
		key: 'selecionarFecha',
		value: function selecionarFecha(key) {
			this.setState({ fechaSelecionada: key });
		}
	}, {
		key: 'selecionarHorario',
		value: function selecionarHorario(key) {
			this.setState({ horarioSelecionada: key });
		}
	}, {
		key: 'selecionarButacas',
		value: function selecionarButacas(value, action) {
			var temp_butacasSelecionadas = this.state.butacasSelecionada;
			if (action == true) {
				temp_butacasSelecionadas = _.concat(temp_butacasSelecionadas, value);
			} else {
				temp_butacasSelecionadas = _.pull(temp_butacasSelecionadas, value);
			}

			var cantidad = temp_butacasSelecionadas.length;
			var precio = this.props.precio;
			this.setState({ butacasSelecionada: temp_butacasSelecionadas });
			this.setState({ precioTotal: cantidad * precio });
		}
	}, {
		key: 'render',
		value: function render() {
			var view = this.props.view;

			return _react2.default.createElement(
				'div',
				null,
				view(this)
			);
		}
	}]);

	return SelectCinemaSeats;
}(_react.Component);

exports.default = SelectCinemaSeats;

},{"../../misc/List":5,"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('../../misc/List');

var _List2 = _interopRequireDefault(_List);

var _SeatsList = require('../../misc/SeatsList');

var _SeatsList2 = _interopRequireDefault(_SeatsList);

var _Select = require('../../misc/Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (component) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_Select2.default, { items: component.props.fechasDisponible, res: component.selecionarFecha }),
		_react2.default.createElement(_Select2.default, { items: component.props.horarioDisponible, res: component.selecionarHorario }),
		_react2.default.createElement(_List2.default, { items: component.props.leyenda }),
		_react2.default.createElement(_SeatsList2.default, { items: component.props.butacas, res: component.selecionarButacas, selected: component.state.butacasSelecionada }),
		_react2.default.createElement(
			'span',
			null,
			'Total ',
			_react2.default.createElement(
				'span',
				null,
				'$',
				component.state.precioTotal
			)
		),
		_react2.default.createElement(
			'button',
			null,
			'Buy Now'
		),
		_react2.default.createElement(
			'a',
			{ href: '#' },
			'Terms & Conditions'
		)
	);
};

},{"../../misc/List":5,"../../misc/SeatsList":7,"../../misc/Select":8,"react":"react"}],4:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SelectCinemaSeats = require('./SelectCinemaSeats');

var _SelectCinemaSeats2 = _interopRequireDefault(_SelectCinemaSeats);

var _SelectCinemaSeats_view = require('./SelectCinemaSeats_view2');

var _SelectCinemaSeats_view2 = _interopRequireDefault(_SelectCinemaSeats_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fechasDisponible = ["January, 21", "January, 22", "January, 23"];
var horarioDisponible = ["14:00", "16:10", "16:00", "17:50", "18:00"];
var leyenda = ["libre", "ocupado", "selecionado"];
var butacas = [{
	habilitado: true,
	codigo: "a1",
	seleccionado: false,
	x: 0, y: 0
}, {
	habilitado: false,
	codigo: "a2",
	seleccionado: false,
	x: 0, y: 2
}, {
	habilitado: true,
	codigo: "a3",
	seleccionado: false,
	x: 0, y: 1
}, {
	habilitado: true,
	codigo: "b1",
	seleccionado: false,
	x: 1, y: 0
}, {
	habilitado: false,
	codigo: "b2",
	seleccionado: false,
	x: 1, y: 1
}, {
	habilitado: true,
	codigo: "b3",
	seleccionado: false,
	x: 1, y: 2
}, {
	habilitado: true,
	codigo: "b4",
	seleccionado: false,
	x: 1, y: 3
}, {
	habilitado: false,
	codigo: "c1",
	seleccionado: false,
	x: 2, y: 0
}, {
	habilitado: true,
	codigo: "c2",
	seleccionado: false,
	x: 2, y: 1
}];
var precio = 25;

(function (mount) {
	mount();
})(function () {
	_reactDom2.default.render(_react2.default.createElement(_SelectCinemaSeats2.default, { view: _SelectCinemaSeats_view2.default,
		fechasDisponible: fechasDisponible,
		horarioDisponible: horarioDisponible,
		leyenda: leyenda,
		butacas: butacas,
		precio: precio }), document.getElementById('test-mount-point'));
});

},{"./SelectCinemaSeats":2,"./SelectCinemaSeats_view2":3,"react":"react","react-dom":"react-dom"}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

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
            var _props = this.props;
            var items = _props.items;
            var res = _props.res;

            var mapped_item = function mapped_item(item, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i, onClick: function onClick() {
                            return res(i);
                        } },
                    item
                );
            };

            return _react2.default.createElement(
                'lu',
                null,
                _lodash2.default.map(items, mapped_item)
            );
        }
    }]);

    return List;
}(_react.Component);

exports.default = List;

List.defaultProps = { res: function res() {
        return '';
    } };

},{"lodash":"lodash","react":"react"}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Seats = function (_Component) {
	_inherits(Seats, _Component);

	function Seats(props) {
		_classCallCheck(this, Seats);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Seats).call(this, props));

		_this.toggleState = _this.toggleState.bind(_this);

		return _this;
	}

	_createClass(Seats, [{
		key: 'toggleState',
		value: function toggleState() {
			if (this.props.enable == true) {
				if (this.props.isSelected == false) {
					this.props.res(this.props.code, true);
				} else {
					this.props.res(this.props.code, false);
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var code = _props.code;
			var isSelected = _props.isSelected;

			return _react2.default.createElement(
				'li',
				{ onClick: this.toggleState },
				code,
				' ',
				isSelected.toString()
			);
		}
	}]);

	return Seats;
}(_react.Component);

exports.default = Seats;

Seats.defaultProps = { res: function res() {
		return '';
	} };

},{"lodash":"lodash","react":"react"}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Seats = require('./Seats');

var _Seats2 = _interopRequireDefault(_Seats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SeatsList = function (_Component) {
    _inherits(SeatsList, _Component);

    function SeatsList() {
        _classCallCheck(this, SeatsList);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SeatsList).apply(this, arguments));
    }

    _createClass(SeatsList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var items = _props.items;
            var res = _props.res;

            var mapped_item = function mapped_item(item, i) {
                return _react2.default.createElement(_Seats2.default, { key: i, enable: item.habilitado, code: item.codigo, isSelected: _lodash2.default.includes(_this2.props.selected, item.codigo), res: res });
            };

            return _react2.default.createElement(
                'lu',
                null,
                _lodash2.default.map(items, mapped_item)
            );
        }
    }]);

    return SeatsList;
}(_react.Component);

exports.default = SeatsList;

SeatsList.defaultProps = { res: function res() {
        return '';
    } };

},{"./Seats":6,"lodash":"lodash","react":"react"}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
    _inherits(Select, _Component);

    function Select() {
        _classCallCheck(this, Select);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Select).apply(this, arguments));
    }

    _createClass(Select, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var items = _props.items;
            var res = _props.res;

            var mapped_item = function mapped_item(item, i) {
                return _react2.default.createElement(
                    'option',
                    { value: i, key: i },
                    item
                );
            };

            return _react2.default.createElement(
                'select',
                { onChange: function onChange(e) {
                        return res(e.target.value);
                    } },
                _lodash2.default.map(items, mapped_item)
            );
        }
    }]);

    return Select;
}(_react.Component);

exports.default = Select;

Select.defaultProps = { res: function res() {
        return '';
    } };

},{"lodash":"lodash","react":"react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9TZWxlY3RDaW5lbWFTZWF0cy9TZWxlY3RDaW5lbWFTZWF0cy5qcyIsInNyYy9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvU2VsZWN0Q2luZW1hU2VhdHMvU2VsZWN0Q2luZW1hU2VhdHNfdmlldzIuanMiLCJzcmMvanMvY29tcG9uZW50cy9jb250YWluZXJzL1NlbGVjdENpbmVtYVNlYXRzL2luZGV4LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWlzYy9MaXN0LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWlzYy9TZWF0cy5qcyIsInNyYy9qcy9jb21wb25lbnRzL21pc2MvU2VhdHNMaXN0LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWlzYy9TZWxlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBcUI7OztBQUNwQixVQURvQixpQkFDcEIsQ0FBWSxLQUFaLEVBQWtCO3dCQURFLG1CQUNGOztxRUFERSw4QkFFYixRQURXOztBQUVqQixRQUFLLEtBQUwsR0FBVztBQUNWLHFCQUFpQixDQUFqQjtBQUNBLHVCQUFtQixDQUFuQjtBQUNBLHVCQUFtQixFQUFuQjtBQUNBLGdCQUFZLENBQVo7R0FKRCxDQUZpQjtBQVFqQixRQUFLLGVBQUwsR0FBc0IsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXRCLENBUmlCO0FBU2pCLFFBQUssaUJBQUwsR0FBd0IsTUFBSyxpQkFBTCxDQUF1QixJQUF2QixPQUF4QixDQVRpQjtBQVVqQixRQUFLLGlCQUFMLEdBQXdCLE1BQUssaUJBQUwsQ0FBdUIsSUFBdkIsT0FBeEIsQ0FWaUI7O0VBQWxCOztjQURvQjs7a0NBYUosS0FBSTtBQUNuQixRQUFLLFFBQUwsQ0FBYyxFQUFDLGtC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RixDQUFNLEtBQU4sRUFBWSxXQUFaLENBQUw7YUFBUCxDQU5LOzs7O1dBRFE7Ozs7O0FBV3JCLFVBQVUsWUFBVixHQUF5QixFQUFDLEtBQUk7ZUFBSTtLQUFKLEVBQTlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNacUI7Ozs7Ozs7Ozs7O2lDQUNSO3lCQUNlLEtBQUssS0FBTCxDQURmO2dCQUNFLHFCQURGO2dCQUNRLGlCQURSOztBQUdMLGdCQUFJLGNBQWMsU0FBZCxXQUFjLENBQUMsSUFBRCxFQUFPLENBQVA7dUJBQWM7O3NCQUFRLE9BQU8sQ0FBUCxFQUFVLEtBQUssQ0FBTCxFQUFsQjtvQkFBNEIsSUFBNUI7O2FBQWQsQ0FIYjs7QUFLTCxtQkFBTzs7a0JBQVEsVUFBVSxrQkFBQyxDQUFEOytCQUFPLElBQUksRUFBRSxNQUFGLENBQVMsS0FBVDtxQkFBWCxFQUFsQjtnQkFBZ0QsaUJBQUUsR0FBRixDQUFNLEtBQU4sRUFBWSxXQUFaLENBQWhEO2FBQVAsQ0FMSzs7OztXQURROzs7OztBQVNyQixPQUFPLFlBQVAsR0FBc0IsRUFBQyxLQUFJO2VBQUk7S0FBSixFQUEzQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vY29tcG9uZW50cy9jb250YWluZXJzL1NlbGVjdENpbmVtYVNlYXRzL2luZGV4Jyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpoY0hBdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5IiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0IGZyb20gJy4uLy4uL21pc2MvTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdENpbmVtYVNlYXRzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlPXtcblx0XHRcdGZlY2hhU2VsZWNpb25hZGE6MCxcblx0XHRcdGhvcmFyaW9TZWxlY2lvbmFkYTowLFxuXHRcdFx0YnV0YWNhc1NlbGVjaW9uYWRhOltdLFxuXHRcdFx0cHJlY2lvVG90YWw6MFxuXHRcdH07XG5cdFx0dGhpcy5zZWxlY2lvbmFyRmVjaGE9IHRoaXMuc2VsZWNpb25hckZlY2hhLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZWxlY2lvbmFySG9yYXJpbz0gdGhpcy5zZWxlY2lvbmFySG9yYXJpby5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2VsZWNpb25hckJ1dGFjYXM9IHRoaXMuc2VsZWNpb25hckJ1dGFjYXMuYmluZCh0aGlzKTtcblx0fVxuXHRzZWxlY2lvbmFyRmVjaGEoa2V5KXtcblx0XHR0aGlzLnNldFN0YXRlKHtmZWNoYVNlbGVjaW9uYWRhOmtleX0pO1xuXHR9XG5cdHNlbGVjaW9uYXJIb3JhcmlvKGtleSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7aG9yYXJpb1NlbGVjaW9uYWRhOmtleX0pO1xuXHR9XG5cdHNlbGVjaW9uYXJCdXRhY2FzKHZhbHVlLGFjdGlvbil7XG5cdFx0bGV0IHRlbXBfYnV0YWNhc1NlbGVjaW9uYWRhcz10aGlzLnN0YXRlLmJ1dGFjYXNTZWxlY2lvbmFkYTtcblx0XHRpZihhY3Rpb249PXRydWUpe1xuXHRcdFx0dGVtcF9idXRhY2FzU2VsZWNpb25hZGFzPV8uY29uY2F0KHRlbXBfYnV0YWNhc1NlbGVjaW9uYWRhcyx2YWx1ZSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0ZW1wX2J1dGFjYXNTZWxlY2lvbmFkYXM9Xy5wdWxsKHRlbXBfYnV0YWNhc1NlbGVjaW9uYWRhcyx2YWx1ZSk7XG5cdFx0fVxuXHRcdFxuXHRcdGxldCBjYW50aWRhZCA9IHRlbXBfYnV0YWNhc1NlbGVjaW9uYWRhcy5sZW5ndGg7XG5cdFx0bGV0IHByZWNpbyA9IHRoaXMucHJvcHMucHJlY2lvO1xuXHRcdHRoaXMuc2V0U3RhdGUoe2J1dGFjYXNTZWxlY2lvbmFkYTp0ZW1wX2J1dGFjYXNTZWxlY2lvbmFkYXN9KTtcblx0XHR0aGlzLnNldFN0YXRlKHtwcmVjaW9Ub3RhbDooY2FudGlkYWQqcHJlY2lvKX0pO1xuXHR9XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHtcbiAgICAgICAgICAgIHZpZXdcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuICg8ZGl2Pnt2aWV3KHRoaXMpfTwvZGl2Pik7XG5cdH1cbn0iLCJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vLi4vbWlzYy9MaXN0JztcbmltcG9ydCBTZWF0c0xpc3QgZnJvbSAnLi4vLi4vbWlzYy9TZWF0c0xpc3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi8uLi9taXNjL1NlbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb21wb25lbnQpID0+IChcblx0PGRpdj5cblx0XHQ8U2VsZWN0IGl0ZW1zPXtjb21wb25lbnQucHJvcHMuZmVjaGFzRGlzcG9uaWJsZX0gcmVzPXtjb21wb25lbnQuc2VsZWNpb25hckZlY2hhfS8+XG5cdFx0PFNlbGVjdCBpdGVtcz17Y29tcG9uZW50LnByb3BzLmhvcmFyaW9EaXNwb25pYmxlfSByZXM9e2NvbXBvbmVudC5zZWxlY2lvbmFySG9yYXJpb30vPlxuXHRcdDxMaXN0IGl0ZW1zPXtjb21wb25lbnQucHJvcHMubGV5ZW5kYX0vPlxuXHRcdDxTZWF0c0xpc3QgaXRlbXM9e2NvbXBvbmVudC5wcm9wcy5idXRhY2FzfSByZXM9e2NvbXBvbmVudC5zZWxlY2lvbmFyQnV0YWNhc30gc2VsZWN0ZWQ9e2NvbXBvbmVudC5zdGF0ZS5idXRhY2FzU2VsZWNpb25hZGF9IC8+XG5cdFx0PHNwYW4+VG90YWwgPHNwYW4+JHtjb21wb25lbnQuc3RhdGUucHJlY2lvVG90YWx9PC9zcGFuPjwvc3Bhbj5cblx0XHQ8YnV0dG9uPkJ1eSBOb3c8L2J1dHRvbj5cblx0XHQ8YSBocmVmPVwiI1wiPlRlcm1zICYgQ29uZGl0aW9uczwvYT5cblx0PC9kaXY+XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENpbmVtYVNlYXRzIGZyb20gJy4vU2VsZWN0Q2luZW1hU2VhdHMnO1xuaW1wb3J0IENpbmVtYVNlYXRzX3ZpZXcgZnJvbSAnLi9TZWxlY3RDaW5lbWFTZWF0c192aWV3Mic7XG5cblxudmFyIGZlY2hhc0Rpc3BvbmlibGUgPSBbXCJKYW51YXJ5LCAyMVwiLFwiSmFudWFyeSwgMjJcIixcIkphbnVhcnksIDIzXCJdO1xudmFyIGhvcmFyaW9EaXNwb25pYmxlID0gW1wiMTQ6MDBcIixcIjE2OjEwXCIsXCIxNjowMFwiLFwiMTc6NTBcIixcIjE4OjAwXCJdO1xudmFyIGxleWVuZGEgPSBbXCJsaWJyZVwiLFwib2N1cGFkb1wiLFwic2VsZWNpb25hZG9cIl07XG52YXIgYnV0YWNhcyA9IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGhhYmlsaXRhZG86dHJ1ZSxcblx0XHRcdFx0XHRjb2RpZ286XCJhMVwiLFxuXHRcdFx0XHRcdHNlbGVjY2lvbmFkbzpmYWxzZSxcblx0XHRcdFx0XHR4OjAseTowXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRoYWJpbGl0YWRvOmZhbHNlLFxuXHRcdFx0XHRcdGNvZGlnbzpcImEyXCIsXG5cdFx0XHRcdFx0c2VsZWNjaW9uYWRvOmZhbHNlLFxuXHRcdFx0XHRcdHg6MCx5OjJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGhhYmlsaXRhZG86dHJ1ZSxcblx0XHRcdFx0XHRjb2RpZ286XCJhM1wiLFxuXHRcdFx0XHRcdHNlbGVjY2lvbmFkbzpmYWxzZSxcblx0XHRcdFx0XHR4OjAseToxXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRoYWJpbGl0YWRvOnRydWUsXG5cdFx0XHRcdFx0Y29kaWdvOlwiYjFcIixcblx0XHRcdFx0XHRzZWxlY2Npb25hZG86ZmFsc2UsXG5cdFx0XHRcdFx0eDoxLHk6MFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aGFiaWxpdGFkbzpmYWxzZSxcblx0XHRcdFx0XHRjb2RpZ286XCJiMlwiLFxuXHRcdFx0XHRcdHNlbGVjY2lvbmFkbzpmYWxzZSxcblx0XHRcdFx0XHR4OjEseToxXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRoYWJpbGl0YWRvOnRydWUsXG5cdFx0XHRcdFx0Y29kaWdvOlwiYjNcIixcblx0XHRcdFx0XHRzZWxlY2Npb25hZG86ZmFsc2UsXG5cdFx0XHRcdFx0eDoxLHk6MlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aGFiaWxpdGFkbzp0cnVlLFxuXHRcdFx0XHRcdGNvZGlnbzpcImI0XCIsXG5cdFx0XHRcdFx0c2VsZWNjaW9uYWRvOmZhbHNlLFxuXHRcdFx0XHRcdHg6MSx5OjNcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGhhYmlsaXRhZG86ZmFsc2UsXG5cdFx0XHRcdFx0Y29kaWdvOlwiYzFcIixcblx0XHRcdFx0XHRzZWxlY2Npb25hZG86ZmFsc2UsXG5cdFx0XHRcdFx0eDoyLHk6MFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aGFiaWxpdGFkbzp0cnVlLFxuXHRcdFx0XHRcdGNvZGlnbzpcImMyXCIsXG5cdFx0XHRcdFx0c2VsZWNjaW9uYWRvOmZhbHNlLFxuXHRcdFx0XHRcdHg6Mix5OjFcblx0XHRcdFx0fSxcblx0XHRcdF07XG52YXIgcHJlY2lvID0gMjU7XG5cblxuKGZ1bmN0aW9uKG1vdW50KXtcblx0bW91bnQoKTtcbn0oZnVuY3Rpb24oKXtcblx0UmVhY3RET00ucmVuZGVyKDxDaW5lbWFTZWF0cyBcdHZpZXc9e0NpbmVtYVNlYXRzX3ZpZXd9IFxuXHRcdFx0XHRcdFx0XHRcdFx0ZmVjaGFzRGlzcG9uaWJsZT17ZmVjaGFzRGlzcG9uaWJsZX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRob3JhcmlvRGlzcG9uaWJsZT17aG9yYXJpb0Rpc3BvbmlibGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXllbmRhPXtsZXllbmRhfVxuXHRcdFx0XHRcdFx0XHRcdFx0YnV0YWNhcz17YnV0YWNhc31cblx0XHRcdFx0XHRcdFx0XHRcdHByZWNpbz17cHJlY2lvfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdC1tb3VudC1wb2ludCcpKTtcbn0pKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aXRlbXMscmVzfSA9IHRoaXMucHJvcHM7XG5cdFx0XG4gICAgICAgIHZhciBtYXBwZWRfaXRlbSA9IChpdGVtLCBpKSA9PiAoPGxpIGtleT17aX0gb25DbGljaz17KCkgPT4gcmVzKGkpfT57aXRlbX08L2xpPik7XG4gXHRcdFxuICAgICAgICByZXR1cm4oPGx1PntfLm1hcChpdGVtcyxtYXBwZWRfaXRlbSl9PC9sdT4pO1xuICAgIH0gXG5cdFxufVxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7cmVzOigpPT4nJ307IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWF0cyBleHRlbmRzIENvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnRvZ2dsZVN0YXRlPSB0aGlzLnRvZ2dsZVN0YXRlLmJpbmQodGhpcyk7XG5cdFx0XG5cdH1cblx0dG9nZ2xlU3RhdGUoKXtcblx0XHRpZih0aGlzLnByb3BzLmVuYWJsZT09dHJ1ZSl7XG5cdFx0XHRpZih0aGlzLnByb3BzLmlzU2VsZWN0ZWQ9PWZhbHNlKXtcblx0XHRcdFx0dGhpcy5wcm9wcy5yZXModGhpcy5wcm9wcy5jb2RlLHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0dGhpcy5wcm9wcy5yZXModGhpcy5wcm9wcy5jb2RlLGZhbHNlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtjb2RlLGlzU2VsZWN0ZWR9ID0gdGhpcy5wcm9wcztcblx0XHRcbiAgICAgICAgcmV0dXJuICg8bGkgb25DbGljaz17dGhpcy50b2dnbGVTdGF0ZX0+e2NvZGV9IHtpc1NlbGVjdGVkLnRvU3RyaW5nKCl9PC9saT4pO1xuICAgIH0gXG59XG5TZWF0cy5kZWZhdWx0UHJvcHMgPSB7cmVzOigpPT4nJ307IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFNlYXRzIGZyb20gJy4vU2VhdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWF0c0xpc3QgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aXRlbXMscmVzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBtYXBwZWRfaXRlbSA9IChpdGVtLCBpKSA9PiAoXG5cdFx0XHQ8U2VhdHMga2V5PXtpfSBlbmFibGU9e2l0ZW0uaGFiaWxpdGFkb30gY29kZT17aXRlbS5jb2RpZ299IGlzU2VsZWN0ZWQ9e18uaW5jbHVkZXModGhpcy5wcm9wcy5zZWxlY3RlZCxpdGVtLmNvZGlnbyl9IHJlcz17cmVzfS8+XG5cdFx0KTtcbiBcdFx0XG4gICAgICAgIHJldHVybig8bHU+e18ubWFwKGl0ZW1zLG1hcHBlZF9pdGVtKX08L2x1Pik7XG4gICAgfSBcblx0XG59XG5TZWF0c0xpc3QuZGVmYXVsdFByb3BzID0ge3JlczooKT0+Jyd9OyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2l0ZW1zLHJlc30gPSB0aGlzLnByb3BzO1xuXHRcdFxuICAgICAgICB2YXIgbWFwcGVkX2l0ZW0gPSAoaXRlbSwgaSkgPT4gKDxvcHRpb24gdmFsdWU9e2l9IGtleT17aX0gPntpdGVtfTwvb3B0aW9uPik7XG4gXHRcbiAgICAgICAgcmV0dXJuKDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiByZXMoZS50YXJnZXQudmFsdWUpfSA+e18ubWFwKGl0ZW1zLG1hcHBlZF9pdGVtKX08L3NlbGVjdD4pO1xuICAgIH0gXG59XG5TZWxlY3QuZGVmYXVsdFByb3BzID0ge3JlczooKT0+Jyd9OyJdfQ==
