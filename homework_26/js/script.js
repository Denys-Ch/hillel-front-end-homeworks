class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}
const _form = document.querySelector('.js--form');

class TextElement extends FormElement {
    constructor(name, type, value, placeholder) {
        super(name, type, value);
        this.placeholder = placeholder;
    }
    createInput() {
        const _input = document.createElement('input');
        _input.setAttribute('name', this.name);
        _input.setAttribute('type', this.type);
        _input.setAttribute('value', this.value);
        _input.setAttribute('placeholder', this.placeholder);
        return _input;
    }
}

class CheckBoxElement extends FormElement {
    constructor(name, type, value, isChecked) {
        super(name, type, value);
        this.isChecked = isChecked;
    }
    createCheckBox() {
        const _checkBoxLabel = document.createElement('label');
        _checkBoxLabel.insertAdjacentHTML('beforeend', ' I agree with all statements in <a href="#">Terms of service</a>')
        const _inputCheckBox = document.createElement('input');
        _inputCheckBox.setAttribute('name', this.name);
        _inputCheckBox.setAttribute('type', this.type);
        _inputCheckBox.setAttribute('value', this.value);
        if (this.isChecked) {
            _inputCheckBox.setAttribute('checked', true);
        }
        _checkBoxLabel.prepend(_inputCheckBox);
        return _checkBoxLabel;
    }
}

class ButtonElement extends FormElement {
    constructor(name, type) {
        super(name, type);
    }
    createBtn() {
        const _submitBtn = document.createElement('button');
        _submitBtn.setAttribute('type', this.type);
        return _submitBtn;
    }
}

const formInputName = new TextElement('userName', 'text', '', 'Your Name');
const _inputFieldName = formInputName.createInput();
_form.appendChild(_inputFieldName);

const formInputEmail = new TextElement('userEmail', 'email', '', 'Your Email');
const _inputFieldEmail = formInputEmail.createInput();
_form.appendChild(_inputFieldEmail);

const formInputPass = new TextElement('userPass', 'password', '', 'Your Password');
const _inputFieldPass = formInputPass.createInput();
_form.appendChild(_inputFieldPass);

const formInputPassConfirm = new TextElement('userPass', 'password', '', 'Repeat Your Password');
const _inputFieldPassConfirm = formInputPassConfirm.createInput();
_form.appendChild(_inputFieldPassConfirm);

const formTOSCheck = new CheckBoxElement('TOS agreement', 'checkbox', 'confirmed', true);
const _formTOS = formTOSCheck.createCheckBox();
_form.appendChild(_formTOS);

const formSubmit = new ButtonElement('', 'submit');
const _formSubmitBtn = formSubmit.createBtn();
_formSubmitBtn.innerHTML = 'REGISTER';
_form.appendChild(_formSubmitBtn);
_formSubmitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(`Name: ${_inputFieldName.value}\nEmail: ${_inputFieldEmail.value}\nPassword: ${_inputFieldPass.value}\nRepeated Password: ${_inputFieldPassConfirm.value}`);
    const _formTOSCheckBox = (_formTOS.querySelector('input'));
    if (_formTOSCheckBox.checked) {
        console.log(`TOS agreement: ${_formTOSCheckBox.value}`)
    }
});

