import React from "react";
import { connect } from "react-redux";
import DropDown from "../../components/DropDown";
import { Loader, ErrorAlert } from "./../../components/UtilComponent";
import { currencyConverter } from "./../../helpers/currencyConverter";
import { format } from "date-fns";

const completed = {
  color: "#6ADD0E",
  background: "rgba(106, 221, 14, 0.2)"
};
const incomplete = {
  color: "#FD5262",
  background: "rgba(253, 82, 98, 0.2)"
};

function ApplicationTable(props) {
  const { applications, applicationError, applicationPending } = props;
  return (
    <div className="table-responsive-md">
      <table className="table table-striped table-borderless">
        <colgroup>
          <col width="7%" />
          <col width="23%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <col width="10%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" className="spacer">
              S.N
            </th>
            <th scope="col">Insurance Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {applicationPending ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center", width: "100%" }}>
                <Loader />
              </td>
            </tr>
          ) : applicationError ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center", width: "100%" }}>
                <ErrorAlert />
              </td>
            </tr>
          ) : (
            applications.map((application, index) => (
              <tr key={application._id}>
                <td className="spacer">{index + 1}</td>
                <td>{application.insuranceType}</td>
                <td>{`₦${currencyConverter(application.amount)}`}</td>
                <td>
                  {format(new Date(application.createdDate), "MMMM do yyyy")}
                </td>
                <td>
                  <span
                    className="btn-completed"
                    style={application.complete ? completed : incomplete}
                  >
                    <li>{application.complete ? "Completed" : "Incomplete"}</li>
                  </span>
                </td>
                <td>
                  <span className="btn-claim">Make a Claim</span>
                </td>
                <td>
                  <DropDown title="More Actions" />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    applications: state.applications.applications,
    applicationError: state.applications.applicationError,
    applicationPending: state.applications.applicationPending
  };
};

export default connect(mapStateToProps)(ApplicationTable);
