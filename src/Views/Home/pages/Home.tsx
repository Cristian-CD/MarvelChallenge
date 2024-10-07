import { Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React, { useEffect } from 'react'
import { CharacterGrid } from '../components/CharacterGrid'
import { getCharacters } from '../helpers/getCharacters'

export const Home: React.FC = () => {
    const [characters, setCharacters] = React.useState([])
    const [error, setError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)
    const [offset, setOffset] = React.useState(0)

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            try {
                const response = await getCharacters(offset)
                if (response.data) {
                    setCharacters(response.data.results)
                } else {
                    setError(response)
                }
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        })();
    }, [offset])

    const handleNextPage = () => {
        setOffset(offset + 18)
        scrollToTop()
    }

    const handlePrevPage = () => {
        if (offset > 0) {
            setOffset(offset - 18)
            scrollToTop()
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <Container sx={{ height: '100vh' }} maxWidth='xl'>
            <Container sx={{ textAlign: 'center' }}>
                <Typography pt={1} variant="h3" color='#EC1D24' fontFamily={'Anton, sans-serif'}>Marvel Challenge</Typography>
            </Container>
            <Grid container spacing={1}>
                <Grid size={12}>
                    {isLoading ? (
                        <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h3" color='initial' fontFamily={'Anton, sans-serif'}>Loading...</Typography>
                        </Container>
                    ) : characters ? (
                        <CharacterGrid characters={characters} />
                    ) : (
                        <Typography variant="h5" color='initial'>{error && error.message}</Typography>
                    )}
                </Grid>
                <Grid size={12}>
                    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" color="error" onClick={handlePrevPage} sx={{ m: 1 }}>Previous</Button>
                        <Button variant="contained" color="error" onClick={handleNextPage} sx={{ m: 1 }}>Next</Button>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}
