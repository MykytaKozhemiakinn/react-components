import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../../components/icon/Icon';
import Image from '../../components/image/Image';

import './Chip.css';



const Chip = ({text, withIcon, withImage, withClose, iconName, imageSrc,imageAlt,className,id,onChipClick,onCloseClick}) => {


	const onChipClickAction = () =>{
		onChipClick(id);
	}

	const onCloseClickAction = e => {
		e.stopPropagation();
		onCloseClick(e,id);
	}


	const classes = classNames(
			'chip',
			className,

		);

	return (

		<div className={classes} onClick={onChipClickAction}>
			{withImage && (
			<span className='chipImage'>
					 	  <Image src={imageSrc} alt={imageAlt} width={24} height={24}/>
			</span>
				)
			}
			{withIcon && (
			<span className='chipIcon'>
			  <Icon name={iconName}/>
			</span>
				)
			}
			<span className="chipText">{text}</span>
			{withClose && (
			<span className='chipClose' onClick={onCloseClickAction} >
			  <Icon name='times'/>
			</span>
				)
			}
		</div>

		);
};


Chip.propTypes = {
	  text: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,	
	withIcon: PropTypes.bool,
	withImage:PropTypes.bool,
	withClose:PropTypes.bool,
	iconName:PropTypes.string,
	imageSrc:PropTypes.string,
	imageAlt:PropTypes.string,
	className:PropTypes.string,
	id:PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
		]),
	onChipClick:PropTypes.func,
	onCloseClick:PropTypes.func,
};

Chip.defaultProps = {

	withIcon:false,
	withImage:false,
	withClose:false,
	iconName:'user-tie',
	imageSrc:'',
	imageAlt:'',
	className:'',
	id:null,
	onChipClick:()=>{},
	onCloseClick:()=>{},
};

export default Chip;