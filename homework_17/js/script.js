function UserForm({ form, content, userInfo, addBtn }) {
    this.init = function () {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addUser(
                form.elements['name'].value,
                form.elements['phone'].value,
                form.elements['age'].value
            )
        })
        addBtn.addEventListener('click', function () {
            form.reset();
            form.classList.add('open');
        })
        this.loadUsers();
    }
    this.addUser = function (name, phone, age) {
        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            phone,
            age,
        }
        this.userTemplate(user);
        form.reset();
        form.classList.remove('open');
        const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
        currentUsers.push(user);
        localStorage.setItem('users', JSON.stringify(currentUsers));
    }
    this.removeUser = function (delBtn) {
        let _id = +delBtn.closest('tr').firstChild.innerHTML;
        const users = JSON.parse(localStorage.getItem('users'));
        users.forEach(user => {
            if (user.id === _id) {
                users.splice(users.indexOf(user), 1);
                localStorage.setItem('users', JSON.stringify(users));
            }
            delBtn.closest('tr').remove();
        });
    }
    this.loadUsers = function () {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            users.forEach(user => this.userTemplate(user))
        }
    }
    this.userTemplate = function (user) {
        content.insertAdjacentHTML('beforeend', (
            `<tr>` +
            `<td>${user.id}</td>` +
            `<td>${user.name}</td>` +
            `<td>${user.phone}</td>` +
            `<td>${user.age}</td>` +
            `<td><button class="btn">View</button><button class="btn js--edit_btn">Edit</button><button class="btn js--delete_btn">Delete</button></td>` +
            `</tr>`
        ))
        const delUser = document.querySelectorAll('.js--delete_btn');
        delUser.forEach(delBtn => {
            if (delBtn.getAttribute('listener') !== 'true') {
                delBtn.setAttribute('listener', 'true');
                delBtn.addEventListener('click', () => {
                    if (window.confirm('Ви впевнені?')) {
                        this.removeUser(delBtn);
                    }
                })
            }
        })
    }
}

(new UserForm({
    form: document.querySelector('.js--form'),
    userInfo: document.querySelector('.js--user'),
    addBtn: document.querySelector('.js--add'),
    content: document.querySelector('.js--content'),
})).init();
