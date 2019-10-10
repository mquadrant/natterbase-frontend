import React from "react";
import "./SettingPage.css";
import PageTitle from "./../../components/PageTitle";
import Spacer from "./../../components/Spacer";
import { Container } from "react-bootstrap";
import PersonalSetting from "./PersonalSetting";
import ResidenceSetting from "./ResidenceSetting";

export default function SettingPage() {
  return (
    <div className="setting">
      <Container>
        <Spacer size="30" />
        <PageTitle>Account Settings</PageTitle>
        <Spacer size="30" />
        <section>
          <PersonalSetting />
        </section>
        <Spacer size="40" />
        <section>
          <ResidenceSetting />
        </section>
        <Spacer size="60" />
      </Container>
    </div>
  );
}
