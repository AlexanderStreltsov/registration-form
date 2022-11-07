import React, { FC, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";

interface IDatePickerFieldProps {
  inputLabel: string;
  inputName: string;
  errorText?: string;
  isRequired?: boolean;
}

const ControllerDatePickerField: FC<IDatePickerFieldProps> = ({
  inputLabel,
  inputName,
  errorText,
  isRequired,
}) => {
  const { control } = useFormContext();
  const [dateValue, setDateValue] = useState<Dayjs | null>(null);

  const checkHandleDateValid = () => {
    return dateValue ? dayjs(dateValue).isValid() : true;
  };

  return (
    <Controller
      render={({
        field: { onChange, value, ...restField },
        formState: { errors },
      }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
          <DatePicker
            label={inputLabel}
            value={dateValue}
            openTo="year"
            views={["year", "month", "day"]}
            maxDate={dayjs()}
            onChange={(newDateValue) => {
              onChange(newDateValue);
              setDateValue(newDateValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                margin="dense"
                error={!!errors[inputName] || !checkHandleDateValid()}
                helperText={
                  (!!errors[inputName] && errorText) ||
                  (!checkHandleDateValid() &&
                    "Необходимо указать корректную дату (дд.мм.гггг)")
                }
                inputProps={{
                  ...params.inputProps,
                  placeholder: "дд.мм.гггг",
                }}
                variant="filled"
              />
            )}
            {...restField}
          />
        </LocalizationProvider>
      )}
      name={inputName}
      control={control}
      rules={{ required: isRequired || false }}
    />
  );
};

export default ControllerDatePickerField;
