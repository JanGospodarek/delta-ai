import React from 'react';
import AddKeyForm from './AddKeyForm';

const AddKey = () => {
  return (
    <>
      <h2 className="text-xl text-center mt-3">Nie wykryliśmy klucza API!</h2>
      <div className="mx-7 mt-3">
        <AddKeyForm />
      </div>
    </>
  );
};
export default AddKey;
