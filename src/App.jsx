import { useReducer } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { My } from './components/My';
import { SessionProvider } from './hooks/session-context';

function App() {
  const reducer = (count, action) => {
    switch (action.type) {
      case 'plus':
        return count + (action.payload ?? 1);
      case 'minus':
        return count - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  const plusCount = (cnt) => dispatch({ type: 'plus', payload: cnt });
  // 일단은 payload가 무슨 말인지 모르겠습니다.
  const minusCount = () => dispatch({ type: 'minus' });

  return (
    <div className='App'>
      <div>
        <Hello name='현광' weather='추움' />
      </div>
      <hr />
      {/* Context를 쓴다면 이런 절차는 필요하지 않다. */}
      {/* <My
        session={session}
        login={login}
        logout={logout}
        removeCartItem={removeCartItem}
      /> */}
      <SessionProvider>
        <My />
      </SessionProvider>
      <hr />
      <div className='card'>
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        {/* <button onClick={() => setCount(count + 1)}>Plus</button> */}
        <button onClick={() => plusCount(5)}>5를 더합니다.</button>
        <strong>{count}</strong>
        {/* <button onClick={() => setCount(count - 1)}>Minus</button> */}
        <button onClick={minusCount}>1를 뺍니다.</button>
      </div>
    </div>
  );
}

export default App;
