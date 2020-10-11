import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';

import {SideBarMenu, BreadCrumb} from './components';
import {SaveAssetButton, TabGroups} from './asset/components';
import {FormProvider, useForm} from "react-hook-form";

const {Header, Content, Footer} = Layout;

function App() {
    const store = {
        testSelect1: 'Yiminghe',
        testSelect2: 'jack',
        testInput1: 'testInput1',
        testInput2: 'testInput2',
        testInput3: 'testInput3',
        testInput4: 'testInput4',
        testInput5: 'testInput5',
        testInput6: 'testInput6',
    };
    const methods = useForm({defaultValues: store});
    return (
        <Layout style={{minHeight: '100vh'}}>
            <SideBarMenu/>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}/>
                <Content style={{margin: '0 16px'}}>
                    <BreadCrumb/>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <FormProvider {...methods} >
                            <SaveAssetButton/>
                            <TabGroups/>
                        </FormProvider>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default App;
