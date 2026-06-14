import React from 'react'

const App = () => {
  return (
    <div className= "w-screen flex flex-col h-screen bg-black text-white">
      <div className='w-full h-10 flex flex-grid'>
        <div className='flex flex-cols'>
          <button className="w-8 p-1 m-3 h-8 bg-[url('https://www.citypng.com/public/uploads/preview/transparent-hd-white-menu-burger-icon-701751695037039ulxnzxwywi.png?v=2026053022')] bg-cover bg-center text-white">
          </button>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/YouTube_2024_%28white_text%29.svg/1280px-YouTube_2024_%28white_text%29.svg.png'
            className='flex flex-col w-32 h-8 m-3 p-1 '
          />
        </div>


        <div className='flex flex-col w-120 border-1 outline-none border-gray-400 rounded-3xl rounded-r-none h-8 p-1 m-3 mr-0 font-xs pl-3 ml-50'>
          <input
            type='text'
            placeholder='Search'
          />
        </div>
        <div className='w-19 '>
          <img
            src='https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-magnifying-glass-white-icon.png'
            alt='menu icon'
            className='w-13 h-8 mt-3 pl-5 p-1 bg-cover bg-center border-1 border-gray-800 rounded-l-none rounded-r-3xl ml-0 '
            />
        </div>
        <div className=''>
          <img
            src='https://img.icons8.com/fluent-systems-regular/512w/FFFFFF/microphone.png'
            alt='menu icon'
            className='w-12 h-8 mt-3 p-1 bg-cover bg-center border-0 border-gray-800 rounded-full ml-0'
            />
        </div>



        <div className='flex flex-grid ml-120'>
          <button className='ml-1 p-1 pt-2 font-bold bg-gray-800 rounded-2xl w-25 mt-3'>+Create</button>
          <button className='h-9 p-0 m-3 w-10 bg-cover bg-center font-xs pl-3 ml-1'>
            <img className='flex flex-grid' src='https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-notification-icon-png-image_4221919.jpg'></img>
            </button>  
          <button className='h-9 p-0 m-3 w-10 bg-cover bg-center font-bold bg-gray-800 rounded-2xl mr-0 pr-0 mt-3'>
            <img className='flex flex-grid' src='https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-701751695037005zdurfaim0y.png' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App