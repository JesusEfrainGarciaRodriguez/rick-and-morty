import styled from "styled-components";
import { Container } from "../globalStyles";

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContainerFooter = styled.footer`
    width: 100%;
    background: rgb(32, 35, 41);
    text-align: center;
    color: rgb(158, 158, 158);
    padding: 50px 0;
`;

const ContainerIcons = styled.div`
    display: flex;
    justify-content: center;
    margin: 25px 0;
`;

const Icon = styled.a`
    font-size: 2.5rem;
    margin: 0 20px;
    padding: 20px;
    border-radius: 5px;
    width: 90px;
    color: rgb(158, 158, 158);
    text-decoration: none;

    &:hover {
        background: white;
        color: rgb(32, 35, 41);
        cursor: pointer;
    }
`;

const List = styled.ul`
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    li {
        margin: 0 20px;
    }
`;

const Text = styled.p`
    font-size: .875rem;
    padding: 5px;
`;

const Underline = styled.span`
    border-bottom: 1px solid;
    font-weight: bold;
`;

const Footer = () => {
    return (
        <ContainerFooter>
            <Container>
                <List>
                    <li>Characters: </li>
                    <li>Locations: </li>
                    <li>Episodes: </li>
                </List>
                <ContainerIcons>
                    <Icon href="https://github.com/JesusEfrainGarciaRodriguez">
                        <FontAwesomeIcon icon={faGithub} />
                    </Icon>
                    <Icon href="mailto:efraingarcia_86@hotmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Icon>
                </ContainerIcons>
                <Text>by <Underline>Efrain Garcia</Underline> 2021</Text>
            </Container>
        </ContainerFooter>
    );
}
 
export default Footer;