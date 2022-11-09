import React, { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { StyledTextField } from "../styled";

interface IControllerTextFieldProps {
  inputLabel: string;
  inputName: string;
  patternCanInputChar?: RegExp;
  limitChars?: number;
  isCapitalizeFirstChar?: boolean;
}

const ControllerTextField: FC<IControllerTextFieldProps> = ({
  inputLabel,
  inputName,
  patternCanInputChar,
  limitChars,
  isCapitalizeFirstChar,
}) => {
  const { control } = useFormContext();

  const checkValidCharacters = (
    value: string,
    patternCanInputChar: RegExp | undefined,
    limitChars: number | undefined,
    isCapitalizeFirstChar: boolean | undefined
  ) => {
    let newValue = value;

    if (patternCanInputChar) {
      newValue = value.replace(patternCanInputChar, "");
    }

    if (limitChars) {
      newValue =
        newValue.length > limitChars ? newValue.slice(0, limitChars) : newValue;
    }

    if (isCapitalizeFirstChar && newValue) {
      newValue = newValue[0].toUpperCase() + newValue.slice(1);
    }

    return newValue;
  };

  return (
    <Controller
      render={({
        field: { onChange, value, ...restField },
        fieldState: { error, invalid },
      }) => (
        <StyledTextField
          label={inputLabel}
          value={checkValidCharacters(
            value,
            patternCanInputChar,
            limitChars,
            isCapitalizeFirstChar
          )}
          onChange={(evt) => {
            evt.target.value = checkValidCharacters(
              evt.target.value,
              patternCanInputChar,
              limitChars,
              isCapitalizeFirstChar
            );
            onChange(evt);
          }}
          error={invalid}
          helperText={error?.message as string}
          variant="standard"
          {...restField}
        />
      )}
      name={inputName}
      control={control}
    />
  );
};

export default ControllerTextField;
