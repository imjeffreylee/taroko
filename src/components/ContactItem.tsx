import './styles/contactItem.css';
import PersonIcon from '@material-ui/icons/Person';

interface Props {
  firstName: string;
  lastName: string;
  job: string;
  description: string;
}

const ContactItem = ({
  firstName, lastName, job, description,
}: Props) => {

  return (
    <div className="contact-item-container">
      <div className="contact-info">
        <div className="contact-info__icon-and-name">
          <PersonIcon style={{ width: '2em', height: '2em' }} />
          <span>{firstName} {lastName}</span>
        </div>
        <p>Job: {job}</p>
        <p>Description: {description}</p>
      </div>
      <div className="button-group">
        <button className="button contact-item-button">Edit</button>
        <button className="button contact-item-button">Delete</button>
      </div>
    </div>
  )
}

export default ContactItem
