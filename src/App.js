import React, { useState } from 'react'
import './index.css'

const data = [
  {
    id: 1,
    img: require('./assets/stepone/photo1.jpg')
  },
  {
    id: 2,
    img: require('./assets/stepone/photo2.jpg')
  },
  {
    id: 3,
    img: require('./assets/stepone/photo3.webp')
  },
  {
    id: 4,
    img: require('./assets/stepone/photo4.jpg')
  },
  {
    id: 5,
    img: require('./assets/stepone/photo5.jpg')
  },
  {
    id: 6,
    img: require('./assets/stepone/photo6.webp')
  },
]

const dataStep2 = [
  {
    id: 1,
    text: 'Округлые',
    radius: '100%'
  },
  {
    id: 2,
    text: 'Острые',
    radius: '0px'
  },
  {
    id: 3,
    text: 'Волнистые',
    radius: '16px'
  },
]

const dataStep3 = [
  {
    id: 1,
    text: 'Красный',
    bg: 'red'
  },
  {
    id: 2,
    text: ' Синий',
    bg: 'blue'
  },
  {
    id: 3,
    text: 'Желтый',
    bg: 'yellow'
  },
]

const dataStep4 = [
  {
    id: 1,
    text: 'Маленькие',
    fontSize: '10',
    width: '200px',
    height: '100px'
  },
  {
    id: 2,
    text: 'Средние',
    fontSize: '20',
    width: '200px',
    height: '200px'
  },
  {
    id: 3,
    text: 'Большие',
    fontSize: '30',
    width: '300px',
    height: '300px'
  },
]

const dataStep5 = [
  {
    id: 1,
    text: 'Красный',
    bg: 'red'
  },
  {
    id: 2,
    text: ' Синий',
    bg: 'blue'
  },
  {
    id: 3,
    text: 'Желтый',
    bg: 'yellow'
  },
  {
    id: 4,
    text: 'Фиолетовый',
    bg: 'purple'
  },
  {
    id: 5,
    text: 'Зеленый',
    bg: 'green'
  },
  {
    id: 6,
    text: 'Розовый',
    bg: 'pink'
  },
]

const dataStep6 = [
  {
    id: 1,
    text: 'Маленькие',
    fontSize: '10',
    width: '200px',
    height: '100px'
  },
  {
    id: 2,
    text: 'Средние',
    fontSize: '20',
    width: '200px',
    height: '200px'
  },
  {
    id: 3,
    text: 'Большие',
    fontSize: '30',
    width: '300px',
    height: '300px'
  },
]

const dataStep7 = [
  {
    id: 1,
    text: 'Маленькие',
    fontSize: '10',
    width: '200px',
    height: '100px'
  },
  {
    id: 2,
    text: 'Средние',
    fontSize: '20',
    width: '200px',
    height: '200px'
  },
  {
    id: 3,
    text: 'Большие',
    fontSize: '30',
    width: '300px',
    height: '300px'
  },
]

export default function App() {

  const [step, setStep] = useState(1)
  const [arrValue, setArrValue] = useState([]);

  const [progress, setProgress] = useState('0%')


  const handleSelectBtnStep1 = (value) => {
    if (value) {
      setArrValue(prevArr => {
        const newArr = [...prevArr, value];
        const newProgress = `${(newArr.length / 10) * 100}%`;
        setProgress(newProgress);
        return newArr;
      });
      setStep(prev => prev + 1)
    }
  };

  const handleInpBtn = () => {
    setStep(prev => prev + 1)
  }


  function Main() {
    switch (step) {
      case 1:
        return (
          <div className='main_flowers'>
            <h1 className='title_card'>Выбери материал</h1>
            <div className='flowers'>
              {data.map(item => (
                <div key={item.id}>
                  <img src={item.img} alt='flowers img' className='flower_card' onClick={() => handleSelectBtnStep1(item.id)} />
                </div>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className='main_flowers'>
            <h1 className='title_card'>Выбери форму</h1>
            <div className='flowers'>
              {dataStep2.map(item => (
                <div key={item.id}>
                  <button className='flower_card_btn' style={{ borderRadius: item.radius }} onClick={() => handleSelectBtnStep1(item.id)} >{item.text}</button>
                </div>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className='main_flowers'>
            <h1 className='title_card'>Выбери цвет</h1>
            <div className='flowers'>
              {dataStep3.map(item => (
                <div key={item.id}>
                  <button className='flower_card_btn' style={{ backgroundColor: item.bg }} onClick={() => handleSelectBtnStep1(item.id)} >{item.text}</button>
                </div>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className='main_flowers'>
            <h1 className='title_card'>Выбор размера лепестков</h1>
            <div className='flowers'>
              {dataStep4.map(item => (
                <div key={item.id}>
                  <button className='flower_card_btn' style={{ width: item.width, height: item.height }} onClick={() => handleSelectBtnStep1(item.id)} >{item.text}</button>
                </div>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className='main_flowers'>
            <h1 className='title_card'>Выбор цвет ленты</h1>
            <div className='flowers'>
              {dataStep5.map(item => (
                <div key={item.id}>
                  <button className='flower_card_btn' style={{ backgroundColor: item.bg }} onClick={() => handleSelectBtnStep1(item.id)} >{item.text}</button>
                </div>
              ))}
            </div>
          </div>
        )

      case 6:
        return (
          <div className='main_flowers'>
            <h1 className='title_card'>Выбор размера букета</h1>
            <div className='flowers'>
              {dataStep6.map(item => (
                <div key={item.id}>
                  <button className='flower_card_btn' style={{ width: item.width, height: item.height }} onClick={() => handleSelectBtnStep1(item.id)} >{item.text}</button>
                </div>
              ))}
            </div>
          </div>
        )

      case 7:
        return (
          <div className='main_flowers'>
            <h1 className='title_card'>Выбор размера букета</h1>
            <div className='flowers'>
              <input placeholder='Надпись на открытке' className='flowers_inp' />
              <button className='btn_inp' onClick={() => handleInpBtn()}>Дальше</button>
            </div>
          </div>
        )

      case 8:
        return (
          <div className='main_flowers'>
            <h1 className='title_card'>Выбор игрушки для букета</h1>
            <div className='flowers'>
              {dataStep7.map(item => (
                <div key={item.id}>
                  <img src={item.img} alt='flowers img' className='flower_card' onClick={() => handleSelectBtnStep1(item.id)} />
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div className='main_flowers'>
            <h1 className='title_card'>Выбери материал</h1>
            <div className='flowers'>
              {data.map(item => (
                <div key={item.id}>
                  <img src={item.img} alt='flowers img' className='flower_card' onClick={() => handleSelectBtnStep1(item.id)} />
                </div>
              ))}
            </div>
          </div>
        )
    }
  }


  return (
    <div className='container'>
      <div className='app'>
        <div className='card'>
          <div className='card_head'>
            <h1 className='title'>Собери букет</h1>
            <div className='progress_line' >
              <div className='progress_line_end' style={{ width: progress }}></div>
            </div>
          </div>
          <Main />
        </div>
      </div>
    </div>
  )
}


























