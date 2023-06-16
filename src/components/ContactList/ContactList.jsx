import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ContactList/ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact} from 'redux/contactsApi';


const ContactList =()=>{
const dispatch = useDispatch()
const visibleContact = useSelector(selectVisibleContacts);
  
return(
    <>
    {visibleContact.length > 0 &&
       (
         <ul className={styles.list}>
        {visibleContact.map(({id, name, phone}) => (<li key={id} className={styles.item}>
       {name}:<span>{phone}</span> 
       <button onClick={()=> dispatch(deleteContact(id))} className={styles.button}>Delete</button>
        </li> )) }
    </ul>
 )} 
    
    </>
  
)
}

ContactList.propTypes ={
     visibleContact: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func.isRequired,
}
export default ContactList