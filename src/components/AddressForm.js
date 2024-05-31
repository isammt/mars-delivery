import React, { useState } from 'react';

const AddressForm = ({ initialAddress, onSubmit }) => {
  const [address, setAddress] = useState(initialAddress || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Endereço (lote de quatro dígitos):
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          pattern="\d{4}"
          title="Deve ser um lote de quatro dígitos"
          required
        />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AddressForm;
