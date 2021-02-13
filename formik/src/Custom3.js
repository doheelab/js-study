import React, { useEffect } from 'react';
import { Formik, Form, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import './styles.css';
import './styles-custom.css';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  // console.log(meta.value);
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {/* {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: '❌ ';
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

// And now we can use these
const Custom3 = () => {
  return (
    <>
      <h1>식단 정보 설정</h1>
      <Formik
        initialValues={{
          affiliation: '',
          weekdays: '',
          menutype: '',
          banchan_num: '',
          dessert_num: '',
          calories: '',
          special: '',
          price: '',
          mon: '',
          tue: '',
          wed: '',
          thr: '',
          fri: '',
        }}
        validationSchema={Yup.object({
          // firstName: Yup.string()
          //   .max(15, 'Must be 15 characters or less')
          //   .required('Required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <MySelect label="기관" name="affiliation">
            <option value="">기관을 선택하세요</option>
            <option value="elem">초등학교</option>
            <option value="middle">중학교</option>
            <option value="high">고등학교</option>
            <option value="other">기타</option>
          </MySelect>
          <MySelect label="식사 종류" name="menutype">
            <option value="">식사 종류를 선택하세요</option>
            <option value="L">중식</option>
            <option value="D">석식</option>
            <option value="LD">중식, 석식</option>
            <option value="BLD">조식, 중식, 석식</option>
          </MySelect>
          <MySelect label="반찬 수" name="banchan_num">
            <option value="">반찬 수를 선택하세요</option>
            <option value="2">2개</option>
            <option value="3">3개</option>
            <option value="4">4개</option>
          </MySelect>
          <MySelect label="디저트 수" name="dessert_num">
            <option value="">디저트 수를 선택하세요</option>
            <option value="0">0개</option>
            <option value="1">1개</option>
            <option value="2">2개</option>
          </MySelect>
          <MySelect label="열량" name="calories">
            <option value="">열량을 선택하세요</option>
            <option value="300">300~400kcal</option>
            <option value="400">400~500kcal</option>
            <option value="500">500~600kcal</option>
            <option value="600">600~700kcal</option>
            <option value="700">700~800kcal</option>
            <option value="800">800~900kcal</option>
            <option value="free">상관없음</option>
          </MySelect>
          <MySelect label="특식 제공일" name="special">
            <option value="">특식 제공일을 선택하세요</option>
            <option value="mon">월</option>
            <option value="tue">화</option>
            <option value="wed">수</option>
            <option value="thu">목</option>
            <option value="fri">금</option>
            <option value="free">상관없음</option>
          </MySelect>

          <MySelect label="식재료비/1식" name="price">
            <option value="">식재료비를 선택하세요</option>
            <option value="1000">1000~2000원</option>
            <option value="2000">2000~3000원</option>
            <option value="3000">3000~4000원</option>
            <option value="4000">4000~5000원</option>
            <option value="free">상관없음</option>
          </MySelect>
          <div />
          <button
            type="submit"
            onClick={() => alert('식단 정보가 저장되었습니다')}
          >
            저장하기
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Custom3;

// function App() {
//   return <SignupForm />;
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
