import React from 'react';

const buttonClose = () => {
    let wrapper = document.querySelector(".wrapper")
    let account = document.querySelector(".account")
    account.style.display = 'none';
    wrapper.style.filter = 'blur(0px)';
}

const Login = () => {
    return (
        <>
            <div className="account">
                <div className="buttonClose" onClick={buttonClose}></div>

                <h3 className="account-welcome">Ласкаво просимо</h3>

                <div className="input-leveling">
                    <label className="input-leveling" htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Введіть пошту"/>
                </div>
                <div className="input-leveling">

                    <label htmlFor="login">Password</label>
                    <input type="text" id="password" placeholder="Введіть пароль"/>
                </div>

                <button className="submit">123</button>

                <a href="" className="forgetPassword">Забули пароль</a>
                <a href="" className="register">Зареєструватись</a>
            </div>
        </>

    );
};

export default Login;
