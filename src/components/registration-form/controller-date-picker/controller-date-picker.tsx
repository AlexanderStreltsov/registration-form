import React, { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { StyledTextField } from "../styled";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import "dayjs/locale/ru";

interface IDatePickerFieldProps {
  inputLabel: string;
  inputName: string;
}

const ControllerDatePickerField: FC<IDatePickerFieldProps> = ({
  inputLabel,
  inputName,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({
        field: { value, onBlur, ...restField },
        fieldState: { error, invalid },
      }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
            <DatePicker
              label={inputLabel}
              value={value}
              openTo="year"
              views={["year", "month", "day"]}
              maxDate={dayjs()}
              renderInput={(params) => {
                return (
                  <StyledTextField
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                      placeholder: "дд.мм.гггг",
                    }}
                    error={invalid}
                    helperText={error?.message as string}
                    variant="standard"
                    onBlur={onBlur}
                  />
                );
              }}
              {...restField}
            />
          </LocalizationProvider>
        );
      }}
      name={inputName}
      control={control}
    />
  );
};

export default ControllerDatePickerField;
