import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const [players, setPlayers] = useState([{ id: 0, name: null, lives: 5, points: 0 }]);
    const [counter, setCounter] = useState(1);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (players.length > 1) {
    //         console.log(players)
    //         setCounter(counter + 1);
    //     }
    // }, [players]);

    const addNewPlayer = () => {
        console.log('cliqué!')
        let newPlayer = { id: counter, name: null, lives: 5, points: 0 };
        let playersData = [...players];
        playersData.push(newPlayer);
        setPlayers(playersData);
        setCounter(counter + 1);
    }

    const setPlayerNewName = (newName, index) => {
        let playersData = [...players];
        playersData[index].name = newName;
        console.log(playersData)
        setPlayers(playersData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
   
        let showAlert;
        players.forEach((player, index) => {
            console.log("player")
            console.log(player)
            if (player.name == null) {
                showAlert = true;
                alert('Saisissez le pseudo de tous les participants');
                return;
            }
        })

        if (!showAlert) {
            localStorage.setItem('playersArray', JSON.stringify(players));
            navigate('/start-game')
        }
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <div style={{ marginTop: "2rem", marginBottom: '1rem', fontSize: '2rem' }}>Rentrer le nom des utilisateurs : </div>
                <Form.Group>{players.map((player, index) => {
                    return (<div key={index} style={{ marginBottom: '1rem' }}>
                        <Form.Label>{index + 1}e joueur</Form.Label>
                        <Form.Control type="text" placeholder="Entrer pseudo" onChange={(e) => { setPlayerNewName(e.target.value, index) }} />
                    </div>)
                })}
                </Form.Group>

                <Button type="button" variant={"outline-primary"} onClick={() => {
                    addNewPlayer()
                }} >
                    <FaPlusCircle size={"1.5rem"} />
                </Button>
                <div><Button type="submit" style={{ marginTop: '1rem' }}>Commencer</Button></div>
            </div>
        </Form>

    )
}