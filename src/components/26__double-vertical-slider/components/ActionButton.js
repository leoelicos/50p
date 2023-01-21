const ActionButton = ({ isUp, onClick }) => (
  <button
    className={`${isUp ? 'up' : 'down'}-button`}
    onClick={onClick}>
    <i className={`fas fa-arrow-${isUp ? 'up' : 'down'}`}></i>
  </button>
)

export default ActionButton
