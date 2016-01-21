(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentBox = _react2.default.createClass({
	displayName: 'CommentBox',

	getInitialState: function getInitialState() {
		return {
			comments: null
		};
	},
	componentDidMount: function componentDidMount() {
		var that = this;
		this.socket = (0, _socket2.default)();
		this.socket.on('comments', function (comments) {
			that.setState({ comments: comments });
		});
		this.socket.emit('fetchComments');
	},
	submitComment: function submitComment(comment, callback) {
		this.socket.emit('newComment', comment, function (err) {
			if (err) return console.error('New comment error:', err);
			callback();
		});
	},
	render: function render() {
		return _react2.default.createElement(
			'div',
			{ className: 'commentBox' },
			_react2.default.createElement(
				'h3',
				null,
				'Comments:'
			),
			_react2.default.createElement(CommentList, { comments: this.state.comments }),
			_react2.default.createElement(CommentForm, { submitComment: this.submitComment })
		);
	}
});
var CommentList = _react2.default.createClass({
	displayName: 'CommentList',

	render: function render() {
		var Comments = _react2.default.createElement(
			'div',
			null,
			'Loading comments...'
		);
		if (this.props.comments) {
			Comments = this.props.comments.map(function (comment) {
				return _react2.default.createElement(Comment, { comment: comment });
			});
		}
		return _react2.default.createElement(
			'div',
			{ className: 'commentList' },
			Comments
		);
	}
});
var Comment = _react2.default.createClass({
	displayName: 'Comment',

	render: function render() {
		return _react2.default.createElement(
			'div',
			{ className: 'comment' },
			_react2.default.createElement(
				'span',
				{ className: 'author' },
				this.props.comment.author
			),
			' said:',
			_react2.default.createElement('br', null),
			_react2.default.createElement(
				'div',
				{ className: 'body' },
				this.props.comment.text
			)
		);
	}
});
var CommentForm = _react2.default.createClass({
	displayName: 'CommentForm',

	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
		var that = this;
		var author = this.refs.author.getDOMNode().value;
		var text = this.refs.text.getDOMNode().value;
		var comment = { author: author, text: text };
		var submitButton = this.refs.submitButton.getDOMNode();
		submitButton.innerHTML = 'Posting comment...';
		submitButton.setAttribute('disabled', 'disabled');
		this.props.submitComment(comment, function (err) {
			that.refs.author.getDOMNode().value = '';
			that.refs.text.getDOMNode().value = '';
			submitButton.innerHTML = 'Post comment';
			submitButton.removeAttribute('disabled');
		});
	},
	render: function render() {
		return _react2.default.createElement(
			'form',
			{ className: 'commentForm', onSubmit: this.handleSubmit },
			_react2.default.createElement('input', { type: 'text', name: 'author', ref: 'author', placeholder: 'Name', required: true }),
			_react2.default.createElement('br', null),
			_react2.default.createElement('textarea', { name: 'text', ref: 'text', placeholder: 'Comment', required: true }),
			_react2.default.createElement('br', null),
			_react2.default.createElement(
				'button',
				{ type: 'submit', ref: 'submitButton' },
				'Post comment'
			)
		);
	}
});

