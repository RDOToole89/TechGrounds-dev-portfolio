function userPolicy(type) {
  const users = {
    admin: () => 'This User is Admin!',
    client: () => 'This User is Client',
    salesman: () => 'This User is Salesman!',
    default: () => 'This User is Default',
  };

  return (user[type] || users.default)();
}

userPolicy();
userPolicy('admin');
