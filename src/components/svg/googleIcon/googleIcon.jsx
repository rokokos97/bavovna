import React from 'react';
import styles from './googleIcon.module.scss';

const GoogleIcon = () => (
  <div className={styles.googleIcon} data-testid="GoogleIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <g clipPath="url(#clip0_614_8328)">
        {/* eslint-disable-next-line max-len */}
        <path d="M24.266 12.2763C24.266 11.4605 24.1999 10.6404 24.0588 9.83789H12.74V14.4589H19.2217C18.9528 15.9492 18.0885 17.2676 16.823 18.1054V21.1037H20.69C22.9608 19.0137 24.266 15.9272 24.266 12.2763Z" fill="#4285F4"/>
        {/* eslint-disable-next-line max-len */}
        <path d="M12.7401 24.0008C15.9766 24.0008 18.7059 22.9382 20.6945 21.1039L16.8276 18.1055C15.7517 18.8375 14.3627 19.252 12.7445 19.252C9.61388 19.252 6.95946 17.1399 6.00705 14.3003H2.0166V17.3912C4.05371 21.4434 8.2029 24.0008 12.7401 24.0008Z" fill="#34A853"/>
        {/* eslint-disable-next-line max-len */}
        <path d="M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z" fill="#FBBC04"/>
        {/* eslint-disable-next-line max-len */}
        <path d="M12.7401 4.74966C14.4509 4.7232 16.1044 5.36697 17.3434 6.54867L20.7695 3.12262C18.6001 1.0855 15.7208 -0.034466 12.7401 0.000808666C8.2029 0.000808666 4.05371 2.55822 2.0166 6.61481L6.00264 9.70575C6.95064 6.86173 9.60947 4.74966 12.7401 4.74966Z" fill="#EA4335"/>
      </g>
      <defs>
        <clipPath id="clip0_614_8328">
          <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
        </clipPath>
      </defs>
    </svg>

  </div>
);

export default GoogleIcon;