_reactDom2.default.render(_react2.default.createElement(CommentBox, null), document.getElementById('mount-point'));

},{"react":"react","react-dom":"react-dom","socket.io":"socket.io"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0tBLElBQUksVUFBVSxHQUFHLGdCQUFNLFdBQVcsQ0FBQzs7O0FBQ2xDLGdCQUFlLEVBQUUsMkJBQVk7QUFDNUIsU0FBTztBQUNOLFdBQVEsRUFBRSxJQUFJO0dBQ2QsQ0FBQztFQUNGO0FBQ0Qsa0JBQWlCLEVBQUUsNkJBQVk7QUFDOUIsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLE1BQUksQ0FBQyxNQUFNLEdBQUcsdUJBQUksQ0FBQztBQUNuQixNQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxRQUFRLEVBQUU7QUFDOUMsT0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0dBQ3RDLENBQUMsQ0FBQztBQUNILE1BQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0VBQ2xDO0FBQ0QsY0FBYSxFQUFFLHVCQUFVLE9BQU8sRUFBRSxRQUFRLEVBQUU7QUFDM0MsTUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxVQUFVLEdBQUcsRUFBRTtBQUN0RCxPQUFJLEdBQUcsRUFDTixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakQsV0FBUSxFQUFFLENBQUM7R0FDWCxDQUFDLENBQUM7RUFDSDtBQUNELE9BQU0sRUFBRSxrQkFBVztBQUNsQixTQUNDOztLQUFLLFNBQVMsRUFBQyxZQUFZO0dBQzFCOzs7O0lBQWtCO0dBQ2xCLDhCQUFDLFdBQVcsSUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEFBQUMsR0FBRTtHQUM3Qyw4QkFBQyxXQUFXLElBQUMs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LE1BQUEsR0FBWTtHQUFBLHlDQUFLO0dBQ2hGOztNQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLGNBQWM7O0lBQXNCO0dBQ3hELENBQ047RUFDRjtDQUNELENBQUMsQ0FBQzs7QUFFSCxtQkFBUyxNQUFNLENBQ2QsOEJBQUMsVUFBVSxPQUFFLEVBQ2IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FDdEMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvJztcblxuXG52YXIgQ29tbWVudEJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbW1lbnRzOiBudWxsXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0dGhpcy5zb2NrZXQgPSBpbygpO1xuXHRcdHRoaXMuc29ja2V0Lm9uKCdjb21tZW50cycsIGZ1bmN0aW9uIChjb21tZW50cykge1xuXHRcdFx0dGhhdC5zZXRTdGF0ZSh7IGNvbW1lbnRzOiBjb21tZW50cyB9KTtcblx0XHR9KTtcblx0XHR0aGlzLnNvY2tldC5lbWl0KCdmZXRjaENvbW1lbnRzJyk7XG5cdH0sXG5cdHN1Ym1pdENvbW1lbnQ6IGZ1bmN0aW9uIChjb21tZW50LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ25ld0NvbW1lbnQnLCBjb21tZW50LCBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyKVxuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcignTmV3IGNvbW1lbnQgZXJyb3I6JywgZXJyKTtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudEJveFwiPlxuXHRcdFx0XHQ8aDM+Q29tbWVudHM6PC9oMz5cblx0XHRcdFx0PENvbW1lbnRMaXN0IGNvbW1lbnRzPXt0aGlzLnN0YXRlLmNvbW1lbnRzfS8+XG5cdFx0XHRcdDxDb21tZW50Rm9ybSBzdWJtaXRDb21tZW50PXt0aGlzLnN1Ym1pdENvbW1lbnR9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xudmFyIENvbW1lbnRMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgQ29tbWVudHMgPSAoPGRpdj5Mb2FkaW5nIGNvbW1lbnRzLi4uPC9kaXY+KTtcblx0XHRpZiAodGhpcy5wcm9wcy5jb21tZW50cykge1xuXHRcdFx0Q29tbWVudHMgPSB0aGlzLnByb3BzLmNvbW1lbnRzLm1hcChmdW5jdGlvbiAoY29tbWVudCkge1xuXHRcdFx0XHRyZXR1cm4gKDxDb21tZW50IGNvbW1lbnQ9e2NvbW1lbnR9IC8+KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21tZW50TGlzdFwiPlxuXHRcdFx0XHR7Q29tbWVudHN9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbnZhciBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPnt0aGlzLnByb3BzLmNvbW1lbnQuYXV0aG9yfTwvc3Bhbj4gc2FpZDo8YnIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj57dGhpcy5wcm9wcy5jb21tZW50LnRleHR9PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbnZhciBDb21tZW50Rm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0aGFuZGxlU3VibWl0OiBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0dmFyIGF1dGhvciA9IHRoaXMucmVmcy5hdXRob3IuZ2V0RE9NTm9kZSgpLnZhbHVlO1xuXHRcdHZhciB0ZXh0ID0gdGhpcy5yZWZzLnRleHQuZ2V0RE9NTm9kZSgpLnZhbHVlO1xuXHRcdHZhciBjb21tZW50ID0geyBhdXRob3I6IGF1dGhvciwgdGV4dDogdGV4dCB9O1xuXHRcdHZhciBzdWJtaXRCdXR0b24gPSB0aGlzLnJlZnMuc3VibWl0QnV0dG9uLmdldERPTU5vZGUoKTtcblx0XHRzdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gJ1Bvc3RpbmcgY29tbWVudC4uLic7XG5cdFx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHR0aGlzLnByb3BzLnN1Ym1pdENvbW1lbnQoY29tbWVudCwgZnVuY3Rpb24gKGVycikge1xuXHRcdFx0dGhhdC5yZWZzLmF1dGhvci5nZXRET01Ob2RlKCkudmFsdWUgPSAnJztcblx0XHRcdHRoYXQucmVmcy50ZXh0LmdldERPTU5vZGUoKS52YWx1ZSA9ICcnO1xuXHRcdFx0c3VibWl0QnV0dG9uLmlubmVySFRNTCA9ICdQb3N0IGNvbW1lbnQnO1xuXHRcdFx0c3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImNvbW1lbnRGb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImF1dGhvclwiIHJlZj1cImF1dGhvclwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHJlcXVpcmVkIC8+PGJyLz5cblx0XHRcdFx0PHRleHRhcmVhIG5hbWU9XCJ0ZXh0XCIgcmVmPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ29tbWVudFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+PGJyLz5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgcmVmPVwic3VibWl0QnV0dG9uXCI+UG9zdCBjb21tZW50PC9idXR0b24+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0KTtcblx0fVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PENvbW1lbnRCb3gvPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50LXBvaW50Jylcbik7Il19
