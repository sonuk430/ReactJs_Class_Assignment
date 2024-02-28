const Hello = () => {
    return (
      <div className="content">
        <h1>Topics covered</h1>
        <br />
        <p>
          The following is a list of all the topics we cover in the MDN learning
          area.
        </p>
        <br />
        <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web">
          Getting started with the web
        </a>
        <p>
          Provides a practical introduction to web development for complete
          beginners.
        </p>
        <br />
  
        <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">
          HTML — Structuring the web
        </a>
        <br />
        <p>
          HTML is the language that we use to structure the different parts of our
          content and define what their meaning or purpose is. This topic teaches
          HTML in detail.
        </p>
  
        <br />
  
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">
          CSS — Styling the web
        </a>
  
        <p>
          CSS is the language that we use to control our web content's style and
          layout, as well as adding behavior like animation. This topic provides
          comprehensive coverage of CSS.
        </p>
        <br />
  
        <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScriptL">
          JavaScript — Dynamic client-side scripting
        </a>
  
        <p>
          JavaScript is the scripting language used to add dynamic functionality
          to web pages. This topic teaches all the essentials needed to become
          comfortable with writing and understanding JavaScript.
        </p>
      </div>
    );
  };
  
  ReactDOM.render(<Hello />, document.getElementById("root"));
  