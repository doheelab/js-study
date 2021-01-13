import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceHolder';

// Action creators in action creators
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // console.log(getState().posts); // posts: combineReducer의 key

  // lodash map
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  const userIds = getState().posts.map((post) => post.userId);
  userIds.forEach((id) => dispatch(fetchUser(id)));
  // map은 실행 결과를 새로운 배열 리턴, forEach는 단순 순회
  // [1,2,3].map(el => el) >> [1,2,3]
  // [1,2,3].forEach(el => el) >> undefined

  console.log(getState().users);

  // asyncronous action
  for (const id of userIds) {
    await dispatch(fetchUser(id));
  }

  console.log(getState().users);
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  };
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
