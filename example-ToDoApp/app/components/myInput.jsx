import React, { Component } from 'react';

export default function MyInput({ placeholder, value, onChange, onSubmit }){
    return <div>
        <input placeholder={ placeholder } value={ value } onChange={ onChange }/>
        <button onClick={ onSubmit }>Submit</button>
    </div>
}
