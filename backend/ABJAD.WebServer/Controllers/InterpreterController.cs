using ABJAD.InterpretEngine;
using ABJAD.IO;
using ABJAD.LexEngine;
using ABJAD.Models.Exceptions;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ABJAD.WebServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InterpreterController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] string code)
        {
            try
            {
                var writer = new Writer(null, null, true);
            
                var lexer = new Lexer(code);
                var tokens = lexer.Lex();

                var parser = new ParseEngine.Parser(tokens);
                var bindings = parser.Parse();

                var interpreter = new Interpreter(writer);
                interpreter.Interpret(bindings);

                return Ok(writer.GetOutput());

            }
            catch (AbjadException e)
            {
                return BadRequest(new
                {
                    ar = e.ArabicMessage,
                    en = e.EnglishMessage
                });
            }
            catch (Exception e)
            {
                return BadRequest(new
                {
                    ar = "هناك عطلٌ ما.",
                    en = "Error Occured"
                });
            }
        }
    }
}
