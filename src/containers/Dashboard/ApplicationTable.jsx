import React from "react";
import DropDown from "../../components/DropDown";

const completed = {
  color: "#6ADD0E",
  background: "rgba(106, 221, 14, 0.2)"
};
const incomplete = {
  color: "#FD5262",
  background: "rgba(253, 82, 98, 0.2)"
};
export default function ApplicationTable() {
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
          <tr>
            <td className="spacer">1</td>
            <td>Travel Insurance</td>
            <td>#21,400.00</td>
            <td>14 Oct 2019</td>
            <td>
              <span
                className="btn-completed"
                style={1 ? completed : incomplete}
              >
                <li>Completed</li>
              </span>
            </td>
            <td>
              <span className="btn-claim">Make a Claim</span>
            </td>
            <td>
              <DropDown title="More Actions" />
            </td>
          </tr>
          <tr>
            <td className="spacer">2</td>
            <td>Travel Insurance</td>
            <td>#21,400.00</td>
            <td>14 Oct 2019</td>
            <td>
              <span
                className="btn-completed"
                style={0 ? completed : incomplete}
              >
                <li>Completed</li>
              </span>
            </td>
            <td>
              <span className="btn-claim">Make a Claim</span>
            </td>
            <td>
              <DropDown title="More Actions" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
