//import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
//import 'bootstrap/dist/css/bootstrap.css'



////let a = 10, b = 20

////let div1 = (
////    <div>
////        <input value={a * b} /> <button>Click Me </button>
////    </div>
////)

////function div2() {
////    return
////    <ul>
////        <li>Shiraz</li>
////        <li>NewYourk</li>
////        <li>Sydney</li>
////    </ul>
////}
////let div3 = (
////    <div>
////        <div1 />
////        <div2 />
////    </div>
////    )

////function A() { return (<input  className="form-control" />); }

//function A() { return (<input className="form-control" />); }
//var B = () => <input  className="form-control" />
//var C = () => <button className="btn btn-success">Sum</button>

//var Div3 = () =>
//    <div>
//        <A/>
//        <B/>
//        <C/>
//    </div>;

//const divroot = document.getElementById('root')
//ReactDOM.render(<Div3 />, divroot)

////var Div1 = () => <div className="container">
////    Div1 Shown
////    {(() => { alert("Hi") })()}
////    </div>

////const divroot = document.getElementById('root')
////ReactDOM.render(<Div1 />, divroot)

////var Div1 = () => <div className="container">
////    Div1 Shown
////    {(() => { return "Mohammadmahdi shaffaf" })()}
////    </div>

////const divroot = document.getElementById('root')
////ReactDOM.render(<Div1 />, divroot)


////var msg ="Test"
////var Div1 = () => <div className="container">
////    {(() => { return msg })()}
////    </div>

////const divroot = document.getElementById('root')
////ReactDOM.render(<Div1 />, divroot)
import "bootstrap/dist/css/bootstrap.css"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './mystyle.css'
import './css/green.css'
import './css/blue.css'


import  App  from './App'

const root = document.getElementById('root');

///style as json
///we can put it directly 
//var mystyle = {
//    color: 'White',
//    backgroundColor:'SkyBlue'
//}

///we can use style as inline , you should note that ,you have put them in a {Javascript{Json}};


///if we want to have a shared style , we have to save the JSON Style and use it in another files or components.

///if we want use a css file we can build a css file ino
//var A = () => <div><button style={mystyle} className="btn btn-success">Click Me</button></div>
//var B = ()=>
//    <div>
//        <input />
//        <A />
//    </div>
    

//ReactDom.render(<B /> , root);

//var A = () => <div><button className="A">Click Me</button></div>
//var B = () =>
//    <div>
//        <input className="B" />
//        <A />
//    </div>





//////////////////

////in react the content between 2 tages named as children 

///if we want use shared properties in many tags , like className , style and ... we can insert all the properties in 1 json file and use it in jsx like {...props}

//var props = {
//    className:"A", children:"Hi React" ,id:"div1", name:"div1"
//}

//props.children = "";
//var A = () => <div {...props}></div>

//ReactDom.render(<A />, root);

///



//var A = ()=>
//    <table className="B">
//        <tr>
//            <th>Name</th>
//            <th>Family</th>
//        </tr>
//                <tr>
//                    <td>a</td>
//                    <td>aa</td>
//                </tr>

//                <tr>
//                    <td>b</td>
//                    <td>bb</td>
//                </tr>

//                <tr>
//                    <td>c</td>
//                    <td>cc</td>
//                </tr>
//    </table>

//var B = ()=>  (<div>
//    Name :<input className="Blue" />
//    Family :<input className="Blue" />
//    <A />
//</div>);



//var props = {
//    className: "Green", children: "Click Me", id: "btn1"
//}

//var C = ()=> <button {...props}></button>

//var D = () => <div><B /><C /></div>

//ReactDom.render(<D />, root);


////////////////////

//Parametric functional Componnent
//json parameter

//var A = ({ name }) => <input value={name} />

//var B = () =>
//    <div>
//         <A name="Mehdi" />
//         <A name="Shaffaf" />
//    </div>


//ReactDom.render(<B />, root);

//var Sum = ({ a=1, b=1 }) => {
//    var aa = parseInt(a)
//    var bb = parseInt(b)
//    return <input value={aa + bb} />
//}

//var B = () =>
//    <div>
//        <Sum a="100" b="200" />
//        <Sum a="10" />
//        <Sum />
//    </div>


///////////////////
//var Result = ({ n1=-1, n2=-1, s1='Shiraz', s2='Tehran'}) => {
//    var n11 = parseInt(n1)
//    var n22 = parseInt(n2)
//    if (n11 > n22) 
//        return <input value={s1} className="Green" />
//    else
//        return <button className="Blue" children={s2} />
//}

//var B = () =>
//    <div>
//        <Result n1="7" n2="5" s1='mashahd' s2='ahvaz' />
//        <Result n1="5" n2="7" s1='mashahd' s2='ahvaz' />
//        <Result n1="-1" n2="-1" s1='mashahd' s2='ahvaz' />
//    </div>


//var A = ({ a }) => <input value={a} />
//var i = 1;
//setInterval(() => {
//    ReactDom.render(< A a={i++} />, root);
//},1000)


//setInterval(() => alert("hi", 1000);

//var root2 = document.getElementById('root2');
//var A = () => <input value="" />
//var Jsx = () =>
//    <div>
//        <button>React</button>
//        <A />
//    </div>

//setInterval(() => {
//    var current = new Date().toLocaleTimeString();
//    A = () => <input value={current} />
//    ReactDom.render(<Jsx />, root);
//}, 1000)


//setInterval(() => {
//    var current = new Date().toLocaleTimeString();
//    var div =
//        `<div>
//            <button>Hi</button>
//            <input value=${current} />
//        </div>`
//    root2.innerHTML = div;
//}, 1000)

///3th method of bulding components

//class App extends Component {
//    render() {
//        return (
//            <div>
//                <h1>Hi, React Component</h1>
//            </div>
//            )
//    }
//}


ReactDOM.render(<App />, root);



