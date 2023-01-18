import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GridRow, GridColumn, GridWrapper, Feedback, Button, Text, Heading } from 'react-onei';
import RecoveryContext from "../../context/RecoveryContext";
import ApiService from "../../services/ApiService";
import ProcessEnv from "../../utils/ProcessEnv";
import TagService from "../../services/TagService";
import { events } from '../../conf/tags_ga.conf';
import Spinner from "../../components/Spinner";
import { prepareReturnUrl } from "../../utils";
import styled from "styled-components";
import useSendPageViewOnLoad from "../../hooks/useSendPageViewOnLoad";

const StyledFeedback = styled(Feedback)`
& {
  padding: 0px !important;
  @media (max-width: 768px) {
    & {
      padding: 0 0.9375rem !important;
    }
    & > div > div {
      padding: 0px !important;
    }
  }
}
`;

function Finalization() {
  const { wording, handleRedirect, setIsFetching, setDocumentTitle, setIsWebViewMode, isFetching } = useContext(RecoveryContext);
  const history = useHistory();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [returnUrl, setReturnUrl] = useState();
  const [callForwarding, setCallForwarding] = useState(false);
  const [mailRedirection, setMailRedirection] = useState(false);
  const [addressBook, setAddressBook] = useState(false);
  const [secondaryAccount, setSecondaryAccount] = useState(false);
  const [aliases, setAliases] = useState(false);
  const [contactsMeans, setContactsMeans] = useState(true);
  const [canSendPageView, setCanSendPageView] = useState(null);
  const defaultReturnUrl = ProcessEnv.REACT_APP_DEFAULT_RETURN_URL;

  const setVerification = (verifications) => {
    verifications.forEach((verif) => {
      switch (verif?.name) {
        case 'callForwarding':
          setCallForwarding(verif.isDisplayed);
          break;
        case 'mailRedirection':
          setMailRedirection(verif.isDisplayed);
          break;
        case 'addressBook':
          setAddressBook(verif.isDisplayed);
          break;
        case 'secondaryAccount':
          setSecondaryAccount(verif.isDisplayed);
          break;
        case 'aliases':
          setAliases(verif.isDisplayed);
          break;
        case 'contactMeans':
          setContactsMeans(verif.isDisplayed);
          break;
        default:
          break;
      }
    });
  };

  const getFinalization = () => {
    setIsFetching(true);
    ApiService.getFinalization().then((response) => {
      const isWebViewMode = response.data?.isWebViewMode;
      setVerification(response.data?.verifications);
      setIsWebViewMode(isWebViewMode);
      setCanSendPageView(true);
      let returnUrl = defaultReturnUrl;
      if (response.data.returnUrl) {
        returnUrl = response.data.returnUrl;
      }
      returnUrl = prepareReturnUrl(returnUrl, { webViewMode: isWebViewMode });
      setReturnUrl(returnUrl);
    }).catch((error) => {
      const isWebViewMode = error.response?.data?.details?.isWebViewMode;
      setIsWebViewMode(isWebViewMode);
      setCanSendPageView(true);
      handleRedirect('error', history, error.response?.data?.details);
    }).finally(() => {
      setIsFetching(false);
    });
  };

  useEffect(() => {
    setDocumentTitle(wording.WRCVY_40);
    getFinalization();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  useSendPageViewOnLoad(canSendPageView, '/finalization');

  function handleClick() {
    TagService.sendEvent(events.completeUnlock);
    setIsSubmitted(true);
    // removePreventQuit();
    window.location.replace(returnUrl);
  }

  if (isFetching) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <GridWrapper>
        <GridRow>
          <GridColumn className="spacing-s">
            <Heading as="h1" id="finalization-title" >
              {wording.WRCVY_40}
            </Heading>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn className="spacing-s">
            <StyledFeedback id="confirm" variant="info" title={wording.WRCVY_41} className="no-spacing-mobile">
              <Text
                id="finalization-feedback-1st-paragraph"
                variant="lead"
              >
                {wording.WRCVY_42}
              </Text>
              <Button id="recovery-submit-button"
                onClick={handleClick}
                className="spacing-xs"
                disabled={isSubmitted}
                variant="wired"
              >
                {wording.WRCVY_43}
              </Button>
            </StyledFeedback>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <div>
              <div
                id="finalization-helper"
                className="lead spacing-s">
                <strong>{wording.WRCVY_44}</strong>
              </div>
              {
                contactsMeans &&
                <Text
                  id="finalization-6th-check"
                  className="spacing-xs"
                >
                  <strong>{wording.WRCVY_58_1}</strong> : {wording.WRCVY_58_2}
                </Text>
              }
              {
                mailRedirection &&
                <Text
                  id="finalization-1st-check"
                  className="spacing-xs"
                >
                  <strong>{wording.WRCVY_45_1}</strong>&nbsp;:&nbsp;{wording.WRCVY_45_2}
                </Text>
              }

              {
                secondaryAccount &&
                <Text
                  id="finalization-2nd-check"
                  className="spacing-xs">
                  <strong>{wording.WRCVY_46_1}</strong>&nbsp;:&nbsp;{wording.WRCVY_46_2}
                </Text>
              }

              {
                aliases &&
                <Text
                  id="finalization-3rd-check"
                  className="spacing-xs">
                  <strong>{wording.WRCVY_47_1}</strong>&nbsp;:&nbsp;{wording.WRCVY_47_2}
                </Text>
              }

              {
                addressBook &&
                <Text
                  id="finalization-4th-check"
                  className="spacing-xs">
                  <strong>{wording.WRCVY_48_1}</strong>&nbsp;:&nbsp;{wording.WRCVY_48_2}
                </Text>
              }

              {
                callForwarding &&
                <Text
                  id="finalization-5th-check"
                  className="spacing-xs">
                  <strong>{wording.WRCVY_49_1}</strong>&nbsp;:&nbsp;{wording.WRCVY_49_2}
                </Text>
              }

            </div>
          </GridColumn>
        </GridRow>
      </GridWrapper>
    </>);
}

export default Finalization;