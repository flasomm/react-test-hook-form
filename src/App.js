import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';

import {SideBarMenu, BreadCrumb} from './components';
import {TabGroups} from './asset/components';

const {Header, Content, Footer} = Layout;

function App() {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <SideBarMenu/>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}/>
                <Content style={{margin: '0 16px'}}>
                    <BreadCrumb/>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <TabGroups/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default App;
