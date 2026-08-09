import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const items = [
  { name: "羽山 和行", employeeNumber: "4321", email: "hayama@sfinter.com" },
  { name: "与島 大志郎", employeeNumber: "4332", email: "yojima@sfinter.com" },
  { name: "佐藤 ひろし", employeeNumber: "4356761", email: "sato@sfinter.com" },
  { name: "東 与四郎", employeeNumber: "55677", email: "higashi@sfinter.com" },
  { name: "鈴木 康二", employeeNumber: "44467", email: "suzuki@sfinter.com" },
  { name: "徳川 秀雄", employeeNumber: "1232222", email: "tokugawa@sfinter.com" },
]

export default function MembersPage() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-8 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">利用者</h1>
        <Button variant={"outline"} className="cursor-pointer">追加する</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>氏名</TableHead>
            <TableHead>社員番号</TableHead>
            <TableHead>メールアドレス</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => {
            return (<TableRow key={item.employeeNumber}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.employeeNumber}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </div>
  )
}
