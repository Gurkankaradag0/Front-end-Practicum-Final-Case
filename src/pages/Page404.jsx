function Page404() {
  return (
    <div className="flex flex-col justify-center items-center h-full px-4">
      <div className="flex justify-center items-center text-[100px] font-bold max-[400px]:text-[80px] pointer-events-none select-none">
        <span>4</span>
        <span className="font-StarWarsGlyphicons text-[250px] font-normal max-[400px]:text-[200px]"></span>
        <span>4</span>
      </div>
      <span className="font-semibold text-center -mt-8 mb-8 max-[400px]:text-sm">
        THIS PAGE IS NOT FULLY ARMED AND OPERATIONAL
      </span>
    </div>
  )
}

export default Page404