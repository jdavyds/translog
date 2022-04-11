import React from 'react'
import style from './../styles/invest.module.css';
import invest from './../assets/invest.png';

export default function Invest() {
  return (
    <div>
        <section className={style.bg}>
            INVEST WITH US
        </section>
        <section className={style.invest}>
            <div>
                <h2>INVEST WITH US</h2>
                <img src={invest} alt="" className={style.investImgR} />
                <p>We welcome valuable collaborative engagements with  substantial tangible benefits to the parties thereto. <br /> Deploy your truck under our supervision for effective management and enjoy stress-free Return-on-investment.you can schedule a pre-operational  inspection of your truck(s) for full assessment and commence documentation process with us at your own time. Our Partners constitute essential part of our business ecosystem and are fully represented in our value system. You too can have a taste of the pie ! Talk to our staff to schedule a meeting.</p>
                <form action="" method="post">
                    <label htmlFor="">
                        <span>Name</span>
                        <input type="text" />
                    </label>
                    <label htmlFor="">
                        <span>Email</span>
                        <input type="email" />
                    </label>
                    <label htmlFor="">
                        <span>Phone</span>
                        <input type="tel" />
                    </label>
                    <label htmlFor="">
                        <span>Message</span>
                        <input type="text" />
                    </label>
                    <button type="submit">Schedule A Meeting</button>
                </form>
            </div>
            <div className={style.investImg}>
                <img src={invest} alt="" />
            </div>
        </section>
    </div>
  )
}
