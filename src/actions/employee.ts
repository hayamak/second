// src/actions/employee.ts

"use server";

import { ActionResult } from "@/types/action";

export async function createEmployee(
  _previousState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const employee = {
    name: formData.get("name"),
    employeeNumber: formData.get("employeeNumber"),
    email: formData.get("email"),
  };

  console.log(employee);

  return { success: true, message: "利用者を登録しました。" };
}

export async function updateEmployee(
  _previousState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const employee = {
    name: formData.get("name"),
    employeeNumber: formData.get("employeeNumber"),
    email: formData.get("email"),
  };

  console.log(employee);

  return { success: true, message: "情報を更新しました。" };
}
