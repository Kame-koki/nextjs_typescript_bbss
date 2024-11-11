import BBSCardList from "./components/BBSCardList";
import { BBSDate } from "./types/types";

//ルーター経由でデータベースから取得したデータを全てサーバーサイドレンダリングで取得する
//json形式で返す
async function getBBSALLDate(){
  const response = await fetch ("http://localhost:3000/api/post",{
    //ssrで取得
    cache: "no-store",
  });

  const bbsAllData : BBSDate[] = await response.json();
  return bbsAllData;
}

//bbsAllDataに取得したデータを代入し、BBSCardListにプロップスで渡す
export default async function Home() {
  const bbsAllData = await getBBSALLDate();

  return (
      <main>
        <BBSCardList bbsAllData = {bbsAllData}/>
      </main>
  );
}
