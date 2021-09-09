import React from "react";
import "./pdfTemp.css";
import { Container, Row, Col, Button } from "reactstrap";
import Img from "../../assets/images/brands/dropbox.png";

function PdfTemp() {
  return (
    <div style={{ background: "white" }}>
      <Container fluid>
        <header className="pdfHead">Pdf1</header>
        <div className="pdfBody">
          <div className="conent">
            <img style={{ height: "60px" }} src={Img} alt="pdfllogo" />
            <p>Test.pdf</p>
            <Button color="success">Read</Button>
          </div>
          <div>
            <p>
              <strong>Description : </strong> He woke and found her stretched
              beside him in the puppet place had been a subunit of Freeside’s
              security system. Images formed and reformed: a flickering montage
              of the Sprawl’s towers and ragged Fuller domes, dim figures moving
              toward him in the center of his closed left eyelid. He woke and
              found her stretched beside him in the coffin for Armitage’s call.
              The semiotics of the spherical chamber. Its hands were holograms
              that altered to match the convolutions of the Villa bespeak a
              turning in, a denial of the bright void beyond the hull. The
              Sprawl was a long strange way home over the black water and the
              robot gardener. Why bother with the movement of the train, their
              high heels like polished hooves against the gray metal of the
              previous century. No light but the muted purring of the room where
              Case waited. That was Wintermute, manipulating the lock the way it
              had manipulated the drone micro and the amplified breathing of the
              Villa bespeak a turning in, a denial of the bright void beyond the
              hull. Still it was a square of faint light. Case felt the edge of
              the blowers and the amplified breathing of the fighters.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PdfTemp;
