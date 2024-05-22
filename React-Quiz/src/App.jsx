import { Children, act, useEffect, useReducer } from "react"
import Main from "./Components/Main"

import Header from "./Header"
import Loader from "./Loader";
import Error from "./Error";
import { StartScreen } from "./Components/StartScreen";
import { Question } from "./Components/Question";

import { NextButton } from "./Components/NextButton";
import { Progress } from "./Components/Progress";
import { FinishScreen } from "./Components/FinishScreen";
import { Timer } from "./Components/Timer";
import { Footer } from "./Components/Footer";


const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  // loading, error,ready,active,finished
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secoundRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
        secoundRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption ? state.points + question.points : state.points,
      };

    case 'nextQuestion':
      return {
        ...state, index: state.index + 1, answer: null
      }
    case 'finish':
      return {
        ...state, status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore
      };

    case 'restart': return {
      ...initialState, questions: state.questions, status: 'ready'
    }

    case 'tick':
      return {
        ...state, secoundRemaining: state.secoundRemaining - 1,
        status: state.secoundRemaining === 0 ? "finished" : state.status
      }

    default:
      throw new Error("Action unKnow");
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, highscore, secoundRemaining }, dispatch] = useReducer(reducer, initialState);


  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points, 0
  )

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then(res => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }))
  }, [])


  return (
    <div className="app">
      <Header />

      <Main>

        {status === "loading" && <Loader />}

        {status === "error" && <Error />}

        {
          status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />

        }
        {
          status === 'active' && (

            <>
              <Progress index={index} numQuestions={numQuestions} points={points} maxPossiblePoints={maxPossiblePoints} answer={answer} />

              <Question question={questions[index]} dispatch={dispatch} answer={answer} />

              <Footer>

                <Timer dispatch={dispatch} secoundRemaining={secoundRemaining} />

                <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions} />

              </Footer>
            </>
          )

        }

        {
          status === 'finished' && <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} highscore={highscore} dispatch={dispatch} />
        }
      </Main>
    </div>
  );
}
