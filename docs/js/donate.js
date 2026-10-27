document.addEventListener("DOMContentLoaded", function() {
    // 1. Вставляем HTML модального окна и кнопку в body
    const donateHTML = `
        <!-- Плавающая кнопка доната -->
        <button id="donateBtn" title="Поддержать проект">❤ Поддержать</button>

        <!-- Модальное окно доната -->
        <div class="donate-modal-overlay" id="donateModal">
            <div class="donate-modal-window">
                <button class="donate-modal-close" id="closeDonateModal">✕</button>
                
                <h2>Поддержите Panem Archive</h2>
                <p class="donate-subtitle">Мы будем рады вашей поддержке! Ваш вклад помогает развивать архив и добавлять новый контент.</p>
                
                <div class="donate-content">
                    <!-- Блок с Boosty -->
                    <div class="donate-block">
                        <h3>Поддержать на Boosty</h3>
                        <p style="margin-bottom: 1.5rem;">Удобный способ поддержать проект ежемесячно или разово.</p>
                        <div class="link-buttons">
                            <a href="https://boosty.to/hazli_qwq/about" target="_blank" class="donate-link">Перейти на Boosty</a>
                        </div>
                    </div>

                    <!-- Блок с ВТБ -->
                    <div class="donate-block">
                        <h3>Перевод на ВТБ</h3>
                        <p style="margin-bottom: 1.5rem;">Быстрый перевод по ссылке через приложение банка.</p>
                        <div class="link-buttons">
                            <a href="https://c2c.cbrpay.ru/AS1I002SMDIDGLSL96E9A6UFFDBDEE3B" target="_blank" class="donate-link">Перевести на ВТБ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Вставляем HTML в конец body
    document.body.insertAdjacentHTML('beforeend', donateHTML);

    // 2. Логика работы модального окна
    const donateBtn = document.getElementById('donateBtn');
    const donateModal = document.getElementById('donateModal');
    const closeBtn = document.getElementById('closeDonateModal');

    // Открытие по кнопке "Поддержать"
    if (donateBtn) {
        donateBtn.addEventListener('click', function() {
            donateModal.classList.add('active');
        });
    }

    // Закрытие по крестику
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            donateModal.classList.remove('active');
        });
    }

    // Закрытие по клику на фон
    if (donateModal) {
        donateModal.addEventListener('click', function(e) {
            if (e.target === donateModal) {
                donateModal.classList.remove('active');
            }
        });
    }

       // Универсальный поиск ссылки в подвале по тексту
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        if (link.textContent.trim() === 'Донат на развитие') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                donateModal.classList.add('active');
            });
        }
    });
});