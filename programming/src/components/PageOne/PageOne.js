import React, { Component } from 'react';

class PageOne extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    console.warn('submit');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Please input value 1</label>
            <input name="val1" />
          </div>
          <div>
            <label>Please input value 2</label>
            <input name="val2" />
          </div>

          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
};

export default PageOne;