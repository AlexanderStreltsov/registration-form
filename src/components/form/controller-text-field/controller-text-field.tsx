import React, { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import MaskInput from "../mask-input";

interface IControllerTextFieldProps {
  inputLabel: string;
  inputName: string;
  errorText?: string;
  isRequired?: boolean;
  isNeedMask?: boolean;
}

const ControllerTextField: FC<IControllerTextFieldProps> = ({
  inputLabel,
  inputName,
  errorText,
  isRequired,
  isNeedMask,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, formState: { errors } }) => (
        <TextField
          label={inputLabel}
          margin="dense"
          error={!!errors[inputName]}
          helperText={!!errors[inputName] && errorText}
          variant="filled"
          {...field}
          InputProps={
            (isNeedMask && { inputComponent: MaskInput as any }) || {}
          }
        />
      )}
      name={inputName}
      control={control}
      rules={{ required: isRequired || false }}
    />
  );
};

export default ControllerTextField;
