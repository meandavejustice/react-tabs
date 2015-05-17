'use strict';

var React = require('react');

module.exports = React.createClass({
	displayName: 'TabList',

	render: function render() {
		return React.createElement(
			'ul',
			{ role: 'tablist' },
			this.props.children
		);
	}
});