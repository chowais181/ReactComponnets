import { useSelector, useDispatch } from "react-redux";
import { actions } from "./Store";
const Votes = () => {
  const dispatch = useDispatch();
  const votes = useSelector((state) => state.votes);

  console.log(votes.toggle);
  // console.log(vote);
  const IncrementHandler = () => {
    dispatch(actions.increment());
  };
  const DecrementHandler = () => {
    dispatch(actions.decrement());
  };

  const togggleVote = () => {
    dispatch(actions.toggle());
  };

  const Addbyten = () => {
    dispatch(actions.addbyten(10));
  };

  return (
    <>
      {votes.toggle && votes.toggle ? (
        <div>
          <h1>Redux votes</h1>
          <p>Number of votes: {votes.vote}</p>
          <button onClick={IncrementHandler}>increment</button>
          <button onClick={DecrementHandler}>decrement</button>
          <button onClick={Addbyten}>Add by 10</button>
          <button onClick={togggleVote}>Hide vote</button>
        </div>
      ) : (
        <button onClick={togggleVote}>Show Vote</button>
      )}
    </>
  );
};
export default Votes;
