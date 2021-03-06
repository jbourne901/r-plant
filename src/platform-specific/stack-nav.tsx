import React from "react";
import {Switch, Route} from "react-router-dom";
import {ISStackNavProps} from "../shared/types/props";

const SStackNav = (props: ISStackNavProps) => {
    const screenOpts = {
        headerShown: props.showHeader||false
    };
    const jsxOptions: JSX.Element[] = [];
    for(let p of props.navOptions) {
        jsxOptions.push( (
            <Route key={p.name} path={`/${p.name}`} exact component={p.component} />
        ) );         
    }
    return (
        <Switch>
            {jsxOptions}
        </Switch>
    );
};

export {SStackNav};
