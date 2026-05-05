
import { Formik , Field , ErrorMessage } from 'formik';
import { Form, useNavigate } from 'react-router-dom';
import { registerSchema } from './../../helpers/validation';
import { withUserAuth } from '../HOCs';
const RegisterForm = (props) => {
    const {setUser} = props;
    const navigate = useNavigate();
    return (
        <div>
            <Formik 
          initialValues= {{
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}}

onSubmit={(values) => {
  const user = {
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    password: values.password,
  }

  localStorage.setItem('user', JSON.stringify(user));

  setUser(user);
  alert("Registration successful!");
  navigate("/");
}}

validationSchema = {registerSchema}>
                {() => {
  return (
    <Form>
      <label>
        <Field
          type="text"
          name="firstName"
          placeholder="your first name"
        />
        <ErrorMessage name="firstName" component="div" />
      </label>

      <label>
        <Field
          type="text"
          name="lastName"
          placeholder="your last name"
        />
        <ErrorMessage name="lastName" component="div" />
      </label>
    </Form>)
 }}
    </Formik>
               
        </div>
    )};

const RegisterFormWithAuth = withUserAuth(RegisterForm );

export default RegisterFormWithAuth;
