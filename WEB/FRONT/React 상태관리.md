# React의 state관리

원래 클래스 컴포넌트를 쓰는 이유는 함수 컴포넌트에서는 state나 Life Cycle을 다룰수 없었기 때문입니다. 하지만 React 16.8버전 이후로는 Hooks라는 기능이 생겨서 다룰수 있게 되었습니다.

```js
//App.js
import React, { Component } from 'react';
import Main from './component/Main';

function App() {
  return (
    <div>
        <Main name="홍길동" color="blue"/>
    </div>
  );
}

export default App;
```

```js
//Main.js
import React, { useState } from 'react';

const Main = (props) => {

    let myName = props.name;

    function changeName() {
        myName = myName === "Hong" ? "Hong" : "KIM";
        console.log(myName);
    }

    return (
        <div>
            <h1>안녕하세요. {myName} 입니다.</h1>
            <button onClick={changeName}>Change</button>
        </div>
    );
};

export default Main;
```

Change버튼을 누르면 console창에만 바뀐 이름이 뜨고, html창에는 뜨지 않는다. 그래서 위와 같은 코드를 바꾸려고 아래와 같이 할려 하겠지만, react DOM에서는 이렇게 해도 바뀌지 않는다.

```js
//Main.js
const Main = () => {
    let myName = "Hong";

    function changeName() {
        myName = myName === "Whang" ? "Whang" : "Hong";
        console.log(myName);
        document.getElementById("name").indderText = myName;
    }

    return (
        <div>
			<h1>안녕하세요. <span id="name">{myName}</span> 입니다.</h1>
			<button onClick={changeName}>Change</button>
        </div>
    );
};
```

### usestate

react 모듈에서는 {useState}를 불러오고, useState()를 선언해서 사용하면 도니다.

userState의 변수값이 바뀌면 새로 렌더링 한다.

```js
const [state, setState] = useState(initialState);
const [ 데이터, 데이터변경함수 ] = useState(초기값(생략가능));
```

setState는 생략해도 가능(안쓰면)

```js
//main.js
import React, { useState } from 'react';

const Main = () => {
	// let myName = "Hong"; // useState를 사용하여 변경
	const [ myName, setMyName ] = useState("GodDaeHee") 

    function changeName() {
        /*
		myName = myName === "Hong" ? "Hong" : "Hihi";
        console.log(myName);
        document.getElementById("name").indderText = myName;
		*/
		setMyName(myName === "Hong" ? "Hong" : "Hihi");
    }

    return (
        <div>
			<h1>안녕하세요. {myName} 입니다.</h1>
			{/* <button 
				onClick={() => {
					setMyName(myName === "Hong" ? "Hong" : "Hihi");
				}}
			>Change</button> */}
            <button onClick={changeName}>Change</button>
        </div>
    );
};

export default Main;
```

누를때마다 바뀔 것이다.

**변수 바꾸기 방법 1**가장 대표적인 경우 => cnt 올리기

```js
//main.js
import React, { useState } from 'react';

const Main = () => {
    const [ cnt, setCnt ] = useState(0)
    const updateCnt = () => setCnt(cnt + 1);
    const clearCnt = () => setCnt(0);
    return (
        <div>
            클릭한 횟수는 {cnt}번 입니다.
            <div>
                <button onClick={updateCnt}> 클릭해 보세요! </button>
                <button onClick={clearCnt}> 초기화 하기! </button>
            </div>
        </div>
    );
};

export default Main;
```

[cnt, setCnt]에서 setCnt(1)을 하면 cnt=1과 같이 작동한다.

**변수 바꾸기 방법 2(객체로 쓰고 state에 받기)**

```js
//main.js
import React, { useState } from 'react';

const Main = () => {
    const [ state, setState ] = useState({cnt : 0})
    const updateCnt = val => 
    setState({
        ...state,
        [val] : state[val] + 1
    })
    const { cnt } = state
    return (
        <div>
            클릭한 횟수는 {cnt}번 입니다.
            <div>
                <button onClick={updateCnt.bind(null, 'cnt')}> 클릭해 보세요! </button>
            </div>
        </div>
    );
};

export default Main;
```

**변수 바꾸기 방법 3(preCnt사용)**

```js
//main.js
import React, { useState } from 'react';

const Main = () => {
    const [ cnt, setCnt ] = useState(0)
    // const updateCnt = () => setCnt(cnt + 1);
    // const clearCnt = () => setCnt(0);
    return (
        <div>
            클릭한 횟수는 {cnt}번 입니다.
            <div>
            <button onClick={() => setCnt(prevCnt => prevCnt + 1)}> 클릭해 보세요! </button>
            <button onClick={() => setCnt(0)}> 초기화 하기! </button>
            </div>
        </div>
    );
};

export default Main;
```


