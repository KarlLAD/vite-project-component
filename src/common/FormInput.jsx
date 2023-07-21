/* Je crée un composant FormInput qui va me permettre de récupérer les données du formulaire*/
// J'importe les hooks dont j'ai besoin
// J'importe le hook useDispatch qui va me permettre de dispatcher les données dans le store
import { useDispatch } from "react-redux"
// J'importe l'action addStagiaire qui va me permettre d'ajouter un stagiaire dans le store
import { addStagiaire } from "../redux"

// Je crée un composant FormInput qui va me permettre de récupérer les données du formulaire
const FormInput = () => {
  // Je crée une constante dispatch qui va me permettre de dispatcher les données dans le store
  const dispatch = useDispatch();

  // Je crée une fonction handleSubmit qui va me permettre de récupérer les données du formulaire
  const handleSubmit = (event) => {
    // Je récupère l'événement submit
    event.preventDefault()

    // Destruction de l'objet event
    const { prenom, note  } = event.target
    // Le console.log me permet de vérifier que je récupère bien les données du formulaire 
    console.log(
      // Je crée un objet qui va contenir les données du formulaire
      {
        // Je récupère les données du formulaire
        prenom: prenom.value,
        // Je converti la note en nombre
        note: Number(note.value)
      }
    );
    // Je crée un objet qui va contenir les données du formulaire
    const infoStagiaire = {
      id: Date.now(),
      prenom : prenom.value,
      note : note.value
    }
    // Je'envoi les données du formulaire dans le store
    dispatch(addStagiaire(infoStagiaire));
    
    console.log("infoStagiaire", infoStagiaire);
  }

// Je retourne le formulaire
  return (

    <div className="navbar bg-base-100">
      <form onSubmit={handleSubmit}>
        <div className="navbar-start">
          <input type="text" placeholder="Note du stagiaire"
            name="prenom"
            className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <input type="text" placeholder="Ajouter un Stagiaire"
              name="note"
              className="input input-bordered w-24 md:w-auto" />
          </div>

        </div>
        <div className="navbar-end">
          <button className='btn'>Ajouter</button>
        </div>
      </form>
    </div>


  )
}

export default FormInput
