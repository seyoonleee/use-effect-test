import { useEffect, useState } from 'react';

function App() {
  console.log('컴포넌트 랜더!');
  const [count, setCount] = useState(0);
  console.log(count);

  // useEffect함수의 두번째 인자는 옵셔널(있어도 되고 없어도 되고)
  useEffect(() => {
    console.log('✨useEffect의 콜백함수 본문시작');
    console.log('✨useEffect의 콜백실행!(오래걸리는 통신!)');
    console.log('✨useEffect의 콜백함수 본문끝');
  });

  return <header>{console.log('DOM 마운트!')}App component</header>;
}

export default App;
