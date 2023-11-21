import { useRef, useState } from 'react'
// import '../src/styles.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Search from './components/Search'
// import Pagination from './components/Pagination'
// import Edit from './components/Edit'
import UsersTable from './components/UsersTable'


function App() {


  return (
    <div>

      <title>User List Demo</title>
      {/* Header component */}
      < Header />
      {/* Main component  */}
      <main className="main">
        {/* Section component  */}
        <section className="card users-container">
          {/* Search bar component */}
          <Search />
          {/* Table component */}
          <UsersTable />
          

          {/* New user button  */}
          {/* <button className="btn-add btn">Add new user</button> */}
          {/* Pagination component  */}
          {/* <Pagination /> */}
        </section>
        {/* User details component  */}

        {/* Create/Edit Form component  */}
        
        {/* Delete user component  */}
      
      </main>
      {/* Footer component  */}

      <Footer />

    </div>
  )
}

export default App
