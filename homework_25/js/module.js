export function Form({ _form, _formInput, _data }) {
    this.data = document.querySelector(_data);
    this.getAddress = (event) => {
        event.preventDefault();
        this.input = event.target.querySelector(_formInput).value.trim().toLowerCase();
        this.action = document.querySelector(_form).action;
        this.getInfo();
        document.querySelector(".form__btn-loader").classList.add("active");
    }
    this.getInfo = async () => {
        const bloc = document.createElement('pre');
        try {
            const promise = await fetch(`${this.action}${this.input}`);
            if (promise.ok) {
                const apiData = await promise.json();
                document.querySelector(".form__btn-loader").classList.remove("active");
                const checkInput = /(?<controller>[a-z]*)\/*(?<id>[0-9]*)/;
                const input2 = checkInput.exec(this.input);
                bloc.insertAdjacentHTML('beforeend', `<div class='data__elements'><div class='data__element'>${input2.groups.controller}</div> <div class='data__element'>${input2.groups.id ? input2.groups.id : 'none'}</div></div>${JSON.stringify(apiData, null, 1)}`);
                this.data.appendChild(bloc);
            } else {
                bloc.insertAdjacentHTML('beforeend', `<b>Info Not Found<br>Error: ${promise.status}</b>`);
                this.data.appendChild(bloc);
                document.querySelector(".form__btn-loader").classList.remove("active");
            }
        }
        catch (error) {
            bloc.insertAdjacentHTML('beforeend', `<b>Info Not Found<br>Error: ${error}</b>`);
            this.data.appendChild(bloc);
            document.querySelector(".form__btn-loader").classList.remove("active");
        }
    }
}