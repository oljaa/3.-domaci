import React, { useEffect, useState } from 'react'
import InfoItem from '../components/InfoItem'

export default function InfoPage(props) {

  const [inputVal, setInputVal] = useState(props.dimension);
  const probability = 100 * (1 - getHarmonicalSum(props.dimension) + getHarmonicalSum(props.dimension / 2))

  useEffect(() => {
    setInputVal(props.dimension)
  }, [props.dimension])

  return (
    <div>
      <div className='container mt-2'>
        <div className='row pb-2 d-flex align-items-center'>
          <div className='col-2'>
            Problem dimensions
          </div>
          <div className='col-3'>
            <input
              type="number"
              className='form-control'
              value={inputVal}
              onChange={e => {
                setInputVal(Number(e.currentTarget.value));
              }}
            />
          </div>
          <div className='col-1'>
            <button
              onClick={() => {
                props.setDimension(inputVal);
              }}
              className='btn btn-primary'>Save</button>
          </div>
          <div className='col-6 d-flex justify-content-end align-items-center '>
            Success probability: {probability.toFixed(2)}%
          </div>
        </div>
        <InfoItem title=' 100 prisoners problem'>
          The  <a rel="noreferrer" target='_blank' href="https://en.wikipedia.org/wiki/100_prisoners_problem">
            100 prisoners problem
          </a> is a mathematical problem in probability theory and combinatorics. In this problem, 100 numbered prisoners must find their own numbers in one of 100 drawers in order to survive. The rules state that each prisoner may open only 50 drawers and cannot communicate with other prisoners.

        </InfoItem>
        <InfoItem title='Solution'>
          Surprisingly, there is a strategy that provides a survival probability of more than 30%. The key to success is that the prisoners do not have to decide beforehand which drawers to open. Each prisoner can use the information gained from the contents of every drawer they already opened to decide which one to open next. Another important observation is that this way the success of one prisoner is not independent of the success of the other prisoners, because they all depend on the way the numbers are distributed.[2]
        </InfoItem>
        <InfoItem title='Probability of success'>
          In the initial problem, the 100 prisoners are successful if the longest cycle of the permutation has a length of at most 50. Their survival probability is therefore equal to the probability that a random permutation of the numbers 1 to 100 contains no cycle of length greater than 50 which evaluates to approximately  31%
        </InfoItem>
      </div>
    </div>
  )
}

function getHarmonicalSum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += 1 / i;
  }
  return sum;
}