import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import FormElement from '../components/FormElement';
import { registerUser } from '../redux/actions';

function RegisterContainer({ userData, signupUser }) {
  const username = useRef();
  const password = useRef();

  const handleRegistration = e => {
    e.preventDefault();

    const data = {
      user: {
        username: username.current.value,
        password: password.current.value,
      },
    };
    signupUser(data);
  };

  let error = '';
  if (userData.error) {
    error = userData.error;
  }

  // eslint-disable-next-line no-nested-ternary
  return userData.loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="orange" />
    </h2>
  ) : userData.token === undefined || userData.token === 'undefined'
    ? (
      <>
        <h2 className="about-section__primary">Зареєструватись</h2>
        <p className="mb-3">Вітаю, зареєструйтесь для того щоб переглянути авто або замовити тест-драйв</p>
        <p className="text-danger">{ error}</p>
        <FormElement username={username} password={password} type="Зареєструватись" handleSubmit={handleRegistration} />
      </>
    ) : (
      <Redirect to="/" />
    );
}

const mapStateToProps = state => ({
  userData: state.user,
});

const mapDispatchToProps = dispatch => ({
  signupUser: info => dispatch(registerUser(info)),
});

RegisterContainer.propTypes = {
  signupUser: PropTypes.func.isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
