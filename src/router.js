import React from 'react'
import { Route, Switch } from 'react-router-dom'

import asyncComponent from './Scenes/asyncComponent'

const Demo = from('./Scenes/Demo');

// function root(dir){
//     return dir.substring(dir.lastIndexOf("/"));
// }

function from(path){
    return asyncComponent(() => {
        //return import(`${path+root(path)}.js`);
        return import(`${path}/index.js`);
    });
}

export default () => (
    <Switch>
        <Route exact path="/" component={Demo}/>
    </Switch>
)