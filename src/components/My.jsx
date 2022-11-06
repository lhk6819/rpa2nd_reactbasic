import { useEffect, useRef, useState } from 'react';
import { useSession } from '../hooks/session-context';
import { Login } from './Login';
import { Profile } from './Profile';

// export const My = ({ session, login, logout, removeCartItem }) => {
export const My = () => {
  console.log('Starting My.jsx...');

  // useSession에서 session과 removeCartItem기능을 사용
  const { session, removeCartItem } = useSession();
  const [sec, setSec] = useState(0);
  const ulRef = useRef();

  // run * 2 ===> (render -> [useLayoutEffect] -> mount -> [useEffect]) -> unMount -> mount
  /*
  [1, 2, 3].reduce((pre, a) => pre + a, 0);
  pre      currentValue(a)         action
   0             1                 0 + 1
   1             2                 1 + 2
   3             3                 3 + 3
   return 6;
  */

  useEffect(() => {
    const intl = setInterval(() => {
      setSec((sec) => sec + 1);
    }, 1000);

    return () => clearInterval(intl);
  }, []);

  return (
    <>
      <div>현재, {sec}초 머물러 있습니다.</div>
      {session.loginUser ? <Profile /> : <Login />}
      <div>
        <ul ref={ulRef}>
          {session.cart.map((item) => (
            <li key={item.id}>
              {item.name} <small>(\{item.price.toLocaleString()})</small>
              <button onClick={() => removeCartItem(item.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
