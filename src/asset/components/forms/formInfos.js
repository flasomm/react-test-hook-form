import * as React from "react";
import {RHFInput} from 'react-hook-form-input';
import {Select, Input} from 'antd';
import ConnectForm from "./connectForm";

const {Option, OptGroup} = Select;

const FormInfos = () => {
    return (
        <ConnectForm>
            {({register, setValue}) => (
                <>
                    <RHFInput
                        as={
                            <Select defaultValue="lucy" style={{width: 200}}>
                                <OptGroup label="Manager">
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                </OptGroup>
                                <OptGroup label="Engineer">
                                    <Option value="Yiminghe">yiminghe</Option>
                                </OptGroup>
                            </Select>
                        }
                        rules={{required: true}}
                        name="testSelect1"
                        register={register}
                        setValue={setValue}
                    />
                    <RHFInput
                        as={<Input placeholder="Test Input1"/>}
                        rules={{required: true}}
                        name="testInput1"
                        register={register}
                        setValue={setValue}
                    />
                </>
            )}
        </ConnectForm>
    );
};

export default FormInfos;