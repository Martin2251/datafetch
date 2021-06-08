import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ShipmentInformation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          isEdit: false,
          name: this.props.shipment.name
      }
  }
