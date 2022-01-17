import {Button, Input} from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {loginSuccess} from './actions';

export const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleLogin = () => {
        let userRole = '';
            if(username === 'client' && password === 'client'){
                userRole = 'client';
            }else if(username === 'admin' && password === 'admin'){
                userRole = 'admin';
            }else if(username === 'company' && password === 'company'){
                userRole = 'company';
            }
            dispatch(loginSuccess(userRole));
    }

    return <div style={{width: '600px', margin: '10px auto'}}>
        <Input placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
        <Input placeholder="password" value={password} onChange={e => setPassword(e.target.value)}type="password"/>
        <Button onClick={handleLogin}>Login</Button>

    </div>
}