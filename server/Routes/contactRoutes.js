import express from 'express';
import { 
    createContact, 
    getContacts, 
    getContactById, 
    updateContact, 
    deleteContact 
} from '../controller/contactController.js';

const router = express.Router();

// Create a new contact
router.post('/contacts', createContact);

// Get all contacts
router.get('/contacts', getContacts);

// Get a single contact by ID
router.get('/contacts/:id', getContactById);

// Update a contact by ID
router.put('/contacts/:id', updateContact);

// Delete a contact by ID
router.delete('/contacts/:id', deleteContact);

export default router;
