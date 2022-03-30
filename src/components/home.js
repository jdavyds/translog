import React from 'react'
import style from './../styles/home.module.css';
import intro from './../assets/intro.png';
import acct from './../assets/clipboard 1.png';
import capability from './../assets/capability 1.png';
import excellent from './../assets/excellent 1.png';
import logo from './../assets/logo2.png'
import about1 from './../assets/33 (2) 1.png';
import about2 from './../assets/45 2.png';
import focus2 from './../assets/44 1.png';
import focus3 from './../assets/40 1.png';
import focus4 from './../assets/37 1.png';
import foundation1 from './../assets/image 71.png';
import foundation2 from './../assets/Group 71.png';
import npd from './../assets/npd.png';
import nnpc from './../assets/nnpc.png';
import oando from './../assets/oando.png';
import total from './../assets/total.png';
import chevron from './../assets/chevron.png';
import invest from './../assets/invest.png';
import checked from './../assets/checked.png';
export default function Home() {
  return (
    <div>
        <section className={style.intro}>
            <img src={intro} alt="" className={style.introImg}/>
            <section>
                <p>At TRANSLOG we provide efficient livelihood improvement <br /> technologies</p>
                <div>
                    <nav>
                        <img src={acct} alt="" />
                        <span>ACCOUNTABILITY</span>
                    </nav>
                    <nav>
                        <img src={capability} alt="" />
                        <span>DILIGENCE</span>
                    </nav>
                    <nav>
                        <img src={excellent} alt="" />
                        <span>EXCELLENCE</span>
                    </nav>
                </div>
            </section>
        </section>
        <section className={style.about}>  
                <div>
                    <img src={about1} alt="" />
                    <nav>
                        <h3>About The  Company</h3>
                        <p>TRANSLOG Energy is a fast-growing petroleum haulage service provider with expertise in facilitating large-scale transport services for products such as Aviation fuel (Jet-A1), Premium Motor Spirit (PMS), Automotive Gas Oil (AGO), as well as Dual-purpose/Household Kerosenes across Nigeria and the West African sub-region prospectively.</p>
                        <button>Read More</button>
                    </nav>
                </div>
                <div>
                    <p> Amidst numerous oil-transportation challenges most importantly spillage/pollution and security, our company, TRANSLOG Energy strategically positions itself to execute petroleum logistics and haulage services, guaranteeing multi-dimensional safety; for the product and the environment. </p>
                    <img src={about2} alt="" />
                </div>
        </section>
        <section className={style.focus}>
            <h1>TRANSLOG BUSINESS FOCUS</h1>
            <div>
                <nav>
                        <h3>TRUCKING</h3>
                        <p><img src={checked} className={style.tick} alt="" /> Petroleum haulage</p>
                        <p><img src={checked} className={style.tick} alt="" /> Tank Fabrication</p>
                        <p><img src={checked} className={style.tick} alt="" /> Mechanical Repair Services</p>
                        <p><img src={checked} className={style.tick} alt="" /> Mack Auto-parts Sales</p>
                </nav>
                <img src={about2} className={style.focusImg} alt="" />
            </div>
            <div>
                <img src={focus2} className={style.focusImg} alt="" />
                <nav>
                        <h3>RETAIL OUTLETS FILLING STATIONS</h3>
                        <p><img src={checked} className={style.tick} alt="" /> ATK, PMS, AGO, DPK/HHK</p>
                        <p><img src={checked} className={style.tick} alt="" /> LPG Gas Plant</p>
                </nav>
            </div>
            <div>
                <nav>
                        <h3>CRUDE OIL PROSPECTING/MINING</h3>
                        <p><img src={checked} className={style.tick} alt="" /> Seismic exploration</p>
                        <p><img src={checked} className={style.tick} alt="" /> Crude Oil Mining</p>
                </nav>
                <img src={focus3} className={style.focusImg} alt="" />
            </div>
            <div>
                <img src={focus4} className={style.focusImg} alt="" />
                <nav>
                        <h3>OTHERS</h3>
                        <p><img src={checked} className={style.tick} alt="" /> Transportation</p>
                        <p><img src={checked} className={style.tick} alt="" /> (carriage Vessels)</p>
                </nav>
            </div>
        </section>
        <section className={style.maps}>
        <section className={style.foundation}>
            <h1>TRANSLOG FOUNDATION</h1>
            <span>A light in the tunnel</span>
            <div>
                <img src={foundation1} className={style.kids} alt="" />
                <nav>
                    <img src={logo} className={style.logo} alt="" />
                    <p>At the heart of translog foundation objectives, lies an unwavering commitment to promoting good corporate citizenship across the globe.</p> 
                    <p>This is achieved through Sahara Foundation – the vehicle for the Group’s Personal and Corporate Social Responsibility (PCSR initiatives. The activities of Sahara Foundation are aimed at empowering the communities where we operate in a sustainable, transparent and efficient manner.</p>
                    <button>Learn More</button>
                </nav>
                <img src={foundation2} alt="" />
            </div>
        </section>
        <section className={style.clients}>
            <h1>Our Client</h1>
            <nav>
                <img src={npd} alt="" />
                <img src={nnpc} alt="" />
                <img src={oando} alt="" />
                <img src={total} alt="" />
                <img src={chevron} alt="" />
            </nav>
        </section>
        <section className={style.invest}>
            <div>
                <h2>INVEST WITH US</h2>
                <p>We welcome valuable collaborative engagements with  substantial tangible benefits to the parties thereto. Deploy your truck under our supervision for effective management and enjoy stress-free Return-on-investment.you can schedule a pre-operational  inspection of your truck(s) for full assessment and commence documentation process with us at our own time. Our Partners constitute essential part of our business ecosystem and are fully represented in our value system. You too can have a taste of the pie ! Talk to our staff to schedule a meeting.</p>
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
                    <button type="submit">Schedule</button>
                </form>
            </div>
            <img src={invest} alt="" />
        </section>
        </section>
        <section className={style.letter}>
            <p>Get Great News from Us</p>
            <label htmlFor="">
                <input type="email" />
                <button type="submit">Subscribe</button>
            </label>
        </section>
    </div>
  )
}
