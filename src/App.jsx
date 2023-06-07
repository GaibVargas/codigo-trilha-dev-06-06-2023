import { useRef, useState } from 'react'
import Item from './components/Item'

export default function App() {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [items, setItems] = useState([])
  // const [selectedItems, setSelectedItems] = useState([])
  const [selectedIds, setSelectedIds] = useState([])
  const id = useRef(0)
  const totalItems = items.length

  const addItem = () => {
    const newItem = { id: id.current, description, amount }
    setItems([...items, newItem])
    setDescription('')
    setAmount(0)
    id.current++
  }

  const handleDescriptionChange = (id, value) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, description: value }
      }
      return item
    })
    setItems(updatedItems)
  }

  const handleAmountChange = (id, value) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, amount: value }
      }
      return item
    })
    setItems(updatedItems)
  }

  const deleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
  }

  // const handleItemSelect = (itemId) => {
  //   const selectedItem = items.find((item) => item.id === itemId);
  //   if (selectedItems.includes(selectedItem)) {
  //     setSelectedItems(selectedItems.filter((item) => item.id !== itemId));
  //   } else {
  //     setSelectedItems([...selectedItems, selectedItem]);
  //   }
  // }

  // const isSelected = (itemId) => {
  //   return selectedItems.includes(items.find(item => item.id === itemId))
  // }

  const handleItemSelect = (itemId) => {
    if (selectedIds.includes(itemId)) {
      setSelectedIds(selectedIds.filter(id => id !== itemId))
    } else {
      setSelectedIds([...selectedIds, itemId])
    }
  }

  const isSelected = (itemId) => selectedIds.includes(itemId)

  const selectedItems = items.filter(item => selectedIds.includes(item.id))

  return (
    <>
      <h1>Total de itens: {totalItems}</h1>
      <form>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(parseInt(e.target.value, 10))}
        />
        <button type="button" onClick={addItem}>+</button>
      </form>
      <ul>
        {items.map(item => (
          <Item
            key={item.id}
            description={item.description}
            amount={item.amount}
            isSelected={isSelected(item.id)}
            onChangeDescription={e => handleDescriptionChange(item.id, e.target.value)}
            onChangeAmount={e => handleAmountChange(item.id, parseInt(e.target.value, 10))}
            onDelete={() => deleteItem(item.id)}
            onSelect={() => handleItemSelect(item.id)}
          />
        ))}
      </ul>
      <h2>Itens selecionados:</h2>
      { selectedItems.length > 0 ? (
        <ul>
          {selectedItems.map((item) => (
            <li key={item.id}>
              {item.description}: {item.amount}
            </li>
          ))}
        </ul>
      ) : (null) }
    </>
  )
}
