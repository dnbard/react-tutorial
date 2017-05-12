import React, { Component } from 'react';

export default function ToDo({ value, onComplete }){
    return <div style={{ textDecoration: value.isDone ? 'line-through' : null }}>
        { value.title }
        { !value.isDone && <button onClick={ onComplete }>x</button> }
    </div>;
}
