import axios from 'axios';
import PropTypes from 'prop-types';

const AuthPage = ({ onAuth }) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value.trim();
    if (!username) {
      console.log('Username is required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/authenticate', {
        username,
      });

      onAuth({ ...response.data, secret: username });
    } catch (error) {
      console.error('Error authenticating user:', error);
    }
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome Fam&lsquo;s Chat house👋</div>
        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input
            className="auth-input"
            name="username"
            placeholder="Enter your username"
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export default AuthPage;
