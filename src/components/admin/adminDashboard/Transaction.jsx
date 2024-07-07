import { Box, Button, Menu, MenuItem, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getOrdersByStatusConfirmed, getOrdersByStatusPending, getOrdersByStatusRejected, updateStatusOrderConfirmed } from '../../../lib/service/orderService';
import AdminHeader from '../adminLayout/AdminHeader';
import Sidebar from '../adminLayout/Sidebar';

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [currentTab, setCurrentTab] = useState('pending'); // Initial tab value
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchTransactions(currentTab);
  }, [currentTab]);

  const fetchTransactions = async (tabValue) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      let response;
      switch (tabValue) {
        case 'pending':
          response = await getOrdersByStatusPending('', 1, 10, token);
          break;
        case 'confirm':
          response = await getOrdersByStatusConfirmed('', 1, 10, token);
          break;
        case 'reject':
          response = await getOrdersByStatusRejected('', 1, 10, token);
          break;
        default:
          throw new Error(`Unsupported tab value: ${tabValue}`);
      }

      console.log('Fetched transactions:', response.data);
      setTransactions(response.data);
      setFilteredTransactions(response.data); // Update both transactions and filtered transactions
    } catch (error) {
      console.error('Error fetching transactions:', error.message);
      // Handle error states as needed
    }
  };

  const handleTabChange = (tabValue) => {
    setCurrentTab(tabValue);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = transactions.filter(transaction =>
      transaction.orderCode.toLowerCase().includes(searchTerm)
    );
    setFilteredTransactions(filtered);
  };

  const handleDetailsClick = (event, transaction) => {
    setSelectedTransaction(transaction);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const confirmOrder = async (orderId) => {
    try {
      const token = localStorage.getItem('token');
      console.log(token);
      if (!token) {
        throw new Error('No token found');
      }

      console.log(`Sending request to confirm order with ID: ${orderId}`);
    console.log(`Token: ${token}`);
    
      const response = await updateStatusOrderConfirmed(orderId, token);
      console.log('Order confirmed:', response.data);

      // Update transactions list after confirming the order
      fetchTransactions(currentTab);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Error confirming order:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Error confirming order: No response received');
        console.error(error.request);
      } else {
        // Something else caused the error
        console.error('Error confirming order:', error.message);
      }
    }
  };

  const handleMenuItemClick = (option) => {
    setAnchorEl(null);
    switch (option) {
      case 'details':
        setIsModalOpen(true);
        break;
      case 'confirm':
        if (selectedTransaction) {
          confirmOrder(selectedTransaction.id);
        }
        break;
      case 'reject':
        // Add logic for delete
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-screen bg-white flex">
      <Sidebar />
      <main className="flex flex-col w-full overflow-auto">
        <header className="admin-header">
          <AdminHeader title="TRANSACTION" />
        </header>
        <style>
          {`
            .custom-button {
              color: black;
              background-color: #d3d3d3;
            }
            .custom-button.selected {
              background-color: #f4bbff;
            }
            .custom-button:hover {
              background-color: lightgray;
            }
          `}
        </style>
        <section className="flex flex-col px-6 pt-6 mt-4 bg-white border-t border-solid border-black border-opacity-30 max-md:pr-5 max-md:max-w-full">
          <div className="mx-4 max-md:mr-2.5 max-md:max-w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1.5 rounded-2xl border border-gray-300 focus:outline-none focus:border-pink-300 w-1/3"
              onChange={handleSearch}
            />
            <div className="flex space-x-4">
              <Button
                onClick={() => handleTabChange('pending')}
                className={`custom-button ${currentTab === 'pending' ? 'selected' : ''}`}
              >
                Pending
              </Button>
              <Button
                onClick={() => handleTabChange('confirm')}
                className={`custom-button ${currentTab === 'confirm' ? 'selected' : ''}`}
              >
                Confirm
              </Button>
              <Button
                onClick={() => handleTabChange('reject')}
                className={`custom-button ${currentTab === 'reject' ? 'selected' : ''}`}
              >
                Reject
              </Button>
            </div>
          </div>
          <TransactionTable transactions={filteredTransactions} onDetailsClick={handleDetailsClick} />
        </section>
      </main>

      {selectedTransaction && (
        <>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            <MenuItem onClick={() => handleMenuItemClick('details')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="material-icons">info</i>
                <span style={{ marginLeft: 8 }}>Details</span>
              </div>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('confirm')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="material-icons">check</i>
                <span style={{ marginLeft: 8 }}>Confirm</span>
              </div>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('reject')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="material-icons">cancel</i>
                <span style={{ marginLeft: 8 }}>Reject</span>
              </div>
            </MenuItem>
          </Menu>
          <Modal open={isModalOpen} onClose={handleCloseModal}>
            <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 1, width: '600px', mx: 'auto' }}>
              <Typography variant="h6">Transaction Details</Typography>
              <Typography variant="body1">Order Code: {selectedTransaction.orderCode}</Typography>
              <Typography variant="body1">Payment Method: {selectedTransaction.paymentMethod}</Typography>
              <Typography variant="body1">Create Date: {new Date(selectedTransaction.createDate).toLocaleDateString()}</Typography>
              <Typography variant="body1">Total Price: {selectedTransaction.totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Typography>
              <Typography variant="body1">User Name: {selectedTransaction.userInfo.userName}</Typography>
              {/* Add any other transaction details here */}
              <Button onClick={handleCloseModal} className="mt-2">Close</Button>
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
}

function TransactionTable({ transactions, onDetailsClick }) {
  return (
    <section className="flex flex-col items-start text-base font-medium tracking-tight text-center text-black max-md:flex-wrap max-md:pr-5">
      <div className="flex justify-between w-full px-2.5 py-2.5 bg-white">
        <div className="flex-1 flex justify-center items-center">
          <span>Order Code</span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span>Payment Method</span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span>Create Date</span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span>Total Price</span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span>User Name</span>
        </div>
        <div className="flex-1 flex justify-center items-center">

        </div>
      </div>
      <TransactionTableBody transactions={transactions} onDetailsClick={onDetailsClick} />
    </section>
  );
}

function TransactionTableBody({ transactions, onDetailsClick }) {
  return (
    <>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex justify-between w-full px-2.5 py-2.5 text-base tracking-tight text-black bg-white max-md:flex-wrap"
        >
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            {transaction.orderCode}
          </div>
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            {transaction.paymentMethod}
          </div>
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            {new Date(transaction.createDate).toLocaleDateString()}
          </div>
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            {transaction.totalPrice.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })}
          </div>
          <div className="flex-1 flex justify-center items-center text-center font-plus-jakarta break-words">
            {transaction.userInfo.userName}
          </div>
          <div className="flex-1 flex justify-center items-center font-plus-jakarta">
          <Button
              onClick={(event) => onDetailsClick(event, transaction)}
              className="bold-text px-3 text-center whitespace-nowrap rounded-2xl text-white bg-pink-300 border-2 border-solid border-white"
              auto
              flat
            >
              ...
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Transaction;
