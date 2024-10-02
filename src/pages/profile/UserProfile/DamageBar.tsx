// DamageBar.tsx
import React from 'react';
import styled from '@emotion/styled';
import Tooltip from '@mui/material/Tooltip';

interface DamageBarProps {
  value: number; // Valor inteiro a ser exibido
  maxValue: number; // Valor máximo para calcular a porcentagem
}

const Container = styled.div`
  width: 100px;
  background-color: #2b2a2a;
  height: 15px;
  position: absolute; /* Para posicionar o texto */
  overflow: hidden;
  left: 300px;
  bottom: 30px;
`;

const Filled = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  background-color: #e70505; /* Cor do preenchimento (vermelho) */
  height: 100%;
  transition: width 0.3s ease-in-out; /* Transição suave */
`;

const Text = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fdfdfd; /* Cor do texto */
  font-size: 1rem;
`;

const DamageBar: React.FC<DamageBarProps> = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100; // Calcula a porcentagem com base no valor máximo

  return (
    <Tooltip title={`Dano causado a campeões: ${value}`} arrow>
      <Container>
        <Filled percentage={percentage} />
        <Text>{value}</Text> {/* Texto centralizado exibindo o número inteiro */}
      </Container>
    </Tooltip>
  );
};

export default DamageBar;
