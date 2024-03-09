import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import "./PasswordGenerator.css";
import { useState, useCallback, useEffect, useRef } from "react";
function PasswordGenerator() {
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(true);

  const [lowerCaseAllowed, setLowerCaseAllowed] = useState(true);

  const [symbolsAllowed, setSymbolsAllowed] = useState(true);

  const [uperCaseAllowed, setUperCaseAllowed] = useState(true);

  const [Password, setPassword] = useState("");

  //  useRef hook
  //    use for the selecting the password from the clipbord
  const passwordRef = useRef(null);

  const copyPasswordToClipbord = useCallback(() => {
    //  select password to clipbord
    passwordRef.current?.select();

    // passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  //    password Generator
  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "";

    if (uperCaseAllowed) str += "ABCDEFGHIJKLMNOPQURSTUVWXYZ";

    if (lowerCaseAllowed) str += "abcdefghijklmnopqurstuvwxyz";

    if (numberAllowed) str += "0123456789";

    if (symbolsAllowed) str += "!@#$%&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [
    length,
    numberAllowed,
    lowerCaseAllowed,
    symbolsAllowed,
    uperCaseAllowed,
    setPassword,
  ]);

  useEffect(() => {
    passwordGenerator();
  }, [
    length,
    numberAllowed,
    lowerCaseAllowed,
    uperCaseAllowed,
    symbolsAllowed,
    passwordGenerator,
  ]);

  return (
    <>
      <div className="passwordPage">
        <div className="passwordBox">
          <div className="heading">
            <h2>Password Generator</h2>
          </div>

          <div className="userInput">
            <input
              type="text"
              value={Password}
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyPasswordToClipbord}>Copy</button>
          </div>

          <div className="passWordContent">
            <p>
              Select Password length <b>(**8-50 characters**)</b>
            </p>
            <input
              type="number"
              //   min={8}
              //   max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>

          <div className="checkBoxArea">
            <div className="checkBox">
              <input
                type="checkbox"
                defaultChecked={uperCaseAllowed}
                id="uperCase"
                onChange={() => {
                  setUperCaseAllowed((prev) => !prev);
                }}
              />
              <label>Include upper case</label>
            </div>

            <div className="checkBox">
              <input
                type="checkbox"
                defaultChecked={lowerCaseAllowed}
                id="lowerCase"
                onChange={() => {
                  setLowerCaseAllowed((prev) => !prev);
                }}
              />
              <label>Include lower case</label>
            </div>

            <div className="checkBox">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label>Include numbers</label>
            </div>

            <div className="checkBox">
              <input
                type="checkbox"
                defaultChecked={symbolsAllowed}
                id="symbol"
                onChange={() => {
                  setSymbolsAllowed((prev) => !prev);
                }}
              />
              <label>Include symbols</label>
            </div>
          </div>

          <div className="btn">
            <button onClick={passwordGenerator}>Generator Password </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
