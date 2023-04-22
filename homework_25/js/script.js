(async function () {
    const module = await import("./module.js");
    const swapiForm = new module.Form({
        _form: ".js--form",
        _formInput: ".js--form__input",
        _data: ".js--data"
    })
    document.querySelector(".js--form").addEventListener("submit", swapiForm.getAddress);
})();