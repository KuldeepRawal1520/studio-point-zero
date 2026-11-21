export const enquiryFields = {
  name: { label: "Name", maxLength: 100 },
  email: { label: "Email", maxLength: 254 },
  message: { label: "Tell us about your space", maxLength: 3000 },
} as const;

const fieldNames = ["name", "email", "message"] as const;
type FieldName = (typeof fieldNames)[number];
export type EnquiryState = { errors?: Partial<Record<FieldName, string>>; message?: string };

export function validateEnquiry(data: FormData) {
  const errors: NonNullable<EnquiryState["errors"]> = {};
  for (const field of fieldNames) {
    const value = data.get(field);
    const input = typeof value === "string" ? value.trim() : "";
    const { label, maxLength } = enquiryFields[field];
    if (!input) errors[field] = field === "message" ? "Enter a short description of your project." : `Enter your ${label.toLowerCase()}.`;
    else if (input.length > maxLength) errors[field] = `Use ${maxLength} characters or fewer.`;
    else if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) errors.email = "Enter a valid email address.";
  }
  return errors;
}
