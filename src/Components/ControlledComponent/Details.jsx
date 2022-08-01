export default function Details(props) {
  return (
    <fieldset>
      <legend>Your entered details are of the following </legend>
      <p>Entered name is : {props.name}</p>
      <p>Entered email is : {props.email}</p>
      <p>Entered message is : {props.msg}</p>
      <p>Picked Course is : {props.course}</p>
      <p>Your picture </p>
      <img src={props.img} class="avatar" alt="user pic" />
    </fieldset>
  );
}
