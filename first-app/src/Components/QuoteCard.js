import "./QuoteCard.css";

function QuoteCard(props) {
  return (
    <>
      <div className="QuoteCard">
        <p className="QuotePera">{props.description}</p>
        <p className="QuoteOther">{props.author}</p>
      </div>
    </>
  );
}

export default QuoteCard;
