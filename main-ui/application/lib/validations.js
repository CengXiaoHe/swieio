import Formsy from 'formsy-react';


Formsy.addValidationRule('range', function(values, value, array) {
    var val = parseInt(value);
    var from = array[0];
    var to = array[1];
    return val >= from && val <= to;
});

Formsy.addValidationRule('passwordStrength', function(values, value, array) { // eslint-disable-line
    var val = value;
    var patt = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
    var isValid = patt.test(val);
    return isValid;
});