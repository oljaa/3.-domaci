import React, { useEffect, useState } from 'react'
import lodash from 'lodash'
import NumberItem from '../components/NumberItem';
export default function GamePage(props) {
  const [currentPrisoner, setCurrentPrisoner] = useState(0);
  const [numbers, setNumbers] = useState(() => {
    let arr = [];
    for (let i = 0; i < props.dimension; i++) {
      arr[i] = i;
    }
    return lodash.shuffle(arr);
  });
  const [openedNumbers, setOpenedNumbers] = useState([]);
  const [leftTries, setLeftTries] = useState(props.dimension / 2)
  const won = currentPrisoner === -1;
  const currentPrisonerWon = openedNumbers.includes(currentPrisoner);
  const end = won || (leftTries == 0 && !currentPrisonerWon);

  useEffect(() => {
  }, [leftTries])

  return (
    <div className='container mt-2'>
      <div className='row pt-2 pb-2'>
        {
          won && (
            <div>
              Congratulations!!! You have successfully escaped
            </div>
          )
        }
        {
          !won && end && (
            <div>Game over</div>
          )
        }
        {
          !end && (
            <>
              <div className='col-2'>
                Current prisoner: {currentPrisoner + 1}
              </div>
              <div className='col-2'>
                Left tries: {leftTries}
              </div>
              {
                currentPrisonerWon && (
                  <button className='btn btn-primary'
                    onClick={() => {
                      setCurrentPrisoner(prev => {
                        if (prev === props.dimension - 1) {
                          return -1;
                        }
                        return prev + 1;
                      });
                      setLeftTries(props.dimension / 2);
                      setOpenedNumbers([]);
                    }}
                  >Next</button>
                )
              }
            </>
          )
        }
      </div>
      {
        !end && (
          <div className='d-flex flex-wrap'>
            {
              numbers.map((element, index) => {
                return (
                  <NumberItem
                    index={index + 1}
                    disabled={currentPrisonerWon}
                    selected={openedNumbers.includes(element)}
                    onClick={() => {
                      setLeftTries(prev => prev - 1);
                      setOpenedNumbers(prev => [...prev, element])
                    }}
                    value={element + 1}
                  />
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}
