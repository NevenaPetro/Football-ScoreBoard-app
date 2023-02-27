import React, { useState } from 'react';
import Button from '../Button';
import { useContext } from 'react';
import { applicationContext } from '../../context/ApplicationContext';
import '../Modal/modal.css';
<Modal />;

function Modal({ data }) {
  const { scoreUpdate, setModalData } = useContext(applicationContext);
  const [message, setMessage] = useState(null);
  let newHomeTeamScore = data.scoreHomeTeam;
  let newAwayTeamScore = data.scoreAwayTeam;

  //Modal form submitting
  function gameUpdate(e) {
    e.preventDefault();
    (newHomeTeamScore || newAwayTeamScore) &&
    scoreUpdate(data.gameId, newHomeTeamScore, newAwayTeamScore);
    setModalData(null);
  }

  //handle home team input field (modal)
  function handleHomeInputChange(e) {
    setMessage(null);
    if (isNaN(e.target.value)) {
      setMessage('Please, enter number.');
    } else newHomeTeamScore = +e.target.value;
  }

//handle away team input field (modal)
  function handleAwayInputChange(e) {
    setMessage(null);
    if (isNaN(e.target.value)) {
      setMessage('Please, enter number.');
    } else newAwayTeamScore = +e.target.value;
  }

  return (
    <>
      <div
        className="modal-bg"
        onClick={() => {
          setModalData(null);
        }}
      >
        <div
          className="modal"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Button
            className={'close-btn'}
            type={'button'}
            handleClick={() => setModalData(null)}
          >
            X
          </Button>
          <br></br>
          <br></br>
          <form onSubmit={gameUpdate}>
            <span>{data.homeTeam}    </span>
            <input
              type="text"
              placeholder={data.scoreHomeTeam}
              onChange={handleHomeInputChange}
              className='input-update'
            ></input>
            <span> : </span>
            <input
              type="text"
              placeholder={data.scoreAwayTeam}
              onChange={handleAwayInputChange}
              className='input-update'
            ></input>
            <span>    {data.awayTeam}</span>
            <br></br>
            {message && <p>{message}</p>}
            <br></br>
            <br></br>
            <Button type="submit">Update</Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
