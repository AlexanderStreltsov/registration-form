import React, { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { StyledTextField } from "../styled";

interface IControllerTextFieldProps {
  inputLabel: string;
  inputName: string;
  patternCanInputChar?: RegExp;
  limitChars?: number;
  isCapitalize?: boolean;
  isAutoFocus?: boolean;
}

const ControllerTextField: FC<IControllerTextFieldProps> = ({
  inputLabel,
  inputName,
  patternCanInputChar,
  limitChars,
  isCapitalize,
  isAutoFocus,
}) => {
  const { control } = useFormContext();

  const checkValidCharacters = (
    value: string,
    patternCanInputChar: RegExp | undefined,
    limitChars: number | undefined,
    isCapitalize: boolean | undefined
  ) => {
    let newValue = value;

    if (patternCanInputChar) {
      newValue = value.trimStart().replace(patternCanInputChar, "");
    }

    if (limitChars) {
      newValue =
        newValue.length > limitChars ? newValue.slice(0, limitChars) : newValue;
    }

    if (isCapitalize && newValue) {
      newValue = newValue
        .split(" ")
        .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
        .join(" ");
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
            isCapitalize
          )}
          onChange={(evt) => {
            evt.target.value = checkValidCharacters(
              evt.target.value,
              patternCanInputChar,
              limitChars,
              isCapitalize
            );
            onChange(evt);
          }}
          error={invalid}
          helperText={error?.message as string}
          variant="standard"
          autoFocus={isAutoFocus}
          {...restField}
        />
      )}
      name={inputName}
      control={control}
    />
  );
};

export default ControllerTextField;
