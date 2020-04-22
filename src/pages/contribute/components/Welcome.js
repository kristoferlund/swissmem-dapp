import React from "react";
import { connect } from "react-redux";
import WalletView from "./WalletView";
import TandC from "./TandC";
import Contribute from "./Contribute";

const Comp = ({ accounts, agreedtandc, web3available }) => {

    // debugger;
    //     const [showTandC, setShowTandC] = React.useState(false);

    //     React.useEffect(() => {
    //         if (accounts && accounts[0] && !agreedtandc) {
    //             // getBalancesFor(accounts[0]);
    //             setShowTandC(true);
    //         }
    //     }, [accounts,agreedtandc]);




    return (<>
        <section className="section has-text-left">

            <div class="tile is-ancestor">
                <div class="tile is-4 is-vertical is-parent  ">

                    <article class="tile is-child notification is-primary">
                        <WalletView />
                    </article>

                    <article class="tile is-child notification is-primary">
                        <p class="title">Your Current CSTK Holdings</p>
                        {/* <p class="subtitle">...</p> */}
                        <p class="subtitle">You haven't contributed anything yet.</p>
                    </article>
                </div>
                <div class="tile is-parent">

<Contribute/>
                </div>

            </div>
        </section>
    </>);
};


const mapStateToProps = state => {

    return {
        ...state.accounts,
        web3available: state.web3available
    };
};

const mapDispachToProps = dispatch => {
    return {
        onSetAgreed: () => dispatch({ type: "AGREE_TANDC" }),
    };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Comp);

