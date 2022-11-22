// 액션 생성 함수
export const changeRect = () => {
  return { type: 'RECT' };
};

export const changeRadiusRect = () => {
  return { type: 'RADIUS_RECT' };
};

export const changeRound = () => {
  return { type: 'ROUND' };
};

// 초기 값
const initialState = {
  borderRadius: '0px',
};

// 리듀서
const changeRadius = (state = initialState, action) => {
  switch (action.type) {
    case 'RECT':
      return {
        ...state,
        borderRadius: '0px',
      };
    case 'RADIUS_RECT':
      return {
        ...state,
        borderRadius: '10px',
      };
    case 'ROUND':
      return {
        ...state,
        borderRadius: '50%',
      };
    default:
      return state;
  }
};

export default changeRadius;
