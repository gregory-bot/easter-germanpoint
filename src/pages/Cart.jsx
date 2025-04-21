import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const handleWhatsAppOrder = () => {
    const message = `Hi🙂 I would like to order the following items from German Point restaurant:\n\n${cartItems
      .map(
        (item) =>
          `${item.title} - Quantity: ${item.quantity}, Price: Ksh ${item.price}`
      )
      .join('\n')}\n\nTotal Price: Ksh ${cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254798363800?text=${encodedMessage}`, '_blank');
  };

  const handleEmailOrder = () => {
    const subject = 'New Order from German Point Restaurant';
    const body = `Order Details:\n\n${cartItems
      .map(
        (item) =>
          `${item.title} - Quantity: ${item.quantity}, Price: Ksh ${item.price}`
      )
      .join('\n')}\n\nTotal Price: Ksh ${cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )}`;

    window.location.href = `mailto:germanpoint28@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div
      className="min-h-screen bg-gray-50 pt-20 pb-10"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-black" style={{ fontFamily: 'Courier New, monospace' }}>
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-blue-600">Your cart is empty🙂</p>
          </div>
        ) : (
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col items-center py-4 border-b">
                <div className="relative w-32 h-32 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute top-0 left-0 w-full h-full object-contain rounded"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-sm text-blue-600">Price: Ksh {item.price}</p>
                  <p className="text-sm text-blue-600">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="mt-6 pt-6 border-t">
              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Order via WhatsApp</span>
                </button>

                <button
                  onClick={handleEmailOrder}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Order via Email</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;