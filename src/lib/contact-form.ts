export const NAME_PATTERN = /^[A-Za-z]+(?:[A-Za-z .,'-]*[A-Za-z])?$/;
export const SUBJECT_MIN = 6;
export const SUBJECT_MAX = 120;
export const MESSAGE_MIN = 20;
export const MESSAGE_MAX = 2000;
export const SUBMISSION_MIN_DELAY_MS = 2500;

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company_website: string;
};

export const INITIAL_CONTACT_FORM_VALUES: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company_website: "",
};

/**
 * Runs synchronous validation against form constraints while keeping UI messaging stable.
 */
export const validateContactForm = (values: ContactFormValues): string | null => {
  if (!NAME_PATTERN.test(values.name.trim())) {
    return "Please enter a valid full name.";
  }

  const subjectLength = values.subject.trim().length;
  if (subjectLength < SUBJECT_MIN || subjectLength > SUBJECT_MAX) {
    return `Project type should be ${SUBJECT_MIN}-${SUBJECT_MAX} characters.`;
  }

  const messageLength = values.message.trim().length;
  if (messageLength < MESSAGE_MIN || messageLength > MESSAGE_MAX) {
    return `Project brief should be ${MESSAGE_MIN}-${MESSAGE_MAX} characters.`;
  }

  return null;
};

