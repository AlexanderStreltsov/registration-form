import * as Yup from "yup";

export const registrationValidationSchema = Yup.object().shape({
  surname_and_name: Yup.string()
    .required("Пожалуйста, укажите фамилию и имя")
    .min(2, "Введите не менее 2 символов")
    .max(100, "Введите не более 100 символов"),
  date_of_birth: Yup.date()
    .nullable(true)
    .required("Пожалуйста, укажите дату рождения")
    .typeError("Введите корректную дату (дд.мм.гггг)"),
  city: Yup.string()
    .required("Пожалуйста, укажите название города")
    .min(2, "Введите не менее 2 символов")
    .max(50, "Введите не более 50 символов"),
  phone_number: Yup.string()
    .required("Пожалуйста, укажите номер телефона")
    .min(11, "Введите номер телефона без разделителей (включая 8)")
    .max(11, "Введите номер телефона без разделителей (включая 8)"),
});
