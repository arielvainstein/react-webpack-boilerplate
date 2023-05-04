import React, { Suspense, lazy } from "react";
import Modal from "../../../app/components/Modal";
import Loading from "../../../app/components/Loading";

const LazyShowsList = lazy(() => import("../../../app/components/ShowsList"))

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
