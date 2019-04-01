import  React from 'react';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import App from './App';
import Layout from './Layout'
import Container from './components/container'
import Details from './page/details'
import UserCentre from './page/userCentre'
import CourseDetail from "./page/courseDetails";
import Profile from "./page/profile";
import Login from "./page/login";
import HomePage from "./page/homePage/index.js";
import MyCourse from "./page/myCourse";
export default class IRouter extends React.Component{

    render() {
        return(
            <HashRouter >
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Layout>
                            <Switch>
                                <Route path='/2/second' component={CourseDetail}/>
                                <Route path='/2' component={MyCourse}/>
                                <Route path="/homePage" component={HomePage}></Route>
                                <Route path="/courseDetails" component={Details}></Route>
                                <Route path="/userCentre" component={UserCentre}></Route>
                                <Route path='/profile/:id' component={Profile}></Route>
                                <Route path="/" render={()=>
                                <Container>
                                </Container>}
                                />
                            </Switch>
                        </Layout>
                    </Switch>
                </App>
            </HashRouter>
        )
    }


}

