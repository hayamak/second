// src/app/(app)/organisation/_components/employee-form.tsx

import { useActionState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import type { ActionResult } from "@/types/action"
import type { EmployeeFormValues } from "@/schemas/employee"

const initialState: ActionResult = {
  success: false,
  message: ""
}

type EmployeeAction = (
  previousState: ActionResult,
  formData: FormData
) => Promise<ActionResult>

export function EmployeeForm({ employee, action, onCancel }: { employee?: EmployeeFormValues, action: EmployeeAction, onCancel: () => void }) {

  const [state, formAction, pending] = useActionState(
    action,
    initialState
  )

  useEffect(() => {
    if (state.success) {
      onCancel()
    }
  }, [state.success, onCancel])

  return (
    <div className="w-full px-4">
      <form action={formAction}>
        <FieldGroup>
          <FieldSet>
            <FieldDescription>従業員番号とメールアドレスは任意です。利用者の識別に使用できます。</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">
                  氏 名
                </FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder="羽山 和行"
                  defaultValue={employee?.name}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="employee-number">
                  従業員番号
                </FieldLabel>
                <Input
                  id="employee-number"
                  name="employeeNumber"
                  placeholder="123456"
                  defaultValue={employee?.employeeNumber}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">
                  メールアドレス
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={employee?.email}
                  placeholder="name@example.com"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <Field>
            <Button type="submit" className={"cursor-pointer"}>保存</Button>
            <Button type="button" className={"cursor-pointer"} variant={"outline"} onClick={onCancel} disabled={pending}>
              キャンセル
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
