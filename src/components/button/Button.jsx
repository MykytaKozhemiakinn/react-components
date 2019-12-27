import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';


const Button = ({children, onClick, disabled,active,className, ...attrs}) => {

		const classes = classNames('btn', className, {active});

		const IsClickActive = e => {
			if (disabled){
				e.preventDefault();
			}
			else{
				return onClick(e);
			}
		}
		const Tag = attrs.href? 'a':'button';

		return(

		<Tag
		{...attrs}
		className={classes}		
		disabled={disabled}
		onClick={IsClickActive}
		>
		{children}
		</Tag>
		
		);


}


Button.propTypes = {
	
	children: PropTypes.node,
	onClick:PropTypes.func,
	disabled:PropTypes.bool,
	active:PropTypes.bool,
	className:PropTypes.string,

};

Button.defaultProps = {

	children:'Default button',
	onClick:()=>{},
	disabled:false,
	active:false	,
	className:"",

};

export default Button;