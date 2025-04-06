import React from 'react';
import styled from 'styled-components';

const IconButton3D = ({ svg, url, title = "Link externo" }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <StyledWrapper onClick={handleClick} aria-label={title} title={title}>
      <div className="checkmark">
        <div className="icon-wrapper">{svg}</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  user-select: none;

  .checkmark {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #0a0f16;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    /* Efecto 3D SALIDO por defecto */
    box-shadow:
      8px 8px 20px rgba(0, 0, 0, 0.7),
      -6px -6px 12px rgba(255, 255, 255, 0.05),
      inset -2px -2px 2px rgba(255, 255, 255, 0.06),
      inset 2px 2px 3px rgba(0, 0, 0, 0.5);
  }

  

  .checkmark:hover {
    /* Efecto 3D HUNDIDO */
    box-shadow:
      inset 6px 6px 12px rgba(0, 0, 0, 0.7),
      inset -4px -4px 8px rgba(255, 255, 255, 0.06),
      0px 0px 0px rgba(0, 0, 0, 0); /* Elimina la sombra exterior */
  }

  .checkmark:hover .icon-wrapper svg {
    fill: url(#iconGradient);
  }

  .checkmark:active {
    box-shadow:
      inset 8px 8px 14px rgba(0, 0, 0, 0.8),
      inset -2px -2px 4px rgba(255, 255, 255, 0.05);
  }
`;

export default IconButton3D;
