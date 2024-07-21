import React from "react";
import './Toolbar.css';

class Toolbar extends React.Component {
    
  render() {
      const styles = {
          toolbar: {
              padding: 10,
              marginBottom: 20,
              border: '1px solid white',
          },
          
          white: {
              background: 'purple',
              color: 'white'
          }
    }
    return (
        <div style={{ ...styles.toolbar, ...styles.white }}>
        {this.props.children}
      </div>
    );
  }
}

export default Toolbar;