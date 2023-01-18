import { Component } from 'react';

import PropTypes from 'prop-types';
import { isMobile, isTablet } from 'react-device-detect';
import { withRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import './App.css';
import CommonElements from './components/CommonElements';
import RecoveryContext from './context/RecoveryContext';
import AppRouter from './router/AppRouter';
import * as wordingBase from './wording';
import ProcessEnv from './utils/ProcessEnv';
import { getStorageValue, parseQueryString, setStorageValue } from './utils';

const GlobalStyle = createGlobalStyle`
html, body {
height: 100%;
margin: 0;
}

body {
display: flex;
flex-direction: column;
}

footer {
margin-top: auto;
}

// Global spacing class
.no-spacing-mobile {
@media (max-width: 480px) {
margin-top: 0 !important; 
}
}
.spacing-xs {
margin-top: 15px; 
}
.spacing-s {
margin-top: 30px; 
}
.spacing-m {
margin-top: 45px; 
}
.spacing-l {
margin-top: 60px; 
}
.spacing-xl {
margin-top: 75px; 
}

// hack for pro elco
@media (max-width: 480px) {
div.opus {
margin-right: 0;
margin-left: 0;
}
}
`;

class App extends Component {
constructor(props) {
super(props);

const qs = parseQueryString(props.location);
const service = getStorageValue('RCY_service') || 'default';

this.state = {
qs,
account: null,
device: this.getDevice(),
webViewMode: this.getWebViewMode(qs),
isFetching: true,
wording: wordingBase.recovery,
ceLoaded: false,
service,
steps: [`${ProcessEnv.PUBLIC_URL}`],
preventQuit: false,
nbSteps: getStorageValue('RCY_steps') || 7,
};
}

componentDidMount() {
const { service } = this.state;
this.setWording(service);
// this.preventQuitting();
}

// preventQuitting = () => {
//   window.addEventListener('beforeunload', this.beforeUnloadListener);
//   this.setState({ preventQuit: true });
// };

// removePreventQuit = () => {
//   window.removeEventListener('beforeunload', this.beforeUnloadListener);
//   this.setState({ preventQuit: false });
// };

// beforeUnloadListener = (event) => {
//   event.preventDefault();
//   event.returnValue = '';
// };

/**
* Get the string device type
* @return {string}
*/
getDevice = () => {
if (isMobile) {
return 'webphone';
} else if (isTablet) {
return 'tablet';
} else {
return 'desktop';
}
};

/**
* Set the meta attributes when the app is in web view mode
*/
getWebViewMode = (qs) => {
if (qs.webViewMode && qs.webViewMode.match(/^1\.(0|1)$/)) {
const meta = document.createElement('meta');
meta.setAttribute('http-equiv', 'pragma');
meta.setAttribute('content', 'webViewMode:1.1');
document.getElementsByTagName('head')[0].appendChild(meta);
return true;
}
return false;
};

/**
* Add new autorized pathname
* @param {String} pathname 
*/
setStep = (pathname) => {
const { steps } = this.state;

// Force remove last / in pathname
pathname = pathname.replace(/\/$/, '');

if (!steps.find(step => step === pathname)) {
this.setState(state => ({
  steps: [
    ...state.steps,
    pathname,
  ],
}));
}
};

/**
* Handle redirect.
* @param {String} path Path to redirect.
* @param {Object} history History object.
* @param {Object} details response details.
* 
*/
handleRedirect = (path, history, details = undefined) => {
// const { preventQuit } = this.state;
if (path.startsWith('http')) {
// this.removePreventQuit();
window.location.replace(path);
} else {
this.setStep('${ProcessEnv.PUBLIC_URL}/${path}');
history.replace({
  pathname: '${ProcessEnv.PUBLIC_URL}/${path}',
  state: {
    details,
  }
});
// if (!preventQuit) {
//   this.preventQuitting();
// }
}
};

setAccount = (value) => {
this.setState({ account: value });
};

setCeLoaded = () => {
const { ceLoaded } = this.state;
if (ceLoaded === false) {
this.setState({
  ceLoaded: true,
});
}
};

setIsFetching = (isFetching) => {
this.setState({
isFetching,
});
};

setIsWebViewMode = (webViewMode) => {
this.setState({
webViewMode,
});
};

setDocumentTitle = (documentTitle) => {
document.title = documentTitle;
};

setNbSteps = (steps) => {
setStorageValue('RCY_steps', steps);
this.setState({ nbSteps: steps });
};

setWording = (service) => {
switch (service) {
case 'recoverypro':
  this.setState({ wording: wordingBase.recoveryPro });
  break;
case 'default':
default:
  this.setState({ wording: wordingBase.recovery });
  break;
}
};
setService = (service) => {
setStorageValue('RCY_service', service);
this.setWording(service);
this.setState({ service });
};

render() {
const {
qs,
account,
device,
webViewMode,
wording,
ceLoaded,
service,
steps,
nbSteps,
isFetching,
} = this.state;
const { location } = this.props;
return (
<RecoveryContext.Provider value={{
  qs,
  device,
  webViewMode,
  wording,
  steps,
  account,
  isFetching,
  ceLoaded,
  nbSteps,
  service,
  // removePreventQuit: this.removePreventQuit,
  handleRedirect: this.handleRedirect,
  setAccount: this.setAccount,
  setService: this.setService,
  setStep: this.setStep,
  setCeLoaded: this.setCeLoaded,
  setDocumentTitle: this.setDocumentTitle,
  setIsFetching: this.setIsFetching,
  setIsWebViewMode: this.setIsWebViewMode,
  setNbSteps: this.setNbSteps,
}}>
  <GlobalStyle />

  {
    ProcessEnv.REACT_APP_COMMON_ELEMENTS_ENABLED === 'true'
    && !ceLoaded
    && (!isFetching || location.pathname === '/recovery')
    && <CommonElements />
  }

  <AppRouter />

  <div className="spacing-l"></div>

</RecoveryContext.Provider >
);
}
}

App.defaultProps = {
};

App.propTypes = {
location: PropTypes.object.isRequired,
history: PropTypes.object.isRequired,
};

export default withRouter(App);