# SQL-injection-playground
Cybersecurity lab/Project to showcase how SQL injections functions as well as common prevention methods like parametrised queries and input validation on Web Apps. Tests will be conducted locally and this repo is for educational purposes to demonstrate how SQL injections work and how to prevent them.

# Vulnerable Site
This folder contains the code for a vulnerable website that can be exploited by SQL injections. Users can input anything into the Name and password input fields. The password field is especially unsecure as the password type protects it from being viewed as plain text but that can be altered eaily via inspect element. The main vulnerabilkity is that the user can input anything into the users table as there is not input validation. To some this may just be an annoyance but this opens the doors for malicious attackers who can then exploit the database via their input or whatever data they inout into the database.

For SQL injections
