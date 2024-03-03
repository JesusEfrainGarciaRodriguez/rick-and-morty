import React from 'react';

//Components
import { Container, Section } from '../globalStyles';
import { CardsContainer, Card, CardSection, CardImageContainer, CardBody, CardTitle, CardText, CardTextGray, CardStatusIcon } from '../components/Card'
import Pagination from '../components/Pagination';
import { Title, TitleContainer } from '../components/Title';
import Spinner from '../components/Spinner';

// Hooks
import useGetCharacters from '../hooks/useGetCharacters';
import SearchBar from '../components/SearchBar';

export default function Characters() {
    const {characters, changePage, isLoading, searchByName, currentPage} = useGetCharacters();
    const {data, pages} = characters;

    return(
        <Section black>
            <Container>
                <TitleContainer>
                    <Title>Characters</Title>
                    <SearchBar searchByName={searchByName} />
                </TitleContainer>
                <CardsContainer>
                    { isLoading && <Spinner /> }
                    { !isLoading && data?.map((character) => {
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
                    currentPage={currentPage}
                />
            </Container>
        </Section>
    );
}