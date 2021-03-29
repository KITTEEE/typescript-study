import React, { useState,useEffect } from 'react'
import {Redirect} from 'react-router-dom';
import {Button,message} from 'antd';
import axios from 'axios';
import './style.css';

const Home:React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    useEffect(() => {
        axios.get('/api/islogin').then(res => {
            if(res.data.data) {
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        }).catch(err => {
            console.log(err);
        })
    })

    const handleLogout = () => {
        axios.get('/api/logout').then(res => {
            if(res.data.data) {
                setIsLogin(false);
            }
        }).catch(err => {
            message.error('退出失败')
        })
    }
    if(isLogin) {
        return (<div className="home-page">
            <Button>爬取数据</Button>
            <Button>展示数据</Button>
            <Button onClick={handleLogout}>退出登录</Button>
        </div>)
    }else {
        return <Redirect to="/login"></Redirect>
    }
}

export default Home