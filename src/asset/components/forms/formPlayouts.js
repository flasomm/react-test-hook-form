import * as React from "react";
import {useForm} from "react-hook-form";
import {RHFInput} from "react-hook-form-input";
import {Input} from "antd";

const FormPlayouts = ({asset}) => {
    const {register, setValue} = useForm({
        defaultValues: asset
    });
    return (
        <form>
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
        </form>
    );
};

export default FormPlayouts;