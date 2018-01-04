import React from 'react';
import { render } from 'react-dom';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Main } from './components';
import { MuiThemes } from './styles'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MuiThemeProvider>
        {/* <Main /> */}
        <div></div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('app'));
