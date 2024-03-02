import React from 'react';

// Components
import Banner from '../components/Banner';
import { Card, CardImageContainer, CardBody, CardTitle, CardText, CardSection, CardTextGray } from "../components/Card";
import { Container, Section } from '../globalStyles';
import { Slideshow, TituloSlideshow, Slide } from '../components/Slideshow';

// Hooks
import useGetCharacters from '../hooks/useGetCharacters';
import useGetLocations from '../hooks/useGetLocations';
import useGetEpisodes from '../hooks/useGetEpisodes';


const Index = () => {
    const {characters} = useGetCharacters();
    const {locations} = useGetLocations();
    const {episodes} = useGetEpisodes();
    
    return (
        <>
            <Section>
                <Banner />
            </Section>
            
            <Section black>
                <Container>
                    <TituloSlideshow>Characters</TituloSlideshow>
                    <Slideshow autoplay>
                        { characters?.data?.map((character, index) => {
                            return (
                                <Slide key={index}>
                                    <Card>
                                        <CardImageContainer>
                                            <img src={character.image} alt={character.name} />
                                        </CardImageContainer>
                                        <CardBody>
                                            <CardTitle>{character.name}</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Slide>
                            );
                        })}
                    </Slideshow>

                    <br/>
                    
                    <TituloSlideshow>Locations</TituloSlideshow>
                    <Slideshow autoplay velocidad="700">
                        { locations?.data?.map((location, index) => {
                            return (
                                <Slide key={index}>
                                    <Card>
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
                                </Slide>
                            );
                        })}
                    </Slideshow>

                    <br/>

                    <TituloSlideshow>Episodes</TituloSlideshow>
                    <Slideshow autoplay velocidad="900">
                        { episodes?.data?.map((episode, index) => {
                            return (
                                <Slide key={index}>
                                    <Card>
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