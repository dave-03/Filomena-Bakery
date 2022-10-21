import React from 'react'
import img1 from '../Assets/img1.jpg'

function Hero() {
  return (
    <div className=" p-3 flex flex-wrap md:flex justify-center items-center animated" >
      <div className=' ' > <img src={img1} alt="Filomena Bakery Brownie" className='h-[500px] rounded-br-3xl rounded-tl-3xl shadow-xl' /></div>
      <div className=' md: ml-[20px]'>
        <h1 className='  text-left md:text-center  ml-[50px] text-7xl font-extrabold'>Filomena Bakery</h1>
        <br></br>
        <p className=' p-3 text-left  text-sm md: text-center '>Comprometidos a brindar dulces soluciones para tus eventos,
        <br></br> festividades, ocasiones especiales, o el simple hecho de compartir un delicioso brownie!</p>
        <div  className=' flex justify-center md:flex justify-center'><button className=' mt-10 w-[100px] h-[50px] bg-green-500 rounded text-white'><a  className='m-auto text-center' >PIDE YA!</a></button></div>
      </div>
     </div>

  )
}

export default Hero