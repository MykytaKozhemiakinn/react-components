import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Input.css';


const Input = ({className, id, label, error, ...attrs}) => {

	const classes = classNames(
		'input',
		className,
		{error},
		);
	return(

		<div className='inputWrapper'>
				<div className='labelsWrapper'>
						{ label && <label className='inputLabel' htmlFor={id}>{label}</label>}
						{attrs.required && <span className='inputRequired'>Required</span>}
				</div>
		<input
			name={id}
			id={id}
			className={classes}
			{...attrs} />

			{error && <span className='inputError'>{error}</span>}

		</div>
		);

};

Input.propTypes = {
	className:PropTypes.string,
	id:PropTypes.string.isRequired, 
	error:PropTypes.string,
	label:PropTypes.string,
}
Input.defaultProps = {
	className:'',
	error:'',
	label:'',
}

export default Input;