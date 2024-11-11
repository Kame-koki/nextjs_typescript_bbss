import React from 'react'
import BBSCard from './BBSCard'
import { BBSDate } from '../types/types'

//bbsAllDataは配列なので、配列d定義する
interface BBSAllDateProps{
  bbsAllData: BBSDate[];
}

//データベースから収集したデータをmap関数で全て展開してプロップスで渡すコンポーネント
//BBSCard（文章表示コンポーネント）の親要素
const BBSCardList = ({ bbsAllData }: BBSAllDateProps ) => {
  return (
    <div  className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsDate: BBSDate)=>(
        <BBSCard key={bbsDate.id} bbsData={bbsDate}/>
      ))}
    </div>
  )
}

export default BBSCardList