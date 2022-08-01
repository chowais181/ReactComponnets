import React from 'react';
import useFacebook from 'use-facebook';

export default function MyFacebookLoginPage () {
  /**
   * options is an object (also detailed below)
   */
   const options = { appId: '123456789' };

  /**
   * Returns the state of SDK (true = loaded and ready to use)
   */
  const { isFacebookSDKReady } = useFacebook(options);

  
  /** 
   * Enable/disable the button based on SDK ready state
   * Show FB login dialog on click once enabled
   */
  return (
   <button disabled={!isFacebookSDKReady} onClick={() => FB.login()}>Connect with Facebook</button>
  );
}