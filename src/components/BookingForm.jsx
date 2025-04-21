import React, { useState } from 'react';

const foodItems = [
  'German Sausages',
  'Pretzels',
  'Schnitzel',
  'Bratwurst',
  'Potato Salad',
  'Black Forest Cake',
  'Apple Strudel',
  'Beer (Non-Alcoholic)',
];

const OrderingForm = ({ onSubmit, isInline = false }) => {
  const [selectedFood, setSelectedFood] = useState('');
  const [customFood, setCustomFood] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      food: selectedFood || customFood,
      quantity,
      additionalNotes,
      phoneNumber,
    };

    // Format the WhatsApp message
    const message = `Hello German Point👋, I would like to place an order for the following:

Food Item: ${orderData.food}
Quantity: ${orderData.quantity}
Notes: ${orderData.additionalNotes}

Contact Number: ${orderData.phoneNumber}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your business WhatsApp number (remove any +, -, or spaces)
    const whatsappNumber = '+254748163492';

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/254748163492 ?text=${encodedMessage}`, '_blank');

    // Optional: call the onSubmit prop if needed
    if (onSubmit) {
      onSubmit(orderData);
    }

    // Scroll to the top of the order section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-blue-700">Select Food Item</label>
        <select
          value={selectedFood}
          onChange={(e) => setSelectedFood(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border"
          required
        >
          <option value="">-- Select a food item --</option>
          {foodItems.map((food) => (
            <option key={food} value={food}>{food}</option>
          ))}
        </select>
        <p className="mt-1 text-sm text-blue-700">Or specify your own:</p>
        <input
          type="text"
          value={customFood}
          onChange={(e) => setCustomFood(e.target.value)}
          placeholder="Custom food request"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-700">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-700">Additional Notes</label>
        <textarea
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
          placeholder="Any special requests or instructions"
          rows={3}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-700">Your WhatsApp Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="e.g +254748163492"
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
        <p className="mt-1 text-xs text-gray-500">We'll contact you on WhatsApp to confirm your order</p>
      </div>

      <div className="flex justify-end space-x-3">
        {!isInline && (
          <button
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Order via WhatsApp
        </button>
      </div>
    </form>
  );
};

export default OrderingForm;