import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import { Table } from "react-bootstrap";
import swal from "sweetalert";

import {
  GetOwnBalance,
  SendTransaction,
} from "./Web3Client";

var TransactionObject = {
	blockHash: "",
	blockNumber: "",
	contractAddress: "",
	cumulativeGasUsed: "",
	from: "",
	gasUsed: "",
	logs: "",
	logsBloom: "",
	status: "",
	to: "",
	transactionHash: "",
};

function App() {
	const [balance, setBalance] = useState(0);
	const [show, setShow] = useState(false);
	function fetchBalance() {
		GetOwnBalance()
			.then(value => {
				setBalance(value);
				console.log("Final Balance : " + value);
			});
	}

	function finalTransaction(e) {
		e.preventDefault();
		SendTransaction()
			.then(value => {
				console.log("Transaction Hash : " + value.blockHash);
				TransactionObject.blockHash = value.blockHash;
				TransactionObject.blockNumber = value.blockNumber;
				TransactionObject.contractAddress = value.contractAddress;
				TransactionObject.cumulativeGasUsed = value.cumulativeGasUsed;
				TransactionObject.from = value.from;
				TransactionObject.gasUsed = value.gasUsed;
				TransactionObject.logs = value.logs;
				TransactionObject.logsBloom = value.logsBloom;
				TransactionObject.status = value.status;
				TransactionObject.to = value.to;
				TransactionObject.transactionHash = value.transactionHash;
				setShow(true);
				swal("Congratulations! 🎉", "Transaction is successful", "success");
			}, (err) => {
				console.log(err);
			});
		
		};

	return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <p>Your balance is {balance}</p>
        <Button onClick={fetchBalance}>Refresh balance</Button>
      </div>
      <br></br>
      <Form>
        <Form.Group className="mb-3" controlId="to_Address">
          <Form.Label>To</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
            Type the account address to which money needs to be sent.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="valueAmount">
          <Form.Label>Value</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
            Type the amount in Wei that you want to send.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={finalTransaction}>
          Submit
        </Button>
      </Form>

      <br></br>
      <br></br>
      {show ? (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Parameters</th>
                <th>Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Block Hash</td>
                <td>{TransactionObject.blockHash}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Block Number</td>
                <td>{TransactionObject.blockNumber}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Cumulative Gas Used</td>
                <td>{TransactionObject.cumulativeGasUsed}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Sender</td>
                <td>{TransactionObject.from}</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Gas Used</td>
                <td>{TransactionObject.gasUsed}</td>
              </tr>
              <tr>
                <td>6</td>
                <td>To(Receiver)</td>
                <td>{TransactionObject.to}</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Transaction Hash</td>
                <td>{TransactionObject.transactionHash}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      ) : null}
    </div>
  );
}

export default App;
