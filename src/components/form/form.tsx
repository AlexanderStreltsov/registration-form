import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { DefaultValues, SubmitHandler } from "react-hook-form";
import type { IRegistrationForm } from "../../types";
import { Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import ControllerDatePickerField from "./controller-date-picker";
import ControllerTextField from "./controller-text-field";
import { StyledFormWrapper, StyledForm, StyledButton } from "./styled";

const defaultValues: DefaultValues<IRegistrationForm> = {
  name: "",
  surname: "",
  date_of_birth: null,
  city: "",
  phone_number: "",
};

const Form = () => {
  const formMethods = useForm<IRegistrationForm>({ defaultValues });
  const { handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) =>
    console.log(JSON.stringify(data));

  return (
    <StyledFormWrapper elevation={2}>
      <Typography variant="h1">Регистрация</Typography>
      <FormProvider {...formMethods}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <ControllerTextField
            inputLabel="Имя"
            inputName="name"
            errorText="Пожалуйста, укажите имя"
            isRequired
          />
          <ControllerTextField
            inputLabel="Фамилия"
            inputName="surname"
            errorText="Пожалуйста, укажите фамилию"
            isRequired
          />
          <ControllerDatePickerField
            inputLabel="Дата рождения"
            inputName="date_of_birth"
            errorText="Пожалуйста, укажите дату рождения"
            isRequired
          />
          <ControllerTextField
            inputLabel="Город"
            inputName="city"
            errorText="Пожалуйста, укажите название города"
            isRequired
          />
          <ControllerTextField
            inputLabel="Телефон"
            inputName="phone_number"
            errorText="Необходимо указать номер телефона"
            isRequired
            isNeedMask
          />
          <StyledButton
            variant="contained"
            type="submit"
            startIcon={<TelegramIcon />}
          >
            Зарегистрироваться
          </StyledButton>
        </StyledForm>
      </FormProvider>
    </StyledFormWrapper>
  );
};

export default Form;
