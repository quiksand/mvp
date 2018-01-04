import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import customBaseTheme from './customBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

module.exports.MuiThemes = {
  dark: getMuiTheme(darkBaseTheme),
  light: getMuiTheme(lightBaseTheme),
  custom: getMuiTheme(customBaseTheme)
};