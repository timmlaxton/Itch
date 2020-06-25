import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

const PageOne = () => {
    return (
    <div>
        PageOne</div>
    );
};

const PageTwo = () => {
    return <div>
    PageTwo
     <button> click me</button>
        </div>
};

const App = () => {
    return (
    <div>
        <BrowserRouter>
        <div> 
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" exact component={PageTwo} />
        </div>
        </BrowserRouter>
        </div>
    );
}

export default App;