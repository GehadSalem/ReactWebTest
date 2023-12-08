import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Button, Col } from "react-bootstrap"
import { useEffect, useState } from 'react'
import webdev from "../assets/img/webdev.png"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();

    }, delta ) 
    
    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta/2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  return(
    <section className="banner" id="home">
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} xd={6} xl={7} >
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Gehad `}<span className="wrap">{text}</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima, vero laudantium numquam incidunt eius animi earum nobis fugit voluptas.</p>
            <Button onClick={() => console.log('connect')}>Let's Connect <FontAwesomeIcon className='btnIcon' icon={faCircleArrowRight} /></Button>
          </Col>
          <Col xs={12} xd={6} xl={7} >
            <img className='bannerImg' src={webdev} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}