// src/actions/employee.ts

"use server";

import { employeeSchema } from "@/schemas/employee";
import { ActionResult } from "@/types/action";

export async function createEmployee(
  _previousState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const values = {
    name: formData.get("name")?.toString() ?? "",
    employeeNumber: formData.get("employeeNumber")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
  };
  const result = employeeSchema.safeParse(values);

  if (!result.success) {
    console.log(result.error.flatten());

    return {
      success: false,
      message: "入力内容を確認してください。",
    };
  }

  console.log(result.data);

  return { success: true, message: "利用者を登録しました。" };
}

export async function updateEmployee(
  _previousState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const values = {
    name: formData.get("name")?.toString() ?? "",
    employeeNumber: formData.get("employeeNumber")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
  };

  const result = employeeSchema.safeParse(values);

  if (!result.success) {
    console.log(result.error.flatten());

    return {
      success: false,
      message: "入力内容を確認してください。",
    };
  }

  return { success: true, message: "情報を更新しました。" };
}
