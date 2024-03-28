import ScreenLoading from "./Screen/ScreenLoading";
import EducationPlanner from "./Screen/EducationPlanner";
import Paragraphs from "./Paragraphs";
function App() {
  return (
    <>
      {/* <ScreenLoading /> */}
      {/* <EducationPlanner/> */}
  
    </>
  );
}

export default App;

// const [displayUserData, setDisplayUserData] = useState([]);
// const [sub, setSub] = useState("");
// const [rating, setRating] = useState("");
// // console.log(displayUserData);

// return (
//   <>
//     <div>
//       <h1>Geekster Education Planner</h1>
//       <input
//         value={sub}
//         type="text"
//         placeholder="Subjects"
//         onChange={(e) => {
//           setSub(e.target.value);

//         }}
//       />
//       <input
//         value={rating}
//         type="number"
//         placeholder="Rating"
//         onChange={(e) => {
//           setRating(e.target.value);

//         }}
//       />
//       <button
//         onClick={() => {
//         setDisplayUserData([...displayUserData,{sub,rating}])
//         console.log(displayUserData);
//         }}
//       >

//         Add
//       </button>
