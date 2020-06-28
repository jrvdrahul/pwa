import React from 'react';

// core components
import {
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container,
} from 'reactstrap';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
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
      gallery: false,
    };
  }

  logout() {
    localStorage.removeItem('token');
    window.location.assign('/login');
  }

  showGallery() {
    if (this.state.firstName === '' || this.state.firstName === undefined) {
      NotificationManager.error('First Name is required', 'Error!');
      return false;
    } else if (
      this.state.lastName === '' ||
      this.state.lastName === undefined
    ) {
      NotificationManager.error('Last Name is required', 'Error!');
      return false;
    } else if (this.state.gender === '' || this.state.gender === undefined) {
      NotificationManager.error('Gender is required', 'Error!');
      return false;
    } else if (this.state.dob === '' || this.state.dob === undefined) {
      NotificationManager.error('Dob is required', 'Error!');
      return false;
    }
    this.setState({
      gallery: true,
    });
  }

  gallery() {
    if (this.state.gallery) {
      return (
        <Row>
          <Col md="6">
            <ImageGallery items={images} />
          </Col>
          <Col md="6" className="details">
            <h2>Info</h2>
            <hr />
            <div>{this.state.firstName}</div>
            <div>{this.state.lastName}</div>
            <div>{this.state.gender}</div>
            <div>{this.state.dob}</div>
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
                  <InputGroupText>
                    <i className="fas fa-file-signature"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="First Name"
                  type="text"
                  onChange={(event) =>
                    this.setState({ firstName: event.target.value })
                  }
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-file-signature"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Last Name"
                  type="text"
                  onChange={(event) =>
                    this.setState({ lastName: event.target.value })
                  }
                />
              </InputGroup>
            </FormGroup>
            <h3>And your gender</h3>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="gender"
                  type="text"
                  onChange={(event) =>
                    this.setState({ gender: event.target.value })
                  }
                />
              </InputGroup>
            </FormGroup>
            <h3>What's your date of birth?</h3>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-clock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Last Name"
                  type="date"
                  onChange={(event) =>
                    this.setState({ dob: event.target.value })
                  }
                />
              </InputGroup>
            </FormGroup>
            <div className="goTo" onClick={() => this.showGallery()}>
              <i className="fas fa-chevron-right"></i>
            </div>
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
          <NotificationContainer />
        </Container>
      </>
    );
  }
}

export default Home;
