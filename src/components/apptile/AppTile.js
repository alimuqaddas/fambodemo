import React from 'react';
import PropTypes from 'prop-types';

const AppTile = props => {
    return (
            <div className="project-post">
                <div className="view view-first">
                  <img src={props.src} alt="" />
                  <div className="mask">
                    <div className="top-post">
                      <h2>{props.gameName}</h2>
                      <div className="post-border"></div>
                      <p>{props.gameDescription}</p>
                    </div>
                    <div className="bottom-post">
                      <a className="zoom" href={props.gamePoster}><i className="fa fa-search"></i></a>
                      <a href={props.gameLink}><i className="fa fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
    );
};

AppTile.propTypes = {
    src:PropTypes.string.isRequired,
    gameName:PropTypes.string.isRequired,
    gameDescription:PropTypes.string.isRequired,
    gameLink:PropTypes.string.isRequired,
    gamePoster:PropTypes.string.isRequired
};

export default AppTile;