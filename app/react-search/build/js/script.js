(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = _react2.default.createClass({
  displayName: 'Input',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.name,
      ': ',
      _react2.default.createElement('input', { placeholder: this.props.placeholder })
    );
  }
});

var List = _react2.default.createClass({
  displayName: 'List',

  render: function render() {
    var createItem = function createItem(item) {
      return _react2.default.createElement(
        'li',
        { id: item.id },
        item.text
      );
    };
    return _react2.default.createElement(
      'ul',
      null,
      this.props.items.map(createItem)
    );
  }
});

var Search = _react2.default.createClass({
  displayName: 'Search',

  getInitialState: function getInitialState() {
    return { items: [] };
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Input, { name: 'Buscador', placeholder: '...' }),
      _react2.default.createElement(List, { items: this.state.items })
    );
  }
});

_reactDom2.default.render(_react2.default.createElement(Search, null), document.getElementById('mount-point'));

},{"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FDR0EsSUFBSSxLQUFLLEdBQUcsZ0JBQU0sV0FBVyxDQUFDOzs7QUFDNUIsUUFBTSxFQUFFLGtCQUFXO0FBQ2pCLFdBQ0U7OztNQUNHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7TUFBRyx5Q0FBTyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEFBQUMsR0FBRztLQUM3RCxDQUNOO0dBQ0g7Q0FDRixDQUFDLENBQUM7O0FBRUgsSUFBSSxJQUFJLEdBQUcsZ0JBQU0sV0FBVyxDQUFDOzs7QUFDM0IsUUFBTSxFQUFFLGtCQUFXO0FBQ2pCLFFBQUksVUFBVSxHQUFHLFNBQWIsVUFBVSxDQUFZLElBQUksRUFBQztBQUM3QixhQUFPOztVQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxBQUFDO1FBQUUsSUFBSSxDQUFDLElBQUk7T0FBTSxDQUFDO0tBQzFDLENBQUM7QUFDRixXQUFPOzs7TUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO0tBQU0sQ0FBQztHQUNwRDtDQUNGLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxnQkFBTSxXQUFXLENBQUM7OztBQUM3QixpQkFBZSxFQUFFLDJCQUFXO0FBQzFCLFdBQU8sRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFDLENBQUM7R0FDcEI7QUFDRCxRQUFNLEVBQUUsa0JBQVc7QUFDakIsV0FDRTs7O01BQ0UsOEJBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLEtBQUssR0FBRztNQUMzQyw4QkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxBQUFDLEdBQUc7S0FDN0IsQ0FDTjtHQUNIO0NBQ0YsQ0FBQyxDQUFDOztBQUdILG1CQUFTLE1BQU0sQ0FBQyw4QkFBQyxNQUFNLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG52YXIgSW5wdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLm5hbWV9OiA8aW5wdXQgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIExpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNyZWF0ZUl0ZW0gPSBmdW5jdGlvbihpdGVtKXtcbiAgICAgIHJldHVybiA8bGkgaWQ9e2l0ZW0uaWR9PntpdGVtLnRleHR9PC9saT47XG4gICAgfTtcbiAgICByZXR1cm4gPHVsPnt0aGlzLnByb3BzLml0ZW1zLm1hcChjcmVhdGVJdGVtKX08L3VsPjtcbiAgfVxufSk7XG5cbnZhciBTZWFyY2ggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtpdGVtczogW119O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SW5wdXQgbmFtZT1cIkJ1c2NhZG9yXCIgcGxhY2Vob2xkZXI9XCIuLi5cIiAvPlxuICAgICAgICA8TGlzdCBpdGVtcz17dGhpcy5zdGF0ZS5pdGVtc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblJlYWN0RE9NLnJlbmRlcig8U2VhcmNoIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW91bnQtcG9pbnQnKSk7XG4iXX0=
