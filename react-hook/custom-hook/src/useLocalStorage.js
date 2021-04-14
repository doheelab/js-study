import { useState, useEffect } from "react";

// useState와 기능이 같은 함수
// export default function useLocalStorage(initialValue) {
//   const [value, setValue] = useState(initialValue);
//   return [value, setValue];
// }

///////////////////////////////////////////////////

// key에 해당하는 값이 있으면 그 값을, 아니면 initialValue를 리턴
function getSavedValue(key, initialValue) {
  console.log("rendering");
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  // (Tip) 아래와 같이 선언하면 rendering시 매번 useState 실행되므로 함수형으로 써야한다.
  // const [value, setValue] = useState(getSavedValue(key, initialValue));

  // local storage의 key에 value를 저장
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
