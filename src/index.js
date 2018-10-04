
import React from "react";
import ReactDOM from "react-dom";
import './styles/app.css';
import './styles/app.scss';

function Hello(props) {
    return (
        <h1>Hello world!</h1>
    )
}

const wrapper = document.getElementById("main-container");
wrapper
    ? ReactDOM.render(
        <Hello />,
        wrapper
    )
    : false;