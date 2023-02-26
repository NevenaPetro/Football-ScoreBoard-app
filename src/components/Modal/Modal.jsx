import React from 'react';
import Button from '../Button';
import { useContext } from 'react';
import { applicationContext } from '../../context/ApplicationContext';
import '../Modal/modal.css'
<Modal />

function Modal({ data }) {
  const { scoreUpdate, setModalData } = useContext(applicationContext);
  let newHomeTeamScore=data.scoreHomeTeam;
  let newAwayTeamScore=data.scoreAwayTeam;
  function gameUpdate(e) {
    e.preventDefault();
    scoreUpdate(data.gameId, newHomeTeamScore, newAwayTeamScore);
    setModalData(null);
  }
  function handleHomeInputChange(e) {
    newHomeTeamScore = +e.target.value;
  }
  function handleAwayInputChange(e) {
    newAwayTeamScore = +e.target.value;
  }

  return (
    <>
    <div
        className="modal-bg"
        onClick={() => {
          setModalData(null);
        }}>
          <div
          className="modal"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
      <Button className={'close-btn'} type={'button'} handleClick={() => setModalData(null)}>
        X
      </Button>
      <br></br>
      <br></br>
      <form onSubmit={gameUpdate}>
        <span>{data.homeTeam}</span>
        <input
          type="text"
          placeholder={data.scoreHomeTeam}
          onChange={handleHomeInputChange}
        ></input>
        <input
          type="text"
          placeholder={data.scoreAwayTeam}
          onChange={handleAwayInputChange}
        ></input>
        <span>{data.awayTeam}</span>
        <br></br>
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
