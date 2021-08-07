import React from 'react';

// Components
import Banner from '../components/Banner';
import { Card, CardImage, CardBody, CardTitle, CardText } from "../components/Card";
import { Container, Section } from '../globalStyles';
import { Slideshow, TituloSlideshow, Slide } from '../components/Slideshow';

// Hooks
import useGetCharacters from '../hooks/useGetCharacters';
import useGetLocations from '../hooks/useGetLocations';
import useGetEpisodes from '../hooks/useGetEpisodes';


const Index = () => {
    const characters = useGetCharacters();
    const locations = useGetLocations();
    const episodes = useGetEpisodes();
    console.log(episodes);
    return (
        <>
            <Section>
                <Banner />
            </Section>
            
            
            <Section black>
                <Container>
                    <TituloSlideshow>Characters</TituloSlideshow>
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

                    <br/>
                    
                    <TituloSlideshow>Locations</TituloSlideshow>
                    <Slideshow autoplay velocidad="700">
                        { locations.map((location, index) => {
                                return (
                                    <Slide key={index}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle>{location.name}</CardTitle>
                                                <CardText><span>Dimension: </span>{location.dimension}</CardText>
                                                <CardText><span>Type: </span>{location.type}</CardText>
                                            </CardBody>
                                        </Card>
                                    </Slide>
                                );
                            })}
                    </Slideshow>

                    <br/>

                    <TituloSlideshow>Episodes   </TituloSlideshow>
                    <Slideshow autoplay velocidad="900">
                        { episodes.map((episode, index) => {
                                return (
                                    <Slide key={index}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle>{episode.name}</CardTitle>
                                                <CardText><span>Episode: </span>{episode.episode}</CardText>
                                                <CardText><span>Air date: </span>{episode.air_date}</CardText>
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