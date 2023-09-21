import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext(undefined);

export const CardMasterProvider = ({children}) => {
  const [itemPrice, setItemPrice] = useState('');
  const [itemColor, setItemColor] = useState('');
  const [itemSize, setItemSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const collectData = () => {
    const jsonData = {
      itemPrice,
      itemColor,
      itemSize,
      quantity,
    };
    console.log(jsonData);
  };

  return (
    <DataContext.Provider
      value={{
        itemPrice,
        setItemPrice,
        itemColor,
        setItemColor,
        itemSize,
        setItemSize,
        quantity,
        setQuantity,
        collectData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

CardMasterProvider.propTypes = {
  children: PropTypes.element,
};
