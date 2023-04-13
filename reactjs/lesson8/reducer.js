/**useReducer là một hook của React được sử dụng để quản lý trạng thái của một component dựa trên một reducer function. Nó cung cấp một cách để thay đổi trạng thái của component một cách rõ ràng hơn và kiểm soát được hành vi của nó.

useReducer giống với useState, nhưng thay vì sử dụng một biến state và một hàm để cập nhật state, useReducer sử dụng một cặp giá trị gồm state và dispatch để quản lý trạng thái của component. Trong đó, state là trạng thái hiện tại của component, và dispatch là một hàm để gọi reducer function và cập nhật trạng thái mới.

Cú pháp sử dụng useReducer như sau:
 * 
 */
const [state, dispatch] = useReducer(reducer, initialState);
/**
 * Trong đó, reducer là một function nhận vào hai tham số là state hiện tại và action, và trả về state mới. initialState là giá trị ban đầu của state.

Khi muốn thay đổi trạng thái của component, ta gọi hàm dispatch và truyền vào một action, một đối tượng chứa thông tin về hành động mà ta muốn thực hiện.

Ví dụ:
 */
import React, { createContext, useReducer, useState } from 'react';

const initialState = { count: 0 };

function reducer(state, action) { // function phải trả về state có cùng format với state khởi tạo
  switch (action) {
    case 'increment':
      return { count: state.count + 1 }; // trả về 1 state mới, là 1 object có {count = count+1}
    case 'decrement':
      return { count: state.count - 1 };// trả về 1 state mới, là 1 object có {count = count-1}
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch( 'increment' )}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
    </div>
  );
}

export default Counter;

// Giá trị truyền vào dispatch sẽ được nhận ở tham số action trong hàm reducer, ứng với mỗi giá trị truyền vào, hàm reducer sẽ trả về 1 kết quả tương ứng
// Chúng ta có thể truyền trực tiếp giá trị như ví dụ trên, hoặc có thể truyền vào 1 object có {type: hành động muốn thực hiện, payload: dữ liệu đi kèm}
// useReducer không giúp code ngắn gọn hơn, nhưng giúp code có thể tách ra
// Thưởng sử dụng switch-case
