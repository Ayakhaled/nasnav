import React, { Component } from 'react';
import './App.scss';
import Home from './Pages/Home';
import HeroSec from './Components/HeroSec';
import AnalyticsSec from './Components/AnalyticsSec';
import FullSection from './Components/FullSection';
import FeatureItem from './Components/FeatureItem';
import laptop from './Images/laptop1.svg';
import laptop2 from './Images/laptop2.png';
import desktop from './Images/desktop.svg';
import chair from './Images/groupchair.png';
import controlP from './Images/cp.png';
import macbook from './Images/macbook3.png';
import icon1 from './Images/icon1.svg';
import icon2 from './Images/icon2.svg';
import icon3 from './Images/icon3.svg';
import icon4 from './Images/icon4.svg';
import icon5 from './Images/icon5.svg';
import icon6 from './Images/icon6.svg';
import icon7 from './Images/icon7.svg';
import icon8 from './Images/icon8.svg';
import icon9 from './Images/icon9.svg';
import icon10 from './Images/icon10.svg';
import icon11 from './Images/icon11.svg';
import icon12 from './Images/icon12.svg';
import message from './Images/message.svg';
import smartphone from './Images/smartphone.svg';
import map from './Images/map.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSec />
        <AnalyticsSec />
        <div className="buyerSec">
          <div className="message">
            <p>Reach the buyer faster</p>
            <h1>
              <span>NavBox </span>
              Your Products are top Google search
            </h1>
            <p>
              Here at NasNav we designed a device called a route box that plugs into a store barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products.
            </p>
            <div>
              <FeatureItem icon={icon1} message="Just plugin the NasNav Box." />
              <FeatureItem icon={icon2} message="Your products appear online." />
              <FeatureItem icon={icon3} message="Come up on google." />
            </div>
            <button className="blue-btn" >Get Started</button>
          </div>
          <img className="banner" src={laptop} />
        </div>
        <FullSection
          image={desktop}
          liveDemo={true}
          title="How will my products be displayed?"
          headlineBold="+10 NavBox"
          headline=" styles you can choose between"
          message="Here at NasNav we designed a device called a route box that plugs into a store barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products."
        >
          <FeatureItem icon={icon4} message="Adjust the colors to suit your type of work." />
          <FeatureItem icon={icon5} message="Edit and upload photos that reflect you."/>
          <FeatureItem icon={icon6} message="Add your logo and ways of communications."/>
        </FullSection>
        <div className="image360">
          <img src={chair} />
          <div className="message">
            <p>Once your customers have a fun experience using 360 technology</p>
            <h1>
              <span>A New Shopping </span>
              experience for your customers
            </h1>
            <p>
              Here at NasNav we designed a device called a route box that plugs into a store barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products.
            </p>
            <div className="btn-list">
              <button className="gr-btn" >Live Demo</button>
              <button className="blue-btn" >Get Started</button>
            </div>
          </div>
          <img src={laptop2} />
        </div>
        <FullSection
          image={controlP} 
          className="right-img" 
          imageClass="right-img__img"
          title="How will my products be displayed?"
          headlineBold="Control Panel"
          headline=" to edit 360 pictures of branches"
          message="Here at NasNav we designed a device called a route box that plugs into a store barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products."
        >
          <FeatureItem icon={icon7} message="Add and modify products."/>
          <FeatureItem icon={icon8} message="Additions, directions, and shapes."/>
          <FeatureItem icon={icon9} message="A separate control panel for each branch."/>
        </FullSection>
        <FullSection
          image={macbook} 
          className="analytics" 
          imageClass="analytics__img"
          title="How will my products be displayed?"
          headlineBold="Dashboard"
          headline=" to manage your store and results"
          message="Here at NasNav we designed a device called a route box that plugs into a store barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products."
        >
          <FeatureItem icon={icon10} message="management of products and branches."/>
          <FeatureItem icon={icon11} message="Analysis of results and reciept of orders."/>
          <FeatureItem icon={icon12} message="Manage facebook page and Google Analytics."/>
        </FullSection>        
        <div className="map">
          <p>In many countries of the world we are present</p>
          <h1>
            <span>Where do </span>
            we go and offer our services?
          </h1>
          <p>
            here at NasNav we designed a device called the routebox that plugs into stores barcode scanner.
          </p>
          <img src={map} />
          <div className="join-fam">
            <h1>Join our family now wherever you are</h1>
            <p>You can join us easily and increase your profit</p>
            <button className="blue-btn">Get Started</button>
          </div>
        </div>
        <div className="contacts">
          <div className="contact">
            <h1>London</h1>
            <p className="st">The United Kingdom. It's located 51.51</p>
            <p className="blue-txt">Customer Service</p>
            <FeatureItem icon={smartphone} message="0052635458"/>
            <FeatureItem icon={message} message="london@nasorg.co"/>
          </div>
          <div className="contact">
            <h1>London</h1>
            <p className="st">The United Kingdom. It's located 51.51</p>
            <p className="blue-txt">Customer Service</p>
            <FeatureItem icon={smartphone} message="0052635458"/>
            <FeatureItem icon={message} message="london@nasorg.co"/>
          </div>
          <div className="contact">
            <h1>London</h1>
            <p className="st">The United Kingdom. It's located 51.51</p>
            <p className="blue-txt">Customer Service</p>
            <FeatureItem icon={smartphone} message="0052635458"/>
            <FeatureItem icon={message} message="london@nasorg.co"/>
          </div>
          <div className="contact">
            <h1>London</h1>
            <p className="st">The United Kingdom. It's located 51.51</p>
            <p className="blue-txt">Customer Service</p>
            <FeatureItem icon={smartphone} message="0052635458"/>
            <FeatureItem icon={message} message="london@nasorg.co"/>
          </div>
          <div className="contact">
            <h1>London</h1>
            <p className="st">The United Kingdom. It's located 51.51</p>
            <p className="blue-txt">Customer Service</p>
            <FeatureItem icon={smartphone} message="0052635458"/>
            <FeatureItem icon={message} message="london@nasorg.co"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
