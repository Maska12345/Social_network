import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router";


const LoginForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Email'} name={'login'} component={'input'} />
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={'input'} />
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)


const Login = (props) =>{
    const onSubmit = (formData)=>{
        props.login(formData.login,formData.password,formData.rememberMe);
    }

    if(props.isAuth) return <Navigate to={'/profile'} />

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />

    </div>
}

const mapStateToProps = (state)=>(
    {
        isAuth:state.auth.isAuth
    }
)

export default connect(mapStateToProps,{login})(Login)