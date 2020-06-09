import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
    <Router>
        {/*Switch는 url이 겹치는걸 방지해준다*/}
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" component={TV} />
            <Route path="/search" component={Search} />
            {/*url이 일치하는 경우가 없을 경우 / 홈으로 리다이렉트 시킨다.*/}
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);