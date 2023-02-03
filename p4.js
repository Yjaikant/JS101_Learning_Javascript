let database_username = "Jai";
let database_password = "12345";

// when we log in.

let username = "Jai";
let password = "12345";

// when user tries to log in , the code will match the username and password with credentials inside the database.

if(database_username== username){
  
  if(database_password== password){
    console.log("you can log in");
  }
  else{
    console.log("Your Password is not matching.");
  }
}
  else{
    console.log("Your user name is not matching.")
  }
