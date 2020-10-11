import * as React from "react";
import {RHFInput} from "react-hook-form-input";
import {Input} from "antd";
import ConnectForm from "./connectForm";

const FormMetadata = () => {
    return (
        <ConnectForm>
            {({register, setValue}) => (
                <>
                    <RHFInput
                        as={<Input placeholder="Test Input2"/>}
                        rules={{required: true}}
                        name="testInput5"
                        register={register}
                        setValue={setValue}
                    />
                    <RHFInput
                        as={<Input placeholder="Test Input2"/>}
                        rules={{required: true}}
                        name="testInput6"
                        register={register}
                        setValue={setValue}
                    />
                </>
            )}
        </ConnectForm>
    );
};

export default FormMetadata;