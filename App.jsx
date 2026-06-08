import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userlist/UserList'
import NewUserForm from './components/newuser/NewUserForm'

function App() {
  const [hideForm, sethideForm] = useState(false)
  const [Users, setUsers] = useState([])


const HideFormFunc = (e) => {
  if (e.target.className === 'overlay') sethideForm(false)
  if (e.key === 'Escape') sethideForm(false)
}


  const deleteUser = (my_id) => {
    setUsers((previousData) => {
      return previousData.filter((user) => {
        return (
          user.id !== my_id
        )
      })
    })
  }

  const AddNewUsers = (users) => {
    setUsers((previousUser) => {
      return ([...previousUser, users])
    })
    sethideForm(false)
  }

  return (
    <div onClick={HideFormFunc}  onKeyDown={HideFormFunc} className='App'>
        <Navbar Users={Users.length}/>
          <main>
            <div className='no-users'>
              { Users.length === 0 &&  <h2 >No Users</h2>}
            </div>
          <UserList users={Users} deleteUser={deleteUser} />
          </main>
        <Footer/>
        {hideForm && <NewUserForm AddNewUsers={AddNewUsers}/>}
        <button className='create-user' onClick={() => {sethideForm(true)}}> Create User </button>
    </div>
  )
}

export default App
