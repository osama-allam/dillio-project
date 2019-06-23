using Microsoft.EntityFrameworkCore.Migrations;

namespace Dillio_Backend.DAL.Migrations
{
    public partial class editstoreentityneww : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MyOwnUrl",
                table: "Store");

            migrationBuilder.AddColumn<int>(
                name: "StarRating",
                table: "Store",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StarRating",
                table: "Store");

            migrationBuilder.AddColumn<string>(
                name: "MyOwnUrl",
                table: "Store",
                nullable: true);
        }
    }
}
