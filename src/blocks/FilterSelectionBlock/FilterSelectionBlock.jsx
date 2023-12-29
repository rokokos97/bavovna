import React from 'react';
import CloseIcon from '../../components/svg/closeIcon/CloseIcon';
import Dropdown from '../../components/dropdown/Dropdown';
import CheckboxBlock from '../CheckboxBlock/CheckboxBlock';
import {useDataCatalogue} from '../../Providers/CatalogueMasterProvider';
import {filtersValues} from '../../services/filtersValues.service';
import styles from './FilterSelectionBlock.module.scss';

const FilterSelectionBlock = () => {
  const {changeIsFilter, handleCleanFilter, categories, colors} = useDataCatalogue();
  // const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  // console.log('FilterCheckboxes: ', filterCheckboxes);
  // console.log('Categories: ', categories);
  // console.log('Colors: ', colors);

  const {sizeValues, availabilityValues} =
    filtersValues;

  return (
    <div className={styles.filterContainer} data-testid='FilterSelectionBlock'>
      <div className={styles.filterSelection}>
        <div className={styles.closeIcon} onClick={changeIsFilter}>
          <CloseIcon />
        </div>
        <div className={styles.selectsContainer}>
          <Dropdown
            id='category'
            placeholder='Category'
            name='category'
            inner={categories.map((category, index) => (
              <CheckboxBlock
                key={index}
                value={category.name}
                label={category.name}
                option='category'
              />
            ))}
          />
          <Dropdown
            id='size'
            placeholder='Size'
            name='size'
            inner={sizeValues.map((sizeValue, index) => (
              <CheckboxBlock
                key={index}
                value={sizeValue.value}
                label={sizeValue.label}
                option='size'
              />
            ))}
          />
          <Dropdown
            id='color'
            placeholder='Color'
            name='color'
            inner={colors.map((color, index) => (
              <CheckboxBlock
                key={index}
                id='isColor'
                value={color.value}
                label={color.name}
                option='color'
              />
            ))}
          />
          <Dropdown
            id='availability'
            placeholder='Availability'
            name='availability'
            inner={availabilityValues.map((availabilityValue, index) => (
              <CheckboxBlock
                key={index}
                value={availabilityValue.value}
                label={availabilityValue.label}
                option='availability'
              />
            ))}
          />
        </div>
        <div className={styles.checkboxBlock}>
          <CheckboxBlock value='new' label='NEW' />
          <CheckboxBlock value='sale' label='SALE' />
        </div>
        <button type='button' className={styles.filterBtn} onClick={handleCleanFilter}>
          <span>Clean filter</span>
        </button>
      </div>
    </div>
  );
};

export default FilterSelectionBlock;
