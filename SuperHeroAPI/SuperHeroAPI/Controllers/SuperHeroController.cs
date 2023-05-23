using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace SuperHeroAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class SuperHeroController : ControllerBase
	{
		[HttpGet]
		public async Task<ActionResult<List<SuperHero>>> GetSuperHero()
		{
			return new List<SuperHero>
			{
				new SuperHero
				{
					Id = 1,
					Name = "Spider Man",
					FirstName = "Peter",
					LastName = "Parker",
					Place = "New York City"
				},
				new SuperHero
				{
					Id = 2,
					Name = "Batman",
					FirstName = "Bruce",
					LastName = "Wayne",
					Place = "Gotham City"
				}
			};
		}
	}
}
