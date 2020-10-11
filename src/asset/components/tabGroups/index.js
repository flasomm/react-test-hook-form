import React from "react";
import {Tabs, Button} from "antd";
import FormInfos from '../forms/formInfos'
import FormPlayouts from '../forms/formPlayouts'
import FormMetadata from '../forms/formMetadata'
import FormEditorial from '../forms/formEditorial'
const {TabPane} = Tabs;

const TabGroups = () => {
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
    const callback = key => {
        console.log(key);
    };

    const onSubmit = () => {
    };

    return (
        <>
            <Button type="primary">Save Changes</Button>
            <Tabs defaultActiveKey="1" onChange={callback} type="card">
                <TabPane tab="Asset Infos" key="1">
                    <FormInfos onSubmit={onSubmit} store={store}/>
                </TabPane>
                <TabPane tab="Playouts" key="2">
                    <FormPlayouts onSubmit={onSubmit} store={store}/>
                </TabPane>
                <TabPane tab="Taxonomy Extra Metadata" key="3">
                    <FormMetadata onSubmit={onSubmit} store={store}/>
                </TabPane>
                <TabPane tab="Editorial" key="4">
                    <FormEditorial onSubmit={onSubmit} store={store}/>
                </TabPane>
            </Tabs>
        </>
    );
};

export default TabGroups;