## Next.js

## The React Framework for Production

Next.js gives the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

### Library vs Framwork

Library: 개발자로서 내가 사용하는 것, 내가 library를 불러오고 사용해서 무언가를 한다.

library를 사용할 때는, 내가 원하는 대로 코드를 작성할 수 있고, 사용하고 싶을 때 사용할 수 있다.

Framwork: 나의 코드를 불러오는 것

framework에서는 코드를 적절한 위치에 잘 적기만 한다면, framwork는 코드를 불러와서 모든 걸 동작하게 한다.

framework에서는 특정한 규칙을 따라서 특정한 걸 해야 함.

ex) next.js에서는 pages폴더 안에 파일을 만들면 router를 만들 필요없이 알아서 url을 파일이름으로 만들어 준다.(시간절약)

### Static Pre Rendering

next.js의 가장 좋은 기능 중 하나는 앱에 있는 페이지들이 미리 렌더링 되는 것(pre-rendering)

react의 경우 빈 html파일(div)를 불러온 뒤 js와 reactjs를 요청하여 페이지가 렌더링 됨

(client-side rendering)

html을 불러오고 브라우저가 js, react 등 모든 것을 fetch한 후에야 UI가 보임

**hydration**: react.js를 프론트엔드 안에서 실행하는 것

next.js는 react.js를 백엔드에서 동작시켜서 페이지를 미리 만듬

→ 렌더링이 끝나면 html이 되고 → next.js는 그 html을 페이지의 소스코드에 넣음

→ 그럼 유저는 js와 react.js가 로딩되지 않았더라도 콘텐츠를 볼 수 있음

### Routing

NextJS에서는 anchor 태그를 네비게이팅하는 데에 사용하면 안된다.

→ NextJS에 앱 내에서 페이지를 네비게이트할 때 사용해야만 하는 특정 컴포넌트가 존재하기 때문

NextJS에서 Link는 단지 href만을 위함, 나머지는 anchor 태그에다 넣어줌(style, class 등등, 이것이 react Link와 다른 점)

### CSS Modules

기존 방법: a tag style안에 js 오브젝트를 넣으면 됨, 하지만 좋은 해결책이 아님

→ modules(module.css)사용

module.css에서 클래스이름을 추가해줄때 클래스 이름을 텍스트로서 적지 않음, js 오브젝트에서의 property 형식으로 적음

→ 어떠한 이름 중복 충돌을 만들지 않음. 다른 component에서도 동일한 클래스 이름을 사용할 수 있음(클래스 이름 충돌을 겪지 않아도 됨)

→ 하지만 이것도 module.css의 클래스 이름들을 기억해야하고 조건문들을 써야해서 불편함

### Styles JSX
