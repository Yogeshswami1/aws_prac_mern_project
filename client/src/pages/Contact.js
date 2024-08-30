import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';

const Contact = () => {
    const [contacts, setContacts] = useState([]);
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
    const [editingId, setEditingId] = useState(null);
    const backendUrl = process.env.REACT_APP_BACKEND_URL;


    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/contacts`);
            setContacts(response.data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            // Update contact
            try {
                const response = await axios.put(`${backendUrl}/api/contacts/${editingId}`, formState);
                setContacts(contacts.map(contact => (contact._id === editingId ? response.data : contact)));
                setEditingId(null);
                setFormState({ name: '', email: '', phone: '', message: '' });
            } catch (error) {
                console.error('Error updating contact:', error);
            }
        } else {
            // Create contact
            try {
                const response = await axios.post(`${backendUrl}/api/contacts`, formState);
                setContacts([...contacts, response.data]);
                setFormState({ name: '', email: '', phone: '', message: '' });
            } catch (error) {
                console.error('Error creating contact:', error);
            }
        }
    };

    const handleEdit = (contact) => {
        setEditingId(contact._id);
        setFormState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            message: contact.message
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:9000/api/contacts/${id}`);
            setContacts(contacts.filter(contact => contact._id !== id));
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Phone',
                accessor: 'phone',
            },
            {
                Header: 'Message',
                accessor: 'message',
            },
            {
                Header: 'Actions',
                Cell: ({ row }) => (
                    <div>
                        <button onClick={() => handleEdit(row.original)}>Edit</button>
                        <button onClick={() => handleDelete(row.original._id)}>Delete</button>
                    </div>
                )
            }
        ],
        []
    );

    const data = React.useMemo(() => contacts, [contacts]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                />
                <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                ></textarea>
                <button type="submit">{editingId ? 'Update Contact' : 'Add Contact'}</button>
            </form>

            <table {...getTableProps()} style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold' }}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} style={{ borderBottom: 'solid 1px gray' }}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()} style={{ padding: '10px', borderBottom: 'solid 1px gray', background: 'papayawhip' }}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Contact;
