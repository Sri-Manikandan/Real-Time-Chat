import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

const Login = () => {
    return (
        <>
            <Form>
                <Row style={{
                    padding:'10%',
                    height:'100vh',
                    justifyContent:'center',
                }}>
                    <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Login</h2>
                            <Form.Control type="text" placeholder="Email"/>
                            <Form.Control type="text" placeholder="Password"/>
                            <Button variant="primary" type="submit">Login</Button>
                            <Alert variant="danger">
                                <p>An error occurred!</p>
                            </Alert>
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    );
}
 
export default Login;