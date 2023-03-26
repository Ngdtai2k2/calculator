// khởi tạo trạng thái ban đàu
export const initialState = {
  initialValue: "0",//giá trị ban đầu khởi tạo bằng 0
  operator: null,
  prevValue: null,//Giá trị sau
};

export const handleNumber = (value, state) => {
  if (state.initialValue === "0") {
    return { initialValue: `${value}` };
  }

  return {
    initialValue: `${state.initialValue}${value}`,
    // nhược điểm là khi người dùng tính xong sẽ phải nhấn ac, 
    // nếu ko khi là số khác 0 sẽ  bị nối số
  };
};


const calculator = (type, value, state) => {
  const { initialValue, prevValue, operator } = state;
  const a = parseFloat(initialValue);
  const b = parseFloat(prevValue);
  const reset = { operator: null, prevValue: null };

  switch (type) {
    case "number":
      return {
        // gọi trực tiếp thay vì state.initialValue
        initialValue: initialValue === "0" ? value : initialValue + value,
      };
    case "clear":
      return initialState;
    case "change":
      return {
        initialValue: `${a * -1}`,
      };
    case "percentage":
      return {
        initialValue: `${a / 100}`,
      };
    case "operator":
      return {
        operator: value,
        prevValue: initialValue,
        initialValue: "0",
      };
    case "equal":
      switch (operator) {
        case "+":
          return {
            initialValue: `${b + a}`,
            ...reset,
          };
        case "-":
          return {
            initialValue: `${b - a}`,
            ...reset,
          };
        case "*":
          return {
            initialValue: `${b * a}`,
            ...reset,
          };
        case "/":
          if (a === 0) {
            return {
              initialValue: "error",
              operator: null,
              prevValue: null,
            };
          } else {
            return {
              initialValue: `${b / a}`,
              ...reset,
            };
          }
        default:
          return state;
      };
    default:
      return state;
  }
};


export default calculator;