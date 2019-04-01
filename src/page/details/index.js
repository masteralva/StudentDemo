import React from 'react';
import './index.less'
import {Icon, Button, Tabs} from 'antd'
import originData from './listData'
import {Link} from "react-router-dom";
const TabPane = Tabs.TabPane;
export default class Details extends React.Component {
    state = {
        listData: []
    }

    componentDidMount() {
        console.log(originData)
        this.setState({
            listData: originData
        })
    }

    checkOption = (indexs, index) => {
        let tempArr = this.state.listData;
        console.log(indexs, index)
        console.log(tempArr)
        tempArr[indexs].options.forEach((item)=>{
            item.checked = false
        })
        tempArr[indexs].options[index].checked = !tempArr[indexs].options[index].checked
        this.setState({
            listData: tempArr
        })
    }

    render() {
        const {listData} = this.state;
        return (
            <div className='detail-container'>
                <div className="detail-container-header">
                    <div className="title-row">
                        <div className="course-title">数据结构(下)(自主模式)</div>
                        <div className='tag'>自主学习</div>
                    </div>
                    <div className="course-intro">
                        <video
                            style={{width: '520px', height: "300px"}}
                            src="http://cm14-ccm1-1.play.bokecc.com/flvs/ca/QxrYx/uOYtFS4cBP-20.mp4?t=1539658179&key=03EBF6C84FFA26E16C6E1BEB346AA3FD&utm_xuetangx=P5Dgn3rg06F3sS3E"
                            controls="controls">
                            your browser does not support the video tag
                        </video>
                        <div className="literate">
                            <div className="course-des-tit">课程描述</div>
                            <div className="course-des">
                                本课程旨在围绕各类数据结构的设计与实现，揭示其中的规律原理与方法技巧；同时针对算法设计及其性能分析，使学生了解并掌握主要的套路与手段。
                            </div>
                            <div className='line'></div>
                            <div className="price-panel">
                                <div className="origin-price">
                                    <div className="origin-price-label">价格</div>
                                    <div className="origin-price-value">¥ 4299.00</div>
                                </div>
                                <div className="activity-price">
                                    <div className="activity-price-label">促销价</div>
                                    <div className="activity-price-value">¥ 3999.00</div>
                                </div>
                            </div>
                            <div className="ht-sku-list">
                                {
                                    listData.map((items, indexs) => {
                                        return (
                                            <div key={indexs} className="ht-sku-row">
                                                <div className="ht-sku-propName">
                                                    {items.propName}
                                                </div>
                                                <div className="ht-sku-propOptions">
                                                    {
                                                        items.options.map((item, index) => {
                                                            return (
                                                                <div key={index}
                                                                     onClick={this.checkOption.bind(this, indexs, index)}
                                                                     className={!item.checked ? "sku-option" : "sku-option-checked"}>
                                                                    {item.value}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="button-row">
                                <Button style={{border:"0px",background:"#e9c02f",color:"#fff",width: "45%", height: "45px"}}>
                                    <Link to="/orderConfirm">
                                    立即购买
                                    </Link>
                                </Button>
                                <Button type="default" style={{width: "25%", height: "45px",marginLeft:"30px"}}>申请试读</Button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="course-demos">
                    <Tabs tabBarGutter={80} size='large' tabBarStyle={{width: "680px"}} defaultActiveKey="1">
                        <TabPane tab="课程内容" key="1">
                            <div className='firstTab bar-tab-item'>
                                <div className="title">精彩推荐</div>
                                <div>
                                    <img
                                        src="//storagecdn.xuetangx.com/public_assets/xuetangx/course_introduction/20181008153802874994"/>
                                    <div className="separate"/>
                                </div>
                                <div>
                                    <img
                                        src="//storagecdn.xuetangx.com/public_assets/xuetangx/course_introduction/20181008153802874994"/>
                                    <div className="separate"/>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="授课教师" key="2">
                            <div className='secondTab bar-tab-item'>
                                <div className="title">课程简介</div>
                                <div>
                                    数据结构是计算机科学的关键内容，也是构建高效算法的必要基础。其中涉及的知识，在相关专业的课程系统中始终处于核心位置。本课程旨在围绕各类数据结构的设计与实现，揭示其中的规律原理与方法技巧；同时针对算法设计及其性能分析，使学生了解并掌握主要的套路与手段。讲授的主题从基础的数据结构，一直延伸至新近的研究成果。
                                </div>
                                <div className="separate"/>
                                <div className="title">课程章节</div>
                                <div className='subtitle'>
                                    第零章
                                </div>
                                <div>选课之前</div>
                                <div>考核方式</div>
                                <div>关于课程教材与讲义</div>
                                <div>PA晋级申请</div>
                                <div className='subtitle'>
                                    第七章 二叉搜索树
                                </div>
                                <div>选课之前</div>
                                <div>考核方式</div>
                                <div>关于课程教材与讲义</div>
                                <div>PA晋级申请</div>
                            </div>
                        </TabPane>
                        <TabPane tab="精华笔记" key="3">
                            <div className='thirdTab bar-tab-item'>
                                <div className="title">精华笔记</div>
                                <div>数据结构（上） 大合集</div>
                                <div>
                                    这门课的笔记我是用OneNote做的，然后把它导成了PDF。虽说
                                    也有图片，但是清晰度不够高。PDF已经上传至百度云盘。 欢迎大家下载
                                    观看。 链接:http://pan.baidu.com/s/1i4Eg8EL 密码:xrcm以下是分章节的链
                                </div>
                                <div>
                                    <span>2016-09-01 22:09:00</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>by 西交大刘浩</span>
                                </div>
                                <div className="separate"/>
                            </div>
                        </TabPane>
                        <TabPane tab="常见问题" key="4">
                            <div className='thirdTab bar-tab-item'>

                            </div>
                        </TabPane>
                    </Tabs>
                </div>

            </div>
        )
    }
}