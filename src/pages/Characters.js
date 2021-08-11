import React from 'react';

//Components
import { Container, Section } from '../globalStyles';
import { CardsContainer, Card, CardSection, CardImageContainer, CardBody, CardTitle, CardText, CardTextGray, CardStatusIcon } from '../components/Card'

// Hooks
import useGetCharacters from '../hooks/useGetCharacters';
import Pagination from '../components/Pagination';

export default function Characters() {
    const {characters, changePage, pages} = useGetCharacters();

    return(
        <Section black>
            <Container>
                <CardsContainer>
                    { characters.map((character) => {
                        return (
                            <Card row key={character.id}>
                                <CardImageContainer>
                                    <img src={character.image} alt={character.name}/>
                                </CardImageContainer>
                                <CardBody>
                                    <CardSection>
                                        <CardTitle>{character.name}</CardTitle>
                                        <CardText><CardStatusIcon status={character.status}/>{character.status} - {character.species}</CardText>
                                    </CardSection>

                                    <CardSection>
                                        <CardTextGray>Last known location:</CardTextGray>
                                        <CardText>{character.location.name}</CardText>
                                    </CardSection>
                                    
                                    <CardSection>
                                        <CardTextGray>First seen in:</CardTextGray>
                                        <CardText>{character.origin.name}</CardText>
                                    </CardSection>
                                    
                                </CardBody>
                            </Card>
                        );
                    })}
                </CardsContainer>
                <Pagination 
                    changePage={changePage}
                    pages={pages}
                />
            </Container>
        </Section>
    );
}