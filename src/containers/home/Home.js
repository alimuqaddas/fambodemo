import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/SideBar';
import AppTile from '../../components/apptile/AppTile';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Sidebar/>
        </div>

        <div id="content">
          <div className="inner-content">
            <div className="portfolio-page">
              <AppTile src="upload/image1.jpg"  gameName="GAME 1 FROM REACT" gameDescription="This is Game Number 1" gameLink="#" gamePoster="upload/image1.jpg"/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
