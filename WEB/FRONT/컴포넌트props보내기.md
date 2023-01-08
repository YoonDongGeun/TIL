# 프로퍼티 넘기기

style에 색깔, name에 이름 넘기기. ver1은 props로 ver2는 color,name으로 (객체로 자동 넘겨지기 vs 따로따로)

```js
//App.js
import React from 'react;
import Main from './component/Main';

function App(){
    return(
    <div>
        <Main name="윤동근" color="green"/>
    </div>
);
}

export default App;
```

```js
//Main.js
import React from 'react';

function Main(props) {
    return (
    <div>
<main>
<h1 style={ {color: props.color} }>안녕하세요. {props.name} 입니다.</h1>
</main>
</div>
);
}
export default Main;
```

```js
//Main.js ver2
import React from 'react';


function Main({name, color}) {
    return (
    <div>
        <main>
            <h1 style={{color}}>안녕하세요. {name} 입니다.</h1>
        </main>
    </div>
);
}
export default Main;
```

**숫자 넘기기**

```js
//App.js
import React from 'react;
import Main from './component/Main';

function App(){
    return(
    <div>
        <Main name={9} color="green"/>
    </div>
);
}

export default App;
```

위와 같이 숫자 넘길때는 {}를 써준다.

그러면 원하는 타입의 변수를 받지않으면 경고메시지를 출력하는 코드를 짜보자(버그 예방)

```js
//Main.js
import React from 'react';
import PropTypes from 'prop-types';

function Main({name, color}) {
    return (
    <div>
        <main>
            <h1 style={{color}}> 안녕하세요. {name}입니다.
        </main>
    </div>
);
}


// 프로퍼티 타입 지
```

(Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `Main`, expected `string`. at 컴포넌트명)

만약 {9}가 들어오면 위와 같은 경고 메시지를 출력한다(콘솔창)

### default 값 설정

```js
//Main.js
import React from 'react';
import PropTypes from 'prop-types' // 프로퍼티 타입을 지정해주기 위해 사용 한다.

function Main({name, color}) {
    return (
        <div>
            <main>
                <h1 style={{color}}>안녕하세요. {name} 입니다.</h1>
            </main>
        </div>
    );
}

// 프로퍼티 타입 지정
Main.propTypes = {
  name: PropTypes.string
}

// 프로퍼티 기본값 지정
Main.defaultProps = {
  name: '디폴트'//아무것도 입력하지 않으면 '디폴트'가 기본값(App.js 에서)
}

export default Main;
```

### 필수값 설정

```js
//Main.js
import React from 'react';
import PropTypes from 'prop-types' // 프로퍼티 타입을 지정해주기 위해 사용 한다.

function Main({name, color}) {
    return (
        <div>
            <main>
                <h1 style={{color}}>안녕하세요. {name} 입니다.</h1>
            </main>
        </div>
    );
}

// 프로퍼티 타입 지정 및 필수값 설정
Main.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Main;
```

Warning: Failed prop type: The prop `name` is marked as required in `Main`, but its value is `undefined`. at 컴포넌트명

지켜지질 않을때 위와같은 에러메시지 출력

## 참거짓 자료형.

```js
//Main.js
import React from 'react';
import PropTypes from 'prop-types'

function Main({color, name, maleYn}) {
    const msg = maleYn ? '남자' : '여자'; // 불리언 사용
    return (
        <div>
            <main>
                <h1 style={{color}}>안녕하세요. {name} 입니다. ({msg})</h1>
            </main>
        </div>
    );
}

Main.propTypes = {
    name: PropTypes.string
}
```

```js
//App.js
import React, { Component } from 'react';
import Main from './component/Main';
import Wrapper from './component/Wrapper';

function App() {
  return (
    <div>
      <Main name="홍길" color="blue" maleYn/>
    </div>
  );
}
export default App;
```

위 코드에서 maleYn을 생략하면 False가 된다.

## props.children을 이용해 하위 컴포넌트 손실 없이 출력하며 현재 컴포넌트만 바꾸기

**1)**

wrapper로 감싸기

```js
//Wrapper.js
import React from 'react';
import Main from './Main';

function Wrapper(props) {
    const style = {
        backgroundColor: 'yellow',
      };

    return (
        <div style={style}>
        </div>
    );
}

export default Wrapper;
```

```js
//App.js
import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Wrapper from './component/Wrapper';

function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Main color="blue"/>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
```

**2)**

wrapper의 하위 컴포넌트 children 살리기

```js
//wrapper.js
import React from 'react';

function Wrapper({children}) {
    const style = {
        backgroundColor: 'yellow',
      };

    return (
        <div style={style}>
            {children}
        </div>
    );
}

export default Wrapper;
```

children을 props로 바꾸고 {props.children} 으로 바꿔도 좋다.!

**3) 1개의 자식만 요구하기**

```js
//App.js
import React, { Component } from 'react';
import Main from './component/Main';
import Wrapper from './component/Wrapper';

function App() {
  return (
    <div>
      <Wrapper>
        <Main name="홍길동" color="blue"/>
        <Main name="홍길" color="black"/>
      </Wrapper>
    </div>
  );
}

export default App;
```

위의 코드는 2개 출력할 것이다. 하지만 기존의 wrapper에서 문구를 추가해보자.

```js
//Wrapper.js
import React from 'react';
import PropTypes from 'prop-types' // 프로퍼티 타입을 지정해주기 위해 사용 한다.

function Wrapper(props) {
    const style = {
        backgroundColor: 'yellow',
      };

    return (
        <div style={style}>
            {props.children}
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.element.isRequired
};

export default Wrapper;
```

 Warning: Failed prop type: Invalid prop `children` of type `array` supplied to `Wrapper`, expected a single ReactElement. at 컴포넌트명

만약 2개의 컴포넌트가 children으로 있으면 경고메시지를 출력한다.
