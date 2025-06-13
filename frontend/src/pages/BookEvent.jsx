function BookEvent() {
  return (
    <div className="container">
      <h2>Book Event</h2>
      <form className="form">
        <input type="text" placeholder="Full Name" />
        <input type="number" placeholder="No of Tickets" />
        <select>
          <option>Select Ticket Type</option>
          <option>VIP</option>
          <option>General</option>
        </select>
        <button>Proceed to Payment</button>
      </form>
    </div>
  );
}

export default BookEvent;
