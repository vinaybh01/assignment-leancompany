import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>GROWTH</h1>
      </div>
      <div className="content">
        <div className="out">
          <p>Outcomes</p>
        </div>
        <div className="community">
          <p>Community</p>
        </div>
        <div className="resources">
          <p>Resources</p>
        </div>
        <div className="member">
          <p>Membership Guide</p>
        </div>
        <div className="login">
          <p>Login</p>
        </div>
      </div>
      <div className="butt">
        <button>Become a Master</button>
      </div>
    </div>
  );
}

export default Navbar;
