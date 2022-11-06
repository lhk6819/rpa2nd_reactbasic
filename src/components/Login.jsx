import { useEffect, useRef } from 'react';
import { useSession } from '../hooks/session-context';

// export const Login = ({ login }) => {
export const Login = () => {
  console.log(`Starting Login...`);
  const { login } = useSession();
  // const [userId, SetUserId] = useState(10);
  // const [userName, setUserName] = useState('홍길동');
  const userIdRef = useRef();
  const userNameRef = useRef();

  // window.addEventListener('load', () => {})
  // 브라우저 창이 로딩되면 userIdRef에 커서가 뜨게 함.
  useEffect(() => {
    userIdRef.current.focus();
  }, []);

  console.log('End of Login');

  return (
    <>
      <h2>Login Plz</h2>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          login(userIdRef.current.value, userNameRef.current.value);
        }}
      >
        <label htmlFor='user-id'>UserID:</label>
        {/* <input
          id='user-id'
          type='number'
          value={userId}
          onChange={(evt) => setUserId(evt.target.value)}
        /> => 이런 부분을 간단하게 하기 위해서 우리는 useRef를 사용합니다. */}
        <input type='number' ref={userIdRef} />

        <label htmlFor='user-name'>UserName:</label>
        {/* <input
          id='user-name'
          type='text'
          value={userName}
          onChange={(evt) => setUserName(evt.target.value)}
        /> => 마찬가지로 useRef를 통해서 이런 부분을 간단하게 하기 좋다. */}
        <input type='text' ref={userNameRef} />

        <button type='submit'>로그인</button>
      </form>
    </>
  );
};
