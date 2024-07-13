import PropTypes from 'prop-types';
import styles from "./Login.module.css";


const Login = ({ clickFunc }) => {
  return (
    <div>
      <h1>LOGIN form</h1>
      <div className={styles.box}>
      <input className={styles.inputfeild} type="text" placeholder="Enter your email" /><br/>

      <input className={styles.inputfeild} type="password" placeholder="Enter your password" /><br/>
     
      
      <a href="#" onClick={clickFunc}>Already account </a>
      </div>
   
    </div>
  );
};

Login.propTypes = {
  clickFunc: PropTypes.func.isRequired,
};

export default Login;
