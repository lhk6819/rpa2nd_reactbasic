// session-context의 session, login, logout등의 기능 import함.
import { useSession } from '../hooks/session-context';

// export const Profile = ({ session, logout }) => { 이렇게 쓰기보다 밑에처럼
export const Profile = () => {
  const { session, logout } = useSession();
  return (
    <>
      <h2>
        Profile of {session.loginUser.name} ({session.loginUser.id})
      </h2>
      <button onClick={logout}>로그아웃</button>
    </>
  );
};
