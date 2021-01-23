import { Component } from 'react';
import styles from './form.module.css'


class ContactForm extends Component{
    state = {
        name: '',
        number: ''
    }

 //метод который обновляет состояние
    hendleNameChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({[name]: value})
    }



    //метод который Submit form
    hendleSubmit = event => {
        event.preventDefault();
    
    /*   const dataRepeat = this.props.contacts.filter(
      contact => contact.name === event.target.elements[0].value,
    );
    if (dataRepeat.length) {
      return alert(`${dataRepeat[0].name} is already in contacts`);
    }
        */
    
        
        this.props.onSubmit(this.state);
        
        this.reset();
    }

   //очистка форми
    reset = () => {
        this.setState({ name: '', number: '' });
    }


   


    render() {
        
        return (
            <>
                <form onSubmit={this.hendleSubmit } >
                    <label className={styles.label}> Name 
                        <input
                            className={styles.input}
                            name="name"
                            type='text'
                            value={this.state.name}
                            onChange={this.hendleNameChange} />
                    </label>

                    <label className={styles.label}> Number 
                        <input
                            className={styles.input}
                            name="number"   
                            type='tel'
                            value={this.state.number}
                            onChange={this.hendleNameChange} />
                    </label>
                    <button type='submit' >Add contact</button>
                </form>
                
            </>
    )
}



}

export default ContactForm;