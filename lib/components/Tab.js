'use strict';

var React = require('react');

function syncNodeAttributes(node, props) {
	if (props.selected) {
		node.setAttribute('tabindex', 0);
		node.setAttribute('selected', 'selected');
		if (props.focus) {
			node.focus();
		}
	} else {
		node.removeAttribute('tabindex');
		node.removeAttribute('selected');
	}
}

module.exports = React.createClass({
	displayName: 'Tab',

	getDefaultProps: function getDefaultProps() {
		return {
			focus: false,
			selected: false,
			id: null,
			panelId: null
		};
	},

	componentDidMount: function componentDidMount() {
		syncNodeAttributes(this.getDOMNode(), this.props);
	},

	componentDidUpdate: function componentDidUpdate() {
		syncNodeAttributes(this.getDOMNode(), this.props);
	},

	render: function render() {
		return React.createElement(
			'li',
			{ role: 'tab',
				id: this.props.id,
				'aria-selected': this.props.selected ? 'true' : 'false',
				'aria-expanded': this.props.selected ? 'true' : 'false',
				'aria-controls': this.props.panelId
			},
			this.props.children
		);
	}
});