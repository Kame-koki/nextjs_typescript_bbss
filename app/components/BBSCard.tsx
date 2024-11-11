import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BBSDate } from '../types/types';

interface BBSDateProps{
  bbsData: BBSDate;
}

//{bbsData}はデータベースから取ってきたデータをmap関数で展開した中身
//Cardはshadcnからインポートしたコンポーネント
const BBSCard = ({bbsData}:BBSDateProps) => {
  const {id,title,content,createAt,username} = bbsData;
  return (
    <div>
        <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{username}</CardDescription>
        </CardHeader>
        <CardContent>
          {content}
        </CardContent>
        <CardFooter className="flex justify-between">
        <Link href={`/bbs-post/${id}`} className="text-blue-500">Read More</Link>
        </CardFooter>
        </Card>
    </div>
  )
}

export default BBSCard