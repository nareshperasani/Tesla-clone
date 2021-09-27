import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import model_s from '../images/model-s.jpg';
import model_y from '../images/model-y.jpg';
import model_3 from '../images/model-3.jpg';
import model_x from '../images/model-x.jpg';
import solar_panel from '../images/solar-panel.jpg';
import solar_roof from '../images/solar-roof.jpg';
import accessories from '../images/accessories.jpg';


function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                desc="Order Online for Touchless Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventory"
                backgroundImg={model_s}
            />
            <Section
                title="Model Y"
                desc="Order Online for Touchless Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventory"
                backgroundImg={model_y}
            />
            <Section
                title="Model 3"
                desc="Order Online for Touchless Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventory"
                backgroundImg={model_3}
            />
            <Section
                title="Model X"
                desc="Order Online for Touchless Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventory"
                backgroundImg={model_x}
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                desc="Money-back guarantee"
                leftButton="Order Now"
                rightButton="Learn More"
                backgroundImg={solar_panel}
            />
            <Section
                title="Solar for New Roofs"
                desc="Solar Roof Costs Less Than a New R"
                leftButton="Order Now"
                rightButton="Learn More"
                backgroundImg={solar_roof}
            />
            <Section
                title="Accessories"
                desc=""
                leftButton="Shop Now"
                backgroundImg={accessories}
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`;