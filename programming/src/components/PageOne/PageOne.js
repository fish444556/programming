import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addValue } from '../../actions';

class PageOne extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeV1 = this.changeV1.bind(this);
    this.changeV2 = this.changeV2.bind(this);
    this.state = {
      val1: 0,
      val2: 0,
    };
  }

  changeV1(e) {
    if (isNaN(e.target.value)) {
      alert('Please input number');
    }
    this.setState({
      val1: e.target.value
    });
  }

  changeV2(e) {
    if (isNaN(e.target.value)) {
      alert('Please input number');
    }
    this.setState({
      val2: e.target.value
    });
  }


  handleSubmit(event) {
    console.warn('submit');
    event.preventDefault();
    this.props.addValue({
      val1: this.state.val1,
      val2: this.state.val2}
    );
  }

  render() {
    return (
      <div>
        {this.props.value}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Please input value 1</label>
            <input name="val1" onChange={this.changeV1}/>
          </div>
          <div>
            <label>Please input value 2</label>
            <input name="val2" onChange={this.changeV2}/>
          </div>

          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
};

const mapStatesToProps = (state) => ({
  value: state.pageOneReducer.value
});

export default connect(mapStatesToProps, { addValue })(PageOne);