
// =========================== NAVEGACION ============================//

const botonPagReservas = document.getElementById("generarReserva")

botonPagReservas.addEventListener("click", () => {

    location.href = "reserva.html"

})

// ======================= MODAL NEWSLETTER =========================//

const contenedorRegistro = document.getElementsByClassName('modal-registro')[0]

const botonRegistro = document.getElementById('newsletter')

botonRegistro.addEventListener("click", () => {

    contenedorRegistro.classList.toggle("registro-active")

})

const botonCerrarRegistro = document.getElementById('cerrarRegistro')

botonCerrarRegistro.addEventListener('click', ()=>{

    contenedorRegistro.classList.toggle('registro-active')

})



//================= CONFIRMAR REGISTRO NEWSLETTER =====================//


const confirmarRegistro = document.getElementById("completar-registro")

const inputNombre = document.getElementById("input-nombre")
const inputEdad = document.getElementById("input-edad")
const inputEmail = document.getElementById("input-email")
const actividad = document.getElementById("actividad")

// ============optimización - 07.01.2021================

let inputEdadParseado = Number (inputEdad.value)

const insertarEdad = inputEdad.addEventListener("change", () => {
        
    if (isNaN(inputEdadParseado)|| inputEdadParseado < 1) {
       alert("oops! tu edad debe ser un número mayor a 0")
    
    }else {
        console.log("edad correcta")
    }    
})

confirmarRegistro.addEventListener("click" , () => {

          if (inputNombre.value.length < 1 || inputEdad.value.length < 1 || inputEmail.value.length < 1 || inputEdadParseado < 1 || isNaN(inputEdadParseado)) {
    
                contenedorRegistro.classList.toggle('registro-active') 
                document.getElementById("formato-registro").reset()  
    
                Swal.fire({
                      icon: 'error',
                      title: 'Ay no! Ocurrió un Error...',
                      html: 'Por favor vuelve a intentarlo y recuerda que: <br><br> -(1) Debes llenar todas las casillas <br><br> -(2)El campo de edad es obligatorio y debe ser un número mayor a 0',                     
                            
                })               
            
    
          }else {
    
                contenedorRegistro.classList.toggle('registro-active')   
    
                Swal.fire({
                    title: '<strong><u>Registro Exitoso</u></strong>',
                    icon: 'success',
                    html:
                      '¡En hora buena ' + inputNombre.value +'!. Tu registro al Newsletter ha sido completado correctamente. ' + '<br><br>A partir del mes siguiente empezarás a recibir toda la información reelevante sobre ' + '<strong>' +actividad.value + '</strong>  en México.  ' +
                      '<br><br><h3><strong>¡Gracias por Confiar en Nosotr@s!</strong></h3>' ,
                    showCloseButton: true,        
                    focusConfirm: false,
                    confirmButtonText:
                      '<i class="fa fa-thumbs-up"></i> Genial!',
                    confirmButtonAriaLabel: 'Thumbs up, great!', 
                })
    
                document.getElementById("formato-registro").reset()
                
    
    
          }
      
    })
    
    
// ============FIND DE optimización - 07.01.2021================ //

    
    

