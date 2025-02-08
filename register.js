// Переключение между формами регистрации
document.getElementById("person-register-btn").addEventListener("click", function () {
    document.getElementById("person-form").classList.remove("hidden");
    document.getElementById("fund-form").classList.add("hidden");
});

document.getElementById("fund-register-btn").addEventListener("click", function () {
    document.getElementById("fund-form").classList.remove("hidden");
    document.getElementById("person-form").classList.add("hidden");
});
