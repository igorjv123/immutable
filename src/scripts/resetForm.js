function resetForm() {
    const inputs = $('.sign-form__input');

    inputs.forEach(input => {
        input.value = '';
    })
}

export default resetForm;