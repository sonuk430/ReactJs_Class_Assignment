import { useState } from "react";
import text from "../component/data";
import "./Paragraphs.css";

function Paragraphs() {
  const [count, setCount] = useState(0);
  const [content, setContent] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);

    if (count <= 0) {
      amount = 1;
    }
    if (count > 10) {
      amount = 10;
    }

    setContent(text.slice(0, amount));
  };

  return (
    <>
      <div className="wrapper">
        <h2>TIRED OF BORING LOREM IPSUM?</h2>

        <div className="content">
          <form onSubmit={handleSubmit}>
           <div className="heading">
           <label>Paragraphs:-</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button type="submit">GENERATE</button>
           </div>
            <article>
              {content.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </article>
          </form>
        </div>
      </div>
    </>
  );
}

export default Paragraphs;
