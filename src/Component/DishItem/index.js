import './index.css'

const DishItem = ({
  dishDetails,
  cartItems,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishimage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const onIncrementQuantity = () => addItemToCart(dishDetails)
  const onDecrementQuantity = () => removeItemFromCart(dishDetails)

  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }

  const renderControllerButton = () => (
    <div className="controller-container d-flex align-items-center bg-success">
      <button className="button" type="button" onClick={onDecrementQuantity}>
        -
      </button>
      <p className="quantity">{getQuantity()}</p>
      <button className="button" type="button" onClick={onIncrementQuantity}>
        +
      </button>
    </div>
  )

  return (
    <li className="mb-3 p-3 dish-item-container d-flex">
      <div
        className={`veg-border ${dishType === 1 ? 'non-veg-border' : ''} me-3`}
      >
        <div className={`veg-round ${dishType === 1 ? 'non-ved-round' : ''}`} />
      </div>
      <div className="dish-details-container">
        <h1 className="dish-name">{dishName}</h1>
        <p className="dish-currency-price">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dish-description">{dishDescription}</p>
        {dishAvailability && renderControllerButton()}
        {!dishAvailability && (
          <p className="not-availability=text text-danger">Not available</p>
        )}
        {addonCat.length !== 0 && (
          <p className="addon-availability-text">Customization available</p>
        )}
      </div>

      <p className="dish-calories text-warning">{dishCalories} calories</p>
      <img className="dish-image" alt={dishName} src={dishimage} />
    </li>
  )
}

export default DishItem
