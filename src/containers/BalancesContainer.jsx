import { connect } from 'react-redux';

import { fetchBalancesThunk } from '../actions';
import Balances from '../components/Balances';

const mapStateToProps = ({ balances, tickers }) => ({ balances, tickers });

const BalancesContainer = connect(mapStateToProps, { onLoad: fetchBalancesThunk })(Balances);

export default BalancesContainer;
