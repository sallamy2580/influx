import React, { useState } from "react";
import { getPosts } from "../redux/actions/fooActions";
import { wrapper } from "../redux";
import Layout from "../components/layout/index";
import { Modal, Button } from "react-bootstrap";
import { checkServerSideCookie } from "../redux/actions/authActions";
import "../styles/scss/index.module.scss";

const Index = ({ foo, token }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout isAuthenticated={token}>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              {JSON.stringify(foo)}
            </div>
          </div>
          <div className="col-md-6">
            <Button className="nextButton" onClick={handleShow}>
              Open Modal
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    checkServerSideCookie(context);
    const token = context.store.getState().authentication.token;
    await context.store.dispatch(getPosts());
    const foo = context.store.getState().foo.foo;
    return {
      props: {
        foo,
        token,
      },
    };
  }
);

export default Index;
