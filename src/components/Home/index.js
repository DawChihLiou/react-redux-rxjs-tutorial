import React, { PureComponent } from 'react';
import photo from './portrait-mono.png';
import './styles.scss';

class Home extends PureComponent {
  render() {
    return (
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="is-flex is-horizontal-center">
                  <figure className="image is-128x128">
                    <img
                      className="is-rounded"
                      src={photo}
                      alt="daw-chih welcome you"
                    />
                  </figure>
                </div>

                <h1 className="title">Welcome to the workshop!</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
