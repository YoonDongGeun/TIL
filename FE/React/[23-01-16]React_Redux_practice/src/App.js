import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators } from "./state/index"
// export default function App(){
// return <div>헬로</div>
// }


function DataList({list}) {
  const [Ls, setLs] = React.useState(list);
  const handleUpdateList = () => {
    console.log(Ls);
    setLs([...Ls,{id: `item-${Ls.length + 1}`,
    content: '새로운 학습 주제 추가하기'
  }])
  }

  return React.createElement(
    'div',
    {role:'group'},
    React.createElement(
      'button',
      {type:'button', onClick: handleUpdateList},
      '데이터 아이템 추가'
    ),
    React.createElement('ul',
    {className : 'DataList'},
    Ls.map((item) => React.createElement('li', {key: item.id}, item.content))
    
  )
  )


}


export default function App(){
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      { className: 'point'},
      'React 라이브러리',
      '활용하기',
      ' ',
      '하하하하하'
    ),
    React.createElement(DataList, {
      list: [
        {id: "item-1", content: 'React 학습하기'},
        {id: "item-2", content: 'ReactDOM을 활용한 SSR'},
        {id: "item-3", content: 'CSS 유틸리티 퍼스트 프레임워크 활용'}
      ]
    },
    ),
    <h1>{account}</h1>,
    <button onClick={()=>depositMoney(1000)}>deposit </button>,
    <button onClick={()=>withdrawMoney(1000)}>withdraw</button>
  )
}