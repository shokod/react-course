import Backdrop from "./Backdrop";
import { useState } from "react";
import Modal from "./Modal";

function LyricCard (props){
    const [modalIsOpen, setModalIsOpen] = useState(false);
        
    function deleteHandler(){
        setModalIsOpen(true);
    } 
    
    function closeModalHandler(){
        setModalIsOpen(false);
    }
    return (
        <div>
            <div className="card">
                <h3 className="actions"> {props.text}</h3>
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
            
            
        </div>
    );
}
export default LyricCard;