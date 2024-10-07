import styled from '@emotion/styled';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { useModal } from '../../../hooks/useModal'
import { DetailsModal } from './DetailsModal';

interface Character {
    name: string;
    description: string;
    comics: { items: [{ name: string, resourceURI: string }] };
    urls: [{type: string, url: string}];
    thumbnail: { path: string, extension: string }
}

interface characterProps {
    id: number,
    name: string,
    thumbnail: string,
    character: Character
}

const StyledCard = styled(Card)({
    backgroundColor: '#EC1D24',
    color: '#fafafa',
    textAlign: 'center',
    fontFamily: 'Anton, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    transition: '0.3s',
    '&:hover': {
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        transform: 'translateY(-10px)',
    },
    cursor: 'pointer',
    height: '300px',
});

const Divider = styled.div({
    height: '2px',
    backgroundColor: '#FAFAFA',
    width: '100vh'
});

export const CharacterCard: React.FC<characterProps> = ({ character, name, thumbnail }) => {
    const [showModal, handleOpen, handleClose] = useModal();

    return (
        <>
            <StyledCard
                onClick={handleOpen}
            >
                <CardMedia
                    component="img"
                    height="140"
                    sx={{ border: 'none' }}
                    image={thumbnail}
                />
                <Divider />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </StyledCard>
            <DetailsModal handleOpen={showModal} handleClose={handleClose} character={character} />
        </>
    )
}
