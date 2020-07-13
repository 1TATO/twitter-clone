import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfielData,
  LocationIcon,
  CakeIcon,
  FollowAge,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfielData>
        <EditButton outlined>Editar perfil</EditButton>
        
        <h1>Jose Neto</h1>
        <h2>@TATO_CS</h2>

        <p>
          Developer at <a href="http://rocketseat.com.br">Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            RS, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 15 de junho de 1998
          </li>
        </ul>

        <FollowAge>
          <span>
            seguindo <strong>49</strong>
          </span>
          <span>
            <strong>1000 </strong> seguidores
          </span>
        </FollowAge>
      </ProfielData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
