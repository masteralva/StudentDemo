import React from 'react';
import { Dropdown, Layout, Menu, Breadcrumb,Icon,Button} from 'antd';
import './style/index.less'
import PropTypes from 'prop-types';
import {Link,NavLink} from "react-router-dom";
const { Header, Content, Footer } = Layout;

export default class iLayout extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    //方法定义区
    logout=()=>{
        this.context.router.history.push("/login")
    }



    menu = (
        <Menu>
            <Menu.Item >
                <div className="dropContainer">
                    <div className="dropHeader">
                        <div>
                            <img className="userLogo" alt="一米五的我太矮了" title="一米五的我太矮了"
                                 src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqFBRicygSkkZhjUMPANl9RkzphTh9icvmib3ItuwrlaMxy9TZuiceRrhHicvkbBXS88FZ1ichNqOJpTMA/132" />
                        </div>
                        <div className="dropHeaderDes">
                            <div className="nickName">一米五的我太矮了</div>
                            <div>
                                <span className="nation">英国</span>
                                <span className="deposit">余额 300</span>
                            </div>
                        </div>

                    </div>
                    <div className="navBtns">
                        <div className="flexRow">
                            <Link to="/profile/record">
                                <div className="eachBtn">
                                    <Icon type="snippets" theme="outlined" className="icon"/>
                                    <span>课时记录</span>
                                </div>
                            </Link>
                            <Link to="/profile/order">
                                <div className="eachBtn">
                                    <Icon type="snippets" theme="outlined" className="icon"/>
                                    <span>我的订单</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flexRow">
                            <Link to="/profile/discount">
                                <div className="eachBtn">
                                    <Icon type="gift" theme="outlined" className="icon"/>
                                    <span>优惠劵</span>
                                </div>
                            </Link>
                            <Link to="/userCentre">
                                <div className="eachBtn">
                                    <Icon type="setting" theme="outlined" className="icon"/>
                                    <span>个人设置</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Button onClick={this.logout} type="danger">
                        安全退出
                    </Button>

                </div>
            </Menu.Item>
        </Menu>
    );
    render() {
        return (
            <Layout className="layout">
                <Header className="header">
                    <a className="logoLink" href="https://www.ihatoo.com/index">

                    </a>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['homePage']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="homePage"><Link to='/homePage'>主页</Link></Menu.Item>
                        <Menu.Item key="1"><Link to='/1'>购买课程</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/2'>我的课程</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/3'>帮助反馈</Link></Menu.Item>
                    </Menu>
                    <div className='gap'></div>
                    <div className="userSetting" >
                        <Link style={{marginRight:"20px"}} to="/questions">
                            <Icon type="question-circle" theme="filled" className="questions"  />
                        </Link>
                        <Dropdown overlay={this.menu}>
                            <img className="dd-menu-trigger new-dd-menu-trigger" alt="一米五的我太矮了" title="一米五的我太矮了"
                                 src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqFBRicygSkkZhjUMPANl9RkzphTh9icvmib3ItuwrlaMxy9TZuiceRrhHicvkbBXS88FZ1ichNqOJpTMA/132" />
                        </Dropdown>
                    </div>
                </Header>
                <Content style={{ padding: '0' }}>
                    <Breadcrumb style={{ margin: '20px 50px' }}>

                    </Breadcrumb>
                    <div style={{ minHeight: '280px',margin:"0 auto" }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    {/*哈兔学生端*/}
                </Footer>
            </Layout>
        )
    }
}