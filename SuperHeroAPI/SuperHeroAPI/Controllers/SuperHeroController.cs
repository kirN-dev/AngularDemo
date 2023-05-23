using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperHeroAPI.Data;
using System;

namespace SuperHeroAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class SuperHeroController : ControllerBase
	{
		private readonly DataContext _context;

		public SuperHeroController(DataContext context)
        {
			_context = context;
		}

        [HttpGet]
		public async Task<ActionResult<List<SuperHero>>> GetSuperHero()
		{
			return Ok(await _context.SuperHeroes.ToListAsync());
		}
	}
}
