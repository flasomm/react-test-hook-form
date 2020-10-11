import React from "react";
import {Form, Tabs} from "antd";
import FormInfos from '../forms/formInfos'
import FormPlayouts from '../forms/formPlayouts'
import FormMetadata from '../forms/formMetadata'
import FormEditorial from '../forms/formEditorial'
const {TabPane} = Tabs;

const TabGroups = () => {
    const callback = key => {
        console.log(key);
    };

    return (
        <Form name="asset">
            <Tabs defaultActiveKey="1" onChange={callback} type="card">
                <TabPane tab="Asset Infos" key="1">
                    <FormInfos/>
                </TabPane>
                <TabPane tab="Playouts" key="2">
                    <FormPlayouts/>
                </TabPane>
                <TabPane tab="Taxonomy Extra Metadata" key="3">
                    <FormMetadata/>
                </TabPane>
                <TabPane tab="Editorial" key="4">
                    <FormEditorial/>
                </TabPane>
            </Tabs>
        </Form>
    );
};

export default TabGroups;