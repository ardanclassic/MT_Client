import React from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap';
import './styles.scss';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <Container>
			<Card body>
                <h1>Login</h1>
				<Form>
                    <Form.Group>
                        <Form.Control name="email" type="text" placeholder="email" />
                    </Form.Group>
					<Button size="lg" block >Login</Button>
                    <Link to="/">&#8592; back to register</Link>
                </Form>
            </Card>
        </Container>
    )
}

export default LoginPage
