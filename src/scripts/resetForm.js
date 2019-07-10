function resetForm() {
    const inputs = document.querySelectorAll('.sign-form__input');

    inputs.forEach(input => {
        input.value = '';
    })
}

export default resetForm;