import React, {Component, Fragment } from 'react';
import Chip from './Chip';


class Example extends Component {

state = {
	users:[
	{
		name:'Max',
	},
	{
		name:'Nick',
	},
	{
		name:'Ann',
	},
	{
		name:'Kate',
	},
	]
}

removeChip = (e,id) => {
	this.setState(({users})=>({
	
			users:users.filter(({name})=> name !==id),
	
		}));
};


toggleActiveChip = id =>{
	this.setState(({users})=>({

		users:users.map(({name,active}) =>{
			if(name === id) {
				active = !active
			}
			return {
				name, active,
			};
		}),
	}));
}
render(){

const {users} = this.state;

	return (

		<Fragment>
		{users.map(({name,active}) =>
			(<Chip
						text={name}
						key={name}
						id={name}
						className={active?'active':''}
						withClose
						withIcon
						onCloseClick={this.removeChip}
						onChipClick={this.toggleActiveChip}
						/>
			)
		)}
		</Fragment>


		);
};

}



export default Example;