import { Container } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2'
import { CharacterCard } from './CharacterCard'

interface CharacterProps {
    id: number;
    name: string;
    description: string;
    comics: { items: [{ name: string, resourceURI: string }] };
    urls: [{type: string, url: string}];
    thumbnail: {path: string, extension: string};
}

export const CharacterGrid: React.FC<{ characters: CharacterProps[] }> = ({ characters }) => {
    return (
        <Container>
            <Grid container spacing={2} mt={2}>
                {characters && characters.map((item) => {
                    console.log(item)
                    return (
                        <Grid size={{ xs: 6, sm: 6, lg: 4, xl: 4 }} key={item.id}>
                            <CharacterCard id={item.id} name={item.name} thumbnail={`${item.thumbnail.path}/landscape_amazing.${item.thumbnail.extension}`} character={item} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
