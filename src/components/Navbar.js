import {Segment, Button, Header, Grid} from 'semantic-ui-react';

const Navbar = () => {
    return(
         
        <Segment inverted padded="very" >
            <Grid columns="equal">
                <Grid.Column text-align="center">
                    <Button inverted color="teal"> Button </Button>
                </Grid.Column>
                <Grid.Column text-align="center" verticalAlign="middle">
                    <Header size="large" textAlign="center" inverted> Something </Header>
                </Grid.Column>
                <Grid.Column text-align="center" verticalAlign="middle">
                    <Header size="large" textAlign="center" inverted> ThisThing </Header>
                </Grid.Column>
                <Grid.Column text-align="center" verticalAlign="middle">
                    <Header size="large" textAlign="center" inverted> A little Bit</Header>
                </Grid.Column>
            </Grid>
        </Segment>

    ) 
}

export default Navbar;