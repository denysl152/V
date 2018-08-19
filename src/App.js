import React, { Component } from 'react';
import './css/App.css';
import './css/content.css';
import Gang from './img/MoLO.png';
import Music from './Blank.mp3';

class GANGK extends Component {
  render() {
    return (
      <div className="App">
      <header className="head_spooki">
    <div className="post_log">
        <img src={Gang} className="Logo_img" alt="C'est mon crew"/>
    </div>
<ul className="navbar_head">
<li className="boutonhigh"><a href=""> YES </a></li>
<li className="boutonhigh">NO</li>
<li className="boutonhigh">MI</li>
</ul>
</header>

<div className="yah">
<h2 style={{padding:"80px"}}>
  Je suis une musique
</h2>
<audio controls="controls">
<source src={Music} type="audio/mp3"/>
</audio>
</div>
      </div>
    );
  }
}

export default GANGK;
