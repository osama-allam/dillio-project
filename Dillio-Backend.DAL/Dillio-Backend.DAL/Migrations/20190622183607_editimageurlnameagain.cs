using Microsoft.EntityFrameworkCore.Migrations;

namespace Dillio_Backend.DAL.Migrations
{
    public partial class editimageurlnameagain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "Store",
                newName: "Url");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Url",
                table: "Store",
                newName: "ImageUrl");
        }
    }
}
