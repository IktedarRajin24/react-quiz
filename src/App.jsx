/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
import Start from "./Components/Start";
import Question from "./Components/Question";
import NextQuestion from "./Components/NextQuestion";
import Progress from "./Components/Progress";
import Finish from "./Components/Finish";
import Footer from "./Components/Footer";
import Timer from "./Components/Timer";

const TIME_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading",
  answer: null,
  index: 0,
  points: 0,
  highscore: 0,
  totalTime: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "failed",
      };
    case "start":
      return {
        ...state,
        status: "active",
        totalTime: state.questions.length * TIME_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "reset":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "timer":
      return {
        ...state,
        totalTime: state.totalTime - 1,
        status: state.totalTime === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action Unknown");
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, points, highscore, totalTime } =
    state;
  const totalQuestions = questions.length;
  const totalPoints = questions?.reduce((prev, curr) => prev + curr.points, 0);
  useEffect(() => {
    fetch("/questions.json")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="bg-slate-600 h-screen">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "failed" && <Error />}
        {status === "ready" && (
          <Start totalQuestions={totalQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              totalQuestions={totalQuestions}
              index={index + 1}
              points={points}
              totalPoints={totalPoints}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer totalTime={totalTime} dispatch={dispatch} />
              <NextQuestion
                answer={answer}
                dispatch={dispatch}
                totalQuestions={totalQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <Finish
            points={points}
            totalPoints={totalPoints}
            dispatch={dispatch}
            highscore={highscore}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
