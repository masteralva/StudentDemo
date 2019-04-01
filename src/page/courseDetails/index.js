import React from 'react';
import "./index.less"
import {Card, Row, Col, Collapse,Icon,Button, Radio,Upload,Modal,Timeline } from 'antd'
const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
}
export default class CourseDetail extends React.Component {
    state = {
        filterName: '全部',
        homeworkModal:false,
        previewVisible: false,
        homeworkImg: false,
        previewImage: '',
        fileList: [],
    };
    /*
    *上传照片的事件
     */
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChange = ({ fileList }) => this.setState({ fileList })
    handleSizeChange = (e) => {
        this.setState({ filterName: e.target.value });
    }
    //作业弹窗事件
    handleHomework = (e) =>{
        e.stopPropagation();
        this.setState({ homeworkModal: true })
    }

    cancelHomework = () => this.setState({ homeworkModal: false });
    cancelHomeworkImg = () => this.setState({ homeworkImg: false });
    submitHomework = () =>{
        this.setState({ homeworkModal: false })
        console.log(this.state.fileList)
    }
    render() {

        const {homeworkImg, homeworkModal,previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        const Info = ({ title, value, bordered }) => (
            <div className="headerInfo">
                <span>{title}</span>
                <p>{value}</p>
                {bordered && <em />}
            </div>
        );

        return (
            <div className="detailsOverViewPaddingBox">
                <div className="detailsOverView ">
                    <Card bordered={false}>
                        <Row>
                            <Col sm={8} xs={24}>
                                <Info title="总课时" value="10个课时" bordered />
                            </Col>
                            <Col sm={8} xs={24}>
                                <Info title="已完成" value="3课时" bordered />
                            </Col>
                            <Col sm={8} xs={24}>
                                <Info title="请假次数" value="24次" />
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div className="filter">
                    <div>
                        <Radio.Group value={this.state.filterName} onChange={this.handleSizeChange}>
                            <Radio.Button value="全部">全部</Radio.Button>
                            <Radio.Button value="已学习">已学习</Radio.Button>
                            <Radio.Button value="未学习">未学习</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
                <div className="detailsList">
                    <Collapse onChange={callback}>
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
                                <div className="detailsListState">
                                    <div className="homeWork" style={{color:"#1890ff",marginRight:"15px"}} onClick={this.handleHomework} >作业</div>
                                    <div style={{color:"#1890ff",marginRight:"15px"}} onClick={(e)=>{ e.stopPropagation();alert('请假')}}>请假</div>
                                    <Icon type="right" theme="outlined" />
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
                                <div className="detailsListState">
                                    <div style={{color:"#1890ff",marginRight:"15px"}}>作业</div>
                                    <div style={{color:"#1890ff",marginRight:"15px"}}>请假</div>
                                    <Icon type="right" theme="outlined" />
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
                                <div className="detailsListState">
                                    <div style={{color:"#1890ff",marginRight:"15px"}}>作业</div>
                                    <div style={{color:"#1890ff",marginRight:"15px"}}>请假</div>
                                    <Icon type="right" theme="outlined" />
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


                <Modal title="上传你的作业" visible={homeworkModal} footer={null} onCancel={this.cancelHomework}>

                    <div>
                        完成唐诗三百首，默写《鹅鹅鹅》。
                    </div>
                    <div>
                        图片附件：
                        <div className="attachment">
                            <img onClick={()=>{this.setState({ homeworkImg: true })}} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="作业图片"/>
                            <img onClick={()=>{this.setState({ homeworkImg: true })}} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="作业图片"/>
                        </div>
                        <Modal visible={homeworkImg} footer={null} onCancel={this.cancelHomeworkImg}>
                            <img alt="example" style={{ width: '100%' }} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                        </Modal>
                    </div>
                    <div>
                        作业上传：
                    </div>
                    <div className="clearfix">
                        <Upload
                            action="//jsonplaceholder.typicode.com/posts/"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >
                            {fileList.length >= 5 ? null : uploadButton}
                        </Upload>
                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </div>
                    <Button type="primary" onClick={this.submitHomework}>提交</Button>
                </Modal>

            </div>

        )
    }
}