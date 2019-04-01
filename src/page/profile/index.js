import React from 'react';
import "./index.less"
import {Card, Row, Col, Icon, Avatar, Tag, Divider, Tabs, Timeline , Dropdown, Collapse} from 'antd';
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
export default class Profile extends React.Component {
    state={
        tabID:'record',
        mapList:[1,1,1,1,1]
    }
    componentWillReceiveProps(){
        console.log("ReceiveProps")
        //处理异步
        let timer = setTimeout(
            ()=>{
            this.setState({
                tabID:this.props.match.params.id
            },()=>{
                clearTimeout(timer)
            })
        },0)
    }
    render() {
        console.log("render")
        return (
            <div className="profileContainer">
                <Row gutter={24}>
                    <Col lg={7} md={24}>
                        <Card className="userCard">
                            <div className="userCardFirstRow">
                                <div>
                                    <img className="userCardImg" alt="一米五的我太矮了" title="一米五的我太矮了"
                                         src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqFBRicygSkkZhjUMPANl9RkzphTh9icvmib3ItuwrlaMxy9TZuiceRrhHicvkbBXS88FZ1ichNqOJpTMA/132" />
                                </div>
                                <div className="userCardName">一米五的我太矮了</div>
                                <div >海纳百川，有容乃大</div>
                            </div>
                            <div className="userCardSecondRow">
                                <p>
                                    <Icon className="userCardIron" type="gift" theme="outlined" />
                                    初级汉语水平
                                </p>
                                <p>
                                    <Icon className="userCardIron" type="bank" theme="outlined" />
                                    中国 杭州 萧山
                                </p>
                            </div>
                            <Divider dashed />
                            <div style={{marginLeft:"15px"}}>
                                <div style={{marginBottom:"20px"}}>
                                    标签
                                </div>
                                <div>
                                    <Tag>有潜力的</Tag>
                                    <Tag>零基础</Tag>
                                    <Tag>会听会写</Tag>
                                </div>
                            </div>
                            <Divider dashed />
                            <div style={{marginLeft:"15px"}}>
                                <div style={{marginBottom:"20px"}}>
                                    团队
                                </div>
                                <Row gutter={36}>
                                    <Col lg={24} xl={12}>
                                        <Icon style={{margin:"0 15px 15px 0"}} type="gift" theme="outlined" />
                                        初级汉语水平
                                    </Col>
                                    <Col lg={24} xl={12}>
                                        <Icon style={{margin:"0 15px 15px 0"}}  type="gift" theme="outlined" />
                                        初级汉语水平
                                    </Col>
                                    <Col lg={24} xl={12}>
                                        <Icon style={{margin:"0 15px 15px 0"}} type="gift" theme="outlined" />
                                        初级汉语水平
                                    </Col>
                                    <Col lg={24} xl={12}>
                                        <Icon style={{margin:"0 15px 15px 0"}}  type="gift" theme="outlined" />
                                        初级汉语水平
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={17} md={24}>
                        <Card>
                            <Tabs activeKey={this.state.tabID} onTabClick={
                                (e)=>{
                                  this.setState({
                                      tabID:e
                                  })
                                }
                            } defaultActiveKey={this.props.match.params.id} >
                                <TabPane tab="课时记录" key="record">
                                    <div className="detailsList">
                                        <Collapse >
                                            <Panel cancelBubble={true} showArrow={false} header={
                                                <div className="headerStyle">
                                                    <div className="orderNumber">
                                                        1.
                                                    </div>
                                                    <div className="courseName">
                                                        <div className="courseNameTit">汉字的认识</div>
                                                        <div className="courseNameDes">汉字不太好认，认真练习，多看多写才是关键！</div>
                                                    </div>
                                                    <div className="detailsListTime">
                                                        <div className="detailsListTimeItem">上课时间</div>
                                                        <div className="detailsListTimeItem">2018-10-19 16:27</div>
                                                    </div>
                                                    <div className="detailsListRealTime">
                                                        <div className="detailsListTimeItem">实际上课时间</div>
                                                        <div className="detailsListTimeItem">2018-10-19 16:27</div>
                                                    </div>
                                                </div>
                                            } key="1">
                                                <Timeline style={{margin:"10px 0 0 75px"}}>
                                                    <Timeline.Item>章节1</Timeline.Item>
                                                    <Timeline.Item>章节2</Timeline.Item>
                                                    <Timeline.Item>章节3</Timeline.Item>
                                                    <Timeline.Item>章节4</Timeline.Item>
                                                </Timeline>
                                            </Panel>
                                            <Panel showArrow={false} header={
                                                <div className="headerStyle">
                                                    <div className="orderNumber">
                                                        2.
                                                    </div>
                                                    <div className="courseName">
                                                        <div className="courseNameTit">汉字的认识</div>
                                                        <div className="courseNameDes">汉字不太好认，认真练习，多看多写才是关键！</div>
                                                    </div>
                                                    <div className="detailsListTime">
                                                        <div className="detailsListTimeItem">上课时间</div>
                                                        <div className="detailsListTimeItem">2018-10-19 16:27</div>
                                                    </div>
                                                    <div className="detailsListRealTime">
                                                        <div className="detailsListTimeItem">实际上课时间</div>
                                                        <div className="detailsListTimeItem">2018-10-19 16:27</div>
                                                    </div>
                                                </div>
                                            } key="2" >
                                                <Timeline style={{margin:"10px 0 0 75px"}}>
                                                    <Timeline.Item>章节1</Timeline.Item>
                                                    <Timeline.Item>章节2</Timeline.Item>
                                                    <Timeline.Item>章节3</Timeline.Item>
                                                    <Timeline.Item>章节4</Timeline.Item>
                                                </Timeline>
                                            </Panel>
                                            <Panel showArrow={false} header={
                                                <div className="headerStyle">
                                                    <div className="orderNumber">
                                                        3.
                                                    </div>
                                                    <div className="courseName">
                                                        <div className="courseNameTit">汉字的认识</div>
                                                        <div className="courseNameDes">汉字不太好认，认真练习，多看多写才是关键！</div>
                                                    </div>
                                                    <div className="detailsListTime">
                                                        <div className="detailsListTimeItem">上课时间</div>
                                                        <div className="detailsListTimeItem">2018-10-19 16:27</div>
                                                    </div>
                                                    <div className="detailsListRealTime">
                                                        <div className="detailsListTimeItem">实际上课时间</div>
                                                        <div className="detailsListTimeItem">2018-10-19 16:27</div>
                                                    </div>
                                                </div>
                                            } key="3">
                                                <Timeline style={{margin:"10px 0 0 75px"}}>
                                                    <Timeline.Item>章节1</Timeline.Item>
                                                    <Timeline.Item>章节2</Timeline.Item>
                                                    <Timeline.Item>章节3</Timeline.Item>
                                                    <Timeline.Item>章节4</Timeline.Item>
                                                </Timeline>
                                            </Panel>
                                        </Collapse>
                                    </div>
                                </TabPane>
                                <TabPane tab="我的订单" key="order">
                                    列表2
                                </TabPane>
                                <TabPane tab="优惠券" key="discount">
                                    <div className="couponsList">
                                        {
                                            this.state.mapList.map(()=>
                                                <div className="coupon">
                                                    <div className="coupon-content">
                                                        <div className="coupon-content-row">
                                                            <span className="price-symbol">￥</span>
                                                            <span className="amount">20</span>
                                                            <span className="coupon-type">春节学习奖励</span>
                                                        </div>
                                                        <div>
                                                            <span>有效期：</span>
                                                            <span>2018-12-08</span>
                                                        </div>
                                                        <div>
                                                            <span>使用条件：</span>
                                                            <span>满200减20</span>
                                                        </div>
                                                        <div>
                                                            <span>适用场景：</span>
                                                            <span>全课程</span>
                                                        </div>
                                                    </div>
                                                    <div className="coupon-expired">
                                                        立即使用
                                                    </div>
                                                </div>

                                            )
                                        }


                                    </div>
                                </TabPane>
                            </Tabs>
                        </Card>

                    </Col>
                </Row>
            </div>
        )
    }
}