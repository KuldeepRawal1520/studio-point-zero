"use client";

import { useActionState, useState } from "react";
import { submitEnquiry } from "@/app/contact/actions";
import { enquiryFields } from "@/lib/enquiry";

export function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, {});
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  return (
    <form action={action} className="enquiry-form" aria-describedby="delivery-status">
      <h2>Project enquiry</h2>
      <p id="delivery-status">Online delivery is currently unavailable.</p>
      {(["name", "email", "message"] as const).map((field) => {
        const { label, maxLength } = enquiryFields[field];
        const error = state.errors?.[field];
        const props = {
          id: field, name: field, required: true, maxLength, value: values[field],
          "aria-invalid": error ? true : undefined,
          "aria-describedby": error ? `${field}-error` : undefined,
          onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const value = event.target.value;
            setValues((current) => ({ ...current, [field]: value }));
          },
        };
        return (
          <div key={field} className="form-field">
            <label htmlFor={field}>{label}</label>
            {field === "message" ? <textarea {...props} rows={5} /> : <input {...props} type={field === "email" ? "email" : "text"} autoComplete={field} />}
            {error && <p className="field-error" id={`${field}-error`}>{error}</p>}
          </div>
        );
      })}
      <button type="submit" className="button" disabled={pending}>{pending ? "Checking…" : "Check enquiry"}</button>
      <p role="status">{state.message}</p>
    </form>
  );
}
