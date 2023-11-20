import React from 'react'

const Header = () => {
  return (
    
     <nav class="navbar bg-body-tertiary" id='navbar'>
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
   <button class="btn btn-outline-success" type="submit">Wishlist</button>
  </div>
   
  
</nav>
    
  )
}

export default Header