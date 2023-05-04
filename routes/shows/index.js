import React, { Suspense, lazy } from "react";
import Modal from "../../app/components/modal";
import Loading from "../../app/components/loading";

const LazyShowsList = lazy(() => import("../../app/components/showsList"))

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
