# 리액트 CDN 설치

리액트 install 없이 CDN으로 설치

**1단계**

```html
<!-- ... existing HTML ... -->

<div id="like_button_container"></div>

<!-- ... existing HTML ... -->
```

Vue와 맞찬가지로 DOM컨테이너를 설치해야한다. DOM컨테이너는 body태그 안쪽에 div태그를 추가하면 된다.

**2단계**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Add React in One Minute</title>
  </head>
  <body>

    <h2>Add React in One Minute</h2>
    <p>This page demonstrates using React with no build tooling.</p>
    <p>React is loaded as a script tag.</p>

    <!-- We will put our React component inside this div. -->
    <div id="like_button_container"></div><!-- ... 다른 HTML ... -->

  <!-- React를 실행. -->
  <!-- 주의: 사이트를 배포할 때는 "development.js"를 "production.min.js"로 대체하세요. -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

  <!-- 만든 React 컴포넌트를 실행. -->
  <script src="like_button.js"></script>

</body>
```

CDN을 사용한다.  이때 like_button.js 는 컴포넌트를 실행하는 거고 파일이 있어야한다.

**3단계**

```html
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
```

# 리액트 npm 시작

```shell
npx 이름 create-react-app 앱이름
cd 앱이름
npm start
```
