using Microsoft.EntityFrameworkCore.Migrations;

namespace Dillio_Backend.DAL.Migrations
{
    public partial class editstoreentity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Store",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Store");
        }
    }
}
