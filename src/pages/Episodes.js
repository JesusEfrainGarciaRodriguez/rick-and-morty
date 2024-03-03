import React from 'react';

//Components
import { Container, Section } from '../globalStyles';
import { CardsContainer, Card, CardSection, CardBody, CardTitle, CardText, CardTextGray } from '../components/Card';
import Pagination from '../components/Pagination';
import { Title, TitleContainer } from '../components/Title';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';
import NotFound from '../components/NotFound';

// Hooks
import useGetEpisodes from '../hooks/useGetEpisodes';

export default function Episodes() {
    const {episodes, changePage, isLoading, searchByName, currentPage, hasError} = useGetEpisodes();
    const {data, pages} = episodes;

    return(
        <Section black>
            <Container>
                <TitleContainer>
                    <Title>Episodes</Title>
                    <SearchBar searchByName={searchByName} />
                </TitleContainer>
                <CardsContainer>
                    { hasError && <NotFound /> }
                    { isLoading && <Spinner /> }
                    { !isLoading && data?.map((episode) => {
                        return(
                            <Card key={episode.id}>
                                <CardBody>
                                    <CardTitle>{episode.name}</CardTitle>
                                    <CardSection>
                                        <CardTextGray>Episode:</CardTextGray>
                                        <CardText>{episode.episode}</CardText>
                                    </CardSection>
                                    <CardSection>
                                        <CardTextGray>Air date:</CardTextGray>
                                        <CardText>{episode.air_date}</CardText>
                                    </CardSection>
                                </CardBody>
                            </Card>
                        );
                    })}
                </CardsContainer>
                { !hasError && <Pagination 
                    changePage={changePage}
                    pages={pages}
                    currentPage={currentPage}
                />}
            </Container>
        </Section>
    );
}