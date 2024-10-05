const inputs = document.querySelectorAll('.imputs');

inputs.forEach(input => {
    const label = input.previousElementSibling; // Obtiene la etiqueta label anterior al input

    input.addEventListener('focus', () => {
        label.style.visibility = 'hidden';
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            label.style.visibility = 'visible';
        }
    });
});