import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckboxBlock.module.scss';

const CheckboxBlock = ({value, label, option, handleFilterChange, id = ''}) => {
  return (
    <div className={styles.checkbox} data-testid='CheckboxBlock'>
      <input
        type='checkbox'
        name={value}
        id={value}
        className={styles.checkboxInput}
        onChange={(e) => {
          handleFilterChange(option, e.target.name);
        }
        }
      />
      <label htmlFor={value} className={styles.checkboxLabel}>
        {id === 'isColor' && (
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              marginRight: '0.8rem',
              backgroundColor: `${value}`,
              border: '0.05rem solid #040404',
              cursor: 'pointer',
            }}
          ></div>
        )}
        {label}
      </label>
    </div>
  );
};

CheckboxBlock.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  option: PropTypes.string,
  handleFilterChange: PropTypes.func,
  id: PropTypes.string,
};

export default CheckboxBlock;
