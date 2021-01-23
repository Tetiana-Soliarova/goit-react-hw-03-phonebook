import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Filter = ({value, onChange}) => {
    return (
     <div className={styles.filtr}>
        <label className={styles.label}>
                Find contacts by name       
          </label>
         <input className={styles.input} type="text" value={value} onChange={onChange} />
            
             
     </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
};

export default Filter;