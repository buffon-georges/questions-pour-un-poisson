import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaCheckCircle, FaCoffee, FaTimesCircle } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';


export const StartGame = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    let navigate = useNavigate()

    const [numberOfSlides, setNumberOfSlides] = useState(0);
    const [wasLastQuestion, setWasLastQuestion] = useState(false);

    const playersArray = localStorage.getItem('playersArray');
    const [players, setPlayers] = useState(null);
    const [submittedPlayersAnswers, setSubmittedPlayersAnswers] = useState([]);

    useEffect(() => {
        const parsedPlayers = JSON.parse(playersArray);

        setPlayers(parsedPlayers);
        console.log("players")
        console.log(players)
        let newSubmittedPlayersAnswers = [];

        parsedPlayers.forEach((player) => {
            newSubmittedPlayersAnswers.push({ submitted: false });
        });

        console.log("newSubmittedPlayersAnswers")
        console.log(newSubmittedPlayersAnswers)
        setSubmittedPlayersAnswers(newSubmittedPlayersAnswers);

        //get numer of slides
        const slides = document.getElementsByClassName('carousel-item').length;
        console.log("slides")
        setNumberOfSlides(slides);
        
    }, [])

    const handleGoToNextSlide = (slideIndex) => {
        console.log(slideIndex);
        setActiveSlideIndex(slideIndex);
    }

    const handleCorrectAnswer = (player, index) => {
        let newSubmittedPlayers = [...submittedPlayersAnswers];
        newSubmittedPlayers[index].submitted = true;
        newSubmittedPlayers[index].goodAnswer = true;
        console.log("newSubmittedPlayers")
        console.log(newSubmittedPlayers)
        setSubmittedPlayersAnswers(newSubmittedPlayers);
    }

    const handleWrongAnswer = (player, index) => {
        let newPlayersData = [...players]
        newPlayersData[index].lives--;
        console.log('newPlayersData');
        console.log(newPlayersData);
        let newSubmittedPlayers = [...submittedPlayersAnswers];
        newSubmittedPlayers[index].submitted = true;
        newSubmittedPlayers[index].goodAnswer = false;

        console.log("newSubmittedPlayers")
        console.log(newSubmittedPlayers)

        setSubmittedPlayersAnswers(newSubmittedPlayers);
    }

    const handleNoAnswer = (player, index) => {
        let newSubmittedPlayers = [...submittedPlayersAnswers];
        newSubmittedPlayers[index].submitted = true;
        // newSubmittedPlayers[index].goodAnswer = false;
        setSubmittedPlayersAnswers(newSubmittedPlayers);
    }

    const handleSubmitAnswers = () => {
        console.log('a validé!')
        //show players remaining lives
        setIsSubmitted(true);

        //set true to all player in array
        let newSubmittedPlayers = [...submittedPlayersAnswers];
        newSubmittedPlayers.forEach((player) => {
            player.submitted = false;
            player.goodAnswer = null;
        })

    }

    const handleResetAnswers = () => {
        let resetPlayersArray = [...players];
        resetPlayersArray.forEach((player, index) => {
            player.lives = (submittedPlayersAnswers[index].goodAnswer) ? player.lives - 1 : player.lives + 1;
            submittedPlayersAnswers[index].submitted = false;
            submittedPlayersAnswers[index].goodAnswer = null;
        })

        console.log("resetPlayersArray")
        console.log(players)
        setPlayers(resetPlayersArray);
    }

    const goToNextQuestion = () => {
        setActiveSlideIndex(activeSlideIndex + 1)
        setIsSubmitted(false);
    }

    return (<>
        <Carousel interval={null} style={{ marginTop: '3rem' }} variant="dark"
            onSelect={(nextSlideIndex) => { console.log(nextSlideIndex); setActiveSlideIndex(nextSlideIndex) }}
            onSlide={(slide) => { handleGoToNextSlide(slide) }}
            activeIndex={activeSlideIndex}>
            <Carousel.Item interval={null}>
                <img
                    src={require("../images/quiz.png")}
                    alt="First slide sss"
                    style={{ width: '20rem', height: '15rem' }}
                />
                <Carousel.Caption>
                    <h3>1ère question</h3>
                    <ol style={{ listStyleType: 'lower-alpha', marginLeft: '15rem' }}>
                        <li style={{ textIndent: '-16rem' }}>Réponse 1</li>
                        <li style={{ textIndent: '-16rem' }}>Réponse 2</li>
                        <li style={{ textIndent: '-16rem' }}>Réponse 3</li>
                        <li style={{ textIndent: '-16rem' }}>Réponse 4</li>
                    </ol>
                    {/* <ListGroup as="ol" style={{listStyleType: 'lower-alpha'}}>
                        <ListGroup.Item as="li" style={{background:'none', display:'revert'}}>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item as="li"  style={{display:'revert'}}>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                    </ListGroup> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ objectFit: 'fill' }}
                    src={require("../images/dory.jpg")}
                    alt="2eme q slide"
                    style={{ width: '20rem', height: '15rem' }}
                />
                <Carousel.Caption>
                    <h3>2ème question</h3>
                    <ol style={{ listStyleType: 'lower-alpha', marginLeft: '15rem' }}>
                        <li style={{ textIndent: '-16rem' }}>Réponse 1</li>
                        <li style={{ textIndent: '-16rem' }}>Réponse 2</li>
                        <li style={{ textIndent: '-16rem' }}>Réponse 3</li>
                        <li style={{ textIndent: '-16rem' }}>Réponse 4</li>
                    </ol>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={require("../images/flore_1.png")}
                    style={{ width: '20rem', height: '15rem', objectFit: 'contain' }}
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                      src={require("../images/flore_3.png")}
                      style={{ width: '20rem', height: '15rem', objectFit: 'fill'  }}
                />
                <Carousel.Caption>
                    <h5>Fourth slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                      src={require("../images/complaints.png")}
                      style={{ width: '20rem', height: '15rem', objectFit: 'contain' }}
                />
                <Carousel.Caption>
                    <h5>Slide label 5</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <div id='players-answers-div' style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <div style={{ fontSize: '1.5rem' }}>Réponse des joueurs à la question {activeSlideIndex + 1} :</div>
            <div>

                {Array.isArray(players) ? players.map((player, index) => {
                    return (
                        <Row key={index}>
                            <Col lg="3" style={{ marginTop: '1.5rem' }}>
                                {player.lives > 0 && (player.name)}
                                {player.lives == 0 && (<s>{player.name} Nooo!!!!!</s>)}
                                </Col>
                            <Col lg="8">
                                {submittedPlayersAnswers[index].submitted ?
                                    <div style={{ marginLeft: '2rem', marginTop: '1rem' }}>Soumis!</div> :
                                    <>
                                        {!isSubmitted ?
                                            <><FaCheckCircle style={{ cursor: 'pointer', marginLeft: '2rem', marginTop: '1.5rem' }} size={'1.5rem'} color={'green'}
                                                onClick={() => handleCorrectAnswer(player, index)} />
                                                <FaTimesCircle style={{ cursor: 'pointer', marginLeft: '2rem', marginTop: '1.5rem' }} size={'1.5rem'} color={'red'}
                                                    onClick={() => handleWrongAnswer(player, index)} />
                                                <FaCoffee style={{ cursor: 'pointer', marginLeft: '2rem', marginTop: '1.5rem' }} size={'1.5rem'} color={'grey'}
                                                    onClick={() => handleNoAnswer(player, index)} /></>
                                            : player.lives > 0 ? (<div style={{ marginLeft: '2rem', marginTop: '1rem' }}>{[...Array(player.lives)].map(() => {
                                                return (<span style={{ fontSize: '1.5rem' }}>
                                                    <img
                                                        src={require("../images/dory_lives.jfif")}
                                                        style={{ width: '3rem', height: '3rem' }}
                                                    />
                                                </span>)
                                            })}</div>): <div style={{ marginLeft: '2rem', marginTop: '1.5rem' }}><strong>Perdu!</strong></div>}
                                    </>}
                            </Col>
                        </Row>
                    )
                }) : null}
            </div>
            <div style={{ marginTop: '2rem' }} >
                {isSubmitted ? !wasLastQuestion ? (<Button onClick={goToNextQuestion}>Ok</Button>) : (<Button onClick={() => navigate('/')}>Fin du quiz</Button>)
                    : <>
                        <Button onClick={handleSubmitAnswers}>Valider</Button>
                        <Button style={{ marginLeft: '1em' }} variant="secondary" onClick={handleResetAnswers}>Annuler réponses</Button>
                    </>}
            </div>
        </div>
        <Alert variant="warning">
            <Alert.Heading>Pas de triche!</Alert.Heading>
            <p>
                Eteignez vos portables, les recherches sur Internet sont interdites. On sévira toute tentative de triche
            </p>
        </Alert>
    </>)
} 