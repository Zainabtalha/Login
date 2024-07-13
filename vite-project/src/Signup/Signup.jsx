// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Signup.module.css";

const Signup = ({ clickFunc }) => {
  return (
    <div>
      <h1>Signup Form</h1>
      
      <div className={styles.box}>
      <input className={styles.inputfeild} type="text" placeholder="Enter email" /><br/>

      <input className={styles.inputfeild} type="password" placeholder="Enter password" /><br/>
     
      
    
   
      <a href="#" onClick={clickFunc}>Go to login screen</a>
      </div>
    </div>
  );
};

Signup.propTypes = {
  clickFunc: PropTypes.func.isRequired,
};

export default Signup;
