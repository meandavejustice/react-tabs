'use strict';

var React = require('react');

module.exports = React.createClass({
	displayName: 'TabPanel',

	getDefaultProps: function getDefaultProps() {
		return {
			selected: false,
			id: null,
			tabId: null
		};
	},

	render: function render() {
		var children = this.props.selected ? this.props.children : null;

		return React.createElement(
			'div',
			{ role: 'tabpanel',
				id: this.props.id,
				'aria-labeledby': this.props.tabId,
				style: { display: this.props.selected ? '' : 'none' }
			},
			children
		);
	}
});