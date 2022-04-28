import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col  } from 'react-bootstrap';

const RegisterPatient = () => {
    useEffect(() => {
        const getHospitals = async () => {
          try {
            const response = await fetch("http://localhost:8080/hospital");
            const jsonData = await response.json();
              setHospitalName(jsonData);
          } catch (err) {
            console.error(err.message);
          }
        };
        getHospitals();
        const getVaccines = async () => {
            try {
              const response = await fetch("http://localhost:8080/vaccinelist");
              const jsonData = await response.json();
              console.log(jsonData);
                setVaccineName(jsonData);
            } catch (err) {
              console.error(err.message);
            }
          };
          getVaccines();
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [hospital, setHospital] = useState();
    const [hospitalName, setHospitalName] = useState([]);
    const [vaccine, setVaccine] = useState('');
    const [vaccineName, setVaccineName] = useState([]);

    const radios = [
        { name: 'Male', value: 'Male' },
        { name: 'Female', value: 'Female' },
      ];

    const onSubmitForm = async e => {
        e.preventDefault();
        try {

          const response = await fetch("http://localhost:8080/patient", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                inputName: name,
                inputEmail: email,
                inputAddress: pincode,
                inputDOB: dob,
                inputContact: phone,
                inputGender: gender,
                inputCity: city,
                inputState: state,
                inputStreet: street,
                inputHospID: hospital,
                inputVaccine: vaccine
            })
          });

          console.log(response)
          alert("Success! You are now Registered for Vaccination! Please carry a Photo ID Proof at the time of Vacciantion.");
          window.location = "/";
    
        } catch (err) {
          console.error(err.message);
        }
      };

  return (
      
    <Container >
        <br/>
    <br/>
      <Form onSubmit={onSubmitForm}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="form.Name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter full name" 
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required />
        </Form.Group>
        <br/>

        <Form.Group as={Col} controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="name@example.com" 
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required />
        </Form.Group>
        <br/>
        </Row>

        <Row className="mb-3">

        <Form.Group as={Col} controlId="form.Tel">
            <Form.Label>Phone</Form.Label>
            <Form.Control 
            type="tel" 
            placeholder="123-456-7890" 
            autoComplete="off"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required/>
        </Form.Group>
        <br/>
        
        
        <Form.Group as={Col} controlId="form.Gender">
        <Form.Label>Gender</Form.Label>
        <Form.Control 
                as="select" 
                name="gender" 
                autoComplete="off"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                required>
                  <option value="Select">Select</option>
                {radios.map((radio, idx) => (
                    <option 
                    value={radio.name}
                    key={idx}
                    id={`radio-${idx}`}
                    >
                        {radio.name}
                    </option>
                    ))}
        </Form.Control>
      </Form.Group>
      <br/>

        <Form.Group as={Col} controlId="form.DOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter Date of Birth in mm/dd/yy format" 
            autoComplete="off"
            onChange={(e) => setDob(e.target.value)}
            value={dob}
            required/>
        </Form.Group>
        <br/>

        </Row>

        <Form.Group controlId="form.Address">
            <Form.Label>Address</Form.Label>
            <Form.Control
                type="text"
                name="address"
                autoComplete="off"
                onChange={(e) => setStreet(e.target.value)}
                value={street}
                required
            />
        </Form.Group>
        <br/>

        <Row className="mb-3">

            <Form.Group as={Col} controlId="form.City">
                <Form.Label>City</Form.Label>
                <Form.Control
                type="text"
                name="city"
                autoComplete="off"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                required
                />
            </Form.Group>
            <br/>

            <Form.Group as={Col} controlId="form.State">
                <Form.Label>State</Form.Label>
                <Form.Control 
                as="select" 
                name="state" 
                autoComplete="off"
                onChange={(e) => setState(e.target.value)}
                value={state}
                required>
                    <option value="Select">Select</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </Form.Control>
             </Form.Group>
             <br/>

            <Form.Group as={Col} controlId="form.Zip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                type="text"
                name="zip"
                autoComplete="off"
                onChange={(e) => setPincode(e.target.value)}
                value={pincode}
                required
                />
            </Form.Group>
        <br/>
        </Row>

        <Row className="mb-3">

        <Form.Group as={Col} controlId="form.Hospital">
                <Form.Label>Hospital</Form.Label>
                <Form.Control 
                as="select" 
                name="hospital" 
                autoComplete="off"
                onChange={(e) => setHospital(e.target.value)}
                value={hospital}
                required>
                  <option value="Select">Select</option>
                {hospitalName.map((index) => (
                    <option 
                    value={`${index.id}`}
                    key={index.id}
                    id={`hosp-${index.id}`}
                    >
                        {index.name}
                    </option>
                    ))}
                </Form.Control>
             </Form.Group>
             <br/>

             <Form.Group as={Col} controlId="form.Vaccine">
                <Form.Label>Vaccine</Form.Label>
                <Form.Control 
                as="select" 
                name="vaccine" 
                autoComplete="off"
                onChange={(e) => setVaccine(e.target.value)}
                value={vaccine}
                required>
                  <option value="Select">Select</option>
                {vaccineName.map((index) => (
                    <option 
                    value={`${index.v_name}`}
                    key={index.v_name}
                    id={`vacc-${index.v_name}`}
                    >
                        {index.v_name}
                    </option>
                    ))}
                </Form.Control>
             </Form.Group>
             <br/>
             </Row>

        <Form.Group className = "col-md-12 text-center" controlId="form.Button">
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default RegisterPatient