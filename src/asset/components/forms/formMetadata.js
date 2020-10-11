import * as React from "react";
import {useForm} from "react-hook-form";
import {RHFInput} from "react-hook-form-input";
import {Input} from "antd";

const FormMetadata = ({asset}) => {
    const {register, setValue} = useForm({
        defaultValues: asset
    });
    return (
        <form>
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
        </form>
    );
};

export default FormMetadata;