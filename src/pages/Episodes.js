import React from 'react';

//Components
import { Container, Section, Title } from '../globalStyles';
import { CardsContainer, Card, CardSection, CardBody, CardTitle, CardText, CardTextGray } from '../components/Card';
import Pagination from '../components/Pagination';

// Hooks
import useGetEpisodes from '../hooks/useGetEpisodes';

export default function Episodes() {
    const {episodes, pages, changePage} = useGetEpisodes();

    return(
        <Section black>
            <Container>
                <Title>Episodes</Title>
                <CardsContainer>
                    { episodes.map((episode) => {
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
                <Pagination 
                    changePage={changePage}
                    pages={pages}
                />
            </Container>
        </Section>
    );
}