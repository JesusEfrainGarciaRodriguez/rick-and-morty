import React from 'react';

// Components
import Banner from '../components/Banner';
import { Card, CardImage, CardBody, CardTitle } from "../components/Card";
import { Container, Section } from '../globalStyles';
import { Slideshow, Slide } from '../components/Slideshow';

// Hook
import useGetCharacters from '../hooks/useGetCharacters';


const Index = () => {
    const characters = useGetCharacters();
    
    return (
        <>
            <Section>
                <Banner />
            </Section>
            
            
            <Section black>
                <Container>
                    <Slideshow autoplay>
                        { characters.map((character, index) => {
                                return (
                                    <Slide key={index}>
                                        <Card>
                                            <CardImage src={character.image} alt={character.name} />
                                            <CardBody>
                                                <CardTitle>{character.name}</CardTitle>
                                            </CardBody>
                                        </Card>
                                    </Slide>
                                );
                            })}
                    </Slideshow>
                </Container>
                
            </Section>
        </>
    );
}
 
export default Index;