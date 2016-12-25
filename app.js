function createForm() {
    var form = $('<form/>', {
        'action': '',
        'id': 'userForm',
        'name': 'form'
    }).appendTo('body');
    var nameArr = ['name', 'email', 'date', 'ip'];
    _.each(nameArr, function (element, index, nameArr) {
        $('<input/>', {
            name: element,
            value: '',
            placeholder: element
        }).appendTo(form);
    });
    var button = $('<input>', {
        type: 'submit',
        value: 'Send',
        id: 'btn'
    }).appendTo(form);
};
createForm();

function validateUserName(form) {
    var isValid = true;
    var name = $('[name="name"]').val();
    if (name.length < 5 || name.length > 30) {
        alert('username should be more than 5 and less than 30 symbols');
        isValid = false;
    }
    else if (!name.match(/[^!-*@#&\/]/g)) {
        alert('username can not containe special symbols');
        isValid = false;
    }
    return isValid;
}

function validateEmail() {
    var isValid = true;
    var email = $('[name="email"]').val();
    if (!_.findWhere(email, '@')) {
        alert('email should contain @');
    } else if (!email.match(/([a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6})/g)) {
        alert('email should be in special format. As example: test@test.com');
    }
    return isValid;
}

function validateDate() {
    var isValid = true;
    var date = $('[name="date"]').val();
    if (!date.match(/(([0-2]{1}[1-9]{1})|([3]{1}[01]{1}))\.([0]{1}[1-9]{1}|([1]{1}[12]{1}))\.(\d{4})/g)) {
        alert('date should be in format dd.mm.yyyy');
    }
    return isValid;
}

function validateIP() {
    var isValid = true;
    var ip = $('[name="ip"]').val();
    var pattern = /^\d+\.\d+\.\d+\.\d+$/g;
    if(ip.search(pattern) === -1) {
        alert('IP should be in format 0.0.0.0');
    }
    return isValid;
}

$('#btn').click(function (event) {
    event.preventDefault();
    validateUserName() &&
    validateEmail() &&
    validateDate() &&
    validateIP();
});