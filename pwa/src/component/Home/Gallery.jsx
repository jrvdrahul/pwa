import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// core components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Label,
  Row,
  Col,
  Container,
} from 'reactstrap';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: true,
    };
  }

  logout() {
    localStorage.removeItem('token');
    window.location.assign('/login');
  }

  gallery() {
    if (this.state.gallery) {
      return (
        <Row>
          <Col md="6">
            <ImageGallery items={images} slideInterval="300" />;
          </Col>
          <Col md="6">
            <h3>Info</h3>
            <div>name</div>
            <div>female</div>
            <div>Dob</div>
            <div>sun sign</div>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row className="perfect-center">
          <div className="info text-center">
            <h3>What's your name</h3>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText></InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="First Name"
                  type="text"
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText></InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Last Name"
                  type="text"
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                />
              </InputGroup>
            </FormGroup>
            <h3>And your gender</h3>
            <h3>What's your date of birth?</h3>
          </div>
        </Row>
      );
    }
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row className="header">
            <Col></Col>
            <Col className="text-right">
              <Button color="secondary" onClick={() => this.logout()}>
                Logout
              </Button>
            </Col>
          </Row>

          {this.gallery()}
        </Container>
      </>
    );
  }
}

export default Home;
