function isAuthenticated() {
    const loggedIn = localStorage.getItem('loggedIn');
    return loggedIn === 'true';
}
  
export { isAuthenticated };