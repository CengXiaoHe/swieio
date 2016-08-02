import React from 'react';
import Formsy from 'formsy-react';
import {Link} from 'react-router';
import { LoginTextBox, RegisterPasswordBox } from '../core/views';
import 'bootstrap/dist/css/bootstrap.css';
import swieLogo from './images/swieLogo.png'
import './style/index.less';

export default class SignUp extends React.Component{

    render(){
        return(
            <div className="signup-container">
                <div className="container">
                    <div className="signup-form-components">
                        <img className="signup-logo" src={swieLogo}></img>
                            <Formsy.Form>
                                <div className="input-group custom-signup">
                                    <LoginTextBox
                                        validations="isEmail"
                                        validationError="Proper email format is required"
                                        aria-describedby="basic-addon1"
                                        loginClass="sign-input-email"
                                        name="username" placeholder="Email Address"
                                        maxLength={250} />
                                    <LoginTextBox
                                        loginClass="signup-input-firstname"
                                        name="firstname"
                                        placeholder=" First name" required validations={{
                                             minLength: 1,
                                             maxLength: 100,
                                              }}
                                        maxLength={100} />

                                    <LoginTextBox
                                        loginClass="signup-input-lastname"
                                        name="lastname" placeholder="Last name"
                                        required validations={{
                                              minLength: 1,
                                              maxLength: 100,
                                              }}
                                        maxLength={100} />
                                    <RegisterPasswordBox
                                        name="password"
                                        loginClass="signup-input-password"
                                        placeholder="Password"
                                        infoBar={true}
                                        maxLength={250}
                                        />
                                    </div>
                                </Formsy.Form>
                            </div>
                        </div>
            </div>
        );
    }
}
