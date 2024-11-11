import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

//データベースとフロントエンドの橋渡しをするコンポーネント


 //databaseの内容を全て取ってくる
export async function GET(){
    const AllBBSPosts = await prisma.post.findMany();

    return NextResponse.json(AllBBSPosts);
};

//databaseに内容を保存する
export async function POST(req:Request){
    const {username,title,content} = await req.json();

    const post = await prisma.post.create({
        data:{
            username,
            title,
            content,
        }
    });
    return NextResponse.json(post);
};