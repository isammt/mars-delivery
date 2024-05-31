import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(to bottom, #007bff, #0056b3);
  padding: 20px;
`;

const Menu = styled.nav`
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Home = () => {
  return (
    <Container>
      <h1>Bem-vindo ao Sistema de Delivery Interplanetário da SpaceX</h1>
      <Menu>
        <ul>
          <MenuItem>
            <StyledLink to="/add">Cadastrar Endereço</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/edit">Editar Endereço</StyledLink>
          </MenuItem>
        </ul>
      </Menu>
    </Container>
  );
};

export default Home;
