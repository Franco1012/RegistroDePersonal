const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
//creamos una conexion a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "empleados_crud",
});
//creamos peticion de guardar
app.post("/create", (req, res) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const pais = req.body.pais;
  const cargo = req.body.cargo;
  const anios = req.body.anios;
  //consulta a la base de datos(inserción de datos)
  db.query(
    "INSERT INTO empleados(nombre,edad,pais,cargo,anios) Values(?,?,?,?,?)",
    [nombre, edad, pais, cargo, anios],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/empleados", (req, res) => {
  db.query("SELECT * FROM empleados", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("peticion realizada")
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const pais = req.body.pais;
  const cargo = req.body.cargo;
  const anios = req.body.anios;
  db.query(
    "UPDATE empleados SET nombre=?, edad=?, pais=?, cargo=?, anios=? WHERE id=?",
    [nombre, edad, pais, cargo, anios, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("El empleado fue actualizado con exito");
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM empleados WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//creo el servidor web y le digo que escuche en el puerto 3001
app.listen(3001, () => {
  console.log("corriendo en el puerto 3001");
});
