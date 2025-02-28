import React, { useState } from "react";

export class LoginFormC extends React.Component {
    state={
        email:'',
        password:''
    }
    componentDidMount (){
        console.log('Class component Did Mount')
    }

    componentDidUpdate (){
        console.log('Class component Did Update')
    }

    componentWillUnmount (){
        console.log('Class component Will Unmount')
    }

    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }

    handlePassword=(e)=>{
        this.setState({
            Password:e.target.value
        })
    }

    render(){
        return <div>
        <h2>Class example</h2>
         <input value={this.state.email} onChange={this.handleEmail} placeholder='email'/>
         <input value={this.state.Password} onChange={this.handlePassword} placeholder='password'/>

        </div>
    }
}

export function LoginFormF (){
    const [email,setEmail]=useState(' ');
    const [Password,setPassword]=useState(' ')

    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    return <div>
        <h2>Function example</h2>
         <input value={email} onChange={handleEmail} placeholder='email'/>
         <input value={Password} onChange={handlePassword} placeholder='password'/>
    </div>
}