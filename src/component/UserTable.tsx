import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import { useUserContext } from "../utils/UserContext";
import { Link } from "react-router-dom";
interface User {
  id: number;
  username: string;
  email: string;
  address: string;
  phoneNumber: string;
  desigination: string;
}

const UserTable: React.FC = () => {
  const { state, dispatch } = useUserContext();
  const { users } = state;
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [editedEmail, setEditedEmail] = useState<string>("");
  const [editedAddress, setEditedAddress] = useState<string>("");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState<string>("");
  const [editedDesigination, setEditdDesigination] = useState<string>("");
  const handleEdit = (id: number) => {
    setEditUserId(id);

    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
      setEditedEmail(userToEdit.email);
      setEditedAddress(userToEdit.address);
      setEditedPhoneNumber(userToEdit.phoneNumber);
      setEditdDesigination(userToEdit.desigination);
    }
  };

  const handleSaveEdit = () => {
    if (editUserId === null) return;

    const selectedUser = users.find((user) => user.id === editUserId);

    if (!selectedUser) return;

    const updatedUser: User = {
      id: editUserId,
      username: selectedUser.username,
      email: editedEmail,
      address: editedAddress,
      phoneNumber: editedPhoneNumber,
      desigination: editedDesigination,
    };

    dispatch({
      type: "EDIT_USER",
      payload: updatedUser,
    });

    setEditUserId(null);
    setEditedEmail("");
    setEditedAddress("");
  };

  const handleCancelEdit = () => {
    setEditUserId(null);
    setEditedEmail("");
    setEditedAddress("");
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  return (
    <div>
      {" "}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Desigination</TableCell>

              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>
                  {editUserId === user.id ? (
                    <>
                      <TextField
                        value={editedAddress}
                        onChange={(e) => setEditedAddress(e.target.value)}
                      />
                      <Button onClick={handleSaveEdit}>Save</Button>
                      <Button onClick={handleCancelEdit}>Cancel</Button>
                    </>
                  ) : (
                    user.address
                  )}
                </TableCell>
                <TableCell>
                  {editUserId === user.id ? (
                    <>
                      <TextField
                        value={editedEmail}
                        onChange={(e) => setEditedEmail(e.target.value)}
                      />
                      <Button onClick={handleSaveEdit}>Save</Button>
                      <Button onClick={handleCancelEdit}>Cancel</Button>
                    </>
                  ) : (
                    user.email
                  )}
                </TableCell>
                <TableCell>
                  {editUserId === user.id ? (
                    <>
                      <TextField
                        value={editedPhoneNumber}
                        onChange={(e) => setEditedPhoneNumber(e.target.value)}
                      />
                      <Button onClick={handleSaveEdit}>Save</Button>
                      <Button onClick={handleCancelEdit}>Cancel</Button>
                    </>
                  ) : (
                    user.phoneNumber
                  )}
                </TableCell>
                <TableCell>
                  {editUserId === user.id ? (
                    <>
                      <TextField
                        value={editedDesigination}
                        onChange={(e) => setEditdDesigination(e.target.value)}
                      />
                      <Button onClick={handleSaveEdit}>Save</Button>
                      <Button onClick={handleCancelEdit}>Cancel</Button>
                    </>
                  ) : (
                    user.desigination
                  )}
                </TableCell>
                <TableCell>
                  {editUserId === user.id ? null : (
                    <>
                      <Button onClick={() => handleEdit(user.id)}>Edit</Button>
                      <Button onClick={() => handleDelete(user.id)}>
                        Delete
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button component={Link} to="/">
        back to login
      </Button>
    </div>
  );
};

export default UserTable;
