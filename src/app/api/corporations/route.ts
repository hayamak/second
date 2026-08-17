// src/app/api/corporations/route.ts

import { NextRequest, NextResponse } from "next/server";
import { corporationSearchSchema } from "@/schemas/corporation";

import { XMLParser } from "fast-xml-parser";

type NtaResponse = {
  corporations?: {
    corporation?: {
      corporateNumber?: string;
      name?: string;
      postCode?: string;
      prefectureName?: string;
      cityName?: string;
      streetNumber?: string;
    };
  };
};

export async function GET(request: NextRequest) {
  const result = corporationSearchSchema.safeParse({
    corporateNumber: request.nextUrl.searchParams
      .get("corporateNumber")
      ?.trim(),
  });

  if (!result.success) {
    return NextResponse.json(
      { error: "法人番号が正しくありません" },
      { status: 400 },
    );
  }

  const { corporateNumber } = result.data;

  console.log(corporateNumber);

  const applicationId = process.env.NTA_APPLICATION_ID;

  if (!applicationId) {
    console.error("NTA_APPLICATION_ID is not configured");

    return NextResponse.json(
      { message: "法人番号Web-APIの設定がありません" },
      { status: 500 },
    );
  }

  const searchParams = new URLSearchParams({
    id: applicationId,
    number: corporateNumber,
    type: "12",
    history: "0",
  });

  try {
    const response = await fetch(
      `https://api.houjin-bangou.nta.go.jp/4/num?${searchParams.toString()}`,
    );

    if (!response.ok) {
      console.error("NTA Web API error:", response.status, response.statusText);

      return NextResponse.json(
        { message: "法人情報の取得に失敗しました" },
        { status: 502 },
      );
    }

    const xml = await response.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      parseTagValue: false,
      trimValues: true,
    });

    const parsed = parser.parse(xml) as NtaResponse;

    const corporation = parsed.corporations?.corporation;

    if (!corporation) {
      return NextResponse.json(
        { message: "該当する法人が見つかりませんでした" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      corporateNumber: String(corporation.corporateNumber ?? ""),
      name: corporation.name ?? "",
      address: {
        postalCode: String(corporation.postCode ?? ""),
        prefecture: corporation.prefectureName ?? "",
        city: corporation.cityName ?? "",
        street: corporation.streetNumber ?? "",
        building: "",
      },
    });
  } catch (error) {
    console.error("Failed to connect to NTA Web API:", error);

    return NextResponse.json(
      { message: "法人情報を処理できませんでした" },
      { status: 502 },
    );
  }
}
