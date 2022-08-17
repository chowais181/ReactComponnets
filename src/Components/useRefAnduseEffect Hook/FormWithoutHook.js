export default function Simple() {
  // NOT a even a SINGLE useState babyyyyyyy! 😎
  // not use any useref

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    const inputObject = Object.fromEntries(formData); // convert the FormData object to a JSON object
    console.log(inputObject);
    console.log(inputObject.email); //getting the email
  };

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <div>
          <input name="email" placeholder="email" />
        </div>

        <div>
          <input name="password" placeholder="password" />
        </div>

        <div>
          <input name="phone" placeholder="phone" />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
