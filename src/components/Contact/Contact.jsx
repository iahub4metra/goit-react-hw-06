import { IoCall, IoPerson } from "react-icons/io5"
import css from "./Contact.module.css"
const Contact = ({contact, onDelete}) => {
    return (
        <div className={css.mainContainerContact}>
            <div>
                <div className={css.containerWithData}>
                    <IoPerson className={css.iconContact} /> <span>{contact.name}</span>
                </div>
                <div className={css.containerWithData}>
                    <IoCall className={css.iconContact} /> <span>{contact.number}</span>
                </div>
            </div>
            <button onClick={()=> onDelete(contact.id)} className={css.btnDel}>Delete</button>
        </div>
    )
}
export default Contact