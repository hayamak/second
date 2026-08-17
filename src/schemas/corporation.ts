// src/schemas/corporation.ts

import { z } from "zod";
import { addressSchema } from "./address";

export const corporateNumberSchema = z
  .string()
  .regex(/^\d{13}$/, "法人番号は13桁の数字で入力してください");

export const corporationSearchSchema = z.object({
  corporateNumber: corporateNumberSchema,
});

export const corporationSchema = z.object({
  corporateNumber: corporateNumberSchema,
  name: z.string().trim().min(1),
  address: addressSchema,
});

export type Corporation = z.infer<typeof corporationSchema>;
