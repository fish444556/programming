import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../../actions';
import './pageTwoCSS.css';
class PageTwo extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color: 'black',
    };
  }

  changeColor(e) {
    const arr = ['black', 'red', 'yellow'];
    if (arr.includes(e.target.value)) {
      this.setState({
        color: e.target.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.changeColor({
      color: this.state.color
    });
  }


  render() {
    return (
      <div style={{color: this.props.color}}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Please input color</label>
            <input
              name="val1"
              onChange={this.changeColor}
              placeholder="red/ black/ yellow"
            />
          </div>

          <input type="submit" value="Change" />
        </form>
      </div>
    );
  }
};

const mapStatesToProps = (state) => ({
  color: state.pageTwoReducer.color
});


export default connect(mapStatesToProps, { changeColor })(PageTwo);