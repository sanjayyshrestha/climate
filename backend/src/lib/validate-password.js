// utils/validatePassword.js
export function validatePassword(password) {
  const messages = [];

  if (password.length < 8) {
    messages.push("Password must be at least 8 characters long.");
  }
  if (!/[A-Z]/.test(password)) {
    messages.push("Password must include at least one uppercase letter.");
  }
  if (!/[a-z]/.test(password)) {
    messages.push("Password must include at least one lowercase letter.");
  }
  if (!/\d/.test(password)) {
    messages.push("Password must include at least one number.");
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    messages.push("Password must include at least one special character.");
  }
  if (/\s/.test(password)) {
    messages.push("Password cannot contain spaces.");
  }

  return {
    valid: messages.length === 0,
    messages,
  };
}
