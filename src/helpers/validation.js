import * as Yup from 'yup';

const nameSchema = Yup.string()
  .trim()
  .min(3)
  .max(10)
  .required("Обов'язкове поле");

export const registerSchema = Yup.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: Yup.string()
    .trim()
    .email()
    .required("Обов'язкове поле"),
  password: Yup.string()
    .min(6)
    .required("Обов'язкове поле"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Паролі повинні співпадати')
    .required("Обов'язкове поле"),
});