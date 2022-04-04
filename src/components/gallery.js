import React from 'react'
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

export default function Gallery() {
  return (
    <div>
        <section className={style.headbg}>
            <img src={head} alt="" />
        </section>
        <section className={style.gallery}>
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
    </div>
  )
}
