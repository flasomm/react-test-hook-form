import React from "react";
import {useFormContext} from "react-hook-form";
import {Button} from "antd";

const SaveAssetButton = ()  => {
    const {getValues} = useFormContext();

    const onSubmit = () => {
        const values = getValues();
        console.log('values', values);
    };

  return (
      <Button type="primary" onClick={onSubmit}>Save Changes</Button>
  )
};

export default SaveAssetButton;