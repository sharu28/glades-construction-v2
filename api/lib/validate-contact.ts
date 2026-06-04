export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  projectType?: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: unknown): ValidationResult {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const { firstName, lastName, email, message } = data as Record<string, unknown>;

  if (!firstName || typeof firstName !== 'string' || firstName.trim() === '') {
    return { valid: false, error: 'First name is required' };
  }
  if (!lastName || typeof lastName !== 'string' || lastName.trim() === '') {
    return { valid: false, error: 'Last name is required' };
  }
  if (!email || typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return { valid: false, error: 'A valid email address is required' };
  }
  if (!message || typeof message !== 'string' || message.trim() === '') {
    return { valid: false, error: 'Message is required' };
  }

  return { valid: true };
}
