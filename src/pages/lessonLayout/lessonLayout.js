import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Overview from "./pages/Overview";
// import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
// import Team from "./pages/Team";
import { Container, Row, Col } from "reactstrap";
import Flashcard from "../Flashcards/flashcard";
import PdfTemp from "../pdfReader/pdfTemp";
// import PdfReader from "../pdfReader/pdfReader";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import React from "react";
import CourseVideo from "../courseVideo/courseVideo";

function LessLayout() {
  return (
    <React.Fragment>
      <Router>
        <div style={{ paddingTop: "73px" }}>
          {/* <Container fluid> */}
          <Sidebar />
          <Switch>
            <Route path="/lesson" exact component={PdfTemp} />
            <Route path="/lesson/lessonone" exact component={PdfTemp} />
            <Route path="/lesson/lessontwo" exact component={CourseVideo} />
            <Route path="/lesson/flashcard" exact component={Flashcard} />
            <Route path="/flashcard" exact component={Flashcard} />
          </Switch>
          {/* </Container> */}
        </div>
      </Router>
    </React.Fragment>

    // <Router>
    //   <div>
    //     <Sidebar />
    //   </div>

    //   {/* <Switch>
    //     <Route path="/overview" exact component={Overview} />
    //     <Route path="/reports" exact component={Reports} />
    //     <Route path="/reports/reports1" exact component={ReportsOne} />
    //     <Route path="/reports/reports2" exact component={ReportsTwo} />
    //     <Route path="/reports/reports3" exact component={ReportsThree} />
    //     <Route path="/team" exact component={Team} />
    //   </Switch> */}
    // </Router>
  );
}

export default LessLayout;
