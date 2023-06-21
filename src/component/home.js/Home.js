import React, { Fragment } from "react";
import Header from "./Header";
import './Home.css'
import prideimg from "./../../img/1.png"
import ingredients from "./../../img/2 (1).png"
import data from "../../data";
import { Carousel } from "react-bootstrap";
import item1 from './../../img/img 1.jpg' 
import item2 from './../../img/img 2.jpg' 
const Home = ()=>{
    const blogItem = data.map((item)=>{
        return(
            <div className="col-md-4">
                <div className="box">
                   <img src={item.img}/>
                   <h5>{item.title}</h5>
                   <span>{item.time}</span>
                   <h6>{item.price}</h6>
                </div>
                <button><a href="#">order now</a></button>
            </div>
        )
    })
    return(
        <Fragment>
            <Header/>

            <section className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>5786+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1440+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>7110+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={prideimg} title="prideimg"/>
                        </div>
                        <div className="col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Etiam et purus a odio finibus bibendum in sit
                                  amet leo. Mauris feugiat erat tellus.</p>
                                  <button><a href="#">Learn More</a></button>
                        </div>
                    </div>
                </div>
            </section>



            <section className="ingredients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Etiam et purus a odio finibus bibendum in sit amet leo.
                                  Mauris feugiat erat tellus.Far far away, behind the 
                                  word mountains, far from the countries Vokalia and
                                   Consonantia, there live the blind texts.</p>
                                   <ul>
                                    <li>Etiam sed dolor ac diam volutpat.</li>
                                    <li>Erat volutpat aliquet imperdiet.</li>
                                    <li>purus a odio finibus bibendum.</li>
                                   </ul>
                                  <button><a href="#">Learn More</a></button>
                                 </div>
                             <div className="col-md-6">
                            <img src={ingredients} title="ingredients"/>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="blogs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <h2>Explore Our Foods</h2>
                                <p>Lorem ipsum dolor sit amet,
                                 consectetur adipiscing elit.
                                 Etiam et purus a odio finibus 
                                bibendum in sit amet leo. Mauris
                                 feugiat erat tellus. Far far away,
                                behind the word mountains, far from 
                                the countries Vokalia and Consonantia,
                                 there live the blind texts. Separated
                                  they live in Bookmarksgrove.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {blogItem}
                    </div>
                </div>
            </section>



            <section className="slider">
                    <Carousel>
                        <Carousel.Item>
                     <img
                     src={item1}
                     />
                     <Carousel.Caption>
                       <h3> Maccy Doe - Front End</h3>
                       <p>N"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
                     </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item>
                     <img
                      src={item2}
                     />
             
                     <Carousel.Caption>
                       <h3> Johnthan Doe -Ux Designer</h3>
                       <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
                     </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item>
                     <img
                      src={item1}
                     />
             
                     <Carousel.Caption>
                       <h3>Simab Dave - Web Designer</h3>
                       <p>
                       "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "
                       </p>
                     </Carousel.Caption>
                   </Carousel.Item>
                 </Carousel>
            </section>


        </Fragment>
    );
}


export default Home;
