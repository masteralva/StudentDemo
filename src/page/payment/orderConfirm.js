import React from 'react';
import "./index.less"
import {Divider,Radio,Icon,Button} from "antd";
import {Link} from "react-router-dom";
const RadioGroup = Radio.Group;

export default class Name extends React.Component {
    state = {
        value: 1,
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }
    render() {
        const radioStyle = {
            display: 'flex',
            alignItems:"center",
            height:"40px"
        };
        return (
            <div className="orderContainer">
                <div className="orderContainerCenter">
                    <h2 className="pageHeader">
                        确认订单信息
                    </h2>
                    <Divider>支付方式</Divider>
                    <div className="confirmOrder">
                        <div className="payment-methods">
                            <RadioGroup className="paymentRadios" onChange={this.onChange} value={this.state.value}>
                                <div style={{flex:1}}>
                                    <Radio style={radioStyle} value={1}>
                                        <Icon type="wechat" style={{marginLeft:'30px',color:"#85da46",fontSize:"18px"}} />
                                        <span style={{marginLeft:'15px',fontSize:'18px'}}>微信</span>
                                    </Radio>
                                    <Radio style={radioStyle} value={2}>
                                        <Icon type="alipay-circle" style={{marginLeft:'30px',color:"#00aaee",fontSize:"18px"}} />
                                        <span style={{marginLeft:'15px',fontSize:'18px'}}>支付宝</span>
                                    </Radio>
                                    <Radio disabled style={radioStyle} value={3}>
                                        <img src="/social-paypal.png" style={{marginLeft:'30px',width:"18px",height:"18px"}}/>
                                        <span style={{marginLeft:'15px',fontSize:'18px'}}>paypal</span>
                                    </Radio>
                                </div>
                                <div style={{flex:1}}>
                                    <Radio style={radioStyle} value={4}>
                                        <img src="/credit.png" style={{marginLeft:'30px',width:"20px",height:"20px"}}/>
                                        <span style={{marginLeft:'15px',fontSize:'18px'}}>银行卡</span>
                                    </Radio>
                                    <div className="creditCardInfo">
                                        <p style={{display:"flex"}}>
                                            银行账户：<span style={{fontSize:"16px",color:"red"}}>4444 4444 4444 4444</span>
                                        </p>
                                        <p>
                                            开户行：<span>杭州市江干区秋涛支行</span>
                                        </p>
                                        <p>
                                            说明：<span style={{color:"#999"}}>请再提交订单后进行转账，转账时请备注(学号:254897)，工作人员会尽快审核订单！</span>
                                        </p>
                                    </div>
                                </div>

                            </RadioGroup>
                            <div className="payment-methods-row">

                            </div>
                        </div>
                        <Divider>课程详情</Divider>
                        <div className="confirmOrder-row">
                            <div className="confirmOrder-props">
                                <div className="confirmOrder-propsName">
                                    课程:
                                </div>
                                <div className="confirmOrder-propsValue">
                                    《从零到一》
                                </div>
                            </div>

                        </div>
                        <div className="confirmOrder-row">
                            <div className="confirmOrder-props">
                                <div className="confirmOrder-propsName">
                                    购买方式:
                                </div>
                                <div className="confirmOrder-propsValue">
                                    包月购买
                                </div>
                            </div>
                            <div className="confirmOrder-props">
                                <div className="confirmOrder-propsName">
                                    上课类型:
                                </div>
                                <div className="confirmOrder-propsValue">
                                    1v3
                                </div>
                            </div>
                            <div className="confirmOrder-props">
                                <div className="confirmOrder-propsName">
                                    每周上课:
                                </div>
                                <div className="confirmOrder-propsValue">
                                    3天
                                </div>
                            </div>
                            <div className="confirmOrder-props">
                                <div className="confirmOrder-propsName">
                                    每周上课:
                                </div>
                                <div className="confirmOrder-propsValue">
                                    3天
                                </div>
                            </div>
                            <div className="confirmOrder-props">
                                <div className="confirmOrder-propsName">
                                    每周上课:
                                </div>
                                <div className="confirmOrder-propsValue">
                                    3天
                                </div>
                            </div>
                        </div>
                        <Divider>优惠券</Divider>
                        <div className="discount">
                            <div className="discount-item">
                                <div className="c-top"/>
                                <div className="c-price">￥80 <span className="c-limit">满398</span></div>
                                <div className="c-time">有效期至2018-11-22</div>
                            </div>
                        </div>
                        <Divider/>
                        <div className="overall-payment">
                            <div className="total-mount-title">
                                应付总额
                            </div>
                            <div  className="total-mount">
                                ￥39.80
                            </div>
                            <Button type="primary" className="payment-btn">
                                <Link to="/payment">
                                    提交订单
                                </Link>

                            </Button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}