document.addEventListener('DOMContentLoaded', function () {
    const languageToggle = document.getElementById('language-toggle');
    const currentFlag = languageToggle.querySelector('img');

    languageToggle.addEventListener('click', function() {
        const currentLang = currentFlag.alt;
        let newLang;

        if (currentLang === 'BG') {
            newLang = 'en';
        } else {
            newLang = 'bg';
        }

        // Update the flag image
        currentFlag.src = newLang === 'bg' ? '/assets/images/bg-flag.png' : '/assets/images/en-flag.png';
        currentFlag.alt = newLang.toUpperCase();

        // Use Google Translate to switch the language
        const translateElement = document.querySelector('.goog-te-combo');
        if (translateElement) {
            translateElement.value = newLang;
            translateElement.dispatchEvent(new Event('change'));
        }
    });
});
