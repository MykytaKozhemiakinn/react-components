import React, { Fragment } from 'react';
import Icon from './Icon';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../button/Button';





const Iconsandbox = () => (

		<Fragment>

		<h2><span>1. Icon with function: </span></h2>
		<Icon size={2} onClick={()=>{console.log('Click')}} name='atom'/>

		<h2><span>2. Icon group (toggle): </span></h2>
		<ButtonGroup>
			<Button>
				<Icon name='align-right'/>
			</Button>
			<Button active>
				<Icon name='align-center'/>
			</Button>
			<Button>
				<Icon name='align-justify'/>
			</Button>
			<Button>
				<Icon name='align-left'/>
			</Button>
		</ButtonGroup>

		<h2><span>3. Icon with 8rem size: </span></h2>
		<Icon size={8} title='badge' name='award'/>

		<h2><span>4. Disabled icon: </span></h2>
		<Icon size={2} onClick={()=>{console.log('Click')}} disabled name='atom'/>


		</Fragment>
	);


export default Iconsandbox;