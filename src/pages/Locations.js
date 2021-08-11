import React from 'react';

//Components
import { Container, Section } from '../globalStyles';
import { CardsContainer, Card, CardSection, CardBody, CardTitle, CardText, CardTextGray } from '../components/Card'
import Pagination from '../components/Pagination';

// Hooks
import useGetLocation from '../hooks/useGetLocations';

export default function Locations() {
    const {locations, changePage, pages} = useGetLocation();

    return(
        <Section black>
            <Container>
                <CardsContainer>
                    { locations.map((location) => {
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
                <Pagination 
                    changePage={changePage}
                    pages={pages}
                />
            </Container>
        </Section>
    );
}