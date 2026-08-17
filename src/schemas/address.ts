// src/schemas/address.ts

import { z } from "zod";

export const addressSchema = z.object({
  postalCode: z
    .string()
    .trim()
    .regex(/^\d{7}$/, "郵便番号は7桁の数字で入力してください"),
  prefecture: z.string().trim().min(1, "都道府県は必須です"),
  city: z.string().trim().min(1, "市区町村は必須です"),
  street: z.string().trim().min(1, "町名・番地は必須です"),
  building: z.string().trim().optional(),
});

export type Address = z.infer<typeof addressSchema>;
