const express = require("express");
const cors = require("cors")
const app = express();
const pool = require("./db")
//middleware 
app.use(cors());
//app.use(cors());
app.use(express.json());

//ROUTES
app.get("/patient", async (req, res) => {
  try {
    const allPatients = await pool.query("select count(*), p_gender from person group by p_gender order by p_gender desc");
    res.json(allPatients.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/vaccine", async (req, res) => {
  try {
    const allVaccines = await pool.query("select count(*), H_vac from vaccinates group by H_vac order by H_vac desc");
    res.json(allVaccines.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/vaccinelist", async (req, res) => {
  try {
    const allVaccines = await pool.query("select v_name from vaccine;");
    res.json(allVaccines.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/hospital", async (req, res) => {
  try {
    const allHospitals = await pool.query("select H_id as id, H_name as name from Hospital");
    res.json(allHospitals.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/patient", async (req, res) => {
    try {
      const { inputName, inputEmail, inputAddress, inputDOB, inputContact, inputGender, inputCity, inputState, inputStreet, inputHospID, inputVaccine } = req.body;

      const newLocation = await pool.query(
        "INSERT INTO location (pincode, area, city, state) VALUES($1, $2, $3, $4) RETURNING *",
        [inputAddress, inputStreet, inputCity, inputState ]
      );

      
      const newPatient = await pool.query(
        "INSERT INTO person (p_name,p_email,p_address,p_dob,p_contactno,p_gender) VALUES($1, $2, $3, $4, $5, $6) RETURNING p_id",
        [inputName, inputEmail, inputAddress, inputDOB, inputContact, inputGender ],
        function (err, result) {
          if (err) throw err;
          pool.query(
            "INSERT INTO Vaccinates (P, Hosp, H_vac) VALUES($1, $2, $3) RETURNING *",
            [result.rows[0].p_id, inputHospID, inputVaccine ]
          );
        }
      );
    
      res.json("Patient registered succefully");

    } catch (err) {
      console.error(err.message);
    }
  });


  

//create a 


app.listen(8080, () => {
    console.log("Server started on port 8080");
});