
import React from 'react';
import './index.less';
import {Link,Route} from 'react-router-dom';
export default class CoursePurchase extends React.Component {

    render() {
        return (
            <div>
                <div className='category'>
                    <div className='category-row'>
                        <span className='category-title'>
                            分类一：
                        </span>
                        <div>
                            <a href="javasript:;">分类1</a>
                            <a href="javasript:;">分类2</a>
                            <a href="javasript:;">分类3</a><a href="javasript:;">分类1</a>
                            <a href="javasript:;">分类2</a>
                            <a href="javasript:;">分类3</a><a href="javasript:;">分类1</a>
                            <a href="javasript:;">分类2</a>
                            <a href="javasript:;">分类3</a><a href="javasript:;">分类1</a>
                            <a href="javasript:;">分类2</a>
                            <a href="javasript:;">分类3</a><a href="javasript:;">分类1</a>
                            <a href="javasript:;">分类2</a>
                            <a href="javasript:;">分类3</a><a href="javasript:;">分类1</a>
                            <a href="javasript:;">分类2</a>
                            <a href="javasript:;">分类3</a>
                        </div>

                    </div>
                    <div className='category-row'>
                        <span className='category-title'>
                            分类二：
                        </span>
                        <div>
                            <a href="javasript:;">分类1</a>
                            <a href="javasript:;">分类2</a>
                            <a href="javasript:;">分类3</a><a href="javasript:;">分类1</a>
                            <a href="javasript:;">分类2</a>
                            <a href="javasript:;">分类3</a><a href="javasript:;">分类1</a>
                            <a href="javasript:;">分类2</a>
                            <a href="javasript:;">分类3</a><a href="javasript:;">分类1</a>
                            <a href="javasript:;">分类2</a>
                            <a href="javasript:;">分类3</a><a href="javasript:;">分类1</a>
                            <a href="javasript:;">分类2</a>
                            <a href="javasript:;">分类3</a><a href="javasript:;">分类1</a>
                            <a href="javasript:;">分类2</a>
                            <a href="javasript:;">分类3</a>
                        </div>

                    </div>
                </div>
                <div className='list'>
                    <div className='listItem'>
                        <Link to='/courseDetails'>
                            <img src="http://www.xuetangx.com/asset-v1:TsinghuaX+30240184_2X+sp+type@asset+block@dsa.2.jpg" alt=""/>
                        </Link>

                        <div className='listItemContent'>
                            <div>
                                <span className="title1">数据结构(下)(自主模式)</span>
                                <span className='subTitle1'>计算机学科</span>
                            </div>
                            <div>
                                <span>邓俊辉教授 清华大学计算机系</span>
                                <span className='fenge'>|</span>
                                <span>可随时加入</span>
                                <span className='fenge'>|</span>
                                <span>24.4万人</span>
                                <span className='fenge'>|</span>
                                <span>课件全部开放</span>
                            </div>
                            <p className="txt"><span className="courseintro">简介</span>
                                数据结构是计算机科学的关键内容，也是构建高效算法的必要基础。其中涉及的知识，在相关专业的课程系统中始终处于核心位置。本课程旨在围绕各类数据结构的设计与实现，揭示其中的规律原理与方法技巧；同时针对算法设计及其性能分析，使学生了解并掌握主要的套路与手段。讲授的主题从基础的数据结构，一直延伸至新近的研究成果。
                            </p>

                        </div>
                    </div>

                    
                    
                    
                </div>
            </div>



        )
    }
}