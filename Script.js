// window.onload = function() {
//     const user = localStorage.getItem('currentUser');
//     const loginBtn = document.querySelector('.login-link'); // твоя ссылка "Войти"

//     if (user && loginBtn) {
//         // Если пользователь найден, меняем текст "Войти" на его email или иконку
//         loginBtn.innerText = user; 
//         loginBtn.href = "#"; // Чтобы никуда не улетал при клике
        
//         // Можно добавить кнопку "Выйти" рядом
//         const logoutBtn = document.createElement('span');
//         logoutBtn.innerText = " (Выйти)";
//         logoutBtn.style.cursor = "pointer";
//         logoutBtn.onclick = function() {
//             localStorage.removeItem('currentUser');
//             location.reload(); // Перезагружаем страницу
//         };
//         loginBtn.appendChild(logoutBtn);
//     }
// };




const btn = document.getElementById('dropdownBtn');
const menu = document.getElementById('dropdownMenu');
const selectedText = document.getElementById('selected-value');

// Открыть/закрыть меню при нажатии на кнопку
btn.addEventListener('click', () => {
    menu.classList.toggle('show');
    btn.classList.toggle('active'); // <-- Добавьте эту строку
});

// Логика выбора элемента
menu.querySelectorAll('div').forEach(item => {
    item.addEventListener('click', (e) => {
        selectedText.innerText = e.target.innerText; // Меняем текст на кнопке
        menu.classList.remove('show'); // Закрываем меню
        
        const value = e.target.getAttribute('data-value');
        console.log("Выбрано:", value); // Тут можно вызвать функцию фильтрации
    });
});

// Закрыть меню, если кликнули мимо кнопки
window.onclick = function(event) {
    if (!event.target.closest('.dropdown')) {
        menu.classList.remove('show');
    }
}





// // --- РЕГИСТРАЦИЯ ---
// function handleRegister() {
//     const email = document.getElementById('reg-email').value;
//     const pass = document.getElementById('reg-pass').value;

//     if (email === "" || pass === "") {
//         alert("Заполните все поля!");
//         return;
//     }

//     // Сохраняем пользователя в локальное хранилище
//     const userData = { email: email, password: pass };
//     localStorage.setItem(email, JSON.stringify(userData));

//     alert("Регистрация успешна! Теперь войдите.");
//     toggleForm(); // Переключаем на форму входа
// }

// // --- ВХОД ---
// function handleLogin() {
//     const email = document.getElementById('login-email').value;
//     const pass = document.getElementById('login-pass').value;

//     // Ищем пользователя в памяти браузера
//     const savedUser = localStorage.getItem(email);

//     if (savedUser) {
//         const user = JSON.parse(savedUser); // Превращаем строку обратно в объект

//         if (user.password === pass) {
//             alert("Вы успешно вошли!");
//             localStorage.setItem('currentUser', email); // Запоминаем, кто вошел
//             window.location.href = "index.html"; // Перекидываем на главную
//         } else {
//             alert("Неверный пароль!");
//         }
//     } else {
//         alert("Пользователь не найден!");
//     }
// }

