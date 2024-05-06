export default function Modal({name,des,tec}) {
  const open = () =>{
    const doc = document.getElementById(`my_modal_`+name);
 
    return doc.showModal();
   }

  return (
    <>
    <button className="btn btn-xs btn-outline w-1/2 mb-4 lg:mb-4" onClick={()=> open() }>Ver detalles</button>
    <dialog id={`my_modal_`+name} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="py-4 text-base"><strong className="text-lg">Descripcion:</strong> {des}</p>
        <p>Tecnologias implementadas</p>
        <p>| {tec.map(item => item[0].concat(" | "))}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    </>
  );
}
