import React from "react";
import {Button, Menu, Typography, Avatar} from 'antd';
import { Link } from "react-router-dom";
import { HolderOutlined, MoneyCollectionOutlined,BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined, ScissorOutlined, GlobalOutlined, WechatOutlined } from "@ant-design/icons";
import icon from '../images/cryptocurrency.png' // not rendering image how to paste
const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="log-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            {/* <Button className="menu-control-container">
            </Button> */}
        </div>
        <Menu theme="Dark">
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to="/">SweetHome</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined/>}>
            <Link to="/news">News</Link>
          </Menu.Item> 

          <Menu.Item icon={<ScissorOutlined/>}>
            <Link to="/delete">Cut</Link>
          </Menu.Item>
          <Menu.Item icon={<GlobalOutlined/>}>
            <Link to="/Globalnews">GlobalNews</Link>
          </Menu.Item>
          <Menu.Item icon={<WechatOutlined/>}>
            <Link to="/ChatWithUs">ChatWithUs</Link>
          </Menu.Item>
          </Menu>
    </div>
  )
}
export default Navbar;