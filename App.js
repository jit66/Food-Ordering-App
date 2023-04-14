import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement(
    "div",
    {
        id:"title",
        key:"h1"
    },
    [ 
        React.createElement("h1",{ id:"title",key:"h1"},"hi"),
        React.createElement("h2",{ id:"title",key:"h1"},"hi2"),
        React.createElement("h3",{ id:"title",key:"h1"},"h3"),
    ]
)

const heading2 = 
            <div id="title" key="div1">
                <h1 id="title" key="h1">Hellooo</h1>
                <h2>Hi2</h2>
                <h3>Hi3</h3>
            </div>


// const heading = <h1 id="title" key="h1">Welcome</h1>

// const Heading2 = () => (
//     <div>
//         {heading}
//         <h1>all</h1>
//         <h2>to React</h2>
//     </div>
// )

const Image = () => (
    <img src="https://pixlok.com/wp-content/uploads/2021/07/Instagram-Free-Icon-rdfd.png" 
    height={50} width={60}
    alt="logo"
    className="logo"></img>
)

const Search = () => (
    <div className="search-container">
        <input type="text" placeholder="Search..." className="search-bar"/>
        <button className="search-icon">Search</button>
    </div>
)

const Icon = () => (
    <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
    height={50} width={50}
    alt="icon"
    className="icon"></img>
)


const HeaderComp = () => (

    <div className="container">

    <Image/>
    <Search/>
    <Icon/>

    </div>
)


    
console.log(HeaderComp);




const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading)

root.render(<HeaderComp/>)
