// REST Architecture => Convention

// GET https://vidly.com/api/customers
// [{id: 1, name: 'Robin'}, {id: 2, name: 'Jens}] => get all customers

// GET https://vidly.com/api/customers/1
// {id: 1, name: 'Robin'} => get a single customer

// PUT https://vidly.com/api/customers/1
// {id: 1, name: 'Roibin} => update a single customer => include customer object in the body of the request

// DELETE https://vidly.com/customers/1
// delete a single customer => no need to send the customer object in the body of the

// POST https://vidly.com/customers
// create a customer => include customer data in the body of the request
