import { useEffect, useState } from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import { FaCheckCircle, FaCoffee, FaTimesCircle } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import './StartGame.css';
import { questions } from "../utils/carouselWording";

export const StartGame = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  let navigate = useNavigate();

  const [numberOfSlides, setNumberOfSlides] = useState(0);
  const [wasLastQuestion, setWasLastQuestion] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const playersArray = localStorage.getItem("playersArray");
  const [players, setPlayers] = useState(null);
  const [submittedPlayersAnswers, setSubmittedPlayersAnswers] = useState([]);

  useEffect(() => {
    const parsedPlayers = JSON.parse(playersArray);

    setPlayers(parsedPlayers);
    let newSubmittedPlayersAnswers = [];

    parsedPlayers.forEach((player) => {
      newSubmittedPlayersAnswers.push({ submitted: false });
    });
    setSubmittedPlayersAnswers(newSubmittedPlayersAnswers);

    //get number of slides
    // const slides = document.getElementsByClassName("carousel-item").length;
    const slides = questions.length;
    console.log('slides', slides)
    setNumberOfSlides(slides);
  }, []);

  const handleGoToNextSlide = (slideIndex) => {
    setActiveSlideIndex(slideIndex);
  };

  const handleCorrectAnswer = (player, index) => {
    let newPlayersData = [...players];
    newPlayersData[index].points++;
    let newSubmittedPlayers = [...submittedPlayersAnswers];
    newSubmittedPlayers[index].submitted = true;
    newSubmittedPlayers[index].goodAnswer = true;
    setSubmittedPlayersAnswers(newSubmittedPlayers);
  };

  const handleWrongAnswer = (player, index) => {
    let newPlayersData = [...players];
    newPlayersData[index].lives--;
    let newSubmittedPlayers = [...submittedPlayersAnswers];
    newSubmittedPlayers[index].submitted = true;
    newSubmittedPlayers[index].goodAnswer = false;

    setSubmittedPlayersAnswers(newSubmittedPlayers);
  };

  const handleNoAnswer = (player, index) => {
    let newSubmittedPlayers = [...submittedPlayersAnswers];
    newSubmittedPlayers[index].submitted = true;
    // newSubmittedPlayers[index].goodAnswer = false;
    setSubmittedPlayersAnswers(newSubmittedPlayers);
  };

  const handleSubmitAnswers = () => {
    //show players remaining lives
    setIsSubmitted(true);

    //set true to all player in array
    let newSubmittedPlayers = [...submittedPlayersAnswers];
    newSubmittedPlayers.forEach((player) => {
      player.submitted = false;
      player.goodAnswer = null;
    });
  };

  const handleResetAnswers = () => {
    let resetPlayersArray = [...players];
    resetPlayersArray.forEach((player, index) => {
      player.lives = submittedPlayersAnswers[index].goodAnswer
        ? player.lives - 1
        : player.lives + 1;
      submittedPlayersAnswers[index].submitted = false;
      submittedPlayersAnswers[index].goodAnswer = null;
    });
    setPlayers(resetPlayersArray);
  };

  const goToNextQuestion = () => {
    setIsSubmitted(false);
    console.log("numberOfSlides");
    console.log(numberOfSlides);
    console.log("activeSlideIndex");
    console.log(activeSlideIndex);
    if (activeSlideIndex + 2 == numberOfSlides) {
      setWasLastQuestion(true);
    }
    setActiveSlideIndex(activeSlideIndex + 1);
    setShowCountdown(true);
    setTimeout(() => {
      setHasStarted(true);
      setShowCountdown(false); //disappear after 5sec
    }, 4900);
  };

  const processStart = () => {
    setHasStarted(true)
    setShowCountdown(true);
    setTimeout(() => {
      setHasStarted(true);
      setShowCountdown(false); //disappear after 5sec
    }, 4900);
    // setShowCountdown(false);
  }

  if (!showCountdown) {
    return (
      <> {!hasStarted && (<><Button onClick={processStart}>Démarrer</Button></>)}
        {hasStarted && (<>
          <Carousel
            fade
            interval={null}
            style={{ marginTop: "3rem", height: '30rem' }}
            variant="dark"
            onSelect={(nextSlideIndex) => {
              console.log(nextSlideIndex);
              setActiveSlideIndex(nextSlideIndex);
            }}
            onSlide={(slide) => {
              handleGoToNextSlide(slide);
            }}
            activeIndex={activeSlideIndex}
          >
            {questions.map((question, index) => (
              <Carousel.Item style={{ marginTop: '2rem' }}>
                <img
                  src={question.image}
                  style={{ width: "30rem", height: "15rem", objectFit: "fill" }}
                />
                <Carousel.Caption>
                  <h4><Badge pill bg="secondary" >{question.title}</Badge></h4>
                  <p id='intitule-question' style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{question.content}</p>
                  <ol style={{ listStyleType: "lower-alpha", marginLeft: "20rem", marginTop: '1rem' }}>
                    {question.possibleAnswers.map((answer, index) => (
                      <li style={{ textIndent: "-20rem" }}>{answer.content}</li>
                    ))}
                  </ol>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

          <div
            id="players-answers-div"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <div style={{ fontSize: "1.5rem" }}>
              Réponse des joueurs à la question {activeSlideIndex + 1} :
            </div>
            <div>
              {Array.isArray(players)
                ? players.map((player, index) => {
                  return (
                    <Row key={index}>
                      <Col lg="3" style={{ marginTop: "1.5rem" }}>
                        {player.lives > 0 && player.name}
                        {player.lives == 0 && <s>{player.name} Nooo!!!!!</s>}
                      </Col>
                      <Col lg="8">
                        {submittedPlayersAnswers[index].submitted ? (
                          <div
                            style={{ marginLeft: "2rem", marginTop: "1rem" }}
                          >
                            Soumis!
                          </div>
                        ) : (
                          <>
                            {!isSubmitted ? (
                              <>
                                <FaCheckCircle
                                  style={{
                                    cursor: "pointer",
                                    marginLeft: "2rem",
                                    marginTop: "1.5rem",
                                  }}
                                  size={"1.5rem"}
                                  color={"green"}
                                  onClick={() =>
                                    handleCorrectAnswer(player, index)
                                  }
                                />
                                <FaTimesCircle
                                  style={{
                                    cursor: "pointer",
                                    marginLeft: "2rem",
                                    marginTop: "1.5rem",
                                  }}
                                  size={"1.5rem"}
                                  color={"red"}
                                  onClick={() =>
                                    handleWrongAnswer(player, index)
                                  }
                                />
                                <FaCoffee
                                  style={{
                                    cursor: "pointer",
                                    marginLeft: "2rem",
                                    marginTop: "1.5rem",
                                  }}
                                  size={"1.5rem"}
                                  color={"grey"}
                                  onClick={() => handleNoAnswer(player, index)}
                                />
                              </>
                            ) : player.lives > 0 ? (
                              <div
                                style={{
                                  marginLeft: "2rem",
                                  marginTop: "1rem",
                                }}
                              >
                                {[...Array(player.lives)].map(
                                  (value, indexLives) => {
                                    return (
                                      <span
                                        style={{ fontSize: "1.5rem" }}
                                        key={indexLives}
                                      >
                                        <img
                                          src={require("../images/dory_lives.jfif")}
                                          style={{
                                            width: "3rem",
                                            height: "3rem",
                                          }}
                                        />
                                      </span>
                                    );
                                  }
                                )}
                                <span style={{ marginLeft: '1rem' }}>
                                  <b>
                                    {player.points} {(player.points == 0 || player.points == 1)? 'point' : 'points'}
                                  </b>
                                </span>
                              </div>
                            ) : (
                              <div
                                style={{
                                  marginLeft: "2rem",
                                  marginTop: "1.5rem",
                                }}
                              >
                                <strong>Perdu!</strong>
                              </div>
                            )}
                          </>
                        )}
                      </Col>
                    </Row>
                  );
                })
                : null}
            </div>

            <div style={{ marginTop: "2rem" }}>
              {isSubmitted ? (
                !wasLastQuestion ? (
                  <Button onClick={goToNextQuestion}>Ok</Button>
                ) : (
                  <Button onClick={() => navigate("/")}>Fin du quiz</Button>
                )
              ) : (
                <>
                  <Button onClick={handleSubmitAnswers}>Valider</Button>
                  <Button
                    style={{ marginLeft: "1em" }}
                    variant="secondary"
                    onClick={handleResetAnswers}
                  >
                    Annuler réponses
                  </Button>
                </>
              )}
            </div>
          </div></>)}
        <Alert variant="warning">
          <Alert.Heading>Pas de triche!</Alert.Heading>
          <p>
            Eteignez vos portables, les recherches sur Internet sont interdites.
            On sévira toute tentative de triche
          </p>
        </Alert>
      </>)
  };

  if (showCountdown) {
    // if (false) {
    return (<div className="box" id="old-fashioned-countdown">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="niddle"></div>
      <div className="number">
        {/* <div>10</div> */}
        {/* <div>9</div>
            <div>8</div>
            <div>7</div>
            <div>6</div> */}
        <div>5</div>
        <div>4</div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </div>

    </div>);
  }
};
