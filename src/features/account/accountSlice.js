const intialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function accountReducer(state = intialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    case "account/convertCurr":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}

export function deposit(payload, currency) {
  if (currency === "USD")
    return {
      type: "account/deposit",
      payload,
    };
  else {
    return async function (dispatch, getState) {
      // isLoading

      dispatch({ type: "account/convertCurr" });
      //API call

      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${payload}&from=${currency}&to=USD`
      );
      const data = await res.json();
      console.log(data.rates.USD);
      const convertedAmount = data.rates.USD;
      //Return Action
      dispatch({
        type: "account/deposit",
        payload: convertedAmount,
      });
    };
  }
}
export function withdraw(payload) {
  return {
    type: "account/withdraw",
    payload,
  };
}

export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

export function payLoan() {
  return {
    type: "account/payLoan",
  };
}
