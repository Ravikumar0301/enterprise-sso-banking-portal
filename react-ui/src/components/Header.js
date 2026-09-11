function Header({ userName }) {
  return (
    <header className="header">
      <h2>Enterprise SSO Banking Portal</h2>

      <div className="header-user">
        Welcome, <strong>{userName}</strong>
      </div>
    </header>
  );
}

export default Header;