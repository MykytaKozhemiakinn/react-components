import React, { Fragment } from 'react';
import Button from './Button'



const Buttonsandbox = () => ( 

    <Fragment>

    <h2><span>1. Text and OnClick function: </span></h2>
    <Button onClick={()=>{ console.log("Click") }}>Button text</Button>

    <h2><span>2. Disabled button: </span></h2>
    <Button onClick={()=>{ console.log("Click") }} disabled/>

    <h2><span>3. Active button: </span></h2>
    <Button active/>

    <h2><span>5. Button with supporting data, type etc. : </span></h2>
    <Button data-names="button"/>
    <Button type="submit"/>

    <h2><span>6. Link button: </span></h2>
    <Button href="/" active/>
    <Button href="/" disabled/>


    </Fragment>
);

export default Buttonsandbox;