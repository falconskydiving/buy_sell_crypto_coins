const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 bg-gradient-to-b from-emerald-800 to-emerald-700">
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@frypto2022</p>
        <p className="text-white text-right text-xs">All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer;
