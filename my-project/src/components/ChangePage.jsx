import Button from "./Button";
export default function ChangePage({updateLoad,prevPage,nextPage}){

    function next() {
        updateLoad((prev) => {
          return {
            ...prev,
            current: nextPage,
          };
        });
      }
    
      function previous() {
      updateLoad((prev) => {
          return {
            ...prev,
            current: prevPage,
          };
        });
      }

return(


    <section className="w-100 flex justify-center gap-4  py-10">
    <Button
      click={previous}
      condition={prevPage}
      isPrevButton={true}
    ></Button>
    <Button
      click={next}
      condition={nextPage}
      isNextButton={true}
    ></Button>
  </section>
)

}