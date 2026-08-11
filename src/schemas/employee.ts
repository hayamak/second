// src/schemas/employee.ts

import { z } from "zod";

export const employeeSchema = z.object({
  name: z.string().min(1, "氏名を入力してください"),
  employeeNumber: z.string().optional(),
  email: z
    .email("メールアドレスの形式が正しくありません")
    .optional()
    .or(z.literal("")),
});

export type EmployeeFormValues = z.infer<typeof employeeSchema>;
