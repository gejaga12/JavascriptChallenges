// 1) REGISTRO.

//   Vamos a construir un programa que permita al usuario registrarse en nuestra aplicacion. Para ello, en primer lugar vamos a
//   mostrar un mensaje que le de la bienvenida al usuario y le pregunte si desea registrarse (PISTA: recuerden que habia un metodo del
//   navegador que permitia hacer este tipo de consultas al usuario, devolviendo true o false segun el caso).
//   En caso de que el usuario acepte registrarse, le vamos a pedir que ingrese su nombre de usuario en primer lugar. El nombre de usuario
//   tiene que tener por lo menos 3 caracteres y no va a ser case sensitive, por lo que lo vamos a almacenar en minusculas, independientemente
//   de como lo ingrese el usuario. Agregar la validacion necesaria para que en caso de que el usuario no cumpla con las concidiones,
//   se muestre un mensaje de error.
//   Si el nombre de usuario es ingresado correctamente, le vamos a pedir al usuario que ingrese una contrasena, la que tiene que tener
//   por lo menos 6 caracteres. La contrasena tiene que ser case sensitive, por lo que se respetan las mayusculas y minusculas segun lo ingrese
//   el usuario.
//   En caso de que la contrasena no cumpla con el requisito anterior, se debe mostrar un mensaje de error. De lo contrario, se debe mostrar un
//   mensaje de exito informando al usuario que se completo el registro. (OTRA PISTA: Para ver como validar la longitud de un string, pueden ver el siguiente
//     enlace: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length )

/*2) LOGIN

  Partiendo de la base del punto anterior, en caso de que se complete el registro, vamos a mostrarle un mensaje al usuario preguntandole
  si desea iniciar sesion. En caso de que el usuario haga click en aceptar, vamos a pedirle que ingrese su nombre de usuario y luego su contrasena
  Si alguno de los datos ingresados no coinciden con los informados al momento del registro, le vamos a mostrar un mensaje de error al usuario.
  Caso contrario, le mostraremos un mensaje que diga que el login fue exitoso. Recordar el tema de normalizar los inputs en caso de que sea necesario,
  para poder hacer la comparacion contra los valores almacenados.

/*3) EXTRA
  Tomando los ejercicios anteriores, los vamos a modificar para que, en el caso de que cualquiera de las validaciones anteriores arroje un error
  el programa vuelva a pedir al usuario la informacion solicitada en ese punto. Tener en cuenta que el usuario podra dar por terminado el programa
  tocando el boton de cancelar al momento en que se le pide ingresar un dato o se le consulta si desea registrarse o iniciar sesion.
*/

let isRegistered, registerUserName, registerPassword;

const wishesToRegister = confirm(
  "Bienvenido al sitio. Haz click en OK para registrarte"
);

do {
  if (wishesToRegister) {
    if (!registerUserName) {
      registerUserName = prompt("Ingresa tu nombre de usuario");
    }

    if (registerUserName.length >= 3) {
      registerUserName = registerUserName.toLowerCase();

      registerPassword = prompt("Ingresa tu password");

      if (registerPassword.length >= 6) {
        alert("El registro se completo exitosamente");
        isRegistered = true;
      } else {
        alert("El password tiene que tener por lo menos 6 caracteres");
        registerPassword = null;
      }
    } else {
      alert("El nombre de usuario tiene que tener por lo menos 3 caracteres");
    }
  } else {
    alert("OK, te esperamos cuando gustes");
  }
} while (wishesToRegister && (!registerPassword || !registerUserName));

//////////////

let loginPassword, loginUsername;

if (isRegistered) {
  let wishesToLogin = confirm("Haz click en OK para iniciar sesion");

  do {
    if (wishesToLogin) {
      loginUsername = prompt("Ingresa tu usuario");

      if (loginUsername !== null) {
        loginUsername = loginUsername.toLowerCase();
        loginPassword = prompt("Ingresa tu password");

        if (loginPassword === null) {
          wishesToLogin = false;
        } else if (
          loginUsername === registerUserName &&
          loginPassword === registerPassword
        ) {
          alert("Login Exitoso!");
        } else {
          alert("Alguno de los datos ingresados es incorrecto");
          loginPassword = null;
          loginUsername = null;
        }
      } else {
        wishesToLogin = false;
      }
    } else {
      alert("Vuelve cuando gustes");
    }
  } while (wishesToLogin && (!loginUsername || !loginPassword));
  
}
