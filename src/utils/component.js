import React, { Component } from 'react';
import {
  PasswordInput,
  Button,
  GridRow,
  GridColumn,
  Heading,
  GridWrapper,
} from 'react-onei';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ModalPassword from './ModalPassword';
import PasswordValidity from './PasswordValidity'; // TODO: Create MR to add component in react-onei

import ApiService from '../../../services/ApiService';
import TagService from '../../../services/TagService';

import UserContext from '../../../context/UserContext';
import ProcessEnv from '../../../utils/ProcessEnv';

import { events } from '../../../conf/tags_ga.conf';

export class ResetView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: false,
      canSubmit: false,
      password: '',
      passAgain: '',
      passwordError: undefined,
      passwordConfirmError: undefined,
      passwordConfirmSilentError: false,
      passwordConfirmTouched: false,
      passAgainBlurred: false,
      isFetching: false,
      isSubmitted: false,
      isVerificationCalled: false,
      isVerificationFetching: false,
      triedPasswords: [],
    };
    this.passwordInputRef = React.createRef();
    this.confirmPasswordInputRef = React.createRef();
  };

  componentDidUpdate(prevProps, prevState) {
    const { isSubmitted, isFetching, passwordConfirmTouched, passwordConfirmSilentError,
      passwordError, passAgainError, isVerificationCalled } = this.state;

    if (isSubmitted && (prevState.passwordError !== passwordError) && passwordError) {
      // Focus password input when receive error
      this.passwordInputRef.current.focus();
    }
    if (isSubmitted && (prevState.passAgainError !== passAgainError) && passAgainError) {
      // Focus confirm password input when receive error
      this.confirmPasswordInputRef.current.focus();
    }

    if (prevState.isFetching !== isFetching || prevState.passwordError !== passwordError
      || prevState.passwordConfirmTouched !== passwordConfirmTouched || prevState.passwordConfirmSilentError !== passwordConfirmSilentError
      || prevState.isVerificationCalled !== isVerificationCalled) {
      this.checkCanSubmit();
    }
  }

  leadingSpace = (value) => (/^(\s+)(.*?)/).test(value);
  tailingSpace = (value) => (/^(.*?)(\s+)$/).test(value);
  // eslint-disable-next-line no-control-regex
  hasUnsupportedSpecialChar = (value) => (/[\u0000-\u001F]|[\u007F-\u00BF]|[\u017F-\uFFFF]/g).test(value);
  hasAccentedChar = (value) => (/[\u00C0-\u107E]/g).test(value);
  tooLong = (value) => value.length > 50;

  hasntCorrectLength = (value) => value.length < 8;
  hasntLowerCase = (value) => !(/[a-z]/g).test(value);
  hasntUpperCase = (value) => !(/[A-Z]/g).test(value);
  hasntNumber = (value) => !(/\d/g).test(value);
  hasntSpecialChar = (value) => !(/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g).test(value);


  passwordCnilCriteriasAreNotValidated = (password) => {
    if (this.hasntCorrectLength(password)) {
      return true;
    } else if (this.hasntLowerCase(password)) {
      return true;
    } else if (this.hasntUpperCase(password)) {
      return true;
    } else if (this.hasntNumber(password)) {
      return true;
    } else if (this.hasntSpecialChar(password)) {
      return true;
    }
    return false;
  };
  /**
   * Validate password
   */
  validatePassword = () => {
    const { password } = this.state;
    const { wording } = this.context;
    const { WLOST_409, WLOST_411, WLOST_412, WLOST_410 } = wording;

    if (this.leadingSpace(password) || this.tailingSpace(password)) {
      this.setState({ passwordError: WLOST_410 });
      return false;
    } else if (this.hasAccentedChar(password)) {
      this.setState({ passwordError: WLOST_411 });
      return false;
    } else if (this.hasUnsupportedSpecialChar(password)) {
      this.setState({ passwordError: WLOST_412 });
      return false;
    } else if (this.tooLong(password)) {
      this.setState({ passwordError: WLOST_409 });
      return false;
    } else if (this.passwordCnilCriteriasAreNotValidated(password)) {
      this.setState({ passwordError: null });
      return false;
    }
    this.setState({ passwordError: undefined });
    return true;
  };

  /**
   * Check password
   */
  checkPassword = () => {
    this.checkPasswordIsLogin();
    this.checkPasswordMatching();
  };

  /**
   * Add password to an array in order to limit the amount of requests 
   * when the password was already verified in the user's session
   */
  addPasswordToList = (password, status, response) => {
    const { triedPasswords } = this.state;
    const newPwd = { value: password, status, response };
    this.setState({
      triedPasswords: [...triedPasswords, newPwd]
    });
  };

  /**
   * Call api to verify that password matches the different rules (history, pwned, leaked)
   */
  checkPasswordAdvancedRules = async () => {
    const { password, triedPasswords, isVerificationFetching } = this.state;
    const { identitiesId, wording } = this.context;
    const { WLOST_406, WLOST_407, WLOST_408, WLOST_409, WLOST_410, WLOST_411, WLOST_412, WLOST_422 } = wording;
    const { history } = this.props;
    const passwordData = triedPasswords.find(pwd => pwd.value === password);
    let result;
    try {
      if (isVerificationFetching) {
        return;
      }
      else if (passwordData && passwordData.status === 204) {
        //password already exists, response already stored, no need to call api
        result = passwordData.response;
      }
      else if (passwordData && passwordData.status !== 204) {
        //same, but throw error
        throw passwordData.response;
      }
      else {
        // set a lock in order to prevent asynchronous requests to cause an error 401 from api
        this.setState({ isVerificationFetching: true });
        result = await ApiService.checkIfFirstPasswordIsCorrect({ identitiesId, password });
        this.setState({ isVerificationFetching: false });
        this.addPasswordToList(password, result.status, result);
      }
      this.setState({ passwordError: undefined });
      this.setState({ isVerificationCalled: true });
    } catch (err) {
      this.setState({ isVerificationFetching: false });
      const code = err.response?.data?.code;
      if (!passwordData) {
        this.addPasswordToList(password, code, err);
      }
      switch (code) {
        case 412408:
          this.setState({ passwordError: WLOST_406 });
          break;
        case 412401:
          this.setState({ passwordError: WLOST_408 });
          break;
        case 412402:
          this.setState({ passwordError: WLOST_409 });
          break;
        case 412409:
          this.setState({ passwordError: WLOST_410 });
          break;
        case 412410:
          this.setState({ passwordError: WLOST_411 });
          break;
        case 412411:
          this.setState({ passwordError: WLOST_412 });
          break;
        case 412412:
          this.setState({ passwordError: WLOST_407 });
          TagService.sendEvent(events.passwordWasAlreadyUsed);
          break;
        case 412413:
          this.setState({ passwordError: WLOST_422 });
          TagService.sendEvent(events.passwordIsUnsafe);
          break;
        default:
          history.push({
            pathname: '${ProcessEnv.PUBLIC_URL}/error',
            state: {
              code,
            }
          });
          break;
      }
    }
  };

  /**
   * Check the passwords are matching
   */
  checkPasswordMatching = () => {
    const { password, passAgain, passAgainBlurred } = this.state;
    const { wording } = this.context;
    const { WLOST_405 } = wording;

    if (passAgainBlurred && passAgain) {
      if (password !== passAgain) {
        this.setState({ passwordConfirmError: WLOST_405 });
      } else {
        this.setState({ passwordConfirmError: undefined });
      }
    }

    if (password !== passAgain) {
      this.setState({ passwordConfirmSilentError: true });
    } else {
      this.setState({ passwordConfirmSilentError: false });
    }
  };

  /**
   * Check if the password match the login
   */
  checkPasswordIsLogin = () => {
    const { password } = this.state;
    const { identities, wording } = this.context;
    const { login } = identities;
    const { WLOST_406 } = wording;

    if (login && (password.toLowerCase() === login.toLowerCase())) {
      this.setState({ passwordError: WLOST_406 });
    }
  };

  /**
   * Update CNIL rules and validate password on change
   * @param e
   */
  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      password: value,
      isSubmitted: false,
      isVerificationCalled: false,
    }, () => {
      this.validatePassword();
      this.checkPassword();
    });
  };

  /**
   * Validate password on change
   * @param e
   */
  handleChangePassAgain = (e) => {
    const { value } = e.target;

    this.setState({
      passAgain: value,
      passwordConfirmError: undefined,
      passwordConfirmTouched: true,
      isSubmitted: false,
    }, () => {
      this.checkPassword();
    });
  };

  /**
   * Show CNIL rules on focus
   */
  handleFocus = () => {
    const { touched } = this.state;

    if (!touched) {
      this.setState({
        touched: true,
      });
    }
  };

  /**
   * Handle event blur on password input
   */
  handleBlur = async (e) => {
    e.preventDefault();
    const { password, passwordError } = this.state;
    const { wording } = this.context;
    const { WLOST_403 } = wording;

    if (!password) {
      this.setState({ passwordError: WLOST_403 });
    }

    else if (password && passwordError === undefined
      && !this.passwordCnilCriteriasAreNotValidated(password)) {
      await this.checkPasswordAdvancedRules();
    }
  };

  /**
   * Handle event blur on password confirm input
   * @param {*} e
   */
  handleBlurPassAgain = (e) => {
    e.preventDefault();
    const { passAgain, passAgainBlurred } = this.state;
    const { wording } = this.context;
    const { WLOST_404 } = wording;

    if (!passAgain) {
      this.setState({ passwordConfirmError: WLOST_404 });
    }
    if (!passAgainBlurred) {
      this.setState({ passAgainBlurred: true }, () => this.checkPassword());
    }
  };

  /**
   * Submit the new password
   * @param e
   */
  handleSubmit = (e) => {
    e.preventDefault();

    // Don't send request if password is not valid
    if (!this.validatePassword()) {
      return;
    }

    this.setState({ isSubmitted: true });
    TagService.sendEvent(events.updatePassword);
    this.resetPassword();
  };

  /**
   * Reset user password request
   */
  resetPassword = async () => {
    const { setStep, identitiesId, wording } = this.context;
    const { history } = this.props;
    const { password, passAgain } = this.state;
    const { WLOST_403, WLOST_404, WLOST_405, WLOST_406, WLOST_407, WLOST_408,
      WLOST_409, WLOST_410, WLOST_411, WLOST_412, WLOST_422 } = wording;

    this.setState({ isFetching: true });
    try {
      const res = await ApiService.patchPassword({
        identitiesId,
        password,
        passAgain,
      });
      switch (res.status) {
        case 200: {
          setStep('${ProcessEnv.PUBLIC_URL}/${res.data.step}');
          history.push('${ProcessEnv.PUBLIC_URL}/${res.data.step}');
          break;
        }
        case 204:
          setTimeout(() => this.checkPasswordPropagation(), window.reactAppEnv.apiRules.intervalPropagation);
          break;
        default:
          break;
      }
    } catch (err) {
      const code = err.response?.data?.code;
      switch (code) {
        case 412002:
          if (err.response?.data?.field === 'passAgain') {
            this.setState({ passwordConfirmError: WLOST_404 });
          } else {
            this.setState({ passwordError: WLOST_403 });
          }
          break;
        case 412004:
          this.setState({ passwordError: WLOST_405 });
          break;
        case 412408:
          this.setState({ passwordError: WLOST_406 });
          break;
        case 412401:
          this.setState({ passwordError: WLOST_408 });
          break;
        case 412402:
          this.setState({ passwordError: WLOST_409 });
          break;
        case 412409:
          this.setState({ passwordError: WLOST_410 });
          break;
        case 412410:
          this.setState({ passwordError: WLOST_411 });
          break;
        case 412411:
          this.setState({ passwordError: WLOST_412 });
          break;
        case 412412:
          this.setState({ passwordError: WLOST_407 });
          TagService.sendEvent(events.passwordWasAlreadyUsed);
          break;
        case 412413:
          this.setState({ passwordError: WLOST_422 });
          TagService.sendEvent(events.passwordIsUnsafe);
          break;
        default:
          history.push({
            pathname: '${ProcessEnv.PUBLIC_URL}/error',
            state: {
              code,
            }
          });
          break;
      }
      this.setState({ isFetching: false });
    }
  };

  /**
   * Check partners password propagation
   */
  checkPasswordPropagation = async () => {
    const { history } = this.props;
    const { setStep, identitiesId } = this.context;
    const { password } = this.state;

    try {
      const res = await ApiService.checkPropagationPartnersPassword({ identitiesId, password });
      switch (res.status) {
        case 200:
          setStep('${ProcessEnv.PUBLIC_URL}/${res.data.step}');
          history.push('${ProcessEnv.PUBLIC_URL}/${res.data.step}');
          break;
        case 204:
          setTimeout(() => this.checkPasswordPropagation(), window.reactAppEnv.apiRules.intervalPropagation);
          break;
        default:
          break;
      }
    } catch (err) {
      const code = err.response?.data?.code;
      switch (code) {
        case 408001:
          setStep('${ProcessEnv.PUBLIC_URL}/password/timeout');
          history.push('${ProcessEnv.PUBLIC_URL}/password/timeout');
          break;
        default:
          history.push({
            pathname: '${ProcessEnv.PUBLIC_URL}/error',
            state: {
              code,
            }
          });
          break;
      }
    }
  };

  checkCanSubmit = () => {
    const {
      passwordError, isFetching, passwordConfirmTouched, passwordConfirmSilentError, isVerificationCalled
    } = this.state;

    if (isFetching || passwordError !== undefined || passwordConfirmSilentError || !passwordConfirmTouched || !isVerificationCalled) {
      this.setState({ canSubmit: false });
    }
    else {
      this.setState({ canSubmit: true });
    }
  };

  render() {
    const {
      password, passwordError, passwordConfirmError, touched, isFetching, canSubmit } = this.state;
    const { wording, identities } = this.context;
    const { WLOST_400, WLOST_401, WLOST_402, WBUTTON_002 } = wording;

    return (
      <GridWrapper>
        <form onSubmit={this.handleSubmit} id="update-password-form" method="post" noValidate>

          <GridRow>
            <GridColumn>
              <Heading as="h3" id="update-password-subtitle" className="spacing-m">{WLOST_400}</Heading>
            </GridColumn>
          </GridRow>

          <GridRow>
            <input
              style={{ display: 'none' }}
              type="email"
              name="login"
              id="login"
              autoComplete="username"
              defaultValue={identities.login}
              readOnly
            />
            <GridColumn size={{ xs: 1, m: 6 / 12, l: 4 / 12 }}>
              <PasswordInput
                autoFocus
                ref={this.passwordInputRef}
                id="new-password"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                label={WLOST_401}
                displayOptionalLabel={false}
                maxLenght={50}
                error={passwordError}
              />
              <PasswordValidity value={password} touched={!touched} />
              <PasswordInput
                ref={this.confirmPasswordInputRef}
                id="confirm-password"
                onChange={this.handleChangePassAgain}
                onBlur={this.handleBlurPassAgain}
                label={WLOST_402}
                displayOptionalLabel={false}
                maxLenght={50}
                error={passwordConfirmError}
                className="spacing-xs"
              />
            </GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn>
              <Button
                type="submit"
                id="password-submit-button"
                disabled={!canSubmit}
                className="spacing-s"
              >
                {WBUTTON_002}
              </Button>
            </GridColumn>
          </GridRow>

          <ModalPassword isOpen={isFetching} />
        </form>
      </GridWrapper>
    );
  }
}

ResetView.defaultProps = {};

ResetView.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

ResetView.contextType = UserContext;

export default withRouter(ResetView);