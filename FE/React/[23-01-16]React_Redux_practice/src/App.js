import React from 'react'
import { createStore } from 'redux';
// connect는 어려움 -> 재사용성 때문에 있음.
import {Provider, useSelector, useDispatch, connect} from 'react-redux';
//currentState 는 현재 State값
function reducer(currentState, action){
  // 현재 State값이 없으면 넣어주기.
  if(currentState === undefined){
    return {
      number:1,
    };
  }

    //복제본 수정하여 불변성 유지.
    const newState = {...currentState};
    if (action.type == 'PLUS') {
      newState.number++;
    }
    if (action.type == 'MINUS'){
      newState.number--;
    }
    return newState

}
const store = createStore(reducer);
console.log(store)


function Box(props){
  const dispatch = useDispatch()
  // const Minus = () => {
  //   dispatch({type: 'MINUS'})
  // }
  function Minus() {
    dispatch({type:'MINUS'})
  }
  const number = useSelector((state) => state.number);
  return(
    <div>
      <h1>박스입니다.</h1>
      <h1>number : {number}</h1>
      <button onClick={() => {
        dispatch({type: 'PLUS'})
        }}>1 올리기</button>
      <button onClick={Minus}>1 내리기</button>
    </div>
  );
}






export default function App(){
  return (
    <Provider store={store}>
      <Box></Box>
      <h1>헬로</h1>
    </Provider>
  )
}