import './Account.scss'
import { Leaded } from "../../UI/organisms/Leaded/Leaded";
import TransactionList from "../../UI/organisms/TransactionList/TransactionList";

const Account = () => {
    return (
        <div className="Account">
            <Leaded />
            <TransactionList />
        </div>
    );
}

export default Account;