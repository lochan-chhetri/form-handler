const rules = require('./rules');

class FormHandler {
    constructor(form) {
        if (form) {
            this.form = form;
        } else if (form && !form.id) {
            throw new Error('Form ID expected.');
        } else {
            throw new Error('Object expected during form initialization.');
        }

        const defaults = {
            blur: true,
            rules: rules
        };

        this.form = this.prepareConfig(defaults);

    }

    prepareConfig(defaults) {
        return Object.assign(defaults, this.form);
    }
}



module.exports = FormHandler;