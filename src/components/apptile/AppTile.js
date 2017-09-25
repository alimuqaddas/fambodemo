import React from 'react';
import PropTypes from 'prop-types';

const AppTile = props => {
    return (
        <div>
            <div className="project-post">
                <div className="view view-first">
                  <img src="upload/image1.jpg" alt="" />
                  <div className="mask">
                    <div className="top-post">
                      <h2>Creative Wallpaper</h2>
                      <div className="post-border"></div>
                      <p>nature, photography</p>
                    </div>
                    <div className="bottom-post">
                      <a className="zoom" href="upload/image1.jpg"><i className="fa fa-search"></i></a>
                      <a href="#"><i className="fa fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    );
};

AppTile.propTypes = {
    
};

export default AppTile;