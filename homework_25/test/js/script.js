(async function () {
    const module = await import("./module.js");
    const swapiForm = new module.add({
        _form: ".js--form",
        _formInput: ".js--form__input",
        _data: ".js--data"
    })
    document.querySelector(".js--form").addEventListener("submit", swapiForm.getAddress);
})();

