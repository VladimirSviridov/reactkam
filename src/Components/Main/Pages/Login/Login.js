import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../Items/Forms/FormsControls";
import {required} from "../../../../Utilites/Validators/validator";
import {connect} from "react-redux";
import {login, logout} from "../../../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import c from "../../../Items/Forms/FormsControls.module.css"

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field typeField="input" type="email" name={"email"} placeholder="E-mail"
                   validate={required} component={Input}/>
        </div>
        <div>
            <Field typeField="input" type="password" name={"password"} placeholder="Password"
                   validate={required} component={Input}/>
        </div>
        <div>
            <Field typeField="input" type="checkbox" name={"rememberMe"} component={Input}/> Remember me
        </div>
        <div>
            {props.error && <div className={c.formSummaryError}>
                {props.error}
            </div>}
        </div>
        <div>
            <button>Sign in</button>
        </div>
    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login, logout})(Login);