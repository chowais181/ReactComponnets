import { useState, useEffect } from "react";
import Details from "./Details";
// Controlled vs Uncontrolled Components 
//using states are the example of controlled components
//without state for example using ref is the example of uncontrolled components
export default function Registration() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [msg, setMsg] = useState(" ");
  const [img, setImage] = useState(" ");
  const [course, setCourse] = useState("Main Concepts");
  const [err, setError] = useState(" ");
  const [cbox, setCbox] = useState(false);
  const [submit, setSubmit] = useState(false);
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
  };
  function onSubmit(e) {
    e.preventDefault();
    if (
      name === " " ||
      email === "" ||
      pwd === "" ||
      cbox === false ||
      img === " "
    ) {
      setError("please fill the form correctly!");
    } else if (err === " ") {
      setSubmit(true);
      console.log("form submitted");
    }
  }
  useEffect(() => {
    if (cbox) {
      console.log("✅ Checkbox is checked");
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    //--------------validation on name----------
    if (/[0-9]/.test(name)) {
      // alert("Name cannot contain numbers!");
      // setName(name);
      setError("Name cannot contain numbers!");
    } else {
      setError(" ");
    }
    //--------------validation on email----------
    if (email.length > 0) {
      if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        console.log("valid email");
        // return (true)
      } else {
        setError("Invalid Email Address!");
        console.log("You have entered an invalid email address!");
        // return (false)
      }
    }
    //--------------validation on password----------
    if (pwd.length > 0) {
      if (
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
          pwd
        )
      ) {
        console.log("valid password");
        // return (true)
      } else {
        setError("Please Include length 8-15,'a','A', a special character!");
        console.log("Please Include length 8-15,'a','A',special character");
        // return (false)
      }
    }
  }, [name, email, pwd, cbox]);

  return (
    <div>
      <div style={{ display: submit ? "none" : "block" }}>
        <form className="formAlign">
          <label>Name</label>
          <input
            type="text"
            name="name"
            minLength="3"
            maxLength="20"
            style={{ padding: "2%" }}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="zahidawais98@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "2%" }}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Include length 8-15,'a','A',special character"
            onChange={(e) => setPwd(e.target.value)}
            style={{ padding: "2%" }}
          />

          <label>Pick Course</label>
          <select
            style={{ padding: "5%", fontFamily: "bold", fontSize: "1rem" }}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="Main Concepts">Main Concepts</option>
            <option value="Advanced Concepts">Advanced Concepts</option>
            <option value="Frontend">Frontend</option>
            <option value="Mui">Mui</option>
          </select>
          <label>Upload your picture</label>
          <input
            type="file"
            name="upload"
            accept="image/*"
            style={{
              padding: "5%",
              fontFamily: "bold",
              fontSize: "1rem",
              border: "1px solid",
            }}
            onChange={onImageChange}
          />
          <label>Any Suggestion?</label>
          <textarea
            type="text"
            name="msg"
            style={{ padding: "5%" }}
            onChange={(e) => setMsg(e.target.value)}
          />
          <br />
          <p style={{ color: "red" }}>{err}</p>
          <br />
          <label>
            Enroll me:
            <input
              name="isGoing"
              type="checkbox"
              style={{ padding: "12%" }}
              onChange={(e) => setCbox(e.target.checked)}
            />
          </label>
          <br />
          <input
            type="button"
            value="Submit"
            onClick={onSubmit}
            style={{
              padding: "4%",
              fontSize: "1rem",
              "backgroundColor": "blue",
              color: "white",
            }}
          />
        </form>
      </div>

      <div style={{ display: submit ? "block" : "none" }}>
        <Details
          name={name}
          email={email}
          msg={msg}
          course={course}
          img={img}
          pwd={pwd}
        />
      </div>
    </div>
  );
}
