import useFetch from "./CustomHook";
import Example from "./Example";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {/* <Example /> */}
      {data &&
        data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
    </>
  );
};
export default Home;
