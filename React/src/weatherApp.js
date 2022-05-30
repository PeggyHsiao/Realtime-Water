import styled from '@emotion/styled';

const Container = styled.div`
    background: #F5F5F5;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WeatherCard = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    padding: 50px;
    min-width: 480px;
    background: white;
    box-sizing: border-box;
`;

const weather = () => (
    <Container>
        <WeatherCard>
            <h1 className="weather_card_title">Weather</h1>
        </WeatherCard>
    </Container>
)

export default weather
