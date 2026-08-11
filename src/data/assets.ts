// src/data/assets.ts

const assetTemplates = [
  {
    manufacturer: "Apple",
    model: "MacBook Pro 14",
    user: "山田 太郎",
    status: "使用中",
  },
  {
    manufacturer: "Lenovo",
    model: "ThinkPad X1 Carbon Gen 12",
    user: "佐藤 花子",
    status: "使用中",
  },
  {
    manufacturer: "Microsoft",
    model: "Surface Pro 11",
    user: "鈴木 一郎",
    status: "使用中",
  },
  {
    manufacturer: "Apple",
    model: "iPhone 16 Pro",
    user: "高橋 美咲",
    status: "使用中",
  },
  {
    manufacturer: "Dell",
    model: "U2723QE",
    user: "山田 太郎",
    status: "使用中",
  },
  {
    manufacturer: "Yamaha",
    model: "RTX1300",
    user: null,
    status: "使用中",
  },
  {
    manufacturer: "Synology",
    model: "DS923+",
    user: null,
    status: "使用中",
  },
  {
    manufacturer: "APC",
    model: "SMT1500RMJ2U",
    user: null,
    status: "使用中",
  },
  {
    manufacturer: "EPSON",
    model: "PX-M887F",
    user: null,
    status: "故障",
  },
  {
    manufacturer: "Apple",
    model: "MacBook Air 13",
    user: null,
    status: "保管中",
  },
];

export const assets = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const template = assetTemplates[index % assetTemplates.length];

  return {
    id,
    serialNumber: `SN${String(id).padStart(6, "0")}`,
    ...template,
  };
});
