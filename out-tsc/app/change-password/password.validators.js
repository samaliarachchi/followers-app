export class PasswordValidators {
    static validOldPassword(control) {
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve({ invalidOldPassword: true });
            else
                resolve(null);
        });
    }
    static passwordsShouldMatch(control) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if (newPassword.value != confirmPassword.value)
            return { passwordsShouldMatch: true };
        return null;
    }
}
//# sourceMappingURL=password.validators.js.map