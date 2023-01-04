# React와 Vue

### Library(React 성향) vs Framework(Vue 성향)

Library는 별도의 라이브러리를 통해서 필요한 기능을 사용해야 한다.(필요할 때 가져다 쓰고, 빼며 사용할 수 있다.) ex)라우팅, 빌드 시스템 등을 알아서 해야한다.

반면 Vue는 javascript framework이다. 따라서 부분적인 사용이 불가하고 프레임 워크가 지원해주는 문법에 따라 작성해야한다. (라우팅, 빌드 시스템 등이 갖추어져 있다. =>기능 기본적으로 많이 제공)

## React와 Vue의 코드 차이

React는 JSX(JavaScript XML) 형태로 코드 작성하여 JS문법을 응용하기 때문에 JS만으로 UI로직과 DOM 구현한다.(필요한 기능 별도의 라이브러리로 가져다 써도 OK)

Vue는 HTML, JS, CSS 코드 영역을 분리하여 작성한다. '.vue'파일을 만들 때에도 <template>에 HTML, <script>안에 JS, <style>안에 CSS를 작성한다.

VUE에서는 정해진 방식으로 코드 작성해서 더 쉽고 생산성도 높고 가시성이 있을 확률이 있다.

![](https://miro.medium.com/max/700/1*zi-9tagj8f4_E_euZx88Zw.png)

변수 바꿀때도 Vue 에서는 this.name = ??? 로 바꾸면 되지만 React에서는 this.state.name = ???로 바꿀수 없다 this.setstate({name:???})으로 바꿔야 한다. 왜냐하면 라이프 사이클에서 state를 변경할 때 마다 다시 실행하려하기 때문에 더 많은 작업을 해야하기 때문에(this.state.name 쓸때) 간단하게 하기 위해서 setstate를 사용합니다.

## 컴포넌트 분리와 재사용

React는 컴포넌트의 생성과 재사용이 큰 장점. 파일별로 컴포넌트를 분리 가능하고, 새로운 함수형 컴포넌트를 생산하여 props 형태로 전달하거나 다른 곳에서 재사용 하기 쉽다.

Vue는 새로운 컴포넌트를 만들어 분리하기 위해 새로운 파일을 만들고 <template>, <script>, <style> 모두 작성해줘야한다. 또한 props를 전달하는 과정에서 해당 컴포넌트를 사용하는 모든 파일을 오가며 작성해줘야 한다.(이래서 상태관리 vuex로 어느정도 해소 가능)

20230103 https://erwinousy.medium.com/%EB%82%9C-react%EC%99%80-vue%EC%97%90%EC%84%9C-%EC%99%84%EC%A0%84%ED%9E%88-%EA%B0%99%EC%9D%80-%EC%95%B1%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4-%EC%9D%B4%EA%B2%83%EC%9D%80-%EA%B7%B8-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%B4%EB%8B%A4-5cffcbfe287f

여기까지 작성.
