import React from 'react';
import './index.less'
import {Redirect,Route,Switch} from 'react-router-dom'
import CoursePurchase from './../../page/coursePurchase'
import MyCourse from './../../page/myCourse'
import Feedback from './../../page/feedback'
import Questions from "../../page/questions";
import OrderConfirm from "../../page/payment/orderConfirm";
import Payment from "../../page/payment/payment";

export default class Container extends React.Component {

    render() {
        return (
            <div className='window-container'>
                <div className='content'>
                    <Switch>
                        <Route path='/1' component={CoursePurchase}/>
                        <Route path='/3' component={Feedback}/>
                        <Route path="/Questions" component={Questions}></Route>
                        <Route path="/orderConfirm" component={OrderConfirm}></Route>
                        <Route path="/payment" component={Payment}></Route>
                        <Redirect to={"/homePage"}></Redirect>
                    </Switch>

                </div>
            </div>
        )
    }
}