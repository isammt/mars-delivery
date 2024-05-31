import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import AddressForm from '../components/AddressForm';

const FormContainer = styled.div`
  max-width: 450px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const EditAddress = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialName, setInitialName] = useState('');
  const [initialAddress, setInitialAddress] = useState('');

  useEffect(() => {
    // Recupera os dados do endereço do localStorage usando o id passado pelos parâmetros da URL
    const savedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    const address = savedAddresses.find((address) => address.id === id);
    if (address) {
      setInitialName(address.name);
      setInitialAddress(address.number);
    }
  }, [id]);

  const handleEditAddress = (updatedAddress) => {
    console.log('Endereço atualizado:', updatedAddress);
    navigate('/');
  };

  return (
    <FormContainer>
      <FormTitle>Editar Endereço</FormTitle>
      <AddressForm
        initialName={initialName}
        initialAddress={initialAddress}
        onSubmit={handleEditAddress}
      />
    </FormContainer>
  );
};

export default EditAddress;
