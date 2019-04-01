import React from 'react';
import './index.less'
import {Card, Row, Col, Badge, Calendar,Button,Divider,Tree,Carousel} from 'antd';
import CalendarData from "./data";
import {Link} from "react-router-dom";



const TreeNode = Tree.TreeNode;

const col1={
    xs: 24,
    sm: 24,
    md: 24,
    lg: 4,
    xl: 4,
}
const col2={
    xs: 24,
    sm: 24,
    md: 24,
    lg: 20,
    xl: 20,
    style: { marginBottom: 24 },
}

export default class HomePage extends React.Component {

    listData= (e)=>{
        return(
            <div className="innerList">
                <li>
                    <Badge status={"success"} text={"早上8点，刘安成老师给西班牙罗纳尔多上课"} />
                </li>
                <li>
                    <Badge status={"warning"} text={"早上8点，给小朋友上课"} />
                </li>
                <li>
                    <Badge status={"default"} text={"早上8点，给小朋友上课"} />
                </li>
                <li>
                    <Badge status={"error"} text={"早上8点，给小朋友上课"} />
                </li>
                <li>
                    <Badge status={"processing"} text={"早上8点，给小朋友上课"} />
                </li>
                <li>
                    <Badge status={"success"} text={"早上8点，给小朋友上课"} />
                </li>
            </div>

        )
    }

    render() {
  

        return (
            <div className="homePage">
                <Row gutter={20}>
                    <Col {...col2}>
                        <div className="banner">
                            <Carousel autoplay effect="fade">
                                <div><img className="bannerImg" src={'/banner1.jpg'}/></div>
                                <div><img className="bannerImg" src={'/banner2.jpg'}/></div>
                                <div><img className="bannerImg" src={'/banner3.jpg'}/></div>
                                <div><img className="bannerImg" src={'/banner4.jpg'}/></div>
                            </Carousel>
                        </div>

                        <Card className="centerCard eachBlock" >
                            <div className="courseTable abs">
                                课程表
                            </div>
                            <Calendar onSelect={
                                (e)=>{
                                    this.listData(e)
                                    console.log(e)
                                    console.log(e.year(),e.month()+1,e.date())
                                }
                            } fullscreen={false} />
                            <Divider/>
                            <div className="courseListContainer">
                                <div className="courseList">
                                    {this.listData()}
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col {...col1}>
                        <Row>
                            <Card className="myCourseCard" >
                                <div className="courseTable">
                                    我的学时
                                </div>
                                <Divider />
                                <div className="myStudyTime">
                                    <Row gutter={20} className="studyFlex">
                                        <Col className="borderLeft" span={10}>
                                            <Row className="leftSide leftSideTitle">
                                                剩余学时
                                            </Row>
                                            <Row className="leftSide leftSideNumber">
                                                600节
                                            </Row>
                                        </Col>
                                        <Col span={14}  className="rightSide">
                                            <Row gutter={10}>
                                                <span className="rightSideTitle">
                                                   总学时：
                                                </span >
                                                <span className="rightSideContent">
                                                    170节
                                                </span>

                                            </Row>
                                            <Row gutter={10}>
                                                <span className="rightSideTitle">
                                                   消耗学时：
                                                </span >
                                                <span className="rightSideContent">
                                                    170节
                                                </span>
                                            </Row>
                                        </Col>


                                    </Row>


                                    <Divider />

                                    <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"
                                    }}>
                                        <Button href="#/profile/record">
                                            查看
                                        </Button>
                                    </div>

                                </div>
                            </Card>
                        </Row>
                        <Row>
                            <Card className="weekHomeworkCard">
                                <div className="courseTable">
                                    本周作业
                                </div>
                                <div className="homeworkBrife">
                                    <Tree
                                        defaultExpandedKeys={['0-0-0']}
                                        onSelect={this.onSelect}
                                    >
                                        <TreeNode title="第一章" key="0-0">
                                            <TreeNode title="第一课(拼音)" key="0-0-0">
                                                <TreeNode title="熟读26和拼音" key="0-0-0-0" />
                                                <TreeNode title="完成音标" key="0-0-0-1" />
                                                <TreeNode title="完成练习" key="0-0-0-2" />
                                            </TreeNode>
                                            <TreeNode title="第二课(写汉字)" key="0-0-1">
                                                <TreeNode title="会写自己的名字" key="0-0-1-0" />
                                            </TreeNode>
                                            <TreeNode title="第三课(成语故事)" key="0-0-2">
                                                <TreeNode title="盲人摸象的含义" key="0-0-2-0" />
                                                <TreeNode title="讲故事给爸爸听" key="0-0-2-1" />
                                            </TreeNode>
                                            <TreeNode title="第一课(拼音)" key="1-1-0">
                                                <TreeNode title="熟读26和拼音" key="1-1-1-0" />
                                                <TreeNode title="完成音标" key="1-1-1-1" />
                                                <TreeNode title="完成练习" key="1-1-1-2" />
                                            </TreeNode>
                                            <TreeNode title="第二课(写汉字)" key="1-1-1">
                                                <TreeNode title="会写自己的名字" key="1-1-1-0" />
                                            </TreeNode>
                                            <TreeNode title="第三课(成语故事)" key="1-1-3">
                                                <TreeNode title="盲人摸象的含义" key="1-1-1-0" />
                                                <TreeNode title="讲故事给爸爸听" key="1-1-1-1" />
                                            </TreeNode>
                                            <TreeNode title="第一课(拼音)" key="2-2-0">
                                                <TreeNode title="熟读26和拼音" key="2-2-2-0" />
                                                <TreeNode title="完成音标" key="2-2-2-1" />
                                                <TreeNode title="完成练习" key="2-2-2-2" />
                                            </TreeNode>
                                            <TreeNode title="第二课(写汉字)" key="2-2-1">
                                                <TreeNode title="会写自己的名字" key="2-2-2-0" />
                                            </TreeNode>
                                            <TreeNode title="第三课(成语故事)" key="2-2-2">
                                                <TreeNode title="盲人摸象的含义" key="2-2-2-0" />
                                                <TreeNode title="讲故事给爸爸听" key="2-2-2-1" />
                                            </TreeNode>
                                            <TreeNode title="第一课(拼音)" key="3-3-0">
                                                <TreeNode title="熟读26和拼音" key="3-3-3-0" />
                                                <TreeNode title="完成音标" key="3-3-3-1" />
                                                <TreeNode title="完成练习" key="3-3-3-2" />
                                            </TreeNode>
                                            <TreeNode title="第二课(写汉字)" key="3-3-1">
                                                <TreeNode title="会写自己的名字" key="3-3-3-0" />
                                            </TreeNode>
                                            <TreeNode title="第三课(成语故事)" key="3-3-2">
                                                <TreeNode title="盲人摸象的含义" key="3-3-3-0" />
                                                <TreeNode title="讲故事给爸爸听" key="3-3-3-1" />
                                            </TreeNode>
                                        </TreeNode>
                                    </Tree>
                                </div>
                            </Card>
                        </Row>

                    </Col>

                </Row>
            </div>
        )
    }
}






