import React from "react";
import SettingPage from "./SettingPage";
import { HashRouter, Route } from "react-router-dom";
import Main from "./Main";

class App extends React.Component {
    render() {
        return (
            <section className="container">
                <HashRouter>
                    <Route path="/" exact={true} component={SettingPage} />
                    <Route path="/main" component={Main} />
                </HashRouter>
            </section>
        );
    }
}

export default App;
