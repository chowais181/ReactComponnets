import { useSelector, useDispatch } from "react-redux";
const Votes = () => {
  const dispatch = useDispatch();
  const vote = useSelector((state) => state.vote);
  const toggle = useSelector((state) => state.toggle);
  // console.log(toggle);
  // console.log(vote);
  const IncrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const DecrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const togggleVote = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <>
      {toggle && toggle ? (
        <div>
          <h1>Redux votes</h1>
          <p>Number of votes: {vote}</p>
          <button onClick={IncrementHandler}>increment</button>
          <button onClick={DecrementHandler}>decrement</button>
          <button onClick={togggleVote}>Hide vote</button>
        </div>
      ) : (
        <button onClick={togggleVote}>Show vote</button>
      )}
    </>
  );
};
export default Votes;
