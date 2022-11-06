import { useReducer } from 'react';

export const Hello = (props) => {
  console.log('Starting Hello.jsx...');
  // const [isActive, setIsActive] = useState(false);
  const [isActive, toggleActive] = useReducer((pre) => !pre, false);

  return (
    <>
      <h1>안녕하세요, {props.name} !!</h1>
      {/* props의 name을 h1 tag에 출력합니다. */}
      <h3>
        날씨: {props.weather} - {isActive && '^^'}
      </h3>
      {/* <button onClick={() => setIsActive)}> */}
      <button onClick={toggleActive}>
        Toggle Acitve: {isActive ? 'Active!' : ''}
      </button>
    </>
  );
};

export const Hello2 = ({ name, children }) => {
  return (
    <>
      <h1>Hi~ {name}!</h1>
      {children}
    </>
  );
};
