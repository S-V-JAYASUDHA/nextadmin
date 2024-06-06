"use client";
import styles from '@/app/ui/dashboard/orders/orders.module.css';

const OrdersPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const order = {
      orderId: formData.get('orderId'),
      customerName: formData.get('customerName'),
      bookTitle: formData.get('bookTitle'),
      orderDate: formData.get('orderDate'),
      status: formData.get('status'),
      quantity: formData.get('quantity'),
      totalPrice: formData.get('totalPrice'),
    };

    const newRow = document.createElement('tr');

    Object.values(order).forEach(value => {
      const newCell = document.createElement('td');
      newCell.textContent = value;
      newRow.appendChild(newCell);
    });

    const tableBody = document.getElementById('orderTableBody');
    tableBody.appendChild(newRow);
    form.reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Order ID" name="orderId" required />
          <input type="text" placeholder="Customer Name" name="customerName" required />
          <input type="text" placeholder="Book Title" name="bookTitle" required />
          <input type="date" placeholder="Order Date" name="orderDate" required />
          <select name="status" id="status" required>
            <option value="">Choose Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <input type="number" placeholder="Quantity" name="quantity" required />
          <input type="number" placeholder="Total Price" name="totalPrice" required />
          <button className={styles.button} type="submit">Submit</button>
        </form>
      </div>

      <div className={styles.tableContainer}>
        <h2 className={styles.title}>Orders</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Book Title</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody id="orderTableBody">
            {/* Orders will be dynamically inserted here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
