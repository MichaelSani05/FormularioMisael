
function validateForm() {
    const requiredFields = document.querySelectorAll('#questionnaire input[required]');
    for (let field of requiredFields) {
        if (!field.value) {
            alert(`Por favor, completa el campo: ${field.previousElementSibling.textContent}`);
            return false;
        }
    }
    return true;
}
