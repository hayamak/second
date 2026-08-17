// src/schemas/organisation.ts

import { z } from "zod";

export const organisationSearchSchema = z.object({
  corporateNumber: z
    .string()
    .regex(/^\d{13}$/, "法人番号は13桁の数字で入力してください"),
});

export type OrganisationSearchFormValues = z.infer<
  typeof organisationSearchSchema
>;

export const organisationSchema = z.object({
  corporateNumber: z.string(),
  name: z.string(),
  address: z.object({
    postalCode: z.string(),
    prefecture: z.string(),
    city: z.string(),
    street: z.string(),
    building: z.string(),
  }),
});
