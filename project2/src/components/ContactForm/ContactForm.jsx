import styles from './Contact.module.css';
import Button from "../Button/Button";

const ContactForm = () => {
    return <section className={styles.container}>
        <div className={styles.contact_form}>
            <Button text='Via Support Chat' icon={<MdMessage fontSize={'24px'}/>} />
            <Button text='Via Call' icon={<MdPhone/>} />
        </div>
        <div className={styles.contact_images}></div>
    </section>
};

export default ContactForm;
    