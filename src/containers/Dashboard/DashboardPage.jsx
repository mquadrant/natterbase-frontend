import React, { useEffect, useState } from "react";
import PageTitle from "./../../components/PageTitle";
import Spacer from "./../../components/Spacer";
import { connect } from "react-redux";
import "./Dashboard.css";
import { format } from "date-fns";
import StatisticCard from "./StatisticCard";
import ApplicationTable from "./ApplicationTable";
import HorizontalLine from "../../components/HorizontalLine";
import { getApplications, getStatistics } from "./redux/actions";
import {
  currencyConverter,
  numberConverter
} from "./../../helpers/currencyConverter";
import BGCard1 from "./../../images/cardbackground1.svg";
import BGCard2 from "./../../images/cardbackground2.svg";
import BGCard3 from "./../../images/cardbackground3.svg";
import BGCard4 from "./../../images/cardbackground4.svg";
import Card1 from "./../../images/card1.svg";
import Card2 from "./../../images/card2.svg";
import Card3 from "./../../images/card3.svg";
import Card4 from "./../../images/card4.svg";
import { ErrorAlert, Loader } from "../../components/UtilComponent";

function DashboardPage(props) {
  const { getStatisticsHandler, getApplicationsHandler } = props;
  const { statistics, statisticsError, statisticsPending } = props;

  const [statData, setStatData] = useState([]);

  useEffect(() => {
    getStatisticsHandler();
    getApplicationsHandler();
  }, [getStatisticsHandler, getApplicationsHandler]);

  useEffect(() => {
    setStatData([
      {
        bgImg: BGCard1,
        buImg: Card1,
        title: numberConverter(statistics.totalInsurancesBought),
        desc: "Total Insurance Bought"
      },
      {
        bgImg: BGCard2,
        buImg: Card2,
        title: `₦${currencyConverter(statistics.totalInsuranceAmount)}`,
        desc: "Total Amount of Insurance"
      },
      {
        bgImg: BGCard3,
        buImg: Card3,
        title: numberConverter(statistics.totalInsuranceClaims),
        desc: "Total Insurance Claims"
      },
      {
        bgImg: BGCard4,
        buImg: Card4,
        title: `₦${currencyConverter(statistics.totalClaimsAmount)}`,
        desc: "Total Amount of Claims"
      }
    ]);
  }, [statistics]);

  return (
    <div className="dashboard">
      <div className="dashboard-body">
        <Spacer size="30" />
        <PageTitle>Welcome Luis!</PageTitle>
        <p className="date">{format(new Date(), "EEEE, MMMM do yyyy")}.</p>
        <Spacer size="30" />
        <section className="statistics d-flex flex-wrap">
          {statisticsPending ? (
            <div style={{ textAlign: "center", width: "100%" }}>
              <Loader />
            </div>
          ) : statisticsError ? (
            <ErrorAlert />
          ) : (
            statData.map((stat, index) => (
              <StatisticCard
                key={index}
                bgImage={stat.bgImg}
                bulletImage={stat.buImg}
                title={stat.title}
                desc={stat.desc}
              />
            ))
          )}
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

const mapStateToProps = state => {
  return {
    applications: state.applications.applications,
    applicationError: state.applications.applicationError,
    applicationPending: state.applications.applicationPending,

    statistics: state.statistics.statistics,
    statisticsError: state.statistics.statisticsError,
    statisticsPending: state.statistics.statisticsPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStatisticsHandler: () => dispatch(getStatistics()),
    getApplicationsHandler: () => dispatch(getApplications())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
