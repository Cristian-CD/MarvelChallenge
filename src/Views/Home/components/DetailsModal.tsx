import React from 'react'
import { Box, Button, CardMedia, Divider, Link, Modal, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2'

const Backdrop = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(8px)',
    zIndex: 1,
});

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
});

const StyledBox = styled(Box)({
    width: '80%',
    maxWidth: '800px',
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    zIndex: 2,
    overflow: 'hidden',
    textAlign: 'center'
});

interface CharacterProps {
    name: string;
    description: string;
    comics: { items: [{ name: string, resourceURI: string }] };
    urls: [{ type: string, url: string }];
    thumbnail: { path: string, extension: string }
}

interface ModalProps {
    handleOpen: boolean,
    handleClose: () => void,
    character: CharacterProps
}


export const DetailsModal: React.FC<ModalProps> = ({ handleOpen, handleClose, character }) => {

    return (
        <StyledModal open={handleOpen} onClose={handleClose} sx={{ overflow: 'scroll' }}>
            <>
                <Backdrop />
                <StyledBox mt={5}>
                    <Grid container spacing={1}>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <CardMedia
                                component="img"
                                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                sx={{ width: '100%', height: '200px', objectFit: 'contain' }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                            <Typography variant="h4" color='#EC1D24' fontFamily={'Anton, sans-serif'}>{character.name}</Typography>
                            <Typography variant="h6" color="initial">{character.description ? character.description : "No information"}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} >
                            <Typography variant="h5" color='#EC1D24' fontFamily={'Anton, sans-serif'}>Comics</Typography>
                            {(character.comics.items) ? character.comics.items.map((item) => (
                                <Grid key={item.name} size={12}>
                                    <Typography variant="h6" color="initial">{item.name}</Typography>
                                    <Divider />
                                </Grid>
                            )) :
                                <Grid size={12}>
                                    <Typography variant='h6' color='initial'>No comics</Typography>
                                </Grid>
                            }
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                            <Typography variant="h5" color='#EC1D24' fontFamily={'Anton, sans-serif'}>More info</Typography>
                            {(character.urls) ? character.urls.map((item) => (
                                <Grid key={item.type} size={12}>
                                    <Link
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ textDecoration: 'none', fontFamily: 'Anton, sans-serif' }}
                                    >
                                        {item.type.toUpperCase()}
                                    </Link>
                                    <Divider />
                                </Grid>
                            )) :
                                <Grid size={12}>
                                    <Typography variant='h6' color='initial'>No info</Typography>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container spacing={1}>
                        <Grid size={12} mt={1} textAlign={'end'}>
                            <Button variant='contained' color='error' onClick={handleClose}>Cerrar</Button>
                        </Grid>
                    </Grid>
                </StyledBox>
            </>
        </StyledModal>
    )
}

