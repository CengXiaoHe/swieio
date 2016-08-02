import React from 'react';
import Formsy from 'formsy-react';
import MaskedInput from 'react-maskedinput';
import {Modal, Button} from 'react-bootstrap';
import $ from 'jquery';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css';
import InputPassword from 'react-ux-password-field';

import '../lib/validations';

export var LoginTextBox=React.createClass({
    mixins:[Formsy.Mixin],
    changeValue:function(event){
        this.setValue(event.currentTarget.value);
        if(this.isValidValue(event.currentTarget.value) && this.props.onValidChange){
            this.props.onValidChange(event.currentTarget.value);
        }
    },
    render:function(){
        var errorMessage=this.getErrorMessage();
        var className=this.showRequired() ? 'required':this.showError() ? 'error': null;
        return(
            <div className="{'input-group'+this.props.loginClass+ ' ' +className}">
                <input
                    disabled={this.props.readOnly}
                    className={'form-control'+this.props.inputStyle}
                    onChange={this.changeValue}
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                    type={this.props.type}
                    value={this.getValue()}
                    maxLength={this.props.maxLength}
                />
            </div>

        );
    }
});
export var RegisterPasswordBox=React.createClass({
    mixins:[Formsy.Mixin],
    ptype:false,
    eye:'fa-eye',
    changeValue:function(val){
        this.setValue(val);
        if(this.isValidValue(val) && this.props.onValidChange){
            this.props.onValidChange(val);
        }
    },
    render:function(){
        var errorMessage=this.getErrorMessage();
        var className=this.showRequired() ? 'requires':this.showError() ? 'error':null;
        return(
        <div className={'input-group ' + this.props.loginClass + ' ' + className}>
            <InputPassword minScore={3} className={'form-control adius0 passWithEye ' + this.props.inputStyle}
                           onChange={this.changeValue}
                           placeholder={this.props.placeholder}
                           required={this.props.required}
                           toggleMask={false}
                           value={this.getValue()}
                           maxLength={this.props.maxLength}
                           infoBar={this.props.infoBar}/>

        </div>
        )
    }
})
