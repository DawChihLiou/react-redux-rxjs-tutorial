import React, { PureComponent } from 'react';
import photo from './portrait-mono.png';
import './styles.scss';

class Home extends PureComponent {
  render() {
    return (
      <section class="hero is-link is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns is-centered">
              <div class="column is-half">
                <div class="is-flex is-horizontal-center">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src={photo}
                      alt="daw-chih welcome you"
                    />
                  </figure>
                </div>

                <h1 class="title">Welcome to the workshop!</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
