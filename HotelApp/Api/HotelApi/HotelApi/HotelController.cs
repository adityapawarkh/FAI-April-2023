using System.Collections.Generic;
using System.Linq;
using HotelApi;
using Microsoft.AspNetCore.Mvc;

namespace YourProjectName.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelController : ControllerBase
    {
        private static Hotel hotel = new Hotel
        {
            Name = "Hotel Shivaji"
        };

        private static List<MenuItem> menuItems = new List<MenuItem>();

        private static int itemIdCounter = 1;

        [HttpGet]
        public ActionResult<Hotel> GetHotel()
        {
            return Ok(hotel);
        }

        [HttpGet("menu")]
        public ActionResult<IEnumerable<MenuItem>> GetMenuItems()
        {
            return Ok(menuItems);
        }

        [HttpPost("menu")]
        public ActionResult<MenuItem> AddMenuItem(MenuItem menuItem)
        {
            menuItem.Id = itemIdCounter++;
            menuItems.Add(menuItem);
            return CreatedAtAction(nameof(GetMenuItem), new { id = menuItem.Id }, menuItem);
        }

        [HttpGet("menu/{id}")]
        public ActionResult<MenuItem> GetMenuItem(int id)
        {
            var menuItem = menuItems.FirstOrDefault(item => item.Id == id);
            if (menuItem == null)
                return NotFound();

            return Ok(menuItem);
        }

        // Implement other actions for updating and deleting menu items
    }
}
