import React, { useState } from 'react';
import styled from 'styled-components';

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

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
`;

const AddAddress = () => {
  const [addresses, setAddresses] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const addressData = {
      name: formData.get('name'),
      number: formData.get('number')
    };

    // Adiciona o novo endereço ao estado local
    setAddresses([...addresses, addressData]);

    // Salva os endereços no localStorage
    localStorage.setItem('addresses', JSON.stringify([...addresses, addressData]));

    event.target.reset();
  };

  return (
    <FormContainer>
      <FormTitle>Adicione seu Lote no SpaceX</FormTitle>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Nome</Label>
          <Input type="text" id="name" name="name" placeholder="Nome" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="number">Qual o lote do seu endereço?</Label>
          <TextArea id="number" name="number" placeholder="Digite os 4 números do seu lote" maxLength={4} />
        </InputGroup>
        <SubmitButton type="submit">Salvar Lote</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default AddAddress;
