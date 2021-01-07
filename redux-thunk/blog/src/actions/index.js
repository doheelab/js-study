import jsonPlaceholder from '../apis/jsonPlaceHolder';

// action creators

// Bad approach: breaking the rule of redux
// Error: Actions must be plain objects. Use custom middleware for async actions.
export const fetchPosts = () => {
  // 첫번째 문제  // async
  // const response = await jsonPlaceholder.get('/posts');
  // 두번째 문제
  // const response = jsonPlaceholder.get('/posts');

  // return {
  //   type: 'FETCH_POSTS',
  //   payload: response,
  // };

  // redux thunk를 이용하면 다음과 같은 함수를 return할 수 있다
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('posts');
    dispatch({ type: 'FETCH_POSTS', payload: response });
  };
};
