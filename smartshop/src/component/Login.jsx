import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { emailChanged, registrationFailure, register } from "../redux/action/index";

const Registration = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const email = useSelector((state) => {
    return state.email;
  });

  const onChangeValue = (fieldName, value) => {
    setValues({
      ...values,
      [fieldName]: value,
    });
  };

  const validation = () => {
    if (
      !email?.length ||
      values.password.length === 0 ||
      values.repeatPassword.length === 0
    ) {
      dispatch(registrationFailure("Fill all fields"));
      return false;
    }

    if (values.password !== values.repeatPassword) {
      dispatch(registrationFailure("Passwords do not match"));
      return false;
    }

    if (!/^[a-z0-9A-Z_.]{1,}@[a-z0-9A-Z-]+\.[a-z0-9A-Z]+$/.test(email)) {
      dispatch(registrationFailure("Email is not correct"));
      return false;
    }

    dispatch(register(email, values.password));
  };

  return (
    <div className="registration">
      <h2 className="registration__title">Авторизация</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Введите Ваш email"
          value={email}
          onChange={(event) => dispatch(emailChanged(event.target.value))}
        />
        <input
          type="password"
          placeholder="Введите пароль"
          value={values.password}
          onChange={(event) => onChangeValue("password", event.target.value)}
        />
        <input
          type="password"
          placeholder="Повторите пароль"
          value={values.repeatPassword}
          onChange={(event) =>
            onChangeValue("repeatPassword", event.target.value)
          }
        />
        <button className="btn-registration" onClick={validation}>
          Авторизация
        </button>
      </div>
    </div>
  );
};

export default Registration;
