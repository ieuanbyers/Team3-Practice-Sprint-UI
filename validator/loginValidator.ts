import {Login} from "../model/auth";
module.exports.validateLogin = function (login: Login): String
{
    if (login.username == null || login.username.length == 0)
    {
        return "email is empty";
    }

    if(!login.username.match("^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$"))
    {
        return "email address not valid";
    }

    if (login.password == null || login.password.length == 0)
    {
        return "password is empty";
    }

    return null;
}