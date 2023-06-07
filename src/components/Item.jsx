import PropTypes from 'prop-types'

export default function Item ({
  description,
  amount,
  isSelected,
  onChangeDescription,
  onChangeAmount,
  onDelete,
  onSelect,
}) {
  return (
    <li>
      <input
        type="text"
        value={description}
        onChange={onChangeDescription}
      />
      <input
        type="number"
        value={amount}
        onChange={onChangeAmount}
      />
      <button onClick={onDelete}>X</button>
      <button onClick={onSelect}>
        {isSelected ? 'Desselecionar' : 'Selecionar'}
      </button>
    </li>
  )
}

Item.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  onChangeAmount: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}