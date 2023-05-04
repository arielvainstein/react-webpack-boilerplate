import React, { Suspense, lazy } from "react";
import Modal from "../../app/components/modal";

const LazyShowsList = lazy(() => import("../../app/components/showsList"))

const Loading = () => {
  return <h2>🌀 Loading...</h2>;
};



const Contact = () => {
  return (
    <>
      <div>Contact</div>
      <Modal>
        <Suspense fallback={<Loading />}>
          <LazyShowsList />
        </Suspense>
      </Modal>
    </>
  );
};

export default Contact;
