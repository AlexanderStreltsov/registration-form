import * as Yup from "yup";

export const registrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Пожалуйста, укажите имя")
    .min(2, "Введите не менее 2 символов")
    .max(100, "Введите не более 100 символов"),
  surname: Yup.string()
    .required("Пожалуйста, укажите фамилию")
    .min(2, "Введите не менее 2 символов")
    .max(100, "Введите не более 100 символов"),
  date_of_birth: Yup.date()
    .nullable(true)
    .required("Пожалуйста, укажите дату")
    .typeError("Введите корректную дату"),
  city: Yup.string()
    .required("Пожалуйста, укажите название города")
    .min(2, "Введите не менее 2 символов")
    .max(50, "Введите не более 50 символов"),
  phone_number: Yup.string()
    .required("Пожалуйста, укажите номер телефона")
    .min(11, "Введите номер телефона без разделителей (включая 8)")
    .max(11, "Введите номер телефона без разделителей (включая 8)"),
});
