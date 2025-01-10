import React from 'react';
import HomeApiAddForm from './HomeApiAddForm';

const HomeApi = () => {
  const isKeyPresent = false;
  return (
    <div className="mx-7 mt-8">
      {!isKeyPresent ? (
        <HomeApiAddForm />
      ) : (
        <p>Klucz API Gemini został dodany pomyślnie</p>
      )}
    </div>
  );
};
export default HomeApi;
