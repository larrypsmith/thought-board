import { connect } from 'react-redux';

import Canvas from './canvas';

const mSTP = (state, ownProps) => ({
  connections: ownProps.connections,
  notes: state.entities.notes
})

export default connect(mSTP)(Canvas);