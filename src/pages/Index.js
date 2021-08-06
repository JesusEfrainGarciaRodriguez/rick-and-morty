import React from 'react';

// Components
import Banner from '../components/Banner';
import { CardsContainer, Card, CardImageContainer, CardBody, CardTitle, CardText } from "../components/Card";
import { Section } from '../globalStyles';

// Hook
import useGetCharacters from '../hooks/useGetCharacters';


const Index = () => {
    const characters = useGetCharacters();

    return (
        <>
            <Banner/>
            <Section black>
                <CardsContainer>
                    { characters.map((character) => {
                        return (
                            <Card>
                                <CardImageContainer>
                                    <img src={character.image} alt={character.name} />
                                </CardImageContainer>
                                <CardBody>
                                    <CardTitle>{character.name}</CardTitle>
                                    <CardText>Status: {character.status} - {character.species}</CardText>
                                    <CardText><span>Origin: </span>{character.origin.name}</CardText>
                                    <CardText><span>Last known location: </span>{character.location.name}</CardText>
                                </CardBody>
                            </Card>
                        );
                    })}
                </CardsContainer>
            </Section>
            
        </>
    );
}
 
export default Index;