import React from 'react';
import {Card, Row, Col, Modal,Tooltip, Progress} from 'antd'
import {Link,HashRouter,Route} from 'react-router-dom'
import './index.less'
export default class MyCourse extends React.Component {


    state={
        visible:false
    }

    openGallery = (imgSrc)=>{
        this.setState({
            visible:true,
            currentImg: '/gallery/'+imgSrc
        })
    }
    render(){
        const imgs = [
            ['1.png', '2.png'],
            ['6.png', '7.png'],
            ['11.png', '12.png'],
            ['14.png','15.png']
        ]
        const imgList = imgs.map((list,ind) => list.map((item,index) =>
            <Card
                key={index}
                style={{marginBottom:10}}
                cover={
                    <Link to="/2/second" >
                        <img className="cardImg" src={'/gallery/'+item}/>
                    </Link>
                }
            >

                <div className="des">
                    <div className="desTitle">
                        <span className="className">课程1</span>
                        <span className="classClass">(1v6)</span>
                        <div className="desDes">
                            那是一种内在的东西， 他们到达不了，也无法触及的
                        </div>
                    </div>
                    <div style={{flex:1}}></div>
                    <Tooltip  title="徐安伟/中国" arrowPointAtCenter>
                        <img className="dd-menu-trigger new-dd-menu-trigger teacherLogo" alt="一米五的我太矮了" title="一米五的我太矮了"
                             src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqFBRicygSkkZhjUMPANl9RkzphTh9icvmib3ItuwrlaMxy9TZuiceRrhHicvkbBXS88FZ1ichNqOJpTMA/132"/>
                    </Tooltip>
                </div>
                <div className="progress">
                    <Progress percent={50}/>
                </div>
                <div className="cardBottom">
                    <div className="classmateNumber">班级学员</div>
                    <div className="classmateGroup">
                        <Tooltip  title="徐安伟/中国" arrowPointAtCenter>
                            <img className="dd-menu-trigger new-dd-menu-trigger userLogo" alt="一米五的我太矮了" title="一米五的我太矮了"
                                 src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqFBRicygSkkZhjUMPANl9RkzphTh9icvmib3ItuwrlaMxy9TZuiceRrhHicvkbBXS88FZ1ichNqOJpTMA/132"/>
                        </Tooltip>
                        <Tooltip title="徐安伟/中国" arrowPointAtCenter>
                            <img className="dd-menu-trigger new-dd-menu-trigger userLogo" alt="一米五的我太矮了" title="一米五的我太矮了"
                                 src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqFBRicygSkkZhjUMPANl9RkzphTh9icvmib3ItuwrlaMxy9TZuiceRrhHicvkbBXS88FZ1ichNqOJpTMA/132"/>
                        </Tooltip>
                        <Tooltip title="徐安伟/中国" arrowPointAtCenter>
                            <img className="dd-menu-trigger new-dd-menu-trigger userLogo" alt="一米五的我太矮了" title="一米五的我太矮了"
                                 src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqFBRicygSkkZhjUMPANl9RkzphTh9icvmib3ItuwrlaMxy9TZuiceRrhHicvkbBXS88FZ1ichNqOJpTMA/132"/>
                        </Tooltip>
                        <Tooltip title="徐安伟/中国" arrowPointAtCenter>
                            <img className="dd-menu-trigger new-dd-menu-trigger userLogo" alt="一米五的我太矮了" title="一米五的我太矮了"
                                 src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqFBRicygSkkZhjUMPANl9RkzphTh9icvmib3ItuwrlaMxy9TZuiceRrhHicvkbBXS88FZ1ichNqOJpTMA/132"/>
                        </Tooltip>
                        <Tooltip title="徐安伟/中国" arrowPointAtCenter>
                            <img className="dd-menu-trigger new-dd-menu-trigger userLogo" alt="一米五的我太矮了" title="一米五的我太矮了"
                                 src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqFBRicygSkkZhjUMPANl9RkzphTh9icvmib3ItuwrlaMxy9TZuiceRrhHicvkbBXS88FZ1ichNqOJpTMA/132"/>
                        </Tooltip>
                        <Tooltip title="徐安伟/中国" arrowPointAtCenter>
                            <img className="dd-menu-trigger new-dd-menu-trigger userLogo" alt="一米五的我太矮了" title="一米五的我太矮了"
                                 src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqFBRicygSkkZhjUMPANl9RkzphTh9icvmib3ItuwrlaMxy9TZuiceRrhHicvkbBXS88FZ1ichNqOJpTMA/132"/>
                        </Tooltip>
                    </div>
                </div>
            </Card>
        ))
        return (
            <div className="card-wrap myClassConFlex">
                <div className="myClassCon">
                    <div className="colstyle">
                        {imgList[0]}
                    </div>
                    <div className="colgap"/>
                    <div className="colstyle">
                        {imgList[1]}
                    </div>
                    <div className="colgap"/>
                    <div className="colstyle">
                        {imgList[2]}
                    </div>
                    <div className="colgap"/>
                    <div className="colstyle">
                        {imgList[3]}
                    </div>
                </div>



            </div>
        );
    }
}