import React from 'react';
import '../styles/RecoveryPassword.scss';

export const NotFound = () => {
  return (
    <div className="PasswordRecovery">
          <div className="PasswordRecovery-container">
              <div className="image-404">
                  <img src="https://devbeep.com/wp-content/uploads/2021/07/BBBBBBBB-2.png" alt="404 error" />
              </div>
              <h1 className="title">Whoops!!!</h1>
              <p className="subtitle">It seems we couldn't find this page...</p>
              
              <div>
                <button className="primary-button login-button" href="/">Go Back</button>
              </div>
              
          </div>
      </div>
  )
}
