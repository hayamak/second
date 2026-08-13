import { Building, Laptop } from "lucide-react";

export const navigation = [
  {
    title: "組織",
    icon: Building,
    items: [
      {
        title: "組織情報",
        url: "/organisation",
      },
      {
        title: "利用者",
        url: "/organisation/employees",
      },
    ],
  },
  {
    title: "資産",
    icon: Laptop,
    items: [
      {
        title: "ハードウェア",
        url: "/assets/hardware",
      },
      // {
      //   title: "ライセンス",
      //   url: "#",
      // },
    ],
  },
];
