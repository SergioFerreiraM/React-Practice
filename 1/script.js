import React from "https://esm.sh/react@18.2.0";
import ReactDOOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById('app');

const root = ReactDOOM.createRoot(appDomElement);

const button = React.createElement("button", null, "Click me1");

const button2 = React.createElement("button", null, "Click me2");

const button3 = React.createElement("button", null, "Click me3");

const div = React.createElement("div", null, button, button2, button3);

root.render(<div>Hello</div>);

/* reduccion de codigo con una constante */

/*
const appDomElement = document.getElementById('app');

const root = ReactDOOM.createRoot(appDomElement);

const h = React.createElement;

const button = h("button", null, "Click me1");

const button2 = h("button", null, "Click me2");

const button3 = h("button", null, "Click me3");

const app = h(React.createElement, null, [button, button2, button3]);

root.render(app);
*/