import React, {
  useContext,
  useReducer,
  useState,
  useEffect,
  useRef,
} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthContext from "../../Store/auth-context";
import Classes from "./LoginForm.module.css";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@") && action.val.includes(".com"),
    };
  } else if (action.type === "USER_INPUT") {
    return { value: state.value, isValid: state.value.includes("@") };
  } else {
    return { value: "", isValid: null };
  }
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  } else if (action.type === "USER_INPUT") {
    return { value: state.value, isValid: action.val.trim().length > 6 };
  } else {
    return { value: "", isValid: null };
  }
};

const LoginForm = (props) => {
  const emailInputRef = useRef();
  const passInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: passwordIsValid } = passwordState;
  const { isValid: emailIsValid } = emailState;

  useEffect(() => {
    setFormIsValid(passwordIsValid && emailIsValid);
  }, [emailIsValid, passwordIsValid]);

  const emailInputHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwrodInputHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      props.onHideLogin();
      authCtx.onLogin();
    } 
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          ref={emailInputRef}
          type="email"
          placeholder="Enter email"
          onChange={emailInputHandler}
        />
        {!emailIsValid && (
          <Form.Text className={Classes.Invalid}>
            Please enter a correct email.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={passInputRef}
          type="password"
          placeholder="Password"
          onChange={passwrodInputHandler}
        />
        {!passwordIsValid && (
          <Form.Text className={Classes.Invalid}>
            Please enter a correct password.
          </Form.Text>
        )}
      </Form.Group>

      <Button variant="outline-primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
