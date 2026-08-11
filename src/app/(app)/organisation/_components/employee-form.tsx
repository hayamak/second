import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function EmployeeForm({ onCancel }: { onCancel: () => void }) {

  return (
    <div className="w-full px-4">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">
                  氏 名
                </FieldLabel>
                <Input
                  id="name"
                  placeholder="羽山 和行"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="employee-number">
                  従業員番号
                </FieldLabel>
                <Input
                  id="employee-number"
                  placeholder="123456"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">
                  メールアドレス
                </FieldLabel>
                <Input
                  id="email"
                  placeholder="name@example.com"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <Field>
            <Button type="submit" className={"cursor-pointer"}>保存</Button>
            <Button type="button" className={"cursor-pointer"} variant={"outline"} onClick={onCancel}>
              キャンセル
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
