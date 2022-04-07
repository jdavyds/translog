import React, { useState } from 'react'
import style from './../styles/gallery.module.css';
import head from './../assets/gallery.png';
import g1 from './../assets/gallery1.png'
import g2 from './../assets/gallery2.png'
import g3 from './../assets/gallery3.png'
import g4 from './../assets/gallery4.png'
import g5 from './../assets/gallery5.png'
import g6 from './../assets/gallery6.png'
import g7 from './../assets/gallery7.png'
import g8 from './../assets/gallery8.png'
import g9 from './../assets/gallery9.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Gallery() {
  const [one, setOne] = useState(true)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)
  function handleOne() {
    setOne(true)
    setTwo(false)
    setThree(false)
    setFour(false)
  }
  function handleTwo() {
    setOne(false)
    setTwo(true)
    setThree(false)
    setFour(false)
  }
  function handleThree() {
    setOne(false)
    setTwo(false)
    setThree(true)
    setFour(false)
  }
  function handleFour() {
    setOne(false)
    setTwo(false)
    setThree(false)
    setFour(true)
  }
  function handlePrev() {
    if(four === true) {
      setFour(false)
      setThree(true)
    }
    if(three === true) {
      setThree(false)
      setTwo(true)
    }
    if(two === true) {
      setTwo(false)
      setOne(true)
    }
  }
  function handleNext() {
    if(one === true) {
      setOne(false)
      setTwo(true)
    }
    if(two === true) {
      setTwo(false)
      setThree(true)
    }
    if(three === true) {
      setThree(false)
      setFour(true)
    }
  }
  return (
    <div>
        <section className={style.headbg}>
            <img src={head} alt="" />
        </section>
        <section className={one ? style.gallery : style.none}>
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g3} alt="" />
            <img src={g4} alt="" />
            <img src={g5} alt="" />
            <img src={g6} alt="" />
            <img src={g7} alt="" />
            <img src={g8} alt="" />
            <img src={g9} alt="" />
        </section>
        <section className={two ? style.gallery : style.none}>
            <img src={g9} alt="" />
            <img src={g8} alt="" />
            <img src={g7} alt="" />
            <img src={g6} alt="" />
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g3} alt="" />
            <img src={g4} alt="" />
            <img src={g5} alt="" />
        </section>
        <section className={three ? style.gallery : style.none}>
            <img src={g5} alt="" />
            <img src={g4} alt="" />
            <img src={g3} alt="" />
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g6} alt="" />
            <img src={g7} alt="" />
            <img src={g8} alt="" />
            <img src={g9} alt="" />
        </section>
        <section className={four ? style.gallery : style.none}>
            <img src={g4} alt="" />
            <img src={g5} alt="" />
            <img src={g6} alt="" />
            <img src={g7} alt="" />
            <img src={g8} alt="" />
            <img src={g9} alt="" />
            <img src={g3} alt="" />
            <img src={g2} alt="" />
            <img src={g1} alt="" />
        </section>
        <section className={style.page}>
          <button onClick={handlePrev}><FontAwesomeIcon icon={ faChevronLeft } /></button>
          <button onClick={handleOne}>1</button>
          <button onClick={handleTwo}>2</button>
          <button onClick={handleThree}>3</button>
          <button onClick={handleFour}>4</button>
          <button onClick={handleNext}><FontAwesomeIcon icon={ faChevronRight } /></button>
      </section>
    </div>
  )
}
