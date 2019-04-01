import React from 'react';
import "./index.less"
import { Input } from 'antd';

const InputGroup = Input.Group
export default class Name extends React.Component {
    state={
        password:["","","","","",""],
        autoFocus:[true,false,false,false,false,false]
    }
    onChange = (index,e) => {
        const { value } = e.target;
        const reg = /^[0-9]$/;
        if (!isNaN(value) && reg.test(value)||value=="") {
            let temp = this.state.password;
            let tempFocus = this.state.autoFocus;
            temp[index] = value
            tempFocus = tempFocus.map(()=>false)
            tempFocus[index+1]=true
            console.log(tempFocus)
            this.setState({
                password:temp,
                autoFocus:tempFocus
            })
        }


    }
    render() {
        const {autoFocus,password} = this.state;
        return (
            <div className="payment-container">
                <div>
                    支付方式
                </div>
                <div>
                    <InputGroup size="large" >
                        <Input autoFocus={autoFocus[0]} type="text" maxLength="1" className="psdInput" value={password[0]} onChange={this.onChange.bind(this,0)}/>
                        <Input autoFocus={autoFocus[1]} type="text" maxLength="1" className="psdInput" value={password[1]} onChange={this.onChange.bind(this,1)}/>
                        <Input autoFocus={autoFocus[2]} type="text" maxLength="1" className="psdInput" value={password[2]} onChange={this.onChange.bind(this,2)}/>
                        <Input autoFocus={autoFocus[3]} type="text" maxLength="1" className="psdInput" value={password[3]} onChange={this.onChange.bind(this,3)}/>
                        <Input autoFocus={autoFocus[4]} type="text" maxLength="1" className="psdInput" value={password[4]} onChange={this.onChange.bind(this,4)}/>
                        <Input autoFocus={autoFocus[5]} type="text" maxLength="1" className="psdInput" value={password[5]} onChange={this.onChange.bind(this,5)}/>
                    </InputGroup>

                </div>
            </div>
        )
    }
}