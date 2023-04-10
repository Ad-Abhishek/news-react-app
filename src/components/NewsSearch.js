import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import SearchDropdown from './SearchDropdown';

export default function NewsSearch() {
  return (
    <Container fluid className='search-bar'>
        <Form className="d-flex m-3">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <SearchDropdown />
          <Button variant="outline-success">Search</Button>
        </Form>
    </Container>    
  )
}
