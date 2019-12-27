import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Badge.css';

const Badge = ({value,inline,outer,className,circle,...attrs}) => {

	const text = typeof value === 'string' || value instanceof String;

	const classes = classNames(
		'badge',
		className,
		{circle},
		{inline},
		{outer},
		{text},
		{warning:attrs.warning},
		{info: attrs.info},
		{success:attrs.success},
		{alert:attrs.alert},

		);

	return (
		<span className={classes}>
			{value}
		</span>	
);
};

Badge.propTypes = {
	
	value:PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		]),
	inline:PropTypes.bool,
	outer:PropTypes.bool,
	className:PropTypes.string,
	circle:PropTypes.bool,
}

Badge.defaultProps = {

	inline:false,
	outer:false,
	className:'',
	circle:false,

}
export default Badge;