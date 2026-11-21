"use server";

import { validateEnquiry, type EnquiryState } from "@/lib/enquiry";

export async function submitEnquiry(_previous: EnquiryState, data: FormData): Promise<EnquiryState> {
  const errors = validateEnquiry(data);
  if (Object.keys(errors).length) return { errors, message: "Review the fields below." };
  return { message: "Online delivery is unavailable. Your enquiry was not sent." };
}
