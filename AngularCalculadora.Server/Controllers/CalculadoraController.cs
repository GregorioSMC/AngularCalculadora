using Microsoft.AspNetCore.Mvc;

namespace AngularCalculadora.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CalculadoraController : ControllerBase
    {
        [HttpGet("operar")]
        public IActionResult Operar(double num1, double num2, string operacion)
        {
            double resultado = 0;

            switch (operacion)
            {
                case "suma":
                    resultado = num1 + num2;
                    break;
                case "resta":
                    resultado = num1 - num2;
                    break;
                case "multiplicacion":
                    resultado = num1 * num2;
                    break;
                case "division":
                    if (num2 != 0)
                    {
                        resultado = num1 / num2;
                    }
                    else
                    {
                        return BadRequest("No se puede dividir por cero.");
                    }
                    break;
                case "factorial":

                    int factorialTemporal = 1;
                    int factorialInput = Convert.ToInt32(num1);

                    if (factorialInput > 0)
                    {
                        while (factorialInput > 1) 
                        {
                            factorialTemporal = factorialTemporal * factorialInput;
                            factorialInput = factorialInput - 1;
                        }
                        resultado = factorialTemporal;
                    }
                    else 
                    {
                        return BadRequest("No es un valor valido.");
                    }

                    break;
                default:
                    return BadRequest("Operación no válida.");
            }

            return Ok(new { resultado });
        }
    }
}
