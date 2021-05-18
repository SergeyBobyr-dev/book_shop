create TABLE users(
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255),
    phone_number INTEGER,
    email VARCHAR(255),
    role_id INTEGER,
    password VARCHAR(255),
    proffit INTEGER,
    address VARCHAR(255),
    age INTEGER,
    cc VARCHAR(255),
    active BOOLEAN
);

create TABLE roles(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    api_id INTEGER
);

create TABLE apis(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
)

{
"full_name": "Test",
"phone_number": 3,
"email": "t3@gmail.com",
"password": "111111",
"age": 23,
"address": "Kharkiv",
"cc": "6666667"
}

ALTER TABLE users ALTER COLUMN cc TYPE char(60);



  static associate(sequelize) {
    this.belongsToMany(sequelize.Models.Role, { through: 'userroles' });
  }
