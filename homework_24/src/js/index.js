import '../scss/index.scss';
function ToDoList(_formInput, _todosWrapper) {
    this.todosWrapper = document.querySelector(_todosWrapper);
    this.addItem = (event) => {
        event.preventDefault();
        this.input = event.target.querySelector(_formInput);
        this.todosWrapper.insertAdjacentHTML(
            'beforeend',
            this.addTemplate(this.input.value)
        );
        this.input.value = "";
        document.querySelectorAll('.js--delete').forEach((item) => {
            item.addEventListener('click', this.delete);
        });
        document.querySelector('.js--check').addEventListener('input', this.check);
    };
    this.delete = function (event) {
        event.target.closest('.js--todo-item').remove();
    };
    this.check = function (event) {
        document.querySelector('.js--todo-item__description').classList.toggle('todo-item--checked');
    }
    this.addTemplate = function (description) {
        return `
            <div class="todo-item js--todo-item">
                <div class="todo-item__description js--todo-item__description">${description}</div>
                <button class="todo-item__delete js--delete">Удалить</button>
                <label for="check-btn">
                    Готово <input type="checkbox" class="js--check" 
                </label>
            </div>
        `;
    };
}

const newList = new ToDoList(".js--form__input", ".js--todos-wrapper");
document.querySelector(".js--form").addEventListener("submit", newList.addItem);
