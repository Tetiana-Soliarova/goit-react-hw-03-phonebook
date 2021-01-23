import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={styles.item} key={id}>
      <p>
        {name}: {number}{" "}
      </p>

      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
