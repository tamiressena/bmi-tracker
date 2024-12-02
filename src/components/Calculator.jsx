import React from 'react'
import { useState } from 'react'
import './Calculator.css'
import HandleChart from './HandleChart'

const Calculator = ({ handleValues, data }) => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [BMI, setBMI] = useState(null)
  const [values, setValues] = useState([])

  const handleWeight = (e) => {
    setWeight(Number(e.target.value))
  }

  const handleHeight = (e) => {
    setHeight(Number(e.target.value))
  }

  const calculateBMI = (e) => {
    e.preventDefault()

    const date = new Date()
    const currentDay = date.getDate()
    const currentMonth = (date.getMonth()) + 1
    const formattedDate = currentDay + '/' + currentMonth

    const calculatedBMI = Number((weight / ((height / 100) * (height / 100))).toFixed(2))
    setBMI(calculatedBMI)

    const newEntry = [formattedDate, calculatedBMI]

    setValues((prevValues) => {
      const updatedValues = [...prevValues, newEntry]

      handleValues(updatedValues)
      
      return updatedValues
    })}
  
  return (
    <div>
      <form className='form'>
        <div className='formInputs'>
          <div className='labelAndInput'>
            <label htmlFor='weight' >Weight (in KG)</label>
            <input
            type="text"
            inputMode='numeric'
            id='weight'
            name='weight'
            placeholder='What is your weight?'
            value={weight}
            onChange={handleWeight}
            />
          </div>
          <div className='labelAndInput'>
            <label htmlFor="height">Height (in cm)</label>
            <input
            type="text"
            inputMode='numeric'
            id='height'
            name='height'
            placeholder='What is your height?'
            value={height}
            onChange={handleHeight}
            />
          </div>
        </div>

        <button type='button' onClick={calculateBMI}>Calculate</button>

        {BMI ? (<p>Your BMI is {BMI}</p>) : null}
        {BMI ? (<HandleChart data={data} />) : <span>Data will be presented here</span>}

      </form>
    </div>
  )
}

export default Calculator
