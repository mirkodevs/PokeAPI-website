import ProgressStats from "./ProgressStats";
import TypeBadge from "./TypeBadge";
const Description = ({
  type,
  color,
  image,
  heightpok,
  weightpok,
  pokstat1,
  pokstat2,
  pokstat3,
  pokstat4,
  pokstat5,
  pokstat6,
  posbs1,
  posbs2,
  posbs3,
  posbs4,
  posbs5,
  posbs6,
  onClose
}) => {

function handleClickClose(){

    onClose()
}

  return (
    <div className="fixed w-full h-full top-0 left-0 flex justify-center content-center py-10 md:py-20">
      <div onClick={() => handleClickClose()} className="fixed bg-neutral-800 h-full w-full opacity-70 top-0 "></div>


      <section className="bg-[#f8fafc] z-60 relative md:w-3/12 rounded-2xl pb-10 w-5/6 ">
        <div className="flex flex-col ">
          <section
            style={{
              backgroundColor: color,
            }}
            className=" w-full h-100 px-20 self-center relative flex justify-center rounded-b-2xl rounded-lg py-10"
          >
            <img className="w-32 h-32 select-none" src={image}></img>

            <div className="absolute right-4 top-4 cursor-pointer hover:text-white duration-300" onClick={handleClickClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>

            </div>
          </section>
          <section className="py-5 flex justify-center content-center">
            <TypeBadge type={type} />
          </section>

          <section className=" px-7">
            <section className="flex justify-center">
              <p className="flex flex-col text-center px-3">
                <b>Height</b>

                <b>{(heightpok * 10).toFixed(2)} cm.</b>
              </p>

              <p className="flex flex-col text-center border-s-2 border-gray-400 px-3">
                <b>Weight</b> <b>{(weightpok * 0.1).toFixed(2)} kg</b>
              </p>
            </section>
         

            <p>
              <ProgressStats stat={pokstat1} value={posbs1} color={color}/>
            </p>

            <p>
            <ProgressStats stat={pokstat2} value={posbs2} color={color} />

  
            </p>

            <p>
            <ProgressStats stat={pokstat3} value={posbs3} color={color}/>

            </p>

            <p>
            <ProgressStats stat={pokstat4} value={posbs4} color={color}/>
            
            </p>

            <p>
            <ProgressStats stat={pokstat5} value={posbs5} color={color}/>
   
            </p>

            <p>
            <ProgressStats stat={pokstat6} value={posbs6} color={color} />

            </p>
          </section>


        </div>
      </section>
    </div>
  );
};

export default Description;
