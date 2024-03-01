import Navbar from "../Components/Navbar";
import QuoteCard from "../Components/QuoteCard";
import "./QuoteScreen.css"

function QuoteScreen() {
  const quoteArr = [
    {
      quote: `It's amazing how pervasive food is. Every second commercial is for
            food. Every second TV episode takes place around a meal. In the city,
            you can't go ten feet without seeing or smelling a restaurant. There
            are 20 foot high hamburgers up on billboards. I am acutely aware of
            food, and its omnipresence is astounding.`,

      athor: "Adam Scott",
    },
    {
      quote: `Eat breakfast like a king, lunch like a prince, and dinner like a pauper.`,

      athor: "Adelle Davis",
    },
    {
      quote: `We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.`,

      athor: "Adelle Davis",
    },

    {
      quote: `We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.`,

      athor: "Adelle Davis",
    },

    {
      quote: `My favourite animal is steak.`,

    
    },

    {
      quote: `Music with dinner is an insult both to the cook and the violinist.`,

      
    },


    {
      quote: `Just as animal research tells us that gluttony and sloth are side effects of a drive to accumulate body fat, it also says that eating in moderation and being physically active (literally, having the energy to exercise) is not evidence of moral rectitude. Rather, they're the metabolic benefits of a body that's programmed to remain lean.`,

    
    },

    {
      quote: `We don't get fat because we overeat; we overeat because we're getting fat.`,

     
    },

    {
      quote: `Good food ends with good talk.`,

   
    },

    {
      quote: `There is no love sincerer than the love of food.`,

    
    },

    {
      quote: `What some call health if purchased by perpetual anxiety about diet, isn't much better than tedious disease..`,

      athor: "Adelle",
    },

    {
      quote: `It's important to begin a search on a full stomach.`,

    },

    {
      quote: `If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.`,

      athor: "Sonu",
    },
  ];

  return (
    <>
      <Navbar />

      <section className = "QuoteScreenWrapper">
        {
          quoteArr.map((el,index)=>{
            return(
              <QuoteCard 
              
              description = {el.quote}
              author = {el.athor}
              key = {index}

              />
            )
          })
        }
      </section>
    </>
  );
}

export default QuoteScreen;
