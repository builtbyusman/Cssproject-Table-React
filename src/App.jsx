import ApplyFor from "./components/ApplyFor";
import Information from "./components/Information";
import Qualification from "./components/Qualification";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="container">
        <h2><u>STUDENT REGISTRATION FORM</u></h2>
        <form action="">
          <table>
            <Information />
          </table>
          <table>
            <Qualification />
          </table>
          <ApplyFor />
        </form>
      </div>
    </>
  );
}