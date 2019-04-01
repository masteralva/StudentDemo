import React from 'react';
import './index.less'
import {Icon} from 'antd';
export default class Questions extends React.Component {

    render() {
        return (
            <div>
                <div className="headtitle">
                    意见反馈
                </div>
                <div className="questionList">
                    <div className="questionGroup">
                        <div className="ask" >
                            <Icon style={{color:"#1890ff",marginRight:"8px",fontSize: "13px"}} type="question-circle" theme="outlined" />
                            <span>报名后如何上课?</span>
                        </div>
                        <div className="answer">
                            报名后，你需要在指定的时间上课，可以提前10分钟进入教室哦。
                        </div>
                    </div>
                    <div className="questionGroup">
                        <div className="ask" >
                            <Icon style={{color:"#1890ff",marginRight:"8px",fontSize: "13px"}} type="question-circle" theme="outlined" />
                            <span>错过课程怎么办?</span>
                        </div>
                        <div className="answer">
                            之后会有老师联系你，给与你相关的视频教材，还可以自行约一节课进行补课。
                        </div>
                    </div>
                    <div className="questionGroup">
                        <div className="ask" >
                            <Icon style={{color:"#1890ff",marginRight:"8px",fontSize: "13px"}} type="question-circle" theme="outlined" />
                            <span>不满意可以退款吗?</span>
                        </div>
                        <div className="answer">
                            你可以拨打电话或者在微信上申请退款。
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}