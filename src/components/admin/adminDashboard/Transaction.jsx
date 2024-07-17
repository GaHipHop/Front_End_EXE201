import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Button, Menu, MenuItem, Modal, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getOrdersByStatusConfirmed, getOrdersByStatusPending, getOrdersByStatusRejected, updateStatusOrderConfirmed, updateStatusOrderReject } from '../../../lib/service/orderService';
import AdminHeader from '../adminLayout/AdminHeader';
import Sidebar from '../adminLayout/Sidebar';

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [currentTab, setCurrentTab] = useState('pending'); // Initial tab value
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchTransactions(currentTab, currentPage);
  }, [currentTab, currentPage]);

  const fetchTransactions = async (tabValue, page) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      let response;
      switch (tabValue) {
        case 'pending':
          response = await getOrdersByStatusPending('', page, 10, token);
          break;
        case 'confirm':
          response = await getOrdersByStatusConfirmed('', page, 10, token);
          break;
        case 'reject':
          response = await getOrdersByStatusRejected('', page, 10, token);
          break;
        default:
          throw new Error(`Unsupported tab value: ${tabValue}`);
      }

      const data = response.data;
      console.log('Fetched transactions:', data);
      setTransactions(data);
      setFilteredTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error.message);
      toast.error('Error fetching transactions: ' + error.message); // Hiển thị thông báo lỗi
    }
  };

  const handleTabChange = (tabValue) => {
    setCurrentTab(tabValue);
    setCurrentPage(1); // Reset page when changing tab
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
      if (!token) {
        throw new Error('No token found');
      }

      const response = await updateStatusOrderConfirmed(orderId, token);
      console.log('Order confirmed:', response.data);

      // Update transactions list after confirming the order
      fetchTransactions(currentTab, currentPage);
      toast.success('Order confirmed successfully'); // Hiển thị thông báo thành công
    } catch (error) {
      console.error('Error confirming order:', error.message);
      if (error.response) {
        toast.error(`${error.response.data.message}`);
      }
    }
  };

  const rejectOrder = async (orderId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await updateStatusOrderReject(orderId, token);
      console.log('Order rejected:', response.data);

      // Update transactions list after rejecting the order
      fetchTransactions(currentTab, currentPage);
      toast.success('Order rejected successfully'); // Hiển thị thông báo thành công
    } catch (error) {
      console.error('Error rejecting order:', error.message);
      if (error.response) {
        toast.error(`${error.response.data.message}`);
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
        if (selectedTransaction) {
          rejectOrder(selectedTransaction.id);
        }
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
            .search-and-tabs {
              margin-bottom: 20px; /* Adjust the value to create the desired space */
            }
          `}
        </style>
        <section className="flex flex-col px-6 pt-6 mt-4 bg-white border-t border-solid border-black border-opacity-30 max-md:pr-5 max-md:max-w-full">
          <div className="search-and-tabs mx-4 max-md:mr-2.5 max-md:max-w-full flex justify-between items-center">
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
          <div className="pagination mx-4 mt-4 flex justify-between items-center">
            <Button
              onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span>Page {currentPage}</span>
            <Button
              onClick={() => setCurrentPage(prevPage => prevPage + 1)}
            >
              Next
            </Button>
          </div>
        </section>
      </main>

      {selectedTransaction && (
        <>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} style={{borderRadius: 8}}>
            <MenuItem onClick={() => handleMenuItemClick('details')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <InfoIcon />
                <span style={{ marginLeft: 8 }}>Details</span>
              </div>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('confirm')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon />
                <span style={{ marginLeft: 8 }}>Confirm</span>
              </div>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('reject')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CancelIcon />
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
              <Typography variant="body2">Order Details:</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Image</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedTransaction.orderDetails.map((detail) => (
                    <TableRow key={detail.id}>
                      <TableCell>{detail.productName}</TableCell>
                      <TableCell>{detail.colorName}</TableCell>
                      <TableCell>{detail.orderQuantity}</TableCell>
                      <TableCell>{detail.orderPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</TableCell>
                      <TableCell>
                        <img src={detail.image} alt={detail.productName} style={{ width: '50px', height: '50px' }} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button onClick={handleCloseModal} className="mt-2">Close</Button>
            </Box>
          </Modal>
        </>
      )}

      <ToastContainer />
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
          <span>Action</span>
        </div>
      </div>
      <TransactionTableBody transactions={transactions} onDetailsClick={onDetailsClick} />
    </section>
  );
}

function TransactionTableBody({ transactions = [], onDetailsClick }) {
  return (
    <>
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
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
              >
                <strong style={{color:'black'}}>...</strong>
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center w-full p-5">
          No transactions found.
        </div>
      )}
    </>
  );
}

export default Transaction;
