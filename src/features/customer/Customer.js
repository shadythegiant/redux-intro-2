import { useSelector } from "react-redux";

function Customer() {
  //hooks used to access stored state in the redux store!
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
