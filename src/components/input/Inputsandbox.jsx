import React from 'react';
import Input from './Input';


const Inputsandbox = () => (

	<div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gridGap:'20px'}}>
		<h2><span>1. Input type text: </span></h2>
		<Input id='text' type='text'/>

		<h2><span>2. Input type number: </span></h2>
		<Input id='number' type='number'/>

		<h2><span>3. Input type password (error): </span></h2>
		<Input id='password' type='password' error="wrong password"/>

		<h2><span>4. Input type week (error): </span></h2>
		<Input id='week' type='week' label="week" error='wrong week'/>

		<h2><span>5. Input type date (required): </span></h2>
		<Input id='date' type='date' required/>

		<h2><span>6. Input type file (label and required): </span></h2>
		<Input id='file' type='file' label="file"required/>

		<h2><span>7. Input type color: </span></h2>
		<Input id='color' type='color'/>

		<h2><span>8. Input type range (default value is 65%): </span></h2>
		<Input id='range' type='range' value='65'/>

		<h2><span>9. Input type checkbox: </span></h2>
		<Input id='checkbox' type='checkbox' />

		<h2><span>9. Input type radio (disabled): </span></h2>
		<Input id='radio' type='radio' disabled />

	</div>



	)

export default Inputsandbox;