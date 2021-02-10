// redux persist - local storage, session storage

//1. store.js 
import {persistStore} from “redux-persist”
// 브라우저가 스토어를 캐시하도록 함
export const persistor = persistStore(store)
// persisted version의 store을 생성한 후 export

// 2. root-reducer.js
import {persistReducer} from “redux-persist”
// reducer를 persist하기 위한 코드
// 다음 둘 중 하나를 입력
import storage from “redux-persist/lib/storage” // local storage
import sessionStorage from “redux-persist/lib/storage” // session storage

const persistConfig = {
 key: 'root', 
 storage,
//  whitelist: [], // persist하고자 하는 reducer를 지정 
}

export default persistReducer(persistConfig, rootReducer)


// 예를 들어, 
// export default combindReducers({
//   user: userReducer,
//   cart: cartReducer
// })
// 로 지정되어 있다면, whitelist = [‘user’, ‘cart’]로 사용할 수 있음


// 3. index.js
import {PersistGate} from ‘redux-persist/integration/react’;
import {persistor} from “./redux/store”

<PersistGate persistor = {persistor}>
	<App/>
</PersistGate>
