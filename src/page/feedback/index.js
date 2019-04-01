import React from 'react';
import './index.less'
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate,
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
 class Feedback extends React.Component {
    state={
        textCount:500
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div className="headtitle">
                    意见反馈
                </div>
                <div className="feedbackList">
                    <div>
                        <FormItem>
                            {getFieldDecorator('issueType')(
                                <RadioGroup>
                                    <Radio value="a">内容意见</Radio>
                                    <Radio value="b">产品建议</Radio>
                                    <Radio value="c">技术问题</Radio>
                                    <Radio value="d">其它</Radio>
                                </RadioGroup>
                            )}
                        </FormItem>
                    </div>
                    <div className="issueDesBlock">
                        <FormItem>
                            {getFieldDecorator('issueDes')(
                                <textarea onChange={(e)=>{
                                   let temp = 500;
                                   this.setState({
                                       textCount:temp-e.target.value.length
                                   })


                                }}  maxLength="500" cols="120" rows="8" className="issueTextarea"
                                          placeholder="请填写具体内容帮助我们了解您的意见与建议。"></textarea>
                            )}
                        </FormItem>
                        <div className="counter">{this.state.textCount}</div>
                    </div>


                </div>
            </div>
        )
    }
}
export default Form.create()(Feedback);