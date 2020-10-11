import * as React from "react";
import {RHFInput} from "react-hook-form-input";
import {Input} from "antd";
import ConnectForm from "./connectForm";

const FormPlayouts = () => {
    return (
        <ConnectForm>
            {({register, setValue}) => (
                <>
                    <RHFInput
                        as={<Input placeholder="Test Input2" disabled/>}
                        rules={{required: true}}
                        name="testInput2"
                        register={register}
                        setValue={setValue}
                    />
                    <RHFInput
                        as={<Input placeholder="Test Input2" disabled/>}
                        rules={{required: true}}
                        name="testInput3"
                        register={register}
                        setValue={setValue}
                    />
                </>
            )}
        </ConnectForm>
    );
};

export default FormPlayouts;