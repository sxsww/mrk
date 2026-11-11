// бургер
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

function closeMenu() {
    nav.classList.remove("open");
    burger.textContent = "☰";
}

burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    burger.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav") && !event.target.closest("#burger")) {
        closeMenu();
    }
});

// аккордеон
const questions = document.querySelectorAll(".question-title");

questions.forEach((button) => {
    button.addEventListener("click", () => {
        const item = button.parentElement;
        const wasOpen = item.classList.contains("open");

        document.querySelectorAll(".question").forEach((question) => {
            question.classList.remove("open");
        });

        if (!wasOpen) {
            item.classList.add("open");
        }
    });
});

// слайдер
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(n) {
    index = (n + slides.length) % slides.length;
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

document.getElementById("prev").addEventListener("click", () => {
    showSlide(index - 1);
});
document.getElementById("next").addEventListener("click", () => {
    showSlide(index + 1);
});
showSlide(0);

// вкладки
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const id = tab.dataset.tab;
        tabs.forEach((button) => {
            button.classList.toggle("active", button === tab);
        });
        contents.forEach((content) => {
            content.classList.toggle("active", content.id === id);
        });
    });
});

// модалка
const overlay = document.getElementById("overlay");

function closeModal() {
    overlay.classList.remove("show");
}

document.getElementById("openModal").addEventListener("click", () => {
    overlay.classList.add("show");
});
document.getElementById("closeModal").addEventListener("click", closeModal);

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        closeModal();
    }
});

// проверка формы
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const success = document.getElementById("success");

function checkForm() {
    const nameValid = nameInput.value.trim().length >= 2;
    const emailValid = emailInput.value.includes("@");

    nameError.textContent = nameValid ? "" : "Минимум 2 символа";
    emailError.textContent = emailValid ? "" : "Нужен символ @";
    return nameValid && emailValid;
}

form.addEventListener("input", () => {
    checkForm();
    success.textContent = "";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    success.textContent = checkForm() ? "Заявка на обработке, мы вам напишем!" : "";
});
