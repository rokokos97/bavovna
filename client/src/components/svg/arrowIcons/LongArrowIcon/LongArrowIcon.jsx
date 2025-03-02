/* eslint-disable max-len */
import React from 'react';
import styles from './LongArrowIcon.module.scss';

const LongArrowIcon = () => (
  <div className={styles.longArrowIcon} data-testid="LongArrowIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="8" viewBox="0 0 88 8" fill="none">
      <path
        d="M87.3536 4.35355C87.5488 4.15829 87.5488 3.84171 87.3536 3.64645L84.1716 0.464466C83.9763 0.269204 83.6597 0.269204 83.4645 0.464466C83.2692 0.659728 83.2692 0.976311 83.4645 1.17157L86.2929 4L83.4645 6.82843C83.2692 7.02369 83.2692 7.34027 83.4645 7.53553C83.6597 7.7308 83.9763 7.7308 84.1716 7.53553L87.3536 4.35355ZM0 4.5H87V3.5H0V4.5Z"
        fill="#040404"
      />
    </svg>
  </div>
);

export default LongArrowIcon;
