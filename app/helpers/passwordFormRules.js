// Password Form Rules
export const passwordFormRules = {
  required: true,
  validator: (_, value) => {
    const validPassword = new RegExp("(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}");
    if (validPassword.test(value)) {
      return Promise.resolve();
    }

    return Promise.reject(
      new Error(
        "Password must be at least 8 characters long and contain at least one capital letter and one number."
      )
    );
  },
};
