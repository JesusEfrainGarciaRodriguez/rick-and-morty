import React from 'react';

//Components
import { Container, Section } from '../globalStyles';
import { CardsContainer, Card, CardSection, CardBody, CardTitle, CardText, CardTextGray } from '../components/Card'
import Pagination from '../components/Pagination';
import { Title, TitleContainer } from '../components/Title';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';
import NotFound from '../components/NotFound';

// Hooks
import useGetLocation from '../hooks/useGetLocations';

export default function Locations() {
    const {locations, changePage, isLoading, searchByName, currentPage, hasError} = useGetLocation();
    const {data, pages} = locations;

    return(
        <Section black>
            <Container>
                <TitleContainer>
                    <Title>Locations</Title>
                    <SearchBar searchByName={searchByName} />
                </TitleContainer>
                <CardsContainer>
                    { hasError && <NotFound /> }
                    { isLoading && <Spinner /> }
                    { !isLoading && data?.map((location) => {
                        return (
                            <Card key={location.id}>
                                <CardBody>
                                    <CardTitle>{location.name}</CardTitle>
                                    <CardSection>
                                        <CardTextGray>Dimension:</CardTextGray>
                                        <CardText>{location.dimension}</CardText>
                                    </CardSection>
                                    
                                    <CardSection>
                                        <CardTextGray>Type:</CardTextGray>
                                        <CardText>{location.type}</CardText>
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