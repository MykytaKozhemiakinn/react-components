import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import './ButtonGroup.css';


const ButtonGroup = ({children, className, vertical, ...attrs}) => {

	const classes = classNames(
		'btn-group',
		className,
		{vertical}
		)
	return(

		<div className={classes}
		{...attrs}>
					{children}
		</div>
		)
}


ButtonGroup.propTypes = {
	
	children: PropTypes.node,
	vertical:PropTypes.bool,
	className:PropTypes.string,

};

ButtonGroup.defaultProps = {

	children:null,
	vertical:false,
	className:"",

};

export default ButtonGroup;