import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Register = () => {
    const { registerInfo,updateRegisterInfo } = useContext(AuthContext)
    return (
        <>
            <Form>
                <Row style={{
                    padding:'10%',
                    height:'100vh',
                    justifyContent:'center'
                }}>
                    <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Register</h2>
                            <Form.Control type="text" placeholder="Name" onChange={(e)=>updateRegisterInfo({
                                ...registerInfo,
                                name: e.target.value
                            })}/>
                            <Form.Control type="text" placeholder="Email" onChange={(e)=>updateRegisterInfo({
                                ...registerInfo,
                                email: e.target.value
                            })}/>
                            <Form.Control type="text" placeholder="Password"onChange={(e)=>updateRegisterInfo({
                                ...registerInfo,
                                password: e.target.value
                            })}/>
                            <Button variant="primary" type="submit">Register</Button>
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
 
export default Register;