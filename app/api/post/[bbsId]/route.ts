import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

//データベースの中から任意のパラメーターの情報を入手し、フロントエンドに渡すコンポーネント
//非同期処理
export async function GET(
    req: Request,
    {params}:{params:{bbsid:string}}
){
    const bbsId = params.bbsid;
    const bbsDetailData = await prisma.post.findUnique({
        where:{
            id: parseInt(bbsId),
        },
    });
    return NextResponse.json(bbsDetailData);
};