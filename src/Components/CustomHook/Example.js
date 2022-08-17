import useFetch from "./CustomHook";
export default function Example() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return <>{data && data.map((item) => <p key={item.id}>{item.id}</p>)}</>;
}
