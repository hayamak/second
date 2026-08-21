// src/config/navigation.ts

import { Building, Laptop } from "lucide-react";

export const navigation = [
  {
    title: "組織",
    icon: Building,
    items: [
      {
        title: "法人情報",
        url: "/corporation",
      },
      {
        title: "従業員",
        url: "/corporation/employees",
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
    ],
  },
];
