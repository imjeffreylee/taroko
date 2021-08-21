import './styles/popup.scss';

interface Props {
  handlePopupClose: (status: boolean) => void;
}

const Popup = ({ handlePopupClose }: Props) => {
  return (
    <div className="popup-container">
      <div className="popup-form">
        <h1>Add Contact</h1>
        <div className="form-container">
          <form>
            <div className="full-name">
              <div className="fieldset-names">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" id="firstName" />
              </div>
              <div className="fieldset-names">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" id="lastName" />
              </div>
            </div>
            <div className="fieldset-others">
              <label htmlFor="job">Job: </label>
              <input type="text" name="job" id="job" />
            </div>
            <div className="fieldset-others">
              <label htmlFor="description">Description: </label>
              <textarea name="description" id="description" />
            </div>
          </form>
        </div>
        <div className="form-button-group">
          <button
            className="button"
            onClick={() => handlePopupClose(false)}
          >
            Save
          </button>
          &nbsp;
          <button
            className="button"
            onClick={() => handlePopupClose(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
