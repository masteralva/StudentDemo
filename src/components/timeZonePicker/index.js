import React from 'react';
import { TreeSelect  } from 'antd';
const TreeNode = TreeSelect.TreeNode;
const timeZone = [
    {
        index:-12,
        value:"东西十二区 ( UTC +12 )",
        title:"东西十二区 ( UTC +12 )",
        key:"东西十二区 ( UTC +12 )"
    },
    {
        index:-11,
        value:"东十一区 ( UTC +11 )",
        title:"东十一区 ( UTC +11 )",
        key:"东十一区 ( UTC +11 )"
    },
    {
        index:-10,
        value:"东十区 ( UTC +10 )",
        title:"东十区 ( UTC +10 )",
        key:"东十区 ( UTC +10 )"
    },
    {
        index:-9,
        value:"东九区 ( UTC +9 )",
        title:"东九区 ( UTC +9 )",
        key:"东九区 ( UTC +9 )"
    },
    {
        index:-8,
        value:"东八区 ( UTC +8 )",
        title:"东八区 ( UTC +8 )",
        key:"东八区 ( UTC +8 )"
    },
    {
        index:-7,
        value:"东七区 ( UTC +7 )",
        title:"东七区 ( UTC +7 )",
        key:"东七区 ( UTC +7 )"
    },
    {
        index:-6,
        value:"东六区 ( UTC +6 )",
        title:"东六区 ( UTC +6 )",
        key:"东六区 ( UTC +6 )"
    },
    {
        index:-5,
        value:"东五区 ( UTC +5 )",
        title:"东五区 ( UTC +5 )",
        key:"东五区 ( UTC +5 )"
    },
    {
        index:-4,
        value:"东四区 ( UTC +4 )",
        title:"东四区 ( UTC +4 )",
        key:"东四区 ( UTC +4 )"
    },
    {
        index:-3,
        value:"东三区 ( UTC +3 )",
        title:"东三区 ( UTC +3 )",
        key:"东三区 ( UTC +3 )"
    },
    {
        index:-2,
        value:"东二区 ( UTC +2 )",
        title:"东二区 ( UTC +2 )",
        key:"东二区 ( UTC +2 )"
    },
    {
        index:-1,
        value:"东一区 ( UTC +1 )",
        title:"东一区 ( UTC +1 )",
        key:"东一区 ( UTC +1 )"
    },
    {
        index:0,
        value:"中时区 ( UTC +0 )",
        title:"中时区 ( UTC +0 )",
        key:"中时区 ( UTC +0 )"
    },
    {
        index:1,
        value:"西一区 ( UTC -1 )",
        title:"西一区 ( UTC -1 )",
        key:"西一区 ( UTC -1 )"
    },
    {
        index:2,
        value:"西二区 ( UTC -2 )",
        title:"西二区 ( UTC -2 )",
        key:"西二区 ( UTC -2 )"
    },
    {
        index:3,
        value:"西三区 ( UTC -3 )",
        title:"西三区 ( UTC -3 )",
        key:"西三区 ( UTC -3 )"
    },
    {
        index:4,
        value:"西四区 ( UTC -4 )",
        title:"西四区 ( UTC -4 )",
        key:"西四区 ( UTC -4 )"
    },
    {
        index:5,
        value:"西五区 ( UTC -5 )",
        title:"西五区 ( UTC -5 )",
        key:"西五区 ( UTC -5 )"
    },
    {
        index:6,
        value:"西六区 ( UTC -6 )",
        title:"西六区 ( UTC -6 )",
        key:"西六区 ( UTC -6 )"
    },
    {
        index:7,
        value:"西七区 ( UTC -7 )",
        title:"西七区 ( UTC -7 )",
        key:"西七区 ( UTC -7 )"
    },
    {
        index:8,
        value:"西八区 ( UTC -8 )",
        title:"西八区 ( UTC -8 )",
        key:"西八区 ( UTC -8 )"
    },
    {
        index:9,
        value:"西九区 ( UTC -9 )",
        title:"西九区 ( UTC -9 )",
        key:"西九区 ( UTC -9 )"
    },
    {
        index:10,
        value:"西十区 ( UTC -10 )",
        title:"西十区 ( UTC -10 )",
        key:"西十区 ( UTC -10 )"
    },
    {
        index:11,
        value:"西十一区 ( UTC -11 )",
        title:"西十一区 ( UTC -11 )",
        key:"西十一区 ( UTC -11 )"
    },
    {
        index:12,
        value:"西十二区 ( UTC -12 )",
        title:"西十二区 ( UTC -12 )",
        key:"西十二区 ( UTC -12 )"
    },


]


export default class TimeZonePicker extends React.Component {
    state = {
        value: undefined,
    }

    onChange = (value) => {
        this.setState({ value });
    }
    componentDidMount(){
        const localTimeZone =new Date().getTimezoneOffset()/60;
        timeZone.forEach((value)=>{
            console.log(value)
            console.log(localTimeZone)
            if( value.index == localTimeZone){
                console.log("in")
                this.setState({
                    defaultValue:value.value
                })
            }
        })

    }
    render(){
        var i="";
        const localTimeZone =new Date().getTimezoneOffset()/60;
        timeZone.forEach((value)=>{
            if( value.index == localTimeZone){
                i = value.value;
            }
        })
        return(
                <TreeSelect
                    style={{ width: 300 }}
                    defaultValue={i}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="所在时区"
                    allowClear
                    onChange={this.onChange}
                >
                    {timeZone.map(
                        (v)=>   <TreeNode value={v.value} title={v.title} key={v.key} />
                    )}
                </TreeSelect>
            )
    }
}