import Dropdown from 'react-bootstrap/Dropdown';

export default function SearchDropdown() {
  return (
    <>
    <Dropdown className='me-1'>
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
              </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    
  </>
  )
}
