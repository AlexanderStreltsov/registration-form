import React, { useState, useEffect } from "react";
import {
  useForm,
  FormProvider,
  type DefaultValues,
  type SubmitHandler,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography, LinearProgress, Collapse } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { registrationValidationSchema } from "../../utils/schema-validation";
import { type IRegistrationForm } from "../../types";
import ControllerDatePickerField from "./controller-date-picker";
import ControllerTextField from "./controller-text-field";
import {
  StyledFormWrapper,
  StyledForm,
  StyledButton,
  StyledProgressWrapper,
  StyledAlert,
} from "./styled";

const defaultValues: DefaultValues<IRegistrationForm> = {
  name: "",
  surname: "",
  date_of_birth: null,
  city: "",
  phone_number: "",
};

const RegistrationForm = () => {
  const formMethods = useForm<IRegistrationForm>({
    mode: "onTouched",
    resolver: yupResolver(registrationValidationSchema),
    defaultValues,
  });
  const { handleSubmit, reset, formState } = formMethods;

  const [isLoading, setLoading] = useState(false);
  const [isSucceded, setSucceded] = useState(false);

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log(JSON.stringify(data));
      setSucceded(true);
    }, 2000);

    setTimeout(() => {
      setSucceded(false);
    }, 10000);
  };

  useEffect(() => {
    reset(defaultValues);
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <StyledFormWrapper elevation={2}>
      <Typography variant="h1">Регистрация</Typography>

      <StyledProgressWrapper>
        {isLoading && <LinearProgress />}
      </StyledProgressWrapper>

      <FormProvider {...formMethods}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <ControllerTextField
            inputLabel="Имя"
            inputName="name"
            patternCanInputChar={/[^A-Za-zА-Яа-я\s$]/g}
            isCapitalizeFirstChar
          />
          <ControllerTextField
            inputLabel="Фамилия"
            inputName="surname"
            patternCanInputChar={/[^A-Za-zА-Яа-я\s$]/g}
            isCapitalizeFirstChar
          />
          <ControllerDatePickerField
            inputLabel="Дата рождения"
            inputName="date_of_birth"
          />
          <ControllerTextField
            inputLabel="Город"
            inputName="city"
            patternCanInputChar={/[^A-Za-zА-Яа-я\s-$]/g}
            isCapitalizeFirstChar
          />
          <ControllerTextField
            inputLabel="Телефон"
            inputName="phone_number"
            patternCanInputChar={/[^\d{11}$]/g}
            limitChars={11}
          />
          <StyledButton
            variant="contained"
            type="submit"
            disabled={!formState.isValid || isLoading}
          >
            Зарегистрироваться
          </StyledButton>
        </StyledForm>
      </FormProvider>

      <Collapse in={isSucceded}>
        <StyledAlert icon={<CheckIcon />} severity="success">
          Процесс регистрации занимает некоторое время&nbsp;&mdash; вам придет
          уведомление
        </StyledAlert>
      </Collapse>
    </StyledFormWrapper>
  );
};

export default RegistrationForm;
