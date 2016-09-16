import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import MainContainerRow from "../components/MainContainerRow";
import Footer from "../components/Footer";
import ShowAlertExampleButton from "../containers/ShowAlertExampleButton";

const Index = () => (
    <div>
        <Header />
        
        <Main >
            <MainContainerRow>

                <ShowAlertExampleButton />

            </MainContainerRow>
        </Main >

        <Footer />
    </div>
)

export default Index