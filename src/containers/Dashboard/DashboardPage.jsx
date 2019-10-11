import React, { useEffect } from "react";
import PageTitle from "./../../components/PageTitle";
import Spacer from "./../../components/Spacer";
import { connect } from "react-redux";
import "./Dashboard.css";
import { format } from "date-fns";
import StatisticCard from "./StatisticCard";
import ApplicationTable from "./ApplicationTable";
import HorizontalLine from "../../components/HorizontalLine";
import { getApplications, getStatistics } from "./redux/actions";
import BGCard1 from "./../../images/cardbackground1.svg";
import BGCard2 from "./../../images/cardbackground2.svg";
import BGCard3 from "./../../images/cardbackground3.svg";
import BGCard4 from "./../../images/cardbackground4.svg";
import Card1 from "./../../images/card1.svg";
import Card2 from "./../../images/card2.svg";
import Card3 from "./../../images/card3.svg";
import Card4 from "./../../images/card4.svg";

function DashboardPage(props) {
  const { getStatisticsHandler, getApplicationsHandler } = props;

  useEffect(() => {
    getStatisticsHandler();
    getApplicationsHandler();
  }, [getStatisticsHandler, getApplicationsHandler]);

  return (
    <div className="dashboard">
      <div className="dashboard-body">
        <Spacer size="30" />
        <PageTitle>Welcome Luis!</PageTitle>
        <p className="date">{format(new Date(), "EEEE, MMMM do yyyy")}.</p>
        <Spacer size="30" />
        <section className="statistics d-flex flex-wrap">
          <StatisticCard
            bgImage={BGCard1}
            bulletImage={Card1}
            title={"06"}
            desc={"Total Insurance Bought"}
          />
          <StatisticCard
            bgImage={BGCard2}
            bulletImage={Card2}
            title={"06"}
            desc={"Total Insurance Bought"}
          />
          <StatisticCard
            bgImage={BGCard3}
            bulletImage={Card3}
            title={"06"}
            desc={"Total Insurance Bought"}
          />
          <StatisticCard
            bgImage={BGCard4}
            bulletImage={Card4}
            title={"06"}
            desc={"Total Insurance Bought"}
          />
        </section>
        <Spacer size="40" />
        <section className="application-table card">
          <div className="table-header">
            <span className="table-title">Insurance Applications</span>
            <HorizontalLine />
          </div>
          <ApplicationTable />
        </section>
        <Spacer size="60" />
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//       error: state.journals.error,
//       pending: state.journals.pending,
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    getStatisticsHandler: () => dispatch(getStatistics()),
    getApplicationsHandler: () => dispatch(getApplications())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DashboardPage);
