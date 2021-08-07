import React from 'react';

// Components
import Banner from '../components/Banner';
import { Card, CardImage, CardBody, CardTitle } from "../components/Card";
import { Section } from '../globalStyles';
import { Slideshow, Slide } from '../components/Slideshow';

// Hook
import useGetCharacters from '../hooks/useGetCharacters';


const Index = () => {
    const characters = useGetCharacters();
    
    return (
        <>
            <Banner />
            
            <Section black>
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
            </Section>
        </>
    );
}
 
export default Index;